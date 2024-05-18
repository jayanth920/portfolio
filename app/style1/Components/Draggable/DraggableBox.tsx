
"use client"
import React from "react";
import Draggable from "react-draggable";
import "./DraggableBox.css";

export const DraggableBox = () => {
  const ref = React.createRef<any>();
  return (
    <Draggable ref={ref}>
      <div id="box">
        <div className="content">
          <p>DESIGN</p>
          <p>🤍</p>
        </div>
      </div>
    </Draggable>
  );
};
