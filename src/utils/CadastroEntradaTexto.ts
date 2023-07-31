const sessions = [
    {
      id: 1,
      title: 'Insira alguns dados',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo',
        },
        {
          id: 1,
          label: 'Email',
          placeholder: 'Digite seu email completo',
        }
      ],
      checkbox: []
    },
    {
      id: 2,
      title: 'Agora, mais alguns dados',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'CEP',
        },
      ],
      checkbox: []
    },
    {
      id: 2,
      title: 'Para finalizar, quais são seus planos?',
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: 'Sulamerica'
        },
        {
          id: 2,
          value: 'Unimed'
        }
      ]
    }
  ]

export { sessions }