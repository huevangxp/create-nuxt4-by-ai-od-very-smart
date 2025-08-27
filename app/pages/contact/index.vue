<script setup lang="ts">
import { ref } from 'vue'

// Form data
const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  preferredContact: 'email',
  urgency: 'normal'
})

// Form validation
const formValid = ref(false)
const isSubmitting = ref(false)

// Contact information
const contactInfo = ref({
  address: {
    street: '123 Setthathirath Road',
    city: 'Vientiane Capital',
    country: 'Laos PDR',
    postalCode: '01000'
  },
  phone: {
    main: '+856 21 123 456',
    mobile: '+856 20 987 6543',
    whatsapp: '+856 20 987 6543'
  },
  email: {
    general: 'info@beloved-laos.com',
    support: 'support@beloved-laos.com',
    business: 'business@beloved-laos.com'
  },
  hours: {
    weekdays: '9:00 AM - 8:00 PM',
    weekends: '10:00 AM - 6:00 PM',
    timezone: 'ICT (UTC+7)'
  },
  social: {
    facebook: 'https://facebook.com/beloved-laos',
    instagram: 'https://instagram.com/beloved-laos',
    twitter: 'https://twitter.com/beloved-laos',
    whatsapp: 'https://wa.me/8562098765431'
  }
})

// Office locations
const officeLocations = ref([
  {
    name: 'Main Office',
    address: '123 Setthathirath Road, Vientiane Capital',
    phone: '+856 21 123 456',
    hours: 'Mon-Fri: 9:00 AM - 8:00 PM',
    coordinates: { lat: 17.9667, lng: 102.6 }
  },
  {
    name: 'Luang Prabang Branch',
    address: '456 Sisavangvong Road, Luang Prabang',
    phone: '+856 71 987 654',
    hours: 'Mon-Sat: 10:00 AM - 6:00 PM',
    coordinates: { lat: 19.8845, lng: 102.1348 }
  }
])

// FAQ items
const faqItems = ref([
  {
    question: 'How can I get started on the platform?',
    answer: 'Simply create a free account, complete your profile, and start browsing potential matches. Our team will guide you through the process.'
  },
  {
    question: 'What verification processes do you have?',
    answer: 'We offer comprehensive identity verification, photo authentication, and background checks to ensure authentic and safe connections.'
  },
  {
    question: 'How do I upgrade my membership?',
    answer: 'You can upgrade to Premium or Elite plans anytime through your account settings or by contacting our support team.'
  },
  {
    question: 'Is my personal information secure?',
    answer: 'Yes, we use industry-standard encryption and follow strict privacy protocols to protect all member information.'
  }
])

// Form validation rules
const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => v.length >= 2 || 'Name must be at least 2 characters'
]

const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const messageRules = [
  (v: string) => !!v || 'Message is required',
  (v: string) => v.length >= 10 || 'Message must be at least 10 characters'
]

// Functions
const submitForm = async () => {
  if (!formValid.value) return
  
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  }
  
  isSubmitting.value = false
  
  // Show success message (you can implement proper notification)
  alert('Thank you for your message! We\'ll get back to you soon.')
}

