import Rete from 'rete'
import { numSocket } from '../SocketTypes'
import _ from 'lodash'
import NumControl from '@/views/rete/control/NumControl'

class SumComponent extends Rete.Component {
  constructor () {
    super('Sum')
  }

  builder (node) {
    const input = new Rete.Input('numbers', 'Numbers', numSocket, true)
    const output = new Rete.Output('sum', 'Sum', numSocket, true)

    node.addInput(input).addOutput(output)
    node.addControl(new NumControl(this.editor, 'sum', true))
  }

  worker (node, inputs, outputs, args) {
    const numbers = inputs['numbers'].map(it => _.toNumber(it))
    outputs['sum'] = _.sum(numbers)
    this.editor.nodes.find(n => n.id === node.id).controls.get('sum').setValue(outputs['sum'])
  }
}

export default SumComponent
