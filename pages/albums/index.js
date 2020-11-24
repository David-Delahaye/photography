import Head from "next/head";
import Textimage from "../../components/text-image";
import TextimageHead from "../../components/text-image-head";
import Picturesquare from "../../components/picture-square";
import Subscribe from "../../components/subscribe";

import { navigations } from "../../lib/navigations";
import albums from "../../lib/albums";

export default function Albums() {
  const albumRender = albums.map((e, i) => {
    let tag = "";
    if (i % 3 === 0 || i % 5 === 0) {
      return <Picturesquare data={e} />;
    }
    return <Picturesquare data={e} light />;
  });

  return (
    <div>
      <TextimageHead data={navigations[1]} reverse />
      <div className="four-squares">{albumRender}</div>
      <Subscribe />
    </div>
  );
}
