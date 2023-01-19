export const filterdPost = (list, keyword) => {
  return list
    .filter((item) => item.title)
    .map((item) => {
      item.title = JSON.parse(item.title).title;
      return item;
    })
    .filter((item) => item.title.includes(keyword))
    .splice(0, 10);
};
