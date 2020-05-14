<template>
  <div>
    <H1>D3GeoMapChart Hello World.</H1>
  </div>
</template>

<script>
  import * as d3 from 'd3'
  import { china } from '@/api/map'

  export default {
    name: 'D3GeoMapChart',
    mounted: function () {
      const width = 1000
      const height = 1000

      const projection = d3.geoMercator()
        .center([107, 31])
        .scale(850)
        .translate([width / 2, height / 2])

      const path = d3.geoPath(projection)

      const svg = d3.select(this.$el).append('svg')
        .attr('width', width)
        .attr('height', height)

      const color = d3.scaleOrdinal(d3.schemePaired)

      china().then((response) => {
        const data = response.result
        console.log(data)
        svg.selectAll('path')
          .data(data.features)
          .enter()
          .append('path')
          .attr('stroke', '#000')
          .attr('stroke-width', 1)
          .attr('fill', function (d, i) {
            return color(i)
          })
          .attr('d', path) // 使用地理路径生成器
          .on('mouseover', function () {
            d3.select(this)
              .attr('fill', 'yellow')
          })
          .on('mouseout', function (d, i) {
            d3.select(this)
              .attr('fill', color(i))
          })
      })
    }
  }
</script>
