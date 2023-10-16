import React from "react";

const TitleBanner = () => {
  return (
    <div style={bannerStyle}>
      <h1 style={titleStyle}>Movie List</h1>
    </div>
  );
};

const bannerStyle = {
  backgroundColor: "#d87a45",
  padding: "10px",
  textAlign: "center",
};

const titleStyle = {
  color: "#333333",
  fontFamily: "Arial, sans-serif",
  fontSize: "50px",
  fontWeight: "bold",
};

export default TitleBanner;
