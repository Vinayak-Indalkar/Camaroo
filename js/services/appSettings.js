// Devi Fisheries ERP - Enterprise General Settings Engine & Global App State

import { Toast } from '../components/toast.js';
import { Modal } from '../components/modal.js';
import { ERP_DATA } from '../data/mockData.js';

export const GENERAL_SETTINGS_STORAGE_KEY = 'dfl_erp_general_settings_v1';

export const DEFAULT_SETTINGS = {
  // 1. Notifications
  desktopNotif: false,
  inAppSounds: true,
  qcAlerts: true,
  tempAlerts: true,
  harvestDigest: true,
  notifFreq: 'instant',

  // 2. Email
  smtpHost: 'smtp.devifisheries.com',
  smtpPort: '587',
  smtpSecurity: 'TLS',
  senderEmail: 'erp-notifications@devifisheries.com',
  senderName: 'Devi Fisheries ERP Core',
  dailyReportEmail: 'management@devifisheries.com',

  // 3. Sound
  uiClicks: true,
  successChime: true,
  warningAlarm: true,
  soundVolume: '70',
  alertTone: 'modern-chime',

  // 4. Appearance
  themeMode: 'light',
  sidebarStyle: 'dark-navy',
  tableDensity: 'comfortable',
  accentTone: '#00A4B7',
  highContrast: false,
  smoothAnimations: true,

  // 5. Accessibility
  screenReader: false,
  highLegibility: false,
  reducedMotion: false,
  largeFocusRings: true,
  colorBlindMode: 'none',
  keyboardShortcuts: true,

  // 6. Regional & Localization
  timezone: 'Asia/Kolkata',
  dateFormat: 'DD-MM-YYYY',
  timeFormat: '12h',
  massUnit: 'MT_KG',
  currency: 'USD',
  numberFormat: 'indian',

  // 7. Security & Session Policy
  sessionTimeout: '30',
  twoFactor: 'admin-only',
  maxLoginAttempts: '5',
  passwordExpiryDays: '90',
  ipWhitelist: false,

  // 8. System Backup & Data Maintenance
  autoBackupFreq: 'daily',
  cloudMirroring: true,
  backupRetentionDays: '90',

  // 9. Audit Trail & Compliance
  auditLogging: true,
  exportAuditPdf: true
};

