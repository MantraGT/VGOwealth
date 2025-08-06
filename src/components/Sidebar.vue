<template>
  <aside class="sidebar" :class="{ 'collapsed': isCollapsed }">
    <div class="sidebar-header">
   
    
    </div>
    
    <div class="user-profile">
      <div class="avatar">
        <span class="avatar-text">GB</span>
        <span class="status-dot"></span>
      </div>
      <div class="user-info">
        <h3 class="user-name">Gia Bach</h3>
        <p class="user-email">user@vgo.vn</p>
      </div>
    </div>
    
    <div class="divider"></div>
    
    <nav class="sidebar-nav">
      <div class="nav-section">
        <ul>
          <li class="nav-item active">
            <a href="#" class="nav-link nav-link-home">
              <div class="nav-icon-container">
                <i class="nav-icon">🏠</i>
              </div>
              <span class="nav-text">Trang chủ</span>
              <span class="nav-arrow">›</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <div class="nav-icon-container">
                <i class="nav-icon">💼</i>
              </div>
              <span class="nav-text">Tài sản</span>
              <span class="nav-arrow">›</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <div class="nav-icon-container">
                <i class="nav-icon">📈</i>
              </div>
              <span class="nav-text">Thị trường</span>
              <span class="nav-arrow">›</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <div class="nav-icon-container">
                <i class="nav-icon">📜</i>
              </div>
              <span class="nav-text">Lịch sử giao dịch</span>
              <span class="nav-arrow">›</span>
            </a>
          </li>
        </ul>
      </div>
      
      <div class="divider"></div>
      
      <div class="nav-section">
        <span class="nav-section-title">Hỗ trợ</span>
        <ul>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <div class="nav-icon-container">
                <i class="nav-icon">ℹ️</i>
              </div>
              <span class="nav-text">Thông tin</span>
              <span class="nav-arrow">›</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <div class="nav-icon-container">
                <i class="nav-icon">📞</i>
              </div>
              <span class="nav-text">Liên hệ</span>
              <span class="nav-arrow">›</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
    <div class="sidebar-footer">
      <div class="theme-switcher">
        <span>Chế độ tối</span>
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      <p class="app-version">TOPI v1.0.0</p>
    </div>
  </aside>
</template>

<script lang="ts">
export default {
  name: 'Sidebar',
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle', !this.isCollapsed);
    }
  }
}
</script>

<style scoped>
.sidebar-toggle-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-left: 16px;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.sidebar-toggle-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --primary-color: #1e7d3f;  /* Màu chủ đạo chính */
  --primary-light: #2ecc71;  /* Màu sáng hơn cho hiệu ứng hover */
  --primary-dark: #145a32;   /* Màu tối hơn cho background */
  --sidebar-bg: #10cf73 !important;     /* Màu nền sidebar chính */
  --sidebar-text: #e8f5e9;   /* Màu chữ chính */
  --sidebar-hover: rgba(46, 204, 113, 0.15);  /* Màu khi di chuột qua */
  --sidebar-active: rgba(30, 215, 96, 0.25);  /* Màu khi active */
  --sidebar-border: rgba(255, 255, 255, 0.08);  /* Màu viền */
  --sidebar-header-bg: rgba(0, 0, 0, 0.15);     /* Màu nền header */
  --sidebar-shadow: 4px 0 20px rgba(0, 0, 0, 0.25);  /* Đổ bóng */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.sidebar {
  width: 280px;
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  height: calc(100vh - 70px);
  z-index: 1000;
  background: #1a5f3e;
  color: var(--sidebar-text);
  display: flex;
  flex-direction: column;
  box-shadow: var(--sidebar-shadow);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(0);
  overflow: hidden;
  will-change: transform;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 20%);
  background-clip: padding-box;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
}

.sidebar.collapsed {
  transform: translateX(-100%);
}

.sidebar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.03) 100%);
  pointer-events: none;
}

.sidebar-header {
  padding: 24px;
  position: relative;
  z-index: 1;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
}

.logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.5));
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

.logo-text {
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(90deg, #10b981, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5px;
  margin-top: 2px;
}

.user-profile {
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;
  margin-bottom: 8px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
  position: relative;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  transition: all 0.3s ease;
}

.avatar:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
}

.status-dot {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 14px;
  height: 14px;
  background-color: #10b981;
  border: 2px solid var(--sidebar-bg);
  border-radius: 50%;
}

.user-info {
  overflow: hidden;
}

.user-name {
  font-size: 15px;
  font-weight: 600;
  color: white;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-email {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin: 2px 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.divider {
  height: 1px;
  background: var(--sidebar-border);
  margin: 8px 24px;
  position: relative;
  overflow: hidden;
}

.divider::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.sidebar-nav {
  padding: 12px 0;
  flex-grow: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.sidebar-nav::-webkit-scrollbar {
  width: 4px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.nav-section {
  margin-bottom: 16px;
}

.nav-section-title {
  padding: 0 24px 8px 24px;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
}

.nav-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 2px 0;
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px;
  color: #079207;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px 20px 20px 20px;
  margin-right: 8px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  background: #0a411c;
  
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--primary-color);
  transform: scaleY(0);
  transform-origin: center;
  transition: transform 0.3s ease;
  border-radius: 0 4px 4px 0;
}

.nav-link:hover {
  background: #00c93c;
  color: #004121;
  transform: translateX(4px);
}

.nav-link:hover .nav-icon-container {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.nav-item.active .nav-link {
  background: var(--sidebar-active);
  color: white;
  font-weight: 600;
}

.nav-item.active .nav-link::before {
  transform: scaleY(1);
}

.nav-item.active .nav-icon {
  color: var(--primary-light);
}

.nav-icon-container {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
}

.nav-icon {
  font-size: 18px;
  width: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
}
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
.nav-text {
  flex-grow: 1;
  transition: all 0.2s ease;
  font-family: Manrope,Roboto,sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
}
.nav-text:hover {
  color: #fbff00;
}

.nav-arrow {
  opacity: 0.5;
  transition: all 0.2s ease;
  font-size: 16px;
  transform: translateX(-4px);
}

.nav-link:hover .nav-arrow {
  opacity: 1;
  transform: translateX(0);
  color: var(--primary-light);
}
.nav-link-home {
  background: #006416 !important;
}
.sidebar-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--sidebar-border);
  background: rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}

.theme-switcher {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--primary-color);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--primary-color);
}

input:checked + .slider:before {
  transform: translateX(18px);
}

.app-version {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  margin: 8px 0 0;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.5);
  }
  
  .sidebar:not(.collapsed) {
    transform: translateX(0);
  }
}
</style>
