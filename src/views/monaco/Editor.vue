<template>
  <div class="m-editor">
    <MonacoEditor :value="value"/>
  </div>
</template>

<script>
  import MonacoEditor from '@/components/Editor/MonacoEditor'

  export default {
    name: 'Editor',
    data: function () {
return {
      value: 'CREATE TABLE shop (\n' +
        '    article INT(4) UNSIGNED ZEROFILL DEFAULT \'0000\' NOT NULL,\n' +
        '    dealer  CHAR(20)                 DEFAULT \'\'     NOT NULL,\n' +
        '    price   DOUBLE(16,2)             DEFAULT \'0.00\' NOT NULL,\n' +
        '    PRIMARY KEY(article, dealer));\n' +
        'INSERT INTO shop VALUES\n' +
        '    (1,\'A\',3.45),(1,\'B\',3.99),(2,\'A\',10.99),(3,\'B\',1.45),\n' +
        '    (3,\'C\',1.69),(3,\'D\',1.25),(4,\'D\',19.95);'
    }
},
    components: {
      MonacoEditor
    }
  }
</script>

<style scoped>

  .m-editor {
    position: relative;
    width: 100%;
    height: 70vh;
    overflow: hidden;
  }
</style>
