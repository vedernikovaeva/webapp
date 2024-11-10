<template>
  <div>
    <TourList :tours="tours" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TourList from "@/components/TourList.vue";

export default {
  components: {
    TourList,
  },
  computed: {
    ...mapGetters(["getTours"]),
    tours() {
      return this.getTours;
    },
  },
  created() {
    this.$store.dispatch("fetchTours");
  },
};
</script>
