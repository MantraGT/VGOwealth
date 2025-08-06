<template>
  <header class="header">
    <div class="header-left">
      <button class="menu-toggle" @click.stop="toggleSidebar">
        <span class="menu-icon">☰</span>
      </button>
      <div class="logo-container">
        <img src="../assets/logo.svg" alt="Logo" class="logo">
      </div>
    </div>
    <div class="header-right">
      <div class="search-bar">
        <input 
          type="text" 
          placeholder="Tìm kiếm..."
          class="search-input"
        >
        <i class="search-icon">🔍</i>
      </div>
      <div class="header-actions">
        <button class="notification-btn">
          <i class="notification-icon">🔔</i>
          <span class="notification-badge">3</span>
        </button>
        <div class="user-menu">
          <div class="user-avatar">
            <span>US</span>
          </div>
          <div class="user-info">
            <span class="user-name">Người dùng</span>
            <span class="user-role">Quản trị viên</span>
          </div>
          <i class="dropdown-icon">▼</i>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  emits: ['toggle-sidebar'],
  methods: {
    toggleSidebar(e: Event) {
      e.preventDefault();
      this.$emit('toggle-sidebar');
    }
  }
});
</script>

<style scoped>
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #1a5f3e;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-left { 
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Menu Toggle Button */
.menu-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.menu-icon {
  display: block;
  line-height: 1;
}

/* Logo */
.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 30px;
  filter: brightness(0) invert(1);
}

/* Header Right Section */
.header-right {
  display: flex;
  align-items: center;
  gap: 25px;
}

/* Search Bar */
.search-bar {
  position: relative;
  margin-right: 10px;
}

.search-input {
  height: 40px;
  width: 300px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  padding: 0 45px 0 20px;
  font-size: 14px;
  color: white;
  transition: all 0.3s ease;
  font-family: 'Open Sans', sans-serif;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.search-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Notification Button */
.notification-btn {
  position: relative;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.notification-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.notification-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  background: #ff4d4f;
  color: white;
  font-size: 10px;
  font-weight: bold;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 2px solid #1a5f3e;
}

/* User Menu */
.user-menu {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px 5px 5px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: rgba(255, 255, 255, 0.05);
}

.user-menu:hover {
  background: rgba(255, 255, 255, 0.1);
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #2ecc71;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  color: white;
}

.user-info {
  display: flex;
  flex-direction: column;
  margin-right: 5px;
}

.user-name {
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  color: white;
}

.user-role {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 2px;
}

.dropdown-icon {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  transition: transform 0.2s ease;
}

.user-menu:hover .dropdown-icon {
  transform: translateY(1px);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .search-input {
    width: 200px;
  }
}

@media (max-width: 768px) {
  .search-bar {
    display: none;
  }
  
  .user-info, .dropdown-icon {
    display: none;
  }
  
  .user-menu {
    padding: 5px;
    background: transparent;
  }
  
  .user-avatar {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
}
</style>
