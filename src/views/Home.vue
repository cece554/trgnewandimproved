<template>
  <div class="home">
    <main>
      <hero msg="Welcome to Your Vue.js App" />
      <projectList />
    </main>
    <projectDrawer />
  </div>
</template>

<script>
// @ is an alias to /src
import hero from '@/components/hero.vue';
import projectList from '@/components/projectList.vue';
import projectDrawer from '@/components/projectDrawer.vue';
export default {
  name: 'Home',
  components: {
    hero,
    projectList,
    projectDrawer,
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
