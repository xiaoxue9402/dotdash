import React from "react";
import Toast from './Toast.js';
import Button from './Button.js';

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

  const showToast = () => {
    let toastProperties = null;
    switch (type) {
      case "Accept":
        toastProperties = {
          id: 1,
          description: "Thank you!",
          backgroundColor: "#5cb85c",
          position: "top-right",
        };
        break;
      case "Cancel":
        toastProperties = {
          id: 2,
          description: "Come back soon.",
          backgroundColor: '#f0ad4e',
          position: "bottom-right",
        };
        break;
      default:
        setList([]);
    }
    setList([...list, toastProperties]);
  };

  return (
    <div className="app">
      <div className="app-header">
        <div className="toast-buttons">
          {BUTTON_PROPS.map(button => (
            <Button
              key={button.id}
              className={button.className}
              label={button.label}
              handleClick={() => showToast(button.type)}
            />
          ))}
        </div>
      </div>
      <Toast
        toastList={list}
      />
    </div>
  );
};
export default App;
