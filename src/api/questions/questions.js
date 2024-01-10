export default [
  {
    _id: '1a',
    category: 'html', // html, css, javasscript
    level: 'easy', // easy, medium, hard
    description: '¿Para qué se utiliza la etiqueta <iframe>?',
    answers: {
      a: 'Para incrustar contenido',
      b: 'Para dibujar gráficos',
      c: 'Para enmarcar un grupo de elementos',
      d: 'Para crear una etiqueta condicional',
    },
    correctAnswer: 'a',
    feedback: 'El elemento HTML <iframe> (de inline frame) representa un contexto de navegación anidado, el cual permite incrustar otra página HTML en la página actual.',
    deleted: false,
  },
  {
    _id: '2b',
    category: 'js',
    level: 'medium',
    description: '¿Cual NO es la etiquta semantica?',
    answers: {
      a: '<section>',
      b: '<aside>',
      c: '<footer>',
      d: '<content>',
    },
    correctAnswer: 'd',
    feedback: '',
    deleted: false,
  },
  {
    _id: '3c',
    category: 'javascript',
    level: 'easy',
    description: '',
    answers: {
      a: 'forEach()',
      b: 'join()',
      c: '<footer>',
      d: '<content>',
    },
    correctAnswer: 'd',
    feedback: '',
    deleted: false,
  },
];