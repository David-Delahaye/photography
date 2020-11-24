import Head from "next/head";
import Textimage from "../components/text-image";
import Picturesquare from "../components/picture-square";
import Subscribe from "../components/subscribe";

const data = [
  {
    text: {
      head: "David Delahaye",
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange`,
      link: "See more",
      slug: "/about",
    },
    image: {
      src:
        "https://images.unsplash.com/photo-1450631835004-9b95ff5cd66f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
  {
    text: {
      head: "Albums",
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange`,
      link: "See more",
      slug: "/albums",
    },
    image: {
      src:
        "https://images.unsplash.com/photo-1542339462-14abfe8ff6ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
  {
    text: {
      head: "Stories",
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange`,
      link: "See more",
      slug: "/stories",
    },
    image: {
      src:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
];

export default function Home() {
  return (
    <div>
      <Textimage data={data[0]} reverse />
      <Textimage data={data[1]} light />
      <Textimage data={data[2]} reverse light />
      <div className="four-squares">
        <Picturesquare data={data[0]} light />
        <Picturesquare data={data[1]} />
        <Picturesquare data={data[2]} light />
        <Picturesquare data={data[0]} />
      </div>
      <Subscribe />
    </div>
  );
}
