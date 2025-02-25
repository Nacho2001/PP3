const anticonceptivosData = [
  {
    id: "Anillo Anticonceptivo",
    nombre: "Anillo anticonceptivo",
    descripcion: "Es un anillo flexible que se coloca dentro de la vagina e impide la ovulación mediante la liberación continua de hormonas.",
    uso: "Se lo coloca la mujer dentro de la vagina de manera similar a un tampón. Debe presionar el anillo introducirlo en la vagina y soltarlo para que quede colocado.",
    efectividad:
      "Alta",
    ventajas: [
      "Su efecto dura 3 semanas. Luego debe retirarse y colocar uno nuevo después de la menstruación.",
      "No interfiere en la relación sexual."
    ],
    desventajas: [
      "Puede provocar dolor", "irritación", "aumento de la secreción vaginal", "lesiones epiteliales", "incomodidad durante el coito y expulsión."
    ],
    previeneIts:
      "Sí, previene el VIH y otras infecciones de transmisión sexual.",
    FrecuenciaDeUso:
      "Se coloca un anillo una vez por mes.",
  },
  {
    id: "Anticonceptivo hormonal inyectable",
    nombre: "Inyección",
    descripcion:
      "Son dosis de hormonas inyectables que inhiben la ovulación. Vienen en ampollas.",
    uso:
      "Se aplica una inyección intramuscular profunda una vez al mes o trimestralmente, siempre en la misma fecha.",
    efectividad:
      "Alta, siempre y cuando su aplicación se realice en la fecha correcta.",
    ventajas: [
      "Tiene el mismo efecto que las pastillas, pero se aplica de forma mensual o trimestral.",
    ],
    desventajas: [
      "Es importante respetar la fecha de la nueva inyección.",
      "Puede perder efectividad.",
      "Al inicio del método, las menstruaciones pueden ser irregulares o prolongadas.",
      "Con la continuación del método puede disminuir o ausentarse el sangrado menstrual.",
    ],
    previeneIts: "No previene infecciones de transmisión sexual.",
    FrecuenciaDeUso: "Una vez por mes o cada tres meses.",
  },
  {
    id: "Anticonceptivo oral de emergencia",
    nombre: "Pastilla del día después.",
    descripcion:
      "Son una o dos pastillas que contienen una alta dosis de hormonas que retrasan la ovulación. Se recomienda su uso sólo para situaciones de emergencia.",
    uso:
      " Debe tomarse luego de una relación sexual en la que haya fallado el método o no se haya usado uno. Es más segura dentro de las primeras 12 horas aunque se puede tomar hasta 5 días después. En caso de violación debe tomarse siempre.",
    efectividad:
      "Alta, si se toma dentro de los 5 días. Cuanto antes se toma su eficacia es más alta.",
    ventajas: [
      "No tiene contraindicaciones y permite evitar un embarazo luego de haber mantenido relaciones sexuales no protegidas o en las que falló el método.", "Si la mujer ya está embarazada, no afecta al embrión en formación.", "La pueden retirar mujeres y varones, adolescentes o adultos, solos o en pareja.", "En caso de emergencia, está disponible las 24 hs. en la guardia de los hospitales.",
    ],
    desventajas: [
      "No se recomienda su uso habitual.", "Está indicado exclusivamente para situaciones de emergencia.Puede producir náuseas, vómitos, dolor de cabeza, mareos u otros malestares.",
    ],
    previeneIts: "No previene infecciones de transmisión sexual.",
    FrecuenciaDeUso: "En cada relación sexual que haya fallado el método o no se haya usado uno.",
  },
  {
    id: "DIU",
    nombre: "DIU (Dispositivo Intrauterino)",
    descripcion:
      "Es un pequeño dispositivo de plástico y cobre que se coloca dentro del útero.",
    uso:
      "Altera la movilidad de los espermatozoides e impide que el óvulo sea fecundado.",
    efectividad: "99% efectivo.",
    ventajas: [
      "Dura hasta 10 años.",
      "No interfiere con las relaciones sexuales.",
      "No tiene efectos hormonales.",
    ],
    desventajas: [
      "Puede aumentar el sangrado y los cólicos menstruales.",
      "No protege contra el VIH y otras infecciones de transmisión sexual.",
      "Requiere colocación por un profesional de la salud.",
    ],
    previeneIts: "No previene infecciones de transmisión sexual.",
    FrecuenciaDeUso:
      "Debe cambiarse por otro dispositivo luego de 3-10 años de la colocación . No es necesario hacer un descanso.",
  },
  {
    id: "Implante Subdérmico",
    nombre: "Chip",
    descripcion:
      "Es un implante de plástico flexible del tamaño de un fósforo. Libera hormonas que impiden la ovulación.",
    uso:
      "Se inserta debajo de la piel del brazo con una una pequeña incisión con anestesia local. La colocación la hace un profesional.",
    efectividad: "Alta",
    ventajas: [
      "Su efecto dura de 3 a 7 años.", "La efectividad no depende de sostener un hábito por parte de la mujer.", "Se controla sólo una o dos veces por año."
    ],
    desventajas: [
      "Es para toda persona con capacidad de gestar que no cuente con cobertura del subsistema de obras sociales o del subsistema privado, haya tenido o no un evento obstétrico. (parto, cesárea, aborto).",
    ],
    previeneIts: "No previene infecciones de transmisión sexual.",
    FrecuenciaDeUso:
      "Debe cambiarse por otro implante luego de 3 años de la colocación. No es necesario hacer un descanso.",
  },
  {
    id: "Ligadura Tubarina",
    nombre: "Ligadura de trompas",
    descripcion:
      " Es un método quirúrgico permanente para mujeres.",
    uso:
      "Consiste en ligar, cortar u obstruir las trompas de Falopio de manera que los óvulos no puedan estar en contacto con los espermatozoides. La cirugía es sencilla. La realiza un profesional en un quirófano y requiere anestesia total o epidural.",
    efectividad: "Alta",
    ventajas: [
      "No hay ninguna condición médica que restrinja la posibilidad de elección de este método, aunque algunas condiciones o circunstancias requieren ciertas precauciones.", "No tiene efectos secundarios a largo plazo. Cualquier mujer mayor de edad puede acceder gratuitamente."
    ],
    desventajas: [
      "A pesar de no ser necesario, en algunos servicios se solicita haber tenido hijos, el consentimiento de padres o pareja, o autorización judicial.",
    ],
    previeneIts: "No previene infecciones de transmisión sexual.",
    FrecuenciaDeUso:
      "La intervención es por única vez.",
  },
  {
    id: "Anticonceptivo exclusivo para la lactancia materna",
    nombre: "Minipíldora",
    descripcion:
      "Son pastillas de toma diaria, que solo tienen efecto durante la lactancia. Actúan produciendo un espesamiento del moco cervical, lo que dificulta el ascenso de los espermatozoides.",
    uso:
      "Las tiene que tomar la mujer todos los días del mes en el mismo horario sin descanso entre cada caja. Para empezar a usar este método se debe hacer una consulta previa con un médico.",
    efectividad:
      "Alta. La efectividad disminuye cuando el bebé incorpora otros alimentos por fuera de leche materna o cuando la mujer comienza a menstruar. En ese caso, se debe cambiar el método anticonceptivo.",
    ventajas: [
      "No tiene ningún efecto sobre el bebé.",
      "No afecta el volumen de la leche o su composición.",
    ],
    desventajas: [
      "Solo se puede usar este método si la mujer está amamantando",
      "todavía no menstruó y tiene un bebé de menos de 6 meses que se alimenta exclusivamente de leche materna.",
    ],
    previeneIts: "No previene infecciones de transmisión sexual.",
    FrecuenciaDeUso: "Todos los días.",
  },
  {
    id: "Parche Anticonceptivo",
    nombre: "Parche",
    descripcion:
      "Es un parche de plástico que se adhiere a la piel liberando hormonas que evitan la ovulación.",
    uso:
      "Se coloca un parche nuevo una vez a la semana durante 3 semanas, siempre en el mismo día.",
    efectividad:
      "Alta. Garantiza dos días adicionales de protección ante un olvido.",
    ventajas: [
      "Evita tomar pastillas y recibir inyecciones.",
    ],
    desventajas: [
      "No se encuentran disponibles gratuitamente."
    ],
    previeneIts: "No previene infecciones de transmisión sexual.",
    FrecuenciaDeUso: "Una vez por semana durante 3 semanas.",
  },
  {
    id: "Anticonceptivos orales combinados",
    nombre: "Pastillas anticonceptivas, anticonceptivos, pastillas.",
    descripcion:
      "Son pastillas de toma diaria hechas a base de hormonas que evitan la ovulación. Existen opciones de 21 o 28 comprimidos.",
    uso:
      "Se tiene que tomar una pastilla cada día en el mismo horario, durante 21 o 28 días. Para empezar a usar este método se debe hacer una consulta previa con un médico y éste indicará cuál es la adecuada para cada mujer.",
    efectividad: "99% si se toman todos los días.",
    ventajas: [
      "Muy efectivas si se usan correctamente.",
      "Regulan el ciclo menstrual.",
      "Disminuyen los dolores menstruales.",
    ],
    desventajas: [
      "No protegen contra el VIH y otras infecciones de transmisión sexual.",
      "Pueden tener efectos secundarios como náuseas, dolor de cabeza o sangrado intermenstrual.",
      "Requieren toma diaria.",
    ],
    previeneIts: "No previene infecciones de transmisión sexual.",
    FrecuenciaDeUso: "Todos los días.",
  },
  {
    id: "Preservativo para penes",
    nombre: "Forro, profiláctico, condón, preservativo.",
    descripcion:
      "Es una funda de látex que se coloca en el pene erecto en cada relación sexual e impide que el semen entre en la vagina, ano o boca.",
    uso: "Se coloca cuando el pene está erecto, se aprieta la punta y se desenrolla hasta la base del pene. Se retira después de la eyaculación, antes de que el pene pierda la erección.",
    efectividad:
      "98% si se usa correctamente en todas las relaciones sexuales.",
    ventajas: [
      "Protege contra el VIH y otras infecciones de transmisión sexual.",
      "No requiere supervisión médica.",
      "No tiene efectos secundarios.",
      "Es fácil de conseguir y no repercute en el organismo."
    ],
    desventajas: [
      "Requiere uso correcto en cada relación sexual.",
      "Puede romperse si no se usa adecuadamente.",
    ],
    previeneIts:
      "Sí, previene el VIH y otras infecciones de transmisión sexual.",
    FrecuenciaDeUso:
      "En cada relación sexual (vaginal, anal u oral) desde el principio hasta el final.",
  },
  {
    id: "Preservativo femenino",
    nombre: "Preservativo femenino.",
    descripcion: "Es una funda de poliuretano con un anillo en cada extremo, uno de los cuales es cerrado.",
    uso: "En cada relación sexual, se inserta en el interior de la vagina y queda en el exterior uno de los extremos.",
    efectividad:
      "Alta.",
    ventajas: [
      "Brinda autonomía a la mujer y es una alternativa para la negociación del uso del preservativo.", "Protege de infecciones de transmisión sexual.", "No interrumpe la relación sexual porque puede colocarse previamente.", "No es de látex con lo cual puede utilizarse con cualquier tipo de lubricante."
    ],
    desventajas: [
      "Aún no se encuentran disponibles en Argentina.",
    ],
    previeneIts:
      "Sí, pero sólo en prácticas de sexo vaginal.",
    FrecuenciaDeUso:
      "En cada relación sexual.",
  },  
  {
    id: "Sistema de liberacion intrauterino de levonogestrel",
    nombre: "SIU.",
    descripcion: "Es un dispositivo en forma de T que se coloca en el interior del útero. Es similar a un DIU T de cobre, pero se diferencia de éste en que libera una sustancia llamada levonorgestrel en forma constante.",
    uso: "Se coloca en el interior del útero por un profesional en un consultorio.",
    efectividad:
      "Alta.",
    ventajas: [
      "Su efecto dura 5 años.", "La efectividad no depende de un hábito de la mujer.", "Sólo hay que controlarlo una o dos veces por año.", "Puede ser usado en forma segura por la mayoría de las mujeres, aunque está especialmente indicado en mujeres que tienen menstruaciones muy abundantes porque reduce sustancialmente el flujo menstrual."
    ],
    desventajas: [
      "El efecto adverso más frecuente del SIU es el goteo sanguíneo persistente durante los primeros meses posteriores a su colocación.", "Luego de los 2 años de uso, produce ausencia del sangrado menstrual en el 50% de las usuarias.",
    ],
    previeneIts:
      "No previene de infecciones de transmisión sexual.",
    FrecuenciaDeUso:
      "Debe cambiarse por otro SIU a los 5 años de la colocación. No es necesario hacer un descanso",
  },
  {
    id: "Vasectomía",
    nombre: "Vasectomía o esterelización masculina.",
    descripcion: "Es un método quirúrgico permanente, seguro y sencillo. Cómo se usa Consiste en ligar los conductos deferentes de manera de impedir el paso de los espermatozoides desde los testículos hacia el pene. Puede realizarse con anestesia local y sin internación.",
    uso: "Se coloca en el interior del útero por un profesional en un consultorio.",
    efectividad:
      "Alta, luego de tres meses de haber sido realizada.",
    ventajas: [
      "No requiere anestesia general.", "No modifica el aspecto físico de los órganos sexuales masculinos.", "No tiene efectos colaterales.", "No afecta el deseo ni la actividad sexual."
    ],
    desventajas: [
      "Es efectiva tres meses después de haber sido realizada.", "En ese período, debe usarse otro método anticonceptivo.",
    ],
    previeneIts:
      "No previene de infecciones de transmisión sexual.",
    FrecuenciaDeUso:
      "La intervención es por única vez.",
  },  
];

export default anticonceptivosData;
