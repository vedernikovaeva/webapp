<template>
  <nav class="navbar">
    <div class="logo">
      <img
        src="https://mir-s3-cdn-cf.behance.net/projects/404/9be656199017475.Y3JvcCwxNjE2LDEyNjQsMCww.jpg"
      />
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>

      <li>
        <router-link to="/tours">Tours</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/user-tour">User Tour</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/logo.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
// Navbar SCSS
$primary-color: #19232c;
$secondary-color: #3498db;
$highlight-color: #3a8f9c;
$background-color: #ecf0f1;
$font-family: "Arial", sans-serif;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: $primary-color;
  position: sticky;
  top: 0;
  z-index: 1000;

  .logo {
    img {
      height: 40px;
      width: auto;
    }
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;

    li {
      display: inline-block;

      a {
        color: white;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 500;
        transition: color 0.3s ease, transform 0.3s ease;

        &:hover {
          color: $highlight-color;
          transform: translateY(-2px);
        }
      }
    }
  }
}

// Responsive Design
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    margin-top: 1rem;

    li {
      width: 100%;
      text-align: center;

      a {
        display: block;
        padding: 0.8rem;
        width: 100%;
        font-size: 1.2rem;
      }
    }
  }

  .navbar.active .nav-links {
    display: flex;
  }
}

// Mobile Menu Toggle (Hamburger Icon)
.navbar .menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 30px;
    height: 4px;
    background-color: white;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  &.active span:nth-child(1) {
    transform: rotate(45deg);
    position: relative;
    top: 10px;
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:nth-child(3) {
    transform: rotate(-45deg);
    position: relative;
    top: -10px;
  }
}

@media (max-width: 768px) {
  .navbar .menu-toggle {
    display: flex;
  }
}
</style>
