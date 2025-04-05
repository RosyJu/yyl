const fs = require('fs');
const path = require('path');
const sass = require('A://Node/node_modules/sass');

// 设置要遍历的文件夹路径
const inputDir = path.join(__dirname, '../scss/'); // 这里是存放 .scss 文件的文件夹
const outputDir = path.join(__dirname, '../css/'); // 输出编译后的 CSS 文件的文件夹

// 如果输出目录不存在，则创建它
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 读取输入目录中的所有文件
fs.readdirSync(inputDir).forEach(file => {
  const filePath = path.join(inputDir, file);
  
  // 确保只处理 .scss 文件
  if (file.endsWith('.scss')) {
    const outputFilePath = path.join(outputDir, file.replace('.scss', '.css'));

    // 编译 SCSS 文件
    sass.render({
      file: filePath,
    }, (err, result) => {
      if (err) {
        console.error(`Error compiling ${file}:`, err);
        return;
      }

      // 将编译后的 CSS 保存到输出文件夹
      fs.writeFileSync(outputFilePath, result.css);
      console.log(`${file} -> ${outputFilePath}`);
    });
  }
});