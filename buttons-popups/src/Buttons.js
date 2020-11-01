const AcceptButton = ({ clicked }) => {
  return (
    <button className="accept-Button" onClick={clicked}>
      Accept
    </button>
  );
};

const CancelButton = ({ clicked }) => {
  return (
    <button className="cancel-Button" onClick={clicked}>
      Cancel
    </button>
  );
};

export {AcceptButton, CancelButton}
