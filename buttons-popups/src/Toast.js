import React, { useState, useEffect } from "react";
import "./Toast.css";

const Toast = props => {
  const { toastList } = props;

  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);
  return (
    <>
      {list.map((toast, i) => (
        <div className={`notification-container ${toast.position}`}>
          <div
            key={i}
            className={`notification toast ${toast.position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <div>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Toast;
