const sharp = require('sharp');


/**
 * Image processor
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const imageProcessorController = async(req: any, res: any, next: any) =>{
    try {

    const result = ""
    sharp('input.jpg')
  .rotate()
  .resize(200)
  .jpeg({ mozjpeg: true })
  .toBuffer()
  .then( (data:object) => { console.log(data); })
  .catch( (err:object) => { console.error(err); });

    res.json(result)
    } catch (error) {
        next(error)
    }

};