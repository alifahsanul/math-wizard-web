import React, {useState} from 'react';

import AWS from 'aws-sdk'
import AWS_CONFIG from '../secret.js';

const S3_BUCKET = AWS_CONFIG.S3_BUCKET_NAME;
const REGION = AWS_CONFIG.S3_REGION;

AWS.config.update({
    accessKeyId: AWS_CONFIG.accessKeyId,
    secretAccessKey: AWS_CONFIG.secretAccessKey
})


const myBucket = new AWS.S3({
  params: {
    Bucket: S3_BUCKET},
    region: REGION,
})

const UploadImageToS3WithNativeSdk = (my_input) => {
  const uploadFile = (my_input) => {
    console.log('my_string1236', my_input)
      const params2 = {
        ACL: 'public-read',
        Body: my_input['my_string'],
        Bucket: S3_BUCKET,
        Key: 'image_base64.txt'
    };

  myBucket.putObject(params2)
    .send((err) => {
      if (err) console.log(err)
    })

  }

  // CallParserApi = my_input['my_inp1']
  // updateParsedEq = my_input['my_inp2']
  // CallParserApi(updateParsedEq)


  return (
    <>
        <button onClick={() => uploadFile(my_input)}> Upload to S3</button>
    </>
  )
}

export default UploadImageToS3WithNativeSdk;
