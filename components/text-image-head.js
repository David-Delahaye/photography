import Image from "next/image";
import { useState } from "react";

export default function TextimageHead({ data, light, reverse }) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`text-image ${reverse ? "reverse" : ""}`}>
      <div className={`image ${active ? "active" : ""}`}>
        <img
          className={`image-display ${loaded && "loaded"}`}
          onLoad={() => {
            setLoaded(true);
          }}
          src={data.image.src}
          layout="fill"
          alt="image"
        />
      </div>
      <div className={`text ${light ? "light" : ""}`}>
        <h1 className="text-head">{data.text.head}</h1>
      </div>
    </div>
  );
}
