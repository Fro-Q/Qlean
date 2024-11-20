module.exports = {
  // 使用单引号
  singleQuote: true,
  // 末尾添加分号
  semi: true,
  // 使用2个空格缩进
  tabWidth: 2,
  // 换行长度
  printWidth: 800,
  // 末尾逗号
  trailingComma: 'es5',
  // 对象属性添加空格
  bracketSpacing: true,
  // 箭头函数参数括号
  arrowParens: 'always',
  // 格式化范围
  rangeStart: 0,
  rangeEnd: Infinity,
  // 格式化文件类型
  overrides: [
    {
      files: '*.scss',
      options: {
        parser: 'scss',
      },
    },
  ],
};
