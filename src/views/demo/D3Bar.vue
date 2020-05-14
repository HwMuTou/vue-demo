<template>
  <div>
    <H1>D3Bar Hello World.</H1>
  </div>
</template>

<script>
  import * as d3 from 'd3'

  export default {
    name: 'D3Bar',
    computed: {},
    methods: {},
    mounted: function () {
      var width = 400
      var height = 400

      const svg = d3.select(this.$el).append('svg')
        .attr('width', width)
        .attr('height', height)
      // 画布周边的空白
      const padding = { left: 30, right: 30, top: 20, bottom: 20 }

      // 定义一个数组
      const dataset = [10, 20, 30, 40, 33, 24, 12, 5]

      // x轴的比例尺
      const xScale = d3.scaleBand()
        .domain(d3.range(dataset.length))
        .rangeRound([0, width - padding.left - padding.right])

      // y轴的比例尺
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([height - padding.top - padding.bottom, 0])

      // 定义x轴
      const xAxis = d3.axisBottom()
        .scale(xScale)

      // 定义y轴
      const yAxis = d3.axisLeft()
        .scale(yScale)

      // 矩形之间的空白
      const rectPadding = 4

      // 添加矩形元素
      svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('fill', 'steelblue')
        .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
        .attr('x', function (d, i) {
          return xScale(i) + rectPadding / 2
        })
        .attr('y', function (d) {
          return yScale(d)
        })
        .attr('width', xScale.bandwidth() - rectPadding)
        .attr('height', function (d) {
          return height - padding.top - padding.bottom - yScale(d)
        })

      // 添加文字元素
      svg.selectAll('text')
        .data(dataset)
        .enter()
        .append('text')
        .attr('fill', 'white')
        .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
        .attr('x', function (d, i) {
          return xScale(i) + rectPadding / 2
        })
        .attr('y', function (d) {
          return yScale(d)
        })
        .attr('dx', function () {
          return (xScale.bandwidth() - rectPadding) / 2
        })
        .attr('dy', function () {
          return 20
        })
        .text(function (d) {
          return d
        })

      // 添加x轴
      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom) + ')')
        .call(xAxis)

      // 添加y轴
      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
        .call(yAxis)
    }
  }
</script>

<style scoped>
  .axis path,
  .axis line {
    fill: none;
    stroke: black;
    shape-rendering: crispEdges;
  }

  .axis text {
    font-family: sans-serif;
    font-size: 11px;
  }
</style>
