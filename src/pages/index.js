import { createRouter, createWebHashHistory } from "vue-router";

const BrowsePage = () => import("./BrowsePage/index.vue");

const Trivia = () => import("./BrowsePage/trivia.vue");
// const TriviaDetail = () => import("src/generatedDetailPages/Page2A.vue")

const SearchPage = () => import("./SearchPage/index.vue");

const routes = [
  {
    path: "/",
    component: BrowsePage,
    name: "Home",
    props: { isHeader: true },
  },

  {
    path: "/events",
    component: BrowsePage,
    name: "Events",
    props: { isHeader: true },
  },

  {
    path: "/trivia",
    component: Trivia,
    name: "Trivia",
    props: { isHeader: true },
  },

  {
    path: "/trivia/:id",
    component: Trivia,
    props: { isHeader: false }, // DOES NOT APPEAR ON HEADER
  },

  {
    path: "/browse/community",
    component: BrowsePage,
    name: "Community",
  },
  {
    path: "/search",
    component: SearchPage,
    name: "Search",
    props: { isHeader: false },
  },

  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, __, savedPosition) {
    if (to.query.scrollTop) {
      return { left: 0, top: to.query.scrollTop };
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

export default router;
