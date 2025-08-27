<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Meta tags for SEO
useHead({
  title: 'Videos - Beloved Laos',
  meta: [
    { name: 'description', content: 'Discover beautiful videos showcasing Laotian culture, traditions, and personal stories from our community members.' }
  ]
})

// Video data
const videos = ref([
  {
    id: 1,
    title: 'Traditional Laotian Dance Performance',
    description: 'Experience the elegance of traditional Lao dance with Soulida, showcasing centuries-old cultural movements.',
    thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop',
    duration: '3:45',
    views: '2.1k',
    uploadDate: '2 days ago',
    category: 'Culture',
    author: 'Soulida',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    title: 'Cooking Traditional Laap',
    description: 'Learn how to prepare authentic Laotian Laap from Kham, a traditional dish perfect for family gatherings.',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    duration: '8:22',
    views: '4.3k',
    uploadDate: '5 days ago',
    category: 'Cooking',
    author: 'Kham',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    title: 'Life in Luang Prabang',
    description: 'Join Noy as she explores the beautiful UNESCO World Heritage city and shares daily life experiences.',
    thumbnail: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73d0e?w=600&h=400&fit=crop',
    duration: '6:18',
    views: '1.8k',
    uploadDate: '1 week ago',
    category: 'Lifestyle',
    author: 'Noy',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 4,
    title: 'Lao Language Lessons',
    description: 'Basic Lao language phrases for travelers and those interested in learning our beautiful language.',
    thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    duration: '12:05',
    views: '7.2k',
    uploadDate: '1 week ago',
    category: 'Education',
    author: 'Mali',
    authorAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 5,
    title: 'Festival Celebrations',
    description: 'Highlights from the annual That Luang Festival celebration in Vientiane with beautiful ceremonies.',
    thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop',
    duration: '9:33',
    views: '3.5k',
    uploadDate: '2 weeks ago',
    category: 'Culture',
    author: 'Vieng',
    authorAvatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 6,
    title: 'Mekong River Adventures',
    description: 'Explore the mighty Mekong River and discover the natural beauty surrounding our homeland.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    duration: '7:41',
    views: '2.9k',
    uploadDate: '2 weeks ago',
    category: 'Travel',
    author: 'Dalavan',
    authorAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 7,
    title: 'Traditional Crafts Workshop',
    description: 'Watch Phonepadith demonstrate traditional Lao textile weaving techniques passed down through generations.',
    thumbnail: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=400&fit=crop',
    duration: '11:27',
    views: '1.6k',
    uploadDate: '3 weeks ago',
    category: 'Culture',
    author: 'Phonepadith',
    authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 8,
    title: 'Modern Laotian Music',
    description: 'Boua performs contemporary Lao music blending traditional instruments with modern arrangements.',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    duration: '4:52',
    views: '5.1k',
    uploadDate: '3 weeks ago',
    category: 'Music',
    author: 'Boua',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 9,
    title: 'Fashion & Style Tips',
    description: 'Seng shares modern fashion tips while honoring traditional Lao clothing and cultural elements.',
    thumbnail: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
    duration: '6:09',
    views: '3.8k',
    uploadDate: '1 month ago',
    category: 'Fashion',
    author: 'Seng',
    authorAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 10,
    title: 'Family Values & Traditions',
    description: 'A heartwarming discussion about the importance of family in Lao culture and maintaining traditions.',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
    duration: '8:15',
    views: '6.7k',
    uploadDate: '1 month ago',
    category: 'Lifestyle',
    author: 'Mali',
    authorAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face'
  }
])

// Reactive data
const selectedCategory = ref('All')
const searchQuery = ref('')
const isLoading = ref(false)
const showLoadMore = ref(true)

// Categories for filtering
const categories = ref([
  'All', 'Culture', 'Lifestyle', 'Cooking', 'Education', 'Travel', 'Music', 'Fashion'
])

