<template>
  <div class="q-px-lg">
    <div class="">
      <!-- Calendar -->
      <div class="courses q-mt-lg">
        <div class="black-font text-h6">
          Calendar
        </div>
      </div>

      <div class="q-pt-lg">
        <q-btn-dropdown
          no-caps
          unelevated
          color="white"
          dropdown-icon="expand_more"
          :label="month"
          class="text-black">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick('June')">
              <q-item-section>
                <q-item-label>June</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick('July')">
              <q-item-section>
                <q-item-label>July</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick('August')">
              <q-item-section>
                <q-item-label>August</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <div class="">
        <q-scroll-area visible style="height: 100px;">
          <div class="row no-wrap">
            <div v-for="n in 5" :key="n" class="q-px-lg q-py-md q-mr-md">
              <div class="text-h5 text-bold">
                04
              </div>
              <div class="text-body2" style="font-size: 10px;">TUES</div>
            </div>
          </div>
        </q-scroll-area>
      </div>

      <!-- Today's schedule -->
      <div class="today-schedule q-mt-lg">
        <div class="q-my-none text-weight-bold text-h6">
            Today, Wednesday 04
        </div>
      </div>

      <div v-for="n in 3" :key="n" class="bg-accent text-black q-py-md q-px-lg q-my-md">
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
      
      <!-- Tomorrow's schedule -->
      <div class="today-schedule q-mt-lg">
        <div class="q-my-none text-weight-bold text-h6">
            Tomorrow, Thursay 05
        </div>
      </div>

      <div v-for="n in 3" :key="n" class="bg-accent text-black q-py-md q-px-lg q-my-md">
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
      
      <div class="today-schedule q-mt-lg">
        <div class="q-my-none text-weight-bold text-h6">
          Thursay 05
        </div>
      </div>

      <div v-for="n in 2" :key="n" class="bg-accent text-black q-py-md q-px-lg q-my-md">
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



  </div>
</template>
  
<script>
import {ref} from 'vue';

export default {
  setup () {
    let month = ref('Date')

    const onItemClick = (date) => {
      month.value = date
    }
    
    return {
      month,
      onItemClick
    }
  }
}
</script>

<style lang="sass">
  .underline
    text-decoration: underline

</style>