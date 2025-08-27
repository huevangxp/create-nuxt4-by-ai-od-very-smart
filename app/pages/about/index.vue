<script setup lang="ts">
import { ref } from 'vue'

// Company statistics
const companyStats = ref([
  { icon: 'mdi-heart', number: '10,000+', label: 'Happy Connections' },
  { icon: 'mdi-account-group', number: '25,000+', label: 'Active Members' },
  { icon: 'mdi-calendar', number: '5+', label: 'Years Experience' },
  { icon: 'mdi-star', number: '4.9/5', label: 'Customer Rating' }
])

// Team members
const teamMembers = ref([
  {
    name: 'Somsak Phommachanh',
    position: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    description: 'Passionate about connecting hearts across Laos with 10+ years in relationship consulting.',
    social: { linkedin: '#', facebook: '#' }
  },
  {
    name: 'Khamphone Sisavanh',
    position: 'Head of Customer Relations',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    description: 'Dedicated to ensuring every member finds their perfect match with personalized support.',
    social: { linkedin: '#', facebook: '#' }
  },
  {
    name: 'Bounthong Vongphachanh',
    position: 'Technology Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    description: 'Leveraging cutting-edge technology to create seamless user experiences.',
    social: { linkedin: '#', github: '#' }
  }
])

// Company values
const companyValues = ref([
  {
    icon: 'mdi-heart',
    title: 'Authentic Connections',
    description: 'We believe in genuine relationships built on trust, respect, and shared values.'
  },
  {
    icon: 'mdi-shield-check',
    title: 'Safety & Privacy',
    description: 'Your safety is our priority. We maintain strict verification and privacy protocols.'
  },
  {
    icon: 'mdi-account-multiple',
    title: 'Cultural Respect',
    description: 'We honor Laotian traditions while embracing modern approaches to love and relationships.'
  },
  {
    icon: 'mdi-star',
    title: 'Quality Service',
    description: 'Personalized support and premium features to help you find your perfect match.'
  }
])
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container>
        <v-row align="center" class="min-height-screen">
          <v-col cols="12" md="6">
            <div class="hero-content">
              <h1 class="hero-title">About Beloved Laos</h1>
              <p class="hero-subtitle">
                Connecting hearts across beautiful Laos since 2019. We specialize in 
                creating meaningful relationships between people who value tradition, 
                family, and genuine love.
              </p>
              <div class="hero-buttons">
                <v-btn size="large" class="hero-cta" prepend-icon="mdi-account-plus">
                  Join Our Community
                </v-btn>
                <v-btn size="large" variant="outlined" class="hero-contact ml-4" prepend-icon="mdi-phone">
                  Contact Us
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="hero-image">
              <v-img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=500&fit=crop"
                alt="Beautiful Laos landscape"
                class="rounded-xl"
                cover
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Statistics Section -->
    <section class="stats-section">
      <v-container>
        <v-row>
          <v-col
            v-for="stat in companyStats"
            :key="stat.label"
            cols="6"
            md="3"
          >
            <v-card class="stat-card text-center" elevation="8">
              <v-card-text class="pa-6">
                <v-icon :icon="stat.icon" size="48" color="primary" class="mb-4"></v-icon>
                <h3 class="stat-number">{{ stat.number }}</h3>
                <p class="stat-label">{{ stat.label }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="section-title">Our Mission</h2>
            <p class="mission-text">
              To bridge hearts across Laos by creating a safe, respectful platform where 
              authentic relationships flourish. We combine traditional Laotian values with 
              modern technology to help people find lasting love and companionship.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="section-title">Meet Our Team</h2>
          <p class="section-subtitle">
            Dedicated professionals committed to your happiness
          </p>
        </div>
        <v-row>
          <v-col
            v-for="member in teamMembers"
            :key="member.name"
            cols="12"
            md="4"
          >
            <v-card class="team-card" elevation="8">
              <div class="team-image-container">
                <v-img
                  :src="member.image"
                  height="300"
                  cover
                  class="team-image"
                ></v-img>
              </div>
              <v-card-text class="pa-6">
                <h3 class="team-name">{{ member.name }}</h3>
                <p class="team-position">{{ member.position }}</p>
                <p class="team-description">{{ member.description }}</p>
                <div class="social-links">
                  <v-btn
                    v-for="(url, platform) in member.social"
                    :key="platform"
                    :href="url"
                    icon
                    size="small"
                    class="social-btn"
                  >
                    <v-icon :icon="`mdi-${platform}`"></v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="section-title">Our Values</h2>
          <p class="section-subtitle">
            The principles that guide everything we do
          </p>
        </div>
        <v-row>
          <v-col
            v-for="value in companyValues"
            :key="value.title"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card class="value-card text-center" elevation="6">
              <v-card-text class="pa-8">
                <div class="value-icon-container">
                  <v-icon :icon="value.icon" size="56" color="primary"></v-icon>
                </div>
                <h3 class="value-title">{{ value.title }}</h3>
                <p class="value-description">{{ value.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card class="cta-card text-center" elevation="12">
              <v-card-text class="pa-12">
                <h2 class="cta-title">Ready to Find Your Special Someone?</h2>
                <p class="cta-description">
                  Join thousands of people who have found meaningful connections 
                  through our platform. Your perfect match is waiting for you.
                </p>
                <div class="cta-buttons">
                  <v-btn size="x-large" class="cta-primary" prepend-icon="mdi-heart">
                    Start Your Journey
                  </v-btn>
                  <v-btn size="large" variant="outlined" class="cta-secondary ml-4" prepend-icon="mdi-information">
                    Learn More
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 100px 0;
}

.min-height-screen {
  min-height: 60vh;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 32px;
}

.hero-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white;
  text-transform: none;
  font-weight: 600;
  border-radius: 25px;
  padding: 0 32px;
}

.hero-contact {
  border-radius: 25px;
  text-transform: none;
  font-weight: 600;
  padding: 0 32px;
}

.hero-image {
  position: relative;
}

/* Statistics Section */
.stats-section {
  padding: 80px 0;
  background: white;
  margin-top: -40px;
  position: relative;
  z-index: 2;
}

.stat-card {
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 16px 0 8px;
}

.stat-label {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
  margin: 0;
}

/* Mission Section */
.mission-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.mission-text {
  font-size: 1.3rem;
  line-height: 1.8;
  font-weight: 300;
}

/* Team Section */
.team-section {
  padding: 100px 0;
  background: #f8f9fa;
}

.team-card {
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  height: 100%;
}

.team-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15) !important;
}

