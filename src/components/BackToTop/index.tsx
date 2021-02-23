import React from "react";

const BackToTop: React.FC = () => {
  return (
    <button
      id="back-to-top"
      className="rounded-circle"
      data-toggle="tooltip"
      title="Voltar ao topo"
      type="button"
    >
      <i className="fa fa-chevron-up"></i>
    </button>
  );
};

export default BackToTop;
