import { LOGO_COLOR, LOGO_WHITE, LOGO_CAMAROO_WHITE } from '../data/logos.js';
import { Modal } from './modal.js';
import { ERP_DATA } from '../data/mockData.js';

export const ADMIN_NAV_HIERARCHY = [
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
        defaultTab: "orders-list",
        tabs: [
          { id: "orders-list", label: "Orders", hash: "#/coldstore/orders/orders-list" }
        ]
      },
      {
        id: "store",
        title: "Store",
        defaultTab: "store-operations",
        tabs: [
          { id: "store-operations", label: "Store", hash: "#/coldstore/store/store-operations" }
        ]
      },
      {
        id: "stock-approvals",
        title: "Stock Approvals",
        defaultTab: "stock-approvals-list",
        tabs: [
          { id: "stock-approvals-list", label: "Stock Approvals", hash: "#/coldstore/stock-approvals/stock-approvals-list" }
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
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>`,
    submenus: [
      {
        id: "dashboard",
        title: "Dashboard",
        defaultTab: "overview",
        tabs: [
          { id: "overview", label: "Overview", hash: "#/inventory/dashboard/overview" }
        ]
      },
      {
        id: "requisitions",
        title: "Requisitions",
        defaultTab: "indents",
        tabs: [
          { id: "indents", label: "Indents", hash: "#/inventory/requisitions/indents" }
        ]
      },
      {
        id: "procurement",
        title: "Procurement",
        defaultTab: "proforma-invoices",
        tabs: [
          { id: "proforma-invoices", label: "Proforma Invoices", hash: "#/inventory/procurement/proforma-invoices" },
          { id: "purchase-orders", label: "Purchase Orders", hash: "#/inventory/procurement/purchase-orders" },
          { id: "proforma-register", label: "Proforma Register", hash: "#/inventory/procurement/proforma-register" }
        ]
      },
      {
        id: "store-operations",
        title: "Store Operations",
        defaultTab: "grn",
        tabs: [
          { id: "grn", label: "Goods Receipt (GRN)", hash: "#/inventory/store-operations/grn" },
          { id: "material-issues", label: "Material Issues", hash: "#/inventory/store-operations/material-issues" }
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
        id: "master-data",
        title: "Master Data",
        defaultTab: "product-catalog",
        tabs: [
          { id: "product-catalog", label: "Product Catalog", hash: "#/sales/master-data/product-catalog" },
          { id: "customers-parties", label: "Customers & Parties", hash: "#/sales/master-data/customers-parties" },
          { id: "brands", label: "Brands", hash: "#/sales/master-data/brands" }
        ]
      },
      {
        id: "contracts-pricing",
        title: "Contracts & Pricing",
        defaultTab: "price-book",
        tabs: [
          { id: "price-book", label: "Price Book", hash: "#/sales/contracts-pricing/price-book" },
          { id: "sales-contracts", label: "Sales Contracts", hash: "#/sales/contracts-pricing/sales-contracts" }
        ]
      },
      {
        id: "export-ops",
        title: "Export Operations & Logistics",
        defaultTab: "shipping-docs",
        tabs: [
          { id: "shipping-docs", label: "Shipping Documentation", hash: "#/sales/export-ops/shipping-docs" },
          { id: "compliance-clearing", label: "Compliance & Clearing", hash: "#/sales/export-ops/compliance-clearing" },
          { id: "shipments-tracking", label: "Shipments & Tracking", hash: "#/sales/export-ops/shipments-tracking" },
          { id: "cargo-insurance", label: "Cargo Insurance", hash: "#/sales/export-ops/cargo-insurance" }
        ]
      },
      {
        id: "export-finance",
        title: "Export Finance",
        defaultTab: "bank-negotiations",
        tabs: [
          { id: "bank-negotiations", label: "Bank Negotiations", hash: "#/sales/export-finance/bank-negotiations" },
          { id: "collections-realization", label: "Collections & Realization", hash: "#/sales/export-finance/collections-realization" },
          { id: "forward-contracts", label: "Forward Contracts", hash: "#/sales/export-finance/forward-contracts" }
        ]
      }
    ]
  },
  {
    id: "reports",
    title: "Reports",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
    submenus: [
      {
        id: "production-analytics",
        title: "Production Analytics",
        defaultTab: "yield-reports",
        tabs: [
          { id: "yield-reports", label: "Yield Reports", hash: "#/reports/production-analytics/yield-reports" },
          { id: "floor-summaries", label: "Floor Summaries", hash: "#/reports/production-analytics/floor-summaries" },
          { id: "ad-export-logs", label: "Anti-Dumping Export Logs", hash: "#/reports/production-analytics/ad-export-logs" }
        ]
      },
      {
        id: "coldstore-analytics",
        title: "Coldstore Analytics",
        defaultTab: "inventory-valuation",
        tabs: [
          { id: "inventory-valuation", label: "Inventory Valuation", hash: "#/reports/coldstore-analytics/inventory-valuation" },
          { id: "stock-summaries", label: "Stock Summaries", hash: "#/reports/coldstore-analytics/stock-summaries" },
          { id: "movement-logs", label: "Movement Logs", hash: "#/reports/coldstore-analytics/movement-logs" },
          { id: "operational-exceptions", label: "Operational Exceptions", hash: "#/reports/coldstore-analytics/operational-exceptions" }
        ]
      },
      {
        id: "sales-export-analytics",
        title: "Sales & Export Analytics",
        defaultTab: "compliance-regulatory",
        tabs: [
          { id: "compliance-regulatory", label: "Compliance & Regulatory", hash: "#/reports/sales-export-analytics/compliance-regulatory" },
          { id: "logistics-freight", label: "Logistics & Freight", hash: "#/reports/sales-export-analytics/logistics-freight" },
          { id: "financials", label: "Financials", hash: "#/reports/sales-export-analytics/financials" }
        ]
      }
    ]
  },
  {
    id: "help",
    title: "Help",
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    submenus: [
      {
        id: "documentation",
        title: "Documentation & SOPs",
        defaultTab: "compliance-manual",
        tabs: [
          { id: "compliance-manual", label: "Compliance & SOP Manual", hash: "#/help/documentation/compliance-manual" },
          { id: "user-guides", label: "Module User Guides", hash: "#/help/documentation/user-guides" },
          { id: "antibiotic-protocols", label: "Antibiotic & Testing Protocols", hash: "#/help/documentation/antibiotic-protocols" }
        ]
      },
      {
        id: "support-tickets",
        title: "Support & Helpdesk",
        defaultTab: "it-support",
        tabs: [
          { id: "it-support", label: "IT Helpdesk & Tickets", hash: "#/help/support-tickets/it-support" },
          { id: "system-status", label: "System Health & Status", hash: "#/help/support-tickets/system-status" },
          { id: "release-notes", label: "Release Notes & Changelog", hash: "#/help/support-tickets/release-notes" }
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
          { id: "menus", label: "Menus", hash: "#/general/configuration/menus" },
          { id: "audit-history", label: "Audit History", hash: "#/general/configuration/audit-history" }
        ]
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
          <aside id="erp-sidebar" class="bg-[#0F172A] text-[#94A3B8] w-full h-full flex flex-col transition-all duration-300 select-none border border-[#1E293B] rounded-2xl overflow-hidden">
            <!-- Collapsed Logo Icon Header -->
            <div class="h-14 px-2 py-2 flex items-center justify-center border-b border-[#1E293B] bg-[#0B0F19] shrink-0" title="${isSuperAdmin ? 'Camaroo ERP' : 'Devi Fisheries'}">
              ${isSuperAdmin ? `
                <div class="w-9 h-9 rounded-lg bg-[#0284C7] border border-[#38BDF8]/30 flex items-center justify-center font-black text-white text-xs">
                  CMR
                </div>
              ` : `
                <img src="${LOGO_WHITE}" alt="Devi Fisheries" class="h-8 w-8 object-contain shrink-0" />
              `}
            </div>

            <!-- Navigation Scrollable Icons Area -->
            <!-- Navigation Scrollable Icons Area -->
            <div class="flex-1 overflow-y-auto py-3 px-2 space-y-2 overflow-x-visible bg-[#0F172A]" id="sidebar-nav-groups">
              ${this.renderCollapsedNavHierarchy()}
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
          <aside id="erp-sidebar" class="bg-[#0F172A] text-[#94A3B8] w-full h-full flex flex-col transition-all duration-300 select-none border border-[#1E293B] rounded-2xl overflow-hidden">
            <!-- Logo Branding Header -->
            <div class="h-14 px-4 py-2 flex items-center justify-between border-b border-[#1E293B] bg-[#0B0F19] shrink-0">
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
            <div class="flex-1 overflow-y-auto py-3 px-3 space-y-1 bg-[#0F172A]" id="sidebar-nav-groups">
              ${this.renderNavHierarchy()}
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
    const modules = isSuperAdmin ? SUPER_ADMIN_NAV_HIERARCHY : ADMIN_NAV_HIERARCHY;

    return modules.map(mod => {
      const isExpanded = mod.id === this.activeModuleId;

      // Super Admin: Clean direct menu buttons without arrow and without sub tabs in menu
      if (isSuperAdmin) {
        return `
          <div class="nav-module-group mb-1">
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
          <div class="nav-submenus-list mt-1 ml-4 pl-3 py-1 space-y-1 border-l-2 border-[#00A4B7]">
            ${mod.submenus.map(sub => {
              const isSubActive = sub.id === this.activeSubmenuId;
              const defaultHash = sub.tabs[0]?.hash || `/#/${mod.id}/${sub.id}`;

              return `
                <div class="nav-submenu-block">
                  <a 
                    href="${defaultHash}" 
                    class="flex items-center px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all ${isSubActive ? 'bg-[#00A4B7] text-white font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
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
        <div class="nav-module-group mb-1">
          <button 
            data-module-id="${mod.id}" 
            class="sidebar-mod-btn w-full px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${isExpanded ? 'bg-[#00A4B7] text-white' : 'text-[#CBD5E1] hover:bg-white/5 hover:text-white'}"
          >
            <div class="flex items-center gap-2.5 truncate">
              <span class="w-4 h-4 flex items-center justify-center shrink-0 ${isExpanded ? 'text-white' : 'text-[#64748B]'}">${mod.icon}</span>
              <span class="text-xs tracking-tight truncate">${mod.title}</span>
            </div>
            <div class="flex items-center gap-1 shrink-0">
              <svg class="w-3.5 h-3.5 transform transition-transform duration-200 ${isExpanded ? 'rotate-90 text-white' : 'text-[#64748B]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
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
      const firstTabHash = mod.submenus[0]?.tabs[0]?.hash || '#/';

      if (isSuperAdmin) {
        return `
          <div class="relative group flex justify-center nav-module-group">
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

      return `
        <div class="relative group flex justify-center nav-module-group">
          <!-- Icon Button -->
          <button 
            data-module-id="${mod.id}" 
            class="sidebar-mod-btn w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${isCurrentMod ? 'bg-[#00A4B7] text-white ring-2 ring-[#00A4B7] font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
            title="${mod.title}"
          >
            <span class="w-4 h-4 flex items-center justify-center ${isCurrentMod ? 'text-white' : ''}">${mod.icon}</span>
          </button>

          <!-- Floating Flyout Menu on Hover -->
          <div class="absolute left-full top-0 ml-3 w-60 bg-[#0F172A] border border-[#1E293B] rounded-xl p-2.5 hidden group-hover:block z-50 transition-all pointer-events-auto">
            <!-- Module Title in Flyout -->
            <div class="flex items-center gap-2 px-2.5 py-1.5 border-b border-[#1E293B] mb-1.5 text-white font-bold text-xs">
              <span class="text-[#00A4B7]">${mod.icon}</span>
              <span class="tracking-wide">${mod.title}</span>
            </div>

            <!-- Submenus List in Flyout -->
            <div class="space-y-1">
              ${mod.submenus.map(sub => {
                const isSubActive = isCurrentMod && (sub.id === this.activeSubmenuId);
                const defaultHash = sub.tabs[0]?.hash || `/#/${mod.id}/${sub.id}`;
                return `
                  <a 
                    href="${defaultHash}" 
                    class="flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${isSubActive ? 'bg-[#00A4B7] text-white font-bold' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'}"
                  >
                    <span>${sub.title}</span>
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

        // Super Admin: Direct single-click navigation (no accordion, no sub tabs)
        if (isSuperAdmin) {
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
