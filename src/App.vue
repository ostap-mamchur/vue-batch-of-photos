<template>
  <div id="app">
    <div class="container-sm">
      <template v-if="status !== 'failed'">
        <Search />
        <Grid />
      </template>
      <template v-else>
        <Error />
      </template>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search/Search.vue";
import Grid from "./components/Grid/Grid.vue";
import Error from "./components/Error/Error.vue"; 

import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Search,
    Grid,
    Error
  },
  computed: mapGetters(["status"]),
};
</script>
