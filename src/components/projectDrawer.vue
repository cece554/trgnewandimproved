<template>
  <aside
    class="drawer"
    v-bind:class="{ closed: isClosed, opened: !isClosed }"
  >
    <span class="drawer__overlay closer"></span>
    <header
      class="drawer__header"
    >
      <span
        class="drawer__close closer"
        @click="closeDrawer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 20.953 20.953"
        >
          <path
            id="Icon_ionic-md-close"
            data-name="Icon ionic-md-close"
            d="M28.477,9.619l-2.1-2.1L18,15.9,9.619,7.523l-2.1,2.1L15.9,18,7.523,26.381l2.1,2.1L18,20.1l8.381,8.381,2.1-2.1L20.1,18Z"
            transform="translate(-7.523 -7.523)"
          />
        </svg>
      </span>
    </header>
    <main class="drawer__content" v-for="work in works" :key="work.client">
      <section class="drawer__media">
        <splide>
          <splide-slide>
            <img
              src="@/assets/img/Clients/Xtina/AfroHouse-Memorial-Day-Party-Flyer.png"
            />
          </splide-slide>
          <splide-slide>
            <img
              src="@/assets/img/Clients/Xtina/studio-imphepo-flyer-Sept-goodwill-Approved.png"
            />
          </splide-slide>
          <splide-slide>
            <img
              src="@/assets/img/Clients/Xtina/AfroHouse-Memorial-Day-Party-Flyer.png"
            />
          </splide-slide>
          <splide-slide>
            <img
              src="@/assets/img/Clients/Xtina/studio-imphepo-flyer-Sept-goodwill-Approved.png"
            />
          </splide-slide>
        </splide>

        <div class="drawer__media-container" data-current="0">
          <figure class="work-img">
            <img
              src="require(`@/assets/img/Clients/${work.images}`)"
              alt=""
              srcset=""
            />
          </figure>
        </div>
      </section>
      <div class="controls">
        <button class="controls__left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.6"
            height="16"
            viewBox="0 0 12.572 20.953"
          >
            <path
              id="backward-left"
              data-name="backward-left"
              d="M28.477,9.619l-2.1-2.1L18,15.9,15.9,18,18,20.1l8.381,8.381,2.1-2.1L20.1,18Z"
              transform="translate(-15.905 -7.523)"
            />
          </svg>
        </button>
        <button class="controls__right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.6"
            height="16"
            viewBox="0 0 12.572 20.953"
          >
            <path
              id="forward-right"
              data-name="forward-right"
              d="M15.9,9.619l2.1-2.1L26.381,15.9l2.1,2.1-2.1,2.1L18,28.477l-2.1-2.1L24.286,18Z"
              transform="translate(-15.905 -7.523)"
            />
          </svg>
        </button>
      </div>
      <section class="drawer__project-details">
        <h3>{{ work.client }}</h3>
        <p>{{ work.details }}</p>
        <div class="project-scope">
          <h5 class="scope-title">scope</h5>
          <small class="scope-details">
            <ul>
              <li>{{ work.scope }}</li>
            </ul>
          </small>
        </div>
      </section>
    </main>
  </aside>
</template>

<script>
import works from '../data/works.js';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  name: 'projectDrawer',
  components: {
    Splide,
    SplideSlide,
  },
  props: {
    isOpen: Boolean
  },
  data() {
    return {
      works,
      isClosed: true,
    };
  },
  methods: {
    closeDrawer() {
      this.$el.classList.remove('opened')
      this.isClosed = true
    }
  },
};
</script>

<style lang="scss"></style>
