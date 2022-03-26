const { dirname } = require('path');
const path = require('path'); // node js defult key

module.exports = {
    mode : "development",
    entry : './src/app.js',
    output : { 
        path : path.resolve(__dirname, 'dist'),
        filename : 'app.bundle.js'

    },  // we will can use components, context, redux
    module : {
        rules : [
            {
                test : /\.js$/, // webpack will test/ this (.js) type of file 
                exclude : /(node_modules)/, // avoide this folder for test
                loader : 'babel-loader'
            }
        ]

    }

}