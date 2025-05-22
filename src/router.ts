import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue"; // Assuming you'll have a HomeView component
import PrivacyView from "./views/PrivacyView.vue"; // Import PricingView
import TermsView from "./views/TermsView.vue"; // Import TermsView

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/privacy", // Define path for PricingView
    name: "Privacy",
    component: PrivacyView,
  },
  {
    path: "/terms", // Define path for TermsView
    name: "Terms",
    component: TermsView,
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
