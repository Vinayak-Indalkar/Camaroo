// Setup Module Views - Client & Master Setup for Fisheries ERP
// Configurable Multi-Company & Master Data Studio for Seafood Processing, Quality, Production, and Coldstore ERP.

import { TabBar } from '../components/tabBar.js';
import { Toast } from '../components/toast.js';
import { Modal } from '../components/modal.js';
import { DataTable } from '../components/table.js';
import { Skeleton } from '../components/skeleton.js';

const STUDIO_STORAGE_KEY = 'dfl_erp_master_studio_state_v3';

const DEFAULT_MODULES_CONFIG = [
  {
    "id": "dashboard",
    "key": "dashboard",
    "label": "DASHBOARD",
    "order": 1,
    "visible": true,
    "isProtected": true,
    "isDefault": true,
    "submenusCount": 7,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/dashboard/dashboard/dashboard"
  },
  {
    "id": "master",
    "key": "master",
    "label": "MASTER",
    "order": 2,
    "visible": true,
    "isProtected": true,
    "isDefault": true,
    "submenusCount": 46,
    "roles": [
      "System Administrator"
    ],
    "route": "#/master/exporter/add-exporter"
  },
  {
    "id": "buyers",
    "key": "buyers",
    "label": "BUYERS",
    "order": 3,
    "visible": true,
    "submenusCount": 5,
    "roles": [
      "System Administrator",
      "Sales & Exports Manager"
    ],
    "route": "#/buyers/buyer-list/add-buyer-details"
  },
  {
    "id": "orders",
    "key": "orders",
    "label": "ORDERS",
    "order": 4,
    "visible": true,
    "submenusCount": 11,
    "roles": [
      "System Administrator",
      "Sales & Exports Manager"
    ],
    "route": "#/orders/proforma-list/pi-generation"
  },
  {
    "id": "payments",
    "key": "payments",
    "label": "PAYMENTS",
    "order": 5,
    "visible": true,
    "submenusCount": 5,
    "roles": [
      "System Administrator",
      "Sales & Exports Manager"
    ],
    "route": "#/payments/forward-contracts/add-forward-contract"
  },
  {
    "id": "insurance",
    "key": "insurance",
    "label": "INSURANCE",
    "order": 6,
    "visible": true,
    "submenusCount": 3,
    "roles": [
      "System Administrator",
      "Sales & Exports Manager"
    ],
    "route": "#/insurance/pending-insurance/pending-insurance"
  },
  {
    "id": "reports",
    "key": "reports",
    "label": "REPORTS",
    "order": 7,
    "visible": true,
    "isProtected": true,
    "isDefault": true,
    "submenusCount": 35,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/reports/pending-contracts/pending-contracts"
  },
  {
    "id": "purchase",
    "key": "purchase",
    "label": "PURCHASE",
    "order": 8,
    "visible": true,
    "submenusCount": 6,
    "roles": [
      "System Administrator",
      "Procurement Officer"
    ],
    "route": "#/purchase/bookings/create-booking"
  },
  {
    "id": "tickets",
    "key": "tickets",
    "label": "TICKETS",
    "order": 9,
    "visible": true,
    "submenusCount": 1,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/tickets/tickets/tickets"
  },
  {
    "id": "help",
    "key": "help",
    "label": "HELP",
    "order": 10,
    "visible": true,
    "isProtected": true,
    "isDefault": true,
    "submenusCount": 1,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/help/help-line/help-line"
  },
  {
    "id": "stock",
    "key": "stock",
    "label": "STOCK",
    "order": 11,
    "visible": true,
    "submenusCount": 2,
    "roles": [
      "System Administrator",
      "Coldstore Keeper"
    ],
    "route": "#/stock/stock-in/stock-in"
  },
  {
    "id": "store",
    "key": "store",
    "label": "STORE",
    "order": 12,
    "visible": true,
    "submenusCount": 3,
    "roles": [
      "System Administrator",
      "Coldstore Keeper"
    ],
    "route": "#/store/view-store/view-store"
  },
  {
    "id": "shipments",
    "key": "shipments",
    "label": "SHIPMENTS",
    "order": 13,
    "visible": true,
    "submenusCount": 1,
    "roles": [
      "System Administrator",
      "Sales & Exports Manager"
    ],
    "route": "#/shipments/shipment-out/shipment-out"
  },
  {
    "id": "quality-control",
    "key": "quality-control",
    "label": "QUALITY CONTROL",
    "order": 14,
    "visible": true,
    "submenusCount": 2,
    "roles": [
      "System Administrator",
      "Quality Lab Inspector"
    ],
    "route": "#/quality-control/documentation/doc-add-reports"
  },
  {
    "id": "production",
    "key": "production",
    "label": "PRODUCTION",
    "order": 15,
    "visible": true,
    "submenusCount": 6,
    "roles": [
      "System Administrator",
      "Production Floor Manager"
    ],
    "route": "#/production/soaking-v2/soaking-v2"
  },
  {
    "id": "store-reports",
    "key": "store-reports",
    "label": "STORE REPORTS",
    "order": 16,
    "visible": true,
    "submenusCount": 21,
    "roles": [
      "System Administrator",
      "Coldstore Keeper"
    ],
    "route": "#/store-reports/rack-wise-stock-report/rack-wise-stock-report"
  },
  {
    "id": "sales",
    "key": "sales",
    "label": "SALES",
    "order": 17,
    "visible": true,
    "submenusCount": 1,
    "roles": [
      "System Administrator",
      "Sales & Exports Manager"
    ],
    "route": "#/sales/delayed-shipments/delayed-shipments"
  },
  {
    "id": "pre-processing",
    "key": "pre-processing",
    "label": "PRE PROCESSING",
    "order": 18,
    "visible": true,
    "submenusCount": 10,
    "roles": [
      "System Administrator",
      "Production Floor Manager"
    ],
    "route": "#/pre-processing/deheading/deheading"
  },
  {
    "id": "lab",
    "key": "lab",
    "label": "LAB",
    "order": 19,
    "visible": true,
    "submenusCount": 6,
    "roles": [
      "System Administrator",
      "Quality Lab Inspector"
    ],
    "route": "#/lab/lots-list/lots-list"
  },
  {
    "id": "qc-reports",
    "key": "qc-reports",
    "label": "QC REPORTS",
    "order": 20,
    "visible": true,
    "submenusCount": 11,
    "roles": [
      "System Administrator",
      "Quality Lab Inspector"
    ],
    "route": "#/qc-reports/food-audit-report/food-audit-report"
  },
  {
    "id": "product",
    "key": "product",
    "label": "PRODUCT",
    "order": 21,
    "visible": true,
    "submenusCount": 6,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/product/product-list/add-product"
  },
  {
    "id": "development",
    "key": "development",
    "label": "DEVELOPMENT",
    "order": 22,
    "visible": true,
    "submenusCount": 5,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/development/production-standard-yields/production-standard-yields"
  },
  {
    "id": "general-store",
    "key": "general-store",
    "label": "GENERAL STORE",
    "order": 23,
    "visible": true,
    "submenusCount": 7,
    "roles": [
      "System Administrator",
      "Coldstore Keeper"
    ],
    "route": "#/general-store/material-issue-gs/material-issue-gs"
  },
  {
    "id": "cs-master",
    "key": "cs-master",
    "label": "CS MASTER",
    "order": 24,
    "visible": true,
    "submenusCount": 8,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/cs-master/general-options-list/cs-general-options-list"
  },
  {
    "id": "qc-audit",
    "key": "qc-audit",
    "label": "QC AUDIT",
    "order": 25,
    "visible": true,
    "submenusCount": 5,
    "roles": [
      "System Administrator",
      "Quality Lab Inspector"
    ],
    "route": "#/qc-audit/feed-mill-audit-list/feed-mill-audit-list"
  },
  {
    "id": "ibt",
    "key": "ibt",
    "label": "IBT",
    "order": 26,
    "visible": true,
    "submenusCount": 1,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/ibt/cs-ibt-request-list/cs-ibt-breakup-data"
  },
  {
    "id": "stock-approvals",
    "key": "stock-approvals",
    "label": "STOCK APPROVALS",
    "order": 27,
    "visible": true,
    "submenusCount": 2,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/stock-approvals/admin-daily-production-list/admin-daily-production-list"
  },
  {
    "id": "chemical-screens",
    "key": "chemical-screens",
    "label": "CHEMICAL SCREENS",
    "order": 28,
    "visible": true,
    "submenusCount": 10,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/chemical-screens/chemical-payments-list/chemical-payments-list"
  },
  {
    "id": "production-reports",
    "key": "production-reports",
    "label": "PRODUCTION REPORTS",
    "order": 29,
    "visible": true,
    "submenusCount": 19,
    "roles": [
      "System Administrator",
      "Production Floor Manager"
    ],
    "route": "#/production-reports/reconciliation-report/reconciliation-report"
  },
  {
    "id": "qc-dashboard",
    "key": "qc-dashboard",
    "label": "QC DASHBOARD",
    "order": 30,
    "visible": true,
    "submenusCount": 1,
    "roles": [
      "System Administrator",
      "Quality Lab Inspector"
    ],
    "route": "#/qc-dashboard/qc-dashboard-new/qc-dashboard-new"
  },
  {
    "id": "anti-dumping",
    "key": "anti-dumping",
    "label": "ANTI DUMPING",
    "order": 31,
    "visible": true,
    "submenusCount": 6,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/anti-dumping/anti-dumping-entry-form/anti-dumping-entry-form"
  },
  {
    "id": "inventory",
    "key": "inventory",
    "label": "INVENTORY",
    "order": 32,
    "visible": true,
    "submenusCount": 2,
    "roles": [
      "System Administrator",
      "Coldstore Keeper"
    ],
    "route": "#/inventory/proforma-register-create-gs/proforma-register-create-gs"
  },
  {
    "id": "packing-material",
    "key": "packing-material",
    "label": "PACKING MATERIAL",
    "order": 33,
    "visible": true,
    "submenusCount": 6,
    "roles": [
      "System Administrator",
      "Procurement Officer",
      "Quality Lab Inspector",
      "Production Floor Manager",
      "Coldstore Keeper",
      "Sales & Exports Manager"
    ],
    "route": "#/packing-material/material-issue-pm/material-issue-pm"
  }
];
const DEFAULT_SUBMENUS_CONFIG = {
  "dashboard": [
    {
      "id": "dashboard",
      "title": "Dashboard",
      "tabs": [
        {
          "id": "dashboard",
          "label": "Dashboard",
          "route": "#/dashboard/dashboard/dashboard",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "purchase-dashboard",
      "title": "Purchase Dashboard",
      "tabs": [
        {
          "id": "purchase-dashboard",
          "label": "Purchase Dashboard",
          "route": "#/dashboard/purchase-dashboard/purchase-dashboard",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "rm-dashboard",
      "title": "RM Dashboard",
      "tabs": [
        {
          "id": "rm-dashboard",
          "label": "RM Dashboard",
          "route": "#/dashboard/rm-dashboard/rm-dashboard",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "production-dashboard",
      "title": "Production Dashboard",
      "tabs": [
        {
          "id": "production-dashboard",
          "label": "Production Dashboard",
          "route": "#/dashboard/production-dashboard/production-dashboard",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "coldstore-dashboard",
      "title": "Coldstore Dashboard",
      "tabs": [
        {
          "id": "coldstore-dashboard",
          "label": "Coldstore Dashboard",
          "route": "#/dashboard/coldstore-dashboard/coldstore-dashboard",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "quality-control-dashboard",
      "title": "Quality Control Dashboard",
      "tabs": [
        {
          "id": "quality-control-dashboard",
          "label": "Quality Control Dashboard",
          "route": "#/dashboard/quality-control-dashboard/quality-control-dashboard",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "cs-dashboard-new",
      "title": "CS Dashboard New",
      "tabs": [
        {
          "id": "cs-dashboard-new",
          "label": "CS Dashboard New",
          "route": "#/dashboard/cs-dashboard-new/cs-dashboard-new",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "master": [
    {
      "id": "exporter",
      "title": "Exporter",
      "tabs": [
        {
          "id": "add-exporter",
          "label": "Add Exporter",
          "route": "#/master/exporter/add-exporter",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "processor",
      "title": "Processor",
      "tabs": [
        {
          "id": "add-processor",
          "label": "Add Processor",
          "route": "#/master/processor/add-processor",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "payment-terms",
      "title": "Payment Terms",
      "tabs": [
        {
          "id": "add-payment-terms",
          "label": "Add Payment Terms",
          "route": "#/master/payment-terms/add-payment-terms",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "cha",
      "title": "CHA",
      "tabs": [
        {
          "id": "add-logistics",
          "label": "Add Logistics",
          "route": "#/master/cha/add-logistics",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "liners-list",
      "title": "Liners List",
      "tabs": [
        {
          "id": "add-liner",
          "label": "Add Liner",
          "route": "#/master/liners-list/add-liner",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "description-list",
      "title": "Description List",
      "tabs": [
        {
          "id": "add-description",
          "label": "Add Description",
          "route": "#/master/description-list/add-description",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "ports-list",
      "title": "Ports List",
      "tabs": [
        {
          "id": "add-port",
          "label": "Add Port",
          "route": "#/master/ports-list/add-port",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "exchange-rates",
      "title": "Exchange Rates",
      "tabs": [
        {
          "id": "add-exchange-rate",
          "label": "Add Exchange Rate",
          "route": "#/master/exchange-rates/add-exchange-rate",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "banks-list",
      "title": "Banks List",
      "tabs": [
        {
          "id": "add-bank",
          "label": "Add Bank",
          "route": "#/master/banks-list/add-bank",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "store-delivery-details-list",
      "title": "Store Delivery Details List",
      "tabs": [
        {
          "id": "add-store-delivery-details",
          "label": "Add Store Delivery Details",
          "route": "#/master/store-delivery-details-list/add-store-delivery-details",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "graders-list",
      "title": "Graders List",
      "tabs": [
        {
          "id": "create-details",
          "label": "Create Details",
          "route": "#/master/graders-list/create-details",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "agents-list",
      "title": "Agents List",
      "tabs": [
        {
          "id": "create-agent",
          "label": "Create Agent",
          "route": "#/master/agents-list/create-agent",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "financiers-list",
      "title": "Financiers List",
      "tabs": [
        {
          "id": "create-financier",
          "label": "Create Financier",
          "route": "#/master/financiers-list/create-financier",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "drivers-list",
      "title": "Drivers List",
      "tabs": [
        {
          "id": "create-details",
          "label": "Create Details",
          "route": "#/master/drivers-list/create-details",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "vehicle-list",
      "title": "Vehicle List",
      "tabs": [
        {
          "id": "add-vehicle",
          "label": "Add Vehicle",
          "route": "#/master/vehicle-list/add-vehicle",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "yields",
      "title": "Yields",
      "tabs": [
        {
          "id": "yields",
          "label": "Yields",
          "route": "#/master/yields/yields",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "supervisor",
      "title": "Supervisor",
      "tabs": [
        {
          "id": "create-details",
          "label": "Create Details",
          "route": "#/master/supervisor/create-details",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "traceability",
      "title": "Traceability",
      "tabs": [
        {
          "id": "traceability",
          "label": "Traceability",
          "route": "#/master/traceability/traceability",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "lab-users-list",
      "title": "Lab Users List",
      "tabs": [
        {
          "id": "doc-add-lab-user-names",
          "label": "Doc Add Lab User Names",
          "route": "#/master/lab-users-list/doc-add-lab-user-names",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "hl-va-variety-list",
      "title": "HL VA Variety List",
      "tabs": [
        {
          "id": "create-hlva-variety",
          "label": "Create HLVA Variety",
          "route": "#/master/hl-va-variety-list/create-hlva-variety",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "countrywise-address-list",
      "title": "Countrywise Address List",
      "tabs": [
        {
          "id": "create-countrywise-addresses",
          "label": "Create Countrywise Addresses",
          "route": "#/master/countrywise-address-list/create-countrywise-addresses",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "lab-analysis-list",
      "title": "Lab Analysis List",
      "tabs": [
        {
          "id": "analysis-required-create",
          "label": "Analysis Required Create",
          "route": "#/master/lab-analysis-list/analysis-required-create",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "external-lab-names",
      "title": "External Lab Names",
      "tabs": [
        {
          "id": "quality-control-lab-names-create",
          "label": "Quality Control Lab Names Create",
          "route": "#/master/external-lab-names/quality-control-lab-names-create",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "lab-names-create",
          "label": "Lab Names Create",
          "route": "#/master/external-lab-names/lab-names-create",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "tax-charges",
      "title": "Tax Charges",
      "tabs": [
        {
          "id": "create-tax-charges",
          "label": "Create Tax Charges",
          "route": "#/master/tax-charges/create-tax-charges",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "currency",
      "title": "Currency",
      "tabs": [
        {
          "id": "currency",
          "label": "Currency",
          "route": "#/master/currency/currency",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "vm-rates-2",
      "title": "VM Rates 2",
      "tabs": [
        {
          "id": "add-purchase-rates-m1",
          "label": "Add Purchase Rates M1",
          "route": "#/master/vm-rates-2/add-purchase-rates-m1",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "master-counts",
      "title": "Master Counts",
      "tabs": [
        {
          "id": "master-add-counts",
          "label": "Master Add Counts",
          "route": "#/master/master-counts/master-add-counts",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "chemicals-buyers-list",
      "title": "Chemicals Buyers List",
      "tabs": [
        {
          "id": "chemicals-buyers-list",
          "label": "Chemicals Buyers List",
          "route": "#/master/chemicals-buyers-list/chemicals-buyers-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "chemicals-master",
      "title": "Chemicals Master",
      "tabs": [
        {
          "id": "chemicals-master",
          "label": "Chemicals Master",
          "route": "#/master/chemicals-master/chemicals-master",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "chemicals-suppliers-list",
      "title": "Chemicals Suppliers List",
      "tabs": [
        {
          "id": "chemicals-suppliers-list",
          "label": "Chemicals Suppliers List",
          "route": "#/master/chemicals-suppliers-list/chemicals-suppliers-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "audit-categories-options-list",
      "title": "Audit Categories Options List",
      "tabs": [
        {
          "id": "audit-categories-option-create",
          "label": "Audit Categories Option Create",
          "route": "#/master/audit-categories-options-list/audit-categories-option-create",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "audit-categories-list",
      "title": "Audit Categories List",
      "tabs": [
        {
          "id": "audit-categories-list",
          "label": "Audit Categories List",
          "route": "#/master/audit-categories-list/audit-categories-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "farms-list",
      "title": "Farms List",
      "tabs": [
        {
          "id": "farm-master-create",
          "label": "Farm Master Create",
          "route": "#/master/farms-list/farm-master-create",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "certification-body-list",
      "title": "Certification Body List",
      "tabs": [
        {
          "id": "certification-body-master-create",
          "label": "Certification Body Master Create",
          "route": "#/master/certification-body-list/certification-body-master-create",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "audit-dropdown-master",
      "title": "Audit Dropdown Master",
      "tabs": [
        {
          "id": "audit-dropdowns-master-create",
          "label": "Audit Dropdowns Master Create",
          "route": "#/master/audit-dropdown-master/audit-dropdowns-master-create",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "hatchery-list",
      "title": "Hatchery List",
      "tabs": [
        {
          "id": "hatchery-master-create",
          "label": "Hatchery Master Create",
          "route": "#/master/hatchery-list/hatchery-master-create",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "freight-rates",
      "title": "Freight Rates",
      "tabs": [
        {
          "id": "add-freight-rates-new",
          "label": "Add Freight Rates New",
          "route": "#/master/freight-rates/add-freight-rates-new",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "liners-contracts",
      "title": "Liners Contracts",
      "tabs": [
        {
          "id": "liners-contracts",
          "label": "Liners Contracts",
          "route": "#/master/liners-contracts/liners-contracts",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "reciprocal-tariffs",
      "title": "Reciprocal Tariffs",
      "tabs": [
        {
          "id": "reciprocal-tariffs",
          "label": "Reciprocal Tariffs",
          "route": "#/master/reciprocal-tariffs/reciprocal-tariffs",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "gst-master",
      "title": "GST Master",
      "tabs": [
        {
          "id": "gst-master",
          "label": "GST Master",
          "route": "#/master/gst-master/gst-master",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "prices-master",
      "title": "Prices Master",
      "tabs": [
        {
          "id": "prices-master",
          "label": "Prices Master",
          "route": "#/master/prices-master/prices-master",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "departments-master",
      "title": "Departments Master",
      "tabs": [
        {
          "id": "departments-master",
          "label": "Departments Master",
          "route": "#/master/departments-master/departments-master",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "brands-master",
      "title": "Brands Master",
      "tabs": [
        {
          "id": "brands-master",
          "label": "Brands Master",
          "route": "#/master/brands-master/brands-master",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "vendors-master",
      "title": "Vendors Master",
      "tabs": [
        {
          "id": "vendors-master",
          "label": "Vendors Master",
          "route": "#/master/vendors-master/vendors-master",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "general-items",
      "title": "General Items",
      "tabs": [
        {
          "id": "general-items",
          "label": "General Items",
          "route": "#/master/general-items/general-items",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "po-tax-rates",
      "title": "PO Tax Rates",
      "tabs": [
        {
          "id": "po-tax-rates",
          "label": "PO Tax Rates",
          "route": "#/master/po-tax-rates/po-tax-rates",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "buyers": [
    {
      "id": "buyer-list",
      "title": "Buyer List",
      "tabs": [
        {
          "id": "add-buyer-details",
          "label": "Add Buyer Details",
          "route": "#/buyers/buyer-list/add-buyer-details",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "consignee-list",
      "title": "Consignee List",
      "tabs": [
        {
          "id": "add-consignee-details",
          "label": "Add Consignee Details",
          "route": "#/buyers/consignee-list/add-consignee-details",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "notify-party-list",
      "title": "Notify Party List",
      "tabs": [
        {
          "id": "add-notify-party-details",
          "label": "Add Notify Party Details",
          "route": "#/buyers/notify-party-list/add-notify-party-details",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "applicant-list",
      "title": "Applicant List",
      "tabs": [
        {
          "id": "create-applicant",
          "label": "Create Applicant",
          "route": "#/buyers/applicant-list/create-applicant",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "brands-list",
      "title": "Brands List",
      "tabs": [
        {
          "id": "add-brand",
          "label": "Add Brand",
          "route": "#/buyers/brands-list/add-brand",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    }
  ],
  "orders": [
    {
      "id": "proforma-list",
      "title": "Proforma List",
      "tabs": [
        {
          "id": "pi-generation",
          "label": "PI Generation",
          "route": "#/orders/proforma-list/pi-generation",
          "type": "system",
          "badge": ""
        },
        {
          "id": "po-edit",
          "label": "PO Edit",
          "route": "#/orders/proforma-list/po-edit",
          "type": "system",
          "badge": ""
        },
        {
          "id": "proforma-inv",
          "label": "Proforma Inv",
          "route": "#/orders/proforma-list/proforma-inv",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "doc-proforma-invoice-print",
          "label": "Doc Proforma Invoice Print",
          "route": "#/orders/proforma-list/doc-proforma-invoice-print",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "po-breakup",
          "label": "PO Breakup",
          "route": "#/orders/proforma-list/po-breakup",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "custom-invoices",
      "title": "Custom Invoices",
      "tabs": [
        {
          "id": "add-custom-invoice",
          "label": "Add Custom Invoice",
          "route": "#/orders/custom-invoices/add-custom-invoice",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "custom-invoice",
          "label": "Custom Invoice",
          "route": "#/orders/custom-invoices/custom-invoice",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "isf-details",
      "title": "ISF Details",
      "tabs": [
        {
          "id": "add-isf-form",
          "label": "Add ISF Form",
          "route": "#/orders/isf-details/add-isf-form",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "eta-status",
      "title": "ETA Status",
      "tabs": [
        {
          "id": "eta-status",
          "label": "ETA Status",
          "route": "#/orders/eta-status/eta-status",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "fda-status",
      "title": "FDA Status",
      "tabs": [
        {
          "id": "add-fda-details",
          "label": "Add FDA Details",
          "route": "#/orders/fda-status/add-fda-details",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "clearing-agent",
      "title": "Clearing Agent",
      "tabs": [
        {
          "id": "clearing-agent-form",
          "label": "Clearing Agent Form",
          "route": "#/orders/clearing-agent/clearing-agent-form",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "shipping-bill",
      "title": "Shipping Bill",
      "tabs": [
        {
          "id": "shipping-bill-form",
          "label": "Shipping Bill Form",
          "route": "#/orders/shipping-bill/shipping-bill-form",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "commercial-invoice",
      "title": "Commercial Invoice",
      "tabs": [
        {
          "id": "add-commercial-invoice",
          "label": "Add Commercial Invoice",
          "route": "#/orders/commercial-invoice/add-commercial-invoice",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "doc-add-reports",
          "label": "Doc Add Reports",
          "route": "#/orders/commercial-invoice/doc-add-reports",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "running-orders",
      "title": "Running Orders",
      "tabs": [
        {
          "id": "create-shipment-status",
          "label": "Create Shipment Status",
          "route": "#/orders/running-orders/create-shipment-status",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "orders-status",
      "title": "Orders Status",
      "tabs": [
        {
          "id": "orders-status",
          "label": "Orders Status",
          "route": "#/orders/orders-status/orders-status",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "shipments-list",
      "title": "Shipments List",
      "tabs": [
        {
          "id": "shipments-list",
          "label": "Shipments List",
          "route": "#/orders/shipments-list/shipments-list",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "payments": [
    {
      "id": "forward-contracts",
      "title": "Forward Contracts",
      "tabs": [
        {
          "id": "add-forward-contract",
          "label": "Add Forward Contract",
          "route": "#/payments/forward-contracts/add-forward-contract",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "collections",
      "title": "Collections",
      "tabs": [
        {
          "id": "add-collection",
          "label": "Add Collection",
          "route": "#/payments/collections/add-collection",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "negotiations",
      "title": "Negotiations",
      "tabs": [
        {
          "id": "add-bill-of-exchange",
          "label": "Add Bill Of Exchange",
          "route": "#/payments/negotiations/add-bill-of-exchange",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "add-collection",
          "label": "Add Collection",
          "route": "#/payments/negotiations/add-collection",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "realization",
      "title": "Realization",
      "tabs": [
        {
          "id": "realization-form",
          "label": "Realization Form",
          "route": "#/payments/realization/realization-form",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "realization-done",
      "title": "Realization Done",
      "tabs": [
        {
          "id": "realization-done",
          "label": "Realization Done",
          "route": "#/payments/realization-done/realization-done",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "insurance": [
    {
      "id": "pending-insurance",
      "title": "Pending Insurance",
      "tabs": [
        {
          "id": "pending-insurance",
          "label": "Pending Insurance",
          "route": "#/insurance/pending-insurance/pending-insurance",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "insurance-templates",
      "title": "Insurance Templates",
      "tabs": [
        {
          "id": "insurance-templates",
          "label": "Insurance Templates",
          "route": "#/insurance/insurance-templates/insurance-templates",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "insurance-payments",
      "title": "Insurance Payments",
      "tabs": [
        {
          "id": "insurance-payments",
          "label": "Insurance Payments",
          "route": "#/insurance/insurance-payments/insurance-payments",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "reports": [
    {
      "id": "pending-contracts",
      "title": "Pending Contracts",
      "tabs": [
        {
          "id": "pending-contracts",
          "label": "Pending Contracts",
          "route": "#/reports/pending-contracts/pending-contracts",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "approved-contracts",
      "title": "Approved Contracts",
      "tabs": [
        {
          "id": "approved-contracts",
          "label": "Approved Contracts",
          "route": "#/reports/approved-contracts/approved-contracts",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "out-of-etd-eta-report",
      "title": "Out Of ETD/ETA Report",
      "tabs": [
        {
          "id": "out-of-etd-eta-report",
          "label": "Out Of ETD/ETA Report",
          "route": "#/reports/out-of-etd-eta-report/out-of-etd-eta-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "fda-examination-report",
      "title": "FDA Examination Report",
      "tabs": [
        {
          "id": "fda-examination-report",
          "label": "FDA Examination Report",
          "route": "#/reports/fda-examination-report/fda-examination-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "mpeda-report",
      "title": "MPEDA Report",
      "tabs": [
        {
          "id": "mpeda-report",
          "label": "MPEDA Report",
          "route": "#/reports/mpeda-report/mpeda-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "shipment-report",
      "title": "Shipment Report",
      "tabs": [
        {
          "id": "shipment-report",
          "label": "Shipment Report",
          "route": "#/reports/shipment-report/shipment-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "lab-report",
      "title": "Lab Report",
      "tabs": [
        {
          "id": "lab-report",
          "label": "Lab Report",
          "route": "#/reports/lab-report/lab-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "q-certificate-report",
      "title": "Q Certificate Report",
      "tabs": [
        {
          "id": "q-certificate-report",
          "label": "Q Certificate Report",
          "route": "#/reports/q-certificate-report/q-certificate-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "pending-payments",
      "title": "Pending Payments",
      "tabs": [
        {
          "id": "pending-payments",
          "label": "Pending Payments",
          "route": "#/reports/pending-payments/pending-payments",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "pending-negotiation-report",
      "title": "Pending Negotiation Report",
      "tabs": [
        {
          "id": "pending-negotiation-report",
          "label": "Pending Negotiation Report",
          "route": "#/reports/pending-negotiation-report/pending-negotiation-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "bills-realization",
      "title": "Bills Realization",
      "tabs": [
        {
          "id": "bills-realization",
          "label": "Bills Realization",
          "route": "#/reports/bills-realization/bills-realization",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "fc-utilized-report",
      "title": "FC Utilized Report",
      "tabs": [
        {
          "id": "fc-utilized-report",
          "label": "FC Utilized Report",
          "route": "#/reports/fc-utilized-report/fc-utilized-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "gst-sales-report",
      "title": "GST Sales Report",
      "tabs": [
        {
          "id": "gst-sales-report",
          "label": "GST Sales Report",
          "route": "#/reports/gst-sales-report/gst-sales-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "clearing-agent-report",
      "title": "Clearing Agent Report",
      "tabs": [
        {
          "id": "clearing-agent-report",
          "label": "Clearing Agent Report",
          "route": "#/reports/clearing-agent-report/clearing-agent-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "m-transit-ins-payments",
      "title": "M Transit Ins & Payments",
      "tabs": [
        {
          "id": "m-transit-ins-payments",
          "label": "M Transit Ins & Payments",
          "route": "#/reports/m-transit-ins-payments/m-transit-ins-payments",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "packing-report",
      "title": "Packing Report",
      "tabs": [
        {
          "id": "packing-report",
          "label": "Packing Report",
          "route": "#/reports/packing-report/packing-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "shipment-line-item-wise-report",
      "title": "Shipment Line Item Wise Report",
      "tabs": [
        {
          "id": "shipment-line-item-wise-report",
          "label": "Shipment Line Item Wise Report",
          "route": "#/reports/shipment-line-item-wise-report/shipment-line-item-wise-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "purchase-report",
      "title": "Purchase Report",
      "tabs": [
        {
          "id": "purchase-report",
          "label": "Purchase Report",
          "route": "#/reports/purchase-report/purchase-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "purchase-count-wise",
      "title": "Purchase Count Wise",
      "tabs": [
        {
          "id": "purchase-count-wise",
          "label": "Purchase Count Wise",
          "route": "#/reports/purchase-count-wise/purchase-count-wise",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "center-wise-report",
      "title": "Center Wise Report",
      "tabs": [
        {
          "id": "center-wise-report",
          "label": "Center Wise Report",
          "route": "#/reports/center-wise-report/center-wise-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "supplier-bill-summary",
      "title": "Supplier Bill Summary",
      "tabs": [
        {
          "id": "supplier-bill-summary",
          "label": "Supplier Bill Summary",
          "route": "#/reports/supplier-bill-summary/supplier-bill-summary",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "center-wise-abstract-report",
      "title": "Center Wise Abstract Report",
      "tabs": [
        {
          "id": "center-wise-abstract-report",
          "label": "Center Wise Abstract Report",
          "route": "#/reports/center-wise-abstract-report/center-wise-abstract-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "date-wise-abstract-report",
      "title": "Date Wise Abstract Report",
      "tabs": [
        {
          "id": "date-wise-abstract-report",
          "label": "Date Wise Abstract Report",
          "route": "#/reports/date-wise-abstract-report/date-wise-abstract-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "supplier-wise-outstanding-report",
      "title": "Supplier Wise Outstanding Report",
      "tabs": [
        {
          "id": "supplier-wise-outstanding-report",
          "label": "Supplier Wise Outstanding Report",
          "route": "#/reports/supplier-wise-outstanding-report/supplier-wise-outstanding-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "monthly-abstract-report",
      "title": "Monthly Abstract Report",
      "tabs": [
        {
          "id": "monthly-abstract-report",
          "label": "Monthly Abstract Report",
          "route": "#/reports/monthly-abstract-report/monthly-abstract-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "bill-date-wise-payment-summary",
      "title": "Bill & Date Wise Payment Summary",
      "tabs": [
        {
          "id": "bill-date-wise-payment-summary",
          "label": "Bill & Date Wise Payment Summary",
          "route": "#/reports/bill-date-wise-payment-summary/bill-date-wise-payment-summary",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "supplier-wise-abstract-report",
      "title": "Supplier Wise Abstract Report",
      "tabs": [
        {
          "id": "supplier-wise-abstract-report",
          "label": "Supplier Wise Abstract Report",
          "route": "#/reports/supplier-wise-abstract-report/supplier-wise-abstract-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "supplier-bill-wise-outstanding-amount",
      "title": "Supplier & Bill Wise Outstanding Amount",
      "tabs": [
        {
          "id": "supplier-bill-wise-outstanding-amount",
          "label": "Supplier & Bill Wise Outstanding Amount",
          "route": "#/reports/supplier-bill-wise-outstanding-amount/supplier-bill-wise-outstanding-amount",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "supplier-wise-ledger",
      "title": "Supplier Wise Ledger",
      "tabs": [
        {
          "id": "supplier-wise-ledger-report",
          "label": "Supplier Wise Ledger Report",
          "route": "#/reports/supplier-wise-ledger/supplier-wise-ledger-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "company-wise-tds-report",
      "title": "Company Wise TDS Report",
      "tabs": [
        {
          "id": "company-wise-tds-report",
          "label": "Company Wise TDS Report",
          "route": "#/reports/company-wise-tds-report/company-wise-tds-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "arrival-report",
      "title": "Arrival Report",
      "tabs": [
        {
          "id": "doc-excel-rm-overall-arrival-report",
          "label": "Doc Excel RM Overall Arrival Report",
          "route": "#/reports/arrival-report/doc-excel-rm-overall-arrival-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "return-container-report",
      "title": "Return Container Report",
      "tabs": [
        {
          "id": "return-container-report",
          "label": "Return Container Report",
          "route": "#/reports/return-container-report/return-container-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "freight-rates-report",
      "title": "Freight Rates Report",
      "tabs": [
        {
          "id": "freight-rates-report",
          "label": "Freight Rates Report",
          "route": "#/reports/freight-rates-report/freight-rates-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "agent-commission-report",
      "title": "Agent Commission Report",
      "tabs": [
        {
          "id": "agent-commission-report",
          "label": "Agent Commission Report",
          "route": "#/reports/agent-commission-report/agent-commission-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "price-book",
      "title": "Price Book",
      "tabs": [
        {
          "id": "price-book",
          "label": "Price Book",
          "route": "#/reports/price-book/price-book",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "purchase": [
    {
      "id": "bookings",
      "title": "Bookings",
      "tabs": [
        {
          "id": "create-booking",
          "label": "Create Booking",
          "route": "#/purchase/bookings/create-booking",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "rm-arrival",
      "title": "RM Arrival",
      "tabs": [
        {
          "id": "rm-arrival",
          "label": "RM Arrival",
          "route": "#/purchase/rm-arrival/rm-arrival",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "arrivals",
      "title": "Arrivals",
      "tabs": [
        {
          "id": "create-arrival",
          "label": "Create Arrival",
          "route": "#/purchase/arrivals/create-arrival",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "bills",
      "title": "Bills",
      "tabs": [
        {
          "id": "rm-bill",
          "label": "RM Bill",
          "route": "#/purchase/bills/rm-bill",
          "type": "system",
          "badge": ""
        },
        {
          "id": "commission-bill-page-1",
          "label": "Commission Bill Page 1",
          "route": "#/purchase/bills/commission-bill-page-1",
          "type": "system",
          "badge": ""
        },
        {
          "id": "bulk-download-bills",
          "label": "Bulk Download Bills",
          "route": "#/purchase/bills/bulk-download-bills",
          "type": "system",
          "badge": ""
        },
        {
          "id": "commission-bill-page-2",
          "label": "Commission Bill Page 2",
          "route": "#/purchase/bills/commission-bill-page-2",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "payments",
      "title": "Payments",
      "tabs": [
        {
          "id": "payments",
          "label": "Payments",
          "route": "#/purchase/payments/payments",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "payments-summary",
      "title": "Payments Summary",
      "tabs": [
        {
          "id": "cash-payment-voucher",
          "label": "Cash Payment Voucher",
          "route": "#/purchase/payments-summary/cash-payment-voucher",
          "type": "system",
          "badge": ""
        },
        {
          "id": "bank-payment-voucher",
          "label": "Bank Payment Voucher",
          "route": "#/purchase/payments-summary/bank-payment-voucher",
          "type": "system",
          "badge": ""
        },
        {
          "id": "journal-payment-voucher",
          "label": "Journal Payment Voucher",
          "route": "#/purchase/payments-summary/journal-payment-voucher",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "tickets": [
    {
      "id": "tickets",
      "title": "Tickets",
      "tabs": [
        {
          "id": "tickets",
          "label": "Tickets",
          "route": "#/tickets/tickets/tickets",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "help": [
    {
      "id": "help-line",
      "title": "Help Line",
      "tabs": [
        {
          "id": "help-line",
          "label": "Help Line",
          "route": "#/help/help-line/help-line",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "stock": [
    {
      "id": "stock-in",
      "title": "Stock In",
      "tabs": [
        {
          "id": "stock-in",
          "label": "Stock In",
          "route": "#/stock/stock-in/stock-in",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "stock-out",
      "title": "Stock Out",
      "tabs": [
        {
          "id": "stock-out",
          "label": "Stock Out",
          "route": "#/stock/stock-out/stock-out",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "store": [
    {
      "id": "view-store",
      "title": "View Store",
      "tabs": [
        {
          "id": "view-store",
          "label": "View Store",
          "route": "#/store/view-store/view-store",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "rack-names",
      "title": "Rack Names",
      "tabs": [
        {
          "id": "create-store-layout",
          "label": "Create Store Layout",
          "route": "#/store/rack-names/create-store-layout",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "view-stock",
      "title": "View Stock",
      "tabs": [
        {
          "id": "view-stock",
          "label": "View Stock",
          "route": "#/store/view-stock/view-stock",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "shipments": [
    {
      "id": "shipment-out",
      "title": "Shipment Out",
      "tabs": [
        {
          "id": "shipment-out",
          "label": "Shipment Out",
          "route": "#/shipments/shipment-out/shipment-out",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "quality-control": [
    {
      "id": "documentation",
      "title": "Documentation",
      "tabs": [
        {
          "id": "doc-add-reports",
          "label": "Doc Add Reports",
          "route": "#/quality-control/documentation/doc-add-reports",
          "type": "custom-list",
          "badge": ""
        },
        {
          "id": "doc-cl-create",
          "label": "Doc CL Create",
          "route": "#/quality-control/documentation/doc-cl-create",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "doc-decl-credit",
          "label": "Doc Decl Credit",
          "route": "#/quality-control/documentation/doc-decl-credit",
          "type": "system",
          "badge": ""
        },
        {
          "id": "doc-add-ds-report",
          "label": "Doc Add DS Report",
          "route": "#/quality-control/documentation/doc-add-ds-report",
          "type": "custom-list",
          "badge": ""
        },
        {
          "id": "add-payment",
          "label": "Add Payment",
          "route": "#/quality-control/documentation/add-payment",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "doc-add-mpeda-purchase-reg",
          "label": "Doc Add MPEDA Purchase Reg",
          "route": "#/quality-control/documentation/doc-add-mpeda-purchase-reg",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "doc-shipment-create",
          "label": "Doc Shipment Create",
          "route": "#/quality-control/documentation/doc-shipment-create",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "qc-new-addon-fields-for-sysco",
          "label": "QC New Addon Fields For Sysco",
          "route": "#/quality-control/documentation/qc-new-addon-fields-for-sysco",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "variety-add",
          "label": "Variety Add",
          "route": "#/quality-control/documentation/variety-add",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "doc-sample-letter",
          "label": "Doc Sample Letter",
          "route": "#/quality-control/documentation/doc-sample-letter",
          "type": "system",
          "badge": ""
        },
        {
          "id": "add-hc-covering-letter",
          "label": "Add HC Covering Letter",
          "route": "#/quality-control/documentation/add-hc-covering-letter",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "doc-add-php-report",
          "label": "Doc Add PHP Report",
          "route": "#/quality-control/documentation/doc-add-php-report",
          "type": "custom-list",
          "badge": ""
        },
        {
          "id": "doc-add-elsar-report",
          "label": "Doc Add ELSAR Report",
          "route": "#/quality-control/documentation/doc-add-elsar-report",
          "type": "custom-list",
          "badge": ""
        },
        {
          "id": "doc-add-combined-report",
          "label": "Doc Add Combined Report",
          "route": "#/quality-control/documentation/doc-add-combined-report",
          "type": "custom-list",
          "badge": ""
        },
        {
          "id": "doc-add-salmonella",
          "label": "Doc Add Salmonella",
          "route": "#/quality-control/documentation/doc-add-salmonella",
          "type": "dynamic-form",
          "badge": ""
        },
        {
          "id": "doc-cl-edit",
          "label": "Doc CL Edit",
          "route": "#/quality-control/documentation/doc-cl-edit",
          "type": "system",
          "badge": ""
        },
        {
          "id": "shrimp-two-excel-report",
          "label": "Shrimp Two Excel Report",
          "route": "#/quality-control/documentation/shrimp-two-excel-report",
          "type": "custom-list",
          "badge": ""
        },
        {
          "id": "doc-product-release-edit",
          "label": "Doc Product Release Edit",
          "route": "#/quality-control/documentation/doc-product-release-edit",
          "type": "system",
          "badge": ""
        },
        {
          "id": "edit-salmonella-report",
          "label": "Edit Salmonella Report",
          "route": "#/quality-control/documentation/edit-salmonella-report",
          "type": "custom-list",
          "badge": ""
        },
        {
          "id": "doc-edit-cmb-report",
          "label": "Doc Edit CMB Report",
          "route": "#/quality-control/documentation/doc-edit-cmb-report",
          "type": "custom-list",
          "badge": ""
        },
        {
          "id": "doc-edit-php-report",
          "label": "Doc Edit PHP Report",
          "route": "#/quality-control/documentation/doc-edit-php-report",
          "type": "custom-list",
          "badge": ""
        },
        {
          "id": "shrimp-two-report",
          "label": "Shrimp Two Report",
          "route": "#/quality-control/documentation/shrimp-two-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "qc-orders",
      "title": "QC Orders",
      "tabs": [
        {
          "id": "doc-add-reports",
          "label": "Doc Add Reports",
          "route": "#/quality-control/qc-orders/doc-add-reports",
          "type": "custom-list",
          "badge": ""
        }
      ]
    }
  ],
  "production": [
    {
      "id": "soaking-v2",
      "title": "Soaking (V2)",
      "tabs": [
        {
          "id": "soaking-v2",
          "label": "Soaking (V2)",
          "route": "#/production/soaking-v2/soaking-v2",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "daily-production",
      "title": "Daily Production",
      "tabs": [
        {
          "id": "daily-production",
          "label": "Daily Production",
          "route": "#/production/daily-production/daily-production",
          "type": "system",
          "badge": ""
        },
        {
          "id": "daily-production-data",
          "label": "Daily Production Data",
          "route": "#/production/daily-production/daily-production-data",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "freezing-store",
      "title": "Freezing Store",
      "tabs": [
        {
          "id": "freezing-store",
          "label": "Freezing Store",
          "route": "#/production/freezing-store/freezing-store",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "soaking",
      "title": "Soaking",
      "tabs": [
        {
          "id": "soaking",
          "label": "Soaking",
          "route": "#/production/soaking/soaking",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "freezing",
      "title": "Freezing",
      "tabs": [
        {
          "id": "freezing",
          "label": "Freezing",
          "route": "#/production/freezing/freezing",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "daily-stockout",
      "title": "Daily Stockout",
      "tabs": [
        {
          "id": "daily-production-data-stock-out-id",
          "label": "Daily Production Data Stock Out ID",
          "route": "#/production/daily-stockout/daily-production-data-stock-out-id",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "store-reports": [
    {
      "id": "rack-wise-stock-report",
      "title": "Rack Wise Stock Report",
      "tabs": [
        {
          "id": "rack-wise-stock-report",
          "label": "Rack Wise Stock Report",
          "route": "#/store-reports/rack-wise-stock-report/rack-wise-stock-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "inward-report",
      "title": "Inward Report",
      "tabs": [
        {
          "id": "inward-report",
          "label": "Inward Report",
          "route": "#/store-reports/inward-report/inward-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "outward-report",
      "title": "Outward Report",
      "tabs": [
        {
          "id": "outward-report",
          "label": "Outward Report",
          "route": "#/store-reports/outward-report/outward-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "rm-requirement",
      "title": "RM Requirement",
      "tabs": [
        {
          "id": "rm-requirement",
          "label": "RM Requirement",
          "route": "#/store-reports/rm-requirement/rm-requirement",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "excess-stock-report",
      "title": "Excess Stock Report",
      "tabs": [
        {
          "id": "excess-stock-report",
          "label": "Excess Stock Report",
          "route": "#/store-reports/excess-stock-report/excess-stock-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "stock-overall-report",
      "title": "Stock Overall Report",
      "tabs": [
        {
          "id": "stock-overall-report",
          "label": "Stock Overall Report",
          "route": "#/store-reports/stock-overall-report/stock-overall-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "stock-report",
      "title": "Stock Report",
      "tabs": [
        {
          "id": "stock-report",
          "label": "Stock Report",
          "route": "#/store-reports/stock-report/stock-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "stock-summary",
      "title": "Stock Summary",
      "tabs": [
        {
          "id": "stock-summary",
          "label": "Stock Summary",
          "route": "#/store-reports/stock-summary/stock-summary",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "excess-order-report",
      "title": "Excess Order Report",
      "tabs": [
        {
          "id": "excess-order-report",
          "label": "Excess Order Report",
          "route": "#/store-reports/excess-order-report/excess-order-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "daily-monthly-production",
      "title": "Daily & Monthly Production",
      "tabs": [
        {
          "id": "cs-monthly-production-report",
          "label": "CS Monthly Production Report",
          "route": "#/store-reports/daily-monthly-production/cs-monthly-production-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "opening-closing-report",
      "title": "Opening & Closing Report",
      "tabs": [
        {
          "id": "opening-closing-report",
          "label": "Opening & Closing Report",
          "route": "#/store-reports/opening-closing-report/opening-closing-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "shipment-report-daily-monthly",
      "title": "Shipment Report Daily & Monthly",
      "tabs": [
        {
          "id": "shipment-report-daily-monthly",
          "label": "Shipment Report Daily & Monthly",
          "route": "#/store-reports/shipment-report-daily-monthly/shipment-report-daily-monthly",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "ibt-ibt-report",
      "title": "IBT - IBT+ Report",
      "tabs": [
        {
          "id": "ibt-ibt-report",
          "label": "IBT - IBT+ Report",
          "route": "#/store-reports/ibt-ibt-report/ibt-ibt-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "thawing-report",
      "title": "Thawing Report",
      "tabs": [
        {
          "id": "cs-thawing-report",
          "label": "CS Thawing Report",
          "route": "#/store-reports/thawing-report/cs-thawing-report",
          "type": "custom-list",
          "badge": ""
        },
        {
          "id": "thawing-report",
          "label": "Thawing Report",
          "route": "#/store-reports/thawing-report/thawing-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "repacking-report-rep-and-rep",
      "title": "Repacking Report (Rep+ And Rep -)",
      "tabs": [
        {
          "id": "cs-repacking-report",
          "label": "CS Repacking Report",
          "route": "#/store-reports/repacking-report-rep-and-rep/cs-repacking-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "shipment-status-report",
      "title": "Shipment Status Report",
      "tabs": [
        {
          "id": "shipment-status-report",
          "label": "Shipment Status Report",
          "route": "#/store-reports/shipment-status-report/shipment-status-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "daily-stock-report-plant-wise",
      "title": "Daily Stock Report (Plant Wise)",
      "tabs": [
        {
          "id": "daily-stock-report-plant-wise",
          "label": "Daily Stock Report (Plant Wise)",
          "route": "#/store-reports/daily-stock-report-plant-wise/daily-stock-report-plant-wise",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "order-timeline-report",
      "title": "Order Timeline Report",
      "tabs": [
        {
          "id": "order-timeline-report",
          "label": "Order Timeline Report",
          "route": "#/store-reports/order-timeline-report/order-timeline-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "daily-production-report",
      "title": "Daily Production Report",
      "tabs": [
        {
          "id": "daily-production-report",
          "label": "Daily Production Report",
          "route": "#/store-reports/daily-production-report/daily-production-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "physical-report-phy-and-phy",
      "title": "Physical Report (Phy+ And Phy-)",
      "tabs": [
        {
          "id": "physical-report-phy-and-phy",
          "label": "Physical Report (Phy+ And Phy-)",
          "route": "#/store-reports/physical-report-phy-and-phy/physical-report-phy-and-phy",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "stock-production-report",
      "title": "Stock Production Report",
      "tabs": [
        {
          "id": "stock-production-report",
          "label": "Stock Production Report",
          "route": "#/store-reports/stock-production-report/stock-production-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    }
  ],
  "sales": [
    {
      "id": "delayed-shipments",
      "title": "Delayed Shipments",
      "tabs": [
        {
          "id": "delayed-shipments",
          "label": "Delayed Shipments",
          "route": "#/sales/delayed-shipments/delayed-shipments",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "pre-processing": [
    {
      "id": "deheading",
      "title": "Deheading",
      "tabs": [
        {
          "id": "deheading",
          "label": "Deheading",
          "route": "#/pre-processing/deheading/deheading",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "lot-track",
      "title": "Lot Track",
      "tabs": [
        {
          "id": "lot-track",
          "label": "Lot Track",
          "route": "#/pre-processing/lot-track/lot-track",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "grading",
      "title": "Grading",
      "tabs": [
        {
          "id": "grading-all-plants-report",
          "label": "Grading All Plants Report",
          "route": "#/pre-processing/grading/grading-all-plants-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "rm-received-track-id",
      "title": "RM Received Track ID",
      "tabs": [
        {
          "id": "rm-received-track-id",
          "label": "RM Received Track ID",
          "route": "#/pre-processing/rm-received-track-id/rm-received-track-id",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "de-heading-track-id",
      "title": "De-Heading Track ID",
      "tabs": [
        {
          "id": "de-heading-track-id",
          "label": "De-Heading Track ID",
          "route": "#/pre-processing/de-heading-track-id/de-heading-track-id",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "grading-track-id",
      "title": "Grading Track ID",
      "tabs": [
        {
          "id": "grading-track-id",
          "label": "Grading Track ID",
          "route": "#/pre-processing/grading-track-id/grading-track-id",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "value-addition-track-id",
      "title": "Value Addition Track ID",
      "tabs": [
        {
          "id": "value-addition-track-id",
          "label": "Value Addition Track ID",
          "route": "#/pre-processing/value-addition-track-id/value-addition-track-id",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "soaking-track-id",
      "title": "Soaking Track ID",
      "tabs": [
        {
          "id": "soaking-track-id",
          "label": "Soaking Track ID",
          "route": "#/pre-processing/soaking-track-id/soaking-track-id",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "freezing-track-id",
      "title": "Freezing Track ID",
      "tabs": [
        {
          "id": "freezing-track-id",
          "label": "Freezing Track ID",
          "route": "#/pre-processing/freezing-track-id/freezing-track-id",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "hon-qty-transfer-after-va",
      "title": "Hon Qty Transfer After VA",
      "tabs": [
        {
          "id": "hon-qty-transfer-after-va",
          "label": "Hon Qty Transfer After VA",
          "route": "#/pre-processing/hon-qty-transfer-after-va/hon-qty-transfer-after-va",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "lab": [
    {
      "id": "lots-list",
      "title": "Lots List",
      "tabs": [
        {
          "id": "lots-list",
          "label": "Lots List",
          "route": "#/lab/lots-list/lots-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "ab-report",
      "title": "AB Report",
      "tabs": [
        {
          "id": "rm-ab-report",
          "label": "RM AB Report",
          "route": "#/lab/ab-report/rm-ab-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "rm-report",
      "title": "RM Report",
      "tabs": [
        {
          "id": "rm-report-create",
          "label": "RM Report Create",
          "route": "#/lab/rm-report/rm-report-create",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "mb-report",
      "title": "MB Report",
      "tabs": [
        {
          "id": "ih-add-mb-report",
          "label": "IH Add MB Report",
          "route": "#/lab/mb-report/ih-add-mb-report",
          "type": "custom-list",
          "badge": ""
        },
        {
          "id": "ih-add-mb-result",
          "label": "IH Add MB Result",
          "route": "#/lab/mb-report/ih-add-mb-result",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "lab-report",
      "title": "Lab Report",
      "tabs": [
        {
          "id": "ih-add-bore-water-analysis",
          "label": "IH Add Bore Water Analysis",
          "route": "#/lab/lab-report/ih-add-bore-water-analysis",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "external-lab-report",
      "title": "External Lab Report",
      "tabs": [
        {
          "id": "external-lab-report",
          "label": "External Lab Report",
          "route": "#/lab/external-lab-report/external-lab-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    }
  ],
  "qc-reports": [
    {
      "id": "food-audit-report",
      "title": "Food Audit Report",
      "tabs": [
        {
          "id": "food-audit-report",
          "label": "Food Audit Report",
          "route": "#/qc-reports/food-audit-report/food-audit-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "social-audit-report",
      "title": "Social Audit Report",
      "tabs": [
        {
          "id": "social-audit-report",
          "label": "Social Audit Report",
          "route": "#/qc-reports/social-audit-report/social-audit-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "farm-audit-report",
      "title": "Farm Audit Report",
      "tabs": [
        {
          "id": "farm-audit-report",
          "label": "Farm Audit Report",
          "route": "#/qc-reports/farm-audit-report/farm-audit-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "hatchery-audit-report",
      "title": "Hatchery Audit Report",
      "tabs": [
        {
          "id": "hatchery-audit-report",
          "label": "Hatchery Audit Report",
          "route": "#/qc-reports/hatchery-audit-report/hatchery-audit-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "feed-mill-audit-report",
      "title": "Feed Mill Audit Report",
      "tabs": [
        {
          "id": "feed-mill-audit-report",
          "label": "Feed Mill Audit Report",
          "route": "#/qc-reports/feed-mill-audit-report/feed-mill-audit-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "bap-report",
      "title": "BAP Report",
      "tabs": [
        {
          "id": "bap-report",
          "label": "BAP Report",
          "route": "#/qc-reports/bap-report/bap-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "buyer-request-list",
      "title": "Buyer Request List",
      "tabs": [
        {
          "id": "buyer-request-list",
          "label": "Buyer Request List",
          "route": "#/qc-reports/buyer-request-list/buyer-request-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "sysco-status-list",
      "title": "Sysco Status List",
      "tabs": [
        {
          "id": "sysco-status-list",
          "label": "Sysco Status List",
          "route": "#/qc-reports/sysco-status-list/sysco-status-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "traceability-utilized-report",
      "title": "Traceability Utilized Report",
      "tabs": [
        {
          "id": "traceability-utilized-report",
          "label": "Traceability Utilized Report",
          "route": "#/qc-reports/traceability-utilized-report/traceability-utilized-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "payment-statement",
      "title": "Payment Statement",
      "tabs": [
        {
          "id": "doc-edit-sample-letter-external",
          "label": "Doc Edit Sample Letter External",
          "route": "#/qc-reports/payment-statement/doc-edit-sample-letter-external",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "traceability-report",
      "title": "Traceability Report",
      "tabs": [
        {
          "id": "traceability-report",
          "label": "Traceability Report",
          "route": "#/qc-reports/traceability-report/traceability-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    }
  ],
  "product": [
    {
      "id": "product-list",
      "title": "Product List",
      "tabs": [
        {
          "id": "add-product",
          "label": "Add Product",
          "route": "#/product/product-list/add-product",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "preparation-list",
      "title": "Preparation List",
      "tabs": [
        {
          "id": "add-preparation",
          "label": "Add Preparation",
          "route": "#/product/preparation-list/add-preparation",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "grades-list",
      "title": "Grades List",
      "tabs": [
        {
          "id": "add-options",
          "label": "Add Options",
          "route": "#/product/grades-list/add-options",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "packing-style-list",
      "title": "Packing Style List",
      "tabs": [
        {
          "id": "create-packing-styles",
          "label": "Create Packing Styles",
          "route": "#/product/packing-style-list/create-packing-styles",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "variety-list",
      "title": "Variety List",
      "tabs": [
        {
          "id": "add-variety",
          "label": "Add Variety",
          "route": "#/product/variety-list/add-variety",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "species",
      "title": "Species",
      "tabs": [
        {
          "id": "species-master-create",
          "label": "Species Master Create",
          "route": "#/product/species/species-master-create",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    }
  ],
  "development": [
    {
      "id": "production-standard-yields",
      "title": "Production Standard Yields",
      "tabs": [
        {
          "id": "production-standard-yields",
          "label": "Production Standard Yields",
          "route": "#/development/production-standard-yields/production-standard-yields",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "daily-stock-report-plant-wise-new",
      "title": "Daily Stock Report (Plant Wise) New",
      "tabs": [
        {
          "id": "daily-stock-report-plant-wise-new",
          "label": "Daily Stock Report (Plant Wise) New",
          "route": "#/development/daily-stock-report-plant-wise-new/daily-stock-report-plant-wise-new",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "stock-value-report",
      "title": "Stock Value Report",
      "tabs": [
        {
          "id": "stock-value-report",
          "label": "Stock Value Report",
          "route": "#/development/stock-value-report/stock-value-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "stock-value-report-landscape",
      "title": "Stock Value Report Landscape",
      "tabs": [
        {
          "id": "stock-value-report-landscape",
          "label": "Stock Value Report Landscape",
          "route": "#/development/stock-value-report-landscape/stock-value-report-landscape",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "consolidation-report",
      "title": "Consolidation Report",
      "tabs": [
        {
          "id": "consolidation-report",
          "label": "Consolidation Report",
          "route": "#/development/consolidation-report/consolidation-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    }
  ],
  "general-store": [
    {
      "id": "material-issue-gs",
      "title": "Material Issue (GS)",
      "tabs": [
        {
          "id": "material-issue-gs",
          "label": "Material Issue (GS)",
          "route": "#/general-store/material-issue-gs/material-issue-gs",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "goods-receipt-note-gs",
      "title": "Goods Receipt Note (GS)",
      "tabs": [
        {
          "id": "goods-receipt-note-gs",
          "label": "Goods Receipt Note (GS)",
          "route": "#/general-store/goods-receipt-note-gs/goods-receipt-note-gs",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "proforma-order-gs",
      "title": "Proforma Order (GS)",
      "tabs": [
        {
          "id": "proforma-order-gs",
          "label": "Proforma Order (GS)",
          "route": "#/general-store/proforma-order-gs/proforma-order-gs",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "indent-page-gs",
      "title": "Indent Page (GS)",
      "tabs": [
        {
          "id": "indent-page",
          "label": "Indent Page",
          "route": "#/general-store/indent-page-gs/indent-page",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "cs-master": [
    {
      "id": "general-options-list",
      "title": "General Options List",
      "tabs": [
        {
          "id": "cs-general-options-list",
          "label": "CS General Options List",
          "route": "#/cs-master/general-options-list/cs-general-options-list",
          "type": "system",
          "badge": ""
        },
        {
          "id": "cs-create-general-options",
          "label": "CS Create General Options",
          "route": "#/cs-master/general-options-list/cs-create-general-options",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "tenants-list",
      "title": "Tenants List",
      "tabs": [
        {
          "id": "cs-create-tenants",
          "label": "CS Create Tenants",
          "route": "#/cs-master/tenants-list/cs-create-tenants",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "coldstores-list",
      "title": "Coldstores List",
      "tabs": [
        {
          "id": "daily-production-data",
          "label": "Daily Production Data",
          "route": "#/cs-master/coldstores-list/daily-production-data",
          "type": "system",
          "badge": ""
        },
        {
          "id": "cs-create-coldstores",
          "label": "CS Create Coldstores",
          "route": "#/cs-master/coldstores-list/cs-create-coldstores",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "general-categories-list",
      "title": "General Categories List",
      "tabs": [
        {
          "id": "cs-create-general-categories",
          "label": "CS Create General Categories",
          "route": "#/cs-master/general-categories-list/cs-create-general-categories",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "floor-list",
      "title": "Floor List",
      "tabs": [
        {
          "id": "cs-create-floor",
          "label": "CS Create Floor",
          "route": "#/cs-master/floor-list/cs-create-floor",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "block-list",
      "title": "Block List",
      "tabs": [
        {
          "id": "cs-create-block",
          "label": "CS Create Block",
          "route": "#/cs-master/block-list/cs-create-block",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "variety-list",
      "title": "Variety List",
      "tabs": [
        {
          "id": "variety-list",
          "label": "Variety List",
          "route": "#/cs-master/variety-list/variety-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "hon-packing-count-master",
      "title": "Hon Packing Count Master",
      "tabs": [
        {
          "id": "grade-master-hl-count",
          "label": "Grade Master HL Count",
          "route": "#/cs-master/hon-packing-count-master/grade-master-hl-count",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "qc-audit": [
    {
      "id": "feed-mill-audit-list",
      "title": "Feed Mill Audit List",
      "tabs": [
        {
          "id": "feed-mill-audit-list",
          "label": "Feed Mill Audit List",
          "route": "#/qc-audit/feed-mill-audit-list/feed-mill-audit-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "social-audit-list",
      "title": "Social Audit List",
      "tabs": [
        {
          "id": "social-audit-list",
          "label": "Social Audit List",
          "route": "#/qc-audit/social-audit-list/social-audit-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "food-audit-list",
      "title": "Food Audit List",
      "tabs": [
        {
          "id": "food-audit-list",
          "label": "Food Audit List",
          "route": "#/qc-audit/food-audit-list/food-audit-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "farm-audit-list",
      "title": "Farm Audit List",
      "tabs": [
        {
          "id": "farm-audit-list",
          "label": "Farm Audit List",
          "route": "#/qc-audit/farm-audit-list/farm-audit-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "hatchery-audit-list",
      "title": "Hatchery Audit List",
      "tabs": [
        {
          "id": "hatchery-audit-list",
          "label": "Hatchery Audit List",
          "route": "#/qc-audit/hatchery-audit-list/hatchery-audit-list",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "ibt": [
    {
      "id": "cs-ibt-request-list",
      "title": "CS IBT Request List",
      "tabs": [
        {
          "id": "cs-ibt-breakup-data",
          "label": "CS IBT Breakup Data",
          "route": "#/ibt/cs-ibt-request-list/cs-ibt-breakup-data",
          "type": "system",
          "badge": ""
        },
        {
          "id": "cs-ibt-breakup-preview",
          "label": "CS IBT Breakup Preview",
          "route": "#/ibt/cs-ibt-request-list/cs-ibt-breakup-preview",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "stock-approvals": [
    {
      "id": "admin-daily-production-list",
      "title": "Admin Daily Production List",
      "tabs": [
        {
          "id": "admin-daily-production-list",
          "label": "Admin Daily Production List",
          "route": "#/stock-approvals/admin-daily-production-list/admin-daily-production-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "admin-inward-approval",
      "title": "Admin Inward Approval",
      "tabs": [
        {
          "id": "admin-inward-approval",
          "label": "Admin Inward Approval",
          "route": "#/stock-approvals/admin-inward-approval/admin-inward-approval",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "chemical-screens": [
    {
      "id": "chemical-payments-list",
      "title": "Chemical Payments List",
      "tabs": [
        {
          "id": "chemical-payments-list",
          "label": "Chemical Payments List",
          "route": "#/chemical-screens/chemical-payments-list/chemical-payments-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "food-social-audit",
      "title": "Food & Social Audit",
      "tabs": [
        {
          "id": "food-social-audit",
          "label": "Food & Social Audit",
          "route": "#/chemical-screens/food-social-audit/food-social-audit",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "farm-mill-hatchery-audit",
      "title": "Farm/Mill/Hatchery Audit",
      "tabs": [
        {
          "id": "farm-mill-hatchery-audit",
          "label": "Farm/Mill/Hatchery Audit",
          "route": "#/chemical-screens/farm-mill-hatchery-audit/farm-mill-hatchery-audit",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "received-chemicals",
      "title": "Received Chemicals",
      "tabs": [
        {
          "id": "gs-chem-orders-list",
          "label": "GS Chem Orders List",
          "route": "#/chemical-screens/received-chemicals/gs-chem-orders-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "chemical-pos",
      "title": "Chemical POs",
      "tabs": [
        {
          "id": "gs-chem-po-create",
          "label": "GS Chem PO Create",
          "route": "#/chemical-screens/chemical-pos/gs-chem-po-create",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "chemicals-consumption",
      "title": "Chemicals Consumption",
      "tabs": [
        {
          "id": "gs-chem-consumption-create",
          "label": "GS Chem Consumption Create",
          "route": "#/chemical-screens/chemicals-consumption/gs-chem-consumption-create",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "hatchery-list",
      "title": "Hatchery List",
      "tabs": [
        {
          "id": "hatchery-list",
          "label": "Hatchery List",
          "route": "#/chemical-screens/hatchery-list/hatchery-list",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "chemical-opening-balance-report",
      "title": "Chemical Opening Balance Report",
      "tabs": [
        {
          "id": "chemical-opening-balance-report",
          "label": "Chemical Opening Balance Report",
          "route": "#/chemical-screens/chemical-opening-balance-report/chemical-opening-balance-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "chemical-balance-report",
      "title": "Chemical Balance Report",
      "tabs": [
        {
          "id": "chemical-balance-report",
          "label": "Chemical Balance Report",
          "route": "#/chemical-screens/chemical-balance-report/chemical-balance-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "chemical-received-report",
      "title": "Chemical Received Report",
      "tabs": [
        {
          "id": "gs-chem-orders-create",
          "label": "GS Chem Orders Create",
          "route": "#/chemical-screens/chemical-received-report/gs-chem-orders-create",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    }
  ],
  "production-reports": [
    {
      "id": "reconciliation-report",
      "title": "Reconciliation Report",
      "tabs": [
        {
          "id": "reconciliation-report",
          "label": "Reconciliation Report",
          "route": "#/production-reports/reconciliation-report/reconciliation-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "consolidation-report-daily-monthly",
      "title": "Consolidation Report Daily & Monthly",
      "tabs": [
        {
          "id": "consolidation-report-daily-and-monthly",
          "label": "Consolidation Report Daily And Monthly",
          "route": "#/production-reports/consolidation-report-daily-monthly/consolidation-report-daily-and-monthly",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "deheading-day-wise-report",
      "title": "Deheading Day Wise Report",
      "tabs": [
        {
          "id": "deheading-day-wise-report",
          "label": "Deheading Day Wise Report",
          "route": "#/production-reports/deheading-day-wise-report/deheading-day-wise-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "rm-received-day-wise-report",
      "title": "RM Received Day Wise Report",
      "tabs": [
        {
          "id": "rm-received-day-wise-report",
          "label": "RM Received Day Wise Report",
          "route": "#/production-reports/rm-received-day-wise-report/rm-received-day-wise-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "va-floor-balance-report",
      "title": "VA Floor Balance Report",
      "tabs": [
        {
          "id": "va-floor-balance-report",
          "label": "VA Floor Balance Report",
          "route": "#/production-reports/va-floor-balance-report/va-floor-balance-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "assumed-reports-by-rm-arrival",
      "title": "Assumed Reports By RM & Arrival",
      "tabs": [
        {
          "id": "assumed-reports-by-rm-arrival",
          "label": "Assumed Reports By RM & Arrival",
          "route": "#/production-reports/assumed-reports-by-rm-arrival/assumed-reports-by-rm-arrival",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "grading-day-machine-wise-report",
      "title": "Grading Day & Machine Wise Report",
      "tabs": [
        {
          "id": "grading-day-machine-wise-report",
          "label": "Grading Day & Machine Wise Report",
          "route": "#/production-reports/grading-day-machine-wise-report/grading-day-machine-wise-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "soaking-report",
      "title": "Soaking Report",
      "tabs": [
        {
          "id": "soaking-report",
          "label": "Soaking Report",
          "route": "#/production-reports/soaking-report/soaking-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "freezing-report",
      "title": "Freezing Report",
      "tabs": [
        {
          "id": "freezing-production-report",
          "label": "Freezing Production Report",
          "route": "#/production-reports/freezing-report/freezing-production-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "va-transfer-report",
      "title": "VA Transfer Report",
      "tabs": [
        {
          "id": "va-transfer-report",
          "label": "VA Transfer Report",
          "route": "#/production-reports/va-transfer-report/va-transfer-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "track-code-report",
      "title": "Track Code Report",
      "tabs": [
        {
          "id": "track-code-report",
          "label": "Track Code Report",
          "route": "#/production-reports/track-code-report/track-code-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "soaking-floor-balance-report",
      "title": "Soaking Floor Balance Report",
      "tabs": [
        {
          "id": "soaking-floor-balance-report",
          "label": "Soaking Floor Balance Report",
          "route": "#/production-reports/soaking-floor-balance-report/soaking-floor-balance-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "file-upload",
      "title": "File Upload",
      "tabs": [
        {
          "id": "file-upload",
          "label": "File Upload",
          "route": "#/production-reports/file-upload/file-upload",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "value-addition-report",
      "title": "Value Addition Report",
      "tabs": [
        {
          "id": "value-addition-report",
          "label": "Value Addition Report",
          "route": "#/production-reports/value-addition-report/value-addition-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "head-on-to-finished-report",
      "title": "Head On To Finished Report",
      "tabs": [
        {
          "id": "head-on-to-finished-report-pdf-d1",
          "label": "Head On To Finished Report PDF D1",
          "route": "#/production-reports/head-on-to-finished-report/head-on-to-finished-report-pdf-d1",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "untreated-report",
      "title": "Untreated Report",
      "tabs": [
        {
          "id": "untreated-report",
          "label": "Untreated Report",
          "route": "#/production-reports/untreated-report/untreated-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "freezing-production-report",
      "title": "Freezing Production Report",
      "tabs": [
        {
          "id": "freezing-production-report",
          "label": "Freezing Production Report",
          "route": "#/production-reports/freezing-production-report/freezing-production-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "soaking-floor-balance-variety-report-new",
      "title": "Soaking Floor Balance Variety Report New",
      "tabs": [
        {
          "id": "soaking-floor-balance-variety-report-new",
          "label": "Soaking Floor Balance Variety Report New",
          "route": "#/production-reports/soaking-floor-balance-variety-report-new/soaking-floor-balance-variety-report-new",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "value-addition-report-new",
      "title": "Value Addition Report New",
      "tabs": [
        {
          "id": "value-addition-report-new",
          "label": "Value Addition Report New",
          "route": "#/production-reports/value-addition-report-new/value-addition-report-new",
          "type": "custom-list",
          "badge": ""
        }
      ]
    }
  ],
  "qc-dashboard": [
    {
      "id": "qc-dashboard-new",
      "title": "QC Dashboard New",
      "tabs": [
        {
          "id": "qc-dashboard-new",
          "label": "QC Dashboard New",
          "route": "#/qc-dashboard/qc-dashboard-new/qc-dashboard-new",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ],
  "anti-dumping": [
    {
      "id": "anti-dumping-entry-form",
      "title": "Anti Dumping Entry Form",
      "tabs": [
        {
          "id": "anti-dumping-entry-form",
          "label": "Anti Dumping Entry Form",
          "route": "#/anti-dumping/anti-dumping-entry-form/anti-dumping-entry-form",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "anti-dumping-report",
      "title": "Anti Dumping Report",
      "tabs": [
        {
          "id": "anti-dumping-report",
          "label": "Anti Dumping Report",
          "route": "#/anti-dumping/anti-dumping-report/anti-dumping-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "anti-dumping-negative-report",
      "title": "Anti Dumping Negative Report",
      "tabs": [
        {
          "id": "anti-dumping-negative-report",
          "label": "Anti Dumping Negative Report",
          "route": "#/anti-dumping/anti-dumping-negative-report/anti-dumping-negative-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "anti-dumping-shipment-report",
      "title": "Anti Dumping Shipment Report",
      "tabs": [
        {
          "id": "anti-dumping-shipment-report",
          "label": "Anti Dumping Shipment Report",
          "route": "#/anti-dumping/anti-dumping-shipment-report/anti-dumping-shipment-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "anti-dumping-opening-closing-report",
      "title": "Anti Dumping Opening & Closing Report",
      "tabs": [
        {
          "id": "anti-dumping-opening-closing-report",
          "label": "Anti Dumping Opening & Closing Report",
          "route": "#/anti-dumping/anti-dumping-opening-closing-report/anti-dumping-opening-closing-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    },
    {
      "id": "anti-dumping-closing-report",
      "title": "Anti Dumping Closing Report",
      "tabs": [
        {
          "id": "anti-dumping-closing-report",
          "label": "Anti Dumping Closing Report",
          "route": "#/anti-dumping/anti-dumping-closing-report/anti-dumping-closing-report",
          "type": "custom-list",
          "badge": ""
        }
      ]
    }
  ],
  "inventory": [
    {
      "id": "proforma-register-create-gs",
      "title": "Proforma Register Create (GS)",
      "tabs": [
        {
          "id": "proforma-register-create-gs",
          "label": "Proforma Register Create (GS)",
          "route": "#/inventory/proforma-register-create-gs/proforma-register-create-gs",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "proforma-register-gs",
      "title": "Proforma Register (GS)",
      "tabs": [
        {
          "id": "proforma-register-gs",
          "label": "Proforma Register (GS)",
          "route": "#/inventory/proforma-register-gs/proforma-register-gs",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    }
  ],
  "packing-material": [
    {
      "id": "material-issue-pm",
      "title": "Material Issue (PM)",
      "tabs": [
        {
          "id": "material-issue-pm",
          "label": "Material Issue (PM)",
          "route": "#/packing-material/material-issue-pm/material-issue-pm",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "goods-receipt-note-pm",
      "title": "Goods Receipt Note (PM)",
      "tabs": [
        {
          "id": "goods-receipt-note-pm",
          "label": "Goods Receipt Note (PM)",
          "route": "#/packing-material/goods-receipt-note-pm/goods-receipt-note-pm",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "purchase-order-pm",
      "title": "Purchase Order (PM)",
      "tabs": [
        {
          "id": "purchase-order-pm",
          "label": "Purchase Order (PM)",
          "route": "#/packing-material/purchase-order-pm/purchase-order-pm",
          "type": "system",
          "badge": ""
        }
      ]
    },
    {
      "id": "proforma-invoice-pm",
      "title": "Proforma Invoice (PM)",
      "tabs": [
        {
          "id": "proforma-invoice-pm",
          "label": "Proforma Invoice (PM)",
          "route": "#/packing-material/proforma-invoice-pm/proforma-invoice-pm",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "proforma-list-pm",
      "title": "Proforma List (PM)",
      "tabs": [
        {
          "id": "proforma-list-pm",
          "label": "Proforma List (PM)",
          "route": "#/packing-material/proforma-list-pm/proforma-list-pm",
          "type": "dynamic-form",
          "badge": ""
        }
      ]
    },
    {
      "id": "purchase-order-list-pm",
      "title": "Purchase Order List (PM)",
      "tabs": [
        {
          "id": "purchase-order-list-pm",
          "label": "Purchase Order List (PM)",
          "route": "#/packing-material/purchase-order-list-pm/purchase-order-list-pm",
          "type": "system",
          "badge": ""
        }
      ]
    }
  ]
};


function extractInitialTabsConfig(submenusConfig, modulesConfig) {
  const tabs = [];
  const addedKeys = new Set();

  // 1. Standard General Configuration tabs
  const generalTabs = [
    {
      id: 'clients',
      key: 'clients',
      label: 'Clients',
      menuKey: 'general',
      menuLabel: 'GENERAL',
      submenuId: 'configuration',
      submenuTitle: 'Configuration',
      route: '#/general/configuration/clients',
      type: 'system',
      badge: '',
      order: 1,
      status: 'Active',
      isProtected: true,
      description: 'Corporate client entities, subsidiaries, and plant definitions'
    },
    {
      id: 'users',
      key: 'users',
      label: 'Users',
      menuKey: 'general',
      menuLabel: 'GENERAL',
      submenuId: 'configuration',
      submenuTitle: 'Configuration',
      route: '#/general/configuration/users',
      type: 'system',
      badge: '',
      order: 2,
      status: 'Active',
      isProtected: true,
      description: 'Enterprise user accounts, credentials, and plant access permissions'
    },
    {
      id: 'roles',
      key: 'roles',
      label: 'Roles',
      menuKey: 'general',
      menuLabel: 'GENERAL',
      submenuId: 'configuration',
      submenuTitle: 'Configuration',
      route: '#/general/configuration/roles',
      type: 'system',
      badge: '',
      order: 3,
      status: 'Active',
      isProtected: true,
      description: 'Role-based access control (RBAC) permission matrix and personas'
    },
    {
      id: 'menus',
      key: 'menus',
      label: 'Menus',
      menuKey: 'general',
      menuLabel: 'GENERAL',
      submenuId: 'configuration',
      submenuTitle: 'Configuration',
      route: '#/general/configuration/menus',
      type: 'system',
      badge: '',
      order: 4,
      status: 'Active',
      isProtected: true,
      description: 'Module registry, navigation icons, and menu visibility controls'
    }
  ];

  // 1b. Setting Customizer Tabs (Setting > Customizer)
  const settingTabs = [
    {
      id: 'forms',
      key: 'forms',
      label: 'Forms',
      menuKey: 'settings',
      menuLabel: 'SETTING',
      submenuId: 'custom',
      submenuTitle: 'Customizer',
      route: '#/settings/custom/forms',
      type: 'system',
      badge: '',
      order: 1,
      status: 'Active',
      isProtected: false,
      description: 'Dynamic form definitions and layout configurator'
    },
    {
      id: 'fields-customizer',
      key: 'fields-customizer',
      label: 'Fields Customizer',
      menuKey: 'settings',
      menuLabel: 'SETTING',
      submenuId: 'custom',
      submenuTitle: 'Customizer',
      route: '#/settings/custom/fields-customizer',
      type: 'system',
      badge: '',
      order: 2,
      status: 'Active',
      isProtected: false,
      description: 'Dynamic field collections, validation schemas, and metadata builder'
    },
    {
      id: 'query-editor',
      key: 'query-editor',
      label: 'Query Editor',
      menuKey: 'settings',
      menuLabel: 'SETTING',
      submenuId: 'custom',
      submenuTitle: 'Customizer',
      route: '#/settings/custom/query-editor',
      type: 'system',
      badge: '',
      order: 3,
      status: 'Active',
      isProtected: false,
      description: 'Advanced reporting query generator and SQL expression builder'
    }
  ];

  settingTabs.forEach(t => {
    tabs.push(t);
    addedKeys.add(`${t.menuKey}-${t.submenuId}-${t.key}`);
  });

  generalTabs.forEach(t => {
    tabs.push(t);
    addedKeys.add(`${t.menuKey}-${t.submenuId}-${t.key}`);
  });

  // 2. Extract from submenusConfig
  const mods = Array.isArray(modulesConfig) ? modulesConfig : [];
  const modMap = {};
  mods.forEach(m => { modMap[m.id || m.key] = m.label || m.name || m.id; });

  if (submenusConfig && typeof submenusConfig === 'object') {
    let orderCounter = 10;
    for (const [mKey, smList] of Object.entries(submenusConfig)) {
      const menuLabel = modMap[mKey] || mKey.toUpperCase();
      if (Array.isArray(smList)) {
        smList.forEach(sm => {
          const smId = sm.id || 'default';
          const smTitle = sm.title || sm.name || smId;
          if (Array.isArray(sm.tabs)) {
            sm.tabs.forEach((t, tIdx) => {
              const tabId = t.id || `tab-${orderCounter}`;
              const uniqueKey = `${mKey}-${smId}-${tabId}`;
              if (!addedKeys.has(uniqueKey)) {
                addedKeys.add(uniqueKey);
                const isSysProtected = ['dashboard', 'master', 'reports', 'help'].includes(mKey);
                tabs.push({
                  id: tabId,
                  key: tabId,
                  label: t.label || t.title || tabId,
                  menuKey: mKey,
                  menuLabel: menuLabel,
                  submenuId: smId,
                  submenuTitle: smTitle,
                  route: t.route || t.hash || `#/${mKey}/${smId}/${tabId}`,
                  type: t.type || 'system',
                  badge: t.badge || '',
                  order: t.order || (tIdx + 1),
                  status: t.status || (t.visible !== false ? 'Active' : 'Inactive'),
                  isProtected: isSysProtected,
                  description: t.description || `Tab for ${t.label || tabId} in ${smTitle}`
                });
                orderCounter++;
              }
            });
          }
        });
      }
    }
  }

  return tabs;
}

function getInitialStudioState() {
  const saved = localStorage.getItem(STUDIO_STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.modulesConfig && parsed.modulesConfig.length >= 30) {
        const defaultMenuKeys = ['dashboard', 'master', 'reports', 'help'];
        parsed.modulesConfig.forEach(m => {
          if (defaultMenuKeys.includes(m.id) || defaultMenuKeys.includes(m.key)) {
            m.isProtected = true;
            m.isDefault = true;
          }
        });
        if (parsed.roles && Array.isArray(parsed.roles)) {
          const defaultDeptMap = {
            'ROLE-ADMIN': 'Executive Management',
            'ROLE-PROCUREMENT': 'Raw Material Procurement',
            'ROLE-QC': 'Quality Assurance & Lab',
            'ROLE-PRODUCTION': 'Production & Processing Floor',
            'ROLE-COLDSTORE': 'Cold Storage & Logistics',
            'ROLE-SALES': 'Sales, Exports & Documentation'
          };
          const defaultMenusMap = {
            'ROLE-ADMIN': ['*'],
            'ROLE-PROCUREMENT': ['dashboard', 'procurement', 'inventory'],
            'ROLE-QC': ['dashboard', 'quality'],
            'ROLE-PRODUCTION': ['dashboard', 'production', 'inventory'],
            'ROLE-COLDSTORE': ['dashboard', 'coldstore', 'inventory'],
            'ROLE-SALES': ['dashboard', 'buyers', 'orders', 'sales']
          };
          parsed.roles.forEach(r => {
            if (!r.department) r.department = defaultDeptMap[r.id] || 'General Operations';
            if (!r.status) r.status = 'Active';
            if (!r.assignedMenus || r.assignedMenus.length === 0) r.assignedMenus = defaultMenusMap[r.id] || ['dashboard'];
            if (!r.assignedSubmenus) r.assignedSubmenus = [];
          });
        }
                if (!parsed.submenusConfig || typeof parsed.submenusConfig !== 'object') {
          parsed.submenusConfig = DEFAULT_SUBMENUS_CONFIG;
        }
        if (!parsed.submenusConfig.settings) {
          parsed.submenusConfig.settings = [
            {
              id: 'custom',
              title: 'Customizer',
              tabs: [
                { id: 'forms', label: 'Forms', route: '#/settings/custom/forms', type: 'system', badge: '' },
                { id: 'fields-customizer', label: 'Fields Customizer', route: '#/settings/custom/fields-customizer', type: 'system', badge: '' },
                { id: 'query-editor', label: 'Query Editor', route: '#/settings/custom/query-editor', type: 'system', badge: '' }
              ]
            }
          ];
        }
        if (!parsed.tabsConfig || !Array.isArray(parsed.tabsConfig) || parsed.tabsConfig.length === 0) {
          parsed.tabsConfig = extractInitialTabsConfig(parsed.submenusConfig || DEFAULT_SUBMENUS_CONFIG, parsed.modulesConfig || DEFAULT_MODULES_CONFIG);
        } else {
          // Ensure settings tabs are present in tabsConfig
          const hasSettings = parsed.tabsConfig.some(t => t.menuKey === 'settings' && t.submenuId === 'custom');
          parsed.tabsConfig = parsed.tabsConfig.filter(t => t.id !== 'audit-history' && t.key !== 'audit-history' && !( (t.id === 'tabs' || t.key === 'tabs') && (t.submenuId === 'configuration' || t.route === '#/general/configuration/tabs') ));
          if (!hasSettings) {
            const extraSettingsTabs = [
              { id: 'forms', key: 'forms', label: 'Forms', menuKey: 'settings', menuLabel: 'SETTING', submenuId: 'custom', submenuTitle: 'Customizer', route: '#/settings/custom/forms', type: 'system', badge: '', order: 1, status: 'Active', isProtected: false, description: 'Dynamic form definitions and layout configurator' },
              { id: 'fields-customizer', key: 'fields-customizer', label: 'Fields Customizer', menuKey: 'settings', menuLabel: 'SETTING', submenuId: 'custom', submenuTitle: 'Customizer', route: '#/settings/custom/fields-customizer', type: 'system', badge: '', order: 2, status: 'Active', isProtected: false, description: 'Dynamic field collections, validation schemas, and metadata builder' },
              { id: 'query-editor', key: 'query-editor', label: 'Query Editor', menuKey: 'settings', menuLabel: 'SETTING', submenuId: 'custom', submenuTitle: 'Customizer', route: '#/settings/custom/query-editor', type: 'system', badge: '', order: 3, status: 'Active', isProtected: false, description: 'Advanced reporting query generator and SQL expression builder' }
            ];
            parsed.tabsConfig.unshift(...extraSettingsTabs);
          }
        }
        return parsed;
      }
    } catch (e) {
      console.error('Failed to parse studio state', e);
    }
  }

  return {
    activeCompanyId: 'CMP-001',
    publishedVersion: 'v2.4.1',
    hasDraftChanges: true,
    draftChangesCount: 3,
    previewPersona: 'System Administrator',

    // 1. Companies & Processing Plants
    companies: [
      {
        id: 'CMP-001',
        code: 'DFL',
        shortName: 'DFL',
        name: 'Devi Fisheries Limited',
        joiningYear: 1997,
        legalName: 'Devi Fisheries Limited',
        cin: 'L05005AP1997PLC027123',
        taxId: '37AABCD1234E1Z5',
        eiaNumber: 'EIA/AP/0458',
        fdaNumber: 'FDA-REG-10928374',
        bapNumber: 'BAP-P-4492-4STAR',
        country: 'India',
        currency: 'INR (₹)',
        timezone: 'Asia/Kolkata (IST)',
        dateFormat: 'DD/MM/YYYY',
        contactEmail: 'purchase@devifisheries.com',
        contactPhone: '+91 891 256 7890',
        address: 'Harbour Road, Fishing Harbour, Visakhapatnam, AP 530001',
        dbHost: 'db-cluster-ap-south-1.rds.aws.com',
        dbName: 'devi_fisheries_prod',
        dbUser: 'dfl_admin',
        dbPass: '••••••••',
        department: 'Executive Management',
        accessType: 'Full Super Admin Access',
        credUsername: 'dfl_admin',
        designation: 'Managing Director',
        userId: 'USR-DFL-001',
        credPassword: '••••••••',
        status: 'Active',
        plants: ['Unit-1 VSP (Harbour)', 'Unit-2 Singarayakonda', 'Unit-3 Kakinada Port', 'Unit-4 PND', 'Unit-5 JPT', 'Unit-6 JPT-II']
      },
      {
        id: 'CMP-002',
        code: 'DSF',
        shortName: 'DSF',
        name: 'Devi Sea Foods Americas',
        joiningYear: 2019,
        legalName: 'Devi Sea Foods Americas Inc.',
        cin: 'DE-CORP-4892019',
        taxId: 'US-EIN-54-1892031',
        eiaNumber: 'N/A (Importing Entity)',
        fdaNumber: 'FDA-REG-US-99120',
        bapNumber: 'BAP-IMP-8821',
        country: 'United States',
        currency: 'INR (₹)',
        timezone: 'America/New_York (EST)',
        dateFormat: 'MM/DD/YYYY',
        contactEmail: 'sales.us@deviseafoods.com',
        contactPhone: '+1 (732) 555-0199',
        address: 'Suite 400, 100 Wood Avenue South, Iselin, NJ 08830',
        dbHost: 'db-useast-1.rds.aws.com',
        dbName: 'devi_seafoods_us',
        dbUser: 'dsf_admin',
        dbPass: '••••••••',
        department: 'Sales & Commercial Exports',
        accessType: 'Operational Administrator',
        credUsername: 'dsf_admin',
        designation: 'VP Americas',
        userId: 'USR-DSF-002',
        credPassword: '••••••••',
        status: 'Active',
        plants: ['Americas Hub NJ Coldstore', 'West Coast Staging Hub']
      },
      {
        id: 'CMP-003',
        code: 'CME',
        shortName: 'CME',
        name: 'Coastal Marine Exports',
        joiningYear: 2018,
        legalName: 'Coastal Marine Exports Pte. Ltd.',
        cin: 'UEN-201829104K',
        taxId: 'SG-GST-M90382910',
        eiaNumber: 'SFA-SG-2024-099',
        fdaNumber: 'FDA-AP-88402',
        bapNumber: 'BAP-P-5510',
        country: 'Singapore',
        currency: 'INR (₹)',
        timezone: 'Asia/Singapore (SGT)',
        dateFormat: 'YYYY-MM-DD',
        contactEmail: 'apac.trade@coastalmarine.sg',
        contactPhone: '+65 6789 0123',
        address: 'Marina Bay Financial Centre Tower 1, Singapore 018981',
        dbHost: '',
        dbName: '',
        dbUser: '',
        dbPass: '',
        department: 'Cold Storage & Logistics',
        accessType: 'Operational Administrator',
        credUsername: 'cme_admin',
        designation: 'Managing Director',
        userId: 'USR-CME-003',
        credPassword: '••••••••',
        status: 'Active',
        plants: ['Singapore Trade Hub', 'Jurong Cold Chain Depot']
      }
    ],

    // 2. ERP Users
    users: [
      { id: 'ADM-001', name: 'Dr. Y.S. Prasad', username: 'dfl_ysprasad', email: 'ys.prasad@devifisheries.com', phone: '+91 98480 12345', companyId: 'CMP-001', companyName: 'Devi Fisheries Limited', department: 'Executive Management', designation: 'Managing Director', accessType: 'Full Access', role: 'System Administrator', plantAccess: ['All Plants'], status: 'Active', mfa: 'Enabled', lastLogin: 'Today, 09:45 AM' },
      { id: 'PRC-002', name: 'P. Rama Krishna', username: 'dfl_ramakrishna', email: 'ramakrishna.p@devifisheries.com', phone: '+91 98481 67890', companyId: 'CMP-001', companyName: 'Devi Fisheries Limited', department: 'Procurement', designation: 'Procurement Officer', accessType: 'Admin / Manager', role: 'Procurement Officer', plantAccess: ['Unit-1 VSP (Harbour)', 'Unit-2 Singarayakonda'], status: 'Active', mfa: 'Enabled', lastLogin: 'Today, 08:30 AM' },
      { id: 'QCO-003', name: 'K. Venkateswara Rao', username: 'dfl_venkatesh', email: 'venkatesh.qc@devifisheries.com', phone: '+91 98482 11223', companyId: 'CMP-001', companyName: 'Devi Fisheries Limited', department: 'Quality Assurance', designation: 'Quality Lab Inspector', accessType: 'Standard Access', role: 'Quality Lab Inspector', plantAccess: ['Unit-1 VSP (Harbour)', 'Unit-3 Kakinada Port'], status: 'Active', mfa: 'Enabled', lastLogin: 'Yesterday, 05:15 PM' },
      { id: 'PRD-004', name: 'Ch. Srinivasa Raju', username: 'dfl_srinivas', email: 'srinivas.prod@devifisheries.com', phone: '+91 98483 33445', companyId: 'CMP-001', companyName: 'Devi Fisheries Limited', department: 'Processing Floor', designation: 'Production Floor Manager', accessType: 'Standard Access', role: 'Production Floor Manager', plantAccess: ['Unit-1 VSP (Harbour)'], status: 'Active', mfa: 'Enabled', lastLogin: 'Yesterday, 04:10 PM' },
      { id: 'CST-005', name: 'D. Rambabu', username: 'dfl_rambabu', email: 'rambabu.cs@devifisheries.com', phone: '+91 98484 55667', companyId: 'CMP-001', companyName: 'Devi Fisheries Limited', department: 'Cold Storage', designation: 'Coldstore Keeper', accessType: 'Standard Access', role: 'Coldstore Keeper', plantAccess: ['Unit-1 VSP (Harbour)'], status: 'Active', mfa: 'Disabled', lastLogin: '07 Oct 2026' },
      { id: 'SLS-006', name: 'M. Sitarama Raju', username: 'dfl_sitaram', email: 'sitaram.sales@devifisheries.com', phone: '+91 98485 77889', companyId: 'CMP-001', companyName: 'Devi Fisheries Limited', department: 'Sales & Exports', designation: 'Sales & Exports Manager', accessType: 'Admin / Manager', role: 'Sales & Exports Manager', plantAccess: ['All Plants'], status: 'Active', mfa: 'Enabled', lastLogin: 'Today, 10:15 AM' },
      { id: 'US-007', name: 'Michael Vance', username: 'dsa_mvance', email: 'm.vance@deviseafoods.com', phone: '+1 732 555 4410', companyId: 'CMP-002', companyName: 'Devi Sea Foods Americas', department: 'Overseas Operations', designation: 'Americas Regional Director', accessType: 'Full Access', role: 'Sales & Exports Manager', plantAccess: ['Americas Hub NJ Coldstore'], status: 'Active', mfa: 'Enabled', lastLogin: 'Today, 07:15 PM' },
      { id: 'SG-008', name: 'Kelvin Tan', username: 'cme_ktan', email: 'kelvin.tan@coastalmarine.sg', phone: '+65 9123 4567', companyId: 'CMP-003', companyName: 'Coastal Marine Exports', department: 'Logistics', designation: 'Singapore Hub Operations Head', accessType: 'Standard Access', role: 'Coldstore Keeper', plantAccess: ['Singapore Trade Hub'], status: 'Active', mfa: 'Enabled', lastLogin: '06 Oct 2026' }
    ],

    // 3. Roles
    roles: [
      { id: 'ROLE-ADMIN', name: 'System Administrator', department: 'Executive Management', description: 'Complete system control, plant provisioning, ERP schema governance, and audit management.', isProtected: true, usersCount: 1, status: 'Active', assignedMenus: ['*'], assignedSubmenus: [] },
      { id: 'ROLE-PROCUREMENT', name: 'Procurement Officer', department: 'Raw Material Procurement', description: 'Raw material arrival entry, gate weighment, border count checks, and farmer billing.', isProtected: false, usersCount: 2, status: 'Active', assignedMenus: ['dashboard', 'procurement', 'inventory'], assignedSubmenus: [] },
      { id: 'ROLE-QC', name: 'Quality Lab Inspector', department: 'Quality Assurance & Lab', description: 'Antibiotic residue testing (ELISA/LC-MS), organoleptic grading, and lot clearance.', isProtected: false, usersCount: 2, status: 'Active', assignedMenus: ['dashboard', 'quality'], assignedSubmenus: [] },
      { id: 'ROLE-PRODUCTION', name: 'Production Floor Manager', department: 'Production & Processing Floor', description: 'De-heading, peeling, soaking, batch freezing, floor balance, and yields.', isProtected: false, usersCount: 2, status: 'Active', assignedMenus: ['dashboard', 'production', 'inventory'], assignedSubmenus: [] },
      { id: 'ROLE-COLDSTORE', name: 'Coldstore Keeper', department: 'Cold Storage & Logistics', description: 'Pallet inward intake, chamber storage allocation, physical count adjustments, and container dispatch.', isProtected: false, usersCount: 2, status: 'Active', assignedMenus: ['dashboard', 'coldstore', 'inventory'], assignedSubmenus: [] },
      { id: 'ROLE-SALES', name: 'Sales & Exports Manager', department: 'Sales, Exports & Documentation', description: 'Overseas buyer contracts, shipping docs, anti-dumping audit compliance, and bank negotiations.', isProtected: false, usersCount: 2, status: 'Active', assignedMenus: ['dashboard', 'buyers', 'orders', 'sales'], assignedSubmenus: [] }
    ],

    // 4. Authentic ERP Modules
    modulesConfig: DEFAULT_MODULES_CONFIG,

    // 5. Authentic ERP Submenus & Tabs
    submenusConfig: DEFAULT_SUBMENUS_CONFIG,
    tabsConfig: extractInitialTabsConfig(DEFAULT_SUBMENUS_CONFIG, DEFAULT_MODULES_CONFIG),

    // 6. Dynamic ERP Forms
    formsConfig: {
      'rm-purchase-inward': {
        name: 'Raw Material Purchase Inward Form',
        entity: 'Raw Material Lot',
        sections: [
          {
            id: 'sec-lot-info',
            title: 'Harvest & Supplier Details',
            fields: [
              { id: 'f_lot_no', key: 'lotNumber', label: 'Lot Number', type: 'text', placeholder: 'e.g. LOT-2026-00142', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'f_arrival_date', key: 'arrivalDate', label: 'Arrival Date', type: 'date', required: true, width: 'col-span-1', defaultValue: '2026-10-09' },
              { id: 'f_supplier', key: 'supplierId', label: 'Aquaculture Supplier / Farmer', type: 'dropdown', options: ['Godavari Coastal Aqua Farms (BVM)', 'Krishna Delta Prawn Harvesters (MCN)', 'Sagar Marine Hatcheries (KKD)', 'East Coast Aqua Society (VSP)'], required: true, width: 'col-span-1', defaultValue: 'Godavari Coastal Aqua Farms (BVM)' },
              { id: 'f_pond_location', key: 'pondLocation', label: 'Harvest Pond / Center', type: 'text', placeholder: 'e.g. Pond #4, Bhimavaram', required: true, width: 'col-span-1', defaultValue: '' }
            ]
          },
          {
            id: 'sec-species-weighment',
            title: 'Species, Grade & Weightment',
            fields: [
              { id: 'f_species', key: 'species', label: 'Species', type: 'dropdown', options: ['Vannamei Shrimp (Litopenaeus vannamei)', 'Black Tiger Shrimp (Penaeus monodon)', 'Asian Seabass (Barramundi)', 'Tilapia'], required: true, width: 'col-span-1', defaultValue: 'Vannamei Shrimp (Litopenaeus vannamei)' },
              { id: 'f_variety', key: 'variety', label: 'Initial Variety Condition', type: 'dropdown', options: ['Head-On Shell-On (HOSO)', 'Head-Less Shell-On (HLSO)', 'Whole Round Live'], required: true, width: 'col-span-1', defaultValue: 'Head-On Shell-On (HOSO)' },
              { id: 'f_gross_weight', key: 'grossWeightKg', label: 'Site Gross Weight (Kg)', type: 'number', placeholder: 'e.g. 5200', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'f_crate_tare', key: 'tareWeightKg', label: 'Total Crate Tare Weight (Kg)', type: 'number', placeholder: 'e.g. 350', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'f_border_count', key: 'sampleCountPcs', label: 'Border Count (Pcs/Kg)', type: 'number', placeholder: 'e.g. 42', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'f_temperature', key: 'intakeTempC', label: 'Arrival Temperature (°C)', type: 'number', placeholder: 'e.g. 2.5', required: true, width: 'col-span-1', defaultValue: '' }
            ]
          },
          {
            id: 'sec-logistics-cert',
            title: 'Vehicle & Statutory Traceability',
            fields: [
              { id: 'f_vehicle', key: 'vehicleNumber', label: 'Insulated Truck Vehicle No.', type: 'text', placeholder: 'e.g. AP 31 TT 4452', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'f_driver_name', key: 'driverName', label: 'Driver Name & Contact', type: 'text', placeholder: 'e.g. M. Appa Rao (+91 94401 22334)', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'f_caa_slip', key: 'caaCertificateUpload', label: 'CAA License / Passbook Upload', type: 'file', required: true, width: 'col-span-2', helpText: 'Max file size 5MB. Formats: PDF, JPG, PNG', defaultValue: '' }
            ]
          }
        ]
      },
      'proforma-order': {
        name: 'Proforma Invoice / Order Entry',
        entity: 'Proforma Order',
        sections: [
          {
            id: 'sec-pi-head',
            title: 'Order Header & Buyer',
            fields: [
              { id: 'pi_no', key: 'piNumber', label: 'Proforma Invoice No.', type: 'text', placeholder: 'e.g. PI-2026-EXP-1102', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'pi_date', key: 'piDate', label: 'Order Date', type: 'date', required: true, width: 'col-span-1', defaultValue: '2026-10-09' },
              { id: 'pi_buyer', key: 'buyerName', label: 'Overseas Buyer', type: 'dropdown', options: ['Sysco Corporation (USA)', 'Red Chamber Co. (USA)', 'Nippon Suisan Kaisha (Japan)', 'Carrefour Global Sourcing (EU)'], required: true, width: 'col-span-1', defaultValue: 'Sysco Corporation (USA)' },
              { id: 'pi_dest_port', key: 'destinationPort', label: 'Destination Port of Discharge', type: 'text', placeholder: 'e.g. Los Angeles (USLAX)', required: true, width: 'col-span-1', defaultValue: 'Los Angeles (USLAX)' }
            ]
          },
          {
            id: 'sec-pi-pricing',
            title: 'Packing Style & Price Book',
            fields: [
              { id: 'pi_variety', key: 'packedVariety', label: 'Finished Variety', type: 'dropdown', options: ['Head-Less Shell-On (HLSO) Block Frozen', 'Easy Peel (EZP) IQF', 'Peeled & Deveined Tail-On (PDTO) IQF', 'Butterfly Cut (BF) IQF'], required: true, width: 'col-span-1', defaultValue: 'Head-Less Shell-On (HLSO) Block Frozen' },
              { id: 'pi_grade', key: 'gradeCount', label: 'Contract Grade Count', type: 'dropdown', options: ['16/20 pcs/lb', '21/25 pcs/lb', '26/30 pcs/lb', '31/40 pcs/lb', '41/50 pcs/lb'], required: true, width: 'col-span-1', defaultValue: '26/30 pcs/lb' },
              { id: 'pi_qty_cartons', key: 'totalCartons', label: 'Quantity (Master Cartons)', type: 'number', placeholder: 'e.g. 1500', required: true, width: 'col-span-1', defaultValue: '1500' },
              { id: 'pi_price_usd', key: 'unitPriceUsd', label: 'Contract Price (INR / Kg)', type: 'number', placeholder: 'e.g. 720.00', required: true, width: 'col-span-1', defaultValue: '720.00' }
            ]
          }
        ]
      },
      'qc-lab-test': {
        name: 'QC Antibiotic & Lab Test Slip',
        entity: 'Quality Test Slip',
        sections: [
          {
            id: 'sec-qc-params',
            title: 'Antibiotic Residue Screening',
            fields: [
              { id: 'q_lot', key: 'targetLot', label: 'Target Raw Material Lot', type: 'text', placeholder: 'e.g. LOT-2026-00142', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'q_sample_code', key: 'sampleCode', label: 'Blind Sample Lab Code', type: 'text', placeholder: 'e.g. LAB-2026-SMP-882', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'q_chloramphenicol', key: 'chloramphenicolResult', label: 'Chloramphenicol (CAP)', type: 'radio', options: ['Negative (< 0.1 ppb)', 'Positive (Reject)'], required: true, width: 'col-span-1', defaultValue: 'Negative (< 0.1 ppb)' },
              { id: 'q_nitrofurans', key: 'nitrofuranResult', label: 'Nitrofuran Metabolites (AOZ/AMOZ)', type: 'radio', options: ['Negative (< 0.5 ppb)', 'Positive (Reject)'], required: true, width: 'col-span-1', defaultValue: 'Negative (< 0.5 ppb)' },
              { id: 'q_status', key: 'clearanceStatus', label: 'Lab Clearance Verdict', type: 'dropdown', options: ['CLEARED FOR EXPORT PROCESSING', 'REJECTED - ANTIBIOTIC CONTAMINATION', 'HOLD FOR RETEST'], required: true, width: 'col-span-2', defaultValue: 'CLEARED FOR EXPORT PROCESSING' }
            ]
          }
        ]
      },
      'production-batch': {
        name: 'Production Batch & Freezing Log',
        entity: 'Production Batch',
        sections: [
          {
            id: 'sec-prod-info',
            title: 'Batch & Freezer Parameters',
            fields: [
              { id: 'pr_batch_no', key: 'batchNo', label: 'Batch Run Number', type: 'text', placeholder: 'e.g. PRD-2026-B-089', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'pr_line', key: 'processingLine', label: 'Processing Line / Unit', type: 'dropdown', options: ['Line #1 IQF Freezing (Harbour)', 'Line #2 Plate Freezer (Harbour)', 'Line #3 Contact Freezing (Singarayakonda)', 'Line #4 Tunnel Freezer (Kakinada)'], required: true, width: 'col-span-1', defaultValue: 'Line #1 IQF Freezing (Harbour)' },
              { id: 'pr_in_weight', key: 'inputHeadonKg', label: 'Input Head-on Weight (Kg)', type: 'number', placeholder: 'e.g. 4500', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'pr_out_weight', key: 'finishedFrozenKg', label: 'Finished Frozen Weight (Kg)', type: 'number', placeholder: 'e.g. 3180', required: true, width: 'col-span-1', defaultValue: '' },
              { id: 'pr_glaze', key: 'glazePercent', label: 'Glaze Percentage (%)', type: 'number', placeholder: 'e.g. 10.0', required: true, width: 'col-span-1', defaultValue: '10' }
            ]
          }
        ]
      }
    },

    // 7. Audit & Logs
    auditLogs: [
      { id: 'AUD-8910', timestamp: 'Today, 09:12 AM', user: 'Dr. Y.S. Prasad', role: 'System Administrator', company: 'Devi Fisheries Limited', entity: 'Form Builder', action: 'Modified Schema', diff: 'Added mandatory CAA license document upload rule to RM Inward form.', status: 'Published' },
      { id: 'AUD-8909', timestamp: 'Today, 08:45 AM', user: 'Dr. Y.S. Prasad', role: 'System Administrator', company: 'Devi Fisheries Limited', entity: 'User Directory', action: 'Created User Account', diff: 'Registered Michael Vance (US-007) as Sales Manager for Devi Sea Foods Americas.', status: 'Published' },
      { id: 'AUD-8908', timestamp: 'Yesterday, 04:30 PM', user: 'Dr. Y.S. Prasad', role: 'System Administrator', company: 'Devi Fisheries Limited', entity: 'Module Studio', action: 'Updated Sidebar Order', diff: 'Arranged Raw Material Purchase as #1 and Quality Control as #3.', status: 'Published' },
      { id: 'AUD-8907', timestamp: '07 Oct 2026, 11:20 AM', user: 'Dr. Y.S. Prasad', role: 'System Administrator', company: 'Coastal Marine Exports', entity: 'Company Setup', action: 'Provisioned Entity', diff: 'Configured Singapore cold chain hub and SGD trade currency.', status: 'Published' },
      { id: 'AUD-8906', timestamp: '06 Oct 2026, 02:15 PM', user: 'Dr. Y.S. Prasad', role: 'System Administrator', company: 'Devi Fisheries Limited', entity: 'Roles & Permissions', action: 'Updated Matrix', diff: 'Granted Approval rights for Quality Lab Inspector on antibiotic clearance slips.', status: 'Published' }
    ],

    versionHistory: [
      { version: 'v2.4.1', date: '09 Oct 2026, 09:12 AM', publishedBy: 'Dr. Y.S. Prasad', note: 'Configured mandatory CAA farmer upload and updated line freezing parameters.', isCurrent: true },
      { version: 'v2.4.0', date: '07 Oct 2026, 05:00 PM', publishedBy: 'Dr. Y.S. Prasad', note: 'Provisioned Singapore trade hub and linked Coldstore inventory.', isCurrent: false },
      { version: 'v2.3.9', date: '04 Oct 2026, 10:30 AM', publishedBy: 'Dr. Y.S. Prasad', note: 'Optimized Antibiotic LC-MS screening workflow schema.', isCurrent: false },
      { version: 'v2.3.0', date: '01 Oct 2026, 09:00 AM', publishedBy: 'Dr. Y.S. Prasad', note: 'Seafood Processing & Coldstore ERP master configuration baseline.', isCurrent: false }
    ],

    // 8. Seafood ERP Master Data Studio
    masters: SEAFOOD_MASTERS,
    selectedMasterId: 'exporter',
    selectedMasterCategory: 'All',
    masterSearchQuery: ''
  };
}

export const SEAFOOD_MASTERS = [
  // 1. General & Logistics
  { id: 'exporter', label: 'Exporter', category: 'Logistics', count: 3, records: [
    { code: 'EXP-101', name: 'Devi Fisheries Limited - VSEZ Unit', details: 'EIA 1018, FDA 19827341234, Visakhapatnam', status: 'Active' },
    { code: 'EXP-102', name: 'Devi Marine Exports Private Ltd', details: 'EIA 1067, Nellore Value Addition Unit', status: 'Active' },
    { code: 'EXP-103', name: 'Devi Aquatech (Exports Div)', details: 'Singarayakonda, Prakasam Dist', status: 'Active' }
  ]},
  { id: 'processor', label: 'Processor', category: 'Processing', count: 3, records: [
    { code: 'PRC-01', name: 'Devi Plant 1 - Autonagar Block B', details: 'Blast Freezer 40 MT/Day, IQF Line 1', status: 'Active' },
    { code: 'PRC-02', name: 'Devi Plant 2 - VSEZ Special Economic Zone', details: 'Plate Freezers 25 MT/Day, Cooking Line', status: 'Active' },
    { code: 'PRC-03', name: 'Devi Plant 3 - Kakinada Port Facility', details: 'Receiving Bay & Grading Station', status: 'Active' }
  ]},
  { id: 'payment-terms', label: 'Payment Terms', category: 'Commercial', count: 4, records: [
    { code: 'PT-01', name: '100% LC at Sight (Irrevocable)', details: 'Confirmed Letter of Credit through Prime Bank', status: 'Active' },
    { code: 'PT-02', name: '30 Days CAD (Cash Against Documents)', details: 'Bank-to-bank collection via SBI Vizag', status: 'Active' },
    { code: 'PT-03', name: '20% Advance, 80% Against BL Copy', details: 'Wire TT within 5 days of bill of lading', status: 'Active' },
    { code: 'PT-04', name: '60 Days DA (Documents Against Acceptance)', details: 'Subject to credit insurance approval', status: 'Active' }
  ]},
  { id: 'cha', label: 'CHA (Customs Logistics)', category: 'Logistics', count: 3, records: [
    { code: 'CHA-01', name: 'Seahorse Shipping Agencies Pvt Ltd', details: 'Vizag Port & Krishnapatnam Port CHA Lic #24/V', status: 'Active' },
    { code: 'CHA-02', name: 'Transworld Logistics India', details: 'Chennai & JNPT Port Clearing Broker #11/CH', status: 'Active' },
    { code: 'CHA-03', name: 'J.M. Baxi & Co', details: 'East Coast Ports Reefer Specialist', status: 'Active' }
  ]},
  { id: 'liners-list', label: 'Liners List', category: 'Logistics', count: 5, records: [
    { code: 'LNR-01', name: 'Maersk Line (A.P. Moller)', details: 'Reefer StarCare Controlled Atmosphere', status: 'Active' },
    { code: 'LNR-02', name: 'MSC Mediterranean Shipping Co', details: 'Direct Service to New York & Rotterdam', status: 'Active' },
    { code: 'LNR-03', name: 'CMA CGM India Reefer Service', details: 'Weekly Vizag feeder service', status: 'Active' },
    { code: 'LNR-04', name: 'ONE (Ocean Network Express)', details: 'Transpacific Eastbound service to US West Coast', status: 'Active' },
    { code: 'LNR-05', name: 'Hapag-Lloyd AG', details: 'North America Gulf Ports service', status: 'Active' }
  ]},
  { id: 'description-list', label: 'Description List', category: 'Processing', count: 4, records: [
    { code: 'DSC-01', name: 'Frozen Raw IQF Vannamei HLSO Easy Peel', details: 'Headless Shell-On, Deveined, Glazed 10%', status: 'Active' },
    { code: 'DSC-02', name: 'Frozen Cooked Peeled & Deveined Tail-On', details: 'Cooked PDTO, Sodium Tripolyphosphate Free', status: 'Active' },
    { code: 'DSC-03', name: 'Frozen Raw Head-On Shell-On (HOSO)', details: 'Semi-IQF Blast Frozen 2 kg Master Carton', status: 'Active' },
    { code: 'DSC-04', name: 'Frozen Raw Peeled & Undeveined (PUD)', details: 'Block Frozen 6 x 1.8 kg', status: 'Active' }
  ]},
  { id: 'ports-list', label: 'Ports List', category: 'Logistics', count: 5, records: [
    { code: 'INVTZ1', name: 'Visakhapatnam Port (Loading)', details: 'East Coast India • Cold Chain Terminal', status: 'Active' },
    { code: 'INMAA1', name: 'Chennai Port (Loading)', details: 'South India Gateway Container Terminal', status: 'Active' },
    { code: 'USLAX', name: 'Port of Los Angeles (Discharge)', details: 'United States • Pier 400 Reefer Berth', status: 'Active' },
    { code: 'USNYC', name: 'Port of New York / New Jersey (Discharge)', details: 'United States • Maher Terminal', status: 'Active' },
    { code: 'NLRTM', name: 'Port of Rotterdam (Discharge)', details: 'Netherlands • EU Seafood Border Inspection Post', status: 'Active' }
  ]},
  { id: 'exchange-rates', label: 'Exchange Rates', category: 'Commercial', count: 4, records: [
    { code: 'INR/USD', name: 'US Dollar to INR', details: 'Spot Rate: ₹86.42 • Custom Valuation: ₹86.25', status: 'Active' },
    { code: 'EUR/INR', name: 'Euro to INR', details: 'Spot Rate: ₹93.80 • Custom Valuation: ₹93.50', status: 'Active' },
    { code: 'GBP/INR', name: 'British Pound to INR', details: 'Spot Rate: ₹109.15 • Custom Valuation: ₹108.90', status: 'Active' },
    { code: 'JPY/INR', name: 'Japanese Yen (per 100) to INR', details: 'Spot Rate: ₹58.20 • Custom Valuation: ₹57.90', status: 'Active' }
  ]},
  { id: 'banks-list', label: 'Banks List', category: 'Commercial', count: 3, records: [
    { code: 'BNK-01', name: 'State Bank of India (Overseas Branch)', details: 'IFSC: SBIN0004123, Account: 3091823901, Vizag', status: 'Active' },
    { code: 'BNK-02', name: 'HDFC Bank Ltd (Corporate Banking)', details: 'IFSC: HDFC0000088, Vizag Waltair Uplands', status: 'Active' },
    { code: 'BNK-03', name: 'ICICI Bank Ltd (Trade Finance)', details: 'IFSC: ICIC0000102, Export Credit Account', status: 'Active' }
  ]},
  { id: 'store-delivery-details', label: 'Store Delivery Details', category: 'Operations', count: 3, records: [
    { code: 'SDD-01', name: 'VSEZ Central Chemical Store', details: 'Temperature controlled 20°C, Hazardous license', status: 'Active' },
    { code: 'SDD-02', name: 'Plant 1 Packing Material Store', details: 'Carton and poly-bag inventory warehouse', status: 'Active' },
    { code: 'SDD-03', name: 'Plant 2 Coldstore Receiving Dock', details: 'Palletized ante-room at -5°C', status: 'Active' }
  ]},
  { id: 'graders-list', label: 'Graders List', category: 'Processing', count: 3, records: [
    { code: 'GRD-01', name: 'Sort-Rite High Speed Grader Line 1', details: '5 Channel Roller Grader, 1,200 kg/hr capacity', status: 'Active' },
    { code: 'GRD-02', name: 'Key Technology Optical Camera Sizer', details: 'Defect sorting & electronic weight grading', status: 'Active' },
    { code: 'GRD-03', name: 'Manual Table Sizing Line 3', details: 'Certified graders, 12 inspection stations', status: 'Active' }
  ]},
  { id: 'agents-list', label: 'Agents List', category: 'Commercial', count: 3, records: [
    { code: 'AGT-01', name: 'Pacific Seafood Brokerage Inc (USA)', details: 'Contact: Mark Davis • Commission: 1.5%', status: 'Active' },
    { code: 'AGT-02', name: 'EuroFish International BV (Europe)', details: 'Contact: Jan de Vries • Commission: 2.0%', status: 'Active' },
    { code: 'AGT-03', name: 'Tokyo Marine Foods Co (Japan)', details: 'Contact: K. Tanaka • Commission: 1.8%', status: 'Active' }
  ]},
  { id: 'financiers-list', label: 'Financiers List', category: 'Commercial', count: 3, records: [
    { code: 'FIN-01', name: 'Export-Import Bank of India (EXIM)', details: 'Pre-shipment credit & buyer credit line', status: 'Active' },
    { code: 'FIN-02', name: 'SBI Export Credit & Factoring', details: 'Post-shipment discounting facility', status: 'Active' },
    { code: 'FIN-03', name: 'Rabobank Agri-Finance Division', details: 'Sustainable aquaculture working capital', status: 'Active' }
  ]},
  { id: 'drivers-list', label: 'Drivers List', category: 'Logistics', count: 3, records: [
    { code: 'DRV-01', name: 'K. Appa Rao', details: 'License: AP31-2018-00912 • Phone: 9848123450', status: 'Active' },
    { code: 'DRV-02', name: 'M. Satyanarayana', details: 'License: AP37-2020-00441 • Phone: 9848234561', status: 'Active' },
    { code: 'DRV-03', name: 'P. Ramesh', details: 'License: AP16-2019-00778 • Phone: 9848345672', status: 'Active' }
  ]},
  { id: 'vehicle-list', label: 'Vehicle List', category: 'Logistics', count: 3, records: [
    { code: 'VEH-01', name: 'AP 31 TT 4492 (Insulated Reefer Truck)', details: 'Thermo King Unit -20°C, 12 MT payload', status: 'Active' },
    { code: 'VEH-02', name: 'AP 37 TE 9811 (Live Harvest Tanker)', details: 'Aerated harvest transport, 8 MT payload', status: 'Active' },
    { code: 'VEH-03', name: 'AP 16 TH 5521 (Insulated Van)', details: 'Carrier Neos Unit, 5 MT payload', status: 'Active' }
  ]},
  { id: 'yields', label: 'Yields Master', category: 'Processing', count: 3, records: [
    { code: 'YLD-01', name: 'HOSO to HLSO Yield Standard', details: 'Standard: 66.0% • Tolerance: ±1.2%', status: 'Active' },
    { code: 'YLD-02', name: 'HLSO to PD (Peeled & Deveined)', details: 'Standard: 82.5% • Tolerance: ±1.5%', status: 'Active' },
    { code: 'YLD-03', name: 'PD to Cooked PDTO (Tail-On)', details: 'Standard: 78.0% • Tolerance: ±1.0%', status: 'Active' }
  ]},
  { id: 'supervisor', label: 'Supervisor List', category: 'Operations', count: 3, records: [
    { code: 'SUP-01', name: 'V. Ramana', details: 'Floor Supervisor - Plant 1 Processing Bay', status: 'Active' },
    { code: 'SUP-02', name: 'B. Prasad', details: 'Coldstore Shift In-Charge - Autonagar', status: 'Active' },
    { code: 'SUP-03', name: 'K. Suresh', details: 'Harvest Receiving & Washing Station Lead', status: 'Active' }
  ]},
  { id: 'traceability', label: 'Traceability Master', category: 'Quality', count: 3, records: [
    { code: 'TRC-01', name: 'CAA Farm License & Pond QR Schema', details: 'MPEDA Geo-tagged coordinates mandatory', status: 'Active' },
    { code: 'TRC-02', name: 'Harvest Inward Batch Code Standard', details: 'Format: DFL-YYMMDD-FARMID-LOT', status: 'Active' },
    { code: 'TRC-03', name: 'GDST 1.2 Interoperability Key', details: 'Global Dialogue on Seafood Traceability compliance', status: 'Active' }
  ]},
  { id: 'lab-users-list', label: 'Lab Users List', category: 'Quality', count: 3, records: [
    { code: 'LAB-01', name: 'S. Venkat', details: 'Senior Chemist - ELISA Antibiotic Section', status: 'Active' },
    { code: 'LAB-02', name: 'Dr. G. Rajesh', details: 'Microbiologist - Pathogen & Water Testing', status: 'Active' },
    { code: 'LAB-03', name: 'P. Sunitha', details: 'QC Analyst - Sensory & Heavy Metals', status: 'Active' }
  ]},
  { id: 'hl-va-variety-list', label: 'HL VA Variety List', category: 'Processing', count: 4, records: [
    { code: 'VAR-01', name: 'Vannamei HLSO Easy-Peel (Raw)', details: 'Slit back cut, deep deveined, glazed', status: 'Active' },
    { code: 'VAR-02', name: 'Black Tiger (Monodon) HLSO Block', details: 'Natural farm harvest, blast frozen', status: 'Active' },
    { code: 'VAR-03', name: 'Vannamei PDTO Cooked IQF', details: 'Blanched steam cooked, tail intact', status: 'Active' },
    { code: 'VAR-04', name: 'Vannamei Butterfly Raw Skewers', details: 'Hand threaded wooden skewers 100g/pc', status: 'Active' }
  ]},
  { id: 'countrywise-address-list', label: 'Countrywise Address List', category: 'Commercial', count: 3, records: [
    { code: 'ADDR-US', name: 'United States Regional Office', details: 'Devi Sea Foods Americas, Edison, NJ 08837, USA', status: 'Active' },
    { code: 'ADDR-EU', name: 'European Union Import Liaison', details: 'WTC Schiphol Airport, Amsterdam, Netherlands', status: 'Active' },
    { code: 'ADDR-JP', name: 'Japan Trading Desk', details: 'Chuo-ku, Tsukiji District, Tokyo 104-0045, Japan', status: 'Active' }
  ]},
  { id: 'lab-analysis-list', label: 'Lab Analysis List', category: 'Quality', count: 4, records: [
    { code: 'ANA-01', name: 'Antibiotic Screening (Chloramphenicol / AOZ / AMOZ)', details: 'ELISA / LC-MS-MS screening • Limit: 0.3 ppb', status: 'Active' },
    { code: 'ANA-02', name: 'Microbiological Panel (Vibrio, Salmonella, E. Coli)', details: 'Bacteriological culture • Incubation: 24 hrs', status: 'Active' },
    { code: 'ANA-03', name: 'Heavy Metals (Lead, Cadmium, Mercury, Arsenic)', details: 'ICP-OES atomic emission spectrophotometry', status: 'Active' },
    { code: 'ANA-04', name: 'Chemical Additives (Sulfite / Moisture / Phosphates)', details: 'AOAC standard method titration', status: 'Active' }
  ]},
  { id: 'external-lab-names', label: 'External Lab Names', category: 'Quality', count: 3, records: [
    { code: 'ELAB-01', name: 'Vimta Labs Limited (Hyderabad)', details: 'NABL Accredited • LC-MS-MS Confirmation Lab', status: 'Active' },
    { code: 'ELAB-02', name: 'SGS India Private Limited (Chennai)', details: 'Export Consignment Pre-Shipment Inspection', status: 'Active' },
    { code: 'ELAB-03', name: 'MPEDA Quality Control Lab (Bhimavaram)', details: 'Official Pre-Harvest Testing Laboratory', status: 'Active' }
  ]},
  { id: 'tax-charges', label: 'Tax Charges', category: 'Commercial', count: 3, records: [
    { code: 'TAX-01', name: 'GST on Seafood Cold Storage (0%)', details: 'Exempted agricultural cold storage services', status: 'Active' },
    { code: 'TAX-02', name: 'TCS on Raw Material Purchase (0.1%)', details: 'Section 206C(1H) on payments exceeding ₹50 Lakhs', status: 'Active' },
    { code: 'TAX-03', name: 'RCM on Goods Transport Agency (5%)', details: 'Reverse charge mechanism on lorry freight', status: 'Active' }
  ]},
  { id: 'currency', label: 'Currency Master', category: 'Commercial', count: 4, records: [
    { code: 'INR', name: 'Indian Rupee (₹)', details: 'Base Operational & Accounting Currency', status: 'Active' },
    { code: 'USD', name: 'Indian Rupee (₹)', details: 'Primary Export Invoice Currency', status: 'Active' },
    { code: 'EUR', name: 'Euro (€)', details: 'European Union Contract Currency', status: 'Active' },
    { code: 'JPY', name: 'Japanese Yen (¥)', details: 'Far East Export Currency', status: 'Active' }
  ]},
  { id: 'vm-rates-2', label: 'VM Rates 2 (Purchase Rates)', category: 'Commercial', count: 4, records: [
    { code: 'VMR-16/20', name: 'Count 16/20 Head-On Baseline', details: 'Rate: ₹520 / kg • Tolerance: +₹10 / -₹15', status: 'Active' },
    { code: 'VMR-21/25', name: 'Count 21/25 Head-On Baseline', details: 'Rate: ₹445 / kg • Tolerance: +₹10 / -₹15', status: 'Active' },
    { code: 'VMR-31/40', name: 'Count 31/40 Head-On Baseline', details: 'Rate: ₹380 / kg • Tolerance: +₹10 / -₹15', status: 'Active' },
    { code: 'VMR-41/50', name: 'Count 41/50 Head-On Baseline', details: 'Rate: ₹325 / kg • Tolerance: +₹10 / -₹15', status: 'Active' }
  ]},
  { id: 'master-counts', label: 'Master Counts', category: 'Processing', count: 6, records: [
    { code: 'CNT-16/20', name: '16/20 pcs/lb', details: 'Piece weight: 22.7g - 28.3g', status: 'Active' },
    { code: 'CNT-21/25', name: '21/25 pcs/lb', details: 'Piece weight: 18.1g - 21.6g', status: 'Active' },
    { code: 'CNT-26/30', name: '26/30 pcs/lb', details: 'Piece weight: 15.1g - 17.5g', status: 'Active' },
    { code: 'CNT-31/40', name: '31/40 pcs/lb', details: 'Piece weight: 11.3g - 14.6g', status: 'Active' },
    { code: 'CNT-41/50', name: '41/50 pcs/lb', details: 'Piece weight: 9.1g - 11.1g', status: 'Active' },
    { code: 'CNT-51/60', name: '51/60 pcs/lb', details: 'Piece weight: 7.6g - 8.9g', status: 'Active' }
  ]},
  { id: 'chemicals-master', label: 'Chemicals Master', category: 'Quality', count: 3, records: [
    { code: 'CHM-01', name: 'Sodium Metabisulfite (SMBS Food Grade)', details: 'Anti-melanosis dip for Black Tiger / Vannamei', status: 'Active' },
    { code: 'CHM-02', name: 'Sodium Tripolyphosphate (STPP)', details: 'Moisture retention glazing agent (EU Compliant)', status: 'Active' },
    { code: 'CHM-03', name: 'Peracetic Acid (Food Contact Disinfectant)', details: 'Processing belt and crate sterilization 50 ppm', status: 'Active' }
  ]},
  { id: 'farms-list', label: 'Farms List', category: 'Aquaculture', count: 3, records: [
    { code: 'FRM-01', name: 'Devi Aquaculture Farm Unit 1 (Amalapuram)', details: 'CAA: CAA/2021/AP/0981, 24 Ponds, 28 Hectares', status: 'Active' },
    { code: 'FRM-02', name: 'Coastal Shrimp Farms Unit 2 (Bapatla)', details: 'CAA: CAA/2022/AP/1124, 32 Ponds, 40 Hectares', status: 'Active' },
    { code: 'FRM-03', name: 'Krishna Delta Aqua Cluster (Gudivada)', details: 'CAA: CAA/2020/AP/0644, 18 Ponds, 22 Hectares', status: 'Active' }
  ]},
  { id: 'certification-body-list', label: 'Certification Body List', category: 'Compliance', count: 4, records: [
    { code: 'CERT-01', name: 'Export Inspection Agency (EIA India)', details: 'EU Approval No: 1018, Ministry of Commerce', status: 'Active' },
    { code: 'CERT-02', name: 'US Food & Drug Administration (FDA)', details: 'Registration #19827341234, Bioterrorism Act', status: 'Active' },
    { code: 'CERT-03', name: 'Best Aquaculture Practices (BAP 4-Star)', details: 'Processing Plant, Hatchery, Feed Mill & Farms', status: 'Active' },
    { code: 'CERT-04', name: 'BRCGS Global Food Safety Standard', details: 'Grade AA Certified, Lloyd\'s Register Quality', status: 'Active' }
  ]},
  { id: 'hatchery-list', label: 'Hatchery List', category: 'Aquaculture', count: 2, records: [
    { code: 'HAT-01', name: 'Devi SPF Vannamei Hatchery (East Godavari)', details: 'CAA Lic #HAT-2019-041 • SPF Broodstock (SIS Florida)', status: 'Active' },
    { code: 'HAT-02', name: 'Visakha Coastal Aqua Hatchery Unit (Bheemili)', details: 'CAA Lic #HAT-2021-082 • Biosecure Post-Larvae PL-10', status: 'Active' }
  ]},
  { id: 'freight-rates', label: 'Freight Rates', category: 'Logistics', count: 3, records: [
    { code: 'FRT-01', name: 'Vizag to Los Angeles (40ft High Cube Reefer)', details: 'Maersk: ₹3,60,000 / Container • Transit: 28 Days', status: 'Active' },
    { code: 'FRT-02', name: 'Vizag to Rotterdam (40ft High Cube Reefer)', details: 'CMA CGM: ₹3,15,000 / Container • Transit: 24 Days', status: 'Active' },
    { code: 'FRT-03', name: 'Chennai to New York (40ft High Cube Reefer)', details: 'MSC: ₹3,85,000 / Container • Transit: 32 Days', status: 'Active' }
  ]},
  { id: 'departments-master', label: 'Departments Master', category: 'Operations', count: 5, records: [
    { code: 'DEP-01', name: 'Raw Material Procurement & Farm Liaison', details: 'Responsible for pond testing, grading and harvesting', status: 'Active' },
    { code: 'DEP-02', name: 'Quality Assurance & ELISA Lab Services', details: 'Responsible for antibiotic, micro and export QC', status: 'Active' },
    { code: 'DEP-03', name: 'Production Floor & Pre-Processing Lines', details: 'Peeling, cooking, freezing and carton packaging', status: 'Active' },
    { code: 'DEP-04', name: 'Coldstore Logistics & Reefer Operations', details: 'Sub-zero storage, temperature logs, gate loading', status: 'Active' },
    { code: 'DEP-05', name: 'International Sales & Export Documentation', details: 'Buyer contracts, shipping bills, bank collections', status: 'Active' }
  ]},
  { id: 'gst-master', label: 'GST Master', category: 'Commercial', count: 3, records: [
    { code: 'GST-00', name: 'Fresh Raw Shrimp Farm Harvest (0%)', details: 'HSN 03061720 • Nil Exempt Agricultural Goods', status: 'Active' },
    { code: 'GST-05', name: 'Frozen Raw Vannamei Shrimp (5%)', details: 'HSN 03061720 • Frozen Headless / Peeled Shrimp', status: 'Active' },
    { code: 'GST-12', name: 'Cooked & Value-Added Prepared Shrimp (12%)', details: 'HSN 16052100 • Ready to Eat / Breaded Shrimp', status: 'Active' }
  ]}
];

export const SetupView = {
  state: getInitialStudioState(),
  activeTab: 'company-setup',
  selectedRoleForMatrix: 'ROLE-PROCUREMENT',
  selectedModuleForSubmenuStudio: 'purchase',
  selectedFormForBuilder: 'rm-purchase-inward',
  moduleFilterTerm: '',
  submenuFilterTerm: '',

  saveState() {
    try {
      localStorage.setItem(STUDIO_STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Failed to save studio state', e);
    }
  },

  render(containerId, subPage = 'profile', activeHash = '#/setup/general/profile') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const clean = (activeHash || '').replace(/^#\/?/, '').replace(/^\/+/, '');
    const parts = clean.split('/');
    let subId = parts[1] || 'general';
    let tabId = parts[2] || '';

    // Compatibility mappings
    if (subId === 'client-master-setup' || subId === 'company-setup') {
      subId = 'client';
      tabId = 'clients';
    } else if (subId === 'user-management' || subId === 'users' || subId === 'user') {
      subId = 'client';
      tabId = 'users';
    } else if (subId === 'roles-permissions') {
      subId = 'client';
      tabId = 'manage-roles';
    } else if (subId === 'module-studio') {
      subId = 'application';
      tabId = 'modules';
    }

    // Route resolving for General, Master, and Setup
    if (parts[0] === 'general' && (!tabId || tabId === '')) {
      tabId = 'clients';
    } else if (parts[0] === 'master' && (!tabId || tabId === '')) {
      tabId = 'masters';
    }

    if (!tabId) {
      if (subId === 'general') tabId = 'clients';
      else if (subId === 'configuration') tabId = 'clients';
      else if (subId === 'master-data') tabId = 'masters';
      else if (subId === 'client') tabId = 'clients';
      else if (subId === 'application') tabId = 'modules';
      else {
        tabId = 'clients';
      }
    }

    this.activeSubmenu = subId;
    this.activeTab = tabId;

    container.innerHTML = `
      <div class="space-y-3">
        <!-- Horizontal Tab Bar (Rendered dynamically for active submenu) -->
        <div id="setup-tab-bar-container"></div>

        <!-- Tab Content -->
        <div id="setup-subpage-content"></div>
      </div>
    `;

    TabBar.render('setup-tab-bar-container', activeHash);
    const subContainer = document.getElementById('setup-subpage-content');
    if (subContainer) {
      const sk = typeof Skeleton !== 'undefined' ? Skeleton : (typeof window !== 'undefined' ? window.Skeleton : null);
      if (sk && typeof sk.renderTable === 'function') {
        subContainer.innerHTML = sk.renderTable(6, 6);
      }
      setTimeout(() => {
        this.renderTabContent(subContainer, tabId);
      }, 120);
    }
  },

  renderClientMasterStudio(container, tabId) {
    this.renderTabContent(container, tabId);
  },

  renderTabContent(container, tabId) {
    if (!container) return;
    switch (tabId) {
      // General Submenu Tabs: Clients, Users, Menus, Submenus, Audit History
      case 'clients':
      case 'company-setup':
        this.renderCompanySetupTab(container);
        break;

      case 'users':
      case 'user':
      case 'user-management':
        this.renderUserManagementTab(container);
        break;

      case 'roles':
        this.renderRolesTab(container);
        break;

            case 'tabs':
      case 'tabs-registry':
      case 'tabs-studio':
      case 'tab-management':
        window.location.hash = '#/general/configuration/menus';
        break;
      case 'menus':
      case 'modules':
      case 'module-studio':
        this.renderModuleStudioTab(container);
        break;

      case 'submenus':
      case 'submenu-tab-studio':
        this.renderModuleStudioTab(container);
        break;

      case 'audit-history':
      case 'audit-logs':
        this.renderAuditLogsTab(container);
        break;

      // User & Roles
      case 'user':
      case 'user-management':
        this.renderUserManagementTab(container);
        break;
      case 'roles':
        this.renderRolesTab(container);
        break;
      case 'manage-roles':
      case 'roles-permissions':
        this.renderRolesPermissionsTab(container);
        break;

      // Master Registries & Field Builder
      case 'masters':
        this.renderMastersTab(container);
        break;
      case 'field-form-builder':
        this.renderFieldFormBuilderTab(container);
        break;

      // Profile, Notification, Security
      case 'profile':
        this.renderProfileTab(container);
        break;
      case 'notification':
        this.renderNotificationTab(container);
        break;
      case 'security':
        this.renderSecurityTab(container);
        break;

      default:
        this.renderCompanySetupTab(container);
        break;
    }
  },

  // =========================================================================
  // GENERAL SUBMENU: PROFILE, NOTIFICATIONS, SECURITY
  // =========================================================================
  renderProfileTab(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Profile Header Card -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 flex flex-wrap items-center justify-between gap-4 shadow-none">
          <div class="flex items-center gap-3.5">
            <div class="w-14 h-14 rounded-full bg-[#00A4B7] text-white flex items-center justify-center font-bold text-lg ring-4 ring-[#E0F2FE]">
              YP
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-sm font-bold text-[#172B4D]">Dr. Y.S. Prasad</h3>
                <span class="lozenge lozenge-success text-[10px]">Super Admin</span>
                <span class="lozenge lozenge-default text-[10px] font-mono">DFL-EMP-001</span>
              </div>
              <div class="text-xs text-[#5E6C84] mt-0.5">Managing Director & System Administrator • Devi Fisheries Limited</div>
              <div class="text-[11px] text-[#5E6C84] flex items-center gap-3 mt-1">
                <span>📍 Plant 1 (EIA 1018) - Visakhapatnam</span>
                <span>✉️ ys.prasad@devifisheries.com</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button id="btn-change-avatar" class="px-3 py-1.5 border border-[#DFE1E6] hover:bg-[#FAFBFC] rounded-lg text-xs font-semibold text-[#42526E] cursor-pointer">
              Upload Photo
            </button>
            <button id="btn-save-profile" class="btn-primary px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer">
              Save Profile
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Personal & Professional Information -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-none">
            <div class="text-xs font-bold text-[#172B4D] border-b border-[#EBECF0] pb-2 mb-3">Personal & Contact Information</div>
            <div class="space-y-3 text-xs">
              <div class="grid grid-cols-2 gap-2.5">
                <div>
                  <label class="block font-semibold text-[#5E6C84] mb-0">First Name</label>
                  <input type="text" id="prof-fname" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D]" value="Y.S." />
                </div>
                <div>
                  <label class="block font-semibold text-[#5E6C84] mb-0">Last Name</label>
                  <input type="text" id="prof-lname" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D]" value="Prasad" />
                </div>
              </div>
              <div>
                <label class="block font-semibold text-[#5E6C84] mb-0">Work Email</label>
                <input type="email" id="prof-email" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D]" value="ys.prasad@devifisheries.com" />
              </div>
              <div class="grid grid-cols-2 gap-2.5">
                <div>
                  <label class="block font-semibold text-[#5E6C84] mb-0">Phone Number</label>
                  <input type="text" id="prof-phone" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D]" value="+91 891 2788900" />
                </div>
                <div>
                  <label class="block font-semibold text-[#5E6C84] mb-0">Mobile / WhatsApp</label>
                  <input type="text" id="prof-mobile" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D]" value="+91 98480 12345" />
                </div>
              </div>
              <div>
                <label class="block font-semibold text-[#5E6C84] mb-0">Designation</label>
                <input type="text" id="prof-designation" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D]" value="Managing Director & System Administrator" />
              </div>
            </div>
          </div>

          <!-- Localization & Security Preferences -->
          <div class="space-y-4">
            <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-none">
              <div class="text-xs font-bold text-[#172B4D] border-b border-[#EBECF0] pb-2 mb-3">Regional & Language Settings</div>
              <div class="space-y-3 text-xs">
                <div class="grid grid-cols-2 gap-2.5">
                  <div>
                    <label class="block font-semibold text-[#5E6C84] mb-0">Language</label>
                    <select class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D] bg-white">
                      <option selected>English (India)</option>
                      <option>Telugu</option>
                      <option>Hindi</option>
                    </select>
                  </div>
                  <div>
                    <label class="block font-semibold text-[#5E6C84] mb-0">Timezone</label>
                    <select class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D] bg-white">
                      <option selected>(GMT+05:30) Asia/Kolkata (IST)</option>
                      <option>(GMT-05:00) Eastern Time (US)</option>
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-2.5">
                  <div>
                    <label class="block font-semibold text-[#5E6C84] mb-0">Date Format</label>
                    <select class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D] bg-white">
                      <option selected>DD-MM-YYYY (e.g. 09-10-2026)</option>
                      <option>YYYY-MM-DD</option>
                      <option>DD/MM/YYYY</option>
                    </select>
                  </div>
                  <div>
                    <label class="block font-semibold text-[#5E6C84] mb-0">Currency Display</label>
                    <select class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D] bg-white">
                      <option selected>INR (₹)</option>
                      <option>INR (₹) Only</option>
                      <option>INR (₹) Only</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!-- Password Card -->
            <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-none">
              <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2 mb-3">
                <span class="text-xs font-bold text-[#172B4D]">Password & Authentication</span>
                <span class="text-[11px] text-[#5E6C84]">Changed 15 days ago</span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-xs font-semibold text-[#172B4D]">Login Password</div>
                  <div class="text-[11px] text-[#5E6C84]">Protected with strong password policy</div>
                </div>
                <button id="btn-modal-change-pass" class="px-3 py-1.5 border border-[#DFE1E6] hover:bg-[#FAFBFC] rounded-lg text-xs font-semibold text-[#00A4B7] cursor-pointer">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-save-profile')?.addEventListener('click', () => {
      Toast.show('User profile preferences updated successfully', 'success', 'Profile Saved');
    });

    document.getElementById('btn-change-avatar')?.addEventListener('click', () => {
      Toast.show('Photo upload dialog opened', 'info');
    });

    document.getElementById('btn-modal-change-pass')?.addEventListener('click', () => {
      Modal.open({
        title: 'Change Account Password',
        content: `
          <div class="space-y-3 text-xs">
            <div>
              <label class="block font-semibold text-[#5E6C84] mb-0">Current Password</label>
              <input type="password" id="curr-pwd" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg" placeholder="••••••••" />
            </div>
            <div>
              <label class="block font-semibold text-[#5E6C84] mb-0">New Password</label>
              <input type="password" id="new-pwd" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg" placeholder="Minimum 8 characters" />
            </div>
            <div>
              <label class="block font-semibold text-[#5E6C84] mb-0">Confirm New Password</label>
              <input type="password" id="conf-pwd" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg" placeholder="Repeat new password" />
            </div>
          </div>
        `,
        footerButtons: [
          { label: 'Cancel', type: 'secondary', onClick: () => Modal.close() },
          { label: 'Update Password', type: 'primary', onClick: () => {
            Modal.close();
            Toast.show('Your account password has been updated', 'success', 'Password Updated');
          }}
        ]
      });
    });
  },

  renderNotificationTab(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Notification Channels -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-none">
          <div class="text-xs font-bold text-[#172B4D] border-b border-[#EBECF0] pb-2 mb-3">Delivery Channels</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="p-3 border border-[#DFE1E6] rounded-xl flex items-center justify-between">
              <div>
                <div class="text-xs font-bold text-[#172B4D]">Email Notifications</div>
                <div class="text-[11px] text-[#5E6C84]">Receive transaction approvals, audit alerts & daily reports</div>
              </div>
              <input type="checkbox" checked class="w-4 h-4 text-[#00A4B7] rounded cursor-pointer" />
            </div>

            <div class="p-3 border border-[#DFE1E6] rounded-xl flex items-center justify-between">
              <div>
                <div class="text-xs font-bold text-[#172B4D]">WhatsApp & SMS Alerts</div>
                <div class="text-[11px] text-[#5E6C84]">Instant alerts for container gate-out & harvest gate pass</div>
              </div>
              <input type="checkbox" checked class="w-4 h-4 text-[#00A4B7] rounded cursor-pointer" />
            </div>

            <div class="p-3 border border-[#DFE1E6] rounded-xl flex items-center justify-between">
              <div>
                <div class="text-xs font-bold text-[#172B4D]">In-App Sound Alerts</div>
                <div class="text-[11px] text-[#5E6C84]">Chime tone when new raw material arrival reaches receiving bay</div>
              </div>
              <input type="checkbox" checked class="w-4 h-4 text-[#00A4B7] rounded cursor-pointer" />
            </div>

            <div class="p-3 border border-[#DFE1E6] rounded-xl flex items-center justify-between">
              <div>
                <div class="text-xs font-bold text-[#172B4D]">Morning Briefing Digest</div>
                <div class="text-[11px] text-[#5E6C84]">Automated 08:00 AM summary of coldstore stock & yesterday's yields</div>
              </div>
              <input type="checkbox" checked class="w-4 h-4 text-[#00A4B7] rounded cursor-pointer" />
            </div>
          </div>
        </div>

        <!-- Workflow Notification Triggers -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-none">
          <div class="text-xs font-bold text-[#172B4D] border-b border-[#EBECF0] pb-2 mb-3">Seafood ERP Workflow Triggers</div>
          <div class="space-y-2 text-xs">
            <label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#FAFBFC] cursor-pointer">
              <div>
                <span class="font-bold text-[#172B4D]">Raw Material Procurement & Inward Gate Pass</span>
                <span class="block text-[11px] text-[#5E6C84]">Alert when harvest lorry reaches plant gate or net weight is finalized</span>
              </div>
              <input type="checkbox" checked class="w-4 h-4 text-[#00A4B7] rounded cursor-pointer" />
            </label>

            <label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#FAFBFC] cursor-pointer border-t border-[#F4F5F7]">
              <div>
                <span class="font-bold text-[#172B4D]">Antibiotic & QC Batch Test Results (Clearance / Rejection)</span>
                <span class="block text-[11px] text-[#5E6C84]">Instant alert if ELISA or LC-MS detects antibiotic residue in harvest batch</span>
              </div>
              <input type="checkbox" checked class="w-4 h-4 text-[#00A4B7] rounded cursor-pointer" />
            </label>

            <label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#FAFBFC] cursor-pointer border-t border-[#F4F5F7]">
              <div>
                <span class="font-bold text-[#172B4D]">Coldstore Temperature Deviation Alerts (Above -18°C)</span>
                <span class="block text-[11px] text-[#5E6C84]">High priority critical alarm if ante-room or blast room temperature rises</span>
              </div>
              <input type="checkbox" checked class="w-4 h-4 text-[#00A4B7] rounded cursor-pointer" />
            </label>

            <label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#FAFBFC] cursor-pointer border-t border-[#F4F5F7]">
              <div>
                <span class="font-bold text-[#172B4D]">Export Container Shipping Bill & Customs Clearance</span>
                <span class="block text-[11px] text-[#5E6C84]">Status update when CHA files LEO (Let Export Order) with Customs</span>
              </div>
              <input type="checkbox" checked class="w-4 h-4 text-[#00A4B7] rounded cursor-pointer" />
            </label>

            <label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#FAFBFC] cursor-pointer border-t border-[#F4F5F7]">
              <div>
                <span class="font-bold text-[#172B4D]">Farmer & Supplier Bill Realization</span>
                <span class="block text-[11px] text-[#5E6C84]">Payment credit confirmation and e-remittance advice alerts</span>
              </div>
              <input type="checkbox" checked class="w-4 h-4 text-[#00A4B7] rounded cursor-pointer" />
            </label>
          </div>

          <div class="flex justify-end pt-4 border-t border-[#EBECF0] mt-3">
            <button id="btn-save-notifications" class="btn-primary px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-save-notifications')?.addEventListener('click', () => {
      Toast.show('Notification preferences updated successfully', 'success', 'Preferences Saved');
    });
  },

  renderSecurityTab(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- 2FA & MFA Status -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 flex flex-wrap items-center justify-between gap-4 shadow-none">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-[#E3FCEF] text-[#006644] flex items-center justify-center font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-[#172B4D]">Two-Factor Authentication (2FA)</span>
                <span class="lozenge lozenge-success text-[10px]">Active & Enforced</span>
              </div>
              <div class="text-[11px] text-[#5E6C84]">Protected with Camaroo Authenticator / Google Authenticator Time-Based OTP</div>
            </div>
          </div>
          <button id="btn-reconfigure-mfa" class="px-3 py-1.5 border border-[#DFE1E6] hover:bg-[#FAFBFC] rounded-lg text-xs font-semibold text-[#00A4B7] cursor-pointer">
            Reconfigure 2FA
          </button>
        </div>

        <!-- Session & Password Policy Settings -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-none">
            <div class="text-xs font-bold text-[#172B4D] border-b border-[#EBECF0] pb-2 mb-3">Session Inactivity Policy</div>
            <div class="space-y-3 text-xs">
              <div>
                <label class="block font-semibold text-[#5E6C84] mb-0">Inactivity Auto-Logout</label>
                <select class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D] bg-white">
                  <option>15 Minutes</option>
                  <option selected>30 Minutes (Recommended)</option>
                  <option>60 Minutes</option>
                  <option>4 Hours</option>
                </select>
              </div>
              <div>
                <label class="block font-semibold text-[#5E6C84] mb-0">Concurrent Logins per Account</label>
                <select class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D] bg-white">
                  <option selected>Up to 2 Devices (Desktop + Mobile)</option>
                  <option>Strictly 1 Device Only</option>
                  <option>Unlimited</option>
                </select>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-none">
            <div class="text-xs font-bold text-[#172B4D] border-b border-[#EBECF0] pb-2 mb-3">Password Expiry & Complexity</div>
            <div class="space-y-3 text-xs">
              <div>
                <label class="block font-semibold text-[#5E6C84] mb-0">Mandatory Password Rotation</label>
                <select class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D] bg-white">
                  <option>Every 60 Days</option>
                  <option selected>Every 90 Days (ISO 27001 standard)</option>
                  <option>Every 180 Days</option>
                </select>
              </div>
              <div>
                <label class="block font-semibold text-[#5E6C84] mb-0">Complexity Requirement</label>
                <input type="text" disabled class="w-full px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg font-medium text-[#5E6C84]" value="Min 8 chars, 1 Upper, 1 Lower, 1 Number, 1 Special" />
              </div>
            </div>
          </div>
        </div>

        <!-- Active Login Sessions Table -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] shadow-none overflow-hidden">
          <div class="p-3 border-b border-[#EBECF0] flex items-center justify-between flex-wrap gap-2">
            <div>
              <span class="text-xs font-bold text-[#172B4D]">Active User Login Sessions</span>
              <span class="text-[11px] text-[#5E6C84] ml-2">3 Authorized Sessions</span>
            </div>
            <button id="btn-revoke-sessions" class="px-3 py-1 border border-[#BF2600] text-[#BF2600] hover:bg-[#FFEBE6] rounded-lg text-xs font-semibold cursor-pointer">
              Revoke All Other Sessions
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="erp-table text-xs w-full">
              <thead>
                <tr>
                  <th>Device / Browser</th>
                  <th>IP Address</th>
                  <th>Location</th>
                  <th>Last Active</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#EBECF0]">
                <tr>
                  <td>
                    <div class="font-bold text-[#172B4D]">Chrome 124 on Windows 11</div>
                    <div class="text-[11px] text-[#5E6C84]">ERP Administrative Console</div>
                  </td>
                  <td class="font-mono">117.218.42.10</td>
                  <td>Visakhapatnam, India</td>
                  <td>Active Now</td>
                  <td><span class="lozenge lozenge-success text-[10px]">Current Session</span></td>
                </tr>
                <tr>
                  <td>
                    <div class="font-bold text-[#172B4D]">Camaroo Marine Mobile (Android 14)</div>
                    <div class="text-[11px] text-[#5E6C84]">Plant Floor Dispatch App</div>
                  </td>
                  <td class="font-mono">117.218.45.88</td>
                  <td>Bhimavaram Plant, India</td>
                  <td>2 hours ago</td>
                  <td><span class="lozenge lozenge-inprogress text-[10px]">Active</span></td>
                </tr>
                <tr>
                  <td>
                    <div class="font-bold text-[#172B4D]">Safari on iPadOS 17</div>
                    <div class="text-[11px] text-[#5E6C84]">Coldstore Inspection Terminal</div>
                  </td>
                  <td class="font-mono">117.218.49.12</td>
                  <td>Kakinada Unit, India</td>
                  <td>Yesterday, 05:40 PM</td>
                  <td><span class="lozenge lozenge-inprogress text-[10px]">Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-reconfigure-mfa')?.addEventListener('click', () => {
      Modal.open({
        title: 'Two-Factor Authentication (2FA)',
        content: `
          <div class="text-xs space-y-3">
            <p class="text-[#5E6C84]">Scan this QR code using your Authenticator App (Google Authenticator, Microsoft Authenticator, or Camaroo Authenticator):</p>
            <div class="w-40 h-40 mx-auto bg-[#F4F5F7] border border-[#DFE1E6] rounded-xl flex items-center justify-center font-mono text-[10px] text-center p-2">
              [QR CODE: otpauth://totp/DeviFisheries:ys.prasad?secret=JBSWY3DPEHPK3PXP]
            </div>
            <div class="text-center font-mono text-xs font-bold text-[#172B4D]">Manual Key: JBSW Y3DP EHPK 3PXP</div>
          </div>
        `,
        footerButtons: [
          { label: 'Close', type: 'secondary', onClick: () => Modal.close() }
        ]
      });
    });

    document.getElementById('btn-revoke-sessions')?.addEventListener('click', () => {
      Toast.show('All other remote sessions have been revoked', 'success', 'Sessions Terminated');
    });
  },

  // =========================================================================
  // APPLICATION SUBMENU: MASTERS STUDIO
  // =========================================================================
  renderUnderConstruction(container) {
    if (!container) return;
    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Under Construction Card -->
        <div class="bg-white rounded-2xl border border-[#DFE1E6] p-10 sm:p-12 text-center shadow-xs animate-fade-in flex flex-col items-center justify-center max-w-3xl mx-auto my-4 min-h-[420px]">
          <!-- Prominent Lottie Player -->
          <div class="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_m6cuL6.json" background="transparent" speed="1" style="width: 100%; height: 100%;" loop="" autoplay=""></lottie-player>

            <!-- Smooth SVG Construction Illustration Fallback (Works offline instantly) -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-30">
              <svg class="w-48 h-48 text-[#FFAB00] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
          </div>

          <!-- Clean Minimal Status Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF0B3] text-[#8f4d00] font-bold text-xs rounded-full mt-2 mb-2 uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-[#FFAB00] animate-ping"></span>
            Under Construction
          </div>

          <p class="text-sm text-[#5E6C84] max-w-md leading-relaxed mt-1">
            This module is currently in development and staging.
          </p>
        </div>
      </div>
    `;
  },

  renderMastersTab(container) {
    this.renderUnderConstruction(container);
    return;
    const selectedMaster = this.state.masters.find(m => m.id === this.state.selectedMasterId) || this.state.masters[0];
    const categories = ['All', 'Logistics', 'Processing', 'Commercial', 'Quality', 'Aquaculture', 'Compliance', 'Operations'];

    // Filter masters by category
    const filteredMasters = this.state.masters.filter(m => {
      if (this.state.selectedMasterCategory === 'All') return true;
      return m.category === this.state.selectedMasterCategory;
    });

    // Filter records in active master by search term
    const query = (this.state.masterSearchQuery || '').toLowerCase().trim();
    const records = (selectedMaster.records || []).filter(r => {
      if (!query) return true;
      return (
        r.code.toLowerCase().includes(query) ||
        r.name.toLowerCase().includes(query) ||
        (r.details && r.details.toLowerCase().includes(query)) ||
        r.status.toLowerCase().includes(query)
      );
    });

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Master Selector Bar -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-3 shadow-none">
          <div class="flex items-center justify-between flex-wrap gap-2 mb-2.5 pb-2 border-b border-[#EBECF0]">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-[#172B4D]">Seafood Master Data Registry</span>
              <span class="lozenge lozenge-inprogress text-[10px]">${this.state.masters.length} Masters</span>
            </div>

            <!-- Category Pills -->
            <div class="flex items-center gap-1 overflow-x-auto py-0.5">
              ${categories.map(cat => `
                <button 
                  data-cat="${cat}" 
                  class="master-cat-pill px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${this.state.selectedMasterCategory === cat ? 'bg-[#00A4B7] text-white' : 'bg-[#F4F5F7] text-[#42526E] hover:bg-[#EBECF0]'}"
                >
                  ${cat}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Master Entity Dropdown / Selector -->
          <div class="flex items-center justify-between flex-wrap gap-3">
            <div class="flex items-center gap-3 flex-wrap">
              <label class="text-xs font-semibold text-[#5E6C84]">Active Master Entity:</label>
              <select id="master-entity-dropdown" class="px-3 py-1.5 border border-[#DFE1E6] rounded-lg text-xs font-bold text-[#172B4D] bg-white cursor-pointer hover:border-[#00A4B7] focus:outline-none min-w-[220px]">
                ${filteredMasters.map(m => `
                  <option value="${m.id}" ${m.id === selectedMaster.id ? 'selected' : ''}>${m.label} (${m.records.length} records)</option>
                `).join('')}
              </select>

              <span class="text-[11px] text-[#5E6C84] bg-[#F4F5F7] px-2 py-1 rounded border border-[#DFE1E6]">
                Domain: <strong class="text-[#172B4D]">${selectedMaster.category}</strong>
              </span>
            </div>

            <div class="flex items-center gap-2">
              <button id="btn-add-master-record" class="btn-primary px-3 py-1.5 rounded text-xs flex items-center gap-1.5 shadow-xs cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>Add ${selectedMaster.label}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="master-records-table-container"></div>
      </div>
    `;

    // Initialize DataTable matching Admin Purchase Module style
    const masterTable = new DataTable({
      containerId: 'master-records-table-container',
      data: selectedMaster.records,
      keyField: 'code',
      tableTitle: `${selectedMaster.label} Records`,
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { field: 'code', header: 'Code / ID', render: (v) => `<span class="font-bold text-[#172B4D] font-mono">${v}</span>` },
        { field: 'name', header: 'Name / Entity Description', render: (v) => `<span class="font-bold text-[#172B4D]">${v}</span>` },
        { field: 'details', header: 'Configuration Details & Parameters', render: (v) => `<span class="text-[11px] text-[#5E6C84]">${v || '—'}</span>` },
        { field: 'status', header: 'Operating Status', type: 'status' }
      ],
      actions: [
        {
          label: 'Edit',
          icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
          onClick: (row) => this.showEditMasterRecordModal(selectedMaster, row, container, masterTable)
        },
        {
          label: 'Delete',
          icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
          onClick: (row) => {
            Modal.confirm({
              title: `Delete ${row.code}`,
              message: `Are you sure you want to delete <strong>${row.name}</strong> (${row.code}) from ${selectedMaster.label}? This action cannot be undone.`,
              isDestructive: true,
              confirmText: 'Delete Record',
              cancelText: 'Cancel',
              onConfirm: () => {
                const idx = selectedMaster.records.findIndex(r => r.code === row.code);
                if (idx > -1) {
                  selectedMaster.records.splice(idx, 1);
                  masterTable.setData(selectedMaster.records);
                  this.saveState();
                  this.logAudit('Master Registry', `Deleted record ${row.code} from ${selectedMaster.label}`);
                  Toast.show(`Record ${row.code} deleted successfully.`, 'success', 'Record Removed');
                }
              }
            });
          }
        }
      ]
    });

    // Event Handlers for Category Pills
    document.querySelectorAll('.master-cat-pill').forEach(btn => {
      btn.onclick = () => {
        this.state.selectedMasterCategory = btn.dataset.cat;
        const available = this.state.masters.filter(m => this.state.selectedMasterCategory === 'All' || m.category === this.state.selectedMasterCategory);
        if (!available.some(m => m.id === this.state.selectedMasterId) && available.length > 0) {
          this.state.selectedMasterId = available[0].id;
        }
        this.saveState();
        this.renderMastersTab(container);
      };
    });

    // Dropdown change
    const dd = document.getElementById('master-entity-dropdown');
    if (dd) {
      dd.onchange = (e) => {
        this.state.selectedMasterId = e.target.value;
        this.state.masterSearchQuery = '';
        this.saveState();
        this.renderMastersTab(container);
      };
    }

    // Add Record Button
    const addBtn = document.getElementById('btn-add-master-record');
    if (addBtn) {
      addBtn.onclick = () => this.showAddMasterRecordModal(selectedMaster, container, masterTable);
    }
  },

  showAddMasterRecordModal(master, container, masterTable) {
    Modal.open({
      title: `Add ${master.label}`,
      content: `
        <div class="space-y-3 text-xs">
          <div>
            <label class="block font-semibold text-[#5E6C84] mb-0">Code / Identifier <span class="text-rose-500">*</span></label>
            <input type="text" id="m-rec-code" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded font-mono text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. ${master.id.substring(0, 3).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}" />
          </div>
          <div>
            <label class="block font-semibold text-[#5E6C84] mb-0">Name / Title <span class="text-rose-500">*</span></label>
            <input type="text" id="m-rec-name" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. Full trade name or title" />
          </div>
          <div>
            <label class="block font-semibold text-[#5E6C84] mb-0">Configuration Details & Notes</label>
            <input type="text" id="m-rec-details" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. Licences, ports, specification, parameters" />
          </div>
          <div>
            <label class="block font-semibold text-[#5E6C84] mb-0">Operating Status</label>
            <select id="m-rec-status" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded font-medium text-[#172B4D] bg-white focus:outline-none focus:border-[#0284C7]">
              <option value="Active" selected>Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        { label: 'Save Record', type: 'primary', onClick: (m) => {
          const code = document.getElementById('m-rec-code')?.value.trim();
          const name = document.getElementById('m-rec-name')?.value.trim();
          const details = document.getElementById('m-rec-details')?.value.trim();
          const status = document.getElementById('m-rec-status')?.value || 'Active';

          if (!code || !name) {
            Toast.show('Please provide both Code and Name', 'warning', 'Missing Fields');
            return;
          }

          master.records.push({ code, name, details, status });
          this.saveState();
          this.logAudit('Master Registry', `Added record ${name} (${code}) to ${master.label}`);
          m.close();
          Toast.show(`Added ${name} to ${master.label}`, 'success', 'Record Created');
          if (masterTable) {
            masterTable.setData(master.records);
          } else {
            this.renderMastersTab(container);
          }
        }}
      ]
    });
  },

  showEditMasterRecordModal(master, record, container, masterTable) {
    Modal.open({
      title: `Edit ${master.label} - ${record.code}`,
      content: `
        <div class="space-y-3 text-xs">
          <div>
            <label class="block font-semibold text-[#5E6C84] mb-0">Code / Identifier</label>
            <input type="text" id="m-edit-code" class="w-full px-2.5 py-1.5 bg-[#EBECF0] border border-[#DFE1E6] rounded font-mono text-[#5E6C84]" value="${record.code}" readonly />
          </div>
          <div>
            <label class="block font-semibold text-[#5E6C84] mb-0">Name / Title <span class="text-rose-500">*</span></label>
            <input type="text" id="m-edit-name" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#0284C7]" value="${record.name}" />
          </div>
          <div>
            <label class="block font-semibold text-[#5E6C84] mb-0">Configuration Details & Notes</label>
            <input type="text" id="m-edit-details" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#0284C7]" value="${record.details || ''}" />
          </div>
          <div>
            <label class="block font-semibold text-[#5E6C84] mb-0">Operating Status</label>
            <select id="m-edit-status" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded font-medium text-[#172B4D] bg-white focus:outline-none focus:border-[#0284C7]">
              <option value="Active" ${record.status === 'Active' ? 'selected' : ''}>Active</option>
              <option value="Inactive" ${record.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
            </select>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        { label: 'Update Record', type: 'primary', onClick: (m) => {
          const name = document.getElementById('m-edit-name')?.value.trim();
          const details = document.getElementById('m-edit-details')?.value.trim();
          const status = document.getElementById('m-edit-status')?.value || 'Active';

          if (!name) {
            Toast.show('Name cannot be empty', 'warning');
            return;
          }

          record.name = name;
          record.details = details;
          record.status = status;
          this.saveState();
          this.logAudit('Master Registry', `Updated record ${record.code} in ${master.label}`);
          m.close();
          Toast.show(`Updated ${record.code} successfully`, 'success', 'Changes Saved');
          if (masterTable) {
            masterTable.setData(master.records);
          } else {
            this.renderMastersTab(container);
          }
        }}
      ]
    });
  },

  // =========================================================================
  // CLIENT SUBMENU: COMPANY & PLANTS SETUP (FULL CRUD WITH DATATABLE)
  // =========================================================================
  renderCompanySetupTab(container) {
    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Clients Management</h1>
          </div>
          <div class="flex items-center gap-2">
            <button id="btn-add-company" class="btn-primary px-3 py-1.5 rounded text-xs flex items-center gap-1.5 shadow-xs cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add Client</span>
            </button>
          </div>
        </div>

        <div id="company-table-container"></div>
      </div>
    `;

    const companyTable = new DataTable({
      containerId: 'company-table-container',
      data: this.state.companies,
      keyField: 'id',
      tableTitle: 'Clients Registry',
      searchable: true,
      exportable: true,
      pageSize: 10,
      onRowClick: (row) => this.showClientUserDetailsModal(row, companyTable),
      columns: [
        { 
          field: 'sNo', 
          header: 'SNO', 
          render: (v, r, i) => `<span class="font-bold text-[#5E6C84]">${i !== undefined ? i + 1 : 1}</span>` 
        },
        { 
          field: 'code', 
          header: 'Client Short Name', 
          render: (v, r) => `<span class="font-bold text-[#0284C7] font-mono">${v || r.shortName || 'DFL'}</span>` 
        },
        { 
          field: 'name', 
          header: 'Client Name', 
          render: (v) => `<span class="font-bold text-[#172B4D]">${v}</span>` 
        },
        { 
          field: 'address', 
          header: 'Address', 
          render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-xs block" title="${v || ''}">${v || '—'}</span>` 
        },
        { 
          field: 'dbHost', 
          header: 'DB Host', 
          render: (v) => v ? `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` : '' 
        },
        { 
          field: 'dbName', 
          header: 'DB Name', 
          render: (v) => v ? `<span class="font-mono text-xs font-semibold text-[#0284C7]">${v}</span>` : '' 
        },
        { 
          field: 'dbUser', 
          header: 'User Name', 
          render: (v) => v ? `<span class="font-mono text-xs text-[#172B4D] font-medium">${v}</span>` : '' 
        },
        { 
          field: 'usersCount', 
          header: 'Users', 
          render: (v, r) => {
            const count = (this.state.users || []).filter(u => u.companyId === r.id || u.companyName === r.name || u.companyName === r.shortName).length;
            return `<span class="btn-client-view-users text-xs text-[#172B4D] font-medium cursor-pointer" data-client-id="${r.id}" title="Click to view all users for ${r.name}">${count} User${count === 1 ? '' : 's'}</span>`;
          } 
        },
        { field: 'status', header: 'Status', type: 'status' }
      ],
      actions: [
        {
          label: 'Assign DB',
          icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7M4 7c0-2 1.5-3 3.5-3h9c2 0 3.5 1 3.5 3M4 7h16m-8 4v6m-4-3h8"/></svg>`,
          onClick: (row) => this.showAssignDatabaseModal(row, companyTable)
        },
        {
          label: 'Edit',
          icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
          onClick: (row) => this.showEditCompanyModal(row, companyTable)
        },
        {
          label: (row) => row.status === 'Active' ? 'Deactivate' : 'Activate',
          icon: (row) => row.status === 'Active'
            ? `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="8" x2="22" y2="13" stroke-width="2" stroke-linecap="round"/><line x1="22" y1="8" x2="17" y2="13" stroke-width="2" stroke-linecap="round"/></svg>`
            : `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          onClick: (row) => {
            const isCurrentlyActive = (row.status || 'Active').toLowerCase() === 'active';
            if (isCurrentlyActive) {
              Modal.confirm({
                title: `Deactivate Client ${row.name}`,
                message: `Are you sure you want to deactivate corporate client <strong>${row.name}</strong> (${row.code})? The client and its associated user accounts will become inactive.`,
                confirmText: 'Deactivate',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  row.status = 'Inactive';
                  companyTable.setData(this.state.companies);
                  this.saveState();
                  this.logAudit('Company Setup', `Deactivated client ${row.name} (${row.code})`);
                  Modal.success({
                    title: 'Client Deactivated',
                    message: `Corporate client <strong>${row.name}</strong> has been successfully deactivated.`,
                    details: [
                      { label: 'Client Name', value: row.name },
                      { label: 'Code', value: row.code },
                      { label: 'Status', value: 'Inactive' }
                    ]
                  });
                }
              });
            } else {
              Modal.confirm({
                title: `Activate Client ${row.name}`,
                message: `Are you sure you want to activate corporate client <strong>${row.name}</strong> (${row.code})?`,
                confirmText: 'Activate',
                cancelText: 'Cancel',
                isDestructive: false,
                onConfirm: () => {
                  row.status = 'Active';
                  companyTable.setData(this.state.companies);
                  this.saveState();
                  this.logAudit('Company Setup', `Activated client ${row.name} (${row.code})`);
                  Modal.success({
                    title: 'Client Activated',
                    message: `Corporate client <strong>${row.name}</strong> is now Active.`,
                    details: [
                      { label: 'Client Name', value: row.name },
                      { label: 'Code', value: row.code },
                      { label: 'Status', value: 'Active' }
                    ]
                  });
                }
              });
            }
          }
        }
      ]
    });

    const cmpContainer = document.getElementById('company-table-container');
    if (cmpContainer) {
      cmpContainer.onclick = (e) => {
        const userBtn = e.target.closest('.btn-client-view-users');
        if (userBtn) {
          e.preventDefault();
          e.stopPropagation();
          const clientId = userBtn.dataset.clientId;
          const comp = this.state.companies.find(c => c.id === clientId);
          if (comp) {
            this.showClientUserDetailsModal(comp, companyTable);
          }
        }
      };
    }

    const addBtn = document.getElementById('btn-add-company');
    if (addBtn) {
      addBtn.onclick = () => this.showAddCompanyModal(companyTable);
    }
  },

  showClientUserDetailsModal(company, companyTable = null) {
    if (!company) return;
    const clientUsers = (this.state.users || []).filter(u => 
      u.companyId === company.id || 
      u.companyName === company.name || 
      u.companyName === company.shortName || 
      u.companyName === company.code
    );

    const clientCode = company.code || company.shortName || 'DFL';
    const plantsList = (company.plants && company.plants.length > 0) ? company.plants : ['Unit-1 VSP'];

    const contentHtml = `
      <div class="space-y-4">
        <!-- 1. Client Details Section -->
        <div class="bg-transparent border-0 p-0 space-y-3 shadow-none">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#EBECF0] pb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                ${clientCode.slice(0, 3)}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-sm font-bold text-[#172B4D]">${company.name}</h3>
                  <span class="text-[10.5px] font-mono px-2 py-0.5 rounded bg-white border border-[#DFE1E6] text-[#0284C7] font-semibold">${clientCode}</span>
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    company.status === 'Active' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFEBE6] text-[#BF2600]'
                  }">
                    <span class="w-1.5 h-1.5 rounded-full ${company.status === 'Active' ? 'bg-[#36B37E]' : 'bg-[#FF5630]'}"></span>
                    ${company.status || 'Active'}
                  </span>
                </div>
                <p class="text-[11px] text-[#5E6C84] mt-0.5">${company.address || 'Corporate Headquarters'}</p>
              </div>
            </div>
          </div>

          <!-- Client Details Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs bg-white p-3 rounded-lg border border-[#EBECF0]">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">Database Name</span>
              <span class="font-mono text-xs font-bold text-[#0284C7] block mt-0.5">${company.dbName || 'devi_erp'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">DB Host</span>
              <span class="font-mono text-xs text-[#172B4D] block mt-0.5">${company.dbHost || 'localhost:3306'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">DB User</span>
              <span class="font-mono text-xs text-[#172B4D] block mt-0.5">${company.dbUser || 'root'}</span>
            </div>
            <div class="col-span-1 sm:col-span-3 pt-1 border-t border-[#EBECF0]">
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">Configured Production Plants</span>
              <div class="flex flex-wrap gap-1.5 mt-1">
                ${plantsList.map(p => `
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7]">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
                    <span>${p}</span>
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Users List Section -->
        <div class="space-y-2.5">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Users List</h4>
              <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-[#EBF8FF] text-[#0284C7] border border-[#BAE6FD] font-mono">
                ${clientUsers.length} User${clientUsers.length === 1 ? '' : 's'}
              </span>
            </div>
          </div>

          <!-- Users Table with Matching Pagination -->
          <div id="client-users-table-wrapper" class="border border-[#EBECF0] rounded-none overflow-hidden shadow-2xs">
            <table class="w-full text-left text-xs">
              <thead class="bg-[#FAFBFC] border-b border-[#EBECF0] text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">
                <tr>
                  <th class="py-2.5 px-3">#</th>
                  <th class="py-2.5 px-3">User Name</th>
                  <th class="py-2.5 px-3">Full Name</th>
                  <th class="py-2.5 px-3">User ID</th>
                  <th class="py-2.5 px-3">Role</th>
                  <th class="py-2.5 px-3">Department</th>
                  <th class="py-2.5 px-3">Plant</th>
                  <th class="py-2.5 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody id="client-users-tbody" class="divide-y divide-[#EBECF0] bg-white">
                ${clientUsers.length === 0 ? `
                  <tr>
                    <td colspan="8" class="py-8 text-center text-xs text-[#8993A4] italic">
                      No users configured for this client yet.
                    </td>
                  </tr>
                ` : clientUsers.slice(0, 10).map((u, idx) => `
                  <tr class="hover:bg-[#F9FAFB] transition-colors cursor-pointer client-user-row" data-user-id="${u.id}" title="Click to view full user details, role & assigned modules">
                    <td class="py-2.5 px-3 text-[#8993A4] font-mono text-[11px]">${idx + 1}</td>
                    <td class="py-2.5 px-3 font-mono font-bold text-[#0284C7]">${u.username || u.id.toLowerCase()}</td>
                    <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${u.name || u.username || '—'}</td>
                    <td class="py-2.5 px-3 font-mono text-[11px] text-[#5E6C84]">${u.id}</td>
                    <td class="py-2.5 px-3">
                      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] whitespace-nowrap shrink-0 shadow-2xs" style="border-radius: 9999px !important; font-size: 10px !important; line-height: 14px !important;">
                        <span>${u.role || '—'}</span>
                      </span>
                    </td>
                    <td class="py-2.5 px-3 text-[#42526E] font-medium">${u.department || '—'}</td>
                    <td class="py-2.5 px-3 text-[#5E6C84] text-[11px]">${u.productionPlant || (u.plantAccess ? u.plantAccess[0] : 'All Plants')}</td>
                    <td class="py-2.5 px-3 text-center">
                      <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        u.status === 'Active' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFEBE6] text-[#BF2600]'
                      }">
                        <span class="w-1.5 h-1.5 rounded-full ${u.status === 'Active' ? 'bg-[#36B37E]' : 'bg-[#FF5630]'}"></span>
                        ${u.status || 'Active'}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <!-- Records Pagination Toolbar matching exact requested style -->
            <div id="client-users-pagination-bar" class="px-3.5 py-2.5 bg-[#FAFBFC] border-t border-[#EBECF0] flex items-center justify-between flex-wrap gap-2 text-xs text-[#5E6C84]">
              <div class="flex items-center gap-1.5">
                Showing <span id="cu-start-rec" class="font-semibold text-[#172B4D]">${clientUsers.length > 0 ? 1 : 0}</span> to <span id="cu-end-rec" class="font-semibold text-[#172B4D]">${Math.min(10, clientUsers.length)}</span> of <span class="font-semibold text-[#172B4D]">${clientUsers.length}</span> entries
              </div>
              <div class="flex items-center flex-wrap gap-2.5">
                <div class="flex items-center gap-2 text-xs font-medium text-[#64748B]">
                  <span>Rows:</span>
                  <select id="cu-rows-select" class="text-xs font-medium text-[#1E293B] bg-white border border-[#CBD5E1] rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-[#0284C7] cursor-pointer shadow-2xs hover:border-[#94A3B8]">
                    <option value="5">5 per page</option>
                    <option value="10" selected>10 per page</option>
                    <option value="25">25 per page</option>
                    <option value="50">50 per page</option>
                  </select>
                </div>
                <div class="flex items-center gap-1.5">
                  <button type="button" id="cu-page-prev" style="padding: 0 !important; width: 36px !important; height: 36px !important;" class="w-9 h-9 min-w-[36px] flex items-center justify-center bg-white border border-[#CBD5E1] rounded-xl text-[#64748B] hover:text-[#0284C7] hover:border-[#0284C7] transition-all opacity-40 cursor-not-allowed" title="Previous page" aria-label="Previous page" disabled>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <div id="cu-pages-container" class="flex items-center gap-1.5">
                    <button type="button" class="cu-page-btn w-9 h-9 min-w-[36px] flex items-center justify-center text-sm font-semibold rounded-xl transition-all cursor-pointer select-none bg-black text-white shadow-xs" data-page="1">
                      1
                    </button>
                  </div>
                  <button type="button" id="cu-page-next" style="padding: 0 !important; width: 36px !important; height: 36px !important;" class="w-9 h-9 min-w-[36px] flex items-center justify-center bg-white border border-[#CBD5E1] rounded-xl text-[#64748B] hover:text-[#0284C7] hover:border-[#0284C7] transition-all ${Math.ceil(clientUsers.length / 10) <= 1 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}" title="Next page" aria-label="Next page" ${Math.ceil(clientUsers.length / 10) <= 1 ? 'disabled' : ''}>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    Modal.open({
      title: `Client Details & Users: ${company.name}`,
      size: 'xl',
      content: contentHtml,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: () => Modal.close() }
      ]
    });

    // Wire up events and pagination inside the modal
    setTimeout(() => {
      let cuPage = 1;
      let cuSize = 10;

      const renderCuTable = () => {
        const tbody = document.getElementById('client-users-tbody');
        const startSpan = document.getElementById('cu-start-rec');
        const endSpan = document.getElementById('cu-end-rec');
        const prevBtn = document.getElementById('cu-page-prev');
        const nextBtn = document.getElementById('cu-page-next');
        const pagesContainer = document.getElementById('cu-pages-container');

        if (!tbody) return;
        const totalP = Math.max(1, Math.ceil(clientUsers.length / cuSize));
        if (cuPage > totalP) cuPage = totalP;
        if (cuPage < 1) cuPage = 1;

        const startIdx = (cuPage - 1) * cuSize;
        const endIdx = Math.min(startIdx + cuSize, clientUsers.length);
        const pItems = clientUsers.slice(startIdx, endIdx);

        if (startSpan) startSpan.textContent = clientUsers.length > 0 ? startIdx + 1 : 0;
        if (endSpan) endSpan.textContent = endIdx;

        tbody.innerHTML = pItems.length === 0 ? `
          <tr><td colspan="8" class="py-8 text-center text-xs text-[#8993A4] italic">No users found.</td></tr>
        ` : pItems.map((u, i) => `
          <tr class="hover:bg-[#F9FAFB] transition-colors cursor-pointer client-user-row" data-user-id="${u.id}" title="Click to view full user details, role & assigned modules">
            <td class="py-2.5 px-3 text-[#8993A4] font-mono text-[11px]">${startIdx + i + 1}</td>
            <td class="py-2.5 px-3 font-mono font-bold text-[#0284C7]">${u.username || u.id.toLowerCase()}</td>
            <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${u.name || u.username || '—'}</td>
            <td class="py-2.5 px-3 font-mono text-[11px] text-[#5E6C84]">${u.id}</td>
            <td class="py-2.5 px-3">
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] whitespace-nowrap shrink-0 shadow-2xs" style="border-radius: 9999px !important; font-size: 10px !important; line-height: 14px !important;">
                <span>${u.role || '—'}</span>
              </span>
            </td>
            <td class="py-2.5 px-3 text-[#42526E] font-medium">${u.department || '—'}</td>
            <td class="py-2.5 px-3 text-[#5E6C84] text-[11px]">${u.productionPlant || (u.plantAccess ? u.plantAccess[0] : 'All Plants')}</td>
            <td class="py-2.5 px-3 text-center">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                u.status === 'Active' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFEBE6] text-[#BF2600]'
              }">
                <span class="w-1.5 h-1.5 rounded-full ${u.status === 'Active' ? 'bg-[#36B37E]' : 'bg-[#FF5630]'}"></span>
                ${u.status || 'Active'}
              </span>
            </td>
          </tr>
        `).join('');

        // Wire row clicks
        tbody.querySelectorAll('.client-user-row').forEach(row => {
          row.onclick = () => {
            const u = this.state.users.find(x => x.id === row.dataset.userId);
            if (u) this.showUserDetailsAndRoleAccessModal(u);
          };
        });

        // Prev/Next buttons
        if (prevBtn) {
          prevBtn.disabled = cuPage === 1;
          prevBtn.className = `w-9 h-9 min-w-[36px] flex items-center justify-center bg-white border border-[#CBD5E1] rounded-xl text-[#64748B] hover:text-[#0284C7] hover:border-[#0284C7] transition-all ${
            cuPage === 1 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
          }`;
        }
        if (nextBtn) {
          nextBtn.disabled = cuPage >= totalP;
          nextBtn.className = `w-9 h-9 min-w-[36px] flex items-center justify-center bg-white border border-[#CBD5E1] rounded-xl text-[#64748B] hover:text-[#0284C7] hover:border-[#0284C7] transition-all ${
            cuPage >= totalP ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
          }`;
        }

        // Page buttons window
        if (pagesContainer) {
          const pageWindow = 5;
          let sp = Math.max(1, cuPage - 2);
          let ep = Math.min(totalP, sp + pageWindow - 1);
          if (ep - sp + 1 < pageWindow) sp = Math.max(1, ep - pageWindow + 1);

          let pHtml = '';
          for (let p = sp; p <= ep; p++) {
            const isAct = p === cuPage;
            pHtml += `
              <button type="button" class="cu-page-btn w-9 h-9 min-w-[36px] flex items-center justify-center text-sm font-semibold rounded-xl transition-all cursor-pointer select-none ${
                isAct
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-white border border-[#CBD5E1] text-[#334155] hover:border-[#0284C7] hover:text-[#0284C7]'
              }" data-page="${p}">
                ${p}
              </button>
            `;
          }
          pagesContainer.innerHTML = pHtml;

          pagesContainer.querySelectorAll('.cu-page-btn').forEach(btn => {
            btn.onclick = () => {
              const p = parseInt(btn.dataset.page, 10);
              if (p && p !== cuPage) {
                cuPage = p;
                renderCuTable();
              }
            };
          });
        }
      };

      const rowsSel = document.getElementById('cu-rows-select');
      if (rowsSel) {
        rowsSel.onchange = (e) => {
          cuSize = parseInt(e.target.value, 10) || 10;
          cuPage = 1;
          renderCuTable();
        };
      }
      const prevBtn = document.getElementById('cu-page-prev');
      if (prevBtn) {
        prevBtn.onclick = () => {
          if (cuPage > 1) {
            cuPage--;
            renderCuTable();
          }
        };
      }
      const nextBtn = document.getElementById('cu-page-next');
      if (nextBtn) {
        nextBtn.onclick = () => {
          const totalP = Math.max(1, Math.ceil(clientUsers.length / cuSize));
          if (cuPage < totalP) {
            cuPage++;
            renderCuTable();
          }
        };
      }

      renderCuTable();
    }, 40);
  },

  showUserDetailsAndRoleAccessModal(user) {
    if (!user) return;
    const roleObj = (this.state.roles || []).find(r => r.name === user.role || r.id === user.role);
    const assignedMenus = roleObj ? (roleObj.assignedMenus || []) : [];
    const assignedSubmenus = roleObj ? (roleObj.assignedSubmenus || []) : [];
    const isFullAccess = assignedMenus.includes('*') || (roleObj && roleObj.id === 'ROLE-ADMIN');

    // Find matching modules
    const matchedModules = isFullAccess
      ? this.state.modulesConfig
      : this.state.modulesConfig.filter(m => assignedMenus.includes(m.key) || assignedMenus.includes(m.id));

    const initials = (user.name || user.username || user.id).split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'US';

    const contentHtml = `
      <div class="space-y-4">
        <!-- 1. User Header Banner -->
        <div class="p-3.5 bg-[#F4F5F7] rounded-xl border border-[#DFE1E6] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-full bg-[#E0F2FE] text-[#00A4B7] font-extrabold flex items-center justify-center text-sm border border-[#BAE6FD] shrink-0">
              ${initials}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-sm font-bold text-[#172B4D]">${user.name || user.username || 'User'}</h3>
                <span class="text-xs font-mono text-[#5E6C84]">@${user.username || user.id.toLowerCase()}</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#DFE1E6] text-[#42526E] font-semibold">${user.id}</span>
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  user.status === 'Active' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFEBE6] text-[#BF2600]'
                }">
                  <span class="w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-[#36B37E]' : 'bg-[#FF5630]'}"></span>
                  ${user.status || 'Active'}
                </span>
              </div>
              <p class="text-[11px] text-[#5E6C84] mt-0.5">
                Client: <strong>${user.companyName || 'Devi Fisheries Limited'}</strong>
              </p>
            </div>
          </div>
        </div>

        <!-- 2. User Details Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs bg-[#FAFBFC] p-3 rounded-xl border border-[#DFE1E6]">
          <div>
            <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">Department</span>
            <span class="font-medium text-[#172B4D] block mt-0.5">${user.department || '—'}</span>
          </div>
          <div>
            <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">Designation</span>
            <span class="font-medium text-[#172B4D] block mt-0.5">${user.designation || '—'}</span>
          </div>
          <div>
            <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">Production Plant</span>
            <span class="font-medium text-[#172B4D] block mt-0.5">${user.productionPlant || (user.plantAccess ? user.plantAccess.join(', ') : 'All Plants')}</span>
          </div>
          <div>
            <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">Access IPs</span>
            <span class="font-mono text-xs text-[#172B4D] block mt-0.5 truncate" title="${user.accessIps || 'Any IP'}">${user.accessIps || 'Any IP'}</span>
          </div>
          <div>
            <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">Access Type</span>
            <span class="text-xs text-[#172B4D] block mt-0.5">${user.accessType || 'Standard Access'}</span>
          </div>
          <div>
            <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">Last Login</span>
            <span class="text-xs text-[#5E6C84] block mt-0.5">${user.lastLogin || 'Never'}</span>
          </div>
          <div>
            <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">Email</span>
            <span class="font-mono text-xs text-[#172B4D] block mt-0.5 truncate" title="${user.email || '—'}">${user.email || '—'}</span>
          </div>
          <div>
            <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">Phone</span>
            <span class="font-mono text-xs text-[#172B4D] block mt-0.5">${user.phone || '—'}</span>
          </div>
        </div>

        <!-- 3. User's Role & Assigned Modules & Submodules -->
        <div class="space-y-3 pt-1">
          <div class="flex flex-wrap items-center justify-between gap-2 p-3 bg-[#F0F9FF] rounded-xl border border-[#BAE6FD]">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-white text-[#0284C7] border border-[#BAE6FD] flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold text-[#172B4D]">Role: ${user.role || '—'}</span>
                  ${roleObj ? `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#0284C7] border border-[#BAE6FD] font-semibold">${roleObj.id}</span>` : ''}
                </div>
                <p class="text-[11px] text-[#5E6C84]">Department: <strong>${roleObj?.department || user.department || 'Operations'}</strong></p>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-xs font-bold ${isFullAccess ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]' : 'bg-white text-[#0284C7] border border-[#BAE6FD]'} shadow-2xs">
              ${isFullAccess ? 'Full System Access' : `${matchedModules.length} Modules Accessible`}
            </span>
          </div>

          <!-- Modules & Submodules Breakdown -->
          <div class="space-y-2">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Assigned Modules & Submenus</h4>

            ${matchedModules.length === 0 ? `
              <div class="text-[11px] text-[#8993A4] italic p-4 bg-[#FAFBFC] rounded-xl border border-[#EBECF0] text-center">
                No active modules or submenus assigned to this role.
              </div>
            ` : `
              <div class="grid grid-cols-1 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
                ${matchedModules.map(m => {
                  const allSubs = this.state.submenusConfig[m.id] || this.state.submenusConfig[m.key] || [];
                  const roleSubs = isFullAccess
                    ? allSubs
                    : (assignedSubmenus.length > 0 
                        ? allSubs.filter(s => assignedSubmenus.includes(s.id) || assignedSubmenus.includes(s.title) || assignedSubmenus.includes(s.name) || assignedSubmenus.includes(s.url))
                        : allSubs);

                  return `
                    <div class="p-3 rounded-xl border border-[#EBECF0] bg-[#FAFBFC] space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="font-bold text-xs text-[#172B4D] flex items-center gap-1.5">
                          <span class="w-2 h-2 rounded-full bg-[#00875A]"></span>
                          ${m.label}
                        </span>
                      </div>
                      <div class="flex flex-wrap gap-1.5 pt-1.5 border-t border-[#EBECF0]">
                        ${roleSubs.length === 0 ? `
                          <span class="text-[10.5px] text-[#8993A4] italic">Full module access</span>
                        ` : roleSubs.map(s => `
                          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-medium bg-white border border-[#DFE1E6] text-[#172B4D]" title="${s.url || ''}">
                            <span class="w-1.5 h-1.5 rounded-full ${s.status === 'Inactive' ? 'bg-[#FF5630]' : 'bg-[#00875A]'}"></span>
                            <span>${s.title || s.name}</span>
                          </span>
                        `).join('')}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>
        </div>
      </div>
    `;

    Modal.open({
      title: `User Details & Permissions: ${user.name || user.username}`,
      size: 'lg',
      content: contentHtml,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: () => Modal.close() }
      ]
    });
  },

  showAddCompanyModal(companyTable) {
    const nextCompIndex = this.state.companies.length + 1;
    const nextCompId = `CMP-00${nextCompIndex}`;
    const nextUserId = `USR-00${(this.state.users || []).length + 1}`;
    
    const allRoles = (this.state.roles && this.state.roles.length > 0)
      ? this.state.roles.map(r => r.name)
      : [
        'Procurement Officer',
        'QC Inspector',
        'Production Supervisor',
        'Coldstore Keeper',
        'Sales & Exports Manager',
        'Plant Manager',
        'System Administrator'
      ];

    const departments = [
      'Raw Material Procurement',
      'Quality Assurance & Lab',
      'Production & Processing Floor',
      'Cold Storage & Logistics',
      'Sales, Exports & Documentation',
      'Executive Management',
      'Finance & Accounts',
      'IT & Systems Administration',
      'Engineering & Maintenance',
      'General Operations'
    ];

    const lucideIcons = this.getLucideIconLibrary();

    const wizardState = {
      step: 1, // 1: Add Client, 2: Add Users, 3: Add Roles, 4: Add Menus
      maxStepReached: 1,
      client: {
        id: nextCompId,
        name: '',
        shortName: '',
        plants: 'Unit-1 VSP',
        status: 'Active',
        address: ''
      },
      user: {
        id: nextUserId,
        username: '',
        password: '',
        role: allRoles[0] || 'Procurement Officer',
        plant: 'Unit-1 VSP',
        department: 'Administration',
        designation: 'Administrator',
        accessType: 'Full Access',
        status: 'Active'
      },
      role: {
        name: '',
        id: '',
        department: 'Raw Material Procurement',
        status: 'Active',
        assignedMenus: ['purchase', 'qc', 'inventory', 'production']
      },
      menu: {
        name: '',
        status: 'Active',
        icon: 'shopping-cart',
        submenus: [
          { name: 'Dashboard', url: '#/dashboard', status: 'Active' }
        ]
      }
    };

    const saveCurrentStepData = (currentStep) => {
      if (currentStep === 1) {
        wizardState.client.name = document.getElementById('w-cmp-name')?.value.trim() || wizardState.client.name;
        wizardState.client.shortName = document.getElementById('w-cmp-short-name')?.value.trim().toUpperCase() || wizardState.client.shortName;
        wizardState.client.plants = document.getElementById('w-cmp-plant')?.value.trim() || wizardState.client.plants;
        wizardState.client.status = document.getElementById('w-cmp-status')?.value || wizardState.client.status;
        wizardState.client.address = document.getElementById('w-cmp-address')?.value.trim() || wizardState.client.address;
        
        // Auto-seed user & role names if empty
        if (!wizardState.user.username && wizardState.client.shortName) {
          wizardState.user.username = `${wizardState.client.shortName.toLowerCase()}_admin`;
        }
        if (!wizardState.role.name && wizardState.client.shortName) {
          wizardState.role.name = `${wizardState.client.shortName} Operations Head`;
          wizardState.role.id = `ROLE-${wizardState.client.shortName}-OPS`;
        }
        if (!wizardState.menu.name && wizardState.client.shortName) {
          wizardState.menu.name = `${wizardState.client.shortName} Operations`;
        }
      } else if (currentStep === 2) {
        wizardState.user.id = document.getElementById('w-usr-id')?.value.trim() || wizardState.user.id;
        wizardState.user.username = document.getElementById('w-usr-username')?.value.trim() || wizardState.user.username;
        wizardState.user.password = document.getElementById('w-usr-password')?.value || wizardState.user.password;
        wizardState.user.role = document.getElementById('w-usr-role')?.value || wizardState.user.role;
        wizardState.user.plant = document.getElementById('w-usr-plant')?.value || wizardState.user.plant;
        wizardState.user.department = document.getElementById('w-usr-dept')?.value.trim() || wizardState.user.department;
        wizardState.user.designation = document.getElementById('w-usr-desig')?.value.trim() || wizardState.user.designation;
        wizardState.user.accessType = document.getElementById('w-usr-access')?.value || wizardState.user.accessType;
        wizardState.user.status = document.getElementById('w-usr-status')?.value || wizardState.user.status;
      } else if (currentStep === 3) {
        wizardState.role.name = document.getElementById('w-role-name')?.value.trim() || wizardState.role.name;
        wizardState.role.id = document.getElementById('w-role-id')?.value.trim() || wizardState.role.id;
        wizardState.role.department = document.getElementById('w-role-dept')?.value || wizardState.role.department;
        wizardState.role.status = document.getElementById('w-role-status-cb')?.checked ? 'Active' : 'Inactive';
        const checkedBoxes = Array.from(document.querySelectorAll('.w-role-menu-cb:checked')).map(cb => cb.value);
        wizardState.role.assignedMenus = checkedBoxes;
      } else if (currentStep === 4) {
        wizardState.menu.name = document.getElementById('w-menu-name')?.value.trim() || wizardState.menu.name;
        wizardState.menu.status = document.getElementById('w-menu-status-cb')?.checked ? 'Active' : 'Inactive';
        wizardState.menu.icon = document.getElementById('w-menu-icon-val')?.value || wizardState.menu.icon;
        const subRows = Array.from(document.querySelectorAll('.w-sub-row'));
        wizardState.menu.submenus = subRows.map(row => ({
          name: row.querySelector('.w-sub-name')?.value.trim() || '',
          url: row.querySelector('.w-sub-url')?.value.trim() || '',
          status: row.querySelector('.w-sub-status')?.checked ? 'Active' : 'Inactive'
        })).filter(s => s.name);
      }
    };

    const renderWizard = (step) => {
      wizardState.step = step;
      if (step > wizardState.maxStepReached) {
        wizardState.maxStepReached = step;
      }

      const clientPlantsList = wizardState.client.plants
        ? wizardState.client.plants.split(',').map(p => p.trim()).filter(Boolean)
        : ['Unit-1 VSP'];

      const stepTitles = [
        'Add Client',
        'Add Users',
        'Add Roles',
        'Add Menus'
      ];

      // Stepper Header Component: Connected Progress Stepper (No '>')
      const stepperHeaderHtml = `
        <div class="bg-[#F8FAFC] px-4 sm:px-6 py-4 border-b border-[#E2E8F0] -mx-6 -mt-6 mb-5 select-none">
          <div class="flex items-center justify-between w-full max-w-4xl mx-auto">
            ${[1, 2, 3, 4].map(sNum => {
              const isActive = wizardState.step === sNum;
              const isPassed = wizardState.step > sNum;
              const canClick = sNum <= wizardState.maxStepReached;
              const isLast = sNum === 4;

              return `
                <div class="flex items-center ${!isLast ? 'flex-1' : ''}">
                  <!-- Step Interactive Button -->
                  <button 
                    type="button" 
                    data-step="${sNum}" 
                    class="wizard-step-tab group flex items-center gap-2.5 text-left transition-all outline-none ${
                      canClick ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                    }"
                    title="${canClick ? `Go to Step ${sNum}: ${stepTitles[sNum - 1]}` : `${stepTitles[sNum - 1]} (Complete earlier steps first)`}"
                  >
                    <!-- Badge Circle -->
                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all shrink-0 ${
                      isActive 
                        ? 'bg-[#00A4B7] text-white shadow-xs ring-4 ring-[#00A4B7]/25 scale-105' 
                        : (isPassed 
                            ? 'bg-[#00A4B7] text-white group-hover:scale-105' 
                            : 'bg-white border-2 border-[#CBD5E1] text-[#94A3B8]')
                    }">
                      ${isPassed 
                        ? '<svg class="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' 
                        : sNum
                      }
                    </div>

                    <!-- Step Text Labels -->
                    <div class="hidden sm:flex flex-col leading-tight">
                      <span class="text-[10px] uppercase font-bold tracking-wider transition-colors ${
                        isActive 
                          ? 'text-[#00A4B7]' 
                          : (isPassed ? 'text-[#006C7A]' : 'text-[#94A3B8]')
                      }">
                        Step ${sNum}
                      </span>
                      <span class="text-xs font-bold whitespace-nowrap transition-colors ${
                        isActive 
                          ? 'text-[#0F172A]' 
                          : (isPassed ? 'text-[#1E293B] group-hover:text-[#00A4B7]' : 'text-[#64748B]')
                      }">
                        ${stepTitles[sNum - 1]}
                      </span>
                    </div>
                  </button>

                  <!-- Connected Progress Track between steps (No '>') -->
                  ${!isLast ? `
                    <div class="flex-1 mx-2 sm:mx-4 h-0.5 rounded-full transition-all duration-300 ${
                      isPassed ? 'bg-[#00A4B7]' : 'bg-[#E2E8F0]'
                    }"></div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

      let stepBodyHtml = '';

      // STEP 1: Add Client
      if (step === 1) {
        stepBodyHtml = `
          <div class="space-y-4">
            <div class="bg-transparent p-0 border-0 space-y-4">
              <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2.5">
                <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Client Information</span>
                <span class="text-[10px] font-bold text-[#00A4B7] bg-[#E0F2FE] px-2.5 py-1 rounded-full border border-[#BAE6FD] font-mono">
                  ${wizardState.client.id}
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Client Name <span class="text-rose-500">*</span>
                  </label>
                  <input type="text" id="w-cmp-name" value="${wizardState.client.name}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. Devi Fisheries Limited" required autofocus />
                </div>

                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Client Short Name
                  </label>
                  <input type="text" id="w-cmp-short-name" value="${wizardState.client.shortName}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-mono uppercase" placeholder="e.g. DFL" />
                </div>

                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Status
                  </label>
                  <select id="w-cmp-status" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]">
                    <option value="Active" ${wizardState.client.status === 'Active' ? 'selected' : ''}>Active</option>
                    <option value="Inactive" ${wizardState.client.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
                  </select>
                </div>

                <!-- Production Plant field (Requested!) -->
                <div class="col-span-1 sm:col-span-2 lg:col-span-3">
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Production Plant <span class="text-[#64748B] font-normal lowercase">(comma-separated if multiple)</span>
                  </label>
                  <input type="text" id="w-cmp-plant" value="${wizardState.client.plants}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. Unit-1 VSP, Unit-2 Singarayakonda, Unit-3 Kakinada" />
                </div>

                <div class="col-span-1 sm:col-span-2 lg:col-span-3">
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Address
                  </label>
                  <textarea id="w-cmp-address" rows="3" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" placeholder="Enter complete corporate entity address, plant location, city, pin code...">${wizardState.client.address}</textarea>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      // STEP 2: Add Users
      else if (step === 2) {
        stepBodyHtml = `
          <div class="space-y-4">
            <div class="bg-transparent p-0 border-0 space-y-4">
              <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2.5">
                <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">User Information for ${wizardState.client.name || 'New Client'}</span>
                <span class="text-[10px] font-bold text-[#00A4B7] bg-[#E0F2FE] px-2.5 py-1 rounded-full border border-[#BAE6FD] font-mono">
                  ${wizardState.user.id}
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <!-- 1. Client Name -->
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Client Name
                  </label>
                  <input type="text" id="w-usr-company" value="${wizardState.client.name || 'New Client'}" readonly class="w-full text-xs px-3 py-2 bg-[#F1F5F9] border border-[#DFE1E6] rounded-lg font-bold text-[#172B4D] cursor-not-allowed" />
                </div>

                <!-- 2. User ID -->
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    User ID
                  </label>
                  <input type="text" id="w-usr-id" value="${wizardState.user.id}" placeholder="e.g. USR-009" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" />
                </div>

                <!-- 3. User Name -->
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    User Name
                  </label>
                  <input type="text" id="w-usr-username" value="${wizardState.user.username}" placeholder="e.g. ramesh_varma" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" />
                </div>

                <!-- 4. Password -->
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Password
                  </label>
                  <div class="relative">
                    <input type="password" id="w-usr-password" value="${wizardState.user.password || 'Client@123'}" placeholder="••••••••••••" class="w-full text-xs pl-3 pr-10 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono focus:outline-none focus:border-[#00A4B7]" />
                    <button type="button" id="w-toggle-pwd-btn" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6B778C] hover:text-[#172B4D] cursor-pointer p-1" title="Toggle password visibility">
                      <svg id="w-pwd-eye-open" class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      <svg id="w-pwd-eye-closed" class="w-4 h-4 pointer-events-none hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>
                    </button>
                  </div>
                </div>

                <!-- 5. Role -->
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Role
                  </label>
                  <select id="w-usr-role" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-medium text-[#172B4D]">
                    ${allRoles.map(r => `<option value="${r}" ${wizardState.user.role === r ? 'selected' : ''}>${r}</option>`).join('')}
                  </select>
                </div>

                <!-- 6. Production Plant -->
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Production Plant
                  </label>
                  <select id="w-usr-plant" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-medium text-[#172B4D]">
                    <option value="All Plants">All Plants</option>
                    ${clientPlantsList.map(p => `<option value="${p}" ${wizardState.user.plant === p ? 'selected' : ''}>${p}</option>`).join('')}
                  </select>
                </div>

                <!-- 7. Department -->
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Department
                  </label>
                  <input type="text" id="w-usr-dept" list="w-usr-dept-list" value="${wizardState.user.department}" placeholder="e.g. Procurement" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] text-[#172B4D]" />
                  <datalist id="w-usr-dept-list">
                    ${departments.map(d => `<option value="${d}">`).join('')}
                  </datalist>
                </div>

                <!-- 8. Designation -->
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Designation
                  </label>
                  <input type="text" id="w-usr-desig" value="${wizardState.user.designation}" placeholder="e.g. Procurement Manager" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] text-[#172B4D]" />
                </div>

                <!-- 9. Access Type -->
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Access Type
                  </label>
                  <select id="w-usr-access" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-medium text-[#172B4D]">
                    <option value="Full Access" ${wizardState.user.accessType === 'Full Access' ? 'selected' : ''}>Full Access</option>
                    <option value="Admin / Manager" ${wizardState.user.accessType === 'Admin / Manager' ? 'selected' : ''}>Admin / Manager</option>
                    <option value="Standard Access" ${wizardState.user.accessType === 'Standard Access' ? 'selected' : ''}>Standard Access</option>
                    <option value="View Only" ${wizardState.user.accessType === 'View Only' ? 'selected' : ''}>View Only / Read Only</option>
                    <option value="Operator" ${wizardState.user.accessType === 'Operator' ? 'selected' : ''}>Operator</option>
                  </select>
                </div>

                <!-- 10. Status -->
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Status
                  </label>
                  <select id="w-usr-status" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-medium text-[#172B4D]">
                    <option value="Active" ${wizardState.user.status === 'Active' ? 'selected' : ''}>Active</option>
                    <option value="Inactive" ${wizardState.user.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      // STEP 3: Add Roles
      else if (step === 3) {
        stepBodyHtml = `
          <div class="space-y-4">
            <div class="bg-transparent p-0 border-0 space-y-4">
              <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2.5">
                <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Role Configuration &amp; Menu Permissions</span>
                <span class="text-[10px] text-[#64748B]">Assign modules and view permissions</span>
              </div>

              <!-- Role Basic Info -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Role Name
                  </label>
                  <input type="text" id="w-role-name" value="${wizardState.role.name}" placeholder="e.g. Operations Head" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-md focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]" />
                </div>

                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Role ID
                  </label>
                  <input type="text" id="w-role-id" value="${wizardState.role.id}" placeholder="e.g. ROLE-OPS-HEAD" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-md font-mono text-[#00A4B7] font-semibold focus:outline-none focus:border-[#00A4B7]" />
                </div>

                <div>
                  <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                    Department
                  </label>
                  <select id="w-role-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-md focus:outline-none focus:border-[#00A4B7] font-medium text-[#172B4D]">
                    ${departments.map(d => `<option value="${d}" ${wizardState.role.department === d ? 'selected' : ''}>${d}</option>`).join('')}
                  </select>
                </div>

                <div class="flex items-center">
                  <label class="flex items-center gap-2 cursor-pointer select-none pt-4">
                    <input type="checkbox" id="w-role-status-cb" class="w-4 h-4 rounded text-[#00A4B7] accent-[#00A4B7] cursor-pointer" ${wizardState.role.status === 'Active' ? 'checked' : ''} />
                    <span class="text-xs font-semibold text-[#172B4D]">Active Role</span>
                  </label>
                </div>
              </div>

              <!-- Assign Menu Access Grid -->
              <div class="space-y-2 pt-2 border-t border-[#EBECF0]">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Assign Menu Access</span>
                  <div class="flex items-center gap-2">
                    <button type="button" id="w-role-select-all" class="px-2.5 py-1 text-[11px] font-semibold text-[#006C7A] bg-[#E0F2FE] hover:bg-[#BAE6FD] border border-[#BAE6FD] rounded cursor-pointer transition-colors">Select All</button>
                    <button type="button" id="w-role-deselect-all" class="px-2.5 py-1 text-[11px] font-semibold text-[#64748B] bg-white hover:bg-[#F1F5F9] border border-[#DFE1E6] rounded cursor-pointer transition-colors">Deselect All</button>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-[220px] overflow-y-auto p-2 bg-white rounded-lg border border-[#DFE1E6]">
                  ${this.state.modulesConfig.map(mod => `
                    <label class="flex items-center gap-2.5 p-2 rounded-lg border border-[#EBECF0] hover:bg-[#F8FAFC] cursor-pointer transition-colors">
                      <input type="checkbox" value="${mod.key || mod.id}" class="w-role-menu-cb w-4 h-4 rounded text-[#00A4B7] accent-[#00A4B7]" ${wizardState.role.assignedMenus.includes(mod.key || mod.id) ? 'checked' : ''} />
                      <span class="w-4 h-4 flex items-center justify-center text-[#00A4B7] shrink-0">${mod.iconSvg || ''}</span>
                      <span class="text-xs font-semibold text-[#172B4D] truncate">${mod.label}</span>
                    </label>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        `;
      }

      // STEP 4: Add Menus
      else if (step === 4) {
        stepBodyHtml = `
          <div class="space-y-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start text-xs">
              <!-- Main Menu Box -->
              <div class="bg-transparent p-0 border-0 space-y-3.5 flex flex-col h-full">
                <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2.5">
                  <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Custom Main Menu</span>
                </div>

                <div class="space-y-3 flex-1 flex flex-col">
                  <div class="grid grid-cols-12 gap-3 items-end">
                    <div class="col-span-8 sm:col-span-9">
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                        Menu Name
                      </label>
                      <input type="text" id="w-menu-name" value="${wizardState.menu.name}" placeholder="e.g. Procurement & Inward" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]" />
                    </div>

                    <div class="col-span-4 sm:col-span-3">
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                        Status
                      </label>
                      <div class="flex items-center h-[38px]">
                        <label class="inline-flex items-center cursor-pointer select-none">
                          <input type="checkbox" id="w-menu-status-cb" class="w-4.5 h-4.5 rounded border-[#DFE1E6] text-[#00A4B7] accent-[#00A4B7] cursor-pointer" ${wizardState.menu.status === 'Active' ? 'checked' : ''} />
                          <span class="ml-2 text-xs font-semibold text-[#172B4D]">Active</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <input type="hidden" id="w-menu-icon-val" value="${wizardState.menu.icon}" />

                  <!-- Icon Picker -->
                  <div class="flex-1 flex flex-col space-y-2">
                    <div class="flex items-center justify-between">
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">
                        Menu Icon
                      </label>
                      <input type="text" id="w-icon-search-input" placeholder="Search icon..." class="text-[11px] px-2 py-0.5 border border-[#DFE1E6] rounded w-28 bg-white focus:outline-none focus:border-[#00A4B7]" />
                    </div>

                    <div id="w-lucide-icon-grid" class="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-[170px] overflow-y-auto p-2 border border-[#DFE1E6] rounded-lg bg-white shadow-2xs">
                      <!-- Populated by JS -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- Sub Menu Box -->
              <div class="bg-transparent p-0 border-0 space-y-3.5 flex flex-col h-full">
                <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2.5">
                  <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Sub Menus</span>
                  <button type="button" id="w-btn-add-sub" class="btn-secondary px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-[#EBECF0] transition-colors cursor-pointer text-[#006C7A] border border-[#DFE1E6]">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Sub Menu</span>
                  </button>
                </div>

                <div class="space-y-2 flex-1 flex flex-col">
                  <div class="grid grid-cols-12 gap-2 px-1 text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">
                    <div class="col-span-5">Sub Menu Name</div>
                    <div class="col-span-4">Url / Hash</div>
                    <div class="col-span-2 text-center">Status</div>
                    <div class="col-span-1 text-center">Action</div>
                  </div>

                  <div id="w-submenus-list" class="space-y-2 max-h-[220px] overflow-y-auto pr-1 flex-1">
                    <!-- Populated by JS -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      const nextTitles = [
        'Add Users',
        'Add Roles',
        'Add Menus'
      ];
      const nextLabel = step === 4 ? 'Complete & Register Client ✓' : `Next: ${nextTitles[step - 1]} &gt;`;

      const footerHtml = `
        <div class="flex items-center justify-between w-full">
          <button type="button" id="wizard-cancel-btn" class="btn-secondary px-4 py-2 rounded-full text-xs font-semibold cursor-pointer">
            Cancel
          </button>
          <div class="flex items-center gap-2">
            ${step > 1 ? `
              <button type="button" id="wizard-back-btn" class="btn-secondary px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 cursor-pointer">
                <span>&larr; Back</span>
              </button>
            ` : ''}
            <button type="button" id="wizard-next-btn" class="btn-primary px-5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer">
              <span>${nextLabel}</span>
            </button>
          </div>
        </div>
      `;

      // Render Modal Shell or update container
      const containerEl = document.getElementById('client-onboarding-wizard-container');
      if (containerEl) {
        containerEl.innerHTML = stepperHeaderHtml + stepBodyHtml;
        const footerTarget = document.querySelector('#erp-modal-root .border-t.bg-\\[\\#FAFBFC\\]');
        if (footerTarget) {
          footerTarget.innerHTML = footerHtml;
        }
      } else {
        Modal.open({
          title: 'Register New Client - Onboarding Wizard',
          size: 'xl',
          content: `<div id="client-onboarding-wizard-container">${stepperHeaderHtml + stepBodyHtml}</div>`,
          footerButtons: []
        });

        const footerTarget = document.querySelector('#erp-modal-root .border-t.bg-\\[\\#FAFBFC\\]');
        if (footerTarget) {
          footerTarget.innerHTML = footerHtml;
        }
      }

      // Attach Stepper Navigation clicks
      document.querySelectorAll('.wizard-step-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          const targetStep = parseInt(tab.getAttribute('data-step') || '1');
          if (targetStep <= wizardState.maxStepReached) {
            saveCurrentStepData(wizardState.step);
            renderWizard(targetStep);
          }
        });
      });

      // Attach Cancel Button
      document.getElementById('wizard-cancel-btn')?.addEventListener('click', () => {
        Modal.close();
      });

      // Attach Back Button
      document.getElementById('wizard-back-btn')?.addEventListener('click', () => {
        saveCurrentStepData(wizardState.step);
        renderWizard(wizardState.step - 1);
      });

      // Attach Next / Finish Button
      document.getElementById('wizard-next-btn')?.addEventListener('click', () => {
        saveCurrentStepData(wizardState.step);

        // Validation for Step 1
        if (wizardState.step === 1) {
          if (!wizardState.client.name) {
            Toast.show('Please enter Client Name to continue', 'warning', 'Required Field');
            document.getElementById('w-cmp-name')?.focus();
            return;
          }
          renderWizard(2);
          return;
        }

        // Proceed Step 2 -> 3
        if (wizardState.step === 2) {
          renderWizard(3);
          return;
        }

        // Proceed Step 3 -> 4
        if (wizardState.step === 3) {
          renderWizard(4);
          return;
        }

        // Step 4: Finish & Register Client
        if (wizardState.step === 4) {
          const clientPlants = wizardState.client.plants
            ? wizardState.client.plants.split(',').map(p => p.trim()).filter(Boolean)
            : ['Unit-1 VSP'];

          // 1. Create Client
          const newComp = {
            id: wizardState.client.id,
            name: wizardState.client.name || 'New Client',
            code: wizardState.client.shortName || wizardState.client.name.slice(0, 3).toUpperCase(),
            shortName: wizardState.client.shortName || wizardState.client.name.slice(0, 3).toUpperCase(),
            address: wizardState.client.address || '',
            plants: clientPlants.length > 0 ? clientPlants : ['Unit-1 VSP'],
            dbHost: 'localhost:3306',
            dbName: (wizardState.client.shortName || 'client').toLowerCase().replace(/[^a-z0-9]/g, '_') + '_erp',
            dbUser: 'root',
            dbPass: '****',
            status: wizardState.client.status || 'Active'
          };
          this.state.companies.push(newComp);

          // 2. Create User
          if (wizardState.user.username || wizardState.user.id) {
            const newUser = {
              id: wizardState.user.id,
              name: wizardState.user.username || 'Client Admin',
              username: wizardState.user.username || 'client_admin',
              password: wizardState.user.password || 'Client@123',
              companyId: newComp.id,
              companyName: newComp.name,
              role: wizardState.user.role || 'Client Admin',
              plant: wizardState.user.plant || newComp.plants[0],
              department: wizardState.user.department || 'Administration',
              designation: wizardState.user.designation || 'Administrator',
              accessType: wizardState.user.accessType || 'Full Access',
              status: wizardState.user.status || 'Active',
              accessIps: 'Any IP'
            };
            this.state.users.push(newUser);
          }

          // 3. Create Role
          if (wizardState.role.name) {
            const newRole = {
              id: wizardState.role.id || `ROLE-${wizardState.role.name.toUpperCase().replace(/[^A-Z0-9]/g, '-')}`,
              name: wizardState.role.name,
              department: wizardState.role.department || 'General Operations',
              status: wizardState.role.status || 'Active',
              assignedMenus: wizardState.role.assignedMenus.length > 0 ? wizardState.role.assignedMenus : ['*'],
              crudPermissions: {},
              isProtected: false
            };
            this.state.roles.push(newRole);
          }

          // 4. Create Menu
          if (wizardState.menu.name) {
            const modKey = wizardState.menu.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
            const matchedIcon = lucideIcons.find(i => i.id === wizardState.menu.icon) || lucideIcons[0];
            const validSubmenus = (wizardState.menu.submenus || []).filter(s => s.name);
            const newMod = {
              id: `MOD-00${this.state.modulesConfig.length + 1}`,
              key: modKey,
              label: wizardState.menu.name,
              icon: wizardState.menu.icon,
              iconSvg: matchedIcon.svg,
              status: wizardState.menu.status,
              isVisible: wizardState.menu.status === 'Active',
              isProtected: false,
              submenusCount: validSubmenus.length
            };
            this.state.modulesConfig.push(newMod);
            this.state.submenusConfig[modKey] = validSubmenus;
          }

          this.saveState();
          this.logAudit('Company Setup', `Registered client: ${newComp.name} (${newComp.code}) via onboarding wizard with users, roles, and menus`);
          Modal.close();

          if (companyTable) {
            companyTable.setData(this.state.companies);
          } else {
            const c = document.getElementById('setup-subpage-content');
            if (c) this.renderCompanySetupTab(c);
          }

          Modal.success({
            title: 'Client Onboarding Completed Successfully',
            message: `Client <strong>${newComp.name}</strong> (${newComp.code}) has been successfully created with Production Plants, User, Role, and Menu configurations.`
          });
        }
      });

      // Step-specific bindings
      if (step === 2) {
        // Toggle password visibility
        const toggleBtn = document.getElementById('w-toggle-pwd-btn');
        const pwdInput = document.getElementById('w-usr-password');
        const eyeOpen = document.getElementById('w-pwd-eye-open');
        const eyeClosed = document.getElementById('w-pwd-eye-closed');

        if (toggleBtn && pwdInput) {
          toggleBtn.onclick = () => {
            const isPassword = pwdInput.type === 'password';
            pwdInput.type = isPassword ? 'text' : 'password';
            if (eyeOpen) eyeOpen.classList.toggle('hidden', isPassword);
            if (eyeClosed) eyeClosed.classList.toggle('hidden', !isPassword);
          };
        }
      }

      if (step === 3) {
        // Select All / Deselect All Menu Checkboxes
        document.getElementById('w-role-select-all')?.addEventListener('click', () => {
          document.querySelectorAll('.w-role-menu-cb').forEach(cb => { cb.checked = true; });
        });
        document.getElementById('w-role-deselect-all')?.addEventListener('click', () => {
          document.querySelectorAll('.w-role-menu-cb').forEach(cb => { cb.checked = false; });
        });
      }

      if (step === 4) {
        // Submenus list management
        const subListContainer = document.getElementById('w-submenus-list');
        const renderSubmenus = () => {
          if (!subListContainer) return;
          subListContainer.innerHTML = wizardState.menu.submenus.map((sub, idx) => `
            <div class="w-sub-row grid grid-cols-12 gap-2 items-center p-2 rounded-lg bg-white border border-[#EBECF0]">
              <div class="col-span-5">
                <input type="text" class="w-sub-name w-full text-xs px-2.5 py-1.5 border border-[#DFE1E6] rounded focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]" placeholder="Submenu Name" value="${sub.name}" />
              </div>
              <div class="col-span-4">
                <input type="text" class="w-sub-url w-full text-xs px-2.5 py-1.5 border border-[#DFE1E6] rounded font-mono text-[#006C7A] focus:outline-none focus:border-[#00A4B7]" placeholder="#/route" value="${sub.url}" />
              </div>
              <div class="col-span-2 text-center">
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="w-sub-status w-4 h-4 rounded text-[#00A4B7] accent-[#00A4B7]" ${sub.status === 'Active' ? 'checked' : ''} />
                </label>
              </div>
              <div class="col-span-1 text-center">
                <button type="button" data-idx="${idx}" class="w-sub-del-btn text-[#6B778C] hover:text-rose-600 p-1 rounded hover:bg-rose-50 transition-colors cursor-pointer" title="Delete submenu">
                  <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
              </div>
            </div>
          `).join('');

          subListContainer.querySelectorAll('.w-sub-del-btn').forEach(btn => {
            btn.onclick = (e) => {
              const delIdx = parseInt(btn.getAttribute('data-idx') || '0');
              if (wizardState.menu.submenus.length > 1) {
                wizardState.menu.submenus.splice(delIdx, 1);
                renderSubmenus();
              } else {
                Toast.show('At least one submenu item should be kept', 'info');
              }
            };
          });
        };

        renderSubmenus();

        document.getElementById('w-btn-add-sub')?.addEventListener('click', () => {
          wizardState.menu.submenus.push({ name: '', url: '', status: 'Active' });
          renderSubmenus();
        });

        // Icon Grid Picker
        const iconGrid = document.getElementById('w-lucide-icon-grid');
        const iconSearchInput = document.getElementById('w-icon-search-input');
        const renderIconGrid = (items) => {
          if (!iconGrid) return;
          iconGrid.innerHTML = items.map(item => `
            <button type="button" data-icon-id="${item.id}" class="w-icon-btn flex flex-col items-center justify-center p-2 rounded-lg border text-center transition-all cursor-pointer ${
              item.id === wizardState.menu.icon 
                ? 'border-[#00A4B7] bg-[#E0F2FE] text-[#006C7A] font-bold shadow-xs ring-1 ring-[#00A4B7]' 
                : 'border-[#DFE1E6] hover:bg-[#F4F5F7] text-[#42526E]'
            }">
              <span class="w-5 h-5 flex items-center justify-center pointer-events-none mb-1 text-current">${item.svg}</span>
              <span class="text-[9px] truncate w-full pointer-events-none leading-tight">${item.name}</span>
            </button>
          `).join('');

          iconGrid.querySelectorAll('.w-icon-btn').forEach(btn => {
            btn.onclick = () => {
              const iconId = btn.getAttribute('data-icon-id');
              if (iconId) {
                wizardState.menu.icon = iconId;
                const hiddenInput = document.getElementById('w-menu-icon-val');
                if (hiddenInput) hiddenInput.value = iconId;
                renderIconGrid(items);
              }
            };
          });
        };

        renderIconGrid(lucideIcons);

        if (iconSearchInput) {
          iconSearchInput.oninput = (e) => {
            const term = e.target.value.toLowerCase().trim();
            const filtered = term 
              ? lucideIcons.filter(i => i.id.includes(term) || i.name.includes(term))
              : lucideIcons;
            renderIconGrid(filtered);
          };
        }
      }
    };

    renderWizard(1);
  },

  showEditCompanyModal(company, companyTable) {
    this.showCompanyFormModal(company, true, companyTable);
  },

  showCompanyFormModal(company, isEdit = false, companyTable = null) {
    Modal.open({
      title: isEdit ? `Edit Client: ${company.name}` : 'Add Client',
      size: 'xl',
      content: `
        <form id="company-client-form" class="space-y-4 text-xs">
          <!-- Client Information Card (3 Columns with Full-Width Address Row) -->
          <div class="bg-transparent p-0 border-0 space-y-4">
            <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2.5">
              <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Client Information</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <!-- Row 1, Col 1: Client Name -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Client Name
                </label>
                <input type="text" id="cmp-name" value="${company.name || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7]" placeholder="e.g. Devi Fisheries Limited" />
              </div>

              <!-- Row 1, Col 2: Client Short Name -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Client Short Name
                </label>
                <input type="text" id="cmp-short-name" value="${company.code || company.shortName || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] font-mono uppercase" placeholder="e.g. DFL" />
              </div>

              <!-- Row 1, Col 3: Status -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Status
                </label>
                <select id="cmp-status" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7]">
                  <option value="Active" ${company.status === 'Active' ? 'selected' : ''}>Active</option>
                  <option value="Inactive" ${company.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
                </select>
              </div>

              <!-- Row 2: Production Plant (Full Width) -->
              <div class="col-span-1 sm:col-span-2 lg:col-span-3">
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Production Plant
                </label>
                <input type="text" id="cmp-plant" value="${(company.plants && company.plants.length > 0) ? company.plants.join(', ') : 'Unit-1 VSP'}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7]" placeholder="e.g. Unit-1 VSP, Unit-2 Singarayakonda" />
              </div>

              <!-- Row 3: Address in Full Width (Across all 3 columns) -->
              <div class="col-span-1 sm:col-span-2 lg:col-span-3">
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Address
                </label>
                <textarea id="cmp-address" rows="3" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7]" placeholder="Enter complete corporate entity address, plant location, city, pin code...">${company.address || ''}</textarea>
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: isEdit ? 'Save Changes' : 'Save',
          type: 'primary',
          onClick: (m) => {
            const name = document.getElementById('cmp-name')?.value.trim() || 'New Client';
            const shortName = document.getElementById('cmp-short-name')?.value.trim().toUpperCase() || 'CLI';
            const address = document.getElementById('cmp-address')?.value.trim();
            const status = document.getElementById('cmp-status')?.value || 'Active';
            const plantStr = document.getElementById('cmp-plant')?.value.trim() || 'Unit-1 VSP';
            const plants = plantStr.split(',').map(p => p.trim()).filter(Boolean);

            company.name = name;
            company.code = shortName;
            company.shortName = shortName;
            company.address = address;
            company.status = status;
            company.plants = plants.length > 0 ? plants : ['Unit-1 VSP'];

            if (!isEdit) {
              this.state.companies.push(company);
              this.logAudit('Company Setup', `Created client: ${company.name} (${company.code})`);
            } else {
              this.logAudit('Company Setup', `Updated client: ${company.name} (${company.code})`);
            }

            this.saveState();
            m.close();
            if (companyTable) {
              companyTable.setData(this.state.companies);
            } else {
              const c = document.getElementById('setup-subpage-content');
              if (c) this.renderCompanySetupTab(c);
            }

            // Confirmation Message Popup (same as Purchase module)
            Modal.success({
              title: isEdit ? 'Client Updated Successfully' : 'Client Registered Successfully',
              message: `Corporate client <strong>${company.name}</strong> (${company.code}) has been registered and updated in the system.`,
              details: [
                { label: 'Client Name', value: company.name },
                { label: 'Client Short Name', value: company.code },
                { label: 'Status', value: company.status },
                { label: 'Address', value: company.address || '—' }
              ]
            });
            Toast.show(isEdit ? `Client ${company.name} updated successfully` : `Client ${company.name} registered successfully!`, 'success', 'Saved');
          }
        }
      ]
    });
  },

  showAssignDatabaseModal(company, companyTable) {
    Modal.open({
      title: `Assign Database: ${company.name}`,
      size: 'xl',
      content: `
        <form id="assign-db-form" class="space-y-4 text-xs">
          <!-- Database Configuration Section (4 Columns) -->
          <div class="bg-transparent p-0 border-0 space-y-4">
            <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2.5">
              <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Database Configuration</span>
              <span class="text-[10px] font-bold text-[#0284C7] bg-[#F0F9FF] px-2.5 py-1 rounded border border-[#BAE6FD] font-mono">${company.code || company.shortName || 'DFL'}</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <!-- 1. DB Host -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  DB Host
                </label>
                <input type="text" id="asgn-db-host" value="${company.dbHost || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono focus:outline-none focus:border-[#0284C7]" placeholder="e.g. db-cluster-primary.rds.aws.com" />
              </div>

              <!-- 2. DB Name -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  DB Name
                </label>
                <input type="text" id="asgn-db-name" value="${company.dbName || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono focus:outline-none focus:border-[#0284C7]" placeholder="e.g. devi_fisheries_db" />
              </div>

              <!-- 3. User Name -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  User Name
                </label>
                <input type="text" id="asgn-db-user" value="${company.dbUser || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono focus:outline-none focus:border-[#0284C7]" placeholder="e.g. dfl_db_admin" />
              </div>

              <!-- 4. Password -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Password
                </label>
                <div class="relative">
                  <input type="password" id="asgn-db-pass" value="${company.dbPass || ''}" class="w-full text-xs pl-3 pr-10 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono focus:outline-none focus:border-[#0284C7]" placeholder="••••••••••••" />
                  <button type="button" id="toggle-asgn-db-pass-btn" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6B778C] hover:text-[#172B4D] transition-colors cursor-pointer p-1" title="Toggle password visibility" onclick="(function(btn){ const inp = document.getElementById('asgn-db-pass'); if (!inp) return; const isPwd = inp.type === 'password'; inp.type = isPwd ? 'text' : 'password'; const openI = btn.querySelector('#asgn-eye-open-icon'); const closeI = btn.querySelector('#asgn-eye-closed-icon'); if (openI && closeI) { if (isPwd) { openI.classList.add('hidden'); closeI.classList.remove('hidden'); } else { openI.classList.remove('hidden'); closeI.classList.add('hidden'); } } })(this)">
                    <svg id="asgn-eye-open-icon" class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    <svg id="asgn-eye-closed-icon" class="w-4 h-4 pointer-events-none hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save',
          type: 'primary',
          onClick: (m) => {
            const dbHost = document.getElementById('asgn-db-host')?.value.trim();
            const dbName = document.getElementById('asgn-db-name')?.value.trim();
            const dbUser = document.getElementById('asgn-db-user')?.value.trim();
            const dbPass = document.getElementById('asgn-db-pass')?.value;

            company.dbHost = dbHost;
            company.dbName = dbName;
            company.dbUser = dbUser;
            company.dbPass = dbPass;

            this.saveState();
            m.close();
            this.logAudit('Company Setup', `Configured database for client: ${company.name} (${dbName || 'unassigned'})`);
            if (companyTable) {
              companyTable.setData(this.state.companies);
            } else {
              const c = document.getElementById('setup-subpage-content');
              if (c) this.renderCompanySetupTab(c);
            }

            // Confirmation Message Popup (same as Purchase module)
            Modal.success({
              title: 'Database Assigned Successfully',
              message: `Multi-tenant database configuration for corporate client <strong>${company.name}</strong> has been saved.`,
              details: [
                { label: 'Client', value: `${company.name} (${company.code || company.shortName || 'DFL'})` },
                { label: 'DB Host', value: company.dbHost || '—' },
                { label: 'DB Name', value: company.dbName || '—' },
                { label: 'User Name', value: company.dbUser || '—' }
              ]
            });
            Toast.show(`Database configured for ${company.name} successfully!`, 'success', 'DB Assigned');
          }
        }
      ]
    });

    setTimeout(() => {
      const toggleBtn = document.getElementById('toggle-asgn-db-pass-btn');
      const passInput = document.getElementById('asgn-db-pass');
      if (toggleBtn && passInput) {
        toggleBtn.onclick = () => {
          const isPwd = passInput.type === 'password';
          passInput.type = isPwd ? 'text' : 'password';
          const openI = toggleBtn.querySelector('#asgn-eye-open-icon');
          const closeI = toggleBtn.querySelector('#asgn-eye-closed-icon');
          if (openI && closeI) {
            if (isPwd) {
              openI.classList.add('hidden');
              closeI.classList.remove('hidden');
            } else {
              openI.classList.remove('hidden');
              closeI.classList.add('hidden');
            }
          }
        };
      }
    }, 40);
  },

  // =========================================================================
  // 2. USER MANAGEMENT TAB (ERP Users & Personas)
  // =========================================================================
  renderUserManagementTab(container) {
    if (!this.state.userFilterCompany) this.state.userFilterCompany = 'ALL';

    const getFilteredUsers = () => {
      let filtered = [...this.state.users];
      const filterId = this.state.userFilterCompany || 'ALL';
      if (filterId !== 'ALL') {
        const matchedComp = this.state.companies.find(c => c.id === filterId);
        filtered = filtered.filter(u => u.companyId === filterId || (matchedComp && (u.companyName === matchedComp.name || u.companyName === matchedComp.shortName)));
      }
      if (this.state.userSearchRole) {
        filtered = filtered.filter(u => u.role === this.state.userSearchRole || u.designation === this.state.userSearchRole);
      }
      return filtered;
    };

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-3">
            <h1 class="text-xl font-extrabold text-[#172B4D]">Users Management</h1>
            ${this.state.userSearchRole ? `
              <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] rounded-lg text-xs font-semibold">
                <span>Role: <strong>${this.state.userSearchRole}</strong></span>
                <button type="button" id="btn-clear-role-filter" class="text-[#0284C7] hover:text-[#00A4B7] font-bold text-sm leading-none ml-1 cursor-pointer" title="Clear role filter">×</button>
              </div>
            ` : ''}
          </div>
          <div class="flex items-center gap-3 flex-wrap">
            <button id="btn-add-user" class="btn-primary px-3 py-1.5 rounded text-xs flex items-center gap-1.5 shadow-xs cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add User</span>
            </button>
          </div>
        </div>

        <!-- Search / Filter Fields: Select Client, Select Role, Status -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button type="button" id="users-top-reset-btn" class="dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>

              <button type="button" id="users-top-toggle-btn" class="dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" id="users-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid -->
          <div id="users-top-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;" style="margin-top: 12px !important;">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT CLIENT</label>
              <select id="users-top-client-select" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Clients (${this.state.companies.length})</option>
                ${this.state.companies.map(c => `<option value="${c.id}" ${this.state.userFilterCompany === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT ROLE</label>
              <select id="users-top-role-select" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Roles (${this.state.roles.length})</option>
                ${this.state.roles.map(r => `<option value="${r.name}" ${this.state.userSearchRole === r.name ? 'selected' : ''}>${r.name}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS</label>
              <select id="users-top-status-select" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Statuses (Select)</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div class="flex items-end">
              <button type="button" id="users-top-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px] bg-[#00A4B7] hover:bg-[#008F9F] text-white">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <div id="users-table-container"></div>
      </div>
    `;

    const usersTable = new DataTable({
      containerId: 'users-table-container',
      data: getFilteredUsers(),
      keyField: 'id',
      tableTitle: 'Users Registry',
      searchable: true,
      hideTopFilterBar: true,
      exportable: true,
      pageSize: 10,
      onRowClick: (row) => this.showUserDetailsAndRoleAccessModal(row),
      columns: [
        { 
          field: 'sNo', 
          header: 'SNO', 
          render: (v, r, i) => `<span class="font-bold text-[#5E6C84]">${i !== undefined ? i + 1 : 1}</span>` 
        },
        { 
          field: 'companyName', 
          header: 'Client Name', 
          render: (v) => `<span class="font-bold text-[#172B4D]">${v || 'Devi Fisheries Limited'}</span>` 
        },
        { 
          field: 'id', 
          header: 'User ID', 
          render: (v) => `<span class="font-bold text-[#172B4D] font-mono">${v}</span>` 
        },
        { 
          field: 'username', 
          header: 'User Name', 
          render: (v) => `<span class="font-mono text-xs text-[#0284C7] font-semibold">${v || '—'}</span>` 
        },
        { 
          field: 'role', 
          header: 'Role', 
          render: (v) => `
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] whitespace-nowrap shrink-0 shadow-2xs" style="border-radius: 9999px !important; font-size: 10px !important; line-height: 14px !important;">
              <span>${v || '—'}</span>
            </span>
          ` 
        },
        { 
          field: 'productionPlant', 
          header: 'Production Plant', 
          render: (v, r) => {
            const p = v || (Array.isArray(r.plantAccess) ? r.plantAccess.join(', ') : r.plantAccess) || 'All Plants';
            return `<span class="text-xs text-[#42526E] font-medium">${p}</span>`;
          }
        },
        { 
          field: 'department', 
          header: 'Department', 
          render: (v) => `<span class="text-xs text-[#42526E] font-medium">${v || '—'}</span>` 
        },
        { 
          field: 'designation', 
          header: 'Designation', 
          render: (v, r) => `<span class="text-xs text-[#172B4D] font-medium">${v || r.role || '—'}</span>` 
        },
        { 
          field: 'accessType', 
          header: 'Access Type', 
          render: (v) => `
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] whitespace-nowrap shrink-0 shadow-2xs" style="border-radius: 9999px !important; font-size: 10px !important; line-height: 14px !important;">
              <span>${v || 'Standard Access'}</span>
            </span>
          ` 
        },
        { field: 'status', header: 'Status', type: 'status' }
      ],
      actions: [
        {
          label: 'Login',
          icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>`,
          onClick: (row) => this.handleUserImpersonateLogin(row)
        },
        {
          label: 'Edit',
          icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
          onClick: (row) => this.showEditUserModal(row, usersTable)
        },
        {
          label: 'Change Password',
          icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>`,
          onClick: (row) => this.showChangePasswordModal(row)
        },
        {
          label: (row) => row.status === 'Active' ? 'Deactivate' : 'Activate',
          icon: (row) => row.status === 'Active'
            ? `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="8" x2="22" y2="13" stroke-width="2" stroke-linecap="round"/><line x1="22" y1="8" x2="17" y2="13" stroke-width="2" stroke-linecap="round"/></svg>`
            : `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          onClick: (row) => {
            const isCurrentlyActive = (row.status || 'Active').toLowerCase() === 'active';
            if (isCurrentlyActive) {
              Modal.confirm({
                title: `Deactivate User ${row.username || row.name || row.id}`,
                message: `Are you sure you want to deactivate user <strong>${row.username || row.name || row.id}</strong> (${row.id})? They will not be able to log in until reactivated.`,
                confirmText: 'Deactivate',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  row.status = 'Inactive';
                  usersTable.setData(getFilteredUsers());
                  this.saveState();
                  this.logAudit('User Setup', `Deactivated user ${row.username || row.id}`);
                  Modal.success({
                    title: 'User Deactivated',
                    message: `User <strong>${row.username || row.id}</strong> has been successfully deactivated.`,
                    details: [
                      { label: 'Client', value: row.companyName || '—' },
                      { label: 'User ID', value: row.id },
                      { label: 'User Name', value: row.username || '—' },
                      { label: 'Status', value: 'Inactive' }
                    ]
                  });
                }
              });
            } else {
              Modal.confirm({
                title: `Activate User ${row.username || row.name || row.id}`,
                message: `Are you sure you want to activate user <strong>${row.username || row.name || row.id}</strong> (${row.id})?`,
                confirmText: 'Activate',
                cancelText: 'Cancel',
                isDestructive: false,
                onConfirm: () => {
                  row.status = 'Active';
                  usersTable.setData(getFilteredUsers());
                  this.saveState();
                  this.logAudit('User Setup', `Activated user ${row.username || row.id}`);
                  Modal.success({
                    title: 'User Activated',
                    message: `User <strong>${row.username || row.id}</strong> is now Active.`,
                    details: [
                      { label: 'Client', value: row.companyName || '—' },
                      { label: 'User ID', value: row.id },
                      { label: 'User Name', value: row.username || '—' },
                      { label: 'Status', value: 'Active' }
                    ]
                  });
                }
              });
            }
          }
        }
      ]
    });

    // Users top filter listeners
    const filterClient = document.getElementById('users-top-client-select');
    const filterRole = document.getElementById('users-top-role-select');
    const filterStatus = document.getElementById('users-top-status-select');
    const searchBtn = document.getElementById('users-top-search-btn');
    const resetBtn = document.getElementById('users-top-reset-btn');
    const toggleBtn = document.getElementById('users-top-toggle-btn');
    const filterBody = document.getElementById('users-top-filter-body');
    const toggleText = document.getElementById('users-top-toggle-text');
    const toggleIcon = document.getElementById('users-top-toggle-icon');

    if (toggleBtn && filterBody) {
      let isCollapsed = false;
      toggleBtn.addEventListener('click', () => {
        isCollapsed = !isCollapsed;
        const h = filterBody.previousElementSibling;
        if (isCollapsed) {
          filterBody.classList.add('hidden');
          if (h) { h.classList.remove('pb-1'); h.classList.add('pb-0'); }
          if (toggleIcon) toggleIcon.classList.add('-rotate-90');
          toggleBtn.title = 'Show Filter';
          toggleBtn.setAttribute('aria-label', 'Show Filter');
        } else {
          filterBody.classList.remove('hidden');
          if (h) { h.classList.add('pb-1'); h.classList.remove('pb-0'); }
          if (toggleIcon) toggleIcon.classList.remove('-rotate-90');
          toggleBtn.title = 'Hide Filter';
          toggleBtn.setAttribute('aria-label', 'Hide Filter');
        }
      });
    }

    const applyUsersFilters = () => {
      const cVal = filterClient ? filterClient.value : 'ALL';
      const rVal = filterRole ? filterRole.value : 'ALL';
      const sVal = filterStatus ? filterStatus.value : 'ALL';

      this.state.userFilterCompany = cVal;
      this.state.userSearchRole = rVal !== 'ALL' ? rVal : null;

      const filtered = this.state.users.filter(u => {
        const matchClient = (cVal === 'ALL') || (u.companyId === cVal) || (u.companyName === cVal);
        const matchRole = (rVal === 'ALL') || (u.role === rVal) || (u.designation === rVal);
        const matchStatus = (sVal === 'ALL') || (u.status === sVal);
        return matchClient && matchRole && matchStatus;
      });

      usersTable.setData(filtered);
    };

    if (searchBtn) searchBtn.addEventListener('click', () => {
      applyUsersFilters();
      Toast.show('Filtered users list updated.', 'info');
    });
    if (filterClient) filterClient.addEventListener('change', applyUsersFilters);
    if (filterRole) filterRole.addEventListener('change', applyUsersFilters);
    if (filterStatus) filterStatus.addEventListener('change', applyUsersFilters);

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (filterClient) filterClient.value = 'ALL';
        if (filterRole) filterRole.value = 'ALL';
        if (filterStatus) filterStatus.value = 'ALL';
        this.state.userFilterCompany = 'ALL';
        delete this.state.userSearchRole;
        this.saveState();
        usersTable.setData(this.state.users);
        Toast.show('Filters have been reset.', 'info');
      });
    }

    const clearRoleBtn = document.getElementById('btn-clear-role-filter');
    if (clearRoleBtn) {
      clearRoleBtn.onclick = () => {
        delete this.state.userSearchRole;
        if (filterRole) filterRole.value = 'ALL';
        this.saveState();
        applyUsersFilters();
      };
    }

    const addBtn = document.getElementById('btn-add-user');
    if (addBtn) {
      addBtn.onclick = () => this.showAddUserModal(usersTable, this.state.userFilterCompany);
    }
  },

  showAddUserModal(usersTable = null, preselectedCompanyId = null) {
    const nextNum = Math.floor(100 + Math.random() * 900);
    let defaultComp = this.state.companies[0] || { id: 'CMP-001', name: 'Devi Fisheries Limited', code: 'DFL' };
    if (preselectedCompanyId && preselectedCompanyId !== 'ALL') {
      const found = this.state.companies.find(c => c.id === preselectedCompanyId);
      if (found) defaultComp = found;
    }

    this.showUserFormModal({
      id: `USR-${nextNum}`,
      name: '',
      username: '',
      email: '',
      phone: '',
      companyId: defaultComp.id,
      companyName: defaultComp.name,
      department: 'Procurement',
      designation: 'Procurement Officer',
      accessType: 'Standard Access',
      password: '',
      role: 'Procurement Officer',
      status: 'Active',
      mfa: 'Enabled',
      plantAccess: ['Unit-1 VSP (Harbour)'],
      lastLogin: 'Never'
    }, false, usersTable);
  },

  showEditUserModal(user, usersTable = null) {
    this.showUserFormModal(user, true, usersTable);
  },

  showUserFormModal(user, isEdit = false, usersTable = null) {
    const defaultComp = this.state.companies[0] || { id: 'CMP-001', name: 'Devi Fisheries Limited', code: 'DFL' };
    const currentComp = this.state.companies.find(c => c.id === (user.companyId || defaultComp.id) || c.name === user.companyName) || defaultComp;
    const allPlants = ['All Plants', ...new Set(this.state.companies.flatMap(c => c.plants || []))];
    const initialPlants = currentComp?.plants && currentComp.plants.length > 0 ? ['All Plants', ...currentComp.plants] : allPlants;
    const currentPlant = user.productionPlant || (Array.isArray(user.plantAccess) ? user.plantAccess[0] : user.plantAccess) || 'All Plants';
    const allRoles = (this.state.roles && this.state.roles.length > 0)
      ? this.state.roles.map(r => r.name)
      : [
        'System Administrator',
        'Super Administrator',
        'Procurement Officer',
        'Quality Lab Inspector',
        'Production Floor Manager',
        'Coldstore Keeper',
        'Sales & Exports Manager'
      ];
    const currentRole = user.role || user.designation || 'Procurement Officer';
    const accessIps = user.accessIps || user.allowedIps || '';

    Modal.open({
      title: isEdit ? `Edit User: ${user.username || user.name || user.id}` : 'Add User',
      size: 'xl',
      content: `
        <form id="user-setup-form" class="space-y-4 text-xs">
          <!-- User Information Card (4 Columns Layout) -->
          <div class="bg-transparent p-0 border-0 space-y-4">
            <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2.5">
              <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">User Information</span>
              ${isEdit ? `<span class="text-[10px] font-bold text-[#0284C7] bg-[#F0F9FF] px-2.5 py-1 rounded border border-[#BAE6FD] font-mono">${user.id}</span>` : ''}
            </div>

            <!-- 4 Columns Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <!-- 1. Client Name (Dropdown field) -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Client Name
                </label>
                <select id="usr-modal-company" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]">
                  ${this.state.companies.map(c => `
                    <option value="${c.id}" ${c.id === (user.companyId || defaultComp.id) || c.name === user.companyName ? 'selected' : ''}>
                      ${c.name}
                    </option>
                  `).join('')}
                </select>
              </div>

              <!-- 2. User ID -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  User ID
                </label>
                <input type="text" id="usr-modal-id" value="${user.id || ''}" placeholder="e.g. USR-009" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
              </div>

              <!-- 3. User Name (Free Text field) -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  User Name
                </label>
                <input type="text" id="usr-modal-username" value="${user.username || ''}" placeholder="e.g. ramesh_varma" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
              </div>

              <!-- 4. Password (Only displayed on Add User; on Edit, no password field is shown) -->
              ${!isEdit ? `
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Password <span class="text-rose-500">*</span>
                </label>
                <div class="relative">
                  <input type="password" id="usr-modal-password" value="${user.password || ''}" placeholder="••••••••••••" class="w-full text-xs pl-3 pr-10 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono focus:outline-none focus:border-[#0284C7]" />
                  <button type="button" id="toggle-usr-modal-password-btn" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6B778C] hover:text-[#172B4D] transition-colors cursor-pointer p-1" title="Toggle password visibility">
                    <svg id="usr-eye-open-icon" class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    <svg id="usr-eye-closed-icon" class="w-4 h-4 pointer-events-none hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>
                  </button>
                </div>
              </div>
              ` : ''}

              <!-- 5. Role -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Role
                </label>
                <select id="usr-modal-role" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]">
                  ${allRoles.map(r => `
                    <option value="${r}" ${currentRole === r ? 'selected' : ''}>
                      ${r}
                    </option>
                  `).join('')}
                  ${(!allRoles.includes(currentRole) && currentRole) ? `<option value="${currentRole}" selected>${currentRole}</option>` : ''}
                </select>
              </div>

              <!-- 6. Production Plant -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Production Plant
                </label>
                <select id="usr-modal-plant" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]">
                  ${initialPlants.map(p => `
                    <option value="${p}" ${currentPlant === p ? 'selected' : ''}>
                      ${p}
                    </option>
                  `).join('')}
                </select>
              </div>

              <!-- 7. Department -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Department
                </label>
                <input type="text" id="usr-modal-dept" list="usr-modal-dept-list" value="${user.department || ''}" placeholder="e.g. Procurement" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] text-[#172B4D]" />
                <datalist id="usr-modal-dept-list">
                  <option value="Procurement">
                  <option value="Processing Floor">
                  <option value="Quality Assurance">
                  <option value="Cold Storage">
                  <option value="Logistics & Fleet">
                  <option value="Sales & Exports">
                  <option value="Finance & Accounts">
                  <option value="Administration">
                  <option value="IT & Systems">
                </datalist>
              </div>

              <!-- 8. Designation -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Designation
                </label>
                <input type="text" id="usr-modal-desig" value="${user.designation || ''}" placeholder="e.g. Procurement Manager" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] text-[#172B4D]" />
              </div>

              <!-- 9. Access Type -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Access Type
                </label>
                <select id="usr-modal-access" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]">
                  <option value="Full Access" ${user.accessType === 'Full Access' ? 'selected' : ''}>Full Access</option>
                  <option value="Admin / Manager" ${user.accessType === 'Admin / Manager' ? 'selected' : ''}>Admin / Manager</option>
                  <option value="Standard Access" ${(!user.accessType || user.accessType === 'Standard Access') ? 'selected' : ''}>Standard Access</option>
                  <option value="View Only" ${user.accessType === 'View Only' ? 'selected' : ''}>View Only / Read Only</option>
                  <option value="Operator" ${user.accessType === 'Operator' ? 'selected' : ''}>Operator</option>
                </select>
              </div>

              <!-- 10. Access IPs (Only shown on Edit User) -->
              ${isEdit ? `
              <div class="col-span-1 sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0 flex items-center justify-between">
                  <span>Access IPs</span>
                  <span class="text-[10px] text-[#5E6C84] font-normal font-sans">Comma-separated or leave blank for Any</span>
                </label>
                <input type="text" id="usr-modal-access-ips" value="${accessIps}" placeholder="e.g. 182.72.65.10, 192.168.1.*, 10.0.0.0/24 (or Any IP)" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
              </div>
              ` : ''}

              <!-- 11. Status -->
              <div>
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                  Status
                </label>
                <select id="usr-modal-status" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]">
                  <option value="Active" ${user.status === 'Active' ? 'selected' : ''}>Active</option>
                  <option value="Inactive" ${user.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: isEdit ? 'Save Changes' : 'Save User',
          type: 'primary',
          onClick: (m) => {
            const compSelect = document.getElementById('usr-modal-company');
            const compId = compSelect?.value || defaultComp.id;
            const matchedComp = this.state.companies.find(c => c.id === compId) || this.state.companies[0];
            const compName = matchedComp?.name || user.companyName || 'Devi Fisheries Limited';
            const dept = document.getElementById('usr-modal-dept')?.value.trim();
            const access = document.getElementById('usr-modal-access')?.value;
            const desig = document.getElementById('usr-modal-desig')?.value.trim();
            const uid = document.getElementById('usr-modal-id')?.value.trim() || user.id;
            const uname = document.getElementById('usr-modal-username')?.value.trim();
            const pwd = !isEdit 
              ? (document.getElementById('usr-modal-password')?.value || user.password || 'Devi@123')
              : (user.password || 'Devi@123');
            const status = document.getElementById('usr-modal-status')?.value || 'Active';
            const role = document.getElementById('usr-modal-role')?.value || user.role || 'Procurement Officer';
            const plant = document.getElementById('usr-modal-plant')?.value || 'All Plants';
            const inputIps = isEdit 
              ? (document.getElementById('usr-modal-access-ips')?.value.trim() || user.accessIps || 'Any IP')
              : (user.accessIps || 'Any IP');

            user.id = uid;
            user.companyId = compId;
            user.companyName = compName;
            user.department = dept;
            user.accessType = access;
            user.designation = desig;
            user.username = uname || uid.toLowerCase();
            user.name = user.name || uname || desig || uid;
            user.password = pwd;
            user.status = status;
            user.role = role;
            user.productionPlant = plant;
            user.plantAccess = [plant];
            user.accessIps = inputIps;
            user.allowedIps = inputIps;

            if (!isEdit) {
              this.state.users.push(user);
              this.logAudit('User Setup', `Registered user: ${user.username || user.id} for ${user.companyName}`);
            } else {
              this.logAudit('User Setup', `Updated user: ${user.username || user.id}`);
            }

            // Sync user counts across all configured roles
            if (this.state.roles && Array.isArray(this.state.roles)) {
              this.state.roles.forEach(r => {
                r.usersCount = this.state.users.filter(u => u.role === r.name || u.role === r.id).length;
              });
            }

            this.saveState();
            m.close();

            if (usersTable) {
              const filterId = this.state.userFilterCompany || 'ALL';
              const matchedComp = this.state.companies.find(c => c.id === filterId);
              let filteredData = filterId === 'ALL'
                ? this.state.users
                : this.state.users.filter(u => u.companyId === filterId || (matchedComp && (u.companyName === matchedComp.name || u.companyName === matchedComp.shortName)));
              if (this.state.userSearchRole) {
                filteredData = filteredData.filter(u => u.role === this.state.userSearchRole);
              }
              usersTable.setData(filteredData);

              const filterEl = document.getElementById('usr-client-filter');
              if (filterEl) {
                filterEl.innerHTML = `
                  <option value="ALL">All Clients (${this.state.users.length})</option>
                  ${this.state.companies.map(c => {
                    const count = this.state.users.filter(u => u.companyId === c.id || u.companyName === c.name || u.companyName === c.shortName).length;
                    return `<option value="${c.id}" ${this.state.userFilterCompany === c.id ? 'selected' : ''}>${c.name} (${count})</option>`;
                  }).join('')}
                `;
                filterEl.value = this.state.userFilterCompany || 'ALL';
              }
            } else {
              const c = document.getElementById('setup-subpage-content');
              if (c) this.renderUserManagementTab(c);
            }

            // Confirmation Message Popup (same as Purchase module)
            Modal.success({
              title: isEdit ? 'User Updated Successfully' : 'User Registered Successfully',
              message: `User <strong>${user.username || user.id}</strong> has been configured for corporate client <strong>${user.companyName}</strong>.`,
              details: [
                { label: 'Client Name', value: user.companyName },
                { label: 'User ID', value: user.id },
                { label: 'User Name', value: user.username || '—' },
                { label: 'Role', value: user.role || '—' },
                { label: 'Production Plant', value: user.productionPlant || (user.plantAccess ? user.plantAccess.join(', ') : 'All Plants') },
                { label: 'Access IPs', value: user.accessIps || 'Any IP' },
                { label: 'Department', value: user.department || '—' },
                { label: 'Designation', value: user.designation || '—' },
                { label: 'Access Type', value: user.accessType || 'Standard Access' },
                { label: 'Status', value: user.status || 'Active' }
              ]
            });

            Toast.show(isEdit ? `User ${user.username || user.id} updated successfully` : `User ${user.username || user.id} registered successfully!`, 'success', 'Saved');
          }
        }
      ]
    });

    // Modal field interaction listeners: Password toggle, dynamic plant list based on client, role dept auto-suggestion, change password trigger
    setTimeout(() => {
      const toggleBtn = document.getElementById('toggle-usr-modal-password-btn');
      const pwdInput = document.getElementById('usr-modal-password');
      if (toggleBtn && pwdInput) {
        toggleBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          const isPwd = pwdInput.type === 'password';
          pwdInput.type = isPwd ? 'text' : 'password';
          const openI = toggleBtn.querySelector('#usr-eye-open-icon');
          const closeI = toggleBtn.querySelector('#usr-eye-closed-icon');
          if (openI && closeI) {
            if (isPwd) {
              openI.classList.add('hidden');
              closeI.classList.remove('hidden');
            } else {
              openI.classList.remove('hidden');
              closeI.classList.add('hidden');
            }
          }
        };
      }

      // Change Password button inside Edit User modal
      const editChangePwdBtn = document.getElementById('btn-usr-modal-change-pwd');
      if (editChangePwdBtn) {
        editChangePwdBtn.onclick = () => {
          this.showChangePasswordModal(user);
        };
      }

      // Dynamic Plant dropdown based on selected Client
      const compSelect = document.getElementById('usr-modal-company');
      const plantSelect = document.getElementById('usr-modal-plant');
      if (compSelect && plantSelect) {
        compSelect.onchange = () => {
          const selectedComp = this.state.companies.find(c => c.id === compSelect.value);
          const plants = (selectedComp && Array.isArray(selectedComp.plants) && selectedComp.plants.length > 0)
            ? selectedComp.plants
            : ['All Plants', 'Plant 1', 'Plant 2'];
          plantSelect.innerHTML = plants.map(p => `<option value="${p}">${p}</option>`).join('');
        };
      }

      // Auto-suggest Department when Role is selected
      const roleSelect = document.getElementById('usr-modal-role');
      const deptInput = document.getElementById('usr-modal-dept');
      if (roleSelect && deptInput) {
        roleSelect.onchange = () => {
          const matchedRole = this.state.roles.find(r => r.name === roleSelect.value || r.id === roleSelect.value);
          if (matchedRole && matchedRole.department) {
            deptInput.value = matchedRole.department;
          }
        };
      }
    }, 40);
  },

  showChangePasswordModal(user) {
    if (!user) return;

    Modal.open({
      title: `Change Password: ${user.username || user.name || user.id}`,
      size: 'sm',
      content: `
        <form id="change-pwd-modal-form" class="space-y-3.5 text-xs" onsubmit="return false;">
          <div>
            <label class="block text-xs font-semibold text-[#172B4D] mb-0">
              New Password <span class="text-rose-500">*</span>
            </label>
            <div class="relative">
              <input 
                type="password" 
                id="cpwd-modal-new" 
                placeholder="Enter new password" 
                class="w-full text-xs pl-3 pr-10 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono focus:outline-none focus:border-[#0284C7]" 
                required 
              />
              <button type="button" class="btn-toggle-cpwd absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6B778C] hover:text-[#172B4D] p-1 cursor-pointer" data-target="cpwd-modal-new" title="Toggle password visibility">
                <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </button>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-[#172B4D] mb-0">
              Confirm New Password <span class="text-rose-500">*</span>
            </label>
            <div class="relative">
              <input 
                type="password" 
                id="cpwd-modal-confirm" 
                placeholder="Confirm new password" 
                class="w-full text-xs pl-3 pr-10 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono focus:outline-none focus:border-[#0284C7]" 
                required 
              />
              <button type="button" class="btn-toggle-cpwd absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6B778C] hover:text-[#172B4D] p-1 cursor-pointer" data-target="cpwd-modal-confirm" title="Toggle password visibility">
                <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </button>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Change Password',
          type: 'primary',
          onClick: (m) => {
            const newPwd = document.getElementById('cpwd-modal-new')?.value;
            const confirmPwd = document.getElementById('cpwd-modal-confirm')?.value;

            if (!newPwd) {
              Toast.show('Please enter a new password', 'warning', 'Required');
              document.getElementById('cpwd-modal-new')?.focus();
              return;
            }

            if (newPwd !== confirmPwd) {
              Toast.show('Passwords do not match. Please try again.', 'error', 'Mismatch');
              document.getElementById('cpwd-modal-confirm')?.focus();
              return;
            }

            user.password = newPwd;
            this.saveState();
            this.logAudit('User Setup', `Updated password for user ${user.username || user.id}`);
            m.close();

            // Confirmation Popup
            Modal.success({
              title: 'Password Changed Successfully',
              message: `The password for user <strong>${user.username || user.id}</strong> has been updated successfully.`,
              details: [
                { label: 'Client', value: user.companyName || '—' },
                { label: 'User ID', value: user.id },
                { label: 'User Name', value: user.username || user.name || '—' },
                { label: 'Role', value: user.role || '—' },
                { label: 'Status', value: user.status || 'Active' }
              ]
            });

            Toast.show(`Password updated for ${user.username || user.id}`, 'success', 'Password Changed');
          }
        }
      ]
    });

    setTimeout(() => {
      document.querySelectorAll('.btn-toggle-cpwd').forEach(btn => {
        btn.onclick = () => {
          const inp = document.getElementById(btn.dataset.target);
          if (inp) {
            inp.type = inp.type === 'password' ? 'text' : 'password';
          }
        };
      });
    }, 40);
  },

  handleUserImpersonateLogin(user) {
    if (!user) return;
    Modal.confirm({
      title: `Login as ${user.username || user.name || user.id}`,
      message: `Are you sure you want to log in and switch session to <strong>${user.username || user.name}</strong> (${user.role}) for corporate client <strong>${user.companyName}</strong>?`,
      confirmText: 'Log In as User',
      cancelText: 'Cancel',
      isDestructive: false,
      onConfirm: () => {
        this.logAudit('User Session', `Switched login session to ${user.username || user.id} (${user.role})`);
        Modal.success({
          title: 'Logged In Successfully',
          message: `You are now logged in as <strong>${user.username || user.name}</strong> (${user.role}).`,
          details: [
            { label: 'Client', value: user.companyName || 'Devi Fisheries Limited' },
            { label: 'User ID', value: user.id },
            { label: 'User Name', value: user.username || '—' },
            { label: 'Role', value: user.role || '—' },
            { label: 'Production Plant', value: user.productionPlant || (user.plantAccess ? user.plantAccess.join(', ') : 'All Plants') }
          ],
          onClose: () => {
            location.hash = '#/dashboard';
          }
        });
      }
    });
  },

  // =========================================================================
  // 2b. ROLES MANAGEMENT TAB
  // =========================================================================
  renderRolesTab(container) {
    const departments = Array.from(new Set([
      'Raw Material Procurement',
      'Quality Assurance & Lab',
      'Production & Processing Floor',
      'Cold Storage & Logistics',
      'Sales, Exports & Documentation',
      'Executive Management',
      'Finance & Accounts',
      'IT & Systems Administration',
      'General Operations',
      ...this.state.roles.map(r => r.department).filter(Boolean)
    ]));

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Roles Management</h1>
          </div>
          <div class="flex items-center gap-2">
            <button id="btn-add-role" class="btn-primary px-3 py-1.5 rounded text-xs flex items-center gap-1.5 shadow-xs cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add Role</span>
            </button>
          </div>
        </div>

        <!-- Search / Filter Fields: Select Department, Status, Role Type -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button type="button" id="roles-top-reset-btn" class="dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>

              <button type="button" id="roles-top-toggle-btn" class="dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" id="roles-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid -->
          <div id="roles-top-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;" style="margin-top: 12px !important;">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT DEPARTMENT</label>
              <select id="roles-top-dept-select" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Departments (${departments.length})</option>
                ${departments.map(d => `<option value="${d}">${d}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS</label>
              <select id="roles-top-status-select" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Statuses (Select)</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ROLE TYPE</label>
              <select id="roles-top-type-select" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Role Types</option>
                <option value="SYSTEM">System Roles (Protected)</option>
                <option value="CUSTOM">Custom Roles</option>
              </select>
            </div>

            <div class="flex items-end">
              <button type="button" id="roles-top-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px] bg-[#00A4B7] hover:bg-[#008F9F] text-white">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <div id="roles-table-container"></div>
      </div>
    `;

    const rolesTable = new DataTable({
      containerId: 'roles-table-container',
      data: this.state.roles,
      keyField: 'id',
      tableTitle: 'Roles Registry',
      searchable: true,
      hideTopFilterBar: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { 
          field: 'sNo', 
          header: 'SNO', 
          render: (v, r, i) => `<span class="font-bold text-[#5E6C84]">${i !== undefined ? i + 1 : 1}</span>` 
        },
        { 
          field: 'name', 
          header: 'Role Name', 
          render: (v, r) => `
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-[#172B4D] text-xs">${v}</span>
              ${r.isProtected ? '<span class="ml-1 text-[9.5px] font-bold text-[#8993A4] bg-[#F4F5F7] px-1.5 py-0.5 rounded border border-[#DFE1E6]">🔒 System</span>' : ''}
            </div>
          ` 
        },
        { 
          field: 'id', 
          header: 'Role ID', 
          render: (v) => `<span class="font-mono text-xs font-semibold text-[#0284C7]">${v}</span>` 
        },
        { 
          field: 'department', 
          header: 'Department', 
          render: (v) => `<span class="text-xs text-[#42526E] font-medium">${v || 'General Operations'}</span>` 
        },
        { 
          field: 'assignedMenus', 
          header: 'Assigned Menus', 
          render: (v, r) => {
            const assigned = Array.isArray(v) ? v : [];
            const isAll = assigned.includes('*') || assigned.length >= this.state.modulesConfig.length;
            if (isAll) {
              return `<span class="lozenge lozenge-purple capsule-sm whitespace-nowrap" style="border-radius: 9999px !important; font-size: 10px !important; line-height: 14px !important; padding: 2px 8px !important;">All Menus (Full Access)</span>`;
            }
            if (assigned.length === 0) {
              return `<span class="text-xs text-[#8993A4] italic whitespace-nowrap">No menus assigned</span>`;
            }
            const matchedMods = this.state.modulesConfig.filter(m => assigned.includes(m.key) || assigned.includes(m.id));
            const maxVisible = 2;
            const hasMore = matchedMods.length > maxVisible;
            const displayList = hasMore ? matchedMods.slice(0, maxVisible) : matchedMods;
            const remainingCount = matchedMods.length - maxVisible;

            return `
              <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-hidden" title="${matchedMods.map(m => m.label).join(', ')}">
                ${displayList.map(m => {
                  const subs = this.state.submenusConfig[m.id] || this.state.submenusConfig[m.key] || [];
                  return `
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] whitespace-nowrap shrink-0 shadow-2xs" style="border-radius: 9999px !important; font-size: 10px !important; line-height: 14px !important;">
                      <span>${m.label}</span>
                      ${subs.length > 0 ? `<span class="text-[9px] px-1 bg-[#E0F2FE] text-[#00A4B7] rounded-full font-bold" style="border-radius: 9999px !important; font-size: 9px !important;">${subs.length}</span>` : ''}
                    </span>
                  `;
                }).join('')}
                ${hasMore ? `
                  <button type="button" class="btn-role-show-more-menus inline-flex items-center text-[11px] font-bold text-[#0284C7] hover:underline cursor-pointer shrink-0 p-0 m-0 border-0 bg-transparent" data-role-id="${r.id}" title="Click to view all ${matchedMods.length} assigned menus in popup">
                    +${remainingCount}
                  </button>
                ` : ''}
              </div>
            `;
          } 
        },
        { 
          field: 'usersCount', 
          header: 'Users', 
          render: (v, r) => {
            const count = this.state.users.filter(u => u.role === r.name || u.role === r.id).length;
            return `<span class="btn-role-view-users text-xs text-[#172B4D] font-medium cursor-pointer" data-role-name="${r.name}" title="Click to view all users with this role">${count} User${count === 1 ? '' : 's'}</span>`;
          } 
        },
        { field: 'status', header: 'Status', type: 'status' }
      ],
      actions: [
        {
          label: 'Edit',
          icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
          onClick: (row) => this.showRoleFormModal(row, true, rolesTable)
        },
        {
          label: 'Delete',
          icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
          onClick: (row) => {
            if (row.isProtected) {
              Modal.alert({
                title: 'Protected System Role',
                message: `The <strong>${row.name}</strong> role is a protected system role and cannot be deleted.`
              });
              return;
            }
            Modal.confirm({
              title: `Delete Role: ${row.name}`,
              message: `Are you sure you want to delete role <strong>${row.name}</strong> (${row.id})? Users assigned to this role will lose their custom menu permissions.`,
              confirmText: 'Delete Role',
              cancelText: 'Cancel',
              isDestructive: true,
              onConfirm: () => {
                this.state.roles = this.state.roles.filter(r => r.id !== row.id);
                this.saveState();
                this.logAudit('Role Setup', `Deleted role ${row.name} (${row.id})`);
                rolesTable.setData(this.state.roles);
                Toast.show(`Role "${row.name}" deleted`, 'info', 'Deleted');
              }
            });
          }
        }
      ]
    });

    const filterDept = document.getElementById('roles-top-dept-select');
    const filterStatus = document.getElementById('roles-top-status-select');
    const filterType = document.getElementById('roles-top-type-select');
    const searchBtn = document.getElementById('roles-top-search-btn');
    const resetBtn = document.getElementById('roles-top-reset-btn');
    const toggleBtn = document.getElementById('roles-top-toggle-btn');
    const filterBody = document.getElementById('roles-top-filter-body');
    const toggleText = document.getElementById('roles-top-toggle-text');
    const toggleIcon = document.getElementById('roles-top-toggle-icon');

    if (toggleBtn && filterBody) {
      let isCollapsed = false;
      toggleBtn.addEventListener('click', () => {
        isCollapsed = !isCollapsed;
        const h = filterBody.previousElementSibling;
        if (isCollapsed) {
          filterBody.classList.add('hidden');
          if (h) { h.classList.remove('pb-1'); h.classList.add('pb-0'); }
          if (toggleIcon) toggleIcon.classList.add('-rotate-90');
          toggleBtn.title = 'Show Filter';
          toggleBtn.setAttribute('aria-label', 'Show Filter');
        } else {
          filterBody.classList.remove('hidden');
          if (h) { h.classList.add('pb-1'); h.classList.remove('pb-0'); }
          if (toggleIcon) toggleIcon.classList.remove('-rotate-90');
          toggleBtn.title = 'Hide Filter';
          toggleBtn.setAttribute('aria-label', 'Hide Filter');
        }
      });
    }

    const applyRolesFilters = () => {
      const dVal = filterDept ? filterDept.value : 'ALL';
      const sVal = filterStatus ? filterStatus.value : 'ALL';
      const tVal = filterType ? filterType.value : 'ALL';

      const filtered = this.state.roles.filter(r => {
        const matchDept = (dVal === 'ALL') || (r.department === dVal) || (!r.department && dVal === 'General Operations');
        const matchStatus = (sVal === 'ALL') || (r.status === sVal) || (!r.status && sVal === 'Active');
        const matchType = (tVal === 'ALL') || (tVal === 'SYSTEM' && r.isProtected) || (tVal === 'CUSTOM' && !r.isProtected);
        return matchDept && matchStatus && matchType;
      });

      rolesTable.setData(filtered);
    };

    if (searchBtn) searchBtn.addEventListener('click', () => {
      applyRolesFilters();
      Toast.show('Filtered roles list updated.', 'info');
    });
    if (filterDept) filterDept.addEventListener('change', applyRolesFilters);
    if (filterStatus) filterStatus.addEventListener('change', applyRolesFilters);
    if (filterType) filterType.addEventListener('change', applyRolesFilters);

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (filterDept) filterDept.value = 'ALL';
        if (filterStatus) filterStatus.value = 'ALL';
        if (filterType) filterType.value = 'ALL';
        rolesTable.setData(this.state.roles);
        Toast.show('Filters have been reset.', 'info');
      });
    }

    const addBtn = document.getElementById('btn-add-role');
    if (addBtn) {
      addBtn.onclick = () => this.showRoleFormModal(null, false, rolesTable);
    }

    // Delegate clicks for assigned menus "+N more" and "View Users" button
    const containerEl = document.getElementById('roles-table-container');
    if (containerEl) {
      containerEl.onclick = (e) => {
        const viewUsersBtn = e.target.closest('.btn-role-view-users');
        if (viewUsersBtn) {
          const roleName = viewUsersBtn.dataset.roleName;
          this.state.userSearchRole = roleName;
          this.saveState();
          location.hash = '#/general/configuration/users';
          return;
        }

        const moreBtn = e.target.closest('.btn-role-show-more-menus');
        if (!moreBtn) return;
        const roleId = moreBtn.dataset.roleId;
        const role = this.state.roles.find(r => r.id === roleId);
        if (role) this.showRoleAssignedMenusModal(role);
      };
    }
  },

  showRoleAssignedMenusModal(role) {
    const assigned = Array.isArray(role.assignedMenus) ? role.assignedMenus : [];
    const isAll = assigned.includes('*') || assigned.length >= this.state.modulesConfig.length;
    const mods = isAll 
      ? this.state.modulesConfig 
      : this.state.modulesConfig.filter(m => assigned.includes(m.key) || assigned.includes(m.id));

    Modal.open({
      title: `Assigned Menus: ${role.name}`,
      size: 'lg',
      content: `
        <div class="space-y-3">
          <div class="flex items-center justify-between p-3 bg-[#FAFBFC] rounded-lg border border-[#DFE1E6]">
            <div>
              <span class="text-xs font-bold text-[#172B4D]">${role.name}</span>
              <span class="text-[10px] font-mono text-[#0284C7] ml-1.5 font-bold">(${role.id})</span>
              <div class="text-[11px] text-[#5E6C84]">Department: <strong>${role.department || 'General Operations'}</strong></div>
            </div>
            <span class="lozenge lozenge-purple text-[10px]">${mods.length} Menus Assigned</span>
          </div>

          <div class="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            ${mods.map(m => {
              const modKey = m.key || m.id;
              const subs = this.state.submenusConfig[m.id] || this.state.submenusConfig[m.key] || [];
              const assignedSubs = subs.filter(s => {
                const subId = s.id || s.name || s.title;
                return !role.assignedSubmenus || role.assignedSubmenus.length === 0 || role.assignedSubmenus.includes(subId) || role.assignedSubmenus.includes(s.title);
              });
              const crud = role.crudPermissions?.[modKey] || {
                add: true,
                edit: true,
                delete: role.id === 'ROLE-ADMIN'
              };
              return `
                <div class="p-3 bg-white rounded-lg border border-[#EBECF0] space-y-2">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center">${this.getModuleIconSvg(m)}</div>
                      <span class="font-bold text-xs text-[#172B4D]">${m.label}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="flex items-center gap-1.5 text-[10px] bg-white px-2 py-0.5 rounded border border-[#DFE1E6]">
                        <span class="text-[9.5px] font-bold text-[#5E6C84] uppercase">Access:</span>
                        <span class="px-1.5 py-0.5 rounded-full text-[9.5px] font-bold ${crud.add ? 'bg-[#DCFCE7] text-[#065F46] border border-[#86EFAC]' : 'bg-[#F1F5F9] text-[#94A3B8] border border-[#CBD5E1] line-through'}">Add</span>
                        <span class="px-1.5 py-0.5 rounded-full text-[9.5px] font-bold ${crud.edit ? 'bg-[#DCFCE7] text-[#065F46] border border-[#86EFAC]' : 'bg-[#F1F5F9] text-[#94A3B8] border border-[#CBD5E1] line-through'}">Edit</span>
                        <span class="px-1.5 py-0.5 rounded-full text-[9.5px] font-bold ${crud.delete ? 'bg-[#DCFCE7] text-[#065F46] border border-[#86EFAC]' : 'bg-[#F1F5F9] text-[#94A3B8] border border-[#CBD5E1] line-through'}">Delete</span>
                      </div>
                    </div>
                  </div>
                  ${assignedSubs.length > 0 ? `
                    <div class="flex flex-wrap gap-1.5 pt-1 border-t border-[#F4F5F7]">
                      ${assignedSubs.map(s => `
                        <span class="px-2 py-0.5 rounded text-[10.5px] font-medium bg-[#FAFBFC] border border-[#DFE1E6] text-[#172B4D]">
                          ${s.title || s.name}
                        </span>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: () => Modal.close() }
      ]
    });
  },

  showRoleFormModal(role = null, isEdit = false, rolesTable = null) {
    const roleName = role?.name || '';
    const roleId = role?.id || '';
    const currentDept = role?.department || 'Raw Material Procurement';
    const status = role?.status || 'Active';
    const isProtected = role?.isProtected || false;
    const assignedMenus = Array.isArray(role?.assignedMenus) ? role.assignedMenus : [];
    const assignedSubmenus = Array.isArray(role?.assignedSubmenus) ? role.assignedSubmenus : [];
    const crudPerms = role?.crudPermissions || {};

    const departments = [
      'Raw Material Procurement',
      'Quality Assurance & Lab',
      'Production & Processing Floor',
      'Cold Storage & Logistics',
      'Sales, Exports & Documentation',
      'Executive Management',
      'Finance & Accounts',
      'IT & Systems Administration',
      'Engineering & Maintenance',
      'General Operations'
    ];

    Modal.open({
      title: isEdit ? `Edit Role: ${roleName}` : 'Add New Role',
      size: 'xl',
      content: `
        <form id="role-setup-form" class="space-y-4 text-xs" onsubmit="return false;">
          <!-- Top Row: Role Name, Role ID, Department, Status -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-transparent p-0 border-0">
            <div>
              <label class="block text-xs font-semibold text-[#172B4D] mb-0">
                Role Name <span class="text-rose-500">*</span>
              </label>
              <input 
                type="text" 
                id="role-form-name" 
                class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-md focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" 
                placeholder="e.g. Quality Supervisor" 
                value="${roleName}" 
                required 
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-[#172B4D] mb-0">
                Role ID <span class="text-rose-500">*</span>
              </label>
              <input 
                type="text" 
                id="role-form-id" 
                class="w-full text-xs px-2.5 py-1.5 border border-[#DFE1E6] rounded-md focus:outline-none focus:border-[#0284C7] font-mono text-xs font-semibold ${isEdit ? 'bg-[#EBECF0] text-[#5E6C84] cursor-not-allowed' : 'bg-white text-[#0284C7]'}" 
                placeholder="e.g. ROLE-QUALITY-SUPERVISOR" 
                value="${roleId}" 
                ${isEdit ? 'readonly' : 'required'} 
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-[#172B4D] mb-0">
                Department <span class="text-rose-500">*</span>
              </label>
              <select 
                id="role-form-dept" 
                class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-md focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]"
              >
                ${departments.map(d => `<option value="${d}" ${d === currentDept ? 'selected' : ''}>${d}</option>`).join('')}
              </select>
            </div>

            <div class="flex items-center">
              <label class="flex items-center gap-2 cursor-pointer select-none pt-4">
                <input 
                  type="checkbox" 
                  id="role-form-status-cb" 
                  class="w-4 h-4 rounded text-[#0284C7] accent-[#0284C7] cursor-pointer" 
                  ${status === 'Active' ? 'checked' : ''} 
                />
                <span class="text-xs font-semibold text-[#172B4D]">Active Role</span>
              </label>
            </div>
          </div>

          <!-- Assign Menu Section -->
          <div class="space-y-3 pt-2">
            <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#EBECF0]">
              <div>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Assign Menu Access</h4>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" id="btn-role-select-all" class="px-2.5 py-1 text-[11px] font-semibold text-[#0284C7] bg-[#F0F9FF] hover:bg-[#E0F2FE] border border-[#BAE6FD] rounded cursor-pointer transition-colors">
                  Select All
                </button>
                <button type="button" id="btn-role-deselect-all" class="px-2.5 py-1 text-[11px] font-semibold text-[#5E6C84] bg-[#FAFBFC] hover:bg-[#EBECF0] border border-[#DFE1E6] rounded cursor-pointer transition-colors">
                  Deselect All
                </button>
              </div>
            </div>

            <!-- List of All Menus & Submenus -->
            <div class="space-y-3 max-h-[380px] overflow-y-auto pr-1" id="role-menus-assign-container">
              ${this.state.modulesConfig.map(mod => {
                const modKey = mod.key || mod.id;
                const subList = this.state.submenusConfig[mod.id] || this.state.submenusConfig[mod.key] || [];
                const isMenuChecked = assignedMenus.includes('*') || assignedMenus.includes(modKey) || assignedMenus.includes(mod.id);
                const modCrud = crudPerms[modKey] || {
                  add: isMenuChecked,
                  edit: isMenuChecked,
                  delete: isMenuChecked && (role?.id === 'ROLE-ADMIN' || !role)
                };

                return `
                  <div class="role-menu-card rounded-lg border border-[#DFE1E6] bg-white overflow-hidden shadow-2xs" data-menu-key="${modKey}">
                    <!-- Parent Menu Header -->
                    <div class="p-2.5 bg-[#FAFBFC] border-b border-[#EBECF0] flex items-center justify-between flex-wrap gap-2">
                      <label class="flex items-center gap-2.5 cursor-pointer select-none" style="display: flex !important; align-items: center !important; margin-bottom: 0 !important;">
                        <input 
                          type="checkbox" 
                          class="role-parent-menu-cb w-4 h-4 rounded text-[#0284C7] accent-[#0284C7] cursor-pointer shrink-0" 
                          data-menu-key="${modKey}" 
                          ${isMenuChecked ? 'checked' : ''} 
                        />
                        <div class="w-6 h-6 rounded bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] shrink-0">
                          ${this.getModuleIconSvg(mod)}
                        </div>
                        <span class="text-xs font-bold text-[#172B4D] whitespace-nowrap">${mod.label}</span>
                      </label>
                      <div class="flex items-center gap-2">
                        <div class="flex items-center gap-3 bg-white px-2.5 py-1 rounded border border-[#DFE1E6]">
                          <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">Access:</span>
                          <label class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#172B4D] cursor-pointer select-none" title="Allow adding records in ${mod.label}">
                            <input 
                              type="checkbox" 
                              class="role-perm-cb role-perm-add w-3.5 h-3.5 rounded text-[#0284C7] accent-[#0284C7] cursor-pointer" 
                              data-parent-key="${modKey}" 
                              data-perm="add"
                              ${modCrud.add ? 'checked' : ''}
                            />
                            <span>Add</span>
                          </label>
                          <label class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#172B4D] cursor-pointer select-none" title="Allow editing records in ${mod.label}">
                            <input 
                              type="checkbox" 
                              class="role-perm-cb role-perm-edit w-3.5 h-3.5 rounded text-[#0284C7] accent-[#0284C7] cursor-pointer" 
                              data-parent-key="${modKey}" 
                              data-perm="edit"
                              ${modCrud.edit ? 'checked' : ''}
                            />
                            <span>Edit</span>
                          </label>
                          <label class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#172B4D] cursor-pointer select-none" title="Allow deleting records in ${mod.label}">
                            <input 
                              type="checkbox" 
                              class="role-perm-cb role-perm-delete w-3.5 h-3.5 rounded text-[#0284C7] accent-[#0284C7] cursor-pointer" 
                              data-parent-key="${modKey}" 
                              data-perm="delete"
                              ${modCrud.delete ? 'checked' : ''}
                            />
                            <span>Delete</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <!-- Submenus Grid (5 columns, inline checkbox and text, no padding/border/bg) -->
                    ${subList.length > 0 ? `
                      <div class="p-2.5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 bg-white">
                        ${subList.map(sub => {
                          const subId = sub.id || sub.name || sub.title;
                          const isSubChecked = isMenuChecked && (
                            assignedMenus.includes('*') ||
                            assignedSubmenus.length === 0 ||
                            assignedSubmenus.includes(subId) ||
                            assignedSubmenus.includes(sub.id) ||
                            assignedSubmenus.includes(sub.name) ||
                            assignedSubmenus.includes(sub.title)
                          );
                          return `
                            <label class="flex items-center gap-2.5 cursor-pointer select-none py-1 hover:text-[#0284C7] transition-colors" style="display: flex !important; align-items: center !important; margin-bottom: 0 !important;">
                              <input 
                                type="checkbox" 
                                class="role-sub-cb w-3.5 h-3.5 rounded text-[#0284C7] accent-[#0284C7] cursor-pointer shrink-0" 
                                data-parent-key="${modKey}" 
                                data-sub-id="${subId}" 
                                ${isSubChecked ? 'checked' : ''} 
                              />
                              <span class="text-xs font-medium text-[#172B4D] truncate pl-1" title="${sub.title || sub.name}">
                                ${sub.title || sub.name}
                              </span>
                            </label>
                          `;
                        }).join('')}
                      </div>
                    ` : `
                      <div class="p-2 text-center text-[11px] text-[#8993A4] italic bg-white">
                        No submenus configured
                      </div>
                    `}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: () => Modal.close()
        },
        {
          label: isEdit ? 'Save Changes' : 'Create Role',
          type: 'primary',
          onClick: (m) => {
            const nameEl = document.getElementById('role-form-name');
            const idEl = document.getElementById('role-form-id');
            const deptEl = document.getElementById('role-form-dept');
            const statusCb = document.getElementById('role-form-status-cb');

            const name = (nameEl?.value || '').trim();
            let id = (idEl?.value || '').trim();
            const department = deptEl?.value || 'General Operations';
            const roleStatus = statusCb?.checked ? 'Active' : 'Inactive';

            if (!name) {
              Toast.show('Please enter a role name', 'warning', 'Required');
              nameEl?.focus();
              return;
            }

            if (!isEdit && !id) {
              id = 'ROLE-' + name.toUpperCase().replace(/[^A-Z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            }

            if (!id) {
              Toast.show('Please enter a role ID', 'warning', 'Required');
              idEl?.focus();
              return;
            }

            if (!isEdit && this.state.roles.some(r => r.id.toLowerCase() === id.toLowerCase())) {
              Toast.show(`Role ID "${id}" already exists. Please choose a unique ID.`, 'error', 'Duplicate');
              idEl?.focus();
              return;
            }

            // Collect assigned menus & submenus
            const checkedMenuCbs = Array.from(document.querySelectorAll('.role-parent-menu-cb:checked'));
            const selectedMenus = checkedMenuCbs.map(cb => cb.dataset.menuKey);

            const checkedSubCbs = Array.from(document.querySelectorAll('.role-sub-cb:checked'));
            const selectedSubmenus = checkedSubCbs.map(cb => cb.dataset.subId);

            const crudPermissions = {};
            this.state.modulesConfig.forEach(mod => {
              const modKey = mod.key || mod.id;
              const isMenuChecked = document.querySelector(`.role-parent-menu-cb[data-menu-key="${modKey}"]`)?.checked;
              const canAdd = document.querySelector(`.role-perm-cb[data-parent-key="${modKey}"][data-perm="add"]`)?.checked;
              const canEdit = document.querySelector(`.role-perm-cb[data-parent-key="${modKey}"][data-perm="edit"]`)?.checked;
              const canDelete = document.querySelector(`.role-perm-cb[data-parent-key="${modKey}"][data-perm="delete"]`)?.checked;
              crudPermissions[modKey] = {
                view: !!isMenuChecked,
                add: !!canAdd,
                edit: !!canEdit,
                delete: !!canDelete
              };
            });

            if (isEdit) {
              role.name = name;
              role.department = department;
              role.status = roleStatus;
              role.assignedMenus = selectedMenus;
              role.assignedSubmenus = selectedSubmenus;
              role.crudPermissions = crudPermissions;
              this.logAudit('Role Setup', `Updated role: ${name} (${role.id}) with ${selectedMenus.length} assigned menus`);
            } else {
              const newRole = {
                id,
                name,
                department,
                status: roleStatus,
                isProtected: false,
                usersCount: 0,
                assignedMenus: selectedMenus,
                assignedSubmenus: selectedSubmenus,
                crudPermissions
              };
              this.state.roles.push(newRole);
              this.logAudit('Role Setup', `Created role: ${name} (${id}) with ${selectedMenus.length} assigned menus`);
            }

            this.saveState();
            m.close();

            if (rolesTable) {
              rolesTable.setData(this.state.roles);
            } else {
              const c = document.getElementById('setup-subpage-content');
              if (c) this.renderRolesTab(c);
            }

            // Success confirmation modal
            Modal.success({
              title: isEdit ? 'Role Updated Successfully' : 'Role Created Successfully',
              message: `Role <strong>${name}</strong> (${id}) has been configured with <strong>${selectedMenus.length}</strong> assigned menu(s) and <strong>${selectedSubmenus.length}</strong> submenu access permission(s).`,
              details: [
                { label: 'Role Name', value: name },
                { label: 'Role ID', value: id },
                { label: 'Department', value: department },
                { label: 'Status', value: roleStatus },
                { label: 'Assigned Menus Count', value: `${selectedMenus.length} Menus` },
                { 
                  label: 'Assigned Menus', 
                  value: selectedMenus.length > 0 
                    ? selectedMenus.map(k => {
                        const found = this.state.modulesConfig.find(m => (m.key || m.id) === k);
                        return found ? found.label : k;
                      }).join(', ') 
                    : 'None' 
                },
                { label: 'Assigned Submenus Count', value: `${selectedSubmenus.length} Submenus` }
              ]
            });
          }
        }
      ]
    });

    // Auto-generate role ID when role name is typed in Add mode
    if (!isEdit) {
      const nameInput = document.getElementById('role-form-name');
      const idInput = document.getElementById('role-form-id');
      if (nameInput && idInput) {
        nameInput.oninput = () => {
          if (!idInput.dataset.manualEdit) {
            const slug = nameInput.value.trim().toUpperCase().replace(/[^A-Z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            idInput.value = slug ? `ROLE-${slug}` : '';
          }
        };
        idInput.oninput = () => {
          idInput.dataset.manualEdit = 'true';
        };
      }
    }

    // Bind Select All / Deselect All
    const selectAllBtn = document.getElementById('btn-role-select-all');
    const deselectAllBtn = document.getElementById('btn-role-deselect-all');

    if (selectAllBtn) {
      selectAllBtn.onclick = () => {
        document.querySelectorAll('.role-parent-menu-cb, .role-sub-cb, .role-perm-cb').forEach(cb => {
          cb.checked = true;
        });
      };
    }

    if (deselectAllBtn) {
      deselectAllBtn.onclick = () => {
        document.querySelectorAll('.role-parent-menu-cb, .role-sub-cb, .role-perm-cb').forEach(cb => {
          cb.checked = false;
        });
      };
    }

    // Bind parent menu checkbox change -> toggle its submenus and permissions
    document.querySelectorAll('.role-parent-menu-cb').forEach(parentCb => {
      parentCb.onchange = () => {
        const key = parentCb.dataset.menuKey;
        const subCbs = document.querySelectorAll(`.role-sub-cb[data-parent-key="${key}"]`);
        subCbs.forEach(subCb => {
          subCb.checked = parentCb.checked;
        });
        const permCbs = document.querySelectorAll(`.role-perm-cb[data-parent-key="${key}"]`);
        permCbs.forEach(permCb => {
          permCb.checked = parentCb.checked;
        });
      };
    });

    // Bind permission checkbox change -> if checked, ensure parent menu is checked
    document.querySelectorAll('.role-perm-cb').forEach(permCb => {
      permCb.onchange = () => {
        const parentKey = permCb.dataset.parentKey;
        const parentCb = document.querySelector(`.role-parent-menu-cb[data-menu-key="${parentKey}"]`);
        if (permCb.checked && parentCb && !parentCb.checked) {
          parentCb.checked = true;
        }
      };
    });

    // Bind child submenu checkbox change -> if checked, ensure parent is checked
    document.querySelectorAll('.role-sub-cb').forEach(subCb => {
      subCb.onchange = () => {
        const parentKey = subCb.dataset.parentKey;
        const parentCb = document.querySelector(`.role-parent-menu-cb[data-menu-key="${parentKey}"]`);
        if (subCb.checked) {
          if (parentCb) parentCb.checked = true;
        } else {
          // If all submenus for this parent are unchecked and all perms unchecked, uncheck the parent menu
          const siblingSubs = document.querySelectorAll(`.role-sub-cb[data-parent-key="${parentKey}"]`);
          const siblingPerms = document.querySelectorAll(`.role-perm-cb[data-parent-key="${parentKey}"]`);
          const anySubChecked = Array.from(siblingSubs).some(s => s.checked);
          const anyPermChecked = Array.from(siblingPerms).some(p => p.checked);
          if (!anySubChecked && !anyPermChecked && parentCb) {
            parentCb.checked = false;
          }
        }
      };
    });
  },

  // =========================================================================
  // 3. ROLES & PERMISSIONS MATRIX TAB
  // =========================================================================
  renderRolesPermissionsTab(container) {
    const selectedRole = this.state.roles.find(r => r.id === this.selectedRoleForMatrix) || this.state.roles[0];
    const isAdmin = selectedRole.id === 'ROLE-ADMIN';

    const erpModulesList = [
      { id: 'res-purchase', label: 'Raw Material Purchase (Arrivals, Weighment, Rates, Farmer Bills)' },
      { id: 'res-preprocessing', label: 'Pre-Processing (De-heading, Peeling, Soaking, Grading)' },
      { id: 'res-quality', label: 'Quality Control (Antibiotic Lab, Testing Protocols, Clearance)' },
      { id: 'res-production', label: 'Production Control (Floor Balance, Freezing, Conversion)' },
      { id: 'res-coldstore', label: 'Coldstore Operations (Intake, Chambers, Pallet Balance, Dispatch)' },
      { id: 'res-inventory', label: 'Inventory & Stores (Purchase Orders, GRN Receipt, Issues)' },
      { id: 'res-sales', label: 'Sales & Exports (Contracts, Shipping Documentation, Finance)' },
      { id: 'res-reports', label: 'Reports & Analytics (Yield Reports, Production BI, Valuation)' },
      { id: 'res-setup', label: 'Settings & Master Data (Plants, Species, Grades, Form Schemas)' }
    ];

    container.innerHTML = `
      <div class="space-y-4">
        <!-- Permissions Table Card -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] shadow-none overflow-hidden">
          <div class="p-3 border-b border-[#EBECF0] flex items-center justify-between flex-wrap gap-2">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-[#172B4D]">Permissions Matrix for:</span>
              <select id="role-matrix-selector" class="px-2.5 py-1 border border-[#DFE1E6] rounded-lg text-xs font-bold text-[#172B4D] bg-white cursor-pointer hover:border-[#00A4B7] focus:outline-none">
                ${this.state.roles.map(r => `
                  <option value="${r.id}" ${r.id === selectedRole.id ? 'selected' : ''}>${r.name} ${r.isProtected ? '(🔒 Protected)' : `(${r.usersCount} Users)`}</option>
                `).join('')}
              </select>
              ${isAdmin ? `<span class="lozenge lozenge-inprogress text-[10px]">Full Access Locked</span>` : ''}
            </div>

            <div class="flex items-center gap-2">
              ${!isAdmin ? `
                <button id="btn-perm-grant-all" class="px-2.5 py-1 border border-[#DFE1E6] hover:bg-[#FAFBFC] rounded text-xs font-semibold text-[#006644] cursor-pointer">Grant All</button>
                <button id="btn-perm-readonly" class="px-2.5 py-1 border border-[#DFE1E6] hover:bg-[#FAFBFC] rounded text-xs font-semibold text-[#42526E] cursor-pointer">Read Only</button>
              ` : ''}
              <button id="btn-save-permissions" class="btn-primary px-3 py-1 rounded text-xs font-bold cursor-pointer">Save Permissions</button>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="erp-table text-xs w-full">
              <thead>
                <tr>
                  <th>ERP Module / Entity</th>
                  <th class="text-center w-16">View</th>
                  <th class="text-center w-16">Create</th>
                  <th class="text-center w-16">Edit</th>
                  <th class="text-center w-16">Delete</th>
                  <th class="text-center w-16">Approve</th>
                  <th class="text-center w-16">Reject</th>
                  <th class="text-center w-16">Export</th>
                  <th class="text-center w-16">Print</th>
                  <th class="text-center w-16">Manage</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#EBECF0]">
                ${erpModulesList.map(res => {
                  const checkedAttr = isAdmin ? 'checked disabled' : 'checked';
                  return `
                    <tr class="hover:bg-[#FAFBFC]">
                      <td class="font-bold text-[#172B4D]">${res.label}</td>
                      <td class="text-center"><input type="checkbox" class="perm-chk perm-view" ${checkedAttr} /></td>
                      <td class="text-center"><input type="checkbox" class="perm-chk" ${checkedAttr} /></td>
                      <td class="text-center"><input type="checkbox" class="perm-chk" ${checkedAttr} /></td>
                      <td class="text-center"><input type="checkbox" class="perm-chk" ${isAdmin ? 'checked disabled' : ''} /></td>
                      <td class="text-center"><input type="checkbox" class="perm-chk" ${checkedAttr} /></td>
                      <td class="text-center"><input type="checkbox" class="perm-chk" ${checkedAttr} /></td>
                      <td class="text-center"><input type="checkbox" class="perm-chk" ${checkedAttr} /></td>
                      <td class="text-center"><input type="checkbox" class="perm-chk" ${checkedAttr} /></td>
                      <td class="text-center"><input type="checkbox" class="perm-chk" ${isAdmin ? 'checked disabled' : ''} /></td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    const roleSelector = document.getElementById('role-matrix-selector');
    if (roleSelector) {
      roleSelector.onchange = (e) => {
        this.selectedRoleForMatrix = e.target.value;
        this.renderRolesPermissionsTab(container);
      };
    }

    const grantAllBtn = document.getElementById('btn-perm-grant-all');
    if (grantAllBtn) {
      grantAllBtn.onclick = () => {
        document.querySelectorAll('.perm-chk:not([disabled])').forEach(cb => cb.checked = true);
        Toast.show(`Granted full access for ${selectedRole.name}`, 'info', 'Preset Applied');
      };
    }

    const readOnlyBtn = document.getElementById('btn-perm-readonly');
    if (readOnlyBtn) {
      readOnlyBtn.onclick = () => {
        document.querySelectorAll('.perm-chk:not([disabled])').forEach(cb => cb.checked = false);
        document.querySelectorAll('.perm-view:not([disabled])').forEach(cb => cb.checked = true);
        Toast.show(`Set Read-Only access for ${selectedRole.name}`, 'info', 'Preset Applied');
      };
    }

    const saveBtn = document.getElementById('btn-save-permissions');
    if (saveBtn) {
      saveBtn.onclick = () => {
        this.logAudit('Roles & Permissions', `Updated permissions matrix for ${selectedRole.name}`);
        this.state.hasDraftChanges = true;
        this.state.draftChangesCount++;
        this.saveState();
        Toast.show(`Permissions saved for ${selectedRole.name}`, 'success', 'Saved');
      };
    }
  },

  // =========================================================================
  // 4. DYNAMIC MODULE / MENUS STUDIO TAB (FULL CRUD WITH DATATABLE & LUCIDE ICONS)
  // =========================================================================
  getLucideIconLibrary() {
    if (this._lucideIconsCache && this._lucideIconsCache.length > 100) {
      return this._lucideIconsCache;
    }

    // Operations, Commerce, Logistics, Quality, System fallback list
    const fallbackList = [
      { id: 'fish', name: 'fish', label: 'Fish (Raw Material)', category: 'Operations', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-4.44 6-8 6s-7.56-2.53-7.5-6Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12v.5"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17.93a1 1 0 0 1-.77-.36L12 14"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10.67C7 8 5.58 5.97 2.73 4a1 1 0 0 0-1.42 1.25L3 8.78"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13.33C7 16 5.58 18.03 2.73 20a1 1 0 0 1-1.42-1.25L3 15.22"/></svg>' },
      { id: 'scale', name: 'scale', label: 'Scale (Weighment)', category: 'Operations', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v18"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>' },
      { id: 'factory', name: 'factory', label: 'Factory (Processing)', category: 'Operations', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 18h1"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h1"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18h1"/></svg>' },
      { id: 'boxes', name: 'boxes', label: 'Boxes (Cold Storage)', category: 'Operations', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16.5-4.74-2.85"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16.5 5-3"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16.5v5.17"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 16.5-5-3"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 16.5 4.74-2.85"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16.5v5.17"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8 7.26 5.15"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8 4.74-2.85"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13.5V8"/></svg>' },
      { id: 'package', name: 'package', label: 'Package (Finished Stock)', category: 'Operations', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.5 4.27 9 5.15"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3.3 7 8.7 5 8.7-5"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22V12"/></svg>' },
      { id: 'thermometer-snowflake', name: 'thermometer-snowflake', label: 'Freezer Temp', category: 'Operations', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h10"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 4v16"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 9 3 3-3 3"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6 9 9 6 6"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 18 3-3 3 3"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 4a2 2 0 0 1 2 2v9.54a3.5 3.5 0 1 1-4 0V6a2 2 0 0 1 2-2Z"/></svg>' },
      { id: 'anchor', name: 'anchor', label: 'Anchor (Harbour Intake)', category: 'Operations', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><line x1="12" x2="12" y1="22" y2="8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>' },
      { id: 'shopping-cart', name: 'shopping-cart', label: 'Shopping Cart (Purchase)', category: 'Commerce', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>' },
      { id: 'shopping-bag', name: 'shopping-bag', label: 'Shopping Bag (Buyers)', category: 'Commerce', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10a4 4 0 0 1-8 0"/></svg>' },
      { id: 'receipt', name: 'receipt', label: 'Receipt (Farmer Billing)', category: 'Commerce', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.5v-11"/></svg>' },
      { id: 'dollar-sign', name: 'dollar-sign', label: 'Dollar (Payments)', category: 'Commerce', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="12" x2="12" y1="22"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
      { id: 'credit-card', name: 'credit-card', label: 'Credit Card', category: 'Commerce', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>' },
      { id: 'tag', name: 'tag', label: 'Tag (SKU / Variety)', category: 'Commerce', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>' },
      { id: 'truck', name: 'truck', label: 'Truck (Logistics)', category: 'Logistics', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18H9"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18.5" r="2.5"/><circle cx="7" cy="18.5" r="2.5"/></svg>' },
      { id: 'globe', name: 'globe', label: 'Globe (Export Market)', category: 'Logistics', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h20"/></svg>' },
      { id: 'send', name: 'send', label: 'Send (Dispatch / IBT)', category: 'Logistics', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22 2-7 20-4-9-9-4Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 2 11 13"/></svg>' },
      { id: 'shield-check', name: 'shield-check', label: 'Shield Check (QC)', category: 'Quality', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 2 2 4-4"/></svg>' },
      { id: 'flask-conical', name: 'flask-conical', label: 'Flask (Antibiotics / Lab)', category: 'Quality', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2v7.31"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9.3V1.99"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 2h7"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.52 16h12.96"/></svg>' },
      { id: 'clipboard-list', name: 'clipboard-list', label: 'Audit Checklist', category: 'Quality', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11h4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16h4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11h.01"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h.01"/></svg>' },
      { id: 'check-circle', name: 'check-circle', label: 'Check Circle (Approvals)', category: 'Quality', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
      { id: 'bar-chart-3', name: 'bar-chart-3', label: 'Bar Chart (KPIs)', category: 'Analytics', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v18h18"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17V9"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17V5"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17v-3"/></svg>' },
      { id: 'line-chart', name: 'line-chart', label: 'Line Chart (Yield Trend)', category: 'Analytics', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v18h18"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-5 5-4-4-3 3"/></svg>' },
      { id: 'pie-chart', name: 'pie-chart', label: 'Pie Chart (Breakups)', category: 'Analytics', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12A10 10 0 0 0 12 2v10z"/></svg>' },
      { id: 'file-text', name: 'file-text', label: 'File Text (Invoices)', category: 'Analytics', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2v4a2 2 0 0 0 2 2h4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9H8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 13H8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17H8"/></svg>' },
      { id: 'layout-dashboard', name: 'layout-dashboard', label: 'Dashboard', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>' },
      { id: 'users', name: 'users', label: 'Users (Workforce)', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 21v-2a4 4 0 0 0-3-3.87"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
      { id: 'user-check', name: 'user-check', label: 'User Roles & Access', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
      { id: 'settings', name: 'settings', label: 'Settings', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>' },
      { id: 'sliders', name: 'sliders', label: 'System Parameters', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg>' },
      { id: 'database', name: 'database', label: 'Database & SQL', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5V19A9 3 0 0 0 21 19V5"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12A9 3 0 0 0 21 12"/></svg>' },
      { id: 'layers', name: 'layers', label: 'Layers & Modules', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 12.5"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 17.5"/></svg>' },
      { id: 'folder', name: 'folder', label: 'Folder (Directory)', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>' },
      { id: 'printer', name: 'printer', label: 'Printer (Gate Pass)', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect width="12" height="8" x="6" y="14" rx="1"/></svg>' },
      { id: 'clock', name: 'clock', label: 'Clock (Shift Timings)', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
      { id: 'calendar', name: 'calendar', label: 'Calendar (Bookings)', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18"/></svg>' },
      { id: 'archive', name: 'archive', label: 'Archive (Records)', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="5" x="2" y="3" rx="1"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12h4"/></svg>' },
      { id: 'lock', name: 'lock', label: 'Lock (Security)', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' },
      { id: 'key', name: 'key', label: 'Key (API & Credentials)', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>' },
      { id: 'bell', name: 'bell', label: 'Bell (Notifications)', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>' },
      { id: 'briefcase', name: 'briefcase', label: 'Briefcase (Corporate)', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>' },
      { id: 'wrench', name: 'wrench', label: 'Wrench (Maintenance)', category: 'System', svg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>' }
    ];

    // Check if full window.lucide icons are available (2,000+ icons)
    if (typeof window !== 'undefined' && window.lucide && window.lucide.icons) {
      try {
        const fullIcons = [];
        for (const [pascalName, iconNode] of Object.entries(window.lucide.icons)) {
          const id = pascalName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
          let svgString = '';
          if (Array.isArray(iconNode)) {
            const children = iconNode.map(([tag, attrs]) => {
              const attrStr = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ');
              return `<${tag} ${attrStr}></${tag}>`;
            }).join('');
            svgString = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">${children}</svg>`;
          }
          if (svgString) {
            fullIcons.push({
              id,
              name: id,
              label: pascalName.replace(/([a-z0-9])([A-Z])/g, '$1 $2'),
              svg: svgString
            });
          }
        }
        if (fullIcons.length > 50) {
          fullIcons.sort((a, b) => a.name.localeCompare(b.name));
          this._lucideIconsCache = fullIcons;
          return fullIcons;
        }
      } catch (err) {
        console.warn('Lucide icon extraction error:', err);
      }
    }

    this._lucideIconsCache = fallbackList;
    return fallbackList;
  },

  getModuleIconId(mod) {
    if (!mod) return 'layers';
    if (mod.iconKey) return mod.iconKey;
    const lib = this.getLucideIconLibrary();
    const found = lib.find(i => i.id === mod.icon);
    if (found) return found.id;
    const k = (mod.key || mod.id || mod.label || '').toLowerCase();
    if (k.includes('purchase') || k.includes('buyer') || k.includes('order')) return 'shopping-cart';
    if (k.includes('fish') || k.includes('marine') || k.includes('aqua')) return 'fish';
    if (k.includes('weigh') || k.includes('scale')) return 'scale';
    if (k.includes('prod') || k.includes('process') || k.includes('soak')) return 'factory';
    if (k.includes('cold') || k.includes('stock') || k.includes('store') || k.includes('inventory')) return 'boxes';
    if (k.includes('qual') || k.includes('qc') || k.includes('audit')) return 'shield-check';
    if (k.includes('lab') || k.includes('chem')) return 'flask-conical';
    if (k.includes('ship') || k.includes('logis') || k.includes('transport')) return 'truck';
    if (k.includes('sale') || k.includes('report') || k.includes('ledger')) return 'bar-chart-3';
    if (k.includes('dash')) return 'layout-dashboard';
    if (k.includes('user') || k.includes('role') || k.includes('persona')) return 'users';
    if (k.includes('master') || k.includes('config') || k.includes('setup')) return 'settings';
    return 'layers';
  },

  getModuleIconSvg(mod) {
    if (mod && mod.icon && typeof mod.icon === 'string' && mod.icon.includes('<svg')) {
      return mod.icon;
    }
    const iconId = this.getModuleIconId(mod);
    const lib = this.getLucideIconLibrary();
    const item = lib.find(i => i.id === iconId) || lib.find(i => i.id === 'layers');
    return item ? item.svg : lib[0].svg;
  },

  renderModuleStudioTab(container) {
    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Menus Management</h1>
          </div>
          <div class="flex items-center gap-2">
            <button id="btn-add-module" class="btn-primary px-3 py-1.5 rounded text-xs flex items-center gap-1.5 shadow-xs cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add Menu</span>
            </button>
          </div>
        </div>

        <div id="modules-table-container"></div>
      </div>
    `;

    this.state.modulesConfig.forEach(m => {
      if (!m.status) {
        m.status = m.visible !== false ? 'Active' : 'Inactive';
      }
    });

    const modulesTable = new DataTable({
      containerId: 'modules-table-container',
      data: this.state.modulesConfig,
      keyField: 'id',
      tableTitle: 'Menus Registry',
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { 
          field: 'sNo', 
          header: 'SNO', 
          render: (v, r, i) => `<span class="font-bold text-[#5E6C84]">${i !== undefined ? i + 1 : 1}</span>` 
        },
        { 
          field: 'icon', 
          header: 'Menu Icon', 
          render: (v, r) => {
            const svg = this.getModuleIconSvg(r);
            return `
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] shadow-2xs shrink-0">
                  ${svg}
                </div>
              </div>
            `;
          } 
        },
        { 
          field: 'label', 
          header: 'Menu Name', 
          render: (v, r) => {
            const isProtected = Boolean(r && (r.isProtected || r.isDefault || ['dashboard', 'master', 'reports', 'help'].includes(r.id || r.key)));
            return `
              <div class="flex items-center gap-2">
                <span class="font-bold text-[#172B4D] text-xs">${v}</span>
                ${isProtected ? `
                  <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F1F5F9] text-[#5E6C84] border border-[#DFE1E6]" title="System default menu cannot be modified or deleted">
                    <svg class="w-2.5 h-2.5 text-[#5E6C84]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    <span>System Default</span>
                  </span>
                ` : ''}
              </div>
            `;
          }
        },
        { 
          field: 'submenus', 
          header: 'Sub Menus', 
          render: (v, r) => {
            const list = this.state.submenusConfig[r.id] || this.state.submenusConfig[r.key] || [];
            if (!list || list.length === 0) {
              return `<span class="text-xs text-[#8993A4] italic">No Sub Menus</span>`;
            }
            const maxVisible = 2;
            const hasMore = list.length > maxVisible;
            const displayList = hasMore ? list.slice(0, maxVisible) : list;
            const remainingCount = list.length - maxVisible;

            return `
              <div class="flex items-center flex-nowrap gap-1.5 whitespace-nowrap overflow-hidden">
                ${displayList.map(sm => `
                  <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-[#FAFBFC] border border-[#DFE1E6] text-[#172B4D] whitespace-nowrap shrink-0 truncate max-w-[140px]" title="${sm.title || sm.name}">
                    <span class="w-1.5 h-1.5 rounded-full ${sm.status === 'Inactive' ? 'bg-[#FF5630]' : 'bg-[#00875A]'} shrink-0"></span>
                    <span class="font-semibold truncate">${sm.title || sm.name}</span>
                  </span>
                `).join('')}
                ${hasMore ? `
                  <button type="button" class="btn-show-all-submenus inline-flex items-center text-[11px] font-bold text-[#0284C7] hover:underline cursor-pointer shrink-0 p-0 m-0 border-0 bg-transparent" data-menu-id="${r.id}" onclick="event.stopPropagation(); (window.SetupView || SetupView).showAllSubmenusModal('${r.id}')" title="Click to view all ${list.length} submenus in popup">
                    +${remainingCount}
                  </button>
                ` : ''}
              </div>
            `;
          } 
        },
        { 
          field: 'status', 
          header: 'Status', 
          type: 'status',
          render: (v, r) => {
            const status = v || (r.visible !== false ? 'Active' : 'Inactive');
            const isAct = String(status).toUpperCase() === 'ACTIVE';
            return `<span class="lozenge ${isAct ? 'lozenge-success' : 'lozenge-danger'}">${status}</span>`;
          } 
        }
      ],
      actions: [
        {
          label: 'Edit',
          icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
          disabled: (row) => Boolean(row && (row.isProtected || row.isDefault || ['dashboard', 'master', 'reports', 'help'].includes(row.id || row.key))),
          disabledTooltip: 'System default menu cannot be edited',
          onClick: (row) => {
            if (row && (row.isProtected || row.isDefault || ['dashboard', 'master', 'reports', 'help'].includes(row.id || row.key))) {
              Toast.show('System default menu is protected and cannot be edited.', 'warning');
              return;
            }
            this.showEditModuleModal(row, modulesTable);
          }
        },
        {
          label: (row) => (row.status === 'Active' || (row.status === undefined && row.visible)) ? 'Deactivate' : 'Activate',
          icon: (row) => (row.status === 'Active' || (row.status === undefined && row.visible))
            ? `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>`
            : `<svg class="w-4 h-4 text-[#006644]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
          disabled: (row) => Boolean(row && (row.isProtected || row.isDefault || ['dashboard', 'master', 'reports', 'help'].includes(row.id || row.key))),
          disabledTooltip: 'System default menu cannot be deactivated',
          onClick: (row) => {
            if (row && (row.isProtected || row.isDefault || ['dashboard', 'master', 'reports', 'help'].includes(row.id || row.key))) {
              Toast.show('System default menu is protected and must remain active.', 'warning');
              return;
            }
            const isCurrentlyActive = row.status === 'Active' || (row.status === undefined && row.visible);
            if (isCurrentlyActive) {
              Modal.confirm({
                title: `Deactivate Menu ${row.label}`,
                message: `Are you sure you want to deactivate menu <strong>${row.label}</strong>? It will be hidden from the active navigation.`,
                confirmText: 'Deactivate',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  row.status = 'Inactive';
                  row.visible = false;
                  modulesTable.setData(this.state.modulesConfig);
                  this.saveState();
                  this.logAudit('Menu Setup', `Deactivated menu ${row.label} (${row.key})`);
                  Modal.success({
                    title: 'Menu Deactivated',
                    message: `Menu <strong>${row.label}</strong> has been deactivated.`,
                    details: [
                      { label: 'Menu Name', value: row.label },
                      { label: 'Status', value: 'Inactive' }
                    ]
                  });
                }
              });
            } else {
              Modal.confirm({
                title: `Activate Menu ${row.label}`,
                message: `Are you sure you want to activate menu <strong>${row.label}</strong>?`,
                confirmText: 'Activate',
                cancelText: 'Cancel',
                isDestructive: false,
                onConfirm: () => {
                  row.status = 'Active';
                  row.visible = true;
                  modulesTable.setData(this.state.modulesConfig);
                  this.saveState();
                  this.logAudit('Menu Setup', `Activated menu ${row.label} (${row.key})`);
                  Modal.success({
                    title: 'Menu Activated',
                    message: `Menu <strong>${row.label}</strong> is now Active.`,
                    details: [
                      { label: 'Menu Name', value: row.label },
                      { label: 'Status', value: 'Active' }
                    ]
                  });
                }
              });
            }
          }
        },
        {
          label: 'Delete',
          icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
          disabled: (row) => Boolean(row && (row.isProtected || row.isDefault || ['dashboard', 'master', 'reports', 'help'].includes(row.id || row.key))),
          disabledTooltip: 'System default menu cannot be deleted',
          onClick: (row) => {
            if (row && (row.isProtected || row.isDefault || ['dashboard', 'master', 'reports', 'help'].includes(row.id || row.key))) {
              Toast.show('System default menu is protected and cannot be deleted.', 'warning');
              return;
            }
            Modal.confirm({
              title: `Delete Menu ${row.label}`,
              message: `Are you sure you want to permanently delete menu <strong>${row.label}</strong> (${row.key}) and its configured submenus? This action cannot be undone.`,
              confirmText: 'Delete Menu',
              cancelText: 'Cancel',
              isDestructive: true,
              onConfirm: () => {
                const idx = this.state.modulesConfig.findIndex(m => m.id === row.id);
                if (idx > -1) {
                  this.state.modulesConfig.splice(idx, 1);
                  delete this.state.submenusConfig[row.id];
                  this.state.modulesConfig.forEach((m, i) => m.order = i + 1);
                  modulesTable.setData(this.state.modulesConfig);
                  this.saveState();
                  this.logAudit('Menu Setup', `Deleted menu: ${row.label} (${row.key})`);
                  Modal.success({
                    title: 'Menu Deleted',
                    message: `Menu <strong>${row.label}</strong> and its submenus were successfully deleted.`,
                    details: [
                      { label: 'Deleted Menu', value: row.label },
                      { label: 'Key', value: row.key }
                    ]
                  });
                }
              }
            });
          }
        }
      ]
    });

    // Wire up Status Checkbox click & View All Submenus popup click from the table
    const tableContainer = document.getElementById('modules-table-container');
    if (tableContainer) {
      tableContainer.onclick = (e) => {
        const moreSubBtn = e.target.closest('.btn-show-all-submenus');
        if (moreSubBtn) {
          e.preventDefault();
          this.showAllSubmenusModal(moreSubBtn.dataset.menuId, modulesTable);
          return;
        }

        const statusBox = e.target.closest('.menu-table-status-cb, .menu-table-toggle-btn');
        if (!statusBox) return;
        e.preventDefault();
        const menuId = statusBox.dataset.menuId;
        const row = this.state.modulesConfig.find(m => m.id === menuId);
        if (!row) return;

        const isCurrentlyActive = row.status === 'Active' || (row.status === undefined && row.visible);
        if (isCurrentlyActive) {
          Modal.confirm({
            title: `Deactivate Menu ${row.label}`,
            message: `Are you sure you want to deactivate menu <strong>${row.label}</strong>? It will be hidden from the active navigation.`,
            confirmText: 'Deactivate',
            cancelText: 'Cancel',
            isDestructive: true,
            onConfirm: () => {
              row.status = 'Inactive';
              row.visible = false;
              modulesTable.setData(this.state.modulesConfig);
              this.saveState();
              this.logAudit('Menu Setup', `Deactivated menu ${row.label} (${row.key})`);
              Modal.success({
                title: 'Menu Deactivated',
                message: `Menu <strong>${row.label}</strong> has been deactivated.`,
                details: [
                  { label: 'Menu Name', value: row.label },
                  { label: 'Status', value: 'Inactive' }
                ]
              });
            }
          });
        } else {
          Modal.confirm({
            title: `Activate Menu ${row.label}`,
            message: `Are you sure you want to activate menu <strong>${row.label}</strong>?`,
            confirmText: 'Activate',
            cancelText: 'Cancel',
            isDestructive: false,
            onConfirm: () => {
              row.status = 'Active';
              row.visible = true;
              modulesTable.setData(this.state.modulesConfig);
              this.saveState();
              this.logAudit('Menu Setup', `Activated menu ${row.label} (${row.key})`);
              Modal.success({
                title: 'Menu Activated',
                message: `Menu <strong>${row.label}</strong> is now Active.`,
                details: [
                  { label: 'Menu Name', value: row.label },
                  { label: 'Status', value: 'Active' }
                ]
              });
            }
          });
        }
      };
    }

    const addBtn = document.getElementById('btn-add-module');
    if (addBtn) addBtn.onclick = () => this.showAddModuleModal(modulesTable);
  },

  showAllSubmenusModal(menuId, modulesTable = null) {
    const mod = this.state.modulesConfig.find(m => m.id === menuId || m.key === menuId) || 
                DEFAULT_MODULES_CONFIG.find(m => m.id === menuId || m.key === menuId);
    if (!mod) return;
    let list = this.state.submenusConfig[mod.id] || this.state.submenusConfig[mod.key] || DEFAULT_SUBMENUS_CONFIG[mod.id] || DEFAULT_SUBMENUS_CONFIG[mod.key] || [];
    let currentPage = 1;
    let pageSize = 10;

    const getModalContent = () => {
      const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;
      const startIdx = (currentPage - 1) * pageSize;
      const endIdx = Math.min(startIdx + pageSize, list.length);
      const pageItems = list.slice(startIdx, endIdx);
      const startRecord = list.length > 0 ? startIdx + 1 : 0;
      const endRecord = endIdx;

      // Calculate visible page buttons (window around current page)
      const pageWindow = 5;
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + pageWindow - 1);
      if (endPage - startPage + 1 < pageWindow) {
        startPage = Math.max(1, endPage - pageWindow + 1);
      }

      let pagesHtml = '';
      for (let p = startPage; p <= endPage; p++) {
        const isActive = p === currentPage;
        pagesHtml += `
          <button type="button" class="sub-page-btn w-9 h-9 min-w-[36px] flex items-center justify-center text-sm font-semibold rounded-xl transition-all cursor-pointer select-none ${
            isActive
              ? 'bg-black text-white shadow-xs'
              : 'bg-white border border-[#CBD5E1] text-[#334155] hover:border-[#0284C7] hover:text-[#0284C7]'
          }" data-page="${p}">
            ${p}
          </button>
        `;
      }

      return `
      <div id="submenus-modal-inner" class="space-y-3.5">
        <div class="border border-[#EBECF0] rounded-none overflow-hidden shadow-2xs">
          <table class="w-full text-left text-xs">
            <thead class="bg-[#FAFBFC] border-b border-[#EBECF0] text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">
              <tr>
                <th class="py-2.5 px-3">#</th>
                <th class="py-2.5 px-3">Submenu Name</th>
                <th class="py-2.5 px-3">URL</th>
                <th class="py-2.5 px-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#EBECF0] bg-white">
              ${list.length === 0 ? `
                <tr>
                  <td colspan="4" class="py-6 text-center text-xs text-[#8993A4] italic">
                    No configured submenus found for this menu.
                  </td>
                </tr>
              ` : pageItems.map((sm, i) => {
                const actualIdx = startIdx + i;
                const smRoute = sm.tabs?.[0]?.route || sm.route || sm.url || sm.hash || '—';
                return `
                <tr class="hover:bg-[#F9FAFB] transition-colors">
                  <td class="py-2.5 px-3 text-[#8993A4] font-mono text-[11px]">${actualIdx + 1}</td>
                  <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${sm.title || sm.name}</td>
                  <td class="py-2.5 px-3 font-mono text-[11px] text-[#0284C7]">${smRoute}</td>
                  <td class="py-2.5 px-3 text-center">
                    <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      sm.status === 'Inactive' ? 'bg-rose-50 text-[#FF5630] border border-rose-200' : 'bg-emerald-50 text-[#00875A] border border-emerald-200'
                    }">
                      <span class="w-1.5 h-1.5 rounded-full ${sm.status === 'Inactive' ? 'bg-[#FF5630]' : 'bg-[#00875A]'}"></span>
                      ${sm.status || 'Active'}
                    </span>
                  </td>
                </tr>
              `;
              }).join('')}
            </tbody>
          </table>

          <!-- Records Pagination Toolbar matching exact requested style -->
          <div class="px-3.5 py-2.5 bg-[#FAFBFC] border-t border-[#EBECF0] flex items-center justify-between flex-wrap gap-2 text-xs text-[#5E6C84]">
            <div class="flex items-center gap-1.5">
              Showing <span class="font-semibold text-[#172B4D]">${startRecord}</span> to <span class="font-semibold text-[#172B4D]">${endRecord}</span> of <span class="font-semibold text-[#172B4D]">${list.length}</span> submenus
            </div>
            <div class="flex items-center flex-wrap gap-2.5">
              <!-- Rows per page selector -->
              <div class="flex items-center gap-2 text-xs font-medium text-[#64748B]">
                <span>Rows:</span>
                <select id="sub-rows-select" class="text-xs font-medium text-[#1E293B] bg-white border border-[#CBD5E1] rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-[#0284C7] cursor-pointer shadow-2xs hover:border-[#94A3B8]">
                  <option value="5" ${pageSize === 5 ? 'selected' : ''}>5 per page</option>
                  <option value="10" ${pageSize === 10 ? 'selected' : ''}>10 per page</option>
                  <option value="25" ${pageSize === 25 ? 'selected' : ''}>25 per page</option>
                  <option value="50" ${pageSize === 50 ? 'selected' : ''}>50 per page</option>
                </select>
              </div>

              <!-- Page navigation buttons -->
              <div class="flex items-center gap-1.5">
                <button type="button" id="sub-page-prev" style="padding: 0 !important; width: 36px !important; height: 36px !important;" class="w-9 h-9 min-w-[36px] flex items-center justify-center bg-white border border-[#CBD5E1] rounded-xl text-[#64748B] hover:text-[#0284C7] hover:border-[#0284C7] transition-all ${
                  currentPage === 1 ? 'opacity-40 cursor-not-allowed hover:border-[#CBD5E1] hover:text-[#64748B]' : 'cursor-pointer'
                }" title="Previous page" aria-label="Previous page" ${currentPage === 1 ? 'disabled' : ''}>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                </button>

                ${pagesHtml}

                <button type="button" id="sub-page-next" style="padding: 0 !important; width: 36px !important; height: 36px !important;" class="w-9 h-9 min-w-[36px] flex items-center justify-center bg-white border border-[#CBD5E1] rounded-xl text-[#64748B] hover:text-[#0284C7] hover:border-[#0284C7] transition-all ${
                  currentPage >= totalPages ? 'opacity-40 cursor-not-allowed hover:border-[#CBD5E1] hover:text-[#64748B]' : 'cursor-pointer'
                }" title="Next page" aria-label="Next page" ${currentPage >= totalPages ? 'disabled' : ''}>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    };

    const subModal = Modal.open({
      title: `Submenus in ${mod.label}`,
      size: 'lg',
      content: getModalContent(),
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: () => Modal.close() }
      ]
    });

    const bindSubmenuModalEvents = () => {
      const inner = document.getElementById('submenus-modal-inner');
      if (!inner) return;

      const refreshInner = () => {
        list = this.state.submenusConfig[mod.id] || this.state.submenusConfig[mod.key] || DEFAULT_SUBMENUS_CONFIG[mod.id] || DEFAULT_SUBMENUS_CONFIG[mod.key] || [];
        mod.submenusCount = list.length;
        if (modulesTable) {
          modulesTable.setData(this.state.modulesConfig);
        }
        inner.outerHTML = getModalContent();
        bindSubmenuModalEvents();
      };

      const rowsSelect = document.getElementById('sub-rows-select');
      if (rowsSelect) {
        rowsSelect.onchange = (e) => {
          pageSize = parseInt(e.target.value, 10) || 10;
          currentPage = 1;
          inner.outerHTML = getModalContent();
          bindSubmenuModalEvents();
        };
      }

      const prevBtn = document.getElementById('sub-page-prev');
      if (prevBtn) {
        prevBtn.onclick = () => {
          if (currentPage > 1) {
            currentPage--;
            inner.outerHTML = getModalContent();
            bindSubmenuModalEvents();
          }
        };
      }

      const nextBtn = document.getElementById('sub-page-next');
      if (nextBtn) {
        nextBtn.onclick = () => {
          const totalPages = Math.ceil(list.length / pageSize) || 1;
          if (currentPage < totalPages) {
            currentPage++;
            inner.outerHTML = getModalContent();
            bindSubmenuModalEvents();
          }
        };
      }

      inner.querySelectorAll('.sub-page-btn').forEach(btn => {
        btn.onclick = () => {
          const p = parseInt(btn.dataset.page, 10);
          if (p && p !== currentPage) {
            currentPage = p;
            inner.outerHTML = getModalContent();
            bindSubmenuModalEvents();
          }
        };
      });

      const addBtn = document.getElementById('btn-modal-add-sub');
      if (addBtn) {
        addBtn.onclick = () => {
          this.showSubmenuFormModal(mod, null, refreshInner, -1);
        };
      }

      inner.querySelectorAll('.btn-sub-edit').forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.dataset.idx, 10);
          if (list[idx]) {
            this.showSubmenuFormModal(mod, list[idx], refreshInner, idx);
          }
        };
      });

      inner.querySelectorAll('.btn-sub-toggle').forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.dataset.idx, 10);
          const sm = list[idx];
          if (!sm) return;
          const newStatus = sm.status === 'Inactive' ? 'Active' : 'Inactive';
          sm.status = newStatus;
          this.state.submenusConfig[mod.id] = list;
          this.state.submenusConfig[mod.key] = list;
          this.saveState();
          this.logAudit('Menu Setup', `${newStatus === 'Active' ? 'Activated' : 'Deactivated'} submenu: ${sm.title || sm.name} under ${mod.label}`);
          refreshInner();
          Toast.show(`Submenu "${sm.title || sm.name}" marked ${newStatus}`, 'info', 'Updated');
        };
      });

      inner.querySelectorAll('.btn-sub-del').forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.dataset.idx, 10);
          const sm = list[idx];
          if (!sm) return;
          Modal.confirm({
            title: `Delete Submenu: ${sm.title || sm.name}`,
            message: `Are you sure you want to delete submenu <strong>${sm.title || sm.name}</strong> from <strong>${mod.label}</strong>?`,
            confirmText: 'Delete Submenu',
            cancelText: 'Cancel',
            isDestructive: true,
            onConfirm: () => {
              list.splice(idx, 1);
              this.state.submenusConfig[mod.id] = list;
              this.state.submenusConfig[mod.key] = list;
              mod.submenusCount = list.length;
              this.saveState();
              this.logAudit('Menu Setup', `Deleted submenu: ${sm.title || sm.name} from ${mod.label}`);
              refreshInner();
              Toast.show(`Submenu "${sm.title || sm.name}" deleted`, 'info', 'Deleted');
            }
          });
        };
      });
    };

    setTimeout(bindSubmenuModalEvents, 40);
  },

  showSubmenuFormModal(mod, sm = null, onSaved = null, editIndex = -1) {
    const isEdit = sm !== null && editIndex >= 0;
    const currentName = sm?.title || sm?.name || '';
    const currentUrl = sm?.url || sm?.hash || sm?.route || '';
    const currentStatus = sm?.status || 'Active';

    Modal.open({
      title: isEdit ? `Edit Submenu: ${currentName}` : `Add Submenu to ${mod.label}`,
      size: 'md',
      content: `
        <form id="submenu-single-form" class="space-y-4 text-xs" onsubmit="return false;">
          <div>
            <label class="block text-xs font-semibold text-[#172B4D] mb-0">
              Submenu Name <span class="text-rose-500">*</span>
            </label>
            <input 
              type="text" 
              id="sub-modal-name" 
              class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" 
              placeholder="e.g. Daily Procurement Summary" 
              value="${currentName}" 
              required 
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-[#172B4D] mb-0">
              URL / Route
            </label>
            <input 
              type="text" 
              id="sub-modal-url" 
              class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] font-mono text-[#0284C7]" 
              placeholder="#/${mod.key || mod.id}/sub-route" 
              value="${currentUrl}" 
            />
            <p class="text-[10px] text-[#5E6C84] mt-1">Leave blank to automatically construct route from submenu name.</p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-[#172B4D] mb-0">
              Status
            </label>
            <select id="sub-modal-status" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]">
              <option value="Active" ${currentStatus === 'Active' ? 'selected' : ''}>Active</option>
              <option value="Inactive" ${currentStatus === 'Inactive' ? 'selected' : ''}>Inactive</option>
            </select>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: isEdit ? 'Save Changes' : 'Add Submenu',
          type: 'primary',
          onClick: (m) => {
            const name = document.getElementById('sub-modal-name')?.value.trim();
            if (!name) {
              Toast.show('Please enter a submenu name', 'warning', 'Required');
              document.getElementById('sub-modal-name')?.focus();
              return;
            }

            const inputUrl = document.getElementById('sub-modal-url')?.value.trim();
            const status = document.getElementById('sub-modal-status')?.value || 'Active';
            const modKey = mod.key || mod.id;
            const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            const finalUrl = inputUrl || `#/${modKey}/${slug}`;

            let list = this.state.submenusConfig[mod.id] || this.state.submenusConfig[mod.key] || [];

            if (isEdit) {
              list[editIndex] = {
                ...list[editIndex],
                id: list[editIndex].id || slug,
                title: name,
                name: name,
                url: finalUrl,
                route: finalUrl,
                hash: finalUrl,
                status: status
              };
              this.logAudit('Menu Setup', `Updated submenu: ${name} (${finalUrl}) in ${mod.label}`);
            } else {
              const newSub = {
                id: slug,
                title: name,
                name: name,
                url: finalUrl,
                route: finalUrl,
                hash: finalUrl,
                status: status,
                tabs: [
                  { id: slug, label: name, route: finalUrl, type: 'custom', badge: '' }
                ]
              };
              list.push(newSub);
              this.logAudit('Menu Setup', `Added new submenu: ${name} (${finalUrl}) to ${mod.label}`);
            }

            this.state.submenusConfig[mod.id] = list;
            this.state.submenusConfig[mod.key] = list;
            mod.submenusCount = list.length;
            this.saveState();
            m.close();
            Toast.show(isEdit ? `Submenu "${name}" updated!` : `Submenu "${name}" added!`, 'success', 'Saved');

            if (onSaved) onSaved();
          }
        }
      ]
    });

    // Auto-generate URL when typing name in Add mode
    if (!isEdit) {
      setTimeout(() => {
        const nameInput = document.getElementById('sub-modal-name');
        const urlInput = document.getElementById('sub-modal-url');
        if (nameInput && urlInput) {
          nameInput.oninput = () => {
            if (!urlInput.dataset.manualEdit) {
              const slug = nameInput.value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
              urlInput.value = slug ? `#/${mod.key || mod.id}/${slug}` : '';
            }
          };
          urlInput.oninput = () => {
            urlInput.dataset.manualEdit = 'true';
          };
        }
      }, 40);
    }
  },

  showAddModuleModal(modulesTable = null) {
    this.showMenuFormModal(null, false, modulesTable);
  },

  showEditModuleModal(mod, modulesTable = null) {
    if (mod && (mod.isProtected || mod.isDefault || ['dashboard', 'master', 'reports', 'help'].includes(mod.id || mod.key))) {
      Toast.show('System default menu is protected and cannot be modified.', 'warning');
      return;
    }
    this.showMenuFormModal(mod, true, modulesTable);
  },

  showMenuFormModal(mod = null, isEdit = false, modulesTable = null) {
    // If cache is small and window.lucide has loaded, refresh cache
    if ((!this._lucideIconsCache || this._lucideIconsCache.length < 100) && typeof window !== 'undefined' && window.lucide && window.lucide.icons) {
      this._lucideIconsCache = null;
    }
    const lucideIcons = this.getLucideIconLibrary();
    const currentName = mod?.label || '';
    let currentIconKey = mod ? this.getModuleIconId(mod) : 'shopping-cart';
    const currentStatus = mod?.status || (mod?.visible === false ? 'Inactive' : 'Active');

    // Existing submenus
    let existingSubmenus = [];
    if (mod) {
      existingSubmenus = this.state.submenusConfig[mod.id] || this.state.submenusConfig[mod.key] || [];
    }
    if (!existingSubmenus || existingSubmenus.length === 0) {
      existingSubmenus = [{ name: '', url: '', status: 'Active' }];
    }

    const currentIconItem = lucideIcons.find(i => i.id === currentIconKey) || lucideIcons[0];

    Modal.open({
      title: isEdit ? `Edit Menu: ${currentName}` : 'Add Menu',
      size: '2xl',
      content: `
        <div id="menu-setup-wizard" class="space-y-4 text-xs">
          <!-- Stepper Tab Bar -->
          <div class="flex items-center justify-between border-b border-[#DFE1E6] pb-3 mb-2 flex-wrap gap-2">
            <div class="flex items-center gap-1.5 sm:gap-2" id="menu-wizard-stepper-tabs" role="tablist">
              <!-- Step 1 Button -->
              <button type="button" class="wizard-step-tab px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer bg-[#00A4B7] text-white shadow-xs flex items-center gap-1.5" data-step="1">
                <span class="step-num-badge w-4 h-4 rounded-full bg-white/25 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                <span>Main Menu</span>
              </button>

              <!-- Chevron Divider -->
              <svg class="w-3.5 h-3.5 text-[#A5B4CB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>

              <!-- Step 2 Button -->
              <button type="button" class="wizard-step-tab px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer text-[#5E6C84] hover:text-[#172B4D] hover:bg-[#EBECF0] flex items-center gap-1.5" data-step="2">
                <span class="step-num-badge w-4 h-4 rounded-full bg-[#DFE1E6] text-[#5E6C84] flex items-center justify-center text-[10px] font-bold">2</span>
                <span>Sub Menu</span>
                <span id="step-submenus-count-badge" class="text-[9.5px] font-mono px-1.5 py-0.2 rounded-full bg-[#F1F5F9] text-[#5E6C84] border border-[#DFE1E6]">${existingSubmenus.length}</span>
              </button>

              <!-- Chevron Divider -->
              <svg class="w-3.5 h-3.5 text-[#A5B4CB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>

              <!-- Step 3 Button -->
              <button type="button" class="wizard-step-tab px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer text-[#5E6C84] hover:text-[#172B4D] hover:bg-[#EBECF0] flex items-center gap-1.5" data-step="3">
                <span class="step-num-badge w-4 h-4 rounded-full bg-[#DFE1E6] text-[#5E6C84] flex items-center justify-center text-[10px] font-bold">3</span>
                <span>Tab Menu</span>
              </button>
            </div>

            <!-- Live Hierarchy Breadcrumb Preview -->
            <div class="hidden sm:flex items-center gap-1.5 text-[11px] text-[#5E6C84] bg-[#F8FAFC] px-2.5 py-1 rounded-lg border border-[#E2E8F0]">
              <span class="font-medium">Hierarchy:</span>
              <div class="flex items-center gap-1 font-bold">
                <span id="wizard-summary-menu" class="text-[#00A4B7]">${currentName || 'New Menu'}</span>
                <span class="text-[#94A3B8]">➔</span>
                <span id="wizard-summary-submenu" class="text-[#172B4D]">Overview</span>
                <span class="text-[#94A3B8]">➔</span>
                <span id="wizard-summary-tab" class="text-[#006644]">Tab</span>
              </div>
            </div>
          </div>

          <form id="menu-setup-form" onsubmit="return false;">
            <!-- ============================================================= -->
            <!-- STEP 1: MAIN MENU PANEL -->
            <!-- ============================================================= -->
            <div id="wizard-panel-1" class="wizard-step-panel space-y-4">
              <!-- Top Card: Menu Selection, Name & Status -->
              <div class="p-3.5 bg-white rounded-xl border border-[#DFE1E6] shadow-2xs space-y-3" style="border: 1px solid #DFE1E6 !important;">
                <div class="grid grid-cols-12 gap-3 items-end">
                  <!-- Existing Menu Select Dropdown -->
                  <div class="col-span-8 sm:col-span-9">
                    <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>Select Existing Menu</span>
                      <span class="text-[10px] font-medium text-[#5E6C84] lowercase">(or create new)</span>
                    </label>

                    <div class="relative" id="menu-dropdown-wrapper">
                      <button type="button" id="menu-modal-select-trigger" class="w-full text-xs px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D] flex items-center justify-between cursor-pointer shadow-2xs hover:border-[#00A4B7] transition-all" style="border: 1px solid #CBD5E1 !important;">
                        <div class="flex items-center gap-2 truncate" id="menu-selected-display">
                          ${mod ? `
                            <div class="w-5 h-5 rounded-md bg-[#F0F9FF] border border-[#BAE6FD] text-[#00A4B7] flex items-center justify-center shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5">
                              ${this.getModuleIconSvg(mod)}
                            </div>
                            <span class="truncate font-bold text-[#172B4D] text-xs">${mod.label}${mod.isProtected ? ' (System)' : ''}</span>
                          ` : `
                            <div class="w-5 h-5 rounded-md bg-[#F0FDF4] border border-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                            </div>
                            <span class="truncate font-bold text-[#16A34A] text-xs">✨ + Create New Menu</span>
                          `}
                        </div>
                        <svg id="menu-dropdown-chevron" class="w-3.5 h-3.5 text-[#5E6C84] shrink-0 ml-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                      </button>

                      <input type="hidden" id="menu-modal-select-existing" value="${mod ? mod.id : '__NEW__'}" />

                      <!-- Dropdown Menu List -->
                      <div id="menu-custom-dropdown-list" class="hidden absolute left-0 right-0 top-full mt-1 bg-white border border-[#DFE1E6] rounded-xl shadow-xl z-50 max-h-[240px] overflow-y-auto divide-y divide-[#F1F5F9] p-1.5 animate-fade-in">
                        <div class="p-1 mb-1 sticky top-0 bg-white z-10">
                          <div class="relative">
                            <input type="text" id="menu-dropdown-search" placeholder="Search menu..." class="w-full text-xs pr-2 py-1.5 bg-[#F8FAFC] border border-[#DFE1E6] rounded-md focus:outline-none focus:border-[#00A4B7] font-medium text-[#172B4D]" style="padding-left: 32px !important;" />
                            <svg class="w-3.5 h-3.5 text-[#94A3B8] absolute left-2 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                          </div>
                        </div>

                        <div class="menu-dropdown-item flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-[#F0FDF4] transition-colors ${!mod ? 'bg-[#F0FDF4] border border-[#BBF7D0]' : ''}" data-value="__NEW__" data-label="✨ + Create New Menu">
                          <div class="flex items-center gap-2">
                            <div class="w-5 h-5 rounded-md bg-[#F0FDF4] border border-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                            </div>
                            <span class="font-bold text-xs text-[#16A34A]">✨ + Create New Menu</span>
                          </div>
                        </div>

                        <div class="px-2 py-1 text-[9.5px] font-bold text-[#5E6C84] uppercase tracking-wider bg-[#F8FAFC] rounded my-1">
                          Existing Menus (${this.state.modulesConfig.length})
                        </div>

                        <div id="menu-dropdown-items-container" class="space-y-0.5">
                          ${this.state.modulesConfig.map(m => {
                            const svg = this.getModuleIconSvg(m);
                            const isSelected = mod && (mod.id === m.id || mod.key === m.key);
                            return `
                              <div class="menu-dropdown-item flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-[#F0F9FF] transition-colors ${isSelected ? 'bg-[#F0F9FF] border border-[#BAE6FD]' : ''}" data-value="${m.id}" data-label="${m.label}">
                                <div class="flex items-center gap-2 truncate">
                                  <div class="w-5 h-5 rounded-md bg-[#F0F9FF] border border-[#BAE6FD] text-[#00A4B7] flex items-center justify-center shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5">
                                    ${svg}
                                  </div>
                                  <span class="font-bold text-xs text-[#172B4D] truncate">${m.label}</span>
                                </div>
                                ${m.isProtected ? `<span class="ml-1 text-[9px] font-bold text-[#5E6C84] bg-[#F1F5F9] px-1 py-0.5 rounded border border-[#DFE1E6] shrink-0">System</span>` : ''}
                              </div>
                            `;
                          }).join('')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Status Toggle -->
                  <div class="col-span-4 sm:col-span-3">
                    <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                      Status
                    </label>
                    <div class="flex items-center h-[34px]">
                      <label class="inline-flex items-center gap-1.5 cursor-pointer select-none">
                        <input type="checkbox" id="menu-modal-status-cb" class="w-4 h-4 rounded border-[#DFE1E6] text-[#00A4B7] accent-[#00A4B7] cursor-pointer" ${currentStatus === 'Active' ? 'checked' : ''} />
                        <span class="text-xs font-semibold text-[#172B4D]">Active Menu</span>
                      </label>
                      <input type="hidden" id="menu-modal-status" value="${currentStatus}" />
                    </div>
                  </div>
                </div>

                <!-- Menu Name Input -->
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">
                      Menu Name <span class="text-rose-500">*</span>
                    </label>
                    <span id="menu-modal-mode-badge" class="text-[10px] font-semibold text-[#5E6C84]">
                      ${isEdit ? `Editing: ${currentName}` : '✨ New Menu'}
                    </span>
                  </div>
                  <input type="text" id="menu-modal-name" value="${currentName}" placeholder="e.g. Procurement & Inward" class="w-full text-xs px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D] shadow-2xs" style="border: 1px solid #CBD5E1 !important;" />
                </div>
              </div>

              <input type="hidden" id="menu-modal-icon-val" value="${currentIconItem.id}" />

              <!-- Bottom Card: Menu Icon Selector -->
              <div class="p-3.5 bg-white rounded-xl border border-[#DFE1E6] shadow-2xs space-y-2.5" style="border: 1px solid #DFE1E6 !important;">
                <div class="flex items-center justify-between gap-2 flex-wrap">
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-md bg-[#F0F9FF] border border-[#BAE6FD] text-[#00A4B7] flex items-center justify-center shrink-0">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    </div>
                    <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">
                      Select Menu Icon
                    </label>
                  </div>
                  <div class="flex items-center gap-2">
                    <input type="text" id="lucide-search-input" placeholder="Search icons..." class="text-xs px-2.5 py-1 bg-[#F8FAFC] border border-[#DFE1E6] rounded-md focus:outline-none focus:border-[#00A4B7] w-36 shadow-2xs font-normal" />
                    <span id="lucide-count-badge" class="text-[10px] text-[#5E6C84] font-medium font-mono whitespace-nowrap">${lucideIcons.length} icons</span>
                  </div>
                </div>

                <!-- Visual Grid of Lucide Icons -->
                <div id="lucide-icon-grid" class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 h-[260px] max-h-[260px] overflow-y-auto p-2 border border-[#DFE1E6] rounded-lg bg-[#FAFBFC] shadow-2xs">
                  <!-- Populated by JavaScript below -->
                </div>
              </div>
            </div>

            <!-- ============================================================= -->
            <!-- STEP 2: SUB MENU PANEL -->
            <!-- ============================================================= -->
            <div id="wizard-panel-2" class="wizard-step-panel hidden space-y-3">
              <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2 mb-1">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Sub Menus for:</span>
                  <span id="step2-menu-name-display" class="font-bold text-[#00A4B7] text-xs">${currentName || 'New Menu'}</span>
                </div>
                <button type="button" id="btn-add-sub-item" class="btn-secondary px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-[#EBECF0] transition-colors cursor-pointer text-[#00A4B7] border border-[#DFE1E6]">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                  <span>Add Sub Menu</span>
                </button>
              </div>

              <!-- Submenus Table Container -->
              <div class="border border-[#DFE1E6] rounded-xl bg-white shadow-2xs overflow-hidden" style="border: 1px solid #DFE1E6 !important;">
                <div class="grid grid-cols-12 gap-2 px-3 py-2.5 text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider bg-[#F8FAFC] border-b border-[#DFE1E6]">
                  <div class="col-span-5">Sub Menu Name</div>
                  <div class="col-span-4">Url Hash</div>
                  <div class="col-span-2 text-center">Status</div>
                  <div class="col-span-1 text-center">Action</div>
                </div>

                <!-- Dynamic Rows Container -->
                <div id="submenus-list-container" class="space-y-2 p-2.5 max-h-[340px] overflow-y-auto">
                  <!-- Dynamic Rows Inserted Here -->
                </div>
              </div>

              <div class="text-[11px] text-[#5E6C84] flex items-center gap-1.5 pt-1">
                <svg class="w-4 h-4 text-[#00A4B7] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Clicking any Sub Menu row selects it as the active parent for Tab configuration in Step 3.</span>
              </div>
            </div>

            <!-- ============================================================= -->
            <!-- STEP 3: TAB MENU PANEL -->
            <!-- ============================================================= -->
            <div id="wizard-panel-3" class="wizard-step-panel hidden space-y-3.5">
              <!-- Attached Parent Target Banner -->
              <div class="p-3 bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] rounded-xl border border-[#BAE6FD] flex items-center justify-between gap-3 shadow-2xs flex-wrap">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-8 h-8 rounded-lg bg-[#00A4B7] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  </div>
                  <div class="flex flex-col min-w-0">
                    <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">Attached Parent Target</span>
                    <div class="flex items-center gap-1.5 text-xs font-bold text-[#172B4D] truncate">
                      <span id="tab-parent-menu-display" class="text-[#00A4B7] truncate">${currentName || 'Menu'}</span>
                      <svg class="w-3.5 h-3.5 text-[#5E6C84] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                      <span id="tab-parent-submenu-display" class="text-[#172B4D] truncate">Overview</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-bold text-[#006644] bg-[#E3FCEF] border border-[#ABF5D1] px-2.5 py-1 rounded-full shrink-0 flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    <span>Auto-Linked to Sub Menu</span>
                  </span>
                </div>
              </div>

              <!-- Hidden inputs to retain IDs for compatibility -->
              <input type="hidden" id="tab-modal-menu" value="" />
              <input type="hidden" id="tab-modal-submenu" value="" />

              <!-- Tab Configuration Card -->
              <div class="p-4 bg-white rounded-xl border border-[#DFE1E6] shadow-2xs space-y-3.5" style="border: 1px solid #DFE1E6 !important;">
                <!-- Tab Name / Label -->
                <div>
                  <label for="tab-modal-label" class="block text-xs font-bold text-[#172B4D] mb-1">
                    Tab Name / Label
                  </label>
                  <input type="text" id="tab-modal-label" value="" class="w-full text-xs px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D] shadow-2xs" placeholder="e.g. Fields Customizer, Forms, Query Editor" />
                </div>

                <!-- Tab Slug & Mapping Type -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label for="tab-modal-slug" class="block text-xs font-semibold text-[#172B4D] mb-1">
                      Tab Slug / Key
                    </label>
                    <input type="text" id="tab-modal-slug" value="" class="w-full text-xs px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg font-mono lowercase focus:outline-none focus:border-[#00A4B7] text-[#00A4B7] font-bold shadow-2xs" placeholder="e.g. fields-customizer" />
                  </div>
                  <div>
                    <label for="tab-modal-type" class="block text-xs font-semibold text-[#172B4D] mb-1">
                      Mapping Type
                    </label>
                    <select id="tab-modal-type" class="w-full text-xs px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D] shadow-2xs">
                      <option value="system">System Page</option>
                      <option value="standard">Standard View</option>
                      <option value="dynamic-form">Dynamic Form</option>
                      <option value="report">Report</option>
                      <option value="custom-list">Custom List</option>
                    </select>
                  </div>
                </div>

                <!-- Route URL Hash -->
                <div>
                  <label for="tab-modal-route" class="block text-xs font-semibold text-[#172B4D] mb-1 flex items-center justify-between">
                    <span>Route URL Hash</span>
                    <span class="text-[10px] text-[#5E6C84] font-normal font-mono">Format: #/{menu}/{submenu}/{slug}</span>
                  </label>
                  <input type="text" id="tab-modal-route" value="" class="w-full text-xs px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg font-mono focus:outline-none focus:border-[#00A4B7] text-[#172B4D] shadow-2xs" placeholder="e.g. #/settings/overview/fields-customizer" />
                </div>

                <!-- Badge Tag & Status Checkbox -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-end">
                  <div>
                    <label for="tab-modal-badge" class="block text-xs font-semibold text-[#172B4D] mb-1">
                      Badge Tag (Optional)
                    </label>
                    <input type="text" id="tab-modal-badge" value="" class="w-full text-xs px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D] shadow-2xs" placeholder="e.g. 5 New, Pro" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-[#172B4D] mb-1">Tab Status</label>
                    <div class="flex items-center h-[38px]">
                      <label class="inline-flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" id="tab-modal-status-cb" class="w-4.5 h-4.5 rounded border-[#DFE1E6] text-[#00A4B7] accent-[#00A4B7] cursor-pointer" checked />
                        <span class="text-xs font-semibold text-[#172B4D]">Active Tab</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        { label: '← Back', type: 'secondary', class: 'hidden btn-wizard-back px-4 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer', onClick: () => {} },
        { label: 'Next: Sub Menu →', type: 'secondary', class: 'btn-wizard-next px-4 py-2 rounded-full text-xs font-bold border border-[#00A4B7] bg-[#F0F9FF] text-[#00A4B7] hover:bg-[#00A4B7] hover:text-white transition-all cursor-pointer shadow-2xs', onClick: () => {} },
        {
          label: isEdit ? 'Save Changes' : 'Save Menu',
          type: 'primary',
          onClick: (m) => {
            const menuName = document.getElementById('menu-modal-name')?.value.trim();
            if (!menuName) {
              Toast.show('Please enter a Menu Name', 'warning', 'Missing Field');
              goToStep(1);
              document.getElementById('menu-modal-name')?.focus();
              return;
            }

            const iconKey = document.getElementById('menu-modal-icon-val')?.value || 'shopping-cart';
            const matchedIcon = lucideIcons.find(i => i.id === iconKey) || lucideIcons[0];
            const iconSvg = matchedIcon.svg;
            const menuStatus = document.getElementById('menu-modal-status')?.value || 'Active';
            const isVisible = menuStatus === 'Active';

            // Collect submenus
            const subRows = document.querySelectorAll('.submenu-item-row');
            const submenus = [];
            const modKey = isEdit ? mod.key : menuName.toLowerCase().replace(/[^a-z0-9]/g, '-');

            subRows.forEach(row => {
              const sName = row.querySelector('.sub-item-name')?.value.trim();
              const sUrl = row.querySelector('.sub-item-url')?.value.trim();
              const sStatus = row.querySelector('.sub-item-status')?.value || 'Active';
              if (sName || sUrl) {
                const sId = (sName || 'sub').toLowerCase().replace(/[^a-z0-9]/g, '-');
                const finalUrl = sUrl || `#/${modKey}/${sId}`;
                
                // Inherit tabs if stored on this row
                let rowTabs = [];
                if (row._tabData && row._tabData.label) {
                  const tSlug = row._tabData.slug || sId;
                  rowTabs = [{
                    id: tSlug,
                    label: row._tabData.label,
                    route: row._tabData.route || `#/${modKey}/${sId}/${tSlug}`,
                    type: row._tabData.type || 'system',
                    badge: row._tabData.badge || '',
                    status: row._tabData.status || 'Active'
                  }];
                } else if (Array.isArray(row._tabData?.tabs)) {
                  rowTabs = row._tabData.tabs;
                }

                submenus.push({
                  id: sId,
                  title: sName || sId,
                  name: sName || sId,
                  url: finalUrl,
                  route: finalUrl,
                  hash: finalUrl,
                  status: sStatus,
                  tabs: rowTabs
                });
              }
            });

            const selectedMenuId = document.getElementById('menu-modal-select-existing')?.value;
            const existingMatch = (selectedMenuId && selectedMenuId !== '__NEW__')
              ? this.state.modulesConfig.find(m => m.id === selectedMenuId || m.key === selectedMenuId)
              : null;
            const targetMod = isEdit ? mod : existingMatch;

            if (targetMod && (targetMod.isProtected || targetMod.isDefault || ['dashboard', 'master', 'reports', 'help'].includes(targetMod.id || targetMod.key))) {
              Toast.show('System default menu is protected and cannot be modified.', 'warning');
              return;
            }

            // If no submenus were specified, create a default overview submenu
            if (submenus.length === 0) {
              submenus.push({
                id: 'overview',
                title: `${menuName} Overview`,
                name: `${menuName} Overview`,
                url: `#/${modKey}/overview`,
                route: `#/${modKey}/overview`,
                hash: `#/${modKey}/overview`,
                status: 'Active',
                tabs: []
              });
            }

            // Collect Tab Menu from Step 3
            const tabLabel = document.getElementById('tab-modal-label')?.value.trim();
            const tabSlugRaw = document.getElementById('tab-modal-slug')?.value.trim();
            const tabSlug = tabSlugRaw ? tabSlugRaw.toLowerCase().replace(/[^a-z0-9_-]+/g, '-') : (tabLabel ? tabLabel.toLowerCase().replace(/[^a-z0-9_-]+/g, '-') : '');
            const tabType = document.getElementById('tab-modal-type')?.value || 'system';
            const tabBadge = document.getElementById('tab-modal-badge')?.value.trim() || '';
            const tabStatus = document.getElementById('tab-modal-status-cb')?.checked ? 'Active' : 'Inactive';
            const selectedTabMenu = document.getElementById('tab-modal-menu')?.value || modKey;
            const selectedTabSub = document.getElementById('tab-modal-submenu')?.value || submenus[0]?.id;
            const tabRoute = document.getElementById('tab-modal-route')?.value.trim() || `#/${selectedTabMenu}/${selectedTabSub}/${tabSlug || 'tab'}`;

            let attachedTabInfo = null;

            if (tabLabel) {
              // User specified a Tab Menu to be attached to the active Sub Menu
              let targetSm = submenus.find(s => s.id === selectedTabSub || (s.name && s.name.toLowerCase() === selectedTabSub.toLowerCase()));
              if (!targetSm) {
                targetSm = submenus[0];
              }

              if (!Array.isArray(targetSm.tabs)) {
                targetSm.tabs = [];
              }

              const existingTabIdx = targetSm.tabs.findIndex(t => t.id === tabSlug);
              const tabObject = {
                id: tabSlug,
                label: tabLabel,
                route: tabRoute,
                type: tabType,
                badge: tabBadge,
                status: tabStatus
              };

              if (existingTabIdx > -1) {
                targetSm.tabs[existingTabIdx] = tabObject;
              } else {
                targetSm.tabs.push(tabObject);
              }

              // Also register into this.state.tabsConfig for tabs studio
              if (!Array.isArray(this.state.tabsConfig)) {
                this.state.tabsConfig = [];
              }
              const existingGlobalTabIdx = this.state.tabsConfig.findIndex(t => t.id === tabSlug && (t.menuKey === selectedTabMenu || t.menuKey === modKey));
              const fullTabRecord = {
                id: tabSlug,
                key: tabSlug,
                label: tabLabel,
                menuKey: selectedTabMenu,
                menuLabel: menuName,
                submenuId: targetSm.id || selectedTabSub,
                submenuTitle: targetSm.title || targetSm.name || selectedTabSub,
                route: tabRoute,
                type: tabType,
                badge: tabBadge,
                status: tabStatus,
                order: (existingTabIdx > -1) ? (existingTabIdx + 1) : 1,
                isProtected: false,
                description: `Tab for ${tabLabel} under ${menuName} > ${targetSm.title || targetSm.name}`
              };

              if (existingGlobalTabIdx > -1) {
                this.state.tabsConfig[existingGlobalTabIdx] = Object.assign(this.state.tabsConfig[existingGlobalTabIdx], fullTabRecord);
              } else {
                this.state.tabsConfig.unshift(fullTabRecord);
              }

              attachedTabInfo = {
                label: tabLabel,
                slug: tabSlug,
                route: tabRoute,
                status: tabStatus,
                submenuTitle: targetSm.title || targetSm.name || selectedTabSub
              };
            }

            if (targetMod) {
              targetMod.label = menuName;
              targetMod.icon = iconSvg;
              targetMod.iconKey = iconKey;
              targetMod.status = menuStatus;
              targetMod.visible = isVisible;
              targetMod.submenusCount = submenus.length;
              if (submenus.length > 0 && submenus[0].url) {
                targetMod.route = submenus[0].url;
              }
              this.state.submenusConfig[targetMod.id] = submenus;
              this.state.submenusConfig[targetMod.key] = submenus;
              this.logAudit('Menu Setup', `Updated menu: ${menuName} (${targetMod.key}) with ${submenus.length} submenus${attachedTabInfo ? ` and tab "${attachedTabInfo.label}"` : ''}`);
            } else {
              const newMod = {
                id: modKey,
                key: modKey,
                label: menuName,
                icon: iconSvg,
                iconKey: iconKey,
                status: menuStatus,
                visible: isVisible,
                order: this.state.modulesConfig.length + 1,
                submenusCount: submenus.length,
                roles: ['System Administrator', 'Operations Manager'],
                route: submenus[0]?.url || `#/${modKey}/overview`
              };
              this.state.modulesConfig.push(newMod);
              this.state.submenusConfig[modKey] = submenus;
              this.logAudit('Menu Setup', `Registered menu: ${menuName} (${modKey}) with ${submenus.length} submenus${attachedTabInfo ? ` and tab "${attachedTabInfo.label}"` : ''}`);
            }

            this.saveState();
            m.close();

            if (modulesTable) {
              modulesTable.setData(this.state.modulesConfig);
            } else {
              const c = document.getElementById('setup-subpage-content');
              if (c) this.renderModuleStudioTab(c);
            }

            // Refresh tabs table if currently active
            const tabsTableContainer = document.getElementById('tabs-table-container');
            if (tabsTableContainer && this.currentSubpage === 'tabs') {
              const c = document.getElementById('setup-subpage-content');
              if (c) this.renderTabsStudioTab(c);
            }

            // Confirmation Message Popup
            const detailsList = [
              { label: 'Menu Name', value: menuName },
              { label: 'Lucide Icon', value: `lucide:${iconKey}` },
              { label: 'Status', value: menuStatus },
              { label: 'Sub Menus Count', value: `${submenus.length} Sub Menus` },
              { label: 'Sub Menus', value: submenus.map(s => `${s.title || s.name}${s.url ? ` (${s.url})` : ''} [${s.status}]`).join('; ') || 'None' }
            ];

            if (attachedTabInfo) {
              detailsList.push({
                label: 'Tab Menu',
                value: `${attachedTabInfo.label} (${attachedTabInfo.slug}) [${attachedTabInfo.status}] -> ${attachedTabInfo.route}`
              });
              detailsList.push({
                label: 'Hierarchy',
                value: `Main Menu: ${menuName}  ➔  Sub Menu: ${attachedTabInfo.submenuTitle}  ➔  Tab: ${attachedTabInfo.label}`
              });
            }

            Modal.success({
              title: isEdit ? 'Menu Updated Successfully' : 'Menu Registered Successfully',
              message: `Menu <strong>${menuName}</strong> has been configured with <strong>${submenus.length}</strong> sub menu(s)${attachedTabInfo ? ` and tab <strong>${attachedTabInfo.label}</strong>` : ''}.`,
              details: detailsList
            });
          }
        }
      ]
    });

    // =========================================================================
    // STEPPER / TABS WIZARD WIRING & INTERACTIVITY
    // =========================================================================

    // Reference elements
    const existingSelect = document.getElementById('menu-modal-select-existing');
    const menuNameInput = document.getElementById('menu-modal-name');
    const modeBadge = document.getElementById('menu-modal-mode-badge');
    const statusCb = document.getElementById('menu-modal-status-cb');
    const statusInput = document.getElementById('menu-modal-status');

    // Breadcrumb / summary display elements
    const summaryMenuEl = document.getElementById('wizard-summary-menu');
    const summarySubmenuEl = document.getElementById('wizard-summary-submenu');
    const summaryTabEl = document.getElementById('wizard-summary-tab');
    const step2MenuNameDisplay = document.getElementById('step2-menu-name-display');

    // Tab hierarchy elements
    const tabMenuInput = document.getElementById('tab-modal-menu');
    const tabSubmenuInput = document.getElementById('tab-modal-submenu');
    const tabParentMenuDisplay = document.getElementById('tab-parent-menu-display');
    const tabParentSubmenuDisplay = document.getElementById('tab-parent-submenu-display');
    const tabLabelInput = document.getElementById('tab-modal-label');
    const tabSlugInput = document.getElementById('tab-modal-slug');
    const tabTypeSelect = document.getElementById('tab-modal-type');
    const tabRouteInput = document.getElementById('tab-modal-route');
    const tabBadgeInput = document.getElementById('tab-modal-badge');
    const tabStatusCb = document.getElementById('tab-modal-status-cb');

    // Submenu container
    const listContainer = document.getElementById('submenus-list-container');
    const subCountBadge = document.getElementById('step-submenus-count-badge');
    let activeSubRow = null;

    // Helper functions
    const getCurrentMenuKey = () => {
      const selectedExisting = existingSelect?.value;
      if (selectedExisting && selectedExisting !== '__NEW__') {
        return selectedExisting;
      }
      const typedName = menuNameInput?.value.trim();
      if (typedName) {
        return typedName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      }
      return isEdit && mod ? (mod.key || mod.id) : 'menu';
    };

    const getCurrentMenuLabel = () => {
      const typedName = menuNameInput?.value.trim();
      if (typedName) return typedName;
      const selectedExisting = existingSelect?.value;
      if (selectedExisting && selectedExisting !== '__NEW__') {
        const found = this.state.modulesConfig.find(m => m.id === selectedExisting || m.key === selectedExisting);
        if (found) return found.label;
      }
      return isEdit && mod ? mod.label : 'New Menu';
    };

    const getActiveSubmenuInfo = () => {
      if (activeSubRow) {
        const sName = activeSubRow.querySelector('.sub-item-name')?.value.trim();
        const sUrl = activeSubRow.querySelector('.sub-item-url')?.value.trim();
        const sId = (sName || 'overview').toLowerCase().replace(/[^a-z0-9]/g, '-');
        return { id: sId, name: sName || 'Overview', url: sUrl };
      }
      if (listContainer && listContainer.children.length > 0) {
        const first = listContainer.children[0];
        const sName = first.querySelector('.sub-item-name')?.value.trim();
        const sUrl = first.querySelector('.sub-item-url')?.value.trim();
        const sId = (sName || 'overview').toLowerCase().replace(/[^a-z0-9]/g, '-');
        return { id: sId, name: sName || 'Overview', url: sUrl };
      }
      return { id: 'overview', name: 'Overview', url: '' };
    };

    const syncHierarchyDisplay = () => {
      const mKey = getCurrentMenuKey();
      const mLabel = getCurrentMenuLabel();
      const subInfo = getActiveSubmenuInfo();
      const curTabLabel = tabLabelInput?.value.trim() || 'Tab';
      const curSlug = tabSlugInput?.value.trim() || (curTabLabel ? curTabLabel.toLowerCase().replace(/[^a-z0-9_-]+/g, '-') : 'tab');

      if (tabMenuInput) tabMenuInput.value = mKey;
      if (tabSubmenuInput) tabSubmenuInput.value = subInfo.id;
      if (tabParentMenuDisplay) tabParentMenuDisplay.textContent = mLabel;
      if (tabParentSubmenuDisplay) tabParentSubmenuDisplay.textContent = subInfo.name;
      if (step2MenuNameDisplay) step2MenuNameDisplay.textContent = mLabel;

      if (summaryMenuEl) summaryMenuEl.textContent = mLabel;
      if (summarySubmenuEl) summarySubmenuEl.textContent = subInfo.name;
      if (summaryTabEl) summaryTabEl.textContent = curTabLabel;

      if (tabRouteInput) {
        tabRouteInput.value = `#/${mKey}/${subInfo.id}/${curSlug}`;
      }

      if (subCountBadge && listContainer) {
        subCountBadge.textContent = listContainer.children.length;
      }
    };

    // Stepper Navigation Management
    let currentStep = 1;
    const btnBack = document.querySelector('.btn-wizard-back');
    const btnNext = document.querySelector('.btn-wizard-next');

    const goToStep = (stepNumber) => {
      currentStep = Math.max(1, Math.min(3, stepNumber));

      // Update Stepper Tabs Styling
      document.querySelectorAll('.wizard-step-tab').forEach(btn => {
        const step = parseInt(btn.dataset.step, 10);
        const numBadge = btn.querySelector('.step-num-badge');
        if (step === currentStep) {
          btn.className = 'wizard-step-tab px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer bg-[#00A4B7] text-white shadow-xs flex items-center gap-1.5';
          if (numBadge) {
            numBadge.className = 'step-num-badge w-4 h-4 rounded-full bg-white/25 text-white flex items-center justify-center text-[10px] font-bold';
          }
        } else if (step < currentStep) {
          btn.className = 'wizard-step-tab px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] flex items-center gap-1.5';
          if (numBadge) {
            numBadge.className = 'step-num-badge w-4 h-4 rounded-full bg-[#006644] text-white flex items-center justify-center text-[10px] font-bold';
          }
        } else {
          btn.className = 'wizard-step-tab px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer text-[#5E6C84] hover:text-[#172B4D] hover:bg-[#EBECF0] flex items-center gap-1.5';
          if (numBadge) {
            numBadge.className = 'step-num-badge w-4 h-4 rounded-full bg-[#DFE1E6] text-[#5E6C84] flex items-center justify-center text-[10px] font-bold';
          }
        }
      });

      // Show/Hide Panels
      for (let i = 1; i <= 3; i++) {
        const panel = document.getElementById(`wizard-panel-${i}`);
        if (panel) {
          if (i === currentStep) {
            panel.classList.remove('hidden');
          } else {
            panel.classList.add('hidden');
          }
        }
      }

      // Update Wizard Navigation Buttons
      if (btnBack) {
        if (currentStep > 1) {
          btnBack.classList.remove('hidden');
          btnBack.textContent = currentStep === 2 ? '← Main Menu' : '← Sub Menu';
        } else {
          btnBack.classList.add('hidden');
        }
      }

      if (btnNext) {
        if (currentStep === 1) {
          btnNext.classList.remove('hidden');
          btnNext.textContent = 'Next: Sub Menu →';
        } else if (currentStep === 2) {
          btnNext.classList.remove('hidden');
          btnNext.textContent = 'Next: Tab Menu →';
        } else {
          btnNext.classList.add('hidden');
        }
      }

      syncHierarchyDisplay();
    };

    // Tab buttons click listeners
    document.querySelectorAll('.wizard-step-tab').forEach(btn => {
      btn.onclick = () => {
        const step = parseInt(btn.dataset.step, 10);
        goToStep(step);
      };
    });

    if (btnBack) {
      btnBack.onclick = () => goToStep(currentStep - 1);
    }
    if (btnNext) {
      btnNext.onclick = () => {
        if (currentStep === 1) {
          const mName = menuNameInput?.value.trim();
          if (!mName) {
            Toast.show('Please enter a Menu Name before continuing', 'warning', 'Required');
            menuNameInput?.focus();
            return;
          }
        }
        goToStep(currentStep + 1);
      };
    }

    // Main Menu Status Toggle
    if (statusCb && statusInput) {
      statusCb.onchange = () => {
        statusInput.value = statusCb.checked ? 'Active' : 'Inactive';
      };
    }

    // Active Submenu Row Handler
    const setActiveSubmenuRow = (rowEl) => {
      if (!rowEl || !listContainer) return;

      if (activeSubRow && activeSubRow !== rowEl) {
        activeSubRow._tabData = {
          label: tabLabelInput?.value.trim() || '',
          slug: tabSlugInput?.value.trim() || '',
          type: tabTypeSelect?.value || 'system',
          route: tabRouteInput?.value.trim() || '',
          badge: tabBadgeInput?.value.trim() || '',
          status: tabStatusCb?.checked ? 'Active' : 'Inactive'
        };
      }

      activeSubRow = rowEl;

      listContainer.querySelectorAll('.submenu-item-row').forEach(r => {
        if (r === rowEl) {
          r.classList.add('border-[#00A4B7]', 'bg-[#F0F9FF]', 'ring-1', 'ring-[#00A4B7]/30');
          r.classList.remove('border-[#DFE1E6]', 'bg-white');
        } else {
          r.classList.remove('border-[#00A4B7]', 'bg-[#F0F9FF]', 'ring-1', 'ring-[#00A4B7]/30');
          r.classList.add('border-[#DFE1E6]', 'bg-white');
        }
      });

      if (rowEl._tabData) {
        if (tabLabelInput) tabLabelInput.value = rowEl._tabData.label || '';
        if (tabSlugInput) tabSlugInput.value = rowEl._tabData.slug || '';
        if (tabTypeSelect) tabTypeSelect.value = rowEl._tabData.type || 'system';
        if (tabBadgeInput) tabBadgeInput.value = rowEl._tabData.badge || '';
        if (tabStatusCb) tabStatusCb.checked = (rowEl._tabData.status !== 'Inactive');
      }

      syncHierarchyDisplay();
    };

    // Tab Input Listeners
    if (tabLabelInput && tabSlugInput) {
      tabLabelInput.oninput = () => {
        const generated = tabLabelInput.value.trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '');
        tabSlugInput.value = generated;
        syncHierarchyDisplay();
        if (activeSubRow) {
          if (!activeSubRow._tabData) activeSubRow._tabData = {};
          activeSubRow._tabData.label = tabLabelInput.value.trim();
          activeSubRow._tabData.slug = generated;
        }
      };

      tabSlugInput.oninput = () => {
        syncHierarchyDisplay();
        if (activeSubRow) {
          if (!activeSubRow._tabData) activeSubRow._tabData = {};
          activeSubRow._tabData.slug = tabSlugInput.value.trim();
        }
      };
    }

    if (tabTypeSelect) {
      tabTypeSelect.onchange = () => {
        if (activeSubRow) {
          if (!activeSubRow._tabData) activeSubRow._tabData = {};
          activeSubRow._tabData.type = tabTypeSelect.value;
        }
      };
    }

    if (tabBadgeInput) {
      tabBadgeInput.oninput = () => {
        if (activeSubRow) {
          if (!activeSubRow._tabData) activeSubRow._tabData = {};
          activeSubRow._tabData.badge = tabBadgeInput.value.trim();
        }
      };
    }

    if (tabStatusCb) {
      tabStatusCb.onchange = () => {
        if (activeSubRow) {
          if (!activeSubRow._tabData) activeSubRow._tabData = {};
          activeSubRow._tabData.status = tabStatusCb.checked ? 'Active' : 'Inactive';
        }
      };
    }

    // Lucide Icon Grid & Search
    const iconGrid = document.getElementById('lucide-icon-grid');
    const selectedHiddenVal = document.getElementById('menu-modal-icon-val');
    const countBadge = document.getElementById('lucide-count-badge');
    const searchInput = document.getElementById('lucide-search-input');

    const renderLucideGrid = (filterTerm = '') => {
      if (!iconGrid) return;
      const term = filterTerm.trim().toLowerCase();
      const filtered = term 
        ? lucideIcons.filter(item => item.id.includes(term) || item.name.includes(term) || (item.label && item.label.toLowerCase().includes(term)))
        : lucideIcons;

      if (countBadge) {
        countBadge.textContent = `${filtered.length} icons`;
      }

      if (filtered.length === 0) {
        iconGrid.innerHTML = `
          <div class="col-span-full py-8 text-center text-xs text-[#8993A4]">
            No icons match "<strong>${filterTerm}</strong>"
          </div>
        `;
        return;
      }

      iconGrid.innerHTML = filtered.map(item => {
        const isSelected = item.id === selectedHiddenVal?.value;
        return `
          <button type="button" data-icon-id="${item.id}" class="lucide-icon-tile p-2 rounded-lg border text-left flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
            isSelected 
              ? 'border-[#00A4B7] bg-[#F0F9FF] text-[#00A4B7] ring-2 ring-[#00A4B7]/20 shadow-2xs font-bold' 
              : 'border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F4F5F7] text-[#172B4D]'
          }" title="${item.label || item.name}">
            <div class="w-5 h-5 flex items-center justify-center shrink-0">
              ${item.svg}
            </div>
            <span class="text-[9.5px] font-mono truncate w-full text-center">${item.name}</span>
          </button>
        `;
      }).join('');
    };

    if (iconGrid) {
      iconGrid.onclick = (e) => {
        const tile = e.target.closest('.lucide-icon-tile');
        if (!tile) return;
        const iconId = tile.dataset.iconId;
        if (selectedHiddenVal) selectedHiddenVal.value = iconId;

        iconGrid.querySelectorAll('.lucide-icon-tile').forEach(t => {
          if (t.dataset.iconId === iconId) {
            t.className = 'lucide-icon-tile p-2 rounded-lg border text-left flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border-[#00A4B7] bg-[#F0F9FF] text-[#00A4B7] ring-2 ring-[#00A4B7]/20 shadow-2xs font-bold';
          } else {
            t.className = 'lucide-icon-tile p-2 rounded-lg border text-left flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F4F5F7] text-[#172B4D]';
          }
        });
      };
    }

    if (searchInput) {
      searchInput.oninput = () => {
        renderLucideGrid(searchInput.value);
      };
    }

    renderLucideGrid();

    // Submenu Rows Builder
    const addSubRow = (sub = { name: '', url: '', status: 'Active', tabs: [] }) => {
      if (!listContainer) return;
      const isActive = sub.status !== 'Inactive';
      const rowEl = document.createElement('div');
      rowEl.className = 'submenu-item-row grid grid-cols-12 gap-2 items-center p-2 rounded-lg border border-[#DFE1E6] bg-white transition-all cursor-pointer';

      if (Array.isArray(sub.tabs) && sub.tabs.length > 0) {
        const firstTab = sub.tabs[0];
        rowEl._tabData = {
          id: firstTab.id,
          label: firstTab.label || firstTab.name || '',
          slug: firstTab.id || '',
          route: firstTab.route || firstTab.hash || '',
          type: firstTab.type || 'system',
          badge: firstTab.badge || '',
          status: firstTab.status || 'Active'
        };
      }

      rowEl.innerHTML = `
        <div class="col-span-5 flex items-center">
          <input type="text" class="sub-item-name w-full text-xs px-2.5 py-1.5 border border-[#DFE1E6] rounded-md focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D] bg-white" placeholder="Sub Menu Name" value="${sub.name || sub.title || ''}" />
        </div>
        <div class="col-span-4">
          <input type="text" class="sub-item-url w-full text-xs px-2.5 py-1.5 border border-[#DFE1E6] rounded-md focus:outline-none focus:border-[#00A4B7] font-mono text-[#00A4B7] bg-white" placeholder="Url" value="${sub.url || sub.hash || sub.route || ''}" />
        </div>
        <div class="col-span-2 flex items-center justify-center">
          <label class="inline-flex items-center cursor-pointer select-none">
            <input type="checkbox" class="sub-item-status-cb w-4 h-4 rounded border-[#DFE1E6] text-[#00A4B7] accent-[#00A4B7] cursor-pointer" ${isActive ? 'checked' : ''} title="Submenu Status" />
          </label>
          <input type="hidden" class="sub-item-status" value="${sub.status || 'Active'}" />
        </div>
        <div class="col-span-1 flex items-center justify-center">
          <button type="button" class="btn-remove-sub p-1.5 text-[#DE350B] hover:bg-rose-50 rounded-md transition-colors cursor-pointer" title="Remove Sub Menu">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      `;

      const subNameInput = rowEl.querySelector('.sub-item-name');
      const subUrlInput = rowEl.querySelector('.sub-item-url');
      const subCb = rowEl.querySelector('.sub-item-status-cb');
      const subInput = rowEl.querySelector('.sub-item-status');

      rowEl.onclick = () => setActiveSubmenuRow(rowEl);

      if (subNameInput) {
        subNameInput.onfocus = () => setActiveSubmenuRow(rowEl);
        subNameInput.oninput = () => {
          const mKey = getCurrentMenuKey();
          const sName = subNameInput.value.trim();
          const sId = (sName || 'sub').toLowerCase().replace(/[^a-z0-9]/g, '-');
          if (subUrlInput && (!subUrlInput.value || subUrlInput.value.startsWith(`#/${mKey}/`))) {
            subUrlInput.value = `#/${mKey}/${sId}`;
          }
          if (activeSubRow === rowEl) {
            syncHierarchyDisplay();
          }
        };
      }

      if (subUrlInput) {
        subUrlInput.onfocus = () => setActiveSubmenuRow(rowEl);
      }

      if (subCb && subInput) {
        subCb.onchange = () => {
          subInput.value = subCb.checked ? 'Active' : 'Inactive';
        };
      }

      rowEl.querySelector('.btn-remove-sub').onclick = (e) => {
        e.stopPropagation();
        const wasActive = activeSubRow === rowEl;
        rowEl.remove();
        if (listContainer.children.length === 0) {
          addSubRow();
        } else if (wasActive) {
          setActiveSubmenuRow(listContainer.children[0]);
        }
        syncHierarchyDisplay();
      };

      listContainer.appendChild(rowEl);
      syncHierarchyDisplay();
      return rowEl;
    };

    existingSubmenus.forEach(s => addSubRow(s));

    if (listContainer && listContainer.children.length > 0) {
      setActiveSubmenuRow(listContainer.children[0]);
    } else {
      syncHierarchyDisplay();
    }

    const addSubBtn = document.getElementById('btn-add-sub-item');
    if (addSubBtn) {
      addSubBtn.onclick = () => {
        const newRow = addSubRow({ name: '', url: '', status: 'Active' });
        setActiveSubmenuRow(newRow);
        const nameInp = newRow.querySelector('.sub-item-name');
        if (nameInp) nameInp.focus();
      };
    }

    // Custom Dropdown with Assigned Menu Icons & Synchronization
    const dropdownWrapper = document.getElementById('menu-dropdown-wrapper');
    const dropdownTrigger = document.getElementById('menu-modal-select-trigger');
    const dropdownList = document.getElementById('menu-custom-dropdown-list');
    const dropdownChevron = document.getElementById('menu-dropdown-chevron');
    const dropdownSearch = document.getElementById('menu-dropdown-search');
    const selectedDisplay = document.getElementById('menu-selected-display');

    const updateDisplayForMenu = (val) => {
      if (!selectedDisplay) return;
      if (val === '__NEW__') {
        selectedDisplay.innerHTML = `
          <div class="w-5 h-5 rounded-md bg-[#F0FDF4] border border-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </div>
          <span class="truncate font-bold text-[#16A34A] text-xs">✨ + Create New Menu</span>
        `;
      } else {
        const found = this.state.modulesConfig.find(m => m.id === val || m.key === val);
        if (found) {
          const svg = this.getModuleIconSvg(found);
          selectedDisplay.innerHTML = `
            <div class="w-5 h-5 rounded-md bg-[#F0F9FF] border border-[#BAE6FD] text-[#00A4B7] flex items-center justify-center shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5">
              ${svg}
            </div>
            <span class="truncate font-bold text-[#172B4D] text-xs">${found.label}${found.isProtected ? ' (System)' : ''}</span>
          `;
        }
      }
    };

    const applySelection = (val) => {
      if (existingSelect) existingSelect.value = val;
      updateDisplayForMenu(val);

      if (val === '__NEW__') {
        if (modeBadge) modeBadge.textContent = '✨ New Menu';
        menuNameInput.value = '';
        menuNameInput.placeholder = 'e.g. Procurement & Inward';
        menuNameInput.focus();

        if (listContainer) {
          listContainer.innerHTML = '';
          addSubRow({ name: '', url: '', status: 'Active' });
        }

        if (statusCb) statusCb.checked = true;
        if (statusInput) statusInput.value = 'Active';

        const defaultIconId = 'shopping-cart';
        if (selectedHiddenVal) selectedHiddenVal.value = defaultIconId;
        if (iconGrid) {
          iconGrid.querySelectorAll('.lucide-icon-tile').forEach(t => {
            if (t.dataset.iconId === defaultIconId) {
              t.className = 'lucide-icon-tile p-2 rounded-lg border text-left flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border-[#00A4B7] bg-[#F0F9FF] text-[#00A4B7] ring-2 ring-[#00A4B7]/20 shadow-2xs font-bold';
            } else {
              t.className = 'lucide-icon-tile p-2 rounded-lg border text-left flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F4F5F7] text-[#172B4D]';
            }
          });
        }
      } else {
        const found = this.state.modulesConfig.find(m => m.id === val || m.key === val);
        if (found) {
          if (modeBadge) {
            modeBadge.textContent = found.isProtected ? '🔒 System Menu (Protected)' : `Existing Menu: ${found.label}`;
          }
          menuNameInput.value = found.label;

          const isAct = found.status === 'Active' || (found.status === undefined && found.visible);
          if (statusCb) statusCb.checked = isAct;
          if (statusInput) statusInput.value = isAct ? 'Active' : 'Inactive';

          const foundIconId = this.getModuleIconId(found);
          if (selectedHiddenVal) selectedHiddenVal.value = foundIconId;
          if (iconGrid) {
            iconGrid.querySelectorAll('.lucide-icon-tile').forEach(t => {
              if (t.dataset.iconId === foundIconId) {
                t.className = 'lucide-icon-tile p-2 rounded-lg border text-left flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border-[#00A4B7] bg-[#F0F9FF] text-[#00A4B7] ring-2 ring-[#00A4B7]/20 shadow-2xs font-bold';
                t.scrollIntoView({ block: 'nearest' });
              } else {
                t.className = 'lucide-icon-tile p-2 rounded-lg border text-left flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F4F5F7] text-[#172B4D]';
              }
            });
          }

          const subList = this.state.submenusConfig[found.id] || this.state.submenusConfig[found.key] || [];
          if (listContainer) {
            listContainer.innerHTML = '';
            if (subList.length > 0) {
              subList.forEach(s => addSubRow(s));
            } else {
              addSubRow({ name: '', url: '', status: 'Active' });
            }
          }
        }
      }

      syncHierarchyDisplay();
    };

    if (dropdownTrigger && dropdownList) {
      dropdownTrigger.onclick = (e) => {
        e.stopPropagation();
        const isOpen = !dropdownList.classList.contains('hidden');
        if (isOpen) {
          dropdownList.classList.add('hidden');
          dropdownChevron?.classList.remove('rotate-180');
        } else {
          dropdownList.classList.remove('hidden');
          dropdownChevron?.classList.add('rotate-180');
          if (dropdownSearch) {
            dropdownSearch.value = '';
            dropdownSearch.focus();
            dropdownList.querySelectorAll('.menu-dropdown-item').forEach(item => item.style.display = '');
          }
        }
      };

      if (dropdownSearch) {
        dropdownSearch.onclick = (e) => e.stopPropagation();
        dropdownSearch.oninput = () => {
          const q = dropdownSearch.value.trim().toLowerCase();
          dropdownList.querySelectorAll('.menu-dropdown-item').forEach(item => {
            const lbl = (item.dataset.label || '').toLowerCase();
            const val = (item.dataset.value || '').toLowerCase();
            item.style.display = (lbl.includes(q) || val.includes(q)) ? '' : 'none';
          });
        };
      }

      dropdownList.onclick = (e) => {
        const item = e.target.closest('.menu-dropdown-item');
        if (!item) return;
        e.stopPropagation();
        const val = item.dataset.value;
        applySelection(val);
        dropdownList.classList.add('hidden');
        dropdownChevron?.classList.remove('rotate-180');

        dropdownList.querySelectorAll('.menu-dropdown-item').forEach(i => {
          if (i === item) {
            i.classList.add('bg-[#F0F9FF]', 'border', 'border-[#BAE6FD]');
          } else {
            i.classList.remove('bg-[#F0F9FF]', 'border', 'border-[#BAE6FD]');
          }
        });
      };

      const closeDropdownHandler = (e) => {
        if (!dropdownWrapper?.contains(e.target)) {
          dropdownList.classList.add('hidden');
          dropdownChevron?.classList.remove('rotate-180');
        }
      };
      document.addEventListener('click', closeDropdownHandler);
    }

    if (menuNameInput) {
      menuNameInput.oninput = () => {
        const typed = menuNameInput.value.trim().toLowerCase();
        const matchingMod = this.state.modulesConfig.find(m => m.label.toLowerCase() === typed);
        if (matchingMod) {
          if (existingSelect) existingSelect.value = matchingMod.id;
          updateDisplayForMenu(matchingMod.id);
          if (modeBadge) modeBadge.textContent = `Existing Menu: ${matchingMod.label}`;
        } else {
          if (existingSelect) existingSelect.value = '__NEW__';
          updateDisplayForMenu('__NEW__');
          if (modeBadge) modeBadge.textContent = '✨ Custom / New Menu';
        }
        syncHierarchyDisplay();
      };
    }

    // Initialize on step 1
    goToStep(1);
  },

  // =========================================================================
  // 4B. TABS MANAGEMENT STUDIO (FULL CRUD WITH DATATABLE, SEARCH & FILTERS)
  // =========================================================================
  tabFilterState: {
    menu: '',
    submenu: '',
    status: '',
    type: '',
    query: ''
  },

  getFilteredTabs() {
    let list = Array.isArray(this.state.tabsConfig) ? [...this.state.tabsConfig] : [];
    const { menu, status, type, query } = this.tabFilterState;

    if (menu) {
      list = list.filter(t => (t.menuKey || '').toLowerCase() === menu.toLowerCase());
    }
    if (status) {
      list = list.filter(t => (t.status || 'Active').toLowerCase() === status.toLowerCase());
    }
    if (type) {
      list = list.filter(t => (t.type || 'system').toLowerCase() === type.toLowerCase());
    }
    if (query) {
      const q = query.toLowerCase().trim();
      list = list.filter(t => 
        (t.label || '').toLowerCase().includes(q) ||
        (t.key || t.id || '').toLowerCase().includes(q) ||
        (t.route || '').toLowerCase().includes(q) ||
        (t.menuLabel || '').toLowerCase().includes(q) ||
        (t.submenuTitle || '').toLowerCase().includes(q)
      );
    }

    return list;
  },

  getAllMenusForTabs() {
    const list = [];
    const seen = new Set();

    // 1. General menu
    list.push({ id: 'general', key: 'general', label: 'GENERAL', icon: 'settings' });
    seen.add('general');

    // 2. All modules from modulesConfig
    if (Array.isArray(this.state.modulesConfig)) {
      this.state.modulesConfig.forEach(m => {
        const id = m.id || m.key;
        if (!seen.has(id)) {
          seen.add(id);
          list.push({
            id: id,
            key: id,
            label: m.label || id.toUpperCase(),
            icon: m.iconKey || m.icon || 'layers'
          });
        }
      });
    }

    return list;
  },

  getSubmenusForMenu(menuKey) {
    if (!menuKey) return [];
    if (menuKey === 'general') {
      return [{ id: 'configuration', title: 'Configuration' }];
    }
    const smList = this.state.submenusConfig[menuKey] || [];
    return smList.map(s => ({
      id: s.id || s.key,
      title: s.title || s.name || s.id
    }));
  },

  syncTabUpdate(tab) {
    if (!tab || !tab.menuKey) return;
    if (tab.menuKey === 'general') {
      // General tabs are in NAV_HIERARCHY
      if (typeof window !== 'undefined' && window.NAV_HIERARCHY) {
        const genMod = window.NAV_HIERARCHY.find(m => m.id === 'general');
        if (genMod && genMod.submenus) {
          const cfg = genMod.submenus.find(s => s.id === 'configuration');
          if (cfg && cfg.tabs) {
            const existing = cfg.tabs.find(t => t.id === tab.key || t.id === tab.id);
            if (existing) {
              existing.label = tab.label;
              existing.hash = tab.route;
            } else {
              cfg.tabs.push({ id: tab.key, label: tab.label, hash: tab.route });
            }
          }
        }
      }
      return;
    }

    // Sync into submenusConfig
    if (!this.state.submenusConfig[tab.menuKey]) {
      this.state.submenusConfig[tab.menuKey] = [];
    }
    const smList = this.state.submenusConfig[tab.menuKey];
    let targetSm = smList.find(s => s.id === tab.submenuId);
    if (!targetSm) {
      targetSm = {
        id: tab.submenuId,
        title: tab.submenuTitle || tab.submenuId,
        tabs: []
      };
      smList.push(targetSm);
    }
    if (!Array.isArray(targetSm.tabs)) {
      targetSm.tabs = [];
    }

    const tIdx = targetSm.tabs.findIndex(t => t.id === tab.key || t.id === tab.id);
    const tabObj = {
      id: tab.key,
      label: tab.label,
      route: tab.route,
      type: tab.type || 'system',
      badge: tab.badge || '',
      status: tab.status || 'Active'
    };

    if (tIdx > -1) {
      targetSm.tabs[tIdx] = Object.assign(targetSm.tabs[tIdx], tabObj);
    } else {
      targetSm.tabs.push(tabObj);
    }
  },

  syncTabDelete(tab) {
    if (!tab || !tab.menuKey) return;
    if (tab.menuKey === 'general') {
      if (typeof window !== 'undefined' && window.NAV_HIERARCHY) {
        const genMod = window.NAV_HIERARCHY.find(m => m.id === 'general');
        if (genMod && genMod.submenus) {
          const cfg = genMod.submenus.find(s => s.id === 'configuration');
          if (cfg && cfg.tabs) {
            const idx = cfg.tabs.findIndex(t => t.id === tab.key || t.id === tab.id);
            if (idx > -1) cfg.tabs.splice(idx, 1);
          }
        }
      }
      return;
    }

    const smList = this.state.submenusConfig[tab.menuKey];
    if (Array.isArray(smList)) {
      const targetSm = smList.find(s => s.id === tab.submenuId);
      if (targetSm && Array.isArray(targetSm.tabs)) {
        const idx = targetSm.tabs.findIndex(t => t.id === tab.key || t.id === tab.id);
        if (idx > -1) targetSm.tabs.splice(idx, 1);
      }
    }
  },

  renderTabsStudioTab(container) {
    const allMenus = this.getAllMenusForTabs();
    this.tabFilterState = { menu: '', submenu: '', status: '', type: '', query: '' };

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Page Header (Strictly complies with AGENTS.md: clean h1, no subheadings) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Tabs Management</h1>
          </div>
          <div class="flex items-center gap-2">
            <button id="btn-add-tab" type="button" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add Tab</span>
            </button>
          </div>
        </div>

        <!-- Search & Filter Card (Section 3 Design System) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <!-- Circular 32x32 Reset Button -->
              <button type="button" id="flt-tab-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <!-- Circular 32x32 Collapse/Expand Toggle Button -->
              <button type="button" id="flt-tab-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg id="flt-tab-toggle-chevron" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <!-- Body: 4 Columns for Hierarchy Filters -->
          <div id="flt-tab-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- Main Menu -->
            <div>
              <label for="flt-tab-menu" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Main Menu</label>
              <select id="flt-tab-menu" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="">All Main Menus</option>
                ${allMenus.map(m => `<option value="${m.key}">${m.label}</option>`).join('')}
              </select>
            </div>

            <!-- Sub Menu (Dynamically Updated based on Main Menu) -->
            <div>
              <label for="flt-tab-submenu" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Sub Menu</label>
              <select id="flt-tab-submenu" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="">All Sub Menus</option>
              </select>
            </div>

            <!-- Status Filter -->
            <div>
              <label for="flt-tab-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
              <select id="flt-tab-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <!-- Search Keyword -->
            <div>
              <label for="flt-tab-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Search Keyword</label>
              <input type="text" id="flt-tab-search" placeholder="Search tab name, slug, route..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>

            <!-- Search Button -->
            <div class="flex items-end">
              <button type="button" id="flt-tab-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="tabs-table-container"></div>
      </div>
    `;

    const displayData = this.getFilteredTabs();

    const tabsTable = new DataTable({
      containerId: 'tabs-table-container',
      data: displayData,
      keyField: 'id',
      tableTitle: `Tabs Registry (${displayData.length})`,
      searchable: true,
      exportable: true,
      pageSize: 10,
      onRowClick: (row) => this.showTabDetailsModal(row, tabsTable),
      columns: [
        {
          field: 'sNo',
          header: 'SNO',
          render: (v, r, i) => `<span class="font-bold text-[#5E6C84]">${i !== undefined ? i + 1 : 1}</span>`
        },
        {
          field: 'label',
          header: 'Tab Name',
          render: (v, r) => `
            <div class="flex items-center gap-2">
              <span class="font-bold text-[#172B4D] text-xs">${v || r.id}</span>
              ${r.badge ? `<span class="px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] font-mono">${r.badge}</span>` : ''}
              ${r.isProtected ? `
                <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-[#F1F5F9] text-[#5E6C84] border border-[#DFE1E6]" title="System default tab">
                  <svg class="w-2.5 h-2.5 text-[#5E6C84]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  <span>System</span>
                </span>
              ` : ''}
            </div>
          `
        },
        {
          field: 'key',
          header: 'Tab Slug / ID',
          render: (v, r) => `<span class="font-mono text-xs font-semibold text-[#00A4B7]">${v || r.id}</span>`
        },
        {
          field: 'menuLabel',
          header: 'Main Menu',
          render: (v, r) => `
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#F0F9FF] text-[#00A4B7] border border-[#BAE6FD]">
              ${v || (r.menuKey ? r.menuKey.toUpperCase() : 'GENERAL')}
            </span>
          `
        },
        {
          field: 'submenuTitle',
          header: 'Sub Menu',
          render: (v, r) => `
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-[#FAFBFC] border border-[#DFE1E6] text-[#172B4D]">
              ${v || r.submenuId || 'Configuration'}
            </span>
          `
        },
        {
          field: 'route',
          header: 'Route URL Hash',
          render: (v) => `<span class="font-mono text-[11px] text-[#5E6C84] block truncate max-w-[200px]" title="${v || ''}">${v || '—'}</span>`
        },
        {
          field: 'type',
          header: 'Type',
          render: (v) => {
            const typeStr = (v || 'system').toLowerCase();
            let bgClass = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
            if (typeStr === 'system') bgClass = 'bg-[#EAE6FF] text-[#403294] border-[#D3C7FF]';
            else if (typeStr === 'report') bgClass = 'bg-[#E0F2FE] text-[#00A4B7] border-[#BAE6FD]';
            else if (typeStr === 'studio') bgClass = 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]';
            return `<span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${bgClass}">${v || 'system'}</span>`;
          }
        },
        {
          field: 'status',
          header: 'Status',
          type: 'status',
          render: (v) => {
            const isAct = String(v).toUpperCase() === 'ACTIVE';
            return `<span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold inline-flex items-center gap-1.5 ${isAct ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]' : 'bg-[#FFEBE6] text-[#DE350B] border border-[#FFBDAD]'}">
              <span class="w-1.5 h-1.5 rounded-full ${isAct ? 'bg-[#00875A]' : 'bg-[#DE350B]'}"></span>
              ${v || 'Active'}
            </span>`;
          }
        }
      ],
      actions: [
        {
          label: 'Edit',
          icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
          onClick: (row) => this.showEditTabModal(row, tabsTable)
        },
        {
          label: (row) => (row.status === 'Active' || row.status === undefined) ? 'Deactivate' : 'Activate',
          icon: (row) => (row.status === 'Active' || row.status === undefined)
            ? `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>`
            : `<svg class="w-4 h-4 text-[#006644]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
          onClick: (row) => {
            const isCurrentlyActive = (row.status === 'Active' || row.status === undefined);
            Modal.confirm({
              title: `${isCurrentlyActive ? 'Deactivate' : 'Activate'} Tab: ${row.label}`,
              message: `Are you sure you want to ${isCurrentlyActive ? 'deactivate' : 'activate'} tab <strong>${row.label}</strong>?`,
              confirmText: isCurrentlyActive ? 'Deactivate' : 'Activate',
              cancelText: 'Cancel',
              isDestructive: isCurrentlyActive,
              onConfirm: () => {
                row.status = isCurrentlyActive ? 'Inactive' : 'Active';
                this.syncTabUpdate(row);
                this.saveState();
                this.logAudit('Tabs Setup', `${isCurrentlyActive ? 'Deactivated' : 'Activated'} tab ${row.label} (${row.key})`);
                const refreshed = this.getFilteredTabs();
                tabsTable.setData(refreshed);
                Toast.show(`Tab "${row.label}" is now ${row.status}.`, 'success');
              }
            });
          }
        },
        {
          label: 'Delete',
          icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
          disabled: (row) => Boolean(row && row.isProtected),
          disabledTooltip: 'System default tab is protected and cannot be deleted',
          onClick: (row) => {
            if (row && row.isProtected) {
              Toast.show('System default tab is protected and cannot be deleted.', 'warning');
              return;
            }
            Modal.confirm({
              title: `Delete Tab ${row.label}`,
              message: `Are you sure you want to permanently delete tab <strong>${row.label}</strong> (<code>${row.key}</code>)? This action cannot be undone.`,
              confirmText: 'Delete Tab',
              cancelText: 'Cancel',
              isDestructive: true,
              onConfirm: () => {
                const idx = this.state.tabsConfig.findIndex(t => t.id === row.id || (t.key === row.key && t.menuKey === row.menuKey && t.submenuId === row.submenuId));
                if (idx > -1) {
                  this.state.tabsConfig.splice(idx, 1);
                  this.syncTabDelete(row);
                  this.saveState();
                  this.logAudit('Tabs Setup', `Deleted tab ${row.label} (${row.key})`);
                  const refreshed = this.getFilteredTabs();
                  tabsTable.setData(refreshed);
                  Toast.show(`Tab "${row.label}" deleted successfully.`, 'success');
                }
              }
            });
          }
        }
      ]
    });

    // Wire up Add Tab button
    const addTabBtn = document.getElementById('btn-add-tab');
    if (addTabBtn) {
      addTabBtn.onclick = () => this.showAddTabModal(tabsTable);
    }

    // Wire up Filter Card events
    const fltMenu = document.getElementById('flt-tab-menu');
    const fltSubmenu = document.getElementById('flt-tab-submenu');
    const fltStatus = document.getElementById('flt-tab-status');
    const fltSearch = document.getElementById('flt-tab-search');
    const fltSearchBtn = document.getElementById('flt-tab-search-btn');
    const fltResetBtn = document.getElementById('flt-tab-reset-btn');
    const fltToggleBtn = document.getElementById('flt-tab-toggle-btn');
    const fltBody = document.getElementById('flt-tab-body');
    const fltChevron = document.getElementById('flt-tab-toggle-chevron');

    const updateSubmenuFilterDropdown = (selectedMenuKey) => {
      if (!fltSubmenu) return;
      if (!selectedMenuKey) {
        fltSubmenu.innerHTML = '<option value="">All Sub Menus</option>';
        return;
      }
      const smList = this.getSubmenusForMenu(selectedMenuKey);
      let html = '<option value="">All Sub Menus</option>';
      smList.forEach(s => {
        html += `<option value="${s.id}">${s.title}</option>`;
      });
      fltSubmenu.innerHTML = html;
    };

    const applyFilters = () => {
      this.tabFilterState = {
        menu: fltMenu ? fltMenu.value : '',
        submenu: fltSubmenu ? fltSubmenu.value : '',
        status: fltStatus ? fltStatus.value : '',
        type: '',
        query: fltSearch ? fltSearch.value.trim() : ''
      };
      const refreshed = this.getFilteredTabs();
      tabsTable.setData(refreshed);
    };

    if (fltMenu) {
      fltMenu.onchange = () => {
        updateSubmenuFilterDropdown(fltMenu.value);
        applyFilters();
      };
    }
    if (fltSubmenu) {
      fltSubmenu.onchange = applyFilters;
    }
    if (fltStatus) {
      fltStatus.onchange = applyFilters;
    }
    if (fltSearch) {
      fltSearch.onkeydown = (e) => {
        if (e.key === 'Enter') applyFilters();
      };
    }
    if (fltSearchBtn) {
      fltSearchBtn.onclick = applyFilters;
    }
    if (fltResetBtn) {
      fltResetBtn.onclick = () => {
        if (fltMenu) fltMenu.value = '';
        if (fltSubmenu) {
          fltSubmenu.innerHTML = '<option value="">All Sub Menus</option>';
          fltSubmenu.value = '';
        }
        if (fltStatus) fltStatus.value = '';
        if (fltSearch) fltSearch.value = '';
        applyFilters();
      };
    }
    if (fltToggleBtn && fltBody) {
      fltToggleBtn.onclick = () => {
        const isCollapsed = fltBody.classList.toggle('hidden');
        if (fltChevron) {
          fltChevron.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      };
    }
  },

  getFilteredTabs() {
    let list = Array.isArray(this.state.tabsConfig) ? [...this.state.tabsConfig] : [];
    const { menu, submenu, status, type, query } = this.tabFilterState || {};

    if (menu) {
      list = list.filter(t => (t.menuKey || '').toLowerCase() === menu.toLowerCase());
    }
    if (submenu) {
      list = list.filter(t => (t.submenuId || '').toLowerCase() === submenu.toLowerCase());
    }
    if (status) {
      list = list.filter(t => (t.status || 'Active').toLowerCase() === status.toLowerCase());
    }
    if (type) {
      list = list.filter(t => (t.type || 'system').toLowerCase() === type.toLowerCase());
    }
    if (query) {
      const q = query.toLowerCase().trim();
      list = list.filter(t => 
        (t.label || '').toLowerCase().includes(q) ||
        (t.key || t.id || '').toLowerCase().includes(q) ||
        (t.route || '').toLowerCase().includes(q) ||
        (t.menuLabel || '').toLowerCase().includes(q) ||
        (t.submenuTitle || '').toLowerCase().includes(q)
      );
    }

    return list;
  },

  getAllMenusForTabs() {
    const list = [];
    const seen = new Set();

    const addMenu = (id, label, icon) => {
      if (!id) return;
      const k = String(id).toLowerCase();
      if (seen.has(k)) return;
      seen.add(k);
      list.push({
        id: id,
        key: id,
        label: label || id.toUpperCase(),
        icon: icon || 'layers'
      });
    };

    // 1. Setting
    addMenu('settings', 'Setting', 'settings');

    // 2. General
    addMenu('general', 'General', 'sliders');

    // 3. Super Admin & Admin hierarchies if available
    if (typeof window !== 'undefined') {
      if (Array.isArray(window.SUPER_ADMIN_NAV_HIERARCHY)) {
        window.SUPER_ADMIN_NAV_HIERARCHY.forEach(m => addMenu(m.id, m.title, m.icon));
      }
      if (Array.isArray(window.NAV_HIERARCHY)) {
        window.NAV_HIERARCHY.forEach(m => addMenu(m.id, m.title, m.icon));
      }
      if (Array.isArray(window.ADMIN_NAV_HIERARCHY)) {
        window.ADMIN_NAV_HIERARCHY.forEach(m => addMenu(m.id, m.title, m.icon));
      }
    }

    // 4. All modules from modulesConfig in state
    if (this.state && Array.isArray(this.state.modulesConfig)) {
      this.state.modulesConfig.forEach(m => {
        const id = m.id || m.key;
        addMenu(id, m.label || id.toUpperCase(), m.iconKey || m.icon || 'layers');
      });
    }

    return list;
  },

  getSubmenusForMenu(menuKey) {
    if (!menuKey) return [];
    const key = String(menuKey).toLowerCase();
    const submenus = [];
    const seen = new Set();

    const addSm = (id, title) => {
      if (!id) return;
      const k = String(id).toLowerCase();
      if (seen.has(k)) return;
      seen.add(k);
      submenus.push({ id, title: title || id });
    };

    // 1. Check state.submenusConfig
    if (this.state && this.state.submenusConfig) {
      const stateSmList = this.state.submenusConfig[key] || this.state.submenusConfig[menuKey];
      if (Array.isArray(stateSmList)) {
        stateSmList.forEach(s => addSm(s.id || s.key, s.title || s.name || s.id));
      }
    }

    // 2. Check window hierarchies
    if (typeof window !== 'undefined') {
      const hierarchies = [
        window.SUPER_ADMIN_NAV_HIERARCHY,
        window.NAV_HIERARCHY,
        window.ADMIN_NAV_HIERARCHY
      ];
      hierarchies.forEach(h => {
        if (Array.isArray(h)) {
          const found = h.find(m => m.id && String(m.id).toLowerCase() === key);
          if (found && Array.isArray(found.submenus)) {
            found.submenus.forEach(s => addSm(s.id, s.title));
          }
        }
      });
    }

    // 3. Fallbacks for standard modules
    if (submenus.length === 0) {
      if (key === 'settings') {
        addSm('custom', 'Customizer');
      } else if (key === 'general') {
        addSm('configuration', 'Configuration');
      } else if (key === 'super-reports') {
        addSm('client-reports', 'Client Reports');
      } else if (key === 'dashboard') {
        addSm('overview', 'Dashboard');
      } else {
        addSm('default', 'Default');
      }
    }

    return submenus;
  },

  syncTabUpdate(tab) {
    if (!tab || !tab.menuKey) return;
    const mKey = String(tab.menuKey).toLowerCase();

    if (mKey === 'general') {
      if (typeof window !== 'undefined' && window.NAV_HIERARCHY) {
        const genMod = window.NAV_HIERARCHY.find(m => m.id === 'general');
        if (genMod && genMod.submenus) {
          const cfg = genMod.submenus.find(s => s.id === (tab.submenuId || 'configuration'));
          if (cfg && cfg.tabs) {
            const existing = cfg.tabs.find(t => t.id === tab.key || t.id === tab.id);
            if (existing) {
              existing.label = tab.label;
              existing.hash = tab.route;
            } else {
              cfg.tabs.push({ id: tab.key || tab.id, label: tab.label, hash: tab.route });
            }
          }
        }
      }
      return;
    }

    if (mKey === 'settings') {
      if (typeof window !== 'undefined' && window.SUPER_ADMIN_NAV_HIERARCHY) {
        const setMod = window.SUPER_ADMIN_NAV_HIERARCHY.find(m => m.id === 'settings');
        if (setMod && setMod.submenus) {
          const cst = setMod.submenus.find(s => s.id === (tab.submenuId || 'custom'));
          if (cst && cst.tabs) {
            const existing = cst.tabs.find(t => t.id === tab.key || t.id === tab.id);
            if (existing) {
              existing.label = tab.label;
              existing.hash = tab.route;
            } else {
              cst.tabs.push({ id: tab.key || tab.id, label: tab.label, hash: tab.route });
            }
          }
        }
      }
    }

    // Sync into submenusConfig
    if (!this.state.submenusConfig[tab.menuKey]) {
      this.state.submenusConfig[tab.menuKey] = [];
    }
    const smList = this.state.submenusConfig[tab.menuKey];
    let targetSm = smList.find(s => s.id === tab.submenuId);
    if (!targetSm) {
      targetSm = { id: tab.submenuId, title: tab.submenuTitle || tab.submenuId, tabs: [] };
      smList.push(targetSm);
    }
    if (!Array.isArray(targetSm.tabs)) targetSm.tabs = [];
    const tIdx = targetSm.tabs.findIndex(t => t.id === tab.key || t.id === tab.id);
    if (tIdx > -1) {
      targetSm.tabs[tIdx] = Object.assign(targetSm.tabs[tIdx], {
        id: tab.key || tab.id,
        label: tab.label,
        route: tab.route,
        type: tab.type,
        badge: tab.badge,
        status: tab.status
      });
    } else {
      targetSm.tabs.push({
        id: tab.key || tab.id,
        label: tab.label,
        route: tab.route,
        type: tab.type,
        badge: tab.badge,
        status: tab.status
      });
    }
  },

  syncTabDelete(tab) {
    if (!tab || !tab.menuKey) return;
    const mKey = String(tab.menuKey).toLowerCase();

    if (mKey === 'general') {
      if (typeof window !== 'undefined' && window.NAV_HIERARCHY) {
        const genMod = window.NAV_HIERARCHY.find(m => m.id === 'general');
        if (genMod && genMod.submenus) {
          const cfg = genMod.submenus.find(s => s.id === (tab.submenuId || 'configuration'));
          if (cfg && cfg.tabs) {
            cfg.tabs = cfg.tabs.filter(t => t.id !== tab.key && t.id !== tab.id);
          }
        }
      }
      return;
    }

    if (mKey === 'settings') {
      if (typeof window !== 'undefined' && window.SUPER_ADMIN_NAV_HIERARCHY) {
        const setMod = window.SUPER_ADMIN_NAV_HIERARCHY.find(m => m.id === 'settings');
        if (setMod && setMod.submenus) {
          const cst = setMod.submenus.find(s => s.id === (tab.submenuId || 'custom'));
          if (cst && cst.tabs) {
            cst.tabs = cst.tabs.filter(t => t.id !== tab.key && t.id !== tab.id);
          }
        }
      }
    }

    if (this.state.submenusConfig[tab.menuKey]) {
      const sm = this.state.submenusConfig[tab.menuKey].find(s => s.id === tab.submenuId);
      if (sm && Array.isArray(sm.tabs)) {
        sm.tabs = sm.tabs.filter(t => t.id !== tab.key && t.id !== tab.id);
      }
    }
  },

  showTabDetailsModal(tab, tabsTable = null) {
    if (!tab) return;
    const isAct = String(tab.status).toUpperCase() === 'ACTIVE';

    Modal.show({
      title: 'Tab Details',
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top Hero Card (AGENTS.md Section 5) -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${tab.label}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase ${isAct ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]' : 'bg-[#FFEBE6] text-[#DE350B] border border-[#FFBDAD]'}">${tab.status || 'Active'}</span>
                  ${tab.isProtected ? '<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">System Default</span>' : ''}
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span class="font-bold text-[#172B4D]">${tab.menuLabel || tab.menuKey?.toUpperCase()}</span>
                  <span>&bull;</span>
                  <span>${tab.submenuTitle || tab.submenuId}</span>
                  <span>&bull;</span>
                  <span class="font-mono text-[#00A4B7]">${tab.key || tab.id}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <div class="text-[10px] uppercase font-bold text-[#5E6C84]">Type</div>
                <div class="font-extrabold text-[#006644] text-xs uppercase">${tab.type || 'System'}</div>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <div class="text-[10px] uppercase font-bold text-[#5E6C84]">Order</div>
                <div class="font-extrabold text-[#172B4D] text-xs">#${tab.order || 1}</div>
              </div>
            </div>
          </div>

          <!-- Categorized Detail Sections -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-4">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Navigation Hierarchy &amp; Routing</span>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Main Menu</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${tab.menuLabel || tab.menuKey?.toUpperCase()}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Sub Menu</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${tab.submenuTitle || tab.submenuId}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Tab Slug</span>
                <span class="font-mono text-xs text-[#00A4B7] font-bold block mt-0.5">${tab.key || tab.id}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Badge Tag</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${tab.badge || 'None'}</span>
              </div>
              <div class="col-span-2 sm:col-span-4">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Full Route URL Hash</span>
                <span class="font-mono text-xs text-[#172B4D] font-semibold block mt-0.5 bg-[#F8FAFC] p-2 rounded border border-[#DFE1E6]">${tab.route || '—'}</span>
              </div>
              ${tab.description ? `
                <div class="col-span-2 sm:col-span-4 pt-2 border-t border-[#F1F5F9]">
                  <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Description</span>
                  <p class="text-xs text-[#5E6C84] mt-0.5">${tab.description}</p>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Edit Tab',
          type: 'primary',
          onClick: (m) => {
            m.close();
            this.showEditTabModal(tab, tabsTable);
          }
        }
      ]
    });
  },

  // 5. DYNAMIC SUBMENU & TAB STUDIO TAB (FULL CRUD WITH DATATABLE)
  // =========================================================================
  renderSubmenuTabStudioTab(container) {
    const selectedModKey = this.selectedModuleForSubmenuStudio || 'purchase';
    const submenus = this.state.submenusConfig[selectedModKey] || [];
    const selectedMod = this.state.modulesConfig.find(m => m.id === selectedModKey);

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Submenu &amp; Tab Studio</h1>
          </div>
          <div class="flex items-center gap-2">
            <label for="flt-mod-substudio" class="text-xs font-bold text-[#5E6C84] whitespace-nowrap uppercase tracking-wider">Module:</label>
            <select id="flt-mod-substudio" class="text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] min-w-[200px]">
              ${this.state.modulesConfig.map(m => `<option value="${m.id}" ${m.id === selectedModKey ? 'selected' : ''}>${m.label || m.name}</option>`).join('')}
            </select>
            <button id="btn-add-submenu" type="button" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all ml-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add Submenu</span>
            </button>
          </div>
        </div>

        <div id="submenus-table-container"></div>
      </div>
    `;

    const submenusTable = new DataTable({
      containerId: 'submenus-table-container',
      data: submenus,
      keyField: 'id',
      tableTitle: `Submenus in ${selectedMod ? (selectedMod.label || selectedModKey) : selectedModKey} (${submenus.length})`,
      searchable: true,
      columns: [
        {
          field: 'sNo',
          header: 'SNO',
          render: (v, r, i) => `<span class="font-bold text-[#5E6C84]">${i !== undefined ? i + 1 : 1}</span>`
        },
        {
          field: 'title',
          header: 'Submenu Name',
          render: (v, r) => `
            <div class="flex items-center gap-2">
              <span class="font-bold text-[#172B4D] text-xs">${v || r.id}</span>
              <span class="text-[10px] text-[#5E6C84] font-mono">${r.id}</span>
            </div>
          `
        },
        {
          field: 'tabs',
          header: 'Tabs Configuration',
          render: (v, r) => {
            const tabsList = Array.isArray(v) ? v : [];
            if (tabsList.length === 0) return '<span class="text-xs text-[#5E6C84] italic">No tabs configured</span>';
            return `
              <div class="flex flex-wrap gap-1.5 max-w-md">
                ${tabsList.map(t => `
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-semibold bg-[#F0F9FF] text-[#00A4B7] border border-[#BAE6FD]">
                    <span>${t.label || t.id}</span>
                    <button type="button" class="btn-edit-sub-tab text-[#00A4B7] hover:text-[#007A87]" data-sm-id="${r.id}" data-tab-id="${t.id}" title="Edit Tab">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                    </button>
                  </span>
                `).join('')}
              </div>
            `;
          }
        },
        {
          field: 'tabsCount',
          header: 'Total Tabs',
          render: (v, r) => `<span class="font-extrabold text-[#172B4D]">${(r.tabs || []).length}</span>`
        }
      ],
      actions: [
        {
          label: 'Add Tab',
          icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`,
          onClick: (row) => this.showAddTabModal(selectedModKey, row.id, container)
        },
        {
          label: 'Edit Submenu',
          icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
          onClick: (row) => this.showEditSubmenuModal(selectedModKey, row, container)
        },
        {
          label: 'Delete',
          icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
          onClick: (row) => {
            Modal.confirm({
              title: `Delete Submenu ${row.title}`,
              message: `Are you sure you want to delete submenu <strong>${row.title}</strong>? All associated tabs will also be removed.`,
              confirmText: 'Delete Submenu',
              cancelText: 'Cancel',
              isDestructive: true,
              onConfirm: () => {
                const sIdx = submenus.findIndex(s => s.id === row.id);
                if (sIdx > -1) {
                  submenus.splice(sIdx, 1);
                  this.saveState();
                  this.logAudit('Submenu Studio', `Deleted submenu ${row.title} from ${selectedModKey}`);
                  this.renderSubmenuTabStudioTab(container);
                  Toast.show(`Submenu "${row.title}" deleted`, 'success');
                }
              }
            });
          }
        }
      ]
    });

    const fltMod = document.getElementById('flt-mod-substudio');
    if (fltMod) {
      fltMod.onchange = (e) => {
        this.selectedModuleForSubmenuStudio = e.target.value;
        this.renderSubmenuTabStudioTab(container);
      };
    }

    const btnAddSub = document.getElementById('btn-add-submenu');
    if (btnAddSub) {
      btnAddSub.onclick = () => this.showAddSubmenuModal(selectedModKey, container);
    }

    // Attach click events to inline edit tab buttons
    container.querySelectorAll('.btn-edit-sub-tab').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const sm = submenus.find(s => s.id === btn.dataset.smId);
        const tab = sm ? sm.tabs.find(t => t.id === btn.dataset.tabId) : null;
        if (tab) this.showEditTabModal(selectedModKey, btn.dataset.smId, tab, container);
      };
    });
  },

  showAddSubmenuModal(modKey, container) {
    Modal.open({
      title: 'Add Submenu',
      size: 'md',
      content: `
        <form class="space-y-3" onsubmit="return false;">
          <div>
            <label class="block text-xs font-semibold text-[#172B4D] mb-1">Submenu Name <span class="text-rose-500">*</span></label>
            <input type="text" id="sub-title" required class="w-full text-xs px-3 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. Inward Operations" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-[#172B4D] mb-1">Submenu ID / Slug <span class="text-rose-500">*</span></label>
            <input type="text" id="sub-id" required class="w-full text-xs px-3 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono lowercase focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. inward-operations" />
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Create Submenu',
          type: 'primary',
          onClick: (m) => {
            const title = document.getElementById('sub-title')?.value.trim();
            const id = document.getElementById('sub-id')?.value.trim().toLowerCase();
            if (!title || !id) {
              Toast.show('Please fill in both Name and ID', 'warning');
              return;
            }
            if (!this.state.submenusConfig[modKey]) this.state.submenusConfig[modKey] = [];
            this.state.submenusConfig[modKey].push({ id, title, tabs: [] });
            this.saveState();
            this.logAudit('Submenu Studio', `Added submenu "${title}" to ${modKey}`);
            m.close();
            Toast.show(`Submenu "${title}" added successfully`, 'success');
            this.renderSubmenuTabStudioTab(container);
          }
        }
      ]
    });
  },

  showEditSubmenuModal(modKey, submenu, container) {
    Modal.open({
      title: `Edit Submenu: ${submenu.title}`,
      size: 'md',
      content: `
        <form class="space-y-3" onsubmit="return false;">
          <div>
            <label class="block text-xs font-semibold text-[#172B4D] mb-1">Submenu Name <span class="text-rose-500">*</span></label>
            <input type="text" id="edit-sub-title" required value="${submenu.title}" class="w-full text-xs px-3 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#00A4B7]" />
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: (m) => {
            const title = document.getElementById('edit-sub-title')?.value.trim();
            if (!title) {
              Toast.show('Please enter Submenu Name', 'warning');
              return;
            }
            submenu.title = title;
            this.saveState();
            this.logAudit('Submenu Studio', `Updated submenu "${title}" in ${modKey}`);
            m.close();
            Toast.show(`Submenu "${title}" updated`, 'success');
            this.renderSubmenuTabStudioTab(container);
          }
        }
      ]
    });
  },

  showAddTabModal(arg1, arg2, arg3) {
    let modKey = null;
    let smId = null;
    let container = null;
    let tabsTable = null;

    if (arg1 && typeof arg1 === 'object' && arg1.containerId) {
      tabsTable = arg1;
    } else {
      modKey = typeof arg1 === 'string' ? arg1 : null;
      smId = typeof arg2 === 'string' ? arg2 : null;
      container = arg3 || null;
    }

    this.openUniversalTabModal({ isEdit: false, modKey, smId, tab: null, container, tabsTable });
  },

  showEditTabModal(arg1, arg2, arg3, arg4) {
    let modKey = null;
    let smId = null;
    let tab = null;
    let container = null;
    let tabsTable = null;

    if (arg1 && typeof arg1 === 'object' && (arg1.key || arg1.id)) {
      tab = arg1;
      tabsTable = arg2 && arg2.containerId ? arg2 : null;
      modKey = tab.menuKey;
      smId = tab.submenuId;
    } else {
      modKey = typeof arg1 === 'string' ? arg1 : null;
      smId = typeof arg2 === 'string' ? arg2 : null;
      tab = arg3 || null;
      container = arg4 || null;
    }

    this.openUniversalTabModal({ isEdit: true, modKey, smId, tab, container, tabsTable });
  },

  openUniversalTabModal({ isEdit = false, modKey = null, smId = null, tab = null, container = null, tabsTable = null }) {
    const allMenus = this.getAllMenusForTabs ? this.getAllMenusForTabs() : [];
    const currentMenuKey = tab ? (tab.menuKey || 'settings') : (modKey || 'settings');
    const submenus = this.getSubmenusForMenu ? this.getSubmenusForMenu(currentMenuKey) : [];
    const currentSubmenuId = tab ? (tab.submenuId || submenus[0]?.id || 'custom') : (smId || submenus[0]?.id || 'custom');

    Modal.open({
      title: isEdit ? `Edit Tab: ${tab?.label || 'Tab'}` : 'Register New View Tab',
      size: 'md',
      content: `
        <form class="space-y-3.5 text-xs" onsubmit="return false;">
          <!-- Menu and Submenu Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label for="tab-modal-menu" class="block text-xs font-bold text-[#172B4D] mb-1">
                Main Menu <span class="text-rose-500">*</span>
              </label>
              <select id="tab-modal-menu" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D] shadow-2xs">
                ${allMenus.map(m => `<option value="${m.key}" ${m.key === currentMenuKey ? 'selected' : ''}>${m.label}</option>`).join('')}
              </select>
            </div>

            <div>
              <label for="tab-modal-submenu" class="block text-xs font-bold text-[#172B4D] mb-1">
                Sub Menu <span class="text-rose-500">*</span>
              </label>
              <select id="tab-modal-submenu" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D] shadow-2xs">
                ${submenus.map(s => `<option value="${s.id}" ${s.id === currentSubmenuId ? 'selected' : ''}>${s.title}</option>`).join('')}
              </select>
            </div>
          </div>

          <!-- Tab Name / Label -->
          <div>
            <label for="tab-modal-label" class="block text-xs font-semibold text-[#172B4D] mb-1">
              Tab Name / Label <span class="text-rose-500">*</span>
            </label>
            <input type="text" id="tab-modal-label" required value="${tab ? (tab.label || '') : ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D] shadow-2xs" placeholder="e.g. Fields Customizer, Forms, Query Editor" />
          </div>

          <!-- Tab Slug & Mapping Type -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label for="tab-modal-slug" class="block text-xs font-semibold text-[#172B4D] mb-1">
                Tab Slug / Key <span class="text-rose-500">*</span>
              </label>
              <input type="text" id="tab-modal-slug" required value="${tab ? (tab.key || tab.id || '') : ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono lowercase focus:outline-none focus:border-[#00A4B7] text-[#00A4B7] font-bold shadow-2xs" placeholder="e.g. fields-customizer" />
            </div>
            <div>
              <label for="tab-modal-type" class="block text-xs font-semibold text-[#172B4D] mb-1">
                Mapping Type
              </label>
              <select id="tab-modal-type" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D] shadow-2xs">
                <option value="system" ${tab && tab.type === 'system' ? 'selected' : ''}>System Page</option>
                <option value="standard" ${tab && tab.type === 'standard' ? 'selected' : ''}>Standard View</option>
                <option value="dynamic-form" ${tab && tab.type === 'dynamic-form' ? 'selected' : ''}>Dynamic Form</option>
                <option value="report" ${tab && tab.type === 'report' ? 'selected' : ''}>Report</option>
                <option value="custom-list" ${tab && tab.type === 'custom-list' ? 'selected' : ''}>Custom List</option>
              </select>
            </div>
          </div>

          <!-- Route URL Hash -->
          <div>
            <label for="tab-modal-route" class="block text-xs font-semibold text-[#172B4D] mb-1 flex items-center justify-between">
              <span>Route URL Hash <span class="text-rose-500">*</span></span>
              <span class="text-[10px] text-[#5E6C84] font-normal font-mono">Format: #/{menu}/{submenu}/{slug}</span>
            </label>
            <input type="text" id="tab-modal-route" required value="${tab ? (tab.route || '') : `#/${currentMenuKey}/${currentSubmenuId}/new-tab`}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono focus:outline-none focus:border-[#00A4B7] text-[#172B4D] shadow-2xs" placeholder="e.g. #/settings/custom/fields-customizer" />
          </div>

          <!-- Badge Tag & Status Checkbox -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 items-end">
            <div>
              <label for="tab-modal-badge" class="block text-xs font-semibold text-[#172B4D] mb-1">
                Badge Tag (Optional)
              </label>
              <input type="text" id="tab-modal-badge" value="${tab ? (tab.badge || '') : ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D] shadow-2xs" placeholder="e.g. 5 New, Pro" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-[#172B4D] mb-1">Status</label>
              <div class="flex items-center h-[38px]">
                <label class="inline-flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" id="tab-modal-status-cb" class="w-4.5 h-4.5 rounded border-[#DFE1E6] text-[#00A4B7] accent-[#00A4B7] cursor-pointer" ${(!tab || tab.status === 'Active') ? 'checked' : ''} />
                  <span class="text-xs font-semibold text-[#172B4D]">Active Tab</span>
                </label>
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: isEdit ? 'Save Changes' : 'Create Tab',
          type: 'primary',
          onClick: (m) => {
            const labelInput = document.getElementById('tab-modal-label');
            const slugInput = document.getElementById('tab-modal-slug');
            const menuSelect = document.getElementById('tab-modal-menu');
            const smSelect = document.getElementById('tab-modal-submenu');
            const typeSelect = document.getElementById('tab-modal-type');
            const routeInput = document.getElementById('tab-modal-route');
            const badgeInput = document.getElementById('tab-modal-badge');
            const statusCb = document.getElementById('tab-modal-status-cb');

            const label = labelInput?.value.trim();
            const id = slugInput?.value.trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '-');
            const selectedMenuKey = menuSelect?.value || 'settings';
            const selectedSmId = smSelect?.value || 'custom';
            const type = typeSelect?.value || 'system';
            const route = routeInput?.value.trim() || `#/${selectedMenuKey}/${selectedSmId}/${id}`;
            const badge = badgeInput?.value.trim() || '';
            const status = statusCb?.checked ? 'Active' : 'Inactive';

            if (!label || !id) {
              Toast.show('Please provide both Tab Name and Slug', 'warning', 'Missing Fields');
              return;
            }

            if (!selectedMenuKey || !selectedSmId) {
              Toast.show('Please select Main Menu and Sub Menu', 'warning', 'Missing Fields');
              return;
            }

            const menuObj = allMenus.find(m => m.key === selectedMenuKey);
            const menuLabel = menuObj ? menuObj.label : selectedMenuKey.toUpperCase();
            const smList = this.getSubmenusForMenu(selectedMenuKey);
            const smObj = smList.find(s => s.id === selectedSmId);
            const submenuTitle = smObj ? smObj.title : selectedSmId;

            // 1. Sync into submenusConfig
            if (selectedMenuKey === 'general') {
              if (typeof window !== 'undefined' && window.NAV_HIERARCHY) {
                const genMod = window.NAV_HIERARCHY.find(m => m.id === 'general');
                if (genMod && genMod.submenus) {
                  const cfg = genMod.submenus.find(s => s.id === selectedSmId);
                  if (cfg && cfg.tabs) {
                    const ex = cfg.tabs.find(t => t.id === id);
                    if (ex) { ex.label = label; ex.hash = route; }
                    else { cfg.tabs.push({ id, label, hash: route }); }
                  }
                }
              }
            } else if (selectedMenuKey === 'settings') {
              if (typeof window !== 'undefined' && window.SUPER_ADMIN_NAV_HIERARCHY) {
                const setMod = window.SUPER_ADMIN_NAV_HIERARCHY.find(m => m.id === 'settings');
                if (setMod && setMod.submenus) {
                  const cst = setMod.submenus.find(s => s.id === selectedSmId);
                  if (cst && cst.tabs) {
                    const ex = cst.tabs.find(t => t.id === id);
                    if (ex) { ex.label = label; ex.hash = route; }
                    else { cst.tabs.push({ id, label, hash: route }); }
                  }
                }
              }
            }

            if (!this.state.submenusConfig[selectedMenuKey]) {
              this.state.submenusConfig[selectedMenuKey] = [];
            }
            let targetSm = this.state.submenusConfig[selectedMenuKey].find(s => s.id === selectedSmId);
            if (!targetSm) {
              targetSm = { id: selectedSmId, title: submenuTitle, tabs: [] };
              this.state.submenusConfig[selectedMenuKey].push(targetSm);
            }
            if (!Array.isArray(targetSm.tabs)) targetSm.tabs = [];
            const tIdx = targetSm.tabs.findIndex(t => t.id === id);
            if (tIdx > -1) {
              targetSm.tabs[tIdx] = Object.assign(targetSm.tabs[tIdx], { id, label, route, type, badge, status });
            } else {
              targetSm.tabs.push({ id, label, route, type, badge, status });
            }

            // 2. Sync into tabsConfig
            if (!Array.isArray(this.state.tabsConfig)) {
              this.state.tabsConfig = [];
            }
            const existingTabIdx = this.state.tabsConfig.findIndex(t => t.id === id || (t.key === id && t.menuKey === selectedMenuKey));
            const tabRecord = {
              id,
              key: id,
              label,
              menuKey: selectedMenuKey,
              menuLabel,
              submenuId: selectedSmId,
              submenuTitle,
              route,
              type,
              badge,
              status,
              order: (tab && tab.order) ? tab.order : 1,
              isProtected: (tab && tab.isProtected) ? true : false,
              description: `Tab for ${label} under ${menuLabel} > ${submenuTitle}`
            };

            if (existingTabIdx > -1) {
              this.state.tabsConfig[existingTabIdx] = Object.assign(this.state.tabsConfig[existingTabIdx], tabRecord);
            } else {
              this.state.tabsConfig.unshift(tabRecord);
            }

            this.saveState();
            this.logAudit('Tabs Setup', `${isEdit ? 'Updated' : 'Added'} tab "${label}" (${id}) under ${menuLabel} > ${submenuTitle}`);
            m.close();
            Toast.show(`Tab "${label}" ${isEdit ? 'updated' : 'added'} successfully`, 'success', 'Saved');

            // Refresh UI
            if (tabsTable) {
              tabsTable.setData(this.getFilteredTabs());
            } else {
              const tableContainer = document.getElementById('tabs-table-container');
              if (tableContainer) {
                this.renderTabsStudioTab(document.getElementById('setup-subpage-content'));
              }
            }
            if (container) {
              this.renderSubmenuTabStudioTab(container);
            }
          }
        }
      ]
    });

    // Wire dynamic changes in modal
    const menuSelectEl = document.getElementById('tab-modal-menu');
    const smSelectEl = document.getElementById('tab-modal-submenu');
    const labelInputEl = document.getElementById('tab-modal-label');
    const slugInputEl = document.getElementById('tab-modal-slug');
    const routeInputEl = document.getElementById('tab-modal-route');

    if (menuSelectEl && smSelectEl) {
      menuSelectEl.onchange = () => {
        const mKey = menuSelectEl.value;
        const newSmList = this.getSubmenusForMenu(mKey);
        smSelectEl.innerHTML = newSmList.map(s => `<option value="${s.id}">${s.title}</option>`).join('');
        const curSm = smSelectEl.value || (newSmList[0] ? newSmList[0].id : 'default');
        const curSlug = slugInputEl?.value.trim() || 'new-tab';
        if (routeInputEl) {
          routeInputEl.value = `#/${mKey}/${curSm}/${curSlug}`;
        }
      };

      smSelectEl.onchange = () => {
        const mKey = menuSelectEl.value;
        const curSm = smSelectEl.value || 'default';
        const curSlug = slugInputEl?.value.trim() || 'new-tab';
        if (routeInputEl) {
          routeInputEl.value = `#/${mKey}/${curSm}/${curSlug}`;
        }
      };
    }

    if (labelInputEl && slugInputEl && routeInputEl) {
      labelInputEl.oninput = () => {
        if (!isEdit || !slugInputEl.value || slugInputEl.dataset.custom !== 'true') {
          const generatedSlug = labelInputEl.value
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
          slugInputEl.value = generatedSlug;
          const mKey = menuSelectEl?.value || 'settings';
          const sKey = smSelectEl?.value || 'custom';
          routeInputEl.value = `#/${mKey}/${sKey}/${generatedSlug || 'new-tab'}`;
        }
      };

      slugInputEl.oninput = () => {
        slugInputEl.dataset.custom = 'true';
        const mKey = menuSelectEl?.value || 'settings';
        const sKey = smSelectEl?.value || 'custom';
        routeInputEl.value = `#/${mKey}/${sKey}/${slugInputEl.value.trim() || 'new-tab'}`;
      };
    }
  },


  // 6. DYNAMIC FIELD & FORM BUILDER TAB
  // =========================================================================
  renderFieldFormBuilderTab(container) {
    this.renderUnderConstruction(container);
    return;
    const selectedFormKey = this.selectedFormForBuilder || 'rm-purchase-inward';
    const formConfig = this.state.formsConfig[selectedFormKey] || Object.values(this.state.formsConfig)[0];
    const persona = this.state.previewPersona || 'System Administrator';

    container.innerHTML = `
      <div class="space-y-4">
        <!-- Toolbar -->
        <div class="flex items-center justify-between flex-wrap gap-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-[#172B4D]">Target Operational Form:</span>
            <select id="builder-form-select" class="px-2.5 py-1 border border-[#DFE1E6] rounded-lg text-xs font-bold text-[#172B4D] bg-white cursor-pointer">
              ${Object.keys(this.state.formsConfig).map(k => `
                <option value="${k}" ${k === selectedFormKey ? 'selected' : ''}>${this.state.formsConfig[k].name}</option>
              `).join('')}
            </select>
          </div>

          <div class="flex items-center gap-2">
            <button id="btn-export-schema-json" class="px-2.5 py-1 border border-[#DFE1E6] hover:bg-[#FAFBFC] rounded text-xs font-semibold text-[#42526E] cursor-pointer">Export Schema JSON</button>
            <button id="btn-save-form-schema" class="btn-primary px-3 py-1 rounded text-xs font-bold cursor-pointer">Save Schema</button>
          </div>
        </div>

        <!-- Split Studio: Canvas & Live Preview -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <!-- Left Panel: Fields List -->
          <div class="lg:col-span-5 space-y-3">
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-3 shadow-none">
              <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2 mb-2.5">
                <span class="text-xs font-bold text-[#172B4D]">Configured Form Fields</span>
                <button id="btn-add-form-field" class="btn-primary px-2.5 py-0.5 rounded text-xs font-bold cursor-pointer">Add Field</button>
              </div>

              <div class="space-y-3 max-h-[580px] overflow-y-auto pr-1">
                ${formConfig.sections.map(sec => `
                  <div class="border border-[#EBECF0] rounded-lg p-2.5 bg-[#FAFBFC]">
                    <div class="font-bold text-xs text-[#172B4D] mb-1.5">${sec.title}</div>
                    <div class="space-y-1">
                      ${sec.fields.map((f, i) => `
                        <div class="bg-white border border-[#DFE1E6] rounded p-2 flex items-center justify-between text-xs">
                          <div>
                            <span class="font-bold text-[#172B4D]">${f.label} ${f.required ? '<span class="text-[#BF2600]">*</span>' : ''}</span>
                            <div class="text-[10px] text-[#5E6C84] font-mono">${f.key} • [${f.type}]</div>
                          </div>
                          <button data-action="del-field" data-sec-id="${sec.id}" data-field-id="${f.id}" class="p-1 hover:bg-[#EBECF0] rounded text-[#BF2600] cursor-pointer" title="Remove Field">✕</button>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right Panel: Live Form Preview -->
          <div class="lg:col-span-7">
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-none">
              <div class="flex items-center justify-between border-b border-[#EBECF0] pb-2.5 mb-3">
                <span class="text-xs font-bold text-[#172B4D]">Live Form Preview</span>
                <div class="flex items-center gap-1.5 text-xs">
                  <span class="text-[#5E6C84]">Role:</span>
                  <select id="preview-role-select" class="px-2 py-0.5 border border-[#DFE1E6] rounded text-xs font-bold bg-white">
                    ${['System Administrator', 'Procurement Officer', 'Quality Lab Inspector', 'Production Floor Manager'].map(r => `
                      <option value="${r}" ${r === persona ? 'selected' : ''}>${r}</option>
                    `).join('')}
                  </select>
                </div>
              </div>

              <form id="live-erp-form" class="space-y-4 max-h-[560px] overflow-y-auto pr-1">
                ${formConfig.sections.map(sec => `
                  <div class="space-y-2">
                    <div class="text-xs font-bold text-[#172B4D] border-b border-[#EBECF0] pb-1">${sec.title}</div>
                    <div class="grid grid-cols-2 gap-2.5">
                      ${sec.fields.map(f => `
                        <div class="${f.width}">
                          <label class="block font-bold text-[11px] text-[#172B4D] mb-0">
                            ${f.label} ${f.required ? '<span class="text-[#BF2600]">*</span>' : ''}
                          </label>

                          ${f.type === 'dropdown' ? `
                            <select class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg text-xs bg-white">
                              ${f.options?.map(opt => `<option value="${opt}" ${opt === f.defaultValue ? 'selected' : ''}>${opt}</option>`).join('')}
                            </select>
                          ` : f.type === 'radio' ? `
                            <div class="flex flex-wrap gap-2 pt-1 text-xs">
                              ${f.options?.map(opt => `
                                <label class="flex items-center gap-1 cursor-pointer">
                                  <input type="radio" name="${f.key}" value="${opt}" ${opt === f.defaultValue ? 'checked' : ''} class="text-[#00A4B7]" />
                                  <span>${opt}</span>
                                </label>
                              `).join('')}
                            </div>
                          ` : f.type === 'file' ? `
                            <div class="border border-dashed border-[#DFE1E6] rounded-lg p-2 text-center text-xs text-[#00A4B7] hover:bg-[#FAFBFC] cursor-pointer">
                              <span>Click to upload file</span>
                              <span class="text-[10px] text-[#5E6C84] block">${f.helpText || 'PDF / JPG'}</span>
                            </div>
                          ` : `
                            <input type="${f.type === 'number' ? 'number' : f.type === 'date' ? 'date' : 'text'}" placeholder="${f.placeholder || ''}" value="${f.defaultValue || ''}" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg text-xs" />
                          `}
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}

                <div class="pt-2 border-t border-[#EBECF0] flex justify-end">
                  <button type="submit" class="btn-primary px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer">Validate & Submit Slip</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;

    const formSel = document.getElementById('builder-form-select');
    if (formSel) {
      formSel.onchange = (e) => {
        this.selectedFormForBuilder = e.target.value;
        this.renderFieldFormBuilderTab(container);
      };
    }

    const roleSel = document.getElementById('preview-role-select');
    if (roleSel) {
      roleSel.onchange = (e) => {
        this.state.previewPersona = e.target.value;
        this.renderFieldFormBuilderTab(container);
      };
    }

    document.querySelectorAll('[data-action="del-field"]').forEach(btn => {
      btn.onclick = () => {
        const sec = formConfig.sections.find(s => s.id === btn.dataset.secId);
        if (sec) {
          sec.fields = sec.fields.filter(f => f.id !== btn.dataset.fieldId);
          this.saveState();
          Toast.show('Field removed', 'info', 'Removed');
          this.renderFieldFormBuilderTab(container);
        }
      };
    });

    const addFieldBtn = document.getElementById('btn-add-form-field');
    if (addFieldBtn) addFieldBtn.onclick = () => this.showAddFieldModal(formConfig);

    const exportBtn = document.getElementById('btn-export-schema-json');
    if (exportBtn) {
      exportBtn.onclick = () => {
        const json = JSON.stringify(formConfig, null, 2);
        Modal.show('Form Schema JSON', `
          <div class="space-y-2">
            <textarea readonly rows="12" class="w-full p-2 font-mono text-[11px] bg-[#172B4D] text-[#79F2C0] rounded border border-[#DFE1E6]">${json}</textarea>
            <div class="flex justify-end">
              <button onclick="navigator.clipboard.writeText(\`${json.replace(/\`/g, '\\\\`')}\`); Toast.show('Schema copied to clipboard', 'success', 'Copied'); Modal.close();" class="btn-primary px-3 py-1 rounded text-xs font-bold cursor-pointer">Copy JSON</button>
            </div>
          </div>
        `);
      };
    }

    const saveBtn = document.getElementById('btn-save-form-schema');
    if (saveBtn) {
      saveBtn.onclick = () => {
        this.logAudit('Form Builder', `Saved schema for ${formConfig.name}`);
        this.state.hasDraftChanges = true;
        this.state.draftChangesCount++;
        this.saveState();
        Toast.show('Form schema saved', 'success', 'Saved');
      };
    }

    const liveForm = document.getElementById('live-erp-form');
    if (liveForm) {
      liveForm.onsubmit = (e) => {
        e.preventDefault();
        Toast.show('Live validation passed! ERP operational slip recorded.', 'success', 'Validated');
      };
    }
  },

  showAddFieldModal(formConfig) {
    const modalContent = `
      <form id="af-form" class="space-y-3 text-xs">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-[#172B4D] mb-0">Target Section *</label>
            <select id="af-sec" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg">
              ${formConfig.sections.map(s => `<option value="${s.id}">${s.title}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block font-bold text-[#172B4D] mb-0">Field Type *</label>
            <select id="af-type" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg">
              <option value="text">Text Input</option>
              <option value="number">Number Input</option>
              <option value="date">Date Picker</option>
              <option value="dropdown">Dropdown Select</option>
              <option value="radio">Radio Buttons</option>
              <option value="file">File Upload</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-[#172B4D] mb-0">Field Label *</label>
            <input type="text" id="af-label" required class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg" placeholder="e.g. Salinity / PPT" />
          </div>
          <div>
            <label class="block font-bold text-[#172B4D] mb-0">Field Key *</label>
            <input type="text" id="af-key" required class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg font-mono" placeholder="salinityPpt" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-[#172B4D] mb-0">Placeholder Text</label>
            <input type="text" id="af-placeholder" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg" placeholder="e.g. 15 PPT" />
          </div>
          <div>
            <label class="block font-bold text-[#172B4D] mb-0">Grid Width</label>
            <select id="af-width" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg">
              <option value="col-span-1">Half Width (50%)</option>
              <option value="col-span-2">Full Width (100%)</option>
            </select>
          </div>
        </div>

        <div class="flex items-center gap-2 pt-1">
          <input type="checkbox" id="af-req" class="rounded text-[#00A4B7]" />
          <label for="af-req" class="font-bold text-[#172B4D] cursor-pointer">Mark as Mandatory (Required)</label>
        </div>

        <div class="flex items-center justify-end gap-2 pt-3 border-t border-[#EBECF0]">
          <button type="button" id="modal-af-cancel" class="px-3.5 py-1.5 border border-[#DFE1E6] rounded-lg text-xs font-semibold text-[#42526E] hover:bg-[#FAFBFC] cursor-pointer">Cancel</button>
          <button type="submit" class="btn-primary px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer">Add Field</button>
        </div>
      </form>
    `;

    Modal.show('Add Field to Form', modalContent);
    document.getElementById('modal-af-cancel').onclick = () => Modal.close();

    document.getElementById('af-form').onsubmit = (e) => {
      e.preventDefault();
      const secId = document.getElementById('af-sec').value;
      const type = document.getElementById('af-type').value;
      const label = document.getElementById('af-label').value.trim();
      const key = document.getElementById('af-key').value.trim();
      const placeholder = document.getElementById('af-placeholder').value.trim();
      const width = document.getElementById('af-width').value;
      const required = document.getElementById('af-req').checked;

      const sec = formConfig.sections.find(s => s.id === secId);
      if (sec) {
        sec.fields.push({
          id: `f_${Date.now()}`,
          key,
          label,
          type,
          placeholder,
          width,
          required,
          defaultValue: ''
        });

        this.saveState();
        Modal.close();
        Toast.show(`Field "${label}" added`, 'success', 'Saved');
        const c = document.getElementById('setup-subpage-content');
        if (c) this.renderClientMasterStudio(c, 'field-form-builder');
      }
    };
  },

  openAuditHistoryModal() {
    const btn = document.getElementById('btn-tab-extra-audit-history');
    if (btn) {
      btn.classList.remove('bg-white', 'border-[#CBD5E1]', 'text-[#334155]');
      btn.classList.add('bg-[#E0F2FE]', 'border-[#00A4B7]', 'text-[#00A4B7]', 'shadow-xs');
    }

    Modal.open({
      title: `
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#00A4B7] shrink-0">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h3 class="text-sm font-extrabold text-[#172B4D] tracking-tight">Audit History & Activity Timeline</h3>
          </div>
        </div>
      `,
      content: '<div id="audit-history-modal-body" class="w-full"></div>',
      size: 'full',
      onClose: () => {
        if (btn) {
          btn.classList.remove('bg-[#E0F2FE]', 'border-[#00A4B7]', 'text-[#00A4B7]', 'shadow-xs');
          btn.classList.add('bg-white', 'border-[#CBD5E1]', 'text-[#334155]');
        }
      },
      footerButtons: [
        {
          label: 'Close',
          type: 'secondary',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: () => Modal.close()
        }
      ]
    });

    const modalBody = document.getElementById('audit-history-modal-body');
    if (modalBody) {
      this.renderAuditLogsTab(modalBody);
    }
  },

  // =========================================================================
  // 7. AUDIT & CONFIGURATION LOGS TAB
  // =========================================================================
  renderAuditLogsTab(container) {
    if (!this.auditViewMode) this.auditViewMode = 'timeline';
    if (!this.auditSearchQuery) this.auditSearchQuery = '';
    if (!this.auditEntityFilter) this.auditEntityFilter = 'ALL';

    const getEntityMeta = (entity, action) => {
      const e = (entity || '').toLowerCase();
      const a = (action || '').toLowerCase();
      if (e.includes('company') || e.includes('client')) {
        return {
          border: 'border-[#0284C7]',
          bg: 'bg-[#F0F9FF]',
          text: 'text-[#0284C7]',
          badgeBg: 'bg-[#E0F2FE] text-[#00A4B7] border-[#BAE6FD]',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
        };
      }
      if (e.includes('user') || a.includes('user')) {
        return {
          border: 'border-[#00875A]',
          bg: 'bg-[#E3FCEF]',
          text: 'text-[#00875A]',
          badgeBg: 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`
        };
      }
      if (e.includes('role') || e.includes('permission')) {
        return {
          border: 'border-[#6554C0]',
          bg: 'bg-[#EAE6FF]',
          text: 'text-[#6554C0]',
          badgeBg: 'bg-[#EAE6FF] text-[#5243AA] border-[#D3C7F8]',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`
        };
      }
      if (e.includes('form') || e.includes('field') || a.includes('schema')) {
        return {
          border: 'border-[#FF991F]',
          bg: 'bg-[#FFF0B3]',
          text: 'text-[#974F0C]',
          badgeBg: 'bg-[#FFF0B3] text-[#8F4D00] border-[#FFE380]',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>`
        };
      }
      if (e.includes('module') || e.includes('menu') || e.includes('sidebar')) {
        return {
          border: 'border-[#4C9AFF]',
          bg: 'bg-[#DEEBFF]',
          text: 'text-[#0052CC]',
          badgeBg: 'bg-[#DEEBFF] text-[#0052CC] border-[#B3D4FF]',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>`
        };
      }
      return {
        border: 'border-[#0284C7]',
        bg: 'bg-[#F0F9FF]',
        text: 'text-[#0284C7]',
        badgeBg: 'bg-[#F4F5F7] text-[#42526E] border-[#DFE1E6]',
        icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
      };
    };

    const getFilteredLogs = () => {
      let logs = [...(this.state.auditLogs || [])];
      if (this.auditEntityFilter && this.auditEntityFilter !== 'ALL') {
        logs = logs.filter(l => l.entity === this.auditEntityFilter);
      }
      if (this.auditSearchQuery && this.auditSearchQuery.trim() !== '') {
        const q = this.auditSearchQuery.toLowerCase().trim();
        logs = logs.filter(l => 
          (l.id && l.id.toLowerCase().includes(q)) ||
          (l.user && l.user.toLowerCase().includes(q)) ||
          (l.role && l.role.toLowerCase().includes(q)) ||
          (l.company && l.company.toLowerCase().includes(q)) ||
          (l.entity && l.entity.toLowerCase().includes(q)) ||
          (l.action && l.action.toLowerCase().includes(q)) ||
          (l.diff && l.diff.toLowerCase().includes(q)) ||
          (l.timestamp && l.timestamp.toLowerCase().includes(q))
        );
      }
      return logs;
    };

    const entities = ['ALL', ...new Set((this.state.auditLogs || []).map(l => l.entity).filter(Boolean))];
    const filteredLogs = getFilteredLogs();

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Status Bar -->
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 shadow-none">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-[#172B4D]">Configuration Governance:</span>
            <span class="lozenge lozenge-success text-[10px] font-mono">${this.state.publishedVersion} Live</span>
            ${this.state.hasDraftChanges ? `
              <span class="lozenge lozenge-warning text-[10px]">${this.state.draftChangesCount} Draft Changes Pending</span>
            ` : `
              <span class="lozenge lozenge-default text-[10px]">Zero Drafts</span>
            `}
          </div>

          <div class="flex items-center gap-2">
            ${this.state.hasDraftChanges ? `
              <button id="btn-discard-drafts" class="px-2.5 py-1 border border-[#DFE1E6] hover:bg-[#FAFBFC] rounded text-xs font-semibold text-[#BF2600] cursor-pointer">Discard Drafts</button>
              <button id="btn-publish-live" class="btn-primary px-3 py-1 rounded text-xs font-bold cursor-pointer">Publish Changes Live</button>
            ` : ''}
          </div>
        </div>

        <!-- Audit History Timeline Container -->
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-none space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#EBECF0] pb-3">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#00A4B7] shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h3 class="text-sm font-bold text-[#172B4D]">Audit History & Activity Timeline</h3>
              </div>
            </div>

            <!-- View Toggle & Stats -->
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] font-mono">
                ${filteredLogs.length} Events
              </span>
              <div class="inline-flex rounded-lg border border-[#DFE1E6] p-0.5 bg-[#F4F5F7]">
                <button type="button" id="btn-view-timeline" class="px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  this.auditViewMode === 'timeline' 
                    ? 'bg-white text-[#0284C7] shadow-2xs font-bold' 
                    : 'text-[#5E6C84] hover:text-[#172B4D]'
                }">
                  Timeline
                </button>
                <button type="button" id="btn-view-table" class="px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  this.auditViewMode === 'table' 
                    ? 'bg-white text-[#0284C7] shadow-2xs font-bold' 
                    : 'text-[#5E6C84] hover:text-[#172B4D]'
                }">
                  Table
                </button>
              </div>
            </div>
          </div>

          <!-- Filters Row -->
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2 flex-1 min-w-[240px] max-w-md">
              <div class="relative w-full">
                <input 
                  type="text" 
                  id="audit-search-input" 
                  placeholder="Search timeline by keyword, user, action or entity..." 
                  value="${this.auditSearchQuery || ''}"
                  class="w-full text-xs pr-3 py-1.5 bg-[#FAFBFC] border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] focus:bg-white text-[#172B4D]" style="padding-left: 36px !important;" 
                />
                <svg class="w-3.5 h-3.5 text-[#8993A4] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
            </div>

            <div class="flex items-center gap-2 flex-wrap">
              <div class="flex items-center gap-1.5">
                <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Entity:</span>
                <select id="audit-entity-filter" class="text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#0284C7] text-[#172B4D] font-medium cursor-pointer">
                  ${entities.map(e => `
                    <option value="${e}" ${this.auditEntityFilter === e ? 'selected' : ''}>
                      ${e === 'ALL' ? 'All Entities' : e}
                    </option>
                  `).join('')}
                </select>
              </div>
            </div>
          </div>

          <!-- Dynamic View Container (Timeline / Table) -->
          <div id="audit-view-container" class="pt-2">
            ${this.auditViewMode === 'timeline' ? `
              <!-- Timeline Layout -->
              <div class="relative pl-6 sm:pl-10 space-y-6 before:content-[''] before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#DFE1E6] py-2">
                ${filteredLogs.length === 0 ? `
                  <div class="p-8 text-center bg-[#FAFBFC] rounded-xl border border-[#DFE1E6] text-xs text-[#5E6C84]">
                    No audit records found matching your filters.
                  </div>
                ` : filteredLogs.map(log => {
                  const meta = getEntityMeta(log.entity, log.action);
                  const initials = (log.user || 'US').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
                  return `
                    <div class="relative group">
                      <!-- Timeline Node Dot / Icon -->
                      <div class="absolute -left-[30px] sm:-left-[38px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full ${meta.bg} ${meta.border} border-2 flex items-center justify-center ${meta.text} shadow-xs shrink-0 ring-4 ring-white">
                        ${meta.icon}
                      </div>

                      <!-- Timeline Event Card -->
                      <div class="bg-white border border-[#DFE1E6] hover:border-[#BAE6FD] hover:shadow-xs rounded-xl p-3.5 sm:p-4 transition-all space-y-2.5">
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#F4F5F7] pb-2">
                          <div class="flex items-center gap-2 flex-wrap">
                            <span class="font-mono text-[11px] font-bold text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD]">${log.id}</span>
                            <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5E6C84]">
                              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                              ${log.timestamp}
                            </span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10.5px] font-bold ${meta.badgeBg} border">
                              ${log.entity}
                            </span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10.5px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#EBECF0]">
                              ${log.action}
                            </span>
                          </div>
                          <div>
                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">
                              <span class="w-1.5 h-1.5 rounded-full bg-[#36B37E]"></span>
                              ${log.status || 'Published'}
                            </span>
                          </div>
                        </div>

                        <!-- Diff / Change Note Box -->
                        <div class="text-xs text-[#172B4D] font-medium leading-relaxed bg-[#FAFBFC] p-2.5 rounded-lg border border-[#EBECF0]">
                          ${log.diff}
                        </div>

                        <!-- User & Corporate Client Footer -->
                        <div class="flex flex-wrap items-center justify-between gap-2 text-xs pt-0.5 text-[#5E6C84]">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full bg-[#E0F2FE] text-[#0284C7] font-extrabold text-[10px] flex items-center justify-center border border-[#BAE6FD]">
                              ${initials}
                            </div>
                            <span class="font-bold text-[#172B4D] text-xs">${log.user}</span>
                            <span class="text-[11px] font-medium text-[#5E6C84]">(${log.role || 'System Administrator'})</span>
                          </div>
                          <div class="flex items-center gap-1.5 text-[11px]">
                            <svg class="w-3.5 h-3.5 text-[#8993A4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                            <span class="font-medium text-[#42526E]">${log.company || 'Devi Fisheries Limited'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            ` : `
              <!-- Table Layout -->
              <div id="audit-logs-table-container"></div>
            `}
          </div>
        </div>
      </div>
    `;

    if (this.auditViewMode === 'table') {
      new DataTable({
        containerId: 'audit-logs-table-container',
        data: filteredLogs,
        keyField: 'id',
        tableTitle: 'Configuration Change Audit Trail',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          { field: 'id', header: 'Log ID', render: (v) => `<span class="font-mono font-bold text-[#172B4D]">${v}</span>` },
          { field: 'timestamp', header: 'Timestamp', render: (v) => `<span class="text-[#5E6C84] text-[11px] whitespace-nowrap">${v}</span>` },
          { 
            field: 'user', 
            header: 'User & Role', 
            render: (v, r) => `<div><span class="font-bold text-[#172B4D]">${v}</span><div class="text-[10px] text-[#5E6C84]">${r.role || ''}</div></div>` 
          },
          { field: 'entity', header: 'Entity Affected', render: (v) => `<span class="lozenge lozenge-default text-[9.5px]">${v}</span>` },
          { field: 'action', header: 'Action', render: (v) => `<span class="font-semibold text-[#172B4D]">${v}</span>` },
          { field: 'diff', header: 'Change Details', render: (v) => `<span class="text-[#172B4D]">${v}</span>` },
          { field: 'status', header: 'Status', type: 'status' }
        ]
      });
    }

    // Event Wire-up
    const timelineBtn = document.getElementById('btn-view-timeline');
    if (timelineBtn) {
      timelineBtn.onclick = () => {
        this.auditViewMode = 'timeline';
        this.renderAuditLogsTab(container);
      };
    }

    const tableBtn = document.getElementById('btn-view-table');
    if (tableBtn) {
      tableBtn.onclick = () => {
        this.auditViewMode = 'table';
        this.renderAuditLogsTab(container);
      };
    }

    const searchInput = document.getElementById('audit-search-input');
    if (searchInput) {
      searchInput.oninput = (e) => {
        this.auditSearchQuery = e.target.value;
        this.renderAuditLogsTab(container);
        const inputNow = document.getElementById('audit-search-input');
        if (inputNow) {
          inputNow.focus();
          inputNow.setSelectionRange(inputNow.value.length, inputNow.value.length);
        }
      };
    }

    const entitySelect = document.getElementById('audit-entity-filter');
    if (entitySelect) {
      entitySelect.onchange = (e) => {
        this.auditEntityFilter = e.target.value;
        this.renderAuditLogsTab(container);
      };
    }

    const publishBtn = document.getElementById('btn-publish-live');
    if (publishBtn) publishBtn.onclick = () => this.handlePublishConfiguration();

    const discardBtn = document.getElementById('btn-discard-drafts');
    if (discardBtn) {
      discardBtn.onclick = () => {
        Modal.confirm({
          title: 'Discard Pending Drafts',
          message: 'Are you sure you want to discard all pending configuration draft changes? This action cannot be undone.',
          confirmText: 'Discard Drafts',
          cancelText: 'Cancel',
          isDestructive: true,
          onConfirm: () => {
            this.state.hasDraftChanges = false;
            this.state.draftChangesCount = 0;
            this.saveState();
            Toast.show('Draft changes cleared', 'info', 'Cleared');
            this.renderAuditLogsTab(container);
          }
        });
      };
    }
  },

  handlePublishConfiguration() {
    const nextVer = `v2.4.${parseInt(this.state.publishedVersion.split('.').pop() || '1') + 1}`;
    Modal.show('Publish Configuration Live', `
      <div class="space-y-3 text-xs">
        <div>
          <label class="block font-bold text-[#172B4D] mb-0">Release Summary Notes</label>
          <input type="text" id="pub-note" class="w-full px-2.5 py-1.5 border border-[#DFE1E6] rounded-lg" placeholder="e.g. Updated CAA upload validation rule" />
        </div>
        <div class="flex items-center justify-end gap-2 pt-2 border-t border-[#EBECF0]">
          <button id="modal-pub-cancel" class="px-3.5 py-1.5 border border-[#DFE1E6] rounded-lg text-xs font-semibold text-[#42526E] hover:bg-[#FAFBFC] cursor-pointer">Cancel</button>
          <button id="modal-pub-confirm" class="btn-primary px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer">Publish Live (${nextVer})</button>
        </div>
      </div>
    `);

    document.getElementById('modal-pub-cancel').onclick = () => Modal.close();
    document.getElementById('modal-pub-confirm').onclick = () => {
      const note = document.getElementById('pub-note').value.trim() || 'Configuration changes published live.';
      this.state.publishedVersion = nextVer;
      this.state.hasDraftChanges = false;
      this.state.draftChangesCount = 0;
      this.state.versionHistory.forEach(v => v.isCurrent = false);
      this.state.versionHistory.unshift({
        version: nextVer,
        date: 'Just now',
        publishedBy: 'Dr. Y.S. Prasad',
        note,
        isCurrent: true
      });

      this.logAudit('Configuration Governance', `Published live release ${nextVer}: ${note}`);
      this.saveState();
      Modal.close();
      Toast.show(`Configuration release ${nextVer} is now LIVE`, 'success', 'Published Live');

      const c = document.getElementById('setup-subpage-content');
      if (c) this.renderClientMasterStudio(c, this.activeTab);
    };
  },

  logAudit(entity, diff) {
    const id = `AUD-${Math.floor(8900 + Math.random() * 900)}`;
    const comp = this.state.companies.find(c => c.id === this.state.activeCompanyId)?.name || 'Devi Fisheries Limited';
    this.state.auditLogs.unshift({
      id,
      timestamp: 'Just now',
      user: 'Dr. Y.S. Prasad',
      role: 'System Administrator',
      company: comp,
      entity,
      action: 'Update',
      diff,
      status: 'Published'
    });
  }
};

if (typeof window !== 'undefined') {
  window.SetupView = SetupView;

  // Bulletproof delegated capture click listener for popup viewing all submenus
  document.addEventListener('click', (e) => {
    const moreSubBtn = e.target.closest('.btn-show-all-submenus');
    if (moreSubBtn) {
      e.preventDefault();
      e.stopPropagation();
      const menuId = moreSubBtn.dataset.menuId || moreSubBtn.getAttribute('data-menu-id');
      if (menuId && typeof SetupView !== 'undefined' && SetupView.showAllSubmenusModal) {
        SetupView.showAllSubmenusModal(menuId);
      } else if (menuId && window.SetupView && window.SetupView.showAllSubmenusModal) {
        window.SetupView.showAllSubmenusModal(menuId);
      }
    }

    const auditBtn = e.target.closest('#btn-tab-extra-audit-history, [data-action="open-audit-history"]');
    if (auditBtn) {
      e.preventDefault();
      e.stopPropagation();
      if (typeof SetupView !== 'undefined' && SetupView.openAuditHistoryModal) {
        SetupView.openAuditHistoryModal();
      } else if (window.SetupView && window.SetupView.openAuditHistoryModal) {
        window.SetupView.openAuditHistoryModal();
      }
    }
  }, true);
}
