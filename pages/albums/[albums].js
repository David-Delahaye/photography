import albums from "../../lib/albums";
import Picturesquare from "../../components/picture-square";
import TextimageHead from "../../components/text-image-head";
import Textimage from "../../components/text-image";
import Subscribe from "../../components/subscribe";

export default function Album({ album }) {
  const photoRender = album.content.pictures.map((e, i) => {
    if (i % 2 === 1) return <Picturesquare data={e} light />;
    return <Picturesquare data={e} />;
  });

  return (
    <div>
      <TextimageHead data={album} reverse />
      <div className="four-squares">{photoRender}</div>
      <Subscribe />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: albums.map((album) => ({
      params: {
        albums: album.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const album = albums[parseInt(params.albums)];
  return {
    props: { album },
    revalidate: 1,
  };
}
