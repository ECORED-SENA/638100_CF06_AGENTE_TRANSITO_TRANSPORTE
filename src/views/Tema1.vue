<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 1
      h1 Física aplicada al accidente de tránsito


    .row.fondo-t1.align-items-center.py-4.pt-5
      .col-lg-12.col-12.px-lg-5.px-md-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-6.mb-4(data-aos="fade-right")
            p La expresión 
              span.t-gold.fw-bold física aplicada 
              | se entenderá en este componente desde el punto de vista semántico y no desde su terminología genérica que involucra la parte de la física que se ocupa del uso de tecnologías, es decir, específicamente de las leyes, teorías y modelos aplicables a las interacciones de los cuerpos involucrados en hechos de tránsito que pueden ser analizados en el escenario investigativo, ya sea al servicio de la justicia o a merced de la ciencia y el conocimiento, para lo cual la rama de la física que se encarga de estos asuntos es la 
              span.t-gold.fw-bold física forense.
            p En pocas palabras, la física aplicada a los accidentes de tránsito, que embarga la física forense, se ocupará especialmente:
            ul.lista-ul--color.color-gold.fa-ul.ps-3
              li.mb-0 
                i.fas.fa-chevron-right
                | Del movimiento de los cuerpos.
              li.mb-0 
                i.fas.fa-chevron-right
                | La cuantificación y cualificación de la energía.
              li.mb-0 
                i.fas.fa-chevron-right
                | Del establecimiento de la dinámica que dará luz a la reconstrucción de los hechos.
              li.mb-0 
                i.fas.fa-chevron-right
                | En síntesis, la aproximación a la realidad objetiva.
          .col-lg-6.col-md-9.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img.svg', alt='')

          p.mb-4(data-aos="fade") Antes de abordar la aplicación de las leyes, teorías y modelos, téngase en cuenta que los valores cuantificables hacen uso del lenguaje matemático para expresar los resultados que serán interpretados.

          .col-12
            .bg-2.p-4.mb-4(data-aos="fade-down")
              .row.align-items-center
                .col-5.col-md-3.col-lg-2.px-lg-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t1/ico.svg', alt='')
                .col-12.col-md-9.col-lg-10
                  p.mb-0 No obstante, de manera imprescindible, entiéndase que estas expresiones, en todos los casos, serán solo aproximaciones y dependen del tratamiento de los elementos a cuantificar y su precisión al medirlos, puesto que los fenómenos del movimiento en condiciones no controladas mantienen relación con muchas variables, algunas perceptibles y medibles y otras que no se toman en cuenta.

          .col-lg-4.col-8.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/t1/img2.png', alt='')
          .col-lg-8.mb-4(data-aos="fade-left")
            p En virtud de lo anterior, por ejemplo, se puede medir la velocidad de un vehículo a partir de la distancia en la que se detiene por acción del frenado, y esto se logra admitiendo los valores concretos de longitud en el proceso de desaceleración, la fuerza de fricción expresada por la fuerza normal y el coeficiente de rozamiento.
            p No obstante, en este proceso también intervienen factores como:
            ul.lista-ul--color.color-gold.fa-ul.ps-3
              li.mb-0 
                i.fas.fa-chevron-right
                | La acción del viento
              li.mb-0 
                i.fas.fa-chevron-right
                | La resistencia al avance
              li.mb-0 
                i.fas.fa-chevron-right
                | La fricción de los rodamientos
              li.mb-0 
                i.fas.fa-chevron-right
                | La intervención de la distribución
              li.mb-0 
                i.fas.fa-chevron-right
                | La redistribución de la masa por acción del sistema de suspensión
              li.mb-0 
                i.fas.fa-chevron-right
                | Otros
            p Tales factores intervienen en casos concretos como:
            ul.lista-ul--color.color-gold.fa-ul.ps-3
              li.mb-0 
                i.fas.fa-chevron-right
                | El sistema de frenos
              li.mb-0 
                i.fas.fa-chevron-right
                | La humedad relativa
              li.mb-0 
                i.fas.fa-chevron-right
                | La presión de inflado
              li.mb-0 
                i.fas.fa-chevron-right
                | La temperatura
              li.mb-0 
                i.fas.fa-chevron-right
                | Otros
            .p-4.bg-2
              p.mb-0 Lo anterior no quiere decir que los cálculos siempre serán errados o no fiables, sino que la medición de los elementos y evidencias juega un papel primordial para la objetividad de los resultados y, aun teniendo buenos sistemas de medición, las expresiones matemáticas deben interpretarse como acercamientos muy confiables, con los cuales se hacen deducciones refutables, reproducibles, racionales y fácticas, pero con márgenes de error que deben ser controlados por los investigadores.


    Separador

    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1 Leyes de la mecánica newtoniana

    .row.justify-content-center.mb-3
      .col-lg-7.mb-4(data-aos="fade-right")
        p La formulación de la mecánica newtoniana, también conocida como 
          span.t-gold.fw-bold mecánica clásica
          | , se encarga, de manera particular, del estudio del movimiento de los cuerpos en el espacio medible, y por esta entidad característica se pueden conjeturar sistemas de referencia inerciales; esto quiere decir que las ecuaciones se derivan de las leyes de Newton, a quien se atribuyen las contribuciones elementales de esta teoría.
        p Para estudiar el movimiento de las partículas, la mecánica se divide en:  
      .col-lg-5.col-md-11.col-12.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img3.png', alt='')

    .fondo1-t1.px-4.mb-5.bg-shadow(data-aos="fade-down")
      .row.align-items-end
        .col-lg-3
          img(src='@/assets/curso/temas/t1/img4.png', alt='')
        .col-lg-9.p-4
          .tarjeta.bg-white
            SlyderE.p-4.px-lg-5(indicadores="derecha")
              .row
                .col-md-8.mb-4.mb-md-0
                  h5 Estática 
                  p Se encarga de las fuerzas que intervienen en los cuerpos que se encuentran en equilibrio mecánico, ya sea en reposo o en equilibrio cinético, es decir, la estática no solo estudia cuerpos que no se mueven, sino también a aquellos que se mueven a velocidad constante. Para poder comprender mejor la estática, es necesario referirse al término de “fuerza”, puesto que, para mantener los cuerpos en equilibrio, se requiere la actuación de fuerzas para conservar el movimiento o el reposo.
                .col-md-4
                  img(src='@/assets/curso/temas/t1/slide-img1.png', alt='')
              .row
                .col-md-8.mb-4.mb-md-0
                  h5 Cinemática  
                  p La cinemática, por su parte, se encarga de estudiar el movimiento que tienen los cuerpos, además de su trayectoria en función del tiempo, pero no se ocupa de las causas que lo producen, donde se consideran principalmente los conceptos de velocidad, rapidez y aceleración, tomando en cuenta tres elementos básicos, que son: el tiempo, que se considera entidad que se deriva de movimiento; el espacio, que se describe a través de la geometría euclidiana; y un móvil, que es cualquier cuerpo o partícula.
                .col-md-4
                  img(src='@/assets/curso/temas/t1/slide-img2.png', alt='')
              .row
                .col-md-7.mb-4.mb-md-0
                  h5 Dinámica   
                  p La dinámica estudia el movimiento y las causas que lo provocan, lo que indica que se concentra en las fuerzas que actúan sobre los cuerpos y los cambios de movimiento que estas producen sobre él.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/slide-img3.png', alt='')


    p.mb-4(data-aos="fade") La cinemática, concretamente, estudia los siguientes tipos de movimiento:

    .row.fondo2-t1.align-items-center.py-4.mb-4
      .col-lg-12.col-12.px-lg-5.px-md-5.px-4
        .row.justify-content-center

          .col-md-3.mb-4
            .tarjeta.fondo3-t1.p-3.px-4.text-center.h-100
              img.mb-4.mx-auto(src='@/assets/curso/temas/t1/tarj-ico1.svg', alt='' style="width: 85px;")
              h5 Movimiento rectilíneo uniforme
              p Es el fenómeno donde los cuerpos se desplazan a velocidades constantes, en linera recta, sin aceleración o aceleración nula.
          .col-md-3.mb-4
            .tarjeta.fondo3-t1.p-3.px-4.text-center.h-100
              img.mb-4.mx-auto(src='@/assets/curso/temas/t1/tarj-ico2.svg', alt='' style="width: 85px;")
              h5 Movimiento rectilíneo uniformemente acelerado
              p Se trata de la variación de la velocidad que describe un cuerpo de manera lineal, siendo constante en el espacio-tiempo.
          .col-md-3.mb-4
            .tarjeta.fondo3-t1.p-3.px-4.text-center.h-100
              img.mb-4.mx-auto(src='@/assets/curso/temas/t1/tarj-ico3.svg', alt='' style="width: 85px;")
              h5 Movimiento armónico simple
              p Este tipo de movimiento es aquel donde los cuerpos se desplazan oscilando de un punto a otro, a manera de vaivén y de forma periódica, o sea, en intervalos de tiempo iguales.
          .col-md-3.mb-4
            .tarjeta.fondo3-t1.p-3.px-4.text-center.h-100
              img.mb-4.mx-auto(src='@/assets/curso/temas/t1/tarj-ico4.svg', alt='' style="width: 85px;")
              h5 Movimiento parabólico
              p Este combina dos movimientos rectilíneos, uno vertical (acelerado uniformemente) y otro horizontal (de velocidad constante).
          .col-md-3.mb-4
            .tarjeta.fondo3-t1.p-3.px-4.text-center.h-100
              img.mb-4.mx-auto(src='@/assets/curso/temas/t1/tarj-ico5.svg', alt='' style="width: 85px;")
              h5 Movimiento circular uniforme
              p Es el movimiento que describe un cuerpo realizando círculos perfectos, en un espacio determinado, sin que varíe la velocidad a través del tiempo.
          .col-md-3.mb-4
            .tarjeta.fondo3-t1.p-3.px-4.text-center.h-100
              img.mb-4.mx-auto(src='@/assets/curso/temas/t1/tarj-ico6.svg', alt='' style="width: 85px;")
              h5 Movimiento circular uniformemente acelerado
              p Es la variación de la velocidad de un cuerpo que describe un movimiento circular uniforme.
          .col-md-3.mb-4
            .tarjeta.fondo3-t1.p-3.px-4.text-center.h-100
              img.mb-4.mx-auto(src='@/assets/curso/temas/t1/tarj-ico7.svg', alt='' style="width: 85px;")
              h5 Movimiento armónico complejo
              p Se compone de varios  movimientos armónicos simples, pero en distintas direcciones.  

    
    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Primera Ley de Newton

    .row.justify-content-center.mb-3
      .col-lg-7.mb-4(data-aos="fade-right")
        p La Primera Ley de Newton, también conocida como 
          b ley de la inercia
          |, plantea que un cuerpo o partícula tiende a permanecer en reposo o en movimiento rectilíneo a menos que una fuerza externa cambie su estado.
        p Por lo tanto, la ley postula que un objeto no puede cambiar su posición original, ya sea en reposo o en movimiento uniforme en línea recta, a menos que se aplique una fuerza o una serie de fuerzas con una resultante distinta de cero.
      .col-lg-5.col-md-8.col-12.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img5.svg', alt='')

    .row.justify-content-center.mb-3
      .col-lg-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img6.png', alt='')
      .col-lg-7.col-md-8.col-12.mb-4(data-aos="fade-left")
        p En lo relacionado con la Primera Ley de Newton, tenga en cuenta los siguientes aspectos clave:
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-1")
          .row(titulo="Rozamiento")
            p Newton tuvo en cuenta el hecho de que los cuerpos en movimiento están constantemente sujetos a 
              b rozamiento
              |, lo que los frena gradualmente.
          .row(titulo="Fuerza de fricción")
            p El rozamiento es novedad en el concepto anterior, que consideraba que el movimiento o la restricción de un cuerpo dependían, completamente, de si existía una fuerza externa aplicada sobre él, sin apreciar la fuerza de fricción.
          .row(titulo="Fuerzas externas")
            p Entonces, un objeto que se mueve a una velocidad constante en línea recta significa que no hay una fuerza externa neta o, en otras palabras, el objeto en movimiento no se detendrá naturalmente si no se le aplica ninguna fuerza.
          .row(titulo="Reposo <em>versus</em> interferencia energética")
            p Se sabe que los objetos en reposo tienen velocidad cero, por lo que cualquier cambio en la velocidad se debe a la aplicación de una fuerza o interferencia energética.

    .tarjeta.bg-3.p-4.mb-5    
      .row.align-items-center
        .col-5.col-md-3.col-lg-2.px-lg-4.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t1/img7.svg', alt='')
        .col-12.col-md-9.col-lg-10
          p.mb-0 En los fenómenos de la accidentalidad vial, se puede apreciar esta ley de varias maneras. Por ejemplo, cuando unas personas viajan en un bus y este frena repentinamente, los ocupantes tienden a seguir el movimiento, perdiendo estabilidad sobre la posición en la que se encuentren, como si sus cuerpos quisieran salir volando por la parte delantera del bus.


    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Segunda Ley de Newton

    .row.justify-content-center.mb-3
      .col-lg-7.mb-4(data-aos="fade-right")
        p La Segunda Ley de Newton establece que la aceleración de un cuerpo se relaciona directamente con la fuerza aplicada y la masa del cuerpo. Esta ley se expresa matemáticamente de la siguiente manera: 
          span.t-gold.fw-bold.t-italic F=ma
          |, donde F es la fuerza, 
          span.t-gold.fw-bold.t-italic m 
          | es la masa y 
          span.t-gold.fw-bold.t-italic a 
          | es la aceleración.
        p En otras palabras, esta ley señala que un objeto acelerará en la misma dirección y con la misma magnitud que la fuerza aplicada. También es la base de explicación de muchos fenómenos físicos, como el movimiento de los planetas alrededor del sol, el movimiento de los proyectiles, el movimiento de los objetos en la Tierra y los movimientos de objetos en un campo gravitacional.
        .bg-3.py-3.px-4
          p La Segunda Ley de Newton tiene una gran influencia en todos los campos de la física y la tecnología. Esta ley es la que cuantifica a la fuerza como una entidad que tiene un valor determinado por la aceleración y la masa del cuerpo que la aplica, lo cual indica que su proporcionalidad está directamente relacionada con la materia y el cambio de velocidad cuando incide sobre otra.
          .row.justify-content-center
            .col-md-6.col-lg-5
              .tarjeta.bg-acento-contenido
                .row.justify-content-center.align-items-center.text-white.p-4.py-2
                  img(src='@/assets/curso/temas/t1/formula.svg', alt='')
      .col-lg-5.col-md-8.col-12.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img8.svg', alt='')

    p.mb-4(data-aos="fade") Las siguientes son algunas generalidades importantes, que usted debe tener claras, sobre la Segunda Ley de Newton:

    .row.justify-content-center.mb-3
      .col-lg-4.col-md-8.col-12.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img9.png', alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-1")
          .row(titulo="Fuerza y unidad de masa")
            p En un lenguaje coloquial, la fuerza es igual a la unidad de masa, como constante de la porción limitada de la materia, multiplicada por la aceleración, queriendo indicar que, a mayor aceleración, mayor será la fuerza, y en caso de considerar la aceleración sobre la fuerza, tendrá también una razón directamente proporcional, indicando que, a mayor masa, mayor será la fuerza.
          .row(titulo="Segunda Ley de Newton en accidentes de tránsito")
            .col-md-7
              p En accidentes de tránsito, es fácil visualizar la manifestación de esta ley, basta con la comparación del daño causado por un vehículo clase camión a un vehículo clase automóvil viajando a velocidades similares, pero la diferencia de masas es muy notoria, por lo cual se podrá observar un mayor daño en el de menor masa.
            .col-md-5
              img(src='@/assets/curso/temas/t1/acord1.png', alt='')
          .row(titulo="Cambio de velocidad")
            p La masa es directamente proporcional a la fuerza y, a su vez, el cambio de velocidad lo es, de acuerdo con la Segunda Ley de Newton, lo cual se convierte en un principio muy valioso para tener en cuenta, especialmente, en el establecimiento de velocidades de circulación por carreteras, además de otros aspectos.
          .row(titulo="Cantidad de movimiento")
            p Cuando la masa no es constante, no aplica la expresión F=ma, por lo cual lo que se debe hacer en estos casos es tomar la magnitud física denominada cantidad de movimiento, la cual está expresada en el producto de la masa por la velocidad de un cuerpo.
            h5.mb-1.t-italic P=mv
            p.mb-1 Donde 
            p.mb-0 
              span.fw-bold.t-italic P = 
              | Cantidad de movimiento
            p.mb-0 
              span.fw-bold.t-italic m = 
              | Masa
            p 
              span.fw-bold.t-italic v = 
              | Velocidad

    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-1")
          .row(titulo="Fuerza neta")
            p Esta equivale al producto de la variación de la masa y la velocidad sobre la variación del tiempo en el que se desarrolla el fenómeno.
            img(src='@/assets/curso/temas/t1/form1.svg', alt='' style="width:150px;")
          .row(titulo="Relación fuerza, masa, aceleración")
            p Partiendo de esto, se puede hacer una relación directa entre la fuerza, la masa y la aceleración, sin estimar que la masa sea o no constante. En el evento en que la masa sea constante, la expresión derivada quedaría así:
            img(src='@/assets/curso/temas/t1/form2.svg', alt='' style="width:170px;")
          .row(titulo="Expresión primordial")
            p Ya con esta derivada, se llega a la expresión primordial de la Segunda Ley de Newton, que indica:
            img(src='@/assets/curso/temas/t1/form3.svg', alt='' style="width:105px;")
          .row(titulo="Cantidad de movimiento, <em>momentum</em>, ímpetu o momento lineal")
            p La cantidad de movimiento se conoce por la expresión #[b #[em p=mv]], que significa que la magnitud vectorial que tiene un cuerpo en movimiento es directamente proporcional al producto de la masa por la velocidad del objeto
      .col-lg-4.col-md-8.col-12.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img10.png', alt='')


    p.mb-4(data-aos="fade") En relación con la conservación de la cantidad de movimiento, recuerde estos dos conceptos:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-5.p-4
          img(src='@/assets/curso/temas/t1/infog.svg', alt='Infografía que presenta las definiciones de choque elástico y choque inelástico en recuadros de texto, acompañados cada uno con la imagen de un vehículo en tal situación, así: 1, Choque elástico: el momento lineal y la energía cinética permanecen constantes. Dos partículas de diferente masa, que solo interactúan y se mueven la una hacia la otra, a velocidades constantes y diferentes, al encontrarse en colisión, permanecerán constantes la cantidad de movimiento y también la energía cinética, como, por ejemplo, el choque de dos bolas de billar. 2, Choque inelástico: Se conserva la cantidad de movimiento y se presenta variación en la energía cinética, lo cual se manifiesta en deformaciones, ruido e incremento de la temperatura. El caso típico ocurre en las colisiones entre vehículos en accidentes de tránsito, donde, tras el choque, la energía cinética es menor o nula.')

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Tercera Ley de Newton
    
    p.mb-4(data-aos="fade") La Tercera Ley de Isaac Newton se puede comprender, de una manera simple, expresando que, cuando un objeto ejerce una fuerza sobre otro, este último responde con la misma fuerza, en la misma dirección, pero en el sentido contrario sobre el primero.

    .row.justify-content-center
      .col-lg-4.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img11.svg', alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        p Esta ley también se conoce como 
          span.t-gold.fw-bold la Ley de acción y reacción
          | , ya que se entiende que para cada acción hay una reacción de la misma magnitud.
        p En la aplicación de las leyes del movimiento en accidentes de tránsito, se encuentran los modelos para determinar la velocidad de los vehículos a partir de las evidencias físicas, como:
        ul.lista-ul--color.color-gold.fa-ul.ps-3
          li.mb-0 
            i.fas.fa-chevron-right
            | Huellas de frenado
          li.mb-0 
            i.fas.fa-chevron-right
            | Arrastre
          li.mb-0 
            i.fas.fa-chevron-right
            | Derrape
          li.mb-0 
            i.fas.fa-chevron-right
            | Deformaciones
          li.mb-0 
            i.fas.fa-chevron-right
            | Vuelcos o movimiento parabólico

    p.mb-4(data-aos="fade") En relación con el cálculo mediante huellas, estas son evidencias físicas que datan la dinámica de ocurrencia de un hecho de tránsito y usted debe tener presente:

    TabsC.color-acento-botones.mb-4(data-aos="fade-down")
      .py-5.bg-6(titulo="Resultado de la fricción")
        .row.justify-content-center
          .col-md-11
            h5.t-red Resultado de la fricción
            p Las huellas son marcas impresas que dejan los neumáticos o la estructura de los vehículos en la capa de rodadura por acción de la fricción; estos registros son muy importantes para determinar la velocidad a la que viajaba un rodante.
          .col-lg-7
            .bg-4.p-4 
              p.t-italic Vi=√2gdu 
              p Donde: 
              p.mb-0 𝑉𝑖 = 𝑉𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑 𝑖𝑛𝑖𝑐𝑖𝑎𝑙 𝑎 𝑙𝑎 𝑞𝑢𝑒 𝑣𝑖𝑎𝑗𝑎𝑏𝑎 𝑒𝑙 𝑣𝑒ℎí𝑐𝑢𝑙𝑜 𝑎𝑛𝑡𝑒𝑠 𝑑𝑒𝑙 𝑝𝑟𝑜𝑐𝑒𝑠𝑜 𝑑𝑒 𝑓𝑟𝑒𝑛𝑎𝑑𝑎 𝑒𝑛 𝑚/𝑠 
              p.mb-0 𝑔 = 𝐸𝑠 𝑙𝑎 𝑎𝑐𝑒𝑙𝑒𝑟𝑎𝑐𝑖ó𝑛 𝑑𝑒 𝑙𝑎 𝑔𝑟𝑎𝑣𝑒𝑑𝑎𝑑 𝑐𝑎𝑙𝑐𝑢𝑙𝑎𝑑𝑎 𝑒𝑛 9.8 𝑚/𝑠<sup>2</sup> 
              p.mb-0 𝑑 = 𝐸𝑠 𝑙𝑎 𝑙𝑜𝑛𝑔𝑖𝑡𝑢𝑑 𝑑𝑒 𝑙𝑎 ℎ𝑢𝑒𝑙𝑙𝑎 𝑒𝑛 𝑚𝑒𝑡𝑟𝑜𝑠 “𝑚” 
              p.mb-0 𝜇 = 𝐸𝑠 𝑒𝑙 𝑣𝑎𝑙𝑜𝑟 𝑑𝑒𝑙 𝑐𝑜𝑒𝑓𝑖𝑐𝑖𝑒𝑛𝑡𝑒 𝑑𝑒 𝑓𝑟𝑖𝑐𝑐𝑖ó𝑛 𝑑𝑒 𝑎𝑐𝑢𝑒r𝑑𝑜 𝑐𝑜𝑛 𝑙𝑎 𝑡𝑎𝑏𝑙𝑎 2
      .py-5.bg-6(titulo="Coeficiente de fricción")
        .row.justify-content-center
          .col-md-11
            h5.t-red Coeficiente de fricción
            p Cuando el accidente ocurre en una carretera con pendiente y la huella queda impresa, es importante mencionar que el coeficiente de fricción se ve afectado por el ángulo de la pendiente, dependiendo de si el cuerpo va subiendo o va descendiendo.
          .col-lg-7
            .bg-4.p-4 
              p.t-italic 𝑉𝑖=√2𝑔𝑑(𝜇𝑐𝑜𝑠𝜃±𝑠𝑖𝑛𝜃) 
              p Donde: 
              p.mb-0 𝑉𝑖 = 𝑉𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑 𝑖𝑛𝑖𝑐𝑖𝑎𝑙 𝑎 𝑙𝑎 𝑞𝑢𝑒 𝑣𝑖𝑎𝑗𝑎𝑏𝑎 𝑒𝑙 𝑣𝑒ℎí𝑐𝑢𝑙𝑜 𝑎𝑛𝑡𝑒𝑠 𝑑𝑒𝑙 𝑝𝑟𝑜𝑐𝑒𝑠𝑜 𝑑𝑒 𝑓𝑟𝑒𝑛𝑎𝑑𝑎 𝑒𝑛 𝑚/𝑠 
              p.mb-0 𝑔 = 𝐸𝑠 𝑙𝑎 𝑎𝑐𝑒𝑙𝑒𝑟𝑎𝑐𝑖ó𝑛 𝑑𝑒 𝑙𝑎 𝑔𝑟𝑎𝑣𝑒𝑑𝑎𝑑 𝑐𝑎𝑙𝑐𝑢𝑙𝑎𝑑𝑎 𝑒𝑛 9.8 𝑚/𝑠<sup>2</sup> 
              p.mb-0 𝑑 = 𝐸𝑠 𝑙𝑎 𝑙𝑜𝑛𝑔𝑖𝑡𝑢𝑑 𝑑𝑒 𝑙𝑎 ℎ𝑢𝑒𝑙𝑙𝑎 𝑒𝑛 𝑚𝑒𝑡𝑟𝑜𝑠 “𝑚” 
              p.mb-0 𝜇 = 𝐸𝑠 𝑒𝑙 𝑣𝑎𝑙𝑜𝑟 𝑑𝑒𝑙 𝑐𝑜𝑒𝑓𝑖𝑐𝑖𝑒𝑛𝑡𝑒 𝑑𝑒 𝑓𝑟𝑖𝑐𝑐𝑖ó𝑛 𝑑𝑒 𝑎𝑐𝑢𝑒r𝑑𝑜 𝑐𝑜𝑛 𝑙𝑎 𝑡𝑎𝑏𝑙𝑎 2
              p.mb-0 𝜃 = 𝐸𝑠 𝑒𝑙 á𝑛𝑔𝑢𝑙𝑜 𝑑𝑒 𝑙𝑎 𝑝𝑒𝑛𝑑𝑖𝑒𝑛𝑡𝑒 (+𝑠 𝑖 𝑠𝑢𝑏𝑒 𝑦−𝑠𝑖 𝑏𝑎𝑗𝑎)
      .py-5.bg-6(titulo="Vehículo que no se detiene")
        .row.justify-content-center
          .col-md-11
            h5.t-red Vehículo que no se detiene
            p En los casos donde el vehículo no se detiene al final de la huella por acción del frenado, sino que termina con un impacto o choque que lo hace detener, se debe usar el siguiente modelo:
          .col-lg-7
            .bg-4.p-4 
              p.t-italic 𝑉𝑖=√2𝑔𝑑𝜇+𝑉<sub>𝑓</sub><sup>2</sup>  
              p.t-italic 𝑉𝑖=√2𝑔𝑑(𝜇𝑐𝑜𝑠𝜃±𝑠𝑖𝑛𝜃)+𝑉<sub>𝑓</sub><sup>2</sup> 
              p Donde: 
              p.mb-0 𝑉𝑖 = 𝑉𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑 𝑖𝑛𝑖𝑐𝑖𝑎𝑙 𝑎 𝑙𝑎 𝑞𝑢𝑒 𝑣𝑖𝑎𝑗𝑎𝑏𝑎 𝑒𝑙 𝑣𝑒ℎí𝑐𝑢𝑙𝑜 𝑎𝑛𝑡𝑒𝑠 𝑑𝑒𝑙 𝑝𝑟𝑜𝑐𝑒𝑠𝑜 𝑑𝑒 𝑓𝑟𝑒𝑛𝑎𝑑𝑎 𝑒𝑛 𝑚/𝑠 
              p.mb-0 𝑔 = 𝐸𝑠 𝑙𝑎 𝑎𝑐𝑒𝑙𝑒𝑟𝑎𝑐𝑖ó𝑛 𝑑𝑒 𝑙𝑎 𝑔𝑟𝑎𝑣𝑒𝑑𝑎𝑑 𝑐𝑎𝑙𝑐𝑢𝑙𝑎𝑑𝑎 𝑒𝑛 9.8 𝑚/𝑠<sup>2</sup>
              p.mb-0 𝑑 = 𝐸𝑠 𝑙𝑎 𝑙𝑜𝑛𝑔𝑖𝑡𝑢𝑑 𝑑𝑒 𝑙𝑎 ℎ𝑢𝑒𝑙𝑙𝑎 𝑒𝑛 𝑚𝑒𝑡𝑟𝑜𝑠 “𝑚”
              p.mb-0 𝜇 = 𝐸𝑠 𝑒𝑙 𝑣𝑎𝑙𝑜𝑟 𝑑𝑒𝑙 𝑐𝑜𝑒𝑓𝑖𝑐𝑖𝑒𝑛𝑡𝑒 𝑑𝑒 𝑓𝑟𝑖𝑐𝑐𝑖ó𝑛 𝑑𝑒 𝑎𝑐𝑢𝑒r𝑑𝑜 𝑐𝑜𝑛 𝑙𝑎 𝑡𝑎𝑏𝑙𝑎 2 
              p.mb-0 𝜃 = 𝐸𝑠 𝑒𝑙 á𝑛𝑔𝑢𝑙𝑜 𝑑𝑒 𝑙𝑎 𝑝𝑒𝑛𝑑𝑖𝑒𝑛𝑡𝑒 (+𝑠 𝑖 𝑠𝑢𝑏𝑒 𝑦−𝑠𝑖 𝑏𝑎𝑗𝑎) 
              p.mb-0 𝑉<sub>𝑓</sub> = 𝐿𝑎 𝑣𝑒𝑙𝑜𝑑𝑖𝑑𝑎𝑑 𝑓𝑖𝑛𝑎𝑙 𝑎𝑙 𝑚𝑜𝑚𝑒𝑛𝑡𝑜 𝑑𝑒𝑙 𝑖𝑚𝑝𝑎𝑐𝑡𝑜 𝑐𝑎𝑙𝑐𝑢𝑙𝑎𝑑𝑎 𝑒𝑛 𝑚/𝑠
            
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.pe-lg-0
              img(src="@/assets/curso/temas/t1/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Mecanica Newtoniana
                  p.mb-0 Refuerce conceptos y elementos clave sobre las leyes de la mecánica newtoniana explorando el Anexo_1_MecanicaNewtoniana.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Mecanica_Newtoniana.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    Separador

    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Análisis físicos del atropello

    .row.justify-content-center.mb-2
      .col-lg-4.mb-4(data-aos="fade-right")
        p Un atropello es una situación peligrosa que puede tener consecuencias fatales; actualmente, tienen una tasa de mortalidad muy alta y son considerados como una de las principales causas de muerte en el mundo. Los atropellos pueden tener muchas causas, como la falta de vigilancia por parte del conductor, el exceso de velocidad, la conducción bajo los efectos del alcohol o de drogas, la imprudencia, la distracción, la negligencia, la falta de conocimiento del reglamento vial o la falta de señalización adecuada.
      .col-lg-3.pe-lg-0.mb-4(data-aos="fade-left")
        .bg-3.h-100
          img(src='@/assets/curso/temas/t1/img12.svg', alt='')
      .col-lg-5.ps-lg-0.mb-4(data-aos="fade-left")
        .bg-4.h-100.p-3
          img.mb-4(src='@/assets/curso/temas/t1/ico2.svg', alt='' style="width: 85px;")
          p.mb-0 Es importante que los conductores cumplan con las normas de tránsito para evitar los siniestros viales donde se ven inmersos los peatones. Esto incluye: respetar el límite de velocidad, mantenerse alerta, respetar la prioridad de paso, conducir con precaución y respetar a los peatones.
    
    .row.justify-content-center.mb-2
      .col-lg-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img12.png', alt='') 
      .col-lg-8.mb-4(data-aos="fade-left")
        p También es importante que los peatones sean conscientes de su entorno y siempre busquen los cruces señalizados para pasar la calle.
        p En cuanto a la prevención de los atropellos, es importante que las autoridades locales y gubernamentales:
        ul.lista-ul--color.color-gold.fa-ul.ps-3
          li.mb-0 
            i.fas.fa-chevron-right
            | Adopten medidas para mejorar la seguridad vial.
          li.mb-0 
            i.fas.fa-chevron-right
            | Las medidas incluyen la instalación de señales de tránsito y señalización adecuadas.
          li.mb-0 
            i.fas.fa-chevron-right
            | Construyan cruces seguros para los peatones.
          li.mb-0 
            i.fas.fa-chevron-right
            | Implementen programas de educación vial.
          li.mb-0 
            i.fas.fa-chevron-right
            | Tengan en cuenta que la prevención es una responsabilidad de su función.
          li.mb-0 
            i.fas.fa-chevron-right
            | Promuevan la idea de la responsabilidad compartida con conductores, peatones y otras autoridades.
        .bg-3.p-4    
          .row.align-items-center
            .col-5.col-md-3.col-lg-2.px-lg-3.mb-4.mb-md-0
              img(src='@/assets/curso/temas/t1/ico3.svg', alt='')
            .col-12.col-md-9.col-lg-10
              p.mb-0 También la educación vial es una importante herramienta para crear conciencia acerca de las normas de tráfico y la seguridad vial, y para ayudar a reducir la tasa de atropellos.        

    p.mb-4(data-aos="fade") En cuanto al análisis dinámico del atropello, las fases del atropello frontal son:

    .row.mb-3.justify-content-center(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-2.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t1/tarj2-ico1.svg', alt='' style="width: 85px;")
          h5 Fase de impacto 
          p En la que, tras el primer contacto con algunas de sus partes, el peatón es acelerado aproximadamente a la misma velocidad que el vehículo que le impacta.
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-2.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t1/tarj2-ico2.svg', alt='' style="width: 85px;")
          h5 Fase de vuelo
          p En la que, tras separarse el cuerpo del peatón del vehículo, inicia una fase de vuelo hasta que golpea con el suelo.
      .col-lg-4.col-md-6.mb-4
        .tarjeta.bg-2.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t1/tarj2-ico3.svg', alt='' style="width: 85px;")
          h5 Fase de deslizamiento y/o rotación 
          p En la que, tras haber golpeado con el suelo, el cuerpo del peatón se deslizará, rodará o realizará una combinación de ambos movimientos hasta que llegue a su posición final, pudiendo haber golpeado con elementos que se haya encontrado a su paso.


    p.mb-4(data-aos="fade") A continuación, analice los modelos matemáticos del atropello. Procure llevar registro de lo más destacado en su libreta personal de apuntes:

    TabsC.color-acento-botones.mb-4(data-aos="fade-down")
      .py-5.bg-6(titulo="Modelo de Stcherbatcheff")
        .row.justify-content-center
          .col-md-11
            h5.t-red Modelo de Stcherbatcheff
            p Para hallar la distancia de proyección. Distancia de proyección del peatón a partir de la aceleración del vehículo.
          .col-lg-7
            .bg-4.p-4 
              img.mb-4(src='@/assets/curso/temas/t1/form4.svg', alt='' style="width: 115px;")
              p Donde: 
              p.mb-0 d = distancia de proyección en metros. 
              p.mb-0 𝑉 = velocidad de atropello en m/s. 
              p.mb-0 𝛾 = aceleración del vehículo (m/s<sub>2</sub>). 
              p.mb-0 𝛿 = 0,03 (constante).
      .py-5.bg-6(titulo="Modelo de Collins")
        .row.justify-content-center
          .col-md-11
            h5.t-red Modelo de Collins
            p Para hallar la distancia de proyección. Distancia de proyección del peatón a partir de la velocidad del vehículo.
          .col-lg-7
            .bg-4.p-4 
              img.mb-4(src='@/assets/curso/temas/t1/form5.svg', alt='' style="width: 200px;")
              p Donde: 
              p.mb-0 d = distancia de proyección en metros. 
              p.mb-0 𝑉 = velocidad del vehículo en m/s. 
              p.mb-0 ℎ𝑚 = altura al centro de gravedad del peatón. 
              p.mb-0 𝜇𝑝 = coeficiente de fricción entre el peatón y la superficie del piso.
      .py-5.bg-6(titulo="Modelo de Serle")
        .row.justify-content-center
          .col-md-11
            h5.t-red Modelo de Serle
            p Para hallar la velocidad de proyección del peatón.
          .col-lg-7
            .bg-4.p-4 
              img.mb-4(src='@/assets/curso/temas/t1/form6.svg', alt='' style="width: 135px;")
              p.mb-0 𝑉𝑚𝑖𝑛 = velocidad mínima de proyección del peatón m/s. 
              p.mb-0 X = distancia de proyección del peatón en metros . 
              p.mb-0 g = valor de la gravedad. 
              p.mb-0 𝜇 = 𝑐𝑜𝑒𝑓𝑖𝑐𝑖𝑒𝑛𝑡𝑒 𝑑𝑒 𝑓𝑟𝑖𝑐𝑐𝑖ó𝑛 𝑑𝑒𝑙 𝑝𝑒𝑎𝑡ó𝑛 𝑦 𝑒𝑙 𝑝𝑖𝑠𝑜.
      .py-5.bg-6(titulo="Modelo de Fricke")
        .row.justify-content-center
          .col-md-11
            h5.t-red Modelo de Fricke
            p Para hallar la velocidad del vehículo que embiste.
          .col-lg-7
            .bg-4.p-4 
              img.mb-4(src='@/assets/curso/temas/t1/form7.svg', alt='' style="width: 140px;")
              p.mb-0 𝑉<sub>𝑖</sub> = velocidad inicial del vehículo en m/s.
              p.mb-0 𝑉<sub>𝑓</sub> = velocidad final del vehículo en m/s. 
              p.mb-0 d = distancia de proyección del peatón en metros. 
              p.mb-0 a = valor de la aceleración en m/s<sup>2</sup>.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
