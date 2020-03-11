const sqip = require('sqip');
 
const dir = './sqip_input/';

const file = 'bg.jpg';

const result =  sqip({
    filename: dir + file,
    numberOfPrimitives: 10
});

console.log(result.final_svg);
