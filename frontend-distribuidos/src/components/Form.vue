<template >
  <v-container
	fluid
	class="background"
  >
  <v-snackbar
	v-model="credentialValidation"
	:color="snackBarColor"
	:timeout="timeout"
	top>
	{{credentialValidationText}}
	<v-btn
	  dark
	  text
	  @click="credentialValidation = false">
	  <v-icon>mdi-close-circle-outline</v-icon>
	</v-btn>
  </v-snackbar>
	<v-row
	  align="center"
	  justify="center"
	>
	  <v-col
		cols="11"
		sm="8"
		md="7"
		class="glass"
	  >
		 
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
          <v-col cols="11" md="8">
            <v-autocomplete
              outlined
              background-color="white"
              label="Motivo del permiso"
              prepend-icon="mdi-text-subject"
              :rules="[rules.required]"
              :items="items"
              item-text="pass"
            ></v-autocomplete>
          </v-col> 
          
          <!-- CAMPO NOMBRE -->
          <v-col cols="11" md="5">
            <v-text-field
            v-model="name"
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
            v-model="lastname"
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
            v-model="pymeRut"
            label="Rut"
            outlined
            name="pymeRut"
            prepend-icon="mdi-card-account-details-outline"
            :rules="[rules.required]"
            background-color="white"
            ></v-text-field>
          </v-col>

          <!-- CAMPO CORREO -->
          <v-col cols="11" md="5">
            <v-text-field
            v-model="email"
            label="Correo"
            outlined
            name="login"
            prepend-icon="mdi-email-outline"
            type="text"
            :rules="[rules.required, rules.email]"
            background-color="white"
            ></v-text-field>
          </v-col> 

          <!--        DATOS PYME          -->

          <v-col cols="11" md="5">
            <v-text-field
            v-model="pymeName"
            label="Dirección"
            outlined
            name="pymeName"
            prepend-icon="mdi-map-marker"
            type="text"
            :rules="[rules.required]"
            background-color="white"
            ></v-text-field>
          </v-col>

          <!-- CAMPO RUT PYME -->
          <v-col cols="11" md="5">
            <v-text-field
            v-model="pymeRut"
            label="Número"
            outlined
            name="pymeRut"
            prepend-icon="mdi-pound-box-outline"
            :rules="[rules.required]"
            background-color="white"
            ></v-text-field>
          </v-col> 

        </v-row>

			</v-form>
		  </v-card-text>
      <v-card-actions>
        <v-row justify="center" justify-sm="end">
          <v-btn
            large  
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mask } from 'vue-the-mask';
  import motives from "../assets/json/permisos.json";
  export default {
    directives: {
      mask,
    },
	data() {
	  return {
      valid: true,
      loading: false,

      show: false,
      //Representant info
      name:'',
      lastname:'',
      email: '',

      phone:'',
      password:'',

      //Pyme
      pymeName:'',
      pymeRut:'',

      
      snackBarColor:'primary',
      credentialValidation: false,
      credentialValidationText: '',
      timeout: 4000,
      phoneMask :"#-####-####",
      rules: {
        required: value => !!value || 'Campo Requerido.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Correo no válido.'
        },
        alpha: value => this.haveNumber(value) || 'Ha ingresado un caracter no válido',
        password: value => (value.length > 8 && value.length < 25) || 'La contraseña debe tener entre 8 y 25 caracteres',
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
    validate () {
        if(this.$refs.form.validate()){
          console.log("Formulario re válido")
          this.loading = true
        }
        else
          console.log("ksi")
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
	},
	mounted(){
	}
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