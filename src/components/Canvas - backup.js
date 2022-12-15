import React, { Component } from "react";
import CanvasDraw from "./canvas-src";
import classNames from "./Canvas.css";


class Demo extends Component {
  state = {
    color: "#000000",
    width: 400,
    height: 400,
    brushRadius: 5,
    lazyRadius: 12,
  };

  render() {
    return (
      <div>
        <p>Try it out! Draw something, hit "Save" and then "Load".</p>
        <div className={classNames.tools}>
          <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.eraseAll();
            }}
          >
            Erase
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.undo();
            }}
          >
            Undo
          </button>
          <button
            onClick={() => {
              var base64_img = this.saveableCanvas.getDataURL()
              console.log(base64_img);
              alert("DataURL written to console")
              
            }}
          >
            GetDataURL
          </button>
        </div>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
        />
      </div>
      
    );
  }
}

export default Demo;
