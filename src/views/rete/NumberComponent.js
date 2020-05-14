import Rete from 'rete'
import { numSocket } from './SocketTypes'

class ImpalaComponent extends Rete.Component {
  constructor () {
    super('Impala')
  }

  builder (node) {
    const out = new Rete.Output('num_out', 'Number', numSocket, true)

    node.addOutput(out)
  }

  worker (node, inputs, outputs) {
    outputs['num'] = 4
  }
}

export default ImpalaComponent
