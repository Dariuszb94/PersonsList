import React from "react";
import "./Cursor.scss";
import usePosition from "../../hooks/usePosition";

const Cursor = () => {
  const { x, y } = usePosition();
  return (
    <>
      <div style={{ left: `${x}px`, top: `${y}px` }} className="outline"></div>
      <div className="cursor" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>
  );
};

export default Cursor;
