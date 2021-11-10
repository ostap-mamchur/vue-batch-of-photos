<template>
  <div class="d-flex flex-wrap justify-content-center">
    <template v-if="status === 'idle'">
      <Photo
        v-for="(image, index) in allImages"
        :key="index"
        :source="image.media.m"
        :published="image.published"
      />
    </template>
    <template v-else-if="status === 'loading'">
      <Loading />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Photo from "./Photo/Photo.vue";
import Loading from "./Loading/Loading.vue";
export default {
  name: "Grid",
  computed: mapGetters(["allImages", "status"]),
  components: {
    Photo,
    Loading,
  },
};
</script>
