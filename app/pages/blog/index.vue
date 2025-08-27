<script setup lang="ts">
import { ref, computed } from 'vue'

// Define types
interface Comment {
  id: number
  author: {
    name: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
  isLiked: boolean
}

interface BlogPost {
  id: number
  author: {
    name: string
    avatar: string
    location: string
  }
  content: string
  image: string | null
  timestamp: string
  likes: number
  isLiked: boolean
  comments: Comment[]
  showComments: boolean
  newComment: string
}

// Post creation
const newPost = ref({
  content: '',
  image: null as File | null
})

const isCreatingPost = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

// Blog posts data
const blogPosts = ref<BlogPost[]>([
  {
    id: 1,
    author: {
      name: 'Soulida Phonesavanh',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      location: 'Vientiane, Laos'
    },
    content: 'Just visited the beautiful Pha That Luang temple today! The golden stupa looks absolutely stunning in the sunset. Feeling blessed to live in such a culturally rich country. 🙏✨ #Laos #Culture #Buddhist #Temple',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    timestamp: '2 hours ago',
    likes: 24,
    isLiked: false,
    comments: [
      {
        id: 1,
        author: {
          name: 'Noy Vongphachanh',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
        },
        content: 'So beautiful! I love visiting temples during sunset too 😍',
        timestamp: '1 hour ago',
        likes: 3,
        isLiked: false
      },
      {
        id: 2,
        author: {
          name: 'Kham Sisouphan',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        },
        content: 'This is why I love our country! Thanks for sharing ❤️',
        timestamp: '45 minutes ago',
        likes: 1,
        isLiked: true
      }
    ],
    showComments: false,
    newComment: ''
  },
  {
    id: 2,
    author: {
      name: 'Mali Chanthavilay',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face',
      location: 'Luang Prabang, Laos'
    },
    content: 'Cooking traditional Laotian larb today! Nothing beats the authentic flavors of home. Who else loves spicy food? 🌶️🥗 Recipe in comments!',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop',
    timestamp: '4 hours ago',
    likes: 37,
    isLiked: true,
    comments: [
      {
        id: 3,
        author: {
          name: 'Vieng Somsanith',
          avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face'
        },
        content: 'Please share the recipe! My mouth is watering 😋',
        timestamp: '3 hours ago',
        likes: 5,
        isLiked: false
      }
    ],
    showComments: false,
    newComment: ''
  },
  {
    id: 3,
    author: {
      name: 'Phonepadith Keovilay',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      location: 'Champasak, Laos'
    },
    content: 'Weekend getaway to the Mekong River! The sunrise view is absolutely breathtaking. Sometimes we need to disconnect and enjoy nature\'s beauty. Perfect way to recharge for the week ahead! 🌅🚤',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    timestamp: '1 day ago',
    likes: 52,
    isLiked: false,
    comments: [
      {
        id: 4,
        author: {
          name: 'Boua Xayavong',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
        },
        content: 'This looks amazing! Need to plan a trip there soon',
        timestamp: '18 hours ago',
        likes: 2,
        isLiked: false
      },
      {
        id: 5,
        author: {
          name: 'Dalavan Phouthavong',
          avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face'
        },
        content: 'The Mekong is truly magical at sunrise! Great shot! 📸',
        timestamp: '12 hours ago',
        likes: 1,
        isLiked: true
      }
    ],
    showComments: true,
    newComment: ''
  }
])

// Functions
const createPost = () => {
  if (!newPost.value.content.trim()) return
  
  const post: BlogPost = {
    id: Date.now(),
    author: {
      name: 'You',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      location: 'Vientiane, Laos'
    },
    content: newPost.value.content,
    image: newPost.value.image ? URL.createObjectURL(newPost.value.image) : null,
    timestamp: 'Just now',
    likes: 0,
    isLiked: false,
    comments: [],
    showComments: false,
    newComment: ''
  }
  
  blogPosts.value.unshift(post)
  newPost.value.content = ''
  newPost.value.image = null
  isCreatingPost.value = false
}

const toggleLike = (post: BlogPost) => {
  post.isLiked = !post.isLiked
  post.likes += post.isLiked ? 1 : -1
}

const toggleCommentLike = (comment: Comment) => {
  comment.isLiked = !comment.isLiked
  comment.likes += comment.isLiked ? 1 : -1
}

const toggleComments = (post: BlogPost) => {
  post.showComments = !post.showComments
}

const addComment = (post: BlogPost) => {
  if (!post.newComment.trim()) return
  
  const comment: Comment = {
    id: Date.now(),
    author: {
      name: 'You',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    content: post.newComment,
    timestamp: 'Just now',
    likes: 0,
    isLiked: false
  }
  
  post.comments.push(comment)
  post.newComment = ''
  post.showComments = true
}

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    newPost.value.image = target.files[0]
  }
}

