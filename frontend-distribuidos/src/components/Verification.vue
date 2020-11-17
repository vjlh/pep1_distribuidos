<template >	
  <v-container>
  <v-card 
    outlined
    >
    <v-card-title class="justify-center"> <h2 class="titleName">Permiso Generado Exitósamente</h2></v-card-title>
    <v-divider/>
    
    <v-card-text>
      <v-subheader>Información del permiso</v-subheader>

      <v-row justify="center">
        <v-col cols="1">
          <v-icon color="primary">mdi-identifier</v-icon>
        </v-col>
        <v-col cols="3">
          <h2 class="dataStyle">ID:</h2>
        </v-col>
        <v-col cols="7">
          <h2 class="itemStyle">{{temporaryPassData.id}}</h2>
        </v-col>
      </v-row>

      <v-row justify="center">    
          <v-col cols="1">
            <v-icon color="primary">mdi-text-short</v-icon>
          </v-col>
          <v-col cols="3">
            <h2 class="dataStyle">Motivo:</h2>
          </v-col>
          <v-col cols="7">
            <h2 class="itemStyle">{{temporaryPassData.reason}}</h2>
          </v-col>
      </v-row>    
      <v-row justify="center">
        <v-col cols="1">
          <v-icon color="primary">mdi-calendar-outline</v-icon>
        </v-col>
        <v-col cols="3">
          <h2 class="dataStyle">Fecha:</h2>
        </v-col>
        <v-col cols="7">
          <h2 class="itemStyle">{{startPass[0]}}</h2>
        </v-col>
      </v-row>
      <v-row justify="center">
          <v-col cols="1">
            <v-icon color="primary">mdi-clock-start</v-icon>
          </v-col>
          <v-col cols="3">
            <h2 class="dataStyle">Hora de inicio:</h2>
          </v-col>
          <v-col cols="7">
            <h2 class="itemStyle">{{startPass[1].split('.')[0]}}</h2>
          </v-col>
      </v-row>    
      <v-row justify="center">
          <v-col cols="1">
            <v-icon color="primary">mdi-clock-end</v-icon>
          </v-col>
          <v-col cols="3">
            <h2 class="dataStyle">Hora de término:</h2>
          </v-col>
          <v-col cols="7">
            <h2 class="itemStyle">{{endPass[1].split('.')[0]}}</h2>
          </v-col>
      </v-row>
        <v-subheader>Información del solicitante</v-subheader>

        <v-row justify="center">
          <v-col cols="1">
            <v-icon color="primary">mdi-account-details-outline</v-icon>
          </v-col>
          <v-col cols="3">
            <h2 class="dataStyle">Nombre:</h2>
          </v-col>
          <v-col cols="7">
            <h2 class="itemStyle">{{temporaryPassData.name +" "+ temporaryPassData.lastname}}</h2>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="1">
            <v-icon color="primary">mdi-card-account-details-outline</v-icon>
          </v-col>
          <v-col cols="3">
            <h2 class="dataStyle">Rut:</h2>
          </v-col>
          <v-col cols="7">
            <h2 class="itemStyle">{{temporaryPassData.rut}}</h2>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="1">
            <v-icon color="primary">mdi-map-marker</v-icon>
          </v-col>
          <v-col cols="3">
            <h2 class="dataStyle">Dirección:</h2>
          </v-col>
          <v-col cols="7">
            <h2 class="itemStyle">{{temporaryPassData.address}}</h2>
          </v-col>
        </v-row>
    
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
    <v-btn
        x-large  
        elevation="3"
        dark
        color="primary"
        @click="setCurrentStep(1)"
        :loading="loading"
        >
    <v-icon left>
        mdi-send
    </v-icon>
        Solicitar otro permiso
    </v-btn>
</v-card-actions>
</v-card>
  </v-container>
</template>

<script>
  import { mask } from 'vue-the-mask';
  import motives from "../assets/json/permisos.json";
  import axios from "axios"
  import {mapState,mapMutations} from 'vuex'

  export default {
    directives: {
      mask,
    },
	data() {
	  return {
      loading:false,
      startPass:[],
      endPass:[],
	  }
  },
  computed: {
    ...mapState(['temporaryPassData'])
  },
	methods:{
    ...mapMutations(['setCurrentStep'])
	},
	beforeMount() {
    this.startPass = this.temporaryPassData.requestDate.split('T');
    this.endPass = this.temporaryPassData.limitDate.split('T');
  },
  mounted() {
    axios.post('http://localhost:9090/virtual_platform/sendEmail', this.temporaryPassData)
    .then(response => {
          console.log("Todo correcto")

        }).catch(e => { 
          console.log(e);           
          });
  },
  }
</script>
<style scoped lang="css">
  .titleName{
	font-family: 'Lato', sans-serif;
	word-break: normal; 
	font-size: 30px;
	line-height : 20px;
	font-weight: 300;
	color: #474646;
  }

  .itemStyle{
	font-family: 'Lato', sans-serif;
	word-break: normal; 
	font-weight: 300;
	color: #000000;
  }

  .dataStyle{
	font-family: 'Lato', sans-serif;
	word-break: normal; 
	font-weight: 300;
	color: #575252;
  }
 
</style>