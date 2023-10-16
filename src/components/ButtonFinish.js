import React, { useState } from "react";
import PopupFinish from "./PopupFinish.js";

const ButtonFinish = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handlePopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const buttonStyle = {
    backgroundColor: "lightblue",
    padding: "5px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
  };

  return (
    <div>
      <button onClick={handlePopup} style={buttonStyle}>
        Done!
      </button>
      {showPopup && (
        <PopupFinish
          content="Thank you for playing!"
          handleClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ButtonFinish;
