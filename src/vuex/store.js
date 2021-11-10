import Vue from "vue";
import Vuex from "vuex";
import images from "./imagesModule";
import tags from "./tagsModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    images,
    tags
  },
});
