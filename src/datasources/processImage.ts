const sharp = require('sharp');

sharp('input.jpg')
  .rotate()
  .resize(200)
  .jpeg({ mozjpeg: true })
  .toBuffer()
  .then( (data:object) => { console.log(data); })
  .catch( (err:object) => { console.error(err); });
