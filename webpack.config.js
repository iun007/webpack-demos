var path = require('path');
module.exports = {
    //打包的入口文件  String|Object
    entry: path.resolve(__dirname, 'src/index.js'),
    output: { //配置打包结果     Object
        //定义输出文件路径
        path: path.resolve(__dirname, 'build'),
        //指定打包文件名称
        filename: 'bundle.js'
    },
    //定义了对模块的处理逻辑     Object
        module: {
            loaders: [ //定义了一系列的加载器  Array
                {
                    test: /\.js$/, //正则，匹配到的文件后缀名
                        // loader/loaders：string|array，处理匹配到的文件
                            loader: 'babel-loader'
                    // include：String|Array  包含的文件夹
                     // exclude：String|Array  排除的文件夹

                        }
            ]
        }
};