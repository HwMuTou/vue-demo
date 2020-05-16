<template>
  <div style="height: 600px;">
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

      editor.view.resize()
      editor.trigger('process')

      const init = '{"id":"demo@0.1.0","nodes":{"10":{"id":10,"data":{},"inputs":{},"outputs":{"number":{"connections":[{"node":11,"input":"numbers","data":{}}]}},"position":[19,-8],"name":"Number"},"11":{"id":11,"data":{},"inputs":{"numbers":{"connections":[{"node":14,"output":"number","data":{}},{"node":10,"output":"number","data":{}},{"node":27,"output":"number","data":{}}]}},"outputs":{"sum":{"connections":[{"node":26,"input":"numbers","data":{}}]}},"position":[357,-8],"name":"Sum"},"14":{"id":14,"data":{},"inputs":{},"outputs":{"number":{"connections":[{"node":11,"input":"numbers","data":{}},{"node":28,"input":"numbers","data":{}}]}},"position":[18,98],"name":"Number"},"26":{"id":26,"data":{},"inputs":{"numbers":{"connections":[{"node":11,"output":"sum","data":{}},{"node":28,"output":"sum","data":{}},{"node":27,"output":"number","data":{}}]}},"outputs":{},"position":[679,286],"name":"View"},"27":{"id":27,"data":{},"inputs":{},"outputs":{"number":{"connections":[{"node":11,"input":"numbers","data":{}},{"node":28,"input":"numbers","data":{}},{"node":26,"input":"numbers","data":{}}]}},"position":[15,205],"name":"Number"},"28":{"id":28,"data":{},"inputs":{"numbers":{"connections":[{"node":14,"output":"number","data":{}},{"node":27,"output":"number","data":{}}]}},"outputs":{"sum":{"connections":[{"node":26,"input":"numbers","data":{}}]}},"position":[357,134],"name":"Sum"}},"comments":[]}'
      editor.fromJSON(JSON.parse(init))
    }
  }
</script>
