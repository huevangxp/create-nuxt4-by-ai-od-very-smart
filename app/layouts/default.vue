<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
const navigationItems = [
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'Blog', to: '/blog', icon: 'mdi-post' },
  { title: 'Videos', to: '/videos', icon: 'mdi-play-circle' },
  { title: 'About', to: '/about', icon: 'mdi-information' },
  { title: 'Services', to: '/services', icon: 'mdi-cogs' },
  { title: 'Contact', to: '/contact', icon: 'mdi-email' }
]

const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<template>
  <v-app>
    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      class="mobile-drawer"
    >
      <v-list>
        <v-list-item class="drawer-header">
          <v-avatar size="40" class="mr-3">
            <v-icon size="24" color="primary">mdi-heart</v-icon>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              Beloved
            </v-list-item-title>
            <v-list-item-subtitle>
              Customer Portal
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        
        <v-divider class="my-3"></v-divider>
        
        <v-list-item
          v-for="item in navigationItems"
          :key="item.title"
          :to="item.to"
          class="mobile-nav-item"
          @click="drawer = false"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        
        <v-divider class="my-3"></v-divider>
        
        <v-list-item class="mobile-cta">
          <v-btn
            color="primary"
            variant="elevated"
            block
            prepend-icon="mdi-account-plus"
            @click="drawer = false"
          >
            Get Started
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Header Component -->
    <Header @toggle-drawer="toggleDrawer" />
    
    <!-- Main Content -->
    <v-main>
      <v-container fluid class="main-container">
        <slot />
      </v-container>
    </v-main>

   
    <!-- Footer Component -->
     <Footer />
  </v-app>
</template>

<style scoped>
.mobile-drawer {
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
}

.drawer-header {
  padding: 20px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin-bottom: 8px;
}

.mobile-nav-item {
  margin: 4px 8px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.mobile-nav-item:hover {
  background-color: rgba(102, 126, 234, 0.1);
  transform: translateX(4px);
}

.mobile-nav-item.router-link-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.mobile-cta {
  padding: 16px;
}

.main-container {
  padding-top: 24px;
  min-height: calc(100vh - 80px);
}

/* Dark theme support */
.v-theme--dark .mobile-drawer {
  background: linear-gradient(145deg, #1a1a1a 0%, #2d2d30 100%);
}
</style>