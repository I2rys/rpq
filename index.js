//Dependencies
const Axios = require("axios")

//Main
async function generate(){
    var response = await Axios({
        method: "GET",
        url: "https://programming-quotes-api.herokuapp.com/quotes/random"
    })

    return response.data
}

//Exporter
module.exports = {
    generate
}