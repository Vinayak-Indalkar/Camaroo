// Notifications View for Devi Fisheries ERP
import { NotificationService } from '../services/notificationService.js';
import { Toast } from '../components/toast.js';

export const NotificationsView = {
  searchQuery: '',
  selectedCategory: 'all',
  selectedSeverity: 'all',
  unsubscribe: null,

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Subscribe to notification updates if not already subscribed
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
    this.unsubscribe = NotificationService.subscribe(() => {
      this.renderList();
    });

    container.innerHTML = `
      <div class="notifications-page-container max-w-7xl mx-auto space-y-4 px-[6px]">
        <!-- Header -->
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Notifications</h1>
        </div>

        <!-- Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="notif-filter-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
            </div>
          </div>
          <div class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <div>
              <label for="notif-search-input" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Search Notification</label>
              <input type="text" id="notif-search-input" value="${this.searchQuery}" placeholder="Keywords, RM #, Lot..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div>
              <label for="notif-category-filter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Category</label>
              <select id="notif-category-filter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="all" ${this.selectedCategory === 'all' ? 'selected' : ''}>All Categories</option>
                <option value="Procurement" ${this.selectedCategory === 'Procurement' ? 'selected' : ''}>Procurement</option>
                <option value="Quality Control" ${this.selectedCategory === 'Quality Control' ? 'selected' : ''}>Quality Control</option>
                <option value="Export Logistics" ${this.selectedCategory === 'Export Logistics' ? 'selected' : ''}>Export Logistics</option>
                <option value="Coldstore" ${this.selectedCategory === 'Coldstore' ? 'selected' : ''}>Coldstore</option>
                <option value="Production" ${this.selectedCategory === 'Production' ? 'selected' : ''}>Production</option>
                <option value="System Alert" ${this.selectedCategory === 'System Alert' ? 'selected' : ''}>System Alert</option>
              </select>
            </div>
            <div>
              <label for="notif-severity-filter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Severity / Priority</label>
              <select id="notif-severity-filter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="all" ${this.selectedSeverity === 'all' ? 'selected' : ''}>All Severities</option>
                <option value="info" ${this.selectedSeverity === 'info' ? 'selected' : ''}>Info / General</option>
                <option value="success" ${this.selectedSeverity === 'success' ? 'selected' : ''}>Success / Operational</option>
                <option value="warning" ${this.selectedSeverity === 'warning' ? 'selected' : ''}>Warning</option>
                <option value="purple" ${this.selectedSeverity === 'purple' ? 'selected' : ''}>Logistics & Customs</option>
              </select>
            </div>
            <div class="flex items-end">
              <button type="button" id="notif-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Notifications List Container -->
        <div id="notifications-list-container" class="space-y-2.5">
          <!-- Rendered dynamically -->
        </div>
      </div>
    `;

    this.renderList();
    this.bindEvents();
  },

  getFilteredNotifications() {
    let items = NotificationService.getAll();

    if (this.selectedCategory !== 'all') {
      items = items.filter(n => n.category === this.selectedCategory);
    }

    if (this.selectedSeverity !== 'all') {
      items = items.filter(n => n.severity === this.selectedSeverity);
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      items = items.filter(n => 
        (n.title && n.title.toLowerCase().includes(q)) ||
        (n.message && n.message.toLowerCase().includes(q)) ||
        (n.category && n.category.toLowerCase().includes(q))
      );
    }

    return items;
  },

  renderList() {
    const listEl = document.getElementById('notifications-list-container');
    if (!listEl) return;

    const items = this.getFilteredNotifications();

    if (items.length === 0) {
      listEl.innerHTML = `
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-8 text-center">
          <div class="w-12 h-12 mx-auto rounded-full bg-[#F0F9FF] text-[#00A4B7] flex items-center justify-center mb-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
          </div>
          <h3 class="text-sm font-bold text-[#172B4D]">No notifications found</h3>
          <p class="text-xs text-[#5E6C84] mt-1">There are no notifications matching the current filter criteria.</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = items.map(item => this.renderItem(item)).join('');
  },

  renderItem(item) {
    const isUnread = !item.read;

    // Severity badges and icon styles
    let iconBg = 'bg-[#F0F9FF] text-[#00A4B7] border border-[#BAE6FD]';
    let iconSvg = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
    let statusPill = isUnread 
      ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#FFEBE6] text-[#DE350B] border border-[#FFBDAD]">New</span>` 
      : `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#F1F5F9] text-[#5E6C84] border border-[#DFE1E6]">Read</span>`;

    if (item.severity === 'success') {
      iconBg = 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]';
      iconSvg = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
    } else if (item.severity === 'warning') {
      iconBg = 'bg-[#FFFAE6] text-[#FF8B00] border border-[#FFE380]';
      iconSvg = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;
    } else if (item.severity === 'purple') {
      iconBg = 'bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]';
      iconSvg = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`;
    }

    return `
      <div class="notif-item-card bg-white rounded-xl border ${isUnread ? 'border-[#BAE6FD] border-l-4 border-l-[#00A4B7] bg-gradient-to-r from-[#F0F9FF]/40 to-white' : 'border-[#DFE1E6]'} p-4 shadow-2xs hover:shadow-xs transition-all flex items-start gap-3.5">
        <!-- Icon -->
        <div class="w-10 h-10 min-w-[40px] rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${iconBg}">
          ${iconSvg}
        </div>

        <!-- Content -->
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <h3 class="text-xs font-bold text-[#172B4D] truncate">${item.title}</h3>
            ${statusPill}
            <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F1F5F9] text-[#172B4D] border border-[#DFE1E6]">
              ${item.category}
            </span>
          </div>
          <p class="text-xs text-[#5E6C84] leading-relaxed break-words">${item.message}</p>
          <div class="flex items-center gap-3 text-[11px] text-[#5E6C84] mt-2 font-medium">
            <span class="inline-flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-[#5E6C84]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              ${item.time}
            </span>
            <span>•</span>
            <span>${item.date}</span>
          </div>
        </div>
      </div>
    `;
  },

  bindEvents() {
    // Search and filters
    const searchInput = document.getElementById('notif-search-input');
    const categorySelect = document.getElementById('notif-category-filter');
    const severitySelect = document.getElementById('notif-severity-filter');
    const searchBtn = document.getElementById('notif-filter-search-btn');
    const resetBtn = document.getElementById('notif-filter-reset-btn');

    const applyFilters = () => {
      if (searchInput) this.searchQuery = searchInput.value;
      if (categorySelect) this.selectedCategory = categorySelect.value;
      if (severitySelect) this.selectedSeverity = severitySelect.value;
      this.renderList();
    };

    if (searchBtn) searchBtn.onclick = applyFilters;
    if (searchInput) {
      searchInput.onkeyup = (e) => {
        if (e.key === 'Enter') applyFilters();
      };
    }
    if (categorySelect) categorySelect.onchange = applyFilters;
    if (severitySelect) severitySelect.onchange = applyFilters;

    if (resetBtn) {
      resetBtn.onclick = () => {
        this.searchQuery = '';
        this.selectedCategory = 'all';
        this.selectedSeverity = 'all';
        if (searchInput) searchInput.value = '';
        if (categorySelect) categorySelect.value = 'all';
        if (severitySelect) severitySelect.value = 'all';
        this.renderList();
        Toast.show('Filters reset', 'info');
      };
    }
  }
};
