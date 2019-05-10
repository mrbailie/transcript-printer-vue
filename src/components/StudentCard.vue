<template>
  <router-link class="event-link" :to="{ name: 'student-show', params: { id: '1' } }">
    <div class="event-card -shadow">
      <span class="eyebrow">{{ student.id }}</span>
      <h4 class="title">{{ student.name }}</h4>
      <span>{{ student.transcripts.length }} quarters</span>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      student: {
        id: 111111111,
        name: 'student name',
        transcripts: [
          {
            Quarter: 'B894',
            Courses: [
              {
                CourseTitle: 'MATH&146',
                Grade: 4.0
              },
              {
                CourseTitle: 'ENGL&101',
                Grade: 4.0
              },
              {
                CourseTitle: 'BIO 160',
                Grade: 4.0
              }
            ]
          },
          {
            Quarter: 'B893',
            Courses: [
              {
                CourseTitle: 'MATH 094',
                Grade: 4.0
              }
            ]
          },
          {
            Quarter: 'B892',
            Courses: [
              {
                CourseTitle: 'MATH 096',
                Grade: 4.0
              },
              {
                CourseTitle: 'ENGL 099',
                Grade: 4.0
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
 
 <style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>