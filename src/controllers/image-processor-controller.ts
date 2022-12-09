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

    res.json(result)
    } catch (error) {
        next(error)
    }

};