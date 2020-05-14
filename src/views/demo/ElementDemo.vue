<template>
  <div>
    <Row>
      <Button :span="4">默认按钮</Button>
      <Button :span="4" type="primary">主要按钮</Button>
      <Button :span="4" type="success">成功按钮</Button>
      <Button :span="4" type="info">信息按钮</Button>
      <Button :span="4" type="warning">警告按钮</Button>
      <Button :span="4" type="danger">危险按钮</Button>
    </Row>

    <Row>
      <Button :span="4">默认按钮</Button>
      <Button :span="4" type="primary">主要按钮</Button>
      <Button :span="4" type="success">成功按钮</Button>
      <Button :span="4" type="info">信息按钮</Button>
      <Button :span="4" type="warning">警告按钮</Button>
      <Button :span="4" type="danger">危险按钮</Button>
    </Row>
  </div>
</template>

<script>
  import { Button, Row } from 'ant-design-vue'

  export default {
    name: 'ElementDemo',
    components: {
      Button, Row
    }
  }
</script>
