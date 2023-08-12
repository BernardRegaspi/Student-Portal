
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue') },
      { path: 'student-information', component: () => import('src/pages/Homepage/StudentInformation.vue') },
      { path: '/courses', component: () => import('src/pages/Courses.vue') },
      { path: '/class-schuedule', component: () => import('src/pages/ClassSchuedule.vue') },
      { path: '/student-profile', component: () => import('src/pages/StudentProfile.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
