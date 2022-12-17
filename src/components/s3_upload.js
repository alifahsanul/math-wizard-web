import React, {useState} from 'react';
import { S3 } from 'aws-sdk';
import AWS_CONFIG from '../secret.js';


const UploadImageToS3WithNativeSdk = (my_input) => {
  const uploadFile = (my_input) => {
    const s3 = new S3({
      accessKeyId: AWS_CONFIG.accessKeyId,
      secretAccessKey: AWS_CONFIG.secretAccessKey,
      region: AWS_CONFIG.S3_REGION
    });

    s3.upload({
      Bucket: AWS_CONFIG.S3_BUCKET_NAME,
      Key: 'image_base64.txt',
      Body: my_input['my_string']
    }).promise()
      .then(() => {
        console.log('file has been uploaded')
      })
      .catch((error) => {
        // handle error
        console.log('error happened when uploading to s3: ', error)
      });
  }

  return (
    <>
        <button onClick={() => uploadFile(my_input)}> Upload to S3</button>
    </>
  )
}

export default UploadImageToS3WithNativeSdk;
