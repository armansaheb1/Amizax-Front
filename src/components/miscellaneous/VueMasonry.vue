<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Miscellaneous /</span> Vue Masonry
    </h4>

    <hr class="container-m-nx border-light mt-0 mb-4">

    <div v-masonry transition-duration="0.3s" item-selector=".masonry-item" :origin-left="isRtlMode ? 'false' : 'true'">
      <div v-masonry-tile class="masonry-item" :class="item.class" v-for="item in items" :key="item.title">
         {{ item.title }}
      </div>
    </div>

  </div>
</template>

<style>
  .masonry-item {
    width: 160px;
    height: 120px;
    float: left;
    border-radius: 5px;
  }

  .masonry-item--width2 { width: 320px; }
  .masonry-item--width3 { width: 480px; }
  .masonry-item--width4 { width: 640px; }

  .masonry-item--height2 { height: 200px; }
  .masonry-item--height3 { height: 260px; }
  .masonry-item--height4 { height: 360px; }
</style>

<script>
import Vue from 'vue'
import { VueMasonryPlugin } from 'vue-masonry/index.js'

Vue.use(VueMasonryPlugin)

export default {
  name: 'miscellaneous-vue-masonry',
  metaInfo: {
    title: 'Vue Masonry - Miscellaneous'
  },
  data: () => ({
    items: [
      { title: 'Item 1', class: 'bg-light border' },
      { title: 'Item 2', class: 'bg-light border masonry-item--width2 masonry-item--height2' },
      { title: 'Item 3', class: 'bg-light border masonry-item--height3' },
      { title: 'Item 4', class: 'bg-light border masonry-item--height2' },
      { title: 'Item 5', class: 'bg-light border masonry-item--width3' },
      { title: 'Item 6', class: 'bg-light border' },
      { title: 'Item 7', class: 'bg-light border' },
      { title: 'Item 8', class: 'bg-light border masonry-item--height2' },
      { title: 'Item 9', class: 'bg-light border masonry-item--width2 masonry-item--height3' },
      { title: 'Item 10', class: 'bg-light border' },
      { title: 'Item 11', class: 'bg-light border masonry-item--height2' },
      { title: 'Item 12', class: 'bg-light border' },
      { title: 'Item 13', class: 'bg-light border masonry-item--width2 masonry-item--height2' },
      { title: 'Item 14', class: 'bg-light border masonry-item--width2' },
      { title: 'Item 15', class: 'bg-light border' },
      { title: 'Item 16', class: 'bg-light border masonry-item--height2' },
      { title: 'Item 17', class: 'bg-light border' },
      { title: 'Item 18', class: 'bg-light border' },
      { title: 'Item 19', class: 'bg-light border masonry-item--height3' },
      { title: 'Item 20', class: 'bg-light border masonry-item--height2' },
      { title: 'Item 21', class: 'bg-light border' },
      { title: 'Item 22', class: 'bg-light border' },
      { title: 'Item 23', class: 'bg-light border masonry-item--height2' }
    ]
  })
}
</script>
