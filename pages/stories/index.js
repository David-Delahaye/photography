import Head from "next/head";
import Textimage from "../../components/text-image";
import TextimageHead from "../../components/text-image-head";
import Picturesquare from "../../components/picture-square";
import Subscribe from "../../components/subscribe";

import { navigations } from "../../lib/navigations";
import stories from "../../lib/stories";

export default function Stories() {
  const storyRender = stories.map((e, i) => {
    let tag = "";
    if (i % 3 === 0 || i % 5 === 0) {
      return <Picturesquare data={e} />;
    }
    return <Picturesquare data={e} light />;
  });

  return (
    <div>
      <TextimageHead data={navigations[2]} reverse />
      <div className="four-squares">{storyRender}</div>
      <Subscribe />
    </div>
  );
}
