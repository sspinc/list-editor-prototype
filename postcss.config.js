module.exports = {
  plugins: [
    require('postcss-inline-svg'),
    require('autoprefixer')({
      "browserslist": [
        "> 1%",
        "ie > 8",
        "last 2 versions"
      ]
    }),
    require('cssnano')
  ]
};
