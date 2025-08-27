<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isScrolled = ref(false)

// Add scroll effect
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
})

const navigationItems = [
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'Blog', to: '/blog', icon: 'mdi-post' },
  { title: 'About', to: '/about', icon: 'mdi-information' },
  { title: 'Services', to: '/services', icon: 'mdi-cogs' },
  { title: 'Contact', to: '/contact', icon: 'mdi-email' }
]
</script>

<template>
  <v-app-bar
    app
    :class="{
      'header-scrolled': isScrolled,
      'header-default': !isScrolled
    }"
    class="modern-header"
    :elevation="isScrolled ? 8 : 0"
    height="80"
  >
    <!-- Logo Section -->
    <div class="logo-container">
      <v-avatar size="45" class="logo-avatar">
        <v-icon size="30" color="primary">mdi-heart</v-icon>
      </v-avatar>
      <div class="brand-text">
        <h2 class="brand-name">Beloved</h2>
        <span class="brand-tagline">Customer Portal</span>
      </div>
    </div>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <div class="desktop-nav d-none d-md-flex">
      <v-btn
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.to"
        variant="text"
        class="nav-btn"
        :prepend-icon="item.icon"
      >
        {{ item.title }}
      </v-btn>
    </div>

    <!-- CTA Button -->
    <v-btn
      class="cta-btn d-none d-sm-flex ml-4"
      color="primary"
      variant="elevated"
      prepend-icon="mdi-account-plus"
    >
      Get Started
    </v-btn>

    <!-- Mobile Menu -->
    <v-app-bar-nav-icon
      class="d-flex d-md-none"
      @click="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<style scoped>
.modern-header {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-default {
  background: rgba(255, 255, 255, 0.95) !important;
  color: #333;
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.98) !important;
  color: #333;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.logo-container:hover {
  transform: translateY(-1px);
}

.logo-avatar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.logo-avatar:hover {
  transform: rotate(5deg) scale(1.05);
  box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-tagline {
  font-size: 0.75rem;
  color: #666;
  font-weight: 500;
  margin-top: -2px;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-btn {
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.02em;
  border-radius: 12px;
  padding: 0 20px;
  height: 40px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  transition: left 0.6s ease;
}

.nav-btn:hover::before {
  left: 100%;
}

.nav-btn:hover {
  background-color: rgba(102, 126, 234, 0.08);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.nav-btn.router-link-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.cta-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white;
  text-transform: none;
  font-weight: 600;
  border-radius: 25px;
  padding: 0 24px;
  height: 44px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.cta-btn:active {
  transform: translateY(0);
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .brand-name {
    font-size: 1.3rem;
  }
  
  .brand-tagline {
    font-size: 0.7rem;
  }
}

@media (max-width: 600px) {
  .logo-container {
    gap: 8px;
  }
  
  .logo-avatar {
    width: 35px !important;
    height: 35px !important;
  }
  
  .brand-name {
    font-size: 1.1rem;
  }
  
  .brand-tagline {
    display: none;
  }
}

/* Dark theme support */
.v-theme--dark .header-default,
.v-theme--dark .header-scrolled {
  background: rgba(30, 30, 30, 0.95) !important;
  color: #fff;
  border-bottom-color: rgba(255, 255, 255, 0.12);
}

.v-theme--dark .brand-tagline {
  color: #aaa;
}

.v-theme--dark .nav-btn:hover {
  background-color: rgba(102, 126, 234, 0.15);
}
</style>
