import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'semi': [1, 'always'],
      'comma-dangle': ['error', {
        'arrays': 'never',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never'
      }],
      'quotes': ['error', 'single'],
      'no-console': 'error',
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
      'max-len': ['error', { 'code': 150, 'ignoreStrings': true }],
      'prefer-arrow-callback': [ 'error', { 'allowNamedFunctions': false, 'allowUnboundThis': true } ],
      'no-empty': 'warn',
      'no-cond-assign': ['error', 'always'],
      'linebreak-style': ['error', 'unix'],
      'switch-colon-spacing': ['error', {'after': true, 'before': false}],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'space-infix-ops': ['error', { 'int32Hint': false }],
      'key-spacing': ['error'],
      'no-multiple-empty-lines': 'error',
      'space-before-function-paren': ['error', 'never']
    }
  }
];