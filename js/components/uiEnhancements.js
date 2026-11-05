// High-Performance Global UI Enhancements: Modern Tooltip, Custom Dropdown List, and Interactive Calendar Datepicker

export const UIEnhancements = {
  init() {
    if (typeof document === 'undefined') return;
    this.initTooltip();
    this.initDropdown();
    this.initDatePicker();
    this.initAutofillObserver();
    this.initStickyTableHeaders();
  },

  // =========================================================================
  // 1. GLOBAL TOOLTIP SYSTEM
  // =========================================================================
  tooltipEl: null,
  activeTooltipTarget: null,

  initTooltip() {
    if (document.getElementById('erp-global-tooltip')) return;

    const el = document.createElement('div');
    el.id = 'erp-global-tooltip';
    el.className = 'erp-global-tooltip';
    el.innerHTML = '<span class="erp-tooltip-text"></span><div class="erp-tooltip-arrow"></div>';
    document.body.appendChild(el);
    this.tooltipEl = el;

    document.addEventListener('mouseover', (e) => this.handleTooltipHover(e), true);
    document.addEventListener('mouseout', (e) => this.handleTooltipLeave(e), true);
    document.addEventListener('click', () => this.hideTooltip(), true);
    window.addEventListener('scroll', () => this.hideTooltip(), true);
  },

  handleTooltipHover(e) {
    const target = e.target.closest('[title], [data-tooltip]');
    if (!target) return;

    const text = target.getAttribute('data-tooltip') || target.getAttribute('title');
    if (!text || !text.trim()) return;

    if (target.hasAttribute('title')) {
      target.setAttribute('data-tooltip-original', text);
      target.removeAttribute('title'); // Prevent default browser tooltip box
    }

    this.showTooltip(target, text.trim());
  },

  handleTooltipLeave(e) {
    if (!this.activeTooltipTarget) return;
    if (e.relatedTarget && this.activeTooltipTarget.contains(e.relatedTarget)) return;

    if (this.activeTooltipTarget.hasAttribute('data-tooltip-original')) {
      this.activeTooltipTarget.setAttribute('title', this.activeTooltipTarget.getAttribute('data-tooltip-original'));
    }
    this.hideTooltip();
  },

  showTooltip(target, text) {
    if (!this.tooltipEl) return;
    this.activeTooltipTarget = target;
    const textSpan = this.tooltipEl.querySelector('.erp-tooltip-text');
    const arrowDiv = this.tooltipEl.querySelector('.erp-tooltip-arrow');
    textSpan.textContent = text;
    this.tooltipEl.style.display = 'block';

    const rect = target.getBoundingClientRect();
    const tipRect = this.tooltipEl.getBoundingClientRect();

    let top = rect.top - tipRect.height - 7;
    let placeBelow = false;
    if (top < 10) {
      top = rect.bottom + 7;
      placeBelow = true;
    }

    let left = rect.left + (rect.width / 2) - (tipRect.width / 2);
    if (left < 8) left = 8;
    if (left + tipRect.width > window.innerWidth - 8) {
      left = window.innerWidth - tipRect.width - 8;
    }

    this.tooltipEl.style.top = `${Math.round(top)}px`;
    this.tooltipEl.style.left = `${Math.round(left)}px`;
    this.tooltipEl.setAttribute('data-placement', placeBelow ? 'bottom' : 'top');

    const arrowX = rect.left + (rect.width / 2) - left;
    arrowDiv.style.left = `${Math.max(6, Math.min(tipRect.width - 12, arrowX))}px`;

    this.tooltipEl.classList.add('is-visible');
  },

  hideTooltip() {
    if (!this.tooltipEl) return;
    this.tooltipEl.classList.remove('is-visible');
    this.activeTooltipTarget = null;
  },

  // =========================================================================
  // 2. GLOBAL CUSTOM DROPDOWN LIST SYSTEM
  // =========================================================================
  dropdownEl: null,
  activeSelect: null,

  initDropdown() {
    if (document.getElementById('erp-global-dropdown-menu')) return;

    const el = document.createElement('div');
    el.id = 'erp-global-dropdown-menu';
    el.className = 'erp-floating-dropdown-menu';
    document.body.appendChild(el);
    this.dropdownEl = el;

    document.addEventListener('mousedown', (e) => {
      const select = e.target.closest('select');
      if (!select || select.disabled) {
        if (!e.target.closest('#erp-global-dropdown-menu')) {
          this.closeDropdown();
        }
        return;
      }
      e.preventDefault(); // Suppress the default ugly Windows OS popup menu
      this.toggleDropdown(select);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeDropdown();
        this.closeDatePicker();
      }
    });

    window.addEventListener('resize', () => this.closeDropdown());
    window.addEventListener('scroll', (e) => {
      if (!e.target.closest || !e.target.closest('#erp-global-dropdown-menu')) {
        this.closeDropdown();
      }
    }, true);
  },

  toggleDropdown(select) {
    if (this.activeSelect === select && this.dropdownEl.classList.contains('is-open')) {
      this.closeDropdown();
      return;
    }
    this.openDropdown(select);
  },

  openDropdown(select) {
    this.activeSelect = select;
    const rect = select.getBoundingClientRect();
    const options = Array.from(select.options);
    const hasSearch = options.length > 7;

    let html = '';
    if (hasSearch) {
      html += `
        <div class="erp-dropdown-search-wrapper p-2 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div class="relative flex items-center w-full">
            <span class="absolute inset-y-0 left-0 w-8 flex items-center justify-center pointer-events-none text-[#94A3B8] z-10" style="width: 32px !important; padding-left: 0 !important; left: 0 !important;">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </span>
            <input 
              type="text" 
              id="erp-dropdown-search-input" 
              placeholder="Search..." 
              autocomplete="off" 
              spellcheck="false" 
              class="w-full text-xs pl-9 pr-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7]" style="padding-left: 36px !important;"
            />
          </div>
        </div>
      `;
    }

    html += `<div class="erp-dropdown-items-container p-1 max-h-60 overflow-y-auto">`;
    options.forEach((opt, idx) => {
      const isSel = opt.selected;
      html += `
        <div 
          class="erp-dropdown-item px-3 py-2 text-xs rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
            isSel ? 'bg-[#00A4B7] text-white font-bold shadow-xs' : 'text-[#1E293B] hover:bg-[#F0F9FF] hover:text-[#00A4B7]'
          }"
          data-index="${idx}"
          data-value="${opt.value}"
        >
          <span class="truncate">${opt.text}</span>
          ${isSel ? `<svg class="w-3.5 h-3.5 text-white shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>` : ''}
        </div>
      `;
    });
    html += `</div>`;

    this.dropdownEl.innerHTML = html;
    this.dropdownEl.style.display = 'block';

    const width = Math.max(rect.width, 200);
    this.dropdownEl.style.width = `${Math.min(width, window.innerWidth - 20)}px`;

    const dropRect = this.dropdownEl.getBoundingClientRect();
    let top = rect.bottom + 4;
    if (top + dropRect.height > window.innerHeight - 10) {
      top = rect.top - dropRect.height - 4;
    }
    let left = rect.left;
    if (left + dropRect.width > window.innerWidth - 10) {
      left = window.innerWidth - dropRect.width - 10;
    }
    if (left < 10) left = 10;

    this.dropdownEl.style.top = `${Math.round(top)}px`;
    this.dropdownEl.style.left = `${Math.round(left)}px`;
    this.dropdownEl.classList.add('is-open');

    // Bind option click
    this.dropdownEl.querySelectorAll('.erp-dropdown-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(item.dataset.index, 10);
        select.selectedIndex = idx;
        select.dispatchEvent(new Event('input', { bubbles: true }));
        select.dispatchEvent(new Event('change', { bubbles: true }));
        this.closeDropdown();
      });
    });

    // Bind search filter
    if (hasSearch) {
      const searchInput = this.dropdownEl.querySelector('#erp-dropdown-search-input');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 50);
        searchInput.addEventListener('click', (e) => e.stopPropagation());
        searchInput.addEventListener('mousedown', (e) => e.stopPropagation());
        searchInput.addEventListener('keydown', (e) => {
          e.stopPropagation();
          if (e.key === 'Escape') {
            this.closeDropdown();
          }
        });
        searchInput.addEventListener('input', (e) => {
          const val = e.target.value.toLowerCase().trim();
          let visibleCount = 0;
          this.dropdownEl.querySelectorAll('.erp-dropdown-item').forEach(item => {
            const text = item.textContent.toLowerCase();
            const matches = text.includes(val);
            item.style.display = matches ? 'flex' : 'none';
            if (matches) visibleCount++;
          });
          let noResultsEl = this.dropdownEl.querySelector('.erp-dropdown-no-results');
          if (visibleCount === 0) {
            if (!noResultsEl) {
              noResultsEl = document.createElement('div');
              noResultsEl.className = 'erp-dropdown-no-results px-3 py-3 text-xs text-[#94A3B8] text-center italic';
              noResultsEl.textContent = 'No matching options';
              this.dropdownEl.querySelector('.erp-dropdown-items-container').appendChild(noResultsEl);
            }
            noResultsEl.style.display = 'block';
          } else if (noResultsEl) {
            noResultsEl.style.display = 'none';
          }
        });
      }
    }
  },

  closeDropdown() {
    if (!this.dropdownEl) return;
    this.dropdownEl.classList.remove('is-open');
    this.dropdownEl.style.display = 'none';
    this.activeSelect = null;
  },

  // =========================================================================
  // 3. GLOBAL INTERACTIVE CALENDAR DATEPICKER SYSTEM
  // =========================================================================
  calendarEl: null,
  activeDateInput: null,
  viewYear: 2026,
  viewMonth: 9, // 0-indexed: 9 = October

  initDatePicker() {
    if (document.getElementById('erp-global-calendar-popup')) return;

    const el = document.createElement('div');
    el.id = 'erp-global-calendar-popup';
    el.className = 'erp-global-calendar-popup';
    document.body.appendChild(el);
    this.calendarEl = el;

    // Capture mousedown to suppress native browser calendar popup completely
    document.addEventListener('mousedown', (e) => {
      const dateInput = e.target.closest('input[type="date"], .erp-date-input');
      if (dateInput && !dateInput.disabled && !dateInput.readOnly) {
        e.preventDefault();
        e.stopPropagation();
        this.toggleDatePicker(dateInput);
        return;
      }

      const trigger = e.target.closest('.erp-date-wrapper, [data-calendar-trigger]');
      if (trigger && e.target.tagName !== 'INPUT') {
        const inp = trigger.querySelector('input[type="date"], .erp-date-input');
        if (inp) {
          e.preventDefault();
          e.stopPropagation();
          this.toggleDatePicker(inp);
          return;
        }
      }

      if (this.calendarEl && this.calendarEl.classList.contains('is-open') && !e.target.closest('#erp-global-calendar-popup')) {
        this.closeDatePicker();
      }
    }, true);

    // Capture click to suppress native showPicker or inline onclick
    document.addEventListener('click', (e) => {
      const dateInput = e.target.closest('input[type="date"], .erp-date-input');
      if (dateInput) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    window.addEventListener('resize', () => this.closeDatePicker());
    window.addEventListener('scroll', (e) => {
      if (!e.target.closest || !e.target.closest('#erp-global-calendar-popup')) {
        this.closeDatePicker();
      }
    }, true);
  },

  toggleDatePicker(input) {
    if (this.activeDateInput === input && this.calendarEl.classList.contains('is-open')) {
      this.closeDatePicker();
      return;
    }
    this.openDatePicker(input);
  },

  openDatePicker(input) {
    this.activeDateInput = input;
    const curVal = input.value || '';
    if (curVal && /^\d{4}-\d{2}-\d{2}$/.test(curVal)) {
      const parts = curVal.split('-').map(Number);
      this.viewYear = parts[0];
      this.viewMonth = parts[1] - 1;
    } else {
      const today = new Date();
      this.viewYear = today.getFullYear();
      this.viewMonth = today.getMonth();
    }

    this.renderCalendar();
    this.calendarEl.style.display = 'block';

    const rect = input.getBoundingClientRect();
    const calRect = this.calendarEl.getBoundingClientRect();

    let top = rect.bottom + 5;
    if (top + calRect.height > window.innerHeight - 10) {
      top = rect.top - calRect.height - 5;
    }

    let left = rect.left;
    if (left + calRect.width > window.innerWidth - 10) {
      left = window.innerWidth - calRect.width - 10;
    }
    if (left < 10) left = 10;

    this.calendarEl.style.top = `${Math.round(top)}px`;
    this.calendarEl.style.left = `${Math.round(left)}px`;
    this.calendarEl.classList.add('is-open');
  },

  renderCalendar() {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const curVal = this.activeDateInput?.value || '';
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    // First day of month & number of days
    const firstDayIndex = new Date(this.viewYear, this.viewMonth, 1).getDay(); // 0 is Sun
    const daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(this.viewYear, this.viewMonth, 0).getDate();

    let daysHtml = '';

    // Prev month trailing days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const dayNum = daysInPrevMonth - i;
      daysHtml += `<button type="button" class="erp-cal-day is-muted" disabled>${dayNum}</button>`;
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayStr = `${this.viewYear}-${String(this.viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = curVal === dayStr;
      const isToday = todayStr === dayStr;

      daysHtml += `
        <button 
          type="button" 
          class="erp-cal-day ${isSelected ? 'is-selected' : ''} ${isToday && !isSelected ? 'is-today' : ''}" 
          data-date="${dayStr}"
        >
          ${day}
        </button>
      `;
    }

    // Next month leading days to complete grid (42 cells)
    const totalFilled = firstDayIndex + daysInMonth;
    const nextDays = totalFilled <= 35 ? 35 - totalFilled : 42 - totalFilled;
    for (let i = 1; i <= nextDays; i++) {
      daysHtml += `<button type="button" class="erp-cal-day is-muted" disabled>${i}</button>`;
    }

    this.calendarEl.innerHTML = `
      <div class="erp-cal-header flex items-center justify-between pb-2 mb-2 border-b border-[#E2E8F0]">
        <button type="button" id="erp-cal-prev-btn" class="w-7 h-7 rounded-full flex items-center justify-center text-[#475569] hover:bg-[#F1F5F9] hover:text-[#00A4B7] transition-colors cursor-pointer" title="Previous Month" aria-label="Previous Month">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="text-xs font-bold text-[#0F172A] tracking-wide">
          ${monthNames[this.viewMonth]} ${this.viewYear}
        </div>
        <button type="button" id="erp-cal-next-btn" class="w-7 h-7 rounded-full flex items-center justify-center text-[#475569] hover:bg-[#F1F5F9] hover:text-[#00A4B7] transition-colors cursor-pointer" title="Next Month" aria-label="Next Month">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      <div class="erp-cal-weekdays grid grid-cols-7 gap-1 text-center mb-1">
        <span class="text-[10px] font-bold text-[#64748B]">Su</span>
        <span class="text-[10px] font-bold text-[#64748B]">Mo</span>
        <span class="text-[10px] font-bold text-[#64748B]">Tu</span>
        <span class="text-[10px] font-bold text-[#64748B]">We</span>
        <span class="text-[10px] font-bold text-[#64748B]">Th</span>
        <span class="text-[10px] font-bold text-[#64748B]">Fr</span>
        <span class="text-[10px] font-bold text-[#64748B]">Sa</span>
      </div>

      <div class="erp-cal-grid grid grid-cols-7 gap-1 text-center">
        ${daysHtml}
      </div>

      <div class="erp-cal-footer flex items-center justify-between pt-2.5 mt-2 border-t border-[#E2E8F0] text-xs">
        <button type="button" id="erp-cal-clear-btn" class="text-xs font-semibold text-[#64748B] hover:text-[#EF4444] transition-colors cursor-pointer px-2 py-1 rounded hover:bg-[#FEE2E2]">
          Clear
        </button>
        <button type="button" id="erp-cal-today-btn" class="text-xs font-bold text-[#00A4B7] hover:text-[#008F9F] transition-colors cursor-pointer px-2.5 py-1 rounded hover:bg-[#E6F7F9]">
          Today
        </button>
      </div>
    `;

    // Bind Prev/Next
    this.calendarEl.querySelector('#erp-cal-prev-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      this.viewMonth--;
      if (this.viewMonth < 0) {
        this.viewMonth = 11;
        this.viewYear--;
      }
      this.renderCalendar();
    });

    this.calendarEl.querySelector('#erp-cal-next-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      this.viewMonth++;
      if (this.viewMonth > 11) {
        this.viewMonth = 0;
        this.viewYear++;
      }
      this.renderCalendar();
    });

    // Bind Day clicks
    this.calendarEl.querySelectorAll('.erp-cal-day[data-date]').forEach(dayBtn => {
      dayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const chosen = dayBtn.dataset.date;
        this.selectDate(chosen);
      });
    });

    // Bind Today
    this.calendarEl.querySelector('#erp-cal-today-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      this.selectDate(todayStr);
    });

    // Bind Clear
    this.calendarEl.querySelector('#erp-cal-clear-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      this.selectDate('');
    });
  },

  selectDate(dateStr) {
    if (!this.activeDateInput) return;
    this.activeDateInput.value = dateStr;
    this.activeDateInput.dispatchEvent(new Event('input', { bubbles: true }));
    this.activeDateInput.dispatchEvent(new Event('change', { bubbles: true }));
    this.closeDatePicker();
  },

  
  // =========================================================================
  // 4. AUTOFILL DATA OBSERVER
  // =========================================================================
  initAutofillObserver() {
    const markAutofilled = () => {
      document.querySelectorAll('input[readonly], textarea[readonly], input[disabled], textarea[disabled]').forEach(el => {
        if (!el.type || !['button', 'submit', 'reset', 'checkbox', 'radio', 'date'].includes(el.type)) {
          el.setAttribute('data-autofilled', 'true');
        }
      });
    };
    markAutofilled();
    const obs = new MutationObserver(() => markAutofilled());
    obs.observe(document.body, { childList: true, subtree: true });
  },

  closeDatePicker() {
    if (!this.calendarEl) return;
    this.calendarEl.classList.remove('is-open');
    this.calendarEl.style.display = 'none';
    this.activeDateInput = null;
  },

  // =========================================================================
  // 5. GLOBAL STICKY TABLE HEADERS CONTROLLER (Window & Container Scroll Sync)
  // Keeps table headings fixed below top navigation bar during vertical scroll
  // while scrolling horizontally in perfect sync with columns
  // =========================================================================
  initStickyTableHeaders() {
    let ticking = false;

    const updateStickyHeaders = () => {
      ticking = false;
      const topNav = document.getElementById('top-nav-wrapper');
      const topNavBottom = topNav ? Math.round(topNav.getBoundingClientRect().bottom) : 0;

      const containers = document.querySelectorAll('.dt-table-scroll, .overflow-x-auto, div:has(> table.erp-table)');
      containers.forEach(container => {
        // Modals have internal scrolling inside dialogs; skip translating them
        if (container.closest('#erp-modal-root, .fixed.inset-0')) return;

        const table = container.querySelector('table');
        if (!table) return;
        const thead = table.querySelector('thead');
        if (!thead) return;
        const ths = thead.querySelectorAll('th');
        if (ths.length === 0) return;

        const cRect = container.getBoundingClientRect();
        // If container's top has scrolled underneath topNavBottom, pin the headers
        if (cRect.top < topNavBottom && cRect.bottom > topNavBottom + 55) {
          const rawOffset = topNavBottom - cRect.top;
          const maxOffset = cRect.height - thead.offsetHeight - 25;
          const offset = Math.max(0, Math.min(Math.round(rawOffset), Math.round(maxOffset)));

          if (offset > 0) {
            ths.forEach(th => {
              th.style.transform = `translateY(${offset}px)`;
              th.style.zIndex = th.classList.contains('sticky-action-col') ? '35' : '25';
              th.style.boxShadow = '0 2px 4px rgba(9, 30, 66, 0.08)';
            });
            return;
          }
        }

        // Reset transform when container is in normal viewport position
        if (ths[0] && ths[0].style.transform) {
          ths.forEach(th => {
            th.style.transform = '';
            th.style.boxShadow = '';
            th.style.zIndex = '';
          });
        }
      });
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        requestAnimationFrame(updateStickyHeaders);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    document.addEventListener('scroll', onScrollOrResize, { passive: true, capture: true });
  }
  }
};

if (typeof window !== 'undefined') {
  window.UIEnhancements = UIEnhancements;
}

