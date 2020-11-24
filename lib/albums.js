import Lorem from "./lorem";

const albumGenerate = (size) => {
  let pictures = [];
  for (let i = 0; i < size; i++) {
    pictures.push({
      image: {
        src: `https://source.unsplash.com/random/800x80${i}`,
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
      src:
        "https://images.unsplash.com/photo-1605177978660-75594fcf9649?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
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
      src:
        "https://images.unsplash.com/photo-1603881033666-c24ee5c59c31?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
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
      src:
        "https://images.unsplash.com/photo-1603965478176-fda8128aeca0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
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
      src:
        "https://images.unsplash.com/photo-1605453828334-371b9a6b4a69?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
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
      src:
        "https://images.unsplash.com/photo-1605187477857-e56a004da7fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
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
      src:
        "https://images.unsplash.com/photo-1604233738267-7945098da152?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
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
      src:
        "https://images.unsplash.com/photo-1606129938152-22aea3642239?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
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
      src:
        "https://images.unsplash.com/photo-1603599913182-dca731eae5f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    content: {
      pictures: albumGenerate(12),
    },
  },
];

export default albums;
