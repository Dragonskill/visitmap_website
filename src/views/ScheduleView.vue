<script>
  export default {
    name: 'ScheduleView',
    components: {

    },
    methods: {

    },
  }
</script>

<template>
  <div class="schedule-general">
    <div class="top-navigation">
      <div class="left-nav">
        <div class="switch-btn">
          <div class="switch-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
          </div>
          <div class="switch-date">
            <p>September 2001</p>
          </div>
          <div class="switcher-arrows">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
      <div class="right-nav">
        <div class="schedule-kanban">
          <div class="schedule-btn">
            <p>Schedule</p>
          </div>
          <div class="kanban-btn">
            <p>Kanban</p>
          </div>
        </div>
        <div class="add-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <p>Add new Appointment</p>
        </div>
      </div>
    </div>
    <div class="calendar"></div>
  </div>
</template>

<style scoped>
  svg {
    height: 20px;
    width: 20px;
  }

  .schedule-general {
    margin: 30px;
    border: 1px solid #D5D9DF;
    border-radius: 20px;
    background-color: #FFFFFF;
  }

  .top-navigation {
    display: flex;
    justify-content: space-between;
  }

  /* LEFT SIDE */

  .switch-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #D5D9DF;
    border-radius: 5px;
    padding: 10px 15px;
    gap: 10px;
    margin: 30px;
  }

  .switch-icon {
    display: flex;
    align-items: center;
  }

  .switcher-arrows {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .switch-btn .switch-date p {
    color: #1F2026;
  }

  /* RIGHT SIDE */

  .right-nav {
    display: flex;
    align-items: center;
  }

  .schedule-kanban {
    display: flex;
    align-items: center;
    background-color: #F4F4F4;
    border-radius: 5px;
    padding: 3px 3px;
  }

  .schedule-btn {
    background-color: #FFF;
    border-radius: 4px;
    padding: 8px 15px;
  }

  .schedule-btn p {
    color: #1F2026;
  }

  .kanban-btn {
    background-color: #F4F4F4;
    border-radius: 5px;
    padding: 8px 20px;
  }

  .kanban-btn p {
    color: #6A6E7A;
  }

  .add-btn {
    display: flex;
    align-items: center;
    margin: 20px;
    background-color: #1177FF;
    border-radius: 5px;
    color: #FFF;
    padding: 10px 15px;
    gap: 10px;
  }

  .add-btn p {
    color: #FFF;
  }
</style>