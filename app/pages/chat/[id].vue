<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

// Define interfaces
interface Profile {
  id: string
  name: string
  age: number
  avatar: string
  status: 'online' | 'offline'
  lastSeen: string
}

interface Message {
  id: number
  senderId: string
  senderName: string
  content: string
  timestamp: Date
  type: string
  status: string
}

// Get route parameters
const route = useRoute()
const profileId = route.params.id

// Profile data (this would normally come from an API)
const profiles = ref<Profile[]>([
  {
    id: '1',
    name: 'Soulida',
    age: 24,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face',
    status: 'online',
    lastSeen: 'Active now'
  },
  {
    id: '2',
    name: 'Noy',
    age: 22,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
    status: 'online',
    lastSeen: 'Active 5 minutes ago'
  },
  {
    id: '3',
    name: 'Kham',
    age: 26,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    status: 'offline',
    lastSeen: 'Active 2 hours ago'
  }
])

const selectedProfile = ref<Profile>(profiles.value.find(p => p.id === profileId) || profiles.value[0]!)

// Chat data
const currentUser = ref({
  id: 'me',
  name: 'You',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
})

// Messages data
const messages = ref<Message[]>([
  {
    id: 1,
    senderId: selectedProfile.value.id,
    senderName: selectedProfile.value.name,
    content: 'Hello! Thank you for reaching out to me. I saw your profile and I\'m interested in getting to know you better. 😊',
    timestamp: new Date(Date.now() - 3600000),
    type: 'text',
    status: 'read'
  },
  {
    id: 2,
    senderId: 'me',
    senderName: 'You',
    content: 'Hi! Nice to meet you. I\'m really impressed by your profile as well. Would you like to tell me a bit about yourself?',
    timestamp: new Date(Date.now() - 3500000),
    type: 'text',
    status: 'read'
  },
  {
    id: 3,
    senderId: selectedProfile.value.id,
    senderName: selectedProfile.value.name,
    content: 'Of course! I love dancing and I\'m very passionate about preserving our traditional Laotian culture. What about you? What are your hobbies?',
    timestamp: new Date(Date.now() - 3400000),
    type: 'text',
    status: 'read'
  },
  {
    id: 4,
    senderId: 'me',
    senderName: 'You',
    content: 'That\'s wonderful! I really admire people who are connected to their culture. I enjoy photography and traveling. Have you been to many places in Laos?',
    timestamp: new Date(Date.now() - 3300000),
    type: 'text',
    status: 'read'
  },
  {
    id: 5,
    senderId: selectedProfile.value.id,
    senderName: selectedProfile.value.name,
    content: 'Yes! I\'ve visited most provinces. Luang Prabang is my favorite - the temples there are absolutely beautiful, especially during sunset. 🌅',
    timestamp: new Date(Date.now() - 1800000),
    type: 'text',
    status: 'read'
  }
])

// Chat functionality
const newMessage = ref('')
const isTyping = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)

