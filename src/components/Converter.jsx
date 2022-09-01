import React, { useState } from "react";

function Converter(props) {
  const [hexData, setHexData] = useState("");
  const [state, setState] = useState({
    bgColor: { backgroundColor: "#20B2AA" },
    newColor: "rgb(..., ..., ...)",
    styleColor: {
      backgroundColor: "#20B2AA",
      filter: "brightness(85%)",
      color: "#ffffff",
    },
  });

  function handleConverter(e) {
    e.preventDefault();
    let hex = e.target.value;
    setHexData(hex);
    const hexValue =
      hex.length === 4 ? "#" + hex.slice(1, 4) + hex.slice(1, 4) : hex;
    const num1 = parseInt(hexValue.slice(1, 3), 16);
    const num2 = parseInt(hexValue.slice(3, 5), 16);
    const num3 = parseInt(hexValue.slice(5, 7), 16);
    const newColor = num1 + ", " + num2 + ", " + num3;
    const rgb = `rgb(${newColor})`;

    if (isNaN(hexValue) && hexValue.length === 7) {
      if (num1 === 255 && num2 === 255 && num3 === 255) {
        setState({
          bgColor: { backgroundColor: hexValue },
          newColor: rgb,
          styleColor: {
            backgroundColor: rgb,
            filter: "brightness(85%)",
            color: "#000000",
          },
        });
      } else {
        setState({
          bgColor: { backgroundColor: hexValue },
          newColor: rgb,
          styleColor: {
            backgroundColor: rgb,
            filter: "brightness(85%)",
            color: "#ffffff",
          },
        });
      }
    }

    if (hexValue.length < 7) {
      setState({
        bgColor: { backgroundColor: "#20B2AA" },
        newColor: "rgb(..., ..., ...)",
        styleColor: { backgroundColor: "#20B2AA", filter: "brightness(85%)" },
      });
    } else if (!isNaN(hexValue) || hexValue.length > 7) {
      setState({
        bgColor: { backgroundColor: "#FF0000" },
        newColor: "ОШИБКА!!!",
        styleColor: {
          backgroundColor: "#FF0000",
          filter: "brightness(85%)",
          color: "#ffffff",
        },
      });
    } else if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      setState({
        bgColor: { backgroundColor: "#FF0000" },
        newColor: "ОШИБКА!!!",
        styleColor: {
          backgroundColor: "#FF0000",
          filter: "brightness(85%)",
          color: "#ffffff",
        },
      });
    }

    if (hexValue === "") {
      setState({
        bgColor: { backgroundColor: "#20B2AA" },
        newColor: "rgb(..., ..., ...)",
        styleColor: {
          backgroundColor: "#20B2AA",
          filter: "brightness(85%)",
          color: "#ffffff",
        },
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
