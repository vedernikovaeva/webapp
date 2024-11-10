<template>
  <div v-if="reservation" class="user-page">
    <h2>Your Reservation</h2>
    <h3>{{ reservation.tour.name }}</h3>
    <p><strong>Location:</strong> {{ reservation.tour.location }}</p>
    <p><strong>Description:</strong> {{ reservation.tour.description }}</p>
    <p><strong>Cost:</strong> ${{ reservation.tour.cost }}</p>
    <p>
      <strong>People:</strong> Suitable for {{ reservation.tour.people }} people
    </p>

    <h4>Your Details</h4>
    <p><strong>Name:</strong> {{ reservation.name }}</p>
    <p><strong>Date:</strong> {{ reservation.date }}</p>
  </div>

  <div v-else>
    <p>No reservation made yet.</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserPageView",
  computed: {
    ...mapGetters(["getUserReservation"]),
    reservation() {
      const reservationData = this.getUserReservation;
      console.log("Fetched reservation data:", reservationData);
      return reservationData;
    },
  },
};
</script>

<style scoped>
.user-page {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2,
h3,
h4 {
  color: #333;
}

p {
  color: #555;
  font-size: 1.1em;
}
</style>
