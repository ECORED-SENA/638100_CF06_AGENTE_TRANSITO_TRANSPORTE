<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-md-0
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Causas probables en accidentes de tránsito

    .row.justify-content-center.mb-3
      .col-lg-6.mb-4(data-aos="fade-right")
        p Son múltiples las causas probables de los accidentes de tránsito, tomando en cuenta que los factores que inciden en ellos son el vehículo, la vía y el comportamiento humano, donde este último es el que determina las acciones y decisiones cuando hay falencias en cualquiera de los otros dos.
        p Cuando, por ejemplo, una vía está en mal estado, el conductor debe tener la pericia para conducir bajo las inclemencias de esa falencia. En el caso de los vehículos en mal estado, es el conductor el encargado de realizar una revisión constante de su vehículo y saber los tiempos de los mantenimientos preventivos, correctivos o predictivos que le permitan mantener en buenas condiciones el rodante.
      .col-lg-6.col-md-8.col-12.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/img.png', alt='')


    .row.fondo-gris.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-md-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-4.col-md-8.col-10.mb-4.mb-lg-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/t3/img2.png', alt='')
          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
            .bg-1.p-4.py-lg-3.mb-4
              .row.align-items-center
                .col-md-2.col-3
                  img(src='@/assets/curso/temas/t3/ico.svg', alt='')
                .col-md-10.col-9
                  p.mb-0 Cuando las condiciones climáticas complican las condiciones de conducción e incrementan el riesgo de accidente, es el conductor el que debe tomar acciones, como reducir la velocidad, orillar el vehículo o trazar una nueva ruta.
            p La Resolución 0011268 de 2012 establece las hipótesis que se deben tener presentes en la investigación, no obstante, esta es solo una guía para tabular de manera organizada y objetiva los datos estadísticos, pero son de gran ayuda para darle valor conceptual a las causas probables que se determinan en la reconstrucción del hecho.
            p
              span.etiqueta Amplíe sus conocimientos sobre la investigación de accidentes de tránsito estudiando la Resolución 0011268 de 2012.
            .row 
              .col-lg-9
                  a.anexo.mb-4.mb-lg-0(href="https://www.redjurista.com/Documents/resolucion_11268_de_2012_ministerio_de_transporte.aspx#/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p #[b Enlace web.] Resolucion 11268 de 2012 ministerio de transporte.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
