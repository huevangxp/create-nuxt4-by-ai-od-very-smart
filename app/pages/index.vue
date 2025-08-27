<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Carousel data
const carouselItems = ref([
  {
    id: 1,
    title: 'Welcome to Beloved Laos',
    subtitle: 'Discover Beautiful Connections',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&h=600&fit=crop',
    overlay: 'rgba(0,0,0,0.4)'
  },
  {
    id: 2,
    title: 'Find Your Perfect Match',
    subtitle: 'Authentic Laotian Beauty',
    image: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=1200&h=600&fit=crop',
    overlay: 'rgba(0,0,0,0.3)'
  },
  {
    id: 3,
    title: 'Cultural Heritage',
    subtitle: 'Traditional Values, Modern Love',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=600&fit=crop',
    overlay: 'rgba(0,0,0,0.4)'
  }
])

// Profile cards data
const profileCards = ref([
  {
    id: 1,
    name: 'Soulida',
    age: 24,
    phone: '+856 20 12345678',
    address: 'Vientiane Capital',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face',
    description: 'Traditional dancer with modern outlook'
  },
  {
    id: 2,
    name: 'Noy',
    age: 22,
    phone: '+856 20 87654321',
    address: 'Luang Prabang',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
    description: 'University student, loves photography'
  },
  {
    id: 3,
    name: 'Kham',
    age: 26,
    phone: '+856 20 11223344',
    address: 'Savannakhet',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    description: 'Teacher, enjoys cooking traditional food'
  },
  {
    id: 4,
    name: 'Vieng',
    age: 23,
    phone: '+856 20 55667788',
    address: 'Champasak',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=500&fit=crop&crop=face',
    description: 'Artist and cultural enthusiast'
  },
  {
    id: 5,
    name: 'Mali',
    age: 25,
    phone: '+856 20 99887766',
    address: 'Pakse',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&crop=face',
    description: 'Business owner, loves travel'
  },
  {
    id: 6,
    name: 'Phonepadith',
    age: 27,
    phone: '+856 20 44556677',
    address: 'Thakhek',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop&crop=face',
    description: 'Nurse with caring personality'
  },
  {
    id: 7,
    name: 'Boua',
    age: 21,
    phone: '+856 20 33445566',
    address: 'Xam Neua',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face',
    description: 'Student, passionate about music'
  },
  {
    id: 8,
    name: 'Dalavan',
    age: 28,
    phone: '+856 20 22334455',
    address: 'Attapeu',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop&crop=face',
    description: 'Engineer, enjoys outdoor activities'
  },
  {
    id: 9,
    name: 'Seng',
    age: 24,
    phone: '+856 20 66778899',
    address: 'Sekong',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=face',
    description: 'Designer with creative mindset'
  }
])

const currentSlide = ref(0)

// Auto-advance carousel
onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % carouselItems.value.length
  }, 5000)
})

// Functions
const sendMessage = (profileId: number) => {
  navigateTo(`/chat/${profileId}`)
}
</script>

