import React from "react";

interface LineProps {
  color: string;
  height: number;
}

const Line: React.FC<LineProps> = ({ color, height = 1 }) => {
    return <hr style={{ borderColor: color, borderWidth: height, borderStyle: "solid", width: "100%" }} />;
    // return <hr style={{ borderBottom: color, height: height }} />;
};

export default Line;
// border: 1px solid rgb(150, 150, 150);width: 100;
// border: 1px solid red; width: 100%;