<template>
  <div class="q-px-lg">
    <!-- Quick Link -->
    <div class="quick-link q-my-lg">
      <div class="q-my-none black-font text-h6 text-primaryu">
          Profile
      </div>

      <q-list padding class="text-primary">
        <q-item
          v-for="profile in profiles"
          :key="profile"
          clickable
          v-ripple
          class="q-px-sm q-py-lg">
          <q-item-section avatar>
            <q-icon :name="profile.icon" />
          </q-item-section>
          <q-item-section class="text-subtitle1 text-weight-bold"> {{ profile.name }} </q-item-section>
        </q-item>
        
      </q-list>
    </div>

    <div class="bg-primary q-py-md text-center text-white text-h6 q-mb-xl">
      Log out
    </div>
  </div>  
</template>
  
<script>
  import {ref} from 'vue';
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'StudentProfilePage',

    setup() {
      
      return{
        profiles: ref([
          {
            icon: 'person',
            name: 'Student Information'
          },
          {
            icon: 'notifications',
            name: 'Notification'
          },
          {
            icon: 'lock',
            name: 'Password'
          },
          {
            icon: 'touch_app',
            name: 'Face & Touch ID'
          },
          {
            icon: 'settings',
            name: 'Settings'
          },
          {
            icon: 'info',
            name: 'About App'
          },
          {
            icon: 'help',
            name: 'Help'
          },
        ])
      }
    }
  })
</script>
  