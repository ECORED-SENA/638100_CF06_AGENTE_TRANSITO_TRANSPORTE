<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade") Tenga una cordial bienvenida al estudio del componente formativo 
      span.t-gold.fw-bold “Reconstrucción del accidente de tránsito”
      |. Haga, usted, un recorrido responsable por las temáticas del mismo y fortalezca sus saberes y conocimientos, que le conducirán a ser excelente agente de tránsito y transporte. 
      span.t-gold.fw-bold ¡Éxitos!

    p.mb-4(data-aos="fade") Para comenzar, visualice el video que se muestra a continuación:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nRAGQWCenMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Reconstrucción del accidente de tránsito




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
