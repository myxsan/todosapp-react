import React, { useEffect, useState } from "react";

function Item({ context = "", active = true, onCheck, deleteItem, i }) {
  const [isChecked, setisChecked] = useState(!active);

  const handleOnChange = () => {
    setisChecked(!isChecked);
    onCheck(i);
  };

  useEffect(() => {
    if (isChecked === active) {
      setisChecked(!isChecked);
    }
  }, [active]);

  return (
    <div>
      <input
        type="checkbox"
        value={isChecked}
        checked={isChecked}
        onChange={() => {
          handleOnChange();
        }}
      />
      <span>{context}</span>
      <button
        onClick={() => {
          deleteItem(i);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Item;
