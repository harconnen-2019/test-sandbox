// https://github.com/feature-sliced/eslint-config

const FS_LAYERS = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
const FS_SEGMENTS = ['ui', 'model', 'lib', 'api', 'config', 'assets'];

const getLowerLayers = (layer) => FS_LAYERS.slice(FS_LAYERS.indexOf(layer) + 1);
const getUpperLayers = (layer) => FS_LAYERS.slice(0, FS_LAYERS.indexOf(layer));

const FS_SLICED_LAYERS_REG = getUpperLayers('shared').join('|');
const FS_SEGMENTS_REG = [...FS_SEGMENTS, ...FS_SEGMENTS.map((seg) => `${seg}.*`)].join('|');

const getNotSharedLayersRules = () =>
  getUpperLayers('shared').map((layer) => ({
    from: layer,
    allow: getLowerLayers(layer),
  }));

const sharedLayerRule = {
  from: 'shared',
  allow: 'shared',
};

const getLayersBoundariesElements = () =>
  FS_LAYERS.map((layer) => ({
    type: layer,
    pattern: `${layer}/!(_*){,/*}`,
    mode: 'folder',
    capture: ['slices'],
  }));

module.exports = {
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:boundaries/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'plugin:jsdoc/recommended-typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-refresh', 'boundaries', 'import'],
  settings: {
    'import/resolver': { typescript: {} },
    'boundaries/elements': [...getLayersBoundariesElements()],
    // 'boundaries/ignore': ['**/*.test.*'],
  },
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'import/order': [
      2,
      {
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        'pathGroups': FS_LAYERS.map((layer) => ({
          pattern: `**/?(*)${layer}{,/**}`,
          group: 'internal',
          position: 'after',
        })),
        'pathGroupsExcludedImportTypes': ['builtin'],
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'boundaries/element-types': [
      2,
      {
        default: 'disallow',
        message:
          '"${file.type}" is not allowed to import "${dependency.type}" | See rules: https://feature-sliced.design/docs/reference/layers/overview ',
        rules: [...getNotSharedLayersRules(), sharedLayerRule],
      },
    ],
    'import/no-internal-modules': [
      'error',
      {
        allow: [
          /**
           * Разрешить не импортировать сегменты из срезов
           * @example
           * 'entities/form/ui' // Fail
           * 'entities/form' // Pass
           */
          `**/*(${FS_SLICED_LAYERS_REG})/!(${FS_SEGMENTS_REG})`,

          /**
           * Разрешить срезы с группировкой структуры
           * @example
           * 'features/auth/form' // Pass
           */
          `**/*(${FS_SLICED_LAYERS_REG})/!(${FS_SEGMENTS_REG})/!(${FS_SEGMENTS_REG})`,

          /**
           * Разрешить не импортировать сегменты в общие сегменты
           * @example
           * 'shared/ui/button' // Pass
           */
          `**/*shared/*(${FS_SEGMENTS_REG})/!(${FS_SEGMENTS_REG})`,

          /**
           * Разрешить импорт из сегментов в общем доступе
           * @example
           * 'shared/ui' // Pass
           */
          `**/*shared/*(${FS_SEGMENTS_REG})`,

          /** allow global modules */
          `**/node_modules/**`,

          /**
           * разрешить пользовательские общие сегменты с _prefix
           */
          `**/*shared/_*`,
          `**/*shared/_*/*`,
        ],
      },
    ],
  },
};
