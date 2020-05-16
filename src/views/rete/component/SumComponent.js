import Rete from 'rete'
import { numSocket } from '../SocketTypes'

class SumComponent extends Rete.Component {
  constructor () {
    super('Sum')
  }

  builder (node) {
    const input = new Rete.Input('numbers', 'Numbers', numSocket, true)
    node.addInput(input)

    const output = new Rete.Output('sum', 'Sum', numSocket, true)
    node.addOutput(output)
  }

  worker (node, inputs, outputs, args) {
    let sum = 0
    inputs['numbers'].forEach(it => {
      sum = sum + it
    })
    outputs['sum'] = sum
  }
}

export default SumComponent
