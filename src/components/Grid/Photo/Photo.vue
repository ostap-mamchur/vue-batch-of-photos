<template>
  <div
    class="
      flex-fill
      bg-light
      m-2
      p-1
      d-flex
      align-items-center
      justify-content-center
    "
    height="200"
  >
    <span
      class="d-inline-block"
      tabIndex="0"
      data-toggle="tooltip"
      :title="getTime()"
    >
      <img :src="source" alt="photo" />
    </span>
  </div>
</template>

<script>
import { format } from "timeago.js";
export default {
  name: "Photo",
  computed: {
  },
  methods: {
    getTime() {
      return format(this.published);
    }
  },
  props: ["source", "published"],
};
</script>
