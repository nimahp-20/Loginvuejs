<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="row justify-center">
      <q-toolbar class="col">
        <q-toolbar-title> Header </q-toolbar-title>
      </q-toolbar>

      <q-tabs>
        <q-route-tab to="/Login" replace label="Login" />
        <q-route-tab to="/Create" replace label="Create" />
      </q-tabs>
     
    </q-header>

    <q-page-container class="row justify-center ">
       <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "Main",
};
</script>
