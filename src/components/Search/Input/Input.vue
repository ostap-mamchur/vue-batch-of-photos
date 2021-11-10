<template>
  <div class="col-auto">
    <label class="visually-hidden">Tag</label>
    <input
      type="text"
      class="form-control"
      placeholder="Tag"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["value"],
};
</script>
