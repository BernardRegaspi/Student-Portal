<template>
  <div class="q-px-lg">
    <div class="">
      <!-- Courses -->
      <div class="courses q-mt-lg">
        <div class="black-font text-h6">
          Courses
        </div>

        <div v-for="n in 5" :key="n" class="q-mt-md">
          <div class="bg-primary text-white q-py-md q-px-sm q-my-md">
            <div class="row text-subtitle1 text-weight-thin">
              <div class="col">
                <div class="text-body1 text-weight-medium">Physics 211</div>
                <div class="text-caption text-weight-thin">Prof. Andrew Grey</div>
              </div>
              <div class="col text-right">
                <q-icon name="science" size="md"/>
              </div>
              
            </div>
            <q-linear-progress :value="progress" class="q-mt-md" color="white" rounded track-color="grey"/>
            <div class="row">
              <div class="col text-caption text-weight-thin q-mt-sm">Course outline progress</div>
              <div class="col text-caption text-weight-thin text-right">{{ progress_percent }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lecturers -->
      <div class="today-schedule q-mt-lg">
        <div class="row">
          <div class="col-shrink q-my-none text-weight-bold text-h6">
            Lecturers
          </div>
          <div class="col text-right">
            <q-btn
            class="underline text-weight-bold text-subtitle1"
            color="primary"
            align="right"
            label="see more"
            flat
            dense
            no-caps
            />
          </div>
        </div>

        <div v-for="n in 3" :key="n" class="row q-col-gutter-md text-grey-4">
          <div class="col q-py-md">
            <div class="bg-primary q-pa-sm">
              <div class="text-body1 text-weight-medium">Physics 211</div>
              <div class="text-body2 text-caption">Prof. Andrew Grey</div>
            </div>
          </div>
          <div class="col">
            <div class="bg-primary q-pa-sm">
              <div class="text-body1 text-weight-medium">Physics 211</div>
              <div class="text-body2 text-caption">Prof. Andrew Grey</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Link -->
      <div class="quick-link q-my-lg">
        <div class="row">
          <div class="col-shrink q-my-none text-weight-bold text-h6">
            Quick Link
          </div>
          <div class="col text-right">
            <q-btn
            class="underline text-weight-bold text-subtitle1"
            color="primary"
            align="right"
            label="see more"
            flat
            dense
            no-caps
            />
          </div>
        </div>

        <q-list padding class="text-primary">
          <q-item
            v-for="link in links"
            :key="link"
            clickable
            v-ripple
            class="q-px-sm q-py-lg">
            <q-item-section class="text-subtitle1 text-weight-bold"> {{ link.name }} </q-item-section>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
          </q-item>
          
        </q-list>
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