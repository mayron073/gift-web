export const knowledge = [
  {
    id: "basic-laws",
    title: "Leyes básicas de la electricidad",
    icon: "⚡",
    sections: [
      {
        name: "Ley de Ohm",
        definition:
          "Ley fundamental que establece la relación entre tensión, corriente y resistencia en un circuito eléctrico.",
        explanation:
          "La Ley de Ohm permite calcular uno de los tres valores eléctricos principales cuando se conocen los otros dos. Es la base de la mayoría de cálculos eléctricos.",
        formulas: ["V = I × R", "I = V / R", "R = V / I"],
        notes:
          "Usada en cálculos exigidos por la NTC 2050 para selección de conductores y protecciones."
      },
      {
        name: "Ley de Joule",
        definition:
          "Describe la cantidad de calor que produce un conductor al ser atravesado por una corriente eléctrica.",
        explanation:
          "El efecto Joule es responsable del calentamiento de cables y equipos eléctricos.",
        formulas: ["Q = I² × R × t"],
        notes:
          "se debe considerar este efecto para evitar sobrecalentamientos y riesgos de incendio."
      },
      {
        name: "Potencia eléctrica (Ley de Watt)",
        definition:
          "La potencia eléctrica es la cantidad de energía consumida o transformada por unidad de tiempo.",
        explanation:
          "En sistemas AC se debe considerar el factor de potencia para cálculos reales.",
        formulas: [
          "DC: P = V × I",
          "Ley de ohm: p = I² × R -- P = V²/R",
          "AC monofásico: P = V × I × cosφ",
          "AC trifásico: P = √3 × V × I × cosφ"
        ],
        notes:
          "Se establecen límites mínimos legales de factor de potencia en instalaciones."
      }
    ]
  },

  {
    id: "rlc",
    title: "Circuitos RLC",
    icon: "🔌",
    sections: [
      {
        name: "Reactancia",
        definition:
          "Oposición que presentan bobinas y capacitores al paso de corriente alterna.",
        formulas: [
          "XL = 2πfL",
          "XC = 1 / (2πfC)"
        ],
        explanation:
          "Depende de la frecuencia de la señal.",
        notes:
          "Importante para análisis de circuitos AC."
      },
      {
        name: "Impedancia",
        definition:
          "Oposición total al paso de la corriente en un circuito AC.",
        formulas: ["Z = √(R² + (XL − XC)²)"],
        explanation:
          "Combina resistencia y reactancia.",
        notes:
          "Base para cálculos de corriente y potencia."
      },
      {
        name: "Factor de potencia",
        definition:
          "es una medida de la eficiencia energética en sistemas de corriente alterna (CA), indicando la relación entre la potencia activa (trabajo útil, en Watts) y la potencia aparente (energía total suministrada, en VA), expresada como un número entre 0 y 1, donde un valor cercano a 1 es ideal, significando que casi toda la energía se convierte en trabajo útil y poca se desperdicia en energía reactiva",
        formulas: ["cosφ = P / S"],
        notes:
          "La empresa distribucion de energia exige corrección del factor de potencia."
      }
    ]
  },


  {
    id: "motors",
    title: "Motores eléctricos",
    icon: "⚙️",
    sections: [
      {
        name: "Motores asíncronos (inducción)",
        definition:
          "Motores de corriente alterna cuyo rotor gira a una velocidad inferior al campo magnético (deslizamiento).",
        explanation:
          "Son los más usados en la industria por su robustez y bajo mantenimiento.",
        details: [
          "Tipos: monofásicos y trifásicos",
          "Rotor jaula de ardilla",
          "Rotor bobinado"
        ],
        connections: ["Estrella (Y)", "Triángulo (Δ)"],
        notes:
          "La conexión depende de la tensión de alimentación indicada en la placa del motor."
      },
      {
        name: "Identificación de bobinas en motores AC",
        definition:
          "Proceso para identificar bobinas de trabajo y arranque en motores eléctricos.",
        explanation:
          "Se realiza con multímetro midiendo resistencia entre terminales.",
        steps: [
          "Identificar pares con continuidad",
          "Bobina de menor resistencia → trabajo",
          "Bobina de mayor resistencia → arranque"
        ],
        notes:
          "Procedimiento común en mantenimiento industrial."
      },
      {
        name: "Motores DC",
        definition:
          "Motores alimentados por corriente continua.",
        explanation:
          "Ofrecen alto par de arranque y control preciso de velocidad.",
        types: ["Serie (Devanado de campo en serie con la armadura)", "Shunt (Devanado de campo en paralelo con la armadura)", "Compound (Combina devanados serie y shunt, usando ambos.)"],
        notes:
          "Usados en aplicaciones especiales como grúas y tracción."
      }
    ]
  },

  {
    id: "protections",
    title: "Protecciones eléctricas",
    icon: "🛡️",
    sections: [
      {
        name: "Protecciones contra sobrecorriente y sobrecarga",
        definition:
          "Dispositivos que interrumpen el circuito ante sobrecargas o cortocircuitos.",
        explanation:
          "Evitan daños a conductores y equipos.",
        types: ["Fusibles (solo para sobrecorriente)", "Interruptores automáticos termomagneticos (curvas B, C, D)"],
        notes:
          "Retie: No se debe cambiar el interruptor automático por uno de mayor capacidad que supere la capacidad de corriente de los conductores del circuito a proteger. La corriente de disparo del interruptor nunca debe superar la corriente a la cual el aislamiento del conductor o los equipos asociados alcancen la temperatura máxima de operación permitida."
      },
      {
        name: "Protección diferencial",
        definition:
          "es un dispositivo de seguridad eléctrica que detecta fugas de corriente y corta el suministro para proteger personas y animales de electrocuciones, además de prevenir incendios por fallos de aislamiento.",
        explanation:
          "comparan la corriente de entrada y salida de un circuito y disparándose cuando detecta una diferencia significativa, indicando una derivación a tierra o contacto indirecto.",
        details: ["30 mA → protección humana", "100–300 mA → incendios"],
        notes:
          "Retie: protecciones diferenciales de alta sensibilidad (GFCI o RCD) en las áreas donde la instalación genere mayor vulnerabilidad de la persona al paso de la corriente, tales como lugares húmedos y mojados."
      },
      {
        name: "Dispositivos de protección contra sobretensiones (DPS)",
        definition:
          "Dispositivos que desvían picos de tensión hacia tierra.",
        types: ["Tipo 1 (acometida principal o antes)", "Tipo 2 (circuitos ramales)", "Tipo 3 (conexion directa a equipos sensibles)"],
        notes:
          "Retie: En baja tensión, los conductores de conexión del DPS a la red y a tierra no deben ser de calibre inferior a 14 AWG en cobre o 12 AWG en aluminio. En media, alta y extra alta tensión los conductores de conexión a la red y a tierra no deben ser de calibre inferior a 6 AWG"
      }
    ]
  },

  {
    id: "transformers",
    title: "Transformadores eléctricos",
    icon: "🔄",
    sections: [
      {
        name: "Transformadores",
        definition:
          "Máquinas eléctricas estáticas que transfieren energía AC sin cambiar la frecuencia.",
        explanation:
          "Consta de dos bobinas (primario y secundario) alrededor de un núcleo ferromagnético, permitiendo elevar o reducir la tensión y corriente por inducción electromagnetica.",
        details: ["Relacionde transformación:"],
        formulas: ["Np / Ns = Vp / Vs = Is / Ip"],
        notes:
          "La relación de vueltas entre las bobinas determina si la tensión se eleva (transformador elevador) o se reduce (transformador reductor). "
      },
      {
        name: "Tipos y conexiones",
        definition:
          "Clasificación según uso y conexión.",
        types: [
          "Potencia",
          "Potencial",
          "Distribución",
          "Aislamiento",
          "TC y TP"
        ],
        connections: ["Estrella (Y)", "Triángulo (Δ)", "Dyn11"],
        notes:
          "La placa del transformador define su conexión."
      },
      {
        name: "Pruebas a transformadores",
        definition:
          "Ensayos eléctricos y dieléctricos para verificar su estado.",
        details: [
          "Relación de transformación (TTR)",
          "Resistencia de aislamiento (Megger)",
          "Índice de polarización",
          "Pruebas al aceite (rigidez dieléctrica, DGA)"
        ],
        notes:
          "Indispensables antes de puesta en servicio y en mantenimiento."
      }
    ]
  },

  {
    id: "voltage-levels",
    title: "Niveles de tensión (RETIE)",
    icon: "📊",
    sections: [
      {
        name: "Clasificación de tensión",
        definition:
          "Rangos de tensión definidos por el RETIE para diseño y seguridad.",
        details: [
          "Muy Baja Tensión (MBT): Las tensiones inferiores a 25 V en corriente alterna y menores a 50 V en corriente continua. Conforme a la norma IEC 61140 de 2016.",
          "Baja Tensión (BT): Los de tensión nominal menor o igual a 1.000 V y mayores o iguales de 25 V c.a. o 60 V c.c.",
          "Media Tensión (MT):Los de tensión nominal superior a 1.000 V e inferior a 57,5 kV. Tensiones normalizadas o nominales de 11,4 kV, 13,2 kV, 34,5 kV, 44 kV.",
          "Alta Tensión (AT): Tensiones mayores o iguales a 57,5 kV y menores o iguales a 230 kV. Tensiones normalizadas o nominales de 66 kV, 110 kV, 115 kV, 220 kV y 230 kV.",
          "Extra Alta Tensión (EAT): Corresponde a tensiones superiores a 230 kV. Tensión normalizada 345 kV y 500 kV.V"
        ],
        notes:
          "Si en la instalación existen circuitos en los que se utilicen distintas tensiones, el conjunto del sistema se clasificará, en el grupo correspondiente al valor de la tensión nominal más elevada."
      }
    ]
  },

  {
    id: "service-drop",
    title: "Cálculo de acometidas residenciales",
    icon: "🏠",
    sections: [
      {
        name: "Cálculo de corriente",
        definition:
          "Es la conexión física que une la red de distribución pública con la instalación interna de una propiedad (casa, edificio, local), llevando la energía desde la calle hasta tu medidor y el cuadro general.",
        details: ["Cálculos:"],
        steps: [
          "Planteamiento del problema; area, sistema de alimentacion, FP, parametros electricos de las cargas ramales (las potencias se comvierten a VA), longitud de la acometida y temperatura amb.",
          "Calcular potencia del numero de circuitos: area(m²) x 33VA/m²",
          "Sumar potencia de circuitos de tomas, alumbrado (1800 W, para cada uno) y potencia por numero de circuitos obtenida.",
          "Aplicar factor de demanda a esa potencia, teniendo en cuenta la NTC 2050; para los primeros 3000VA se aplica el 100% y hasta 120000VA el 35%.",
          "Sumar a la potencia obtenida las potencias del resto de circuitos ramales, más tambien 3000VA que no recuerdo de donde salen 🙈​.",
          "Calcular corriente total (It): I = P / (V × FP)",
          "Calcular corriente aplicando factor por carga continua (25%): It x 1,25",
          "Seleccionar conductor por capacidad de corriente y aplicando factor de correcion por temperatura."
        ],
        formulas: ["area(m²) x 33VA/m²", "I = P / (V × FP)", "It x 1,25"],
        notes:
          "NTC 2050: Los conductores del alimentador deben tener una capacidad de corriente suficiente para alimentar las cargas conectadas. En ningún caso la carga calculada para un alimentador debe ser menor a la suma de las cargas de los ramales conectados"
      },
      {
        name: "Regulación de tensión",
        definition:
          "es la disminución de la tensión a lo largo de un conductor debido a su resistencia.",
        details: ["Cálculos:"],
        steps: [
          "Buscar valores de resistencia y reactancia para el conductor elegido en el cuadro 9 de la NTC 2050.",
          "Calcular impedancia eficaz (Ω/Km): Z = R × cos(θ) + XL × sin(θ)",
          "Calcular caida de tensión ΔV para circuitos monofasicos o trifasicos.",
          "Calcular % de regulación."
        ],
          formulas: [
          "Z = R × cos(θ) + XL × sin(θ)",
          "Cxtos monofasicos: ΔVFN = Z × 2 × L × I",
          "Cxtos trifasicos: ΔVFF = √3 × ΔVFN",
          "% Regualción = (ΔV / V) × 100"
        ],
        notes:
          "RETIE: Se debe asegurar que la regulación (caída de tensión) en la acometida no supere el 3% calculada en el dispositivo de corte, y la caída de tensión en alimentadores y circuitos ramales a carga plena de diseño, no sea mayor al 5%."
      }
    ]
  },

  {
    id: "grounding",
    title: "Puesta a tierra",
    icon: "🌍",
    sections: [
      {
        name: "Sistema puesta a tierra",
        definition:
          "Grupo de elementos conductores equipotenciales, en contacto eléctrico con el suelo o una masa metálica de referencia común, que distribuye las corrientes eléctricas de falla en el suelo o en la masa. Comprende electrodos, conexiones y cables enterrados. ",
        details: [
          "Estudio del Suelo: implementar técnicas para la medición de la resistividad del suelo usando telurometro.",
          "Si es necesario bajar la resistividad del terreno usando técnicas y productos correctos",
          "Seleccionar electrodo: se pueden usar; Varillas, tubos, placas, flejes, alambres o cables desnudos. Teniendo en cuenta las dimensiones en la tabla 15.2 de RETIE",
          "No se permite el uso de aluminio en los electrodos de las puestas a tierra.",
          "El electrodo tipo varilla o tubo debe tener mínimo 2,4 m de longitud; además, debe estar identificado con la razón social o marca registrada del fabricante y sus dimensiones; esto debe hacerse dentro los primeros 30 cm medidos desde la parte superior.",
          "El electrodo puede ser instalado en forma vertical, horizontal a profundidad no menor de 70 cm",
          "Selccionar conductor de puesta a tierra con base a la tabala 250-94 de la NTC 2050.",
          "Para seleccionar conductor del electrodo de puesta tierra para MT, AT y EAT, revisar seccion 15.3.2 del RETIE.",
          "Se deben dejar puntos de conexión accesibles e inspeccionables al momento de la medición. Cuando para este efecto se construyan cajas de inspección, sus dimensiones deben ser mínimo de 30 cm x 30 cm, o de 30 cm de diámetro si es circular y su tapa debe ser removible, no aplica para lineas de transporte.",
          "Realizar mediciones de resistencia del suelo una vez instalado el sistema de puesta a tierra."
        ],
        notes:
          "Toda instalación eléctrica que le aplique el RETIE, excepto donde se indique expresamente lo contrario, tiene que disponer de un Sistema de Puesta a Tierra (SPT)"
      },
      {
        name: "Resistencia de puesta a tierra (RPT)",
        definition:
          "Pueden tomarse como referencia los siguientes valores máximos de RPT adoptados de las normas técnicas IEC 60364­4­442, ANSI/IEEE 80, NTC 2050, NTC 4552:",
        details: [
          "Estructuras de líneas de transmisión: 20 Ω",
          "Subestaciones de alta y extra alta tensión: 1 Ω",
          "Subestaciones de media tensión: 10 Ω",
          "Protección contra rayos: 10 Ω",
          "Neutro de acometida en baja tensión: 25 Ω"
        ],
        notes:
          "Si no se cumple, se debe mejorar el sistema."
      }
    ]
  },

  {
    id: "power-triangle",
    title: "Triángulo de potencias",
    icon: "📐",
    sections: [
      {
        name: "Factor de potencia (FP)",
        explanation: ["Formulas:"],
        formulas: ["FP = cos(φ) = P / S​", "φ = arccos(FP)"],
        notes:
          "Base para análisis energético y corrección del factor de potencia."
      },
      {
        name: "Monofasica (AC 1Φ)",
        explanation: ["Formulas:"],
        formulas: [
          "Relacion entre potencias: S² = P² + Q²",
          "S = V × I", "P = V × I × cos(φ)", 
          "Q = V × I × sin(φ)"],
        
      },
      {
        name: "Trifásica (AC 3Φ)",
        explanation: ["Formulas:"],
        formulas: [
          "S = √3 × V(rms) × I(rms) ",
          "P = √3 × V(rms) × I(rms) × cos(φ)",
          "Q = √3 × V(rms) × I(rms) × sin(φ)",
        ],
      },
      {
        name: "Otras formulas",
        explanation: ["Formulas:"],
        formulas: [
          "Q= S × sin(φ)",
          "Q = tanφ × P",
          "P = S × cos(φ)",
          "S = P / cos(φ)"
        ],
      }
    ]
  },

  {
    id: "capacitors",
    title: "Cálculo de capacitores para motores",
    icon: "🔋​",
    sections: [
      {
        name: "Corrección del factor de potencia",
        definition:
          "Uso de capacitores para reducir potencia reactiva.",
        steps: [
          "idetificar parametros necesarios; FP inicial (FP1), tensión, potencia(Hp o W), eficiencia y frecuencia.",
          "Convertir potencia de salida (Ps) a W si es necesario y dividir la eficiencia entre 100",
          "Calcular potencia de entrada (Pe) dividiendo Ps entre la eficiencia y multiplicar por 100",
          "Calcular la potencia reactiva total (QL), multiplicando la tan del φ del FP1 por Pe",
          "Calcular la potencia reactiva ideal (Q), multiplicando la tan del φ de 0.9 por Pe",
          "Calcular Qc restando QL - Q",
        ],
        formulas: [
          "φ = arcos(FP)",
          "Pe = (Ps (w) / (η / 100) ) x 100",
          "Q = tanφ × P",
          "Qc = QL - Q"
        ],
        notes:
          "No se deberia corregir cosφ > 0,9."
      },
      {
        name: "Cálculo del capacitor",
        definition:
          "Obtención de la capacitancia en μF.",
        formulas: [
          "C = Qc(VAR) / (2πfV²)"
        ],
        notes:
          "Instalar capacitores cerca del motor."
      }
    ]
  },

  {
    id: "safety",
    title: "Seguridad eléctrica",
    icon: "🛡️",
    sections: [
      {
        name: "Cinco reglas de oro",
        definition:
          "Procedimiento obligatorio para trabajos eléctricos seguros.",
        steps: [
          "Efectuar corte visible",
          "Bloqueo contra reconexión",
          "Verificar ausencia de tensión",
          "Puesta a tierra",
          "Señalizar"
        ],
        notes:
          "Cuidatee"
      }
    ]
  },
];
