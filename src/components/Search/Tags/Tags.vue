<template>
  <div
    class="btn-group btn-group-sm flex-wrap"
    role="group"
    aria-label="Third group"
  >
    <button
      type="button"
      class="btn btn-secondary m-1"
      v-for="(tag, index) in popularTags"
      :key="index"
      @click="$emit('add-tag', tag.name)"
    >
      {{ tag.name }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Tags",
  computed: mapGetters(["popularTags"]),
};
</script>
