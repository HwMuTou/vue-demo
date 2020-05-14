<template>
  <div style="height: 400px">{{ start }}</div>
</template>

<script>
  import Rete from 'rete'
  import ConnectionPlugin from 'rete-connection-plugin'
  import VueRenderPlugin from 'rete-vue-render-plugin'
  import ContextMenuPlugin from 'rete-context-menu-plugin'
  import AreaPlugin from 'rete-area-plugin'
  import CommentPlugin from 'rete-comment-plugin'
  import HistoryPlugin from 'rete-history-plugin'
  import MinimapPlugin from 'rete-minimap-plugin'
  import LifecyclePlugin from 'rete-lifecycle-plugin'

  import ImpalaComponent from '@/views/rete/NumberComponent'
  import SumComponent from '@/views/rete/SumComponent'
  import { numSocket } from '@/views/rete/SocketTypes'

  export default {
    name: 'ReteView',
    data () {
      return {
        start: 'Hello'
      }
    },
    mounted () {
      const container = this.$el

      const editor = new Rete.NodeEditor('demo@0.1.0', container)

      editor.use(ConnectionPlugin)
      editor.use(VueRenderPlugin)
      editor.use(ContextMenuPlugin)
      editor.use(AreaPlugin, {
        background: true,
        snap: true,
        scaleExtent: { min: 0.1, max: 1 },
        translateExtent: { width: 10, height: 10 }
      })
      editor.use(MinimapPlugin)
      editor.use(CommentPlugin)
      editor.use(HistoryPlugin)
      editor.use(LifecyclePlugin)

      const impala = new ImpalaComponent()
      editor.register(impala)

      const sumComponent = new SumComponent()
      editor.register(sumComponent)

      impala.createNode({})
        .then(value => {
          value.addOutput(new Rete.Output('num6', 'Number', numSocket))
          value.addOutput(new Rete.Output('num7', 'String', numSocket))
          editor.addNode(value)
        }).then(() => {
        editor.view.resize()
        AreaPlugin.zoomAt(editor)

        let enableZoom = false
        editor.on('keydown', (e) => {
          console.log(e)
          if (e.ctrlKey) {
            enableZoom = true
          }
        })
        editor.on('keyup', (e) => {
          if (e.ctrlKey) {
            enableZoom = false
          }
        })
        editor.on('zoom', (e) => {
          if (!enableZoom) {
            return false
          }
        })
        editor.trigger('process')
      })
    }
  }
</script>
