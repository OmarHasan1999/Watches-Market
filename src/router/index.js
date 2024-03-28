import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  scrollBehavior (to) {
    // ...
    if(to.name === "Details"){
       return {top:40}
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Services',
      name: 'Services',
      component: () => import('../views/ServicesView.vue')
    },
    
    {
      path: "/Subscribe",
      name: "Subscribe",
      component: () =>
        import("../views/SubscribeView.vue")
    },
    {
      
        path: "/Contact",
        name: "Contact",
        component: () =>
          import("../views/ContactView.vue")
      
    },
    {
      
      path: "/Details/:img/:brand/:model/:price/:modelNumber/:SKU/:imgGroup/",
      name: "Details",
      component: () =>
        import("../views/DetailsView.vue")
    
  },
  {
      
    path: "/About",
    name: "About",
    component: () =>
      import("../views/AboutView.vue")
  
},
{
      
  path: "/:pathMatch(.*)*",
  name: "PageNotFound",
  component: () =>
    import("../views/NotFound.vue")

}
  ]
});

 router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  
  document.title = to.name;

  next()
})

export default router
