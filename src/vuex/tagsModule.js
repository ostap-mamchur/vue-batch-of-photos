import compareTags from "../utils/compareTags";

export default {
  state: {
    tags: [],
  },
  mutations: {
    addTags(state, items) {
      items.forEach((item) => {
        const tags = item.tags.split(" ");
        tags.forEach((tag) => {
          const existingTag = state.tags.find((t) => t.name === tag);
          if (existingTag) {
            existingTag.number += 1;
          } else {
            state.tags.push({ name: tag, number: 1 });
          }
        });
      });
    },
  },
  getters: {
    popularTags(state) {
      const tags = [...state.tags];
      tags.sort(compareTags);
      return tags.slice(0, 10);
    },
  },
};
