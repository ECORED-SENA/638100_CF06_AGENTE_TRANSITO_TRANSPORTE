<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-t2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Biomecánica

    .row 
      .col-lg-1.col-2.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/ico.svg', alt='')
      .col-lg-11.col-10.mb-4(data-aos="fade-left")
        p Mecánica que estudia la relación entre la fuerza y el movimiento. Esta ciencia es esencial para comprender el funcionamiento de los músculos, los huesos y las articulaciones, y cómo los factores externos, como el peso corporal, la resistencia al movimiento y la fuerza de los componentes mecánicos del cuerpo, afectan el movimiento.

    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p También se utiliza para comprender cómo los movimientos se producen en la práctica, cómo se pueden mejorar y cómo se pueden prevenir lesiones.
        p Estos son algunos aspectos clave que usted debe conocer y asimilar sobre biomecánica:
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-1")
          .row(titulo="Entendimiento científico del movimiento")
            p Los científicos utilizan técnicas como la cinemática, la dinámica y la estática para evaluar el movimiento, y mediante estos conceptos, se puede medir el tiempo, la velocidad, la fuerza y la dirección del movimiento, así como para determinar cómo se está produciendo el movimiento y si hay alguna lesión relacionada con el mismo.
          .row(titulo="Control muscular y del equilibrio")
            p El análisis biomecánico también se utiliza para estudiar el control muscular y el equilibrio, así como para estudiar el rendimiento humano.
          .row(titulo="Rendimiento atlético")
            p La biomecánica es un campo de estudio en constante evolución y se utiliza cada vez más para entender y mejorar el rendimiento atlético, y a medida que la tecnología avanza, los científicos pueden utilizar nuevas técnicas para estudiar el movimiento humano con una mayor precisión. Esto significa que los atletas pueden ser supervisados de cerca y que los entrenadores pueden ajustar sus programas de entrenamiento para mejorar el rendimiento de los deportistas.
          .row(titulo="Biomecánica al servicio de la ciencia y la ley")
            p No obstante, estos conceptos de biomecánica son puestos al servicio de la investigación de accidentes de tránsito combinados con los preceptos de la biodinámica, con el fin de establecer posibles causas de las lesiones en accidentes de tránsito y encaminar hipótesis con fundamento.
      .col-lg-4.col-8.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img.png', alt='')


    p.mb-4(data-aos="fade") Algunas de las lesiones más comunes en los accidentes de tránsito son:

    .row.mb-3.justify-content-center(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-hover.p-3.h-100
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/temas/t2/ico1.svg', alt='')
            .col-9 
              p.mb-0 Lesiones en el tórax y en tronco o torso
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-hover.p-3.h-100
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/temas/t2/ico2.svg', alt='')
            .col-9 
              p.mb-0 Lesión cerebral
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-hover.p-3.h-100
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/temas/t2/ico3.svg', alt='')
            .col-9 
              p.mb-0 Lesiones en el cuello, cabeza y cara
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-hover.p-3.h-100
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/temas/t2/ico4.svg', alt='')
            .col-9 
              p.mb-0 Lesiones en las extremidades
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-hover.p-3.h-100
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/temas/t2/ico5.svg', alt='')
            .col-9 
              p.mb-0 Lesiones en la columna vertebral
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-hover.p-3.h-100
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/temas/t2/ico6.svg', alt='')
            .col-9 
              p.mb-0 Lesiones en la médula espinal

    p.mb-4(data-aos="fade") Según los tipos de choques en la vía, los peatones pueden estar más propensos a sufrir algunas lesiones concretas, como se muestra a continuación:

    .row.mb-3.justify-content-center(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-acento-contenido.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t2/tarj-ico1.svg', alt='' style="width: 85px;")
          h5.text-white Choques frontales
          ul.lista-ul--color.color-secundario.fa-ul.mb-0
            li.mb-0.text-white
              i.fas.fa-car
              | Lesión en rótula 
            li.mb-0.text-white
              i.fas.fa-car
              | Fracturas en fémur
            li.mb-0.text-white
              i.fas.fa-car
              | Posible fractura en cadera
            li.mb-0.text-white
              i.fas.fa-car
              | Lesiones en metarsianos
            li.mb-0.text-white
              i.fas.fa-car
              | Columna cervical
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-acento-contenido.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t2/tarj-ico2.svg', alt='' style="width: 85px;")
          h5.text-white Choques laterales
          ul.lista-ul--color.color-secundario.fa-ul.mb-0
            li.mb-0.text-white
              i.fas.fa-car
              | Fractura de pelvis
            li.mb-0.text-white
              i.fas.fa-car
              | Lesiones craneoencefálicas  
            li.mb-0.text-white
              i.fas.fa-car
              | Lesión hepática
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-acento-contenido.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t2/tarj-ico3.svg', alt='' style="width: 85px;")
          h5.text-white Choques traseros o por alcance
          ul.lista-ul--color.color-secundario.fa-ul.mb-0
            li.mb-0.text-white
              i.fas.fa-car
              | Lesión en columna cervical 3
            li.mb-0.text-white
              i.fas.fa-car
              | Lesión en columna
            li.mb-0.text-white
              i.fas.fa-car
              | Lesión en tórax
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-acento-contenido.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t2/tarj-ico4.svg', alt='' style="width: 85px;")
          h5.text-white Volcamientos
          ul.lista-ul--color.color-secundario.fa-ul.mb-0
            li.mb-0.text-white
              i.fas.fa-car
              | Lesiones cerebrales por golpes en la cabeza
            li.mb-0.text-white
              i.fas.fa-car
              | Lesiones en las extremidades superiores e inferiores
            li.mb-0.text-white
              i.fas.fa-car
              | Lesiones en clavícula
            li.mb-0.text-white
              i.fas.fa-car
              | Lesión de columna
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-acento-contenido.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t2/tarj-ico5.svg', alt='' style="width: 85px;")
          h5.text-white Atropellos
          ul.lista-ul--color.color-secundario.fa-ul.mb-0
            li.mb-0.text-white
              i.fas.fa-car
              | Lesiones principalmente en dorso
            li.mb-0.text-white
              i.fas.fa-car
              | Cabeza, cuello y cara
            li.mb-0.text-white
              i.fas.fa-car
              | Columna vertebral
            li.mb-0.text-white
              i.fas.fa-car
              | Extremidades inferiores
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-acento-contenido.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t2/tarj-ico6.svg', alt='' style="width: 85px;")
          h5.text-white Lesiones de motociclistas
          ul.lista-ul--color.color-secundario.fa-ul.mb-0
            li.mb-0.text-white
              i.fas.fa-car
              | Lesiones cerebrales
            li.mb-0.text-white
              i.fas.fa-car
              | Lesiones en cabeza, cuello y cara
            li.mb-0.text-white
              i.fas.fa-car
              | Lesiones en columna vertebral
            li.mb-0.text-white
              i.fas.fa-car
              | Lesiones en extremidades 


    





</template>

<script>
export default {
  name: 'Tema2',
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
