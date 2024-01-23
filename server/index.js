const express = require("express");
const app = express();
const PORT = 5000;
const { createAccount } = require("../server/controller/action/createAccount")

app.route("/createaccount").get(async (req, res) => {
    try {
        const data = await createAccount("shriraj")
        res.status(400).send("Result:=>" + JSON.stringify(data) || "NOT FOUND PAGE INDEX.JS")
    } catch (error) {
        console.log("ERROR:=>" + error)
    }
})


app.listen(PORT, (err) => {
    if (!err) {
        console.log(`server on port no ${PORT}`)
    } else {
        console.log("ERROR:=>" + err)
    }
});