module.exports = {
    plugins:
      process.env.NODE_ENV === 'production'
        ? [
            [
                "@fullhuman/postcss-purgecss",{
                    content: ['components/**/*.tsx', 'containers/**/*.tsx', 'pages/**/*.tsx'],
                    safelist: ['html', 'body', 'img', 'hr', 'ol', /^slick(.*)/],
                   }
            ]
          ]
        : [
           
          ],
  }