<template>
  <div>
    <div class="projects">
      <h4>Selected Works</h4>
      <button class="toggle"><i class="las la-bars"></i> Show Menu</button>
      <ul class="project-list">
        <li class="project-item">
          <a class="pj" @click="drawerVisible = true">
            <p class="client">Xtina Starr</p>
            <span class="pj-link"
              ><p class="view-pj">view projects</p>
              &nbsp;↗
            </span>
          </a>
        </li>
        <li class="project-item">
          <a class="pj" href="#">
            <p class="client">The Butter Fairy</p>
            <span class="pj-link"
              ><p class="view-pj">view projects</p>
              &nbsp;↗
            </span>
          </a>
        </li>
        <li class="project-item">
          <a class="pj" href="#">
            <p class="client">Good Green</p>
            <span class="pj-link"
              ><p class="view-pj">view projects</p>
              &nbsp;↗
            </span>
          </a>
        </li>
        <li class="project-item">
          <a class="pj" href="#">
            <p class="client">Big Thought</p>
            <span class="pj-link"
              ><p class="view-pj">view projects</p>
              &nbsp;↗
            </span>
          </a>
        </li>
        <li class="project-item">
          <a class="pj" href="#">
            <p class="client">Another</p>
            <span class="pj-link"
              ><p class="view-pj">view projects</p>
              &nbsp;↗
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectList",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
