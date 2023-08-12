<template>
  <q-layout view="hhh LpR fFf">

    <q-header class="bg-white text-black">
      <q-toolbar class="q-px-lg">
        <q-btn
          dense
          round
          flat
          icon="menu"
          size="lg"
          @click="toggleLeftDrawer" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn
          size="lg"
          dense
          round
          flat
          icon="notifications" />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      :width="280"
      :breakpoint="700"
      class="bg-primary text-white"
      v-model="leftDrawerOpen"
    >
      <q-list padding>
        <q-item class="q-pt-lg">
          <q-item-section >
            <q-item-section class="black-font text-h5"> Menu </q-item-section>
          </q-item-section>
            <q-btn icon="close" flat round dense @click="toggleLeftDrawer()"/>
        </q-item>

        <q-item clickable v-ripple class="q-px-lg q-py-md">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> Home </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-px-lg q-py-md">
          <q-item-section avatar>
            <q-icon name="update" />
          </q-item-section>
          <q-item-section> School Updates </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-px-lg q-py-md">
          <q-item-section avatar>
            <q-icon name="feed" />
          </q-item-section>
          <q-item-section> Grades </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-px-lg q-py-md">
          <q-item-section avatar>
            <q-icon name="groups" />
          </q-item-section>
          <q-item-section> Attendance </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-px-lg q-py-md">
          <q-item-section avatar>
            <q-icon name="account_balance_wallet" />
          </q-item-section>
          <q-item-section> Payments & bookings </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-px-lg q-py-md">
          <q-item-section avatar>
            <q-icon name="library_books" />
          </q-item-section>
          <q-item-section> Online Library </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-px-lg q-py-md">
          <q-item-section avatar>
            <q-icon name="help_center" />
          </q-item-section>
          <q-item-section> Help center </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      class="bg-white q-py-lg"
    >
      <q-tabs
        class="text-grey-8"
        active-color="primary"
        indicator-color="transparent"
        >
        <q-route-tab
          to="/"
          icon="home"
          />
        <q-route-tab
          to="/courses"
          icon="book"
          />
        <q-route-tab
          to="/class-schuedule"
          icon="calendar_today"
          />
        <q-route-tab
          to="/student-profile"
          icon="person"
          />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>