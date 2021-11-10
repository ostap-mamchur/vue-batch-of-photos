import axios from "axios";

export default {
  state: {
    images: [],
    status: "idle",
  },
  actions: {
    async fetchImages({ commit, state }, tag) {
      commit('pendingStatus');
      const response = await axios.get(
        `http://52.214.226.126:3006/?query=lang-en-us&format=json&tags=${tag}`
      );
      const items = await response.data.items;
      if (state.status !== "idle") {
        commit('addTags', items);
      }
      commit("updateImages", items);
      commit('fulfilledStatus');
    },
  },
  mutations: {
    updateImages(state, images) {
      if (state.status !== "idle") {
        state.images = images;
      } 
    },
    pendingStatus(state) {
      state.status = "loading";
    },
    fulfilledStatus(state) {
      state.status = "idle";
    }
  },
  getters: {
    allImages(state) {
      return state.images;
    },
    status(state) {
      return state.status;
    }
  }
};
