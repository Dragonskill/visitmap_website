<script>
import draggable from 'vuedraggable'

export default {
  name: 'ScheduleView',
  components: {
    draggable,
  },
  data: () => ({
    drag: false,
    weekDays: [],
  }),
  created() {
    this.weekDays = this.getWeekDays()
  },
  methods: {
    getWeekDays() {
      const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const date = new Date()
      const today = date.getDay()
      const week = []

      for (let i = 0; i < 7; i++) {
        const day = (today + i) % 7
        const dayDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
        week.push({name: `${weekDays[day]} (${dayDate.getDate()})`, items: this.getTasksForDay(weekDays[day])})
      }

      return week
    },
    getTasksForDay() {
      // Replace this with your actual logic for fetching tasks for a specific day
      return [
        {id: 1, name: 'Task 1'},
        {id: 2, name: 'Task 2'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
        {id: 3, name: 'Task 3'},
      ]
    },
  },
}
</script>

<template>
  <h1>Schedule</h1>
  <div class="kanban-board">
    <div class="kanban-column" v-for="(day, index) in weekDays" :key="index">
      <h2>{{ day.name }}</h2>
      <draggable
          v-model="day.items"
          group="people"
          @start="drag=true"
          @end="drag=false"
          item-key="id"
          animation="200"
          style="height: 100%"
        :options="{ scroll: true, scrollSensitivity: 100, scrollSpeed: 10 }"
      >
        <template #item="{element}">
          <div>{{ element.name }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style scoped>
.kanban-board {
  display: flex;
  justify-content: space-between;
}

.kanban-column {
  width: 14%;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