const openMap = (location: any) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`
  window.open(url, '_blank')
}
</script>

<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container>
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="8">
            <h1 class="hero-title">Get In Touch</h1>
            <p class="hero-subtitle">
              We're here to help you find love and answer any questions you may have. 
              Reach out to us anytime - we'd love to hear from you!
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="contact-section">
      <v-container>
        <v-row>
          <!-- Contact Form -->
          <v-col cols="12" md="8">
            <v-card class="contact-form-card" elevation="12">
              <v-card-title class="form-title">
                <v-icon icon="mdi-message" class="mr-3" color="primary"></v-icon>
                Send us a Message
              </v-card-title>
              <v-card-text class="pa-8">
                <v-form v-model="formValid" @submit.prevent="submitForm">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="contactForm.name"
                        label="Full Name *"
                        variant="outlined"
                        :rules="nameRules"
                        prepend-inner-icon="mdi-account"
                        class="mb-4"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="contactForm.email"
                        label="Email Address *"
                        variant="outlined"
                        :rules="emailRules"
                        prepend-inner-icon="mdi-email"
                        class="mb-4"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="contactForm.phone"
                        label="Phone Number"
                        variant="outlined"
                        prepend-inner-icon="mdi-phone"
                        class="mb-4"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        v-model="contactForm.subject"
                        label="Subject"
                        variant="outlined"
                        :items="[
                          'General Inquiry',
                          'Technical Support',
                          'Billing Question',
                          'Partnership Opportunity',
                          'Feedback',
                          'Other'
                        ]"
                        prepend-inner-icon="mdi-tag"
                        class="mb-4"
                      ></v-select>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-select
                        v-model="contactForm.preferredContact"
                        label="Preferred Contact Method"
                        variant="outlined"
                        :items="[
                          { title: 'Email', value: 'email' },
                          { title: 'Phone Call', value: 'phone' },
                          { title: 'WhatsApp', value: 'whatsapp' }
                        ]"
                        prepend-inner-icon="mdi-contact-mail"
                        class="mb-4"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        v-model="contactForm.urgency"
                        label="Urgency Level"
                        variant="outlined"
                        :items="[
                          { title: 'Low - Within a week', value: 'low' },
                          { title: 'Normal - Within 2-3 days', value: 'normal' },
                          { title: 'High - Within 24 hours', value: 'high' },
                          { title: 'Urgent - Same day', value: 'urgent' }
                        ]"
                        prepend-inner-icon="mdi-clock"
                        class="mb-4"
                      ></v-select>
                    </v-col>
                  </v-row>

                  <v-textarea
                    v-model="contactForm.message"
                    label="Your Message *"
                    variant="outlined"
                    :rules="messageRules"
                    rows="5"
                    prepend-inner-icon="mdi-message-text"
                    class="mb-6"
                  ></v-textarea>

                  <v-btn
                    type="submit"
                    size="large"
                    :loading="isSubmitting"
                    :disabled="!formValid"
                    color="primary"
                    class="submit-btn"
                    prepend-icon="mdi-send"
                    block
                  >
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Contact Information -->
          <v-col cols="12" md="4">
            <div class="contact-info-container">
              <!-- Quick Contact -->
              <v-card class="contact-info-card mb-6" elevation="8">
                <v-card-title class="info-title">
                  <v-icon icon="mdi-phone" class="mr-3" color="primary"></v-icon>
                  Quick Contact
                </v-card-title>
                <v-card-text class="pa-6">
                  <div class="contact-item">
                    <v-icon icon="mdi-phone" class="item-icon"></v-icon>
                    <div>
                      <h4>Phone</h4>
                      <a :href="`tel:${contactInfo.phone.main}`">{{ contactInfo.phone.main }}</a>
                      <br>
                      <a :href="`tel:${contactInfo.phone.mobile}`">{{ contactInfo.phone.mobile }}</a>
                    </div>
                  </div>
                  
                  <v-divider class="my-4"></v-divider>
                  
                  <div class="contact-item">
                    <v-icon icon="mdi-email" class="item-icon"></v-icon>
                    <div>
                      <h4>Email</h4>
                      <a :href="`mailto:${contactInfo.email.general}`">{{ contactInfo.email.general }}</a>
                      <br>
                      <a :href="`mailto:${contactInfo.email.support}`">{{ contactInfo.email.support }}</a>
                    </div>
                  </div>
                  
                  <v-divider class="my-4"></v-divider>
                  
                  <div class="contact-item">
                    <v-icon icon="mdi-clock" class="item-icon"></v-icon>
                    <div>
                      <h4>Business Hours</h4>
                      <p>Weekdays: {{ contactInfo.hours.weekdays }}</p>
                      <p>Weekends: {{ contactInfo.hours.weekends }}</p>
                      <small>{{ contactInfo.hours.timezone }}</small>
                    </div>
                  </div>
                </v-card-text>
              </v-card>

              <!-- Social Media -->
              <v-card class="social-media-card" elevation="8">
                <v-card-title class="info-title">
                  <v-icon icon="mdi-share-variant" class="mr-3" color="primary"></v-icon>
                  Follow Us
                </v-card-title>
                <v-card-text class="pa-6">
                  <div class="social-buttons">
                    <v-btn
                      :href="contactInfo.social.facebook"
                      target="_blank"
                      color="#1877f2"
                      variant="elevated"
                      prepend-icon="mdi-facebook"
                      block
                      class="mb-3"
                    >
                      Facebook
                    </v-btn>
                    <v-btn
                      :href="contactInfo.social.instagram"
                      target="_blank"
                      color="#e4405f"
                      variant="elevated"
                      prepend-icon="mdi-instagram"
                      block
                      class="mb-3"
                    >
                      Instagram
                    </v-btn>
                    <v-btn
                      :href="contactInfo.social.whatsapp"
                      target="_blank"
                      color="#25d366"
                      variant="elevated"
                      prepend-icon="mdi-whatsapp"
                      block
                    >
                      WhatsApp
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Office Locations & Map -->
    <section class="locations-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="section-title">Our Locations</h2>
          <p class="section-subtitle">
            Visit us at our offices across Laos
          </p>
        </div>
        
        <v-row>
          <v-col
            v-for="location in officeLocations"
            :key="location.name"
            cols="12"
            md="6"
          >
            <v-card class="location-card" elevation="8">
              <v-card-text class="pa-8">
                <div class="location-header">
                  <h3 class="location-name">{{ location.name }}</h3>
                  <v-btn
                    icon
                    size="small"
                    color="primary"
                    @click="openMap(location)"
                  >
                    <v-icon>mdi-map</v-icon>
                  </v-btn>
                </div>
                
                <div class="location-details">
                  <div class="detail-item">
                    <v-icon icon="mdi-map-marker" class="detail-icon"></v-icon>
                    <span>{{ location.address }}</span>
                  </div>
                  <div class="detail-item">
                    <v-icon icon="mdi-phone" class="detail-icon"></v-icon>
                    <a :href="`tel:${location.phone}`">{{ location.phone }}</a>
                  </div>
                  <div class="detail-item">
                    <v-icon icon="mdi-clock" class="detail-icon"></v-icon>
                    <span>{{ location.hours }}</span>
                  </div>
                </div>
                
                <v-btn
                  variant="outlined"
                  color="primary"
                  @click="openMap(location)"
                  prepend-icon="mdi-directions"
                  block
                  class="mt-4"
                >
                  Get Directions
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Interactive Map Placeholder -->
        <v-row class="mt-8">
          <v-col cols="12">
            <v-card class="map-card" elevation="12">
              <v-card-title class="map-title">
                <v-icon icon="mdi-map" class="mr-3" color="primary"></v-icon>
                Interactive Map
              </v-card-title>
              <v-card-text class="pa-0">
                <!-- Map iframe (replace with your actual map service) -->
                <div class="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59196.96658782285!2d102.56735344863279!3d17.966395599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312454b5c4e8b703%3A0x5f8f07b8b9c5d4c0!2sVientiane%2C%20Laos!5e0!3m2!1sen!2s!4v1648123456789!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style="border:0;"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Quick answers to common questions
          </p>
        </div>
        
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-expansion-panels variant="accordion" class="faq-panels">
              <v-expansion-panel
                v-for="(item, index) in faqItems"
                :key="index"
              >
                <v-expansion-panel-title>
                  {{ item.question }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  {{ item.answer }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Emergency Contact -->
    <section class="emergency-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card class="emergency-card" elevation="12">
              <v-card-text class="pa-8 text-center">
                <v-icon icon="mdi-phone-alert" size="64" color="error" class="mb-4"></v-icon>
                <h2 class="emergency-title">Need Immediate Help?</h2>
                <p class="emergency-description">
                  If you have an urgent matter or emergency, please contact us immediately:
                </p>
                <div class="emergency-contacts">
                  <v-btn
                    :href="`tel:${contactInfo.phone.mobile}`"
                    size="x-large"
                    color="error"
                    variant="elevated"
                    prepend-icon="mdi-phone"
                    class="mr-4 mb-4"
                  >
                    Call Now
                  </v-btn>
                  <v-btn
                    :href="contactInfo.social.whatsapp"
                    target="_blank"
                    size="x-large"
                    color="success"
                    variant="elevated"
                    prepend-icon="mdi-whatsapp"
                    class="mb-4"
                  >
                    WhatsApp
                  </v-btn>
                </div>
                <p class="emergency-note">
                  Available 24/7 for emergencies and urgent support needs
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 100px 0 80px;
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
  max-width: 700px;
  margin: 0 auto;
}

/* Contact Section */
.contact-section {
  padding: 100px 0;
  background: white;
  margin-top: -40px;
  position: relative;
  z-index: 2;
}

.contact-form-card {
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  padding: 24px 32px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.submit-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white;
  text-transform: none;
  font-weight: 600;
  border-radius: 12px;
  height: 56px;
}

/* Contact Info */
.contact-info-container {
  position: sticky;
  top: 100px;
}

.contact-info-card,
.social-media-card {
  border-radius: 20px;
  transition: all 0.3s ease;
}

.contact-info-card:hover,
.social-media-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15) !important;
}

.info-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  padding: 20px 24px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.item-icon {
  color: #667eea;
  margin-top: 4px;
}

.contact-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
}

.contact-item a {
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #764ba2;
  text-decoration: underline;
}

.contact-item p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

/* Social Media */
.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Locations Section */
.locations-section {
  padding: 100px 0;
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
}

.location-card {
  border-radius: 20px;
  transition: all 0.3s ease;
  height: 100%;
}

.location-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.location-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.location-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.location-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.detail-icon {
  color: #667eea;
  flex-shrink: 0;
}

.detail-item span,
.detail-item a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.detail-item a:hover {
  color: #667eea;
}

/* Map */
.map-card {
  border-radius: 20px;
  overflow: hidden;
}

.map-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.95);
}

.map-container {
  position: relative;
  width: 100%;
  height: 400px;
}

/* FAQ Section */
.faq-section {
  padding: 100px 0;
  background: white;
}

.faq-panels {
  border-radius: 16px;
  overflow: hidden;
}

/* Emergency Section */
.emergency-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.emergency-card {
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
}

.emergency-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
}

.emergency-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 24px;
}

.emergency-contacts {
  margin-bottom: 20px;
}

.emergency-note {
  font-size: 0.9rem;
  color: #888;
  margin: 0;
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
  
  .contact-info-container {
    position: static;
    margin-top: 40px;
  }
  
  .emergency-contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding: 60px 0 40px;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .form-title,
  .info-title,
  .map-title {
    padding: 16px 20px 12px;
  }
  
  .contact-form-card .pa-8,
  .contact-info-card .pa-6,
  .emergency-card .pa-8 {
    padding: 24px !important;
  }
  
  .emergency-contacts {
    flex-direction: column;
  }
  
  .emergency-contacts .mr-4 {
    margin-right: 0 !important;
  }
}

/* Dark theme support */
.v-theme--dark .hero-section,
.v-theme--dark .locations-section {
  background: linear-gradient(145deg, #121212 0%, #1e1e1e 100%);
}

.v-theme--dark .contact-section,
.v-theme--dark .faq-section {
  background: #121212;
}

.v-theme--dark .hero-subtitle,
.v-theme--dark .section-subtitle {
  color: #aaa;
}

.v-theme--dark .form-title,
.v-theme--dark .info-title,
.v-theme--dark .map-title,
.v-theme--dark .location-name,
.v-theme--dark .emergency-title {
  color: #fff;
}

.v-theme--dark .contact-item h4 {
  color: #fff;
}

.v-theme--dark .contact-item p,
.v-theme--dark .detail-item span,
.v-theme--dark .emergency-description {
  color: #ccc;
}
</style>