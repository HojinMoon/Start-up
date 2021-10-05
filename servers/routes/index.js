const express = require('express');
const router = express.Router();

const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017'", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function haversineDistance(coords1, coords2, isMiles) {
  function toRad(x) {
    return x * Math.PI / 180;
  }

  var lon1 = coords1[0];
  var lat1 = coords1[1];

  var lon2 = coords2[0];
  var lat2 = coords2[1];

  var R = 6371; // km

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2)
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  if(isMiles) d /= 1.60934;

  return d;
}

async function run(req,res) {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("local").command({ ping: 1 });
    console.log("Connected successfully to server");

    const database = client.db("local");
    const data = database.collection("testcollect");

    let num = 0;
    let sectorJson = {}

    let lon = 37.3001301;
    let lat = 126.8382971;

    const market  = await data.find( {"경도" : {$lt : 126.8720855}, "경도":{$gt : 126.8045087}} );

    await market.forEach((e)=>{
      let sector = [{상호명:e.상호명 , 위치:e.지번주소} ]
      sectorJson[num] = sector
      num+=1
    });


    res.json(sectorJson);

  } 
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    // console.log("db disconnet")
  }
}


router.get('/', (req, res)=>{
  run(req,res);
})


module.exports = router;