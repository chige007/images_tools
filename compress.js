const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

const input = 'compress_input';
const output = 'compress_output';

(async () => {
    const files = await imagemin([`${input}/*.{jpg,jpeg,png}`], {
        destination: output,
        plugins: [
            imageminJpegtran({
                // https://www.npmjs.com/package/imagemin-jpegtran
                // 渐进类型：boolean
                // 默认值：false
                // 无损转换为渐进式。
                progressive: true,
                // 算术
                // 类型：boolean
                // 默认值：false
                // 使用算术编码。
                arithmetic: false
            }),
            imageminPngquant({
                // https://www.npmjs.com/package/imagemin-pngquant
                // 速度
                // 类型：number
                // 默认：4
                // 值：（1强力）至11（最快）
                // 速度的10质量降低5％，但比默认速度快8倍。速度可11禁用抖动并降低压缩级别。
                speed: 2,
                // 质量
                // 类型：Array<min: number, max: number>
                // 值：Array<0...1, 0...1>
                // 示例：[0.3, 0.5]
                // 指示pngquant使用达到或超过最大质量所需的最少颜色。如果转换导致的质量低于最低质量，则不会保存图像。
                // 最小值和最大值是0（最差）到1（完美）范围内的数字，类似于JPEG。
                quality: [0.6, 0.8]
            })
        ]
    });

    if (files) {
        console.log(`压缩成功！（共压缩${files.length}个图片文件）`);
    } else {
        console.log('转换失败！');
    }
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();

// imageminWebp({
//     // https://www.npmjs.com/package/imagemin-webp
//     // 质量
//     // 类型：number
//     // 默认值：75
//     // 将品质因数设置在0和之间100。
//     quality: 75,
//     // alphaQuality
//     // 类型：number
//     // 默认值：100
//     // 在0和之间设置透明压缩质量100。
//     alphaQuality: 100,
//     // 方法
//     // 类型：number
//     // 默认值：4
//     // 在0（最快）和6（最慢）之间指定要使用的压缩方法。此参数控制编码速度与压缩文件大小和质量之间的权衡。
//     method: 4
// })