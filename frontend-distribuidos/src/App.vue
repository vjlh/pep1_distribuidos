<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <h1 class="titlePage">Comisaría Virtual</h1>

    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.titlePage{
	font-family: 'Lato', sans-serif;
	word-break: normal; 
	font-size: 40px;
	line-height : 20px;
	font-weight: 400;
	color: #ffffff;
  }
</style>
