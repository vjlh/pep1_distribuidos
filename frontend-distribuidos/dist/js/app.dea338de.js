(function(a){function e(e){for(var s,i,n=e[0],c=e[1],l=e[2],u=0,m=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(a[s]=c[s]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var a,e=0;e<o.length;e++){for(var t=o[e],s=!0,n=1;n<t.length;n++){var c=t[n];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),a=i(i.s=t[0]))}return a}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=s,i.d=function(a,e,t){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var s in a)i.d(t,s,function(e){return a[e]}.bind(null,s));return t},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=c;o.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"01f7":function(a,e,t){"use strict";t("2067")},2067:function(a,e,t){},"34bb":function(a,e,t){},"56d7":function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-app",[t("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[t("h1",{staticClass:"titlePage"},[a._v("Comisaría Virtual")])]),t("v-main",[t("router-view")],1)],1)},o=[],i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"home"},[t("v-container",{staticClass:"background",attrs:{fluid:""}},[t("v-snackbar",{attrs:{color:a.snackBar.color,timeout:a.snackBar.timeout,top:""},model:{value:a.snackBar.status,callback:function(e){a.$set(a.snackBar,"status",e)},expression:"snackBar.status"}},[a._v(" "+a._s(a.snackBar.msg)+" ")]),t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{staticClass:"glass",attrs:{cols:"11",sm:"8",md:"9"}},[1==a.currentStep?t("Form"):2==a.currentStep?t("Verification"):a._e()],1)],1)],1)],1)},n=[],c=t("5530"),l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-container",[t("v-card",{attrs:{color:"transparent",outlined:""}},[t("v-card-title",{staticClass:"justify-center"},[t("h2",{staticClass:"titleName"},[a._v("Solicitud de Permiso")])]),t("v-divider"),t("v-card-text",[t("v-form",{ref:"form",model:{value:a.valid,callback:function(e){a.valid=e},expression:"valid"}},[t("v-row",{attrs:{justify:"space-around","no-gutters":""}},[t("v-col",{attrs:{cols:"11",md:"9"}},[t("v-select",{attrs:{outlined:"","background-color":"white",label:"Motivo del permiso","prepend-icon":"mdi-text-subject",rules:[a.rules.required],items:a.items,"item-value":"pass","single-line":""},scopedSlots:a._u([{key:"selection",fn:function(e){return[a._v(" "+a._s(e.item.id)+" - "+a._s(e.item.pass)+" ")]}},{key:"item",fn:function(e){return[a._v(" "+a._s(e.item.id)+" - "+a._s(e.item.pass)+" ")]}}]),model:{value:a.temporaryPassData.reason,callback:function(e){a.$set(a.temporaryPassData,"reason",e)},expression:"temporaryPassData.reason"}})],1),t("v-col",{attrs:{cols:"11",md:"5"}},[t("v-text-field",{attrs:{label:"Nombre",outlined:"",name:"name","prepend-icon":"mdi-account-outline",type:"text",rules:[a.rules.required,a.rules.alpha],"background-color":"white"},model:{value:a.temporaryPassData.name,callback:function(e){a.$set(a.temporaryPassData,"name",e)},expression:"temporaryPassData.name"}})],1),t("v-col",{attrs:{cols:"11",md:"5"}},[t("v-text-field",{attrs:{label:"Apellido",outlined:"",name:"lastname","prepend-icon":"mdi-account-details-outline",rules:[a.rules.required,a.rules.alpha],"background-color":"white"},model:{value:a.temporaryPassData.lastname,callback:function(e){a.$set(a.temporaryPassData,"lastname",e)},expression:"temporaryPassData.lastname"}})],1),t("v-col",{attrs:{cols:"11",md:"5"}},[t("v-text-field",{attrs:{label:"Rut",outlined:"",name:"rut","prepend-icon":"mdi-card-account-details-outline",rules:[a.rules.required,a.rules.rut],"background-color":"white"},on:{input:function(e){return a.formatRut()}},model:{value:a.temporaryPassData.rut,callback:function(e){a.$set(a.temporaryPassData,"rut",e)},expression:"temporaryPassData.rut"}})],1),t("v-col",{attrs:{cols:"11",md:"5"}},[t("v-text-field",{attrs:{label:"Correo",outlined:"",name:"login","prepend-icon":"mdi-email-outline",type:"text",rules:[a.rules.required,a.rules.email],"background-color":"white"},model:{value:a.temporaryPassData.email,callback:function(e){a.$set(a.temporaryPassData,"email",e)},expression:"temporaryPassData.email"}})],1),t("v-col",{staticClass:"columna",attrs:{cols:"11",md:"5"}},[t("v-text-field",{attrs:{label:"Dirección Completa",outlined:"",name:"address","prepend-icon":"mdi-map-marker",type:"text",rules:[a.rules.required],"background-color":"white"},model:{value:a.temporaryPassData.address,callback:function(e){a.$set(a.temporaryPassData,"address",e)},expression:"temporaryPassData.address"}})],1),t("v-col",{attrs:{cols:"11",md:"5"}})],1)],1)],1),t("v-card-actions",[t("v-row",{attrs:{justify:"center","justify-sm":"end"}},[t("v-btn",{attrs:{"x-large":"",elevation:"3",dark:"",color:"primary",loading:a.loading},on:{click:a.validate}},[t("v-icon",{attrs:{left:""}},[a._v(" mdi-send ")]),a._v(" Enviar Formulario ")],1)],1)],1)],1)],1)},d=[],u=(t("d81d"),t("d3b7"),t("ac1f"),t("25f0"),t("5319"),t("1276"),t("96cf"),t("1da1")),m=t("3a60"),p=t("b3a9"),v=t("bc3a"),f=t.n(v),y=t("2f62"),b={directives:{mask:m["mask"]},data:function(){var a=this;return{valid:!0,loading:!1,temporaryPassData:{name:"",lastname:"",email:"",reason:"",rut:"",address:""},rules:{required:function(a){return!!a||"Campo Requerido."},email:function(a){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(a)||"Correo no válido."},alpha:function(e){return a.haveNumber(e)||"Ha ingresado un caracter no válido"},rut:function(e){return a.ValidaRut(e)||"El rut ingresado no es válido"}}}},computed:{items:function(){return p.map((function(a){return a}))}},methods:Object(c["a"])(Object(c["a"])({},Object(y["b"])(["setCurrentStep","setTemporaryPassData","setSnackBar"])),{},{validate:function(){this.$refs.form.validate()&&(console.log("Formulario re válido"),this.loading=!0,this.sendForm())},haveNumber:function(a){if("undefined"!=typeof a){for(var e="0123456789?¿@#!¡&${}[]()%?*/.,_",t=a.toString(),s=0;s<t.length;s++)if(-1!=e.indexOf(t.charAt(s),0))return!1;return!0}},sendForm:function(){var a=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://34.120.129.229/virtual_platform/newTemporarypass",a.temporaryPassData).then((function(e){a.setSnackBar({color:"success",msg:"Se ha generado el permiso exitosamente"}),a.setTemporaryPassData(e.data),a.$refs.form.reset(),a.loading=!1,a.setCurrentStep(2)})).catch((function(e){console.log(e),a.setSnackBar({color:"error",msg:"Ha ocurrido un error"}),a.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()},ValidaRut:function(a){if(a=a.replace(/\./g,""),!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(a))return!1;var e=a.split("-"),t=e[1],s=e[0];"K"==t&&(t="k");for(var r=0,o=1;s;s=Math.floor(s/10))o=(o+s%10*(9-r++%6))%11;var i=o?o-1:"k";return t==i},formatRut:function(){var a=this.temporaryPassData.rut.replace(/[.-]/g,"").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/,"$1.$2.$3-$4");this.temporaryPassData.rut=a}}),mounted:function(){}},h=b,g=(t("b0bb"),t("2877")),P=t("6544"),_=t.n(P),C=t("8336"),S=t("b0af"),k=t("99d9"),D=t("62ad"),j=t("a523"),x=t("ce7e"),w=t("4bd4"),V=t("132d"),O=t("0fd9"),A=t("b974"),E=t("8654"),F=Object(g["a"])(h,l,d,!1,null,"d284bca4",null),$=F.exports;_()(F,{VBtn:C["a"],VCard:S["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VCol:D["a"],VContainer:j["a"],VDivider:x["a"],VForm:w["a"],VIcon:V["a"],VRow:O["a"],VSelect:A["a"],VTextField:E["a"]});var B=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-container",[t("v-card",{attrs:{outlined:""}},[t("v-card-title",{staticClass:"justify-center"},[t("h2",{staticClass:"titleName"},[a._v("Permiso Generado Exitosamente")])]),t("v-divider"),t("v-card-text",[t("v-subheader",[a._v("Información del permiso")]),t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"1"}},[t("v-icon",{attrs:{color:"primary"}},[a._v("mdi-identifier")])],1),t("v-col",{attrs:{cols:"3"}},[t("h2",{staticClass:"dataStyle"},[a._v("ID:")])]),t("v-col",{attrs:{cols:"7"}},[t("h2",{staticClass:"itemStyle"},[a._v(a._s(a.temporaryPassData.id))])])],1),t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"1"}},[t("v-icon",{attrs:{color:"primary"}},[a._v("mdi-text-short")])],1),t("v-col",{attrs:{cols:"3"}},[t("h2",{staticClass:"dataStyle"},[a._v("Motivo:")])]),t("v-col",{attrs:{cols:"7"}},[t("h2",{staticClass:"itemStyle"},[a._v(a._s(a.temporaryPassData.reason))])])],1),t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"1"}},[t("v-icon",{attrs:{color:"primary"}},[a._v("mdi-calendar-outline")])],1),t("v-col",{attrs:{cols:"3"}},[t("h2",{staticClass:"dataStyle"},[a._v("Fecha:")])]),t("v-col",{attrs:{cols:"7"}},[t("h2",{staticClass:"itemStyle"},[a._v(a._s(a.date))])])],1),t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"1"}},[t("v-icon",{attrs:{color:"primary"}},[a._v("mdi-clock-start")])],1),t("v-col",{attrs:{cols:"3"}},[t("h2",{staticClass:"dataStyle"},[a._v("Hora de inicio:")])]),t("v-col",{attrs:{cols:"7"}},[t("h2",{staticClass:"itemStyle"},[a._v(a._s(a.startPass))])])],1),t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"1"}},[t("v-icon",{attrs:{color:"primary"}},[a._v("mdi-clock-end")])],1),t("v-col",{attrs:{cols:"3"}},[t("h2",{staticClass:"dataStyle"},[a._v("Hora de término:")])]),t("v-col",{attrs:{cols:"7"}},[t("h2",{staticClass:"itemStyle"},[a._v(a._s(a.endPass))])])],1),t("v-subheader",[a._v("Información del solicitante")]),t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"1"}},[t("v-icon",{attrs:{color:"primary"}},[a._v("mdi-account-details-outline")])],1),t("v-col",{attrs:{cols:"3"}},[t("h2",{staticClass:"dataStyle"},[a._v("Nombre:")])]),t("v-col",{attrs:{cols:"7"}},[t("h2",{staticClass:"itemStyle"},[a._v(a._s(a.temporaryPassData.name+" "+a.temporaryPassData.lastname))])])],1),t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"1"}},[t("v-icon",{attrs:{color:"primary"}},[a._v("mdi-card-account-details-outline")])],1),t("v-col",{attrs:{cols:"3"}},[t("h2",{staticClass:"dataStyle"},[a._v("Rut:")])]),t("v-col",{attrs:{cols:"7"}},[t("h2",{staticClass:"itemStyle"},[a._v(a._s(a.temporaryPassData.rut))])])],1),t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"1"}},[t("v-icon",{attrs:{color:"primary"}},[a._v("mdi-map-marker")])],1),t("v-col",{attrs:{cols:"3"}},[t("h2",{staticClass:"dataStyle"},[a._v("Dirección:")])]),t("v-col",{attrs:{cols:"7"}},[t("h2",{staticClass:"itemStyle"},[a._v(a._s(a.temporaryPassData.address))])])],1)],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{"x-large":"",elevation:"3",dark:"",color:"primary",loading:a.loading},on:{click:function(e){return a.setCurrentStep(1)}}},[t("v-icon",{attrs:{left:""}},[a._v(" mdi-send ")]),a._v(" Solicitar otro permiso ")],1)],1)],1)],1)},T=[],q={directives:{mask:m["mask"]},data:function(){return{loading:!1,startPass:"",endPass:"",date:""}},computed:Object(c["a"])({},Object(y["c"])(["temporaryPassData"])),methods:Object(c["a"])({},Object(y["b"])(["setCurrentStep"])),beforeMount:function(){var a=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],e=new Date(this.temporaryPassData.requestDate);this.date=e.getDate()+" de "+a[e.getMonth()]+" de "+e.getFullYear();var t=new Date(this.temporaryPassData.limitDate);this.startPass=e.getHours()+":"+e.getMinutes(),this.endPass=t.getHours()+":"+t.getMinutes()},mounted:function(){f.a.post("https://34.120.129.229/virtual_platform/sendEmail",this.temporaryPassData).then((function(a){console.log("Todo correcto")})).catch((function(a){console.log(a)}))}},M=q,R=(t("fcea"),t("2fa4")),z=t("e0c7"),N=Object(g["a"])(M,B,T,!1,null,"66067536",null),H=N.exports;_()(N,{VBtn:C["a"],VCard:S["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VCol:D["a"],VContainer:j["a"],VDivider:x["a"],VIcon:V["a"],VRow:O["a"],VSpacer:R["a"],VSubheader:z["a"]});var I={name:"Home",components:{Form:$,Verification:H},data:function(){return{snackBarColor:"success",statusForm:!1,statusFormText:"",timeout:4e3}},computed:Object(c["a"])({},Object(y["c"])(["currentStep","snackBar"])),mounted:function(){this.setCurrentStep(1)},methods:Object(c["a"])({},Object(y["b"])(["setCurrentStep"]))},J=I,L=(t("01f7"),t("2db4")),U=Object(g["a"])(J,i,n,!1,null,"c2623fb4",null),G=U.exports;_()(U,{VCol:D["a"],VContainer:j["a"],VRow:O["a"],VSnackbar:L["a"]});var K={name:"App",components:{Home:G},data:function(){return{}}},Z=K,Y=(t("db8f"),t("7496")),Q=t("40dc"),W=t("f6c4"),X=Object(g["a"])(Z,r,o,!1,null,"86f11bfe",null),aa=X.exports;_()(X,{VApp:Y["a"],VAppBar:Q["a"],VMain:W["a"]});var ea=t("8c4f");s["a"].use(ea["a"]);var ta=[{path:"/",name:"Home",component:G}],sa=new ea["a"]({mode:"history",base:"/",routes:ta}),ra=sa;s["a"].use(y["a"]);var oa=new y["a"].Store({state:{currentStep:1,temporaryPassData:[],snackBar:{status:!1,color:"success",msg:"Se ha generado el permiso exitosamente",timeout:4e3}},mutations:{setCurrentStep:function(a,e){a.currentStep=e},setTemporaryPassData:function(a,e){a.temporaryPassData=e},setSnackBar:function(a,e){a.snackBar.color=e.color,a.snackBar.msg=e.msg,a.snackBar.status=!0}},actions:{},modules:{}}),ia=t("f309"),na=t("2e15"),ca=t.n(na);s["a"].use(ia["a"]);var la=new ia["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#F9A825",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:ca.a},current:"es"}});t("d5e8"),t("5363");s["a"].config.productionTip=!1,new s["a"]({router:ra,store:oa,vuetify:la,render:function(a){return a(aa)}}).$mount("#app")},b0bb:function(a,e,t){"use strict";t("fd9e")},b3a9:function(a){a.exports=JSON.parse('[{"id":1,"pass":"Asistencia a establecimientos de salud","description":"Asistencia a centros, servicios y establecimientos de salud por hora concertada con anterioridad y/o tratamiento médico. El solicitante deberá indicar el nombre del médico que lo atenderá, el horario de atención y el establecimiento o lugar de la misma. En este caso, la persona puede ir con un acompañante.","duration":"3 horas."},{"id":2,"pass":"Compras insumos básicos","description":"Asistencia a farmacias, supermercados, mercados y/o lugares de venta de insumos básicos, ya sea para la compra de alimentos, medicamentos y/u otros insumos básicos.","duration":"3 horas."},{"id":3,"pass":"Salida de personas con espectro autista u otra discapacidad mental","description":"Salida de persona con trastorno del espectro autista u otro tipo de discapacidad mental, ya sea de origen psíquico o intelectual, con su respectivo cuidador o acompañante.","duration":"2 horas."},{"id":4,"pass":"Asistencia a establecimientos de salud","description":"Pasear a mascotas o animales que estén bajo su cuidado, con desplazamiento reducido dentro de las dos cuadras a la redonda del domicilio o residencia.","duration":"30 minutos."},{"id":5,"pass":"Pago de servicios básicos y gestiones","description":"Pago de servicios básicos; cobros de pensiones y gestiones de pago ante el sistema de AFP, subsidios o beneficios estatales y/o municipales, seguros de cesantía, obtención de clave única; trámites ante el Servicio de Registro Civil e Identificación, gestiones bancarias o notariales, y asistencia a plantas de revisión técnica.","duration":"3 horas."},{"id":6,"pass":"Asistencia a funeral familiar directo","description":"Asistencia a funerales de familiares directos. Duración: 5 horas de libre tránsito si reside en la misma región del funeral, y 24 horas si el funeral se realiza en una región distinta a la de su residencia.","duration":"30 minutos."},{"id":7,"pass":"Proceso de postulación al Sistema de Admisión Escolar, retiro de alimentos, textos escolares y/o artículos tecnológicos","description":"Proceso de postulación al Sistema de Admisión Escolar, retiro de alimentos, textos escolares y/o artículos tecnológicos para fines escolares desde organismos públicos, tales como JUNAEB, establecimientos escolares u otros.","duration":"5 horas."},{"id":8,"pass":"Comparecencia a una citación en virtud de la Ley","description":"Comparecencia a una citación a la que un abogado u otra persona deba concurrir en virtud de la ley. El solicitante deberá adjuntar copia de la citación judicial respectiva.","duration":"12 horas."},{"id":9,"pass":"Entregar alimentos u otros insumos de primera necesidad a adultos mayores","description":"Llevar alimentos, medicamentos o artículos de primera necesidad a adultos mayores, evitando el contacto directo o físico con los mismos.","duration":"2 horas."},{"id":10,"pass":"Proporcionar alimentos o insumos de primera necesidad en Recinto Penitenciario","description":"Llevar a recintos penitenciarios, de acuerdo a las reglas dispuestas por Gendarmería de Chile, alimentos, medicamentos o artículos de primera necesidad.","duration":"3 horas."},{"id":11,"pass":"Traslado del menor o adolescente al hogar del tutelar","description":"Permiso Temporal para realizar traslado de niños, niñas o adolescentes al hogar del padre o madre tutelar, en virtud de un régimen de visitas cursado previo al periodo de cuarentena.","duration":"2 horas."},{"id":12,"pass":"Traslado de padres o tutores a establecimientos de Salud o Centros de SENAME","description":"Traslado y permanencia de padre, madre o tutor a establecimientos de salud para visitar a personas con discapacidad y dependencia, que se encuentren hospitalizadas en dichos recintos. También se podrá solicitar esta autorización para concurrir a centros con dependencia de SENAME de acuerdo con las reglas internas de cada establecimiento para sus visitas.","duration":"3 horas."},{"id":13,"pass":"Permiso para donantes de sangre","description":"Este permiso autoriza a personas que sean donantes de sangre y que cuenten con hora reservada en un centro de donación habilitado. Tendrá una duración de 3 horas para donantes de sangre y podrá ser solicitado una vez cada 90 días.","duration":"6 horas."},{"id":14,"pass":"Matrimonio y Unión Civil","description":"Este permiso podrá ser solicitado por una sola vez, ingresando el RUN de ambos contrayentes, los que podrán incluir hasta 10 acompañantes.","duration":"4 horas."},{"id":15,"pass":"Salida de Niños, Niñas y Adolescentes","description":"Este permiso podrá ser solicitado los días martes, miércoles y viernes, entre las 10:30 y las 12:00 horas, o entre las 16:30 y las 18:00 horas, una vez cada día, alejándose hasta 1 kilómetro a la redonda del domicilio.","duration":"90 minutos."},{"id":16,"pass":"Permiso de Traslado Interregional","description":"Habilita para el traslado interregional, ida y vuelta, desde y hacia comunas que se encuentren en Paso Preparación, Paso Apertura Inicial o Paso Apertura Avanzada (Pasos 3, 4 y 5), sin limitaciones de tiempo de estadía, pudiendo pernoctarse en el destino, incluyendo hoteles y análogos. Podrá ser solicitado, dentro de las 24 horas anteriores a la fecha del viaje, ingresando los datos personales del titular y de los acompañantes menores de 14 años, la fecha de salida y las direcciones de origen y destino. Las personas mayores de 14 años deberán obtener un permiso como titular","duration":"24 horas."}]')},b3ac:function(a,e,t){},db8f:function(a,e,t){"use strict";t("34bb")},fcea:function(a,e,t){"use strict";t("b3ac")},fd9e:function(a,e,t){}});
//# sourceMappingURL=app.dea338de.js.map