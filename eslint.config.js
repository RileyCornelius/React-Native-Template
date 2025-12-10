/* eslint-env node */
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const reactCompiler = require('eslint-plugin-react-compiler');
const reactHooks = require('eslint-plugin-react-hooks');

module.exports = defineConfig([
  expoConfig,
  reactCompiler.configs.recommended,
  {
    ignores: ['node_modules/**', 'ios/**', 'android/**', '.expo/**', '.vscode/**'],
  },
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      // react-hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // React Compiler rules (enables optimization hints)
      'react-compiler/react-compiler': 'error',
      'react/display-name': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react-native',
              importNames: ['SafeAreaView'],
              message: "Use the SafeAreaView from 'react-native-safe-area-context' instead.",
            },
          ],
        },
      ],
      // eslint-import
      'import/order': [
        'warn',
        {
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
          'groups': [['builtin', 'external'], 'internal', 'unknown'],
          'distinctGroup': false,
          'pathGroups': [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-native',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'expo-*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          'pathGroupsExcludedImportTypes': ['react', 'react-native', 'react-*', 'expo-*'],
        },
      ],
      'import/newline-after-import': 1,
    },
  },
]);
