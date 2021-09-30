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
              src="/assets/img/Client/Xtina Starr/Studio Imphepho/studio-imphepo-flyer-Sept-goodwill-Approved.png"
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

<script></script>

<style lang="scss">
.drawer {
  width: calc(100vw + 1px);
  height: 100vh;
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 0;
  background: #fff;
  border-left: 1px solid #2a2b2a;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  -webkit-transition: -webkit-transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: -webkit-transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1),
    -webkit-transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.drawer__header {
  padding: 1em;
}
.controls {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 2em 0;
}
.drawer__close {
  cursor: pointer;
}
.drawer__content {
  padding: 0 1.2rem;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
}
.drawer .work-img {
  max-width: 300px;
}
.controls__left,
.controls__right {
  border: 0;
  background: none;
  cursor: pointer;
  outline: 0;
  padding: 0;
}
.drawer__project-details h2 {
  text-transform: capitalize;
}
.drawer__project-details p {
  margin-top: 0.5em;
}
.project-scope {
  font-size: 12px;
  margin-top: 3em;
}
.scope-title {
  text-transform: uppercase;
  font-weight: bold;
}
@media only screen and (min-width: 600px) {
  .drawer {
    width: calc(50vw + 1px);
  }
}
@media only screen and (min-width: 960px) {
  .drawer {
    width: calc(40vw + 1px);
  }
}
</style>
