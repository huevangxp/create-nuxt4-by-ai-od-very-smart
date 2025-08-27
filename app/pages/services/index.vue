<script setup lang="ts">
import { ref } from 'vue'

// Services data
const services = ref([
  {
    icon: 'mdi-account-search',
    title: 'Profile Verification',
    description: 'Comprehensive background checks and identity verification to ensure authentic connections.',
    features: ['Identity verification', 'Photo authentication', 'Background screening', 'Safety guarantee']
  },
  {
    icon: 'mdi-heart-multiple',
    title: 'Matchmaking Service',
    description: 'Personalized matchmaking by our expert team based on compatibility and preferences.',
    features: ['Personal consultant', 'Custom matches', '24/7 support', 'Success guarantee']
  },
  {
    icon: 'mdi-video',
    title: 'Video Chat Platform',
    description: 'Secure video calling platform to connect with matches safely before meeting in person.',
    features: ['HD video calls', 'Screen sharing', 'Chat translation', 'Privacy protection']
  },
  {
    icon: 'mdi-calendar-heart',
    title: 'Date Planning',
    description: 'Professional date planning service with local recommendations and arrangements.',
    features: ['Venue suggestions', 'Reservation service', 'Cultural guidance', 'Safety escort']
  },
  {
    icon: 'mdi-school',
    title: 'Relationship Coaching',
    description: 'Expert relationship coaching to help you build lasting, meaningful connections.',
    features: ['1-on-1 coaching', 'Communication skills', 'Cultural training', 'Confidence building']
  },
  {
    icon: 'mdi-translate',
    title: 'Translation Service',
    description: 'Professional translation services to bridge language barriers in communications.',
    features: ['Real-time translation', 'Cultural context', 'Voice translation', 'Document translation']
  }
])

// Pricing plans
const pricingPlans = ref([
  {
    name: 'Basic',
    price: 'Free',
    period: 'Forever',
    description: 'Perfect for getting started and exploring our platform',
    color: 'grey',
    popular: false,
    features: [
      'Create profile',
      'Browse profiles',
      'Basic search filters',
      'Send 5 messages/month',
      'View profile photos',
      'Basic customer support'
    ],
    limitations: [
      'Limited messaging',
      'No video chat',
      'Basic matching only'
    ]
  },
  {
    name: 'Premium',
    price: '$29',
    period: 'per month',
    description: 'Most popular choice for serious relationship seekers',
    color: 'primary',
    popular: true,
    features: [
      'Everything in Basic',
      'Unlimited messaging',
      'Advanced search filters',
      'Video chat access',
      'See who liked you',
      'Priority customer support',
      'Profile boost',
      'Read receipts'
    ],
    limitations: []
  },
  {
    name: 'Elite',
    price: '$79',
    period: 'per month',
    description: 'Premium experience with personal matchmaking service',
    color: 'secondary',
    popular: false,
    features: [
      'Everything in Premium',
      'Personal matchmaker',
      'Background verification',
      'Relationship coaching',
      'Date planning service',
      'Translation assistance',
      'VIP customer support',
      'Success guarantee'
    ],
    limitations: []
  }
])

// Add-on services
const addOnServices = ref([
  {
    icon: 'mdi-shield-check',
    title: 'Premium Verification',
    price: '$19',
    description: 'Enhanced background check and identity verification'
  },
  {
    icon: 'mdi-account-tie',
    title: 'Personal Stylist',
    price: '$49',
    description: 'Professional photo shoot and profile optimization'
  },
  {
    icon: 'mdi-gift',
    title: 'Gift Delivery',
    price: '$25',
    description: 'Send flowers or gifts to your matches'
  },
  {
    icon: 'mdi-airplane',
    title: 'Travel Assistance',
    price: '$99',
    description: 'Help with travel arrangements for meetings'
  }
])

const selectedPlan = ref('Premium')
</script>

