import Vue from 'vue'
import Router from 'vue-router'
import StudentList from './views/StudentList.vue'
import StudentShow from './views/StudentShow.vue'
import StudentCreate from './views/StudentCreate.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'student-list',
      component: StudentList
    },
    {
      path: '/student/:id',
      name: 'student-show',
      component: StudentShow,
      props: true
    },
    {
      path: '/student/create',
      name: 'student-create',
      component: StudentCreate
    }
  ]
})
