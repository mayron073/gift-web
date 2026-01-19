export const exercisesBank = {
  ohm: {
    title: "Ley de Ohm",
    generator: () => {
      const V = Math.floor(Math.random() * 220) + 20;
      const R = Math.floor(Math.random() * 90) + 10;
      return {
        question: `Calcule la corriente si V = ${V} V y R = ${R} Ω`,
        answer: (V / R).toFixed(2),
        unit: "A"
      };
    }
  },

  power: {
    title: "W",
    generator: () => {
      const V = Math.floor(Math.random() * 220) + 20;
      const I = Math.floor(Math.random() * 10) + 1;
      return {
        question: `Calcule la potencia si V = ${V} V e I = ${I} A`,
        answer: (V * I).toFixed(1),
        unit: "W"
      };
    }
  },

  acometida: {
    title: "Acometidas",
    generator: () => {
      const P = Math.floor(Math.random() * 6000) + 2000; // W
      const V = Math.floor(Math.random() * 220) + 20;
      const cosPhi = 0.9;

      const I = P / (V * cosPhi);

      return {
        question: `Una vivienda tiene una potencia total instalada de ${P} W a ${V} V con cosφ = ${cosPhi}. Calcule la corriente de la acometida.`,
        answer: I.toFixed(2),
        unit: "A",
        check: (userAnswer) =>
          Math.abs(userAnswer - I) < 0.5
      };
    }
  },
    
  triviaRETIE: {
    title: "Trivia",
    generator: () => {
      const questions = [
        // Puesta a tierra y seguridad
        {
          q: "¿Cuál es el valor máximo de resistencia de puesta a tierra en una vivienda?",
          a: "25"
        },
        {
          q: "¿Qué instrumento se usa para medir la resistividad del suelo?",
          a: "telurometro"
        },
        {
          q: "¿Qué sensibilidad debe tener un interruptor diferencial para protección de personas?",
          a: "30"
        },

        // Caídas de tensión y acometidas
        {
          q: "¿Cuál es la caída máxima permitida en una acometida según RETIE?",
          a: "3"
        },

        // Conductores y protecciones
        {
          q: "¿Qué dispositivo protege solo contra sobrecorriente?",
          a: "fusible"
        },

        // Factor de potencia
        {
          q: "¿Cuál es el valor mínimo recomendado del factor de potencia?",
          a: "0.95"
        },

        // Niveles de tensión (RETIE)
        {
          q: "¿Hasta qué valor se considera baja tensión según RETIE?",
          a: "1000"
        },
        {
          q: "¿Entre qué valores se clasifica la media tensión?",
          a: "1000-57000"
        },
        {
          q: "¿A partir de qué valor se considera alta tensión?",
          a: "57000"
        },
        {
          q: "¿La tensión de 13.2 KV corresponde a qué nivel?",
          a: "media"
        },
        {
          q: "¿Una red de 34.5 KV pertenece a qué nivel de tensión?",
          a: "media"
        },
        {
          q: "¿Una línea de 115 KV corresponde a qué nivel de tensión?",
          a: "alta"
        },

        // Sistemas eléctricos
        {
          q: "¿Cuál es la frecuencia del sistema eléctrico en Colombia?",
          a: "60"
        }
      ];

      const item = questions[Math.floor(Math.random() * questions.length)];

      return {
        question: item.q,
        answer: item.a,
        unit: "",
        check: (userAnswer) =>
          userAnswer
            .toString()
            .toLowerCase()
            .trim() === item.a
      };
    }
  },

  inductiveReactance: {
    title: "Xl",
    generator: () => {
      const f = [50, 60][Math.floor(Math.random() * 2)];
      const L = (Math.random() * 0.09 + 0.01).toFixed(3);

      return {
        question: `Calcule la reactancia inductiva si f = ${f} Hz y L = ${L} H`,
        answer: (2 * Math.PI * f * L).toFixed(2),
        unit: "Ω"
      };
    }
  },

  capacitiveReactance: {
    title: "Xc",
    generator: () => {
      const f = [50, 60][Math.floor(Math.random() * 2)];
      const C = Math.floor(Math.random() * 90) + 10; // µF

      return {
        question: `Calcule la reactancia capacitiva si f = ${f} Hz y C = ${C} µF`,
        answer: (1 / (2 * Math.PI * f * C * 1e-6)).toFixed(2),
        unit: "Ω"
      };
    }
  },

  impedance: {
    title: "Z",
    generator: () => {
      const R = Math.floor(Math.random() * 30) + 10;
      const XL = Math.floor(Math.random() * 40) + 10;
      const XC = Math.floor(Math.random() * 30) + 5;

      return {
        question: `Calcule la impedancia si R = ${R} Ω, XL = ${XL} Ω y XC = ${XC} Ω`,
        answer: Math.sqrt(R ** 2 + (XL - XC) ** 2).toFixed(2),
        unit: "Ω"
      };
    }
  },

  transformerTurns: {
    title: "Relación de transformación",
    generator: () => {
      const Vp = Math.floor(Math.random() * 8000) + 2000;
      const Vs = [110, 220][Math.floor(Math.random() * 2)];
      const Np = Math.floor(Math.random() * 900) + 100;

      const Ns = (Np * Vs) / Vp;

      return {
        question: `Un transformador tiene Vp = ${Vp} V, Vs = ${Vs} V y Np = ${Np} espiras. Calcule el número de espiras del secundario.`,
        answer: Ns.toFixed(0),
        unit: "espiras"
      };
    }
  },

};
