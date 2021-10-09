<template>
  <div>
    <div class="projects">
      <h4>Selected Works</h4>
      <button class="toggle" @click="toggleDrawer()">
        <i class="las la-bars"></i> Show Menu
      </button>
      <ul class="project-list">
        <li class="project-item">
          <a class="pj" @click.prevent="toggleProjectDrawer">
            <p class="client">Xtina Starr</p>
            <span class="pj-link"
              ><p class="view-pj">view projects</p>
              &nbsp;↗
            </span>
          </a>
        </li>
        <li class="project-item">
          <a class="pj" @click.prevent="toggleProjectDrawer">
            <p class="client">The Butter Fairy</p>
            <span class="pj-link"
              ><p class="view-pj">view projects</p>
              &nbsp;↗
            </span>
          </a>
        </li>
        <li class="project-item">
          <a class="pj" @click.prevent="toggleProjectDrawer">
            <p class="client">Good Green</p>
            <span class="pj-link"
              ><p class="view-pj">view projects</p>
              &nbsp;↗
            </span>
          </a>
        </li>
        <li class="project-item">
          <a class="pj" @click.prevent="toggleProjectDrawer">
            <p class="client">Big Thought</p>
            <span class="pj-link"
              ><p class="view-pj">view projects</p>
              &nbsp;↗
            </span>
          </a>
        </li>
        <li class="project-item">
          <a class="pj" @click.prevent="toggleProjectDrawer">
            <p class="client">Another</p>
            <span class="pj-link"
              ><p class="view-pj">view projects</p>
              &nbsp;↗
            </span>
          </a>
        </li>
      </ul>
    </div>
    <projectDrawer v-bind:class="{ opened: showProjectDrawer}" ref="drawer"/>
  </div>
</template>

<script>
import projectDrawer from '@/components/projectDrawer.vue';
export default {
  name: 'projectList',
  components: {
    projectDrawer,
  },
  data() {
    return {
      showProjectDrawer: false,
    };
  },
  methods: {
    toggleProjectDrawer() {
      this.showProjectDrawer = true
      this.$refs.drawer.$el.classList.add('opened')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
