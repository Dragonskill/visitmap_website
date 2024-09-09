<script>
  import {
    useAuthStore
  } from "@/stores/auth"
  import ScheduleSidebar from "../views/ScheduleSidebar.vue";

  export default {
    name: 'DefaultLayout',
    components: {
      ScheduleSidebar,
    },
    computed: {
      sidebarLayout() {
        return this.$route.meta.sidebarLayout
      }
    },
    data: () => ({
      auth: useAuthStore(),
      loading: false,
      loaded: false,
      toggle: null,
    }),
    methods: {
      logout() {
        this.auth.logout()
      },
    },
  }
</script>

<template>
  <v-app>
    <v-app-bar app flat>
      <div class="nav-general">
        <div class="left-content">
          <div class="logo">
            <p>Visit<span class="blue">Map</span></p>
          </div>
          <div class="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text" placeholder="Search appointment">
          </div>
        </div>
        <div class="right-content">
          <div class="gap-icon">
            <div class="notification-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </div>
            <div class="switch-datetype">
              <p>Month</p>
              <div class="expand-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
          <div class="user-section">
            <div class="user-logo">

            </div>
            <div class="user-text-part">
              <div class="user-name">
                Abdugaffor Odilov
              </div>
              <div class="user-role">
                Administrator
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-app-bar>


    <v-navigation-drawer app>
      <div class="d-flex" >
        <v-list lines="two" class="sidebar_list d-flex flex-column justify-space-between" style="height: calc(100vh - 64px)">
          <div>

            <v-list-item>
              <router-link :to=" {name: 'home' } ">
                <v-btn class="sidebar_buttons" variant="tonal">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                </v-btn>
              </router-link>
            </v-list-item>

            <v-list-item>
              <router-link :to="{ name: 'tasks' }">
                <v-btn class="sidebar_buttons" variant="tonal">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                  </svg>
                </v-btn>
              </router-link>
            </v-list-item>

            <v-list-item>
                <router-link :to="{ name: 'patients' }">
                  <v-btn class="sidebar_buttons" variant="tonal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </v-btn>
                </router-link>
            </v-list-item>

            <v-list-item>
              <router-link :to="{ name: 'schedule' }">
                <v-btn class="sidebar_buttons" variant="tonal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                </v-btn>
              </router-link>
            </v-list-item>


            <v-list-item>
              <router-link :to="{ name: 'organizations' }">
                <v-btn class="sidebar_buttons" variant="tonal">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </v-btn>
              </router-link>
            </v-list-item>
          </div>

          <div>
            <v-list-item>
              <router-link :to="{ name: 'faq' }">
                <v-btn class="sidebar_buttons" variant="tonal">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </v-btn>
              </router-link>
            </v-list-item>

            <v-list-item >
              <router-link :to="{ name: 'settings' }" class="">
                <v-btn class="sidebar_buttons" variant="tonal">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </v-btn>
              </router-link>
            </v-list-item>

          </div>
        </v-list>

        <component :is="sidebarLayout || 'div'"></component>

      </div>
    </v-navigation-drawer>

    <!-- main content -->
    <v-main style="margin-left: 100px">
      <router-view/>
    </v-main>
  </v-app>
</template>

<style scoped>
  .sidebar_buttons {
    color:transparent;
    width: 50px;
    height: auto;
    text-align:right;
  }

  .sidebar_buttons svg {
    color: #000;
    width: 24px;
  }

  .search_feild{
    border-color: aqua;

  }

  .blue {
    color: #1177FF;
  }

  svg {
    width: 25px;
    height: 25px;
  }

  .pituh {
    background-color: #000;
  }

  .nav-general {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .right-content,
  .left-content,
  .search-bar,
  .notification-icon {
    display: flex;
    align-items: center;
  }

  .left-content {
    gap: 100px;
  }

  .right-content {
    gap: 40px;
  }

  .logo {
    font-family: Inter-Bold;
    margin-left: 80px;
  }

  .logo p {
    font-size: 25px;
    color: #1F2026;
  }

  .search-bar {
    gap: 20px;
  }

  ::placeholder {
    font-size: 15px;
    font-family: Inter;
  }

  .switch-datetype {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #D5D9DF;
    border-radius: 5px;
    padding: 5px 15px;
    gap: 15px;
  }

  .gap-icon {
    display: flex;
    gap: 30px;
  }

  .expand-btn {
    display: flex;
    align-items: center;
  }

  .user-logo {
    height: 40px;
    width: 40px;
    border-radius: 50px;
    background-color: #1177FF;
  }

  .user-section {
    margin-right: 30px;
    line-height: normal;
    gap: 10px;
    display: flex;
    align-items: center;
  }

  .user-name {
    font-size: 18px;
  }

  .user-role {
    font-size: 15px;
    font-family: Inter;
    color: #545966;
  }
</style>