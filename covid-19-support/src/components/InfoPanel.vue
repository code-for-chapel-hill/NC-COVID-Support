<template>
  <div class="list-group list-group-flush">
    <div class="list-group-item list-group-item-action bg-light" :class="infotype">
      <i class="fas" :class="icon" />
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoPanel',
  data() {
    return {}
  },
  props: {
    infotype: { type: String },
    icon: { type: String }
  }
}
</script>

<style>
.note,
.handwash {
  font-size: 0.8rem;
  color: #666;
}

.note i,
.handwash i {
  font-size: 3rem;
  color: #ffb71c;
  margin: 7px 10px 0 0;
  float: left;
}

.handwash i {
  color: #ff2c1c;
}

.note div,
.handwash div {
  display: inline-block;
  width: 185px;
}
</style>
