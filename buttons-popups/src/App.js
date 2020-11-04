import React, { useState, useEffect } from "react";
import Toast from "./Toast.js";
import Button from "./Button.js";

import "./App.css";

const App = () => {
  const [list, setList] = useState([]);

  const BUTTON_PROPS = [
    {
      id: 1,
      type: "accept",
      className: "accept",
      label: "Accept"
    },
    {
      id: 2,
      type: "cancel",
      className: "cancel",
      label: "Cancel"
    }
  ];

  const showToast = type => {
    let toastProperties = null;
    switch (type) {
      case "accept":
        toastProperties = {
          id: 1,
          description: "Thank you!",
          backgroundColor: "#5cb85c",
          position: "top-right"
        };
        break;
      case "cancel":
        toastProperties = {
          id: 2,
          description: "Come back soon.",
          backgroundColor: "#f0ad4e",
          position: "bottom-right"
        };
        break;
      default:
        setList([]);
    }
    setList([...list, toastProperties]);
  };

  const dismissAll = className => {
    if (className !== 'button' && list && list.length) {
      setList([]);
    }
  };

  return (
    <div className="app" onClick={event => dismissAll(event.target.className)}>
      <div className="app-body">
        <div className="toast-buttons">
          {BUTTON_PROPS.map(button => (
            <Button
              key={button.id}
              className={`button ${button.className}`}
              label={button.label}
              type={button.type}
              handleClick={() => showToast(button.type)}
            />
          ))}
        </div>
      </div>
      <Toast toastList={list} />
    </div>
  );
};
export default App;
