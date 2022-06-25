
// const fs = require("fs");
// import { fs } from 'memfs';
const memfs = require("memfs")

const FormData = require("form-data");
const rfs = require("recursive-fs");
const basePathConverter = require("base-path-converter");
var axios = require('axios');

const pinDirectoryToPinata = async () => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const src = "/home/henryk/Desktop/ETHGlobalDao/2-IPFS-node-testing/memeDir";
  var status = 0;


  const json = {
    './README.md': '1',
    './README3.md': '4',
    './src/index.js': '2',
    './node_modules/debug/index.js': '3',
  };
  memfs.vol.fromJSON(json, '/app');


  try {
    const { dirs, files } = await rfs.read(src);
    // console.log(files)
    let data = new FormData();
    // for (const file of files) {
    // console.log(basePathConverter(src, file))
    //   data.append(`file`, memfs.fs.createReadStream(file), {
    //     filepath: basePathConverter(src, file),
    //   });
    // }
    data.append(`file`, memfs.fs.createReadStream('/app/README3.md', 'utf8'), {
        filepath: "/app/README3.md"
        
    });
    console.log(data)

    // console.log(data._boundary)
    // console.log(data.getHeaders())
    // console.log(data)
    var config = {
        method: 'post',
        url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
        headers: { 
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjZWYxODg4Mi1jYWJjLTQ0ZTgtYjRlYy1kNGJiZjU2OTk3NGEiLCJlbWFpbCI6ImJjc2VhYm91cm5lQG91dGxvb2suY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6Ijc5MWU0YzIyZDg5MTFlZTA5OGFjIiwic2NvcGVkS2V5U2VjcmV0IjoiMTEzNjA4OWMwMmNmYmM3OTkwM2U5MmU3NjJhMTFiODMzYWMyNjc1OGUzYzc5ODhlZTQ2M2U1MTBmYmJhMTgyZCIsImlhdCI6MTY1NjEyMzkzMH0.VK856VZ6t6tJfdJX0Y3fMyog9g8Popg4cCLg3tPGiBQ', 
          ...data.getHeaders()
        },
        data : data
    };
    
    // const res = await axios(config);
    axios(config).then(res => console.log(res.data))
    


//     await axios(
        
//       headers: {
//         "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjZWYxODg4Mi1jYWJjLTQ0ZTgtYjRlYy1kNGJiZjU2OTk3NGEiLCJlbWFpbCI6ImJjc2VhYm91cm5lQG91dGxvb2suY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6Ijc5MWU0YzIyZDg5MTFlZTA5OGFjIiwic2NvcGVkS2V5U2VjcmV0IjoiMTEzNjA4OWMwMmNmYmM3OTkwM2U5MmU3NjJhMTFiODMzYWMyNjc1OGUzYzc5ODhlZTQ2M2U1MTBmYmJhMTgyZCIsImlhdCI6MTY1NjEyMzkzMH0.VK856VZ6t6tJfdJX0Y3fMyog9g8Popg4cCLg3tPGiBQ', 
//     },
//       body: data
//   }).then(res => console.log(res))	
		

	// console.log(JSON.parse(response.body));
  } catch (error) {
    console.log(error);
  }
};

console.log(pinDirectoryToPinata())