// On-Screen Horizontal Tab Bar Component

import { NAV_HIERARCHY } from './sidebar.js';

export const TabBar = {
  render(containerId, activeHash) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    const clean = (activeHash || '').replace(/^#\/?/, '').replace(/^\/+/, '');
    const parts = clean.split('/');
    const modId = parts[0] || 'purchase';
    let subId = parts[1] || 'dashboard';
    let tabId = parts[2] || '';

    const module = NAV_HIERARCHY.find(m => m.id === modId);
    if (!module) return null;

    let submenu = module.submenus.find(s => s.id === subId);
    if (!submenu) {
      submenu = module.submenus[0];
      if (submenu && submenu.tabs.some(t => t.id === subId)) {
        tabId = subId;
      }
    }
    if (!submenu || submenu.tabs.length <= 1 || submenu.id === 'qc-operations') {
      container.innerHTML = '';
      return null;
    }

    const currentTabId = tabId || submenu.defaultTab;

    // Filter out audit-history from regular tabs list
    const visibleTabs = submenu.tabs.filter(t => t.id !== 'audit-history');

    // Check for extra action icon (e.g. Audit History on General Configuration)
    const isGeneralConfig = (modId === 'general' && (subId === 'configuration' || subId === 'general'));
    const extraAction = submenu.extraAction || (isGeneralConfig ? {
      id: "audit-history",
      label: "Audit History",
      hash: "javascript:void(0)",
      icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
    } : null);

    const isExtraActive = extraAction && currentTabId === extraAction.id;

    container.innerHTML = `
      <nav aria-label="${submenu.title} tabs navigation" class="mb-1">
        <div class="flex items-center justify-between gap-2">
          <div 
            role="tablist" 
            aria-label="${submenu.title} views" 
            id="${containerId}-tablist" style="overflow-x: auto !important; -webkit-overflow-scrolling: touch; scrollbar-width: thin;"
            class="flex items-center gap-2 overflow-x-auto bg-transparent p-0 scrollbar-thin flex-1 min-w-0"
          >
            ${visibleTabs.map(tab => {
              const isActive = tab.id === currentTabId;
              return `
                <a 
                  id="tab-${tab.id}"
                  role="tab"
                  href="${tab.hash}" 
                  aria-selected="${isActive ? 'true' : 'false'}"
                  tabindex="${isActive ? '0' : '-1'}"
                  aria-controls="panel-${tab.id}"
                  class="select-none px-2.5 pt-1.5 pb-0 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent border-0 ${isActive ? 'tab-active text-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D]'}"
                >
                  <span class="select-none">${tab.label}</span>
                </a>
              `;
            }).join('')}
          </div>

          ${extraAction ? `
            <div class="flex items-center shrink-0 pr-1 py-1 -mt-0.5">
              <a 
                id="btn-tab-extra-${extraAction.id}"
                href="javascript:void(0)"
                data-action="${extraAction.id === 'audit-history' ? 'open-audit-history' : ''}"
                title="${extraAction.label}"
                aria-label="${extraAction.label}"
                class="dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center rounded-full transition-all cursor-pointer select-none ${
                  isExtraActive
                    ? 'bg-[#E0F2FE] border border-[#00A4B7] text-[#00A4B7] shadow-xs'
                    : 'bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7]'
                }"
              >
                ${extraAction.icon}
              </a>
            </div>
          ` : ''}
        </div>
      </nav>
    `;

    this.bindKeyboardNav(containerId);
    this.bindClickNav(containerId);
    this.bindWheelScroll(containerId);
    this.scrollActiveTabIntoView(containerId);

    return { module, submenu, currentTabId };
  },

  bindClickNav(containerId) {
    const tablistEl = document.getElementById(`${containerId}-tablist`);
    if (!tablistEl) return;
    tablistEl.addEventListener('click', (e) => {
      const clicked = e.target.closest('[role="tab"]');
      if (!clicked) return;
      tablistEl.querySelectorAll('[role="tab"]').forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.tabIndex = -1;
        t.classList.remove('tab-active', 'text-[#00A4B7]', 'border-[#00A4B7]', 'font-bold');
        t.classList.add('text-[#5E6C84]', 'hover:text-[#172B4D]');
      });
      clicked.setAttribute('aria-selected', 'true');
      clicked.tabIndex = 0;
      clicked.classList.remove('text-[#5E6C84]', 'hover:text-[#172B4D]', 'border-transparent', 'hover:border-[#DFE1E6]');
      clicked.classList.add('tab-active', 'text-[#00A4B7]', 'font-bold');

      // Unselect any extra action button
      const extraBtns = document.querySelectorAll('[id^="btn-tab-extra-"]');
      extraBtns.forEach(btn => {
        btn.classList.remove('bg-[#E0F2FE]', 'border-[#00A4B7]', 'text-[#00A4B7]', 'shadow-xs');
        btn.classList.add('bg-white', 'border-[#CBD5E1]', 'text-[#334155]');
      });
    });

    const extraBtns = document.querySelectorAll('[id^="btn-tab-extra-"]');
    extraBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (btn.id === 'btn-tab-extra-audit-history' || btn.getAttribute('data-action') === 'open-audit-history') {
          e.preventDefault();
          e.stopPropagation();
          const sv = (typeof window !== 'undefined' && window.SetupView) ? window.SetupView : (typeof SetupView !== 'undefined' ? SetupView : null);
          if (sv && typeof sv.openAuditHistoryModal === 'function') {
            sv.openAuditHistoryModal();
          }
          return;
        }
        tablistEl.querySelectorAll('[role="tab"]').forEach(t => {
          t.setAttribute('aria-selected', 'false');
          t.tabIndex = -1;
          t.classList.remove('tab-active', 'text-[#00A4B7]', 'border-[#00A4B7]', 'font-bold');
          t.classList.add('text-[#5E6C84]', 'hover:text-[#172B4D]');
        });
        btn.classList.remove('bg-white', 'border-[#CBD5E1]', 'text-[#334155]');
        btn.classList.add('bg-[#E0F2FE]', 'border-[#00A4B7]', 'text-[#00A4B7]', 'shadow-xs');
      });
    });
  },

  bindKeyboardNav(containerId) {
    const tablistEl = document.getElementById(`${containerId}-tablist`);
    if (!tablistEl) return;

    const tabElements = Array.from(tablistEl.querySelectorAll('[role="tab"]'));
    if (!tabElements.length) return;

    tabElements.forEach((tabEl, index) => {
      tabEl.addEventListener('keydown', (e) => {
        let targetIndex = -1;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          targetIndex = (index + 1) % tabElements.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          targetIndex = (index - 1 + tabElements.length) % tabElements.length;
        } else if (e.key === 'Home') {
          e.preventDefault();
          targetIndex = 0;
        } else if (e.key === 'End') {
          e.preventDefault();
          targetIndex = tabElements.length - 1;
        } else if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          tabEl.click();
          return;
        }

        if (targetIndex !== -1) {
          const targetTab = tabElements[targetIndex];
          targetTab.focus();
          targetTab.click();
        }
      });
    });
  },

  bindWheelScroll(containerId) {
    const tablistEl = document.getElementById(`${containerId}-tablist`);
    if (!tablistEl) return;
    tablistEl.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        tablistEl.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  },

  scrollActiveTabIntoView(containerId) {
    const tablistEl = document.getElementById(`${containerId}-tablist`);
    if (!tablistEl) return;
    requestAnimationFrame(() => {
      const activeTab = tablistEl.querySelector('[aria-selected="true"]');
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    });
  },
};
