<template>
  <form class="mt-4 row g-3 justify-content-center">
    <Input :value="tagText" @input="tagText = $event" />
    <Buttons :tagText="tagText" />
    <Tags @add-tag="handleAddTag" />
  </form>
</template>

<script>
import Buttons from "./Buttons/Buttons.vue";
import Input from "./Input/Input.vue";
import Tags from "./Tags/Tags.vue";

export default {
  name: "Search",
  data() {
    return {
      tagText: "",
    };
  },
  methods: {
    handleAddTag(tag) {
      this.tagText = tag;
    }
  },
  components: {
    Buttons,
    Input,
    Tags,
  },
};
</script>
