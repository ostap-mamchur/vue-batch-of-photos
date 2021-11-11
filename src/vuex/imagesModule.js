import axios from "axios";

export default {
  state: {
    images: [],
    status: "idle",
    error: null,
  },
  actions: {
    async fetchImages({ commit, state }, tag) {
      commit("pendingStatus");
      try {
        const response = await axios.get(
          `http://52.214.226.126:3006/?query=lang-en-us&format=json&tags=${tag}`
        );
        const items = await response.data.items;
        if (state.status !== "idle") {
          commit("addTags", items);
        }
        commit("updateImages", items);
        commit("fulfilledStatus");
      } catch (e) {
        commit("rejectedStatus", e);
      }
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
    },
    rejectedStatus(state, e) {
      state.error = e;
      state.status = "failed";
    },
  },
  getters: {
    allImages(state) {
      return state.images;
    },
    status(state) {
      return state.status;
    },
    error(state) {
      return state.error;
    }
  },
};
