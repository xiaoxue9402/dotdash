import "./App.css";
import React from "react";
import { AcceptButton, CancelButton } from "./Buttons.js";
import { AcceptToast, CancelToast } from "./Toasts.js";

const App = () => {
  const [accepted, setAccepted] = React.useState(false);
  const [cancelled, setCancelled] = React.useState(false);

  const dismissToast = className => {
    const toastConatiner = document.getElementsByClassName(className)[0];
    toastConatiner.classList.remove("slide-in");
    toastConatiner.classList.add("slide-out");

  };

  const dismissAllToasts = () => {
    if (accepted) {
      dismissToast("accept-Toast-Container");
      setAccepted(false);
    }
    if (cancelled) {
      dismissToast("cancel-Toast-Container");
      setCancelled(false);
    }
  };

  const handleAccepted = () => {
    setAccepted(true);
    const toastConatiner = document.getElementsByClassName(
      "accept-Toast-Container"
    )[0];
    toastConatiner.classList.add("slide-in");
    setInterval(() => {
      dismissToast("accept-Toast-Container");
      setAccepted(false);
    }, 8000);
  };
  const handleCancelled = () => {
    setCancelled(true);
    const toastConatiner = document.getElementsByClassName(
      "cancel-Toast-Container"
    )[0];
    toastConatiner.classList.add("slide-in");
    setInterval(() => {
      dismissToast("cancel-Toast-Container");
      setCancelled(false);
    }, 8000);
  };

  return (
    <div className="app" onClick={() => dismissAllToasts()}>
      <div className="toast-Container accept-Toast-Container">
        <AcceptToast />
      </div>
      <div className="buttons-Container">
        <AcceptButton clicked={() => handleAccepted()} />
        <CancelButton clicked={() => handleCancelled()} />
      </div>
      <div className="toast-Container cancel-Toast-Container">
        <CancelToast />
      </div>
    </div>
  );
};

export default App;