// Computed filtered videos
const filteredVideos = computed(() => {
  let result = videos.value

  // Filter by category
  if (selectedCategory.value !== 'All') {
    result = result.filter(video => video.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(video => 
      video.title.toLowerCase().includes(query) ||
      video.description.toLowerCase().includes(query) ||
      video.author.toLowerCase().includes(query)
    )
  }

  return result
})

// Functions
const playVideo = (videoId: number) => {
  // In a real app, this would navigate to video player or open modal
  console.log(`Playing video ${videoId}`)
  // For now, just show a snackbar
  // You could navigate to a video detail page: navigateTo(`/videos/${videoId}`)
}

const loadMoreVideos = () => {
  isLoading.value = true
  
  // Simulate loading more videos
  setTimeout(() => {
    // In a real app, you would fetch more videos from API
    isLoading.value = false
    showLoadMore.value = false
  }, 1500)
}

const formatNumber = (num: string) => {
  const number = parseFloat(num.replace('k', '')) * 1000
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}k`
  }
  return number.toString()
}

// Helper function for category colors
const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'Culture': 'deep-purple',
    'Lifestyle': 'teal',
    'Cooking': 'orange',
    'Education': 'indigo',
    'Travel': 'green',
    'Music': 'pink',
    'Fashion': 'purple'
  }
  return colors[category] || 'primary'
}
</script>

<template>
  <div class="videos-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <v-container class="hero-content">
          <v-row align="center" justify="center" class="text-center">
            <v-col cols="12" md="8">
              <h1 class="hero-title mb-4">
                <v-icon icon="mdi-play-circle" class="me-3" size="large" />
                Videos Gallery
              </h1>
              <p class="hero-subtitle mb-6">
                Discover the beauty of Laotian culture through authentic stories, 
                traditions, and personal experiences shared by our community.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Search and Filters Section -->
    <section class="filters-section">
      <v-container>
        <v-row justify="center" class="mb-6">
          <v-col cols="12" md="8">
            <v-text-field
              v-model="searchQuery"
              prepend-inner-icon="mdi-magnify"
              label="Search videos..."
              variant="outlined"
              rounded
              clearable
              class="search-field"
            />
          </v-col>
        </v-row>
        
        <v-row justify="center">
          <v-col cols="12" class="text-center">
            <v-chip-group
              v-model="selectedCategory"
              selected-class="category-chip-selected"
              class="category-chips"
            >
              <v-chip
                v-for="category in categories"
                :key="category"
                :value="category"
                class="category-chip"
                size="large"
              >
                {{ category }}
              </v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Videos Grid Section -->
    <section class="videos-section">
      <v-container>
        <v-row>
          <v-col
            v-for="video in filteredVideos"
            :key="video.id"
            cols="12"
            sm="6"
            md="4"
            lg="4"
          >
            <v-card
              class="video-card mb-4"
              elevation="0"
              @click="playVideo(video.id)"
            >
              <div class="video-thumbnail">
                <v-img
                  :src="video.thumbnail"
                  height="220"
                  cover
                  class="thumbnail-image"
                >
                  <div class="play-overlay">
                    <v-btn
                      icon
                      size="large"
                      class="play-button"
                    >
                      <v-icon size="32">mdi-play</v-icon>
                    </v-btn>
                  </div>
                  
                  <div class="video-duration">
                    {{ video.duration }}
                  </div>
                </v-img>
              </div>

              <v-card-text class="video-content">
                <div class="video-header mb-3">
                  <v-avatar size="40" class="author-avatar me-3">
                    <v-img :src="video.authorAvatar" />
                  </v-avatar>
                  <div class="video-meta flex-grow-1">
                    <h3 class="video-title">{{ video.title }}</h3>
                    <div class="video-stats">
                      <span class="author-name">{{ video.author }}</span>
                      <span class="separator">•</span>
                      <span class="views">{{ video.views }} views</span>
                      <span class="separator">•</span>
                      <span class="upload-date">{{ video.uploadDate }}</span>
                    </div>
                  </div>
                </div>

                <p class="video-description">
                  {{ video.description }}
                </p>

                <div class="video-footer">
                  <v-chip
                    :color="getCategoryColor(video.category)"
                    variant="tonal"
                    size="small"
                    class="category-tag"
                  >
                    {{ video.category }}
                  </v-chip>

                  <div class="video-actions">
                    <v-btn
                      icon
                      variant="text"
                      size="small"
                      class="action-btn"
                    >
                      <v-icon>mdi-thumb-up-outline</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      variant="text"
                      size="small"
                      class="action-btn"
                    >
                      <v-icon>mdi-share-outline</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      variant="text"
                      size="small"
                      class="action-btn"
                    >
                      <v-icon>mdi-bookmark-outline</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- No Results Message -->
        <v-row v-if="filteredVideos.length === 0" justify="center">
          <v-col cols="12" class="text-center">
            <div class="no-results">
              <v-icon size="64" class="mb-4">mdi-video-off-outline</v-icon>
              <h3>No videos found</h3>
              <p>Try adjusting your search terms or category filters</p>
            </div>
          </v-col>
        </v-row>

        <!-- Load More Button -->
        <v-row v-if="showLoadMore && filteredVideos.length > 0" justify="center" class="mt-8">
          <v-col cols="auto">
            <v-btn
              :loading="isLoading"
              size="large"
              class="load-more-btn"
              @click="loadMoreVideos"
            >
              <v-icon start>mdi-plus</v-icon>
              Load More Videos
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>



<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
}

.hero-background {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 400px;
  display: flex;
  align-items: center;
  width: 100%;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-subtitle {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Filters Section */
.filters-section {
  padding: 60px 0 40px;
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
}

.search-field :deep(.v-field) {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 28px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.category-chips {
  justify-content: center;
}

.category-chip {
  margin: 4px 8px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.category-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.category-chip-selected {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  border-color: #667eea;
}

/* Videos Section */
.videos-section {
  padding: 40px 0 80px;
  background: #f8f9fa;
}

.video-card {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
  cursor: pointer;
  overflow: hidden;
}

.video-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.video-thumbnail {
  position: relative;
  overflow: hidden;
}

.thumbnail-image {
  transition: transform 0.4s ease;
}

.video-card:hover .thumbnail-image {
  transform: scale(1.05);
}

.play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-card:hover .play-overlay {
  opacity: 1;
}

.play-button {
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
  color: #667eea !important;
}

.video-duration {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
}

.video-content {
  padding: 20px;
}

.video-header {
  display: flex;
  align-items: flex-start;
}

.author-avatar {
  border: 2px solid #667eea;
}

.video-meta {
  min-width: 0;
}

.video-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-stats {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: #666;
}

.author-name {
  font-weight: 500;
  color: #667eea;
}

.separator {
  color: #ccc;
}

.video-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-tag {
  font-size: 0.8rem;
}

.video-actions {
  display: flex;
  gap: 4px;
}

.action-btn {
  color: #666;
}

.action-btn:hover {
  color: #667eea;
}

/* Load More Button */
.load-more-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white;
  text-transform: none;
  font-weight: 600;
  border-radius: 28px;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.load-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
}

/* No Results */
.no-results {
  padding: 60px 20px;
  color: #666;
}

/* Responsive Design */
@media (max-width: 960px) {
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .filters-section {
    padding: 40px 0 30px;
  }
  
  .videos-section {
    padding: 30px 0 60px;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.2rem;
    flex-direction: column;
    gap: 8px;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .category-chip {
    margin: 2px 4px;
  }
  
  .video-content {
    padding: 16px;
  }
  
  .filters-section {
    padding: 30px 0 20px;
  }
}

/* Dark theme support */
.v-theme--dark .filters-section {
  background: linear-gradient(145deg, #1a1a1a 0%, #2d2d30 100%);
}

.v-theme--dark .videos-section {
  background: #121212;
}

.v-theme--dark .video-card {
  background: rgba(30, 30, 30, 0.95);
  border-color: rgba(255, 255, 255, 0.1);
}

.v-theme--dark .video-title {
  color: #fff;
}

.v-theme--dark .video-description {
  color: #ccc;
}

.v-theme--dark .video-stats {
  color: #aaa;
}

.v-theme--dark .action-btn {
  color: #aaa;
}

.v-theme--dark .no-results {
  color: #aaa;
}
</style>