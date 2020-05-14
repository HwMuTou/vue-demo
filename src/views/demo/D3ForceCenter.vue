<template>
  <div>
    <H1>D3ForceCenter Hello World.</H1>
  </div>
</template>

<script>
  import * as d3 from 'd3'

  export default {
    name: 'D3ForceCenter',
    mounted: function () {
      const width = 400
      const height = 400

      const nodes = [{ name: '桂林' },
        { name: '广州' },
        { name: '厦门' },
        { name: '杭州' },
        { name: '上海' },
        { name: '青岛' },
        { name: '桂林' },
        { name: '广州' }]

      const force = d3.forceSimulation(nodes)
        .force('Radial', d3.forceRadial(width / 2, height / 2))
        .force('charge', d3.forceManyBody().strength(-30))
        .force('center', d3.forceCenter().x(width / 2).y(height / 2))
        .force('collide', d3.forceCollide(20))

      const svg = d3.select(this.$el).append('svg')
        .attr('width', width)
        .attr('height', height)

      const color = d3.scaleOrdinal(d3.schemePaired)

      // 添加节点
      const svgNodes = svg.selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('r', 10)
        .style('fill', function (d, i) {
          return color(i)
        }).call(d3.drag())

      force.on('tick', function () { // 对于每一个时间间隔
        // 更新节点坐标
        svgNodes.attr('cx', function (d) {
          return d.x
        }).attr('cy', function (d) {
          return d.y
        })
      })
    }
  }
</script>