const removeImage = () => {
  newPost.value.image = null
}

// Computed
const sortedPosts = computed(() => {
  return [...blogPosts.value].sort((a, b) => b.id - a.id)
})

const previewImageUrl = computed(() => {
  return newPost.value.image ? URL.createObjectURL(newPost.value.image) : null
})
</script>

<template>
  <div class="blog-page">
    <v-container class="py-8">
      <v-row justify="center">
        <v-col cols="12"  >
          
          <!-- Page Header -->
          <div class="page-header mb-8">
            <h1 class="page-title">Community Blog</h1>
            <p class="page-subtitle">
              Share your experiences, connect with others, and discover beautiful Laos through our community stories
            </p>
          </div>

          <!-- Post Creation Card -->
          <v-card class="post-creator mb-6" elevation="8">
            <v-card-text class="pa-6">
              <div class="creator-header">
                <v-avatar size="50" class="mr-4">
                  <v-img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"></v-img>
                </v-avatar>
                <v-text-field
                  v-model="newPost.content"
                  placeholder="What's on your mind? Share your story..."
                  variant="outlined"
                  hide-details
                  class="post-input"
                  @focus="isCreatingPost = true"
                  multiline
                  rows="3"
                ></v-text-field>
              </div>

              <!-- Image Preview -->
              <div v-if="newPost.image && previewImageUrl" class="image-preview mt-4">
                <v-img
                  :src="previewImageUrl"
                  height="200"
                  cover
                  class="rounded-lg"
                ></v-img>
                <v-btn
                  icon
                  size="small"
                  class="remove-image-btn"
                  @click="removeImage"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>

              <!-- Post Actions -->
              <div v-if="isCreatingPost || newPost.content" class="post-actions mt-4">
                <v-divider class="mb-4"></v-divider>
                <div class="d-flex justify-space-between align-center">
                  <div class="action-buttons">
                    <input
                      type="file"
                      accept="image/*"
                      style="display: none"
                      ref="fileInput"
                      @change="handleImageUpload"
                    >
                    <v-btn
                      variant="text"
                      prepend-icon="mdi-image"
                      @click="fileInput?.click()"
                      class="action-btn"
                    >
                      Photo
                    </v-btn>
                    <v-btn
                      variant="text"
                      prepend-icon="mdi-emoticon-happy"
                      class="action-btn"
                    >
                      Feeling
                    </v-btn>
                    <v-btn
                      variant="text"
                      prepend-icon="mdi-map-marker"
                      class="action-btn"
                    >
                      Location
                    </v-btn>
                  </div>
                  <v-btn
                    color="primary"
                    :disabled="!newPost.content.trim()"
                    @click="createPost"
                    class="post-btn"
                  >
                    Post
                  </v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>

          <!-- Blog Posts Feed -->
          <div class="posts-feed">
            <v-card
              v-for="post in sortedPosts"
              :key="post.id"
              class="post-card mb-6"
              elevation="8"
            >
              <!-- Post Header -->
              <v-card-text class="post-header pb-2">
                <div class="d-flex align-center">
                  <v-avatar size="50" class="mr-3">
                    <v-img :src="post.author.avatar"></v-img>
                  </v-avatar>
                  <div class="author-info flex-grow-1">
                    <h3 class="author-name">{{ post.author.name }}</h3>
                    <div class="post-meta">
                      <span class="timestamp">{{ post.timestamp }}</span>
                      <v-icon size="4" class="mx-2">mdi-circle</v-icon>
                      <span class="location">{{ post.author.location }}</span>
                    </div>
                  </div>
                  <v-btn icon variant="text" size="small">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </div>
              </v-card-text>

              <!-- Post Content -->
              <v-card-text class="post-content py-0">
                <p class="content-text">{{ post.content }}</p>
              </v-card-text>

              <!-- Post Image -->
              <div v-if="post.image" class="post-image">
                <v-img
                  :src="post.image"
                  aspect-ratio="16/9"
                  cover
                  class="clickable-image"
                ></v-img>
              </div>

              <!-- Post Stats -->
              <v-card-text class="post-stats py-2">
                <div class="d-flex justify-space-between align-center">
                  <div class="stats-left">
                    <span class="like-count">
                      <v-icon size="16" color="primary" class="mr-1">mdi-heart</v-icon>
                      {{ post.likes }} {{ post.likes === 1 ? 'like' : 'likes' }}
                    </span>
                  </div>
                  <div class="stats-right">
                    <span class="comment-count" @click="toggleComments(post)">
                      {{ post.comments.length }} {{ post.comments.length === 1 ? 'comment' : 'comments' }}
                    </span>
                  </div>
                </div>
              </v-card-text>

              <v-divider></v-divider>

              <!-- Post Actions -->
              <v-card-actions class="post-actions-bar">
                <v-btn
                  variant="text"
                  :color="post.isLiked ? 'primary' : 'default'"
                  :prepend-icon="post.isLiked ? 'mdi-heart' : 'mdi-heart-outline'"
                  @click="toggleLike(post)"
                  class="action-button"
                >
                  {{ post.isLiked ? 'Liked' : 'Like' }}
                </v-btn>
                <v-btn
                  variant="text"
                  prepend-icon="mdi-comment-outline"
                  @click="toggleComments(post)"
                  class="action-button"
                >
                  Comment
                </v-btn>
                <v-btn
                  variant="text"
                  prepend-icon="mdi-share"
                  class="action-button"
                >
                  Share
                </v-btn>
              </v-card-actions>

              <!-- Comments Section -->
              <div v-if="post.showComments" class="comments-section">
                <v-divider></v-divider>
                
                <!-- Existing Comments -->
                <div class="existing-comments">
                  <div
                    v-for="comment in post.comments"
                    :key="comment.id"
                    class="comment-item"
                  >
                    <v-avatar size="32" class="comment-avatar">
                      <v-img :src="comment.author.avatar"></v-img>
                    </v-avatar>
                    <div class="comment-content">
                      <div class="comment-bubble">
                        <h4 class="comment-author">{{ comment.author.name }}</h4>
                        <p class="comment-text">{{ comment.content }}</p>
                      </div>
                      <div class="comment-actions">
                        <span class="comment-timestamp">{{ comment.timestamp }}</span>
                        <v-btn
                          variant="text"
                          size="x-small"
                          :color="comment.isLiked ? 'primary' : 'default'"
                          @click="toggleCommentLike(comment)"
                        >
                          {{ comment.isLiked ? 'Liked' : 'Like' }}
                        </v-btn>
                        <span v-if="comment.likes > 0" class="comment-likes">
                          {{ comment.likes }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Add Comment -->
                <div class="add-comment">
                  <v-avatar size="32" class="mr-3">
                    <v-img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"></v-img>
                  </v-avatar>
                  <div class="comment-input-container">
                    <v-text-field
                      v-model="post.newComment"
                      placeholder="Write a comment..."
                      variant="outlined"
                      density="compact"
                      hide-details
                      @keyup.enter="addComment(post)"
                      class="comment-input"
                    >
                      <template v-slot:append-inner>
                        <v-btn
                          icon
                          size="small"
                          :disabled="!post.newComment.trim()"
                          @click="addComment(post)"
                          color="primary"
                        >
                          <v-icon size="16">mdi-send</v-icon>
                        </v-btn>
                      </template>
                    </v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <!-- Load More Button -->
          <div class="text-center mt-8">
            <v-btn
              variant="outlined"
              size="large"
              prepend-icon="mdi-refresh"
              class="load-more-btn"
            >
              Load More Posts
            </v-btn>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.blog-page {
  min-height: 100vh;
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
}

/* Page Header */
.page-header {
  text-align: center;
  padding: 20px 0;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Post Creator */
.post-creator {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.creator-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.post-input :deep(.v-field) {
  border-radius: 25px;
}

.image-preview {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.remove-image-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.7) !important;
  color: white;
}

.post-actions {
  margin-top: 16px;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.action-btn {
  text-transform: none;
  font-weight: 500;
  border-radius: 12px;
}

.post-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white;
  text-transform: none;
  font-weight: 600;
  border-radius: 20px;
  padding: 0 24px;
}

/* Post Cards */
.post-card {
  border-radius: 20px;
  background: white;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
}

/* Post Header */
.post-header {
  padding: 20px 24px 8px;
}

.author-name {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.post-meta {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #666;
  margin-top: 2px;
}

.timestamp, .location {
  font-size: 0.85rem;
}

/* Post Content */
.post-content {
  padding: 8px 24px 16px;
}

.content-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
  white-space: pre-wrap;
}

/* Post Image */
.post-image {
  margin: 0;
  cursor: pointer;
}

.clickable-image {
  transition: transform 0.3s ease;
}

.clickable-image:hover {
  transform: scale(1.02);
}

/* Post Stats */
.post-stats {
  padding: 8px 24px;
}

.like-count, .comment-count {
  font-size: 0.85rem;
  color: #666;
  cursor: pointer;
}

.comment-count:hover {
  text-decoration: underline;
}

/* Post Actions Bar */
.post-actions-bar {
  padding: 4px 12px;
}

.action-button {
  flex: 1;
  text-transform: none;
  font-weight: 500;
  border-radius: 8px;
}

/* Comments Section */
.comments-section {
  background: #f8f9fa;
}

.existing-comments {
  padding: 16px 24px 8px;
}

.comment-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.comment-avatar {
  flex-shrink: 0;
  margin-top: 4px;
}

.comment-content {
  flex: 1;
}

.comment-bubble {
  background: white;
  border-radius: 18px;
  padding: 12px 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.comment-author {
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
}

.comment-text {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #333;
  margin: 0;
}

.comment-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
  padding-left: 16px;
}

.comment-timestamp {
  font-size: 0.75rem;
  color: #666;
}

.comment-likes {
  font-size: 0.75rem;
  color: #666;
}

/* Add Comment */
.add-comment {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px 16px;
}

.comment-input-container {
  flex: 1;
}

.comment-input :deep(.v-field) {
  border-radius: 20px;
  background: white;
}

/* Load More Button */
.load-more-btn {
  border-radius: 25px;
  text-transform: none;
  font-weight: 600;
  padding: 0 32px;
  height: 48px;
}

/* Responsive Design */
@media (max-width: 960px) {
  .page-title {
    font-size: 2rem;
  }
  
  .post-header,
  .post-content,
  .post-stats {
    padding-left: 16px;
    padding-right: 16px;
  }
  
  .existing-comments,
  .add-comment {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (max-width: 600px) {
  .page-title {
    font-size: 1.8rem;
  }
  
  .creator-header {
    flex-direction: column;
    gap: 12px;
  }
  
  .action-buttons {
    flex-wrap: wrap;
  }
  
  .comment-item {
    gap: 8px;
  }
  
  .add-comment {
    gap: 8px;
  }
}

/* Dark theme support */
.v-theme--dark .blog-page {
  background: linear-gradient(145deg, #121212 0%, #1e1e1e 100%);
}

.v-theme--dark .post-creator,
.v-theme--dark .post-card {
  background: rgba(30, 30, 30, 0.95);
  border-color: rgba(255, 255, 255, 0.12);
}

.v-theme--dark .page-subtitle {
  color: #aaa;
}

.v-theme--dark .author-name,
.v-theme--dark .content-text {
  color: #fff;
}

.v-theme--dark .post-meta,
.v-theme--dark .like-count,
.v-theme--dark .comment-count {
  color: #aaa;
}

.v-theme--dark .comments-section {
  background: rgba(20, 20, 20, 0.5);
}

.v-theme--dark .comment-bubble {
  background: rgba(40, 40, 40, 0.9);
}

.v-theme--dark .comment-author,
.v-theme--dark .comment-text {
  color: #fff;
}
</style>