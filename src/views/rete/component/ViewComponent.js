import Rete from 'rete'
import { numSocket } from '../SocketTypes'

class ViewComponent extends Rete.Component {
  constructor () {
    super('View')
  }

  builder (node) {
    const input = new Rete.Input('numbers', 'Numbers', numSocket, true)
    node.addInput(input)
  }

  worker (node, inputs, outputs, args) {
    inputs['numbers'].forEach(it => {
      console.log(it)
    })
  }
}

export default ViewComponent
