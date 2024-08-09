import { defineConfig } from 'eslint-define-config';

export default defineConfig({
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:prettier/recommended', // Prettierプラグインの推奨設定を追加
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier', // Prettierプラグインを追加
    ],
    rules: {
        'prettier/prettier': 'error', // Prettierのルールをエラーとして扱う
        // 他のカスタムルール
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
});
