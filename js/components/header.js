// Global Top Header Component

import { ERP_DATA, setCurrentUserRole } from '../data/mockData.js';
import { Toast } from './toast.js';
import { NotificationService } from '../services/notificationService.js';

export const Header = {
  notifSubscribed: false,

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const isCollapsed = localStorage.getItem('dfl_sidebar_collapsed') === 'true';
    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
    const unreadNotifs = NotificationService.getUnread();
    const unreadCount = unreadNotifs.length;

    container.innerHTML = `
      <header class="bg-white border-b border-[#E2E8F0] h-14 px-5 flex items-center justify-between select-none rounded-t-2xl">
        <!-- Left: Global Inline Search (Direct typing, no popup modal) -->
        <div class="relative" id="header-search-container">
          <div class="w-64 sm:w-80 relative flex items-center">
            <svg class="w-4 h-4 text-[#94A3B8] pointer-events-none" style="left: 12px; width: 16px; height: 16px; position: absolute; top: 50%; transform: translateY(-50%); pointer-events: none; z-index: 5;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input 
              type="text" 
              id="header-global-search-input" aria-label="Search ERP records across modules" 
              placeholder="Search ERP records..." 
              autocomplete="off"
              style="padding-left: 42px !important; padding-right: 36px !important;"
              class="w-full py-1.5 bg-[#F8FAFC] hover:bg-[#F1F5F9] focus:bg-white text-[#0F172A] placeholder-[#94A3B8] border border-[#E2E8F0] focus:border-[#00A4B7] rounded-full text-xs transition-colors focus:outline-none shadow-xs"
            />
            <button 
              type="button" 
              id="header-search-clear-btn" aria-label="Clear search input" 
              style="display: none !important; padding: 6px !important; min-height: auto !important;"
              class="hidden absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0F172A] p-[6px] rounded-full hover:bg-[#E2E8F0] transition-colors cursor-pointer items-center justify-center"
              title="Clear Search"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <!-- Live Inline Search Dropdown (Appears directly under the input, no popup modal) -->
          <div 
            id="header-search-dropdown" 
            class="hidden absolute left-0 top-full mt-1.5 w-80 sm:w-[480px] bg-white border border-[#E2E8F0] rounded-xl z-50 overflow-hidden shadow-xl"
            style="max-width: calc(100vw - 32px);"
          >
            <div id="header-search-results-content" class="max-h-96 overflow-y-auto p-2.5 text-xs"></div>
          </div>
        </div>

        <!-- Right: Actions, Notifications & Profile -->
        <div class="flex items-center gap-2">
          <!-- Notifications -->
          <div class="relative" id="header-notifications-container">
            <button id="header-notifications-btn" class="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] rounded-full relative transition-colors cursor-pointer border border-[#E2E8F0]" title="Notifications" aria-label="Notifications, ${unreadCount} unread" aria-haspopup="true" aria-expanded="false">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
              ${unreadCount > 0 ? `<span id="header-notif-badge" class="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 bg-[#EF4444] text-white text-[9px] font-extrabold rounded-full flex items-center justify-center ring-2 ring-white">${unreadCount > 9 ? '9+' : unreadCount}</span>` : ''}
            </button>
            <div id="notifications-dropdown" class="hidden absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl border border-[#DFE1E6] shadow-xl z-50 text-xs overflow-hidden">
              <!-- Rendered via Header.renderNotificationDropdownContent() -->
            </div>
          </div>

          <!-- User Profile Dropdown -->
          <div class="relative pl-1 border-l border-[#E2E8F0]">
            <button id="user-menu-btn" class="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-[#F8FAFC] transition-colors cursor-pointer">
              <img src="${ERP_DATA.currentUser.avatar}" alt="Avatar" class="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full object-cover ring-1 ring-[#E2E8F0]" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <div class="hidden lg:flex flex-col text-left">
                <span class="text-xs font-semibold text-[#0F172A] leading-tight">${ERP_DATA.currentUser.name}</span>
                <span class="text-[10px] text-[#64748B] leading-tight" id="user-role-badge">${ERP_DATA.currentUser.role}</span>
              </div>
              <svg class="w-3.5 h-3.5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>

            <!-- User Menu Popup -->
            <div id="user-dropdown-menu" class="hidden absolute right-0 mt-2 w-64 bg-white rounded-xl border border-[#DFE1E6] shadow-xl py-2 px-[6px] z-[100] text-xs">
              <div class="px-3 py-2 border-b border-[#EBECF0]">
                <div class="font-bold text-[#172B4D]">${ERP_DATA.currentUser.name}</div>
                <div class="text-[11px] text-[#5E6C84]">${ERP_DATA.currentUser.email}</div>
                <div class="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#F0F9FF] text-[#0284C7] font-semibold text-[10px] rounded mt-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
                  ${ERP_DATA.currentUser.role}
                </div>
              </div>

              <!-- My Profile Action -->
              <div class="p-1 border-b border-[#EBECF0]">
                <button type="button" id="my-profile-menu-btn" class="w-full text-left px-3 py-2 hover:bg-[#F0F9FF] text-[#172B4D] hover:text-[#00A4B7] rounded-lg font-semibold flex items-center gap-2 transition-colors cursor-pointer">
                  <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  <span>My Profile</span>
                </button>
              </div>

              <!-- Quick Switch Role Action -->
              <div class="p-1 border-b border-[#EBECF0]">
                <button type="button" id="switch-role-menu-btn" class="w-full text-left px-3 py-2 hover:bg-[#F0F9FF] text-[#0284C7] rounded-lg font-semibold flex items-center justify-between transition-colors cursor-pointer" title="Quick toggle role between Admin and Super Admin">
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                    <span>${ERP_DATA.currentUser?.roleCode ? 'Switch to Admin' : `Switch to ${isSuperAdmin ? 'Admin' : 'Super Admin'}`}</span>
                  </div>
                  <span class="text-[9.5px] font-bold px-1.5 py-0.5 rounded ${isSuperAdmin ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#E0F2FE] text-[#0284C7]'}">${ERP_DATA.currentUser?.roleCode ? 'Admin' : (isSuperAdmin ? 'Operational' : 'Corporate')}</span>
                </button>
              </div>

              <div class="p-1">
                <button id="logout-menu-btn" class="w-full text-left px-3 py-2 hover:bg-[#FFEBE6] text-[#BF2600] rounded-lg font-medium flex items-center gap-2 transition-colors cursor-pointer">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;

    this.renderNotificationDropdownContent();
    this.bindEvents();

    if (!this.notifSubscribed) {
      this.notifSubscribed = true;
      NotificationService.subscribe(() => {
        this.renderNotificationDropdownContent();
      });
    }
  },

  renderNotificationDropdownContent() {
    const unreadNotifs = NotificationService.getUnread();
    const unreadCount = unreadNotifs.length;
    const dropdown = document.getElementById('notifications-dropdown');
    const btn = document.getElementById('header-notifications-btn');

    if (btn) {
      btn.setAttribute('aria-label', `Notifications, ${unreadCount} unread`);
      let badgeEl = btn.querySelector('#header-notif-badge');
      if (unreadCount > 0) {
        if (!badgeEl) {
          badgeEl = document.createElement('span');
          badgeEl.id = 'header-notif-badge';
          badgeEl.className = 'absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 bg-[#EF4444] text-white text-[9px] font-extrabold rounded-full flex items-center justify-center ring-2 ring-white';
          btn.appendChild(badgeEl);
        }
        badgeEl.textContent = unreadCount > 9 ? '9+' : unreadCount;
      } else if (badgeEl) {
        badgeEl.remove();
      }
    }

    if (!dropdown) return;

    dropdown.innerHTML = `
      <div class="px-3.5 py-2.5 font-bold text-[#172B4D] border-b border-[#F1F5F9] flex items-center bg-[#F8FAFC]">
        <span class="text-xs font-bold text-[#172B4D]">Notifications</span>
      </div>

      <div class="divide-y divide-[#F1F5F9] max-h-72 overflow-y-auto">
        ${unreadCount === 0 ? `
          <div class="p-6 text-center text-[#5E6C84]">
            <div class="w-10 h-10 mx-auto rounded-full bg-[#E3FCEF] text-[#006644] flex items-center justify-center mb-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </div>
            <p class="font-bold text-[#172B4D] text-xs">All caught up!</p>
            <p class="text-[11px] text-[#64748B] mt-0.5">No unread notifications right now.</p>
          </div>
        ` : unreadNotifs.map(item => {
          let dotColor = 'bg-[#00A4B7]';
          if (item.severity === 'success') {
            dotColor = 'bg-[#006644]';
          } else if (item.severity === 'warning') {
            dotColor = 'bg-[#FF8B00]';
          } else if (item.severity === 'purple') {
            dotColor = 'bg-[#403294]';
          }
          return `
            <div class="p-3 hover:bg-[#F8FAFC] cursor-pointer transition-colors header-notif-item" data-id="${item.id}" data-hash="${item.targetHash || ''}">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full ${dotColor} shrink-0"></span>
                <span class="text-xs font-bold text-[#172B4D] break-words">${item.title}</span>
              </div>
              <div class="text-xs text-[#5E6C84] mt-1 leading-snug break-words">${item.message}</div>
              <div class="text-[11px] text-[#94A3B8] mt-1.5 flex items-center gap-1.5 font-medium">
                <span>${item.time}</span>
                <span>•</span>
                <span>${item.category}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="p-2 border-t border-[#F1F5F9] bg-[#F8FAFC]">
        <button type="button" id="header-notif-see-all-btn" class="w-full py-1.5 px-3 text-center text-xs font-bold text-[#00A4B7] hover:text-[#008F9F] hover:bg-white rounded-lg transition-colors cursor-pointer border border-transparent hover:border-[#DFE1E6] flex items-center justify-center gap-1.5">
          <span>See All Notifications</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    `;

    this.bindNotificationDropdownEvents();
  },

  bindNotificationDropdownEvents() {
    const dropdown = document.getElementById('notifications-dropdown');
    if (!dropdown) return;

    // See all button -> route to notifications page
    const seeAllBtn = document.getElementById('header-notif-see-all-btn');
    if (seeAllBtn) {
      seeAllBtn.onclick = (e) => {
        e.stopPropagation();
        dropdown.classList.add('hidden');
        window.location.hash = '#/notifications';
      };
    }

    // Clicking notification item -> mark read & go to destination
    dropdown.querySelectorAll('.header-notif-item').forEach(itemEl => {
      itemEl.onclick = (e) => {
        const id = itemEl.dataset.id;
        const hash = itemEl.dataset.hash;
        if (id) {
          NotificationService.markAsRead(id);
        }
        dropdown.classList.add('hidden');
        if (hash) {
          window.location.hash = hash;
        }
      };
    });
  },

  bindEvents() {
    // Hamburger Sidebar Toggle (Collapse into Icon-Only mode instead of completely hiding)
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    if (toggleBtn) {
      toggleBtn.onclick = (e) => {
        e.stopPropagation();
        Sidebar.toggleCollapse();
      };
    }

    // Notifications Dropdown
    const notifBtn = document.getElementById('header-notifications-btn');
    const notifMenu = document.getElementById('notifications-dropdown');
    const userBtn = document.getElementById('user-menu-btn');
    const userMenu = document.getElementById('user-dropdown-menu');

    if (notifBtn && notifMenu) {
      notifBtn.onclick = (e) => {
        e.stopPropagation();
        if (userMenu) userMenu.classList.add('hidden');
        const isHidden = notifMenu.classList.contains('hidden');
        if (isHidden) {
          this.renderNotificationDropdownContent();
          notifMenu.classList.remove('hidden');
        } else {
          notifMenu.classList.add('hidden');
        }
      };
    }

    // User Dropdown
    if (userBtn && userMenu) {
      userBtn.onclick = (e) => {
        e.stopPropagation();
        if (notifMenu) notifMenu.classList.add('hidden');
        userMenu.classList.toggle('hidden');
      };
    }

    // Close on click outside
    document.addEventListener('click', () => {
      if (notifMenu) notifMenu.classList.add('hidden');
      if (userMenu) userMenu.classList.add('hidden');
    });

    // Inline Live Search in Header (Direct input, no popup modal)
    const searchInput = document.getElementById('header-global-search-input');
    const searchDropdown = document.getElementById('header-search-dropdown');
    const searchContent = document.getElementById('header-search-results-content');
    const clearBtn = document.getElementById('header-search-clear-btn');

    if (searchInput && searchDropdown && searchContent) {
      const updateClearBtnState = () => {
        if (!clearBtn) return;
        const hasText = searchInput.value.trim().length > 0;
        if (hasText) {
          clearBtn.classList.remove('hidden');
          clearBtn.style.display = 'inline-flex';
        } else {
          clearBtn.classList.add('hidden');
          clearBtn.style.display = 'none';
        }
      };

      const renderResults = () => {
        const query = searchInput.value.trim();
        updateClearBtnState();
        if (!query) {
          searchContent.innerHTML = '';
          searchDropdown.classList.add('hidden');
          return;
        }
        if (window.App && typeof window.App.performGlobalSearch === 'function') {
          const resultsHtml = window.App.performGlobalSearch(query);
          if (resultsHtml && resultsHtml.trim()) {
            searchContent.innerHTML = resultsHtml;
            searchDropdown.classList.remove('hidden');
            if (window.App.bindSearchResultClicks) {
              window.App.bindSearchResultClicks(searchDropdown);
            }
          } else {
            searchContent.innerHTML = '';
            searchDropdown.classList.add('hidden');
          }
        }
      };

      // Initially ensure clear button is hidden
      updateClearBtnState();

      searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) {
          renderResults();
        } else {
          searchDropdown.classList.add('hidden');
        }
      });

      searchInput.addEventListener('input', () => {
        renderResults();
      });

      searchInput.addEventListener('keyup', () => {
        updateClearBtnState();
      });

      if (clearBtn) {
        clearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          searchInput.value = '';
          updateClearBtnState();
          searchContent.innerHTML = '';
          searchDropdown.classList.add('hidden');
          searchInput.focus();
        });
      }

      // Close dropdown on click outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#header-search-container')) {
          searchDropdown.classList.add('hidden');
        }
      });

      // Close dropdown on Escape
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          searchDropdown.classList.add('hidden');
          searchInput.blur();
        }
      });
    }

    // My Profile Link in User Dropdown
    const myProfileBtn = document.getElementById('my-profile-menu-btn');
    if (myProfileBtn) {
      myProfileBtn.onclick = (e) => {
        e.stopPropagation();
        if (userMenu) userMenu.classList.add('hidden');
        window.location.hash = '#/profile';
      };
    }

    // Quick Switch Role (Admin <-> Super Admin)
    const switchRoleBtn = document.getElementById('switch-role-menu-btn');
    if (switchRoleBtn) {
      switchRoleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        localStorage.removeItem('dfl_current_user');
        sessionStorage.removeItem('dfl_login_user');
        const nextRole = (ERP_DATA.currentUser?.roleCode || ERP_DATA.currentUser?.role === 'Super Admin') ? 'Admin' : 'Super Admin';
        setCurrentUserRole(nextRole);
        const existing = document.getElementById('erp-app-shell');
        if (existing) existing.remove();
        Toast.show(`Switched active context to ${nextRole}`, 'success', 'Role Updated');
        if (nextRole === 'Super Admin') {
          window.location.hash = '#/dashboard/overview/system-overview';
        } else {
          window.location.hash = '#/purchase/dashboard/rm-dashboard';
        }
      });
    }

    // Logout
    const logoutBtn = document.getElementById('logout-menu-btn');
    if (logoutBtn) {
      logoutBtn.onclick = () => {
        localStorage.removeItem('dfl_current_user');
        sessionStorage.removeItem('dfl_login_user');
        const existing = document.getElementById('erp-app-shell');
        if (existing) existing.remove();
        window.location.hash = '#/login';
      };
    }
  }
};