// Functions
const sendMessage = () => {
  if (!newMessage.value.trim()) return

  const message: Message = {
    id: Date.now(),
    senderId: 'me',
    senderName: 'You',
    content: newMessage.value,
    timestamp: new Date(),
    type: 'text',
    status: 'sent'
  }

  messages.value.push(message)
  newMessage.value = ''
  
  // Scroll to bottom
  nextTick(() => {
    scrollToBottom()
  })

  // Simulate typing indicator and response
  setTimeout(() => {
    isTyping.value = true
    setTimeout(() => {
      isTyping.value = false
      
      // Simulate auto response
      const responses = [
        'That sounds really interesting! Tell me more about that.',
        'I completely agree with you on that point.',
        'Wow, that\'s fascinating! I\'d love to hear more.',
        'You have such great taste! I think we have a lot in common.',
        'That\'s exactly how I feel too! 😊'
      ]
      
      const randomResponse: string = responses[Math.floor(Math.random() * responses.length)]!
      
      const autoResponse: Message = {
        id: Date.now() + 1,
        senderId: selectedProfile.value.id,
        senderName: selectedProfile.value.name,
        content: randomResponse,
        timestamp: new Date(),
        type: 'text',
        status: 'read'
      }
      
      messages.value.push(autoResponse)
      nextTick(() => {
        scrollToBottom()
      })
    }, 2000)
  }, 1000)
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const formatTime = (timestamp: Date) => {
  return timestamp.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

const formatDate = (timestamp: Date) => {
  const today = new Date()
  const messageDate = new Date(timestamp)
  
  if (messageDate.toDateString() === today.toDateString()) {
    return 'Today'
  } else if (messageDate.toDateString() === new Date(today.getTime() - 86400000).toDateString()) {
    return 'Yesterday'
  } else {
    return messageDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }
}

// Lifecycle
onMounted(() => {
  scrollToBottom()
})
</script>

<template>
  <div class="chat-page">
    <v-container fluid class="pa-0">
      <v-row no-gutters class="fill-height">
        <!-- Chat Header -->
        <v-col cols="12">
          <v-card class="chat-header" elevation="4">
            <v-card-text class="pa-4">
              <div class="d-flex align-center">
                <v-btn
                  icon
                  variant="text"
                  @click="$router.back()"
                  class="mr-3"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                
                <v-avatar size="50" class="mr-4">
                  <v-img :src="selectedProfile.avatar"></v-img>
                </v-avatar>
                
                <div class="profile-info flex-grow-1">
                  <h3 class="profile-name">{{ selectedProfile.name }}</h3>
                  <div class="profile-status">
                    <v-icon 
                      :color="selectedProfile.status === 'online' ? 'success' : 'grey'" 
                      size="8" 
                      class="mr-1"
                    >
                      mdi-circle
                    </v-icon>
                    <span class="status-text">{{ selectedProfile.lastSeen }}</span>
                  </div>
                </div>
                
                <div class="chat-actions">
                  <v-btn icon variant="text" size="small" class="mr-2">
                    <v-icon>mdi-phone</v-icon>
                  </v-btn>
                  <v-btn icon variant="text" size="small" class="mr-2">
                    <v-icon>mdi-video</v-icon>
                  </v-btn>
                  <v-btn icon variant="text" size="small">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Messages Area -->
        <v-col cols="12" class="messages-section">
          <div class="messages-container" ref="messagesContainer">
            <div class="messages-content">
              <!-- Date Separator -->
              <div class="date-separator">
                <span class="date-text">{{ formatDate(messages[0]?.timestamp || new Date()) }}</span>
              </div>

              <!-- Messages -->
              <div
                v-for="(message, index) in messages"
                :key="message.id"
                :class="{
                  'message-group': true,
                  'my-message': message.senderId === 'me',
                  'other-message': message.senderId !== 'me'
                }"
              >
                <div class="message-wrapper">
                  <v-avatar 
                    v-if="message.senderId !== 'me'" 
                    size="32" 
                    class="message-avatar"
                  >
                    <v-img :src="selectedProfile.avatar"></v-img>
                  </v-avatar>
                  
                  <div class="message-bubble-container">
                    <div class="message-bubble">
                      <p class="message-content">{{ message.content }}</p>
                      <div class="message-meta">
                        <span class="message-time">{{ formatTime(message.timestamp) }}</span>
                        <v-icon 
                          v-if="message.senderId === 'me'"
                          :color="message.status === 'read' ? 'primary' : 'grey'"
                          size="14"
                          class="ml-1"
                        >
                          {{ message.status === 'read' ? 'mdi-check-all' : 'mdi-check' }}
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Typing Indicator -->
              <div v-if="isTyping" class="typing-indicator">
                <v-avatar size="32" class="message-avatar">
                  <v-img :src="selectedProfile.avatar"></v-img>
                </v-avatar>
                <div class="typing-bubble">
                  <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Message Input -->
        <v-col cols="12">
          <v-card class="message-input-card" elevation="8">
            <v-card-text class="pa-4">
              <div class="message-input-container">
                <v-btn
                  icon
                  variant="text"
                  size="small"
                  class="mr-3"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
                
                <v-text-field
                  v-model="newMessage"
                  placeholder="Type a message..."
                  variant="outlined"
                  hide-details
                  class="message-input"
                  @keyup.enter="sendMessage"
                >
                  <template v-slot:append-inner>
                    <v-btn
                      icon
                      variant="text"
                      size="small"
                      class="mr-1"
                    >
                      <v-icon>mdi-emoticon-happy</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
                
                <v-btn
                  :disabled="!newMessage.trim()"
                  @click="sendMessage"
                  color="primary"
                  icon
                  class="ml-3"
                >
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.chat-page {
  height: 100vh;
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
}

/* Chat Header */
.chat-header {
  border-radius: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.profile-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.profile-status {
  display: flex;
  align-items: center;
  margin-top: 2px;
}

.status-text {
  font-size: 0.85rem;
  color: #666;
}

.chat-actions {
  display: flex;
  gap: 4px;
}

/* Messages Section */
.messages-section {
  height: calc(100vh - 140px);
  overflow: hidden;
}

.messages-container {
  height: 100%;
  overflow-y: auto;
  padding: 0;
}

.messages-content {
  padding: 20px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

/* Date Separator */
.date-separator {
  text-align: center;
  margin: 20px 0;
}

.date-text {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #666;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Message Groups */
.message-group {
  margin-bottom: 16px;
}

.message-wrapper {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.my-message .message-wrapper {
  justify-content: flex-end;
}

.other-message .message-wrapper {
  justify-content: flex-start;
}

.message-avatar {
  flex-shrink: 0;
  margin-bottom: 4px;
}

.my-message .message-avatar {
  order: 2;
}

/* Message Bubbles */
.message-bubble-container {
  max-width: 70%;
  display: flex;
  flex-direction: column;
}

.my-message .message-bubble-container {
  align-items: flex-end;
}

.other-message .message-bubble-container {
  align-items: flex-start;
}

.message-bubble {
  background: white;
  border-radius: 18px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.my-message .message-bubble {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.other-message .message-bubble {
  background: white;
  color: #333;
}

.message-content {
  margin: 0;
  line-height: 1.4;
  font-size: 0.95rem;
}

.message-meta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 4px;
  gap: 4px;
}

.message-time {
  font-size: 0.75rem;
  opacity: 0.7;
}

.my-message .message-time {
  color: rgba(255, 255, 255, 0.8);
}

.other-message .message-time {
  color: #666;
}

/* Typing Indicator */
.typing-indicator {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 16px;
}

.typing-bubble {
  background: white;
  border-radius: 18px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.typing-dots {
  display: flex;
  gap: 4px;
}

.typing-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #667eea;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-dots span:nth-child(1) {
  animation-delay: -0.32s;
}

.typing-dots span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes typing {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Message Input */
.message-input-card {
  border-radius: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.message-input-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.message-input {
  flex: 1;
}

.message-input :deep(.v-field) {
  border-radius: 25px;
  background: #f5f5f5;
}

.message-input :deep(.v-field--focused) {
  background: white;
}

/* Responsive Design */
@media (max-width: 960px) {
  .message-bubble-container {
    max-width: 85%;
  }
  
  .chat-actions {
    display: none;
  }
  
  .messages-section {
    height: calc(100vh - 120px);
  }
}

@media (max-width: 600px) {
  .messages-content {
    padding: 16px 12px;
  }
  
  .message-bubble-container {
    max-width: 90%;
  }
  
  .message-bubble {
    padding: 10px 14px;
  }
  
  .profile-name {
    font-size: 1.1rem;
  }
  
  .messages-section {
    height: calc(100vh - 110px);
  }
}

/* Dark theme support */
.v-theme--dark .chat-page {
  background: linear-gradient(145deg, #121212 0%, #1e1e1e 100%);
}

.v-theme--dark .chat-header,
.v-theme--dark .message-input-card {
  background: rgba(30, 30, 30, 0.95);
  border-color: rgba(255, 255, 255, 0.12);
}

.v-theme--dark .profile-name {
  color: #fff;
}

.v-theme--dark .status-text {
  color: #aaa;
}

.v-theme--dark .date-text {
  background: rgba(40, 40, 40, 0.9);
  color: #ccc;
}

.v-theme--dark .other-message .message-bubble {
  background: rgba(40, 40, 40, 0.9);
  color: #fff;
}

.v-theme--dark .typing-bubble {
  background: rgba(40, 40, 40, 0.9);
}

.v-theme--dark .message-input :deep(.v-field) {
  background: rgba(40, 40, 40, 0.5);
}

.v-theme--dark .message-input :deep(.v-field--focused) {
  background: rgba(40, 40, 40, 0.8);
}
</style>