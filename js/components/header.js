// Global Top Header Component

import { ERP_DATA, setCurrentUserRole } from '../data/mockData.js';
import { Toast } from './toast.js';

export const Header = {
  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const isCollapsed = localStorage.getItem('dfl_sidebar_collapsed') === 'true';
    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';

    container.innerHTML = `
      <header class="bg-white border-b border-[#E2E8F0] h-14 px-5 flex items-center justify-between select-none rounded-t-2xl">
        <!-- Left: Global Inline Search (Direct typing, no popup modal) -->
        <div class="relative" id="header-search-container">
          <div class="w-64 sm:w-80 relative flex items-center">
            <svg class="w-4 h-4 text-[#94A3B8] pointer-events-none" style="left: 12px; width: 16px; height: 16px; position: absolute; top: 50%; transform: translateY(-50%); pointer-events: none; z-index: 5;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input 
              type="text" 
              id="header-global-search-input" 
              placeholder="Search ERP records..." 
              autocomplete="off"
              style="padding-left: 42px !important; padding-right: 36px !important;"
              class="w-full py-1.5 bg-[#F8FAFC] hover:bg-[#F1F5F9] focus:bg-white text-[#0F172A] placeholder-[#94A3B8] border border-[#E2E8F0] focus:border-[#00A4B7] rounded-full text-xs transition-colors focus:outline-none shadow-xs"
            />
            <button 
              type="button" 
              id="header-search-clear-btn" 
              style="display: none !important;"
              class="hidden absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0F172A] p-0.5 rounded-full hover:bg-[#E2E8F0] transition-colors cursor-pointer items-center justify-center"
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
          <div class="relative">
            <button id="header-notifications-btn" class="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] rounded-full relative transition-colors cursor-pointer border border-[#E2E8F0]" title="Notifications">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
              <span class="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full ring-2 ring-white"></span>
            </button>
            <div id="notifications-dropdown" class="hidden absolute right-0 mt-2 w-80 bg-white rounded-xl border border-[#E2E8F0] shadow-xl py-2 z-50 text-xs">
              <div class="px-3 py-1.5 font-bold text-[#0F172A] border-b border-[#F1F5F9] flex justify-between items-center">
                <span>Notifications (3 New)</span>
                <span class="text-[10px] text-[#0284C7] cursor-pointer hover:underline font-semibold">Mark all read</span>
              </div>
              <div class="divide-y divide-[#F1F5F9] max-h-64 overflow-y-auto">
                <div class="p-3 hover:bg-[#F8FAFC] cursor-pointer">
                  <div class="flex items-center gap-1.5 text-[#0284C7] font-semibold text-[11px]">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span> RM Arrival #RMA-2026-00341
                  </div>
                  <div class="text-[#475569] mt-0.5">Godavari Coastal 2,980 KG Vannamei Shrimp staged at Dock #1 awaiting QC approval.</div>
                  <div class="text-[10px] text-[#94A3B8] mt-1">20 minutes ago</div>
                </div>
                <div class="p-3 hover:bg-[#F8FAFC] cursor-pointer">
                  <div class="flex items-center gap-1.5 text-[#15803D] font-semibold text-[11px]">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span> QC Antibiotic Clearance
                  </div>
                  <div class="text-[#475569] mt-0.5">LOT-2026-00128 Seabass passed all rapid nitrofurans & organoleptic panels.</div>
                  <div class="text-[10px] text-[#94A3B8] mt-1">1 hour ago</div>
                </div>
                <div class="p-3 hover:bg-[#F8FAFC] cursor-pointer">
                  <div class="flex items-center gap-1.5 text-[#6D28D9] font-semibold text-[11px]">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#6D28D9]"></span> Export Vessel Gate-In
                  </div>
                  <div class="text-[#475569] mt-0.5">Container ONEU-440912-8 (14 MT Black Tiger) cleared customs for Tokyo.</div>
                  <div class="text-[10px] text-[#94A3B8] mt-1">3 hours ago</div>
                </div>
              </div>
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
            <div id="user-dropdown-menu" class="hidden absolute right-0 mt-2 w-64 bg-white rounded-xl border border-[#DFE1E6] shadow-xl py-2 z-[100] text-xs">
              <div class="px-3 py-2 border-b border-[#EBECF0]">
                <div class="font-bold text-[#172B4D]">${ERP_DATA.currentUser.name}</div>
                <div class="text-[11px] text-[#5E6C84]">${ERP_DATA.currentUser.email}</div>
                <div class="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#F0F9FF] text-[#0284C7] font-semibold text-[10px] rounded mt-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
                  ${ERP_DATA.currentUser.role}
                </div>
              </div>



              <!-- Quick Switch Role Action -->
              <div class="p-1 border-b border-[#EBECF0]">
                <button type="button" id="switch-role-menu-btn" class="w-full text-left px-3 py-2 hover:bg-[#F0F9FF] text-[#0284C7] rounded-lg font-semibold flex items-center justify-between transition-colors cursor-pointer" title="Quick toggle role between Admin and Super Admin">
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                    <span>Switch to ${isSuperAdmin ? 'Admin' : 'Super Admin'}</span>
                  </div>
                  <span class="text-[9.5px] font-bold px-1.5 py-0.5 rounded ${isSuperAdmin ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#E0F2FE] text-[#0284C7]'}">${isSuperAdmin ? 'Operational' : 'Corporate'}</span>
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

    this.bindEvents();
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
        notifMenu.classList.toggle('hidden');
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



    // Quick Switch Role (Admin <-> Super Admin)
    const switchRoleBtn = document.getElementById('switch-role-menu-btn');
    if (switchRoleBtn) {
      switchRoleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const nextRole = ERP_DATA.currentUser?.role === 'Super Admin' ? 'Admin' : 'Super Admin';
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
        const existing = document.getElementById('erp-app-shell');
        if (existing) existing.remove();
        window.location.hash = '#/login';
      };
    }
  }
};
