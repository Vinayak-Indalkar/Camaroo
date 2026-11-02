// Atlassian Modal & Drawer System

export const Modal = {
  activeModal: null,
  confirmedActionDepth: 0,
  initialized: false,
  onDismiss: null,

  isMutationAction(label) {
    return /^(save|update|create|add|delete|remove|record|register|generate|log|submit|approve|reject|confirm|launch|start|transfer|receive|pay|publish|assign|activate|deactivate|enable|disable|reset password)\b/i.test(label.trim());
  },

  init() {
    if (this.initialized) return;
    this.initialized = true;
    document.addEventListener('submit', event => {
      const form = event.target;
      if (this.confirmedActionDepth || !(form instanceof HTMLFormElement) || form.closest('#login-view-container')) return;
      const submitter = event.submitter || form.querySelector('button[type="submit"], input[type="submit"]');
      const label = submitter?.textContent?.trim() || submitter?.value || '';
      if (!this.isMutationAction(label) || !form.reportValidity()) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      this.confirm({
        title: 'Confirm Action',
        message: 'Are you sure you want to submit these changes?',
        onConfirm: () => form.requestSubmit(submitter || undefined),
        context: form
      });
    }, true);
  },

  completeAction(action, context) {
    this.confirmedActionDepth += 1;
    let result;
    try {
      result = action();
    } finally {
      this.confirmedActionDepth -= 1;
    }
    if (result === false) return;
    if (context?.isConnected) return;
    if (!document.querySelector('#erp-modal-root, #erp-drawer-root, [id^="modal-"].fixed, [role="dialog"]')) {
      this.success({});
    }
  },

  open({ title, content, footerButtons = [], buttons = [], actions = [], size = 'md', confirmActions = true, onClose = null }) {
    this.close();

    const sizeClasses = {
      xs: 'max-w-sm',
      sm: 'max-w-md',
      md: 'max-w-xl',
      lg: 'max-w-3xl',
      xl: 'max-w-5xl',
      '2xl': 'max-w-6xl',
      '3xl': 'max-w-7xl',
      '4xl': 'max-w-[90vw]',
      full: 'max-w-[95vw]'
    };
    const modalWidthClass = sizeClasses[size] || (typeof size === 'string' && size.startsWith('max-w-') ? size : 'max-w-xl');

    const modalEl = document.createElement('div');
    modalEl.id = 'erp-modal-root';
    modalEl.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 drawer-backdrop';
    
    const activeFooterButtons = (footerButtons && footerButtons.length > 0) ? footerButtons : ((buttons && buttons.length > 0) ? buttons : (actions || []));
    let buttonsHtml = '';
    activeFooterButtons.forEach((btn, idx) => {
      const btnType = btn.type || btn.variant || 'secondary';
      const cls = btn.class || (btnType === 'primary' 
        ? 'btn-primary px-5 py-2 rounded-full text-sm font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer' 
        : btnType === 'danger'
        ? 'btn-danger px-5 py-2 rounded-full text-sm font-semibold shadow-xs bg-[#DE350B] hover:bg-[#BF2600] text-white transition-all cursor-pointer' 
        : 'btn-secondary px-5 py-2 rounded-full text-sm font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer');
      buttonsHtml += `<button id="modal-btn-${idx}" type="button" class="${cls}">${btn.label || btn.text || ""}</button>`;
    });

    modalEl.innerHTML = `
      <div class="bg-white rounded-lg shadow-2xl border border-[#DFE1E6] w-full ${modalWidthClass} flex flex-col max-h-[90vh] animate-fade-in overflow-hidden">
        <!-- Modal Header -->
        <div class="px-6 py-4 border-b border-[#DFE1E6] flex items-center justify-between bg-[#FAFBFC]">
          <h3 class="text-base font-semibold text-[#172B4D] flex items-center gap-2">
            ${title}
          </h3>
          <button id="erp-modal-close-btn" class="text-[#6B778C] hover:text-[#172B4D] p-1.5 rounded hover:bg-[#EBECF0] transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="p-6 overflow-y-auto flex-1 text-sm text-[#172B4D]">
          ${content}
        </div>

        <!-- Modal Footer -->
        ${activeFooterButtons.length > 0 ? `
        <div class="px-6 py-3.5 border-t border-[#DFE1E6] bg-[#FAFBFC] flex items-center justify-end gap-2.5">
          ${buttonsHtml}
        </div>
        ` : ''}
      </div>
    `;

    document.body.appendChild(modalEl);
    this.activeModal = modalEl;
    this.onDismiss = onClose;

    // Attach Close Handler
    modalEl.querySelector('#erp-modal-close-btn').addEventListener('click', () => this.close());
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) this.close();
    });

    // Attach Footer Handlers
    activeFooterButtons.forEach((btn, idx) => {
      const btnEl = modalEl.querySelector(`#modal-btn-${idx}`);
      if (btnEl && btn.onClick) {
        btnEl.addEventListener('click', () => {
          const action = () => btn.onClick(this);
          if (!confirmActions || this.confirmedActionDepth || !this.isMutationAction(btn.label || btn.text || "")) {
            action();
            return;
          }
          const form = modalEl.querySelector('form');
          if (form && !form.reportValidity()) return;
          this.confirm({
            title: 'Confirm Action',
            message: 'Are you sure you want to apply these changes?',
            isDestructive: btn.type === 'danger',
            onConfirm: action,
            context: modalEl
          });
        });
      }
    });

    // Keydown escape
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        this.close();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  },

  show(titleOrOptions, content, size = 'md') {
    if (typeof titleOrOptions === 'object' && titleOrOptions !== null) {
      this.open(titleOrOptions);
    } else {
      this.open({ title: titleOrOptions, content, size });
    }
  },

  close() {
    const existing = document.getElementById('erp-modal-root');
    if (existing) existing.remove();
    this.activeModal = null;
    const dismiss = this.onDismiss;
    this.onDismiss = null;
    if (dismiss) dismiss();
  },

  // Slide-in Drawer from Right (e.g. for Lot Traceability, Batch Audit, Shipment Details)
  openDrawer({ title, subtitle, content, width = 'w-full md:w-[680px]', footerContent = null }) {
    this.closeDrawer();

    const drawerEl = document.createElement('div');
    drawerEl.id = 'erp-drawer-root';
    drawerEl.className = 'fixed inset-0 z-50 flex justify-end drawer-backdrop';

    drawerEl.innerHTML = `
      <div class="bg-white h-full shadow-2xl border-l border-[#DFE1E6] ${width} flex flex-col drawer-panel transform transition-transform duration-300 translate-x-full">
        <!-- Drawer Header -->
        <div class="px-6 py-4 border-b border-[#DFE1E6] flex items-center justify-between bg-[#FAFBFC]">
          <div>
            <h3 class="text-base font-bold text-[#172B4D]">${title}</h3>
            ${subtitle ? `<p class="text-xs text-[#5E6C84] mt-0.5">${subtitle}</p>` : ''}
          </div>
          <button id="erp-drawer-close-btn" class="text-[#6B778C] hover:text-[#172B4D] p-1.5 rounded hover:bg-[#EBECF0] transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Drawer Content -->
        <div class="p-6 overflow-y-auto flex-1 text-sm text-[#172B4D]">
          ${content}
        </div>

        <!-- Optional Footer -->
        ${footerContent ? `<div class="px-6 py-3.5 border-t border-[#DFE1E6] bg-[#FAFBFC] flex items-center justify-end gap-2.5">${footerContent}</div>` : ''}
      </div>
    `;

    document.body.appendChild(drawerEl);
    setTimeout(() => {
      const panel = drawerEl.querySelector('.drawer-panel');
      if (panel) panel.classList.remove('translate-x-full');
    }, 10);

    drawerEl.querySelector('#erp-drawer-close-btn').addEventListener('click', () => this.closeDrawer());
    drawerEl.addEventListener('click', (e) => {
      if (e.target === drawerEl) this.closeDrawer();
    });
  },

  closeDrawer() {
    const existing = document.getElementById('erp-drawer-root');
    if (existing) {
      const panel = existing.querySelector('.drawer-panel');
      if (panel) panel.classList.add('translate-x-full');
      setTimeout(() => existing.remove(), 250);
    }
  },

  // Confirmation Dialog
  confirm({ title = 'Confirm Action', message, confirmText = 'Confirm', confirmLabel = null, cancelText = 'Cancel', isDestructive = false, type = 'primary', onConfirm, context = null }) {
    const finalConfirmText = confirmLabel || confirmText;
    const finalIsDestructive = Boolean(isDestructive || type === 'danger');

    if (this.confirmedActionDepth) {
      if (onConfirm) onConfirm();
      return;
    }
    const previous = document.getElementById('erp-modal-root');
    const previousDismiss = this.onDismiss;
    if (previous) previous.remove();
    this.activeModal = null;
    this.onDismiss = null;
    const restore = () => {
      if (!previous) return;
      document.body.appendChild(previous);
      this.activeModal = previous;
      this.onDismiss = previousDismiss;
    };
    this.open({
      title,
      content: `<div class="py-2 text-[#42526E]">${message}</div>`,
      confirmActions: false,
      onClose: restore,
      footerButtons: [
        {
          label: cancelText,
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: finalConfirmText,
          type: finalIsDestructive ? 'danger' : 'primary',
          onClick: (modal) => {
            this.onDismiss = null;
            modal.close();
            restore();
            if (onConfirm) this.completeAction(onConfirm, context || previous);
          }
        }
      ]
    });
  },

  // Action Success / Submitted / Saved / Edited Confirmation Popup
  success({ title = 'Action Completed Successfully', message = 'The record has been processed and saved.', details = null, buttonText = 'OK', onConfirm = null }) {
    this.close();

    const modalEl = document.createElement('div');
    modalEl.id = 'erp-modal-root';
    modalEl.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 drawer-backdrop';

    let detailsHtml = '';
    if (details && Array.isArray(details) && details.length > 0) {
      detailsHtml = `
        <div class="mt-3.5 p-3 bg-[#F4F5F7] rounded-lg border border-[#DFE1E6] text-xs space-y-1.5 text-left">
          ${details.map(d => `
            <div class="flex items-center justify-between">
              <span class="text-[#6B778C] font-medium">${d.label}:</span>
              <span class="font-bold text-[#172B4D]">${d.value}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    modalEl.innerHTML = `
      <div class="bg-white rounded-xl shadow-2xl border border-[#DFE1E6] w-full max-w-md flex flex-col animate-fade-in overflow-hidden text-center p-6">
        <div class="w-12 h-12 rounded-full bg-[#E3FCEF] text-[#006644] mx-auto flex items-center justify-center mb-3 shadow-xs">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
        </div>
        
        <h3 class="text-base font-extrabold text-[#172B4D] mb-1.5">${title}</h3>
        <p class="text-xs text-[#5E6C84] leading-relaxed">${message}</p>
        
        ${detailsHtml}

        <div class="mt-5 flex justify-center">
          <button id="modal-success-btn" class="btn-primary w-full py-2.5 rounded-full text-xs font-bold shadow-xs hover:shadow cursor-pointer">
            ${buttonText}
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modalEl);
    this.activeModal = modalEl;

    const btn = modalEl.querySelector('#modal-success-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        this.close();
        if (onConfirm) onConfirm();
      });
    }

    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) this.close();
    });
  }
};
