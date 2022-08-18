import React, { useState } from "react";

function Converter(props) {
  const [hexData, setHexData] = useState("");
  const [state, setState] = useState({
    bgColor: { backgroundColor: "#20B2AA" },
    newColor: "rgb(..., ..., ...)",
    styleColor: { backgroundColor: "#20B2AA", filter: "brightness(85%)" },
  });

  function handleConverter(e) {
    e.preventDefault();
    const hexValue = e.target.value;
    setHexData(hexValue);
    const num1 = parseInt(hexValue.slice(1, 3), 16);
    const num2 = parseInt(hexValue.slice(3, 5), 16);
    const num3 = parseInt(hexValue.slice(5, 7), 16);
    const newColor = num1 + ", " + num2 + ", " + num3;
    const rgb = `rgb(${newColor})`;
    if (isNaN(hexValue) && hexValue.length === 7) {
      setState({
        bgColor: { backgroundColor: hexValue },
        newColor: rgb,
        styleColor: { backgroundColor: rgb, filter: "brightness(85%)" },
      });
    }
    if (hexValue.length > 7 || !isNaN(hexValue)) {
      setState({
        bgColor: { backgroundColor: "#FF0000" },
        newColor: "ОШИБКА!!!",
        styleColor: { backgroundColor: "#FF0000", filter: "brightness(85%)" },
      });
    }

    if (hexValue.length < 7) {
      setState({
        bgColor: { backgroundColor: "#20B2AA" },
        newColor: "rgb(..., ..., ...)",
        styleColor: { backgroundColor: "#20B2AA", filter: "brightness(85%)" },
      });
    }

    if (hexValue === "") {
      setState({
        bgColor: { backgroundColor: "#20B2AA" },
        newColor: "rgb(..., ..., ...)",
        styleColor: { backgroundColor: "#20B2AA", filter: "brightness(85%)" },
      });
    }
  }

  return (
    <form className="form" style={state.bgColor}>
      <div className="form-item hex">
        <input
          id="hex-input"
          type="text"
          name="text"
          className="input-text hex"
          placeholder="#000000"
          value={hexData}
          onChange={handleConverter}
        />
      </div>
      <div className="form-item rgb" style={state.styleColor}>
        <input
          id="rgb-input"
          type="text"
          name="text"
          className="input-text rgb"
          value={state.newColor}
          disabled
        />
      </div>
    </form>
  );
}

export default Converter;
