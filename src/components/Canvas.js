import React, { Component } from "react";
import CanvasDraw from "./canvas-src";
import classNames from "./Canvas.css";
import UploadToS3 from "./s3_upload";
import CallParserApi from "./Call-text-parse-api";
import UploadImageToS3WithNativeSdk from "./s3_upload";



const Canvas = ({sendDataToParent }) => {

  const state = {
    color: "#000000",
    width: 500,
    height: 200,
    brushRadius: 3,
    lazyRadius: 5,
  };

  const [parsed_eq, setParsed_eq] = React.useState({equation: ''});

  const updateParsedEq = (my_value) => {
    setParsed_eq({equation: my_value});
  };

  const [base64, setBase64] = React.useState({val: ''});

  const updateBase64 = (my_value) => {
    setBase64({val: my_value});
  };

  console.log('abc123', parsed_eq.equation)

  return (
    <div>
      <p>test</p>
      <p>Parsed text: {parsed_eq.equation}</p>
      <button
        onClick={() => {
          Component.saveableCanvas.eraseAll();
        }}
      >
        Erase
      </button>
      <button
        onClick={() => {
          Component.saveableCanvas.undo();
          sendDataToParent('');
        }}
      >
        Undo
      </button>
      <button
          onClick={() => {
            var base64_img = Component.saveableCanvas.getDataURL()
            {UploadToS3(base64_img)}
            {updateBase64(base64_img)}
            
            sendDataToParent(base64_img);
          }}
        >
      Finish writing
      </button>
      <UploadImageToS3WithNativeSdk my_string={base64.val}
      />
      <button
      onClick={() => {
        var myres = CallParserApi(updateParsedEq)
      }}
      >
        Call API to Parse
      </button>
      
      <CanvasDraw
        ref={canvasDraw => (Component.saveableCanvas = canvasDraw)}
        brushColor="#000000"
        brushRadius={state.brushRadius}
        canvasWidth={state.width}
        canvasHeight={state.height}
      />
    </div>
  );
};

export default Canvas;
