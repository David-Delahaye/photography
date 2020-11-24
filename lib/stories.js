import Lorem from "./lorem";

const stories = [
  {
    id: 0,
    text: {
      head: "Paris",
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange`,
      link: "See more",
      slug: "/stories/" + 0,
    },
    image: {
      src:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    },
    content: {
      paragraphs: [
        {
          text: {
            head: "Moulin Rouge",
            body: Lorem.display(1, 50),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1549746637-902d59a77eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
        },
        {
          text: {
            head: "Eiffel Tower",
            body: Lorem.display(1, 50),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          },
        },
        {
          text: {
            head: "Nice",
            body: Lorem.display(1, 50),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1573609342868-8be11522bb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1408&q=80",
          },
        },
      ],
    },
  },
  {
    id: 1,
    text: {
      head: "London",
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/stories/" + 1,
    },
    image: {
      src:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    content: {
      paragraphs: [
        {
          text: {
            head: "Beginnings",
            body: Lorem.display(1, 50),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1510265236892-329bfd7de7a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          },
        },
        {
          text: {
            head: "Underground",
            body: Lorem.display(1, 50),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=614&q=80",
          },
        },
        {
          text: {
            head: "Parliament",
            body: Lorem.display(1, 50),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1515165562839-978bbcf18277?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
        },
      ],
    },
  },

  {
    id: 2,
    text: {
      head: "Belgium",
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/stories/" + 2,
    },
    image: {
      src:
        "https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    content: {
      paragraphs: [
        {
          text: {
            head: "Great views",
            body: Lorem.display(1, 50),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1461838239441-4475121c0b7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
        },
        {
          text: {
            head: "Atmosphere",
            body: Lorem.display(1, 50),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1529349478482-df2f8fe5626f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1371&q=80",
          },
        },
        {
          text: {
            head: "Beautiful Dunes",
            body: Lorem.display(1, 50),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1522001297685-74edf936d06a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
          },
        },
      ],
    },
  },
  {
    id: 3,
    text: {
      head: "Australia",
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/stories/" + 3,
    },
    image: {
      src:
        "https://images.unsplash.com/photo-1494233892892-84542a694e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    },
    content: {
      paragraphs: [
        {
          text: {
            head: "Culture",
            body: Lorem.display(1, 60),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1526958977630-bc61b30a2009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
        },

        {
          text: {
            head: "Wildlife",
            body: Lorem.display(1, 25),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1519003300449-424ad0405076?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80",
          },
        },
        {
          text: {
            head: "Views",
            body: Lorem.display(1, 200),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1516941064643-74aacd84843c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
        },
      ],
    },
  },

  {
    id: 4,
    text: {
      head: "Thailand",
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/stories/" + 4,
    },
    image: {
      src:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    content: {
      paragraphs: [
        {
          text: {
            head: "Culture",
            body: Lorem.display(1, 60),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1552550018-5253c1b171e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGhhaWxhbmR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
          },
        },

        {
          text: {
            head: "Wildlife",
            body: Lorem.display(1, 25),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1333&q=80",
          },
        },
        {
          text: {
            head: "Views",
            body: Lorem.display(1, 200),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1494949360228-4e9bde560065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          },
        },
      ],
    },
  },
  {
    id: 5,
    text: {
      head: "Scotland",
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/stories/" + 5,
    },
    image: {
      src:
        "https://images.unsplash.com/photo-1589489873423-d1745278a8f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    content: {
      paragraphs: [
        {
          text: {
            head: "Culture",
            body: Lorem.display(1, 60),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1551801691-f0bce83d4f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
        },

        {
          text: {
            head: "Wildlife",
            body: Lorem.display(1, 45),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1571936804022-90d128047136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
          },
        },
        {
          text: {
            head: "Views",
            body: Lorem.display(1, 200),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1472502516535-eeee381bb45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
        },
      ],
    },
  },
  {
    id: 6,
    text: {
      head: "Canada",
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/stories/" + 6,
    },
    image: {
      src:
        "https://images.unsplash.com/photo-1507409613952-518459ac866e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    content: {
      paragraphs: [
        {
          text: {
            head: "Culture",
            body: Lorem.display(1, 60),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
        },

        {
          text: {
            head: "Wildlife",
            body: Lorem.display(1, 45),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1533417457911-4ec911485388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
          },
        },
        {
          text: {
            head: "Views",
            body: Lorem.display(1, 200),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=636&q=80",
          },
        },
      ],
    },
  },
  {
    id: 7,
    text: {
      head: "Chile",
      body: Lorem.display(1, 50),
      link: "See more",
      slug: "/stories/" + 7,
    },
    image: {
      src:
        "https://images.unsplash.com/photo-1490782300182-697b80ad4293?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    content: {
      paragraphs: [
        {
          text: {
            head: "Culture",
            body: Lorem.display(1, 60),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1478827387698-1527781a4887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
        },

        {
          text: {
            head: "Wildlife",
            body: Lorem.display(1, 45),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1530812801743-bf24527067bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
        },
        {
          text: {
            head: "Views",
            body: Lorem.display(1, 200),
          },
          image: {
            src:
              "https://images.unsplash.com/photo-1465441245157-cc387edf4e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
          },
        },
      ],
    },
  },
];

export default stories;
