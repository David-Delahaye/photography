import { useState } from "react";
import useWindowDimensions from "../lib/useWindowDimensions";
import Burger from "../components/burger";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useState(false);

  function handleClick() {
    console.log("clicked");
    setOpen(!open);
  }

  return (
    <nav>
      <li className="brand">
        {" "}
        <Link href="/">
          <a>BRAND NAME</a>
        </Link>
      </li>
      {width < 600 ? (
        <>
          <div className="nav-right">
            <Burger handleClick={handleClick} open={open} />
          </div>
          <div className={`mobile ${open ? "open" : ""}`}>
            <li>Stories</li>
            <li>Albums</li>
          </div>
        </>
      ) : (
        <div className="nav-right">
          <li>
            <Link href="/stories">
              <a>Stories</a>
            </Link>
          </li>
          <li>
            <Link href="/albums">
              <a>Albums</a>
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
}
