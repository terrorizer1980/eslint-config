module.exports = {
  parser: '@typescript-eslint/parser',

  env: {
    // See comment under `parserOptions` below.
    es2020: true,
  },

  parserOptions: {
    // The `esXXXX` option under `env` is supposed to set the correct
    // `ecmaVersion` option here, but we've had issues with it being
    // overridden in the past and therefore set it explicitly.
    //
    // For TypeScript, the EcmaScript version always be the latest release
    // (not pre-release) here: https://github.com/tc39/ecma262/releases
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],

  rules: {
    // Should be disabled per Prettier
    '@typescript-eslint/no-extra-semi': 'off',

    // Handled by TypeScript
    'import/no-unresolved': 'off',

    // Our rules
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': [
      'error',
      { allowDefinitionFiles: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'all', argsIgnorePattern: '[_]+' },
    ],

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { builtinGlobals: true }],

    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
  },
};
