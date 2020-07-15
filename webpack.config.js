const path = require('path');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/script/entry.js',
    output:{
        path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: ['file-loader']
            }
        ]
    }
};