module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    worker: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['vue', 'import', '@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  rules: {
    'implicit-arrow-linebreak': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'off',
    'no-spaced-func': 'off',
    'no-underscore-dangle': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
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
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
};
