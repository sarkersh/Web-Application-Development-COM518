const con=require('../database/database.js');
//req.params
//req.body
exports.searchByRegion=(req, res)=>{
    console.log("Api is called");
  con.query("select * from pointsofinterest where region=?", [req.params.region], (error, results)=>{
    if (error)
    {console.log('Failed to retrieve the data from pointsofinterest');
    res.status(404).json({sucess:'False'});
    }
    else
    {
        console.log('Successful to retrieve the data from pointsofinterest');
        res.status(200).json(results); 
    }
  });
}

  exports.addPOI=(req, res)=>{
    console.log("add POI Api is called");
  con.query("insert into pointsofinterest (name, type, country, region, lon, lat, description, recommendations) values(?, ?, ?, ?, ?, ?, ?, ?)", 
  [req.body.name, req.body.type, req.body.country, req.body.region, req.body.lon, req.body.lat, req.body.description, req.body.recommendations], (error, results)=>{
    if (error)
    {console.log('Failed to add POI into pointsofinterest');
    res.status(404).json({sucess:'False'});
    }
    else
    {
        console.log('Successful to add the data from pointsofinterest');
        console.log("Row Affected: ", results.affectedRows);
        res.status(404).json({sucess:'True', 
                              rowaffected: results.affectedRows});
    }
  });

  }
