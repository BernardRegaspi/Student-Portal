<template>
  <div class="q-px-lg">
    <div class="student-info">
      <div class="q-mb-none q-mt-lg text-caption1">Good morning,</div>
      <h4 class="black-font text-primary q-mt-sm q-mb-lg">Jane</h4>
      <div class="student-data">
        <div class="row q-mb-md">
          <div class="col q-my-none text-weight-bold text-h6">
            Student data 
          </div>
          <div class="col text-right">
            <q-btn
            to="student-information"
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
      </div>

      <div class="bg-primary text-white q-py-md q-px-sm">
        <div class="text-subtitle1 text-weight-thin">ID No. <span class="q-pl-lg">23BBT54</span></div>
      </div>
      <div class="bg-primary text-white q-py-md q-px-sm q-mt-md">
        <div class="text-subtitle1 text-weight-thin">Major. <span class="q-pl-lg">Mircro-biology</span></div>
      </div>

      <div class="text-white q-mt-xl">
        <q-scroll-area visible style="height: 230px;">
          <div class="row no-wrap">
            <div v-for="n in 5" :key="n" class="q-pr-md">
              <q-card class="my-card square flat" >
                <q-card-section class="bg-secondary horizontal" style="width: 312px;">
                  <div>
                    <h4 class="q-my-none">22 - 25</h4>
                    <div class="q-my-sm text-h6">March</div>
                    <div class="q-my-sm text-body1">Student week</div>
                    <p class="q-my-sm text-body2" style="font-size: 10px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius nostrum veritatis rem, ipsum sequi alias.</p>
                    <div class="card-clickable row">
                      <q-btn
                      class="col underline text-subtitle2 text-weight-light q-pa-none"
                      color="white"
                      label="Volunteers needed"
                      flat
                      dense
                      no-caps
                      />

                      <q-btn
                      class="col q-pa-none"
                      color="white"
                      icon="arrow_forward"
                      align="right"
                      flat
                      dense
                      no-caps
                      />
                    </div>

                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-scroll-area>
      </div>

      <!-- Courses -->
      <div class="courses q-mt-lg">
        <div class="row">
          <div class="col q-my-none text-weight-bold text-h6">
            Courses
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

        <div v-for="n in 5" :key="n">
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

      <!-- Today's schedule -->
      <div class="today-schedule q-mt-lg">
        <div class="row">
          <div class="col-shrink q-my-none text-weight-bold text-h6">
            Today's Schedule
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

        <div class="bg-accent text-black q-py-md q-px-lg q-my-md">
          <div class="row text-subtitle1 text-weight-thin">
            <div class="col">
              <div class="text-body1 text-weight-bold q-mb-md">Physics 211</div>
              <div class="text-caption">Prof. Andrew Grey</div>
              <div class="text-caption">11:25 - 1:20 pm</div>
            </div>
            <div class="col text-right">
              <div class="text-weight-medium">Lecture - G7</div>
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
  name: 'HomePage',

  setup () {
    const progress = ref(0.68)
    const progress_percent = (progress.value * 100) + '%'

    return {
      progress,
      progress_percent,
      links: ref([
          {
            icon: 'edit_note',
            name: 'Course Registration'
          },
          {
            icon: 'king_bed',
            name: 'Hostel Allocation'
          },
          {
            icon: 'payment',
            name: 'Payments and Dues'
          },
          {
            icon: 'book',
            name: 'Online textbooks'
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