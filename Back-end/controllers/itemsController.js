const DB = require('../model/itemsQuerys')

module.exports = {

    getItems: async (req, res) => {
        var allItems = await DB.getItems(req.body)
        console.log(allItems)
        res.status(200).json({items: allItems})
    }


}