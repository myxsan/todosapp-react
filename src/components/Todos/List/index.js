import React, { useEffect, useState } from "react";
import Item from "./ListItem";
function List({ setTodos, list }) {
  const [activeCount, setActiveCount] = useState(
    list.filter((e) => e.active).length
  );
  const [filterIndicator, setFilterIndicator] = useState("");
  const [filtered, setFiltered] = useState(list);

  useEffect(() => {
    setActiveCount(list.filter((e) => e.active).length);
  }, [list]);

  const onFilter = (value) => {
    setFilterIndicator(value);
  };

  useEffect(() => {
    console.log(filterIndicator);
    if (filterIndicator === "") {
      setFiltered(list);
    } else {
      setFiltered(list.filter((e) => e.active === filterIndicator));
    }
  }, [filterIndicator, list]);

  const onCheck = (i) => {
    let tmp = list;
    tmp[i].active = !tmp[i].active;
    setTodos(tmp);
    setActiveCount(list.filter((e) => e.active).length);
  };

  return (
    <div>
      <ul>
        {filtered.map((e, i) => (
          <li key={i}>
            {
              <Item
                onCheck={() => onCheck(i)}
                context={e.context.toString()}
                active={e.active}
                deleteItem={(i) => {
                  const tmp = list.filter((e) => list.indexOf(e) !== i);
                  setTodos(tmp);
                }}
                i={i}
              />
            }
          </li>
        ))}
      </ul>
      <div>
        <span>{activeCount.toString()} item left</span>
        <button onClick={(e) => onFilter(e.target.value)}>All</button>
        <button onClick={(e) => onFilter(true)}>Active</button>
        <button onClick={(e) => onFilter(false)}>Completed</button>
      </div>
    </div>
  );
}

export default List;
