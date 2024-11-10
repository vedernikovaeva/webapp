<template>
  <div class="tour-list">
    <h1 class="title">Available Tours</h1>
    <div v-if="tours.length" class="tours-grid">
      <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" />
    </div>
    <p v-else class="no-tours">No tours available at the moment.</p>
  </div>
</template>

<script>
import TourCard from "./TourCard.vue";

export default {
  name: "TourList",
  components: {
    TourCard,
  },
  data() {
    return {
      reservationData: null,
    };
  },
  props: {
    tours: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    handleReservation(reservation) {
      this.reservationData = reservation;
    },
  },
  created() {
    this.$store.dispatch("fetchTours");
  },
};
</script>

<style scoped lang="scss">
.tour-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 12px;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.no-tours {
  font-size: 1.5rem;
  text-align: center;
  color: #777;
  margin-top: 50px;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .no-tours {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }

  .no-tours {
    font-size: 1rem;
  }
}
</style>
