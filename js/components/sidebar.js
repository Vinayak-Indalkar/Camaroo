import { LOGO_WHITE, LOGO_CAMAROO_WHITE } from '../data/logos.js';
import { ERP_DATA } from '../data/mockData.js';

export const ADMIN_NAV_HIERARCHY = [
  {
    id: "dashboard",
    title: "Home",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
    submenus: [
      {
        id: "overview",
        title: "Home",
        defaultTab: "general",
        tabs: [
          { id: "general", label: "General", hash: "#/settings/setup/general" },
          { id: "organization", label: "Organization", hash: "#/settings/setup/organization" },
          { id: "user-roles", label: "User & Roles", hash: "#/settings/setup/user-roles" },
          { id: "masters", label: "Masters", hash: "#/settings/setup/masters" }
        ]
      }
    ]
  }
];

// Super Admin Navigation Hierarchy (Dashboard, General, Master, Reports)
export const SUPER_ADMIN_NAV_HIERARCHY = [
  {
    id: "dashboard",
    title: "Home",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
    submenus: [
      {
        id: "overview",
        title: "Dashboard",
        defaultTab: "system-overview",
        tabs: [
          { id: "system-overview", label: "Dashboard", hash: "#/dashboard/overview/system-overview" }
        ]
      }
    ]
  },
  {
    id: "general",
    title: "General",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    submenus: [
      {
        id: "configuration",
        title: "Configuration",
        defaultTab: "clients",
        tabs: [
          { id: "clients", label: "Clients", hash: "#/general/configuration/clients" },
          { id: "users", label: "Users", hash: "#/general/configuration/users" },
          { id: "roles", label: "Roles", hash: "#/general/configuration/roles" },
          { id: "menus", label: "Menus", hash: "#/general/configuration/menus" }
        ],
        extraAction: {
          id: "audit-history",
          label: "Audit History",
          hash: "#/general/configuration/audit-history",
          icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
        }
      }
    ]
  },
  {
    id: "super-reports",
    title: "Reports",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
    submenus: [
      {
        id: "client-reports",
        title: "Client Reports",
        defaultTab: "clients-overview",
        tabs: [
          { id: "clients-overview", label: "Client Section Reports", hash: "#/super-reports/client-reports/clients-overview" }
        ]
      }
    ]
  },
  {
    id: "settings",
    title: "Settings",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    submenus: [
      {
        id: "custom",
        title: "Customizer",
        defaultTab: "forms",
        tabs: [
          { id: "forms", label: "Forms", hash: "#/settings/custom/forms" },
          { id: "fields-customizer", label: "Fields Customizer", hash: "#/settings/custom/fields-customizer" },
          { id: "query-editor", label: "Query Editor", hash: "#/settings/custom/query-editor" }
        ]
      }
    ]
  }
];

export const NAV_HIERARCHY = [...ADMIN_NAV_HIERARCHY, ...SUPER_ADMIN_NAV_HIERARCHY];

export function getAssignedModuleIdsForRole(roleCode, roleName) {
  const code = (roleCode || '').toUpperCase();
  const name = (roleName || '').toLowerCase();
  
  if (code === 'ROL-ADM' || name.includes('super / system admin') || name.includes('system admin') || name === 'admin') {
    return ['dashboard', 'sales', 'purchase', 'preprocessing', 'quality', 'production', 'coldstore', 'inventory', 'reports', 'setup', 'settings'];
  }
  if (code === 'ROL-MGR' || name.includes('operations / sales manager') || name.includes('manager')) {
    return ['dashboard', 'purchase', 'preprocessing', 'production', 'coldstore', 'sales', 'reports'];
  }
  if (code === 'ROL-SUP' || name.includes('quality & line supervisor') || name.includes('supervisor') || name.includes('quality')) {
    return ['dashboard', 'purchase', 'preprocessing', 'quality'];
  }
  if (code === 'ROL-OPR' || name.includes('floor & logistics operator') || name.includes('operator')) {
    return ['dashboard', 'production', 'coldstore', 'inventory'];
  }
  if (code === 'ROL-VIE' || name.includes('finance / audit viewer') || name.includes('viewer') || name.includes('audit')) {
    return ['dashboard', 'sales', 'reports'];
  }
  return ['dashboard', 'sales', 'purchase', 'preprocessing', 'quality', 'production', 'coldstore', 'inventory', 'reports', 'setup', 'settings'];
}


