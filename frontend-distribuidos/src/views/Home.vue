<template>
  <div class="home">
      <v-container
        fluid
        class="background"
        >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
          cols="11"
          sm="8"
          md="9"
          class="glass"
          >
      
        <Form v-if="currentStep == 1"/>
        <Verification v-else-if="currentStep == 2"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Form from '../components/Form'
import Verification from '../components/Verification'
import {mapState,mapMutations} from 'vuex'

export default {
  name: 'Home',
  components: {
    Form,
    Verification
  },
  computed: {
    ...mapState(['currentStep']),
  },
  mounted() {
    this.setCurrentStep(1)
  },
  methods: {
    ...mapMutations(['setCurrentStep']),
  },
}
</script>

<style scoped lang="css">
  .glass {
	width: 100%;
	height: 100%;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);   
	border-radius: 5px;
	background-color: rgba(255, 255, 255, .76);
	backdrop-filter: blur(5px);
  }
  .background{
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	position: absolute;
	background-image: url(../assets/background.png);
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
  }
  
  .titleName{
	font-family: 'Lato', sans-serif;
	word-break: normal; 
	font-size: 30px;
	line-height : 20px;
	font-weight: 300;
	color: #474646;
  }
 
</style>
