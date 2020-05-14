<template>
  <div>
    <H1>D3ForceWebGL Hello World.</H1>
  </div>
</template>

<script>
  import * as d3 from 'd3'
  import {
    Scene,
    OrthographicCamera,
    ShaderMaterial,
    BufferGeometry,
    BufferAttribute,
    Points,
    WebGLRenderer,
    Color
  } from 'three'

  export default {
    name: 'D3ForceWebGL',
    methods: {},
    mounted: function () {
      const dom = this.$el

      const width = dom.offsetWidth
      let height = dom.offsetHeight
      if (height < 650) {
        height = 650
      }
      console.log(width, height)

      const scene = new Scene(dom)
      const camera = new OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 10000)
      scene.add(camera)
      camera.position.z = 1000

      const particles = 1000
      const positions = new Float32Array(particles * 3)
      const dx = 2
      const norm = d3.randomNormal(0, 100)

      for (let i = 0; i < positions.length; i += 3) {
        let x = norm()
        let y = norm()
        let z = norm()

        if (i / 3 < particles / 3) {
          x -= 0.5
          y += 1
          z -= 0.5
        } else if (i / 3 < particles / 3 * 2) {
          x += dx
          y += dx
          z += dx
        } else {
          x -= dx
          y -= dx
          z -= dx
        }
        positions[i] = x
        positions[i + 1] = y
        positions[i + 2] = z
      }
      const sizes = new Float32Array(particles)
      for (let i = 0; i < particles; i++) {
        sizes[i] = Math.random() * 10 + 3
      }

      const cloudMat = new ShaderMaterial({
        uniforms: uniforms(),
        vertexShader: 'attribute float size;uniform float pointSize;uniform vec3 color;uniform float alpha;varying vec4 vColor;varying vec2 myPosition;varying float mySize;void main() {vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);gl_PointSize = size;mySize = size;gl_Position = projectionMatrix * mvPosition;vColor = vec4(color, alpha);}',
        fragmentShader: 'varying vec4 vColor;varying vec2 myPosition;varying float mySize;void main() {float f = 0.5;float d = abs(distance(gl_PointCoord - f, vec2(0.0, 0.0)));float pixelD = (d + 0.5) * mySize;if(pixelD + 0.5 < mySize) {gl_FragColor = vec4(vColor.xyz, 0.9);} else if(pixelD < mySize) {gl_FragColor = vec4(vColor.xyz, 0.1);} else {discard;}}',
        transparent: true
      })

      const cloudGeom = new BufferGeometry()
      const posBuff = new BufferAttribute(positions, 3)
      cloudGeom.setAttribute('position', posBuff)
      cloudGeom.setAttribute('size', new BufferAttribute(sizes, 1))
      cloudGeom.computeBoundingSphere()

      const points = new Points(cloudGeom, cloudMat)
      scene.add(points)

      const renderer = new WebGLRenderer({ alpha: true })
      renderer.setSize(width, height)

      dom.appendChild(renderer.domElement)

      const nodes = d3.range(particles).map(function () {
        return {}
      })
      const mouseNode = { fixed: true }
      nodes.push(mouseNode)

      const charge = d3.forceManyBody([width, height])
        .strength(function (d, i) {
          return -sizes[i] || -500
        })

      const force = d3.forceSimulation(nodes).alphaTarget(1)
        .force('charge', charge)
        .force('x', d3.forceX(width / 2))
        .force('y', d3.forceY(height / 2))

      this.force = force

      let mousePosition = [0, 0]
      force.on('tick', function () {
        mouseNode.x = mousePosition[0]
        mouseNode.y = mousePosition[1]

        for (let i = 0; i + 1 < nodes.length; i++) {
          positions[i * 3] = nodes[i].x - width / 2
          positions[i * 3 + 1] = -(nodes[i].y - height / 2)
        }
        posBuff.needsUpdate = true// Important!
        renderer.render(scene, camera)
      })

      d3.select(this.$el)
        .on('mousemove', updateMouse)
        .call(d3.drag().on('drag', updateMouse))

      function updateMouse () {
        mousePosition = d3.mouse(this)
      }

      function uniforms (opts) {
        opts = opts || {}
        return {
          color: {
            type: 'c',
            value: new Color(0x3498db)
          },
          alpha: { type: 'f', value: 0.7 },
          pointSize: { type: 'f', value: 10 },
          shouldResize: { type: '1i', value: opts.shouldResize ? 1 : 0 }
        }
      }
    },
    destroyed: function () {
      this.force.stop()
    }
  }
</script>
