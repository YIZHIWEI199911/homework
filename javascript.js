// 示例代码（项目中可能已有，确保路径正确）
const dotenv = require('dotenv');
// 加载根目录下的dev文件
dotenv.config({ path: './dev' }); 

// 读取MONGO_URI
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI is not defined in environment file');
}