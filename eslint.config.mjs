import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


export default [
  {files: ['**/*.{js,mjs,cjs,ts}',],},
  {languageOptions: { globals: globals.browser, },},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'semi': [1, 'always',],
      'comma-dangle': [1, 'always',],
      quotes: ['error', 'single',],
      'max-len': ['error', { 'code': 150, 'ignoreStrings': true, },],
    },
  },
];