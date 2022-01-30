<template>
  <div class="mt-5">
    <p>Articles component</p>
    <ul>
      <li v-for="n in 5" :key=n>article info: {{ n }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  props: {
   
  }
}
</script>
