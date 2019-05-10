<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">{{ student.id }}</span>
      <h1 class="title">{{ student.name }}</h1>
    </div>
    <h2>
      Transcripts
      <span
        class="badge -fill-gradient"
      >{{ student.transcripts ? student.transcripts.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(transcript, index) in student.transcripts" :key="index" class="list-item">
        <b>{{ transcript.CourseTitle }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import StudentService from '@/services/StudentService.js'

export default {
  props: ['id'],
  data() {
    return {
      student: {}
    }
  },
  created() {
    StudentService.getStudent(this.id)
      .then(response => {
        this.student = response.data
      })
      .catch(error => {
        console.log('There was an error: ', error.response)
      })
  }
}
</script>

 <style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