<template>
  <div class="homepage">
    <!-- Hero Carousel Section -->
    <section class="hero-section">
      <v-carousel
        v-model="currentSlide"
        height="600"
        cycle
        interval="5000"
        hide-delimiter-background
        show-arrows="hover"
        class="hero-carousel"
      >
        <v-carousel-item
          v-for="item in carouselItems"
          :key="item.id"
          :src="item.image"
          cover
        >
          <div class="carousel-overlay" :style="{ background: item.overlay }">
            <v-container class="fill-height">
              <v-row align="center" justify="center" class="text-center">
                <v-col cols="12" md="8">
                  <h1 class="hero-title mb-4">
                    {{ item.title }}
                  </h1>
                  <p class="hero-subtitle mb-6">
                    {{ item.subtitle }}
                  </p>
                  <v-btn
                    size="large"
                    class="hero-cta"
                    prepend-icon="mdi-heart"
                  >
                    Explore Profiles
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-carousel-item>
      </v-carousel>
    </section>

    <!-- Welcome Section -->
    <section class="welcome-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="section-title mb-4">Welcome to Beloved Laos</h2>
            <p class="section-description">
              Discover meaningful connections with beautiful Laotian women who value tradition, 
              family, and genuine relationships. Each profile represents someone special looking 
              for their perfect match.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Profiles Grid Section -->
    <section class="profiles-section">
      <v-container>
        <v-row>
          <v-col
            v-for="profile in profileCards"
            :key="profile.id"
            cols="12"
            sm="6"
            md="4"
            lg="4"
          >
            <v-card
              class="profile-card"
              elevation="8"
              hover
            >
              <div class="card-image-container">
                <v-img
                  :src="profile.image"
                  height="280"
                  cover
                  class="profile-image"
                >
                  <div class="image-overlay">
                    <v-btn
                      icon
                      size="small"
                      class="favorite-btn"
                    >
                      <v-icon>mdi-heart-outline</v-icon>
                    </v-btn>
                  </div>
                </v-img>
              </div>
              
              <v-card-text class="profile-content">
                <div class="profile-header">
                  <h3 class="profile-name">{{ profile.name }}</h3>
                  <v-chip
                    size="small"
                    color="primary"
                    variant="tonal"
                  >
                    {{ profile.age }} years
                  </v-chip>
                </div>
                
                <p class="profile-description">{{ profile.description }}</p>
                
                <v-divider class="my-3"></v-divider>
                
                <div class="contact-info">
                  <div class="contact-item">
                    <v-icon size="16" class="contact-icon">mdi-phone</v-icon>
                    <span class="contact-text">{{ profile.phone }}</span>
                  </div>
                  <div class="contact-item">
                    <v-icon size="16" class="contact-icon">mdi-map-marker</v-icon>
                    <span class="contact-text">{{ profile.address }}</span>
                  </div>
                </div>
              </v-card-text>
              
              <v-card-actions class="profile-actions">
                <v-btn
                  color="primary"
                  variant="tonal"
                  prepend-icon="mdi-message"
                  @click="sendMessage(profile.id)"
                  block
                >
                  Send Message
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <v-card class="cta-card" elevation="12">
              <v-card-text class="pa-8">
                <h2 class="cta-title mb-4">Ready to Find Your Special Someone?</h2>
                <p class="cta-description mb-6">
                  Join thousands of people who have found meaningful connections 
                  through our platform. Start your journey today!
                </p>
                <v-btn
                  size="x-large"
                  class="cta-button"
                  prepend-icon="mdi-account-plus"
                >
                  Join Now - It's Free
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<style scoped>
.homepage {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-carousel {
  border-radius: 0;
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 300;
}

.hero-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white;
  text-transform: none;
  font-weight: 600;
  padding: 0 32px;
  height: 56px;
  border-radius: 28px;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
}

/* Welcome Section */
.welcome-section {
  padding: 80px 0;
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  font-weight: 300;
}

/* Profiles Section */
.profiles-section {
  padding: 80px 0;
  background: white;
}

.profile-card {
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.profile-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.card-image-container {
  position: relative;
  overflow: hidden;
}

.profile-image {
  transition: transform 0.4s ease;
}

.profile-card:hover .profile-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(45deg, transparent, rgba(0, 0, 0, 0.3));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-card:hover .image-overlay {
  opacity: 1;
}

.favorite-btn {
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
}

.profile-content {
  padding: 24px;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.profile-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.profile-description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-icon {
  color: #667eea;
}

.contact-text {
  font-size: 0.9rem;
  color: #555;
}

.profile-actions {
  padding: 16px 24px 24px;
}

/* CTA Section */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.cta-card {
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
}

.cta-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
}

.cta-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.cta-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white;
  text-transform: none;
  font-weight: 600;
  border-radius: 28px;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
}

/* Responsive Design */
@media (max-width: 960px) {
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .welcome-section,
  .profiles-section {
    padding: 60px 0;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .profile-content {
    padding: 20px;
  }
  
  .welcome-section,
  .profiles-section {
    padding: 40px 0;
  }
  
  .cta-section {
    padding: 60px 0;
  }
}

/* Dark theme support */
.v-theme--dark .welcome-section {
  background: linear-gradient(145deg, #1a1a1a 0%, #2d2d30 100%);
}

.v-theme--dark .section-description {
  color: #aaa;
}

.v-theme--dark .profiles-section {
  background: #121212;
}

.v-theme--dark .profile-name {
  color: #fff;
}

.v-theme--dark .profile-description {
  color: #ccc;
}

.v-theme--dark .contact-text {
  color: #bbb;
}
</style>
