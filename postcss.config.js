// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html', './src/**/*.js'],
      safelist: [], // Pour les classes CSS qui ne doivent pas être supprimées
    }),
  ],
};
