import { useState } from "react";
import useWindowDimensions from "../lib/useWindowDimensions";
import Burger from "../components/burger";
import Image from "next/image";
import Link from "next/link";

import { navigations, brand } from "../lib/navigations";

export default function Nav() {
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useState(false);

  function handleClick() {
    console.log("clicked");
    setOpen(!open);
  }

  let renderNavigations = navigations.map((e, i) => {
    return (
      <li key={i}>
        <Link href={e.text.slug}>
          <a href="">{e.text.head}</a>
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <li className="brand">
        {" "}
        <Link href="/">
          <a>{brand.name}</a>
        </Link>
      </li>
      {width < 600 ? (
        <>
          <div className="nav-right">
            <Burger handleClick={handleClick} open={open} />
          </div>
          <div className={`mobile ${open ? "open" : ""}`}>
            {renderNavigations}
          </div>
        </>
      ) : (
        <div className="nav-right">{renderNavigations}</div>
      )}
    </nav>
  );
}
