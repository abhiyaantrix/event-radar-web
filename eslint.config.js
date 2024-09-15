import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';
import globals from 'globals';

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('typescript-eslint').Config} */
export default tseslint.config(
  {
    ignores: ['dist', 'build', 'node_modules', 'coverage', 'commitlint.config.js', 'eslint.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        vi: 'readonly',
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      import: importPlugin,
      '@typescript-eslint': tseslint.plugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true, // this loads <rootdir>/tsconfig.json to eslint
        },
      },
      'import/extensions': ['.ts', '.tsx'],
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': 'error',
      'prettier/prettier': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'no-multiple-empty-lines': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'if' },
        { blankLine: 'always', prev: '*', next: 'for' },
        { blankLine: 'always', prev: '*', next: 'while' },
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'try' },
        { blankLine: 'always', prev: '*', next: 'throw' },
      ],
      'max-lines': ['error'],
      'no-debugger': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // third party imports
            // The only way to  make eslint understand that lodash/debounce is an absolute import and types/api is not is by explicitly specifying lodash
            ['^react', '^@\\w', '^([a-zA-Z0-9]*-[a-zA-Z0-9]*)+$', '^(?!(?:contexts|types)$)\\w+$'],
            // Side effect imports.
            ['^\\u0000'],
            // absolute and relative internal imports
            [
              '^(api|app|assets|components|icons|contexts|hooks|pages|test|utils)/(?!.*types$)',
              '^[./]',
              '^[../]',
              'contexts',
            ],
            // type imports
            ['^types', '^types/(.*)', '^(.*)/types$'],
            // style imports
            ['/(.*).(styles|css)'],
          ],
        },
      ],
      'implicit-arrow-linebreak': 'off',
      'max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
          ignoreStrings: true,
        },
      ],
      'no-param-reassign': 'warn',
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      'object-curly-newline': 'off',
      'object-curly-spacing': ['error', 'always'],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/prefer-default-export': 'off',
      'react/jsx-boolean-value': 'off',
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.tsx', '.mdx'],
        },
      ],
      'react/jsx-uses-react': 'off',
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'eol-last': ['error', 'always'],
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'react/prop-types': 'off',
    },
  },
  {
    files: ['**/*.types.ts', 'src/types/**/*.*'],
    rules: {
      'max-lines': 'off',
    },
  }
);
