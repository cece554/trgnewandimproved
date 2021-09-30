<template>
  <aside class="drawer drawer--projects">
    <span class="drawer__overlay closer"></span>
    <header class="drawer__header">
      <span class="drawer__close closer">
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
    <main class="drawer__content">
      <section class="drawer__media">
        <div class="drawer__media-container" data-current="0">
          <figure class="work-img">
            <img
              src="@/assets/img/Clients/Xtina-Starr/studio-imphepo-flyer-Sept-goodwill-Approved.png"
              alt=""
              srcset=""
            />
            <span></span>
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
        <h3>Xtina Starr</h3>
        <p>
          What you are hearing right now is a work realized with the support of
          OGR - Officine Grandi Riparazioni, in collaboration with CRIPTA747,
          curated by Elisa Troiano, Alexandro Tripodi, Renato Leotta, Marianna
          Orlotti (Turin).
        </p>
        <div class="project-scope">
          <h5 class="scope-title">scope</h5>
          <small class="scope-details">
            <ul>
              <li>Flyer Design</li>
              <li>Logo Design</li>
            </ul>
          </small>
        </div>
      </section>
    </main>
  </aside>
</template>

<script>
export default {
  name: 'drawer',
};
</script>

<style lang="scss"></style>
