<template>
  <div
    v-if="show"
    ref="modal"
    class="modal-mask fixed overflow-auto flex w-full h-full bg-black top-0 left-0 bg-opacity-75"
    @click.self="setModal"
  >
  <div
    class="fixed max-w-6xl align-top mx-auto justify-center rounded w-full md:h-auto flex flex-col shadow-2xl right-0 left-0 md:top-20 overflow-hidden"
    :class="bgModalColor"
  >
    <div
      class="relative"
    >
      <slot name="header" />
      <button
        v-if="showCloseBtn"
        type="button"
        class=" ml-auto absolute right-4 top-4 bg-black p-2 rounded-full border border-white z-20"
        @click="setModal"
      >
        <svg fill="#ffffff" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
          <path
            fill="#ffffff"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ></path>
        </svg>
      </button>
    </div>

    <div class="p-4 flex flex-col items-stretch bg-grayflix">
      <slot name="body" />
    </div>
  </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    bgModalColor: {
      type: String,
      default: 'bg-white',
    },
    showCloseBtn: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    show() {
      return this.$store.getters.getState('modal')
    }
  },
  methods: {
    ...mapMutations({
      'setModal': 'setModal'
    }),
  },
}
</script>

<style scoped>
.modal-mask {
  z-index: 9998;
  transition: opacity 0.3s ease;
}
</style>
