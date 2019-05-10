<template>
  <div>
    <h1>Student List</h1>
    <StudentCard v-for="student in students" :key="student.id" :student="student"/>
  </div>
</template>

<script>
import StudentCard from '@/components/StudentCard.vue'
import StudentService from '@/services/StudentService.js'

export default {
  components: {
    StudentCard
  },
  data() {
    return {
      students: []
    }
  },
  created() {
    StudentService.getStudents()
      .then(response => {
        {
          this.students = response.data
        }
      })
      .catch(error => {
        {
          console.log('There was an error: ' + error)
        }
      })
  }
}
</script>

<style></style>
