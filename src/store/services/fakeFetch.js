export const fakeFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          id: "1",
          title: "Ремонт гостиной",
          url: "gostinaya",
          text: "Ремонт гостиной в кратчайшие сроки",
          img: "https://i.imgur.com/Rqca6Cm.jpg",
          price: 1800,
        },
        {
          id: "2",
          title: "Ремонт ванной",
          url: "vannaya",
          text: "Ремонт ванной в кратчайшие сроки",
          img: "https://i.imgur.com/Rqca6Cm.jpg",
          price: 2300,
        },
        {
          id: "3",
          title: "Ремонт спальной",
          url: "spalnaya",
          text: "Ремонт спальной в кратчайшие сроки",
          img: "https://i.imgur.com/Rqca6Cm.jpg",
          price: 2100,
        },
      ]);
    }, 400);
  });
};
