const routes = [
  {
    path: "/",
    component: () => import("layouts/Main.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/Login", component: () => import("pages/Login.vue") },
      { path: "/Create", component: () => import("pages/Create.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
