<template>
  <div>
    <H1>D3PieChart Hello World.</H1>
  </div>
</template>

<script>
  import * as d3 from 'd3'

  export default {
    name: 'D3PieChart',
    computed: {
      id: function () {
        return 'svg' + Math.random().toString(36).split('.')[1]
      }
    },
    mounted: function () {
      const width = 400
      const height = 400

      const dataset = [30, 10, 43, 55, 13]

      const piedata = d3.pie()(dataset)

      const outerRadius = 150 // 外半径
      const innerRadius = 0 // 内半径，为0则中间没有空白

      const arc = d3.arc() // 弧生成器
        .innerRadius(innerRadius) // 设置内半径
        .outerRadius(outerRadius) // 设置外半径

      const svg = d3.select(this.$el).append('svg')
        .attr('width', width)
        .attr('height', height)

      const arcs = svg.selectAll('g')
        .data(piedata)
        .enter()
        .append('g')
        .attr('transform', 'translate(' + (width / 2) + ',' + (width / 2) + ')')

      const color = d3.scaleOrdinal(d3.schemeCategory10)

      arcs.append('path')
        .attr('fill', function (d, i) {
          return color(i)
        })
        .attr('d', function (d) {
          return arc(d) // 调用弧生成器，得到路径值
        })

      arcs.append('text')
        .attr('transform', function (d) {
          return 'translate(' + arc.centroid(d) + ')'
        })
        .attr('text-anchor', 'middle')
        .text(function (d) {
          return d.data
        })
    }
  }
</script>
