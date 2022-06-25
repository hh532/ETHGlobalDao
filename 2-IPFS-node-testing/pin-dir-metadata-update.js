var axios = require('axios');
var data = JSON.stringify({
  "ipfsPinHash": "QmfNhQA1yFxNz2e4gn5cGNx1V5hn3om2XThcm8BbTBVdTJ",
  "name": "meme.jpg",
  "keyvalues": {
    "anewkeyk": "anewvalue"
  }
});

var config = {
  method: 'put',
  url: 'https://api.pinata.cloud/pinning/hashMetadata',
  headers: { 
    'Authorization': 'Bearer PINATA JWT', 
    'Content-Type': 'application/json'
  },
  data: data
};


// const res = await axios(config);
axios(config).then(res => console.log(res.data))