export const Sidebar = {
  isCollapsed: localStorage.getItem('dfl_sidebar_collapsed') === 'true' || window.innerWidth <= 767,
  activeModuleId: 'purchase',
  activeSubmenuId: 'dashboard',
  activeTabId: 'rm-dashboard',

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    localStorage.setItem('dfl_sidebar_collapsed', this.isCollapsed ? 'true' : 'false');

    const sidebarContainer = document.getElementById('sidebar-container');
    const layoutWrapper = document.getElementById('main-layout-wrapper');

    if (sidebarContainer && layoutWrapper) {
      if (this.isCollapsed) {
        sidebarContainer.classList.add('is-collapsed');
        layoutWrapper.classList.add('is-collapsed');
      } else {
        sidebarContainer.classList.remove('is-collapsed');
        layoutWrapper.classList.remove('is-collapsed');
      }
    }

    const headerCollapseIcon = document.getElementById('header-collapse-icon');
    const headerToggleBtn = document.getElementById('sidebar-toggle-btn');
    if (headerCollapseIcon) {
      if (this.isCollapsed) {
        headerCollapseIcon.classList.add('rotate-180');
        if (headerToggleBtn) headerToggleBtn.title = 'Expand Sidebar';
      } else {
        headerCollapseIcon.classList.remove('rotate-180');
        if (headerToggleBtn) headerToggleBtn.title = 'Collapse Sidebar';
      }
    }

    this.render('sidebar-container', window.location.hash);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 150);
  },

  render(containerId, activeHash = '#/purchase/dashboard/rm-dashboard') {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Parse active hash: #/module/submenu/tab
    const clean = (activeHash || '').replace(/^#\/?/, '').replace(/^\/+/, '');
    const parts = clean.split('/');
    const modId = parts[0] || 'purchase';
    const subId = parts[1] || 'dashboard';
    const tabId = parts[2] || '';

    this.activeModuleId = modId;
    this.activeSubmenuId = subId;
    this.activeTabId = tabId;

    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';

    if (this.isCollapsed) {
      // Collapsed Icon-Only Floated Sidebar Mode (Width: 68px, Rounded Corners)
      container.innerHTML = `
        <div class="relative h-full w-full">
          <aside id="erp-sidebar" class="bg-[#0F172A] text-[#94A3B8] w-full h-full flex flex-col transition-all duration-300 select-none border border-[#1E293B] rounded-[16px] overflow-visible">
            <!-- Collapsed Logo Icon Header -->
            <div class="h-14 px-2 py-2 flex items-center justify-center border-b border-[#1E293B] bg-[#0B0F19] shrink-0 rounded-t-[16px]" title="${isSuperAdmin ? 'Camaroo ERP' : 'Devi Fisheries'}">
              ${isSuperAdmin ? `
                <div class="w-10 h-10 rounded-xl bg-[#0284C7] border border-[#38BDF8]/30 flex items-center justify-center font-black text-white text-xs shadow-xs">
                  CMR
                </div>
              ` : `
                <img src="${LOGO_WHITE}" alt="Devi Fisheries" class="h-8 w-8 object-contain shrink-0" />
              `}
            </div>

            <!-- Navigation Scrollable Icons Area -->
            <div class="flex-1 flex flex-col py-3 px-2 space-y-2 overflow-visible bg-[#0F172A]" id="sidebar-nav-groups">
              ${this.renderCollapsedNavHierarchy()}
            </div>

            <!-- Bottom Sticky Settings -->
            <div class="shrink-0 py-3 px-2 border-t border-[#1E293B] flex justify-center bg-[#0F172A] rounded-b-[16px]" id="sidebar-bottom-settings-collapsed">
              ${this.renderCollapsedSettingsModule()}
            </div>
          </aside>

          <!-- Toggle Button: Half inside, half outside right edge -->
          <button 
            id="sidebar-edge-toggle-btn" 
            class="absolute -right-3 top-4 w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[#475569] hover:text-[#0284C7] hover:border-[#0284C7] flex items-center justify-center z-50 cursor-pointer shadow-xs transition-colors" 
            title="Expand Sidebar"
          >
            <svg class="w-3.5 h-3.5 rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg>
          </button>
        </div>
      `;
    } else {
      // Expanded Full Floated Sidebar Mode (Width: 272px, Rounded Corners)
      container.innerHTML = `
        <div class="relative h-full w-full">
          <aside id="erp-sidebar" class="bg-[#0F172A] text-[#94A3B8] w-full h-full flex flex-col transition-all duration-300 select-none border border-[#1E293B] rounded-[16px] overflow-hidden">
            <!-- Logo Branding Header -->
            <div class="h-14 px-4 py-2 flex items-center justify-between border-b border-[#1E293B] bg-[#0B0F19] shrink-0 rounded-t-[16px]">
              ${isSuperAdmin ? `
                <div class="flex items-center gap-2.5">
                  <img src="${LOGO_CAMAROO_WHITE}" alt="Camaroo" class="h-7 w-auto max-w-[160px] object-contain shrink-0" />
                </div>
              ` : `
                <div class="flex items-center gap-2.5 min-w-0">
                  <img src="${LOGO_WHITE}" alt="Devi Fisheries" class="h-9 w-auto object-contain shrink-0" />
                  <div class="leading-tight flex flex-col justify-center min-w-0">
                    <span class="text-sm font-bold text-white tracking-wide truncate">Devi Fisheries</span>
                    <span class="text-[9.5px] font-bold text-[#00A3BF] tracking-wider uppercase font-mono truncate">POWERED BY CAMAROO</span>
                  </div>
                </div>
              `}
            </div>

            <!-- Navigation Scrollable Area -->
            <div class="flex-1 flex flex-col overflow-y-auto py-3 px-3 space-y-1 bg-[#0F172A]" id="sidebar-nav-groups">
              ${this.renderNavHierarchy()}
            </div>

            <!-- Bottom Sticky Settings -->
            <div class="shrink-0 p-3 border-t border-[#1E293B] bg-[#0F172A] rounded-b-[16px]" id="sidebar-bottom-settings">
              ${this.renderSettingsModule()}
            </div>
          </aside>

          <!-- Toggle Button: Half inside, half outside right edge -->
          <button 
            id="sidebar-edge-toggle-btn" 
            class="absolute -right-3 top-4 w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[#475569] hover:text-[#0284C7] hover:border-[#0284C7] flex items-center justify-center z-50 cursor-pointer shadow-xs transition-colors" 
            title="Collapse Sidebar"
          >
            <svg class="w-3.5 h-3.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg>
          </button>
        </div>
      `;
    }

    this.bindEvents();
  },

  renderNavHierarchy() {
    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
    let allModules = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;
    if (!isSuperAdmin && (ERP_DATA.currentUser?.roleCode || ERP_DATA.currentUser?.role)) {
      const allowedModuleIds = getAssignedModuleIdsForRole(ERP_DATA.currentUser?.roleCode, ERP_DATA.currentUser?.role);
      allModules = allModules.filter(m => allowedModuleIds.includes(m.id));
    }
    const modules = allModules.filter(m => m.id !== 'settings');

    return modules.map(mod => {
      const isExpanded = mod.id === this.activeModuleId;
      const groupWrapperClass = 'nav-module-group mb-1';

      // Home: Direct navigation button without submenus or chevron
      if (mod.id === 'dashboard') {
        return `
          <div class="${groupWrapperClass}">
            <button 
              data-module-id="dashboard" 
              class="sidebar-mod-btn w-full px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${isExpanded ? 'bg-white/10 text-white font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
              title="Home"
            >
              <div class="flex items-center gap-2.5 truncate">
                <span class="w-4 h-4 flex items-center justify-center shrink-0 ${isExpanded ? 'text-[#00A4B7]' : 'text-[#94A3B8]'}">${mod.icon}</span>
                <span class="text-xs tracking-tight truncate ${isExpanded ? 'text-white' : 'text-[#94A3B8]'}">Home</span>
              </div>
              ${isExpanded ? `<span class="w-1.5 h-1.5 rounded-full bg-[#00A4B7] shrink-0"></span>` : ''}
            </button>
          </div>
        `;
      }

      // Super Admin: Clean direct menu buttons for non-settings modules
      if (isSuperAdmin && mod.id !== 'settings') {
        return `
          <div class="${groupWrapperClass}">
            <button 
              data-module-id="${mod.id}" 
              class="sidebar-mod-btn w-full px-3 py-2.5 rounded-lg text-xs font-bold flex items-center transition-colors cursor-pointer ${isExpanded ? 'bg-[#00A4B7] text-white shadow-xs' : 'text-[#CBD5E1] hover:bg-white/5 hover:text-white'}"
            >
              <div class="flex items-center gap-2.5 truncate">
                <span class="w-4 h-4 flex items-center justify-center shrink-0 ${isExpanded ? 'text-white' : 'text-[#64748B]'}">${mod.icon}</span>
                <span class="text-xs tracking-tight truncate">${mod.title}</span>
              </div>
            </button>
          </div>
        `;
      }
      
      // Admin: Standard accordion with submenus list
      let submenusHtml = '';
      if (isExpanded) {
        submenusHtml = `
          <div class="nav-submenus-list mt-1 ml-4 py-1 space-y-0.5">
            ${mod.submenus.map(sub => {
              const isSubActive = sub.id === this.activeSubmenuId;
              const defaultHash = sub.tabs[0]?.hash || `/#/${mod.id}/${sub.id}`;

              return `
                <div class="nav-submenu-block border-l-2 ${isSubActive ? 'border-[#00A4B7]' : 'border-[#334155] hover:border-[#64748B]'} pl-2.5 transition-colors">
                  <a 
                    href="${defaultHash}" 
                    class="flex items-center px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all ${isSubActive ? 'text-[#00A4B7] font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
                  >
                    <div class="flex items-center gap-2 truncate">
                      <span class="w-1.5 h-1.5 rounded-full ${isSubActive ? 'bg-[#00A4B7]' : 'bg-[#475569]'} shrink-0"></span>
                      <span class="truncate">${sub.title}</span>
                    </div>
                  </a>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      return `
        <div class="${groupWrapperClass}">
          <button 
            data-module-id="${mod.id}" 
            class="sidebar-mod-btn w-full px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-between transition-colors cursor-pointer text-[#94A3B8] hover:bg-white/5 hover:text-white ${isExpanded ? 'bg-white/5' : ''}"
          >
            <div class="flex items-center gap-2.5 truncate">
              <span class="w-4 h-4 flex items-center justify-center shrink-0 text-[#94A3B8]">${mod.icon}</span>
              <span class="text-xs tracking-tight truncate text-[#94A3B8]">${mod.title}</span>
            </div>
            <div class="flex items-center gap-1 shrink-0">
              <svg class="w-3.5 h-3.5 transform transition-transform duration-200 text-[#94A3B8] ${isExpanded ? 'rotate-90' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </button>
          ${submenusHtml}
        </div>
      `;
    }).join('');
  },

  renderCollapsedNavHierarchy() {
    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
    let allModules = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;
    if (!isSuperAdmin && (ERP_DATA.currentUser?.roleCode || ERP_DATA.currentUser?.role)) {
      const allowedModuleIds = getAssignedModuleIdsForRole(ERP_DATA.currentUser?.roleCode, ERP_DATA.currentUser?.role);
      allModules = allModules.filter(m => allowedModuleIds.includes(m.id));
    }
    const modules = allModules.filter(m => m.id !== 'settings');

    return modules.map((mod, index) => {
      const isCurrentMod = mod.id === this.activeModuleId;
      const groupWrapperClass = 'relative group flex justify-center nav-module-group';
      const isNearBottom = index >= modules.length - 3;

      // Home in collapsed mode: clean icon with tooltip, no submenus flyout
      if (mod.id === 'dashboard') {
        return `
          <div class="${groupWrapperClass}">
            <button 
              data-module-id="dashboard" 
              class="sidebar-mod-btn w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${isCurrentMod ? 'bg-[#00A4B7] text-white ring-2 ring-[#00A4B7] font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
              title="Home"
            >
              <span class="w-4 h-4 flex items-center justify-center ${isCurrentMod ? 'text-white' : ''}">${mod.icon}</span>
            </button>
            <div class="sidebar-flyout-container absolute left-full top-0 pl-2.5 w-auto hidden group-hover:block z-50 pointer-events-none">
              <div class="px-2.5 py-1.5 bg-[#18202F] border border-[#283548] rounded-lg text-white font-bold text-xs whitespace-nowrap shadow-xl">
                Home
              </div>
            </div>
          </div>
        `;
      }

      // If module has no submenus, show clean tooltip
      if (!mod.submenus || mod.submenus.length === 0) {
        return `
          <div class="${groupWrapperClass}">
            <button 
              data-module-id="${mod.id}" 
              class="sidebar-mod-btn w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${isCurrentMod ? 'bg-[#00A4B7] text-white ring-2 ring-[#00A4B7] font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
              title="${mod.title}"
            >
              <span class="w-4 h-4 flex items-center justify-center ${isCurrentMod ? 'text-white' : ''}">${mod.icon}</span>
            </button>
            <div class="sidebar-flyout-container absolute left-full top-0 pl-2.5 w-auto hidden group-hover:block z-50 pointer-events-none">
              <div class="px-2.5 py-1.5 bg-[#18202F] border border-[#283548] rounded-lg text-white font-bold text-xs whitespace-nowrap shadow-xl">
                ${mod.title}
              </div>
            </div>
          </div>
        `;
      }

      // Modules with submenus: Render rich hover flyout card matching user screenshot
      return `
        <div class="${groupWrapperClass}">
          <!-- Icon Button -->
          <button 
            data-module-id="${mod.id}" 
            class="sidebar-mod-btn w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${isCurrentMod ? 'bg-[#00A4B7] text-white ring-2 ring-[#00A4B7] font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
            title="${mod.title}"
          >
            <span class="w-4 h-4 flex items-center justify-center ${isCurrentMod ? 'text-white' : ''}">${mod.icon}</span>
          </button>

          <!-- Floating Flyout Menu on Hover (Zero-gap anti-flicker wrapper) -->
          <div class="sidebar-flyout-container absolute left-full ${isNearBottom ? 'bottom-0' : 'top-0'} pl-2.5 w-60 hidden group-hover:block z-50 transition-all pointer-events-auto">
            <div class="bg-[#18202F] border border-[#283548] rounded-2xl p-3 shadow-2xl">
              <!-- Module Title & Icon Header in Flyout -->
              <div class="flex items-center gap-2.5 pb-2.5 border-b border-[#283548] mb-2">
                <div class="w-8 h-8 rounded-lg bg-[#243048] flex items-center justify-center text-white shrink-0 shadow-xs">
                  ${mod.icon}
                </div>
                <span class="font-semibold text-white text-[14px] tracking-tight truncate">${mod.title}</span>
              </div>

              <!-- Submenus List in Flyout -->
              <div class="space-y-1">
                ${mod.submenus.map(sub => {
                  const isSubActive = isCurrentMod && (sub.id === this.activeSubmenuId);
                  const defaultHash = sub.tabs && sub.tabs.length > 0 ? sub.tabs[0].hash : ('#/' + mod.id + '/' + sub.id);
                  return `
                    <a 
                      href="${defaultHash}" 
                      class="sidebar-flyout-link flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors group/sub ${isSubActive ? 'text-[#00A4B7] font-bold bg-[#00A4B7]/15' : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'}"
                    >
                      <span class="truncate">${sub.title}</span>
                      <svg class="w-3.5 h-3.5 text-[#64748B] group-hover/sub:text-[#94A3B8] transform group-hover/sub:translate-x-0.5 transition-all shrink-0 ${isSubActive ? 'text-[#00A4B7]' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </a>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  renderSettingsModule() {
    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
    if (!isSuperAdmin && (ERP_DATA.currentUser?.roleCode || ERP_DATA.currentUser?.role)) {
      const allowedModuleIds = getAssignedModuleIdsForRole(ERP_DATA.currentUser?.roleCode, ERP_DATA.currentUser?.role);
      if (!allowedModuleIds.includes('settings')) return '';
    }
    const hierarchy = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;
    const settingsMod = hierarchy.find(m => m.id === 'settings');
    if (!settingsMod) return '';

    const isCurrentMod = this.activeModuleId === 'settings';

    // Super Admin: Has Customizer submenu
    if (isSuperAdmin) {
      const isExpanded = isCurrentMod;
      return `
        <div class="nav-module-group">
          <button 
            data-module-id="settings" 
            class="sidebar-mod-btn w-full px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${isCurrentMod ? 'bg-white/10 text-white font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
            title="Settings"
          >
            <div class="flex items-center gap-2.5 truncate">
              <span class="w-4 h-4 flex items-center justify-center shrink-0 ${isCurrentMod ? 'text-[#00A4B7]' : 'text-[#94A3B8]'}">${settingsMod.icon}</span>
              <span class="text-xs tracking-tight truncate ${isCurrentMod ? 'text-white' : 'text-[#94A3B8]'}">${settingsMod.title}</span>
            </div>
            <div class="flex items-center gap-1 shrink-0">
              <svg class="w-3.5 h-3.5 transform transition-transform duration-200 text-[#94A3B8] ${isExpanded ? 'rotate-90' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </button>
          ${isExpanded ? `
            <div class="nav-submenus-list mt-1 ml-4 py-1 space-y-0.5">
              ${settingsMod.submenus.map(sub => {
                const isSubActive = sub.id === this.activeSubmenuId;
                const defaultHash = sub.tabs[0]?.hash || `/#/settings/${sub.id}`;
                return `
                  <div class="nav-submenu-block border-l-2 ${isSubActive ? 'border-[#00A4B7]' : 'border-[#334155] hover:border-[#64748B]'} pl-2.5 transition-colors">
                    <a 
                      href="${defaultHash}" 
                      class="flex items-center px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all ${isSubActive ? 'text-[#00A4B7] font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
                    >
                      <div class="flex items-center gap-2 truncate">
                        <span class="w-1.5 h-1.5 rounded-full ${isSubActive ? 'bg-[#00A4B7]' : 'bg-[#475569]'} shrink-0"></span>
                        <span class="truncate">${sub.title}</span>
                      </div>
                    </a>
                  </div>
                `;
              }).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    // Admin role: Clean direct button without submenus
    return `
      <div class="nav-module-group">
        <button 
          data-module-id="settings" 
          class="sidebar-mod-btn w-full px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${isCurrentMod ? 'bg-white/10 text-white font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
          title="Settings"
        >
          <div class="flex items-center gap-2.5 truncate">
            <span class="w-4 h-4 flex items-center justify-center shrink-0 ${isCurrentMod ? 'text-[#00A4B7]' : 'text-[#94A3B8]'}">${settingsMod.icon}</span>
            <span class="text-xs tracking-tight truncate ${isCurrentMod ? 'text-white' : 'text-[#94A3B8]'}">${settingsMod.title}</span>
          </div>
          ${isCurrentMod ? `<span class="w-1.5 h-1.5 rounded-full bg-[#00A4B7] shrink-0"></span>` : ''}
        </button>
      </div>
    `;
  },

  renderCollapsedSettingsModule() {
    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
    if (!isSuperAdmin && (ERP_DATA.currentUser?.roleCode || ERP_DATA.currentUser?.role)) {
      const allowedModuleIds = getAssignedModuleIdsForRole(ERP_DATA.currentUser?.roleCode, ERP_DATA.currentUser?.role);
      if (!allowedModuleIds.includes('settings')) return '';
    }
    const hierarchy = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;
    const settingsMod = hierarchy.find(m => m.id === 'settings');
    if (!settingsMod) return '';

    const isCurrentMod = settingsMod.id === this.activeModuleId;

    const items = isSuperAdmin ? [
      { id: 'forms', title: 'Forms', hash: '#/settings/custom/forms' },
      { id: 'fields-customizer', title: 'Fields Customizer', hash: '#/settings/custom/fields-customizer' },
      { id: 'query-editor', title: 'Query Editor', hash: '#/settings/custom/query-editor' }
    ] : [
      { id: 'general', title: 'General', hash: '#/settings/setup/general' },
      { id: 'organization', title: 'Organization', hash: '#/settings/setup/organization' },
      { id: 'user-roles', title: 'User & Roles', hash: '#/settings/setup/user-roles' },
      { id: 'masters', title: 'Masters', hash: '#/settings/setup/masters' }
    ];

    return `
      <div class="relative group flex justify-center nav-module-group w-full">
        <!-- Icon Button -->
        <button 
          data-module-id="settings" 
          class="sidebar-mod-btn w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${isCurrentMod ? 'bg-[#00A4B7] text-white ring-2 ring-[#00A4B7] font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
          title="Settings"
        >
          <span class="w-4 h-4 flex items-center justify-center ${isCurrentMod ? 'text-white' : ''}">${settingsMod.icon}</span>
        </button>

        <!-- Floating Flyout Menu on Hover (Opens upwards from bottom) -->
        <div class="sidebar-flyout-container absolute left-full bottom-0 pl-2.5 w-60 hidden group-hover:block z-50 transition-all pointer-events-auto">
          <div class="bg-[#18202F] border border-[#283548] rounded-2xl p-3 shadow-2xl">
            <!-- Header -->
            <div class="flex items-center gap-2.5 pb-2.5 border-b border-[#283548] mb-2">
              <div class="w-8 h-8 rounded-lg bg-[#243048] flex items-center justify-center text-white shrink-0 shadow-xs">
                ${settingsMod.icon}
              </div>
              <span class="font-semibold text-white text-[14px] tracking-tight truncate">${settingsMod.title}</span>
            </div>

            <!-- Submenus List in Flyout -->
            <div class="space-y-1">
              ${items.map(item => {
                const isItemActive = isCurrentMod && (this.activeTabId === item.id || this.activeSubmenuId === item.id);
                return `
                  <a 
                    href="${item.hash}" 
                    class="sidebar-flyout-link flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors group/sub ${isItemActive ? 'text-[#00A4B7] font-bold bg-[#00A4B7]/15' : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'}"
                  >
                    <span class="truncate">${item.title}</span>
                    <svg class="w-3.5 h-3.5 text-[#64748B] group-hover/sub:text-[#94A3B8] transform group-hover/sub:translate-x-0.5 transition-all shrink-0 ${isItemActive ? 'text-[#00A4B7]' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </a>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  bindEvents() {
    const modButtons = document.querySelectorAll('.sidebar-mod-btn');
    modButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const modId = btn.dataset.moduleId;
        const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
        const targetHierarchy = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;
        const targetMod = targetHierarchy.find(m => m.id === modId) || NAV_HIERARCHY.find(m => m.id === modId);

        // Dashboard direct click navigation
        if (modId === 'dashboard') {
          this.activeModuleId = 'dashboard';
          window.location.hash = '#/dashboard/overview/system-overview';
          return;
        }

        // Settings direct click navigation
        if (modId === 'settings') {
          this.activeModuleId = 'settings';
          if (isSuperAdmin) {
            window.location.hash = '#/settings/custom/forms';
          } else {
            window.location.hash = '#/settings/setup/general';
          }
          return;
        }

        // Super Admin: Direct single-click navigation for non-settings modules
        if (isSuperAdmin && modId !== 'settings') {
          this.activeModuleId = modId;
          if (targetMod && targetMod.submenus.length > 0) {
            const firstSub = targetMod.submenus[0];
            const firstTab = firstSub.tabs[0];
            if (firstTab && firstTab.hash) {
              window.location.hash = firstTab.hash;
            }
          }
          return;
        }

        // If clicking on already active module, toggle accordion
        if (this.activeModuleId === modId) {
          const subGroup = btn.nextElementSibling;
          if (subGroup && subGroup.classList.contains('nav-submenus-list')) {
            subGroup.classList.toggle('hidden');
            const arrow = btn.querySelector('svg.transform');
            if (arrow) arrow.classList.toggle('rotate-90');
          }
          return;
        }

        this.activeModuleId = modId;
        if (targetMod && targetMod.submenus.length > 0) {
          const firstSub = targetMod.submenus[0];
          const firstTab = firstSub.tabs[0];
          window.location.hash = firstTab.hash;
        }
      });
    });

    const flyoutLinks = document.querySelectorAll('.sidebar-flyout-link');
    flyoutLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href) {
          window.location.hash = href;
        }
      });
    });

    const edgeToggleBtn = document.getElementById('sidebar-edge-toggle-btn');
    if (edgeToggleBtn) {
      edgeToggleBtn.onclick = (e) => {
        e.stopPropagation();
        this.toggleCollapse();
      };
    }
  }
};
