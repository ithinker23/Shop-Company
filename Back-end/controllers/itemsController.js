const DB = require('../model/itemsQuerys')

module.exports = {

    // the function will await on a request sent to itemQuerys in models as that is the file for managing requests relating to items in the our database
    // at the end a status(200) will sent along with a JSON with the result of what getItems in itemsQuerys found
    getItems: async (req, res) => {
        try {
            var allItemsFiltered = await DB.getItems(req.body)
            console.log('Success')
            res.status(200).json({items: allItemsFiltered})
        } catch(err) {
            console.log(err)
        }
    }
}