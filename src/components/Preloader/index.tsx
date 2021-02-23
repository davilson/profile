import React from "react";

const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
