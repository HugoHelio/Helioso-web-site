
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');


module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/js/index.js',
    output: {
      //changed here after chatgpt fix, was:  filename: 'bundle.js',
       filename: 'bundle.[contenthash].js', // Put bundle.js inside dist/ folder inside public/ 
      // changed: was: path: path.resolve(__dirname, 'public/dist'),
      path: path.resolve(__dirname, 'dist'), // Output goes to public/, not public/dist/
      clean: true, // clean old files in dist
    },
    
    devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
     },
     compress: true,
     port: 5500,
     open: true,       // opens browser automatically
     hot: true,        // enables hot module replacement
     watchFiles: ['src/**/*.html', 'src/**/*.css'], // watch HTML/CSS changes
     },

     plugins: [
      // Main page
    new HtmlWebpackPlugin({
      template: './src/index.html', // your HTML template
       filename: 'index.html', // output name
       inject: 'body',  // <- automatically inject bundle
    }),

    // HLCpage page
    new HtmlWebpackPlugin({
      template: './src/pages/HLCpage.html',
      filename: 'pages/HLCpage.html', // output name in dist
      inject: 'body',  // <- automatically inject bundle
    }),
    // Services page
    new HtmlWebpackPlugin({
      template: './src/pages/services.html',
      filename: 'pages/services.html',
      inject: 'body',  // <- automatically inject bundle
    }),
    // Services page
    new HtmlWebpackPlugin({
      template: './src/pages/contact.html',
      filename: 'pages/contact.html',
      inject: 'body',  // <- automatically inject bundle
    }),

     new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets', // ✅ copies everything inside assets/
          to: 'assets',
          noErrorOnMissing: true, // don’t break if empty
          }, // ✅ copy entire assets folder
     

      ],
    }),
  ],
    
 module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // ✅ also handle image imports in JS
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]', // output images in assets/img/
        },
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
