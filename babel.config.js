module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@root': './',
        '@application': './src/application',
        '@business': './src/business',
        '@infrastructure': './src/infrastructure',
        '@database': './database',
        '@config': './config/index',
      },
    }],
  ],
  ignore: [
    '**/*.test.js',
    'node_modules',
    '.editorconfig',
  ],
};
