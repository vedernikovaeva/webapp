<template>
  <div class="about">
    <h1>About Lavish Saint</h1>
    <p>
      Welcome to <strong>Lavish Saint</strong> — your gateway to unforgettable
      experiences, curated adventures, and seamless journeys. We specialize in
      crafting unique travel experiences that go beyond the typical vacation.
      Our mission is simple: to immerse you in the beauty, culture, and luxury
      that each destination has to offer.
    </p>

    <h2>Our Mission</h2>
    <p>
      At Lavish Saint, we believe travel is more than just visiting new places;
      it’s about creating lasting memories and meaningful connections. Our goal
      is to provide travelers with exceptional service, personalized
      itineraries, and experiences that leave a lasting impact. Whether you’re
      looking for a luxury retreat, a cultural immersion, or an
      off-the-beaten-path adventure, we’re here to make it happen.
    </p>

    <h2>Why Choose Us?</h2>
    <ul>
      <li>
        <strong>Customized Experiences:</strong> Each journey is crafted with
        attention to detail to match your travel desires and interests.
      </li>
      <li>
        <strong>Luxury and Comfort:</strong> We provide top-tier accommodations
        and services, ensuring a comfortable and memorable experience.
      </li>
      <li>
        <strong>Expert Guidance:</strong> Our team of travel experts knows the
        ins and outs of each destination and curates every trip with insider
        knowledge.
      </li>
      <li>
        <strong>Local Connections:</strong> We have strong partnerships with
        local guides, artisans, and service providers to offer authentic
        experiences.
      </li>
    </ul>

    <h2>Our Story</h2>
    <p>
      Founded by passionate travelers, Lavish Saint was born out of a love for
      exploration and the desire to share extraordinary destinations with the
      world. Over the years, we’ve grown into a trusted name in luxury travel,
      serving clients from all over the globe and helping them discover the
      hidden gems of each locale.
    </p>

    <h2>Get In Touch</h2>
    <p>
      Ready to start your next adventure? Contact us today, and let Lavish Saint
      bring your travel dreams to life.
    </p>
  </div>
</template>

<style scoped lang="scss">
.about {
  margin: 0 auto;
  padding: 40px;
  max-width: 1200px;
  background-color: #f9f9f9;
  font-family: "Arial", sans-serif;
  color: #333;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  strong {
    font-weight: 700;
    color: #2c3e50;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 30px;

    li {
      font-size: 1.2rem;
      margin-bottom: 15px;

      strong {
        color: #e67e22;
      }
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > * {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
    ul {
      font-size: 1rem;
    }
  }
}
</style>
