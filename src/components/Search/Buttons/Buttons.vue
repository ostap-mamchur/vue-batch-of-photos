<template>
  <div class="col-auto">
    <button
      @click.prevent="handleSubmitForm"
      type="submit"
      class="btn btn-primary"
      :disabled="status !== 'idle'"
    >
      Search
    </button>
    {{ " " }}
    <button
      @click="handleCancelClick"
      class="btn btn-danger"
      :disabled="status !== 'loading'"
    >
      Cancel
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Buttons",
  props: ["tagText"],
  computed: mapGetters(["status"]),
  methods: {
    ...mapActions(["fetchImages"]),
    ...mapMutations(["fulfilledStatus"]),
    handleSubmitForm() {
      if (this.tagText && this.status === "idle") {
        this.fetchImages(this.tagText);
      }
    },
    handleCancelClick() {
      if (this.status === "loading") {
        this.fulfilledStatus();
      }
    },
  },
};
</script>
