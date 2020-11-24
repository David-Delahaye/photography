import Image from "next/image";
import { useEffect, useState } from "react";

export default function Textimage({ data, light, reverse }) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const link = (
    <a
      href={data.text.slug}
      className="text-link"
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      {data.text.link}
      <svg
        width="35"
        height="20"
        viewBox="0 0 35 20"
        fill={light ? "black" : "white"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.2692 0.419604C23.4019 0.286595 23.5595 0.181067 23.733 0.109064C23.9065 0.0370616 24.0926 0 24.2804 0C24.4683 0 24.6543 0.0370616 24.8278 0.109064C25.0013 0.181067 25.159 0.286595 25.2916 0.419604L33.8612 8.98917C33.9942 9.12184 34.0997 9.27945 34.1717 9.45297C34.2437 9.62649 34.2808 9.81251 34.2808 10.0004C34.2808 10.1882 34.2437 10.3743 34.1717 10.5478C34.0997 10.7213 33.9942 10.8789 33.8612 11.0116L25.2916 19.5811C25.0234 19.8493 24.6597 20 24.2804 20C23.9011 20 23.5374 19.8493 23.2692 19.5811C23.001 19.313 22.8504 18.9492 22.8504 18.5699C22.8504 18.1907 23.001 17.8269 23.2692 17.5587L30.8304 10.0004L23.2692 2.44202C23.1362 2.30935 23.0307 2.15174 22.9587 1.97822C22.8867 1.8047 22.8496 1.61868 22.8496 1.43081C22.8496 1.24295 22.8867 1.05693 22.9587 0.883407C23.0307 0.709888 23.1362 0.552277 23.2692 0.419604Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10.0003C0 9.62154 0.150477 9.25826 0.418328 8.99041C0.686179 8.72256 1.04946 8.57208 1.42826 8.57208H31.4217C31.8005 8.57208 32.1638 8.72256 32.4317 8.99041C32.6995 9.25826 32.85 9.62154 32.85 10.0003C32.85 10.3791 32.6995 10.7424 32.4317 11.0103C32.1638 11.2781 31.8005 11.4286 31.4217 11.4286H1.42826C1.04946 11.4286 0.686179 11.2781 0.418328 11.0103C0.150477 10.7424 0 10.3791 0 10.0003Z"
        />
      </svg>
    </a>
  );

  const image = (
    <div className={`image ${active ? "active" : ""}`}>
      <img
        className={`image-display ${loaded ? "loaded" : ""}`}
        src={data.image && `${data.image.src}`}
        layout="fill"
        onLoad={() => {
          setLoaded(true);
        }}
        alt="image"
      />
    </div>
  );
  return (
    <div className={`text-image ${reverse ? "reverse" : ""}`}>
      {data.image && image}
      <div className={`text ${light ? "light" : ""}`}>
        <h2 className="text-head">{data.text && data.text.head}</h2>
        <p className="text-body">{data.text && data.text.body}</p>
        {data.text.link && link}
      </div>
    </div>
  );
}
