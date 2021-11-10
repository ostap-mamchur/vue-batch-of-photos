<template>
  <div id="app">
    <div class="container-sm">
      <Search />
      <Grid />
    </div>
  </div>
</template>

<script>
import Search from "./components/Search/Search.vue";
import Grid from "./components/Grid/Grid.vue";

export default {
  name: "App",
  components: {
    Search,
    Grid
  },
};
</script>