.team-image-container {
  position: relative;
  overflow: hidden;
}

.team-image {
  transition: transform 0.4s ease;
}

.team-card:hover .team-image {
  transform: scale(1.05);
}

.team-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.team-position {
  font-size: 1rem;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 16px;
}

.team-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 8px;
}

.social-btn {
  background: rgba(102, 126, 234, 0.1) !important;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: #667eea !important;
  color: white;
}

/* Values Section */
.values-section {
  padding: 100px 0;
  background: white;
}

.value-card {
  border-radius: 20px;
  transition: all 0.3s ease;
  height: 100%;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
}

.value-icon-container {
  margin-bottom: 24px;
}

.value-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.value-description {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* CTA Section */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
}

.cta-card {
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

.cta-description {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 32px;
}

.cta-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white;
  text-transform: none;
  font-weight: 600;
  border-radius: 28px;
  padding: 0 40px;
}

.cta-secondary {
  border-radius: 28px;
  text-transform: none;
  font-weight: 600;
  padding: 0 32px;
}

/* Common Styles */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}

/* Mission section title override */
.mission-section .section-title {
  color: white;
  background: none;
  -webkit-text-fill-color: white;
}

/* Responsive Design */
@media (max-width: 960px) {
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .hero-buttons {
    text-align: center;
  }
  
  .hero-contact {
    margin-left: 0 !important;
    margin-top: 16px;
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding: 60px 0;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .mission-text {
    font-size: 1.1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  
  .cta-secondary {
    margin-left: 0 !important;
  }
}

/* Dark theme support */
.v-theme--dark .hero-section {
  background: linear-gradient(145deg, #121212 0%, #1e1e1e 100%);
}

.v-theme--dark .stats-section,
.v-theme--dark .values-section {
  background: #121212;
}

.v-theme--dark .team-section {
  background: #1a1a1a;
}

.v-theme--dark .hero-subtitle,
.v-theme--dark .section-subtitle {
  color: #aaa;
}

.v-theme--dark .stat-number,
.v-theme--dark .team-name,
.v-theme--dark .value-title {
  color: #fff;
}

.v-theme--dark .stat-label,
.v-theme--dark .team-description,
.v-theme--dark .value-description {
  color: #ccc;
}
</style>