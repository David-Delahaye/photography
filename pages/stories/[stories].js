import stories from "../../lib/stories";
import Picturesquare from "../../components/picture-square";
import Textimage from "../../components/text-image";

export default function Story({ story }) {
  return (
    <div>
      <Textimage data={story} reverse />
      <h1>{story.text.head}</h1>
      <div>{story.text.body}</div>
      <div>{story.text.body}</div>
      <div>{story.text.body}</div>
      <div>{story.text.body}</div>
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
