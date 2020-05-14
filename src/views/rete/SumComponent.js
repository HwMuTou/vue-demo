import Rete from 'rete'
import { numSocket } from './SocketTypes'

class SumComponent extends Rete.Component {
  constructor () {
    super('Sum')
  }

  builder (node) {
    const input = new Rete.Input('num_in', 'Number', numSocket)
    node.addInput(input)
  }

  worker (node, inputs, outputs) {
    const input = inputs['num']
    console.log(input)
    outputs['num'] = input
  }
}

export default SumComponent
