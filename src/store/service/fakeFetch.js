const data = {
  gostinaya: {
    id: "1",
    title: "Ремонт гостиной",
    url: "gostinaya",
    text: "Ремонт гостиной в кратчайшие сроки",
    description:
      "Наша компания выполняет ремонт гостиных в квартирах под ключ любой сложности.Гостиная – это немаловажное помещение в любом доме, квартире, в ней принимают долгожданных гостей, проводят досуг, удобно разместившись в мягком кресле. Клиентам следует ответственно отнестись к работам, создать красивый дизайн в гостиной. Наши мастера выполнят ремонт, независимо, где живет клиент в хрущевке или новом доме. Мы сделаем гостиную максимально уютной, изящной и многофункциональной.",
    feedbacks: [
      {
        id: 1,
        name: "Глеб",
        comment: "Отличная работа!",
        evaluation: 5,
      },
    ],
    img: "https://i.imgur.com/Rqca6Cm.jpg",
    price: 1800,
  },
  vannaya: {
    id: "2",
    title: "Ремонт ванной",
    url: "vannaya",
    text: "Ремонт ванной в кратчайшие сроки",
    description:
      "Предоствляем дешевый ремонт санузла под ключ. Осуществляем сантехнические, электромонтажные, отделочные работы. Осуществляем дизайнерский, косметический, капитальный ремонт. Ванная – главное помещение в квартире, загородном доме. Оно вмещает стиральную машинку, полотенцесушитель, мебель, раковину, ванну. При ремонте нужно учитывать размер комнаты, монтаж сантехники, чтобы санузел стал комфортным и функциональным",
    feedbacks: [
      // {
      //   id: 2,
      //   name: "Валерия",
      //   comment: "Отличный ремонт ванной комнаты!",
      //   evaluation: 5,
      // },
      // {
      //   id: 3,
      //   name: "Леонид",
      //   comment: "Отлично, но долго делали",
      //   evaluation: 4,
      // },
    ],
    img: "https://i.imgur.com/Rqca6Cm.jpg",
    price: 2300,
  },
  spalnaya: {
    id: "3",
    title: "Ремонт спальной",
    url: "spalnaya",
    text: "Ремонт спальной в кратчайшие сроки",
    description:
      "Наша компания выполняет ремонт спален под ключ любой сложности. Благоустройство помещения – это не простой процесс, который требует от специалиста практических умений и знаний. Наша организация предоставляет клиентам отремонтировать спальню по демократичной цене. Опытные специалисты окажут помощь в выборе строительных материалов, сделают отделку помещения, и создадут красивый дизайн. Только качественный ремонт поможет создать комфортные условия владельцу квартиры.",
    feedbacks: [
      {
        id: 3,
        name: "Алиса",
        comment: "Ремонт спальной супер!",
        evaluation: 5,
      },
    ],
    img: "https://i.imgur.com/Rqca6Cm.jpg",
    price: 1800,
  },
};
export const fakeFetch = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data[id]);
    }, 400);
  });
};
