module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'plugin:vue/vue3-recommended', //
    'eslint:recommended',
    'airbnb-base',
  ],

  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  plugins: [
    'vue', //
    'import',
    '@typescript-eslint',
  ],

  rules: {
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'indent': 'off',
    'max-len': [1, { code: 120 }],
    'no-console': 'off',
    'no-debugger': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'vue/no-unused-vars': ['warn', { ignorePattern: '^_' }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'], //
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
};
