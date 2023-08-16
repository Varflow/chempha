<template>
  <div class="company-page">
    <Head>
      <Title>Chempha About Company</Title>
      <Meta name="og:title" content="Chempha About Company" />
      <Meta
        name="og:description"
        content="Chempha OÜ is an international company engaged in distribution of
            special and unique chemicals for production of personal care and
            cosmetics."
      />
      <Meta name="og:image" content="/images/banners/company.js" />
    </Head>
    <div class="company-banner">
      <img
        src="/images/banners/company.jpg"
        alt=""
        class="company-banner__image"
      />
      <h2 class="company-banner__title">
        Comprehensive Solutions for Cosmetic Manufacturers
      </h2>
    </div>

    <div class="container">
      <div class="row company-content-item">
        <div
          class="col-12 col-lg-6 company-content__image"
          data-aos="fade-right"
        >
          <img src="/images/banners/company/company-1.jpeg" alt="" />
        </div>

        <div class="col-12 col-lg-6 company-content__info" data-aos="fade-left">
          <h3 class="company-content__title">About Us</h3>
          <p class="company-content__text">
            Chempha OÜ is an international company engaged in distribution of
            special and unique chemicals for production of personal care and
            cosmetics.
          </p>
          <p class="company-content__text">
            With our expertise and comprehensive customer support we have the
            know-how to assist you in finding, designing, and delivering the
            ideal solution. We closely cooperate with R&D departments, marketers
            and business developers to provide them with the best ingredients
            that will help them create products that stand out from the rest.
            With our wide range of offerings, we aim to help our customers reach
            new heights in product development and bring new life to old
            formulations. Our team of beauty and personal care experts can bring
            you only the latest, most advanced ingredients and complex solutions
            for your cosmetic and personal care applications.
          </p>
        </div>
      </div>

      <div class="row flex-row-reverse company-content-item">
        <div
          class="col-12 col-lg-6 company-content__image"
          data-aos="fade-left"
        >
          <img src="/images/banners/company/company-2.jpg" alt="" />
        </div>

        <div
          class="col-12 col-lg-6 company-content__info"
          data-aos="fade-right"
        >
          <h3 class="company-content__title">Mission & Values</h3>
          <p class="company-content__text">
            <b>Mission</b>
            <br />
            We are committed to provide our customers with highly efficient and
            sustainable solutions that are safe for both the environment and
            people.
          </p>
          <br />
          <p class="company-content__text">
            <b>Core values</b><br />
            <b>Integrity</b>. We are committed to honest, open and
            professionally respectful interaction and pursue the truth in our
            business endeavors.
            <br />
            <b>Commitment to customers</b>. Exceeding our customers’ needs and
            expectations in all aspects of the product and related service is
            our primary responsibility.
            <br />
            <b>Green chemistry</b>. We recognize our responsibility to
            contribute to a more sustainable world providing environmentally
            friendly chemical solutions.
            <br />
            <b>Teamwork</b>. The strength of our team is not only in expertise
            and experience but also in our ability to trust each other. Meeting
            our goals is not achieved by individuals but by supporting each
            other and enjoying cooperation as a team.
          </p>
        </div>
      </div>

      <div class="row company-content-item">
        <div
          class="col-12 col-lg-6 company-content__image"
          data-aos="fade-right"
        >
          <img src="/images/banners/company/company-3.jpg" alt="" />
        </div>

        <div class="col-12 col-lg-6 company-content__info" data-aos="fade-left">
          <h3 class="company-content__title">History</h3>
          <p class="company-content__text">
            Our team’s experience in distribution of cosmetic and pharmaceutical
            ingredients counts decades of years. Initially the core of our staff
            has been active in marketing and sales of pharmaceutical and
            cosmetic ingredients in Ukraine where we have accumulated great
            expertise and have acquired a reputation of a reliable solution
            provider in the target markets.
          </p>
          <p class="company-content__text">
            Thus our individual and flexible approach to customers in addition
            to craving for further expansion encouraged us to establish Chempha
            OÜ in 2021 with the purpose of providing unique specialty solutions
            predominantly for cosmetic and pharma customers in the Baltic States
            as well as in Kazakhstan, Azerbaijan, Armenia, Georgia, Kyrgyzstan,
            Moldova, Tajikistan, Uzbekistan, Turkmenistan.
          </p>
        </div>
      </div>
    </div>

    <div class="section-team">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our team</h2>
        </div>

        <div class="row team-list gy-5">
          <div class="col-lg-4 team-item">
            <div class="team-item__avatar">
              <img src="/images/team/team-1.png" alt="" />
            </div>
            <h4 class="team-item__name">Mr. Kutsenko Illya</h4>
            <h5 class="team-item__post">BUSINESS DEVELOPMENT DIRECTOR</h5>
          </div>
          <div class="col-lg-4 team-item">
            <div class="team-item__avatar">
              <img src="/images/team/team-2.png" alt="" />
            </div>
            <h4 class="team-item__name">Ms. Hriaznova Veronika</h4>
            <h5 class="team-item__post">Ceo</h5>
          </div>
          <div class="col-lg-4 team-item">
            <div class="team-item__avatar">
              <img src="/images/team/team-3.png" alt="" />
            </div>
            <h4 class="team-item__name">Ms. Makarova Lubov</h4>
            <h5 class="team-item__post">SALES MANAGER</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  mounted() {
    AOS.init({ duration: 1000 });
  },
};
</script>
