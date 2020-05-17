<template>
  <div style="height: 900px;">
  </div>
</template>

<script>
  import Rete from 'rete'
  import ConnectionPlugin from 'rete-connection-plugin'
  import VueRenderPlugin from 'rete-vue-render-plugin'
  import ContextMenuPlugin from 'rete-context-menu-plugin'
  import CommentPlugin from 'rete-comment-plugin'
  import HistoryPlugin from 'rete-history-plugin'
  import MinimapPlugin from 'rete-minimap-plugin'
  import LifecyclePlugin from 'rete-lifecycle-plugin'
  import ProfilerPlugin from 'rete-profiler-plugin'

  import { component } from '@/views/rete/component'

  export default {
    name: 'ReteView',
    mounted () {
      const container = this.$el

      const editor = new Rete.NodeEditor('demo@0.1.0', container)
      const engine = new Rete.Engine('demo@0.1.0')

      editor.use(ConnectionPlugin)
      editor.use(VueRenderPlugin)
      editor.use(ContextMenuPlugin)
      editor.use(MinimapPlugin)
      editor.use(CommentPlugin)
      editor.use(HistoryPlugin)
      editor.use(LifecyclePlugin)

      engine.use(ProfilerPlugin, { editor, enabled: true })

      component.forEach(it => {
        editor.register(it)
        engine.register(it)
      })

      editor.on('process', function () {
        engine.abort().then(() => {
          engine.process(editor.toJSON())
        })
      })

      editor.on('keydown', function (event) {
        if (event.altKey) {
          editor.trigger('process')
        }
        /* TODO export as json string. */
        if (event.ctrlKey) {
          console.log(JSON.stringify(editor.toJSON()))
        }
      })

      const init = '{"id":"demo@0.1.0","nodes":{"10":{"id":10,"data":{"number":2},"inputs":{},"outputs":{"number":{"connections":[{"node":11,"input":"numbers","data":{}}]}},"position":[334.186917242828,121.14341499444892],"name":"Number"},"11":{"id":11,"data":{},"inputs":{"numbers":{"connections":[{"node":10,"output":"number","data":{}},{"node":14,"output":"number","data":{}}]}},"outputs":{"sum":{"connections":[]}},"position":[648.5733487140546,120.77784260346853],"name":"Sum"},"14":{"id":14,"data":{"number":3},"inputs":{},"outputs":{"number":{"connections":[{"node":11,"input":"numbers","data":{}}]}},"position":[330.1146696261254,312.025856353082],"name":"Number"}},"comments":[]}'
      editor.fromJSON(JSON.parse(init)).then(() => {
        editor.view.resize()
        editor.trigger('process')
      })
    }
  }
</script>
