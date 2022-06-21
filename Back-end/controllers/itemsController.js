const DB = require('../model/itemsQuerys')

module.exports = {

    getItems: async (req, res) => {
        console.log(req.body)
        var allItems = await DB.getItems(req.body)
        res.status(200).json({items: allItems})
    }


}