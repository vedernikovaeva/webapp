<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section address">
        <h3>Our Address</h3>
        <p>123 Adventure Road</p>
        <p>Mountain View, CA 94043</p>
        <p>United States</p>
      </div>

      <div class="footer-section contact">
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Tours. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style lang="scss" scoped>
// Footer SCSS
$primary-color: #2c3e50;
$secondary-color: #3498db;
$accent-color: #e74c3c;
$background-color: #ecf0f1;
$footer-bg-color: #34495e;
$font-family: "Arial", sans-serif;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer {
  background-color: $footer-bg-color;
  color: white;
  padding: 2rem 0;
  font-family: $font-family;

  .footer-content {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    margin-bottom: 2rem;

    .footer-section {
      width: 45%;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: $secondary-color;
        text-transform: uppercase;
        font-weight: bold;
      }

      p {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: #ecf0f1;

        a {
          color: #ecf0f1;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: $accent-color;
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    background-color: $primary-color;
    padding: 1rem;
    font-size: 0.9rem;
    color: #bdc3c7;

    p {
      margin: 0;
    }
  }
}

// Responsive Design for Mobile
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .footer-section {
    width: 100%;
    text-align: center;
    margin-bottom: 1.5rem;

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }
  }

  .footer-bottom {
    font-size: 1rem;
  }
}
</style>
