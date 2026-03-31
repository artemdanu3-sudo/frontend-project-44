import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest, // если будут тесты
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      'no-console': 'off', // в учебных проектах консоль разрешена
    },
  },
];
