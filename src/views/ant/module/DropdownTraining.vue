<template>
  <a-dropdown>
    <a-button type="primary">
      Dropdown
      <a-icon type="down"/>
    </a-button>
    <a-menu slot="overlay">
      <a-menu-item v-for="icon in icons" :key="icon">
        <a-button :icon="icon" type="dashed"/>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
  export default {
    name: 'DropdownTraining',
    data () {
      return {
        icons: ['android', 'apple', 'windows', 'ie', 'chrome', 'github', 'aliwangwang']
      }
    }
  }
</script>
