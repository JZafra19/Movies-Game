import React from "react";

const Popup = ({ content }) => {
  setTimeout(function () {
    window.location.reload();
    window.scrollTo(0,0);
  }, 750);

  const popupStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  };

  const boxStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
  };

  return (
    <div style={popupStyle}>
      <div style={boxStyle}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Popup;
