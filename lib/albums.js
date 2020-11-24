import Lorem from "./lorem";

const albumGenerate = (size) => {
  let pictures = [];
  for (let i = 0; i < size; i++) {
    pictures.push({
      image: {
        src: `https://source.unsplash.com/random/1491x80${i}`,
      },
    });
  }
  return pictures;
};

const albums = [
  {
    id: 0,
    text: {
      head: Lorem.display(1, 1),
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/albums/0",
    },
    image: {
      src: "https://source.unsplash.com/random/1491x809",
    },
    content: {
      pictures: albumGenerate(12),
    },
  },
  {
    id: 1,
    text: {
      head: Lorem.display(1, 1),
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/albums/1",
    },
    image: {
      src: "https://source.unsplash.com/random/1491x808",
    },
    content: {
      pictures: albumGenerate(12),
    },
  },
  {
    id: 2,
    text: {
      head: Lorem.display(1, 1),
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/albums/2",
    },
    image: {
      src: "https://source.unsplash.com/random/1491x807",
    },
    content: {
      pictures: albumGenerate(12),
    },
  },
  {
    id: 3,
    text: {
      head: Lorem.display(1, 1),
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/albums/3",
    },
    image: {
      src: "https://source.unsplash.com/random/1491x804",
    },
    content: {
      pictures: albumGenerate(12),
    },
  },
  {
    id: 4,
    text: {
      head: Lorem.display(1, 1),
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/albums/4",
    },
    image: {
      src: "https://source.unsplash.com/random/1491x809",
    },
    content: {
      pictures: albumGenerate(12),
    },
  },
  {
    id: 5,
    text: {
      head: Lorem.display(1, 1),
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/albums/5",
    },
    image: {
      src: "https://source.unsplash.com/random/1491x799",
    },
    content: {
      pictures: albumGenerate(12),
    },
  },
  {
    id: 6,
    text: {
      head: Lorem.display(1, 1),
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/albums/6",
    },
    image: {
      src: "https://source.unsplash.com/random/1491x796",
    },
    content: {
      pictures: albumGenerate(12),
    },
  },
  {
    id: 7,
    text: {
      head: Lorem.display(1, 1),
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/albums/7",
    },
    image: {
      src: "https://source.unsplash.com/random/1491x810",
    },
    content: {
      pictures: albumGenerate(12),
    },
  },
];

export default albums;
