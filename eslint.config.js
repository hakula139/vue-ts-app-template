import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import vueEslint from 'eslint-plugin-vue';
import tsEslint from 'typescript-eslint';
import globals from 'globals';

export default tsEslint.config(
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js', '*.config.ts'],
  },

  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  tsEslint.configs.strictTypeChecked,
  tsEslint.configs.stylisticTypeChecked,
  vueEslint.configs['flat/recommended'],

  {
    plugins: {
      'typescript-eslint': tsEslint.plugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: tsEslint.parser,
        projectService: {
          allowDefaultProject: ['*.js'],
        },
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.worker,
      },
    },
    rules: {
      'implicit-arrow-linebreak': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'no-console': 'off',
      'no-param-reassign': 'off',
      'no-spaced-func': 'off',
      'no-underscore-dangle': 'off',
      'quote-props': ['error', 'consistent-as-needed'],
      'vue/script-setup-uses-vars': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
        alias: {
          map: [['@/*', './src/*']],
          extensions: ['.js', '.ts', '.vue'],
        },
      },
    },
  },

  eslintConfigPrettier,
);
