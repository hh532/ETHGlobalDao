var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('file', fs.createReadStream('meme.jpg'));
// data.append('pinataOptions', '{"cidVersion": 1}');
// data.append('pinataMetadata', '{"name": "MyFile", "keyvalues": {"company": "Pinata"}}');

var config = {
  method: 'post',
  url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjZWYxODg4Mi1jYWJjLTQ0ZTgtYjRlYy1kNGJiZjU2OTk3NGEiLCJlbWFpbCI6ImJjc2VhYm91cm5lQG91dGxvb2suY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6Ijc5MWU0YzIyZDg5MTFlZTA5OGFjIiwic2NvcGVkS2V5U2VjcmV0IjoiMTEzNjA4OWMwMmNmYmM3OTkwM2U5MmU3NjJhMTFiODMzYWMyNjc1OGUzYzc5ODhlZTQ2M2U1MTBmYmJhMTgyZCIsImlhdCI6MTY1NjEyMzkzMH0.VK856VZ6t6tJfdJX0Y3fMyog9g8Popg4cCLg3tPGiBQ', 
    ...data.getHeaders()
  },
  data : data
};

// const res = await axios(config);
axios(config).then(res => console.log(res.data))

