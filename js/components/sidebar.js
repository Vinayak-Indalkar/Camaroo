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
        defaultTab: "system-overview",
        tabs: [
          { id: "system-overview", label: "Home", hash: "#/dashboard/overview/system-overview" }
        ]
      }
    ]
  },
  {
    id: "sales",
    title: "Sales & Exports",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
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
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`,
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
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,
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
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`,
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
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    submenus: [
      {
        id: "setup",
        title: "Settings",
        defaultTab: "organization",
        tabs: [
          { id: "organization", label: "Organization", hash: "#/settings/setup/organization" },
          { id: "user-roles", label: "User & Roles", hash: "#/settings/setup/user-roles" },
          { id: "general", label: "General", hash: "#/settings/setup/general" },
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
          <aside id="erp-sidebar" class="bg-[#0F172A] text-[#94A3B8] w-full h-full flex flex-col transition-all duration-300 select-none border border-[#1E293B] rounded-[24px] overflow-visible">
            <!-- Collapsed Logo Icon Header -->
            <div class="h-14 px-2 py-2 flex items-center justify-center border-b border-[#1E293B] bg-[#0B0F19] shrink-0 rounded-t-[24px]" title="${isSuperAdmin ? 'Camaroo ERP' : 'Devi Fisheries'}">
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
            <div class="shrink-0 py-3 px-2 border-t border-[#1E293B] flex justify-center bg-[#0F172A] rounded-b-[24px]" id="sidebar-bottom-settings-collapsed">
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
          <aside id="erp-sidebar" class="bg-[#0F172A] text-[#94A3B8] w-full h-full flex flex-col transition-all duration-300 select-none border border-[#1E293B] rounded-[24px] overflow-hidden">
            <!-- Logo Branding Header -->
            <div class="h-14 px-4 py-2 flex items-center justify-between border-b border-[#1E293B] bg-[#0B0F19] shrink-0 rounded-t-[24px]">
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
            <div class="shrink-0 p-3 border-t border-[#1E293B] bg-[#0F172A] rounded-b-[24px]" id="sidebar-bottom-settings">
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
    const allModules = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;
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
    const allModules = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;
    const modules = allModules.filter(m => m.id !== 'settings');

    return modules.map(mod => {
      const isCurrentMod = mod.id === this.activeModuleId;
      const groupWrapperClass = 'relative group flex justify-center nav-module-group';
      const firstTabHash = mod.submenus[0]?.tabs[0]?.hash || '#/';

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
            <div class="absolute left-full top-0 ml-3 px-2 py-1 bg-[#0F172A] border border-[#1E293B] rounded-lg text-white font-bold text-xs whitespace-nowrap hidden group-hover:block z-50 pointer-events-none">
              Home
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
            <div class="absolute left-full top-0 ml-3 px-2 py-1 bg-[#0F172A] border border-[#1E293B] rounded-lg text-white font-bold text-xs whitespace-nowrap hidden group-hover:block z-50 pointer-events-none">
              ${mod.title}
            </div>
          </div>
        `;
      }

      // Modules with submenus: Render rich hover flyout card matching design mockup
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

          <!-- Floating Flyout Menu on Hover -->
          <div class="absolute left-full top-0 ml-2.5 w-64 bg-[#1E2433] border border-[#2E384D] rounded-2xl p-3.5 shadow-2xl hidden group-hover:block z-50 transition-all pointer-events-auto">
            <!-- Invisible bridge to prevent mouse leaving hover area -->
            <div class="absolute -left-3 top-0 bottom-0 w-3 pointer-events-auto"></div>

            <!-- Module Title & Icon Header in Flyout -->
            <div class="flex items-center gap-2.5 pb-3 border-b border-[#2E384D]/80 mb-2">
              <div class="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 shadow-xs">
                ${mod.icon}
              </div>
              <span class="font-bold text-white text-sm tracking-tight truncate">${mod.title}</span>
            </div>

            <!-- Submenus List in Flyout -->
            <div class="space-y-1">
              ${mod.submenus.map(sub => {
                const isSubActive = isCurrentMod && (sub.id === this.activeSubmenuId);
                const defaultHash = sub.tabs[0]?.hash || `/#/${mod.id}/${sub.id}`;
                return `
                  <a 
                    href="${defaultHash}" 
                    class="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors group/sub ${isSubActive ? 'text-[#00A4B7] font-bold bg-white/5' : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'}"
                  >
                    <span class="truncate">${sub.title}</span>
                    <svg class="w-3.5 h-3.5 text-[#64748B] group-hover/sub:text-[#94A3B8] transform group-hover/sub:translate-x-0.5 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </a>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  renderSettingsModule() {
    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';
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
    const hierarchy = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;
    const settingsMod = hierarchy.find(m => m.id === 'settings');
    if (!settingsMod) return '';

    const isCurrentMod = settingsMod.id === this.activeModuleId;

    // Super Admin: Hover flyout card with Customizer
    if (isSuperAdmin && settingsMod.submenus && settingsMod.submenus.length > 0) {
      return `
        <div class="relative group flex justify-center nav-module-group w-full">
          <!-- Icon Button -->
          <button 
            data-module-id="settings" 
            class="sidebar-mod-btn w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${isCurrentMod ? 'bg-[#00A4B7] text-white ring-2 ring-[#00A4B7] font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
            title="Settings"
          >
            <span class="w-4 h-4 flex items-center justify-center ${isCurrentMod ? 'text-white' : ''}">${settingsMod.icon}</span>
          </button>

          <!-- Floating Flyout Menu on Hover -->
          <div class="absolute left-full bottom-0 ml-2.5 w-64 bg-[#1E2433] border border-[#2E384D] rounded-2xl p-3.5 shadow-2xl hidden group-hover:block z-50 transition-all pointer-events-auto">
            <!-- Invisible bridge -->
            <div class="absolute -left-3 top-0 bottom-0 w-3 pointer-events-auto"></div>

            <!-- Header -->
            <div class="flex items-center gap-2.5 pb-3 border-b border-[#2E384D]/80 mb-2">
              <div class="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 shadow-xs">
                ${settingsMod.icon}
              </div>
              <span class="font-bold text-white text-sm tracking-tight truncate">${settingsMod.title}</span>
            </div>

            <!-- Submenus List in Flyout -->
            <div class="space-y-1">
              ${settingsMod.submenus.map(sub => {
                const isSubActive = isCurrentMod && (sub.id === this.activeSubmenuId);
                const defaultHash = sub.tabs[0]?.hash || `/#/settings/${sub.id}`;
                return `
                  <a 
                    href="${defaultHash}" 
                    class="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors group/sub ${isSubActive ? 'text-[#00A4B7] font-bold bg-white/5' : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'}"
                  >
                    <span class="truncate">${sub.title}</span>
                    <svg class="w-3.5 h-3.5 text-[#64748B] group-hover/sub:text-[#94A3B8] transform group-hover/sub:translate-x-0.5 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </a>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    }

    // Admin role: Clean tooltip
    return `
      <div class="relative group flex justify-center nav-module-group w-full">
        <!-- Icon Button -->
        <button 
          data-module-id="settings" 
          class="sidebar-mod-btn w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${isCurrentMod ? 'bg-[#00A4B7] text-white ring-2 ring-[#00A4B7] font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
          title="Settings"
        >
          <span class="w-4 h-4 flex items-center justify-center ${isCurrentMod ? 'text-white' : ''}">${settingsMod.icon}</span>
        </button>
        <div class="absolute left-full bottom-0 ml-3 px-2 py-1 bg-[#0F172A] border border-[#1E293B] rounded-lg text-white font-bold text-xs whitespace-nowrap hidden group-hover:block z-50 pointer-events-none">
          Settings
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
            window.location.hash = '#/settings/setup/organization';
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

    const edgeToggleBtn = document.getElementById('sidebar-edge-toggle-btn');
    if (edgeToggleBtn) {
      edgeToggleBtn.onclick = (e) => {
        e.stopPropagation();
        this.toggleCollapse();
      };
    }
  }
};
