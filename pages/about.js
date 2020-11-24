import Head from "next/head";
import Textimage from "../components/text-image";
import TextimageHead from "../components/text-image-head";
import Picturesquare from "../components/picture-square";
import Subscribe from "../components/subscribe";
import Paragraph from "../components/paragraph";

import { navigations, about } from "../lib/navigations";
import stories from "../lib/stories";

const renderParagraphs = about.paragraphs.map((e) => {
  return <Textimage data={e} light reverse />;
});

export default function About() {
  return (
    <div>
      <TextimageHead data={navigations[0]} reverse />
      {renderParagraphs}
      <Subscribe />
    </div>
  );
}
