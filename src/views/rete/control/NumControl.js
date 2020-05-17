import Rete from 'rete'
import NumControlView from './NumControlView'

class NumControl extends Rete.Control {
  constructor (emitter, key, readonly) {
    super(key)
    this.component = NumControlView
    this.props = { emitter, ikey: key, readonly }
  }

  setValue (val) {
    this.vueContext.value = val
  }
}

export default NumControl
