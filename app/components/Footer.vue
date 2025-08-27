<script setup lang="ts">
import { ref } from 'vue'

// Navigation links
const navigationLinks = ref([
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'Blog', to: '/blog', icon: 'mdi-post' },
  { title: 'About Us', to: '/about', icon: 'mdi-information' },
  { title: 'Services', to: '/services', icon: 'mdi-cogs' },
  { title: 'Contact', to: '/contact', icon: 'mdi-email' },
  { title: 'Privacy Policy', to: '/privacy', icon: 'mdi-shield-account' },
  { title: 'Terms of Service', to: '/terms', icon: 'mdi-file-document' }
])

// Social media links
const socialLinks = ref([
  { name: 'Facebook', icon: 'mdi-facebook', url: '#', color: '#1877f2' },
  { name: 'Instagram', icon: 'mdi-instagram', url: '#', color: '#e4405f' },
  { name: 'Twitter', icon: 'mdi-twitter', url: '#', color: '#1da1f2' },
  { name: 'WhatsApp', icon: 'mdi-whatsapp', url: '#', color: '#25d366' },
  { name: 'Telegram', icon: 'mdi-telegram', url: '#', color: '#0088cc' }
])

// Contact information
const contactInfo = ref({
  phone: '+856 20 12345678',
  email: 'contact@beloved-laos.com',
  address: 'Vientiane Capital, Laos',
  hours: 'Mon - Sat: 9:00 AM - 8:00 PM'
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="modern-footer">
    <!-- Main Footer Content -->
    <div class="footer-main">
      <v-container>
        <v-row>
          <!-- Logo & Brand Section -->
          <v-col cols="12" md="4" lg="4">
            <div class="footer-brand">
              <div class="brand-logo">
                <v-avatar size="60" class="footer-logo-avatar">
                  <v-icon size="35" color="white">mdi-heart</v-icon>
                </v-avatar>
                <div class="brand-info">
                  <h3 class="brand-title">Beloved Laos</h3>
                  <p class="brand-tagline">Customer Portal</p>
                </div>
              </div>
              
              <p class="brand-description">
                Connecting hearts across Laos. We help you find meaningful relationships 
                with beautiful, authentic Laotian women who value tradition and love.
              </p>
              
              <!-- Social Media Icons -->
              <div class="social-media">
                <h4 class="social-title">Follow Us</h4>
                <div class="social-icons">
                  <v-btn
                    v-for="social in socialLinks"
                    :key="social.name"
                    :href="social.url"
                    target="_blank"
                    icon
                    size="small"
                    class="social-btn"
                    :style="{ '--social-color': social.color }"
                  >
                    <v-icon :icon="social.icon"></v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>

          <!-- Quick Links Section -->
          <v-col cols="12" sm="6" md="3" lg="3">
            <div class="footer-section">
              <h4 class="section-title">Quick Links</h4>
              <v-list class="footer-nav" density="compact">
                <v-list-item
                  v-for="link in navigationLinks.slice(0, 4)"
                  :key="link.title"
                  :to="link.to"
                  class="footer-nav-item"
                >
                  <template v-slot:prepend>
                    <v-icon 
                      :icon="link.icon" 
                      size="16"
                      class="nav-icon"
                    ></v-icon>
                  </template>
                  <v-list-item-title class="nav-title">
                    {{ link.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </v-col>

          <!-- Legal Links Section -->
          <v-col cols="12" sm="6" md="2" lg="2">
            <div class="footer-section">
              <h4 class="section-title">Legal</h4>
              <v-list class="footer-nav" density="compact">
                <v-list-item
                  v-for="link in navigationLinks.slice(4, 6)"
                  :key="link.title"
                  :to="link.to"
                  class="footer-nav-item"
                >
                  <template v-slot:prepend>
                    <v-icon 
                      :icon="link.icon" 
                      size="16"
                      class="nav-icon"
                    ></v-icon>
                  </template>
                  <v-list-item-title class="nav-title">
                    {{ link.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </v-col>

          <!-- Contact Information Section -->
          <v-col cols="12" md="3" lg="3">
            <div class="footer-section">
              <h4 class="section-title">Contact Us</h4>
              
              <div class="contact-info">
                <div class="contact-item">
                  <v-icon class="contact-icon">mdi-phone</v-icon>
                  <div class="contact-details">
                    <span class="contact-label">Phone</span>
                    <a :href="`tel:${contactInfo.phone}`" class="contact-value">
                      {{ contactInfo.phone }}
                    </a>
                  </div>
                </div>

                <div class="contact-item">
                  <v-icon class="contact-icon">mdi-email</v-icon>
                  <div class="contact-details">
                    <span class="contact-label">Email</span>
                    <a :href="`mailto:${contactInfo.email}`" class="contact-value">
                      {{ contactInfo.email }}
                    </a>
                  </div>
                </div>

                <div class="contact-item">
                  <v-icon class="contact-icon">mdi-map-marker</v-icon>
                  <div class="contact-details">
                    <span class="contact-label">Address</span>
                    <span class="contact-value">{{ contactInfo.address }}</span>
                  </div>
                </div>

                <div class="contact-item">
                  <v-icon class="contact-icon">mdi-clock</v-icon>
                  <div class="contact-details">
                    <span class="contact-label">Hours</span>
                    <span class="contact-value">{{ contactInfo.hours }}</span>
                  </div>
                </div>
              </div>

              <!-- Newsletter Signup -->
              <div class="newsletter">
                <h5 class="newsletter-title">Stay Updated</h5>
                <div class="newsletter-form">
                  <v-text-field
                    placeholder="Your email address"
                    variant="outlined"
                    density="compact"
                    hide-details
                    class="newsletter-input"
                  ></v-text-field>
                  <v-btn
                    color="primary"
                    class="newsletter-btn"
                    prepend-icon="mdi-send"
                  >
                    Subscribe
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <p class="copyright">
              © {{ currentYear }} Beloved Laos. All rights reserved.
            </p>
          </v-col>
          <v-col cols="12" md="6" class="text-md-right">
            <p class="made-with">
              Made with 
              <v-icon size="16" color="red" class="mx-1">mdi-heart</v-icon>
              in Laos
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </footer>
</template>

<style scoped>
.modern-footer {
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  margin-top: auto;
}

.footer-main {
  padding: 60px 0 40px;
  position: relative;
  overflow: hidden;
}

.footer-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="rgba(255,255,255,0.02)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

/* Brand Section */
.footer-brand {
  position: relative;
  z-index: 1;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.footer-logo-avatar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.brand-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-tagline {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 400;
}

.brand-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 24px;
}

/* Social Media */
.social-media {
  margin-top: 24px;
}

.social-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.social-icons {
  display: flex;
  gap: 8px;
}

.social-btn {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: var(--social-color) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* Footer Sections */
.footer-section {
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 3px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

/* Navigation */
.footer-nav {
  background: transparent;
}

.footer-nav-item {
  padding: 8px 0;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-bottom: 4px;
}

.footer-nav-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(4px);
}

.nav-icon {
  color: #667eea;
  margin-right: 8px;
}

.nav-title {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  transition: color 0.3s ease;
}

.footer-nav-item:hover .nav-title {
  color: white;
}

/* Contact Information */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.contact-icon {
  color: #667eea;
  margin-top: 2px;
  flex-shrink: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-value {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: #667eea;
}

/* Newsletter */
.newsletter {
  margin-top: 24px;
}

.newsletter-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.newsletter-input :deep(.v-field) {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.newsletter-input :deep(.v-field__field) {
  color: white;
}

.newsletter-input :deep(.v-field__field)::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  text-transform: none;
  font-weight: 500;
}

/* Footer Bottom */
.footer-bottom {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
}

.copyright,
.made-with {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.made-with {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive Design */
@media (max-width: 960px) {
  .footer-main {
    padding: 40px 0 30px;
  }
  
  .brand-logo {
    justify-content: center;
    text-align: center;
  }
  
  .brand-description {
    text-align: center;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .newsletter-form {
    align-items: stretch;
  }
  
  .made-with {
    justify-content: center;
    margin-top: 10px;
  }
}

@media (max-width: 600px) {
  .footer-main {
    padding: 30px 0 20px;
  }
  
  .brand-title {
    font-size: 1.5rem;
  }
  
  .section-title {
    font-size: 1.1rem;
    text-align: center;
  }
  
  .section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .contact-info {
    align-items: center;
  }
  
  .contact-item {
    justify-content: center;
  }
}

/* Dark theme adjustments */
.v-theme--dark .newsletter-input :deep(.v-field) {
  background: rgba(255, 255, 255, 0.15);
}

.v-theme--dark .footer-bottom {
  background: rgba(0, 0, 0, 0.4);
}

/* Animation for scroll reveal */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-section {
  animation: fadeInUp 0.6s ease-out;
}

.footer-section:nth-child(2) { animation-delay: 0.1s; }
.footer-section:nth-child(3) { animation-delay: 0.2s; }
.footer-section:nth-child(4) { animation-delay: 0.3s; }
</style>