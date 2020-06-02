<template>
  <div>
    <div style="margin-bottom: 16px">
      showLine:
      <a-switch v-model="showLine"/>
      <br/>
      <br/>
      showIcon:
      <a-switch v-model="showIcon"/>
    </div>
    <Tree
      :show-line="showLine"
      :show-icon="showIcon"
      :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']" >
      <a-icon slot="icon" type="carry-out"/>
      <TreeNode key="0-0">
        <a-icon slot="icon" type="carry-out"/>
        <span slot="title" style="color: #1890ff">parent 1</span>
        <TreeNode key="0-0-0" title="parent 1-0">
          <a-icon slot="icon" type="carry-out"/>
          <TreeNode key="0-0-0-0" title="leaf">
            <a-icon slot="icon" type="carry-out"/>
          </TreeNode>
          <TreeNode key="0-0-0-1" title="leaf">
            <a-icon slot="icon" type="carry-out"/>
          </TreeNode>
        </TreeNode>
        <TreeNode key="0-0-1" title="parent 1-1">
          <a-icon slot="icon" type="carry-out"/>
          <TreeNode key="0-0-1-0" title="leaf">
            <a-icon slot="icon" type="carry-out"/>
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </Tree>
  </div>
</template>
<script>
  import { Tree } from 'ant-design-vue'

  const { TreeNode } = Tree

  export default {
    name: 'TreeTraining',
    components: { Tree, TreeNode },
    data () {
      return {
        showLine: true,
        showIcon: true
      }
    }
  }
</script>
