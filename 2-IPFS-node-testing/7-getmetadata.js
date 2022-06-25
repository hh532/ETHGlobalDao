var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.pinata.cloud/data/pinList?metadata[name]=memeDirMeta/metadata.json',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjZWYxODg4Mi1jYWJjLTQ0ZTgtYjRlYy1kNGJiZjU2OTk3NGEiLCJlbWFpbCI6ImJjc2VhYm91cm5lQG91dGxvb2suY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6Ijc5MWU0YzIyZDg5MTFlZTA5OGFjIiwic2NvcGVkS2V5U2VjcmV0IjoiMTEzNjA4OWMwMmNmYmM3OTkwM2U5MmU3NjJhMTFiODMzYWMyNjc1OGUzYzc5ODhlZTQ2M2U1MTBmYmJhMTgyZCIsImlhdCI6MTY1NjEyMzkzMH0.VK856VZ6t6tJfdJX0Y3fMyog9g8Popg4cCLg3tPGiBQ', 
  }
};

// const res = await axios(config);
axios(config).then(res => {
    // console.log(res.data.rows[0].metadata)
    console.log(res.data)
})
