import stories from "../../lib/stories";
import Picturesquare from "../../components/picture-square";
import TextimageHead from "../../components/text-image-head";
import Textimage from "../../components/text-image";
import Paragraph from "../../components/paragraph";
import Subscribe from "../../components/subscribe";

export default function Story({ story }) {
  const paragraphRender = story.content.paragraphs.map((e, i) => {
    if (i % 2 === 0) return <Textimage data={e} reverse light />;
    return <Textimage data={e} reverse />;
  });
  return (
    <div>
      <TextimageHead data={story} reverse />
      {paragraphRender}
      <Subscribe />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: stories.map((stories) => ({
      params: {
        stories: stories.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const story = stories[parseInt(params.stories)];
  return {
    props: { story },
    revalidate: 1,
  };
}
