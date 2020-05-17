import Rete from 'rete'
import { numSocket } from '../SocketTypes'
import NumControl from '@/views/rete/control/NumControl'

export class NumberComponent extends Rete.Component {
  constructor () {
    super('Number')
  }

  builder (node) {
    const out = new Rete.Output('number', 'Number', numSocket, true)

    node.addControl(new NumControl(this.editor, 'number')).addOutput(out)
  }

  worker (node, inputs, outputs, args) {
    outputs['number'] = node.data.number
  }
}

export default NumberComponent
