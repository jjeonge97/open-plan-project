import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.turbo/**',
      '**/.next/**',
      'coverage',
      'vite.config.ts',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },

    // 공유 설정
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier,
    ],

    settings: {
      // import/no-unresolved가 TS 경로/워크스페이스를 인식하도록
      'import/resolver': {
        typescript: {
          project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
          alwaysTryTypes: true,
        },
      },
      react: { version: 'detect' },
    },

    plugins: {
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
    },

    rules: {
      // React
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
          callbacksLast: true,
          shorthandFirst: true,
          multiline: 'last',
          reservedFirst: true,
        },
      ],
      'react/sort-prop-types': [
        'error',
        { ignoreCase: true, callbacksLast: true, sortShapeProp: true },
      ],

      // Hooks
      ...reactHooksPlugin.configs.recommended.rules,

      // Import
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/newline-after-import': 'error',
      'import/no-unresolved': 'error',

      'prettier/prettier': 'off',
    },
  },
);
