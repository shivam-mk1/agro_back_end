const { connectToDB } = require("../config/db");

async function getLanguageData(req, res) {
    try{
        const db = await connectToDB();
        const col = await db.collection("languages").find({}).toArray();
        res.status(200).json(col);
    }   
    catch(e){
        res.status(500).send("Failed to fetch languages");
    }
}

module.exports = {
    getLanguageData
}