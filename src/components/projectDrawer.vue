<template>
  <aside class="drawer drawer--projects">
    <span class="drawer__overlay closer"></span>
    <header class="drawer__header">
      <span
        class="drawer__close closer"
        :style="{
          transform: drawerVisible ? 'translate3d(100%, 0, 0)' : 'none',
        }"
        @click="drawerVisible = false"
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
    <main class="drawer__content" v-for="project in projects" :key="project.id">
      <section class="drawer__media">
        <div class="drawer__media-container" data-current="0">
          <figure class="work-img">
            <img
              src="require(`@/assets/img/Clients/${project.image}`)"
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
        <h3>{{ project.client }}</h3>
        <p>
          {{ project.work }}
        </p>
        <div class="project-scope">
          <h5 class="scope-title">scope</h5>
          <small class="scope-details">
            <ul>
              <li v-for="scope in projects.scope" :key="scope">
                {{ index }}
              </li>
            </ul>
          </small>
        </div>
      </section>
    </main>
  </aside>
</template>

<script>
export default {
  name: 'projectDrawer',

  data: function () {
    return {
      projects: [
        {
          client: 'Xtina Starr',
          scope: ['Flyer Design', 'Logo Design'],
          work: [
            {
              image: '/Xtina-Starr/AfroHouse-Memorial-Day-Party-Flyer.png',
              details:
                'for a guide and recipes on how to configure customize this project check out the vuecli do,cumentation',
            },
            {
              image: 'studio-imphepo-flyer-Aug1-Approved.jpg',
              details:
                'for a guide and recipes on how to configure customize this project check out the vuecli do,cumentation',
            },
            {
              image: '',
              details:
                'for a guide and recipes on how to configure customize this project check out the vuecli do,cumentation',
            },
          ],
        },
        {
          client: 'Good Green',
          scope: ['Branding'],
          work: [
            {
              image: 'AfroHouse-Memorial-Day-Party-Flyer.png',
              details:
                'for a guide and recipes on how to configure customize this project check out the vuecli do,cumentation',
            },
            {
              image: 'studio-imphepo-flyer-Aug1-Approved.jpg',
              details:
                'for a guide and recipes on how to configure customize this project check out the vuecli do,cumentation',
            },
            {
              image: '',
              details:
                'for a guide and recipes on how to configure customize this project check out the vuecli do,cumentation',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
