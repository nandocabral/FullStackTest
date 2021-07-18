<template>
  <figure class="bg-black mx-auto w-64 h-32 card--container inline-block align-middle transform hover:-translate-y-2 hover:w-96 hover:h-64 hover:shadow-lg origin-center transition-all duration-500 ease-in-out overflow-hidden hover:z-10 m-2">
    <div class="w-full h-32 bg-cover bg center" :style="`background-image:url('${data.Poster}')`"  />
    <div class="p-4 text-white flex flex-col">
      <div class="flex">
        <button class="mr-2" @click="consoleStuff('play')"><img src="/002-play-button.svg" alt="" class="h-6"></button>
        <button class="mr-2" @click="consoleStuff('more')"><img src="/003-plus.svg" alt="" class="h-6"></button>
        <button class="mr-2" @click="consoleStuff('like')"><img src="/001-like.svg" alt="" class="h-6"></button>
        <button @click="consoleStuff('dislike')"><img src="/004-dislike.svg" alt="" class="h-6"></button>
        <button class="m-2 ml-auto" @click="showInfo"><img src="/005-down-arrow.svg" alt="" class="h-6"></button>
      </div>
      <div class="flex items-center my-2">
        <span class="font-bold mr-2 text-xs text-green-600">{{data.imdbRating !== 'N/A' ? `${data.imdbRating}  %` : 'Nuevo'}}</span>
        <span class="px-1 border mr-2 text-xs uppercase text-white">{{data.Rated}}</span>
        <span class="text-white mr-2 text-xs">{{data.Released}}</span>
        <span class="px-1 border text-xs uppercase text-white">HD</span>
      </div>
      <div class="flex items-center">
        <span class="text-white text-tiny">{{data.Runtime}}</span><span class="px-1 text-gray-600">‧</span>
        <span class="text-white text-tiny ">{{data.Genre}}</span><span class="px-1 text-gray-600">‧</span>
        <span class="text-white text-tiny">{{data.Language}}</span>
      </div>
    </div>
  </figure>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapMutations({
      'mutateModal': 'mutateModal',
      'setModal': 'setModal'
    }),
    consoleStuff(stuff) {
      console.log(stuff)
    },
    showInfo() {
      this.setModal()
      this.mutateModal(this.data)
    }
  },
}
</script>

<style scoped>
 .card--container:hover {
   z-index:99
 }
</style>
