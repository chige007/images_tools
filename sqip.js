const sqip = require('sqip');
 
const file = './sqip_input/' + 'bg.jpg';

const result =  sqip({
    filename: file,
    numberOfPrimitives: 10
});

console.log(result.final_svg);
