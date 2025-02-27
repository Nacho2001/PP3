const saludData = [
    {
      id: "Testículos",
      nombre: "Testículos",
      descripcion: "Son dos glándulas situadas en el interior del escroto que producen espermatozoides, los gametos masculinos encargados de fecundar el óvulo. Cada testículo está compuesto por túbulos seminíferos donde se forman los espermatozoides. Funciones principales de los testículos:  Producir espermatozoides. Producir la hormona testosterona, esencial para el desarrollo masculino.",
    },
    {
      id: "conducto-deferente",
      nombre: "Conducto deferente",
      descripcion: "Es un canal fino que transporta los espermatozoides hasta la parte posterior de la próstata donde se encuentran las vesículas seminales. Función principal de los conductos deferentes: es transportar los espermatozoides desde el epidídimo hasta las vesículas seminales durante la eyaculación. Además de transportar los espermatozoides, ayudan a almacenar y madurar los espermatozoides en el epidídimo antes de ser eyaculados. Durante la eyaculación, los músculos lisos de los conductos deferentes se contraen para empujar los espermatozoides hacia adelante a lo largo del conducto y hacia la uretra, permitiendo que se mezclen con el líquido seminal de las vesículas seminales y otras glándulas para formar el semen."
    },
    {
      id: "vesiculas-seminales",
      nombre: "Vesículas Seminales",
      descripcion: "Las vesículas seminales son glándulas situadas detrás de la vejiga. Función principal de las vesículas seminales: Producen el 60 % del volumen del líquido seminal rico en fructosa que proporciona energía a los espermatozoides."
    },
    {
      id: "prostata",
      nombre: "Próstata",
      descripcion: "Es una pequeña glándula que rodea la uretra. Está ubicada debajo de la vejiga, tiene el tamaño de una nuez y crece con la edad. Función principal de la próstata: Junto con los testículos y las vesículas seminales producen el líquido seminal que ayuda a la movilidad de los espermatozoides y a su supervivencia en el ambiente ácido de la vagina."
    },
    {
      id: "pene",
      nombre: "Pene",
      descripcion: "Es el órgano sexual externo masculino. Está compuesto principalmente de un tejido eréctil. Durante la excitación sexual, el cerebro envía señales al sistema nervioso que hacen que los vasos sanguíneos en el pene se dilaten. Esto permite que más sangre fluya hacia los cuerpos cavernosos y el cuerpo esponjoso, lo que produce la erección. En su interior se encuentra la uretra, un conducto que comunica con el exterior. Funciones principales del pene: 1. Permite la salida del líquido seminal a través de la uretra. 2. Permite la salida de la orina a través de la uretra. 3. Permite la salida del líquido preseminal que ayuda en la lubricación en la relación sexual. Este líquido contiene pequeñas cantidades de espermatozoides."
    },
    {
      id: "aparato-reproductor-femenino"
    },
    {
      id: "trompas-de-falopio",
      nombre: "Trompas de Falopio",
      descripcion: "Las trompas de Falopio se extienden desde el útero hasta los ovarios. Su longitud es aproximadamente de 10 a 13 cm. El extremo de cada trompa envuelve parte del ovario con unas prolongaciones (fimbrias). Estas prolongaciones reciben el óvulo fecundado por el ovario. Los cilios (proyecciones similares a pelos) y los músculos de la pared de la trompa de Falopio impulsan el óvulo hacia el útero. Funciones principales de las trompas de Falopio: 1. La fertilización del óvulo, generalmente, se realiza en la trompa de Falopio. 2. Permite el paso del óvulo fecundado al útero."
    },
    {
      id: "ovarios",
      nombre: "Ovarios",
      descripcion: "Los ovarios son las glándulas sexuales femeninas. En el aparato reproductor femenino hay dos ovarios, tienen un color perlado y un tamaño y forma similar a una almendra. Cada ovario está situado a un lado del útero, unido a este a través de ligamentos. Funciones principales de los ovarios: 1. Secretar las hormonas femeninas: estrógenos y progesterona que ayudan al desarrollo de los caracteres sexuales femeninos. 2. Liberar el óvulo cada mes durante la vida reproductiva de la mujer."
    },
    {
      id: "utero-y-cuello-uterino",
      nombre: "Útero y cuello uterino",
      descripcion: "El útero es un órgano vacío constituido por una capa gruesa muscular. Tiene forma de pera y se encuentra en el centro de la pelvis. El tejido que cubre la pared interna del útero se denomina endometrio. El endometrio es el lugar donde se implanta el óvulo fecundado. Además, el útero se comunica con la vagina a través de su zona más estrecha, el cuello del útero. Función principal del útero: La principal función del útero es contener el feto en desarrollo."
    },
    {
      id: "endometrio",
      nombre: "Endometrio",
      descripcion: "El endometrio es una membrana mucosa que recubre la cavidad del útero. Su grosor aumenta a partir de la ovulación y disminuye durante la menstruación. El endometrio es el lugar donde se implanta el óvulo fecundado. Función principal del endometrio: 1. Permite la implantación del embrión. 2. Nutre el embrión en las primeras etapas del embarazo."
    },
    {
      id: "vagina",
      nombre: "Vagina",
      descripcion: "La vagina es un órgano que tiene forma de tubo y una longitud aproximada de 10 a 12 cm en una mujer adulta. Este órgano es muscular y elástico. Sus músculos elásticos permiten la entrada del pene en las relaciones sexuales o la salida del bebé durante el parto. Funciones principales de la vagina: 1. Salida del flujo menstrual durante la regla. 2. Permite la entrada del pene en el aparato reproductor femenino. 3. Canal del parto, lugar por donde sale el feto en el momento del parto y por donde se elimina la placenta después del nacimiento del bebé."
    },
    {
      id: "vulva",
      nombre: "Vulva",
      descripcion: "La vulva está situada en la parte externa del aparato reproductor femenino. Está constituida por el clítoris, los labios mayores y menores, el orificio uretral y la abertura de la vagina. Funciones principales de la vulva: 1. La vulva recibe el pene en el acto sexual. 2. A través del orificio uretral se expulsa la orina. 3. Ofrece protección al aparato reproductor femenino."
    },
    {
      id: "ciclo-reproductor-femenino",
      nombre: "Ciclo del aparato reproductor femenino",
      descripcion: "Los ovarios secretan estrógenos y progesterona (hormonas sexuales femeninas) en cantidades diferentes en función del momento del ciclo ovárico de la mujer. Inicio del ciclo del aparato reproductor femenino (días 1 a 14): Al inicio del ciclo ovárico el nivel de estrógenos y progesterona es mínimo. Este factor induce la formación de un folículo en un ovario que madura hasta formar un folículo maduro o folículo de Graaf. A medida que madura el folículo, el nivel de estrógenos aumenta. Ovulación (días 10 a 14): Durante los días 10 a 14 del ciclo reproductivo femenino se produce la ovulación. En el interior del folículo de Graaf ha madurado un óvulo. El folículo se rompe, el óvulo sale del ovario y se dirige hacia la trompa de Falopio. No fecundación: Si no se produce la fecundación el óvulo muere, queda absorbido por el propio cuerpo o expulsado durante la menstruación. Durante la fase menstrual una parte del endometrio se desprende acompañada de sangre que sale al exterior durante un periodo de 3 a 5 días (flujo menstrual o regla). Fecundación: El acto sexual consiste en la introducción del pene en la vagina. Durante la eyaculación se liberan los espermatozoides en la vagina, recorren el interior del útero y llegan a las trompas de Falopio. Cuando se encuentran con el óvulo lo envuelven e intentan penetrar. Normalmente, sólo uno lo consigue (fecundación)."
    }
  ];
  
  export default saludData;