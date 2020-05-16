import Rete from 'rete'
import { numSocket } from '../SocketTypes'

export class NumberComponent extends Rete.Component {
  constructor () {
    super('Number')
  }

  builder (node) {
    const out = new Rete.Output('number', 'Number', numSocket, true)
    node.addOutput(out)
  }

  worker (node, inputs, outputs, args) {
    outputs['number'] = 4
  }
}

export default NumberComponent
