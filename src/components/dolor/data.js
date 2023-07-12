const escalaFlacc = [
    {
      componente: "Expresión facial",
      puntuaciones: [
        { score: 0, descripción: "Normal" },
        { score: 1, descripción: "Inquieta o tensa" },
        { score: 2, descripción: "Fruncimiento, ceño o muecas" },
      ],
    },
    {
      componente: "Lenguaje (llanto, gemidos)",
      puntuaciones: [
        { score: 0, descripción: "No hay" },
        { score: 1, descripción: "Lloriqueo o gimoteo" },
        { score: 2, descripción: "Llanto persistente o gritos" },
      ],
    },
    {
      componente: "Actividad corporal",
      puntuaciones: [
        { score: 0, descripción: "Normal" },
        { score: 1, descripción: "Aumento leve de la tensión muscular" },
        { score: 2, descripción: "Rigidez o movimientos corporales anormales" },
      ],
    },
    {
      componente: "Estado de reposo",
      puntuaciones: [
        { score: 0, descripción: "Relajado" },
        { score: 1, descripción: "Inquieto, incómodo" },
        { score: 2, descripción: "Tenso, rígido" },
      ],
    },
    {
      componente: "Consolabilidad",
      puntuaciones: [
        { score: 0, descripción: "Consolable" },
        { score: 1, descripción: "Difícil de consolar o consuelo momentáneo" },
        { score: 2, descripción: "Imposible de consolar" },
      ],
    },
  ];
  
export default escalaFlacc;