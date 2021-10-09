<template>
  <div class="home">
    <main>
      <hero msg="Welcome to Your Vue.js App" />
      <projectList />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import hero from '@/components/hero.vue';
import projectList from '@/components/projectList.vue';
export default {
  name: 'Home',
  components: {
    hero,
    projectList,
  },
  data() {
    return {
      drawerVisible: true,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible;
    },
  },
};
</script>
