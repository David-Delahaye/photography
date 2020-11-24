import Head from "next/head";
import Textimage from "../components/text-image";
import Picturesquare from "../components/picture-square";
import Subscribe from "../components/subscribe";

import { navigations } from "../lib/navigations";
import data from "../lib/stories";

export default function Home() {
  return (
    <div>
      <Textimage data={navigations[0]} reverse />
      <Textimage data={navigations[1]} light />
      <Textimage data={navigations[2]} reverse light />
      <div className="four-squares">
        <Picturesquare data={data[0]} light />
        <Picturesquare data={data[1]} />
        <Picturesquare data={data[2]} light />
        <Picturesquare data={data[3]} />
      </div>
      <Subscribe />
    </div>
  );
}
