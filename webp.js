const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

const input = 'to_webp_input';
const output = 'to_webp_output';

(async () => {
    const files = await imagemin([`${input}/*.{jpg,jpeg,png,webp}`], {
        destination: output,
        plugins: [
            imageminWebp({
                // https://www.npmjs.com/package/imagemin-webp
                // 质量
                // 类型：number
                // 默认值：75
                // 将品质因数设置在0和之间100。
                quality: 75,
                // alphaQuality
                // 类型：number
                // 默认值：100
                // 在0和之间设置透明压缩质量100。
                alphaQuality: 100,
                // 方法
                // 类型：number
                // 默认值：4
                // 在0（最快）和6（最慢）之间指定要使用的压缩方法。此参数控制编码速度与压缩文件大小和质量之间的权衡。
                method: 4
            })
        ]
    });
    if (files.length) {
        console.log(`转换成功！（共转换了${files.length}个图片文件）`);
    } else {
        console.log('转换失败！');
    }
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();