import React, { useEffect, useState } from "react";

const initialFormValues = { active: true, context: "" };

function Form({ addTodo, todos, setTodos }) {
  const [form, setForm] = useState(initialFormValues);
  useEffect(() => {
    if (!focused) return;
    setForm(initialFormValues);
  }, [todos]);

  const [isChecked, setIsChecked] = useState(false);

  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmitContext();
    } else {
      return false;
    }
  };

  const onSubmitContext = () => {
    if (!focused) {
      console.log("Not focused");
      return;
    }
    if (form.context === "") {
      console.log("empty context");
      return;
    }

    addTodo(form);
  };

  const handleCheckBoxChange = () => {
    setTodos(
      todos.map((e) => {
        e.active = isChecked;
        return e;
      })
    );
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        value={isChecked}
        checked={isChecked}
        onChange={handleCheckBoxChange}
      />
      <input
        name="context"
        onFocus={onFocus}
        onBlur={onBlur}
        id="formInput"
        placeholder="What needs to be done?"
        value={form.context}
        onChange={(e) => {
          setForm({ ...form, context: e.target.value });
        }}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
}

export default Form;
