import { useEffect, useState } from "react";

export default function Burger({ handleClick, open }) {
  //   const [open, setOpen] = useState(false);
  //   function handleBurger() {
  //     setOpen(!open);
  //     handleClick();
  //   }
  return (
    <div className={`burger ${open ? "open" : ""}`} onClick={handleClick}>
      <div className="slice" />
      <div className="slice" />
      <div className="slice" />
    </div>
  );
}
