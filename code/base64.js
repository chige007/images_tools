var base64 = require('node-base64-image');

const dir = './base64_input/';

const file = 'icon_kf.png';

base64.encode(dir + file, {
    string: true,
    local: true    
}, (err, result) => {
    console.log(result);
})