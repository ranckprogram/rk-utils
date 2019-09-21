const glob = require('glob')
module.exports = {
  mode: "development",
  entry: './src/index.js',// glob.sync('./src/*.js') , => 这里他通过export {default as m} from './m' 处理 
  output: {
    globalObject: 'this', // window is defined 问题
    filename: 'bundle.js', // 打包后输出的文件名
    library: 'atool',  // 指定库名
    libraryTarget: 'umd'
  }
}