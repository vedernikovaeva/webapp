<template>
  <div class="tour-card" v-if="tour">
    <h2 class="tour-name">{{ tour.name }}</h2>
    <p class="tour-location">📍 {{ tour.location }}</p>
    <p class="tour-description">{{ tour.description }}</p>
    <p class="tour-cost">💵 ${{ tour.cost }}</p>
    <p class="tour-people">👤 Suitable for {{ tour.people }} people</p>

    <div class="slider-container">
      <div class="slider-wrapper" :style="sliderStyle">
        <div
          v-for="(image, index) in tour.images"
          :key="index"
          class="slider-image"
        >
          <img :src="image" alt="Tour Image" />
        </div>
      </div>

      <button class="slider-arrow left-arrow" @click="prevImage">❮</button>
      <button class="slider-arrow right-arrow" @click="nextImage">❯</button>
    </div>

    <button class="reserve-button" @click="openReserveDialog">Reserve</button>

    <form
      v-if="showDialog"
      @close="closeDialog"
      class="dialog"
      @submit.prevent="makeReservation"
    >
      <h3>Reserve Tour: {{ tour.name }}</h3>
      <label>
        Your Name:
        <input v-model="reservationData.name" required />
      </label>
      <label>
        Date:
        <input type="date" v-model="reservationData.date" required />
      </label>
      <button type="submit">Confirm</button>
      <button type="button" @click="closeDialog">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TourCard",
  props: {
    tour: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDialog: false,
      reservationData: {
        name: "",
        date: "",
      },
      currentIndex: 0,
    };
  },
  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
      };
    },
  },
  methods: {
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.tour.images.length - 1;
      }
      console.log("Previous image, current index:", this.currentIndex);
    },
    nextImage() {
      if (this.currentIndex < this.tour.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      console.log("Next image, current index:", this.currentIndex);
    },

    openReserveDialog() {
      this.showDialog = true;
      console.log("Reserve dialog opened for tour:", this.tour.name);
    },
    closeDialog() {
      this.showDialog = false;
      console.log("Reserve dialog closed");
    },
    makeReservation() {
      const reservationDetails = {
        ...this.reservationData,
        tour: this.tour,
      };

      console.log("Submitting reservation:", reservationDetails);

      this.$store.dispatch("addUserTour", reservationDetails);
      console.log("Dispatched addUserTour with:", reservationDetails);

      this.$emit("reserve", reservationDetails);
      this.showDialog = false;
    },
  },
};
</script>

<style scoped lang="scss">
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: rgba(
    255,
    255,
    255,
    0.95
  ); // Slight transparency for a modern look
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px; // Spacing between form elements
  }

  label {
    font-size: 1.2em;
    color: #2c3e50;
    font-weight: 600;
    margin-bottom: 5px;
  }

  input {
    padding: 10px 10px;
    font-size: 1.1em;
    color: #333;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 10px;
    transition: all 0.3s ease;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      color: #bbb;
    }

    &:focus {
      border-color: #ff7f50;
      box-shadow: 0 0 5px rgba(255, 127, 80, 0.5);
      background-color: #fff;
    }
  }

  button {
    padding: 5px 10px;
    background-color: #ff7f50;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.2em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 90%;
    box-sizing: border-box;
    margin: 10px;

    &:hover {
      background-color: #ff6347;
      box-shadow: 0 4px 15px rgba(255, 99, 71, 0.4);
    }

    &.cancel {
      background-color: #f1f1f1;
      color: #333;
      box-shadow: none;

      &:hover {
        background-color: #ddd;
      }
    }
  }

  .cancel {
    margin-top: 10px;
  }

  .reserve-header {
    font-size: 1.6em;
    color: #333;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }

  .form-actions {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }

  // Button for submitting form
  .submit-btn {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .dialog {
    width: 90%;
    padding: 20px;
    max-width: 500px;
  }

  .reserve-header {
    font-size: 1.4em;
  }

  input {
    font-size: 1em;
  }

  button {
    font-size: 1.1em;
  }
}

.tour-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 450px;
  max-height: auto;
  margin: 20px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }

  .tour-name {
    font-size: 1.8em;
    font-weight: bold;
    color: #333;
    margin: 10px 0;
  }

  .tour-location {
    font-size: 1.1em;
    color: #888;
    margin-bottom: 10px;
  }

  .tour-description {
    font-size: 1em;
    color: #555;
    margin-bottom: 10px;
    line-height: 1.5;
  }

  .tour-cost,
  .tour-people {
    font-size: 1.1em;
    color: #333;
    margin-bottom: 10px;
  }

  .reserve-button {
    position: relative;
    background-color: #ff7f50;
    justify-self: center;
    align-self: center;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-size: 1.1em;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff6347;
    }
  }

  .slider-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
    margin: 20px 0;

    .slider-wrapper {
      display: flex;
      transition: transform 0.3s ease-in-out;
    }

    .slider-image {
      min-width: 100%;
      transition: opacity 0.5s ease-in-out;

      img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 12px;
      }
    }

    .slider-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 15px;
      cursor: pointer;
      font-size: 2em;
      z-index: 10;

      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }

      &.left-arrow {
        left: 10px;
      }

      &.right-arrow {
        right: 10px;
      }
    }
  }

  /* Dialog Box Styles */
  dialog {
    border: none;
    border-radius: 8px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      margin-bottom: 15px;
      font-size: 1.1em;
    }

    input {
      padding: 10px;
      margin-top: 5px;
      font-size: 1em;
      border: 1px solid #ddd;
      border-radius: 8px;
      width: 100%;
    }

    button {
      margin-top: 15px;
      padding: 10px 20px;
      background-color: #ff7f50;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.1em;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #ff6347;
      }

      &.cancel {
        background-color: #f1f1f1;
        color: #333;
      }
    }
  }
}
</style>