export const AppSettings = {
  settings: { ...DEFAULT_SETTINGS },
  audioContext: null,
  sessionTimer: null,
  sessionWarningModalActive: false,
  lastActivityTime: Date.now(),
  isInitialized: false,

  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    // 1. Load persisted settings
    this.load();

    // 2. Apply theme, density, contrast, and accessibility to DOM
    this.applyAll();

    // 3. Inject SVG color-blindness filters into DOM
    this.injectColorBlindnessFilters();

    // 4. Bind interactive UI click audio
    this.bindClickSound();

    // 5. Initialize session inactivity watchdog
    this.initSessionWatchdog();

    // 6. Listen for system color-scheme changes if themeMode is 'system'
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (this.settings.themeMode === 'system') {
          document.documentElement.classList.toggle('theme-dark', e.matches);
          document.body.classList.toggle('theme-dark', e.matches);
        }
      });
    }

    // 7. Expose globally for cross-module accessibility
    window.AppSettings = this;
    window.ERP_FORMAT = {
      date: (d) => this.formatDate(d),
      time: (t) => this.formatTime(t),
      currency: (v) => this.formatCurrency(v),
      weight: (w) => this.formatWeight(w),
      number: (n) => this.formatNumber(n)
    };

    // Log startup audit
    this.logAudit('Session Started', 'System', 'Enterprise ERP session initialized with configured settings');
  },

  load() {
    try {
      const raw = localStorage.getItem(GENERAL_SETTINGS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        this.settings = Object.assign({}, DEFAULT_SETTINGS, parsed);
      } else {
        this.settings = { ...DEFAULT_SETTINGS };
      }
    } catch (e) {
      this.settings = { ...DEFAULT_SETTINGS };
    }
    return this.settings;
  },

  getAll() {
    return { ...this.settings };
  },

  get(key, fallback = null) {
    return this.settings[key] !== undefined ? this.settings[key] : fallback;
  },

  save(newSettings) {
    this.settings = Object.assign({}, this.settings, newSettings);
    try {
      localStorage.setItem(GENERAL_SETTINGS_STORAGE_KEY, JSON.stringify(this.settings));
    } catch (e) {
      console.error('Failed to save general settings to localStorage', e);
    }
    this.applyAll();
    this.logAudit('Settings Updated', 'General Settings', 'System configuration updated and applied globally');
    return this.settings;
  },

  // -------------------------------------------------------------
  // DOM & CSS APPLICATION ENGINE (Applies to Whole Application)
  // -------------------------------------------------------------
  applyAll(customSettings = null) {
    const s = customSettings || this.settings;

    // 1. Theme Mode (Dark / Light / System)
    const isDark = s.themeMode === 'dark' || (s.themeMode === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('theme-dark', isDark);
    document.body.classList.toggle('theme-dark', isDark);
    localStorage.setItem('dfl_theme', isDark ? 'dark' : 'light');

    // 2. High Contrast Mode
    document.documentElement.classList.toggle('theme-high-contrast', Boolean(s.highContrast));
    document.body.classList.toggle('theme-high-contrast', Boolean(s.highContrast));

    // 3. Table Density
    document.documentElement.setAttribute('data-density', s.tableDensity || 'comfortable');

    // 4. Sidebar Style
    document.documentElement.setAttribute('data-sidebar-style', s.sidebarStyle || 'dark-navy');

    // 5. Reduced Motion & Smooth Animations
    const reduceMotion = Boolean(s.reducedMotion) || s.smoothAnimations === false;
    document.documentElement.classList.toggle('reduce-motion', reduceMotion);
    document.documentElement.classList.toggle('no-animations', s.smoothAnimations === false);

    // 6. High Legibility Mode
    document.documentElement.classList.toggle('high-legibility', Boolean(s.highLegibility));

    // 7. Large Focus Rings
    document.documentElement.classList.toggle('large-focus-rings', Boolean(s.largeFocusRings));

    // 8. Color Blindness Filter
    ['colorblind-protanopia', 'colorblind-deuteranopia', 'colorblind-tritanopia'].forEach(cls => {
      document.documentElement.classList.remove(cls);
    });
    if (s.colorBlindMode && s.colorBlindMode !== 'none') {
      document.documentElement.classList.add(`colorblind-${s.colorBlindMode}`);
    }

    // 9. Sync Inactivity Timeout
    this.resetSessionTimer();

    // 10. Update notification permission if desktop notifications enabled
    if (s.desktopNotif && window.Notification && Notification.permission === 'default') {
      try {
        Notification.requestPermission();
      } catch (e) {}
    }
  },

  // -------------------------------------------------------------
  // AUDIO SYNTHESIZER (Live Web Audio API)
  // -------------------------------------------------------------
  getAudioContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume().catch(() => {});
    }
    return this.audioContext;
  },

  playSound(type = 'click') {
    if (this.settings.inAppSounds === false) return;

    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const baseVolume = (Number(this.settings.soundVolume || 70) / 100) * 0.15;
      const now = ctx.currentTime;

      if (type === 'click') {
        if (this.settings.uiClicks === false) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(680, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.025);
        gain.gain.setValueAtTime(baseVolume * 0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.03);
      } else if (type === 'success') {
        if (this.settings.successChime === false) return;
        const tone = this.settings.alertTone || 'modern-chime';

        if (tone === 'gentle-pluck') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(587.33, now); // D5
          gain.gain.setValueAtTime(baseVolume * 1.2, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.26);
        } else if (tone === 'crystal-bell') {
          [880, 1760].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + (idx * 0.05));
            gain.gain.setValueAtTime(baseVolume * 0.9, now + (idx * 0.05));
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35 + (idx * 0.05));
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + (idx * 0.05));
            osc.stop(now + 0.4 + (idx * 0.05));
          });
        } else if (tone === 'urgent-ping') {
          [659.25, 783.99].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + (idx * 0.06));
            gain.gain.setValueAtTime(baseVolume * 1.1, now + (idx * 0.06));
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18 + (idx * 0.06));
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + (idx * 0.06));
            osc.stop(now + 0.2 + (idx * 0.06));
          });
        } else {
          // Default: modern-chime (Smooth 3-note harmonic major chord)
          const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
          notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + (idx * 0.06));
            gain.gain.setValueAtTime(baseVolume, now + (idx * 0.06));
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3 + (idx * 0.06));
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + (idx * 0.06));
            osc.stop(now + 0.35 + (idx * 0.06));
          });
        }
      } else if (type === 'warning' || type === 'error') {
        if (this.settings.warningAlarm === false) return;
        const notes = [392.00, 329.63]; // G4, E4 double warning chime
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + (idx * 0.1));
          gain.gain.setValueAtTime(baseVolume * 1.1, now + (idx * 0.1));
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25 + (idx * 0.1));
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + (idx * 0.1));
          osc.stop(now + 0.28 + (idx * 0.1));
        });
      }
    } catch (e) {
      // Audio failed silently without interrupting UI
    }
  },

  bindClickSound() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, a, input[type="checkbox"], input[type="radio"], select, .btn-primary, .btn-secondary, .dt-action-btn, [role="button"]');
      if (target && this.settings.uiClicks !== false) {
        this.playSound('click');
      }
    }, { passive: true });
  },

  // -------------------------------------------------------------
  // DESKTOP NOTIFICATIONS (Browser Notification API)
  // -------------------------------------------------------------
  notify(title, message, type = 'info') {
    if (!this.settings.desktopNotif) return;
    if (!window.Notification) return;

    if (Notification.permission === 'granted') {
      try {
        const notif = new Notification(title || 'Devi Fisheries ERP', {
          body: message || 'System event notification',
          icon: 'favicon.ico',
          badge: 'favicon.ico'
        });
        setTimeout(() => notif.close(), 5000);
      } catch (e) {}
    } else if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  },

  // Hook called on every Toast.show
  onToast(type, message, title) {
    // 1. Play sound
    if (type === 'success') {
      this.playSound('success');
    } else if (type === 'error' || type === 'danger' || type === 'warning') {
      this.playSound('warning');
    }

    // 2. Desktop notification
    if (this.settings.desktopNotif) {
      this.notify(title || 'Devi Fisheries ERP', message, type);
    }
  },

  // -------------------------------------------------------------
  // REGIONAL FORMATTING HELPERS
  // -------------------------------------------------------------
  formatDate(dateVal) {
    if (!dateVal) return '-';
    let d = dateVal instanceof Date ? dateVal : new Date(dateVal);
    if (isNaN(d.getTime())) return String(dateVal);

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();

    switch (this.settings.dateFormat) {
      case 'YYYY-MM-DD':
        return `${year}-${month}-${day}`;
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'DD-MM-YYYY':
      default:
        return `${day}-${month}-${year}`;
    }
  },

  formatTime(timeVal) {
    if (!timeVal) return '-';
    let d = timeVal instanceof Date ? timeVal : new Date(timeVal);
    if (isNaN(d.getTime())) return String(timeVal);

    if (this.settings.timeFormat === '24h') {
      return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  },

  formatNumber(val) {
    const n = Number(val);
    if (isNaN(n)) return '0';
    const locale = this.settings.numberFormat === 'indian' ? 'en-IN' : 'en-US';
    return n.toLocaleString(locale);
  },

  formatCurrency(amount) {
    const n = Number(amount);
    if (isNaN(n)) return '$0';

    const locale = this.settings.numberFormat === 'indian' ? 'en-IN' : 'en-US';
    const formatted = Math.abs(n).toLocaleString(locale, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    const sign = n < 0 ? '-' : '';

    const symbols = {
      'USD': '$',
      'INR': '₹',
      'EUR': '€',
      'GBP': '£',
      'JPY': '¥'
    };
    const sym = symbols[this.settings.currency] || '$';
    return `${sign}${sym}${formatted}`;
  },

  formatWeight(kg) {
    const n = Number(kg);
    if (isNaN(n)) return '0 Kg';

    if (this.settings.massUnit === 'LBS') {
      const lbs = n * 2.20462;
      return `${this.formatNumber(Math.round(lbs))} lbs`;
    }

    if (n >= 1000) {
      return `${(n / 1000).toFixed(2)} MT`;
    }
    return `${this.formatNumber(n)} Kg`;
  },

  // -------------------------------------------------------------
  // INACTIVITY SESSION WATCHDOG
  // -------------------------------------------------------------
  initSessionWatchdog() {
    const recordActivity = () => {
      this.lastActivityTime = Date.now();
    };

    ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'].forEach(evt => {
      window.addEventListener(evt, recordActivity, { passive: true });
    });

    this.resetSessionTimer();
  },

  resetSessionTimer() {
    if (this.sessionTimer) {
      clearInterval(this.sessionTimer);
      this.sessionTimer = null;
    }

    const timeoutMinutes = parseInt(this.settings.sessionTimeout || '30', 10);
    if (!timeoutMinutes || timeoutMinutes <= 0) return;

    const checkIntervalMs = 30000; // Check every 30s
    const timeoutMs = timeoutMinutes * 60 * 1000;
    const warningMs = Math.max(30000, timeoutMs - 60000); // 1 minute before timeout

    this.sessionTimer = setInterval(() => {
      const elapsed = Date.now() - this.lastActivityTime;

      if (elapsed >= timeoutMs) {
        // Locked / expired
        clearInterval(this.sessionTimer);
        this.sessionTimer = null;
        this.lockSessionDueToInactivity();
      } else if (elapsed >= warningMs && !this.sessionWarningModalActive) {
        this.showSessionWarning();
      }
    }, checkIntervalMs);
  },

  showSessionWarning() {
    this.sessionWarningModalActive = true;
    Modal.confirm({
      title: 'Inactivity Warning',
      message: `You have been inactive for nearly ${this.settings.sessionTimeout} minutes. For security, your session is about to expire. Would you like to stay signed in?`,
      confirmText: 'Stay Signed In',
      cancelText: 'Sign Out',
      isDestructive: false,
      onConfirm: () => {
        this.lastActivityTime = Date.now();
        this.sessionWarningModalActive = false;
        Toast.show('Session extended successfully', 'success', 'Session Active');
        this.resetSessionTimer();
      }
    });
  },

  lockSessionDueToInactivity() {
    this.sessionWarningModalActive = false;
    this.logAudit('Session Timeout', 'Security', 'User session locked automatically due to prolonged inactivity');
    Toast.show('Session expired due to inactivity. Please sign in again.', 'warning', 'Session Expired');
    window.location.hash = '#/login';
  },

  // -------------------------------------------------------------
  // SYSTEM BACKUP & RECOVERY ENGINE
  // -------------------------------------------------------------
  runBackup() {
    try {
      const backupData = {
        app: 'Devi Fisheries ERP Core',
        client: 'Devi Fisheries Limited',
        version: '3.4.0',
        timestamp: new Date().toISOString(),
        exportedBy: ERP_DATA.currentUser?.name || 'Administrator',
        settings: this.getAll(),
        storage: {}
      };

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('dfl_') || key.startsWith('erp_'))) {
          backupData.storage[key] = localStorage.getItem(key);
        }
      }

      // Download backup JSON file
      const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateStr = new Date().toISOString().split('T')[0];
      a.href = url;
      a.download = `DeviFisheries_ERP_Backup_${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 500);

      // Record in backup history
      this.recordBackupHistory();
      this.playSound('success');
      this.logAudit('Database Backup', 'System Backup', 'Full enterprise local snapshot generated and downloaded');
      Toast.show('Enterprise system backup generated and downloaded successfully!', 'success', 'Backup Complete');
      return true;
    } catch (e) {
      console.error('Backup failed:', e);
      Toast.show('Backup generation encountered an error: ' + e.message, 'danger', 'Backup Error');
      return false;
    }
  },

  recordBackupHistory() {
    try {
      const KEY = 'dfl_erp_backup_history';
      let history = [];
      const raw = localStorage.getItem(KEY);
      if (raw) history = JSON.parse(raw);
      history.unshift({
        id: 'BKP-' + Date.now().toString().slice(-6),
        date: new Date().toISOString(),
        user: ERP_DATA.currentUser?.name || 'Admin',
        type: 'Manual Snapshot',
        status: 'Completed'
      });
      localStorage.setItem(KEY, JSON.stringify(history.slice(0, 20)));
    } catch (e) {}
  },

  // -------------------------------------------------------------
  // AUDIT TRAIL LOGGING & CSV EXPORT
  // -------------------------------------------------------------
  logAudit(action, module, details) {
    if (this.settings.auditLogging === false) return;

    try {
      const KEY = 'dfl_erp_audit_log';
      let logs = [];
      const raw = localStorage.getItem(KEY);
      if (raw) logs = JSON.parse(raw);

      logs.unshift({
        id: 'AUD-' + Date.now().toString().slice(-6),
        timestamp: new Date().toISOString(),
        user: ERP_DATA.currentUser?.name || 'Laxmi Narayana',
        role: ERP_DATA.currentUser?.role || 'Admin',
        action,
        module,
        details
      });

      localStorage.setItem(KEY, JSON.stringify(logs.slice(0, 500)));
    } catch (e) {}
  },

  exportAuditLogs() {
    try {
      const KEY = 'dfl_erp_audit_log';
      let logs = [];
      const raw = localStorage.getItem(KEY);
      if (raw) logs = JSON.parse(raw);

      if (logs.length === 0) {
        // Seed standard sample logs if fresh
        logs = [
          { id: 'AUD-001', timestamp: new Date().toISOString(), user: 'Laxmi Narayana', role: 'Admin', action: 'General Settings Saved', module: 'Settings', details: 'Sound, Notifications, Theme updated' },
          { id: 'AUD-002', timestamp: new Date(Date.now() - 3600000).toISOString(), user: 'Laxmi Narayana', role: 'Admin', action: 'Organization Profile Updated', module: 'Settings', details: 'Brand assets and plant configuration verified' },
          { id: 'AUD-003', timestamp: new Date(Date.now() - 7200000).toISOString(), user: 'Suresh Varma', role: 'Procurement Officer', action: 'Purchase Order Created', module: 'Purchase', details: 'PO-2026-0891 issued for 12,500 Kg' },
          { id: 'AUD-004', timestamp: new Date(Date.now() - 14400000).toISOString(), user: 'M. Venkat Rao', role: 'QC Manager', action: 'Quality Inspection Approved', module: 'Quality Control', details: 'Lot QC-DFL-4412 passed organoleptic review' }
        ];
      }

      let csv = 'Log ID,Timestamp,User,Role,Action,Module,Details\n';
      logs.forEach(l => {
        csv += `"${l.id}","${l.timestamp}","${l.user}","${l.role}","${l.action.replace(/"/g, '""')}","${l.module}","${(l.details || '').replace(/"/g, '""')}"\n`;
      });

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateStr = new Date().toISOString().split('T')[0];
      a.href = url;
      a.download = `DeviFisheries_Audit_Trail_Export_${dateStr}.csv`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 500);

      this.playSound('success');
      Toast.show('Audit logs exported successfully to CSV!', 'success', 'Export Complete');
    } catch (e) {
      Toast.show('Failed to export audit logs: ' + e.message, 'danger', 'Export Error');
    }
  },

  // -------------------------------------------------------------
  // ACCESSIBILITY: SVG COLOR BLINDNESS FILTERS
  // -------------------------------------------------------------
  injectColorBlindnessFilters() {
    if (document.getElementById('erp-colorblind-filters')) return;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = 'erp-colorblind-filters';
    svg.setAttribute('style', 'display: none !important; width: 0; height: 0; position: absolute;');
    svg.innerHTML = `
      <defs>
        <!-- Protanopia (Red-Blind) -->
        <filter id="protanopia-filter">
          <feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0  0.558, 0.442, 0, 0, 0  0, 0.242, 0.758, 0, 0  0, 0, 0, 1, 0"/>
        </filter>
        <!-- Deuteranopia (Green-Blind) -->
        <filter id="deuteranopia-filter">
          <feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0  0.700, 0.300, 0, 0, 0  0, 0.300, 0.700, 0, 0  0, 0, 0, 1, 0"/>
        </filter>
        <!-- Tritanopia (Blue-Blind) -->
        <filter id="tritanopia-filter">
          <feColorMatrix type="matrix" values="0.950, 0.050, 0, 0, 0  0, 0.433, 0.567, 0, 0  0, 0.475, 0.525, 0, 0  0, 0, 0, 1, 0"/>
        </filter>
      </defs>
    `;
    document.body.appendChild(svg);
  }
};

