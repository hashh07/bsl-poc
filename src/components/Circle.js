import React from "react";

const RenderComponent = (col) => {
  const [hover, setHover] = React.useState("white");
  const circleStyle = {
    border: "1px solid black",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    margin: "10px",
    background: hover,
  };
  return (
    <div
      style={circleStyle}
      onMouseEnter={() => setHover(col.col)}
      onMouseLeave={() => setHover("white")}
    ></div>
  );
};

const Circle = () => {
  const [colors, setColors] = React.useState([]);
  const [value, setValue] = React.useState('');
  const colorsArray = [
    "red",
    "green",
    "blue",
    "purple",
    "pink",
    "violet",
    "yellow",
  ];
  const generateRandomColors = () => {
    const randomColors = Array.from({ length: value }, () => {
      const randomIndex = Math.floor(Math.random() * colorsArray.length);
      return colorsArray[randomIndex];
    });

    setColors(randomColors);
  };
  return (
    <div>
      <input
        autoFocus
        type="text"
        pattern="\d*"
        maxLength="2"
        onChange={(e) => setValue(parseInt(e.target.value), 10)}
      />
      <button onClick={generateRandomColors}>Go</button>
      Please enter the number of circles
      <div style={{display : 'flex', flexDirection : 'row', flexWrap : 'wrap'}}>
      {colors.map((col, index) => (
        <RenderComponent key={index} col={col} />
        ))}
        </div>
    </div>
  );
};

export default Circle;
