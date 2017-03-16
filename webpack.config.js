module.exports = {
    entry: "./app/assets/scripts/scripts.js",
    output: {
        path: "./app/temp/assets/scripts",
        filename: "scripts.js"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        }
      ]
    }
};
