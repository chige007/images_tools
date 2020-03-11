const lqip = require('lqip');
 
const dir = './lqip_input/';

const file = 'bg.jpg';
 
lqip.base64(dir + file).then(res => {
  console.log(res);
});
