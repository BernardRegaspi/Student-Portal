<template>
    <div class="q-px-lg">
      <div class="">

      <!-- Student Information -->
      <div class="q-mt-sm">
        <div class="black-font text-h6 text-primary">
          Student information
        </div>  
        <q-img
        class="q-mt-md"
        src="Profile.jpg"
        :ratio="16/10"
        />
      </div>  
      
      <div class="q-my-lg">
        <div class="text-h6 ">
          Student information
        </div>
    
        <div class="row q-mt-lg q-px-md">
          <div class="col-shrink">
            <div class="text-body q-py-lg">Full name</div>
            <div class="text-body q-py-lg">Major</div>
            <div class="text-body q-py-lg">ID no</div>
            <div class="text-body q-py-lg">Faculty</div>
            <div class="text-body q-py-lg">Year</div>
          </div>
          <div class="col">
            <div class="text-body q-pl-md q-py-lg text-weight-bold">Jane Cooper</div>
            <div class="text-body q-pl-md q-py-lg text-weight-bold">Micro-biology</div>
            <div class="text-body q-pl-md q-py-lg text-weight-bold">23BBT54</div>
            <div class="text-body q-pl-md q-py-lg text-weight-bold">Faculty of Science</div>
            <div class="text-body q-pl-md q-py-lg text-weight-bold">Sophomore</div>
          </div>
        </div>

        <div class="row q-mt-lg">
            <div class="col-shrink q-my-none text-h6">
              Additional information
            </div>
            <div class="col text-right">
              <q-btn
              class="underline text-weight-bold text-subtitle1"
              color="primary"
              align="right"
              label="edit"
              flat
              dense
              no-caps
              />
            </div>

            <div class="row q-mt-lg q-px-md">
              <div class="col-shrink">
                <div class="text-body q-py-lg">Gender</div>
                <div class="text-body q-py-lg">Address</div>
                <div class="text-body q-py-lg">Number</div>
                <div class="text-body q-py-lg">Email</div>
              </div>
              <div class="col">
                <div class="text-body q-pl-md q-py-lg text-weight-bold">Female</div>
                <div class="text-body q-pl-md q-py-md text-weight-bold">4517 Washington Eve. Manchester, Kentucky 39495</div>
                <div class="text-body q-pl-md q-py-lg text-weight-bold">09951311231</div>
                <div class="text-body q-pl-md q-py-lg text-weight-bold">jane.cooper@gmail.com</div>
              </div>
            </div>
          </div>
      </div>  
    </div>  
    </div>
  </template>
    
  <script>
  import { defineComponent } from 'vue'
  import { ref } from 'vue'
  
  export default defineComponent({
    name: 'CoursesPage',
  
    setup () {
      const progress = ref(0.68)
      const progress_percent = (progress.value * 100) + '%'
  
      return {
        progress,
        progress_percent,
        links: ref([
            {
              icon: 'edit_note',
              name: 'Course material'
            },
            {
              icon: 'book',
              name: 'Online textbooks'
            },
            {
              icon: 'book',
              name: 'Downlaod class schedule'
            },
            {
              icon: 'book',
              name: 'Course Registration'
            }
          ])
      }
    }
    
  })
  </script>
  
  <style lang="sass">
    .underline
      text-decoration: underline
  
  </style>