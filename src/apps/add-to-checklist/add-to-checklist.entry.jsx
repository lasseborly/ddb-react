import React, { useState } from "react";
import PropTypes from "prop-types";
import urlPropType from "url-prop-type";

import AddToChecklist from "./add-to-checklist";
import MaterialList from "../../core/MaterialList";

const client = new MaterialList();

function AddToChecklistEntry({ text, successText, errorText, id, loginUrl }) {
  const [loading, setLoading] = useState("inactive");

  function addToList() {
    setLoading("active");
    client.addListMaterial({ materialId: id }).catch(function onError() {
      setLoading("failed");
      setTimeout(function onRestore() {
        setLoading("inactive");
      }, 4000);
    });
  }

  return (
    <AddToChecklist
      text={text}
      errorText={errorText}
      successText={successText}
      loading={loading}
      onClick={addToList}
      loginUrl={loginUrl}
      materialId={id}
    />
  );
}

AddToChecklistEntry.propTypes = {
  text: PropTypes.string,
  errorText: PropTypes.string,
  successText: PropTypes.string,
  id: PropTypes.string.isRequired,
  loginUrl: urlPropType.isRequired
};

AddToChecklistEntry.defaultProps = {
  text: "Tilføj til min liste",
  errorText: "Det lykkedes ikke at gemme materialet.",
  successText: "Materialet er tilføjet"
};

export default AddToChecklistEntry;
