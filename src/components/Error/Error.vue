<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-12 text-center">
      <div class="mb-4 lead">{{ error }}</div>
      <button @click="handleReloadClick" class="btn btn-link">
        Reload page
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Error",
  computed: mapGetters(["error"]),
  methods: {
    handleReloadClick() {
      window.location.reload();
    }
  }
};
</script>

<style></style>
