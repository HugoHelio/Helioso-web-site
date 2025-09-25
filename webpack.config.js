
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');


module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.js',
    output: {
      //changed here after chatgpt fix, was:  filename: 'bundle.js',
       filename: 'bundle.js', // Put bundle.js inside dist/ folder inside public/ 
      // changed: was: path: path.resolve(__dirname, 'public/dist'),
      path: path.resolve(__dirname, 'dist'), // Output goes to public/, not public/dist/
      clean: true, // clean old files in dist
    },
    watch: true,

     plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // your HTML template
    }),
     new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }, // ✅ copy entire assets folder
      ],
    }),
  ],
    
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
      ],
    },


  resolve: {
    extensions: ['.js'],
    mainFields: ['browser', 'module', 'main'],
  
  },
  


// plugins: [
 // new HtmlWebpackPlugin({
 //   template: './src/index.html',   // my template file
 //   filename: 'index.html',       // Output to public/index.html 
 // }),
// ], 

};
