module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Определите слой?',
        choices: ['app', 'pages', 'widgets', 'features', 'entities', 'shared'],
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory(Optional)',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, componentName, dir } = answers;
      // eslint-disable-next-line sonarjs/no-nested-template-literals
      const path = `${category}/${dir ? `${dir}/` : ''}${componentName}`;
      const absPath = `src/${path}`;
      return {
        ...answers,
        path,
        absPath,
        category,
      };
    });
  },
};
