import React, {useState} from 'react';
import { S3 } from 'aws-sdk';
import AWS_CONFIG from '../secret.js';
import CallParserApi from "./Call-text-parse-api";


const UploadImageToS3WithNativeSdk = (my_input_dict) => {
  console.log('uploading data to cloud storage with input: ', my_input_dict)
  const s3 = new S3({
    accessKeyId: AWS_CONFIG.accessKeyId,
    secretAccessKey: AWS_CONFIG.secretAccessKey,
    region: AWS_CONFIG.S3_REGION
  });

  s3.upload({
    Bucket: AWS_CONFIG.S3_BUCKET_NAME,
    Key: 'image_base64.txt',
    Body: my_input_dict['base64_img']
  }).promise()
    .then(() => {
      console.log('file has been uploaded')
      CallParserApi(my_input_dict['updateParsedEq'])
    })
    .catch((error) => {
      console.log('error happened when uploading to s3: ', error)
    });

}


export default UploadImageToS3WithNativeSdk;
