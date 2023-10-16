import React from "react";

const ButtonLike = ({ onClick }) => {
  const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "12px",
    boxShadow: "2px 2px 5px #888888",
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      Like
    </button>
  );
};

export default ButtonLike;
