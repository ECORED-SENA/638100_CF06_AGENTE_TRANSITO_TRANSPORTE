(function(e){function n(n){for(var o,i,c=n[0],s=n[1],d=n[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(n);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,i=1;i<a.length;i++){var c=a[i];0!==t[c]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"83c9bd01","chunk-0206bfa0":"9d64e2cb","chunk-0c047e41":"c1b5f948","chunk-13a6037e":"b6cc52b1","chunk-18f95272":"c2a5eee4","chunk-25b302c8":"26cfb7b2","chunk-26fc7596":"286ada91","chunk-2c06842c":"44a60f75","chunk-2d0c5615":"ebc1981a","chunk-2d0e96ec":"7b8875b5","chunk-2d208d90":"9c6a4a0e","chunk-2d21d0e2":"320e0a0d","chunk-2d22c123":"474e9714","chunk-2d2747e2":"55b9a2a1","chunk-2e80bb9a":"818f9add","chunk-319206de":"2b0a71fd","chunk-32334cb6":"4e06baf7","chunk-36769079":"f509823e","chunk-3c57cd7b":"d8fd3cb3","chunk-4cdd78c0":"21552dad","chunk-4f2d402a":"f52de32d","chunk-515a8379":"ad4b0488","chunk-53ccb27e":"e4c9c4d9","chunk-55d286b8":"984d19df","chunk-59974754":"4b536167","chunk-60cbc06b":"17f2bb4a","chunk-659152b8":"4c724f06","chunk-6e1e538a":"1656d117","chunk-766a929b":"4fd76fb0","chunk-c796899c":"b404a9ce","chunk-e8a7823a":"9ff4a1e8","chunk-f2df7d2c":"d2fe56d5","chunk-fde47172":"6ef31f8b",comple:"db4be067",creditos:"e0a862ca",glosario:"8411f6c4",intro:"7276f922",referencias:"33eaaddb",sintesis:"fa266f28",tema1:"d9aae093",tema2:"fe58663a",tema3:"028e8a17",tema4:"a7ac041e"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"58996960","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"1c072bbf","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"ffff255a","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"8b53591b",creditos:"32a72204",glosario:"65125e6b",intro:"31d6cfe0",referencias:"57b4c2c3",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===t))return n()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===t)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var o=n&&n.target&&n.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),a(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(m);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var u=0;u<d.length;u++)n(d[u]);var m=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=a("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),l=d.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),m=a("8c4f"),f=a("ae58"),p=a("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema4").then(a.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Reconstrucción del accidente de tránsito",descripcionCurso:"Este componente formativo aborda el aspecto y naturaleza física del accidente de tránsito y su fenomenología explicada mediante las leyes de la mecánica newtoniana. Con su estudio responsable, el aprendiz podrá establecer hipótesis a partir de los resultados de los cálculos y aplicación de modelos físicos según las clases de accidentes y la tipología de los hechos, y, además, reconstruir accidentes.",imagenBannerPrincipal:a("65fa"),fondoBannerPrincipal:a("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("71f8")},{clases:["banner-principal-decorativo-2"],imagen:a("8f04")},{clases:["banner-principal-decorativo-3"],imagen:a("7d72")},{clases:["banner-principal-decorativo-4"],imagen:a("f53d")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Física aplicada al accidente de tránsito",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Leyes de la mecánica newtoniana",hash:"t_1_1"},{numero:"1.2",titulo:"Análisis físicos del atropello",hash:"t_1_2"}]},{nombreRuta:"tema2",numero:"2",titulo:"Biomecánica",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"Causas probables en accidentes de tránsito",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Metodología de la investigación de accidentes de tránsito",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Conclusión de la investigación",hash:"t_4_1"},{numero:"4.2",titulo:"Propuesta en la investigación de accidentes de tránsito",hash:"t_4_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/638100_CF06_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Física aplicada al accidente de tránsito",referencia:'Lyubenov, D. (2016). A method of vehicle-pedestrian accident reconstruction. <em>International Scientific Journal "Trans Motauto World”, 1</em>(1), p. 7-9.',tipo:"Artículo",link:"https://stumejournals.com/journals/tm/2016/1/7.full.pdf"},{tema:"Biomecánica",referencia:"Fontes, R., Pereira, J. y Sousa, L. (2019). <em>Biomechanics of a Pedestrian Accident Reconstruction</em>. 2019 IEEE 6th Portuguese Meeting on Bioengineering.",tipo:"Artículo",link:"https://www.researchgate.net/publication/332525262_Biomechanics_of_a_Pedestrian_Accident_Reconstruction/link/5d2134c492851cf4406c766d/download"},{tema:"Metodología de la investigación de accidentes de tránsito",referencia:"Ramos, H. y Quiroga, L. (2017). <em>Investigación de Accidentes de Tránsito en Colombia</em>. Policía Nacional de Colombia.",tipo:"Libro",link:"https://www.policia.gov.co/contenido/investigacion-accidentes-transito-colombia"}],glosario:[{termino:"Estática",significado:"se encarga de las fuerzas que intervienen en los cuerpos que se encuentran en equilibrio mecánico, ya sea en reposo o en equilibrio cinético."},{termino:"Cinemática",significado:"se encarga de estudiar el movimiento que tienen los cuerpos, además de su trayectoria, en función del tiempo, pero no se ocupa de las causas que lo producen."},{termino:"Movimiento rectilíneo uniforme",significado:"fenómeno donde los cuerpos se desplazan a velocidades constantes, en línea recta, sin aceleración o aceleración nula."},{termino:"Movimiento rectilíneo uniformemente acelerado",significado:"se trata de la variación de la velocidad que describe un cuerpo de manera lineal, siendo constante en el espacio-tiempo."},{termino:"Dinámica",significado:"estudia el movimiento y las causas que lo provocan, lo que indica que se concentra en las fuerzas que actúan sobre los cuerpos y los cambios de movimiento que estas producen sobre él."}],referencias:[{referencia:"Alzate, C. y Buitrago, J. (2001). <em>Manual de medicina legal tanatológica</em>. Universidad de Manizales."},{referencia:"Arburola, A. (2009). <em>Características e importancia de la Investigación criminal. Proceso de la Investigación criminal.</em>"},{referencia:"Academia de Tráfico de la Guardia Civil [ATGC]. (1991). <em>Investigación de accidentes de tráfico</em>. Dirección General de Tráfico Madrid España."},{referencia:"Collins, J. (1979). <em>Accident Reconstruction</em>. Charles C. Thomas Publisher."},{referencia:"Farias, N. (2009). La entrevista en la investigación de los delitos. <em>Psicología Jurídica y Forense</em>."},{referencia:"Fiscalía General de la Nación. (2018). <em>Manual del Sistema de Cadena de Custodia</em>. Imprenta Nacional."},{referencia:"Fontes, R., Pereira, J. y Sousa, L. (2019). <em>Biomechanics of a Pedestrian Accident Reconstruction</em>. 2019 IEEE 6th Portuguese Meeting on Bioengineering."},{referencia:"Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Julio 6 de 2002."},{referencia:"Ley 906 de 2004. Por la cual se expide el Código de Procedimiento Penal. (Corregida de conformidad con el Decreto 2770 de 2004). Agosto 31 de 2004."},{referencia:"Limpert, R. (1999). <em>Motor vehicle accident reconstruction and cause analysis</em>. Michie."},{referencia:'Lyubenov, D. (2016). A method of vehicle-pedestrian accident reconstruction. <em>International Scientific Journal "Trans Motauto World”, 1</em>(1), p. 7-9.'},{referencia:"Organización Mundial de la Salud [OMS]. (2022). <em>Traumatismos causados por el tránsito</em>.",link:"https://www.who.int/es/news-room/fact-sheets/detail/road-traffic-injuries"},{referencia:"Ramos, H. y Quiroga, L. (2017). <em>Investigación de Accidentes de Tránsito en Colombia</em>. Policía Nacional de Colombia."},{referencia:"Resolución 11268 de 2012. [Ministerio de Transporte]. Por la cual se adopta el nuevo informe policial de accidentes de tránsito (IPAT), su Manual de diligenciamiento y se dictan otras disposiciones. Diciembre 6 de 2012."},{referencia:"Rivani, B., Brougham, D. y Mason, R. (1981). <em>Pedestrian PostImpact Kinematics and Injury Patterns</em>. SAE International.",link:"https://doi.org/10.4271/811024"},{referencia:"Rodriguez, F. (2013). <em>Topografía aplicada a la Investigación de accidentes de tránsito</em>. Universidad Francisco José de Caldas."},{referencia:"Searle, J. y Searle, A. (1983). <em>The Trajectories of Pedestrians, Motorcycles, Motorcyclists, etc., Following a Road Accident</em>. SAE International."},{referencia:"Sierra, L. (2008). <em>La prueba en el proceso penal colombiano</em>. Fiscalía General de la Nación."},{referencia:"Stcherbatcheff, G., Tarriere, C., Duclos, P., Fayon, A., Got, A. y Patel, A. (1975). <em>Simulation of Collisions Between Pedestrians</em>. SAE International."}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable de Línea de Producción",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Hoover Fabián Ramos Enríquez ",cargo:"Experto Temático",centro:"Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander"},{nombre:"Fabián Leonardo Correa Díaz",cargo:"Diseñador Instruccional",centro:"Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander"},{nombre:"Carolina Coca Salazar",cargo:"Asesora Metodológica",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Darío González",cargo:"Corrector de Estilo",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Carmen Alicia Martínez Torres",cargo:"Animador y Productor Multimedia",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Storyboard e ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Blanca Flor Tinoco Torres",cargo:"Diseñador de Contenidos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollador Full-stack",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Emilsen Alfonso Bautista",cargo:"Actividad didáctica",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Gabriel Urueta Álvarez",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"65fa":function(e,n,a){e.exports=a.p+"img/banner-principal.37e80492.png"},"71f8":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.0fe30a9c.svg"},"7d72":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-3.97b79316.svg"},"8f04":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.fd6b0f81.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,n,a){e.exports=a.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,n,a){},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.c972fcbc.png"},f53d:function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-4.19fff575.svg"}});
//# sourceMappingURL=app.42d4b0f2.js.map