import { createStore } from "vuex";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const store = createStore({
  state: {
    tours: [],
    userTours: [],
  },
  getters: {
    getTours: (state) => state.tours,
    getUserReservation: (state) => {
      // Returns the latest reservation, or null if there are no reservations
      return state.userTours.length > 0
        ? state.userTours[state.userTours.length - 1]
        : null;
    },
  },
  // Inside Vuex store
  mutations: {
    SET_TOURS(state, tours) {
      state.tours = tours;
    },
    ADD_USER_TOUR(state, userTour) {
      state.userTours.push(userTour);
    },
    REMOVE_USER_TOUR(state, tourId) {
      state.userTours = state.userTours.filter((tour) => tour.id !== tourId);
    },
  },
  actions: {
    async fetchTours({ commit }) {
      try {
        const querySnapshot = await getDocs(collection(db, "tours"));
        const tours = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched Tours:", tours); // Log fetched tours
        commit("SET_TOURS", tours);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    },
    addUserTour({ commit }, userTour) {
      commit("ADD_USER_TOUR", userTour);
    },
    removeUserTour({ commit }, tourId) {
      commit("REMOVE_USER_TOUR", tourId);
    },
  },
});

export default store;
