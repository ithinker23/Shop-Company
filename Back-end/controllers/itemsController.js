const DB = require('../model/itemsQuerys')

module.exports = {

    getItems: async (req, res) => {
        var allItems = await DB.getItems()
        res.status(200).json({items: allItems})
    }


}