<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container>
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="8">
            <h1 class="hero-title">Our Services & Pricing</h1>
            <p class="hero-subtitle">
              Comprehensive relationship services designed to help you find lasting love. 
              From profile creation to wedding planning, we're with you every step of the way.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Services Overview -->
    <section class="services-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="section-title">What We Offer</h2>
          <p class="section-subtitle">
            Professional services to enhance your journey to finding love
          </p>
        </div>
        <v-row>
          <v-col
            v-for="service in services"
            :key="service.title"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="service-card h-100" elevation="8">
              <v-card-text class="pa-8">
                <div class="service-icon-container">
                  <v-icon :icon="service.icon" size="64" color="primary"></v-icon>
                </div>
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-description">{{ service.description }}</p>
                <v-divider class="my-4"></v-divider>
                <div class="service-features">
                  <div
                    v-for="feature in service.features"
                    :key="feature"
                    class="feature-item"
                  >
                    <v-icon icon="mdi-check-circle" size="16" color="success" class="mr-2"></v-icon>
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Pricing Plans -->
    <section class="pricing-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="section-title">Choose Your Plan</h2>
          <p class="section-subtitle">
            Select the perfect plan for your relationship goals
          </p>
        </div>
        <v-row justify="center">
          <v-col
            v-for="plan in pricingPlans"
            :key="plan.name"
            cols="12"
            md="4"
          >
            <v-card
              :class="{
                'pricing-card': true,
                'popular-plan': plan.popular,
                'h-100': true
              }"
              :elevation="plan.popular ? 16 : 8"
            >
              <div v-if="plan.popular" class="popular-badge">
                <v-chip color="primary" variant="elevated" size="small">
                  <v-icon icon="mdi-star" start></v-icon>
                  Most Popular
                </v-chip>
              </div>
              
              <v-card-text class="pa-8 text-center">
                <h3 class="plan-name">{{ plan.name }}</h3>
                <div class="plan-price">
                  <span class="price">{{ plan.price }}</span>
                  <span v-if="plan.period !== 'Forever'" class="period">{{ plan.period }}</span>
                </div>
                <p class="plan-description">{{ plan.description }}</p>
                
                <v-btn
                  :color="plan.popular ? 'primary' : 'secondary'"
                  :variant="plan.popular ? 'elevated' : 'outlined'"
                  size="large"
                  block
                  class="mb-6"
                  @click="selectedPlan = plan.name"
                >
                  {{ plan.price === 'Free' ? 'Get Started' : 'Choose Plan' }}
                </v-btn>
                
                <v-divider class="mb-6"></v-divider>
                
                <div class="plan-features">
                  <div
                    v-for="feature in plan.features"
                    :key="feature"
                    class="feature-item"
                  >
                    <v-icon icon="mdi-check" size="16" color="success" class="mr-2"></v-icon>
                    <span>{{ feature }}</span>
                  </div>
                  <div
                    v-for="limitation in plan.limitations"
                    :key="limitation"
                    class="limitation-item"
                  >
                    <v-icon icon="mdi-close" size="16" color="error" class="mr-2"></v-icon>
                    <span class="text-medium-emphasis">{{ limitation }}</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Add-on Services -->
    <section class="addons-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="section-title">Premium Add-ons</h2>
          <p class="section-subtitle">
            Enhance your experience with our premium services
          </p>
        </div>
        <v-row>
          <v-col
            v-for="addon in addOnServices"
            :key="addon.title"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card class="addon-card text-center" elevation="6">
              <v-card-text class="pa-6">
                <div class="addon-icon-container">
                  <v-icon :icon="addon.icon" size="48" color="primary"></v-icon>
                </div>
                <h4 class="addon-title">{{ addon.title }}</h4>
                <div class="addon-price">{{ addon.price }}</div>
                <p class="addon-description">{{ addon.description }}</p>
                <v-btn
                  variant="outlined"
                  size="small"
                  color="primary"
                  class="mt-2"
                >
                  Add to Plan
                </v-btn>
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
        </div>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-expansion-panels variant="accordion" class="faq-panels">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  What's included in the Premium plan?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  The Premium plan includes unlimited messaging, video chat access, advanced search filters, 
                  priority support, and the ability to see who liked your profile. Perfect for serious 
                  relationship seekers.
                </v-expansion-panel-text>
              </v-expansion-panel>
              
              <v-expansion-panel>
                <v-expansion-panel-title>
                  How does the personal matchmaking work?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Our Elite plan includes a dedicated personal matchmaker who works with you to understand 
                  your preferences, lifestyle, and relationship goals. They hand-select compatible matches 
                  and provide ongoing support throughout your journey.
                </v-expansion-panel-text>
              </v-expansion-panel>
              
              <v-expansion-panel>
                <v-expansion-panel-title>
                  Is there a money-back guarantee?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Yes! We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied 
                  with our service within the first 30 days, we'll provide a full refund.
                </v-expansion-panel-text>
              </v-expansion-panel>
              
              <v-expansion-panel>
                <v-expansion-panel-title>
                  Can I upgrade or downgrade my plan?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect 
                  immediately, and we'll prorate any charges or credits to your account.
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
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
                <h2 class="cta-title">Ready to Start Your Journey?</h2>
                <p class="cta-description">
                  Join thousands of people who have found love through our platform. 
                  Your perfect match is waiting for you.
                </p>
                <div class="cta-buttons">
                  <v-btn size="x-large" color="primary" class="cta-primary" prepend-icon="mdi-heart">
                    Start Free Trial
                  </v-btn>
                  <v-btn size="large" variant="outlined" class="cta-secondary ml-4" prepend-icon="mdi-phone">
                    Contact Sales
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
.services-page {
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

/* Services Section */
.services-section {
  padding: 100px 0;
  background: white;
}

.service-card {
  border-radius: 20px;
  transition: all 0.4s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15) !important;
}

