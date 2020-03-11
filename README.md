# images_tools
图片处理工具

### 压缩
1. 把需要压缩的图片文件放置 compress_input/ 目录下
2. 执行 npm run compress
3. 被压缩好的图片将导出到 compress_output/ 目录下

### 转webp
1. 把需要压缩的图片文件放置 webp_input/ 目录下
2. 执行 npm run webp
3. 被压缩好的图片将导出到 webp_output/ 目录下

### 转lqip
1. 把需要压缩的图片文件放置 lqip_input/ 目录下
2. 修改 lqip.js 的 file 值，改为图片文件名
3. 执行 npm run lqip
4. 控制台将打印相应图片的Base64信息

### 转sqip
1. 把需要压缩的图片文件放置 sqip_input/ 目录下
2. 修改 sqip.js 的 file 值，改为图片文件名
3. 执行 npm run sqip
4. 控制台将打印相应图片的svg信息
