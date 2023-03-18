require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const { getAllcategory, getFilter_color } = require('./color_controlar')

const port = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))


const run = async () => {

    //get all category colors
    app.get("/all_category", getAllcategory)

    //get category color filter by color name
    //
    app.get("/filter_color/:name", getFilter_color)

}
run().catch(e => console.log(e.message))



app.get('/', function (req, res) {
    return res.json({ msg: 'furniture server is running' })
})

app.listen(port, function () {
    console.log('web server is listening on port', port)
})