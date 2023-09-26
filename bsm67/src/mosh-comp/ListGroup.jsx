import { Fragment } from "react";
import { MouseEvent } from "react";
function ListGroup() {
  let items = ["NY", "LA", "SF", "CHI"];
  //   items = [];
  const getMessage = () => {
    return items.length === 0 ? <p> No item found!</p> : null;
  };
  // what is === vs ==? Ans: === is strict equality operator. It checks both the type and the value.

  //this is an event handler function
  const handleClick = (event) => console.log(event);

  return (
    <>
      <h1> List </h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p> No item found!</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
