<template>
  <div>
    <modal-layout>
      <template #header>
        <div class="md:h-96 h-48 bg-cover bg-center w-full" :style="`background-image:url('${modalData.Poster}')`">
          <div class="bg-black bg-opacity-25 z-10 absolute top-0 right-0 left-0 w-full h-full modal--image-bg" />
          <div class="w-10/12 mx-auto absolute bottom-6 left-0 right-0 z-20">
            <div class="flex">
              <button class="mx-2 p-3 rounded bg-white flex items-center justify-center px-8">
                <img src="/play-button.svg" alt="" class="h-4 fill-white mr-2">
                <span>Play</span>
              </button>
              <button class="mx-2 py-3 px-4 rounded-full border border-white"><img src="/003-plus.svg" alt="" class="h-4"></button>
              <button class="mx-2 py-3 px-4 rounded-full border border-white"><img src="/001-like.svg" alt="" class="h-4"></button>
              <button class="mx-2 py-3 px-4 rounded-full border border-white"><img src="/004-dislike.svg" alt="" class="h-4"></button>
            </div>
          </div>
        </div>
      </template>
      <template #body>
        <section class="px-6 py-2 flex flex-col overflow-auto">
          <div class="flex md:flex-row flex-col items-start">
            <div class="flex-1 mr-6">
              <div class="flex items-center my-2">
                <span class="font-bold mr-2 text-sm text-green-600">{{modalData.imdbRating !== 'N/A' ? `${modalData.imdbRating}  %` : 'Nuevo'}}</span>
                <span class="font-bold mr-2 text-sm uppercase text-white">{{modalData.Year}}</span>
                <span class="px-1 border mr-2 text-xs uppercase text-white">{{modalData.Rated}}</span>
                <span class="text-white mr-2 text-sm">{{modalData.Released}}</span>
                <span class="px-1 border text-xs uppercase text-white">HD</span>
              </div>
            </div>
            <div class="md:w-64 w-full">
              <p class="text-white"><span class="text-gray-700">Cast: </span> {{modalData.Actors}}</p>
            </div>
          </div>
          <div class="flex md:flex-row flex-col items-center mt-6">
            <div class="flex-1 mr-6">
              <p class="text-white">{{modalData.Plot}}</p>
            </div>
            <div class="md:w-64 w-full">
              <p class="text-white"><span class="text-gray-700">Genres: </span> {{modalData.Genre}}</p>
              <p class="text-white"><span class="text-gray-700">Language(s): </span> {{modalData.Language}}</p>
            </div>
          </div>
          <h1 class="text-white text-lg uppercase mt-4 mb-2 font-bold">Images</h1>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-2">
            <img v-for="image, key in modalData.Images" :key="`image_${key}`" :src="image" class="md:h-32 h-24 m-2" />
          </div>
        </section>
      </template>
    </modal-layout>
    <main class="container mx-auto my-20">
      <div class="flex md:flex-row flex-col relative">
        <movie-card v-for="(movie, key) in movies" :key="`card_${key}`" :data="movie" />
      </div>
    </main>
  </div>
</template>

<script>
const MovieCard = () => import('~/components/MovieCard.vue')
const ModalLayout = () => import('~/components/ModalLayout.vue')
export default {
  components: {
    MovieCard,
    ModalLayout,
  },
  asyncData({store}) {
    store.dispatch('fetchJson')
  },
  computed: {
    movies() {
      return this.$store.getters.getState('data')
    },
    modalData() {
      return this.$store.getters.getState('modalData')
    }
  }
}
</script>
<style>
body {
  background-color: rgb(37, 37, 37);
}
.modal--image-bg{
  background: linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,1) 10%, rgba(255,255,255,0) 100%);
}
</style>
