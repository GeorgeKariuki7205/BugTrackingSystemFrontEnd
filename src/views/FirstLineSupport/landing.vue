<template>
 <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <!-- <dashboard-core-view /> -->

    <dashboard-core-settings />
  </v-app>
</template>

<script>
export default {
components: {
      DashboardCoreAppBar: () => import('../../components/core/AppBar'),
      DashboardCoreDrawer: () => import('../../components/core/Drawer'),
      DashboardCoreSettings: () => import('../../components/core/Settings'),
    //   DashboardCoreView: () => import('./components/core/View'),
    },
}
</script>

<style>

</style>