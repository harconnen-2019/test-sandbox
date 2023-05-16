module.exports = [
  {
    type: 'input',
    name: 'name',
    default: 'component',
    message: 'Название компонента',
  },
  {
    type: 'input',
    name: 'section',
    message: 'Создать группу (опционально)',
  },
  {
    type: 'confirm',
    name: 'module',
    default: true,
    message: 'CSS Module?',
  },
  {
    type: 'confirm',
    name: 'test',
    default: true,
    message: 'TDD test?',
  },
  {
    type: 'confirm',
    name: 'readme',
    default: false,
    message: 'Создать README?',
  },
];
