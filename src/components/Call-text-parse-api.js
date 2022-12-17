import React, { Component } from "react";

const CallParserApi = async (sendDataAPIToParent) => {
    try{
        const response = await fetch(`http://18.177.210.30/image_base64.txt`);
        const json = await response.json();
        console.log('API return value', json['result'])
        var result = json['result']
        sendDataAPIToParent(result);

    }
    catch (e){
        console.log('Faced error during API call: ', e);
    }
}

export default CallParserApi;



