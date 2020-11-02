import React, { useState, useEffect } from "react";
import "./Toast.css";

const Toast = props => {
  const { toastList } = props;

  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  const removeToast = id => {
    const listItemIndex = list.findIndex(toast => toast.id === id);
    const toastListItem = toastList.findIndex(toast => toast.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  useEffect(() => {
    console.log(list, toastList)
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        removeToast(toastList[0].id);
      }
    }, 8000);
    return () => {
      clearInterval(interval);
    };
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
