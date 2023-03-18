require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.DATABASE_URL


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const db = client.db("color_picker")
const color_category = db.collection("color_category")
const colors = db.collection("colors")


// get all color category
//
const getAllcategory = async (req, res) => {
    try {

        const query = {}
        const result = await color_category.find(query).toArray()


        return res.send({
            status: 200,
            data: result
        })

    } catch (error) {
        return res.status(404).send({
            message: error.message
        })
    }
}


// get all color filter by category name
// get filter color
const getFilter_color = async (req, res) => {
    try {

        const name = req.params.name
        const filter = { category: name }

        const result = await colors.findOne(filter)


        return res.send({
            status: 200,
            data: result
        })

    } catch (error) {
        return res.status(404).send({
            message: error.message
        })
    }
}


module.exports = { getAllcategory, getFilter_color }