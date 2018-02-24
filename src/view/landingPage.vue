<template>
  <div>
    <mainComponent></mainComponent>
    <infoComponent></infoComponent>
    <eventsComponent></eventsComponent>
    <contactComponent></contactComponent>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import mainComponent from './components/mainComponent.vue';
import infoComponent from './components/infoComponent.vue';
import eventsComponent from './components/eventsComponent.vue';
import contactComponent from './components/contactComponent.vue';
import footerComponent from './components/footerComponent.vue';

export default {
  components : {
    mainComponent,
    infoComponent,
    eventsComponent,
    contactComponent,
    footerComponent
  },
}
</script>
