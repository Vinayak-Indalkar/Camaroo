import { LOGO_WHITE, LOGO_CAMAROO_WHITE } from '../data/logos.js';
import { ERP_DATA } from '../data/mockData.js';

export const ADMIN_NAV_HIERARCHY = [
  {
    id: "dashboard",
    title: "Dashboard",
    category: "ENTERPRISE OPERATIONS",
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
    id: "sales",
    title: "Sales & Exports",
    category: "ENTERPRISE OPERATIONS",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`,
    submenus: [
      {
        id: "dashboard",
        title: "Dashboard",
        defaultTab: "overview",
        tabs: [
          { id: "overview", label: "Overview", hash: "#/sales/dashboard/overview" }
        ]
      },
      {
        id: "orders",
        title: "Orders",
        defaultTab: "proforma-list",
        tabs: [
          { id: "proforma-list", label: "Proforma Invoices (PI Register)", hash: "#/sales/orders/proforma-list" },
          { id: "custom-invoices", label: "Custom Invoices", hash: "#/sales/orders/custom-invoices" },
          { id: "isf-details", label: "ISF Details", hash: "#/sales/orders/isf-details" },
          { id: "shipping-bill", label: "Shipping Bill", hash: "#/sales/orders/shipping-bill" },
          { id: "commercial-invoice", label: "Commercial Invoice", hash: "#/sales/orders/commercial-invoice" },
          { id: "eta-status", label: "ETA Status", hash: "#/sales/orders/eta-status" },
          { id: "fda-status", label: "FDA Status", hash: "#/sales/orders/fda-status" },
          { id: "clearing-agent", label: "Clearing Agent", hash: "#/sales/orders/clearing-agent" }
        ]
      },
      {
        id: "payments",
        title: "Payments",
        defaultTab: "forward-contracts",
        tabs: [
          { id: "forward-contracts", label: "Forward Contracts", hash: "#/sales/payments/forward-contracts" },
          { id: "collections", label: "Collections", hash: "#/sales/payments/collections" },
          { id: "negotiations", label: "Negotiations", hash: "#/sales/payments/negotiations" },
          { id: "realization", label: "Realization", hash: "#/sales/payments/realization" },
          { id: "realization-done", label: "Realization Done", hash: "#/sales/payments/realization-done" }
        ]
      },
      {
        id: "insurance",
        title: "Insurance",
        defaultTab: "pending-insurance",
        tabs: [
          { id: "pending-insurance", label: "Pending Insurance", hash: "#/sales/insurance/pending-insurance" },
          { id: "insurance-templates", label: "Insurance Templates", hash: "#/sales/insurance/insurance-templates" },
          { id: "insurance-payments", label: "Insurance Payments", hash: "#/sales/insurance/insurance-payments" }
        ]
      }
    ]
  },
  {
    id: "purchase",
    title: "Purchase",
    category: "ENTERPRISE OPERATIONS",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
    submenus: [
      {
        id: "dashboard",
        title: "Dashboard",
        defaultTab: "rm-dashboard",
        tabs: [
          { id: "rm-dashboard", label: "Raw Material Dashboard", hash: "#/purchase/dashboard/rm-dashboard" },
          { id: "commercial-dashboard", label: "Commercial Dashboard", hash: "#/purchase/dashboard/commercial-dashboard" }
        ]
      },
      {
        id: "operations",
        title: "Operations",
        defaultTab: "bookings",
        tabs: [
          { id: "bookings", label: "Booking", hash: "#/purchase/operations/bookings" },
          { id: "rm-arrivals", label: "Raw Material Arrivals", hash: "#/purchase/operations/rm-arrivals" },
          { id: "arrivals", label: "Arrivals", hash: "#/purchase/operations/arrivals" },
          { id: "lot-tracking", label: "Lot Tracking", hash: "#/purchase/operations/lot-tracking" }
        ]
      },
      {
        id: "transactions-bills",
        title: "Transactions & Bills",
        defaultTab: "supplier-bills",
        tabs: [
          { id: "supplier-bills", label: "Supplier Bill Summary", hash: "#/purchase/transactions-bills/supplier-bills" },
          { id: "commercial-txns", label: "Commercial Transactions", hash: "#/purchase/transactions-bills/commercial-txns" }
        ]
      },
      {
        id: "payments",
        title: "Payments",
        defaultTab: "payment-summary",
        tabs: [
          { id: "payment-summary", label: "Payment Summary", hash: "#/purchase/payments/payment-summary" },
          { id: "bill-date-payment", label: "Bill & Date-Wise Payment", hash: "#/purchase/payments/bill-date-payment" }
        ]
      }
    ]
  },
  {
    id: "preprocessing",
    title: "Pre-Processing",
    category: "ENTERPRISE OPERATIONS",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11L12 15L5 11M19 15L12 19L5 15M12 3L2 8L12 13L22 8L12 3Z"/></svg>`,
    submenus: [
      {
        id: "dashboard",
        title: "Dashboard",
        defaultTab: "overview",
        tabs: [
          { id: "overview", label: "Overview", hash: "#/preprocessing/dashboard/overview" }
        ]
      },
      {
        id: "operations",
        title: "Operations",
        defaultTab: "deheading",
        tabs: [
          { id: "deheading", label: "Deheading", hash: "#/preprocessing/operations/deheading" },
          { id: "grading", label: "Grading", hash: "#/preprocessing/operations/grading" },
          { id: "rm-received-trackid", label: "Rm Received trackid", hash: "#/preprocessing/operations/rm-received-trackid" },
          { id: "de-heading-trackid", label: "De-Heading trackid", hash: "#/preprocessing/operations/de-heading-trackid" },
          { id: "grading-trackid", label: "Grading trackid", hash: "#/preprocessing/operations/grading-trackid" },
          { id: "value-addition-trackid", label: "Value Addition trackid", hash: "#/preprocessing/operations/value-addition-trackid" },
          { id: "hon-qty-transfer-after-va", label: "Hon Qty Transfer After VA", hash: "#/preprocessing/operations/hon-qty-transfer-after-va" }
        ]
      },
      {
        id: "chemical-screens",
        title: "Chemical Screens",
        defaultTab: "chemical-pos",
        tabs: [
          { id: "chemical-pos", label: "Chemical Pos", hash: "#/preprocessing/chemical-screens/chemical-pos" },
          { id: "received-chemicals", label: "Received Chemicals", hash: "#/preprocessing/chemical-screens/received-chemicals" },
          { id: "chemicals-consumption", label: "Chemicals Consumption", hash: "#/preprocessing/chemical-screens/chemicals-consumption" },
          { id: "chemical-received-report", label: "Chemical Received Report", hash: "#/preprocessing/chemical-screens/chemical-received-report" },
          { id: "chemical-opening-balance-report", label: "Chemical Opening Balance Report", hash: "#/preprocessing/chemical-screens/chemical-opening-balance-report" },
          { id: "chemical-balance-report", label: "Chemical Balance Report", hash: "#/preprocessing/chemical-screens/chemical-balance-report" },
          { id: "chemical-payments-list", label: "Chemical Payments List", hash: "#/preprocessing/chemical-screens/chemical-payments-list" }
        ]
      }
    ]
  },
  {
    id: "quality",
    title: "Quality Control",
    category: "ENTERPRISE OPERATIONS",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    submenus: [
      {
        id: "dashboard",
        title: "Dashboard",
        defaultTab: "overview",
        tabs: [
          { id: "overview", label: "Dashboard", hash: "#/quality/dashboard/overview" }
        ]
      },
      {
        id: "lab",
        title: "Lab",
        defaultTab: "lots-list",
        tabs: [
          { id: "lots-list", label: "Lots List", hash: "#/quality/lab/lots-list" },
          { id: "ab-report", label: "AB ELISA Report", hash: "#/quality/lab/ab-report" },
          { id: "rm-report", label: "Raw Material Report", hash: "#/quality/lab/rm-report" },
          { id: "mb-report", label: "Microbiology Report", hash: "#/quality/lab/mb-report" },
          { id: "lab-report", label: "In-House Lab", hash: "#/quality/lab/lab-report" },
          { id: "external-lab-report", label: "External Lab", hash: "#/quality/lab/external-lab-report" }
        ]
      },
      {
        id: "qc-operations",
        title: "QC Operations",
        defaultTab: "documentation",
        tabs: [
          { id: "documentation", label: "QC Operations", hash: "#/quality/qc-operations/documentation" }
        ]
      },
      {
        id: "chemical-screening",
        title: "Chemical Screening",
        defaultTab: "food-social-audit",
        tabs: [
          { id: "food-social-audit", label: "Food & Social Audit", hash: "#/quality/chemical-screening/food-social-audit" },
          { id: "farm-mill-hatchery-audit", label: "Farm / Mill / Hatchery", hash: "#/quality/chemical-screening/farm-mill-hatchery-audit" },
          { id: "hatchery-list", label: "Hatchery List", hash: "#/quality/chemical-screening/hatchery-list" }
        ]
      },
      {
        id: "qc-audits",
        title: "QC Audits",
        defaultTab: "food-audit-list",
        tabs: [
          { id: "food-audit-list", label: "Food Audits", hash: "#/quality/qc-audits/food-audit-list" },
          { id: "social-audit-list", label: "Social Audits", hash: "#/quality/qc-audits/social-audit-list" },
          { id: "farm-audit-list", label: "Farm Audits", hash: "#/quality/qc-audits/farm-audit-list" },
          { id: "hatchery-audit-list", label: "Hatchery Audits", hash: "#/quality/qc-audits/hatchery-audit-list" },
          { id: "feed-mill-audit-list", label: "Feed Mill Audits", hash: "#/quality/qc-audits/feed-mill-audit-list" }
        ]
      }
    ]
  },
  {
    id: "production",
    title: "Production",
    category: "ENTERPRISE OPERATIONS",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M3 21V10l6 4V10l6 4V7l6 4v10"/></svg>`,
    submenus: [
      {
        id: "dashboard",
        title: "Dashboard",
        defaultTab: "dashboard",
        tabs: [
          { id: "dashboard", label: "Dashboard", hash: "#/production/dashboard/dashboard" }
        ]
      },
      {
        id: "pre-processing",
        title: "Pre-Processing",
        defaultTab: "soaking-trackid",
        tabs: [
          { id: "soaking-trackid", label: "Soaking trackid", hash: "#/production/pre-processing/soaking-trackid" },
          { id: "freezing-trackid", label: "Freezing trackid", hash: "#/production/pre-processing/freezing-trackid" }
        ]
      },
      {
        id: "operations",
        title: "Operations",
        defaultTab: "production-standard-yields",
        tabs: [
          { id: "production-standard-yields", label: "ProductionStandardYields", hash: "#/production/operations/production-standard-yields" },
          { id: "soaking", label: "Soaking", hash: "#/production/operations/soaking" },
          { id: "soaking-v2", label: "Soaking (V2)", hash: "#/production/operations/soaking-v2" },
          { id: "freezing-store", label: "Freezing-Store", hash: "#/production/operations/freezing-store" }
        ]
      }
    ]
  },
  {
    id: "coldstore",
    title: "Coldstore",
    category: "ENTERPRISE OPERATIONS",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18m-18 0l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3"/></svg>`,
    submenus: [
      {
        id: "dashboard",
        title: "Dashboard",
        defaultTab: "overview",
        tabs: [
          { id: "overview", label: "Dashboard", hash: "#/coldstore/dashboard/overview" }
        ]
      },
      {
        id: "production",
        title: "Production",
        defaultTab: "daily-production-list",
        tabs: [
          { id: "daily-production-list", label: "Daily Production", hash: "#/coldstore/production/daily-production-list" },
          { id: "daily-stockout-details-list", label: "Daily StockOut", hash: "#/coldstore/production/daily-stockout-details-list" },
          { id: "freezing", label: "Freezing", hash: "#/coldstore/production/freezing" }
        ]
      },
      {
        id: "stock",
        title: "Stock",
        defaultTab: "inward",
        tabs: [
          { id: "inward", label: "Stock In", hash: "#/coldstore/stock/inward" },
          { id: "stock-out", label: "Stock Out", hash: "#/coldstore/stock/stock-out" }
        ]
      },
      {
        id: "orders",
        title: "Orders",
        defaultTab: "running-orders",
        tabs: [
          { id: "running-orders", label: "Running Orders", hash: "#/coldstore/orders/running-orders" },
          { id: "po-status-reports", label: "Orders Status", hash: "#/coldstore/orders/po-status-reports" },
          { id: "shipped-po-list", label: "Shipments List", hash: "#/coldstore/orders/shipped-po-list" }
        ]
      },
      {
        id: "store",
        title: "Store",
        defaultTab: "store-on-floor-stock",
        tabs: [
          { id: "store-on-floor-stock", label: "View Stock", hash: "#/coldstore/store/store-on-floor-stock" },
          { id: "view-store-layout", label: "View Store", hash: "#/coldstore/store/view-store-layout" },
          { id: "create-store-layout", label: "Rack names", hash: "#/coldstore/store/create-store-layout" }
        ]
      },
      {
        id: "stock-approvals",
        title: "Stock Approvals",
        defaultTab: "admin-daily-production-list",
        tabs: [
          { id: "admin-daily-production-list", label: "Daily Production List", hash: "#/coldstore/stock-approvals/admin-daily-production-list" },
          { id: "admin-inward-approval", label: "Inward Approval", hash: "#/coldstore/stock-approvals/admin-inward-approval" }
        ]
      },
      {
        id: "ibt",
        title: "IBT",
        defaultTab: "ibt-management",
        tabs: [
          { id: "ibt-management", label: "IBT", hash: "#/coldstore/ibt/ibt-management" }
        ]
      },
      {
        id: "shipment",
        title: "Shipment",
        defaultTab: "shipments",
        tabs: [
          { id: "shipments", label: "Shipment", hash: "#/coldstore/shipment/shipments" }
        ]
      }
    ]
  },
  {
    id: "inventory",
    title: "Inventory",
    category: "ENTERPRISE OPERATIONS",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`,
    submenus: [
      {
        id: "general-store",
        title: "General Store",
        defaultTab: "indent-page",
        tabs: [
          { id: "indent-page", label: "Indent Page (GS)", hash: "#/inventory/general-store/indent-page" },
          { id: "proforma-order", label: "Proforma Order (GS)", hash: "#/inventory/general-store/proforma-order" },
          { id: "goods-receipt-note", label: "Goods Receipt Note (GS)", hash: "#/inventory/general-store/goods-receipt-note" },
          { id: "material-issue", label: "Material Issue (GS)", hash: "#/inventory/general-store/material-issue" }
        ]
      },
      {
        id: "packing-material",
        title: "Packing Material",
        defaultTab: "proforma-invoice",
        tabs: [
          { id: "proforma-invoice", label: "Proforma Invoice (PM)", hash: "#/inventory/packing-material/proforma-invoice" },
          { id: "purchase-orders", label: "Purchase Orders (PM)", hash: "#/inventory/packing-material/purchase-orders" },
          { id: "goods-receipt-note", label: "Goods Receipt Note (PM)", hash: "#/inventory/packing-material/goods-receipt-note" },
          { id: "material-issue", label: "Material Issue (PM)", hash: "#/inventory/packing-material/material-issue" }
        ]
      },
      {
        id: "inventory",
        title: "Inventory",
        defaultTab: "proforma-register",
        tabs: [
          { id: "proforma-register", label: "Proforma Register", hash: "#/inventory/inventory/proforma-register" }
        ]
      }
    ]
  },
  {
    id: "reports",
    title: "Reports",
    category: "INTELLIGENCE & REPORTS",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
    submenus: [
      {
        id: "purchase-reports",
        title: "Purchase Reports",
        defaultTab: "purchase-reports",
        tabs: [
          { id: "purchase-reports", label: "Purchase Reports", hash: "#/reports/purchase-reports/purchase-reports" }
        ]
      },
      {
        id: "preprocessing-reports",
        title: "Pre-Processing Reports",
        defaultTab: "preprocessing-reports",
        tabs: [
          { id: "preprocessing-reports", label: "Pre-Processing Reports", hash: "#/reports/preprocessing-reports/preprocessing-reports" }
        ]
      },
      {
        id: "quality-reports",
        title: "Quality Control Reports",
        defaultTab: "quality-reports",
        tabs: [
          { id: "quality-reports", label: "Quality Control Reports", hash: "#/reports/quality-reports/quality-reports" }
        ]
      },
      {
        id: "production-analytics",
        title: "Production Analytics",
        defaultTab: "production-analytics",
        tabs: [
          { id: "production-analytics", label: "Production Analytics", hash: "#/reports/production-analytics/production-analytics" }
        ]
      },
      {
        id: "coldstore-analytics",
        title: "Coldstore Analytics",
        defaultTab: "coldstore-analytics",
        tabs: [
          { id: "coldstore-analytics", label: "Coldstore Analytics", hash: "#/reports/coldstore-analytics/coldstore-analytics" }
        ]
      },
      {
        id: "sales-export-analytics",
        title: "Sales & Export Analytics",
        defaultTab: "sales-export-analytics",
        tabs: [
          { id: "sales-export-analytics", label: "Sales & Export Analytics", hash: "#/reports/sales-export-analytics/sales-export-analytics" }
        ]
      }
    ]
  },
  {
    id: "settings",
    title: "Settings",
    category: "SYSTEM & GOVERNANCE",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    submenus: [
      {
        id: "master-setup",
        title: "Master Setup",
        defaultTab: "masters",
        tabs: [
          { id: "masters", label: "Master Setup", hash: "#/settings/master-setup/masters" }
        ]
      }
    ]
  }
];

// Super Admin Navigation Hierarchy (Dashboard, General, Master, Reports)
export const SUPER_ADMIN_NAV_HIERARCHY = [
  {
    id: "dashboard",
    title: "Dashboard",
    category: "ENTERPRISE OPERATIONS",
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
    category: "SYSTEM & GOVERNANCE",
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
    category: "INTELLIGENCE & REPORTS",
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
    category: "SYSTEM & GOVERNANCE",
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
      // Collapsed Icon-Only Floated Sidebar Mode (Width: 72px, Rounded Corners 28px - Matching Image 1)
      container.innerHTML = `
        <div class="relative h-full w-full">
          <aside id="erp-sidebar" class="bg-[#0B132B] text-[#94A3B8] w-full h-full flex flex-col justify-between transition-all duration-300 select-none border border-[#1E293B]/80 rounded-[28px] shadow-2xl overflow-hidden py-3 px-2">
            <!-- Top: Logo badge + Expand button -->
            <div class="flex flex-col items-center shrink-0">
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-md">
                <img src="${isSuperAdmin ? LOGO_CAMAROO_WHITE : LOGO_WHITE}" alt="Logo" class="h-7 w-auto object-contain" />
              </div>
              <button 
                id="sidebar-toggle-expand-btn" 
                class="w-8 h-8 rounded-xl bg-[#151F32] hover:bg-[#1E293B] text-[#00A4B7] hover:text-white flex items-center justify-center cursor-pointer transition-colors border border-[#1E293B] mt-2.5 shadow-xs" 
                title="Expand Sidebar"
              >
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>

            <!-- Navigation Scrollable Icons Area -->
            <div class="flex-1 flex flex-col items-center space-y-2 py-3 w-full overflow-y-auto overflow-x-visible scrollbar-none" id="sidebar-nav-groups">
              ${this.renderCollapsedNavHierarchy()}
            </div>

            <!-- Bottom: Pinned Settings Squircle Button with flyout -->
            <div class="pt-2 border-t border-[#1E293B]/70 shrink-0 relative group">
              <button 
                data-module-id="settings" 
                class="sidebar-mod-btn w-11 h-11 rounded-2xl bg-[#121B2D] border border-[#1E293B] text-[#00A4B7] hover:text-white hover:border-[#00A4B7] flex items-center justify-center shadow-md transition-colors cursor-pointer mx-auto" 
                title="Settings"
              >
                <svg class="w-5 h-5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83m0-14.14l-2.83 2.83m-8.48 8.48l-2.83 2.83"/></svg>
              </button>
              <div class="absolute left-[70px] bottom-0 w-60 bg-[#162032] border border-[#27354F] rounded-2xl p-3 shadow-2xl z-50 text-white backdrop-blur-md hidden group-hover:block transition-all pointer-events-auto">
                <div class="flex items-center gap-2.5 pb-2 mb-2 border-b border-[#27354F]/70">
                  <div class="w-7 h-7 rounded-lg bg-[#223049] text-[#00A4B7] flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83m0-14.14l-2.83 2.83m-8.48 8.48l-2.83 2.83"/></svg>
                  </div>
                  <div class="flex flex-col min-w-0">
                    <span class="text-xs font-bold text-white tracking-tight truncate">Settings</span>
                    <span class="text-[10px] text-[#64748B] font-medium truncate">${isSuperAdmin ? 'Customizer' : 'Master Setup & Config'}</span>
                  </div>
                </div>
                <div class="space-y-1">
                  <a 
                    href="${isSuperAdmin ? '#/settings/custom/forms' : '#/settings/master-setup/masters'}" 
                    class="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span>${isSuperAdmin ? 'Customizer' : 'Master Setup'}</span>
                    <svg class="w-3.5 h-3.5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      `;
    } else {
      // Expanded Full Floated Sidebar Mode (Width: 272px, Rounded Corners 28px - Matching Image 2)
      container.innerHTML = `
        <div class="relative h-full w-full">
          <aside id="erp-sidebar" class="bg-[#0B132B] text-[#94A3B8] w-full h-full flex flex-col justify-between transition-all duration-300 select-none border border-[#1E293B]/80 rounded-[28px] shadow-2xl overflow-hidden p-3">
            <!-- Header: Logo + Title + Collapse Button (<) -->
            <div class="flex items-center justify-between px-1 pt-1 pb-3 mb-1 shrink-0">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                  <img src="${isSuperAdmin ? LOGO_CAMAROO_WHITE : LOGO_WHITE}" alt="Logo" class="h-7 w-auto object-contain" />
                </div>
                <div class="leading-tight flex flex-col justify-center min-w-0">
                  <span class="text-sm font-bold text-white tracking-tight truncate">${isSuperAdmin ? 'Camaroo ERP' : 'Devi Fisheries'}</span>
                  <span class="text-[10px] text-[#64748B] font-medium tracking-normal truncate mt-0.5">Powered by Camaroo</span>
                </div>
              </div>
              <button 
                id="sidebar-toggle-collapse-btn" 
                class="w-8 h-8 rounded-xl bg-[#151F32] hover:bg-[#1E293B] text-[#00A4B7] hover:text-white flex items-center justify-center cursor-pointer transition-colors border border-[#1E293B] shrink-0" 
                title="Collapse Sidebar"
              >
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
              </button>
            </div>

            <!-- Scrollable Navigation Area with Category Headers -->
            <div class="flex-1 flex flex-col overflow-y-auto px-1 space-y-1 scrollbar-none" id="sidebar-nav-groups">
              ${this.renderNavHierarchy()}
            </div>

            <!-- Bottom: Pinned Settings Card (matching Image 2 bottom card) -->
            <div class="pt-2 border-t border-[#1E293B]/70 shrink-0">
              <a 
                href="${isSuperAdmin ? '#/settings/custom/forms' : '#/settings/master-setup/masters'}" 
                id="sidebar-bottom-settings-card" 
                class="bg-[#121B2D] border border-[#1E293B] hover:border-[#334155] rounded-2xl p-2.5 flex items-center gap-3 transition-colors cursor-pointer group"
              >
                <div class="w-9 h-9 rounded-xl bg-[#0D1526] border border-[#1E293B] flex items-center justify-center text-[#00A4B7] group-hover:border-[#00A4B7] transition-colors shrink-0">
                  <svg class="w-5 h-5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83m0-14.14l-2.83 2.83m-8.48 8.48l-2.83 2.83"/></svg>
                </div>
                <div class="flex flex-col min-w-0">
                  <span class="text-xs font-bold text-white leading-tight truncate">Settings</span>
                  <span class="text-[10px] text-[#64748B] font-medium leading-tight truncate mt-0.5">${isSuperAdmin ? 'Customizer' : 'Master Setup & Config'}</span>
                </div>
              </a>
            </div>
          </aside>
        </div>
      `;
    }

    this.bindEvents();
  },

  renderNavHierarchy() {
    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
    const modules = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;
    let lastCategory = '';

    return modules.map(mod => {
      const isExpanded = mod.id === this.activeModuleId;
      const isSingleLevel = mod.submenus.length === 1 && (mod.id === 'dashboard' || mod.submenus[0].title === mod.title);

      // Section Category Header when category changes
      let categoryHeaderHtml = '';
      if (mod.category && mod.category !== lastCategory) {
        lastCategory = mod.category;
        categoryHeaderHtml = `
          <div class="px-3 pt-3.5 pb-1 text-[10px] font-extrabold tracking-wider text-[#475569] uppercase select-none">
            ${mod.category}
          </div>
        `;
      }

      // Active pill style matching attached Image 2
      const activeClass = isExpanded 
        ? 'bg-[#182337] text-white font-bold border border-[#27354F]/50 shadow-xs' 
        : 'text-[#94A3B8] hover:bg-white/5 hover:text-white font-medium';

      // Super Admin: Direct single-click button for non-settings
      if (isSuperAdmin && mod.id !== 'settings') {
        return `
          ${categoryHeaderHtml}
          <div class="nav-module-group mb-1">
            <button 
              data-module-id="${mod.id}" 
              class="sidebar-mod-btn w-full px-3 py-2.5 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${activeClass}"
            >
              <div class="flex items-center gap-3 truncate">
                <span class="w-4 h-4 flex items-center justify-center shrink-0 ${isExpanded ? 'text-white' : 'text-[#64748B]'}">${mod.icon}</span>
                <span class="text-xs tracking-tight truncate">${mod.title}</span>
              </div>
              ${isExpanded ? '<span class="w-1.5 h-1.5 rounded-full bg-[#00A4B7] shadow-[0_0_8px_#00A4B7] shrink-0"></span>' : ''}
            </button>
          </div>
        `;
      }
      
      // Standard accordion with submenus list
      let submenusHtml = '';
      if (isExpanded && !isSingleLevel) {
        submenusHtml = `
          <div class="nav-submenus-list mt-1 ml-4 pl-3 py-1 space-y-1 border-l-2 border-[#00A4B7]">
            ${mod.submenus.map(sub => {
              const isSubActive = sub.id === this.activeSubmenuId;
              const defaultHash = sub.tabs[0]?.hash || `/#/${mod.id}/${sub.id}`;

              return `
                <div class="nav-submenu-block">
                  <a 
                    href="${defaultHash}" 
                    class="flex items-center px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${isSubActive ? 'bg-[#00A4B7] text-white font-bold shadow-xs' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
                  >
                    <div class="flex items-center gap-2 truncate">
                      <span class="w-1.5 h-1.5 rounded-full ${isSubActive ? 'bg-white' : 'bg-[#475569]'} shrink-0"></span>
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
        ${categoryHeaderHtml}
        <div class="nav-module-group mb-1">
          <button 
            data-module-id="${mod.id}" 
            class="sidebar-mod-btn w-full px-3 py-2.5 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${activeClass}"
          >
            <div class="flex items-center gap-3 truncate">
              <span class="w-4 h-4 flex items-center justify-center shrink-0 ${isExpanded ? 'text-white' : 'text-[#64748B]'}">${mod.icon}</span>
              <span class="text-xs tracking-tight truncate">${mod.title}</span>
            </div>
            <div class="flex items-center gap-1 shrink-0">
              ${isSingleLevel ? (
                isExpanded ? '<span class="w-1.5 h-1.5 rounded-full bg-[#00A4B7] shadow-[0_0_8px_#00A4B7] shrink-0"></span>' : ''
              ) : (
                `<svg class="w-3.5 h-3.5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180 text-white' : 'text-[#64748B]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`
              )}
            </div>
          </button>
          ${submenusHtml}
        </div>
      `;
    }).join('');
  },

  renderCollapsedNavHierarchy() {
    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
    const modules = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;

    return modules.map(mod => {
      const isCurrentMod = mod.id === this.activeModuleId;
      const isSingleLevel = mod.submenus.length === 1 && (mod.id === 'dashboard' || mod.submenus[0].title === mod.title);

      const activeBtnClass = isCurrentMod 
        ? 'w-11 h-11 rounded-2xl bg-[#182337] text-white shadow-md border border-[#27354F] ring-1 ring-[#00A4B7]/40' 
        : 'w-10 h-10 rounded-xl text-[#94A3B8] hover:bg-white/5 hover:text-white';

      if (isSingleLevel) {
        return `
          <div class="relative group flex justify-center nav-module-group">
            <button 
              data-module-id="${mod.id}" 
              class="sidebar-mod-btn ${activeBtnClass} flex items-center justify-center transition-all duration-200 cursor-pointer"
              title="${mod.title}"
            >
              <span class="w-4 h-4 flex items-center justify-center ${isCurrentMod ? 'text-white' : ''}">${mod.icon}</span>
            </button>
            <div class="absolute left-[70px] top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-[#162032] border border-[#27354F] rounded-xl text-white font-bold text-xs whitespace-nowrap hidden group-hover:block z-50 shadow-xl pointer-events-none">
              ${mod.title}
            </div>
          </div>
        `;
      }

      return `
        <div class="relative group flex justify-center nav-module-group">
          <!-- Icon Button (Matching Image 1 active squircle) -->
          <button 
            data-module-id="${mod.id}" 
            class="sidebar-mod-btn ${activeBtnClass} flex items-center justify-center transition-all duration-200 cursor-pointer"
            title="${mod.title}"
          >
            <span class="w-4 h-4 flex items-center justify-center ${isCurrentMod ? 'text-white' : ''}">${mod.icon}</span>
          </button>

          <!-- Floating Flyout Menu on Hover (matching attached Image 1) -->
          <div class="absolute left-[70px] top-0 w-60 bg-[#162032] border border-[#27354F] rounded-2xl p-3 shadow-2xl z-50 text-white backdrop-blur-md hidden group-hover:block transition-all pointer-events-auto">
            <!-- Module Title in Flyout -->
            <div class="flex items-center gap-2.5 pb-2 mb-2 border-b border-[#27354F]/70">
              <div class="w-7 h-7 rounded-lg bg-[#223049] text-white flex items-center justify-center shrink-0">
                <span class="w-4 h-4 flex items-center justify-center">${mod.icon}</span>
              </div>
              <span class="text-xs font-bold text-white tracking-tight truncate">${mod.title}</span>
            </div>

            <!-- Submenus List in Flyout -->
            <div class="space-y-1">
              ${mod.submenus.map(sub => {
                const isSubActive = isCurrentMod && (sub.id === this.activeSubmenuId);
                const defaultHash = sub.tabs[0]?.hash || `/#/${mod.id}/${sub.id}`;
                return `
                  <a 
                    href="${defaultHash}" 
                    class="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-all ${isSubActive ? 'bg-[#223049] text-[#00A4B7] font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
                  >
                    <span class="truncate">${sub.title}</span>
                    <svg class="w-3.5 h-3.5 text-[#64748B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </a>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
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

        // Direct single-click navigation for settings when not currently active
        if (modId === 'settings' && this.activeModuleId !== 'settings') {
          this.activeModuleId = 'settings';
          const defaultHash = isSuperAdmin ? '#/settings/custom/forms' : '#/settings/master-setup/masters';
          window.location.hash = defaultHash;
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
            if (arrow) arrow.classList.toggle('rotate-180');
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

    // Collapse toggle button (< in header, matching Image 2)
    const collapseBtn = document.getElementById('sidebar-toggle-collapse-btn');
    if (collapseBtn) {
      collapseBtn.onclick = (e) => {
        e.stopPropagation();
        this.toggleCollapse();
      };
    }

    // Expand toggle button (> below logo, matching Image 1)
    const expandBtn = document.getElementById('sidebar-toggle-expand-btn');
    if (expandBtn) {
      expandBtn.onclick = (e) => {
        e.stopPropagation();
        this.toggleCollapse();
      };
    }

    // Edge toggle button (if present)
    const edgeToggleBtn = document.getElementById('sidebar-edge-toggle-btn');
    if (edgeToggleBtn) {
      edgeToggleBtn.onclick = (e) => {
        e.stopPropagation();
        this.toggleCollapse();
      };
    }
  }
};
