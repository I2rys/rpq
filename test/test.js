//Dependencies
const RPQ = require("../index")

//Main
void async function Main(){
    const result = await RPQ.generate()

    console.log(result)
}()