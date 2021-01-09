<template >
  <v-container>
  <v-card
    color="transparent"
    outlined
    >
		  <v-card-title class="justify-center"> <h2 class="titleName">Solicitud de Permiso</h2></v-card-title>
		   <v-divider/>
		   
		  <v-card-text>
      <!--                     COMIENZO DEL FORMULARIO                         -->
			<v-form
        ref="form"
        v-model="valid"
        >
        <v-row 
          justify="space-around" 
          no-gutters>

          <!-- CAMPO MOTIVO -->
          <v-col cols="11" md="9">
            <v-select
              v-model="temporaryPassData.reason"
              outlined
              background-color="white"
              label="Motivo del permiso"
              prepend-icon="mdi-text-subject"
              :rules="[rules.required]"
              :items="items"
              item-value="pass"
              single-line
            >
            <template slot="selection" slot-scope="data">
              <!-- HTML that describe how select should render selected items -->
              {{ data.item.id }} - {{ data.item.pass}}
            </template>
            <template slot="item" slot-scope="data">
              <!-- HTML that describe how select should render items when the select is open -->
              {{ data.item.id }} - {{ data.item.pass}}
            </template>
            </v-select>
          </v-col> 
          
          <!-- CAMPO NOMBRE -->
          <v-col cols="11" md="5">
            <v-text-field
            v-model="temporaryPassData.name"
            label="Nombre"
            outlined
            name="name"
            prepend-icon="mdi-account-outline"
            type="text"
            :rules="[rules.required, rules.alpha]"
            background-color="white"
            ></v-text-field>
          </v-col>

          <!-- CAMPO APELLIDO -->
          <v-col cols="11" md="5">
            <v-text-field
            v-model="temporaryPassData.lastname"
            label="Apellido"
            outlined
            name="lastname"
            prepend-icon="mdi-account-details-outline"
            :rules="[rules.required, rules.alpha]"
            background-color="white"
            ></v-text-field>
          </v-col>  

          <!-- CAMPO RUT -->
          <v-col cols="11" md="5">
            <v-text-field
            v-model="temporaryPassData.rut"
            label="Rut"
            @input="formatRut()"
            outlined
            name="rut"
            prepend-icon="mdi-card-account-details-outline"
            :rules="[rules.required, rules.rut]"
            background-color="white"
            ></v-text-field>
          </v-col>

          <!-- CAMPO CORREO -->
          <v-col cols="11" md="5">
            <v-text-field
            v-model="temporaryPassData.email"
            label="Correo"
            outlined
            name="login"
            prepend-icon="mdi-email-outline"
            type="text"
            :rules="[rules.required, rules.email]"
            background-color="white"
            ></v-text-field>
          </v-col>

          <!--        CAMPO DIRECCIÓN          -->
          <v-col class="columna" cols="11" md="5">
            <v-text-field
            v-model="temporaryPassData.address"
            label="Dirección Completa"
            outlined
            name="address"
            prepend-icon="mdi-map-marker"
            type="text"
            :rules="[rules.required]"
            background-color="white"
            ></v-text-field>
          </v-col>
          <v-col cols="11" md="5">
          </v-col>
        </v-row> 
			</v-form>
		  </v-card-text>
      <v-card-actions>
        <v-row justify="center" justify-sm="end">
          <v-btn
            x-large  
            elevation="3"
            dark
            color="primary"
            @click="validate"
            :loading="loading"
            >
          <v-icon left>
            mdi-send
          </v-icon>
            Enviar Formulario
          </v-btn>
        </v-row>
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
      valid: true,
      loading: false,
      
      //Temporary pass information
      temporaryPassData:{
        name:'',
        lastname:'',
        email: '',
        reason:'',
        rut:'',
        address:'',
      },
  
      rules: {
        required: value => !!value || 'Campo Requerido.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Correo no válido.'
        },
        alpha: value => this.haveNumber(value) || 'Ha ingresado un caracter no válido',
        rut: value => this.ValidaRut(value) || 'El rut ingresado no es válido',
      }
      
	  }
  },
  computed: {
    items() {
      return motives.map((item) => {
        return item;
      })
    }
  },
	methods:{
    ...mapMutations(['setCurrentStep','setTemporaryPassData','setSnackBar']),
    validate () {
        if(this.$refs.form.validate()){
          console.log("Formulario re válido")
          this.loading = true
          this.sendForm()
        }
      },
      haveNumber(name){
        if (typeof(name) != "undefined") {
          var numeros="0123456789?¿@#!¡&${}[]()%?*/.,_"
          var texto = name.toString()
          for(var i=0; i<texto.length; i++){
              if (numeros.indexOf(texto.charAt(i),0)!=-1){
                return false;
              }
          }
          return true;
        }
      },
      async sendForm(){
        await axios.post('http://34.120.129.229/virtual_platform/newTemporarypass', 
        this.temporaryPassData
        ).then(response => {
          this.setSnackBar({color:"success", msg:"Se ha generado el permiso exitosamente"})
          console.log('temporary pass data: ' + this.temporaryPassData)
          console.log(this.temporaryPassData)
          this.setTemporaryPassData(response.data)
          console.log('temporary pass data: ' + response.data)
          console.log(response.data)
          this.$refs.form.reset()
          this.loading = false
          this.setCurrentStep(2)

        }).catch(e => { 
          console.log(e); 
          this.setSnackBar({color:"error", msg:"Ha ocurrido un error"})
          this.loading = false
          
          });
      },
      ValidaRut(rutCompleto) {
        rutCompleto = rutCompleto.replace(/\./g, '')
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
          return false;
        var tmp 	= rutCompleto.split('-')
        var digv	= tmp[1]
        var rut 	= tmp[0]
        if ( digv == 'K' ) 
          digv = 'k' 

        var M=0, S=1;
        for(;rut;rut=Math.floor(rut/10))
          S=(S+rut%10*(9-M++%6))%11

        var realDigv = S?S-1:'k';
        return digv == realDigv
    },
    formatRut(){
      if(this.temporaryPassData.rut != '' && this.temporaryPassData.rut != null && this.temporaryPassData.rut != 'undefined'){
        let value = this.temporaryPassData.rut.replace(/[.-]/g, '').replace( /^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, '$1.$2.$3-$4')
        this.temporaryPassData.rut = value
      }
    }
	},
	mounted(){
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
 
</style>