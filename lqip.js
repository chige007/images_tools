const lqip = require('lqip');
 
const file = './lqip_input/' + 'bg.jpg';
 
lqip.base64(file).then(res => {
  console.log(res);
});
