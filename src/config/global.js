export default {
  global: {
    componenteFormativo: 'Reconstrucción del accidente de tránsito',
    descripcionCurso:
      'Este componente formativo aborda el aspecto y naturaleza física del accidente de tránsito y su fenomenología explicada mediante las leyes de la mecánica newtoniana. Con su estudio responsable, el aprendiz podrá establecer hipótesis a partir de los resultados de los cálculos y aplicación de modelos físicos según las clases de accidentes y la tipología de los hechos, y, además, reconstruir accidentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Física aplicada al accidente de tránsito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Leyes de la mecánica newtoniana',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Análisis físicos del atropello',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Biomecánica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Causas probables en accidentes de tránsito',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Metodología de la investigación de accidentes de tránsito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conclusión de la investigación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Propuesta en la investigación de accidentes de tránsito',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/638100_CF06_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Física aplicada al accidente de tránsito',
      referencia:
        'Lyubenov, D. (2016). A method of vehicle-pedestrian accident reconstruction. <em>International Scientific Journal "Trans Motauto World”, 1</em>(1), p. 7-9.',
      tipo: 'Artículo',
      link: 'https://stumejournals.com/journals/tm/2016/1/7.full.pdf',
    },
    {
      tema: 'Biomecánica',
      referencia:
        'Fontes, R., Pereira, J. y Sousa, L. (2019). <em>Biomechanics of a Pedestrian Accident Reconstruction</em>. 2019 IEEE 6th Portuguese Meeting on Bioengineering.',
      tipo: 'Artículo',
      link:
        'https://www.researchgate.net/publication/332525262_Biomechanics_of_a_Pedestrian_Accident_Reconstruction/link/5d2134c492851cf4406c766d/download',
    },
    {
      tema: 'Metodología de la investigación de accidentes de tránsito',
      referencia:
        'Ramos, H. y Quiroga, L. (2017). <em>Investigación de Accidentes de Tránsito en Colombia</em>. Policía Nacional de Colombia.',
      tipo: 'Libro',
      link:
        'https://www.policia.gov.co/contenido/investigacion-accidentes-transito-colombia',
    },
  ],
  glosario: [
    {
      termino: 'Estática',
      significado:
        'se encarga de las fuerzas que intervienen en los cuerpos que se encuentran en equilibrio mecánico, ya sea en reposo o en equilibrio cinético.',
    },
    {
      termino: 'Cinemática',
      significado:
        'se encarga de estudiar el movimiento que tienen los cuerpos, además de su trayectoria, en función del tiempo, pero no se ocupa de las causas que lo producen.',
    },
    {
      termino: 'Movimiento rectilíneo uniforme',
      significado:
        'fenómeno donde los cuerpos se desplazan a velocidades constantes, en línea recta, sin aceleración o aceleración nula.',
    },
    {
      termino: 'Movimiento rectilíneo uniformemente acelerado',
      significado:
        'se trata de la variación de la velocidad que describe un cuerpo de manera lineal, siendo constante en el espacio-tiempo.',
    },
    {
      termino: 'Dinámica',
      significado:
        'estudia el movimiento y las causas que lo provocan, lo que indica que se concentra en las fuerzas que actúan sobre los cuerpos y los cambios de movimiento que estas producen sobre él.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alzate, C. y Buitrago, J. (2001). <em>Manual de medicina legal tanatológica</em>. Universidad de Manizales.',
    },
    {
      referencia:
        'Arburola, A. (2009). <em>Características e importancia de la Investigación criminal. Proceso de la Investigación criminal.</em>',
    },
    {
      referencia:
        'Academia de Tráfico de la Guardia Civil [ATGC]. (1991). <em>Investigación de accidentes de tráfico</em>. Dirección General de Tráfico Madrid España.',
    },
    {
      referencia:
        'Collins, J. (1979). <em>Accident Reconstruction</em>. Charles C. Thomas Publisher.',
    },
    {
      referencia:
        'Farias , N. (2009). La entrevista en la investigación de los delitos. <em>Psicología Jurídica y Forense</em>.',
    },
    {
      referencia:
        'Fiscalía General de la Nación. (2018). <em>Manual del Sistema de Cadena de Custodia</em>. Imprenta Nacional.',
    },
    {
      referencia:
        'Fontes, R., Pereira, J. y Sousa, L. (2019). <em>Biomechanics of a Pedestrian Accident Reconstruction</em>. 2019 IEEE 6th Portuguese Meeting on Bioengineering.',
    },
    {
      referencia:
        'Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Julio 6 de 2002.',
    },
    {
      referencia:
        'Ley 906 de 2004. Por la cual se expide el Código de Procedimiento Penal. (Corregida de conformidad con el Decreto 2770 de 2004). Agosto 31 de 2004.',
    },
    {
      referencia:
        'Limpert, R. (1999). <em>Motor vehicle accident reconstruction and cause analysis</em>. Michie.',
    },
    {
      referencia:
        'Lyubenov, D. (2016). A method of vehicle-pedestrian accident reconstruction. <em>International Scientific Journal "Trans Motauto World”, 1</em>(1), p. 7-9.',
    },
    {
      referencia:
        'Organización Mundial de la Salud [OMS]. (2022). <em>Traumatismos causados por el tránsito</em>.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/road-traffic-injuries',
    },
    {
      referencia:
        'Ramos, H. y Quiroga, L. (2017). <em>Investigación de Accidentes de Tránsito en Colombia</em>. Policía Nacional de Colombia.',
    },
    {
      referencia:
        'Resolución 11268 de 2012. [Ministerio de Transporte]. Por la cual se adopta el nuevo informe policial de accidentes de tránsito (IPAT), su Manual de diligenciamiento y se dictan otras disposiciones. Diciembre 6 de 2012.',
    },
    {
      referencia:
        'Rivani , B., Brougham, D. y Mason, R. (1981). <em>Pedestrian PostImpact Kinematics and Injury Patterns</em>. SAE International.',
      link: 'https://doi.org/10.4271/811024',
    },
    {
      referencia:
        'Rodriguez, F. (2013). <em>Topografía aplicada a la Investigación de accidentes de tránsito</em>. Universidad Francisco José de Caldas.',
    },
    {
      referencia:
        'Searle, J. y Searle, A. (1983). <em>The Trajectories of Pedestrians, Motorcycles, Motorcyclists, etc., Following a Road Accident</em>. SAE International.',
    },
    {
      referencia:
        'Sierra, L. (2008). <em>La prueba en el proceso penal colombiano</em>. Fiscalía General de la Nación.',
    },
    {
      referencia:
        'Stcherbatcheff, G., Tarriere, C., Duclos, P., Fayon, A., Got, A. y Patel, A. (1975). <em>Simulation of Collisions Between Pedestrians</em>. SAE International.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hoover Fabián Ramos Enríquez ',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
