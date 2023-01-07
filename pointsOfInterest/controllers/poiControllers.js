const db = require("../db/db");
const config = require("../config");

// To Post new poi data to db
const createPoi = async (req, res) => {
    const { name, type, country, region, lon, lat, description, recommendations } = req.body;
    if ( name && type && country && region && lon && lat && description && recommendations ) {
        try {
            const row = await db.query(
                "INSERT INTO pointsofinterest(name, type, country, region, lon, lat, description, recommendations) VALUES('" +
                name + "','" + type + "','" + country + "','" + region + "','" + lon + "','" + lat + "','" + description + "','" + recommendations + "')"
              );
              res.status(200).send(row);          
        } catch (error) {
            console.error(error);
        }
    }
};

// To get all poi data from db
const getAllPointOfInterests = async (req, res) => {
try {
    const rows = await db.query(`SELECT * FROM pointsofinterest`);

    const data = helper.emptyOrRows(rows);
    res.json(data);
    return rows;
} catch (err) {
    console.log(err);
}
};
  
// To increment recommendations or post data in recommendation feild on particular id
const recommendedPoi = async (req, res) => {
const poiID = req.params.id;
const { recommendations } = req.body;
try {
    await db.query("UPDATE pointsofinterest SET recommendations=? WHERE id=?", [
    recommendations,
    poiID,
    ]);
    res.send("One user recommended");
} catch (err) {
    console.error(err);
}
};
  
module.exports = { createPoi, getAllPointOfInterests, recommendedPoi };
