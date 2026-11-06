// Notification Data Store & Service for Devi Fisheries ERP

export const NotificationService = {
  STORAGE_KEY: 'camaroo_notifications_v1',
  listeners: [],

  defaultNotifications: [
    {
      id: 'notif-1',
      title: 'Raw Material Arrival #RMA-2026-00341',
      message: 'Godavari Coastal 2,980 KG Vannamei Shrimp staged at Dock #1 awaiting QC approval.',
      category: 'Procurement',
      time: '20 mins ago',
      date: '06-Nov-2026, 09:30 AM',
      severity: 'info',
      read: false,
      targetHash: '#/purchase/orders/purchase-orders'
    },
    {
      id: 'notif-2',
      title: 'QC Antibiotic Clearance Alert',
      message: 'LOT-2026-00128 Seabass passed all rapid nitrofurans & organoleptic panels.',
      category: 'Quality Control',
      time: '1 hour ago',
      date: '06-Nov-2026, 08:50 AM',
      severity: 'success',
      read: false,
      targetHash: '#/quality/inspections/raw-material-qc'
    },
    {
      id: 'notif-3',
      title: 'Export Vessel Gate-In Confirmation',
      message: 'Container ONEU-440912-8 (14 MT Black Tiger) cleared customs for Tokyo.',
      category: 'Export Logistics',
      time: '3 hours ago',
      date: '06-Nov-2026, 06:45 AM',
      severity: 'purple',
      read: false,
      targetHash: '#/sales/orders/sales-orders'
    },
    {
      id: 'notif-4',
      title: 'Coldstore Chamber #2 Temp Alert',
      message: 'Temperature stabilized back to -20.4°C after transient loading cycle.',
      category: 'Coldstore',
      time: 'Yesterday 04:15 PM',
      date: '05-Nov-2026, 04:15 PM',
      severity: 'warning',
      read: true,
      targetHash: '#/coldstore/realtime/temperature-monitoring'
    },
    {
      id: 'notif-5',
      title: 'Batch #PRD-2026-880 Packaging Completed',
      message: '9,200 KG Head-on IQF Vannamei boxed and palletized into Room B.',
      category: 'Production',
      time: 'Yesterday 02:00 PM',
      date: '05-Nov-2026, 02:00 PM',
      severity: 'success',
      read: true,
      targetHash: '#/production/batches/production-orders'
    },
    {
      id: 'notif-6',
      title: 'Daily Automated Database Backup',
      message: 'Encrypted snapshot vault sync completed successfully (420 MB compressed).',
      category: 'System Alert',
      time: '05-Nov-2026, 02:00 AM',
      date: '05-Nov-2026, 02:00 AM',
      severity: 'info',
      read: true,
      targetHash: '#/settings/setup/general'
    },
    {
      id: 'notif-7',
      title: 'Supplier Pre-Harvest Nitrate Verification',
      message: 'Nellore Block #4 pond water testing sample verified compliant with EU limits.',
      category: 'Procurement',
      time: '04-Nov-2026, 11:30 AM',
      date: '04-Nov-2026, 11:30 AM',
      severity: 'info',
      read: true,
      targetHash: '#/purchase/orders/purchase-orders'
    },
    {
      id: 'notif-8',
      title: 'Customer LC Payment Received',
      message: 'Letter of credit confirmation received from Marubeni Corp ($240,000 USD).',
      category: 'Export Logistics',
      time: '03-Nov-2026, 05:20 PM',
      date: '03-Nov-2026, 05:20 PM',
      severity: 'success',
      read: true,
      targetHash: '#/sales/orders/sales-orders'
    }
  ],

  load() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse notifications from localStorage, using defaults.', e);
    }
    this.save(this.defaultNotifications);
    return [...this.defaultNotifications];
  },

  save(items) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save notifications to localStorage.', e);
    }
    this.notifyListeners(items);
  },

  getAll() {
    return this.load();
  },

  getUnread() {
    return this.load().filter(n => !n.read);
  },

  getRead() {
    return this.load().filter(n => n.read);
  },

  getUnreadCount() {
    return this.getUnread().length;
  },

  markAsRead(id) {
    const list = this.load();
    const item = list.find(n => n.id === id);
    if (item && !item.read) {
      item.read = true;
      this.save(list);
    }
  },

  markAsUnread(id) {
    const list = this.load();
    const item = list.find(n => n.id === id);
    if (item && item.read) {
      item.read = false;
      this.save(list);
    }
  },

  markAllAsRead() {
    const list = this.load();
    let changed = false;
    list.forEach(n => {
      if (!n.read) {
        n.read = true;
        changed = true;
      }
    });
    if (changed) {
      this.save(list);
    }
  },

  deleteNotification(id) {
    const list = this.load().filter(n => n.id !== id);
    this.save(list);
  },

  clearAllRead() {
    const list = this.load().filter(n => !n.read);
    this.save(list);
  },

  addNotification(notif) {
    const list = this.load();
    const newNotif = {
      id: `notif-${Date.now()}`,
      time: 'Just now',
      date: new Date().toLocaleString(),
      read: false,
      severity: 'info',
      ...notif
    };
    list.unshift(newNotif);
    this.save(list);
    return newNotif;
  },

  subscribe(callback) {
    if (typeof callback === 'function' && !this.listeners.includes(callback)) {
      this.listeners.push(callback);
    }
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  },

  notifyListeners(items) {
    this.listeners.forEach(fn => {
      try {
        fn(items);
      } catch (err) {
        console.error('Notification listener callback error:', err);
      }
    });
  }
};

