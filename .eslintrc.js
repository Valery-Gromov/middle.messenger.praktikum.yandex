// {
//   "extends": "airbnb",
//   "parser": "@typescript-eslint/parser",
//   "plugins": ["@typescript-eslint"],
//   "rules": {
//     "max-len": [2, 100],
//     "@typescript-eslint/no-unused-vars": 2
//   }
// }
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'hbs'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended', // Подключаем плагин для совместимости с Prettier
  ],
  rules: {
    // Дополнительные правила можно добавить здесь
    'hbs/check-hbs-template-literals': 2,
  },
};

