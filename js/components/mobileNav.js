// Devi Fisheries ERP - Mobile Responsive Navigation Component
// Fixed 5-Option Bottom Navigation Bar & Expandable Mobile Navigation Drawer

import { ADMIN_NAV_HIERARCHY, SUPER_ADMIN_NAV_HIERARCHY, getAssignedModuleIdsForRole } from './sidebar.js';
import { ERP_DATA } from '../data/mockData.js';
import { NotificationService } from '../services/notificationService.js';
import { LOGO_WHITE, LOGO_CAMAROO_WHITE } from '../data/logos.js';

export const MobileNav = {
  isDrawerOpen: false,
  isSalesOpen: false,
  isNotifOpen: false,
  activeHash: '#/home',
  expandedModuleId: null,
  expandedSalesSubmenuId: 'orders',
  searchQuery: '',
  salesSearchQuery: '',
  notifSubscribed: false,

  init() {
    if (!this.notifSubscribed) {
      NotificationService.subscribe(() => {
        this.updateNotifBadge();
      });
      this.notifSubscribed = true;
    }

    // Listen to hash change to keep active state synchronized
    window.addEventListener('hashchange', () => {
      this.activeHash = window.location.hash || '#/home';
      this.render();
      this.closeDrawer();
      this.closeSalesDrawer();
      this.closeNotifSheet();
    });

    // Handle screen resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        if (this.isDrawerOpen) this.closeDrawer();
        if (this.isSalesOpen) this.closeSalesDrawer();
        if (this.isNotifOpen) this.closeNotifSheet();
      }
    });
  },

  render(containerId = 'mobile-bottom-nav', currentHash) {
    if (currentHash) this.activeHash = currentHash;
    const cleanHash = (this.activeHash || window.location.hash || '#/home').toLowerCase();
    
    // Determine active item among the bottom nav options
    const isSalesRoute = cleanHash.includes('/sales');
    const isHomeRoute = cleanHash === '#/home' || cleanHash === '#/' || cleanHash === '' || cleanHash.includes('/system-overview');
    const isSettingRoute = cleanHash.includes('/settings') || cleanHash.includes('/setup') || cleanHash.includes('/configuration');

    const isSalesActive = this.isSalesOpen || (isSalesRoute && !this.isDrawerOpen && !this.isNotifOpen);
    const isHomeActive = isHomeRoute && !this.isDrawerOpen && !this.isSalesOpen && !this.isNotifOpen;
    const isSettingActive = isSettingRoute && !this.isDrawerOpen && !this.isSalesOpen && !this.isNotifOpen;
    const isMenuActive = this.isDrawerOpen;
    const isNotifActive = this.isNotifOpen;

    const unreadCount = NotificationService.getUnread().length;
    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
    const settingsRoute = isSuperAdmin ? '#/dashboard/overview/system-overview' : '#/settings/setup/general';

    const navContainer = document.getElementById(containerId);
    if (!navContainer) return;

    navContainer.innerHTML = `
      <div class="w-full h-full flex items-center justify-around px-2 max-w-lg mx-auto bg-[#0F172A] rounded-t-[8px]">
        
        <!-- 1. Menu -->
        <button 
          type="button" 
          id="mob-btn-menu" 
          class="mob-nav-item flex flex-col items-center justify-center flex-1 py-1 transition-all cursor-pointer select-none"
          aria-label="Open Navigation Menu"
        >
          <div class="w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isMenuActive ? 'bg-[#00A4B7] text-white shadow-md' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </div>
          <span class="mob-nav-label text-[9.5px] font-bold tracking-tight mt-0.5 ${isMenuActive ? 'text-[#00A4B7]' : 'text-[#94A3B8]'}">Menu</span>
        </button>

        <!-- 2. Sales (Opens dedicated Sales submenus drawer from bottom) -->
        <button 
          type="button" 
          id="mob-btn-sales" 
          class="mob-nav-item flex flex-col items-center justify-center flex-1 py-1 transition-all cursor-pointer select-none"
          aria-label="Open Sales & Exports Submenus"
        >
          <div class="w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isSalesActive ? 'bg-[#00A4B7] text-white shadow-md' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <span class="mob-nav-label text-[9.5px] font-bold tracking-tight mt-0.5 ${isSalesActive ? 'text-[#00A4B7]' : 'text-[#94A3B8]'}">Sales</span>
        </button>

        <!-- 3. Home -->
        <a 
          href="#/home" 
          id="mob-btn-home" 
          class="mob-nav-item flex flex-col items-center justify-center flex-1 py-1 transition-all cursor-pointer select-none"
          aria-label="Go to Home Dashboard"
        >
          <div class="w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isHomeActive ? 'bg-[#00A4B7] text-white shadow-md' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <span class="mob-nav-label text-[9.5px] font-bold tracking-tight mt-0.5 ${isHomeActive ? 'text-[#00A4B7]' : 'text-[#94A3B8]'}">Home</span>
        </a>

        <!-- 4. Settings -->
        <a 
          href="${settingsRoute}" 
          id="mob-btn-setting" 
          class="mob-nav-item flex flex-col items-center justify-center flex-1 py-1 transition-all cursor-pointer select-none"
          aria-label="Go to Settings"
        >
          <div class="w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isSettingActive ? 'bg-[#00A4B7] text-white shadow-md' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <span class="mob-nav-label text-[9.5px] font-bold tracking-tight mt-0.5 ${isSettingActive ? 'text-[#00A4B7]' : 'text-[#94A3B8]'}">Settings</span>
        </a>

        <!-- 5. Notification -->
        <button 
          type="button" 
          id="mob-btn-notif" 
          class="mob-nav-item flex flex-col items-center justify-center flex-1 py-1 transition-all cursor-pointer select-none"
          aria-label="View Notifications, ${unreadCount} unread"
        >
          <div class="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isNotifActive ? 'bg-[#00A4B7] text-white shadow-md' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
            <span id="mob-notif-badge" class="${unreadCount > 0 ? '' : 'hidden'} absolute -top-1 -right-1 min-w-[15px] h-[15px] px-1 bg-[#EF4444] text-white text-[9px] font-extrabold rounded-full flex items-center justify-center leading-none ring-2 ring-[#0F172A]">
              ${unreadCount > 9 ? '9+' : unreadCount}
            </span>
          </div>
          <span class="mob-nav-label text-[8px] sm:text-[9px] font-bold tracking-tighter mt-0.5 ${isNotifActive ? 'text-[#00A4B7]' : 'text-[#94A3B8]'}">Notification</span>
        </button>

      </div>
    `;

    this.bindBottomNavEvents();
  },

  updateNotifBadge() {
    const unreadCount = NotificationService.getUnread().length;
    const badge = document.getElementById('mob-notif-badge');
    if (badge) {
      if (unreadCount > 0) {
        badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }
  },

  bindBottomNavEvents() {
    const menuBtn = document.getElementById('mob-btn-menu');
    if (menuBtn) {
      menuBtn.onclick = (e) => {
        e.preventDefault();
        this.toggleDrawer();
      };
    }

    const salesBtn = document.getElementById('mob-btn-sales');
    if (salesBtn) {
      salesBtn.onclick = (e) => {
        e.preventDefault();
        this.toggleSalesDrawer();
      };
    }

    const notifBtn = document.getElementById('mob-btn-notif');
    if (notifBtn) {
      notifBtn.onclick = (e) => {
        e.preventDefault();
        this.toggleNotifSheet();
      };
    }
  },

  toggleDrawer() {
    if (this.isDrawerOpen) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  },

  openDrawer() {
    this.isDrawerOpen = true;
    this.closeSalesDrawer();
    this.closeNotifSheet();
    this.renderDrawer();
    this.render(); // update menu active state on bottom bar
    document.body.style.overflow = 'hidden';
  },

  closeDrawer() {
    this.isDrawerOpen = false;
    const drawerContainer = document.getElementById('mobile-drawer-container');
    if (drawerContainer && !this.isSalesOpen) drawerContainer.innerHTML = '';
    this.render();
    if (!this.isSalesOpen && !this.isNotifOpen) {
      document.body.style.overflow = '';
    }
  },

  toggleSalesDrawer() {
    if (this.isSalesOpen) {
      this.closeSalesDrawer();
    } else {
      this.openSalesDrawer();
    }
  },

  openSalesDrawer() {
    this.isSalesOpen = true;
    this.closeDrawer();
    this.closeNotifSheet();

    // Auto-detect current active sales submenu if navigating on sales route
    const cleanHash = (this.activeHash || window.location.hash || '').toLowerCase();
    if (cleanHash.includes('/sales/orders')) {
      this.expandedSalesSubmenuId = 'orders';
    } else if (cleanHash.includes('/sales/payments')) {
      this.expandedSalesSubmenuId = 'payments';
    } else if (cleanHash.includes('/sales/insurance')) {
      this.expandedSalesSubmenuId = 'insurance';
    } else if (cleanHash.includes('/sales/dashboard')) {
      this.expandedSalesSubmenuId = 'dashboard';
    } else if (!this.expandedSalesSubmenuId) {
      this.expandedSalesSubmenuId = 'orders';
    }

    this.renderSalesDrawer();
    this.render(); // update sales active state on bottom bar
    document.body.style.overflow = 'hidden';
  },

  closeSalesDrawer() {
    this.isSalesOpen = false;
    const drawerContainer = document.getElementById('mobile-drawer-container');
    if (drawerContainer && !this.isDrawerOpen) drawerContainer.innerHTML = '';
    this.render();
    if (!this.isDrawerOpen && !this.isNotifOpen) {
      document.body.style.overflow = '';
    }
  },

  toggleNotifSheet() {
    if (this.isNotifOpen) {
      this.closeNotifSheet();
    } else {
      this.openNotifSheet();
    }
  },

  openNotifSheet() {
    this.isNotifOpen = true;
    this.closeDrawer();
    this.renderNotifSheet();
    this.render();
    document.body.style.overflow = 'hidden';
  },

  closeNotifSheet() {
    this.isNotifOpen = false;
    const notifSheet = document.getElementById('mobile-notif-sheet-container');
    if (notifSheet) notifSheet.remove();
    this.render();
    document.body.style.overflow = '';
  },

  renderDrawer() {
    const drawerContainer = document.getElementById('mobile-drawer-container');
    if (!drawerContainer) return;

    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
    const hierarchy = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;
    const allowedModuleIds = getAssignedModuleIdsForRole(ERP_DATA.currentUser?.roleCode, ERP_DATA.currentUser?.role);

    // Filter modules based on role permissions AND exclude Home, Sales, Setting (already on bottom nav)
    let availableModules = hierarchy.filter(mod => {
      // Exclude Home (dashboard), Sales (sales), and Setting (settings) per user instruction
      if (mod.id === 'dashboard' || mod.id === 'sales' || mod.id === 'settings') {
        return false;
      }
      if (isSuperAdmin) return true;
      if (ERP_DATA.currentUser?.roleCode && ERP_DATA.currentUser.roleCode !== 'ROL-ADM') {
        return allowedModuleIds.includes(mod.id);
      }
      return true;
    });

    // If search query is entered, filter modules and submenus
    const query = (this.searchQuery || '').trim().toLowerCase();
    if (query) {
      availableModules = availableModules.filter(m => {
        const modMatch = m.title.toLowerCase().includes(query);
        const subMatch = (m.submenus || []).some(s => s.title.toLowerCase().includes(query));
        return modMatch || subMatch;
      });
    }

    // Determine current active module from hash
    const cleanHash = (this.activeHash || window.location.hash || '#/home').replace(/^#\/?/, '').replace(/^\/+/, '');
    const parts = cleanHash.split('/');
    const currentModId = parts[0] || 'purchase';
    const currentSubId = parts[1] || '';

    // If no module explicitly expanded yet, expand the active one if available in list
    if (!this.expandedModuleId && currentModId && availableModules.some(m => m.id === currentModId)) {
      this.expandedModuleId = currentModId;
    } else if (!this.expandedModuleId && availableModules.length > 0) {
      this.expandedModuleId = availableModules[0].id;
    }

    drawerContainer.innerHTML = `
      <!-- Backdrop -->
      <div id="mob-drawer-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-xs z-[70] transition-opacity animate-fade-in"></div>

      <!-- Bottom Sheet Drawer Panel (Slides up from bottom, matching existing side menu colors) -->
      <aside 
        id="mob-drawer-panel" 
        role="dialog" 
        aria-label="Mobile Navigation Menu"
        class="fixed inset-x-0 bottom-0 w-full max-w-lg mx-auto bg-[#0F172A] text-[#94A3B8] z-[80] shadow-2xl flex flex-col rounded-t-3xl border-t border-x border-[#1E293B] animate-slide-up select-none max-h-[85vh] overflow-hidden"
        style="padding-bottom: env(safe-area-inset-bottom, 8px);"
      >
        <!-- Top Handle & Drawer Header -->
        <div class="pt-2.5 pb-2.5 px-4 flex flex-col border-b border-[#1E293B] bg-[#0B0F19] shrink-0">
          <!-- Pull Bar Indicator -->
          <div class="w-12 h-1.5 bg-[#334155] rounded-full mx-auto mb-2 shrink-0"></div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5 min-w-0">
              ${isSuperAdmin ? `
                <img src="${LOGO_CAMAROO_WHITE}" alt="Camaroo" class="h-6 w-auto max-w-[130px] object-contain shrink-0" />
              ` : `
                <img src="${LOGO_WHITE}" alt="Devi Fisheries" class="h-8 w-auto object-contain shrink-0" />
                <div class="leading-tight flex flex-col justify-center min-w-0 text-left">
                  <span class="text-xs font-bold text-white tracking-wide truncate text-left">Devi Fisheries</span>
                  <span class="text-[8.5px] font-bold text-[#00A4B7] tracking-wider uppercase font-mono truncate text-left">ERP Navigation</span>
                </div>
              `}
            </div>

            <!-- Close Button -->
            <button 
              type="button" 
              id="mob-drawer-close-btn" 
              class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Close Navigation Menu"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        <!-- Scrollable Modules & Submenus Accordion List (All Strictly Left-Aligned, No Horizontal Scroll) -->
        <div class="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-1.5" id="mob-drawer-menu-list">
          ${availableModules.map(mod => {
            const isCurrentMod = mod.id === currentModId;
            const isExpanded = this.expandedModuleId === mod.id || (query && (mod.submenus || []).length > 0);
            const submenus = mod.submenus || [];
            const hasSubmenus = submenus.length > 0;

            return `
              <div class="nav-mod-wrapper rounded-xl border border-transparent ${isExpanded ? 'bg-white/[0.04] border-white/5' : ''}">
                <!-- Module Header Button (Strictly Left-Aligned) -->
                <button 
                  type="button" 
                  data-mod-id="${mod.id}"
                  class="mob-mod-toggle-btn w-full px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-all cursor-pointer text-left ${isCurrentMod ? 'text-white font-extrabold bg-[#00A4B7]/20 border border-[#00A4B7]/40' : 'text-[#CBD5E1] hover:bg-white/5 hover:text-white'}"
                  style="text-align: left !important; justify-content: space-between !important;"
                >
                  <div class="flex items-center gap-3 min-w-0 text-left" style="text-align: left !important;">
                    <span class="w-5 h-5 flex items-center justify-center shrink-0 ${isCurrentMod ? 'text-[#00A4B7]' : 'text-[#94A3B8]'}">${mod.icon}</span>
                    <span class="tracking-tight truncate ${isCurrentMod ? 'text-[#00A4B7]' : 'text-white'} text-left">${mod.title}</span>
                  </div>
                  ${hasSubmenus ? `
                    <svg class="w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ml-2 ${isExpanded ? 'rotate-180 text-[#00A4B7]' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  ` : ''}
                </button>

                <!-- Submenus List (Collapsible Accordion, Left-Aligned) -->
                ${hasSubmenus && isExpanded ? `
                  <div class="pl-6 pr-2 pb-2 pt-1 space-y-1 text-left">
                    ${submenus.map(sub => {
                      const isSubActive = isCurrentMod && (sub.id === currentSubId || cleanHash.includes(`/${sub.id}`));
                      const targetHash = sub.tabs[0]?.hash || `#/${mod.id}/${sub.id}`;

                      return `
                        <div class="border-l-2 ${isSubActive ? 'border-[#00A4B7]' : 'border-[#334155]'} pl-2.5 transition-colors text-left">
                          <a 
                            href="${targetHash}" 
                            data-action="nav-sub"
                            class="mob-drawer-link block py-2 px-2.5 rounded-lg text-xs font-semibold transition-all text-left ${isSubActive ? 'text-[#00A4B7] bg-[#00A4B7]/15 font-bold' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}"
                            style="text-align: left !important;"
                          >
                            <span class="truncate text-left">${sub.title}</span>
                          </a>
                        </div>
                      `;
                    }).join('')}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </aside>
    `;

    this.bindDrawerEvents();
  },

  bindDrawerEvents() {
    // Backdrop click -> close
    const backdrop = document.getElementById('mob-drawer-backdrop');
    if (backdrop) {
      backdrop.onclick = () => this.closeDrawer();
    }

    // Close button click -> close
    const closeBtn = document.getElementById('mob-drawer-close-btn');
    if (closeBtn) {
      closeBtn.onclick = () => this.closeDrawer();
    }

    // Accordion toggle clicks
    const toggleBtns = document.querySelectorAll('.mob-mod-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.onclick = () => {
        const modId = btn.dataset.modId;
        this.expandedModuleId = this.expandedModuleId === modId ? null : modId;
        this.renderDrawer();
      };
    });

    // Submenu links -> close drawer on navigate
    const navLinks = document.querySelectorAll('[data-action="nav-sub"], [data-action="nav-direct"]');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeDrawer();
      });
    });
  },

  renderSalesDrawer() {
    const drawerContainer = document.getElementById('mobile-drawer-container');
    if (!drawerContainer) return;

    const cleanHash = (this.activeHash || window.location.hash || '').toLowerCase();

    // 4 exact submenus matching Image 1 without icons or extra text
    const submenus = [
      { id: 'dashboard', title: 'Dashboard', hash: '#/sales/dashboard/overview' },
      { id: 'orders', title: 'Orders', hash: '#/sales/orders/proforma-list' },
      { id: 'payments', title: 'Payments', hash: '#/sales/payments/forward-contracts' },
      { id: 'insurance', title: 'Insurance', hash: '#/sales/insurance/pending-insurance' }
    ];

    drawerContainer.innerHTML = `
      <!-- Backdrop -->
      <div id="mob-sales-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-xs z-[70] transition-opacity animate-fade-in"></div>

      <!-- Bottom Sheet Drawer Panel -->
      <aside 
        id="mob-sales-panel" 
        role="dialog" 
        aria-label="Sales Submenus"
        class="fixed inset-x-0 bottom-0 w-full max-w-lg mx-auto bg-[#0F172A] text-[#94A3B8] z-[80] shadow-2xl flex flex-col rounded-t-3xl border-t border-x border-[#1E293B] animate-slide-up select-none overflow-hidden"
        style="padding-bottom: env(safe-area-inset-bottom, 16px);"
      >
        <!-- Pull Bar & Header -->
        <div class="pt-3 pb-2.5 px-5 flex items-center justify-between border-b border-[#1E293B] bg-[#0B0F19] relative">
          <div class="w-10 h-1 bg-[#334155] rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-2"></div>
          <div class="flex items-center gap-2 mt-1">
            <svg class="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span class="text-xs font-bold text-white tracking-wide">Sales</span>
          </div>
          <button 
            type="button" 
            id="mob-sales-close-btn" 
            class="w-8 h-8 min-w-[32px] min-h-[32px] rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/25 shrink-0"
            aria-label="Close Sales Menu"
            title="Close"
          >
            <svg class="w-4 h-4 text-white" fill="none" stroke="#FFFFFF" stroke-width="2.5" viewBox="0 0 24 24" style="width: 16px; height: 16px; stroke: #FFFFFF !important; stroke-width: 2.5px !important; display: block !important;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Submenus List strictly matching Image 1: Continuous vertical line, active teal indicator, No icons, No extra text -->
        <div class="py-5 px-6">
          <div class="border-l-2 border-[#1E293B]">
            ${submenus.map(sub => {
              const isSubActive = cleanHash.includes(`/sales/${sub.id}`) || (sub.id === 'dashboard' && (cleanHash === '#/sales' || cleanHash === '#/sales/' || cleanHash.includes('/sales/dashboard')));

              return `
                <div class="-ml-[2px]">
                  <a 
                    href="${sub.hash}" 
                    data-action="nav-sales-sub"
                    class="block pl-5 py-3 transition-colors cursor-pointer text-left select-none ${isSubActive ? 'border-l-2 border-[#00A4B7] text-[#00A4B7] font-bold text-sm tracking-wide' : 'border-l-2 border-transparent text-[#94A3B8] hover:text-white font-medium text-sm tracking-wide'}"
                  >
                    ${sub.title}
                  </a>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </aside>
    `;

    this.bindSalesDrawerEvents();
  },

  bindSalesDrawerEvents() {
    // Backdrop click -> close
    const backdrop = document.getElementById('mob-sales-backdrop');
    if (backdrop) {
      backdrop.onclick = () => this.closeSalesDrawer();
    }

    // Close button click -> close
    const closeBtn = document.getElementById('mob-sales-close-btn');
    if (closeBtn) {
      closeBtn.onclick = () => this.closeSalesDrawer();
    }

    // Submenu links -> close sales drawer on navigation
    const subLinks = document.querySelectorAll('[data-action="nav-sales-sub"]');
    subLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeSalesDrawer();
      });
    });
  },

  renderNotifSheet() {
    let container = document.getElementById('mobile-notif-sheet-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'mobile-notif-sheet-container';
      document.body.appendChild(container);
    }

    const notifications = NotificationService.getAll();
    const unread = NotificationService.getUnread();

    container.innerHTML = `
      <!-- Backdrop -->
      <div id="mob-notif-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-xs z-[70] transition-opacity animate-fade-in"></div>

      <!-- Bottom Sheet Modal -->
      <div 
        id="mob-notif-panel"
        role="dialog"
        aria-label="Notifications"
        class="fixed inset-x-0 bottom-0 max-h-[85vh] bg-white rounded-t-3xl z-[80] shadow-2xl flex flex-col border-t border-[#DFE1E6] animate-slide-up select-none overflow-hidden"
      >
        <!-- Sheet Handle Bar -->
        <div class="pt-3 pb-1 flex justify-center cursor-pointer" onclick="MobileNav.closeNotifSheet()">
          <div class="w-12 h-1.5 bg-[#CBD5E1] rounded-full"></div>
        </div>

        <!-- Sheet Header -->
        <div class="px-5 py-3 border-b border-[#F1F5F9] flex items-center justify-between">
          <div class="flex items-center gap-2">
            <h3 class="text-sm font-bold text-[#172B4D]">Notifications</h3>
            ${unread.length > 0 ? `
              <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FFEBE6] text-[#DE350B]">
                ${unread.length} new
              </span>
            ` : ''}
          </div>

          <div class="flex items-center gap-2">
            ${unread.length > 0 ? `
              <button 
                type="button" 
                id="mob-notif-readall-btn" 
                class="text-[11px] font-bold text-[#00A4B7] hover:underline"
              >
                Mark all read
              </button>
            ` : ''}
            <button 
              type="button" 
              id="mob-notif-close-btn" 
              class="w-7 h-7 rounded-full bg-[#F1F5F9] text-[#64748B] flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- Notifications List -->
        <div class="flex-1 overflow-y-auto p-3 space-y-2 max-h-[60vh]">
          ${notifications.length === 0 ? `
            <div class="py-12 text-center text-[#64748B]">
              <div class="w-12 h-12 rounded-full bg-[#F0F9FF] text-[#00A4B7] mx-auto flex items-center justify-center mb-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
              </div>
              <p class="text-xs font-semibold">No notifications right now.</p>
            </div>
          ` : `
            ${notifications.map(item => {
              const dotColor = !item.read ? 'bg-[#00A4B7]' : 'bg-[#CBD5E1]';
              return `
                <div 
                  class="mob-notif-item p-3 rounded-xl border transition-all cursor-pointer ${!item.read ? 'bg-[#F0F9FF] border-[#BAE6FD]' : 'bg-white border-[#DFE1E6]'}"
                  data-id="${item.id}"
                  data-hash="${item.targetHash || ''}"
                >
                  <div class="flex items-start justify-between gap-2">
                    <div class="flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full ${dotColor} shrink-0 mt-0.5"></span>
                      <span class="text-xs font-bold text-[#172B4D] leading-tight">${item.title}</span>
                    </div>
                    <span class="text-[10px] text-[#64748B] shrink-0 font-medium">${item.time}</span>
                  </div>
                  <div class="text-[11px] text-[#5E6C84] mt-1 pl-4 leading-normal">${item.message}</div>
                </div>
              `;
            }).join('')}
          `}
        </div>

        <!-- Footer -->
        <div class="p-3 border-t border-[#F1F5F9] bg-[#F8FAFC] text-center">
          <button 
            type="button" 
            onclick="MobileNav.closeNotifSheet()" 
            class="w-full py-2 bg-white border border-[#DFE1E6] rounded-xl text-xs font-bold text-[#172B4D]"
          >
            Close
          </button>
        </div>
      </div>
    `;

    this.bindNotifSheetEvents();
  },

  bindNotifSheetEvents() {
    const backdrop = document.getElementById('mob-notif-backdrop');
    if (backdrop) {
      backdrop.onclick = () => this.closeNotifSheet();
    }

    const closeBtn = document.getElementById('mob-notif-close-btn');
    if (closeBtn) {
      closeBtn.onclick = () => this.closeNotifSheet();
    }

    const readAllBtn = document.getElementById('mob-notif-readall-btn');
    if (readAllBtn) {
      readAllBtn.onclick = () => {
        NotificationService.markAllAsRead();
        this.renderNotifSheet();
        this.updateNotifBadge();
      };
    }

    const items = document.querySelectorAll('.mob-notif-item');
    items.forEach(el => {
      el.onclick = () => {
        const id = el.dataset.id;
        const targetHash = el.dataset.hash;
        NotificationService.markAsRead(id);
        this.closeNotifSheet();
        if (targetHash) {
          window.location.hash = targetHash;
        }
      };
    });
  }
};

if (typeof window !== 'undefined') {
  window.MobileNav = MobileNav;
}
