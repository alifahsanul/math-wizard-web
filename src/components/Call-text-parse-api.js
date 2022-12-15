import React, { Component } from "react";

const CallParserApi = async (sendDataAPIToParent, arg2) => {
    try{
        const response = await fetch(`http://18.177.210.30/image_base64.txt`);
        const json = await response.json();
        console.log('id12', json['result'])
        var result = json['result']
        sendDataAPIToParent(result);

    }
    catch (e){
        console.log('Faced error', e);
    }
}

export default CallParserApi;



