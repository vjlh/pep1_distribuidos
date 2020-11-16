<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Form msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    Form
  }
}
</script>
