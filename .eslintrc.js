module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'prettier'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended'
    ],
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: [
        '.eslintrc.js'
    ],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                'endOfLine': 'auto',
            }
        ],

        // Off
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'linebreak-style': 0,
        'prettier/prettier': 0,
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-underscore-dangle': 'off',
        'complexity': 'off',
        'no-empty': 'off',
        'no-empty-function': 'off',
        'valid-typeof': 'off',
        'no-use-before-define': 'off',
        'no-invalid-this': 'off',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off'
    },
};