.service-icon-container {
  text-align: center;
  margin-bottom: 24px;
}

.service-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
}

.service-description {
  color: #666;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 0;
}

.service-features {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.feature-item {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
}

/* Pricing Section */
.pricing-section {
  padding: 100px 0;
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
}

.pricing-card {
  border-radius: 24px;
  transition: all 0.4s ease;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.popular-plan {
  transform: scale(1.05);
  border: 2px solid #667eea;
  background: linear-gradient(145deg, #fff 0%, #f8f9ff 100%);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.plan-name {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
}

.plan-price {
  margin-bottom: 16px;
}

.price {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.period {
  font-size: 1rem;
  color: #666;
  margin-left: 8px;
}

.plan-description {
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
}

.plan-features {
  text-align: left;
}

.plan-features .feature-item {
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.limitation-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

/* Add-ons Section */
.addons-section {
  padding: 100px 0;
  background: white;
}

.addon-card {
  border-radius: 16px;
  transition: all 0.3s ease;
  height: 100%;
}

.addon-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
}

.addon-icon-container {
  margin-bottom: 16px;
}

.addon-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.addon-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 12px;
}

.addon-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0;
}

/* FAQ Section */
.faq-section {
  padding: 100px 0;
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
}

.faq-panels {
  border-radius: 16px;
  overflow: hidden;
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
  
  .popular-plan {
    transform: none;
    margin-bottom: 24px;
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
  
  .price {
    font-size: 2.5rem;
  }
  
  .plan-name {
    font-size: 1.5rem;
  }
  
  .services-section,
  .pricing-section,
  .addons-section,
  .faq-section {
    padding: 60px 0;
  }
}

/* Dark theme support */
.v-theme--dark .hero-section,
.v-theme--dark .pricing-section,
.v-theme--dark .faq-section {
  background: linear-gradient(145deg, #121212 0%, #1e1e1e 100%);
}

.v-theme--dark .services-section,
.v-theme--dark .addons-section {
  background: #121212;
}

.v-theme--dark .hero-subtitle,
.v-theme--dark .section-subtitle {
  color: #aaa;
}

.v-theme--dark .service-title,
.v-theme--dark .plan-name,
.v-theme--dark .addon-title {
  color: #fff;
}

.v-theme--dark .service-description,
.v-theme--dark .plan-description,
.v-theme--dark .addon-description {
  color: #ccc;
}

.v-theme--dark .feature-item {
  color: #bbb;
}
</style>