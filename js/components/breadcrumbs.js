// Dynamic Breadcrumb Navigation Component for Main Menu -> Sub Menu -> Tab

import { NAV_HIERARCHY, ADMIN_NAV_HIERARCHY, SUPER_ADMIN_NAV_HIERARCHY } from './sidebar.js';
import { ERP_DATA } from '../data/mockData.js';

export const Breadcrumbs = {
  render(containerId, activeHash, customLeaf = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let crumbs = [];

    const clean = (activeHash || '').replace(/^#\/?/, '').replace(/^\/+/, '');
    const parts = clean.split('/');
    const modId = parts[0] || 'purchase';
    const subId = parts[1] || 'dashboard';
    const tabId = parts[2] || '';

    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
    const targetHierarchy = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;
    const module = targetHierarchy.find(m => m.id === modId) || NAV_HIERARCHY.find(m => m.id === modId);
    if (modId === 'notifications') {
      crumbs.push({ label: 'Notifications', hash: '#/notifications', active: true });
    } else if (modId === 'profile') {
      crumbs.push({ label: 'My Profile', hash: '#/profile', active: true });
    } else if (module) {
      const defaultModHash = module.submenus[0]?.tabs[0]?.hash || `/${modId}`;
      crumbs.push({ label: module.title, hash: defaultModHash });

      const submenu = module.submenus.find(s => s.id === subId);
      if (submenu && submenu.title !== module.title) {
        const defaultSubHash = submenu.tabs[0]?.hash || `/${modId}/${subId}`;
        crumbs.push({ label: submenu.title, hash: defaultSubHash });
      }

      if (submenu) {
        const tab = submenu.tabs.find(t => t.id === tabId);
        if (tab && tab.label !== submenu.title && tab.label !== module.title) {
          crumbs.push({ label: tab.label, hash: tab.hash, active: !customLeaf });
        } else if (submenu.extraAction && submenu.extraAction.id === tabId) {
          crumbs.push({ label: submenu.extraAction.label, hash: submenu.extraAction.hash, active: !customLeaf });
        } else if (tabId === 'audit-history') {
          crumbs.push({ label: 'Audit History', hash: '#/general/configuration/audit-history', active: !customLeaf });
        }
      }
    }

    if (customLeaf) {
      crumbs.push({ label: customLeaf, hash: null, active: true });
    }

    const html = `
      <nav class="flex items-center gap-1.5 text-[11px] py-0.5 select-none flex-wrap" aria-label="Breadcrumb">
        ${crumbs.map((c, idx) => {
          const isLast = idx === crumbs.length - 1;
          const separator = !isLast ? `<span class="text-[#94A3B8] font-bold text-[9px] mx-0.5" aria-hidden="true">/</span>` : '';
          
          if (c.active || isLast || !c.hash) {
            return `<span class="font-semibold text-[#0F172A] truncate max-w-xs">${c.label}</span> ${separator}`;
          } else {
            return `<a href="${c.hash}" class="text-[#64748B] hover:text-[#00A4B7] font-medium transition-colors truncate max-w-xs">${c.label}</a> ${separator}`;
          }
        }).join('')}
      </nav>
    `;

    container.innerHTML = html;
  }
};
