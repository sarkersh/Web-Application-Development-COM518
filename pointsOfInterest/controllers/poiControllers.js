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

module.exports = createPoi;