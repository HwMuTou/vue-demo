<template>
  <div>
    <H1>D3ForceChart Hello World.</H1>
  </div>
</template>

<script>
  import * as d3 from 'd3'

  export default {
    name: 'D3ForceChart',
    mounted: function () {
      const width = 400
      const height = 400

      const nodes = [{ name: '桂林' },
        { name: '广州' },
        { name: '厦门' },
        { name: '杭州' },
        { name: '上海' },
        { name: '青岛' },
        { name: '天津' }]

      const edges = [{ source: 0, target: 1 },
        { source: 0, target: 2 },
        { source: 0, target: 3 },
        { source: 1, target: 4 },
        { source: 1, target: 5 },
        { source: 1, target: 6 },
        { source: 5, target: 6 },
        { source: 4, target: 6 },
        { source: 4, target: 5 }]

      const force = d3.forceSimulation(nodes)
        .force('charge', d3.forceManyBody().strength(-150))
        .force('link', d3.forceLink(edges).distance(150))
        .force('center', d3.forceCenter().x(width / 2).y(height / 2))

      const svg = d3.select(this.$el).append('svg')
        .attr('width', width)
        .attr('height', height)

      // 添加连线
      const svgEdges = svg.selectAll('line')
        .data(edges)
        .enter()
        .append('line')
        .style('stroke', '#ccc')
        .style('stroke-width', 1)

      const color = d3.scaleOrdinal(d3.schemePaired)

      // 添加节点
      const svgNodes = svg.selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('r', 20)
        .style('fill', function (d, i) {
          return color(i)
        }).call(d3.drag())

      // 添加描述节点的文字
      const svgTexts = svg.selectAll('text')
        .data(nodes)
        .enter()
        .append('text')
        .style('fill', 'black')
        .attr('dx', 20)
        .attr('dy', 8)
        .text(function (d) {
          return d.name
        })

      force.on('tick', function () { // 对于每一个时间间隔
        // 更新连线坐标
        svgEdges.attr('x1', function (d) {
          return d.source.x
        })
          .attr('y1', function (d) {
            return d.source.y
          })
          .attr('x2', function (d) {
            return d.target.x
          })
          .attr('y2', function (d) {
            return d.target.y
          })

        // 更新节点坐标
        svgNodes.attr('cx', function (d) {
          return d.x
        })
          .attr('cy', function (d) {
            return d.y
          })

        // 更新文字坐标
        svgTexts.attr('x', function (d) {
          return d.x
        })
          .attr('y', function (d) {
            return d.y
          })
      })
    }
  }
</script>
