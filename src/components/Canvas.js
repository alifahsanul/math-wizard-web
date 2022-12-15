import React, { Component } from "react";
import CanvasDraw from "./canvas-src";
import classNames from "./Canvas.css";


const Demo = ({sendDataToParent }) => {

  const state = {
    color: "#000000",
    width: 500,
    height: 200,
    brushRadius: 5,
    lazyRadius: 12,
  };


  return (
    <div>
      <p>test</p>
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
            // var base64_img = Date();
            sendDataToParent(base64_img);
            console.log(base64_img);   
          }}
        >
      Get img64
      </button>
      <CanvasDraw
        ref={canvasDraw => (Component.saveableCanvas = canvasDraw)}
        brushColor="#000000"
        brushRadius="2"
        canvasWidth={state.width}
        canvasHeight={state.height}
      />
    </div>
  );
};

export default Demo;
