// Miledeep Enterprise ERP — Sales & Exports Module Views
// Comprehensive submenus: Dashboard, Orders (8 Workflow Tabs), Payments, Insurance

import { TabBar } from '../components/tabBar.js';
import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';
import { Charts } from '../components/charts.js';

export const SalesView = {
  state: {
    // Dashboard KPI & Insertion Log Data (from UI specifications)
    dashboardMetrics: {
      pendingContracts: 474,
      onWater: 134,
      delivered: 872,
      orders: 1480,
      pendingPayments: 377,
      paymentsReceived: 847,
      totalRecords2Days: 21,
      modulesActive2Days: 2,
      latestActivity2Days: '12-11-2026 00:00:00'
    },
    moduleSummary2Days: [
      {
        name: 'QC Last Code Issue',
        module: 'QUALITY CONTROL',
        count: 16,
        latest: '12-11-2026 00:00:00'
      },
      {
        name: 'Last Realization Entry',
        module: 'SALES / EXPORT',
        count: 5,
        latest: '12-11-2026 00:00:00'
      }
    ],
    insertionRecords: [
      { sNo: 16, dateTime: '11-11-2026 00:00:00', dateSource: 'ProductReleaseDate / PsipSentDate / BestBeforeDt / HarvestDt / ReceivingDt', module: 'QC Last Code Issue', moduleCategory: 'Code Issue', recordId: '#6247', reference: 'Inv: 2515 | Serial: - | Trace: 974' },
      { sNo: 17, dateTime: '11-11-2026 00:00:00', dateSource: 'ProductReleaseDate / PsipSentDate / BestBeforeDt / HarvestDt / ReceivingDt', module: 'QC Last Code Issue', moduleCategory: 'Code Issue', recordId: '#6248', reference: 'Inv: 2515 | Serial: - | Trace: 1157' },
      { sNo: 18, dateTime: '11-11-2026 00:00:00', dateSource: 'ProductReleaseDate / PsipSentDate / BestBeforeDt / HarvestDt / ReceivingDt', module: 'QC Last Code Issue', moduleCategory: 'Code Issue', recordId: '#6249', reference: 'Inv: 2516 | Serial: - | Trace: 981' },
      { sNo: 19, dateTime: '11-11-2026 00:00:00', dateSource: 'ProductReleaseDate / PsipSentDate / BestBeforeDt / HarvestDt / ReceivingDt', module: 'QC Last Code Issue', moduleCategory: 'Code Issue', recordId: '#6250', reference: 'Inv: 2518 | Serial: - | Trace: 1042' },
      { sNo: 20, dateTime: '11-11-2026 00:00:00', dateSource: 'RealizationDate / BankAdviseDt / ClosureDt', module: 'Last Realization Entry', moduleCategory: 'SALES / EXPORT', recordId: '#5102', reference: 'Inv: EXP-2026-301 | Bank: SBI | e-BRC: Valid' },
      { sNo: 21, dateTime: '11-11-2026 00:00:00', dateSource: 'RealizationDate / BankAdviseDt / ClosureDt', module: 'Last Realization Entry', moduleCategory: 'SALES / EXPORT', recordId: '#5103', reference: 'Inv: EXP-2026-302 | Bank: Citi | e-BRC: Valid' }
    ],
    // 1. Dashboard Contracts & Analytics
    contracts: [
      {
        contractNo: "SC-USA-2026-441",
        customerName: "Red Lobster Supply Chain LLC",
        destination: "Long Beach Port, USA",
        productDescription: "Vannamei Shrimp HLSO 26/30 IQF",
        orderQuantityKg: 18000,
        unitPriceUsd: 8.85,
        totalValueUsd: 159300,
        incoterms: "CIF Long Beach Port, USA",
        etdDate: "2026-10-18",
        etaDate: "2026-11-12",
        containerNo: "ONEU-440912-8",
        paymentStatus: "LC_OPENED_CONFIRMED",
        status: "PROCESSING_PACKING"
      },
      {
        contractNo: "SC-JPN-2026-112",
        customerName: "Maruha Nichiro Corporation",
        destination: "Tokyo Port, Japan",
        productDescription: "Black Tiger Shrimp HOSO 16/20 Semi-IQF",
        orderQuantityKg: 14000,
        unitPriceUsd: 14.50,
        totalValueUsd: 203000,
        incoterms: "FOB Visakhapatnam Port",
        etdDate: "2026-10-12",
        etaDate: "2026-10-29",
        containerNo: "MSKU-781023-4",
        paymentStatus: "ADVANCE_RECEIVED_30PCT",
        status: "STAGED_FOR_CUSTOMS"
      },
      {
        contractNo: "SC-EU-2026-079",
        customerName: "Royal Greenland Seafood A/S",
        destination: "Rotterdam Port, Netherlands",
        productDescription: "Asian Seabass Skin-on Boneless Fillet 500-800g IQF",
        orderQuantityKg: 12000,
        unitPriceUsd: 11.20,
        totalValueUsd: 134400,
        incoterms: "CFR Rotterdam Port",
        etdDate: "2026-10-25",
        etaDate: "2026-11-28",
        containerNo: "CMAU-552190-1",
        paymentStatus: "LC_DRAFT_APPROVED",
        status: "CONFIRMED_PRODUCTION"
      },
      {
        contractNo: "SC-USA-2026-448",
        customerName: "Sysco Corporation International",
        destination: "New York Terminal, USA",
        productDescription: "Vannamei Cooked Tail-On 31/40 IQF",
        orderQuantityKg: 22000,
        unitPriceUsd: 9.60,
        totalValueUsd: 211200,
        incoterms: "CIF New York, USA",
        etdDate: "2026-11-02",
        etaDate: "2026-11-26",
        containerNo: "HLCU-883012-9",
        paymentStatus: "LC_OPENED_CONFIRMED",
        status: "SCHEDULED_DISPATCH"
      },
      {
        contractNo: "SC-CAN-2026-033",
        customerName: "High Liner Foods Canada",
        destination: "Vancouver Port, Canada",
        productDescription: "Vannamei PDTO 21/25 IQF Bulk",
        orderQuantityKg: 16500,
        unitPriceUsd: 10.40,
        totalValueUsd: 171600,
        incoterms: "CIF Vancouver, Canada",
        etdDate: "2026-11-08",
        etaDate: "2026-12-04",
        containerNo: "MSKU-993412-0",
        paymentStatus: "LC_OPENED_CONFIRMED",
        status: "PROCESSING_PACKING"
      }
    ],

    // 2. Orders Submenu (8 Tabs datasets)
    proformaList: [
      {
        id: "PI-001",
        exporter: "Devi Fisheries Limited",
        processor: "Devi Fisheries Limited - Unit 1",
        piNumber: "PI-2026-901",
        piDate: "2026-10-05",
        poNumber: "PO-RL-8821",
        poDate: "2026-10-02",
        buyerName: "Red Lobster Supply Chain LLC",
        consignee: "Red Lobster Supply Chain LLC",
        ultimateConsignee: "Red Lobster Distribution Center Orlando",
        notifyParty: "Expeditors International USA Inc.",
        importerOfRecord: "Red Lobster Supply Chain LLC",
        agent: "Seaways Global Logistics Ltd",
        certification: "BAP 4-Star & ASC Certified",
        country: "United States",
        portOfLoading: "Visakhapatnam Sea (INVTZ)",
        destinationCountry: "United States",
        portOfDischarge: "Long Beach Port, USA",
        finalDestinationCountry: "United States",
        finalDestination: "Los Angeles Cold Terminal, CA",
        productionPlant: "Unit 1 - Processing (Vizag)",
        shipByDate: "2026-11-15",
        shipByDate2: "Week 46, Mid November 2026",
        bankDetails: "State Bank of India (Forex Cell, Vizag)",
        showBank: "Yes",
        paymentTerms: "100% Irrevocable LC at Sight",
        shipmentTerms: "Full Container Load (FCL)",
        deliveryTerms: "CIF Port of Destination",
        quantityUnits: "Kilograms (Kg)",
        currency: "USD ($)",
        freight: "Freight Prepaid",
        chargeName: "Ocean Freight & Reefer THC",
        chargeAmount: 4850,
        noOfContainers: 1,
        referenceNumber: "REF-RL-2026-091",
        remarks: "Shipment subject to FDA Prior Notice clearance prior to vessel arrival.",
                lineItems: [
          {
            id: 1,
            variety: "Vannamei Shrimp HLSO IQF",
            grade: "26/30",
            packingStyle: "10x1 Kg Printed Bags",
            treatment: "Non-Treated",
            freezingType: "IQF",
            brand: "Devi Gold",
            mcs: 1200,
            traysQty: 2400,
            unitPriceBags: 8.85,
            ddpPrice: 9.45,
            amountUsd: 106200,
            cups: 240,
            cupsPriceBags: 0.65,
            code: "PRD-VAN-2630",
            fullName: "Frozen Raw Headless Shell-On White Shrimp 26/30",
            description: "Individually Quick Frozen, 10x1kg bags per master carton",
            buyerDescription: "Custom retail branded packing with UPC barcode"
          },
          {
            id: 2,
            variety: "Vannamei Cooked Tail-On IQF",
            grade: "31/40",
            packingStyle: "10x1 Kg Retail Pouch",
            treatment: "STPP Treated",
            freezingType: "IQF",
            brand: "Ocean Pearl",
            mcs: 600,
            traysQty: 1200,
            unitPriceBags: 9.60,
            ddpPrice: 10.20,
            amountUsd: 57600,
            cups: 120,
            cupsPriceBags: 0.70,
            code: "PRD-CKD-3140",
            fullName: "Cooked Peeled Tail-On White Shrimp 31/40",
            description: "Blanched / Cooked IQF, ready to eat",
            buyerDescription: "Foodservice label pack"
          }
        ],
        status: "APPROVED"
      },
      {
        id: "PI-002",
        exporter: "Devi Sea Foods Ltd",
        processor: "Devi Sea Foods Ltd (Plant 2)",
        piNumber: "PI-2026-902",
        piDate: "2026-10-08",
        poNumber: "PO-MN-4402",
        poDate: "2026-10-04",
        buyerName: "Maruha Nichiro Corporation",
        consignee: "Maruha Nichiro Corporation",
        ultimateConsignee: "Maruha Nichiro Tokyo Cold Center",
        notifyParty: "Nippon Express Global Logistics",
        importerOfRecord: "Maruha Nichiro Corporation",
        agent: "Evergreen Maritime Agency",
        certification: "BAP 4-Star & ISO 22000",
        country: "Japan",
        portOfLoading: "Visakhapatnam Sea (INVTZ)",
        destinationCountry: "Japan",
        portOfDischarge: "Tokyo Port, Japan",
        finalDestinationCountry: "Japan",
        finalDestination: "Tokyo Central Coldstore",
        productionPlant: "Unit 2 - Value Added (Singarayakonda)",
        shipByDate: "2026-11-20",
        shipByDate2: "Late November 2026",
        bankDetails: "Canara Bank Overseas Branch",
        showBank: "Yes",
        paymentTerms: "30% Advance + 70% Against CAD",
        shipmentTerms: "Full Container Load (FCL)",
        deliveryTerms: "FOB Visakhapatnam Port",
        quantityUnits: "Kilograms (Kg)",
        currency: "USD ($)",
        freight: "Freight Collect",
        chargeName: "THC & Carting Charges",
        chargeAmount: 2200,
        noOfContainers: 1,
        referenceNumber: "REF-MN-2026-114",
        remarks: "Strict antibiotic residual testing certificates to be attached with docs.",
                lineItems: [
          {
            id: 1,
            variety: "Black Tiger HOSO Semi-IQF",
            grade: "16/20",
            packingStyle: "6x2 Kg Blocks",
            treatment: "Non-Treated",
            freezingType: "Semi-IQF",
            brand: "Devi Gold",
            mcs: 1000,
            traysQty: 2000,
            unitPriceBags: 14.50,
            ddpPrice: 15.20,
            amountUsd: 145000,
            cups: 100,
            cupsPriceBags: 0.80,
            code: "PRD-BT-1620",
            fullName: "Black Tiger Shrimp Head-On Semi-IQF 16/20",
            description: "6x2kg blocks, Japan export specification",
            buyerDescription: "Japanese wholesale distribution packaging"
          },
          {
            id: 2,
            variety: "Vannamei Easy Peel IQF",
            grade: "21/25",
            packingStyle: "10x1 Kg Printed Bags",
            treatment: "Citric Acid Treated",
            freezingType: "IQF",
            brand: "Devi Diamond",
            mcs: 400,
            traysQty: 800,
            unitPriceBags: 11.00,
            ddpPrice: 11.80,
            amountUsd: 44000,
            cups: 80,
            cupsPriceBags: 0.75,
            code: "PRD-EZP-2125",
            fullName: "Easy Peel Vannamei Raw IQF 21/25",
            description: "Slit back deveined raw frozen",
            buyerDescription: "Retail pack"
          }
        ],
        status: "PENDING_APPROVAL"
      },
      {
        id: "PI-003",
        exporter: "Devi Fisheries Limited",
        processor: "Devi Fisheries Limited - Unit 1",
        piNumber: "PI-2026-903",
        piDate: "2026-10-12",
        poNumber: "PO-RG-9011",
        poDate: "2026-10-09",
        buyerName: "Royal Greenland Seafood A/S",
        consignee: "Royal Greenland Seafood A/S",
        ultimateConsignee: "Royal Greenland Euro Hub Rotterdam",
        notifyParty: "Kuehne + Nagel Logistics BV",
        importerOfRecord: "Royal Greenland Seafood A/S",
        agent: "Seaways Global Logistics Ltd",
        certification: "MSC & ASC Chain of Custody",
        country: "Netherlands",
        portOfLoading: "Visakhapatnam Sea (INVTZ)",
        destinationCountry: "Netherlands",
        portOfDischarge: "Rotterdam Port, Netherlands",
        finalDestinationCountry: "Netherlands",
        finalDestination: "Rotterdam Maasvlakte Cold Terminal",
        productionPlant: "Unit 1 - Processing (Vizag)",
        shipByDate: "2026-11-28",
        shipByDate2: "Week 48, November 2026",
        bankDetails: "HDFC Bank Trade Finance",
        showBank: "Yes",
        paymentTerms: "LC 60 Days from B/L Date",
        shipmentTerms: "Full Container Load (FCL)",
        deliveryTerms: "CFR Rotterdam Port",
        quantityUnits: "Kilograms (Kg)",
        currency: "EUR (€)",
        freight: "Freight Prepaid",
        chargeName: "Bunker Adjustment Factor (BAF)",
        chargeAmount: 3100,
        noOfContainers: 1,
        referenceNumber: "REF-RG-2026-077",
        remarks: "EU Health Certificate and Catch Certificate original required.",
                lineItems: [
          {
            id: 1,
            variety: "Asian Seabass Fillet IQF",
            grade: "500-800g",
            packingStyle: "Bulk 10 Kg Master",
            treatment: "Non-Treated",
            freezingType: "IQF",
            brand: "Devi Select",
            mcs: 1200,
            traysQty: 2400,
            unitPriceBags: 11.20,
            ddpPrice: 11.90,
            amountUsd: 134400,
            cups: 0,
            cupsPriceBags: 0,
            code: "PRD-SEABASS-FILLET",
            fullName: "Asian Seabass Skin-on Boneless Fillet IQF",
            description: "Individually wrapped skin-on fillets",
            buyerDescription: "EU retail packaging"
          }
        ],
        status: "PENDING_APPROVAL"
      },
      {
        id: "PI-004",
        exporter: "Devi Fisheries Limited",
        processor: "Devi Marine Processors Unit-3",
        piNumber: "PI-2026-904",
        piDate: "2026-10-15",
        poNumber: "PO-SYS-3319",
        poDate: "2026-10-11",
        buyerName: "Sysco Corporation International",
        consignee: "Sysco Corporation International",
        ultimateConsignee: "Sysco Northeast Logistics Terminal",
        notifyParty: "C.H. Robinson Worldwide Inc.",
        importerOfRecord: "Sysco Corporation International",
        agent: "Evergreen Maritime Agency",
        certification: "BAP 4-Star & BRCGS Food Safety",
        country: "United States",
        portOfLoading: "Visakhapatnam Sea (INVTZ)",
        destinationCountry: "United States",
        portOfDischarge: "New York Terminal, USA",
        finalDestinationCountry: "United States",
        finalDestination: "Newark Port Cold Terminal, NJ",
        productionPlant: "Unit 3 - Pre-processing (Kakinada)",
        shipByDate: "2026-12-05",
        shipByDate2: "Early December 2026",
        bankDetails: "State Bank of India (Forex Cell, Vizag)",
        showBank: "Yes",
        paymentTerms: "100% LC at Sight",
        shipmentTerms: "Full Container Load (FCL)",
        deliveryTerms: "CIF New York Terminal",
        quantityUnits: "Kilograms (Kg)",
        currency: "USD ($)",
        freight: "Freight Prepaid",
        chargeName: "Reefer Monitoring & Peak Surcharge",
        chargeAmount: 5200,
        noOfContainers: 2,
        referenceNumber: "REF-SYS-2026-304",
        remarks: "Palletized shrink-wrapped shipment with temp data-loggers.",
                lineItems: [
          {
            id: 1,
            variety: "Vannamei Cooked Tail-On IQF",
            grade: "31/40",
            packingStyle: "10x1 Kg Retail Pouch",
            treatment: "STPP Treated",
            freezingType: "IQF",
            brand: "Ocean Pearl",
            mcs: 2200,
            traysQty: 4400,
            unitPriceBags: 9.60,
            ddpPrice: 10.30,
            amountUsd: 211200,
            cups: 440,
            cupsPriceBags: 0.70,
            code: "PRD-CKD-3140",
            fullName: "Cooked Tail-On Vannamei IQF 31/40",
            description: "10x1kg printed retail pouch with nutritional panel",
            buyerDescription: "Sysco Imperial brand standard"
          }
        ],
        status: "APPROVED"
      },
      {
        id: "PI-005",
        exporter: "Devi Sea Foods Ltd",
        processor: "Devi Sea Foods Ltd (Plant 2)",
        piNumber: "PI-2026-905",
        piDate: "2026-10-18",
        poNumber: "PO-USF-2210",
        poDate: "2026-10-16",
        buyerName: "US Foods Trading Co",
        consignee: "US Foods Trading Co",
        ultimateConsignee: "US Foods Southern Distribution Center",
        notifyParty: "DB Schenker USA Inc.",
        importerOfRecord: "US Foods Trading Co",
        agent: "Seaways Global Logistics Ltd",
        certification: "BAP 4-Star Certified",
        country: "United States",
        portOfLoading: "Visakhapatnam Sea (INVTZ)",
        destinationCountry: "United States",
        portOfDischarge: "Houston Sea Port, USA",
        finalDestinationCountry: "United States",
        finalDestination: "Houston Cold Logistics Facility",
        productionPlant: "Unit 2 - Value Added (Singarayakonda)",
        shipByDate: "2026-12-10",
        shipByDate2: "Week 50, December 2026",
        bankDetails: "State Bank of India (Forex Cell, Vizag)",
        showBank: "Yes",
        paymentTerms: "100% LC at Sight",
        shipmentTerms: "Full Container Load (FCL)",
        deliveryTerms: "CIF Houston Sea Port",
        quantityUnits: "Kilograms (Kg)",
        currency: "USD ($)",
        freight: "Freight Prepaid",
        chargeName: "Chassis & Demurrage Insurance",
        chargeAmount: 1800,
        noOfContainers: 1,
        referenceNumber: "REF-USF-2026-551",
        remarks: "Pre-shipment microbiology report to be emailed before vessel sailing.",
        status: "DRAFT"
      }
    ],

    customInvoices: [
      {
        id: "CI-001",
        invoiceNo: "CI-EXP-2026-441",
        invoiceDate: "2026-10-14",
        poNo: "PO-RL-8821",
        buyer: "Red Lobster Supply Chain LLC",
        pInvoiceNo: "PI-2026-901",
        stockStatus: "ALLOCATED",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        consignee: "Red Lobster Supply Chain LLC",
        country: "United States",
        billsType: "Duty Drawback",
        shippingBillRef: "SB-2026-88401",
        iecCode: "0391004812",
        loadingPort: "Visakhapatnam Sea (INVTZ)",
        dischargePort: "Long Beach Port, USA",
        netWeightKg: 18000,
        grossWeightKg: 19440,
        fobValueUsd: 153000,
        cifValueUsd: 163800,
        customsStatus: "LEO_GRANTED",
        lineItems: [
          {
            id: 1,
            variety: "Vannamei Shrimp HLSO IQF",
            grade: "26/30",
            packingStyle: "10x1 Kg Printed Bags",
            treatment: "Non-Treated",
            freezingType: "IQF",
            brand: "Devi Gold",
            mcs: 1200,
            traysQty: 2400,
            unitPriceBags: 8.85,
            ddpPrice: 9.45,
            amountUsd: 106200,
            cups: 240,
            cupsPriceBags: 0.65,
            code: "PRD-VAN-2630",
            fullName: "Frozen Raw Headless Shell-On White Shrimp 26/30",
            description: "Individually Quick Frozen, 10x1kg bags per master carton",
            buyerDescription: "Custom retail branded packing with UPC barcode"
          },
          {
            id: 2,
            variety: "Vannamei Cooked Tail-On IQF",
            grade: "31/40",
            packingStyle: "10x1 Kg Retail Pouch",
            treatment: "STPP Treated",
            freezingType: "IQF",
            brand: "Ocean Pearl",
            mcs: 600,
            traysQty: 1200,
            unitPriceBags: 9.60,
            ddpPrice: 10.20,
            amountUsd: 57600,
            cups: 120,
            cupsPriceBags: 0.70,
            code: "PRD-CKD-3140",
            fullName: "Cooked Peeled Tail-On White Shrimp 31/40",
            description: "Blanched / Cooked IQF, ready to eat",
            buyerDescription: "Foodservice label pack"
          }
        ]
      },
      {
        id: "CI-002",
        invoiceNo: "CI-EXP-2026-112",
        invoiceDate: "2026-10-10",
        poNo: "PO-MN-4402",
        buyer: "Maruha Nichiro Corporation",
        pInvoiceNo: "PI-2026-902",
        stockStatus: "DISPATCHED_TO_PORT",
        year: "2026-2027",
        exporter: "Devi Sea Foods Ltd",
        consignee: "Maruha Nichiro Corporation",
        country: "Japan",
        billsType: "Advance Authorization",
        shippingBillRef: "SB-2026-88390",
        iecCode: "0391004812",
        loadingPort: "Visakhapatnam Sea (INVTZ)",
        dischargePort: "Tokyo Port, Japan",
        netWeightKg: 14000,
        grossWeightKg: 15120,
        fobValueUsd: 194880,
        cifValueUsd: 203000,
        customsStatus: "ASSESSED_CLEARED",
        lineItems: [
          {
            id: 1,
            variety: "Black Tiger HOSO Semi-IQF",
            grade: "16/20",
            packingStyle: "6x2 Kg Blocks",
            treatment: "Non-Treated",
            freezingType: "Semi-IQF",
            brand: "Devi Diamond",
            mcs: 1400,
            traysQty: 2800,
            unitPriceBags: 14.50,
            ddpPrice: 15.20,
            amountUsd: 203000,
            cups: 200,
            cupsPriceBags: 0.85,
            code: "PRD-BT-1620",
            fullName: "Black Tiger Head-On Shell-On Shrimp 16/20",
            description: "6x2kg inner cartons, semi-IQF blast frozen",
            buyerDescription: "Japanese sashimi grade packaging"
          }
        ]
      },
      {
        id: "CI-003",
        invoiceNo: "CI-EXP-2026-079",
        invoiceDate: "2026-10-22",
        poNo: "PO-RG-9011",
        buyer: "Royal Greenland Seafood A/S",
        pInvoiceNo: "PI-2026-903",
        stockStatus: "IN_TRANSIT",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        consignee: "Royal Greenland Seafood A/S",
        country: "Netherlands",
        billsType: "RoDTEP Scheme",
        shippingBillRef: "SB-2026-88455",
        iecCode: "0391004812",
        loadingPort: "Visakhapatnam Sea (INVTZ)",
        dischargePort: "Rotterdam Port, Netherlands",
        netWeightKg: 12000,
        grossWeightKg: 12960,
        fobValueUsd: 128000,
        cifValueUsd: 134400,
        customsStatus: "UNDER_EXAMINATION",
        lineItems: [
          {
            id: 1,
            variety: "Vannamei PDTO IQF",
            grade: "21/25",
            packingStyle: "10x1 Kg Printed Bags",
            treatment: "Citric Acid Treated",
            freezingType: "IQF",
            brand: "Devi Royal",
            mcs: 1200,
            traysQty: 2400,
            unitPriceBags: 11.20,
            ddpPrice: 11.90,
            amountUsd: 134400,
            cups: 180,
            cupsPriceBags: 0.70,
            code: "PRD-PDTO-2125",
            fullName: "Peeled Deveined Tail-On White Shrimp 21/25",
            description: "Individually Quick Frozen, European master carton",
            buyerDescription: "EU compliant retail packaging"
          }
        ]
      },
      {
        id: "CI-004",
        invoiceNo: "CI-EXP-2026-448",
        invoiceDate: "2026-10-26",
        poNo: "PO-SYS-3319",
        buyer: "Sysco Corporation International",
        pInvoiceNo: "PI-2026-904",
        stockStatus: "PORT_CLEARED",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        consignee: "Sysco Corporation International",
        country: "United States",
        billsType: "Duty Drawback",
        shippingBillRef: "SB-2026-88490",
        iecCode: "0391004812",
        loadingPort: "Visakhapatnam Sea (INVTZ)",
        dischargePort: "New York Terminal, USA",
        netWeightKg: 20000,
        grossWeightKg: 21600,
        fobValueUsd: 202750,
        cifValueUsd: 211200,
        customsStatus: "LEO_GRANTED",
        lineItems: [
          {
            id: 1,
            variety: "Vannamei Easy Peel IQF",
            grade: "26/30",
            packingStyle: "10x1 Kg Printed Bags",
            treatment: "Non-Treated",
            freezingType: "IQF",
            brand: "Devi Chef",
            mcs: 1500,
            traysQty: 3000,
            unitPriceBags: 9.20,
            ddpPrice: 9.80,
            amountUsd: 138000,
            cups: 250,
            cupsPriceBags: 0.60,
            code: "PRD-EZP-2630",
            fullName: "Easy Peel Split Back White Shrimp 26/30",
            description: "Deep cut easy peel raw shrimp",
            buyerDescription: "Sysco Imperial brand specs"
          },
          {
            id: 2,
            variety: "Asian Seabass Fillet IQF",
            grade: "200/300g",
            packingStyle: "Bulk 10 Kg Master",
            treatment: "Non-Treated",
            freezingType: "IQF",
            brand: "Ocean Harvest",
            mcs: 500,
            traysQty: 1000,
            unitPriceBags: 14.64,
            ddpPrice: 15.30,
            amountUsd: 73200,
            cups: 100,
            cupsPriceBags: 0.80,
            code: "PRD-FS-SB200",
            fullName: "Barramundi / Asian Seabass Fillet Skin-On",
            description: "Individually wrapped skin-on scale-off fillets",
            buyerDescription: "White tablecloth restaurant pack"
          }
        ]
      },
      {
        id: "CI-005",
        invoiceNo: "CI-EXP-2026-502",
        invoiceDate: "2026-10-29",
        poNo: "PO-USF-2210",
        buyer: "US Foods Trading Co",
        pInvoiceNo: "PI-2026-905",
        stockStatus: "WAREHOUSE_STAGED",
        year: "2025-2026",
        exporter: "Devi Sea Foods Ltd",
        consignee: "US Foods Trading Co",
        country: "United States",
        billsType: "EPCG Scheme",
        shippingBillRef: "SB-2026-88512",
        iecCode: "0391004812",
        loadingPort: "Visakhapatnam Sea (INVTZ)",
        dischargePort: "Houston Sea Port, USA",
        netWeightKg: 16500,
        grossWeightKg: 17820,
        fobValueUsd: 156816,
        cifValueUsd: 163350,
        customsStatus: "DRAFT_REGISTERED",
        lineItems: [
          {
            id: 1,
            variety: "Vannamei Shrimp HLSO IQF",
            grade: "31/40",
            packingStyle: "10x1 Kg Printed Bags",
            treatment: "Non-Treated",
            freezingType: "IQF",
            brand: "Devi Gold",
            mcs: 1100,
            traysQty: 2200,
            unitPriceBags: 9.50,
            ddpPrice: 10.10,
            amountUsd: 104500,
            cups: 150,
            cupsPriceBags: 0.65,
            code: "PRD-VAN-3140",
            fullName: "Headless Shell-On White Shrimp 31/40",
            description: "10x1kg bags per master carton",
            buyerDescription: "US Foods Harbour Banks label"
          },
          {
            id: 2,
            variety: "Vannamei Cooked Tail-On IQF",
            grade: "41/50",
            packingStyle: "10x1 Kg Retail Pouch",
            treatment: "STPP Treated",
            freezingType: "IQF",
            brand: "Ocean Pearl",
            mcs: 550,
            traysQty: 1100,
            unitPriceBags: 10.70,
            ddpPrice: 11.40,
            amountUsd: 58850,
            cups: 110,
            cupsPriceBags: 0.75,
            code: "PRD-CKD-4150",
            fullName: "Cooked Tail-On Shrimp 41/50",
            description: "Fully cooked thaw & serve shrimp",
            buyerDescription: "Deli counter display pack"
          }
        ]
      }
    ],

    isfDetails: [
      {
        id: "ISF-001",
        pInvoiceNo: "PI-2026-901",
        invoiceNo: "CI-EXP-2026-441",
        invoiceDate: "2026-10-14",
        poNo: "PO-RL-8821",
        buyer: "Red Lobster Supply Chain LLC",
        consignee: "Red Lobster Supply Chain LLC",
        status: "ISF_FILED",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        country: "United States",
        address: "450 S Orange Ave, Suite 800, Orlando, FL 32801, USA",
        brand: "Devi Gold",
        isfTransactionNo: "ISF-TXN-2026-88401",
        shippingLine: "Ocean Network Express (ONE)",
        containerNumber: "ONEU-440912-8",
        linerSealNumber: "ONE-SL-994012",
        blNumber: "ONEYMAA261014",
        blDate: "2026-10-14",
        shippingOnboardDate: "2026-10-16",
        stuffingLocation: "Devi Fisheries Cold Storage CFS, Visakhapatnam (Plant 1)",
        dateOfLoading: "2026-10-15",
        sizeAndType: "40ft High Cube Reefer (40HR)",
        stowPosition: "BAY 14 / ROW 06 / TIER 82",
        sdd: "2026-11-28",
        byRoad: "Intermodal Reefer Trucking LLC",
        byRoadDate: "2026-10-15",
        temperatureOfRecord: "-18.5°C continuous recorder verified",
        sealTime: "14:30 IST / High-Security Bolt Seal Affixed",
        consolidator: "Expeditors International / Devi Logistics Hub",
        nameOfRepresentative: "R. K. Sharma (Customs Broker Reg: CHB-8420)",
        transshipments: [
          {
            departurePort: "Visakhapatnam (INVTZ)",
            arrivalPort: "Singapore Port (SGSIN)",
            departureDate: "2026-10-16",
            arrivalDate: "2026-10-22",
            vesselName: "M/V X-PRESS BARKLY",
            voyNo: "V.024W"
          },
          {
            departurePort: "Singapore Port (SGSIN)",
            arrivalPort: "Long Beach Port, USA",
            departureDate: "2026-10-24",
            arrivalDate: "2026-11-15",
            vesselName: "M/V ONE HARMONY",
            voyNo: "V.082E"
          }
        ]
      },
      {
        id: "ISF-002",
        pInvoiceNo: "PI-2026-904",
        invoiceNo: "CI-EXP-2026-448",
        invoiceDate: "2026-10-26",
        poNo: "PO-SYS-3319",
        buyer: "Sysco Corporation International",
        consignee: "Sysco Corporation International",
        status: "ACCEPTED_TIMELY",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        country: "United States",
        address: "1390 Enclave Pkwy, Houston, TX 77077, USA",
        brand: "Devi Chef",
        isfTransactionNo: "ISF-TXN-2026-88490",
        shippingLine: "Hapag-Lloyd Line",
        containerNumber: "HLCU-883012-9",
        linerSealNumber: "HL-SL-22104",
        blNumber: "HLCUBL261026",
        blDate: "2026-10-26",
        shippingOnboardDate: "2026-10-28",
        stuffingLocation: "Devi Fisheries JPT Unit-5 CFS, Andhra Pradesh",
        dateOfLoading: "2026-10-27",
        sizeAndType: "40ft High Cube Reefer (40HR)",
        stowPosition: "BAY 22 / ROW 04 / TIER 84",
        sdd: "2026-12-05",
        byRoad: "Southern Express Transport",
        byRoadDate: "2026-10-27",
        temperatureOfRecord: "-19.0°C / -2.2°F automated log",
        sealTime: "16:00 IST / Green Bolt Seal Verified",
        consolidator: "Kuehne + Nagel Logistics Vizag",
        nameOfRepresentative: "P. Venkat Rao (Authorized CHA: VIZ-CHA-019)",
        transshipments: [
          {
            departurePort: "Visakhapatnam (INVTZ)",
            arrivalPort: "Colombo Sea Port (LKCMB)",
            departureDate: "2026-10-28",
            arrivalDate: "2026-11-01",
            vesselName: "M/V FEEDER VIZAG",
            voyNo: "V.112S"
          },
          {
            departurePort: "Colombo Sea Port (LKCMB)",
            arrivalPort: "New York Terminal, USA",
            departureDate: "2026-11-03",
            arrivalDate: "2026-11-26",
            vesselName: "M/V FRANKFURT EXPRESS",
            voyNo: "V.014W"
          }
        ]
      },
      {
        id: "ISF-003",
        pInvoiceNo: "PI-2026-905",
        invoiceNo: "CI-EXP-2026-502",
        invoiceDate: "2026-10-29",
        poNo: "PO-USF-2210",
        buyer: "US Foods Trading Co",
        consignee: "US Foods Trading Co",
        status: "PENDING_FILING",
        year: "2025-2026",
        exporter: "Devi Sea Foods Ltd",
        country: "United States",
        address: "9399 W Higgins Rd, Rosemont, IL 60018, USA",
        brand: "Ocean Pearl",
        isfTransactionNo: "ISF-TXN-2026-88512",
        shippingLine: "Maersk Line",
        containerNumber: "MSKU-992104-5",
        linerSealNumber: "MSK-SL-55102",
        blNumber: "MAEU26102911",
        blDate: "2026-10-29",
        shippingOnboardDate: "2026-10-31",
        stuffingLocation: "Devi Sea Foods Plant-2 CFS, Singarayakonda",
        dateOfLoading: "2026-10-30",
        sizeAndType: "40ft High Cube Reefer (40HR)",
        stowPosition: "BAY 18 / ROW 02 / TIER 80",
        sdd: "2026-12-12",
        byRoad: "Andhra State Cold Haulage",
        byRoadDate: "2026-10-30",
        temperatureOfRecord: "-18.2°C Continuous Sensor",
        sealTime: "11:15 IST / Dual Customs Seal",
        consolidator: "DB Schenker India Private Limited",
        nameOfRepresentative: "M. Suresh (CHA Registration: IND-8812)",
        transshipments: []
      },
      {
        id: "ISF-004",
        pInvoiceNo: "PI-2026-902",
        invoiceNo: "CI-EXP-2026-112",
        invoiceDate: "2026-10-10",
        poNo: "PO-MN-4402",
        buyer: "Maruha Nichiro Corporation",
        consignee: "Maruha Nichiro Corporation",
        status: "DRAFT",
        year: "2026-2027",
        exporter: "Devi Sea Foods Ltd",
        country: "Japan",
        address: "Toyosu Central Bldg, Koto-ku, Tokyo, Japan",
        brand: "Devi Diamond",
        isfTransactionNo: "ISF-TXN-2026-88390",
        shippingLine: "Ocean Network Express (ONE)",
        containerNumber: "TGHU-332014-2",
        linerSealNumber: "ONE-SL-88102",
        blNumber: "ONEYTYO261010",
        blDate: "2026-10-10",
        shippingOnboardDate: "2026-10-12",
        stuffingLocation: "Devi Sea Foods Vizag Plant CFS",
        dateOfLoading: "2026-10-11",
        sizeAndType: "40ft High Cube Reefer (40HR)",
        stowPosition: "BAY 08 / ROW 04 / TIER 82",
        sdd: "2026-11-18",
        byRoad: "Coastal Line Haul",
        byRoadDate: "2026-10-11",
        temperatureOfRecord: "-22.0°C Sashimi Deep Frozen",
        sealTime: "10:00 IST Verified",
        consolidator: "Nippon Express Logistics",
        nameOfRepresentative: "T. Narayana (CHA Reg: VIZ-0041)",
        transshipments: []
      },
      {
        id: "ISF-005",
        pInvoiceNo: "PI-2026-903",
        invoiceNo: "CI-EXP-2026-079",
        invoiceDate: "2026-10-22",
        poNo: "PO-RG-9011",
        buyer: "Royal Greenland Seafood A/S",
        consignee: "Royal Greenland Seafood A/S",
        status: "PENDING_FILING",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        country: "Netherlands",
        address: "Hellebarden 7, 9230 Svenstrup J, Denmark / Rotterdam Hub",
        brand: "Devi Royal",
        isfTransactionNo: "ISF-TXN-2026-88455",
        shippingLine: "MSC Mediterranean Shipping Co.",
        containerNumber: "MSCU-774012-3",
        linerSealNumber: "MSC-SL-90124",
        blNumber: "MSCRTM261022",
        blDate: "2026-10-22",
        shippingOnboardDate: "2026-10-24",
        stuffingLocation: "Devi Fisheries CFS Unit-1 Vizag",
        dateOfLoading: "2026-10-23",
        sizeAndType: "40ft High Cube Reefer (40HR)",
        stowPosition: "BAY 12 / ROW 08 / TIER 84",
        sdd: "2026-11-25",
        byRoad: "All-Cargo Logistics Trucking",
        byRoadDate: "2026-10-23",
        temperatureOfRecord: "-18.0°C Data Logged",
        sealTime: "15:45 IST",
        consolidator: "Seaways Global Logistics Ltd",
        nameOfRepresentative: "V. Ramana (CHA Reg: VIZ-0298)",
        transshipments: []
      }
    ],

    shippingBills: [
      {
        id: "SB-001",
        invNo: "CI-EXP-2026-501",
        poNo: "PO-RL-8821",
        consigneeName: "Red Lobster Supply Chain LLC",
        shippingBillNo: "SB-2026-88401",
        invoiceStatus: "LEO_GRANTED",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        plant: "Plant 1 - Singarayakonda",
        country: "United States",
        invoiceNo: "CI-EXP-2026-501",
        invoiceDate: "2026-10-15",
        consignee: "Red Lobster Supply Chain LLC",
        portOfLoading: "Visakhapatnam Sea Port (INVTZ)",
        portOfDischarge: "Port of Los Angeles (USLAX)",
        countryOfDestination: "United States",
        totalCartons: 1800,
        netWeightKg: 21600.00,
        invoiceValue: 154200.00,
        freight: 4800.00,
        otherDeductions: 250.00,
        fobInr: 12603175.00,
        shippingDate: "2026-10-18",
        leoDate: "2026-10-16",
        exchangeRate: 84.50,
        sbFobUsd: 149150.00,
        sbFobInr: 12603175.00
      },
      {
        id: "SB-002",
        invNo: "CI-EXP-2026-502",
        poNo: "PO-MN-9942",
        consigneeName: "Maruha Nichiro Corporation",
        shippingBillNo: "SB-2026-88390",
        invoiceStatus: "LEO_GRANTED",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        plant: "Plant 2 - Ramatheertham",
        country: "Japan",
        invoiceNo: "CI-EXP-2026-502",
        invoiceDate: "2026-10-11",
        consignee: "Maruha Nichiro Corporation",
        portOfLoading: "Visakhapatnam Sea Port (INVTZ)",
        portOfDischarge: "Tokyo Port (JPTYO)",
        countryOfDestination: "Japan",
        totalCartons: 2200,
        netWeightKg: 26400.00,
        invoiceValue: 205600.00,
        freight: 5000.00,
        otherDeductions: 300.00,
        fobInr: 16925350.00,
        shippingDate: "2026-10-14",
        leoDate: "2026-10-11",
        exchangeRate: 84.50,
        sbFobUsd: 200300.00,
        sbFobInr: 16925350.00
      },
      {
        id: "SB-003",
        invNo: "CI-EXP-2026-503",
        poNo: "PO-RG-7731",
        consigneeName: "Royal Greenland Seafood A/S",
        shippingBillNo: "SB-2026-88455",
        invoiceStatus: "CARTING_ORDER_ISSUED",
        year: "2026-2027",
        exporter: "Devi Sea Foods Ltd",
        plant: "Plant 3 - U-Puram",
        country: "Netherlands",
        invoiceNo: "CI-EXP-2026-503",
        invoiceDate: "2026-10-23",
        consignee: "Royal Greenland Seafood A/S",
        portOfLoading: "Visakhapatnam Sea Port (INVTZ)",
        portOfDischarge: "Rotterdam (NLRTM)",
        countryOfDestination: "Netherlands",
        totalCartons: 1500,
        netWeightKg: 18000.00,
        invoiceValue: 131500.00,
        freight: 4500.00,
        otherDeductions: 200.00,
        fobInr: 10714600.00,
        shippingDate: "2026-10-26",
        leoDate: "2026-10-25",
        exchangeRate: 84.50,
        sbFobUsd: 126800.00,
        sbFobInr: 10714600.00
      },
      {
        id: "SB-004",
        invNo: "CI-EXP-2026-504",
        poNo: "PO-SY-6620",
        consigneeName: "Sysco Corporation International",
        shippingBillNo: "SB-2026-88492",
        invoiceStatus: "LET_EXPORT_ORDER_ISSUED",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        plant: "Unit 4 - SEZ Processing Hub",
        country: "United States",
        invoiceNo: "CI-EXP-2026-504",
        invoiceDate: "2026-10-25",
        consignee: "Sysco Corporation International",
        portOfLoading: "Visakhapatnam Sea Port (INVTZ)",
        portOfDischarge: "Houston Port (USHOU)",
        countryOfDestination: "United States",
        totalCartons: 2000,
        netWeightKg: 24000.00,
        invoiceValue: 178000.00,
        freight: 5200.00,
        otherDeductions: 400.00,
        fobInr: 14567800.00,
        shippingDate: "2026-10-28",
        leoDate: "2026-10-27",
        exchangeRate: 84.50,
        sbFobUsd: 172400.00,
        sbFobInr: 14567800.00
      },
      {
        id: "SB-005",
        invNo: "CI-EXP-2026-505",
        poNo: "PO-UF-5511",
        consigneeName: "US Foods Trading Co",
        shippingBillNo: "SB-2026-88510",
        invoiceStatus: "PENDING_LEO",
        year: "2026-2027",
        exporter: "Devi Marine Processors",
        plant: "Plant 1 - Singarayakonda",
        country: "United States",
        invoiceNo: "CI-EXP-2026-505",
        invoiceDate: "2026-10-28",
        consignee: "US Foods Trading Co",
        portOfLoading: "Visakhapatnam Sea Port (INVTZ)",
        portOfDischarge: "New York Port (USNYC)",
        countryOfDestination: "United States",
        totalCartons: 1400,
        netWeightKg: 16800.00,
        invoiceValue: 122000.00,
        freight: 4200.00,
        otherDeductions: 150.00,
        fobInr: 9941425.00,
        shippingDate: "2026-10-31",
        leoDate: "2026-10-30",
        exchangeRate: 84.50,
        sbFobUsd: 117650.00,
        sbFobInr: 9941425.00
      }
    ],

    commercialInvoices: [
      {
        id: "CINV-001",
        pInvoiceNo: "PI-2026-901",
        invoiceNo: "CINV-EXP-2026-551",
        invoiceDate: "2026-10-16",
        poNo: "PO-RL-8821",
        buyer: "Red Lobster Supply Chain LLC",
        consignee: "Red Lobster Supply Chain LLC",
        status: "FINAL_SETTLED",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        country: "United States",
        destinationPort: "Port of Long Beach, USA",
        totalCartons: 1200,
        netWeightKg: 18000,
        grossWeightKg: 19440,
        totalValueUsd: 159300,
        blNumber: "ONE-VTZ-889021",
        bankReference: "SBI Overseas Branch Visakhapatnam",
        items: [
          {
            productDescription: "Frozen Raw Black Tiger Shrimp HLSO",
            specs: "Headless Shell-On, IQF, Block Frozen",
            packing: "10 x 2 kg Master Cartons",
            grade: "16/20",
            cartons: 600,
            codes: "LOT-BT-2026-901A",
            productionDate: "2026-09-25",
            bestBeforeDate: "2028-09-24"
          },
          {
            productDescription: "Frozen Vannamei White Shrimp PDTO",
            specs: "Peeled Deveined Tail-On, IQF",
            packing: "5 x 2 lbs Master Carton",
            grade: "26/30",
            cartons: 600,
            codes: "LOT-VN-2026-901B",
            productionDate: "2026-09-28",
            bestBeforeDate: "2028-09-27"
          }
        ]
      },
      {
        id: "CINV-002",
        pInvoiceNo: "PI-2026-902",
        invoiceNo: "CINV-EXP-2026-548",
        invoiceDate: "2026-10-12",
        poNo: "PO-MN-9942",
        buyer: "Maruha Nichiro Corporation",
        consignee: "Maruha Nichiro Corporation",
        status: "DOCS_SENT_TO_BUYER_BANK",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        country: "Japan",
        destinationPort: "Tokyo Port, Japan",
        totalCartons: 950,
        netWeightKg: 14000,
        grossWeightKg: 15120,
        totalValueUsd: 203000,
        blNumber: "MSK-VTZ-771902",
        bankReference: "Canara Bank Forex Cell Vizag",
        items: [
          {
            productDescription: "Frozen Cooked Vannamei Shrimp Ring",
            specs: "Cooked Tail-On Shrimp with Cocktail Sauce Tray",
            packing: "12 x 454g Retail Rings per Case",
            grade: "31/40",
            cartons: 950,
            codes: "LOT-JP-2026-112C",
            productionDate: "2026-09-20",
            bestBeforeDate: "2028-09-19"
          }
        ]
      },
      {
        id: "CINV-003",
        pInvoiceNo: "PI-2026-903",
        invoiceNo: "CINV-EXP-2026-555",
        invoiceDate: "2026-10-24",
        poNo: "PO-RG-7731",
        buyer: "Royal Greenland Seafood A/S",
        consignee: "Royal Greenland Seafood A/S",
        status: "DISPATCHED_DOCS_IN_BANK",
        year: "2026-2027",
        exporter: "Devi Sea Foods Ltd",
        country: "Netherlands",
        destinationPort: "Rotterdam Port, Netherlands",
        totalCartons: 1500,
        netWeightKg: 18000,
        grossWeightKg: 19500,
        totalValueUsd: 131500,
        blNumber: "CMA-VTZ-993012",
        bankReference: "HDFC Forex Corporate Branch Vizag",
        items: [
          {
            productDescription: "Frozen Raw Sea Tiger Head-On",
            specs: "HOSO Semi-IQF Quick Frozen",
            packing: "6 x 1.8 kg Waxed Carton",
            grade: "U/10",
            cartons: 750,
            codes: "LOT-EU-2026-301",
            productionDate: "2026-10-02",
            bestBeforeDate: "2028-10-01"
          },
          {
            productDescription: "Frozen Raw Vannamei Easy Peel",
            specs: "EZ-Peel Backsplit IQF",
            packing: "10 x 1 kg Polybag",
            grade: "21/25",
            cartons: 750,
            codes: "LOT-EU-2026-302",
            productionDate: "2026-10-05",
            bestBeforeDate: "2028-10-04"
          }
        ]
      },
      {
        id: "CINV-004",
        pInvoiceNo: "PI-2026-904",
        invoiceNo: "CINV-EXP-2026-560",
        invoiceDate: "2026-10-27",
        poNo: "PO-SY-6620",
        buyer: "Sysco Corporation International",
        consignee: "Sysco Corporation International",
        status: "PAYMENT_RECEIVED",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        country: "United States",
        destinationPort: "Houston Port, USA",
        totalCartons: 1800,
        netWeightKg: 21600,
        grossWeightKg: 23328,
        totalValueUsd: 178000,
        blNumber: "ONE-VTZ-992014",
        bankReference: "SBI Overseas Branch Visakhapatnam",
        items: [
          {
            productDescription: "Frozen Vannamei Shrimp PUD",
            specs: "Peeled Un-Deveined Block Frozen",
            packing: "6 x 1.8 kg Blocks",
            grade: "41/50",
            cartons: 1800,
            codes: "LOT-US-2026-440",
            productionDate: "2026-10-10",
            bestBeforeDate: "2028-10-09"
          }
        ]
      },
      {
        id: "CINV-005",
        pInvoiceNo: "PI-2026-905",
        invoiceNo: "CINV-EXP-2026-568",
        invoiceDate: "2026-10-29",
        poNo: "PO-UF-5511",
        buyer: "US Foods Trading Co",
        consignee: "US Foods Trading Co",
        status: "PENDING_SETTLEMENT",
        year: "2026-2027",
        exporter: "Devi Marine Processors",
        country: "United States",
        destinationPort: "New York Port, USA",
        totalCartons: 1400,
        netWeightKg: 16800,
        grossWeightKg: 18144,
        totalValueUsd: 122000,
        blNumber: "ONE-VTZ-995100",
        bankReference: "Axis Bank Forex Vizag",
        items: [
          {
            productDescription: "Frozen Raw White Shrimp Butterfly",
            specs: "Butterfly Cut Tail-On IQF",
            packing: "10 x 2 lbs Master Carton",
            grade: "16/20",
            cartons: 1400,
            codes: "LOT-US-2026-550",
            productionDate: "2026-10-15",
            bestBeforeDate: "2028-10-14"
          }
        ]
      }
    ],

    etaStatusList: [
      {
        id: "ETA-001",
        invNo: "CI-EXP-2026-501",
        buyer: "Red Lobster Supply Chain LLC",
        consignee: "Red Lobster Supply Chain LLC",
        poNo: "PO-RL-8821",
        product: "Vannamei White Shrimp HLSO",
        brand: "Devi Gold",
        mcs: 1800,
        blNo: "ONEYMAA261014",
        containerNo: "ONEU-440912-8",
        finalDestination: "Orlando, FL Cold Hub (USA)",
        onBoardDate: "2026-10-18",
        actualEta: "2026-11-12",
        etaFd: "2026-11-15",
        gateOutDate: "2026-11-14",
        entryNumber: "701-4491029-3",
        liner: "Ocean Network Express (ONE)",
        shippingLine: "Ocean Network Express (ONE)",
        deliveryTerms: "DDP",
        transitDays: "25 Days",
        transitDaysPerLiner: "28 Days (Scheduled)",
        isFda: "YES (CLEARED)",
        exporter: "Devi Fisheries Limited",
        plant: "Plant 1 - Singarayakonda",
        country: "United States",
        vesselName: "ONE CONTINUITY",
        voyNo: "V.082E",
        vesselPosition: "Pacific Crossing (Coordinates: 32.4° N, 168.2° W)",
        speedKnots: "18.4 kts",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Port of Los Angeles (USLAX)"
      },
      {
        id: "ETA-002",
        invNo: "CI-EXP-2026-502",
        buyer: "Maruha Nichiro Corporation",
        consignee: "Maruha Nichiro Corporation",
        poNo: "PO-MN-9942",
        product: "Cooked Vannamei Shrimp Ring",
        brand: "Bayfresh Premium",
        mcs: 2200,
        blNo: "MSKU2610129",
        containerNo: "MSKU-781023-4",
        finalDestination: "Tokyo Chiba Cold Depot (Japan)",
        onBoardDate: "2026-10-14",
        actualEta: "2026-10-29",
        etaFd: "2026-10-31",
        gateOutDate: "2026-10-30",
        entryNumber: "JP-TYO-992140",
        liner: "Maersk Line",
        shippingLine: "Maersk Line",
        deliveryTerms: "CIF",
        transitDays: "15 Days",
        transitDaysPerLiner: "16 Days (Scheduled)",
        isFda: "NOT APPLICABLE (MAFF JAPAN)",
        exporter: "Devi Fisheries Limited",
        plant: "Plant 2 - Ramatheertham",
        country: "Japan",
        vesselName: "MAERSK MC-KINNEY MOLLER",
        voyNo: "V.2410W",
        vesselPosition: "Tokyo Bay Outer Anchorage / Berthing",
        speedKnots: "0.2 kts (Anchored)",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Tokyo Port (JPTYO)"
      },
      {
        id: "ETA-003",
        invNo: "CI-EXP-2026-503",
        buyer: "Royal Greenland Seafood A/S",
        consignee: "Royal Greenland Seafood A/S",
        poNo: "PO-RG-7731",
        product: "Raw Sea Tiger Head-On (HOSO)",
        brand: "Volga River",
        mcs: 1500,
        blNo: "CMAU2610258",
        containerNo: "CMAU-552190-1",
        finalDestination: "Rotterdam Maasvlakte Hub (Netherlands)",
        onBoardDate: "2026-10-25",
        actualEta: "2026-11-28",
        etaFd: "2026-12-01",
        gateOutDate: "2026-11-30",
        entryNumber: "NL-RTM-883011-B",
        liner: "CMA CGM Logistics",
        shippingLine: "CMA CGM Logistics",
        deliveryTerms: "CFR",
        transitDays: "34 Days",
        transitDaysPerLiner: "35 Days (Scheduled)",
        isFda: "EU TRACES VET CLEARED",
        exporter: "Devi Sea Foods Ltd",
        plant: "Plant 3 - U-Puram",
        country: "Netherlands",
        vesselName: "CMA CGM JACQUES SAADE",
        voyNo: "V.110E",
        vesselPosition: "Suez Canal Transit Corridor",
        speedKnots: "12.8 kts",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Rotterdam (NLRTM)"
      },
      {
        id: "ETA-004",
        invNo: "CI-EXP-2026-504",
        buyer: "Sysco Corporation International",
        consignee: "Sysco Corporation International",
        poNo: "PO-SY-6620",
        product: "Vannamei Shrimp PUD Block",
        brand: "Devi Gold",
        mcs: 2000,
        blNo: "ONEYMAA261028",
        containerNo: "ONEU-661020-5",
        finalDestination: "Houston Distribution Center (USA)",
        onBoardDate: "2026-10-28",
        actualEta: "2026-11-22",
        etaFd: "2026-11-25",
        gateOutDate: "2026-11-24",
        entryNumber: "701-5529104-1",
        liner: "Ocean Network Express (ONE)",
        shippingLine: "Ocean Network Express (ONE)",
        deliveryTerms: "DDP",
        transitDays: "25 Days",
        transitDaysPerLiner: "26 Days (Scheduled)",
        isFda: "YES (CLEARED)",
        exporter: "Devi Fisheries Limited",
        plant: "Unit 4 - SEZ Processing Hub",
        country: "United States",
        vesselName: "ONE APUS",
        voyNo: "V.042W",
        vesselPosition: "Malacca Strait Outbound (Coordinates: 1.8° N, 102.5° E)",
        speedKnots: "19.1 kts",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Houston Port (USHOU)"
      },
      {
        id: "ETA-005",
        invNo: "CI-EXP-2026-505",
        buyer: "US Foods Trading Co",
        consignee: "US Foods Trading Co",
        poNo: "PO-UF-5511",
        product: "Raw White Shrimp Butterfly Tail-On",
        brand: "Devi Crown",
        mcs: 1400,
        blNo: "MSKU2610310",
        containerNo: "MSKU-339011-2",
        finalDestination: "Newark Cold Terminal (USA)",
        onBoardDate: "2026-10-31",
        actualEta: "2026-11-26",
        etaFd: "2026-11-29",
        gateOutDate: "2026-11-28",
        entryNumber: "701-8849201-9",
        liner: "Maersk Line",
        shippingLine: "Maersk Line",
        deliveryTerms: "DDP",
        transitDays: "26 Days",
        transitDaysPerLiner: "27 Days (Scheduled)",
        isFda: "PRIOR NOTICE ISSUED",
        exporter: "Devi Marine Processors",
        plant: "Plant 1 - Singarayakonda",
        country: "United States",
        vesselName: "MAERSK MC-KINNEY",
        voyNo: "V.992E",
        vesselPosition: "Bay of Bengal En Route Singapore Hub",
        speedKnots: "17.6 kts",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "New York Port (USNYC)"
      }
    ],

    fdaStatusList: [
      {
        id: "FDA-001",
        invNo: "CI-EXP-2026-501",
        invoiceNo: "CI-EXP-2026-501",
        invoiceDate: "2026-10-15",
        poNo: "PO-RL-8821",
        buyer: "Red Lobster Supply Chain LLC",
        consignee: "Red Lobster Supply Chain LLC",
        shippingBillNo: "SB-2026-88401",
        status: "GREEN_LIST_SATISFIED",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        country: "United States",
        countryOfDestination: "United States",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Port of Los Angeles (USLAX)",
        containerNumber: "ONEU-440912-8",
        blNumber: "ONEYMAA261014",
        totalCartons: 1800,
        netWeightKg: 21600.00,
        invoiceValue: 154200.00,
        freight: 4800.00,
        otherDeductions: 250.00,
        fobInr: 12603175.00,
        containerGateOutDate: "2026-11-14",
        emptyContainerReturnDate: "2026-11-18",
        entryNumberEmptyContainer: "EC-LAX-449102",
        fdaEuHoldDate: "2026-11-12",
        fdaEuReleaseCfiaDate: "2026-11-13",
        fdaEntryNumber: "701-4491029-3",
        fdaEntryDate: "2026-11-11",
        fdaExam: "NO EXAM REQUIRED (GREEN LIST EXEMPT)",
        sampleCollectionDate: "2026-11-12",
        sampleReceivedDate: "2026-11-13",
        remarks: "Green List exempt under Import Alert 16-131. Facility FCI: 3004812 verified.",
        notes: "Prior notice PNC-FDA-2026-789 confirmed electronically without hold.",
        noticeDate1: "2026-10-18",
        noticeDate2: "2026-11-11",
        noticeDate3: "2026-11-12",
        noticeDate4: "2026-11-13"
      },
      {
        id: "FDA-002",
        invNo: "CI-EXP-2026-502",
        invoiceNo: "CI-EXP-2026-502",
        invoiceDate: "2026-10-11",
        poNo: "PO-MN-9942",
        buyer: "Maruha Nichiro Corporation",
        consignee: "Maruha Nichiro Corporation",
        shippingBillNo: "SB-2026-88390",
        status: "ADMITTED_NO_HOLD",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        country: "Japan",
        countryOfDestination: "Japan",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Tokyo Port (JPTYO)",
        containerNumber: "MSKU-781023-4",
        blNumber: "MSKU2610129",
        totalCartons: 2200,
        netWeightKg: 26400.00,
        invoiceValue: 205600.00,
        freight: 5000.00,
        otherDeductions: 300.00,
        fobInr: 16925350.00,
        containerGateOutDate: "2026-10-30",
        emptyContainerReturnDate: "2026-11-04",
        entryNumberEmptyContainer: "EC-TYO-991203",
        fdaEuHoldDate: "",
        fdaEuReleaseCfiaDate: "2026-10-30",
        fdaEntryNumber: "JP-MAFF-2026-9940",
        fdaEntryDate: "2026-10-28",
        fdaExam: "DOCUMENTATION AUDIT SATISFIED",
        sampleCollectionDate: "",
        sampleReceivedDate: "",
        remarks: "Health certificate and microbiological clearance verified by quarantine.",
        notes: "Routine quarantine clearance completed with zero deviation.",
        noticeDate1: "2026-10-14",
        noticeDate2: "2026-10-28",
        noticeDate3: "2026-10-29",
        noticeDate4: "2026-10-30"
      },
      {
        id: "FDA-003",
        invNo: "CI-EXP-2026-503",
        invoiceNo: "CI-EXP-2026-503",
        invoiceDate: "2026-10-23",
        poNo: "PO-RG-7731",
        buyer: "Royal Greenland Seafood A/S",
        consignee: "Royal Greenland Seafood A/S",
        shippingBillNo: "SB-2026-88455",
        status: "GREEN_LIST_SATISFIED",
        year: "2026-2027",
        exporter: "Devi Sea Foods Ltd",
        country: "Netherlands",
        countryOfDestination: "Netherlands",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Rotterdam (NLRTM)",
        containerNumber: "CMAU-552190-1",
        blNumber: "CMAU2610258",
        totalCartons: 1500,
        netWeightKg: 18000.00,
        invoiceValue: 131500.00,
        freight: 4500.00,
        otherDeductions: 200.00,
        fobInr: 10714600.00,
        containerGateOutDate: "2026-11-30",
        emptyContainerReturnDate: "2026-12-04",
        entryNumberEmptyContainer: "EC-RTM-331902",
        fdaEuHoldDate: "2026-11-28",
        fdaEuReleaseCfiaDate: "2026-11-29",
        fdaEntryNumber: "NL-TRACES-2026-881",
        fdaEntryDate: "2026-11-27",
        fdaExam: "EU TRACES VET INSPECTION SATISFIED",
        sampleCollectionDate: "2026-11-28",
        sampleReceivedDate: "2026-11-29",
        remarks: "TRACES NT Health certificate matched. Full release granted.",
        notes: "All organoleptic and sensory checks cleared at Rotterdam BIP.",
        noticeDate1: "2026-10-25",
        noticeDate2: "2026-11-26",
        noticeDate3: "2026-11-28",
        noticeDate4: "2026-11-29"
      },
      {
        id: "FDA-004",
        invNo: "CI-EXP-2026-504",
        invoiceNo: "CI-EXP-2026-504",
        invoiceDate: "2026-10-25",
        poNo: "PO-SY-6620",
        buyer: "Sysco Corporation International",
        consignee: "Sysco Corporation International",
        shippingBillNo: "SB-2026-88492",
        status: "ADMITTED_NO_HOLD",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        country: "United States",
        countryOfDestination: "United States",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Houston Port (USHOU)",
        containerNumber: "ONEU-661020-5",
        blNumber: "ONEYMAA261028",
        totalCartons: 2000,
        netWeightKg: 24000.00,
        invoiceValue: 178000.00,
        freight: 5200.00,
        otherDeductions: 400.00,
        fobInr: 14567800.00,
        containerGateOutDate: "2026-11-24",
        emptyContainerReturnDate: "2026-11-28",
        entryNumberEmptyContainer: "EC-HOU-551029",
        fdaEuHoldDate: "2026-11-22",
        fdaEuReleaseCfiaDate: "2026-11-23",
        fdaEntryNumber: "701-5529104-1",
        fdaEntryDate: "2026-11-20",
        fdaExam: "NO EXAM REQUIRED (HACCP CERTIFIED)",
        sampleCollectionDate: "",
        sampleReceivedDate: "",
        remarks: "Cooked shrimp processing plant FCI: 3004815 fully compliant.",
        notes: "Prior notice PNC-FDA-2026-795 accepted. Immediate customs release.",
        noticeDate1: "2026-10-28",
        noticeDate2: "2026-11-19",
        noticeDate3: "2026-11-21",
        noticeDate4: "2026-11-23"
      },
      {
        id: "FDA-005",
        invNo: "CI-EXP-2026-505",
        invoiceNo: "CI-EXP-2026-505",
        invoiceDate: "2026-10-28",
        poNo: "PO-UF-5511",
        buyer: "US Foods Trading Co",
        consignee: "US Foods Trading Co",
        shippingBillNo: "SB-2026-88510",
        status: "UNDER_REVIEW",
        year: "2026-2027",
        exporter: "Devi Marine Processors",
        country: "United States",
        countryOfDestination: "United States",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "New York Port (USNYC)",
        containerNumber: "MSKU-339011-2",
        blNumber: "MSKU2610310",
        totalCartons: 1400,
        netWeightKg: 16800.00,
        invoiceValue: 122000.00,
        freight: 4200.00,
        otherDeductions: 150.00,
        fobInr: 9941425.00,
        containerGateOutDate: "2026-11-28",
        emptyContainerReturnDate: "2026-12-02",
        entryNumberEmptyContainer: "EC-NYC-882019",
        fdaEuHoldDate: "2026-11-26",
        fdaEuReleaseCfiaDate: "",
        fdaEntryNumber: "701-8849201-9",
        fdaEntryDate: "2026-11-25",
        fdaExam: "DOCUMENT REVIEW IN PROGRESS",
        sampleCollectionDate: "2026-11-27",
        sampleReceivedDate: "2026-11-28",
        remarks: "Sample collected for antibiotic residue test (chloramphenicol/nitrofuran).",
        notes: "Awaiting final lab test results from FDA Northeast Regional Lab.",
        noticeDate1: "2026-10-31",
        noticeDate2: "2026-11-25",
        noticeDate3: "2026-11-26",
        noticeDate4: "2026-11-27"
      }
    ],

    clearingAgents: [
      {
        id: "CHA-ENT-2026-001",
        invNo: "CINV-EXP-2026-551",
        poNo: "PO-RL-8821",
        buyer: "Red Lobster Supply Chain LLC",
        consignee: "Red Lobster Supply Chain LLC",
        invDate: "2026-03-12",
        blNo: "MEDUST109284",
        containerNo: "MSKU-9821034",
        portOfDischarge: "Port of Los Angeles (USLAX)",
        notifyPartyName: "Pacific Seafood Logistics Inc",
        notifyParty: "Pacific Seafood Logistics Inc",
        entryNumber: "CUS-ENT-2026-90412",
        entryDate: "2026-03-28",
        status: "CLEARED_ADMITTED",
        cfCharges: 3250.00,
        adDuty: 0.00,
        hmDuty: 420.00,
        mpDuty: 310.00,
        cvDuty: 0.00,
        rtDuty: 180.00,
        invoiceValue: 148500.00,
        enteredInvoiceValue: 148500.00,
        total: 4160.00,
        grandTotal: 152660.00,
        moreTransactions: [
          { category: "Customs Clearance Charges", billNumber: "BILL-CUS-88210", billDate: "2026-03-28", billAmount: 1850.00 },
          { category: "Port & Handling Charges", billNumber: "BILL-PRT-44012", billDate: "2026-03-25", billAmount: 1400.00 }
        ]
      },
      {
        id: "CHA-ENT-2026-002",
        invNo: "CINV-EXP-2026-552",
        poNo: "PO-MN-4410",
        buyer: "Maruha Nichiro Corporation",
        consignee: "Maruha Nichiro Corporation",
        invDate: "2026-03-15",
        blNo: "ONEYMA290192",
        containerNo: "ONEU-4410923",
        portOfDischarge: "Port of Tokyo (JPTYO)",
        notifyPartyName: "Nippon Express Global Food",
        notifyParty: "Nippon Express Global Food",
        entryNumber: "CUS-ENT-2026-90413",
        entryDate: "2026-03-30",
        status: "DUTY_PAID_PENDING_RELEASE",
        cfCharges: 2800.00,
        adDuty: 0.00,
        hmDuty: 380.00,
        mpDuty: 260.00,
        cvDuty: 0.00,
        rtDuty: 150.00,
        invoiceValue: 124200.00,
        enteredInvoiceValue: 124200.00,
        total: 3590.00,
        grandTotal: 127790.00,
        moreTransactions: [
          { category: "Terminal Inspection Fee", billNumber: "BILL-TRM-99104", billDate: "2026-03-30", billAmount: 950.00 },
          { category: "Freight Forwarding Fee", billNumber: "BILL-FF-31024", billDate: "2026-03-28", billAmount: 1850.00 }
        ]
      },
      {
        id: "CHA-ENT-2026-003",
        invNo: "CINV-EXP-2026-553",
        poNo: "PO-RG-7729",
        buyer: "Royal Greenland Seafood A/S",
        consignee: "Royal Greenland Seafood A/S",
        invDate: "2026-03-18",
        blNo: "MAEU99201940",
        containerNo: "MNBU-8819203",
        portOfDischarge: "Port of Rotterdam (NLRTM)",
        notifyPartyName: "Scan-Shipping Rotterdam BV",
        notifyParty: "Scan-Shipping Rotterdam BV",
        entryNumber: "CUS-ENT-2026-90414",
        entryDate: "2026-04-02",
        status: "ASSESSMENT_IN_PROGRESS",
        cfCharges: 3600.00,
        adDuty: 1200.00,
        hmDuty: 450.00,
        mpDuty: 340.00,
        cvDuty: 0.00,
        rtDuty: 200.00,
        invoiceValue: 162000.00,
        enteredInvoiceValue: 162000.00,
        total: 5790.00,
        grandTotal: 167790.00,
        moreTransactions: [
          { category: "Reefer Monitoring Charges", billNumber: "BILL-RF-55102", billDate: "2026-03-22", billAmount: 1200.00 },
          { category: "Storage & Demurrage Charges", billNumber: "BILL-STM-10294", billDate: "2026-03-24", billAmount: 850.00 }
        ]
      },
      {
        id: "CHA-ENT-2026-004",
        invNo: "CINV-EXP-2026-554",
        poNo: "PO-SC-1102",
        buyer: "Sysco Corporation International",
        consignee: "Sysco Corporation International",
        invDate: "2026-03-20",
        blNo: "CMACGM881023",
        containerNo: "CMAU-1109234",
        portOfDischarge: "Port of New York / Newark (USNYC)",
        notifyPartyName: "Amethyst Global Cold Logistics",
        notifyParty: "Amethyst Global Cold Logistics",
        entryNumber: "CUS-ENT-2026-90415",
        entryDate: "2026-04-04",
        status: "CLEARED_ADMITTED",
        cfCharges: 3100.00,
        adDuty: 0.00,
        hmDuty: 410.00,
        mpDuty: 290.00,
        cvDuty: 0.00,
        rtDuty: 170.00,
        invoiceValue: 138000.00,
        enteredInvoiceValue: 138000.00,
        total: 3970.00,
        grandTotal: 141970.00,
        moreTransactions: [
          { category: "Documentation & Survey Fee", billNumber: "BILL-DOC-77192", billDate: "2026-03-26", billAmount: 650.00 },
          { category: "Customs Clearance Charges", billNumber: "BILL-CUS-88219", billDate: "2026-03-29", billAmount: 2100.00 }
        ]
      },
      {
        id: "CHA-ENT-2026-005",
        invNo: "CINV-EXP-2026-555",
        poNo: "PO-UF-9034",
        buyer: "US Foods Trading Co",
        consignee: "US Foods Trading Co",
        invDate: "2026-03-22",
        blNo: "HLCU90218402",
        containerNo: "HLXU-7720193",
        portOfDischarge: "Port of Long Beach (USLGB)",
        notifyPartyName: "Western States Reefer Brokers",
        notifyParty: "Western States Reefer Brokers",
        entryNumber: "CUS-ENT-2026-90416",
        entryDate: "2026-04-06",
        status: "CUSTOMS_HOLD_EXAM",
        cfCharges: 3400.00,
        adDuty: 0.00,
        hmDuty: 430.00,
        mpDuty: 320.00,
        cvDuty: 0.00,
        rtDuty: 190.00,
        invoiceValue: 155000.00,
        enteredInvoiceValue: 155000.00,
        total: 4340.00,
        grandTotal: 159340.00
      },
      {
        id: "CHA-ENT-2026-006",
        invNo: "CINV-EXP-2026-556",
        poNo: "PO-TI-6651",
        buyer: "Tai Foong USA Inc",
        consignee: "Tai Foong USA Inc",
        invDate: "2026-03-25",
        blNo: "MSCU88109231",
        containerNo: "MEDU-5510294",
        portOfDischarge: "Port of Oakland (USOAK)",
        notifyPartyName: "Harbor Intermodal Express LLC",
        notifyParty: "Harbor Intermodal Express LLC",
        entryNumber: "CUS-ENT-2026-90417",
        entryDate: "2026-04-08",
        status: "CLEARED_ADMITTED",
        cfCharges: 3150.00,
        adDuty: 0.00,
        hmDuty: 395.00,
        mpDuty: 285.00,
        cvDuty: 0.00,
        rtDuty: 165.00,
        invoiceValue: 141000.00,
        enteredInvoiceValue: 141000.00,
        total: 3995.00,
        grandTotal: 144995.00
      }
    ],

    // 3. Payments Submenu datasets
    forwardContracts: [
      {
        sNo: 1,
        id: 'FWD-2026-081',
        contractNo: 'FWD-2026-081',
        company: 'Devi Fisheries Limited',
        exporter: 'Devi Fisheries Limited',
        type: 'Export Hedge',
        year: '2026-2027',
        bookedDate: '15/10/2026',
        spotRate: 83.95,
        currentDate: '11/11/2026',
        diff: '+0.70',
        startDate: '15/10/2026',
        endDate: '31/12/2026',
        period: '77 Days',
        month: 'December 2026',
        premiumRate: 0.60,
        branchMargin: 0.10,
        totalRate: 84.65,
        bookedRate: 84.65,
        bookedValue: 250000,
        value: 250000,
        utilisation: 180000,
        utilizedValue: 180000,
        balanceUsd: 70000,
        balanceValue: 70000,
        status: 'ACTIVE_OPEN'
      },
      {
        sNo: 2,
        id: 'FWD-2026-082',
        contractNo: 'FWD-2026-082',
        company: 'Devi Sea Foods Ltd',
        exporter: 'Devi Sea Foods Ltd',
        type: 'Forward Sale Hedge',
        year: '2026-2027',
        bookedDate: '10/10/2026',
        spotRate: 84.05,
        currentDate: '11/11/2026',
        diff: '+0.73',
        startDate: '10/10/2026',
        endDate: '30/11/2026',
        period: '51 Days',
        month: 'November 2026',
        premiumRate: 0.62,
        branchMargin: 0.11,
        totalRate: 84.78,
        bookedRate: 84.78,
        bookedValue: 500000,
        value: 500000,
        utilisation: 500000,
        utilizedValue: 500000,
        balanceUsd: 0,
        balanceValue: 0,
        status: 'FULLY_UTILIZED'
      },
      {
        sNo: 3,
        id: 'FWD-2026-083',
        contractNo: 'FWD-2026-083',
        company: 'Devi Fisheries Limited',
        exporter: 'Devi Fisheries Limited',
        type: 'Export Hedge',
        year: '2026-2027',
        bookedDate: '20/10/2026',
        spotRate: 90.75,
        currentDate: '11/11/2026',
        diff: '+0.65',
        startDate: '20/10/2026',
        endDate: '31/01/2027',
        period: '103 Days',
        month: 'January 2027',
        premiumRate: 0.55,
        branchMargin: 0.10,
        totalRate: 91.40,
        bookedRate: 91.40,
        bookedValue: 150000,
        value: 150000,
        utilisation: 35000,
        utilizedValue: 35000,
        balanceUsd: 115000,
        balanceValue: 115000,
        status: 'ACTIVE_OPEN'
      },
      {
        sNo: 4,
        id: 'FWD-2026-084',
        contractNo: 'FWD-2026-084',
        company: 'Devi Aqua Feeds',
        exporter: 'Devi Aqua Feeds',
        type: 'Import Coverage',
        year: '2026-2027',
        bookedDate: '25/10/2026',
        spotRate: 84.20,
        currentDate: '11/11/2026',
        diff: '+0.72',
        startDate: '25/10/2026',
        endDate: '28/02/2027',
        period: '126 Days',
        month: 'February 2027',
        premiumRate: 0.62,
        branchMargin: 0.10,
        totalRate: 84.92,
        bookedRate: 84.92,
        bookedValue: 350000,
        value: 350000,
        utilisation: 0,
        utilizedValue: 0,
        balanceUsd: 350000,
        balanceValue: 350000,
        status: 'ACTIVE_OPEN'
      },
      {
        sNo: 5,
        id: 'FWD-2026-085',
        contractNo: 'FWD-2026-085',
        company: 'Devi Fisheries Limited',
        exporter: 'Devi Fisheries Limited',
        type: 'Export Hedge',
        year: '2026-2027',
        bookedDate: '01/11/2026',
        spotRate: 84.10,
        currentDate: '11/11/2026',
        diff: '+0.70',
        startDate: '01/11/2026',
        endDate: '31/03/2027',
        period: '150 Days',
        month: 'March 2027',
        premiumRate: 0.60,
        branchMargin: 0.10,
        totalRate: 84.80,
        bookedRate: 84.80,
        bookedValue: 400000,
        value: 400000,
        utilisation: 50000,
        utilizedValue: 50000,
        balanceUsd: 350000,
        balanceValue: 350000,
        status: 'ACTIVE_OPEN'
      }
    ],

    collections: [
      {
        id: "COL-2026-401",
        sNo: 1,
        collectionRef: "COL-2026-401",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        invNo: "INV-EXP-2026-301",
        invoiceNo: "INV-EXP-2026-301",
        poNo: "PO-USA-9921",
        contractNo: "SC-USA-2026-441",
        consigneeName: "Red Lobster Supply Chain LLC",
        buyerName: "Red Lobster Supply Chain LLC",
        country: "USA",
        bankRefNo: "BRN-CITI-88201",
        collectionBank: "Citibank N.A. New York (via SBI)",
        remittanceDate: "2026-10-22",
        currency: "USD",
        billAmount: 159300,
        amountCollected: 159300,
        bankCharges: 120,
        netReceived: 159180,
        settlementMode: "SWIFT Wire MT103",
        status: "RECEIVED_CREDITED",
        remarks: "Payment credited into EEFC USD account"
      },
      {
        id: "COL-2026-402",
        sNo: 2,
        collectionRef: "COL-2026-402",
        year: "2026-2027",
        exporter: "Devi Sea Foods Ltd",
        invNo: "INV-EXP-2026-302",
        invoiceNo: "INV-EXP-2026-302",
        poNo: "PO-JPN-4402",
        contractNo: "SC-JPN-2026-112",
        consigneeName: "Maruha Nichiro Corporation",
        buyerName: "Maruha Nichiro Corporation",
        country: "Japan",
        bankRefNo: "BRN-BOTM-55319",
        collectionBank: "Bank of Tokyo-Mitsubishi (via Canara)",
        remittanceDate: "2026-10-18",
        currency: "USD",
        billAmount: 203000,
        amountCollected: 60900,
        bankCharges: 95,
        netReceived: 60805,
        settlementMode: "CAD Advance SWIFT",
        status: "PARTIALLY_COLLECTED",
        remarks: "30% Advance CAD received via Tokyo"
      },
      {
        id: "COL-2026-403",
        sNo: 3,
        collectionRef: "COL-2026-403",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        invNo: "INV-EXP-2026-304",
        invoiceNo: "INV-EXP-2026-304",
        poNo: "PO-USA-9934",
        contractNo: "SC-USA-2026-448",
        consigneeName: "Sysco Corporation International",
        buyerName: "Sysco Corporation International",
        country: "USA",
        bankRefNo: "BRN-JPMC-90112",
        collectionBank: "JPMorgan Chase Bank (via SBI)",
        remittanceDate: "2026-10-28",
        currency: "USD",
        billAmount: 211200,
        amountCollected: 211200,
        bankCharges: 150,
        netReceived: 211050,
        settlementMode: "LC Negotiation Proceeds",
        status: "RECEIVED_CREDITED",
        remarks: "LC maturity proceeds credited"
      },
      {
        id: "COL-2026-404",
        sNo: 4,
        collectionRef: "COL-2026-404",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        invNo: "INV-EXP-2026-303",
        invoiceNo: "INV-EXP-2026-303",
        poNo: "PO-EU-8812",
        contractNo: "SC-EU-2026-079",
        consigneeName: "Royal Greenland Seafood A/S",
        buyerName: "Royal Greenland Seafood A/S",
        country: "Denmark",
        bankRefNo: "BRN-DNSK-33418",
        collectionBank: "Danske Bank Copenhagen (via HDFC)",
        remittanceDate: "2026-11-05",
        currency: "USD",
        billAmount: 134400,
        amountCollected: 0,
        bankCharges: 0,
        netReceived: 0,
        settlementMode: "LC at Sight under Maturity",
        status: "PENDING_COLLECTION",
        remarks: "Documents with negotiating bank"
      },
      {
        id: "COL-2026-405",
        sNo: 5,
        collectionRef: "COL-2026-405",
        year: "2025-2026",
        exporter: "Devi Aqua Feeds",
        invNo: "INV-EXP-2026-305",
        invoiceNo: "INV-EXP-2026-305",
        poNo: "PO-CAN-3310",
        contractNo: "SC-CAN-2026-022",
        consigneeName: "Ocean Prime Foods Canada",
        buyerName: "Ocean Prime Foods Canada",
        country: "Canada",
        bankRefNo: "BRN-RBC-77291",
        collectionBank: "Royal Bank of Canada (via SBI)",
        remittanceDate: "2026-11-08",
        currency: "USD",
        billAmount: 185000,
        amountCollected: 185000,
        bankCharges: 135,
        netReceived: 184865,
        settlementMode: "SWIFT Wire MT103",
        status: "RECEIVED_CREDITED",
        remarks: "Cleared and advice verified"
      },
      {
        id: "COL-2026-406",
        sNo: 6,
        collectionRef: "COL-2026-406",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        invNo: "INV-EXP-2026-306",
        invoiceNo: "INV-EXP-2026-306",
        poNo: "PO-ESP-7719",
        contractNo: "SC-ESP-2026-061",
        consigneeName: "Pescanova Espana S.A.",
        buyerName: "Pescanova Espana S.A.",
        country: "Spain",
        bankRefNo: "BRN-SAN-66102",
        collectionBank: "Banco Santander Madrid (via ICICI)",
        remittanceDate: "2026-11-10",
        currency: "USD",
        billAmount: 142000,
        amountCollected: 71000,
        bankCharges: 110,
        netReceived: 70890,
        settlementMode: "Direct TT Remittance",
        status: "PARTIALLY_COLLECTED",
        remarks: "Balance 50% due post arrival"
      }
    ],

    negotiations: [
      {
        id: "NEG-2026-192",
        sNo: 1,
        negotiationNo: "NEG-2026-192",
        lcNumber: "LC-CITI-US-991204",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        invNo: "INV-EXP-2026-551",
        invoiceNo: "INV-EXP-2026-551",
        poNo: "PO-USA-9912",
        contractNo: "SC-USA-2026-441",
        consigneeName: "Red Lobster Supply Chain LLC",
        buyerName: "Red Lobster Supply Chain LLC",
        country: "USA",
        bankRefNo: "BRN-CITI-99201",
        collectionBank: "State Bank of India (Forex Cell)",
        negotiatingBank: "State Bank of India (Forex Cell)",
        submissionDate: "2026-10-18",
        remittanceDate: "2026-10-22",
        blDate: "2026-10-10",
        etaPod: "2026-11-18",
        billValueUsd: 159300,
        billAmount: 159300,
        shortFall: 0,
        collectionRate: 84.65,
        dueDate: "2026-11-25",
        bankCharges: 150,
        otherDeductions: 0,
        extraAmount: 0,
        comments: "LC discounted & credited by SBI",
        remarks: "LC discounted & credited by SBI",
        discountRate: "SOFR + 1.25%",
        netFinancedUsd: 156820,
        tenorDays: "30 Days Sight",
        invoiceStatus: "Discounted & Credited",
        status: "Discounted & Credited",
        transactions: [
          {
            type: "Forward Contract",
            refNo: "FWD-2026-081",
            bankRefNo: "BRN-CITI-99201",
            utilizedValue: 159300,
            utilizedDate: "2026-10-22",
            rate: 84.65,
            utilizedInr: 13484745
          }
        ]
      },
      {
        id: "NEG-2026-193",
        sNo: 2,
        negotiationNo: "NEG-2026-193",
        lcNumber: "LC-CHASE-US-11029",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        invNo: "INV-EXP-2026-552",
        invoiceNo: "INV-EXP-2026-552",
        poNo: "PO-USA-9915",
        contractNo: "SC-USA-2026-448",
        consigneeName: "Sysco Corporation International",
        buyerName: "Sysco Corporation International",
        country: "USA",
        bankRefNo: "BRN-CHASE-11029",
        collectionBank: "State Bank of India (Forex Cell)",
        negotiatingBank: "State Bank of India (Forex Cell)",
        submissionDate: "2026-10-24",
        remittanceDate: "2026-10-28",
        blDate: "2026-10-16",
        etaPod: "2026-11-24",
        billValueUsd: 211200,
        billAmount: 211200,
        shortFall: 0,
        collectionRate: 84.40,
        dueDate: "2026-11-30",
        bankCharges: 180,
        otherDeductions: 0,
        extraAmount: 0,
        comments: "Documents lodged under clean LC",
        remarks: "Documents lodged under clean LC",
        discountRate: "SOFR + 1.20%",
        netFinancedUsd: 207915,
        tenorDays: "At Sight",
        invoiceStatus: "Clean Docs Accepted",
        status: "Clean Docs Accepted",
        transactions: [
          {
            type: "Spot Rate TT",
            refNo: "SPOT-CHASE-01",
            bankRefNo: "BRN-CHASE-11029",
            utilizedValue: 211200,
            utilizedDate: "2026-10-28",
            rate: 84.40,
            utilizedInr: 17825280
          }
        ]
      },
      {
        id: "NEG-2026-194",
        sNo: 3,
        negotiationNo: "NEG-2026-194",
        lcNumber: "LC-DAN-DK-331092",
        year: "2026-2027",
        exporter: "Devi Sea Foods Ltd",
        invNo: "INV-EXP-2026-549",
        invoiceNo: "INV-EXP-2026-549",
        poNo: "PO-DK-3310",
        contractNo: "SC-EU-2026-079",
        consigneeName: "Royal Greenland Seafood A/S",
        buyerName: "Royal Greenland Seafood A/S",
        country: "Denmark",
        bankRefNo: "BRN-HDFC-33109",
        collectionBank: "HDFC Bank Trade Finance",
        negotiatingBank: "HDFC Bank Trade Finance",
        submissionDate: "2026-10-27",
        remittanceDate: "2026-11-05",
        blDate: "2026-10-20",
        etaPod: "2026-11-28",
        billValueUsd: 134400,
        billAmount: 134400,
        shortFall: 0,
        collectionRate: 84.10,
        dueDate: "2026-12-05",
        bankCharges: 140,
        otherDeductions: 0,
        extraAmount: 0,
        comments: "Minor discrepancy waiver received",
        remarks: "Minor discrepancy waiver received",
        discountRate: "Fixed 6.25%",
        netFinancedUsd: 131880,
        tenorDays: "60 Days Sight",
        invoiceStatus: "Discrepant Under Waiver",
        status: "Discrepant Under Waiver",
        transactions: []
      },
      {
        id: "NEG-2026-195",
        sNo: 4,
        negotiationNo: "NEG-2026-195",
        lcNumber: "LC-BOTM-JP-77102",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        invNo: "INV-EXP-2026-555",
        invoiceNo: "INV-EXP-2026-555",
        poNo: "PO-JPN-7721",
        contractNo: "SC-JPN-2026-112",
        consigneeName: "Maruha Nichiro Corporation",
        buyerName: "Maruha Nichiro Corporation",
        country: "Japan",
        bankRefNo: "BRN-BOTM-88210",
        collectionBank: "Bank of Tokyo-Mitsubishi (via Canara)",
        negotiatingBank: "Canara Bank Forex Wing",
        submissionDate: "2026-11-02",
        remittanceDate: "2026-11-10",
        blDate: "2026-10-25",
        etaPod: "2026-12-02",
        billValueUsd: 203000,
        billAmount: 203000,
        shortFall: 0,
        collectionRate: 84.50,
        dueDate: "2026-12-10",
        bankCharges: 160,
        otherDeductions: 0,
        extraAmount: 0,
        comments: "Under preparation for bank submission",
        remarks: "Under preparation for bank submission",
        discountRate: "SOFR + 1.15%",
        netFinancedUsd: 199850,
        tenorDays: "At Sight",
        invoiceStatus: "Pending Lodgement",
        status: "Pending Lodgement",
        transactions: []
      },
      {
        id: "NEG-2026-196",
        sNo: 5,
        negotiationNo: "NEG-2026-196",
        lcNumber: "LC-RBC-CA-44912",
        year: "2025-2026",
        exporter: "Devi Aqua Feeds",
        invNo: "INV-EXP-2026-556",
        invoiceNo: "INV-EXP-2026-556",
        poNo: "PO-CAN-4412",
        contractNo: "SC-CAN-2026-022",
        consigneeName: "Ocean Prime Foods Canada",
        buyerName: "Ocean Prime Foods Canada",
        country: "Canada",
        bankRefNo: "BRN-RBC-44102",
        collectionBank: "Royal Bank of Canada (via SBI)",
        negotiatingBank: "State Bank of India (Forex Cell)",
        submissionDate: "2026-11-04",
        remittanceDate: "2026-11-12",
        blDate: "2026-10-28",
        etaPod: "2026-12-05",
        billValueUsd: 185000,
        billAmount: 185000,
        shortFall: 0,
        collectionRate: 84.30,
        dueDate: "2026-12-15",
        bankCharges: 145,
        otherDeductions: 0,
        extraAmount: 0,
        comments: "Clean presentation accepted",
        remarks: "Clean presentation accepted",
        discountRate: "SOFR + 1.20%",
        netFinancedUsd: 182100,
        tenorDays: "30 Days Sight",
        invoiceStatus: "Clean Docs Accepted",
        status: "Clean Docs Accepted",
        transactions: [
          {
            type: "LC Negotiation Proceeds",
            refNo: "LC-RBC-CA-44912",
            bankRefNo: "BRN-RBC-44102",
            utilizedValue: 185000,
            utilizedDate: "2026-11-12",
            rate: 84.30,
            utilizedInr: 15595500
          }
        ]
      },
      {
        id: "NEG-2026-197",
        sNo: 6,
        negotiationNo: "NEG-2026-197",
        lcNumber: "LC-SAN-ES-88319",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        invNo: "INV-EXP-2026-557",
        invoiceNo: "INV-EXP-2026-557",
        poNo: "PO-ESP-8819",
        contractNo: "SC-ESP-2026-061",
        consigneeName: "Pescanova Espana S.A.",
        buyerName: "Pescanova Espana S.A.",
        country: "Spain",
        bankRefNo: "BRN-SAN-99014",
        collectionBank: "Banco Santander Madrid (via ICICI)",
        negotiatingBank: "ICICI Bank Trade Desk",
        submissionDate: "2026-11-06",
        remittanceDate: "2026-11-14",
        blDate: "2026-10-30",
        etaPod: "2026-12-08",
        billValueUsd: 142000,
        billAmount: 142000,
        shortFall: 0,
        collectionRate: 84.20,
        dueDate: "2026-12-20",
        bankCharges: 130,
        otherDeductions: 0,
        extraAmount: 0,
        comments: "Discounted proceeds credited",
        remarks: "Discounted proceeds credited",
        discountRate: "EURIBOR + 1.30%",
        netFinancedUsd: 139800,
        tenorDays: "45 Days Sight",
        invoiceStatus: "Discounted & Credited",
        status: "Discounted & Credited",
        transactions: [
          {
            type: "Forward Contract",
            refNo: "FWD-2026-082",
            bankRefNo: "BRN-SAN-99014",
            utilizedValue: 142000,
            utilizedDate: "2026-11-14",
            rate: 84.20,
            utilizedInr: 11956400
          }
        ]
      }
    ],

    realizations: [
      {
        id: "REAL-2026-551",
        invoiceNo: "INV-EXP-2026-301",
        invoiceDate: "2026-02-18",
        transactionType: "Collection Advice",
        consigneeName: "Red Lobster Supply Chain LLC",
        buyerName: "Red Lobster Supply Chain LLC",
        exporter: "Devi Fisheries Limited",
        country: "USA",
        year: "2026-2027",
        bankRef: "SBI-COLL-2026-901",
        invoiceValue: 159300.00,
        realisedBalance: 0.00,
        bankCharges: 120.00,
        dueDate: "2026-05-18",
        bankRef1: "SBI-COLL-2026-901",
        realisedVal1: 100000.00,
        realisedDate1: "2026-02-25",
        bankRef2: "SBI-COLL-2026-902",
        realisedVal2: 59300.00,
        realisedDate2: "2026-03-02",
        bankRef3: "",
        realisedVal3: 0.00,
        realisedDate3: "",
        fbkCharges: 85.00,
        otherCharges: 25.00,
        status: "Full Realized",
        transactions: [
          {
            sNo: 1,
            type: "Forward Contract",
            refNo: "FWD-2026-7881",
            utilizedDate: "2026-02-25",
            utilizedValUsd: 100000.00,
            rate: 84.10,
            utilizedValInr: 8410000.00
          },
          {
            sNo: 2,
            type: "Spot Rate",
            refNo: "SPOT-2026-3021",
            utilizedDate: "2026-03-02",
            utilizedValUsd: 59300.00,
            rate: 83.95,
            utilizedValInr: 4978235.00
          }
        ]
      },
      {
        id: "REAL-2026-552",
        invoiceNo: "INV-EXP-2026-302",
        invoiceDate: "2026-02-20",
        transactionType: "Direct Bill Negotiation",
        consigneeName: "Maruha Nichiro Corporation",
        buyerName: "Maruha Nichiro Corporation",
        exporter: "Devi Fisheries Limited",
        country: "Japan",
        year: "2026-2027",
        bankRef: "HDFC-NEG-2026-102",
        invoiceValue: 203000.00,
        realisedBalance: 60900.00,
        bankCharges: 180.00,
        dueDate: "2026-05-20",
        bankRef1: "HDFC-NEG-2026-102",
        realisedVal1: 142100.00,
        realisedDate1: "2026-03-01",
        bankRef2: "",
        realisedVal2: 0.00,
        realisedDate2: "",
        bankRef3: "",
        realisedVal3: 0.00,
        realisedDate3: "",
        fbkCharges: 95.00,
        otherCharges: 30.00,
        status: "Partially Realized",
        transactions: [
          {
            sNo: 1,
            type: "Forward Contract",
            refNo: "FWD-2026-7882",
            utilizedDate: "2026-03-01",
            utilizedValUsd: 142100.00,
            rate: 84.20,
            utilizedValInr: 11964820.00
          }
        ]
      },
      {
        id: "REAL-2026-553",
        invoiceNo: "INV-EXP-2026-303",
        invoiceDate: "2026-02-24",
        transactionType: "Collection Advice",
        consigneeName: "Royal Greenland Seafood A/S",
        buyerName: "Royal Greenland Seafood A/S",
        exporter: "Devi Sea Foods Ltd",
        country: "Denmark",
        year: "2026-2027",
        bankRef: "CNB-COLL-2026-401",
        invoiceValue: 134400.00,
        realisedBalance: 134400.00,
        bankCharges: 110.00,
        dueDate: "2026-05-24",
        bankRef1: "",
        realisedVal1: 0.00,
        realisedDate1: "",
        bankRef2: "",
        realisedVal2: 0.00,
        realisedDate2: "",
        bankRef3: "",
        realisedVal3: 0.00,
        realisedDate3: "",
        fbkCharges: 0.00,
        otherCharges: 0.00,
        status: "Pending Realization",
        transactions: []
      },
      {
        id: "REAL-2026-554",
        invoiceNo: "INV-EXP-2026-304",
        invoiceDate: "2026-02-28",
        transactionType: "LC Settlement",
        consigneeName: "Ocean Prime Foods Canada",
        buyerName: "Ocean Prime Foods Canada",
        exporter: "Devi Fisheries Limited",
        country: "Canada",
        year: "2026-2027",
        bankRef: "SBI-LC-2026-881",
        invoiceValue: 185000.00,
        realisedBalance: 0.00,
        bankCharges: 210.00,
        dueDate: "2026-05-28",
        bankRef1: "SBI-LC-2026-881",
        realisedVal1: 185000.00,
        realisedDate1: "2026-03-05",
        bankRef2: "",
        realisedVal2: 0.00,
        realisedDate2: "",
        bankRef3: "",
        realisedVal3: 0.00,
        realisedDate3: "",
        fbkCharges: 110.00,
        otherCharges: 40.00,
        status: "Full Realized",
        transactions: [
          {
            sNo: 1,
            type: "LC Settlement",
            refNo: "LC-CAN-2026-09",
            utilizedDate: "2026-03-05",
            utilizedValUsd: 185000.00,
            rate: 84.05,
            utilizedValInr: 15549250.00
          }
        ]
      },
      {
        id: "REAL-2026-555",
        invoiceNo: "INV-EXP-2026-305",
        invoiceDate: "2026-03-01",
        transactionType: "Collection Advice",
        consigneeName: "Sysco Corporation International",
        buyerName: "Sysco Corporation International",
        exporter: "Devi Sea Foods Ltd",
        country: "USA",
        year: "2026-2027",
        bankRef: "BOB-COLL-2026-512",
        invoiceValue: 240000.00,
        realisedBalance: 120000.00,
        bankCharges: 200.00,
        dueDate: "2026-06-01",
        bankRef1: "BOB-COLL-2026-512",
        realisedVal1: 120000.00,
        realisedDate1: "2026-03-08",
        bankRef2: "",
        realisedVal2: 0.00,
        realisedDate2: "",
        bankRef3: "",
        realisedVal3: 0.00,
        realisedDate3: "",
        fbkCharges: 75.00,
        otherCharges: 20.00,
        status: "Partially Realized",
        transactions: [
          {
            sNo: 1,
            type: "Forward Contract",
            refNo: "FWD-2026-7885",
            utilizedDate: "2026-03-08",
            utilizedValUsd: 120000.00,
            rate: 84.15,
            utilizedValInr: 10098000.00
          }
        ]
      }
    ],

    realizationDone: [
      {
        id: "RD-2026-001",
        doneRef: "BRC-2026-10081",
        invoiceNo: "INV-EXP-2026-301",
        consignee: "Red Lobster Supply Chain LLC",
        buyerName: "Red Lobster Supply Chain LLC",
        country: "USA",
        exporter: "Devi Fisheries Limited",
        year: "2026-2027",
        billsType: "Collection",
        salesInvoiceDate: "2026-02-18",
        transactionType: "Collection Advice",
        totalInvoiceValue: 159300.00,
        realisedValue: 159300.00,
        dateOfDiscounting: "2026-02-22",
        bankRefNo1: "SBI-COLL-2026-901",
        dateOfReceipt1: "2026-02-25",
        amountOfReceipt1: 100000.00,
        bankRefNo2: "SBI-COLL-2026-902",
        dateOfReceipt2: "2026-03-02",
        amountOfReceipt2: 59300.00,
        bankRefNo3: "",
        dateOfReceipt3: "",
        amountOfReceipt3: 0.00,
        totalUtilizedValueUsd: 159300.00,
        totalUtilizedValueInr: 13388235.00,
        shortExcess: 0.00,
        bankCharges: 120.00,
        fbkCharges: 85.00,
        otherCharges: 25.00,
        remarks: "Full payment realized under SBI advice. e-BRC issued.",
        eBrcNumber: "eBRC-SBI-2026-99214",
        status: "CLOSED_RECONCILED"
      },
      {
        id: "RD-2026-002",
        doneRef: "BRC-2026-10082",
        invoiceNo: "INV-EXP-2026-302",
        consignee: "Maruha Nichiro Corporation",
        buyerName: "Maruha Nichiro Corporation",
        country: "Japan",
        exporter: "Devi Fisheries Limited",
        year: "2026-2027",
        billsType: "Direct Negotiation",
        salesInvoiceDate: "2026-02-20",
        transactionType: "Direct Bill Negotiation",
        totalInvoiceValue: 203000.00,
        realisedValue: 203000.00,
        dateOfDiscounting: "2026-02-24",
        bankRefNo1: "HDFC-NEG-2026-102",
        dateOfReceipt1: "2026-03-01",
        amountOfReceipt1: 142100.00,
        bankRefNo2: "HDFC-NEG-2026-108",
        dateOfReceipt2: "2026-03-10",
        amountOfReceipt2: 60900.00,
        bankRefNo3: "",
        dateOfReceipt3: "",
        amountOfReceipt3: 0.00,
        totalUtilizedValueUsd: 203000.00,
        totalUtilizedValueInr: 17092600.00,
        shortExcess: 0.00,
        bankCharges: 180.00,
        fbkCharges: 95.00,
        otherCharges: 30.00,
        remarks: "Discounted at HDFC Forex branch. Reconciled.",
        eBrcNumber: "eBRC-HDFC-2026-10244",
        status: "CLOSED_RECONCILED"
      },
      {
        id: "RD-2026-003",
        doneRef: "BRC-2026-10083",
        invoiceNo: "INV-EXP-2026-289",
        consignee: "Sysco Corporation International",
        buyerName: "Sysco Corporation International",
        country: "USA",
        exporter: "Devi Sea Foods Ltd",
        year: "2026-2027",
        billsType: "Collection",
        salesInvoiceDate: "2026-02-12",
        transactionType: "Collection Advice",
        totalInvoiceValue: 211200.00,
        realisedValue: 211150.00,
        dateOfDiscounting: "2026-02-16",
        bankRefNo1: "SBI-COLL-2026-882",
        dateOfReceipt1: "2026-02-28",
        amountOfReceipt1: 211150.00,
        bankRefNo2: "",
        dateOfReceipt2: "",
        amountOfReceipt2: 0.00,
        bankRefNo3: "",
        dateOfReceipt3: "",
        amountOfReceipt3: 0.00,
        totalUtilizedValueUsd: 211150.00,
        totalUtilizedValueInr: 17835840.00,
        shortExcess: -50.00,
        bankCharges: 150.00,
        fbkCharges: 110.00,
        otherCharges: 35.00,
        remarks: "$50 short receipt due to correspondent wire deductions.",
        eBrcNumber: "eBRC-SBI-2026-99215",
        status: "CLOSED_RECONCILED"
      },
      {
        id: "RD-2026-004",
        doneRef: "BRC-2026-10084",
        invoiceNo: "INV-EXP-2026-304",
        consignee: "Ocean Prime Foods Canada",
        buyerName: "Ocean Prime Foods Canada",
        country: "Canada",
        exporter: "Devi Fisheries Limited",
        year: "2026-2027",
        billsType: "LC Settlement",
        salesInvoiceDate: "2026-02-28",
        transactionType: "LC Settlement",
        totalInvoiceValue: 185000.00,
        realisedValue: 185000.00,
        dateOfDiscounting: "2026-03-02",
        bankRefNo1: "SBI-LC-2026-881",
        dateOfReceipt1: "2026-03-05",
        amountOfReceipt1: 185000.00,
        bankRefNo2: "",
        dateOfReceipt2: "",
        amountOfReceipt2: 0.00,
        bankRefNo3: "",
        dateOfReceipt3: "",
        amountOfReceipt3: 0.00,
        totalUtilizedValueUsd: 185000.00,
        totalUtilizedValueInr: 15549250.00,
        shortExcess: 0.00,
        bankCharges: 210.00,
        fbkCharges: 110.00,
        otherCharges: 40.00,
        remarks: "LC documents accepted without discrepancy. Settled.",
        eBrcNumber: "eBRC-SBI-2026-99219",
        status: "CLOSED_RECONCILED"
      },
      {
        id: "RD-2026-005",
        doneRef: "BRC-2026-10085",
        invoiceNo: "INV-EXP-2026-271",
        consignee: "Royal Greenland Seafood A/S",
        buyerName: "Royal Greenland Seafood A/S",
        country: "Netherlands",
        exporter: "Devi Sea Foods Ltd",
        year: "2025-2026",
        billsType: "Collection",
        salesInvoiceDate: "2026-01-20",
        transactionType: "Collection Advice",
        totalInvoiceValue: 134400.00,
        realisedValue: 134400.00,
        dateOfDiscounting: "2026-01-25",
        bankRefNo1: "CNB-COLL-2026-401",
        dateOfReceipt1: "2026-02-05",
        amountOfReceipt1: 134400.00,
        bankRefNo2: "",
        dateOfReceipt2: "",
        amountOfReceipt2: 0.00,
        bankRefNo3: "",
        dateOfReceipt3: "",
        amountOfReceipt3: 0.00,
        totalUtilizedValueUsd: 134400.00,
        totalUtilizedValueInr: 11330000.00,
        shortExcess: 0.00,
        bankCharges: 110.00,
        fbkCharges: 80.00,
        otherCharges: 20.00,
        remarks: "Canara Bank e-BRC generated successfully.",
        eBrcNumber: "eBRC-CNB-2026-38201",
        status: "CLOSED_RECONCILED"
      }
    ],

        // 4. Insurance Submenu datasets
    pendingInsurance: [
      {
        id: "INS-2026-001",
        invNo: "INV-EXP-2026-088",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        consignee: "Sysco Corporation International",
        vesselName: "MSC MAYA / V.2601W",
        shippingOnboardDt: "02-Nov-2026",
        containerNo: "MSCU7823901",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "New York (USNYC)",
        destinationCountry: "United States",
        totalInvoiceValue: 211200,
        cargoValueUsd: 211200,
        lotRef: "LOT-EXP-2026-088",
        contractNo: "SC-USA-2026-448",
        cargoDescription: "Frozen Vannamei Cooked Tail-On 31/40 IQF (22,000 Kg)",
        requiredClauses: "ICC (A) + Reefer Temp Deviation + War & Strikes",
        assignedUnderwriter: "The New India Assurance Co. Ltd.",
        status: "DECLARATION_PENDING"
      },
      {
        id: "INS-2026-002",
        invNo: "INV-EXP-2026-089",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        consignee: "High Liner Foods Canada",
        vesselName: "MAERSK MC-KINNEY / V.2604E",
        shippingOnboardDt: "08-Nov-2026",
        containerNo: "MRKU4912084",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Vancouver (CAVAN)",
        destinationCountry: "Canada",
        totalInvoiceValue: 171600,
        cargoValueUsd: 171600,
        lotRef: "LOT-EXP-2026-089",
        contractNo: "SC-CAN-2026-033",
        cargoDescription: "Frozen Vannamei PDTO 21/25 IQF Bulk (16,500 Kg)",
        requiredClauses: "ICC (A) Frozen Food Clause + 24hr Machinery",
        assignedUnderwriter: "United India Insurance Co. Ltd.",
        status: "QUOTATION_UNDER_REVIEW"
      },
      {
        id: "INS-2026-003",
        invNo: "INV-EXP-2026-090",
        year: "2026-2027",
        exporter: "Devi Sea Foods Ltd",
        consignee: "Direct Seafoods UK Ltd",
        vesselName: "CMA CGM MARCO POLO / V.2602N",
        shippingOnboardDt: "14-Nov-2026",
        containerNo: "CMAU6193820",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Felixstowe (GBFXT)",
        destinationCountry: "United Kingdom",
        totalInvoiceValue: 98000,
        cargoValueUsd: 98000,
        lotRef: "LOT-EXP-2026-090",
        contractNo: "SC-EU-2026-082",
        cargoDescription: "Asian Seabass Whole Gutted 400-600g (10,000 Kg)",
        requiredClauses: "ICC (A) Institute Frozen Food Clauses",
        assignedUnderwriter: "ICICI Lombard General Insurance",
        status: "DRAFT_CERT_PREPARED"
      },
      {
        id: "INS-2026-004",
        invNo: "INV-EXP-2026-091",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        consignee: "US Foods Trading Co",
        vesselName: "EVER GIVEN / V.1082S",
        shippingOnboardDt: "19-Nov-2026",
        containerNo: "EGLV8841092",
        portOfLoading: "Chennai (INMAA)",
        portOfDischarge: "Long Beach (USLGB)",
        destinationCountry: "United States",
        totalInvoiceValue: 342500,
        cargoValueUsd: 342500,
        lotRef: "LOT-EXP-2026-091",
        contractNo: "SC-USA-2026-455",
        cargoDescription: "Frozen Black Tiger HOSO 16/20 Semi-IQF (24,000 Kg)",
        requiredClauses: "ICC (A) All Risks + Temperature Breakdown",
        assignedUnderwriter: "The New India Assurance Co. Ltd.",
        status: "COVER_NOTE_ISSUED"
      },
      {
        id: "INS-2026-005",
        invNo: "INV-EXP-2026-092",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        consignee: "Nippon Suisan Kaisha Ltd",
        vesselName: "ONE APUS / V.009E",
        shippingOnboardDt: "24-Nov-2026",
        containerNo: "ONEY3948102",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Tokyo Port (JPTYO)",
        destinationCountry: "Japan",
        totalInvoiceValue: 189000,
        cargoValueUsd: 189000,
        lotRef: "LOT-EXP-2026-092",
        contractNo: "SC-JPN-2026-019",
        cargoDescription: "Vannamei Nobashi Ebi 30pcs Tray Pack (14,200 Kg)",
        requiredClauses: "ICC (A) + Reefer Thermal Variation Guarantee",
        assignedUnderwriter: "National Insurance Co. Ltd.",
        status: "DECLARATION_PENDING"
      },
      {
        id: "INS-2026-006",
        invNo: "INV-EXP-2026-093",
        year: "2025-2026",
        exporter: "Devi Aqua Feeds Pvt Ltd",
        consignee: "Royal Greenland Seafood A/S",
        vesselName: "HAPAG AL DAHNA / V.2603W",
        shippingOnboardDt: "29-Nov-2026",
        containerNo: "HLXU5591204",
        portOfLoading: "Kolkata (INCCU)",
        portOfDischarge: "Rotterdam (NLRTM)",
        destinationCountry: "Netherlands",
        totalInvoiceValue: 275400,
        cargoValueUsd: 275400,
        lotRef: "LOT-EXP-2026-093",
        contractNo: "SC-NLD-2026-112",
        cargoDescription: "Vannamei Easy Peel Raw 26/30 (21,500 Kg)",
        requiredClauses: "ICC (A) Institute Frozen Food Clauses",
        assignedUnderwriter: "United India Insurance Co. Ltd.",
        status: "QUOTATION_UNDER_REVIEW"
      },
      {
        id: "INS-2026-007",
        invNo: "INV-EXP-2026-094",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        consignee: "Minh Phu Seafood Corp",
        vesselName: "COSCO SHIPPING UNIVERSE / V.2605E",
        shippingOnboardDt: "04-Dec-2026",
        containerNo: "COSU6283910",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Haiphong (VNHPH)",
        destinationCountry: "Vietnam",
        totalInvoiceValue: 145000,
        cargoValueUsd: 145000,
        lotRef: "LOT-EXP-2026-094",
        contractNo: "SC-VNM-2026-042",
        cargoDescription: "Frozen Headless Shell-On White Shrimp 41/50 (15,000 Kg)",
        requiredClauses: "ICC (A) All Risks + Marine Transit",
        assignedUnderwriter: "ICICI Lombard General Insurance",
        status: "DRAFT_CERT_PREPARED"
      },
      {
        id: "INS-2026-008",
        invNo: "INV-EXP-2026-095",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        consignee: "Aqua Star USA",
        vesselName: "MSC OSCAR / V.2606W",
        shippingOnboardDt: "10-Dec-2026",
        containerNo: "MSCU9912044",
        portOfLoading: "Chennai (INMAA)",
        portOfDischarge: "Savannah (USSAV)",
        destinationCountry: "United States",
        totalInvoiceValue: 228900,
        cargoValueUsd: 228900,
        lotRef: "LOT-EXP-2026-095",
        contractNo: "SC-USA-2026-462",
        cargoDescription: "Vannamei Cooked Salad Shrimp 100/200 (19,800 Kg)",
        requiredClauses: "ICC (A) + Reefer Machinery Failure Clause",
        assignedUnderwriter: "The New India Assurance Co. Ltd.",
        status: "DECLARATION_PENDING"
      },
      {
        id: "INS-2026-009",
        invNo: "INV-EXP-2026-096",
        year: "2025-2026",
        exporter: "Devi Sea Foods Ltd",
        consignee: "Deutsche See GmbH",
        vesselName: "HYUNDAI BRAVE / V.045E",
        shippingOnboardDt: "15-Dec-2026",
        containerNo: "HDMU4491028",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Hamburg (DEHAM)",
        destinationCountry: "Germany",
        totalInvoiceValue: 195000,
        cargoValueUsd: 195000,
        lotRef: "LOT-EXP-2026-096",
        contractNo: "SC-DEU-2026-077",
        cargoDescription: "Organic Black Tiger Peeled Deveined (12,500 Kg)",
        requiredClauses: "ICC (A) Frozen Cargo All Risks",
        assignedUnderwriter: "United India Insurance Co. Ltd.",
        status: "COVER_NOTE_ISSUED"
      },
      {
        id: "INS-2026-010",
        invNo: "INV-EXP-2026-097",
        year: "2026-2027",
        exporter: "Devi Fisheries Limited",
        consignee: "Maruha Nichiro Corporation",
        vesselName: "OOCL HONG KONG / V.2607S",
        shippingOnboardDt: "21-Dec-2026",
        containerNo: "OOLU7718290",
        portOfLoading: "Visakhapatnam (INVTZ)",
        portOfDischarge: "Osaka Port (JPOSA)",
        destinationCountry: "Japan",
        totalInvoiceValue: 312000,
        cargoValueUsd: 312000,
        lotRef: "LOT-EXP-2026-097",
        contractNo: "SC-JPN-2026-025",
        cargoDescription: "Vannamei Sushi Ebi 4L/5L Vacuum Packed (20,000 Kg)",
        requiredClauses: "ICC (A) + Reefer Temp Deviation + War & Strikes",
        assignedUnderwriter: "National Insurance Co. Ltd.",
        status: "DECLARATION_PENDING"
      }
    ],

    insuranceTemplates: [
      { id: 1, sNo: 1, invoiceTemplateNo: "INS-TPL-2026-001", generatedOn: "04-Nov-2026", year: "2026-2027", insuranceType: "Marine Cargo Open Cover", exporter: "Devi Fisheries Limited" },
      { id: 2, sNo: 2, invoiceTemplateNo: "INS-TPL-2026-002", generatedOn: "02-Nov-2026", year: "2026-2027", insuranceType: "All Risks - Institute Cargo Clauses (A)", exporter: "Devi Fisheries Limited" },
      { id: 3, sNo: 3, invoiceTemplateNo: "INS-TPL-2026-003", generatedOn: "30-Oct-2026", year: "2026-2027", insuranceType: "Institute Frozen Food Clauses (A)", exporter: "Devi Sea Foods Ltd" },
      { id: 4, sNo: 4, invoiceTemplateNo: "INS-TPL-2026-004", generatedOn: "28-Oct-2026", year: "2026-2027", insuranceType: "USA Sea Container - Comprehensive All Risks", exporter: "Devi Fisheries Limited" },
      { id: 5, sNo: 5, invoiceTemplateNo: "INS-TPL-2026-005", generatedOn: "25-Oct-2026", year: "2026-2027", insuranceType: "EU Frozen Seafood Standard Policy Template", exporter: "Devi Fisheries Limited" },
      { id: 6, sNo: 6, invoiceTemplateNo: "INS-TPL-2026-006", generatedOn: "22-Oct-2026", year: "2026-2027", insuranceType: "Marine Cargo Specific Voyage Policy", exporter: "Devi Sea Foods Ltd" },
      { id: 7, sNo: 7, invoiceTemplateNo: "INS-TPL-2026-007", generatedOn: "18-Oct-2026", year: "2026-2027", insuranceType: "Reefer Breakdown & Temperature Deviation Cover", exporter: "Devi Aqua Feeds Pvt Ltd" },
      { id: 8, sNo: 8, invoiceTemplateNo: "INS-TPL-2026-008", generatedOn: "15-Oct-2026", year: "2026-2027", insuranceType: "Marine Cargo Open Cover", exporter: "Devi Fisheries Limited" }
    ],

    insurancePayments: [
      {
        id: "PAY-001",
        sNo: 1,
        insNo: "INS-2026-001",
        invoices: "INV-EXP-2026-088",
        year: "2026-2027",
        policyNo: "POL-MAR-2026-7701",
        premInvoiceNo: "PREM-INV-2026-104",
        underwriter: "The New India Assurance Co. Ltd.",
        sumInsuredUsd: 175230,
        totalPaidInr: 85904,
        paymentDate: "2026-10-17",
        status: "PAID_RECEIPTED"
      },
      {
        id: "PAY-002",
        sNo: 2,
        insNo: "INS-2026-002",
        invoices: "INV-EXP-2026-089",
        year: "2026-2027",
        policyNo: "POL-MAR-2026-7702",
        premInvoiceNo: "PREM-INV-2026-105",
        underwriter: "United India Insurance Co. Ltd.",
        sumInsuredUsd: 223300,
        totalPaidInr: 107852,
        paymentDate: "2026-10-13",
        status: "PAID_RECEIPTED"
      },
      {
        id: "PAY-003",
        sNo: 3,
        insNo: "INS-2026-003",
        invoices: "INV-EXP-2026-090",
        year: "2026-2027",
        policyNo: "POL-MAR-2026-7703",
        premInvoiceNo: "PREM-INV-2026-106",
        underwriter: "ICICI Lombard General Insurance",
        sumInsuredUsd: 147840,
        totalPaidInr: 72570,
        paymentDate: "2026-10-26",
        status: "PAID_RECEIPTED"
      },
      {
        id: "PAY-004",
        sNo: 4,
        insNo: "INS-2026-004",
        invoices: "INV-EXP-2026-091",
        year: "2026-2027",
        policyNo: "POL-MAR-2026-7704",
        premInvoiceNo: "PREM-INV-2026-107",
        underwriter: "The New India Assurance Co. Ltd.",
        sumInsuredUsd: 232320,
        totalPaidInr: 113870,
        paymentDate: "2026-11-04",
        status: "APPROVAL_PENDING"
      }
    ]
  },

  // Main Render entrypoint
  render(containerTarget, tabName = 'overview', resolvedHash = '#/sales/dashboard/overview') {
    const container = typeof containerTarget === 'string' ? document.getElementById(containerTarget) : containerTarget;
    if (!container) return;

    const parts = (resolvedHash || '').replace(/^#\/?/, '').split('/');
    const submenuId = parts[1] || 'dashboard';
    const currentTab = parts[2] || tabName || 'overview';

    container.innerHTML = `
      <div id="sales-tab-bar-container"></div>
      <div id="sales-view-main" class="space-y-3"></div>
    `;

    // Render TabBar if there are multiple tabs (e.g. Orders has 8 tabs)
    TabBar.render('sales-tab-bar-container', resolvedHash);

    const mainEl = container.querySelector('#sales-view-main');
    if (!mainEl) return;

    // Dispatch submenu view
    switch (submenuId) {
      case 'dashboard':
        this.renderDashboard(mainEl);
        break;
      case 'orders':
        this.renderOrdersTab(mainEl, currentTab);
        break;
      case 'payments':
        this.renderPayments(mainEl, currentTab);
        break;
      case 'insurance':
        this.renderInsurance(mainEl, currentTab);
        break;
      default:
        this.renderDashboard(mainEl);
        break;
    }
  },

  // ----------------------------------------------------
  // 1. DASHBOARD SUBMENU VIEW (MATCHING USER SCREENSHOT SPECIFICATIONS)
  // ----------------------------------------------------
  renderDashboard(container) {
    try {
      const metrics = this.state.dashboardMetrics || {
        pendingContracts: 474,
        onWater: 134,
        delivered: 872,
        orders: 1480,
        pendingPayments: 377,
        paymentsReceived: 847,
        totalRecords2Days: 21,
        modulesActive2Days: 2,
        latestActivity2Days: '12-11-2026 00:00:00'
      };

      container.innerHTML = `
        <div class="space-y-4 animate-fade-in select-none pb-8">
          <!-- Page Title (Strictly Rule 2: Title ONLY, no subheadings) -->
          <div class="flex items-center justify-between mb-1">
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Sales &amp; Exports Commercial Dashboard</h1>
          </div>

          <!-- Top Filter Card (Matching Screenshot 1) -->
          <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
            <div class="flex items-center justify-between pb-1">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
                <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
              </div>
              <div class="inline-flex items-center gap-2">
                <button type="button" id="sales-dash-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                </button>
                <button type="button" id="sales-dash-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                  <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
              </div>
            </div>
            <div id="sales-dash-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Exporter:</label>
                <select id="flt-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="DEVI FISHERIES LIMITED" selected>DEVI FISHERIES LIMITED</option>
                  <option value="DEVI MARINE FOOD EXPORTS">DEVI MARINE FOOD EXPORTS</option>
                  <option value="DEVI AQUA PRODUCTS">DEVI AQUA PRODUCTS</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Consignee:</label>
                <select id="flt-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="All" selected>All</option>
                  <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC</option>
                  <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation</option>
                  <option value="Devi Inc USA">Devi Inc USA</option>
                  <option value="Mark Foods LLC">Mark Foods LLC</option>
                  <option value="Stanley">Stanley</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Brand:</label>
                <select id="flt-brand" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="All" selected>All</option>
                  <option value="Devi Classic">Devi Classic</option>
                  <option value="Portico Classic">Portico Classic</option>
                  <option value="Ocean King">Ocean King</option>
                  <option value="Sindhu Classic">Sindhu Classic</option>
                  <option value="Blue Ocean">Blue Ocean</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Country:</label>
                <select id="flt-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="All" selected>All</option>
                  <option value="U.S.A.">U.S.A.</option>
                  <option value="China">China</option>
                  <option value="Russia">Russia</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Canada">Canada</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Year:</label>
                <select id="flt-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="2026-2027" selected>2026-2027</option>
                  <option value="2025-2026">2025-2026</option>
                  <option value="2024-2025">2024-2025</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">From Date</label>
                <input type="date" id="flt-from-date" value="2026-04-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">To Date</label>
                <input type="date" id="flt-to-date" value="2027-03-31" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
              <div class="col-span-full flex justify-center pt-1">
                <button type="button" id="btn-sales-dash-search" class="btn-primary px-6 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
                  <span>Search</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>
          </div>

          <!-- 6 Key Metric Badges (Matching Screenshot 1) -->
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            <!-- 1. Pending Contracts: 474 -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-xs flex items-center justify-between">
              <div>
                <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Pending Contracts</div>
                <div class="text-2xl font-black text-[#172B4D] mt-1 font-mono">${metrics.pendingContracts}</div>
              </div>
              <div class="w-9 h-9 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] text-[#00A4B7] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </div>
            </div>

            <!-- 2. On Water: 134 -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-xs flex items-center justify-between">
              <div>
                <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">On Water</div>
                <div class="text-2xl font-black text-[#006644] mt-1 font-mono">${metrics.onWater}</div>
              </div>
              <div class="w-9 h-9 rounded-lg bg-[#E3FCEF] border border-[#ABF5D1] text-[#006644] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>
              </div>
            </div>

            <!-- 3. Delivered: 872 -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-xs flex items-center justify-between">
              <div>
                <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Delivered</div>
                <div class="text-2xl font-black text-[#172B4D] mt-1 font-mono">${metrics.delivered}</div>
              </div>
              <div class="w-9 h-9 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] text-[#00A4B7] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              </div>
            </div>

            <!-- 4. Orders: 1480 -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-xs flex items-center justify-between">
              <div>
                <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Orders</div>
                <div class="text-2xl font-black text-[#172B4D] mt-1 font-mono">${Number(metrics.orders).toLocaleString()}</div>
              </div>
              <div class="w-9 h-9 rounded-lg bg-[#EAE6FF] border border-[#D3C7FF] text-[#403294] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              </div>
            </div>

            <!-- 5. Pending Payments: 377 -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-xs flex items-center justify-between">
              <div>
                <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Pending Payments</div>
                <div class="text-2xl font-black text-[#FF8B00] mt-1 font-mono">${metrics.pendingPayments}</div>
              </div>
              <div class="w-9 h-9 rounded-lg bg-[#FFFAE6] border border-[#FFE380] text-[#FF8B00] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
            </div>

            <!-- 6. Payments Received: 847 -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-xs flex items-center justify-between">
              <div>
                <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Payments Received</div>
                <div class="text-2xl font-black text-[#006644] mt-1 font-mono">${metrics.paymentsReceived}</div>
              </div>
              <div class="w-9 h-9 rounded-lg bg-[#E3FCEF] border border-[#ABF5D1] text-[#006644] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
            </div>
          </div>

          <!-- Section: Analytics Charts (Row 1 & 2 - Matching Screenshot 3) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Chart 1: Invoice Vs Shipments (Screenshot 3 Top Left) -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
              <div class="flex items-center justify-between pb-3 border-b border-[#F4F5F7] mb-3">
                <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Invoice Vs Shipments</h3>
                <div class="flex items-center gap-3 text-xs font-semibold text-[#5E6C84]">
                  <span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#334155]"></span> Invoices</span>
                  <span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#00A4B7]"></span> Shipments</span>
                </div>
              </div>
              <div class="h-64 w-full">
                <canvas id="sales-chart-invoice-vs-shipments"></canvas>
              </div>
            </div>

            <!-- Chart 2: Plant Wise Orders (Screenshot 3 Top Right) -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
              <div class="flex items-center justify-between pb-3 border-b border-[#F4F5F7] mb-3">
                <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Plant Wise Orders</h3>
                <div class="flex items-center gap-3 text-xs font-semibold text-[#5E6C84]">
                  <span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#00A4B7]"></span> Total</span>
                  <span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#006644]"></span> Shipped</span>
                  <span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#FF8B00]"></span> Pending</span>
                </div>
              </div>
              <div class="h-64 w-full">
                <canvas id="sales-chart-plant-orders"></canvas>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Chart 3: Country Wise Details (Screenshot 3 Bottom Left) -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
              <div class="flex items-center justify-between pb-3 border-b border-[#F4F5F7] mb-3">
                <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Country Wise Details</h3>
                <span class="text-[11px] font-semibold text-[#5E6C84]">Top Export Destinations</span>
              </div>
              <div class="h-64 w-full flex items-center justify-center">
                <canvas id="sales-chart-country-details"></canvas>
              </div>
            </div>

            <!-- Chart 4: Shipped Containers (Port Wise) (Screenshot 3 Bottom Right) -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
              <div class="flex items-center justify-between pb-3 border-b border-[#F4F5F7] mb-3">
                <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Shipped Containers (Port Wise)</h3>
                <span class="text-[11px] font-semibold text-[#5E6C84]">Major Discharge Ports</span>
              </div>
              <div class="h-64 w-full flex items-center justify-center">
                <canvas id="sales-chart-port-containers"></canvas>
              </div>
            </div>
          </div>

          <!-- Chart 5: To be shipped Qty vs Shipped Qty (Screenshot 4 Top) -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="flex items-center justify-between pb-3 border-b border-[#F4F5F7] mb-3">
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">To be shipped Qty vs Shipped Qty (Tons)</h3>
              <div class="flex items-center gap-3 text-xs font-semibold text-[#5E6C84]">
                <span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#334155]"></span> To be shipped Qty (Tons)</span>
                <span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#00A4B7]"></span> Shipped Qty (Tons)</span>
              </div>
            </div>
            <div class="h-72 w-full">
              <canvas id="sales-chart-qty-shipped"></canvas>
            </div>
          </div>

          <!-- Chart 6: Freight Rates Section (Screenshot 4 Bottom) -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="flex items-center justify-between pb-3 border-b border-[#F4F5F7] mb-3">
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Freight Rates (Sample data)</h3>
              <button type="button" id="btn-export-freight-rates" class="btn-primary px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                <span>Download</span>
              </button>
            </div>

            <!-- Liner & Port Filter Chips Bar -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 text-xs items-end bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6] mb-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Liner</label>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">✕ ONE LINE</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">✕ MAERSK LINE</span>
                </div>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Destination Port</label>
                <span class="px-2.5 py-1 rounded text-xs font-semibold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] inline-block">✕ SAVANNAH</span>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">From Date:</label>
                <input type="date" value="2026-09-12" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] shadow-2xs">
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">To Date:</label>
                <input type="date" value="2026-11-12" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] shadow-2xs">
              </div>
              <div>
                <button type="button" class="btn-primary w-full py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
                  <span>Search</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>

            <div class="h-64 w-full">
              <canvas id="sales-chart-freight-rates"></canvas>
            </div>
          </div>

          <!-- Section: Last 2 Days Insertion Log & DataTable (Screenshots 1 & 2) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
            <div class="flex items-center justify-between pb-3 border-b border-[#F4F5F7] mb-3">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-[#F0F9FF] text-[#00A4B7] flex items-center justify-center font-bold">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Last 2 Days Insertion Log</h3>
                  <p class="text-[11px] text-[#5E6C84] mt-0.5">Review newly inserted records across purchase, pre-processing, production, export and quality-control modules.</p>
                </div>
              </div>
              <span class="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">Last 2 Days</span>
            </div>

            <!-- Filter Controls -->
            <div class="bg-[#F8FAFC] rounded-lg border border-[#DFE1E6] p-3 mb-3">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs items-end">
                <div>
                  <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Start Date / Time</label>
                  <input type="text" id="log-start-time" value="10/11/2026, 06:02 pm" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>
                <div>
                  <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">End Date / Time</label>
                  <input type="text" id="log-end-time" value="12/11/2026, 06:02 pm" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>
                <div>
                  <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Module</label>
                  <select id="log-module-select" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="ALL" selected>All Modules</option>
                    <option value="QUALITY CONTROL">Quality Control</option>
                    <option value="SALES / EXPORT">Sales / Export</option>
                    <option value="PURCHASE">Purchase</option>
                    <option value="PRE-PROCESSING">Pre-Processing</option>
                    <option value="PRODUCTION">Production</option>
                  </select>
                </div>
                <div class="flex items-center gap-2">
                  <button type="button" id="btn-log-apply" class="btn-primary px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
                    <span>Apply Filters</span>
                  </button>
                  <button type="button" id="btn-log-reset" class="btn-secondary px-3 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1 border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer h-[32px]">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              <div class="text-[10px] text-[#64748B] mt-2 flex items-center gap-1">
                <svg class="w-3 h-3 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Rows are matched on the module's activity date/time. Where a business table has no insertion timestamp, the closest business date is used.</span>
              </div>
            </div>

            <!-- 3 Summary Metrics -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
              <div class="bg-white border border-[#DFE1E6] rounded-xl p-3 shadow-2xs flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>
                </div>
                <div>
                  <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">TOTAL RECORDS</span>
                  <span class="font-mono font-black text-lg text-[#172B4D]">${metrics.totalRecords2Days}</span>
                </div>
              </div>
              <div class="bg-white border border-[#DFE1E6] rounded-xl p-3 shadow-2xs flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-[#E3FCEF] text-[#006644] flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                </div>
                <div>
                  <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">MODULES ACTIVE</span>
                  <span class="font-mono font-black text-lg text-[#006644]">${metrics.modulesActive2Days}</span>
                </div>
              </div>
              <div class="bg-white border border-[#DFE1E6] rounded-xl p-3 shadow-2xs flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-[#FFFAE6] text-[#FF8B00] flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">LATEST ACTIVITY</span>
                  <span class="font-mono font-bold text-xs text-[#172B4D]">${metrics.latestActivity2Days}</span>
                </div>
              </div>
            </div>

            <!-- Module-wise Summary Cards (Screenshot 2) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-[#172B4D]">QC Last Code Issue</div>
                  <div class="text-[10px] font-semibold text-[#5E6C84] uppercase tracking-wider mt-0.5">QUALITY CONTROL</div>
                  <div class="text-[10px] text-[#64748B] mt-1 flex items-center gap-1 font-mono">
                    <svg class="w-3 h-3 text-[#5E6C84]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <span>Latest: 12-11-2026 00:00:00</span>
                  </div>
                </div>
                <span class="text-2xl font-black font-mono text-[#00A4B7]">16</span>
              </div>
              <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-[#172B4D]">Last Realization Entry</div>
                  <div class="text-[10px] font-semibold text-[#5E6C84] uppercase tracking-wider mt-0.5">SALES / EXPORT</div>
                  <div class="text-[10px] text-[#64748B] mt-1 flex items-center gap-1 font-mono">
                    <svg class="w-3 h-3 text-[#5E6C84]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <span>Latest: 12-11-2026 00:00:00</span>
                  </div>
                </div>
                <span class="text-2xl font-black font-mono text-[#00A4B7]">5</span>
              </div>
            </div>

            <!-- Insertion Records DataTable Container -->
            <div id="sales-dash-insertion-table-container"></div>
          </div>
        </div>
      `;

      // Filter Controls Binding
      const fltResetBtn = container.querySelector('#sales-dash-flt-reset-btn');
      const fltToggleBtn = container.querySelector('#sales-dash-flt-toggle-btn');
      const fltBody = container.querySelector('#sales-dash-flt-body');

      fltToggleBtn?.addEventListener('click', () => {
        fltBody?.classList.toggle('hidden');
        fltToggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
      });

      fltResetBtn?.addEventListener('click', () => {
        const selects = fltBody.querySelectorAll('select');
        selects.forEach(s => s.selectedIndex = 0);
        Toast.show('Filters reset to default', 'info');
      });

      // Render Insertion Records DataTable (Screenshot 2)
      const renderInsertionTable = (records) => {
        new DataTable({
          containerId: 'sales-dash-insertion-table-container',
          tableTitle: 'Insertion Records',
          data: records,
          keyField: 'recordId',
          pageSize: 10,
          searchable: true,
          exportable: true,
          columns: [
            {
              field: 'sNo',
              header: 'S.No',
              sortable: true,
              render: (v) => `<span class="font-bold text-[#172B4D]">${v}</span>`
            },
            {
              field: 'dateTime',
              header: 'Date / Time',
              sortable: true,
              render: (v, r) => `
                <div>
                  <div class="font-mono text-xs font-bold text-[#172B4D]">${v}</div>
                  <div class="text-[10px] text-[#64748B] mt-0.5 break-words">${r.dateSource || 'ProductReleaseDate / PsipSentDate / BestBeforeDt / HarvestDt'}</div>
                </div>
              `
            },
            {
              field: 'module',
              header: 'Module',
              sortable: true,
              render: (v, r) => `
                <div>
                  <div class="font-bold text-xs text-[#172B4D]">${v}</div>
                  <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF] mt-0.5 inline-block">${r.moduleCategory || 'Code Issue'}</span>
                </div>
              `
            },
            {
              field: 'recordId',
              header: 'Record ID',
              sortable: true,
              render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>`
            },
            {
              field: 'reference',
              header: 'Reference',
              sortable: true,
              render: (v) => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>`
            }
          ]
        });
      };

      renderInsertionTable(this.state.insertionRecords || []);

      // Insertion log filter
      const btnLogApply = container.querySelector('#btn-log-apply');
      const btnLogReset = container.querySelector('#btn-log-reset');
      const modSelect = container.querySelector('#log-module-select');

      btnLogApply?.addEventListener('click', () => {
        const modVal = modSelect ? modSelect.value : 'ALL';
        let filtered = [...(this.state.insertionRecords || [])];
        if (modVal !== 'ALL') {
          filtered = filtered.filter(r => r.module.toUpperCase().includes(modVal) || (r.category && r.category.toUpperCase().includes(modVal)));
        }
        renderInsertionTable(filtered);
        Toast.show(`Filtered ${filtered.length} insertion record(s)`, 'info');
      });

      btnLogReset?.addEventListener('click', () => {
        if (modSelect) modSelect.selectedIndex = 0;
        renderInsertionTable(this.state.insertionRecords || []);
        Toast.show('Insertion filters reset', 'info');
      });

      // Render Charts after DOM injection
      setTimeout(() => {
        const chartHelper = typeof Charts !== 'undefined' ? Charts : (typeof window !== 'undefined' ? window.Charts : null);
        if (chartHelper && typeof Chart !== 'undefined') {
          // 1. Chart 1: Invoice Vs Shipments (Screenshot 3 Top Left)
          if (typeof chartHelper.renderBarChart === 'function') {
            chartHelper.renderBarChart(
              'sales-chart-invoice-vs-shipments',
              ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March'],
              [
                {
                  label: 'Invoices',
                  data: [169, 158, 182, 164, 160, 185, 162, 32, 2, 0, 1, 2],
                  backgroundColor: '#334155',
                  borderRadius: 4
                },
                {
                  label: 'Shipments',
                  data: [168, 155, 180, 162, 158, 184, 160, 18, 0, 0, 0, 1],
                  backgroundColor: '#00A4B7',
                  borderRadius: 4
                }
              ],
              {
                plugins: {
                  legend: { display: false }
                },
                scales: {
                  y: {
                    grid: { color: '#F1F5F9' },
                    ticks: { font: { size: 10, family: 'Inter' }, color: '#5E6C84' }
                  },
                  x: {
                    grid: { display: false },
                    ticks: { font: { size: 9, family: 'Inter', weight: 'bold' }, color: '#172B4D' }
                  }
                }
              }
            );
          }

          // 2. Chart 2: Plant Wise Orders (Screenshot 3 Top Right)
          if (typeof chartHelper.renderBarChart === 'function') {
            chartHelper.renderBarChart(
              'sales-chart-plant-orders',
              ['Unit 1(853)', 'Unit 2(857)', 'Unit 3(990)', 'Unit 4(1936)', 'Unit 5(1885)', 'Unit 6(1975)', 'All'],
              [
                {
                  label: 'Total',
                  data: [44, 210, 260, 310, 480, 240, 1544],
                  backgroundColor: '#00A4B7',
                  borderRadius: 4
                },
                {
                  label: 'Shipped',
                  data: [38, 175, 215, 275, 410, 195, 1308],
                  backgroundColor: '#006644',
                  borderRadius: 4
                },
                {
                  label: 'Pending',
                  data: [6, 35, 45, 35, 70, 45, 236],
                  backgroundColor: '#FF8B00',
                  borderRadius: 4
                }
              ],
              {
                plugins: {
                  legend: { display: false }
                },
                scales: {
                  y: {
                    grid: { color: '#F1F5F9' },
                    ticks: { font: { size: 10, family: 'Inter' }, color: '#5E6C84' }
                  },
                  x: {
                    grid: { display: false },
                    ticks: { font: { size: 9, family: 'Inter', weight: 'bold' }, color: '#172B4D' }
                  }
                }
              }
            );
          }

          // 3. Chart 3: Country Wise Details (Screenshot 3 Bottom Left)
          if (typeof chartHelper.renderDonutChart === 'function') {
            chartHelper.renderDonutChart(
              'sales-chart-country-details',
              ['U.S.A.', 'CHINA', 'RUSSIA', 'BELGIUM', 'CANADA', 'FRANCE', 'UNITED KINGDOM', 'OTHER'],
              [902, 166, 54, 50, 13, 10, 7, 23],
              ['#00A4B7', '#006644', '#FF8B00', '#403294', '#0284C7', '#E11D48', '#059669', '#94A3B8'],
              {
                plugins: {
                  legend: {
                    position: 'right',
                    labels: { font: { size: 10, family: 'Inter' }, boxWidth: 10 }
                  }
                }
              }
            );
          }

          // 4. Chart 4: Shipped Containers (Port Wise) (Screenshot 3 Bottom Right)
          if (typeof chartHelper.renderDonutChart === 'function') {
            chartHelper.renderDonutChart(
              'sales-chart-port-containers',
              ['SAVANNAH', 'LOS ANGELES', 'NEW YORK', 'BALTIMORE', 'ZHANJIANG', 'NEWARK', 'ANTWERP', 'OTHER'],
              [316, 171, 152, 121, 112, 52, 50, 147],
              ['#0284C7', '#E11D48', '#006644', '#7C3AED', '#00A4B7', '#FF8B00', '#059669', '#64748B'],
              {
                plugins: {
                  legend: {
                    position: 'right',
                    labels: { font: { size: 10, family: 'Inter' }, boxWidth: 10 }
                  }
                }
              }
            );
          }

          // 5. Chart 5: To be shipped Qty vs Shipped Qty (Screenshot 4 Top)
          if (typeof chartHelper.renderBarChart === 'function') {
            chartHelper.renderBarChart(
              'sales-chart-qty-shipped',
              ['BROKEN', '16/20', '20/30', '21/25', '26/30', '31/40', '41/50', '51/60', '61/70', '71/90', '91/110', '100/200'],
              [
                {
                  label: 'To be shipped Qty - Tons',
                  data: [0.0, 720, 210, 780, 810, 1780, 520, 790, 450, 680, 240, 110],
                  backgroundColor: '#334155',
                  borderRadius: 3
                },
                {
                  label: 'Shipped Qty - Tons',
                  data: [18.0, 2640, 540, 2520, 2350, 4180, 1540, 2040, 890, 1150, 450, 220],
                  backgroundColor: '#00A4B7',
                  borderRadius: 3
                }
              ],
              {
                plugins: {
                  legend: { display: false }
                },
                scales: {
                  y: {
                    grid: { color: '#F1F5F9' },
                    ticks: {
                      font: { size: 10, family: 'Inter' },
                      color: '#5E6C84',
                      callback: v => `${v} T`
                    }
                  },
                  x: {
                    grid: { display: false },
                    ticks: { font: { size: 9, family: 'Inter', weight: 'bold' }, color: '#172B4D' }
                  }
                }
              }
            );
          }

          // 6. Chart 6: Freight Rates Trend (Screenshot 4 Bottom)
          if (typeof chartHelper.renderLineChart === 'function') {
            chartHelper.renderLineChart(
              'sales-chart-freight-rates',
              ['12/09', '26/09', '10/10', '24/10', '07/11', '21/11'],
              [
                {
                  label: 'ONE LINE',
                  data: [11469, 11769, 11824, 11769, 11769, 6500],
                  borderColor: '#E11D48',
                  backgroundColor: 'transparent',
                  borderWidth: 2,
                  pointRadius: 4,
                  pointBackgroundColor: '#E11D48'
                },
                {
                  label: 'MAERSK LINE',
                  data: [10958, 10958, 11824, 9324, 9324, 6200],
                  borderColor: '#0284C7',
                  backgroundColor: 'transparent',
                  borderWidth: 2,
                  pointRadius: 4,
                  pointBackgroundColor: '#0284C7'
                },
                {
                  label: 'MSC',
                  data: [8337, 8400, 10037, 10037, 10037, 5900],
                  borderColor: '#7C3AED',
                  backgroundColor: 'transparent',
                  borderWidth: 2,
                  pointRadius: 4,
                  pointBackgroundColor: '#7C3AED'
                },
                {
                  label: 'HAPAG-LLOYD',
                  data: [7164, 7151, 7097, 7097, 7097, 6100],
                  borderColor: '#059669',
                  backgroundColor: 'transparent',
                  borderWidth: 2,
                  pointRadius: 4,
                  pointBackgroundColor: '#059669'
                },
                {
                  label: 'CMA CGM',
                  data: [7164, 8164, 7986, 7986, 6716, 6716],
                  borderColor: '#D97706',
                  backgroundColor: 'transparent',
                  borderWidth: 2,
                  pointRadius: 4,
                  pointBackgroundColor: '#D97706'
                }
              ],
              {
                scales: {
                  y: {
                    min: 5000,
                    max: 13000,
                    grid: { color: '#F1F5F9' },
                    ticks: {
                      font: { size: 10, family: 'Inter' },
                      color: '#5E6C84',
                      callback: v => `$${v}`
                    }
                  },
                  x: {
                    grid: { display: false },
                    ticks: { font: { size: 10, family: 'Inter', weight: 'bold' }, color: '#172B4D' }
                  }
                }
              }
            );
          }
        }
      }, 60);

    } catch (e) {
      console.error('Error rendering Sales & Exports Commercial Dashboard:', e);
    }
  },

  // ----------------------------------------------------
  // 2. ORDERS SUBMENU (8 WORKFLOW TABS)
  // ----------------------------------------------------
  renderOrdersTab(container, currentTab = 'proforma-list') {
    switch (currentTab) {
      case 'proforma-list':
        this.renderProformaList(container);
        break;
      case 'custom-invoices':
        this.renderCustomInvoices(container);
        break;
      case 'isf-details':
        this.renderIsfDetails(container);
        break;
      case 'shipping-bill':
        this.renderShippingBill(container);
        break;
      case 'commercial-invoice':
        this.renderCommercialInvoice(container);
        break;
      case 'eta-status':
        this.renderEtaStatus(container);
        break;
      case 'fda-status':
        this.renderFdaStatus(container);
        break;
      case 'clearing-agent':
        this.renderClearingAgent(container);
        break;
      default:
        this.renderProformaList(container);
        break;
    }
  },

  // Tab 1: Proforma List (PI Register)
  renderProformaList(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title & Header Actions (NO Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Proforma Invoices (PI Register)</h1>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="btn-generate-pi" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Generate Proforma Invoice</span>
            </button>
          </div>
        </div>

        <!-- Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="flt-pi-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="flt-pi-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="flt-pi-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- SELECT EXPORTER -->
            <div>
              <label for="flt-pi-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT EXPORTER</label>
              <select id="flt-pi-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Marine Processors">Devi Marine Processors</option>
              </select>
            </div>

            <!-- SELECT CONSIGNEE -->
            <div>
              <label for="flt-pi-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT CONSIGNEE</label>
              <select id="flt-pi-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Consignees</option>
                <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC</option>
                <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation</option>
                <option value="Royal Greenland Seafood A/S">Royal Greenland Seafood A/S</option>
                <option value="Sysco Corporation International">Sysco Corporation International</option>
                <option value="US Foods Trading Co">US Foods Trading Co</option>
              </select>
            </div>

            <!-- SELECT COUNTRY -->
            <div>
              <label for="flt-pi-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT COUNTRY</label>
              <select id="flt-pi-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Countries</option>
                <option value="United States">United States</option>
                <option value="Japan">Japan</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>

            <!-- STATUS -->
            <div>
              <label for="flt-pi-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
              <select id="flt-pi-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Status</option>
                <option value="APPROVED">Approved</option>
                <option value="PENDING_APPROVAL">Pending Approval</option>
                <option value="DRAFT">Draft</option>
                <option value="CONFIRMED">Confirmed</option>
              </select>
            </div>

            <!-- MANDATORY Search button placed after the last input field -->
            <div class="flex items-end">
              <button type="button" id="flt-pi-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="proforma-table-container"></div>
      </div>
    `;

    // Hook primary action button
    container.querySelector('#btn-generate-pi')?.addEventListener('click', () => {
      this.showAddProformaModal();
    });

    // Toggle filter
    const toggleBtn = container.querySelector('#flt-pi-toggle-btn');
    const filterBody = container.querySelector('#flt-pi-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Table instance holder
    let dtInstance = null;

    const renderTable = (dataToDisplay) => {
      dtInstance = new DataTable({
        containerId: 'proforma-table-container',
        data: dataToDisplay,
        keyField: 'id',
        tableTitle: `Proforma Invoices (${dataToDisplay.length})`,
        searchable: true,
        exportable: true,
        selectable: true,
        showSelectedCount: false,
        pageSize: 10,
        onRowClick: (row) => this.showProformaDetailsModal(row),
        toolbarButtons: [
          {
            id: 'btn-bulk-approve',
            label: 'Bulk Approve',
            variant: 'primary',
            className: 'btn-primary px-4 py-1.5 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
            icon: `<svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
            requiresSelection: true,
            onClick: (selectedKeys, selectedRows, dt) => {
              if (!selectedKeys || selectedKeys.length === 0) return;
              Modal.confirm({
                title: 'Confirm Bulk Approval',
                message: `Are you sure you want to approve the selected ${selectedKeys.length} Proforma Invoice(s)? This will update their status to APPROVED.`,
                confirmText: 'Approve Selected',
                cancelText: 'Cancel',
                isDestructive: false,
                onConfirm: () => {
                  selectedRows.forEach(row => {
                    row.status = 'APPROVED';
                  });
                  dt.selectedKeys.clear();
                  dt.render();
                  Toast.show(`${selectedKeys.length} Proforma Invoice(s) approved successfully!`, 'success');
                }
              });
            }
          }
        ],
        columns: [
          {
            field: '__sno__',
            header: 'S.No',
            render: (v, r, idx) => `<span class="font-mono text-xs text-[#5E6C84]">${idx + 1}</span>`
          },
          {
            field: 'id',
            header: 'ID',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>`
          },
          {
            field: 'processor',
            header: 'Processor',
            render: (v) => `<span class="font-semibold text-xs text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'piNumber',
            header: 'PInv Number',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D]">${v}</span>`
          },
          {
            field: 'piDate',
            header: 'PInv Date',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>`
          },
          {
            field: 'poNumber',
            header: 'Po No',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'buyerName',
            header: 'Buyer',
            render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>`
          },
          {
            field: 'productionPlant',
            header: 'Production Plant',
            render: (v) => `<span class="text-xs text-[#5E6C84]">${v || '-'}</span>`
          },
          {
            field: 'shipByDate',
            header: 'ShipBy Date',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v || '-'}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            render: (v) => {
              const val = String(v || '').toUpperCase();
              let cls = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
              if (val === 'APPROVED' || val.includes('CONFIRMED')) {
                cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              } else if (val.includes('PENDING')) {
                cls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
              } else if (val.includes('DRAFT')) {
                cls = 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
              }
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${val.replace(/_/g, ' ')}</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Print',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
            onClick: (row) => Toast.show(`Printing Proforma Invoice ${row.piNumber}...`, 'info')
          },
          {
            label: 'Copy',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
            onClick: (row) => this.copyProformaInvoice(row)
          },
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditProformaModal(row)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Proforma Invoice',
                message: `Are you sure you want to delete Proforma Invoice ${row.piNumber}? This action cannot be undone.`,
                confirmText: 'Delete PI',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  this.state.proformaList = this.state.proformaList.filter(item => item.id !== row.id);
                  renderTable(this.state.proformaList);
                  Toast.show(`Proforma Invoice ${row.piNumber} deleted successfully`, 'success');
                }
              });
            }
          }
        ]
      });
    };

    renderTable(this.state.proformaList);

    // Search and Reset filters
    const searchBtn = container.querySelector('#flt-pi-search-btn');
    const resetBtn = container.querySelector('#flt-pi-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const exp = container.querySelector('#flt-pi-exporter')?.value || 'ALL';
      const con = container.querySelector('#flt-pi-consignee')?.value || 'ALL';
      const cty = container.querySelector('#flt-pi-country')?.value || 'ALL';
      const st = container.querySelector('#flt-pi-status')?.value || 'ALL';

      let filtered = [...this.state.proformaList];

      if (exp !== 'ALL') {
        filtered = filtered.filter(r => (r.exporter || '').toLowerCase().includes(exp.toLowerCase()));
      }
      if (con !== 'ALL') {
        filtered = filtered.filter(r => (r.consignee || r.buyerName || '').toLowerCase().includes(con.toLowerCase()));
      }
      if (cty !== 'ALL') {
        filtered = filtered.filter(r => (r.country || r.destinationCountry || '').toLowerCase().includes(cty.toLowerCase()));
      }
      if (st !== 'ALL') {
        filtered = filtered.filter(r => (r.status || '').toUpperCase() === st.toUpperCase());
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} record(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      container.querySelector('#flt-pi-exporter').value = 'ALL';
      container.querySelector('#flt-pi-consignee').value = 'ALL';
      container.querySelector('#flt-pi-country').value = 'ALL';
      container.querySelector('#flt-pi-status').value = 'ALL';
      renderTable(this.state.proformaList);
      Toast.show('Filters reset', 'info');
    });
  },

  // Copy Proforma Invoice Helper
  copyProformaInvoice(sourceRow) {
    const nextIdx = this.state.proformaList.length + 1;
    const nextId = `PI-${String(nextIdx).padStart(3, '0')}`;
    const nextNo = `${sourceRow.piNumber}-COPY`;

    const duplicated = {
      ...sourceRow,
      id: nextId,
      piNumber: nextNo,
      piDate: new Date().toISOString().slice(0, 10),
      status: 'DRAFT'
    };

    this.state.proformaList.unshift(duplicated);
    const mainEl = document.getElementById('sales-view-main');
    if (mainEl) this.renderProformaList(mainEl);
    Toast.show(`Proforma Invoice duplicated as ${nextNo}`, 'success');
  },

  // Proforma Invoice Details Modal (Row Click) matching Generate Proforma Invoice
  showProformaDetailsModal(row) {
    const lineItems = row.lineItems || [];
    const totMcs = lineItems.reduce((acc, i) => acc + (Number(i.mcs) || 0), 0) || (row.noOfContainers ? row.noOfContainers * 1200 : 1200);
    const totTrays = lineItems.reduce((acc, i) => acc + (Number(i.traysQty) || 0), 0) || (totMcs * 2);
    const totAmount = lineItems.reduce((acc, i) => acc + (Number(i.amountUsd) || 0), 0) || (totMcs * 10 * 8.85);

    const statusVal = String(row.status || '').toUpperCase();
    let statusClass = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
    if (statusVal === 'APPROVED' || statusVal.includes('CONFIRMED')) {
      statusClass = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
    } else if (statusVal.includes('PENDING')) {
      statusClass = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
    } else if (statusVal.includes('DRAFT')) {
      statusClass = 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
    }

    Modal.open({
      title: `Proforma Invoice Details - ${row.piNumber}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${row.piNumber}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase border ${statusClass}">${statusVal.replace(/_/g, ' ')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${row.currency || 'USD ($)'}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span><strong>Processor:</strong> ${row.processor || row.exporter}</span>
                  <span>•</span>
                  <span><strong>Date:</strong> ${row.piDate || '-'}</span>
                  <span>•</span>
                  <span><strong>Buyer:</strong> ${row.buyerName || '-'}</span>
                  <span>•</span>
                  <span><strong>Port of Discharge:</strong> ${row.portOfDischarge || '-'}</span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 shrink-0">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Master Cartons</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-sm mt-0.5 block">${Number(totMcs).toLocaleString('en-IN')} Mcs</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Trays Qty</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-sm mt-0.5 block">${Number(totTrays).toLocaleString('en-IN')}</span>
              </div>
              <div class="bg-white px-3.5 py-1.5 rounded-lg border border-[#ABF5D1] bg-[#F0FDF4] shadow-2xs text-center min-w-[100px]">
                <span class="text-[10px] font-bold text-[#006644] uppercase tracking-wider block">Total Amount</span>
                <span class="font-mono font-extrabold text-[#006644] text-sm mt-0.5 block">$${Number(totAmount).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Exporter, Processor & Reference -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Exporter, Processor &amp; Reference</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SELECT EXPORTER</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.exporter || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SELECT PROCESSOR</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.processor || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PRODUCTION PLANT</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.productionPlant || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NO OF CONTAINERS</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${row.noOfContainers || 1} FCL</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">REFERENCE NUMBER</span>
                <span class="font-mono font-semibold text-[#00A4B7] text-xs block mt-0.5">${row.referenceNumber || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Proforma Invoice & Purchase Order -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Proforma Invoice &amp; PO Details</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PROFORMA INVOICE NO</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${row.piNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PROFORMA INVOICE DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${row.piDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">P.O NO</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${row.poNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">P.O DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${row.poDate || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 3: Buyer & Consignee Parties -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Buyer, Consignee &amp; Stakeholder Parties</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BUYER NAME</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${row.buyerName || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONSIGNEE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.consignee || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ULTIMATE CONSIGNEE</span>
                <span class="text-[#172B4D] text-xs block mt-0.5">${row.ultimateConsignee || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NOTIFY PARTY</span>
                <span class="text-[#172B4D] text-xs block mt-0.5">${row.notifyParty || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">IMPORTER OF RECORD</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.importerOfRecord || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">AGENT</span>
                <span class="text-[#172B4D] text-xs block mt-0.5">${row.agent || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CERTIFICATION</span>
                <span class="font-semibold text-[#00875A] text-xs block mt-0.5">${row.certification || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 4: Ports & Shipment Routing -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Port Routing &amp; Shipment Dates</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PORT OF LOADING</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.portOfLoading || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">DESTINATION COUNTRY</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.destinationCountry || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PORT OF DISCHARGE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.portOfDischarge || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FINAL DESTINATION COUNTRY</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.finalDestinationCountry || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FINAL DESTINATION</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.finalDestination || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPBY DATE</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${row.shipByDate || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPBY DATE 2 (TEXT)</span>
                <span class="text-[#5E6C84] text-xs block mt-0.5">${row.shipByDate2 || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 5: Commercial Terms & Banking -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial Terms, Banking &amp; Currency</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BANK DETAILS</span>
                <span class="font-mono text-xs text-[#172B4D] block mt-0.5">${row.bankDetails || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHOW BANK</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.showBank || 'Yes'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PAYMENT TERMS</span>
                <span class="font-semibold text-[#00A4B7] text-xs block mt-0.5">${row.paymentTerms || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPMENT TERMS</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.shipmentTerms || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">DELIVERY TERMS</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.deliveryTerms || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">QUANTITY UNITS</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.quantityUnits || 'Kilograms (Kg)'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CURRENCY</span>
                <span class="font-bold text-[#403294] text-xs block mt-0.5">${row.currency || 'USD ($)'}</span>
              </div>
            </div>
          </div>

          <!-- Section 6: Freight, Charges & Remarks -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Freight, Charges &amp; Remarks</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FREIGHT</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.freight || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CHARGE NAME</span>
                <span class="text-[#172B4D] text-xs block mt-0.5">${row.chargeName || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CHARGE AMOUNT</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">$${Number(row.chargeAmount || 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">STATUS</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${statusClass} uppercase block w-fit mt-0.5">${statusVal.replace(/_/g, ' ')}</span>
              </div>
              <div class="sm:col-span-4">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">REMARKS</span>
                <p class="text-xs text-[#5E6C84] mt-0.5 bg-[#F8FAFC] p-2.5 rounded-lg border border-[#F1F5F9]">${row.remarks || 'No special remarks recorded.'}</p>
              </div>
            </div>
          </div>

          <!-- Section 7: Data Table (Variety Line Items) matching Generate Proforma Invoice -->
          <div class="bg-white rounded-xl">
            <div class="flex items-center justify-between border-b border-[#F1F5F9]">
              <div class="flex items-center gap-2">
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Data Table (Variety Line Items)</h4>
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] uppercase">${lineItems.length} Variety Items</span>
            </div>
            
            <div class="overflow-x-auto max-h-[340px] rounded-lg border border-[#DFE1E6]">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#5E6C84] uppercase font-bold text-[10px] tracking-wider">
                    <th class="py-2.5 px-2.5">ID</th>
                    <th class="py-2.5 px-2.5">Variety</th>
                    <th class="py-2.5 px-2.5">Grade</th>
                    <th class="py-2.5 px-2.5">Packing Style</th>
                    <th class="py-2.5 px-2.5">Treatment</th>
                    <th class="py-2.5 px-2.5">Freezing Type</th>
                    <th class="py-2.5 px-2.5">Brand</th>
                    <th class="py-2.5 px-2.5 text-right">Mcs</th>
                    <th class="py-2.5 px-2.5 text-right">Trays Qty</th>
                    <th class="py-2.5 px-2.5 text-right">Unit Price (BAGS)</th>
                    <th class="py-2.5 px-2.5 text-right">Ddp Price</th>
                    <th class="py-2.5 px-2.5 text-right">Amount in (USD)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#F1F5F9] bg-white">
                  ${lineItems.length === 0 ? `
                    <tr><td colspan="12" class="py-6 text-center text-xs text-[#5E6C84]">No variety line items recorded for this invoice.</td></tr>
                  ` : lineItems.map(item => `
                    <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#F1F5F9] text-[#172B4D]">
                      <td class="py-2.5 px-2.5 font-mono font-bold text-[#00A4B7]">${item.id}</td>
                      <td class="py-2.5 px-2.5 font-bold">${item.variety}</td>
                      <td class="py-2.5 px-2.5 font-semibold text-[#5E6C84]">${item.grade}</td>
                      <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.packingStyle}</td>
                      <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.treatment}</td>
                      <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.freezingType}</td>
                      <td class="py-2.5 px-2.5 font-medium">${item.brand}</td>
                      <td class="py-2.5 px-2.5 text-right font-mono font-bold">${Number(item.mcs).toLocaleString('en-IN')}</td>
                      <td class="py-2.5 px-2.5 text-right font-mono text-[#5E6C84]">${Number(item.traysQty).toLocaleString('en-IN')}</td>
                      <td class="py-2.5 px-2.5 text-right font-mono font-semibold text-[#172B4D]">$${Number(item.unitPriceBags).toFixed(2)}</td>
                      <td class="py-2.5 px-2.5 text-right font-mono text-[#5E6C84]">$${Number(item.ddpPrice).toFixed(2)}</td>
                      <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-[#006644]">$${Number(item.amountUsd).toLocaleString('en-IN')}</td>
                    </tr>
                  `).join('')}
                </tbody>
                <tfoot class="bg-[#F8FAFC] border-t-2 border-[#DFE1E6]">
                  <tr>
                    <td colspan="7" class="py-2.5 px-2.5 text-right uppercase tracking-wider text-[11px] font-extrabold text-[#172B4D]">Total:</td>
                    <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-xs text-[#172B4D]">${Number(totMcs).toLocaleString('en-IN')}</td>
                    <td class="py-2.5 px-2.5 text-right font-mono font-bold text-xs text-[#5E6C84]">${Number(totTrays).toLocaleString('en-IN')}</td>
                    <td colspan="2" class="py-2.5 px-2.5"></td>
                    <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-xs text-[#006644]">$${Number(totAmount).toLocaleString('en-IN')}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Print PI',
          type: 'secondary',
          onClick: () => Toast.show(`Printing Proforma Invoice ${row.piNumber}...`, 'info')
        },
        {
          label: 'Edit Proforma Invoice',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            this.showEditProformaModal(row);
          }
        }
      ]
    });
  },

  // Edit Proforma Invoice 2-Step Wizard Modal (Matching Generate Proforma Invoice)
  showEditProformaModal(row) {
    // Clone lineItems and headerData so modifications are atomic
    const lineItems = row.lineItems ? JSON.parse(JSON.stringify(row.lineItems)) : [
      {
        id: 1,
        variety: "Vannamei Shrimp HLSO IQF",
        grade: "26/30",
        packingStyle: "10x1 Kg Printed Bags",
        treatment: "Non-Treated",
        freezingType: "IQF",
        brand: "Devi Gold",
        mcs: 1200,
        traysQty: 2400,
        unitPriceBags: 8.85,
        ddpPrice: 9.45,
        amountUsd: 106200,
        cups: 240,
        cupsPriceBags: 0.65,
        code: "PRD-VAN-2630",
        fullName: "Frozen Raw Headless Shell-On White Shrimp 26/30",
        description: "Individually Quick Frozen, 10x1kg bags per master carton",
        buyerDescription: "Custom retail branded packing with UPC barcode"
      }
    ];

    const headerData = { ...row };

    // Launch Step 1 of Edit Wizard
    this.openStep1Modal(lineItems, headerData, true, row);
  },

  // Generate Proforma Invoice 2-Step Wizard Modal
  showAddProformaModal() {
    const nextIdx = this.state.proformaList.length + 1;
    const nextId = `PI-${String(nextIdx).padStart(3, '0')}`;
    const nextNo = `PI-2026-${905 + nextIdx}`;
    const today = new Date().toISOString().slice(0, 10);

    // Initial default line items
    let lineItems = [
      {
        id: 1,
        variety: "Vannamei Shrimp HLSO IQF",
        grade: "26/30",
        packingStyle: "10x1 Kg Printed Bags",
        treatment: "Non-Treated",
        freezingType: "IQF",
        brand: "Devi Gold",
        mcs: 1200,
        traysQty: 2400,
        unitPriceBags: 8.85,
        ddpPrice: 9.45,
        amountUsd: 106200,
        cups: 240,
        cupsPriceBags: 0.65,
        code: "PRD-VAN-2630",
        fullName: "Frozen Raw Headless Shell-On White Shrimp 26/30",
        description: "Individually Quick Frozen, 10x1kg bags per master carton",
        buyerDescription: "Custom retail branded packing with UPC barcode"
      },
      {
        id: 2,
        variety: "Vannamei Cooked Tail-On IQF",
        grade: "31/40",
        packingStyle: "10x1 Kg Retail Pouch",
        treatment: "STPP Treated",
        freezingType: "IQF",
        brand: "Ocean Pearl",
        mcs: 600,
        traysQty: 1200,
        unitPriceBags: 9.60,
        ddpPrice: 10.20,
        amountUsd: 57600,
        cups: 120,
        cupsPriceBags: 0.70,
        code: "PRD-CKD-3140",
        fullName: "Cooked Peeled Tail-On White Shrimp 31/40",
        description: "Blanched / Cooked IQF, ready to eat",
        buyerDescription: "Foodservice label pack"
      }
    ];

    let headerData = {
      id: nextId,
      exporter: 'Devi Fisheries Limited',
      processor: 'Devi Fisheries Limited - Unit 1',
      noOfContainers: 1,
      referenceNumber: `REF-2026-${Math.floor(100 + Math.random() * 900)}`,
      piNumber: nextNo,
      piDate: today,
      poNumber: 'PO-RL-8835',
      poDate: today,
      consignee: 'Red Lobster Supply Chain LLC',
      ultimateConsignee: 'Red Lobster Distribution Center',
      buyerName: 'Red Lobster Supply Chain LLC',
      notifyParty: 'Expeditors International USA Inc.',
      importerOfRecord: 'Red Lobster Supply Chain LLC',
      agent: 'Seaways Global Logistics Ltd',
      certification: 'BAP 4-Star & ASC Certified',
      portOfLoading: 'Visakhapatnam Sea Port (INVTZ)',
      destinationCountry: 'United States',
      country: 'United States',
      portOfDischarge: 'Long Beach Port, USA',
      finalDestinationCountry: 'United States',
      finalDestination: 'Los Angeles Cold Storage, CA',
      shipByDate: '2026-11-30',
      shipByDate2: 'Late November 2026',
      bankDetails: 'State Bank of India - Overseas Branch Vizag (A/C: 30198821049, IFSC: SBIN0004128)',
      showBank: 'Yes',
      paymentTerms: '100% Irrevocable LC at Sight',
      shipmentTerms: 'Full Container Load (FCL)',
      deliveryTerms: 'CIF Port of Destination',
      quantityUnits: 'Kilograms (Kg)',
      currency: 'USD ($)',
      freight: 'Freight Prepaid',
      chargeName: 'Ocean Freight & Reefer THC',
      chargeAmount: 4850,
      productionPlant: 'Unit 1 - Processing (Vizag)',
      remarks: 'Pre-shipment quality clearance required.',
      status: 'PENDING_APPROVAL'
    };

    // Open Step 1 (34-field form)
    this.openStep1Modal(lineItems, headerData, false, null);
  },

  // Wizard Step 1: Proforma Commercial & Shipping Details Form (34 Fields)
  openStep1Modal(lineItems, headerData, isEdit = false, targetRow = null) {
    const d = headerData || {};
    const modalTitle = isEdit 
      ? `Edit Proforma Invoice: ${d.piNumber} - Step 1: Proforma Invoice Details`
      : 'Generate Proforma Invoice - Step 1: Proforma Invoice Details';

    Modal.open({
      title: modalTitle,
      size: 'xl',
      content: `
        <form id="form-pi-details" class="space-y-4 text-xs">
          <!-- Section 1: Exporter & Processor Details -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Exporter, Processor &amp; Reference</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT EXPORTER <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Devi Fisheries Limited" ${d.exporter === 'Devi Fisheries Limited' ? 'selected' : ''}>Devi Fisheries Limited</option>
                  <option value="Devi Sea Foods Ltd" ${d.exporter === 'Devi Sea Foods Ltd' ? 'selected' : ''}>Devi Sea Foods Ltd</option>
                  <option value="Devi Marine Processors" ${d.exporter === 'Devi Marine Processors' ? 'selected' : ''}>Devi Marine Processors</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT PROCESSOR <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-processor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Devi Fisheries Limited - Unit 1" ${d.processor === 'Devi Fisheries Limited - Unit 1' ? 'selected' : ''}>Devi Fisheries Limited - Unit 1</option>
                  <option value="Devi Sea Foods Ltd (Plant 2)" ${d.processor === 'Devi Sea Foods Ltd (Plant 2)' ? 'selected' : ''}>Devi Sea Foods Ltd (Plant 2)</option>
                  <option value="Devi Marine Processors Unit-3" ${d.processor === 'Devi Marine Processors Unit-3' ? 'selected' : ''}>Devi Marine Processors Unit-3</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRODUCTION PLANT</label>
                <select id="form-pi-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Unit 1 - Processing (Vizag)" ${d.productionPlant === 'Unit 1 - Processing (Vizag)' ? 'selected' : ''}>Unit 1 - Processing (Vizag)</option>
                  <option value="Unit 2 - Value Added (Singarayakonda)" ${d.productionPlant === 'Unit 2 - Value Added (Singarayakonda)' ? 'selected' : ''}>Unit 2 - Value Added (Singarayakonda)</option>
                  <option value="Unit 3 - Pre-processing (Kakinada)" ${d.productionPlant === 'Unit 3 - Pre-processing (Kakinada)' ? 'selected' : ''}>Unit 3 - Pre-processing (Kakinada)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NO OF CONTAINERS</label>
                <input type="number" id="form-pi-containers" value="${d.noOfContainers || 1}" min="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REFERENCE NUMBER</label>
                <input type="text" id="form-pi-ref" value="${d.referenceNumber || ''}" placeholder="e.g. REF-2026-901" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 2: Proforma Invoice & Purchase Order -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Proforma Invoice &amp; PO Details</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROFORMA INVOICE NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-number" value="${d.piNumber || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROFORMA INVOICE DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="form-pi-date" value="${d.piDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">P.O NO</label>
                <input type="text" id="form-pi-po-no" value="${d.poNumber || ''}" placeholder="e.g. PO-8821" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">P.O DATE</label>
                <input type="date" id="form-pi-po-date" value="${d.poDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 3: Buyer & Consignee Parties -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Buyer, Consignee &amp; Stakeholder Parties</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BUYER NAME</label>
                <input type="text" id="form-pi-buyer" value="${d.buyerName || ''}" placeholder="Foreign Buyer / Client" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONSIGNEE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-consignee" value="${d.consignee || ''}" placeholder="Consignee Name" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ULTIMATE CONSIGNEE</label>
                <input type="text" id="form-pi-ult-consignee" value="${d.ultimateConsignee || ''}" placeholder="Destination Facility" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NOTIFY PARTY</label>
                <input type="text" id="form-pi-notify" value="${d.notifyParty || ''}" placeholder="Freight Broker / Clearing Agency" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">IMPORTER OF RECORD <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-importer-record" value="${d.importerOfRecord || ''}" placeholder="IOR Entity" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AGENT</label>
                <input type="text" id="form-pi-agent" value="${d.agent || ''}" placeholder="Shipping / Handling Agent" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CERTIFICATION</label>
                <input type="text" id="form-pi-cert" value="${d.certification || ''}" placeholder="e.g. BAP 4-Star, ASC, MSC, HACCP, ISO 22000" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 4: Ports & Shipment Routing -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Port Routing &amp; Shipment Dates</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF LOADING <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-pol" value="${d.portOfLoading || 'Visakhapatnam Sea Port (INVTZ)'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DESTINATION COUNTRY <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-dest-country" value="${d.destinationCountry || 'United States'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF DISCHARGE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-pod" value="${d.portOfDischarge || 'Long Beach Port, USA'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FINAL DESTINATION COUNTRY</label>
                <input type="text" id="form-pi-final-dest-country" value="${d.finalDestinationCountry || 'United States'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FINAL DESTINATION <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-final-dest" value="${d.finalDestination || 'Los Angeles Cold Storage, CA'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPBY DATE</label>
                <input type="date" id="form-pi-shipby" value="${d.shipByDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPBY DATE 2 (TEXT)</label>
                <input type="text" id="form-pi-shipby-text" value="${d.shipByDate2 || ''}" placeholder="e.g. Late November 2026 / Week 48" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 5: Commercial Terms & Banking -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial Terms, Banking &amp; Currency</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BANK DETAILS <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-bank" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="State Bank of India (Forex Cell, Vizag)" ${d.bankDetails?.includes('State Bank') ? 'selected' : ''}>State Bank of India - Overseas Branch Vizag (A/C: 30198821049, IFSC: SBIN0004128)</option>
                  <option value="Canara Bank Overseas Branch" ${d.bankDetails?.includes('Canara') ? 'selected' : ''}>Canara Bank - Overseas Branch Vizag (A/C: 08452010992, IFSC: CNRB0000845)</option>
                  <option value="HDFC Bank Trade Finance" ${d.bankDetails?.includes('HDFC') ? 'selected' : ''}>HDFC Bank Trade Services Vizag (A/C: 50200088921, IFSC: HDFC0000120)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHOW BANK <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-show-bank" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Yes" ${d.showBank !== 'No' ? 'selected' : ''}>Yes</option>
                  <option value="No" ${d.showBank === 'No' ? 'selected' : ''}>No</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAYMENT TERMS <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-payment-terms" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="100% Irrevocable LC at Sight" ${d.paymentTerms === '100% Irrevocable LC at Sight' ? 'selected' : ''}>100% Irrevocable LC at Sight</option>
                  <option value="30% Advance + 70% Against CAD" ${d.paymentTerms === '30% Advance + 70% Against CAD' ? 'selected' : ''}>30% Advance + 70% Against CAD</option>
                  <option value="LC 60 Days from B/L Date" ${d.paymentTerms === 'LC 60 Days from B/L Date' ? 'selected' : ''}>LC 60 Days from B/L Date</option>
                  <option value="Open Account 30 Days" ${d.paymentTerms === 'Open Account 30 Days' ? 'selected' : ''}>Open Account 30 Days</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPMENT TERMS <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-shipment-terms" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Full Container Load (FCL)" ${d.shipmentTerms !== 'Less than Container Load (LCL)' ? 'selected' : ''}>Full Container Load (FCL)</option>
                  <option value="Less than Container Load (LCL)" ${d.shipmentTerms === 'Less than Container Load (LCL)' ? 'selected' : ''}>Less than Container Load (LCL)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DELIVERY TERMS <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-delivery-terms" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="CIF Port of Destination" ${d.deliveryTerms === 'CIF Port of Destination' ? 'selected' : ''}>CIF Port of Destination</option>
                  <option value="CFR Port of Destination" ${d.deliveryTerms === 'CFR Port of Destination' ? 'selected' : ''}>CFR Port of Destination</option>
                  <option value="FOB Visakhapatnam Port" ${d.deliveryTerms === 'FOB Visakhapatnam Port' ? 'selected' : ''}>FOB Visakhapatnam Port (INVTZ)</option>
                  <option value="DDP Destination" ${d.deliveryTerms === 'DDP Destination' ? 'selected' : ''}>DDP Destination</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">QUANTITY UNITS <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-qty-units" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Kilograms (Kg)" ${d.quantityUnits !== 'Pounds (Lbs)' ? 'selected' : ''}>Kilograms (Kg)</option>
                  <option value="Metric Tons (MT)" ${d.quantityUnits === 'Metric Tons (MT)' ? 'selected' : ''}>Metric Tons (MT)</option>
                  <option value="Cartons / Cases" ${d.quantityUnits === 'Cartons / Cases' ? 'selected' : ''}>Cartons / Cases</option>
                  <option value="Pounds (Lbs)" ${d.quantityUnits === 'Pounds (Lbs)' ? 'selected' : ''}>Pounds (Lbs)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CURRENCY <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-currency" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="USD ($)" ${d.currency?.includes('USD') ? 'selected' : ''}>USD ($)</option>
                  <option value="EUR (€)" ${d.currency?.includes('EUR') ? 'selected' : ''}>EUR (€)</option>
                  <option value="JPY (¥)" ${d.currency?.includes('JPY') ? 'selected' : ''}>JPY (¥)</option>
                  <option value="GBP (£)" ${d.currency?.includes('GBP') ? 'selected' : ''}>GBP (£)</option>
                  <option value="INR (₹)" ${d.currency?.includes('INR') ? 'selected' : ''}>INR (₹)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section 6: Freight, Charges & Remarks -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Freight, Charges &amp; Remarks</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT</label>
                <select id="form-pi-freight" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Freight Prepaid" ${d.freight !== 'Freight Collect' ? 'selected' : ''}>Freight Prepaid</option>
                  <option value="Freight Collect" ${d.freight === 'Freight Collect' ? 'selected' : ''}>Freight Collect</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CHARGE NAME</label>
                <input type="text" id="form-pi-charge-name" value="${d.chargeName || ''}" placeholder="e.g. Ocean Freight & THC Surcharge" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CHARGE AMOUNT</label>
                <input type="number" id="form-pi-charge-amount" value="${d.chargeAmount || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div class="sm:col-span-2 md:col-span-4">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
                <textarea id="form-pi-remarks" rows="2" placeholder="Special contractual conditions, testing mandates & packing instructions" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${d.remarks || ''}</textarea>
              </div>
            </div>
          </div>
        </form>
      `,
      buttons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Next',
          type: 'primary',
          onClick: (modal) => {
            const getVal = (id) => document.getElementById(id)?.value?.trim() || '';

            const piNo = getVal('form-pi-number');
            const piDate = getVal('form-pi-date');
            const exporter = getVal('form-pi-exporter');
            const processor = getVal('form-pi-processor');
            const consignee = getVal('form-pi-consignee');
            const importerRecord = getVal('form-pi-importer-record');
            const pol = getVal('form-pi-pol');
            const destCountry = getVal('form-pi-dest-country');
            const pod = getVal('form-pi-pod');
            const finalDest = getVal('form-pi-final-dest');

            if (!piNo || !piDate || !exporter || !processor || !consignee || !importerRecord || !pol || !destCountry || !pod || !finalDest) {
              Toast.show('Please fill in all mandatory fields marked with *', 'warning');
              return;
            }

            // Save user inputs into headerData
            Object.assign(headerData, {
              exporter,
              processor,
              productionPlant: getVal('form-pi-plant'),
              noOfContainers: Number(getVal('form-pi-containers')) || 1,
              referenceNumber: getVal('form-pi-ref'),
              piNumber: piNo,
              piDate,
              poNumber: getVal('form-pi-po-no'),
              poDate: getVal('form-pi-po-date'),
              buyerName: getVal('form-pi-buyer') || consignee,
              consignee,
              ultimateConsignee: getVal('form-pi-ult-consignee'),
              notifyParty: getVal('form-pi-notify'),
              importerOfRecord: importerRecord,
              agent: getVal('form-pi-agent'),
              certification: getVal('form-pi-cert'),
              portOfLoading: pol,
              destinationCountry: destCountry,
              country: destCountry,
              portOfDischarge: pod,
              finalDestinationCountry: getVal('form-pi-final-dest-country') || destCountry,
              finalDestination: finalDest,
              shipByDate: getVal('form-pi-shipby'),
              shipByDate2: getVal('form-pi-shipby-text'),
              bankDetails: getVal('form-pi-bank'),
              showBank: getVal('form-pi-show-bank'),
              paymentTerms: getVal('form-pi-payment-terms'),
              shipmentTerms: getVal('form-pi-shipment-terms'),
              deliveryTerms: getVal('form-pi-delivery-terms'),
              quantityUnits: getVal('form-pi-qty-units'),
              currency: getVal('form-pi-currency'),
              freight: getVal('form-pi-freight'),
              chargeName: getVal('form-pi-charge-name'),
              chargeAmount: Number(getVal('form-pi-charge-amount')) || 0,
              remarks: getVal('form-pi-remarks')
            });

            modal.close();
            // Proceed to Step 2: Variety & Line Items Entry
            this.openStep2Modal(lineItems, headerData, isEdit, targetRow);
          }
        }
      ]
    });
  },

  // Wizard Step 2: Variety Line Items Entry & Data Table (No border, No padding)
  openStep2Modal(lineItems, headerData, isEdit = false, targetRow = null) {
    const renderTableRows = () => {
      if (!lineItems || lineItems.length === 0) {
        return `<tr><td colspan="13" class="py-6 text-center text-xs text-[#5E6C84]">No variety line items added yet. Fill the inputs above and click "Add Line Item".</td></tr>`;
      }
      return lineItems.map((item, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#F1F5F9] text-[#172B4D]">
          <td class="py-2.5 px-2.5 font-mono font-bold text-[#00A4B7]">${item.id}</td>
          <td class="py-2.5 px-2.5 font-bold">${item.variety}</td>
          <td class="py-2.5 px-2.5 font-semibold text-[#5E6C84]">${item.grade}</td>
          <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.packingStyle}</td>
          <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.treatment}</td>
          <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.freezingType}</td>
          <td class="py-2.5 px-2.5 font-medium">${item.brand}</td>
          <td class="py-2.5 px-2.5 text-right font-mono font-bold">${Number(item.mcs).toLocaleString('en-IN')}</td>
          <td class="py-2.5 px-2.5 text-right font-mono text-[#5E6C84]">${Number(item.traysQty).toLocaleString('en-IN')}</td>
          <td class="py-2.5 px-2.5 text-right font-mono font-semibold text-[#172B4D]">$${Number(item.unitPriceBags).toFixed(2)}</td>
          <td class="py-2.5 px-2.5 text-right font-mono text-[#5E6C84]">$${Number(item.ddpPrice).toFixed(2)}</td>
          <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-[#006644]">$${Number(item.amountUsd).toLocaleString('en-IN')}</td>
          <td class="py-2.5 px-2.5 text-center">
            <button type="button" data-del-item-id="${item.id}" class="btn-del-item dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#FFEBE6] border border-[#CBD5E1] hover:border-[#DE350B] text-[#DE350B] rounded-full transition-colors cursor-pointer" title="Remove line item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');
    };

    const renderTableTotals = () => {
      const totMcs = lineItems.reduce((acc, i) => acc + (Number(i.mcs) || 0), 0);
      const totTrays = lineItems.reduce((acc, i) => acc + (Number(i.traysQty) || 0), 0);
      const totAmount = lineItems.reduce((acc, i) => acc + (Number(i.amountUsd) || 0), 0);
      return `
        <tr>
          <td colspan="7" class="py-2.5 px-2.5 text-right uppercase tracking-wider text-[11px] font-extrabold text-[#172B4D]">Total:</td>
          <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-xs text-[#172B4D]">${totMcs.toLocaleString('en-IN')}</td>
          <td class="py-2.5 px-2.5 text-right font-mono font-bold text-xs text-[#5E6C84]">${totTrays.toLocaleString('en-IN')}</td>
          <td colspan="2" class="py-2.5 px-2.5"></td>
          <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-xs text-[#006644]">$${totAmount.toLocaleString('en-IN')}</td>
          <td></td>
        </tr>
      `;
    };

    const modalTitle = isEdit 
      ? `Edit Proforma Invoice: ${headerData.piNumber} - Step 2: Variety & Line Items Entry`
      : 'Generate Proforma Invoice - Step 2: Variety & Line Items Entry';

    const submitLabel = isEdit ? 'Update Proforma Invoice' : 'Create Proforma Invoice';

    Modal.open({
      title: modalTitle,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Step 2 Form Input Fields (No border, No padding) -->
          <div class="bg-white rounded-xl">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Form Input Fields (Variety &amp; Pricing)</h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              <!-- SELECT PI * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT PI <span class="text-[#DE350B]">*</span></label>
                <select id="li-select-pi" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="${headerData?.piNumber || 'PI-2026-911'}">${headerData?.piNumber || 'PI-2026-911'} (Current Proforma)</option>
                  <option value="PI-2026-901">PI-2026-901 (Red Lobster)</option>
                  <option value="PI-2026-902">PI-2026-902 (Maruha Nichiro)</option>
                  <option value="PI-2026-903">PI-2026-903 (Royal Greenland)</option>
                  <option value="PI-2026-904">PI-2026-904 (Sysco)</option>
                </select>
              </div>

              <!-- VARIETY NAME * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VARIETY NAME <span class="text-[#DE350B]">*</span></label>
                <select id="li-variety-name" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Vannamei Shrimp HLSO IQF">Vannamei Shrimp HLSO IQF</option>
                  <option value="Vannamei PDTO IQF">Vannamei PDTO IQF</option>
                  <option value="Vannamei Cooked Tail-On IQF">Vannamei Cooked Tail-On IQF</option>
                  <option value="Black Tiger HOSO Semi-IQF">Black Tiger HOSO Semi-IQF</option>
                  <option value="Asian Seabass Fillet IQF">Asian Seabass Fillet IQF</option>
                  <option value="Vannamei Easy Peel IQF">Vannamei Easy Peel IQF</option>
                </select>
              </div>

              <!-- MCS * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">MCS <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="li-mcs" value="800" min="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Master Cartons">
              </div>

              <!-- TRAYS QUANTITY -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TRAYS QUANTITY</label>
                <input type="number" id="li-trays" value="1600" min="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Trays Qty">
              </div>

              <!-- RATE/BAGS * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RATE/BAGS <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="0.01" id="li-rate-bags" value="9.20" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Rate USD">
              </div>

              <!-- DDP PRICE -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DDP PRICE</label>
                <input type="number" step="0.01" id="li-ddp-price" value="9.80" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="DDP Price">
              </div>

              <!-- CUPS -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CUPS</label>
                <input type="number" id="li-cups" value="160" min="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Cups Qty">
              </div>

              <!-- CUPS PRICE/BAGS -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CUPS PRICE/BAGS</label>
                <input type="number" step="0.01" id="li-cups-price" value="0.75" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Price / Bag">
              </div>

              <!-- CODE -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE</label>
                <input type="text" id="li-code" value="PRD-VAN-HLSO" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="SKU Code">
              </div>

              <!-- FULL NAME -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FULL NAME</label>
                <input type="text" id="li-full-name" value="Frozen Raw HLSO Vannamei Shrimp" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Full Product Name">
              </div>

              <!-- DESCRIPTION -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DESCRIPTION</label>
                <input type="text" id="li-desc" value="10x1kg bags per master carton, IQF" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Description">
              </div>

              <!-- BUYER DESCRIPTION -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BUYER DESCRIPTION</label>
                <input type="text" id="li-buyer-desc" value="Private label retail pouch with UPC" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Buyer Description">
              </div>

              <!-- Auxiliary attributes -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GRADE</label>
                <select id="li-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="26/30">26/30</option>
                  <option value="16/20">16/20</option>
                  <option value="21/25">21/25</option>
                  <option value="31/40">31/40</option>
                  <option value="41/50">41/50</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PACKING STYLE</label>
                <select id="li-packing" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="10x1 Kg Printed Bags">10x1 Kg Printed Bags</option>
                  <option value="6x2 Kg Blocks">6x2 Kg Blocks</option>
                  <option value="10x1 Kg Retail Pouch">10x1 Kg Retail Pouch</option>
                  <option value="Bulk 10 Kg Master">Bulk 10 Kg Master</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TREATMENT</label>
                <select id="li-treatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Non-Treated">Non-Treated</option>
                  <option value="STPP Treated">STPP Treated</option>
                  <option value="Citric Acid Treated">Citric Acid Treated</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREEZING TYPE</label>
                <select id="li-freezing" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="IQF">IQF</option>
                  <option value="Semi-IQF">Semi-IQF</option>
                  <option value="Block Frozen">Block Frozen</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BRAND</label>
                <input type="text" id="li-brand" value="Devi Gold" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Brand">
              </div>

              <div class="flex items-end">
                <button type="button" id="btn-add-line-item" class="btn-primary w-full px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                  <span>Add Line Item</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Step 2 Data Table (No border, No padding) -->
          <div class="bg-white rounded-xl">
            <div class="flex items-center justify-between border-b border-[#F1F5F9]">
              <div class="flex items-center gap-2">
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Data Table (Variety Line Items)</h4>
              </div>
              <span id="li-items-count" class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] uppercase">${lineItems.length} Variety Items</span>
            </div>
            
            <div class="overflow-x-auto max-h-[340px] rounded-lg border border-[#DFE1E6]">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#5E6C84] uppercase font-bold text-[10px] tracking-wider">
                    <th class="py-2.5 px-2.5">ID</th>
                    <th class="py-2.5 px-2.5">Variety</th>
                    <th class="py-2.5 px-2.5">Grade</th>
                    <th class="py-2.5 px-2.5">Packing Style</th>
                    <th class="py-2.5 px-2.5">Treatment</th>
                    <th class="py-2.5 px-2.5">Freezing Type</th>
                    <th class="py-2.5 px-2.5">Brand</th>
                    <th class="py-2.5 px-2.5 text-right">Mcs</th>
                    <th class="py-2.5 px-2.5 text-right">Trays Qty</th>
                    <th class="py-2.5 px-2.5 text-right">Unit Price (BAGS)</th>
                    <th class="py-2.5 px-2.5 text-right">Ddp Price</th>
                    <th class="py-2.5 px-2.5 text-right">Amount in (USD)</th>
                    <th class="py-2.5 px-2.5 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody id="li-table-tbody" class="divide-y divide-[#F1F5F9] bg-white">
                  ${renderTableRows()}
                </tbody>
                <tfoot id="li-table-tfoot" class="bg-[#F8FAFC] border-t-2 border-[#DFE1E6]">
                  ${renderTableTotals()}
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Back',
          type: 'secondary',
          onClick: (modal) => {
            modal.close();
            // Reopen Step 1 with preserved lineItems and headerData
            this.openStep1Modal(lineItems, headerData, isEdit, targetRow);
          }
        },
        {
          label: submitLabel,
          type: 'primary',
          onClick: (modal) => {
            if (!lineItems || lineItems.length === 0) {
              Toast.show('Please add at least one variety line item to proceed', 'warning');
              return;
            }

            if (isEdit && targetRow) {
              Object.assign(targetRow, headerData, {
                lineItems: [...lineItems]
              });
              modal.close();
              Toast.show(`Proforma Invoice ${targetRow.piNumber} updated successfully!`, 'success');
              const mainEl = document.getElementById('sales-view-main');
              if (mainEl) this.renderProformaList(mainEl);
            } else {
              const newRecord = {
                ...headerData,
                lineItems: [...lineItems],
                status: 'PENDING_APPROVAL'
              };

              this.state.proformaList.unshift(newRecord);
              modal.close();
              Toast.show(`Proforma Invoice ${newRecord.piNumber} generated successfully!`, 'success');
              const mainEl = document.getElementById('sales-view-main');
              if (mainEl) this.renderProformaList(mainEl);
            }
          }
        }
      ]
    });

    // Add Line Item click listener
    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    const bindRowActions = () => {
      modalRoot.querySelectorAll('.btn-del-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const delId = Number(btn.getAttribute('data-del-item-id'));
          const idx = lineItems.findIndex(i => i.id === delId);
          if (idx !== -1) {
            lineItems.splice(idx, 1);
            const tbody = modalRoot.querySelector('#li-table-tbody');
            const tfoot = modalRoot.querySelector('#li-table-tfoot');
            const cnt = modalRoot.querySelector('#li-items-count');
            if (tbody) tbody.innerHTML = renderTableRows();
            if (tfoot) tfoot.innerHTML = renderTableTotals();
            if (cnt) cnt.textContent = `${lineItems.length} Variety Items`;
            bindRowActions();
            Toast.show('Line item removed', 'info');
          }
        });
      });
    };

    bindRowActions();

    modalRoot.querySelector('#btn-add-line-item')?.addEventListener('click', () => {
      const getVal = (id) => modalRoot.querySelector('#' + id)?.value?.trim() || '';

      const variety = getVal('li-variety-name');
      const mcs = Number(getVal('li-mcs')) || 0;
      const rateBags = Number(getVal('li-rate-bags')) || 0;

      if (!variety || mcs <= 0 || rateBags <= 0) {
        Toast.show('Please enter Variety Name, positive Mcs, and Unit Price', 'warning');
        return;
      }

      const nextItemId = lineItems.length > 0 ? Math.max(...lineItems.map(i => i.id)) + 1 : 1;
      const ddp = Number(getVal('li-ddp-price')) || (rateBags + 0.6);
      const amount = Math.round(mcs * 10 * rateBags);

      const newItem = {
        id: nextItemId,
        variety,
        grade: getVal('li-grade') || '26/30',
        packingStyle: getVal('li-packing') || '10x1 Kg Printed Bags',
        treatment: getVal('li-treatment') || 'Non-Treated',
        freezingType: getVal('li-freezing') || 'IQF',
        brand: getVal('li-brand') || 'Devi Gold',
        mcs,
        traysQty: Number(getVal('li-trays')) || (mcs * 2),
        unitPriceBags: rateBags,
        ddpPrice: ddp,
        amountUsd: amount,
        cups: Number(getVal('li-cups')) || 0,
        cupsPriceBags: Number(getVal('li-cups-price')) || 0,
        code: getVal('li-code') || 'PRD-NEW',
        fullName: getVal('li-full-name') || variety,
        description: getVal('li-desc') || 'Standard export packaging',
        buyerDescription: getVal('li-buyer-desc') || 'Buyer label'
      };

      lineItems.push(newItem);

      const tbody = modalRoot.querySelector('#li-table-tbody');
      const tfoot = modalRoot.querySelector('#li-table-tfoot');
      const cnt = modalRoot.querySelector('#li-items-count');
      if (tbody) tbody.innerHTML = renderTableRows();
      if (tfoot) tfoot.innerHTML = renderTableTotals();
      if (cnt) cnt.textContent = `${lineItems.length} Variety Items`;
      bindRowActions();
      Toast.show(`Added ${variety} to line items`, 'success');
    });
  },

    // Tab 2: Custom Invoices (Customs Clearance)
  renderCustomInvoices(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title & Header Actions (NO Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Custom Invoices (Customs Clearance)</h1>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="btn-create-ci" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Create Custom Invoice</span>
            </button>
          </div>
        </div>

        <!-- Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="flt-ci-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="flt-ci-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="flt-ci-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- SELECT YEAR -->
            <div>
              <label for="flt-ci-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT YEAR</label>
              <select id="flt-ci-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Years</option>
                <option value="2026-2027">2026-2027</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>

            <!-- SELECT EXPORTER -->
            <div>
              <label for="flt-ci-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT EXPORTER</label>
              <select id="flt-ci-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Marine Processors">Devi Marine Processors</option>
              </select>
            </div>

            <!-- SELECT CONSIGNEE -->
            <div>
              <label for="flt-ci-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT CONSIGNEE</label>
              <select id="flt-ci-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Consignees</option>
                <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC</option>
                <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation</option>
                <option value="Royal Greenland Seafood A/S">Royal Greenland Seafood A/S</option>
                <option value="Sysco Corporation International">Sysco Corporation International</option>
                <option value="US Foods Trading Co">US Foods Trading Co</option>
              </select>
            </div>

            <!-- SELECT COUNTRY -->
            <div>
              <label for="flt-ci-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT COUNTRY</label>
              <select id="flt-ci-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Countries</option>
                <option value="United States">United States</option>
                <option value="Japan">Japan</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <!-- BILLS TYPE -->
            <div>
              <label for="flt-ci-billstype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BILLS TYPE</label>
              <select id="flt-ci-billstype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Bill Types</option>
                <option value="Duty Drawback">Duty Drawback</option>
                <option value="RoDTEP Scheme">RoDTEP Scheme</option>
                <option value="EPCG Scheme">EPCG Scheme</option>
                <option value="Advance Authorization">Advance Authorization</option>
                <option value="Commercial Export">Commercial Export</option>
              </select>
            </div>

            <!-- MANDATORY Search button placed after the last input field -->
            <div class="flex items-end">
              <button type="button" id="flt-ci-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="custom-invoices-table-container"></div>
      </div>
    `;

    // Hook primary action button
    container.querySelector('#btn-create-ci')?.addEventListener('click', () => {
      this.showAddCustomInvoiceModal();
    });

    // Toggle filter
    const toggleBtn = container.querySelector('#flt-ci-toggle-btn');
    const filterBody = container.querySelector('#flt-ci-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render table
    const renderTable = (dataToDisplay) => {
      new DataTable({
        containerId: 'custom-invoices-table-container',
        data: dataToDisplay,
        keyField: 'id',
        tableTitle: `Custom Invoices (${dataToDisplay.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showCustomInvoiceDetailsModal(row),
        columns: [
          {
            field: '__sno__',
            header: 'SNO',
            render: (v, r, idx) => `<span class="font-mono text-xs text-[#5E6C84]">${idx + 1}</span>`
          },
          {
            field: 'id',
            header: 'ID',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>`
          },
          {
            field: 'invoiceNo',
            header: 'Invoice No',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D]">${v}</span>`
          },
          {
            field: 'invoiceDate',
            header: 'Invoice Date',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>`
          },
          {
            field: 'poNo',
            header: 'Po No',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'buyer',
            header: 'Buyer',
            render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>`
          },
          {
            field: 'pInvoiceNo',
            header: 'PInvoice No',
            render: (v) => `<span class="font-mono text-xs font-bold text-[#403294]">${v || '-'}</span>`
          },
          {
            field: 'stockStatus',
            header: 'Stock Status',
            render: (v) => {
              const val = String(v || '').toUpperCase();
              let cls = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
              if (val.includes('PORT_CLEARED') || val.includes('DISPATCHED') || val.includes('ALLOCATED')) {
                cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              } else if (val.includes('TRANSIT')) {
                cls = 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
              } else if (val.includes('STAGED') || val.includes('PENDING')) {
                cls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
              }
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${val.replace(/_/g, ' ')}</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditCustomInvoiceModal(row)
          },
          {
            label: 'Copy',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
            onClick: (row) => this.copyCustomInvoice(row)
          },
          {
            label: 'Print',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
            onClick: (row) => Toast.show(`Printing Custom Invoice ${row.invoiceNo}...`, 'info')
          }
        ]
      });
    };

    renderTable(this.state.customInvoices);

    // Search and Reset handlers
    const searchBtn = container.querySelector('#flt-ci-search-btn');
    const resetBtn = container.querySelector('#flt-ci-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const yr = container.querySelector('#flt-ci-year')?.value || 'ALL';
      const exp = container.querySelector('#flt-ci-exporter')?.value || 'ALL';
      const con = container.querySelector('#flt-ci-consignee')?.value || 'ALL';
      const cty = container.querySelector('#flt-ci-country')?.value || 'ALL';
      const bt = container.querySelector('#flt-ci-billstype')?.value || 'ALL';

      let filtered = [...this.state.customInvoices];

      if (yr !== 'ALL') {
        filtered = filtered.filter(r => (r.year || '').includes(yr));
      }
      if (exp !== 'ALL') {
        filtered = filtered.filter(r => (r.exporter || '').toLowerCase().includes(exp.toLowerCase()));
      }
      if (con !== 'ALL') {
        filtered = filtered.filter(r => (r.consignee || r.buyer || '').toLowerCase().includes(con.toLowerCase()));
      }
      if (cty !== 'ALL') {
        filtered = filtered.filter(r => (r.country || '').toLowerCase().includes(cty.toLowerCase()));
      }
      if (bt !== 'ALL') {
        filtered = filtered.filter(r => (r.billsType || '').toLowerCase().includes(bt.toLowerCase()));
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} Custom Invoice(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      container.querySelector('#flt-ci-year').value = 'ALL';
      container.querySelector('#flt-ci-exporter').value = 'ALL';
      container.querySelector('#flt-ci-consignee').value = 'ALL';
      container.querySelector('#flt-ci-country').value = 'ALL';
      container.querySelector('#flt-ci-billstype').value = 'ALL';
      renderTable(this.state.customInvoices);
      Toast.show('Filters reset', 'info');
    });
  },

  // Copy Custom Invoice Helper
  copyCustomInvoice(sourceRow) {
    const nextIdx = this.state.customInvoices.length + 1;
    const nextId = `CI-${String(nextIdx).padStart(3, '0')}`;
    const nextNo = `${sourceRow.invoiceNo}-COPY`;

    const duplicated = {
      ...sourceRow,
      id: nextId,
      invoiceNo: nextNo,
      invoiceDate: new Date().toISOString().slice(0, 10),
      stockStatus: 'WAREHOUSE_STAGED',
      lineItems: sourceRow.lineItems ? JSON.parse(JSON.stringify(sourceRow.lineItems)) : []
    };

    this.state.customInvoices.unshift(duplicated);
    const mainEl = document.getElementById('sales-view-main');
    if (mainEl) this.renderCustomInvoices(mainEl);
    Toast.show(`Custom Invoice duplicated as ${nextNo}`, 'success');
  },

  // Custom Invoice Details Modal (Row Click) matching Proforma Invoices (PI Register)
  showCustomInvoiceDetailsModal(row) {
    const linkedPi = this.state.proformaList?.find(p => p.piNumber === row.pInvoiceNo) || {};
    const d = { ...linkedPi, ...row };

    const lineItems = row.lineItems || linkedPi.lineItems || [
      {
        id: 1,
        variety: "Vannamei Shrimp HLSO IQF",
        grade: "26/30",
        packingStyle: "10x1 Kg Printed Bags",
        treatment: "Non-Treated",
        freezingType: "IQF",
        brand: "Devi Gold",
        mcs: Math.round((d.netWeightKg || 18000) / 15),
        traysQty: Math.round((d.netWeightKg || 18000) / 15) * 2,
        unitPriceBags: 8.85,
        ddpPrice: 9.45,
        amountUsd: Number(d.cifValueUsd || 159300),
        cups: 240,
        cupsPriceBags: 0.65,
        code: "PRD-VAN-2630",
        fullName: "Frozen Raw Headless Shell-On White Shrimp 26/30",
        description: "Individually Quick Frozen, 10x1kg bags per master carton",
        buyerDescription: "Custom retail branded packing with UPC barcode"
      }
    ];

    const totMcs = lineItems.reduce((acc, i) => acc + (Number(i.mcs) || 0), 0) || Math.round((d.netWeightKg || 18000) / 10);
    const totTrays = lineItems.reduce((acc, i) => acc + (Number(i.traysQty) || 0), 0) || (totMcs * 2);
    const totAmount = lineItems.reduce((acc, i) => acc + (Number(i.amountUsd) || 0), 0) || Number(d.cifValueUsd || 159300);

    const stockStatusVal = String(d.stockStatus || '').toUpperCase();
    let statusClass = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
    if (stockStatusVal.includes('PORT_CLEARED') || stockStatusVal.includes('DISPATCHED') || stockStatusVal.includes('ALLOCATED')) {
      statusClass = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
    } else if (stockStatusVal.includes('TRANSIT')) {
      statusClass = 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
    } else if (stockStatusVal.includes('STAGED') || stockStatusVal.includes('PENDING')) {
      statusClass = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
    }

    Modal.open({
      title: `Custom Invoice Details - ${d.invoiceNo}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${d.invoiceNo}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase border ${statusClass}">${stockStatusVal.replace(/_/g, ' ')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${d.billsType || 'Commercial Export'}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span><strong>Exporter:</strong> ${d.exporter || '-'}</span>
                  <span>•</span>
                  <span><strong>Processor:</strong> ${d.processor || d.exporter || '-'}</span>
                  <span>•</span>
                  <span><strong>Date:</strong> ${d.invoiceDate || '-'}</span>
                  <span>•</span>
                  <span><strong>Buyer:</strong> ${d.buyer || d.buyerName || '-'}</span>
                  <span>•</span>
                  <span><strong>PI Link:</strong> ${d.pInvoiceNo || d.piNumber || '-'}</span>
                  <span>•</span>
                  <span><strong>Discharge Port:</strong> ${d.dischargePort || d.portOfDischarge || '-'}</span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 shrink-0">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Master Cartons</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-sm mt-0.5 block">${Number(totMcs).toLocaleString('en-IN')} Mcs</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Net Weight</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-sm mt-0.5 block">${Number(d.netWeightKg || totMcs * 10).toLocaleString('en-IN')} Kg</span>
              </div>
              <div class="bg-white px-3.5 py-1.5 rounded-lg border border-[#ABF5D1] bg-[#F0FDF4] shadow-2xs text-center min-w-[100px]">
                <span class="text-[10px] font-bold text-[#006644] uppercase tracking-wider block">Total CIF Value</span>
                <span class="font-mono font-extrabold text-[#006644] text-sm mt-0.5 block">$${Number(totAmount).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Exporter, Processor & Reference -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Exporter, Processor &amp; Reference</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SELECT EXPORTER</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.exporter || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SELECT PROCESSOR</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.processor || d.exporter || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PRODUCTION PLANT</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.productionPlant || 'Unit 1 - Processing (Vizag)'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NO OF CONTAINERS</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.noOfContainers || 1} FCL</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">REFERENCE NUMBER</span>
                <span class="font-mono font-semibold text-[#00A4B7] text-xs block mt-0.5">${d.referenceNumber || d.shippingBillRef || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Customs & Proforma Invoice Identifiers -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Customs &amp; Invoice Identifiers</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CUSTOMS INVOICE NO</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.invoiceNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">INVOICE DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.invoiceDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PROFORMA INVOICE NO</span>
                <span class="font-mono font-bold text-[#403294] text-xs block mt-0.5">${d.pInvoiceNo || d.piNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PROFORMA INVOICE DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.piDate || d.invoiceDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">P.O NO</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.poNo || d.poNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">P.O DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.poDate || d.invoiceDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BILLS TYPE</span>
                <span class="font-semibold text-[#00A4B7] text-xs block mt-0.5">${d.billsType || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">IEC CODE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.iecCode || '0391004812'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPPING BILL REF</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.shippingBillRef || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CUSTOMS STATUS</span>
                <span class="font-mono text-xs font-bold text-[#006644] block mt-0.5">${d.customsStatus || 'LEO_GRANTED'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">STOCK STATUS</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${statusClass} uppercase block w-fit mt-0.5">${stockStatusVal.replace(/_/g, ' ')}</span>
              </div>
            </div>
          </div>

          <!-- Section 3: Buyer & Consignee Parties -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Buyer, Consignee &amp; Stakeholder Parties</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BUYER NAME</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${d.buyer || d.buyerName || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONSIGNEE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.consignee || d.buyer || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ULTIMATE CONSIGNEE</span>
                <span class="text-[#172B4D] text-xs block mt-0.5">${d.ultimateConsignee || d.consignee || d.buyer || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NOTIFY PARTY</span>
                <span class="text-[#172B4D] text-xs block mt-0.5">${d.notifyParty || 'Expeditors International USA Inc.'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">IMPORTER OF RECORD</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.importerOfRecord || d.consignee || d.buyer || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">AGENT</span>
                <span class="text-[#172B4D] text-xs block mt-0.5">${d.agent || 'Seaways Global Logistics Ltd'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FINANCIAL YEAR</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.year || '2026-2027'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CERTIFICATION</span>
                <span class="font-semibold text-[#00875A] text-xs block mt-0.5">${d.certification || 'BAP 4-Star & ASC Certified'}</span>
              </div>
            </div>
          </div>

          <!-- Section 4: Ports & Shipment Routing -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Port Routing &amp; Shipment Dates</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PORT OF LOADING</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.loadingPort || d.portOfLoading || 'Visakhapatnam Sea (INVTZ)'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">DESTINATION COUNTRY</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.country || d.destinationCountry || 'United States'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PORT OF DISCHARGE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.dischargePort || d.portOfDischarge || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FINAL DESTINATION COUNTRY</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.finalDestinationCountry || d.country || 'United States'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FINAL DESTINATION</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.finalDestination || 'Port Terminal Cold Logistics'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPBY DATE</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.shipByDate || d.invoiceDate || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPBY DATE 2 (TEXT)</span>
                <span class="text-[#5E6C84] text-xs block mt-0.5">${d.shipByDate2 || 'Prompt Export Loading'}</span>
              </div>
            </div>
          </div>

          <!-- Section 5: Commercial Terms & Banking -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial Terms, Banking &amp; Currency</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BANK DETAILS</span>
                <span class="font-mono text-xs text-[#172B4D] block mt-0.5">${d.bankDetails || 'State Bank of India - Overseas Branch Vizag (A/C: 30198821049)'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHOW BANK</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.showBank || 'Yes'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PAYMENT TERMS</span>
                <span class="font-semibold text-[#00A4B7] text-xs block mt-0.5">${d.paymentTerms || '100% Irrevocable LC at Sight'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPMENT TERMS</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.shipmentTerms || 'Full Container Load (FCL)'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">DELIVERY TERMS</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.deliveryTerms || 'CIF Port of Destination'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">QUANTITY UNITS</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.quantityUnits || 'Kilograms (Kg)'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CURRENCY</span>
                <span class="font-bold text-[#403294] text-xs block mt-0.5">${d.currency || 'USD ($)'}</span>
              </div>
            </div>
          </div>

          <!-- Section 6: Freight, Charges, Weights & Remarks -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Freight, Charges, Weights &amp; Valuation</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NET WEIGHT (KG)</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${Number(d.netWeightKg || totMcs * 10).toLocaleString('en-IN')} Kg</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">GROSS WEIGHT (KG)</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${Number(d.grossWeightKg || Math.round((d.netWeightKg || totMcs * 10) * 1.08)).toLocaleString('en-IN')} Kg</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FOB VALUE (USD)</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">$${Number(d.fobValueUsd || Math.round(totAmount * 0.96)).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CIF VALUE (USD)</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs block mt-0.5">$${Number(d.cifValueUsd || totAmount).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FREIGHT</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.freight || 'Freight Prepaid'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CHARGE NAME</span>
                <span class="text-[#172B4D] text-xs block mt-0.5">${d.chargeName || 'Ocean Freight & THC'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CHARGE AMOUNT</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">$${Number(d.chargeAmount || 4850).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">STATUS</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${statusClass} uppercase block w-fit mt-0.5">${stockStatusVal.replace(/_/g, ' ')}</span>
              </div>
              <div class="sm:col-span-4">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">REMARKS</span>
                <p class="text-xs text-[#5E6C84] mt-0.5 bg-[#F8FAFC] p-2.5 rounded-lg border border-[#F1F5F9]">${d.remarks || 'Customs export documentation cleared and shipping bill validated.'}</p>
              </div>
            </div>
          </div>

          <!-- Section 7: Data Table (Variety Line Items) -->
          <div class="bg-white rounded-xl">
            <div class="flex items-center justify-between border-b border-[#F1F5F9]">
              <div class="flex items-center gap-2">
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Data Table (Variety Line Items)</h4>
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] uppercase">${lineItems.length} Variety Items</span>
            </div>
            
            <div class="overflow-x-auto max-h-[340px] rounded-lg border border-[#DFE1E6]">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#5E6C84] uppercase font-bold text-[10px] tracking-wider">
                    <th class="py-2.5 px-2.5">ID</th>
                    <th class="py-2.5 px-2.5">Variety</th>
                    <th class="py-2.5 px-2.5">Grade</th>
                    <th class="py-2.5 px-2.5">Packing Style</th>
                    <th class="py-2.5 px-2.5">Treatment</th>
                    <th class="py-2.5 px-2.5">Freezing Type</th>
                    <th class="py-2.5 px-2.5">Brand</th>
                    <th class="py-2.5 px-2.5 text-right">Mcs</th>
                    <th class="py-2.5 px-2.5 text-right">Trays Qty</th>
                    <th class="py-2.5 px-2.5 text-right">Unit Price (BAGS)</th>
                    <th class="py-2.5 px-2.5 text-right">Ddp Price</th>
                    <th class="py-2.5 px-2.5 text-right">Amount in (USD)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#F1F5F9] bg-white">
                  ${lineItems.length === 0 ? `
                    <tr><td colspan="12" class="py-6 text-center text-xs text-[#5E6C84]">No variety line items recorded for this invoice.</td></tr>
                  ` : lineItems.map(item => `
                    <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#F1F5F9] text-[#172B4D]">
                      <td class="py-2.5 px-2.5 font-mono font-bold text-[#00A4B7]">${item.id}</td>
                      <td class="py-2.5 px-2.5 font-bold">${item.variety}</td>
                      <td class="py-2.5 px-2.5 font-semibold text-[#5E6C84]">${item.grade}</td>
                      <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.packingStyle}</td>
                      <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.treatment}</td>
                      <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.freezingType}</td>
                      <td class="py-2.5 px-2.5 font-medium">${item.brand}</td>
                      <td class="py-2.5 px-2.5 text-right font-mono font-bold">${Number(item.mcs).toLocaleString('en-IN')}</td>
                      <td class="py-2.5 px-2.5 text-right font-mono text-[#5E6C84]">${Number(item.traysQty).toLocaleString('en-IN')}</td>
                      <td class="py-2.5 px-2.5 text-right font-mono font-semibold text-[#172B4D]">$${Number(item.unitPriceBags).toFixed(2)}</td>
                      <td class="py-2.5 px-2.5 text-right font-mono text-[#5E6C84]">$${Number(item.ddpPrice).toFixed(2)}</td>
                      <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-[#006644]">$${Number(item.amountUsd).toLocaleString('en-IN')}</td>
                    </tr>
                  `).join('')}
                </tbody>
                <tfoot class="bg-[#F8FAFC] border-t-2 border-[#DFE1E6]">
                  <tr>
                    <td colspan="7" class="py-2.5 px-2.5 text-right uppercase tracking-wider text-[11px] font-extrabold text-[#172B4D]">Total:</td>
                    <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-xs text-[#172B4D]">${Number(totMcs).toLocaleString('en-IN')}</td>
                    <td class="py-2.5 px-2.5 text-right font-mono font-bold text-xs text-[#5E6C84]">${Number(totTrays).toLocaleString('en-IN')}</td>
                    <td colspan="2" class="py-2.5 px-2.5"></td>
                    <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-xs text-[#006644]">$${Number(totAmount).toLocaleString('en-IN')}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Print Custom Invoice',
          type: 'secondary',
          onClick: () => Toast.show(`Printing Custom Invoice ${d.invoiceNo}...`, 'info')
        },
        {
          label: 'Edit Custom Invoice',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            this.showEditCustomInvoiceModal(row);
          }
        }
      ]
    });
  },

    // Edit Custom Invoice 2-Step Wizard Modal (Matching Proforma Invoices)
  showEditCustomInvoiceModal(row) {
    // Clone lineItems and headerData so modifications are atomic
    const lineItems = row.lineItems ? JSON.parse(JSON.stringify(row.lineItems)) : [
      {
        id: 1,
        variety: "Vannamei Shrimp HLSO IQF",
        grade: "26/30",
        packingStyle: "10x1 Kg Printed Bags",
        treatment: "Non-Treated",
        freezingType: "IQF",
        brand: "Devi Gold",
        mcs: Math.round((row.netWeightKg || 18000) / 15),
        traysQty: Math.round((row.netWeightKg || 18000) / 15) * 2,
        unitPriceBags: 8.85,
        ddpPrice: 9.45,
        amountUsd: Number(row.cifValueUsd || 159300),
        cups: 240,
        cupsPriceBags: 0.65,
        code: "PRD-VAN-2630",
        fullName: "Frozen Raw Headless Shell-On White Shrimp 26/30",
        description: "Individually Quick Frozen, 10x1kg bags per master carton",
        buyerDescription: "Custom retail branded packing with UPC barcode"
      }
    ];

    const headerData = { ...row };

    // Launch Step 1 of Custom Invoice Wizard
    this.openCustomInvoiceStep1Modal(lineItems, headerData, true, row);
  },

  // Create Custom Invoice 2-Step Wizard Modal
  showAddCustomInvoiceModal() {
    const nextIdx = this.state.customInvoices.length + 1;
    const nextId = `CI-${String(nextIdx).padStart(3, '0')}`;
    const nextNo = `CI-EXP-2026-${500 + nextIdx}`;
    const today = new Date().toISOString().slice(0, 10);

    let lineItems = [
      {
        id: 1,
        variety: "Vannamei Shrimp HLSO IQF",
        grade: "26/30",
        packingStyle: "10x1 Kg Printed Bags",
        treatment: "Non-Treated",
        freezingType: "IQF",
        brand: "Devi Gold",
        mcs: 1200,
        traysQty: 2400,
        unitPriceBags: 8.85,
        ddpPrice: 9.45,
        amountUsd: 106200,
        cups: 240,
        cupsPriceBags: 0.65,
        code: "PRD-VAN-2630",
        fullName: "Frozen Raw Headless Shell-On White Shrimp 26/30",
        description: "Individually Quick Frozen, 10x1kg bags per master carton",
        buyerDescription: "Custom retail branded packing with UPC barcode"
      },
      {
        id: 2,
        variety: "Vannamei Cooked Tail-On IQF",
        grade: "31/40",
        packingStyle: "10x1 Kg Retail Pouch",
        treatment: "STPP Treated",
        freezingType: "IQF",
        brand: "Ocean Pearl",
        mcs: 600,
        traysQty: 1200,
        unitPriceBags: 9.60,
        ddpPrice: 10.20,
        amountUsd: 57600,
        cups: 120,
        cupsPriceBags: 0.70,
        code: "PRD-CKD-3140",
        fullName: "Cooked Peeled Tail-On White Shrimp 31/40",
        description: "Blanched / Cooked IQF, ready to eat",
        buyerDescription: "Foodservice label pack"
      }
    ];

    let headerData = {
      id: nextId,
      invoiceNo: nextNo,
      invoiceDate: today,
      poNo: 'PO-RL-8825',
      buyer: 'Red Lobster Supply Chain LLC',
      pInvoiceNo: 'PI-2026-901',
      stockStatus: 'ALLOCATED',
      year: '2026-2027',
      exporter: 'Devi Fisheries Limited',
      consignee: 'Red Lobster Supply Chain LLC',
      country: 'United States',
      billsType: 'Duty Drawback',
      shippingBillRef: `SB-2026-${88500 + nextIdx}`,
      iecCode: '0391004812',
      loadingPort: 'Visakhapatnam Sea (INVTZ)',
      dischargePort: 'Long Beach Port, USA',
      netWeightKg: 18000,
      grossWeightKg: 19440,
      fobValueUsd: 153000,
      cifValueUsd: 163800,
      customsStatus: 'LEO_GRANTED'
    };

    this.openCustomInvoiceStep1Modal(lineItems, headerData, false, null);
  },

  // Wizard Step 1: Custom Invoice Details Form (Categorized Sections)
  openCustomInvoiceStep1Modal(lineItems, headerData, isEdit = false, targetRow = null) {
    const d = headerData || {};
    const modalTitle = isEdit 
      ? `Edit Custom Invoice: ${d.invoiceNo} - Step 1: Customs Invoice Details`
      : 'Create Custom Invoice - Step 1: Customs Invoice Details';

    Modal.open({
      title: modalTitle,
      size: 'xl',
      content: `
        <form id="form-ci-step1" class="space-y-4 text-xs">
          <!-- Section 1: Customs Invoice & Reference Numbers -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Customs Invoice &amp; Reference Numbers</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-step1-inv-no" value="${d.invoiceNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="ci-step1-inv-date" value="${d.invoiceDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">P.O NO</label>
                <input type="text" id="ci-step1-po-no" value="${d.poNo || ''}" placeholder="e.g. PO-8821" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROFORMA INVOICE NO</label>
                <input type="text" id="ci-step1-pi-no" value="${d.pInvoiceNo || ''}" placeholder="e.g. PI-2026-901" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#403294] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 2: Exporter, Buyer & Consignee Parties -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Parties &amp; Destination</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">EXPORTER <span class="text-[#DE350B]">*</span></label>
                <select id="ci-step1-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Devi Fisheries Limited" ${d.exporter === 'Devi Fisheries Limited' ? 'selected' : ''}>Devi Fisheries Limited</option>
                  <option value="Devi Sea Foods Ltd" ${d.exporter === 'Devi Sea Foods Ltd' ? 'selected' : ''}>Devi Sea Foods Ltd</option>
                  <option value="Devi Marine Processors" ${d.exporter === 'Devi Marine Processors' ? 'selected' : ''}>Devi Marine Processors</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BUYER / CONSIGNEE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-step1-buyer" value="${d.buyer || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DESTINATION COUNTRY <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-step1-country" value="${d.country || 'United States'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FINANCIAL YEAR</label>
                <select id="ci-step1-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="2026-2027" ${d.year === '2026-2027' ? 'selected' : ''}>2026-2027</option>
                  <option value="2025-2026" ${d.year === '2025-2026' ? 'selected' : ''}>2025-2026</option>
                  <option value="2024-2025" ${d.year === '2024-2025' ? 'selected' : ''}>2024-2025</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section 3: Customs Bill Type, Shipping Bill & Stock Clearance -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Customs Bill Type, Shipping Bill &amp; Stock Status</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BILLS TYPE <span class="text-[#DE350B]">*</span></label>
                <select id="ci-step1-billstype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Duty Drawback" ${d.billsType === 'Duty Drawback' ? 'selected' : ''}>Duty Drawback</option>
                  <option value="RoDTEP Scheme" ${d.billsType === 'RoDTEP Scheme' ? 'selected' : ''}>RoDTEP Scheme</option>
                  <option value="EPCG Scheme" ${d.billsType === 'EPCG Scheme' ? 'selected' : ''}>EPCG Scheme</option>
                  <option value="Advance Authorization" ${d.billsType === 'Advance Authorization' ? 'selected' : ''}>Advance Authorization</option>
                  <option value="Commercial Export" ${d.billsType === 'Commercial Export' ? 'selected' : ''}>Commercial Export</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STOCK STATUS <span class="text-[#DE350B]">*</span></label>
                <select id="ci-step1-stock-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="ALLOCATED" ${d.stockStatus === 'ALLOCATED' ? 'selected' : ''}>Allocated</option>
                  <option value="DISPATCHED_TO_PORT" ${d.stockStatus === 'DISPATCHED_TO_PORT' ? 'selected' : ''}>Dispatched To Port</option>
                  <option value="IN_TRANSIT" ${d.stockStatus === 'IN_TRANSIT' ? 'selected' : ''}>In Transit</option>
                  <option value="PORT_CLEARED" ${d.stockStatus === 'PORT_CLEARED' ? 'selected' : ''}>Port Cleared</option>
                  <option value="WAREHOUSE_STAGED" ${d.stockStatus === 'WAREHOUSE_STAGED' ? 'selected' : ''}>Warehouse Staged</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPPING BILL REF</label>
                <input type="text" id="ci-step1-sb-ref" value="${d.shippingBillRef || ''}" placeholder="e.g. SB-2026-88401" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">IEC CODE</label>
                <input type="text" id="ci-step1-iec" value="${d.iecCode || '0391004812'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 4: Port Routing, Weights & Valuation -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Port Routing, Weights &amp; Valuation</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF LOADING</label>
                <input type="text" id="ci-step1-pol" value="${d.loadingPort || 'Visakhapatnam Sea (INVTZ)'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF DISCHARGE</label>
                <input type="text" id="ci-step1-pod" value="${d.dischargePort || 'Long Beach Port, USA'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CUSTOMS STATUS</label>
                <select id="ci-step1-customs-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="LEO_GRANTED" ${d.customsStatus === 'LEO_GRANTED' ? 'selected' : ''}>LEO Granted (Let Export Order)</option>
                  <option value="ASSESSED_CLEARED" ${d.customsStatus === 'ASSESSED_CLEARED' ? 'selected' : ''}>Assessed &amp; Cleared</option>
                  <option value="UNDER_EXAMINATION" ${d.customsStatus === 'UNDER_EXAMINATION' ? 'selected' : ''}>Under Examination</option>
                  <option value="DRAFT_REGISTERED" ${d.customsStatus === 'DRAFT_REGISTERED' ? 'selected' : ''}>Draft Registered</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NET WEIGHT (KG)</label>
                <input type="number" id="ci-step1-net-wt" value="${d.netWeightKg || 18000}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GROSS WEIGHT (KG)</label>
                <input type="number" id="ci-step1-gross-wt" value="${d.grossWeightKg || 19440}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CIF VALUE (USD)</label>
                <input type="number" id="ci-step1-cif-val" value="${d.cifValueUsd || 159300}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#006644] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>
        </form>
      `,
      buttons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Next',
          type: 'primary',
          onClick: (modal) => {
            const getVal = (id) => document.getElementById(id)?.value?.trim() || '';

            const invNo = getVal('ci-step1-inv-no');
            const invDate = getVal('ci-step1-inv-date');
            const buyer = getVal('ci-step1-buyer');
            const exporter = getVal('ci-step1-exporter');
            const country = getVal('ci-step1-country');
            const billsType = getVal('ci-step1-billstype');
            const stockStatus = getVal('ci-step1-stock-status');

            if (!invNo || !invDate || !buyer || !exporter || !country || !billsType || !stockStatus) {
              Toast.show('Please fill in all mandatory fields marked with *', 'warning');
              return;
            }

            // Save user inputs into headerData
            Object.assign(headerData, {
              invoiceNo: invNo,
              invoiceDate: invDate,
              poNo: getVal('ci-step1-po-no'),
              pInvoiceNo: getVal('ci-step1-pi-no'),
              buyer,
              consignee: buyer,
              exporter,
              country,
              year: getVal('ci-step1-year') || '2026-2027',
              billsType,
              stockStatus,
              shippingBillRef: getVal('ci-step1-sb-ref'),
              iecCode: getVal('ci-step1-iec') || '0391004812',
              loadingPort: getVal('ci-step1-pol') || 'Visakhapatnam Sea (INVTZ)',
              dischargePort: getVal('ci-step1-pod') || 'Long Beach Port, USA',
              customsStatus: getVal('ci-step1-customs-status') || 'LEO_GRANTED',
              netWeightKg: Number(getVal('ci-step1-net-wt')) || 18000,
              grossWeightKg: Number(getVal('ci-step1-gross-wt')) || 19440,
              cifValueUsd: Number(getVal('ci-step1-cif-val')) || 159300,
              fobValueUsd: Math.round((Number(getVal('ci-step1-cif-val')) || 159300) * 0.96)
            });

            modal.close();
            // Proceed to Step 2: Variety & Line Items Entry
            this.openCustomInvoiceStep2Modal(lineItems, headerData, isEdit, targetRow);
          }
        }
      ]
    });
  },

  // Wizard Step 2: Custom Invoice Variety Line Items Entry & Data Table
  openCustomInvoiceStep2Modal(lineItems, headerData, isEdit = false, targetRow = null) {
    const renderTableRows = () => {
      if (!lineItems || lineItems.length === 0) {
        return `<tr><td colspan="13" class="py-6 text-center text-xs text-[#5E6C84]">No variety line items added yet. Fill the inputs above and click "Add Line Item".</td></tr>`;
      }
      return lineItems.map((item, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#F1F5F9] text-[#172B4D]">
          <td class="py-2.5 px-2.5 font-mono font-bold text-[#00A4B7]">${item.id}</td>
          <td class="py-2.5 px-2.5 font-bold">${item.variety}</td>
          <td class="py-2.5 px-2.5 font-semibold text-[#5E6C84]">${item.grade || '26/30'}</td>
          <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.packingStyle || '10x1 Kg Bags'}</td>
          <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.treatment || 'Non-Treated'}</td>
          <td class="py-2.5 px-2.5 text-[#5E6C84]">${item.freezingType || 'IQF'}</td>
          <td class="py-2.5 px-2.5 font-medium">${item.brand || 'Devi Gold'}</td>
          <td class="py-2.5 px-2.5 text-right font-mono font-bold">${Number(item.mcs).toLocaleString('en-IN')}</td>
          <td class="py-2.5 px-2.5 text-right font-mono text-[#5E6C84]">${Number(item.traysQty).toLocaleString('en-IN')}</td>
          <td class="py-2.5 px-2.5 text-right font-mono font-semibold text-[#172B4D]">${Number(item.unitPriceBags).toFixed(2)}</td>
          <td class="py-2.5 px-2.5 text-right font-mono text-[#5E6C84]">${Number(item.ddpPrice).toFixed(2)}</td>
          <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-[#006644]">${Number(item.amountUsd).toLocaleString('en-IN')}</td>
          <td class="py-2.5 px-2.5 text-center">
            <button type="button" class="btn-remove-ci-li text-[#DE350B] hover:text-[#BF2600] p-1 rounded hover:bg-[#FFEBE6] transition-colors cursor-pointer" data-idx="${idx}" title="Remove Item">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');
    };

    const renderTableTotals = () => {
      const totMcs = lineItems.reduce((acc, i) => acc + (Number(i.mcs) || 0), 0);
      const totTrays = lineItems.reduce((acc, i) => acc + (Number(i.traysQty) || 0), 0);
      const totAmount = lineItems.reduce((acc, i) => acc + (Number(i.amountUsd) || 0), 0);
      return `
        <tr>
          <td colspan="7" class="py-2.5 px-2.5 text-right uppercase tracking-wider text-[11px] font-extrabold text-[#172B4D]">Total:</td>
          <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-xs text-[#172B4D]">${Number(totMcs).toLocaleString('en-IN')}</td>
          <td class="py-2.5 px-2.5 text-right font-mono font-bold text-xs text-[#5E6C84]">${Number(totTrays).toLocaleString('en-IN')}</td>
          <td colspan="2" class="py-2.5 px-2.5"></td>
          <td class="py-2.5 px-2.5 text-right font-mono font-extrabold text-xs text-[#006644]">${Number(totAmount).toLocaleString('en-IN')}</td>
          <td></td>
        </tr>
      `;
    };

    const modalTitle = isEdit 
      ? `Edit Custom Invoice: ${headerData.invoiceNo} - Step 2: Variety &amp; Line Items Entry`
      : `Create Custom Invoice: ${headerData.invoiceNo} - Step 2: Variety &amp; Line Items Entry`;

    Modal.open({
      title: modalTitle,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Form Input Fields (Variety & Pricing) - No border, No padding -->
          <div class="bg-white rounded-xl">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Form Input Fields (Variety &amp; Pricing)</h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              <!-- SELECT PI * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT PI <span class="text-[#DE350B]">*</span></label>
                <select id="ci-li-select-pi" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="${headerData.pInvoiceNo || 'PI-2026-901'}" selected>${headerData.pInvoiceNo || 'PI-2026-901'}</option>
                  <option value="PI-2026-901">PI-2026-901 (Red Lobster)</option>
                  <option value="PI-2026-902">PI-2026-902 (Maruha Nichiro)</option>
                  <option value="PI-2026-903">PI-2026-903 (Royal Greenland)</option>
                  <option value="PI-2026-904">PI-2026-904 (Sysco)</option>
                  <option value="PI-2026-905">PI-2026-905 (US Foods)</option>
                </select>
              </div>

              <!-- VARIETY NAME * -->
              <div class="lg:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VARIETY NAME <span class="text-[#DE350B]">*</span></label>
                <select id="ci-li-variety-name" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Vannamei Shrimp HLSO IQF">Vannamei Shrimp HLSO IQF</option>
                  <option value="Vannamei PDTO IQF">Vannamei PDTO IQF</option>
                  <option value="Vannamei Cooked Tail-On IQF">Vannamei Cooked Tail-On IQF</option>
                  <option value="Black Tiger HOSO Semi-IQF">Black Tiger HOSO Semi-IQF</option>
                  <option value="Asian Seabass Fillet IQF">Asian Seabass Fillet IQF</option>
                  <option value="Vannamei Easy Peel IQF">Vannamei Easy Peel IQF</option>
                </select>
              </div>

              <!-- MCS * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">MCS <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="ci-li-mcs" value="800" min="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Master Cartons">
              </div>

              <!-- TRAYS QUANTITY -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TRAYS QUANTITY</label>
                <input type="number" id="ci-li-trays" value="1600" min="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Trays Qty">
              </div>

              <!-- RATE/BAGS * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RATE/BAGS <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="0.01" id="ci-li-rate-bags" value="9.20" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Rate USD">
              </div>

              <!-- DDP PRICE -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DDP PRICE</label>
                <input type="number" step="0.01" id="ci-li-ddp-price" value="9.80" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="DDP Price">
              </div>

              <!-- CUPS -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CUPS</label>
                <input type="number" id="ci-li-cups" value="160" min="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Cups Qty">
              </div>

              <!-- CUPS PRICE/BAGS -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CUPS PRICE/BAGS</label>
                <input type="number" step="0.01" id="ci-li-cups-price" value="0.75" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Price / Bag">
              </div>

              <!-- CODE -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE</label>
                <input type="text" id="ci-li-code" value="PRD-VAN-HLSO" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="SKU Code">
              </div>

              <!-- FULL NAME -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FULL NAME</label>
                <input type="text" id="ci-li-full-name" value="Frozen Raw HLSO Vannamei Shrimp" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Full Product Name">
              </div>

              <!-- DESCRIPTION -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DESCRIPTION</label>
                <input type="text" id="ci-li-desc" value="10x1kg bags per master carton, IQF" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Description">
              </div>

              <!-- BUYER DESCRIPTION -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BUYER DESCRIPTION</label>
                <input type="text" id="ci-li-buyer-desc" value="Private label retail pouch with UPC" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Buyer Description">
              </div>

              <!-- Auxiliary attributes -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GRADE</label>
                <select id="ci-li-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="26/30">26/30</option>
                  <option value="16/20">16/20</option>
                  <option value="21/25">21/25</option>
                  <option value="31/40">31/40</option>
                  <option value="41/50">41/50</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PACKING STYLE</label>
                <select id="ci-li-packing" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="10x1 Kg Printed Bags">10x1 Kg Printed Bags</option>
                  <option value="6x2 Kg Blocks">6x2 Kg Blocks</option>
                  <option value="10x1 Kg Retail Pouch">10x1 Kg Retail Pouch</option>
                  <option value="Bulk 10 Kg Master">Bulk 10 Kg Master</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TREATMENT</label>
                <select id="ci-li-treatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Non-Treated">Non-Treated</option>
                  <option value="STPP Treated">STPP Treated</option>
                  <option value="Citric Acid Treated">Citric Acid Treated</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREEZING TYPE</label>
                <select id="ci-li-freezing" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="IQF">IQF</option>
                  <option value="Semi-IQF">Semi-IQF</option>
                  <option value="Block Frozen">Block Frozen</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BRAND</label>
                <input type="text" id="ci-li-brand" value="Devi Gold" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" placeholder="Brand">
              </div>

              <div class="flex items-end">
                <button type="button" id="btn-add-ci-line-item" class="btn-primary w-full px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                  <span>Add Line Item</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Step 2 Data Table (No border, No padding) -->
          <div class="bg-white rounded-xl">
            <div class="flex items-center justify-between border-b border-[#F1F5F9]">
              <div class="flex items-center gap-2">
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Data Table (Variety Line Items)</h4>
              </div>
              <span id="ci-li-items-count" class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] uppercase">${lineItems.length} Variety Items</span>
            </div>
            
            <div class="overflow-x-auto max-h-[280px] rounded-lg border border-[#DFE1E6]">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#5E6C84] uppercase font-bold text-[10px] tracking-wider">
                    <th class="py-2.5 px-2.5">ID</th>
                    <th class="py-2.5 px-2.5">Variety</th>
                    <th class="py-2.5 px-2.5">Grade</th>
                    <th class="py-2.5 px-2.5">Packing Style</th>
                    <th class="py-2.5 px-2.5">Treatment</th>
                    <th class="py-2.5 px-2.5">Freezing Type</th>
                    <th class="py-2.5 px-2.5">Brand</th>
                    <th class="py-2.5 px-2.5 text-right">Mcs</th>
                    <th class="py-2.5 px-2.5 text-right">Trays Qty</th>
                    <th class="py-2.5 px-2.5 text-right">Unit Price (BAGS)</th>
                    <th class="py-2.5 px-2.5 text-right">Ddp Price</th>
                    <th class="py-2.5 px-2.5 text-right">Amount in (USD)</th>
                    <th class="py-2.5 px-2.5 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody id="ci-li-table-tbody" class="divide-y divide-[#F1F5F9] bg-white">
                  ${renderTableRows()}
                </tbody>
                <tfoot id="ci-li-table-tfoot" class="bg-[#F8FAFC] border-t-2 border-[#DFE1E6]">
                  ${renderTableTotals()}
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Back',
          type: 'secondary',
          onClick: (modal) => {
            modal.close();
            this.openCustomInvoiceStep1Modal(lineItems, headerData, isEdit, targetRow);
          }
        },
        {
          label: isEdit ? 'Update Custom Invoice' : 'Create Custom Invoice',
          type: 'primary',
          onClick: (modal) => {
            if (!lineItems || lineItems.length === 0) {
              Toast.show('Please add at least one variety line item to the custom invoice', 'warning');
              return;
            }

            const totMcs = lineItems.reduce((acc, i) => acc + (Number(i.mcs) || 0), 0);
            const totAmount = lineItems.reduce((acc, i) => acc + (Number(i.amountUsd) || 0), 0);

            headerData.netWeightKg = headerData.netWeightKg || (totMcs * 10);
            headerData.grossWeightKg = headerData.grossWeightKg || Math.round((totMcs * 10) * 1.08);
            headerData.cifValueUsd = totAmount;
            headerData.fobValueUsd = Math.round(totAmount * 0.96);

            if (isEdit && targetRow) {
              Object.assign(targetRow, headerData, {
                lineItems: [...lineItems]
              });
              Toast.show(`Custom Invoice ${targetRow.invoiceNo} updated successfully!`, 'success');
            } else {
              const newRecord = {
                ...headerData,
                lineItems: [...lineItems]
              };
              this.state.customInvoices.unshift(newRecord);
              Toast.show(`Custom Invoice ${newRecord.invoiceNo} created successfully!`, 'success');
            }

            modal.close();
            const mainEl = document.getElementById('sales-view-main');
            if (mainEl) this.renderCustomInvoices(mainEl);
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    const bindRowActions = () => {
      modalRoot.querySelectorAll('.btn-remove-ci-li').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(btn.dataset.idx, 10);
          if (!isNaN(idx) && idx >= 0 && idx < lineItems.length) {
            const removed = lineItems.splice(idx, 1);
            const tbody = modalRoot.querySelector('#ci-li-table-tbody');
            const tfoot = modalRoot.querySelector('#ci-li-table-tfoot');
            const cnt = modalRoot.querySelector('#ci-li-items-count');
            if (tbody) tbody.innerHTML = renderTableRows();
            if (tfoot) tfoot.innerHTML = renderTableTotals();
            if (cnt) cnt.textContent = `${lineItems.length} Variety Items`;
            bindRowActions();
            Toast.show(`Removed ${removed[0]?.variety || 'item'}`, 'info');
          }
        });
      });
    };

    bindRowActions();

    modalRoot.querySelector('#btn-add-ci-line-item')?.addEventListener('click', () => {
      const getVal = (id) => modalRoot.querySelector(`#${id}`)?.value?.trim() || '';

      const variety = getVal('ci-li-variety-name');
      const mcs = Number(getVal('ci-li-mcs')) || 0;
      const rateBags = Number(getVal('ci-li-rate-bags')) || 0;

      if (!variety || mcs <= 0 || rateBags <= 0) {
        Toast.show('Please specify Variety Name, MCS (>0) and Rate/Bags (>0)', 'warning');
        return;
      }

      const trays = Number(getVal('ci-li-trays')) || (mcs * 2);
      const ddp = Number(getVal('ci-li-ddp-price')) || (rateBags + 0.6);
      const amount = Math.round(mcs * 10 * rateBags);

      const newItem = {
        id: lineItems.length + 1,
        variety,
        grade: getVal('ci-li-grade') || '26/30',
        packingStyle: getVal('ci-li-packing') || '10x1 Kg Printed Bags',
        treatment: getVal('ci-li-treatment') || 'Non-Treated',
        freezingType: getVal('ci-li-freezing') || 'IQF',
        brand: getVal('ci-li-brand') || 'Devi Gold',
        mcs,
        traysQty: trays,
        unitPriceBags: rateBags,
        ddpPrice: ddp,
        amountUsd: amount,
        cups: Number(getVal('ci-li-cups')) || 0,
        cupsPriceBags: Number(getVal('ci-li-cups-price')) || 0,
        code: getVal('ci-li-code') || 'PRD-NEW',
        fullName: getVal('ci-li-full-name') || variety,
        description: getVal('ci-li-desc') || 'Standard export packaging',
        buyerDescription: getVal('ci-li-buyer-desc') || 'Buyer label'
      };

      lineItems.push(newItem);

      const tbody = modalRoot.querySelector('#ci-li-table-tbody');
      const tfoot = modalRoot.querySelector('#ci-li-table-tfoot');
      const cnt = modalRoot.querySelector('#ci-li-items-count');
      if (tbody) tbody.innerHTML = renderTableRows();
      if (tfoot) tfoot.innerHTML = renderTableTotals();
      if (cnt) cnt.textContent = `${lineItems.length} Variety Items`;
      bindRowActions();
      Toast.show(`Added ${variety} to line items`, 'success');
    });
  },

  // Tab 3: ISF Details (Importer Security Filing 10+2)
  renderIsfDetails(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title & Header Actions (NO Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">ISF Details (Importer Security Filing 10+2)</h1>
        </div>

        <!-- Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="flt-isf-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="flt-isf-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="flt-isf-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- SELECT YEAR -->
            <div>
              <label for="flt-isf-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT YEAR</label>
              <select id="flt-isf-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Years</option>
                <option value="2026-2027">2026-2027</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>

            <!-- SELECT EXPORTER -->
            <div>
              <label for="flt-isf-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT EXPORTER</label>
              <select id="flt-isf-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Marine Processors">Devi Marine Processors</option>
              </select>
            </div>

            <!-- SELECT CONSIGNEE -->
            <div>
              <label for="flt-isf-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT CONSIGNEE</label>
              <select id="flt-isf-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Consignees</option>
                <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC</option>
                <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation</option>
                <option value="Royal Greenland Seafood A/S">Royal Greenland Seafood A/S</option>
                <option value="Sysco Corporation International">Sysco Corporation International</option>
                <option value="US Foods Trading Co">US Foods Trading Co</option>
              </select>
            </div>

            <!-- SELECT COUNTRY -->
            <div>
              <label for="flt-isf-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT COUNTRY</label>
              <select id="flt-isf-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Countries</option>
                <option value="United States">United States</option>
                <option value="Japan">Japan</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <!-- INVOICE STATUS -->
            <div>
              <label for="flt-isf-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE STATUS</label>
              <select id="flt-isf-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Statuses</option>
                <option value="ISF_FILED">ISF Filed</option>
                <option value="ACCEPTED_TIMELY">Accepted Timely</option>
                <option value="PENDING_FILING">Pending Filing</option>
                <option value="DRAFT">Draft</option>
              </select>
            </div>

            <!-- Search Button placed inside grid -->
            <div class="flex items-end">
              <button type="button" id="flt-isf-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="isf-details-table-container"></div>
      </div>
    `;

    // Toggle filter
    const toggleBtn = container.querySelector('#flt-isf-toggle-btn');
    const filterBody = container.querySelector('#flt-isf-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render table
    const renderTable = (dataToDisplay) => {
      new DataTable({
        containerId: 'isf-details-table-container',
        data: dataToDisplay,
        keyField: 'id',
        tableTitle: `ISF Records (${dataToDisplay.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showIsfDetailsModal(row),
        columns: [
          {
            field: '__sno__',
            header: 'S.No',
            render: (v, r, idx) => `<span class="font-mono text-xs text-[#5E6C84]">${idx + 1}</span>`
          },
          {
            field: 'id',
            header: 'ID',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>`
          },
          {
            field: 'pInvoiceNo',
            header: 'PInvoice No',
            render: (v) => `<span class="font-mono text-xs font-bold text-[#403294]">${v || '-'}</span>`
          },
          {
            field: 'invoiceNo',
            header: 'Invoice No',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] hover:underline cursor-pointer">${v || '-'}</span>`
          },
          {
            field: 'invoiceDate',
            header: 'Invoice Date',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v || '-'}</span>`
          },
          {
            field: 'poNo',
            header: 'Po No',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'buyer',
            header: 'Buyer',
            render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v || '-'}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            render: (v) => {
              const val = String(v || '').toUpperCase();
              let cls = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
              if (val.includes('FILED') || val.includes('ACCEPTED') || val.includes('APPROVED')) {
                cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              } else if (val.includes('PENDING')) {
                cls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
              } else if (val.includes('DRAFT') || val.includes('TRANSIT')) {
                cls = 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
              }
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${val.replace(/_/g, ' ')}</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Add ISF Filing',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`,
            onClick: (row) => this.showAddIsfModal(row)
          }
        ]
      });
    };

    renderTable(this.state.isfDetails);

    // Search and Reset handlers
    const searchBtn = container.querySelector('#flt-isf-search-btn');
    const resetBtn = container.querySelector('#flt-isf-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const yr = container.querySelector('#flt-isf-year')?.value || 'ALL';
      const exp = container.querySelector('#flt-isf-exporter')?.value || 'ALL';
      const con = container.querySelector('#flt-isf-consignee')?.value || 'ALL';
      const cty = container.querySelector('#flt-isf-country')?.value || 'ALL';
      const st = container.querySelector('#flt-isf-status')?.value || 'ALL';

      let filtered = [...this.state.isfDetails];

      if (yr !== 'ALL') {
        filtered = filtered.filter(r => (r.year || '').includes(yr));
      }
      if (exp !== 'ALL') {
        filtered = filtered.filter(r => (r.exporter || '').toLowerCase().includes(exp.toLowerCase()));
      }
      if (con !== 'ALL') {
        filtered = filtered.filter(r => (r.consignee || r.buyer || '').toLowerCase().includes(con.toLowerCase()));
      }
      if (cty !== 'ALL') {
        filtered = filtered.filter(r => (r.country || '').toLowerCase().includes(cty.toLowerCase()));
      }
      if (st !== 'ALL') {
        filtered = filtered.filter(r => (r.status || '').toLowerCase().includes(st.toLowerCase()));
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} ISF Record(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      container.querySelector('#flt-isf-year').value = 'ALL';
      container.querySelector('#flt-isf-exporter').value = 'ALL';
      container.querySelector('#flt-isf-consignee').value = 'ALL';
      container.querySelector('#flt-isf-country').value = 'ALL';
      container.querySelector('#flt-isf-status').value = 'ALL';
      renderTable(this.state.isfDetails);
      Toast.show('Filters reset', 'info');
    });
  },

  // Modal: ISF Form with "More transshipment" Button, Transshipment Fields & Transshipment Table
  showAddIsfModal(targetRow) {
    const nextIdx = this.state.isfDetails.length + 1;
    const isEdit = !!targetRow;
    const d = targetRow || {
      id: `ISF-${String(nextIdx).padStart(3, '0')}`,
      pInvoiceNo: 'PI-2026-901',
      invoiceNo: `CI-EXP-2026-${500 + nextIdx}`,
      invoiceDate: new Date().toISOString().slice(0, 10),
      poNo: 'PO-RL-8821',
      buyer: 'Red Lobster Supply Chain LLC',
      consignee: 'Red Lobster Supply Chain LLC',
      status: 'PENDING_FILING',
      year: '2026-2027',
      exporter: 'Devi Fisheries Limited',
      country: 'United States',
      address: '450 S Orange Ave, Suite 800, Orlando, FL 32801, USA',
      brand: 'Devi Gold',
      isfTransactionNo: `ISF-TXN-2026-${88400 + nextIdx}`,
      shippingLine: 'Ocean Network Express (ONE)',
      containerNumber: `ONEU-${440000 + nextIdx}-8`,
      linerSealNumber: `ONE-SL-${994000 + nextIdx}`,
      blNumber: `ONEYMAA${261000 + nextIdx}`,
      blDate: new Date().toISOString().slice(0, 10),
      shippingOnboardDate: new Date().toISOString().slice(0, 10),
      stuffingLocation: 'Devi Fisheries Cold Storage CFS, Visakhapatnam',
      dateOfLoading: new Date().toISOString().slice(0, 10),
      sizeAndType: '40ft High Cube Reefer (40HR)',
      stowPosition: 'BAY 14 / ROW 06 / TIER 82',
      sdd: '2026-11-30',
      byRoad: 'Intermodal Reefer Trucking LLC',
      byRoadDate: new Date().toISOString().slice(0, 10),
      temperatureOfRecord: '-18.5°C continuous recorder verified',
      sealTime: '14:30 IST / High-Security Seal Affixed',
      consolidator: 'Expeditors International / Devi Logistics Hub',
      nameOfRepresentative: 'R. K. Sharma (Customs Broker Reg: CHB-8420)',
      transshipments: []
    };

    // Deep copy transshipments
    let transshipments = d.transshipments ? JSON.parse(JSON.stringify(d.transshipments)) : [];

    const renderTransshipmentRows = () => {
      if (!transshipments || transshipments.length === 0) {
        return `<tr><td colspan="8" class="py-6 text-center text-xs text-[#5E6C84]">No transshipment legs added. Click "More transshipment" to enter transshipment routing.</td></tr>`;
      }
      return transshipments.map((t, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#F1F5F9] text-[#172B4D]">
          <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84] text-center">${idx + 1}</td>
          <td class="py-2.5 px-2.5 font-semibold text-[#172B4D]">${t.departurePort}</td>
          <td class="py-2.5 px-2.5 font-semibold text-[#172B4D]">${t.arrivalPort}</td>
          <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84]">${t.departureDate}</td>
          <td class="py-2.5 px-2.5 font-bold text-[#00A4B7]">${t.vesselName}</td>
          <td class="py-2.5 px-2.5 font-mono font-bold text-[#403294]">${t.voyNo}</td>
          <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84]">${t.arrivalDate}</td>
          <td class="py-2.5 px-2.5 text-center">
            <button type="button" class="btn-remove-transshipment text-[#DE350B] hover:text-[#BF2600] p-1 rounded hover:bg-[#FFEBE6] transition-colors cursor-pointer" data-idx="${idx}" title="Remove transshipment leg">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');
    };

    Modal.open({
      title: isEdit ? `ISF 10+2 Filing Form - ${d.invoiceNo}` : 'Submit New ISF 10+2 Filing',
      size: 'xl',
      content: `
        <form id="form-isf-modal" class="space-y-4 text-xs animate-fade-in">
          <!-- Section 1: Commercial & Invoice Identifiers -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial &amp; Invoice Reference</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CUSTOM INVOICE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="isf-custom-invoice" value="${d.invoiceNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PO NO</label>
                <input type="text" id="isf-po-no" value="${d.poNo || ''}" placeholder="e.g. PO-8821" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONSIGNEE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="isf-consignee" value="${d.consignee || d.buyer || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BRAND</label>
                <input type="text" id="isf-brand" value="${d.brand || 'Devi Gold'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ISF TRANSACTION NO</label>
                <input type="text" id="isf-transaction-no" value="${d.isfTransactionNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div class="col-span-1">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">P.INVOICE NO</label>
                <input type="text" id="isf-p-invoice-no" value="${d.pInvoiceNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#403294] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div class="sm:col-span-2 md:col-span-4">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ADDRESS</label>
                <input type="text" id="isf-address" value="${d.address || ''}" placeholder="Consignee delivery address in USA" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 2: Shipping Line, Bills of Lading & Container -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Shipping Line, Bills of Lading &amp; Container Specifications</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPPING LINE <span class="text-[#DE350B]">*</span></label>
                <select id="isf-shipping-line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Ocean Network Express (ONE)" ${d.shippingLine?.includes('ONE') ? 'selected' : ''}>Ocean Network Express (ONE)</option>
                  <option value="Maersk Line" ${d.shippingLine?.includes('Maersk') ? 'selected' : ''}>Maersk Line</option>
                  <option value="Hapag-Lloyd Line" ${d.shippingLine?.includes('Hapag') ? 'selected' : ''}>Hapag-Lloyd Line</option>
                  <option value="MSC Mediterranean Shipping Co." ${d.shippingLine?.includes('MSC') ? 'selected' : ''}>MSC Mediterranean Shipping Co.</option>
                  <option value="CMA CGM Logistics" ${d.shippingLine?.includes('CMA') ? 'selected' : ''}>CMA CGM Logistics</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONTAINER NUMBER <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="isf-container-number" value="${d.containerNumber || ''}" placeholder="e.g. ONEU-440912-8" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">LINER SEAL NUMBER <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="isf-liner-seal-number" value="${d.linerSealNumber || ''}" placeholder="e.g. ONE-SL-994012" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BL NUMBER <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="isf-bl-number" value="${d.blNumber || ''}" placeholder="e.g. ONEYMAA261014" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BL DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="isf-bl-date" value="${d.blDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPPING ONBOARD DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="isf-shipping-onboard-date" value="${d.shippingOnboardDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE OF LOADING</label>
                <input type="date" id="isf-date-of-loading" value="${d.dateOfLoading || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SIZE AND TYPE</label>
                <select id="isf-size-and-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="40ft High Cube Reefer (40HR)" ${d.sizeAndType?.includes('40HR') ? 'selected' : ''}>40ft High Cube Reefer (40HR)</option>
                  <option value="20ft Standard Reefer (20RF)" ${d.sizeAndType?.includes('20RF') ? 'selected' : ''}>20ft Standard Reefer (20RF)</option>
                  <option value="40ft Standard Reefer (40RF)" ${d.sizeAndType?.includes('40RF') ? 'selected' : ''}>40ft Standard Reefer (40RF)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STOW POSITION</label>
                <input type="text" id="isf-stow-position" value="${d.stowPosition || 'BAY 14 / ROW 06 / TIER 82'}" placeholder="e.g. BAY 14 / ROW 06" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STUFFING LOCATION <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="isf-stuffing-location" value="${d.stuffingLocation || 'Devi Fisheries Cold Storage CFS, Visakhapatnam'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>
            </div>
          </div>

          <!-- Section 3: Logistics, Transit & Verification -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Logistics, Transit &amp; Verification</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SDD (SCHEDULED DELIVERY DATE)</label>
                <input type="date" id="isf-sdd" value="${d.sdd || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BY ROAD</label>
                <input type="text" id="isf-by-road" value="${d.byRoad || 'Intermodal Reefer Trucking LLC'}" placeholder="Trucking Carrier" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BY ROAD DATE</label>
                <input type="date" id="isf-by-road-date" value="${d.byRoadDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TEMPERATURE OF RECORD</label>
                <input type="text" id="isf-temperature-of-record" value="${d.temperatureOfRecord || '-18.5°C continuous recorder verified'}" placeholder="e.g. -18°C" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEALTIME</label>
                <input type="text" id="isf-sealtime" value="${d.sealTime || '14:30 IST / Seal Verified'}" placeholder="e.g. 14:30 IST" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONSOLIDATOR</label>
                <input type="text" id="isf-consolidator" value="${d.consolidator || 'Expeditors International / Devi Logistics Hub'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NAME OF THE REPRESENTATIVE</label>
                <input type="text" id="isf-name-of-representative" value="${d.nameOfRepresentative || 'R. K. Sharma (Customs Broker Reg: CHB-8420)'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 4: Transshipment Routing Sub-Module -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center justify-between border-b border-[#F1F5F9]">
              <div class="flex items-center gap-2">
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">ISF Form &mdash; Transhipment Routing</h4>
              </div>
              <button type="button" id="btn-toggle-more-transshipment" class="btn-secondary px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 bg-[#F0F9FF] text-[#00A4B7] border border-[#BAE6FD] hover:bg-[#E0F2FE] transition-colors cursor-pointer select-none">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>More transshipment</span>
              </button>
            </div>

            <!-- ISF FORM — Transhipment Fields (Hidden by default until "More transshipment" is clicked) -->
            <div id="transshipment-fields-card" class="hidden bg-[#F8FAFC] p-3.5 rounded-lg border border-[#E2E8F0] mb-3.5 space-y-3">
              <div class="text-[11px] font-bold text-[#172B4D] uppercase tracking-wider flex items-center justify-between">
                <span>Enter Transhipment Details</span>
                <span class="text-[10px] text-[#5E6C84] font-medium">* Required for transshipment route</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTURE PORT</label>
                  <input type="text" id="ts-departure-port" value="Visakhapatnam (INVTZ)" placeholder="Port of Departure" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ARRIVAL PORT</label>
                  <input type="text" id="ts-arrival-port" value="Singapore Port (SGSIN)" placeholder="Port of Arrival" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTURE DATE <span class="text-[#DE350B]">*</span></label>
                  <input type="date" id="ts-departure-date" value="${new Date().toISOString().slice(0, 10)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
                  <input type="date" id="ts-arrival-date" value="${new Date().toISOString().slice(0, 10)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VESSEL NAME <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="ts-vessel-name" value="M/V X-PRESS BARKLY" placeholder="Vessel Name" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VOY#</label>
                  <input type="text" id="ts-voy-no" value="V.024W" placeholder="Voyage Number" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#403294] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>

                <div class="sm:col-span-2 md:col-span-4 flex justify-end">
                  <button type="button" id="btn-add-ts-leg" class="btn-primary px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Transhipment Leg</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- ISF FORM — Transhipment Table -->
            <div class="overflow-x-auto max-h-[240px] rounded-lg border border-[#DFE1E6]">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#5E6C84] uppercase font-bold text-[10px] tracking-wider">
                    <th class="py-2.5 px-2.5 text-center">S.No</th>
                    <th class="py-2.5 px-2.5">Departure Port</th>
                    <th class="py-2.5 px-2.5">Arrival Port</th>
                    <th class="py-2.5 px-2.5">Departure Date</th>
                    <th class="py-2.5 px-2.5">Vessel Name</th>
                    <th class="py-2.5 px-2.5">VOY#</th>
                    <th class="py-2.5 px-2.5">Arrival Date</th>
                    <th class="py-2.5 px-2.5 text-center">Remove</th>
                  </tr>
                </thead>
                <tbody id="ts-table-tbody" class="divide-y divide-[#F1F5F9] bg-white">
                  ${renderTransshipmentRows()}
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      buttons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: isEdit ? 'Update ISF 10+2 Record' : 'Submit ISF 10+2 Filing',
          type: 'primary',
          onClick: (modal) => {
            const getVal = (id) => document.getElementById(id)?.value?.trim() || '';

            const customInvoice = getVal('isf-custom-invoice');
            const consignee = getVal('isf-consignee');
            const shippingLine = getVal('isf-shipping-line');
            const containerNumber = getVal('isf-container-number');
            const linerSealNumber = getVal('isf-liner-seal-number');
            const blNumber = getVal('isf-bl-number');
            const blDate = getVal('isf-bl-date');
            const shippingOnboardDate = getVal('isf-shipping-onboard-date');
            const stuffingLocation = getVal('isf-stuffing-location');

            if (!customInvoice || !consignee || !shippingLine || !containerNumber || !linerSealNumber || !blNumber || !blDate || !shippingOnboardDate || !stuffingLocation) {
              Toast.show('Please fill in all mandatory fields marked with *', 'warning');
              return;
            }

            const updatedData = {
              ...d,
              invoiceNo: customInvoice,
              poNo: getVal('isf-po-no'),
              consignee,
              buyer: consignee,
              address: getVal('isf-address'),
              brand: getVal('isf-brand'),
              isfTransactionNo: getVal('isf-transaction-no') || `ISF-TXN-2026-${Math.floor(10000 + Math.random() * 90000)}`,
              pInvoiceNo: getVal('isf-p-invoice-no'),
              shippingLine,
              containerNumber,
              linerSealNumber,
              blNumber,
              blDate,
              shippingOnboardDate,
              stuffingLocation,
              dateOfLoading: getVal('isf-date-of-loading'),
              sizeAndType: getVal('isf-size-and-type'),
              stowPosition: getVal('isf-stow-position'),
              sdd: getVal('isf-sdd'),
              byRoad: getVal('isf-by-road'),
              byRoadDate: getVal('isf-by-road-date'),
              temperatureOfRecord: getVal('isf-temperature-of-record'),
              sealTime: getVal('isf-sealtime'),
              consolidator: getVal('isf-consolidator'),
              nameOfRepresentative: getVal('isf-name-of-representative'),
              transshipments: [...transshipments],
              status: 'ISF_FILED'
            };

            if (isEdit && targetRow) {
              Object.assign(targetRow, updatedData);
              Toast.show(`ISF 10+2 record updated successfully for ${targetRow.invoiceNo}`, 'success');
            } else {
              this.state.isfDetails.unshift(updatedData);
              Toast.show(`ISF 10+2 record created successfully for ${updatedData.invoiceNo}`, 'success');
            }

            modal.close();
            const mainEl = document.getElementById('sales-view-main');
            if (mainEl) this.renderIsfDetails(mainEl);
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    // Toggle "More transshipment" fields card
    const toggleTsBtn = modalRoot.querySelector('#btn-toggle-more-transshipment');
    const tsFieldsCard = modalRoot.querySelector('#transshipment-fields-card');
    toggleTsBtn?.addEventListener('click', () => {
      if (tsFieldsCard) {
        tsFieldsCard.classList.toggle('hidden');
        const isHidden = tsFieldsCard.classList.contains('hidden');
        toggleTsBtn.innerHTML = isHidden 
          ? `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg><span>More transshipment</span>`
          : `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg><span>Hide Transhipment Fields</span>`;
      }
    });

    // Remove Transshipment Leg binding
    const bindTsActions = () => {
      modalRoot.querySelectorAll('.btn-remove-transshipment').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.idx, 10);
          if (!isNaN(idx) && idx >= 0 && idx < transshipments.length) {
            const removed = transshipments.splice(idx, 1);
            const tbody = modalRoot.querySelector('#ts-table-tbody');
            if (tbody) tbody.innerHTML = renderTransshipmentRows();
            bindTsActions();
            Toast.show(`Removed transshipment leg: ${removed[0]?.vesselName || 'Leg'}`, 'info');
          }
        });
      });
    };

    bindTsActions();

    // Add Transshipment Leg button listener
    modalRoot.querySelector('#btn-add-ts-leg')?.addEventListener('click', () => {
      const getVal = (id) => modalRoot.querySelector(`#${id}`)?.value?.trim() || '';

      const depDate = getVal('ts-departure-date');
      const arrDate = getVal('ts-arrival-date');
      const vessel = getVal('ts-vessel-name');
      const depPort = getVal('ts-departure-port') || 'Visakhapatnam (INVTZ)';
      const arrPort = getVal('ts-arrival-port') || 'Singapore Port (SGSIN)';
      const voy = getVal('ts-voy-no') || 'V.01';

      if (!depDate || !arrDate || !vessel) {
        Toast.show('Please fill in Departure Date, Arrival Date and Vessel Name', 'warning');
        return;
      }

      const newLeg = {
        departurePort: depPort,
        arrivalPort: arrPort,
        departureDate: depDate,
        arrivalDate: arrDate,
        vesselName: vessel,
        voyNo: voy
      };

      transshipments.push(newLeg);

      const tbody = modalRoot.querySelector('#ts-table-tbody');
      if (tbody) tbody.innerHTML = renderTransshipmentRows();
      bindTsActions();

      Toast.show(`Added transshipment via ${vessel}`, 'success');
    });
  },

  // Modal: ISF Details View (On Row Click)
  showIsfDetailsModal(row) {
    const d = row || {};
    const transshipments = d.transshipments || [];

    const val = String(d.status || '').toUpperCase();
    let statusClass = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
    if (val.includes('FILED') || val.includes('ACCEPTED') || val.includes('APPROVED')) {
      statusClass = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
    } else if (val.includes('PENDING')) {
      statusClass = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
    } else if (val.includes('DRAFT') || val.includes('TRANSIT')) {
      statusClass = 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
    }

    Modal.open({
      title: `ISF 10+2 Filing Details - ${d.invoiceNo || d.id}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${d.invoiceNo || d.id}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase border ${statusClass}">${val.replace(/_/g, ' ')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${d.shippingLine || 'Ocean Line'}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span><strong>ISF Txn:</strong> ${d.isfTransactionNo || '-'}</span>
                  <span>•</span>
                  <span><strong>Buyer:</strong> ${d.buyer || '-'}</span>
                  <span>•</span>
                  <span><strong>Container:</strong> ${d.containerNumber || '-'}</span>
                  <span>•</span>
                  <span><strong>B/L No:</strong> ${d.blNumber || '-'}</span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 shrink-0">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Container Size</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-xs mt-0.5 block">${d.sizeAndType?.slice(0, 15) || '40ft Reefer'}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Set Temp</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs mt-0.5 block">${d.temperatureOfRecord?.slice(0, 8) || '-18.5°C'}</span>
              </div>
              <div class="bg-white px-3.5 py-1.5 rounded-lg border border-[#ABF5D1] bg-[#F0FDF4] shadow-2xs text-center min-w-[90px]">
                <span class="text-[10px] font-bold text-[#006644] uppercase tracking-wider block">Transhipments</span>
                <span class="font-mono font-extrabold text-[#006644] text-sm mt-0.5 block">${transshipments.length} Leg(s)</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Commercial & Invoice Identifiers -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial &amp; Invoice Reference</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CUSTOM INVOICE</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.invoiceNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PO NO</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.poNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONSIGNEE</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${d.consignee || d.buyer || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BRAND</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.brand || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ISF TRANSACTION NO</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.isfTransactionNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">P.INVOICE NO</span>
                <span class="font-mono font-bold text-[#403294] text-xs block mt-0.5">${d.pInvoiceNo || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ADDRESS</span>
                <span class="text-[#5E6C84] text-xs block mt-0.5">${d.address || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Shipping Line, Bills of Lading & Container -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Shipping Line, Bills of Lading &amp; Container Specifications</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPPING LINE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.shippingLine || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONTAINER NUMBER</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-xs block mt-0.5">${d.containerNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">LINER SEAL NUMBER</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${d.linerSealNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BL NUMBER</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.blNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BL DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.blDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPPING ONBOARD DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.shippingOnboardDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">DATE OF LOADING</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.dateOfLoading || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SIZE AND TYPE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.sizeAndType || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">STOW POSITION</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.stowPosition || '-'}</span>
              </div>
              <div class="sm:col-span-3">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">STUFFING LOCATION</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.stuffingLocation || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 3: Logistics, Transit & Verification -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Logistics, Transit &amp; Verification</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SDD (SCHEDULED DELIVERY DATE)</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.sdd || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BY ROAD</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.byRoad || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BY ROAD DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.byRoadDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">TEMPERATURE OF RECORD</span>
                <span class="font-mono font-bold text-[#006644] text-xs block mt-0.5">${d.temperatureOfRecord || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SEALTIME</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.sealTime || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONSOLIDATOR</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.consolidator || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NAME OF THE REPRESENTATIVE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.nameOfRepresentative || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 4: ISF FORM — Transhipment Table -->
          <div class="bg-white rounded-xl">
            <div class="flex items-center justify-between border-b border-[#F1F5F9]">
              <div class="flex items-center gap-2">
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">ISF FORM &mdash; Transhipment Routing Table</h4>
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] uppercase">${transshipments.length} Transhipment Legs</span>
            </div>
            
            <div class="overflow-x-auto max-h-[260px] rounded-lg border border-[#DFE1E6]">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#5E6C84] uppercase font-bold text-[10px] tracking-wider">
                    <th class="py-2.5 px-2.5 text-center">S.No</th>
                    <th class="py-2.5 px-2.5">Departure Port</th>
                    <th class="py-2.5 px-2.5">Arrival Port</th>
                    <th class="py-2.5 px-2.5">Departure Date</th>
                    <th class="py-2.5 px-2.5">Vessel Name</th>
                    <th class="py-2.5 px-2.5">VOY#</th>
                    <th class="py-2.5 px-2.5">Arrival Date</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#F1F5F9] bg-white">
                  ${transshipments.length === 0 ? `
                    <tr><td colspan="7" class="py-6 text-center text-xs text-[#5E6C84]">Direct shipment &mdash; no transshipment legs recorded.</td></tr>
                  ` : transshipments.map((t, idx) => `
                    <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#F1F5F9] text-[#172B4D]">
                      <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84] text-center">${idx + 1}</td>
                      <td class="py-2.5 px-2.5 font-semibold text-[#172B4D]">${t.departurePort}</td>
                      <td class="py-2.5 px-2.5 font-semibold text-[#172B4D]">${t.arrivalPort}</td>
                      <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84]">${t.departureDate}</td>
                      <td class="py-2.5 px-2.5 font-bold text-[#00A4B7]">${t.vesselName}</td>
                      <td class="py-2.5 px-2.5 font-mono font-bold text-[#403294]">${t.voyNo}</td>
                      <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84]">${t.arrivalDate}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Print ISF Report',
          type: 'secondary',
          onClick: () => Toast.show(`Printing ISF 10+2 report for ${d.invoiceNo}...`, 'info')
        },
        {
          label: 'Edit ISF Record',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            this.showAddIsfModal(d);
          }
        }
      ]
    });
  },

    // Tab 4: Shipping Bill (Indian Customs Export EDI)
  renderShippingBill(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title & Header Actions (NO Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Shipping Bill (Indian Customs Export EDI)</h1>
          </div>

        <!-- Search & Filter Card (4-column responsive grid) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="flt-sb-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="flt-sb-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="flt-sb-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- SELECT YEAR -->
            <div>
              <label for="flt-sb-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT YEAR</label>
              <select id="flt-sb-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Years</option>
                <option value="2026-2027">2026-2027</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>

            <!-- SELECT EXPORTER -->
            <div>
              <label for="flt-sb-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT EXPORTER</label>
              <select id="flt-sb-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Marine Processors">Devi Marine Processors</option>
              </select>
            </div>

            <!-- SELECT CONSIGNEE -->
            <div>
              <label for="flt-sb-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT CONSIGNEE</label>
              <select id="flt-sb-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Consignees</option>
                <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC</option>
                <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation</option>
                <option value="Royal Greenland Seafood A/S">Royal Greenland Seafood A/S</option>
                <option value="Sysco Corporation International">Sysco Corporation International</option>
                <option value="US Foods Trading Co">US Foods Trading Co</option>
              </select>
            </div>

            <!-- SELECT PLANT -->
            <div>
              <label for="flt-sb-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT PLANT</label>
              <select id="flt-sb-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Plants</option>
                <option value="Plant 1 - Singarayakonda">Plant 1 - Singarayakonda</option>
                <option value="Plant 2 - Ramatheertham">Plant 2 - Ramatheertham</option>
                <option value="Plant 3 - U-Puram">Plant 3 - U-Puram</option>
                <option value="Unit 4 - SEZ Processing Hub">Unit 4 - SEZ Processing Hub</option>
              </select>
            </div>

            <!-- SELECT COUNTRY -->
            <div>
              <label for="flt-sb-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT COUNTRY</label>
              <select id="flt-sb-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Countries</option>
                <option value="United States">United States</option>
                <option value="Japan">Japan</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <!-- INVOICE STATUS -->
            <div>
              <label for="flt-sb-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE STATUS</label>
              <select id="flt-sb-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Statuses</option>
                <option value="LEO_GRANTED">LEO Granted</option>
                <option value="LET_EXPORT_ORDER_ISSUED">Let Export Order Issued</option>
                <option value="CARTING_ORDER_ISSUED">Carting Order Issued</option>
                <option value="PENDING_LEO">Pending LEO</option>
              </select>
            </div>

            <!-- Search Button placed inside 4-col grid -->
            <div class="flex items-end">
              <button type="button" id="flt-sb-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="shipping-bill-table-container"></div>
      </div>
    `;

    // Primary action button removed as per requirements

    // Toggle filter
    const toggleBtn = container.querySelector('#flt-sb-toggle-btn');
    const filterBody = container.querySelector('#flt-sb-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render table
    const renderTable = (dataToDisplay) => {
      new DataTable({
        containerId: 'shipping-bill-table-container',
        data: dataToDisplay,
        keyField: 'id',
        tableTitle: `Shipping Bills (${dataToDisplay.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showShippingBillDetailsModal(row),
        columns: [
          {
            field: '__sno__',
            header: 'S.No',
            render: (v, r, idx) => `<span class="font-mono text-xs text-[#5E6C84]">${idx + 1}</span>`
          },
          {
            field: 'id',
            header: 'ID',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>`
          },
          {
            field: 'invNo',
            header: 'Inv No',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] hover:underline cursor-pointer">${v || '-'}</span>`
          },
          {
            field: 'poNo',
            header: 'PoNo',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'consigneeName',
            header: 'Consignee Name',
            render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v || '-'}</span>`
          },
          {
            field: 'shippingBillNo',
            header: 'Shipping Bill No',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v || '-'}</span>`
          },
          {
            field: 'invoiceStatus',
            header: 'Invoice Status',
            render: (v) => {
              const val = String(v || '').toUpperCase();
              let cls = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
              if (val.includes('GRANTED') || val.includes('ISSUED') || val.includes('APPROVED')) {
                cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              } else if (val.includes('PENDING') || val.includes('CARTING')) {
                cls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
              } else if (val.includes('DRAFT')) {
                cls = 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
              }
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${val.replace(/_/g, ' ')}</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Add Shipping Bill',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`,
            onClick: (row) => this.showAddShippingBillModal(row)
          }
        ]
      });
    };

    renderTable(this.state.shippingBills);

    // Search and Reset handlers
    const searchBtn = container.querySelector('#flt-sb-search-btn');
    const resetBtn = container.querySelector('#flt-sb-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const yr = container.querySelector('#flt-sb-year')?.value || 'ALL';
      const exp = container.querySelector('#flt-sb-exporter')?.value || 'ALL';
      const con = container.querySelector('#flt-sb-consignee')?.value || 'ALL';
      const pl = container.querySelector('#flt-sb-plant')?.value || 'ALL';
      const cty = container.querySelector('#flt-sb-country')?.value || 'ALL';
      const st = container.querySelector('#flt-sb-status')?.value || 'ALL';

      let filtered = [...this.state.shippingBills];

      if (yr !== 'ALL') {
        filtered = filtered.filter(r => (r.year || '').includes(yr));
      }
      if (exp !== 'ALL') {
        filtered = filtered.filter(r => (r.exporter || '').includes(exp));
      }
      if (con !== 'ALL') {
        filtered = filtered.filter(r => (r.consigneeName || r.consignee || '').includes(con));
      }
      if (pl !== 'ALL') {
        filtered = filtered.filter(r => (r.plant || '').includes(pl));
      }
      if (cty !== 'ALL') {
        filtered = filtered.filter(r => (r.country || r.countryOfDestination || '').includes(cty));
      }
      if (st !== 'ALL') {
        filtered = filtered.filter(r => (r.invoiceStatus || '').toUpperCase().includes(st));
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} shipping bill record(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      if (container.querySelector('#flt-sb-year')) container.querySelector('#flt-sb-year').value = 'ALL';
      if (container.querySelector('#flt-sb-exporter')) container.querySelector('#flt-sb-exporter').value = 'ALL';
      if (container.querySelector('#flt-sb-consignee')) container.querySelector('#flt-sb-consignee').value = 'ALL';
      if (container.querySelector('#flt-sb-plant')) container.querySelector('#flt-sb-plant').value = 'ALL';
      if (container.querySelector('#flt-sb-country')) container.querySelector('#flt-sb-country').value = 'ALL';
      if (container.querySelector('#flt-sb-status')) container.querySelector('#flt-sb-status').value = 'ALL';
      renderTable(this.state.shippingBills);
      Toast.show('Shipping bill filters reset', 'info');
    });
  },

  // Modal: SHIPPING BILLING Form (Top Section & Bottom Section)
  showAddShippingBillModal(targetRow) {
    const nextIdx = this.state.shippingBills.length + 1;
    const isEdit = !!targetRow;
    const d = targetRow || {
      id: `SB-${String(nextIdx).padStart(3, '0')}`,
      invNo: `CI-EXP-2026-${500 + nextIdx}`,
      poNo: 'PO-RL-8821',
      consigneeName: 'Red Lobster Supply Chain LLC',
      shippingBillNo: `SB-2026-${88400 + nextIdx}`,
      invoiceStatus: 'LEO_GRANTED',
      year: '2026-2027',
      exporter: 'Devi Fisheries Limited',
      plant: 'Plant 1 - Singarayakonda',
      country: 'United States',
      invoiceNo: `CI-EXP-2026-${500 + nextIdx}`,
      invoiceDate: new Date().toISOString().slice(0, 10),
      consignee: 'Red Lobster Supply Chain LLC',
      portOfLoading: 'Visakhapatnam Sea Port (INVTZ)',
      portOfDischarge: 'Port of Los Angeles (USLAX)',
      countryOfDestination: 'United States',
      totalCartons: 1800,
      netWeightKg: 21600.00,
      invoiceValue: 154200.00,
      freight: 4800.00,
      otherDeductions: 250.00,
      fobInr: 12603175.00,
      shippingDate: new Date().toISOString().slice(0, 10),
      leoDate: new Date().toISOString().slice(0, 10),
      exchangeRate: 84.50,
      sbFobUsd: 149150.00,
      sbFobInr: 12603175.00
    };

    Modal.open({
      title: isEdit ? `Edit Shipping Bill - ${d.shippingBillNo}` : 'Generate Shipping Bill (Indian Customs Export EDI)',
      size: 'xl',
      content: `
        <form id="form-sb-modal" class="space-y-4 text-xs animate-fade-in">
          <!-- SHIPPING BILLING — Form Input Fields (Top Section) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">SHIPPING BILLING &mdash; Form Input Fields (Top Section)</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="sb-form-invoice-no" value="${d.invoiceNo || d.invNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE DATE</label>
                <input type="date" id="sb-form-invoice-date" value="${d.invoiceDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONSIGNEE</label>
                <input type="text" id="sb-form-consignee" value="${d.consignee || d.consigneeName || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF LOADING</label>
                <input type="text" id="sb-form-port-loading" value="${d.portOfLoading || 'Visakhapatnam Sea Port (INVTZ)'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF DISCHARGE</label>
                <input type="text" id="sb-form-port-discharge" value="${d.portOfDischarge || 'Port of Los Angeles (USLAX)'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">COUNTY OF DESTINATION</label>
                <input type="text" id="sb-form-country-destination" value="${d.countryOfDestination || d.country || 'United States'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TOTAL NO.OF CARTONS</label>
                <input type="number" id="sb-form-cartons" value="${d.totalCartons || 1800}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NET WT (KGS)</label>
                <input type="number" step="0.01" id="sb-form-net-wt" value="${d.netWeightKg || 21600}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE VALUE ($)</label>
                <input type="number" step="0.01" id="sb-form-invoice-val" value="${d.invoiceValue || 154200}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT ($)</label>
                <input type="number" step="0.01" id="sb-form-freight" value="${d.freight || 4800}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">OTHER DEDUCTIONS $</label>
                <input type="number" step="0.01" id="sb-form-other-deductions" value="${d.otherDeductions || 250}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FOB INR</label>
                <input type="number" step="0.01" id="sb-form-fob-inr" value="${d.fobInr || 12603175}" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#DFE1E6] rounded font-mono font-extrabold text-[#006644] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- SHIPPING BILLING — Form Input Fields (Bottom Section) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">SHIPPING BILLING &mdash; Form Input Fields (Bottom Section)</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPPING BILL NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="sb-form-sb-no" value="${d.shippingBillNo || ''}" placeholder="e.g. SB-2026-88401" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPPING DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="sb-form-shipping-date" value="${d.shippingDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">LEO DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="sb-form-leo-date" value="${d.leoDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">EXCHANGE RATE <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="0.01" id="sb-form-exchange-rate" value="${d.exchangeRate || 84.50}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SB FOB US $ <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="0.01" id="sb-form-sb-fob-usd" value="${d.sbFobUsd || 149150}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SB FOB INR <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="0.01" id="sb-form-sb-fob-inr" value="${d.sbFobInr || 12603175}" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#DFE1E6] rounded font-mono font-extrabold text-[#006644] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>
            </div>
          </div>
        </form>
      `,
      buttons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: isEdit ? 'Update Shipping Bill' : 'Save Shipping Bill',
          type: 'primary',
          onClick: (modal) => {
            const getVal = (id) => document.getElementById(id)?.value?.trim() || '';
            const getNum = (id) => parseFloat(document.getElementById(id)?.value) || 0;

            const invoiceNo = getVal('sb-form-invoice-no');
            const sbNo = getVal('sb-form-sb-no');
            const shippingDate = getVal('sb-form-shipping-date');
            const leoDate = getVal('sb-form-leo-date');
            const exchangeRate = getNum('sb-form-exchange-rate');
            const sbFobUsd = getNum('sb-form-sb-fob-usd');
            const sbFobInr = getNum('sb-form-sb-fob-inr');

            if (!invoiceNo || !sbNo || !shippingDate || !leoDate || !exchangeRate || !sbFobUsd || !sbFobInr) {
              Toast.show('Please fill in all mandatory fields marked with *', 'warning');
              return;
            }

            const updatedData = {
              ...d,
              invNo: invoiceNo,
              invoiceNo,
              invoiceDate: getVal('sb-form-invoice-date'),
              consignee: getVal('sb-form-consignee'),
              consigneeName: getVal('sb-form-consignee'),
              portOfLoading: getVal('sb-form-port-loading'),
              portOfDischarge: getVal('sb-form-port-discharge'),
              countryOfDestination: getVal('sb-form-country-destination'),
              country: getVal('sb-form-country-destination'),
              totalCartons: getNum('sb-form-cartons'),
              netWeightKg: getNum('sb-form-net-wt'),
              invoiceValue: getNum('sb-form-invoice-val'),
              freight: getNum('sb-form-freight'),
              otherDeductions: getNum('sb-form-other-deductions'),
              fobInr: getNum('sb-form-fob-inr'),
              shippingBillNo: sbNo,
              shippingDate,
              leoDate,
              exchangeRate,
              sbFobUsd,
              sbFobInr,
              invoiceStatus: 'LEO_GRANTED'
            };

            if (isEdit && targetRow) {
              Object.assign(targetRow, updatedData);
              Toast.show(`Shipping Bill ${targetRow.shippingBillNo} updated successfully`, 'success');
            } else {
              this.state.shippingBills.unshift(updatedData);
              Toast.show(`Shipping Bill ${updatedData.shippingBillNo} generated successfully`, 'success');
            }

            modal.close();
            const mainEl = document.getElementById('sales-view-main');
            if (mainEl) this.renderShippingBill(mainEl);
          }
        }
      ]
    });

    // Auto-calculate SB FOB INR when Exchange Rate or SB FOB US $ changes
    const modalRoot = document.getElementById('erp-modal-root');
    if (modalRoot) {
      const rateInput = modalRoot.querySelector('#sb-form-exchange-rate');
      const fobUsdInput = modalRoot.querySelector('#sb-form-sb-fob-usd');
      const fobInrInput = modalRoot.querySelector('#sb-form-sb-fob-inr');
      const invValInput = modalRoot.querySelector('#sb-form-invoice-val');
      const freightInput = modalRoot.querySelector('#sb-form-freight');
      const deductionsInput = modalRoot.querySelector('#sb-form-other-deductions');
      const topFobInrInput = modalRoot.querySelector('#sb-form-fob-inr');

      const recalcFob = () => {
        const rate = parseFloat(rateInput?.value) || 0;
        const usd = parseFloat(fobUsdInput?.value) || 0;
        if (rate > 0 && usd > 0 && fobInrInput) {
          fobInrInput.value = (usd * rate).toFixed(2);
        }

        const inv = parseFloat(invValInput?.value) || 0;
        const fr = parseFloat(freightInput?.value) || 0;
        const ded = parseFloat(deductionsInput?.value) || 0;
        if (rate > 0 && inv > 0 && topFobInrInput) {
          topFobInrInput.value = Math.max(0, (inv - fr - ded) * rate).toFixed(2);
        }
      };

      rateInput?.addEventListener('input', recalcFob);
      fobUsdInput?.addEventListener('input', recalcFob);
      invValInput?.addEventListener('input', recalcFob);
      freightInput?.addEventListener('input', recalcFob);
      deductionsInput?.addEventListener('input', recalcFob);
    }
  },

  // Modal: SHIPPING BILL Details View (On Row Click)
  showShippingBillDetailsModal(row) {
    const d = row || {};
    const val = String(d.invoiceStatus || '').toUpperCase();
    let statusClass = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
    if (val.includes('GRANTED') || val.includes('ISSUED') || val.includes('APPROVED')) {
      statusClass = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
    } else if (val.includes('PENDING') || val.includes('CARTING')) {
      statusClass = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
    } else if (val.includes('DRAFT')) {
      statusClass = 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
    }

    Modal.open({
      title: `Shipping Bill Details - ${d.shippingBillNo || d.id}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${d.shippingBillNo || d.id}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase border ${statusClass}">${val.replace(/_/g, ' ')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${d.plant || 'Singarayakonda Plant'}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span><strong>Invoice:</strong> ${d.invoiceNo || d.invNo || '-'}</span>
                  <span>•</span>
                  <span><strong>PO No:</strong> ${d.poNo || '-'}</span>
                  <span>•</span>
                  <span><strong>Consignee:</strong> ${d.consignee || d.consigneeName || '-'}</span>
                  <span>•</span>
                  <span><strong>Destination:</strong> ${d.countryOfDestination || d.country || '-'}</span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 shrink-0">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Cartons</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-xs mt-0.5 block">${Number(d.totalCartons || 0).toLocaleString('en-IN')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Net Wt (Kg)</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs mt-0.5 block">${Number(d.netWeightKg || 0).toLocaleString('en-IN')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Ex. Rate</span>
                <span class="font-mono font-extrabold text-[#403294] text-xs mt-0.5 block">₹${d.exchangeRate || 84.50}</span>
              </div>
              <div class="bg-white px-3.5 py-1.5 rounded-lg border border-[#ABF5D1] bg-[#F0FDF4] shadow-2xs text-center min-w-[100px]">
                <span class="text-[10px] font-bold text-[#006644] uppercase tracking-wider block">SB FOB INR</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs mt-0.5 block">₹${Number(d.sbFobInr || 0).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: SHIPPING BILLING — Form Input Fields (Top Section) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">SHIPPING BILLING &mdash; Parameters (Top Section)</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">INVOICE NO</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.invoiceNo || d.invNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">INVOICE DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.invoiceDate || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONSIGNEE</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${d.consignee || d.consigneeName || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PORT OF LOADING</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.portOfLoading || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PORT OF DISCHARGE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.portOfDischarge || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">COUNTY OF DESTINATION</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.countryOfDestination || d.country || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">TOTAL NO.OF CARTONS</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${Number(d.totalCartons || 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NET WT (KGS)</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${Number(d.netWeightKg || 0).toLocaleString('en-IN')} Kgs</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">INVOICE VALUE</span>
                <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${Number(d.invoiceValue || 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FREIGHT</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${Number(d.freight || 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">OTHER DEDUCTIONS $</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${Number(d.otherDeductions || 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FOB INR</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs block mt-0.5">₹${Number(d.fobInr || 0).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: SHIPPING BILLING — Form Input Fields (Bottom Section) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">SHIPPING BILLING &mdash; Parameters (Bottom Section)</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPPING BILL NO</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.shippingBillNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPPING DATE</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.shippingDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">LEO DATE</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.leoDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">EXCHANGE RATE</span>
                <span class="font-mono font-bold text-[#403294] text-xs block mt-0.5">₹${d.exchangeRate || 84.50} / USD</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SB FOB US $</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${Number(d.sbFobUsd || 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SB FOB INR</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs block mt-0.5">₹${Number(d.sbFobInr || 0).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Print Shipping Bill EDI Report',
          type: 'secondary',
          onClick: () => Toast.show(`Printing EDI Customs report for ${d.shippingBillNo}...`, 'info')
        },
        {
          label: 'Edit Shipping Bill Record',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            this.showAddShippingBillModal(d);
          }
        }
      ]
    });
  },

  // Tab 5: Commercial Invoices (Final Export Settlement)
  renderCommercialInvoice(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title Header (NO Subheading, NO header button) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Commercial Invoices (Final Export Settlement)</h1>
        </div>

        <!-- Search & Filter Card (4-column responsive grid) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="flt-cinv-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="flt-cinv-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="flt-cinv-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- SELECT YEAR -->
            <div>
              <label for="flt-cinv-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT YEAR</label>
              <select id="flt-cinv-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Years</option>
                <option value="2026-2027">2026-2027</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>

            <!-- SELECT EXPORTER -->
            <div>
              <label for="flt-cinv-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT EXPORTER</label>
              <select id="flt-cinv-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Marine Processors">Devi Marine Processors</option>
              </select>
            </div>

            <!-- SELECT CONSIGNEE -->
            <div>
              <label for="flt-cinv-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT CONSIGNEE</label>
              <select id="flt-cinv-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Consignees</option>
                <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC</option>
                <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation</option>
                <option value="Royal Greenland Seafood A/S">Royal Greenland Seafood A/S</option>
                <option value="Sysco Corporation International">Sysco Corporation International</option>
                <option value="US Foods Trading Co">US Foods Trading Co</option>
              </select>
            </div>

            <!-- SELECT COUNTRY -->
            <div>
              <label for="flt-cinv-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT COUNTRY</label>
              <select id="flt-cinv-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Countries</option>
                <option value="United States">United States</option>
                <option value="Japan">Japan</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <!-- INVOICE STATUS -->
            <div>
              <label for="flt-cinv-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE STATUS</label>
              <select id="flt-cinv-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Statuses</option>
                <option value="FINAL_SETTLED">Final Settled</option>
                <option value="PAYMENT_RECEIVED">Payment Received</option>
                <option value="DISPATCHED_DOCS_IN_BANK">Dispatched Docs in Bank</option>
                <option value="DOCS_SENT_TO_BUYER_BANK">Docs Sent to Buyer Bank</option>
                <option value="PENDING_SETTLEMENT">Pending Settlement</option>
              </select>
            </div>

            <!-- Search Button placed inside 4-col grid -->
            <div class="flex items-end">
              <button type="button" id="flt-cinv-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="commercial-invoice-table-container"></div>
      </div>
    `;

    // Toggle filter
    const toggleBtn = container.querySelector('#flt-cinv-toggle-btn');
    const filterBody = container.querySelector('#flt-cinv-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render table
    const renderTable = (dataToDisplay) => {
      new DataTable({
        containerId: 'commercial-invoice-table-container',
        data: dataToDisplay,
        keyField: 'id',
        tableTitle: `Commercial Invoices (${dataToDisplay.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showCommercialInvoiceDetailsModal(row),
        columns: [
          {
            field: '__sno__',
            header: 'SNO',
            render: (v, r, idx) => `<span class="font-mono text-xs text-[#5E6C84]">${idx + 1}</span>`
          },
          {
            field: 'id',
            header: 'ID',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>`
          },
          {
            field: 'pInvoiceNo',
            header: 'P.Invoice NO',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#403294]">${v || '-'}</span>`
          },
          {
            field: 'invoiceNo',
            header: 'Invoice NO',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] hover:underline cursor-pointer">${v || '-'}</span>`
          },
          {
            field: 'invoiceDate',
            header: 'Invoice Date',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v || '-'}</span>`
          },
          {
            field: 'poNo',
            header: 'Po NO',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'buyer',
            header: 'Buyer',
            render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v || '-'}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            render: (v) => {
              const val = String(v || '').toUpperCase();
              let cls = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
              if (val.includes('SETTLED') || val.includes('RECEIVED') || val.includes('FINAL')) {
                cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              } else if (val.includes('DISPATCHED') || val.includes('SENT') || val.includes('BANK')) {
                cls = 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
              } else if (val.includes('PENDING')) {
                cls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
              }
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${val.replace(/_/g, ' ')}</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Add Product Specs & Batch Item',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`,
            onClick: (row) => this.showAddCommercialInvoiceProductModal(row)
          }
        ]
      });
    };

    renderTable(this.state.commercialInvoices);

    // Search and Reset handlers
    const searchBtn = container.querySelector('#flt-cinv-search-btn');
    const resetBtn = container.querySelector('#flt-cinv-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const yr = container.querySelector('#flt-cinv-year')?.value || 'ALL';
      const exp = container.querySelector('#flt-cinv-exporter')?.value || 'ALL';
      const con = container.querySelector('#flt-cinv-consignee')?.value || 'ALL';
      const cty = container.querySelector('#flt-cinv-country')?.value || 'ALL';
      const st = container.querySelector('#flt-cinv-status')?.value || 'ALL';

      let filtered = [...this.state.commercialInvoices];

      if (yr !== 'ALL') {
        filtered = filtered.filter(r => (r.year || '').includes(yr));
      }
      if (exp !== 'ALL') {
        filtered = filtered.filter(r => (r.exporter || '').includes(exp));
      }
      if (con !== 'ALL') {
        filtered = filtered.filter(r => (r.buyer || r.consignee || '').includes(con));
      }
      if (cty !== 'ALL') {
        filtered = filtered.filter(r => (r.country || '').includes(cty));
      }
      if (st !== 'ALL') {
        filtered = filtered.filter(r => (r.status || '').toUpperCase().includes(st));
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} commercial invoice record(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      if (container.querySelector('#flt-cinv-year')) container.querySelector('#flt-cinv-year').value = 'ALL';
      if (container.querySelector('#flt-cinv-exporter')) container.querySelector('#flt-cinv-exporter').value = 'ALL';
      if (container.querySelector('#flt-cinv-consignee')) container.querySelector('#flt-cinv-consignee').value = 'ALL';
      if (container.querySelector('#flt-cinv-country')) container.querySelector('#flt-cinv-country').value = 'ALL';
      if (container.querySelector('#flt-cinv-status')) container.querySelector('#flt-cinv-status').value = 'ALL';
      renderTable(this.state.commercialInvoices);
      Toast.show('Commercial invoice filters reset', 'info');
    });
  },

  // Modal: Commercial Invoice Product Specifications & Line Items Entry Form
  showAddCommercialInvoiceProductModal(targetRow) {
    const d = targetRow || {};
    let items = d.items ? JSON.parse(JSON.stringify(d.items)) : [];

    const renderItemsTableBody = () => {
      if (!items || items.length === 0) {
        return `<tr><td colspan="10" class="py-6 text-center text-xs text-[#5E6C84]">No product specifications added yet. Fill in the fields above and click "Add Product Item".</td></tr>`;
      }
      return items.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#F1F5F9] text-[#172B4D]">
          <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84] text-center">${idx + 1}</td>
          <td class="py-2.5 px-2.5 font-bold text-[#172B4D]">${it.productDescription || '-'}</td>
          <td class="py-2.5 px-2.5 text-[#5E6C84]">${it.specs || '-'}</td>
          <td class="py-2.5 px-2.5 font-semibold text-[#172B4D]">${it.packing || '-'}</td>
          <td class="py-2.5 px-2.5 font-mono font-bold text-[#00A4B7]">${it.grade || '-'}</td>
          <td class="py-2.5 px-2.5 font-mono font-bold text-[#172B4D] text-right">${Number(it.cartons || 0).toLocaleString('en-IN')}</td>
          <td class="py-2.5 px-2.5 font-mono font-semibold text-[#403294]">${it.codes || '-'}</td>
          <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84]">${it.productionDate || '-'}</td>
          <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84]">${it.bestBeforeDate || '-'}</td>
          <td class="py-2.5 px-2.5 text-center">
            <button type="button" class="btn-remove-cinv-item text-[#DE350B] hover:text-[#BF2600] p-1 rounded hover:bg-[#FFEBE6] transition-colors cursor-pointer" data-idx="${idx}" title="Remove item">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');
    };

    Modal.open({
      title: `Commercial Invoice & Product Specifications &mdash; ${d.invoiceNo || d.id}`,
      size: 'xl',
      content: `
        <form id="form-cinv-complete-modal" class="space-y-4 text-xs animate-fade-in">
          <!-- Reference Header Bar -->
          <div class="bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6] flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-3">
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${d.invoiceNo || '-'}</span>
              <span class="text-[#CBD5E1]">|</span>
              <span class="text-xs text-[#5E6C84]">P.Inv: <strong class="font-mono text-[#403294]">${d.pInvoiceNo || '-'}</strong></span>
              <span class="text-[#CBD5E1]">|</span>
              <span class="text-xs text-[#5E6C84]">PO: <strong class="text-[#172B4D]">${d.poNo || '-'}</strong></span>
              <span class="text-[#CBD5E1]">|</span>
              <span class="text-xs text-[#5E6C84]">Buyer: <strong class="text-[#172B4D]">${d.buyer || '-'}</strong></span>
            </div>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] uppercase">${d.status || 'FINAL_SETTLED'}</span>
          </div>

          <!-- Section 1: Commercial Invoice Form Input Fields -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial Invoice &amp; Settlement Parameters</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <!-- Custom Invoice -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Custom Invoice <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-custom-invoice" value="${d.invoiceNo || d.invNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <!-- PO No -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PO No</label>
                <input type="text" id="ci-po-no" value="${d.poNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Consignee -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Consignee <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-consignee" value="${d.consignee || d.buyer || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <!-- Address -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Address</label>
                <input type="text" id="ci-address" value="${d.address || '450 S Orange Ave, Orlando, FL 32801, USA'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Payment Terms * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Payment Terms <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-payment-terms" value="${d.paymentTerms || '100% CAD against original documents via bank'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <!-- Shipment Terms * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Shipment Terms <span class="text-[#DE350B]">*</span></label>
                <select id="ci-shipment-terms" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="DDP" ${(d.shipmentTerms || 'DDP') === 'DDP' ? 'selected' : ''}>DDP (Delivered Duty Paid)</option>
                  <option value="CIF" ${d.shipmentTerms === 'CIF' ? 'selected' : ''}>CIF (Cost, Insurance & Freight)</option>
                  <option value="CFR" ${d.shipmentTerms === 'CFR' ? 'selected' : ''}>CFR (Cost & Freight)</option>
                  <option value="FOB" ${d.shipmentTerms === 'FOB' ? 'selected' : ''}>FOB (Free on Board)</option>
                </select>
              </div>

              <!-- Shipment Terms Ext -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Shipment Terms Ext</label>
                <input type="text" id="ci-shipment-terms-ext" value="${d.shipmentTermsExt || 'Port of Los Angeles / Long Beach Hub'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Discount -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Discount ($)</label>
                <input type="number" step="0.01" id="ci-discount" value="${d.discount || 0.00}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Freight * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Freight ($) <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="0.01" id="ci-freight" value="${d.freight || 4800.00}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <!-- ExRate * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ExRate <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="0.01" id="ci-exrate" value="${d.exchangeRate || d.exRate || 84.50}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <!-- Bank Details -->
              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Bank Details</label>
                <input type="text" id="ci-bank-details" value="${d.bankReference || 'State Bank of India Overseas Branch Visakhapatnam'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Show Bank * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Show Bank <span class="text-[#DE350B]">*</span></label>
                <select id="ci-show-bank" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Yes" ${(d.showBank || 'Yes') === 'Yes' ? 'selected' : ''}>Yes</option>
                  <option value="No" ${d.showBank === 'No' ? 'selected' : ''}>No</option>
                </select>
              </div>

              <!-- Show BL No * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Show BL No <span class="text-[#DE350B]">*</span></label>
                <select id="ci-show-bl-no" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Yes" ${(d.showBlNo || 'Yes') === 'Yes' ? 'selected' : ''}>Yes</option>
                  <option value="No" ${d.showBlNo === 'No' ? 'selected' : ''}>No</option>
                </select>
              </div>

              <!-- Show BL Date * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Show BL Date <span class="text-[#DE350B]">*</span></label>
                <select id="ci-show-bl-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Yes" ${(d.showBlDate || 'Yes') === 'Yes' ? 'selected' : ''}>Yes</option>
                  <option value="No" ${d.showBlDate === 'No' ? 'selected' : ''}>No</option>
                </select>
              </div>

              <!-- Data Logger -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Data Logger</label>
                <input type="text" id="ci-data-logger" value="${d.dataLogger || 'Sensitech TempTale Ultra Serial #TT-99420'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Placed AT -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Placed AT</label>
                <input type="text" id="ci-placed-at" value="${d.placedAt || 'Pallet #1 Top Box & Pallet #10 Middle Box'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Issued By -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Issued By</label>
                <input type="text" id="ci-issued-by" value="${d.issuedBy || 'Devi Fisheries QA Logistics Department'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Show Shipping Details * -->
              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Show Shipping Details <span class="text-[#DE350B]">*</span></label>
                <select id="ci-show-shipping-details" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="Yes" ${(d.showShippingDetails || 'Yes') === 'Yes' ? 'selected' : ''}>Yes</option>
                  <option value="No" ${d.showShippingDetails === 'No' ? 'selected' : ''}>No</option>
                </select>
              </div>

              <!-- Special Notes(Commercial Description) -->
              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Special Notes (Commercial Description)</label>
                <textarea id="ci-special-notes-comm" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${d.specialNotesComm || 'Indian Origin Farmed White Shrimp. Processed under US FDA & BRCGS Global Standard.'}</textarea>
              </div>

              <!-- Special Notes(Packing List Description) -->
              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Special Notes (Packing List Description)</label>
                <textarea id="ci-special-notes-pack" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${d.specialNotesPack || 'Cargo stuffed in pre-cooled reefer container at -18.5°C with High Security Bolt Seal.'}</textarea>
              </div>
            </div>
          </div>

          <!-- Section 2: Form Input Fields Section for Product Line Items -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Product Specifications &amp; Packaging Input Fields</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <!-- Product Description -->
              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Product Description <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-item-desc" placeholder="e.g. Frozen Raw Black Tiger Shrimp HLSO" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Specs -->
              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Specs</label>
                <input type="text" id="ci-item-specs" placeholder="e.g. Headless Shell-On, IQF, Block Frozen" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Packing -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Packing <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-item-packing" placeholder="e.g. 10 x 2 kg Master Cartons" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Grade -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Grade <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-item-grade" placeholder="e.g. 16/20, 21/25, 26/30" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Cartons -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Cartons <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="ci-item-cartons" placeholder="e.g. 600" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Codes -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Codes</label>
                <input type="text" id="ci-item-codes" placeholder="e.g. LOT-BT-2026-901A" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#403294] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- ProductionDate -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ProductionDate <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="ci-item-prod-date" value="${new Date().toISOString().slice(0, 10)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- Best Before Date -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Best Before Date <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="ci-item-best-before" value="${new Date(Date.now() + 730 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div class="sm:col-span-2 flex items-end justify-end">
                <button type="button" id="btn-add-cinv-item" class="btn-primary px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                  <span>Add Product Item</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Section 3: Data Table Columns (Product Line Items) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center justify-between border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Product Line Items &amp; Packaging Breakdown</h4>
              <span id="cinv-items-count-badge" class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] uppercase">${items.length} Items</span>
            </div>
            
            <div class="overflow-x-auto max-h-[260px] rounded-lg border border-[#DFE1E6] mt-3">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#5E6C84] uppercase font-bold text-[10px] tracking-wider">
                    <th class="py-2.5 px-2.5 text-center">S.No</th>
                    <th class="py-2.5 px-2.5">Product Description</th>
                    <th class="py-2.5 px-2.5">Specs</th>
                    <th class="py-2.5 px-2.5">Packing</th>
                    <th class="py-2.5 px-2.5">Grade</th>
                    <th class="py-2.5 px-2.5 text-right">Cartons</th>
                    <th class="py-2.5 px-2.5">Codes</th>
                    <th class="py-2.5 px-2.5">ProductionDate</th>
                    <th class="py-2.5 px-2.5">Best Before Date</th>
                    <th class="py-2.5 px-2.5 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="cinv-items-tbody" class="divide-y divide-[#F1F5F9] bg-white">
                  ${renderItemsTableBody()}
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      buttons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Save Commercial Invoice',
          type: 'primary',
          onClick: (modal) => {
            const getVal = (id) => document.getElementById(id)?.value?.trim() || '';
            const getNum = (id) => parseFloat(document.getElementById(id)?.value) || 0;

            const customInvoice = getVal('ci-custom-invoice');
            const consignee = getVal('ci-consignee');
            const paymentTerms = getVal('ci-payment-terms');
            const shipmentTerms = getVal('ci-shipment-terms');
            const freight = getNum('ci-freight');
            const exRate = getNum('ci-exrate');

            if (!customInvoice || !consignee || !paymentTerms || !shipmentTerms) {
              Toast.show('Please fill in mandatory fields: Custom Invoice, Consignee, Payment Terms, Shipment Terms', 'warning');
              return;
            }

            // Update record
            d.invoiceNo = customInvoice;
            d.invNo = customInvoice;
            d.poNo = getVal('ci-po-no');
            d.consignee = consignee;
            d.buyer = consignee;
            d.address = getVal('ci-address');
            d.paymentTerms = paymentTerms;
            d.shipmentTerms = shipmentTerms;
            d.shipmentTermsExt = getVal('ci-shipment-terms-ext');
            d.discount = getNum('ci-discount');
            d.freight = freight;
            d.exchangeRate = exRate;
            d.exRate = exRate;
            d.bankReference = getVal('ci-bank-details');
            d.showBank = getVal('ci-show-bank');
            d.showBlNo = getVal('ci-show-bl-no');
            d.showBlDate = getVal('ci-show-bl-date');
            d.dataLogger = getVal('ci-data-logger');
            d.placedAt = getVal('ci-placed-at');
            d.issuedBy = getVal('ci-issued-by');
            d.showShippingDetails = getVal('ci-show-shipping-details');
            d.specialNotesComm = getVal('ci-special-notes-comm');
            d.specialNotesPack = getVal('ci-special-notes-pack');

            d.items = [...items];
            d.totalCartons = items.reduce((sum, it) => sum + (parseInt(it.cartons, 10) || 0), 0);

            Toast.show(`Commercial Invoice ${d.invoiceNo} & product line items saved successfully`, 'success');
            modal.close();
            const mainEl = document.getElementById('sales-view-main');
            if (mainEl) this.renderCommercialInvoice(mainEl);
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    // Bind remove button listeners
    const bindItemActions = () => {
      modalRoot.querySelectorAll('.btn-remove-cinv-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.idx, 10);
          if (!isNaN(idx) && idx >= 0 && idx < items.length) {
            const removed = items.splice(idx, 1);
            const tbody = modalRoot.querySelector('#cinv-items-tbody');
            if (tbody) tbody.innerHTML = renderItemsTableBody();
            const badge = modalRoot.querySelector('#cinv-items-count-badge');
            if (badge) badge.textContent = `${items.length} Items`;
            bindItemActions();
            Toast.show(`Removed ${removed[0]?.productDescription || 'item'}`, 'info');
          }
        });
      });
    };

    bindItemActions();

    // Bind add button listener
    modalRoot.querySelector('#btn-add-cinv-item')?.addEventListener('click', () => {
      const getVal = (id) => modalRoot.querySelector(`#${id}`)?.value?.trim() || '';

      const desc = getVal('ci-item-desc');
      const specs = getVal('ci-item-specs');
      const packing = getVal('ci-item-packing');
      const grade = getVal('ci-item-grade');
      const cartons = parseInt(getVal('ci-item-cartons'), 10) || 0;
      const codes = getVal('ci-item-codes');
      const prodDate = getVal('ci-item-prod-date');
      const bestBefore = getVal('ci-item-best-before');

      if (!desc || !packing || !grade || !cartons || !prodDate || !bestBefore) {
        Toast.show('Please fill in Product Description, Packing, Grade, Cartons, ProductionDate, and Best Before Date', 'warning');
        return;
      }

      const newItem = {
        productDescription: desc,
        specs: specs || '-',
        packing,
        grade,
        cartons,
        codes: codes || '-',
        productionDate: prodDate,
        bestBeforeDate: bestBefore
      };

      items.push(newItem);

      const tbody = modalRoot.querySelector('#cinv-items-tbody');
      if (tbody) tbody.innerHTML = renderItemsTableBody();
      const badge = modalRoot.querySelector('#cinv-items-count-badge');
      if (badge) badge.textContent = `${items.length} Items`;

      // Clear form inputs
      if (modalRoot.querySelector('#ci-item-desc')) modalRoot.querySelector('#ci-item-desc').value = '';
      if (modalRoot.querySelector('#ci-item-specs')) modalRoot.querySelector('#ci-item-specs').value = '';
      if (modalRoot.querySelector('#ci-item-packing')) modalRoot.querySelector('#ci-item-packing').value = '';
      if (modalRoot.querySelector('#ci-item-grade')) modalRoot.querySelector('#ci-item-grade').value = '';
      if (modalRoot.querySelector('#ci-item-cartons')) modalRoot.querySelector('#ci-item-cartons').value = '';
      if (modalRoot.querySelector('#ci-item-codes')) modalRoot.querySelector('#ci-item-codes').value = '';

      bindItemActions();
      Toast.show(`Added ${desc} (${grade})`, 'success');
    });
  },

  // Modal: Commercial Invoice Details View (On Row Click)
  showCommercialInvoiceDetailsModal(row) {
    const d = row || {};
    const items = d.items || [];
    const val = String(d.status || '').toUpperCase();
    let statusClass = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
    if (val.includes('SETTLED') || val.includes('RECEIVED') || val.includes('FINAL')) {
      statusClass = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
    } else if (val.includes('DISPATCHED') || val.includes('SENT') || val.includes('BANK')) {
      statusClass = 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
    } else if (val.includes('PENDING')) {
      statusClass = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
    }

    Modal.open({
      title: `Commercial Invoice Details - ${d.invoiceNo || d.id}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${d.invoiceNo || d.id}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase border ${statusClass}">${val.replace(/_/g, ' ')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${d.exporter || 'Devi Fisheries Limited'}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span><strong>P.Inv:</strong> ${d.pInvoiceNo || '-'}</span>
                  <span>•</span>
                  <span><strong>PO:</strong> ${d.poNo || '-'}</span>
                  <span>•</span>
                  <span><strong>Buyer:</strong> ${d.buyer || d.consignee || '-'}</span>
                  <span>•</span>
                  <span><strong>Destination:</strong> ${d.destinationPort || d.country || '-'}</span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 shrink-0">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Cartons</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-xs mt-0.5 block">${Number(d.totalCartons || 0).toLocaleString('en-IN')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Net Wt</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs mt-0.5 block">${Number(d.netWeightKg || 0).toLocaleString('en-IN')} Kg</span>
              </div>
              <div class="bg-white px-3.5 py-1.5 rounded-lg border border-[#ABF5D1] bg-[#F0FDF4] shadow-2xs text-center min-w-[100px]">
                <span class="text-[10px] font-bold text-[#006644] uppercase tracking-wider block">Invoice USD</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs mt-0.5 block">${Number(d.totalValueUsd || 0).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Commercial & Settlement Parameters -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial Invoice &amp; Settlement Parameters</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CUSTOM INVOICE</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.invoiceNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PO NO</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${d.poNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONSIGNEE</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${d.consignee || d.buyer || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PAYMENT TERMS</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.paymentTerms || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPMENT TERMS</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${d.shipmentTerms || 'DDP'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHIPMENT TERMS EXT</span>
                <span class="text-[#5E6C84] text-xs block mt-0.5">${d.shipmentTermsExt || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FREIGHT</span>
                <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${Number(d.freight || 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">EXCHANGE RATE</span>
                <span class="font-mono font-bold text-[#403294] text-xs block mt-0.5">₹${d.exchangeRate || d.exRate || 84.50}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">DATA LOGGER</span>
                <span class="text-[#172B4D] text-xs block mt-0.5 font-semibold">${d.dataLogger || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PLACED AT</span>
                <span class="text-[#5E6C84] text-xs block mt-0.5">${d.placedAt || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ISSUED BY</span>
                <span class="text-[#5E6C84] text-xs block mt-0.5">${d.issuedBy || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHOW SHIPPING DETAILS</span>
                <span class="font-bold text-[#006644] text-xs block mt-0.5">${d.showShippingDetails || 'Yes'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ADDRESS</span>
                <span class="text-[#5E6C84] text-xs block mt-0.5">${d.address || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BANK DETAILS</span>
                <span class="text-[#5E6C84] text-xs block mt-0.5">${d.bankReference || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SPECIAL NOTES (COMMERCIAL DESCRIPTION)</span>
                <span class="text-[#172B4D] text-xs block mt-0.5 bg-[#F8FAFC] p-2 rounded border border-[#F1F5F9]">${d.specialNotesComm || 'Indian Origin Farmed White Shrimp. Processed under US FDA & BRCGS Global Standard.'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SPECIAL NOTES (PACKING LIST DESCRIPTION)</span>
                <span class="text-[#172B4D] text-xs block mt-0.5 bg-[#F8FAFC] p-2 rounded border border-[#F1F5F9]">${d.specialNotesPack || 'Cargo stuffed in pre-cooled reefer container at -18.5°C with High Security Bolt Seal.'}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Product Specifications Table -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center justify-between border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Product Specifications &amp; Packing Breakdown</h4>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] uppercase">${items.length} Product Items</span>
            </div>
            
            <div class="overflow-x-auto max-h-[260px] rounded-lg border border-[#DFE1E6] mt-3">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#5E6C84] uppercase font-bold text-[10px] tracking-wider">
                    <th class="py-2.5 px-2.5 text-center">S.No</th>
                    <th class="py-2.5 px-2.5">Product Description</th>
                    <th class="py-2.5 px-2.5">Specs</th>
                    <th class="py-2.5 px-2.5">Packing</th>
                    <th class="py-2.5 px-2.5">Grade</th>
                    <th class="py-2.5 px-2.5 text-right">Cartons</th>
                    <th class="py-2.5 px-2.5">Codes</th>
                    <th class="py-2.5 px-2.5">ProductionDate</th>
                    <th class="py-2.5 px-2.5">Best Before Date</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#F1F5F9] bg-white">
                  ${items.length === 0 ? `
                    <tr><td colspan="9" class="py-6 text-center text-xs text-[#5E6C84]">No product specifications recorded.</td></tr>
                  ` : items.map((it, idx) => `
                    <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#F1F5F9] text-[#172B4D]">
                      <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84] text-center">${idx + 1}</td>
                      <td class="py-2.5 px-2.5 font-bold text-[#172B4D]">${it.productDescription || '-'}</td>
                      <td class="py-2.5 px-2.5 text-[#5E6C84]">${it.specs || '-'}</td>
                      <td class="py-2.5 px-2.5 font-semibold text-[#172B4D]">${it.packing || '-'}</td>
                      <td class="py-2.5 px-2.5 font-mono font-bold text-[#00A4B7]">${it.grade || '-'}</td>
                      <td class="py-2.5 px-2.5 font-mono font-bold text-[#172B4D] text-right">${Number(it.cartons || 0).toLocaleString('en-IN')}</td>
                      <td class="py-2.5 px-2.5 font-mono font-semibold text-[#403294]">${it.codes || '-'}</td>
                      <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84]">${it.productionDate || '-'}</td>
                      <td class="py-2.5 px-2.5 font-mono text-xs text-[#5E6C84]">${it.bestBeforeDate || '-'}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Print Commercial Invoice',
          type: 'secondary',
          onClick: () => Toast.show(`Printing Final Commercial Invoice for ${d.invoiceNo}...`, 'info')
        },
        {
          label: 'Edit Invoice & Specs',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            this.showAddCommercialInvoiceProductModal(d);
          }
        }
      ]
    });
  },

  // Tab 6: ETA Status (Update FBD & Arrival Schedules)
  renderEtaStatus(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title Header (NO Subheading, NO header button) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">ETA Status (Update FBD &amp; Arrival Schedules)</h1>
        </div>

        <!-- Search & Filter Card (4-column responsive grid) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="flt-eta-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="flt-eta-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="flt-eta-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- Select Exporter -->
            <div>
              <label for="flt-eta-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Exporter</label>
              <select id="flt-eta-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Marine Processors">Devi Marine Processors</option>
              </select>
            </div>

            <!-- Plant -->
            <div>
              <label for="flt-eta-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Plant</label>
              <select id="flt-eta-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Plants</option>
                <option value="Plant 1 - Singarayakonda">Plant 1 - Singarayakonda</option>
                <option value="Plant 2 - Ramatheertham">Plant 2 - Ramatheertham</option>
                <option value="Plant 3 - U-Puram">Plant 3 - U-Puram</option>
                <option value="Unit 4 - SEZ Processing Hub">Unit 4 - SEZ Processing Hub</option>
              </select>
            </div>

            <!-- Liner -->
            <div>
              <label for="flt-eta-liner" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Liner</label>
              <select id="flt-eta-liner" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Liners</option>
                <option value="Ocean Network Express (ONE)">Ocean Network Express (ONE)</option>
                <option value="Maersk Line">Maersk Line</option>
                <option value="CMA CGM Logistics">CMA CGM Logistics</option>
              </select>
            </div>

            <!-- Consignee -->
            <div>
              <label for="flt-eta-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Consignee</label>
              <select id="flt-eta-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Consignees</option>
                <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC</option>
                <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation</option>
                <option value="Royal Greenland Seafood A/S">Royal Greenland Seafood A/S</option>
                <option value="Sysco Corporation International">Sysco Corporation International</option>
                <option value="US Foods Trading Co">US Foods Trading Co</option>
              </select>
            </div>

            <!-- ETA From Date (Discharge) -->
            <div>
              <label for="flt-eta-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ETA From Date (Discharge)</label>
              <input type="date" id="flt-eta-from" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>

            <!-- ETA To Date (Discharge) -->
            <div>
              <label for="flt-eta-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ETA To Date (Discharge)</label>
              <input type="date" id="flt-eta-to" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>

            <!-- Search Button placed after the last input field -->
            <div class="flex items-end">
              <button type="button" id="flt-eta-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="eta-status-table-container"></div>
      </div>
    `;

    // Toggle filter
    const toggleBtn = container.querySelector('#flt-eta-toggle-btn');
    const filterBody = container.querySelector('#flt-eta-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render table
    const renderTable = (dataToDisplay) => {
      new DataTable({
        containerId: 'eta-status-table-container',
        data: dataToDisplay,
        keyField: 'id',
        tableTitle: `ETA/ETD Records (${dataToDisplay.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showEtaDetailsModal(row),
        columns: [
          {
            field: '__sno__',
            header: 'S.No',
            render: (v, r, idx) => `<span class="font-mono text-xs text-[#5E6C84]">${idx + 1}</span>`
          },
          {
            field: 'id',
            header: 'ID',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>`
          },
          {
            field: 'invNo',
            header: 'Inv No',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] hover:underline cursor-pointer">${v || '-'}</span>`
          },
          {
            field: 'buyer',
            header: 'Buyer',
            render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v || '-'}</span>`
          },
          {
            field: 'poNo',
            header: 'PO.NO',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'product',
            header: 'PRODUCT',
            render: (v) => `<span class="text-xs font-semibold text-[#172B4D] truncate max-w-[150px] block" title="${v}">${v || '-'}</span>`
          },
          {
            field: 'brand',
            header: 'BRAND',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${v || '-'}</span>`
          },
          {
            field: 'mcs',
            header: 'Mcs',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v || 0).toLocaleString('en-IN')}</span>`
          },
          {
            field: 'blNo',
            header: 'BL No',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v || '-'}</span>`
          },
          {
            field: 'containerNo',
            header: 'Container No',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#403294]">${v || '-'}</span>`
          },
          {
            field: 'finalDestination',
            header: 'Final Destination',
            render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[140px] block" title="${v}">${v || '-'}</span>`
          },
          {
            field: 'onBoardDate',
            header: 'On Board Date',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v || '-'}</span>`
          },
          {
            field: 'actualEta',
            header: 'ActualETA',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v || '-'}</span>`
          },
          {
            field: 'etaFd',
            header: 'ETA FD',
            render: (v, r) => `
              <div class="inline-flex items-center gap-1.5" onclick="event.stopPropagation()">
                <span class="font-mono font-bold text-xs text-[#006644] eta-fd-label-${r.id}">${v || '-'}</span>
                <button type="button" class="btn-quick-edit-eta-fd w-6 h-6 inline-flex items-center justify-center rounded hover:bg-[#F0F9FF] text-[#5E6C84] hover:text-[#00A4B7] transition-colors cursor-pointer" data-id="${r.id}" title="Edit ETA Final Destination (FBD)">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                </button>
              </div>
            `
          },
          {
            field: 'gateOutDate',
            header: 'Gate Out Date',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v || '-'}</span>`
          },
          {
            field: 'entryNumber',
            header: 'Entry Number',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'liner',
            header: 'Liner',
            render: (v) => `<span class="text-xs font-semibold text-[#172B4D] truncate max-w-[130px] block" title="${v}">${v || '-'}</span>`
          },
          {
            field: 'deliveryTerms',
            header: 'Delivery Terms',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#F1F5F9] text-[#172B4D] border border-[#DFE1E6] uppercase">${v || '-'}</span>`
          },
          {
            field: 'transitDays',
            header: 'Transit Days',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v || '-'}</span>`
          },
          {
            field: 'transitDaysPerLiner',
            header: 'Transit Days Per Liner',
            render: (v) => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>`
          },
          {
            field: 'isFda',
            header: 'Is FDA',
            render: (v) => {
              const val = String(v || '').toUpperCase();
              let cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              if (val.includes('PRIOR') || val.includes('REVIEW')) {
                cls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
              } else if (val.includes('NOT APPLICABLE')) {
                cls = 'bg-[#F1F5F9] text-[#5E6C84] border-[#DFE1E6]';
              }
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${val}</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Track Live Vessel Telemetry',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`,
            onClick: (row) => this.showLiveVesselTrackingModal(row)
          }
        ]
      });

      // Bind quick edit ETA FD buttons
      container.querySelectorAll('.btn-quick-edit-eta-fd').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetId = btn.dataset.id;
          const targetRecord = this.state.etaStatusList.find(r => r.id === targetId);
          if (targetRecord) {
            this.showEditEtaFdModal(targetRecord);
          }
        });
      });
    };

    renderTable(this.state.etaStatusList);

    // Search and Reset handlers
    const searchBtn = container.querySelector('#flt-eta-search-btn');
    const resetBtn = container.querySelector('#flt-eta-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const exp = container.querySelector('#flt-eta-exporter')?.value || 'ALL';
      const pl = container.querySelector('#flt-eta-plant')?.value || 'ALL';
      const li = container.querySelector('#flt-eta-liner')?.value || 'ALL';
      const con = container.querySelector('#flt-eta-consignee')?.value || 'ALL';
      const fromDate = container.querySelector('#flt-eta-from')?.value || '';
      const toDate = container.querySelector('#flt-eta-to')?.value || '';

      let filtered = [...this.state.etaStatusList];

      if (exp !== 'ALL') {
        filtered = filtered.filter(r => (r.exporter || '').includes(exp));
      }
      if (pl !== 'ALL') {
        filtered = filtered.filter(r => (r.plant || '').includes(pl));
      }
      if (li !== 'ALL') {
        filtered = filtered.filter(r => (r.liner || r.shippingLine || '').includes(li));
      }
      if (con !== 'ALL') {
        filtered = filtered.filter(r => (r.buyer || r.consignee || '').includes(con));
      }
      if (fromDate) {
        filtered = filtered.filter(r => (r.actualEta || '') >= fromDate);
      }
      if (toDate) {
        filtered = filtered.filter(r => (r.actualEta || '') <= toDate);
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} ETA schedule record(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      if (container.querySelector('#flt-eta-exporter')) container.querySelector('#flt-eta-exporter').value = 'ALL';
      if (container.querySelector('#flt-eta-plant')) container.querySelector('#flt-eta-plant').value = 'ALL';
      if (container.querySelector('#flt-eta-liner')) container.querySelector('#flt-eta-liner').value = 'ALL';
      if (container.querySelector('#flt-eta-consignee')) container.querySelector('#flt-eta-consignee').value = 'ALL';
      if (container.querySelector('#flt-eta-from')) container.querySelector('#flt-eta-from').value = '';
      if (container.querySelector('#flt-eta-to')) container.querySelector('#flt-eta-to').value = '';
      renderTable(this.state.etaStatusList);
      Toast.show('ETA filters reset', 'info');
    });
  },

  // Modal: Quick Edit ETA FD and Save
  showEditEtaFdModal(targetRow) {
    const d = targetRow;
    Modal.open({
      title: `Update ETA Final Destination &mdash; ${d.containerNo}`,
      size: 'md',
      content: `
        <form id="form-edit-eta-fd" class="space-y-4 text-xs animate-fade-in">
          <div class="bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6] space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="text-[#5E6C84]">Container:</span>
              <strong class="font-mono text-[#00A4B7]">${d.containerNo}</strong>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#5E6C84]">Invoice / PO:</span>
              <strong class="text-[#172B4D]">${d.invNo} (${d.poNo})</strong>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#5E6C84]">Discharge Port ETA:</span>
              <strong class="font-mono text-[#403294]">${d.actualEta}</strong>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#5E6C84]">Final Hub:</span>
              <span class="text-[#172B4D] font-semibold truncate max-w-[200px]">${d.finalDestination}</span>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ETA FINAL DESTINATION (ETA FD / FBD) <span class="text-[#DE350B]">*</span></label>
            <input type="date" id="modal-input-eta-fd" value="${d.etaFd || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#006644] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
            <p class="text-[10px] text-[#5E6C84] mt-1">Updates delivery appointment schedule for destination cold warehouse.</p>
          </div>
        </form>
      `,
      buttons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Save ETA FD',
          type: 'primary',
          onClick: (modal) => {
            const inputVal = document.getElementById('modal-input-eta-fd')?.value?.trim();
            if (!inputVal) {
              Toast.show('Please select a valid ETA FD date', 'warning');
              return;
            }

            d.etaFd = inputVal;
            Toast.show(`ETA Final Destination updated to ${inputVal} for ${d.containerNo}`, 'success');
            modal.close();

            // Refresh table or update in place
            const labelEl = document.querySelector(`.eta-fd-label-${d.id}`);
            if (labelEl) {
              labelEl.textContent = inputVal;
            } else {
              const mainEl = document.getElementById('sales-view-main');
              if (mainEl) this.renderEtaStatus(mainEl);
            }
          }
        }
      ]
    });
  },

  // Modal: Live Vessel Tracking & Container Milestones (Action Icon)
  showLiveVesselTrackingModal(row) {
    const d = row || {};
    Modal.open({
      title: `Live Vessel Telemetry & Milestones &mdash; ${d.containerNo}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${d.containerNo}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">VESSEL IN TRANSIT</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${d.vesselName || 'Ocean Vessel'} (${d.voyNo || 'Voyage'})</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span><strong>Liner:</strong> ${d.liner || '-'}</span>
                  <span>•</span>
                  <span><strong>B/L No:</strong> ${d.blNo || '-'}</span>
                  <span>•</span>
                  <span><strong>Buyer:</strong> ${d.buyer || '-'}</span>
                  <span>•</span>
                  <span><strong>Dest:</strong> ${d.finalDestination || '-'}</span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 shrink-0">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Speed</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs mt-0.5 block">${d.speedKnots || '18 kts'}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Discharge ETA</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-xs mt-0.5 block">${d.actualEta || '-'}</span>
              </div>
              <div class="bg-white px-3.5 py-1.5 rounded-lg border border-[#ABF5D1] bg-[#F0FDF4] shadow-2xs text-center min-w-[95px]">
                <span class="text-[10px] font-bold text-[#006644] uppercase tracking-wider block">ETA Final Hub</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs mt-0.5 block">${d.etaFd || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Live AIS Telemetry Coordinates Card -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Live Satellite AIS Telemetry &amp; Coordinates</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">VESSEL NAME &amp; VOY#</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${d.vesselName} (${d.voyNo})</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CURRENT POSITION</span>
                <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${d.vesselPosition || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ESTIMATED TRANSIT DAYS</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.transitDays}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FDA ADMISSIBILITY</span>
                <span class="font-semibold text-[#006644] text-xs block mt-0.5">${d.isFda}</span>
              </div>
            </div>
          </div>

          <!-- Milestones Stepper Track -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] mb-4">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Shipment Milestones &amp; Journey Timeline</h4>
            </div>
            
            <div class="relative pl-6 border-l-2 border-[#00A4B7] space-y-6">
              <!-- Milestone 1 -->
              <div class="relative">
                <span class="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#00A4B7] border-2 border-white shadow-xs"></span>
                <div class="flex items-center justify-between">
                  <h5 class="font-bold text-xs text-[#172B4D]">Container Gate-In &amp; Loading at Origin CFS</h5>
                  <span class="font-mono text-[10px] font-bold text-[#006644] bg-[#E3FCEF] px-2 py-0.5 rounded border border-[#ABF5D1]">COMPLETED</span>
                </div>
                <p class="text-[11px] text-[#5E6C84] mt-0.5">Visakhapatnam Cold Storage CFS &mdash; Pre-cooling &amp; Custom Seal Verified</p>
              </div>

              <!-- Milestone 2 -->
              <div class="relative">
                <span class="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#00A4B7] border-2 border-white shadow-xs"></span>
                <div class="flex items-center justify-between">
                  <h5 class="font-bold text-xs text-[#172B4D]">Vessel On-Board Departure</h5>
                  <span class="font-mono text-[10px] font-bold text-[#006644] bg-[#E3FCEF] px-2 py-0.5 rounded border border-[#ABF5D1]">${d.onBoardDate}</span>
                </div>
                <p class="text-[11px] text-[#5E6C84] mt-0.5">Departed ${d.portOfLoading} on ${d.vesselName} (${d.voyNo})</p>
              </div>

              <!-- Milestone 3 -->
              <div class="relative">
                <span class="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#00A4B7] border-2 border-white shadow-xs animate-pulse"></span>
                <div class="flex items-center justify-between">
                  <h5 class="font-bold text-xs text-[#00A4B7]">Ocean Transit Corridor (Live AIS Active)</h5>
                  <span class="font-mono text-[10px] font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD]">IN TRANSIT</span>
                </div>
                <p class="text-[11px] text-[#5E6C84] mt-0.5">${d.vesselPosition} &bull; Speed: ${d.speedKnots}</p>
              </div>

              <!-- Milestone 4 -->
              <div class="relative">
                <span class="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#CBD5E1] border-2 border-white shadow-xs"></span>
                <div class="flex items-center justify-between">
                  <h5 class="font-bold text-xs text-[#172B4D]">Arrival at Port of Discharge (ActualETA)</h5>
                  <span class="font-mono text-[10px] font-bold text-[#172B4D] bg-[#F1F5F9] px-2 py-0.5 rounded border border-[#DFE1E6]">${d.actualEta}</span>
                </div>
                <p class="text-[11px] text-[#5E6C84] mt-0.5">${d.portOfDischarge} &bull; Berth Confirmation &amp; Customs Hold Release</p>
              </div>

              <!-- Milestone 5 -->
              <div class="relative">
                <span class="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#CBD5E1] border-2 border-white shadow-xs"></span>
                <div class="flex items-center justify-between">
                  <h5 class="font-bold text-xs text-[#172B4D]">Inland Delivery to Final Destination (ETA FD / FBD)</h5>
                  <span class="font-mono text-[10px] font-bold text-[#006644] bg-[#F0FDF4] px-2 py-0.5 rounded border border-[#ABF5D1]">${d.etaFd}</span>
                </div>
                <p class="text-[11px] text-[#5E6C84] mt-0.5">${d.finalDestination} &bull; Reefer Trucking Carrier Delivery Appointment</p>
              </div>
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Refresh AIS Telemetry',
          type: 'secondary',
          onClick: () => Toast.show(`AIS Telemetry re-polled for ${d.containerNo} (${d.speedKnots})`, 'info')
        },
        {
          label: 'Edit ETA FD',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            this.showEditEtaFdModal(d);
          }
        }
      ]
    });
  },

  // Modal: Full ETA & Voyage Details View (On Row Click)
  showEtaDetailsModal(row) {
    const d = row || {};
    Modal.open({
      title: `ETA Schedule & Voyage Details &mdash; ${d.containerNo}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${d.containerNo}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${d.liner || 'Ocean Liner'}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${d.brand || 'Devi Brand'}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span><strong>Inv:</strong> ${d.invNo || '-'}</span>
                  <span>•</span>
                  <span><strong>PO:</strong> ${d.poNo || '-'}</span>
                  <span>•</span>
                  <span><strong>Buyer:</strong> ${d.buyer || '-'}</span>
                  <span>•</span>
                  <span><strong>B/L:</strong> ${d.blNo || '-'}</span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 shrink-0">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Mcs Qty</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-xs mt-0.5 block">${Number(d.mcs || 0).toLocaleString('en-IN')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Transit</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs mt-0.5 block">${d.transitDays}</span>
              </div>
              <div class="bg-white px-3.5 py-1.5 rounded-lg border border-[#ABF5D1] bg-[#F0FDF4] shadow-2xs text-center min-w-[95px]">
                <span class="text-[10px] font-bold text-[#006644] uppercase tracking-wider block">ETA FD (FBD)</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs mt-0.5 block">${d.etaFd || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Commercial & Voyage Identifiers -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial &amp; Container Specifications</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">INVOICE NO</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.invNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BUYER / CONSIGNEE</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${d.buyer || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PO NO</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${d.poNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PRODUCT</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.product || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BRAND</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.brand || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">MASTER CARTONS (MCS)</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${Number(d.mcs || 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">B/L NUMBER</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.blNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONTAINER NUMBER</span>
                <span class="font-mono font-bold text-[#403294] text-xs block mt-0.5">${d.containerNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">LINER</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.liner || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">DELIVERY TERMS</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${d.deliveryTerms || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FINAL DESTINATION</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.finalDestination || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Transit Schedule & Key Milestone Dates -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Transit Schedule &amp; Key Milestone Dates</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ON BOARD DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.onBoardDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ACTUAL ETA (DISCHARGE)</span>
                <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${d.actualEta || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ETA FD (FINAL DESTINATION)</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs block mt-0.5">${d.etaFd || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">GATE OUT DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.gateOutDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ENTRY NUMBER</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${d.entryNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">TRANSIT DAYS</span>
                <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${d.transitDays || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">TRANSIT DAYS PER LINER</span>
                <span class="text-[#5E6C84] text-xs block mt-0.5">${d.transitDaysPerLiner || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">IS FDA</span>
                <span class="font-semibold text-[#006644] text-xs block mt-0.5">${d.isFda || '-'}</span>
              </div>
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Track Vessel AIS',
          type: 'secondary',
          onClick: (modal) => {
            modal.close();
            this.showLiveVesselTrackingModal(d);
          }
        },
        {
          label: 'Edit ETA FD',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            this.showEditEtaFdModal(d);
          }
        }
      ]
    });
  },

  // Tab 7: FDA Status (US FDA Prior Notice & Admissibility)
  renderFdaStatus(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title Header (NO Subheading, NO header button) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">FDA Status (US FDA Prior Notice &amp; Admissibility)</h1>
        </div>

        <!-- Search & Filter Card (4-column responsive grid) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="flt-fda-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="flt-fda-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="flt-fda-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- SELECT YEAR -->
            <div>
              <label for="flt-fda-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT YEAR</label>
              <select id="flt-fda-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Years</option>
                <option value="2026-2027">2026-2027</option>
                <option value="2025-2026">2025-2026</option>
              </select>
            </div>

            <!-- SELECT EXPORTER -->
            <div>
              <label for="flt-fda-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT EXPORTER</label>
              <select id="flt-fda-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Marine Processors">Devi Marine Processors</option>
              </select>
            </div>

            <!-- SELECT CONSIGNEE -->
            <div>
              <label for="flt-fda-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT CONSIGNEE</label>
              <select id="flt-fda-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Consignees</option>
                <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC</option>
                <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation</option>
                <option value="Royal Greenland Seafood A/S">Royal Greenland Seafood A/S</option>
                <option value="Sysco Corporation International">Sysco Corporation International</option>
                <option value="US Foods Trading Co">US Foods Trading Co</option>
              </select>
            </div>

            <!-- SELECT COUNTRY -->
            <div>
              <label for="flt-fda-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT COUNTRY</label>
              <select id="flt-fda-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Countries</option>
                <option value="United States">United States</option>
                <option value="Japan">Japan</option>
                <option value="Netherlands">Netherlands</option>
              </select>
            </div>

            <!-- STATUS -->
            <div>
              <label for="flt-fda-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
              <select id="flt-fda-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Statuses</option>
                <option value="GREEN_LIST_SATISFIED">Green List Satisfied</option>
                <option value="ADMITTED_NO_HOLD">Admitted No Hold</option>
                <option value="UNDER_REVIEW">Under Review</option>
              </select>
            </div>

            <!-- Search Button placed after the last input field -->
            <div class="flex items-end">
              <button type="button" id="flt-fda-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="fda-status-table-container"></div>
      </div>
    `;

    // Toggle filter
    const toggleBtn = container.querySelector('#flt-fda-toggle-btn');
    const filterBody = container.querySelector('#flt-fda-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render table
    const renderTable = (dataToDisplay) => {
      new DataTable({
        containerId: 'fda-status-table-container',
        data: dataToDisplay,
        keyField: 'id',
        tableTitle: `FDA Status Records (${dataToDisplay.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showFdaDetailsModal(row),
        columns: [
          {
            field: '__sno__',
            header: 'SNO',
            render: (v, r, idx) => `<span class="font-mono text-xs text-[#5E6C84]">${idx + 1}</span>`
          },
          {
            field: 'id',
            header: 'ID',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>`
          },
          {
            field: 'invNo',
            header: 'InvNo',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] hover:underline cursor-pointer">${v || '-'}</span>`
          },
          {
            field: 'poNo',
            header: 'PoNo',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'buyer',
            header: 'Buyer',
            render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v || '-'}</span>`
          },
          {
            field: 'shippingBillNo',
            header: 'ShippingBillNo',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#403294]">${v || '-'}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            render: (v) => {
              const val = String(v || '').toUpperCase();
              let cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              if (val.includes('REVIEW') || val.includes('PENDING') || val.includes('HOLD')) {
                cls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
              }
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${val.replace(/_/g, ' ')}</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Add / Edit FDA Compliance Record',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`,
            onClick: (row) => this.showAddFdaModal(row)
          }
        ]
      });
    };

    renderTable(this.state.fdaStatusList);

    // Search and Reset handlers
    const searchBtn = container.querySelector('#flt-fda-search-btn');
    const resetBtn = container.querySelector('#flt-fda-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const yr = container.querySelector('#flt-fda-year')?.value || 'ALL';
      const exp = container.querySelector('#flt-fda-exporter')?.value || 'ALL';
      const con = container.querySelector('#flt-fda-consignee')?.value || 'ALL';
      const cty = container.querySelector('#flt-fda-country')?.value || 'ALL';
      const st = container.querySelector('#flt-fda-status')?.value || 'ALL';

      let filtered = [...this.state.fdaStatusList];

      if (yr !== 'ALL') {
        filtered = filtered.filter(r => (r.year || '').includes(yr));
      }
      if (exp !== 'ALL') {
        filtered = filtered.filter(r => (r.exporter || '').includes(exp));
      }
      if (con !== 'ALL') {
        filtered = filtered.filter(r => (r.buyer || r.consignee || '').includes(con));
      }
      if (cty !== 'ALL') {
        filtered = filtered.filter(r => (r.country || r.countryOfDestination || '').includes(cty));
      }
      if (st !== 'ALL') {
        filtered = filtered.filter(r => (r.status || '').toUpperCase().includes(st));
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} FDA Status record(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      if (container.querySelector('#flt-fda-year')) container.querySelector('#flt-fda-year').value = 'ALL';
      if (container.querySelector('#flt-fda-exporter')) container.querySelector('#flt-fda-exporter').value = 'ALL';
      if (container.querySelector('#flt-fda-consignee')) container.querySelector('#flt-fda-consignee').value = 'ALL';
      if (container.querySelector('#flt-fda-country')) container.querySelector('#flt-fda-country').value = 'ALL';
      if (container.querySelector('#flt-fda-status')) container.querySelector('#flt-fda-status').value = 'ALL';
      renderTable(this.state.fdaStatusList);
      Toast.show('FDA filters reset', 'info');
    });
  },

  // Modal: On click Add Icon add all 31 requested fields
  showAddFdaModal(targetRow) {
    const nextIdx = this.state.fdaStatusList.length + 1;
    const isEdit = !!targetRow;
    const d = targetRow || {
      id: `FDA-${String(nextIdx).padStart(3, '0')}`,
      invNo: `CI-EXP-2026-${500 + nextIdx}`,
      invoiceNo: `CI-EXP-2026-${500 + nextIdx}`,
      invoiceDate: new Date().toISOString().slice(0, 10),
      poNo: 'PO-RL-8821',
      buyer: 'Red Lobster Supply Chain LLC',
      consignee: 'Red Lobster Supply Chain LLC',
      shippingBillNo: `SB-2026-${88400 + nextIdx}`,
      portOfLoading: 'Visakhapatnam (INVTZ)',
      portOfDischarge: 'Port of Los Angeles (USLAX)',
      countryOfDestination: 'United States',
      country: 'United States',
      containerNumber: `ONEU-${440000 + nextIdx}-8`,
      blNumber: `ONEYMAA${261000 + nextIdx}`,
      totalCartons: 1800,
      netWeightKg: 21600.00,
      invoiceValue: 154200.00,
      freight: 4800.00,
      otherDeductions: 250.00,
      fobInr: 12603175.00,
      containerGateOutDate: new Date().toISOString().slice(0, 10),
      emptyContainerReturnDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      entryNumberEmptyContainer: `EC-LAX-${449000 + nextIdx}`,
      fdaEuHoldDate: '',
      fdaEuReleaseCfiaDate: new Date().toISOString().slice(0, 10),
      fdaEntryNumber: `701-${4490000 + nextIdx}-3`,
      fdaEntryDate: new Date().toISOString().slice(0, 10),
      fdaExam: 'NO EXAM REQUIRED (GREEN LIST EXEMPT)',
      status: 'GREEN_LIST_SATISFIED',
      sampleCollectionDate: '',
      sampleReceivedDate: '',
      remarks: 'Green List exempt under Import Alert 16-131. Facility FCI: 3004812 verified.',
      notes: 'Prior notice confirmed electronically without hold.',
      noticeDate1: new Date().toISOString().slice(0, 10),
      noticeDate2: '',
      noticeDate3: '',
      noticeDate4: '',
      year: '2026-2027',
      exporter: 'Devi Fisheries Limited'
    };

    Modal.open({
      title: isEdit ? `FDA Clearance & Admissibility - ${d.invNo || d.invoiceNo}` : 'Add FDA Status Record',
      size: 'xl',
      content: `
        <form id="form-fda-31-fields" class="space-y-4 text-xs animate-fade-in">
          <!-- Section 1: Commercial, Invoice & Container Identifiers -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial, Invoice &amp; Container Identifiers</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="fda-field-invoice-no" value="${d.invoiceNo || d.invNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE DATE</label>
                <input type="date" id="fda-field-invoice-date" value="${d.invoiceDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONSIGNEE</label>
                <input type="text" id="fda-field-consignee" value="${d.consignee || d.buyer || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF LOADING</label>
                <input type="text" id="fda-field-port-loading" value="${d.portOfLoading || 'Visakhapatnam (INVTZ)'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF DISCHARGE</label>
                <input type="text" id="fda-field-port-discharge" value="${d.portOfDischarge || 'Port of Los Angeles (USLAX)'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">COUNTY OF DESTINATION</label>
                <input type="text" id="fda-field-country-dest" value="${d.countryOfDestination || d.country || 'United States'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONTAINER NUMBER</label>
                <input type="text" id="fda-field-container-no" value="${d.containerNumber || ''}" placeholder="e.g. ONEU-440912-8" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#403294] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BL NUMBER</label>
                <input type="text" id="fda-field-bl-no" value="${d.blNumber || ''}" placeholder="e.g. ONEYMAA261014" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TOTAL NO.OF CARTONS</label>
                <input type="number" id="fda-field-cartons" value="${d.totalCartons || 1800}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NET WT (KGS)</label>
                <input type="number" step="0.01" id="fda-field-net-wt" value="${d.netWeightKg || 21600}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE VALUE ($)</label>
                <input type="number" step="0.01" id="fda-field-invoice-val" value="${d.invoiceValue || 154200}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT ($)</label>
                <input type="number" step="0.01" id="fda-field-freight" value="${d.freight || 4800}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">OTHER DEDUCTIONS $</label>
                <input type="number" step="0.01" id="fda-field-deductions" value="${d.otherDeductions || 250}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FOB INR</label>
                <input type="number" step="0.01" id="fda-field-fob-inr" value="${d.fobInr || 12603175}" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#DFE1E6] rounded font-mono font-extrabold text-[#006644] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 2: Container Movement, Discharge & Gate Out Dates -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Logistics, Container Movement &amp; Release Dates</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONTAINER GATE OUT DATE</label>
                <input type="date" id="fda-field-gate-out" value="${d.containerGateOutDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">EMPTY CONTAINER RETURN DATE</label>
                <input type="date" id="fda-field-empty-return" value="${d.emptyContainerReturnDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ENTRY NUMBER(EMPTY CONTAINER)</label>
                <input type="text" id="fda-field-empty-entry-no" value="${d.entryNumberEmptyContainer || ''}" placeholder="e.g. EC-LAX-449102" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FDA/EU HOLD DATE</label>
                <input type="date" id="fda-field-hold-date" value="${d.fdaEuHoldDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FDA/EU RELEASE/CFIA DATE</label>
                <input type="date" id="fda-field-release-date" value="${d.fdaEuReleaseCfiaDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 3: FDA / Authority Examination & Admissibility -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">FDA / Regulatory Examination &amp; Admissibility</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FDA ENTRY NUMBER</label>
                <input type="text" id="fda-field-entry-no" value="${d.fdaEntryNumber || ''}" placeholder="e.g. 701-4491029-3" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FDA ENTRY DATE</label>
                <input type="date" id="fda-field-entry-date" value="${d.fdaEntryDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FDA EXAM</label>
                <input type="text" id="fda-field-exam" value="${d.fdaExam || 'NO EXAM REQUIRED (GREEN LIST EXEMPT)'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS <span class="text-[#DE350B]">*</span></label>
                <select id="fda-field-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="GREEN_LIST_SATISFIED" ${d.status === 'GREEN_LIST_SATISFIED' ? 'selected' : ''}>Green List Satisfied</option>
                  <option value="ADMITTED_NO_HOLD" ${d.status === 'ADMITTED_NO_HOLD' ? 'selected' : ''}>Admitted No Hold</option>
                  <option value="UNDER_REVIEW" ${d.status === 'UNDER_REVIEW' ? 'selected' : ''}>Under Review</option>
                  <option value="SAMPLE_COLLECTED" ${d.status === 'SAMPLE_COLLECTED' ? 'selected' : ''}>Sample Collected</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SAMPLE COLLECTION DATE</label>
                <input type="date" id="fda-field-sample-col" value="${d.sampleCollectionDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SAMPLE RECEIVED DATE</label>
                <input type="date" id="fda-field-sample-rec" value="${d.sampleReceivedDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 4: Notices, Compliance Records & Notes -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Notice Dates, Compliance Records &amp; Notes</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NOTICEDATE1</label>
                <input type="date" id="fda-field-notice1" value="${d.noticeDate1 || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NOTICEDATE2</label>
                <input type="date" id="fda-field-notice2" value="${d.noticeDate2 || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NOTICEDATE3</label>
                <input type="date" id="fda-field-notice3" value="${d.noticeDate3 || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NOTICEDATE4</label>
                <input type="date" id="fda-field-notice4" value="${d.noticeDate4 || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
                <textarea id="fda-field-remarks" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${d.remarks || ''}</textarea>
              </div>

              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NOTES</label>
                <textarea id="fda-field-notes" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${d.notes || ''}</textarea>
              </div>
            </div>
          </div>
        </form>
      `,
      buttons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: isEdit ? 'Update FDA Record' : 'Save FDA Record',
          type: 'primary',
          onClick: (modal) => {
            const getVal = (id) => document.getElementById(id)?.value?.trim() || '';
            const getNum = (id) => parseFloat(document.getElementById(id)?.value) || 0;

            const invNo = getVal('fda-field-invoice-no');
            const statusVal = getVal('fda-field-status');

            if (!invNo) {
              Toast.show('Please fill in INVOICE NO *', 'warning');
              return;
            }

            const updatedData = {
              ...d,
              invNo,
              invoiceNo: invNo,
              invoiceDate: getVal('fda-field-invoice-date'),
              consignee: getVal('fda-field-consignee'),
              buyer: getVal('fda-field-consignee'),
              portOfLoading: getVal('fda-field-port-loading'),
              portOfDischarge: getVal('fda-field-port-discharge'),
              countryOfDestination: getVal('fda-field-country-dest'),
              country: getVal('fda-field-country-dest'),
              containerNumber: getVal('fda-field-container-no'),
              blNumber: getVal('fda-field-bl-no'),
              totalCartons: getNum('fda-field-cartons'),
              netWeightKg: getNum('fda-field-net-wt'),
              invoiceValue: getNum('fda-field-invoice-val'),
              freight: getNum('fda-field-freight'),
              otherDeductions: getNum('fda-field-deductions'),
              fobInr: getNum('fda-field-fob-inr'),
              containerGateOutDate: getVal('fda-field-gate-out'),
              emptyContainerReturnDate: getVal('fda-field-empty-return'),
              entryNumberEmptyContainer: getVal('fda-field-empty-entry-no'),
              fdaEuHoldDate: getVal('fda-field-hold-date'),
              fdaEuReleaseCfiaDate: getVal('fda-field-release-date'),
              fdaEntryNumber: getVal('fda-field-entry-no'),
              fdaEntryDate: getVal('fda-field-entry-date'),
              fdaExam: getVal('fda-field-exam'),
              status: statusVal,
              sampleCollectionDate: getVal('fda-field-sample-col'),
              sampleReceivedDate: getVal('fda-field-sample-rec'),
              remarks: getVal('fda-field-remarks'),
              notes: getVal('fda-field-notes'),
              noticeDate1: getVal('fda-field-notice1'),
              noticeDate2: getVal('fda-field-notice2'),
              noticeDate3: getVal('fda-field-notice3'),
              noticeDate4: getVal('fda-field-notice4')
            };

            if (isEdit && targetRow) {
              Object.assign(targetRow, updatedData);
              Toast.show(`FDA Status record updated for ${targetRow.invNo}`, 'success');
            } else {
              this.state.fdaStatusList.unshift(updatedData);
              Toast.show(`FDA Status record created for ${updatedData.invNo}`, 'success');
            }

            modal.close();
            const mainEl = document.getElementById('sales-view-main');
            if (mainEl) this.renderFdaStatus(mainEl);
          }
        }
      ]
    });
  },

  // Modal: FDA Status Details View (On Row Click)
  showFdaDetailsModal(row) {
    const d = row || {};
    const val = String(d.status || '').toUpperCase();
    let statusClass = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
    if (val.includes('REVIEW') || val.includes('PENDING') || val.includes('HOLD')) {
      statusClass = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
    }

    Modal.open({
      title: `FDA Admissibility & Clearance Details - ${d.invNo || d.invoiceNo}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${d.invNo || d.invoiceNo}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase border ${statusClass}">${val.replace(/_/g, ' ')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${d.countryOfDestination || d.country || 'USA'}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span><strong>PO:</strong> ${d.poNo || '-'}</span>
                  <span>•</span>
                  <span><strong>Buyer:</strong> ${d.buyer || d.consignee || '-'}</span>
                  <span>•</span>
                  <span><strong>SB No:</strong> ${d.shippingBillNo || '-'}</span>
                  <span>•</span>
                  <span><strong>Container:</strong> ${d.containerNumber || '-'}</span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 shrink-0">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Cartons</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-xs mt-0.5 block">${Number(d.totalCartons || 0).toLocaleString('en-IN')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Net Wt</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs mt-0.5 block">${Number(d.netWeightKg || 0).toLocaleString('en-IN')} Kg</span>
              </div>
              <div class="bg-white px-3.5 py-1.5 rounded-lg border border-[#ABF5D1] bg-[#F0FDF4] shadow-2xs text-center min-w-[95px]">
                <span class="text-[10px] font-bold text-[#006644] uppercase tracking-wider block">FOB INR</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs mt-0.5 block">₹${Number(d.fobInr || 0).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Commercial & Export Shipment Parameters -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial, Invoice &amp; Container Identifiers</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">INVOICE NO</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.invoiceNo || d.invNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">INVOICE DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.invoiceDate || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONSIGNEE</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${d.consignee || d.buyer || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PORT OF LOADING</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.portOfLoading || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PORT OF DISCHARGE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.portOfDischarge || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">COUNTY OF DESTINATION</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.countryOfDestination || d.country || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONTAINER NUMBER</span>
                <span class="font-mono font-bold text-[#403294] text-xs block mt-0.5">${d.containerNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BL NUMBER</span>
                <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${d.blNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">TOTAL NO.OF CARTONS</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${Number(d.totalCartons || 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NET WT (KGS)</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${Number(d.netWeightKg || 0).toLocaleString('en-IN')} Kg</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">INVOICE VALUE ($)</span>
                <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${Number(d.invoiceValue || 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FREIGHT ($)</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${Number(d.freight || 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">OTHER DEDUCTIONS $</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${Number(d.otherDeductions || 0).toLocaleString('en-IN')}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FOB INR</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs block mt-0.5">₹${Number(d.fobInr || 0).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Logistics, Container Movement & Release Details -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Logistics, Container Movement &amp; Release Dates</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONTAINER GATE OUT DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.containerGateOutDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">EMPTY RETURN DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.emptyContainerReturnDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">ENTRY NO (EMPTY)</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${d.entryNumberEmptyContainer || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FDA/EU HOLD DATE</span>
                <span class="font-mono text-[#DE350B] font-bold text-xs block mt-0.5">${d.fdaEuHoldDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">RELEASE/CFIA DATE</span>
                <span class="font-mono font-bold text-[#006644] text-xs block mt-0.5">${d.fdaEuReleaseCfiaDate || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 3: FDA / Authority Examination & Admissibility -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">FDA / Regulatory Examination &amp; Admissibility</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FDA ENTRY NUMBER</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.fdaEntryNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FDA ENTRY DATE</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.fdaEntryDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FDA EXAM</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.fdaExam || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">STATUS</span>
                <span class="font-extrabold text-[#006644] text-xs block mt-0.5">${d.status || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SAMPLE COLLECTION</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.sampleCollectionDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SAMPLE RECEIVED</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.sampleReceivedDate || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 4: Notices, Compliance Records & Notes -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Notice Dates, Compliance Records &amp; Notes</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NOTICEDATE1</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.noticeDate1 || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NOTICEDATE2</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.noticeDate2 || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NOTICEDATE3</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.noticeDate3 || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NOTICEDATE4</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${d.noticeDate4 || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">REMARKS</span>
                <span class="text-[#172B4D] text-xs block mt-0.5 bg-[#F8FAFC] p-2 rounded border border-[#F1F5F9]">${d.remarks || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NOTES</span>
                <span class="text-[#172B4D] text-xs block mt-0.5 bg-[#F8FAFC] p-2 rounded border border-[#F1F5F9]">${d.notes || '-'}</span>
              </div>
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Print FDA Report',
          type: 'secondary',
          onClick: () => Toast.show(`Printing official FDA compliance dossier for ${d.invNo || d.invoiceNo}...`, 'info')
        },
        {
          label: 'Edit FDA Record',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            this.showAddFdaModal(d);
          }
        }
      ]
    });
  },

  // Tab 8: Clearing Agent (Custom House Agents & Port Logistics)
  renderClearingAgent(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title (Strictly NO Subheading, Clean Heading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Clearing Agent (Custom House Agents &amp; Port Logistics)</h1>
        </div>

        <!-- CLEARING AGENT — Filter Fields (FROM DATE, TO DATE, STATUS) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <!-- Circular 32x32 Reset Button -->
              <button type="button" id="flt-cha-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <!-- Circular 32x32 Collapse/Expand Toggle Button -->
              <button type="button" id="flt-cha-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="flt-cha-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- FROM DATE -->
            <div>
              <label for="flt-cha-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
              <input type="date" id="flt-cha-from" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>

            <!-- TO DATE -->
            <div>
              <label for="flt-cha-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
              <input type="date" id="flt-cha-to" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>

            <!-- STATUS -->
            <div>
              <label for="flt-cha-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
              <select id="flt-cha-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Statuses</option>
                <option value="CLEARED_ADMITTED">Cleared &amp; Admitted</option>
                <option value="DUTY_PAID_PENDING_RELEASE">Duty Paid - Pending Release</option>
                <option value="ASSESSMENT_IN_PROGRESS">Assessment In Progress</option>
                <option value="CUSTOMS_HOLD_EXAM">Customs Hold / Exam</option>
              </select>
            </div>

            <!-- Search Button placed right after last field -->
            <div class="flex items-end">
              <button type="button" id="flt-cha-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="clearing-agent-table-container"></div>
      </div>
    `;

    // Toggle filter
    const toggleBtn = container.querySelector('#flt-cha-toggle-btn');
    const filterBody = container.querySelector('#flt-cha-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render table
    const renderTable = (dataToDisplay) => {
      new DataTable({
        containerId: 'clearing-agent-table-container',
        data: dataToDisplay,
        keyField: 'id',
        tableTitle: `Clearing Agent Entries (${dataToDisplay.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showClearingAgentDetailsModal(row),
        columns: [
          {
            field: '__sno__',
            header: 'S.No',
            render: (v, r, idx) => `<span class="font-mono text-xs text-[#5E6C84]">${idx + 1}</span>`
          },
          {
            field: 'invNo',
            header: 'Inv No',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v || '-'}</span>`
          },
          {
            field: 'buyer',
            header: 'Buyer',
            render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v || '-'}</span>`
          },
          {
            field: 'blNo',
            header: 'BL No',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'portOfDischarge',
            header: 'Port Of Discharge',
            render: (v) => `<span class="text-xs text-[#5E6C84]">${v || '-'}</span>`
          },
          {
            field: 'notifyPartyName',
            header: 'Notify party Name',
            render: (v) => `<span class="font-semibold text-xs text-[#172B4D]">${v || '-'}</span>`
          }
        ],
        actions: [
          {
            label: 'Add Clearing Details',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`,
            onClick: (row) => this.showAddClearingAgentModal(row)
          }
        ]
      });
    };

    renderTable(this.state.clearingAgents);

    // Search and Reset handlers
    const searchBtn = container.querySelector('#flt-cha-search-btn');
    const resetBtn = container.querySelector('#flt-cha-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const from = container.querySelector('#flt-cha-from')?.value || '';
      const to = container.querySelector('#flt-cha-to')?.value || '';
      const st = container.querySelector('#flt-cha-status')?.value || 'ALL';

      let filtered = [...this.state.clearingAgents];

      if (from) {
        filtered = filtered.filter(r => (r.invDate || '') >= from || (r.entryDate || '') >= from);
      }
      if (to) {
        filtered = filtered.filter(r => (r.invDate || '') <= to || (r.entryDate || '') <= to);
      }
      if (st !== 'ALL') {
        filtered = filtered.filter(r => (r.status || '').toUpperCase().includes(st));
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} clearing agent record(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      if (container.querySelector('#flt-cha-from')) container.querySelector('#flt-cha-from').value = '';
      if (container.querySelector('#flt-cha-to')) container.querySelector('#flt-cha-to').value = '';
      if (container.querySelector('#flt-cha-status')) container.querySelector('#flt-cha-status').value = 'ALL';
      renderTable(this.state.clearingAgents);
      Toast.show('Clearing agent filters reset', 'info');
    });
  },

  // Modal: Add / Update Clearing Agent Details (Invoice, Transactions, Notify & Duty)
  showAddClearingAgentModal(targetRow) {
    const isEdit = !!targetRow;
    const d = targetRow || {
      id: `CHA-ENT-2026-${String(this.state.clearingAgents.length + 1).padStart(3, '0')}`,
      invNo: "CINV-EXP-2026-" + Math.floor(550 + Math.random() * 100),
      poNo: "PO-RL-" + Math.floor(1000 + Math.random() * 9000),
      buyer: "Red Lobster Supply Chain LLC",
      consignee: "Red Lobster Supply Chain LLC",
      invDate: new Date().toISOString().split('T')[0],
      blNo: "MEDUST" + Math.floor(100000 + Math.random() * 900000),
      containerNo: "MSKU-" + Math.floor(1000000 + Math.random() * 9000000),
      portOfDischarge: "Port of Los Angeles (USLAX)",
      entryNumber: "CUS-ENT-2026-" + Math.floor(10000 + Math.random() * 90000),
      entryDate: new Date().toISOString().split('T')[0],
      notifyPartyName: "Pacific Seafood Logistics Inc",
      notifyParty: "Pacific Seafood Logistics Inc",
      cfCharges: 3250.00,
      adDuty: 0.00,
      hmDuty: 420.00,
      mpDuty: 310.00,
      cvDuty: 0.00,
      rtDuty: 180.00,
      invoiceValue: 148500.00,
      enteredInvoiceValue: 148500.00,
      total: 4160.00,
      grandTotal: 152660.00,
      status: "CLEARED_ADMITTED"
    };

    let moreTransactions = Array.isArray(d.moreTransactions) ? [...d.moreTransactions] : [
      { category: 'Customs Clearance Charges', billNumber: 'BILL-CUS-88210', billDate: d.entryDate || '2026-03-28', billAmount: 1850.00 },
      { category: 'Port & Handling Charges', billNumber: 'BILL-PRT-44012', billDate: d.invDate || '2026-03-25', billAmount: 1400.00 }
    ];

    const renderTxRows = () => {
      if (!moreTransactions.length) {
        return `
          <tr>
            <td colspan="5" class="py-4 text-center text-xs text-[#5E6C84] italic">
              No additional transactions recorded. Click "More Transaction" above to add bill entries.
            </td>
          </tr>
        `;
      }
      return moreTransactions.map((tx, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#F1F5F9] text-[#172B4D]">
          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${tx.category || '-'}</td>
          <td class="py-2.5 px-3 font-mono font-bold text-[#00A4B7]">${tx.billNumber || '-'}</td>
          <td class="py-2.5 px-3 font-mono text-xs text-[#5E6C84]">${tx.billDate || '-'}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#006644]">$${Number(tx.billAmount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-center">
            <button type="button" class="btn-remove-tx text-[#DE350B] hover:text-[#BF2600] p-1.5 rounded-full hover:bg-[#FFEBE6] transition-colors cursor-pointer inline-flex items-center justify-center" data-idx="${idx}" title="Remove transaction">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');
    };

    Modal.open({
      title: isEdit ? `Update Customs Clearing Entry — ${d.invNo}` : 'Add Customs Clearing Entry',
      size: 'xl',
      content: `
        <form id="form-cha-entry-modal" class="space-y-4 text-xs animate-fade-in">
          <!-- SECTION 1: CLEARING AGENT FORM — Invoice Details -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Invoice Details</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="cha-inv-no" value="${d.invNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PO NO</label>
                <input type="text" id="cha-po-no" value="${d.poNo || ''}" placeholder="e.g. PO-RL-8821" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONSIGNEE</label>
                <input type="text" id="cha-consignee" value="${d.consignee || d.buyer || ''}" placeholder="e.g. Red Lobster Supply Chain LLC" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INV DATE</label>
                <input type="date" id="cha-inv-date" value="${d.invDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BL NO</label>
                <input type="text" id="cha-bl-no" value="${d.blNo || ''}" placeholder="e.g. MEDUST109284" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONTAINER NO</label>
                <input type="text" id="cha-container-no" value="${d.containerNo || ''}" placeholder="e.g. MSKU-9821034" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- SECTION 2: CLEARING AGENT FORM — Transactions -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-3.5">
            <div class="flex items-center justify-between border-b border-[#F1F5F9]">
              <div class="flex items-center gap-2">
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Transactions</h4>
              </div>
              <button type="button" id="btn-toggle-more-transactions" class="btn-secondary px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 bg-[#F0F9FF] text-[#00A4B7] border border-[#BAE6FD] hover:bg-[#E0F2FE] transition-colors cursor-pointer select-none">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>More Transaction</span>
              </button>
            </div>

            <!-- Primary Transaction Fields: Entry Number & Entry Date -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Entry Number <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="cha-entry-num" value="${d.entryNumber || ''}" placeholder="e.g. CUS-ENT-2026-90412" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Entry Date</label>
                <input type="date" id="cha-entry-date" value="${d.entryDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>

            <!-- More Transaction — Form Fields (Hidden by default until More Transaction is clicked) -->
            <div id="more-tx-form-card" class="hidden bg-[#F8FAFC] p-3.5 rounded-lg border border-[#E2E8F0] space-y-3">
              <div class="text-[11px] font-bold text-[#172B4D] uppercase tracking-wider flex items-center justify-between">
                <span>Enter Transaction Details</span>
                <span class="text-[10px] text-[#5E6C84] font-medium">* Fill bill details to append transaction</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT CAT <span class="text-[#DE350B]">*</span></label>
                  <select id="mtx-cat" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Customs Clearance Charges">Customs Clearance Charges</option>
                    <option value="Port &amp; Handling Charges">Port &amp; Handling Charges</option>
                    <option value="Freight Forwarding Fee">Freight Forwarding Fee</option>
                    <option value="Terminal Inspection Fee">Terminal Inspection Fee</option>
                    <option value="Reefer Monitoring Charges">Reefer Monitoring Charges</option>
                    <option value="Storage &amp; Demurrage Charges">Storage &amp; Demurrage Charges</option>
                    <option value="Documentation &amp; Survey Fee">Documentation &amp; Survey Fee</option>
                    <option value="Quarantine &amp; Phytosanitary">Quarantine &amp; Phytosanitary</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BILL NUMBER <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="mtx-bill-no" placeholder="e.g. BILL-CUS-88210" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BILL DATE <span class="text-[#DE350B]">*</span></label>
                  <input type="date" id="mtx-bill-date" value="${new Date().toISOString().split('T')[0]}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BILL AMOUNT ($) <span class="text-[#DE350B]">*</span></label>
                  <input type="number" step="0.01" id="mtx-bill-amount" placeholder="0.00" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>

                <div class="sm:col-span-2 md:col-span-4 flex justify-end">
                  <button type="button" id="btn-add-more-tx" class="btn-primary px-5 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                    <span>Update</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- More Transaction — Data Table -->
            <div class="overflow-x-auto rounded-lg border border-[#DFE1E6]">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#5E6C84] uppercase font-bold text-[10px] tracking-wider">
                    <th class="py-2.5 px-3">Category</th>
                    <th class="py-2.5 px-3">Bill Number</th>
                    <th class="py-2.5 px-3">Bill Date</th>
                    <th class="py-2.5 px-3 text-right">Bill Amount</th>
                    <th class="py-2.5 px-3 text-center w-20">Actions</th>
                  </tr>
                </thead>
                <tbody id="more-tx-table-tbody" class="divide-y divide-[#F1F5F9] bg-white">
                  ${renderTxRows()}
                </tbody>
              </table>
            </div>
          </div>

          <!-- SECTION 3: CLEARING AGENT FORM — Notify -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Notify</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Notify Party <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="cha-notify-party" value="${d.notifyParty || d.notifyPartyName || ''}" placeholder="e.g. Pacific Seafood Logistics Inc" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Invoice No</label>
                <input type="text" id="cha-notify-inv-no" value="${d.invNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Invoice Date</label>
                <input type="date" id="cha-notify-inv-date" value="${d.invDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- SECTION 4: CLEARING AGENT FORM — Duty -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Duty</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">C&amp;F Charges ($)</label>
                <input type="number" step="0.01" id="cha-duty-cf" value="${d.cfCharges ?? 0}" class="duty-calc-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AD Duty ($)</label>
                <input type="number" step="0.01" id="cha-duty-ad" value="${d.adDuty ?? 0}" class="duty-calc-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">HM Duty ($)</label>
                <input type="number" step="0.01" id="cha-duty-hm" value="${d.hmDuty ?? 0}" class="duty-calc-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">MP Duty ($)</label>
                <input type="number" step="0.01" id="cha-duty-mp" value="${d.mpDuty ?? 0}" class="duty-calc-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CV Duty ($)</label>
                <input type="number" step="0.01" id="cha-duty-cv" value="${d.cvDuty ?? 0}" class="duty-calc-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RT Duty ($)</label>
                <input type="number" step="0.01" id="cha-duty-rt" value="${d.rtDuty ?? 0}" class="duty-calc-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Invoice Value ($)</label>
                <input type="number" step="0.01" id="cha-duty-inv-val" value="${d.invoiceValue ?? 0}" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Entered Invoice Value ($)</label>
                <input type="number" step="0.01" id="cha-duty-entered-val" value="${d.enteredInvoiceValue ?? 0}" class="duty-calc-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Total ($)</label>
                <input type="number" step="0.01" id="cha-duty-total" value="${d.total ?? 0}" class="w-full text-xs px-2.5 py-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded font-mono font-extrabold text-[#006644] focus:outline-none shadow-2xs" readonly>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#00A4B7] uppercase tracking-wider mb-1">Grand Total ($)</label>
                <input type="number" step="0.01" id="cha-duty-grand-total" value="${d.grandTotal ?? 0}" class="w-full text-xs px-2.5 py-1.5 bg-[#F0F9FF] border border-[#BAE6FD] rounded font-mono font-extrabold text-[#00A4B7] focus:outline-none shadow-2xs" readonly>
              </div>
            </div>
          </div>
        </form>
      `,
      buttons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: isEdit ? 'Update Clearing Entry' : 'Save Clearing Entry',
          type: 'primary',
          onClick: (modal) => {
            const invNo = document.getElementById('cha-inv-no')?.value?.trim();
            const entryNum = document.getElementById('cha-entry-num')?.value?.trim();
            const notifyParty = document.getElementById('cha-notify-party')?.value?.trim();

            if (!invNo) {
              Toast.show('Please enter INVOICE NO', 'error');
              return;
            }
            if (!entryNum) {
              Toast.show('Please enter Entry Number', 'error');
              return;
            }
            if (!notifyParty) {
              Toast.show('Please enter Notify Party', 'error');
              return;
            }

            const cf = parseFloat(document.getElementById('cha-duty-cf')?.value) || 0;
            const ad = parseFloat(document.getElementById('cha-duty-ad')?.value) || 0;
            const hm = parseFloat(document.getElementById('cha-duty-hm')?.value) || 0;
            const mp = parseFloat(document.getElementById('cha-duty-mp')?.value) || 0;
            const cv = parseFloat(document.getElementById('cha-duty-cv')?.value) || 0;
            const rt = parseFloat(document.getElementById('cha-duty-rt')?.value) || 0;
            const enteredVal = parseFloat(document.getElementById('cha-duty-entered-val')?.value) || 0;
            const invVal = parseFloat(document.getElementById('cha-duty-inv-val')?.value) || enteredVal;
            const totalDuties = cf + ad + hm + mp + cv + rt;
            const grandTotal = enteredVal + totalDuties;

            const updatedRecord = {
              ...d,
              invNo,
              poNo: document.getElementById('cha-po-no')?.value?.trim() || d.poNo,
              consignee: document.getElementById('cha-consignee')?.value?.trim() || d.consignee,
              buyer: document.getElementById('cha-consignee')?.value?.trim() || d.buyer,
              invDate: document.getElementById('cha-inv-date')?.value || d.invDate,
              blNo: document.getElementById('cha-bl-no')?.value?.trim() || d.blNo,
              containerNo: document.getElementById('cha-container-no')?.value?.trim() || d.containerNo,
              entryNumber: entryNum,
              entryDate: document.getElementById('cha-entry-date')?.value || d.entryDate,
              notifyParty,
              notifyPartyName: notifyParty,
              moreTransactions: [...moreTransactions],
              cfCharges: cf,
              adDuty: ad,
              hmDuty: hm,
              mpDuty: mp,
              cvDuty: cv,
              rtDuty: rt,
              invoiceValue: invVal,
              enteredInvoiceValue: enteredVal,
              total: totalDuties,
              grandTotal: grandTotal,
              status: d.status || 'CLEARED_ADMITTED'
            };

            const existingIdx = this.state.clearingAgents.findIndex(x => x.id === d.id);
            if (existingIdx >= 0) {
              this.state.clearingAgents[existingIdx] = updatedRecord;
            } else {
              this.state.clearingAgents.unshift(updatedRecord);
            }

            modal.close();
            this.renderClearingAgent(document.getElementById('sales-main-container'));
            Toast.show(`Clearing record for ${invNo} saved successfully!`, 'success');
          }
        }
      ]
    });

    // Wire up real-time duty & grand total recalculation and More Transactions in modal
    setTimeout(() => {
      // Toggle More Transactions form card
      const toggleTxBtn = document.getElementById('btn-toggle-more-transactions');
      const txFormCard = document.getElementById('more-tx-form-card');
      toggleTxBtn?.addEventListener('click', () => {
        if (txFormCard) {
          txFormCard.classList.toggle('hidden');
          const isHidden = txFormCard.classList.contains('hidden');
          toggleTxBtn.innerHTML = isHidden 
            ? `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg><span>More Transaction</span>`
            : `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg><span>Hide Transaction Form</span>`;
        }
      });

      // Bind Remove Transaction buttons
      const bindRemoveTx = () => {
        document.querySelectorAll('.btn-remove-tx').forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            if (!isNaN(idx) && idx >= 0 && idx < moreTransactions.length) {
              const removed = moreTransactions.splice(idx, 1);
              const tbody = document.getElementById('more-tx-table-tbody');
              if (tbody) tbody.innerHTML = renderTxRows();
              bindRemoveTx();
              Toast.show(`Removed transaction ${removed[0]?.billNumber || ''}`, 'info');
            }
          });
        });
      };

      // Add Transaction button handler
      const addTxBtn = document.getElementById('btn-add-more-tx');
      addTxBtn?.addEventListener('click', () => {
        const cat = document.getElementById('mtx-cat')?.value || 'Customs Clearance Charges';
        const billNo = document.getElementById('mtx-bill-no')?.value?.trim();
        const billDate = document.getElementById('mtx-bill-date')?.value || new Date().toISOString().split('T')[0];
        const billAmount = parseFloat(document.getElementById('mtx-bill-amount')?.value);

        if (!billNo) {
          Toast.show('Please enter Bill Number', 'error');
          document.getElementById('mtx-bill-no')?.focus();
          return;
        }
        if (isNaN(billAmount) || billAmount <= 0) {
          Toast.show('Please enter a valid Bill Amount', 'error');
          document.getElementById('mtx-bill-amount')?.focus();
          return;
        }

        moreTransactions.push({
          category: cat,
          billNumber: billNo,
          billDate: billDate,
          billAmount: billAmount
        });

        const tbody = document.getElementById('more-tx-table-tbody');
        if (tbody) tbody.innerHTML = renderTxRows();
        bindRemoveTx();

        const bNoEl = document.getElementById('mtx-bill-no');
        const bAmtEl = document.getElementById('mtx-bill-amount');
        if (bNoEl) bNoEl.value = '';
        if (bAmtEl) bAmtEl.value = '';

        Toast.show(`Added bill ${billNo} to transactions`, 'success');
      });

      // Initial binding for existing transaction rows
      bindRemoveTx();

      const calcInputs = document.querySelectorAll('.duty-calc-input');
      const recalc = () => {
        const cf = parseFloat(document.getElementById('cha-duty-cf')?.value) || 0;
        const ad = parseFloat(document.getElementById('cha-duty-ad')?.value) || 0;
        const hm = parseFloat(document.getElementById('cha-duty-hm')?.value) || 0;
        const mp = parseFloat(document.getElementById('cha-duty-mp')?.value) || 0;
        const cv = parseFloat(document.getElementById('cha-duty-cv')?.value) || 0;
        const rt = parseFloat(document.getElementById('cha-duty-rt')?.value) || 0;
        const enteredVal = parseFloat(document.getElementById('cha-duty-entered-val')?.value) || 0;
        const total = cf + ad + hm + mp + cv + rt;
        const grandTotal = enteredVal + total;

        const totalEl = document.getElementById('cha-duty-total');
        const grandTotalEl = document.getElementById('cha-duty-grand-total');
        if (totalEl) totalEl.value = total.toFixed(2);
        if (grandTotalEl) grandTotalEl.value = grandTotal.toFixed(2);
      };

      calcInputs.forEach(inp => {
        inp.addEventListener('input', recalc);
      });

      // Also mirror inv-no to notify-inv-no and inv-date to notify-inv-date
      document.getElementById('cha-inv-no')?.addEventListener('input', (e) => {
        const notInv = document.getElementById('cha-notify-inv-no');
        if (notInv) notInv.value = e.target.value;
      });
      document.getElementById('cha-inv-date')?.addEventListener('input', (e) => {
        const notDate = document.getElementById('cha-notify-inv-date');
        if (notDate) notDate.value = e.target.value;
      });
    }, 50);
  },

  // Modal: View Full Details of Clearing Agent Record
  showClearingAgentDetailsModal(row) {
    const d = row || {};
    const val = String(d.status || '').toUpperCase();
    let statusClass = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
    if (val.includes('HOLD') || val.includes('EXAM')) {
      statusClass = 'bg-[#FFEBE6] text-[#DE350B] border-[#FFBDAD]';
    } else if (val.includes('PENDING') || val.includes('PROGRESS')) {
      statusClass = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
    }

    const fmt = (num) => '$' + Number(num || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const moreTransactionsList = Array.isArray(d.moreTransactions) ? d.moreTransactions : [
      { category: 'Customs Clearance Charges', billNumber: 'BILL-CUS-88210', billDate: d.entryDate || '2026-03-28', billAmount: 1850.00 },
      { category: 'Port & Handling Charges', billNumber: 'BILL-PRT-44012', billDate: d.invDate || '2026-03-25', billAmount: 1400.00 }
    ];

    Modal.open({
      title: `Customs Clearing Details — ${d.invNo || d.id}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${d.invNo || '-'}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase border ${statusClass}">${d.status || 'RECORDED'}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">Entry: ${d.entryNumber || '-'}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Buyer: <strong class="text-[#172B4D]">${d.buyer || d.consignee || '-'}</strong></span>
                  <span class="text-[#CBD5E1]">&bull;</span>
                  <span>Port of Discharge: <strong class="text-[#172B4D]">${d.portOfDischarge || '-'}</strong></span>
                  <span class="text-[#CBD5E1]">&bull;</span>
                  <span>Date: <strong class="text-[#172B4D]">${d.invDate || '-'}</strong></span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges on Right -->
            <div class="flex items-center gap-2 flex-wrap">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[90px]">
                <div class="text-[9px] font-bold text-[#64748B] uppercase tracking-wider">C&amp;F CHARGES</div>
                <div class="font-bold text-[#172B4D] text-xs">${fmt(d.cfCharges)}</div>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[90px]">
                <div class="text-[9px] font-bold text-[#64748B] uppercase tracking-wider">TOTAL DUTY</div>
                <div class="font-bold text-[#DE350B] text-xs">${fmt(d.total)}</div>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[100px]">
                <div class="text-[9px] font-bold text-[#64748B] uppercase tracking-wider">GRAND TOTAL</div>
                <div class="font-bold text-[#006644] text-xs">${fmt(d.grandTotal)}</div>
              </div>
            </div>
          </div>

          <!-- Section 1: Invoice Details -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Invoice Details</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">INVOICE NO</span>
                <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${d.invNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PO NO</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${d.poNo || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONSIGNEE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.consignee || d.buyer || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">INV DATE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.invDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BL NO</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${d.blNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CONTAINER NO</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.containerNo || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Transactions -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-3.5">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Transactions</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-1">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Entry Number</span>
                <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${d.entryNumber || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Entry Date</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.entryDate || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Port of Discharge</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.portOfDischarge || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Customs Status</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${statusClass} inline-block mt-0.5">${d.status || 'RECORDED'}</span>
              </div>
            </div>

            <!-- More Transactions Sub-table -->
            <div class="pt-1">
              <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>More Transactions (${moreTransactionsList.length})</span>
              </div>
              <div class="overflow-x-auto rounded-lg border border-[#DFE1E6]">
                <table class="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#5E6C84] uppercase font-bold text-[10px] tracking-wider">
                      <th class="py-2.5 px-3">Category</th>
                      <th class="py-2.5 px-3">Bill Number</th>
                      <th class="py-2.5 px-3">Bill Date</th>
                      <th class="py-2.5 px-3 text-right">Bill Amount</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#F1F5F9] bg-white">
                    ${moreTransactionsList.length > 0 
                      ? moreTransactionsList.map(tx => `
                        <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#F1F5F9] text-[#172B4D]">
                          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${tx.category || '-'}</td>
                          <td class="py-2.5 px-3 font-mono font-bold text-[#00A4B7]">${tx.billNumber || '-'}</td>
                          <td class="py-2.5 px-3 font-mono text-xs text-[#5E6C84]">${tx.billDate || '-'}</td>
                          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#006644]">$${Number(tx.billAmount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        </tr>
                      `).join('')
                      : `
                        <tr>
                          <td colspan="4" class="py-3 text-center text-xs text-[#5E6C84] italic">No transaction bills recorded.</td>
                        </tr>
                      `
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Section 3: Notify -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Notify</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Notify Party</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.notifyParty || d.notifyPartyName || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Invoice No</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${d.invNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Invoice Date</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.invDate || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 4: Duty -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Duty</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">C&amp;F Charges</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${fmt(d.cfCharges)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">AD Duty</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${fmt(d.adDuty)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">HM Duty</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${fmt(d.hmDuty)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">MP Duty</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${fmt(d.mpDuty)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CV Duty</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${fmt(d.cvDuty)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">RT Duty</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${fmt(d.rtDuty)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Invoice Value</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${fmt(d.invoiceValue)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Entered Invoice Value</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${fmt(d.enteredInvoiceValue)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Total</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs block mt-0.5">${fmt(d.total)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#00A4B7] uppercase tracking-wider block">Grand Total</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${fmt(d.grandTotal)}</span>
              </div>
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Update Clearing Details',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            this.showAddClearingAgentModal(d);
          }
        }
      ]
    });
  },

  // ----------------------------------------------------
  // 3. PAYMENTS SUBMENU TABS
  // ----------------------------------------------------
  renderPayments(container, currentTab = 'forward-contracts') {
    switch (currentTab) {
      case 'forward-contracts':
        this.renderForwardContracts(container);
        break;
      case 'collections':
        this.renderCollections(container);
        break;
      case 'negotiations':
        this.renderNegotiations(container);
        break;
      case 'realization':
        this.renderRealization(container);
        break;
      case 'realization-done':
        this.renderRealizationDone(container);
        break;
      default:
        this.renderForwardContracts(container);
        break;
    }
  },

  // Payments Tab 1: Forward Contracts
  renderForwardContracts(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title & Header Actions (Strictly clean H1 per AGENTS.md Rule 2) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Forward Contracts</h1>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="btn-add-forward-contract" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Book Forward Contract</span>
            </button>
          </div>
        </div>

        <!-- FORWARD CONTRACT — Filter Fields -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="fwd-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="fwd-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="fwd-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <div>
              <label for="fwd-flt-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Year</label>
              <select id="fwd-flt-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Years</option>
                <option value="2026-2027" selected>2026-2027</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
                <option value="2023-2024">2023-2024</option>
              </select>
            </div>
            <div>
              <label for="fwd-flt-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Exporter</label>
              <select id="fwd-flt-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Aqua Feeds">Devi Aqua Feeds</option>
              </select>
            </div>
            <div>
              <label for="fwd-flt-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Type</label>
              <select id="fwd-flt-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Types</option>
                <option value="Export Hedge">Export Hedge</option>
                <option value="Import Coverage">Import Coverage</option>
                <option value="Forward Sale Hedge">Forward Sale Hedge</option>
              </select>
            </div>
            <div class="flex items-end">
              <button type="button" id="fwd-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="fwd-table-container"></div>
      </div>
    `;

    // Hook primary action
    container.querySelector('#btn-add-forward-contract')?.addEventListener('click', () => {
      this.openBookForwardContractModal(null, () => renderTable(this.state.forwardContracts));
    });

    // Toggle filter
    const toggleBtn = container.querySelector('#fwd-flt-toggle-btn');
    const filterBody = container.querySelector('#fwd-flt-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render Table function
    const renderTable = (currentData) => {
      new DataTable({
        containerId: 'fwd-table-container',
        data: currentData,
        keyField: 'contractNo',
        tableTitle: 'Forward Contracts',
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showForwardContractDetailsModal(row),
        columns: [
          { field: 'sNo', header: 'S.No', render: (v, r, idx) => `<span class="font-bold text-[#172B4D]">${v || (idx + 1)}</span>` },
          { field: 'bookedDate', header: 'Booked Date', render: (v) => `<span class="text-xs text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'spotRate', header: 'Spot Rate', render: (v) => `<span class="font-mono text-xs font-semibold text-[#5E6C84]">₹${Number(v).toFixed(2)}</span>` },
          { field: 'contractNo', header: 'Forward Contract No', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
          { field: 'currentDate', header: 'Current Date', render: (v) => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '11/11/2026'}</span>` },
          { field: 'diff', header: 'Diff', render: (v) => `<span class="font-mono font-bold text-xs ${String(v).startsWith('-') ? 'text-[#DE350B]' : 'text-[#006644]'}">${v}</span>` },
          { field: 'startDate', header: 'Start Date', render: (v) => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>` },
          { field: 'endDate', header: 'End Date', render: (v) => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>` },
          { field: 'month', header: 'Month', render: (v) => `<span class="text-xs font-medium text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'bookedRate', header: 'Booked Rate', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644]">₹${Number(v).toFixed(2)}</span>` },
          { field: 'bookedValue', header: 'Booked Value', render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D]">$${Number(v).toLocaleString('en-US')}</span>` },
          { field: 'utilisation', header: 'Utilisation', render: (v) => `<span class="font-mono text-xs font-semibold text-[#5E6C84]">$${Number(v).toLocaleString('en-US')}</span>` },
          { field: 'balanceUsd', header: 'Balance US$', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">$${Number(v).toLocaleString('en-US')}</span>` },
          {
            field: 'actions',
            header: 'Actions',
            render: (v, row) => `
              <div class="flex items-center gap-1.5 justify-center">
                <button type="button" class="btn-download-fwd dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] rounded-full text-[#00A4B7] transition-colors cursor-pointer" data-id="${row.contractNo}" title="Download Forward Contract">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                </button>
                <button type="button" class="btn-edit-fwd dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] rounded-full text-[#00A4B7] transition-colors cursor-pointer" data-id="${row.contractNo}" title="Edit Forward Contract">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                </button>
                <button type="button" class="btn-delete-fwd dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#FFEBE6] border border-[#CBD5E1] hover:border-[#DE350B] rounded-full text-[#DE350B] transition-colors cursor-pointer" data-id="${row.contractNo}" title="Delete Forward Contract">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
              </div>
            `
          }
        ]
      });

      // Attach Actions Event Listeners
      const tableWrapper = document.getElementById('fwd-table-container');
      if (tableWrapper) {
        // Download
        tableWrapper.querySelectorAll('.btn-download-fwd').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.getAttribute('data-id');
            Toast.show(`Downloading Forward Contract document for ${id}...`, 'success');
          });
        });

        // Edit
        tableWrapper.querySelectorAll('.btn-edit-fwd').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.getAttribute('data-id');
            const targetRow = this.state.forwardContracts.find(item => item.contractNo === id);
            if (targetRow) {
              this.openBookForwardContractModal(targetRow, () => renderTable(this.state.forwardContracts));
            }
          });
        });

        // Delete
        tableWrapper.querySelectorAll('.btn-delete-fwd').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.getAttribute('data-id');
            Modal.confirm({
              title: 'Delete Forward Contract',
              message: `Are you sure you want to delete Forward Contract <strong>${id}</strong>? This action cannot be undone.`,
              confirmText: 'Delete Contract',
              cancelText: 'Cancel',
              isDestructive: true,
              onConfirm: () => {
                this.state.forwardContracts = this.state.forwardContracts.filter(item => item.contractNo !== id);
                renderTable(this.state.forwardContracts);
                Toast.show(`Forward Contract ${id} deleted successfully`, 'success');
              }
            });
          });
        });
      }
    };

    renderTable(this.state.forwardContracts);

    // Search and Reset filters handlers
    const searchBtn = container.querySelector('#fwd-flt-search-btn');
    const resetBtn = container.querySelector('#fwd-flt-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const yearVal = container.querySelector('#fwd-flt-year')?.value || 'All';
      const exporterVal = container.querySelector('#fwd-flt-exporter')?.value || 'All';
      const typeVal = container.querySelector('#fwd-flt-type')?.value || 'All';

      let filtered = [...this.state.forwardContracts];

      if (yearVal !== 'All') {
        filtered = filtered.filter(item => item.year === yearVal);
      }
      if (exporterVal !== 'All') {
        filtered = filtered.filter(item => item.exporter === exporterVal || item.company === exporterVal);
      }
      if (typeVal !== 'All') {
        filtered = filtered.filter(item => item.type === typeVal);
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} forward contract(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      const yearEl = container.querySelector('#fwd-flt-year');
      const expEl = container.querySelector('#fwd-flt-exporter');
      const typeEl = container.querySelector('#fwd-flt-type');
      if (yearEl) yearEl.value = 'All';
      if (expEl) expEl.value = 'All';
      if (typeEl) typeEl.value = 'All';

      renderTable(this.state.forwardContracts);
      Toast.show('Filters reset', 'info');
    });
  },

  // Modal: Book Forward Contract
  openBookForwardContractModal(row = null, onSaved = null) {
    const isEdit = !!row;
    const modalTitle = isEdit ? `Edit Forward Contract — ${row.contractNo}` : 'Book Forward Contract';

    const companies = ['Devi Fisheries Limited', 'Devi Sea Foods Ltd', 'Devi Aqua Feeds'];
    const months = ['October 2026', 'November 2026', 'December 2026', 'January 2027', 'February 2027', 'March 2027', 'April 2027', 'May 2027'];

    const initialCompany = row?.company || row?.exporter || 'Devi Fisheries Limited';
    const toDateInputVal = (dStr) => {
      if (!dStr) return '';
      if (dStr.includes('/')) {
        const parts = dStr.split('/');
        if (parts.length === 3) return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
      }
      return dStr;
    };

    const initialBookingDate = toDateInputVal(row?.bookedDate) || '2026-10-15';
    const initialContractNo = row?.contractNo || `FWD-2026-${String(this.state.forwardContracts.length + 81).padStart(3, '0')}`;
    const initialValue = row?.bookedValue || row?.value || '';
    const initialPeriod = row?.period || '75 Days';
    const initialMonth = row?.month || 'December 2026';
    const initialStartDate = toDateInputVal(row?.startDate) || '2026-10-15';
    const initialEndDate = toDateInputVal(row?.endDate) || '2026-12-31';
    const initialSpotRate = row?.spotRate ?? 83.95;
    const initialPremiumRate = row?.premiumRate ?? 0.60;
    const initialBranchMargin = row?.branchMargin ?? 0.10;
    const initialTotalRate = row?.bookedRate || row?.totalRate || 84.65;
    const initialUtilizedValue = row?.utilisation || row?.utilizedValue || 0;
    const initialBalanceValue = row?.balanceUsd ?? (row?.bookedValue ? (row.bookedValue - (row.utilisation || 0)) : (initialValue ? initialValue : ''));

    Modal.open({
      title: modalTitle,
      size: 'xl',
      content: `
                <form id="form-book-fwd" class="space-y-4 text-xs animate-fade-in">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <!-- 1. SELECT COMPANY * -->
            <div>
              <label for="fwd-in-company" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                SELECT COMPANY <span class="text-[#DE350B]">*</span>
              </label>
              <select id="fwd-in-company" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                ${companies.map(c => `<option value="${c}" ${c === initialCompany ? 'selected' : ''}>${c}</option>`).join('')}
              </select>
            </div>

            <!-- 2. BOOKING DATE * -->
            <div>
              <label for="fwd-in-booking-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                BOOKING DATE <span class="text-[#DE350B]">*</span>
              </label>
              <input type="date" id="fwd-in-booking-date" required value="${initialBookingDate}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>

            <!-- 3. FORWARD CONTRACT NUMBER * -->
            <div>
              <label for="fwd-in-contract-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                FORWARD CONTRACT NUMBER <span class="text-[#DE350B]">*</span>
              </label>
              <input type="text" id="fwd-in-contract-no" required value="${initialContractNo}" placeholder="e.g. FWD-2026-085" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
            </div>

            <!-- 4. VALUE * -->
            <div>
              <label for="fwd-in-value" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                VALUE (US$) <span class="text-[#DE350B]">*</span>
              </label>
              <input type="number" id="fwd-in-value" required value="${initialValue}" placeholder="e.g. 250000" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
            </div>

            <!-- 5. PERIOD -->
            <div>
              <label for="fwd-in-period" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                PERIOD
              </label>
              <input type="text" id="fwd-in-period" value="${initialPeriod}" placeholder="e.g. 77 Days" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>

            <!-- 6. MONTH -->
            <div>
              <label for="fwd-in-month" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                MONTH
              </label>
              <select id="fwd-in-month" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                ${months.map(m => `<option value="${m}" ${m === initialMonth ? 'selected' : ''}>${m}</option>`).join('')}
              </select>
            </div>

            <!-- 7. START DATE * -->
            <div>
              <label for="fwd-in-start-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                START DATE <span class="text-[#DE350B]">*</span>
              </label>
              <input type="date" id="fwd-in-start-date" required value="${initialStartDate}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>

            <!-- 8. END DATE * -->
            <div>
              <label for="fwd-in-end-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                END DATE <span class="text-[#DE350B]">*</span>
              </label>
              <input type="date" id="fwd-in-end-date" required value="${initialEndDate}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>

            <!-- 9. SPOT RATE * -->
            <div>
              <label for="fwd-in-spot-rate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                SPOT RATE <span class="text-[#DE350B]">*</span>
              </label>
              <input type="number" step="0.0001" id="fwd-in-spot-rate" required value="${initialSpotRate}" placeholder="e.g. 83.95" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
            </div>

            <!-- 10. PREMIUM RATE -->
            <div>
              <label for="fwd-in-premium-rate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                PREMIUM RATE
              </label>
              <input type="number" step="0.0001" id="fwd-in-premium-rate" value="${initialPremiumRate}" placeholder="e.g. 0.60" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
            </div>

            <!-- 11. BRANCH MARGIN * -->
            <div>
              <label for="fwd-in-branch-margin" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                BRANCH MARGIN <span class="text-[#DE350B]">*</span>
              </label>
              <input type="number" step="0.0001" id="fwd-in-branch-margin" required value="${initialBranchMargin}" placeholder="e.g. 0.10" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
            </div>

            <!-- 12. TOTAL RATE * -->
            <div>
              <label for="fwd-in-total-rate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                TOTAL RATE <span class="text-[#DE350B]">*</span>
              </label>
              <input type="number" step="0.0001" id="fwd-in-total-rate" required value="${initialTotalRate}" placeholder="e.g. 84.65" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded font-extrabold text-[#006644] focus:outline-none shadow-2xs font-mono">
            </div>

            <!-- 13. UTILIZED VALUE -->
            <div>
              <label for="fwd-in-utilized-value" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                UTILIZED VALUE
              </label>
              <input type="number" id="fwd-in-utilized-value" value="${initialUtilizedValue}" placeholder="e.g. 0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
            </div>

            <!-- 14. BALANCE VALUE -->
            <div>
              <label for="fwd-in-balance-value" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                BALANCE VALUE
              </label>
              <input type="number" id="fwd-in-balance-value" value="${initialBalanceValue}" placeholder="e.g. 250000" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded font-bold text-[#00A4B7] focus:outline-none shadow-2xs font-mono">
            </div>
          </div>

          <!-- Modal Action Buttons Footer -->
          <div class="flex items-center justify-end gap-3 pt-3 border-t border-[#DFE1E6]">
            <button type="button" id="btn-cancel-fwd-modal" class="btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer">
              Cancel
            </button>
            <button type="submit" id="btn-save-fwd-modal" class="btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
              <span>${isEdit ? 'Update Contract' : 'Save Contract'}</span>
            </button>
          </div>
        </form>
      `
    });

    // Dynamic calculations
    const spotEl = document.getElementById('fwd-in-spot-rate');
    const premEl = document.getElementById('fwd-in-premium-rate');
    const marginEl = document.getElementById('fwd-in-branch-margin');
    const totalEl = document.getElementById('fwd-in-total-rate');

    const updateTotalRate = () => {
      const s = parseFloat(spotEl?.value) || 0;
      const p = parseFloat(premEl?.value) || 0;
      const m = parseFloat(marginEl?.value) || 0;
      if (totalEl) totalEl.value = (s + p + m).toFixed(2);
    };

    spotEl?.addEventListener('input', updateTotalRate);
    premEl?.addEventListener('input', updateTotalRate);
    marginEl?.addEventListener('input', updateTotalRate);

    const valEl = document.getElementById('fwd-in-value');
    const utilEl = document.getElementById('fwd-in-utilized-value');
    const balEl = document.getElementById('fwd-in-balance-value');

    const updateBalance = () => {
      const v = parseFloat(valEl?.value) || 0;
      const u = parseFloat(utilEl?.value) || 0;
      if (balEl) balEl.value = Math.max(0, v - u);
    };

    valEl?.addEventListener('input', updateBalance);
    utilEl?.addEventListener('input', updateBalance);

    // Cancel Button
    document.getElementById('btn-cancel-fwd-modal')?.addEventListener('click', () => {
      Modal.close();
    });

    // Form Submit
    document.getElementById('form-book-fwd')?.addEventListener('submit', (e) => {
      e.preventDefault();

      const company = document.getElementById('fwd-in-company')?.value || 'Devi Fisheries Limited';
      const bookingDateRaw = document.getElementById('fwd-in-booking-date')?.value || '';
      const contractNo = document.getElementById('fwd-in-contract-no')?.value?.trim();
      const value = parseFloat(document.getElementById('fwd-in-value')?.value) || 0;
      const period = document.getElementById('fwd-in-period')?.value?.trim() || '';
      const month = document.getElementById('fwd-in-month')?.value || '';
      const startDateRaw = document.getElementById('fwd-in-start-date')?.value || '';
      const endDateRaw = document.getElementById('fwd-in-end-date')?.value || '';
      const spotRate = parseFloat(document.getElementById('fwd-in-spot-rate')?.value) || 0;
      const premiumRate = parseFloat(document.getElementById('fwd-in-premium-rate')?.value) || 0;
      const branchMargin = parseFloat(document.getElementById('fwd-in-branch-margin')?.value) || 0;
      const totalRate = parseFloat(document.getElementById('fwd-in-total-rate')?.value) || (spotRate + premiumRate + branchMargin);
      const utilizedValue = parseFloat(document.getElementById('fwd-in-utilized-value')?.value) || 0;
      const balanceValue = Math.max(0, value - utilizedValue);

      if (!contractNo) {
        Toast.show('Please enter Forward Contract Number', 'error');
        return;
      }
      if (value <= 0) {
        Toast.show('Please enter a valid Value (US$)', 'error');
        return;
      }

      const formatDate = (isoStr) => {
        if (!isoStr) return '';
        const parts = isoStr.split('-');
        if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
        return isoStr;
      };

      const bookedDate = formatDate(bookingDateRaw);
      const startDate = formatDate(startDateRaw);
      const endDate = formatDate(endDateRaw);
      const currentDate = '11/11/2026';
      const diffVal = totalRate - spotRate;
      const diff = (diffVal >= 0 ? '+' : '') + diffVal.toFixed(2);

      const record = {
        id: contractNo,
        contractNo,
        company,
        exporter: company,
        type: 'Export Hedge',
        year: '2026-2027',
        bookedDate,
        spotRate,
        currentDate,
        diff,
        startDate,
        endDate,
        period,
        month,
        premiumRate,
        branchMargin,
        totalRate,
        bookedRate: totalRate,
        bookedValue: value,
        value,
        utilisation: utilizedValue,
        utilizedValue,
        balanceUsd: balanceValue,
        balanceValue,
        status: balanceValue === 0 ? 'FULLY_UTILIZED' : 'ACTIVE_OPEN'
      };

      if (isEdit) {
        const idx = this.state.forwardContracts.findIndex(c => c.contractNo === row.contractNo);
        if (idx !== -1) {
          this.state.forwardContracts[idx] = { ...this.state.forwardContracts[idx], ...record };
        }
      } else {
        record.sNo = this.state.forwardContracts.length + 1;
        this.state.forwardContracts.unshift(record);
      }

      Modal.close();
      Toast.show(isEdit ? `Forward Contract ${contractNo} updated successfully` : `Forward Contract ${contractNo} booked successfully`, 'success');

      if (typeof onSaved === 'function') {
        onSaved();
      }
    });
  },

  // Modal: Show Forward Contract Details (Single unified section matching add form)
  showForwardContractDetailsModal(row) {
    if (!row) return;
    const contractNo = row.contractNo || 'FWD-2026-081';
    const bookedValue = Number(row.bookedValue || row.value || 0);
    const utilizedValue = Number(row.utilisation || row.utilizedValue || 0);
    const balanceValue = Number(row.balanceUsd ?? (row.bookedValue ? (row.bookedValue - (row.utilisation || 0)) : (row.value ? (row.value - (row.utilizedValue || 0)) : 0)));
    const spotRate = Number(row.spotRate || 0);
    const premiumRate = Number(row.premiumRate || 0);
    const branchMargin = Number(row.branchMargin || 0);
    const totalRate = Number(row.bookedRate || row.totalRate || (spotRate + premiumRate + branchMargin));
    const status = String(row.status || 'ACTIVE_OPEN').toUpperCase();

    const fields = [
      { label: 'SELECT COMPANY', val: row.company || row.exporter || 'Devi Fisheries Limited' },
      { label: 'BOOKING DATE', val: row.bookedDate || '-' },
      { label: 'FORWARD CONTRACT NUMBER', val: contractNo },
      { label: 'VALUE (US$)', val: '$' + bookedValue.toLocaleString('en-US') },
      { label: 'PERIOD', val: row.period || '-' },
      { label: 'MONTH', val: row.month || '-' },
      { label: 'START DATE', val: row.startDate || '-' },
      { label: 'END DATE', val: row.endDate || '-' },
      { label: 'SPOT RATE', val: '₹' + spotRate.toFixed(2) },
      { label: 'PREMIUM RATE', val: '₹' + premiumRate.toFixed(2) },
      { label: 'BRANCH MARGIN', val: '₹' + branchMargin.toFixed(2) },
      { label: 'TOTAL RATE', val: '₹' + totalRate.toFixed(2) },
      { label: 'UTILIZED VALUE', val: '$' + utilizedValue.toLocaleString('en-US') },
      { label: 'BALANCE VALUE', val: '$' + balanceValue.toLocaleString('en-US') },
      { label: 'CURRENT DATE', val: row.currentDate || '11/11/2026' },
      { label: 'RATE DIFF', val: row.diff || '0.00' }
    ];

    Modal.open({
      title: `Forward Contracts Details: ${contractNo}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Batch Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${contractNo}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${status}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${row.type || 'Export Hedge'}</span>
                </div>
                <p class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Company: <strong class="text-[#334155]">${row.company || row.exporter || 'Devi Fisheries Limited'}</strong></span>
                  <span>•</span>
                  <span>Booking Date: <strong class="text-[#334155]">${row.bookedDate || '-'}</strong></span>
                  <span>•</span>
                  <span>Period: <strong class="text-[#334155]">${row.period || '-'} (${row.month || '-'})</strong></span>
                  <span>•</span>
                  <span>Validity: <strong class="text-[#334155]">${row.startDate || '-'} to ${row.endDate || '-'}</strong></span>
                </p>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 flex-wrap">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BOOKED VALUE</span>
                <span class="font-mono font-extrabold text-xs text-[#006644]">$${bookedValue.toLocaleString('en-US')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">UTILIZED</span>
                <span class="font-mono font-extrabold text-xs text-[#006644]">$${utilizedValue.toLocaleString('en-US')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BALANCE US$</span>
                <span class="font-mono font-extrabold text-xs text-[#00A4B7]">$${balanceValue.toLocaleString('en-US')}</span>
              </div>
            </div>
          </div>

          <!-- Single Unified Record Section (No multiple sections, No section headings) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              ${fields.map(item => `
                <div>
                  <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">${item.label}</span>
                  <span class="font-semibold text-[#172B4D] text-xs block mt-0.5 break-words">${item.val}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Edit Contract',
          type: 'secondary',
          onClick: (modal) => {
            modal.close();
            this.openBookForwardContractModal(row, () => {
              const currentTab = 'forward-contracts';
              const paymentsContainer = document.getElementById('sales-payments-container');
              if (paymentsContainer) this.renderPayments(paymentsContainer, currentTab);
            });
          }
        },
        {
          label: 'Download Contract',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            Toast.show(`Downloading Forward Contract ${contractNo}...`, 'success');
          }
        }
      ]
    });
  },

  // Payments Tab 2: Export Collections (Buyer Inward Remittances)
  renderCollections(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title Header (Strictly clean H1 per AGENTS.md Rule 2, no subheadings, no top button) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Export Collections</h1>
          </div>
        </div>

        <!-- COLLECTIONS LIST — Filter Fields -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="col-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="col-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="col-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- 1. Select Year -->
            <div>
              <label for="col-flt-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Year</label>
              <select id="col-flt-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Years</option>
                <option value="2026-2027" selected>2026-2027</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>

            <!-- 2. Select Exporter -->
            <div>
              <label for="col-flt-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Exporter</label>
              <select id="col-flt-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Aqua Feeds">Devi Aqua Feeds</option>
              </select>
            </div>

            <!-- 3. Select Buyer -->
            <div>
              <label for="col-flt-buyer" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Buyer</label>
              <select id="col-flt-buyer" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Buyers</option>
                <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC</option>
                <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation</option>
                <option value="Sysco Corporation International">Sysco Corporation International</option>
                <option value="Royal Greenland Seafood A/S">Royal Greenland Seafood A/S</option>
                <option value="Ocean Prime Foods Canada">Ocean Prime Foods Canada</option>
                <option value="Pescanova Espana S.A.">Pescanova Espana S.A.</option>
              </select>
            </div>

            <!-- 4. Select Country -->
            <div>
              <label for="col-flt-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Country</label>
              <select id="col-flt-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Countries</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
                <option value="Denmark">Denmark</option>
                <option value="Canada">Canada</option>
                <option value="Spain">Spain</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <!-- 5. Status -->
            <div>
              <label for="col-flt-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
              <select id="col-flt-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Statuses</option>
                <option value="RECEIVED_CREDITED">Received &amp; Credited</option>
                <option value="PARTIALLY_COLLECTED">Partially Collected</option>
                <option value="PENDING_COLLECTION">Pending Collection</option>
              </select>
            </div>

            <!-- Mandatory Search Button -->
            <div class="flex items-end">
              <button type="button" id="col-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="col-table-container"></div>
      </div>
    `;

    // Toggle filter body
    const toggleBtn = container.querySelector('#col-flt-toggle-btn');
    const filterBody = container.querySelector('#col-flt-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render Table function
    const renderTable = (currentData) => {
      new DataTable({
        containerId: 'col-table-container',
        data: currentData,
        keyField: 'id',
        tableTitle: 'Collections List',
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showCollectionDetailsModal(row),
        columns: [
          {
            field: 'sNo',
            header: 'S.No',
            render: (v, r, idx) => `<span class="font-bold text-[#172B4D]">${v || (idx + 1)}</span>`
          },
          {
            field: 'id',
            header: 'ID',
            render: (v, r) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v || r.collectionRef || '-'}</span>`
          },
          {
            field: 'invNo',
            header: 'InvNo',
            render: (v, r) => `<span class="font-mono font-semibold text-xs text-[#172B4D]">${v || r.invoiceNo || '-'}</span>`
          },
          {
            field: 'poNo',
            header: 'Po No.',
            render: (v, r) => `<span class="font-mono text-xs text-[#5E6C84]">${v || r.contractNo || '-'}</span>`
          },
          {
            field: 'consigneeName',
            header: 'Consignee Name',
            render: (v, r) => `<span class="font-bold text-xs text-[#172B4D]">${v || r.buyerName || '-'}</span>`
          },
          {
            field: 'bankRefNo',
            header: 'Bank Ref No',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            render: (v) => {
              const s = String(v || '').toUpperCase();
              let cls = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
              let label = s.replace(/_/g, ' ');
              if (s.includes('RECEIVED') || s.includes('CREDITED')) {
                cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
                label = 'Received & Credited';
              } else if (s.includes('PARTIAL')) {
                cls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
                label = 'Partially Collected';
              } else if (s.includes('PENDING')) {
                cls = 'bg-[#FFEBE6] text-[#DE350B] border-[#FFBDAD]';
                label = 'Pending Collection';
              }
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase whitespace-nowrap">${label}</span>`;
            }
          },
          {
            field: 'actions',
            header: 'Actions',
            render: (v, row) => `
              <div class="flex items-center justify-center">
                <button type="button" class="btn-add-collection-trans dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] rounded-full text-[#00A4B7] transition-colors cursor-pointer" data-id="${row.id || row.collectionRef}" title="Add Collection Payment & Transaction">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                </button>
              </div>
            `
          }
        ]
      });

      // Attach Add Icon Event Listener
      const tableWrapper = document.getElementById('col-table-container');
      if (tableWrapper) {
        tableWrapper.querySelectorAll('.btn-add-collection-trans').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.getAttribute('data-id');
            const targetRow = this.state.collections.find(item => (item.id === id || item.collectionRef === id));
            if (targetRow) {
              this.openCollectionPaymentModal(targetRow, () => renderTable(this.state.collections));
            }
          });
        });
      }
    };

    renderTable(this.state.collections);

    // Search and Reset filters handlers
    const searchBtn = container.querySelector('#col-flt-search-btn');
    const resetBtn = container.querySelector('#col-flt-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const yearVal = container.querySelector('#col-flt-year')?.value || 'All';
      const expVal = container.querySelector('#col-flt-exporter')?.value || 'All';
      const buyerVal = container.querySelector('#col-flt-buyer')?.value || 'All';
      const countryVal = container.querySelector('#col-flt-country')?.value || 'All';
      const statusVal = container.querySelector('#col-flt-status')?.value || 'All';

      let filtered = [...this.state.collections];

      if (yearVal !== 'All') {
        filtered = filtered.filter(item => item.year === yearVal);
      }
      if (expVal !== 'All') {
        filtered = filtered.filter(item => (item.exporter || '').toLowerCase().includes(expVal.toLowerCase()));
      }
      if (buyerVal !== 'All') {
        filtered = filtered.filter(item => (item.consigneeName || item.buyerName || '').toLowerCase().includes(buyerVal.toLowerCase()));
      }
      if (countryVal !== 'All') {
        filtered = filtered.filter(item => (item.country || '').toLowerCase() === countryVal.toLowerCase());
      }
      if (statusVal !== 'All') {
        filtered = filtered.filter(item => item.status === statusVal);
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} collections`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      const yearEl = container.querySelector('#col-flt-year');
      const expEl = container.querySelector('#col-flt-exporter');
      const buyerEl = container.querySelector('#col-flt-buyer');
      const countryEl = container.querySelector('#col-flt-country');
      const statusEl = container.querySelector('#col-flt-status');

      if (yearEl) yearEl.value = 'All';
      if (expEl) expEl.value = 'All';
      if (buyerEl) buyerEl.value = 'All';
      if (countryEl) countryEl.value = 'All';
      if (statusEl) statusEl.value = 'All';

      renderTable(this.state.collections);
      Toast.show('Filters reset', 'info');
    });
  },

  // Modal: Show Collection Record Details (Single unified section)
  showCollectionDetailsModal(row) {
    if (!row) return;
    const colId = row.id || row.collectionRef || 'COL-2026-401';
    const billAmount = Number(row.billAmount || 0);
    const bankCharges = Number(row.bankCharges || 0);
    const netReceived = Number(row.netReceived || (billAmount - bankCharges));
    const status = String(row.status || 'RECEIVED_CREDITED').toUpperCase();

    const fields = [
      { label: 'SELECT YEAR', val: row.year || '2026-2027' },
      { label: 'SELECT EXPORTER', val: row.exporter || 'Devi Fisheries Limited' },
      { label: 'ID', val: colId },
      { label: 'INVNO', val: row.invNo || row.invoiceNo || '-' },
      { label: 'PO NO.', val: row.poNo || row.contractNo || '-' },
      { label: 'CONSIGNEE NAME', val: row.consigneeName || row.buyerName || '-' },
      { label: 'SELECT COUNTRY', val: row.country || 'USA' },
      { label: 'BANK REF NO', val: row.bankRefNo || '-' },
      { label: 'COLLECTION BANK', val: row.collectionBank || 'Citibank N.A. New York (via SBI)' },
      { label: 'REMITTANCE DATE', val: row.remittanceDate || '-' },
      { label: 'SETTLEMENT MODE', val: row.settlementMode || 'SWIFT Wire MT103' },
      { label: 'CURRENCY', val: row.currency || 'USD' },
      { label: 'GROSS BILL VALUE', val: '$' + billAmount.toLocaleString('en-US') },
      { label: 'BANK CHARGES', val: '-$' + bankCharges.toLocaleString('en-US') },
      { label: 'NET RECEIVED', val: '$' + netReceived.toLocaleString('en-US') },
      { label: 'STATUS', val: status.replace(/_/g, ' ') },
      { label: 'REMARKS', val: row.remarks || 'Document and value advice verified' }
    ];

    Modal.open({
      title: `Collection Details: ${colId}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Batch Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${colId}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${status}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">Buyer Inward Remittance</span>
                </div>
                <p class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Exporter: <strong class="text-[#334155]">${row.exporter || 'Devi Fisheries Limited'}</strong></span>
                  <span>•</span>
                  <span>Consignee: <strong class="text-[#334155]">${row.consigneeName || row.buyerName || '-'}</strong></span>
                  <span>•</span>
                  <span>Country: <strong class="text-[#334155]">${row.country || 'USA'}</strong></span>
                  <span>•</span>
                  <span>Date: <strong class="text-[#334155]">${row.remittanceDate || '-'}</strong></span>
                </p>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 flex-wrap">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">GROSS BILL</span>
                <span class="font-mono font-extrabold text-xs text-[#172B4D]">$${billAmount.toLocaleString('en-US')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CHARGES</span>
                <span class="font-mono font-extrabold text-xs text-[#DE350B]">-$${bankCharges.toLocaleString('en-US')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">NET PROCEEDS</span>
                <span class="font-mono font-extrabold text-xs text-[#006644]">$${netReceived.toLocaleString('en-US')}</span>
              </div>
            </div>
          </div>

          <!-- Single Unified Record Section -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              ${fields.map(item => `
                <div>
                  <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">${item.label}</span>
                  <span class="font-semibold text-[#172B4D] text-xs block mt-0.5 break-words">${item.val}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Add Payment / Trans',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            this.openCollectionPaymentModal(row, () => {
              const mainEl = document.getElementById('sales-view-main');
              if (mainEl) this.renderCollections(mainEl);
            });
          }
        }
      ]
    });
  },

  // Modal: Add / Record Collections Advice & Payment Tranches
  openCollectionPaymentModal(row, onSaved = null) {
    if (!row) return;

    // Ensure transactions array exists
    if (!Array.isArray(row.transactions)) {
      row.transactions = [
        {
          type: 'Forward Contract',
          refNo: row.contractNo || 'FWD-2026-081',
          bankRefNo: row.bankRefNo || 'BRN-CITI-88201',
          utilizedValue: Number(row.amountCollected || row.billAmount || 159300),
          utilizedDate: row.remittanceDate || '2026-10-22',
          rate: Number(row.collectionRate || 84.65),
          utilizedInr: Math.round(Number(row.amountCollected || row.billAmount || 159300) * Number(row.collectionRate || 84.65))
        }
      ];
    }

    let transactions = [...row.transactions];

    const toDateInputVal = (dStr) => {
      if (!dStr) return '';
      if (dStr.includes('/')) {
        const parts = dStr.split('/');
        if (parts.length === 3) return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
      }
      return dStr;
    };

    const initialBlDate = toDateInputVal(row.blDate) || '2026-10-12';
    const initialEtaPod = toDateInputVal(row.etaPod) || '2026-11-20';
    const initialInvoiceVal = Number(row.billAmount || 159300);
    const initialShortFall = Number(row.shortFall || 0);
    const initialCollRate = Number(row.collectionRate || 84.25);
    const initialDueDate = toDateInputVal(row.dueDate) || '2026-11-25';
    const initialCharges = Number(row.bankCharges ?? 120);
    const initialOtherDeductions = Number(row.otherDeductions || 0);
    const initialExtra = Number(row.extraAmount || 0);
    const initialComments = row.remarks || row.comments || 'Advice reconciled & proceeds credited';

    const forwardContractOptions = (this.state.forwardContracts || []).map(f => f.contractNo);
    if (!forwardContractOptions.includes('FWD-2026-081')) forwardContractOptions.unshift('FWD-2026-081');

    const paymentModes = [
      'Forward Contract',
      'Spot Rate TT',
      'LC Negotiation Proceeds',
      'CAD Advance Wire',
      'Direct Bank Remittance'
    ];

    const calcTotalUtilized = () => transactions.reduce((acc, t) => acc + (Number(t.utilizedValue) || 0), 0);
    const calcRemainingBalance = () => {
      const invVal = Number(document.getElementById('col-top-invvalue')?.value) || initialInvoiceVal;
      return Math.max(0, invVal - calcTotalUtilized());
    };

    const renderTransRows = () => {
      if (transactions.length === 0) {
        return `<tr><td colspan="8" class="text-center py-4 text-xs text-[#5E6C84]">No transactions recorded yet. Fill the Payment Section above and click "Update".</td></tr>`;
      }
      return transactions.map((t, idx) => `
        <tr class="border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2 px-3">
            <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${t.type || 'Forward Contract'}</span>
          </td>
          <td class="py-2 px-3 font-mono font-bold text-xs text-[#00A4B7]">${t.refNo || '-'}</td>
          <td class="py-2 px-3 font-mono text-xs text-[#172B4D]">${t.bankRefNo || '-'}</td>
          <td class="py-2 px-3 font-mono font-bold text-xs text-[#172B4D] text-right">$${Number(t.utilizedValue || 0).toLocaleString('en-US')}</td>
          <td class="py-2 px-3 text-xs text-[#5E6C84] whitespace-nowrap">${t.utilizedDate || '-'}</td>
          <td class="py-2 px-3 font-mono text-xs font-semibold text-[#5E6C84] text-right">₹${Number(t.rate || 0).toFixed(2)}</td>
          <td class="py-2 px-3 font-mono font-extrabold text-xs text-[#006644] text-right">₹${Number(t.utilizedInr || 0).toLocaleString('en-IN')}</td>
          <td class="py-2 px-3 text-center">
            <button type="button" class="btn-del-col-trans dt-action-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#FFEBE6] border border-[#CBD5E1] hover:border-[#DE350B] rounded-full text-[#DE350B] transition-colors cursor-pointer" data-index="${idx}" title="Delete Transaction">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');
    };

    Modal.open({
      title: `Collections — ${row.invNo || row.invoiceNo || row.id} (${row.consigneeName || row.buyerName || 'Devi Fisheries'})`,
      size: 'xl',
      content: `
        <form id="form-collection-payment" class="space-y-4 text-xs animate-fade-in">
          <!-- Section 1: COLLECTIONS — Form Input Fields (Top Section) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Invoice &amp; Logistics Details</h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <!-- 1. BL DATE -->
              <div>
                <label for="col-top-bldate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  BL DATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="date" id="col-top-bldate" required value="${initialBlDate}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- 2. ETA POD -->
              <div>
                <label for="col-top-etapod" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  ETA POD <span class="text-[#DE350B]">*</span>
                </label>
                <input type="date" id="col-top-etapod" required value="${initialEtaPod}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- 3. INVOICE VALUE -->
              <div>
                <label for="col-top-invvalue" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  INVOICE VALUE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="number" id="col-top-invvalue" required value="${initialInvoiceVal}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 4. SHORT FALL -->
              <div>
                <label for="col-top-shortfall" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  SHORT FALL
                </label>
                <input type="number" id="col-top-shortfall" value="${initialShortFall}" placeholder="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 5. COLLECTION RATE -->
              <div>
                <label for="col-top-rate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  COLLECTION RATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="number" step="0.0001" id="col-top-rate" required value="${initialCollRate}" placeholder="84.25" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 6. DUE DATE -->
              <div>
                <label for="col-top-duedate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  DUE DATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="date" id="col-top-duedate" required value="${initialDueDate}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- 7. BANK CHARGES -->
              <div>
                <label for="col-top-charges" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  BANK CHARGES ($)
                </label>
                <input type="number" id="col-top-charges" value="${initialCharges}" placeholder="120" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 8. OTHER AMOUNT(DEDUCTIONS) -->
              <div>
                <label for="col-top-deductions" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  OTHER AMOUNT(DEDUCTIONS)
                </label>
                <input type="number" id="col-top-deductions" value="${initialOtherDeductions}" placeholder="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 9. EXTRA AMOUNT -->
              <div>
                <label for="col-top-extra" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  EXTRA AMOUNT
                </label>
                <input type="number" id="col-top-extra" value="${initialExtra}" placeholder="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 10. COMMENTS -->
              <div class="col-span-1 sm:col-span-2 md:col-span-3">
                <label for="col-top-comments" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  COMMENTS
                </label>
                <input type="text" id="col-top-comments" value="${initialComments}" placeholder="e.g. Cleared into EEFC" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 2: COLLECTIONS — Form Input Fields (Payment Section) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Payment &amp; Settlement Details</h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <!-- 1. PAYMENT MODE -->
              <div>
                <label for="col-pay-mode" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  PAYMENT MODE <span class="text-[#DE350B]">*</span>
                </label>
                <select id="col-pay-mode" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  ${paymentModes.map(m => `<option value="${m}">${m}</option>`).join('')}
                </select>
              </div>

              <!-- 2. FORWARD CONTRACT NUMBER -->
              <div>
                <label for="col-pay-fwdno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  FORWARD CONTRACT NUMBER
                </label>
                <select id="col-pay-fwdno" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
                  <option value="N/A (Spot / Wire)">N/A (Spot / Wire)</option>
                  ${forwardContractOptions.map(f => `<option value="${f}" ${f === (row.contractNo || 'FWD-2026-081') ? 'selected' : ''}>${f}</option>`).join('')}
                </select>
              </div>

              <!-- 3. BANK REF NO -->
              <div>
                <label for="col-pay-bankref" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  BANK REF NO <span class="text-[#DE350B]">*</span>
                </label>
                <input type="text" id="col-pay-bankref" value="${row.bankRefNo || 'BRN-CITI-88201'}" placeholder="e.g. BRN-CITI-88201" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 4. COLLECTION/NEGOTIATION DATE -->
              <div>
                <label for="col-pay-negdate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  COLLECTION/NEGOTIATION DATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="date" id="col-pay-negdate" value="${toDateInputVal(row.remittanceDate) || '2026-10-22'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- 5. UTILIZED VALUE $ -->
              <div>
                <label for="col-pay-utilized" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  UTILIZED VALUE $ <span class="text-[#DE350B]">*</span>
                </label>
                <input type="number" id="col-pay-utilized" value="${calcRemainingBalance() > 0 ? calcRemainingBalance() : initialInvoiceVal}" placeholder="e.g. 50000" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 6. UTILIZED DATE -->
              <div>
                <label for="col-pay-utilized-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  UTILIZED DATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="date" id="col-pay-utilized-date" value="${toDateInputVal(row.remittanceDate) || '2026-10-22'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- 7. SPOT RATE -->
              <div>
                <label for="col-pay-spotrate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  SPOT RATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="number" step="0.0001" id="col-pay-spotrate" value="83.95" placeholder="83.95" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 8. BALANCE -->
              <div>
                <label for="col-pay-balance" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  BALANCE ($)
                </label>
                <input type="number" readonly id="col-pay-balance" value="${calcRemainingBalance()}" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded font-mono font-extrabold text-[#00A4B7] focus:outline-none shadow-2xs">
              </div>

              <!-- 9. VALUE INR -->
              <div class="col-span-1 sm:col-span-2 md:col-span-2">
                <label for="col-pay-valueinr" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  VALUE INR (₹)
                </label>
                <input type="number" readonly id="col-pay-valueinr" value="${Math.round((calcRemainingBalance() > 0 ? calcRemainingBalance() : initialInvoiceVal) * 83.95)}" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded font-mono font-extrabold text-[#006644] focus:outline-none shadow-2xs">
              </div>
            </div>

            <!-- Add Transaction Button below VALUE INR -->
            <div class="pt-3 flex justify-end">
              <button type="button" id="btn-add-trans-row" class="btn-primary px-5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                <span>Update</span>
              </button>
            </div>
          </div>

          <!-- Section 3: COLLECTIONS — Transaction Table Columns -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-2 mb-3">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">3</span>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Transaction Records</h4>
              </div>
              <span id="trans-count-badge" class="text-[11px] text-[#5E6C84] font-semibold">${transactions.length} record(s)</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-[#F8FAFC] text-[#5E6C84] font-bold uppercase tracking-wider text-[10px] border-b border-[#DFE1E6]">
                    <th class="py-2 px-3">Transaction Type</th>
                    <th class="py-2 px-3">Transaction Ref.No</th>
                    <th class="py-2 px-3">Bank Ref.No</th>
                    <th class="py-2 px-3 text-right">Utilised Value</th>
                    <th class="py-2 px-3">Utilized Date</th>
                    <th class="py-2 px-3 text-right">Rate</th>
                    <th class="py-2 px-3 text-right">Utilized in INR</th>
                    <th class="py-2 px-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody id="collection-trans-tbody">
                  ${renderTransRows()}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Modal Action Buttons Footer -->
          <div class="flex items-center justify-end gap-2 pt-3 border-t border-[#F1F5F9]">
            <button type="button" id="btn-cancel-col-payment" class="btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer">
              Cancel
            </button>
            <button type="submit" class="btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
              Save Collection
            </button>
          </div>
        </form>
      `
    });

    // Handle real-time calculation of VALUE INR = UTILIZED VALUE $ * SPOT RATE
    const utilInput = document.getElementById('col-pay-utilized');
    const spotInput = document.getElementById('col-pay-spotrate');
    const inrInput = document.getElementById('col-pay-valueinr');
    const balInput = document.getElementById('col-pay-balance');
    const invInput = document.getElementById('col-top-invvalue');

    const updateInrVal = () => {
      const u = parseFloat(utilInput?.value) || 0;
      const s = parseFloat(spotInput?.value) || 0;
      if (inrInput) inrInput.value = Math.round(u * s);
    };

    utilInput?.addEventListener('input', updateInrVal);
    spotInput?.addEventListener('input', updateInrVal);

    const refreshBalanceAndHero = () => {
      const totUtil = calcTotalUtilized();
      const currentInv = parseFloat(invInput?.value) || initialInvoiceVal;
      const rem = Math.max(0, currentInv - totUtil);

      if (balInput) balInput.value = rem;
      const heroUtil = document.getElementById('hero-total-utilized');
      const heroBal = document.getElementById('hero-rem-balance');
      if (heroUtil) heroUtil.textContent = '$' + totUtil.toLocaleString('en-US');
      if (heroBal) heroBal.textContent = '$' + rem.toLocaleString('en-US');

      const tbody = document.getElementById('collection-trans-tbody');
      if (tbody) tbody.innerHTML = renderTransRows();

      const countBadge = document.getElementById('trans-count-badge');
      if (countBadge) countBadge.textContent = `${transactions.length} record(s)`;

      bindDeleteButtons();
    };

    const bindDeleteButtons = () => {
      const tbody = document.getElementById('collection-trans-tbody');
      tbody?.querySelectorAll('.btn-del-col-trans').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          if (!isNaN(idx)) {
            transactions.splice(idx, 1);
            refreshBalanceAndHero();
            Toast.show('Transaction deleted', 'info');
          }
        });
      });
    };

    bindDeleteButtons();

    // Add Transaction button
    document.getElementById('btn-add-trans-row')?.addEventListener('click', () => {
      const mode = document.getElementById('col-pay-mode')?.value || 'Forward Contract';
      const fwdNo = document.getElementById('col-pay-fwdno')?.value || 'N/A';
      const bankRef = document.getElementById('col-pay-bankref')?.value?.trim() || row.bankRefNo || '-';
      const uVal = parseFloat(utilInput?.value) || 0;
      const uDate = document.getElementById('col-pay-utilized-date')?.value || new Date().toISOString().split('T')[0];
      const rate = parseFloat(spotInput?.value) || 83.95;
      const uInr = Math.round(uVal * rate);

      if (uVal <= 0) {
        Toast.show('Please enter a valid Utilized Value ($)', 'error');
        return;
      }

      transactions.push({
        type: mode,
        refNo: (mode === 'Forward Contract' && fwdNo !== 'N/A (Spot / Wire)') ? fwdNo : (fwdNo !== 'N/A (Spot / Wire)' ? fwdNo : (bankRef || 'TRX-' + Date.now())),
        bankRefNo: bankRef,
        utilizedValue: uVal,
        utilizedDate: uDate,
        rate,
        utilizedInr: uInr
      });

      refreshBalanceAndHero();
      Toast.show(`Added transaction of $${uVal.toLocaleString('en-US')}`, 'success');

      // Update next default utilized value to remaining balance
      const rem = calcRemainingBalance();
      if (utilInput) utilInput.value = rem > 0 ? rem : 0;
      updateInrVal();
    });

    // Cancel Button
    document.getElementById('btn-cancel-col-payment')?.addEventListener('click', () => {
      Modal.close();
    });

    // Form Submit
    document.getElementById('form-collection-payment')?.addEventListener('submit', (e) => {
      e.preventDefault();

      const blDate = document.getElementById('col-top-bldate')?.value || '';
      const etaPod = document.getElementById('col-top-etapod')?.value || '';
      const invoiceVal = parseFloat(document.getElementById('col-top-invvalue')?.value) || row.billAmount || 0;
      const shortFall = parseFloat(document.getElementById('col-top-shortfall')?.value) || 0;
      const collRate = parseFloat(document.getElementById('col-top-rate')?.value) || 84.25;
      const dueDate = document.getElementById('col-top-duedate')?.value || '';
      const bankCharges = parseFloat(document.getElementById('col-top-charges')?.value) || 0;
      const otherDeductions = parseFloat(document.getElementById('col-top-deductions')?.value) || 0;
      const extraAmount = parseFloat(document.getElementById('col-top-extra')?.value) || 0;
      const comments = document.getElementById('col-top-comments')?.value?.trim() || '';

      const totalUtil = calcTotalUtilized();
      const remBal = Math.max(0, invoiceVal - totalUtil);
      const newStatus = totalUtil >= invoiceVal ? 'RECEIVED_CREDITED' : (totalUtil > 0 ? 'PARTIALLY_COLLECTED' : 'PENDING_COLLECTION');

      const targetIdx = this.state.collections.findIndex(item => (item.id === row.id || item.collectionRef === row.collectionRef));
      if (targetIdx !== -1) {
        this.state.collections[targetIdx] = {
          ...this.state.collections[targetIdx],
          blDate,
          etaPod,
          billAmount: invoiceVal,
          shortFall,
          collectionRate: collRate,
          dueDate,
          bankCharges,
          otherDeductions,
          extraAmount,
          remarks: comments,
          comments,
          amountCollected: totalUtil,
          netReceived: Math.max(0, totalUtil - bankCharges),
          balanceUsd: remBal,
          status: newStatus,
          transactions: [...transactions]
        };
      }

      Modal.close();
      Toast.show(`Collection ${row.invNo || row.invoiceNo || row.id} saved successfully`, 'success');

      if (typeof onSaved === 'function') {
        onSaved();
      }
    });
  },

  // Payments Tab 3: Export Bill Negotiations (Bank LC Discounting)
  renderNegotiations(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title Header (Strictly clean H1 per AGENTS.md Rule 2, no subheadings) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Export Bill Negotiations</h1>
          </div>
        </div>

        <!-- NEGOTIATIONS LIST — Filter Fields -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="neg-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="neg-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="neg-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- 1. Select Year -->
            <div>
              <label for="neg-flt-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Year</label>
              <select id="neg-flt-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Years</option>
                <option value="2026-2027" selected>2026-2027</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>

            <!-- 2. Select Exporter -->
            <div>
              <label for="neg-flt-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Exporter</label>
              <select id="neg-flt-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Aqua Feeds">Devi Aqua Feeds</option>
              </select>
            </div>

            <!-- 3. Select Consignee -->
            <div>
              <label for="neg-flt-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Consignee</label>
              <select id="neg-flt-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Consignees</option>
                <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC</option>
                <option value="Sysco Corporation International">Sysco Corporation International</option>
                <option value="Royal Greenland Seafood A/S">Royal Greenland Seafood A/S</option>
                <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation</option>
                <option value="Ocean Prime Foods Canada">Ocean Prime Foods Canada</option>
                <option value="Pescanova Espana S.A.">Pescanova Espana S.A.</option>
              </select>
            </div>

            <!-- 4. Select Country -->
            <div>
              <label for="neg-flt-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Country</label>
              <select id="neg-flt-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Countries</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
                <option value="Denmark">Denmark</option>
                <option value="Canada">Canada</option>
                <option value="Spain">Spain</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <!-- 5. Invoice Status -->
            <div>
              <label for="neg-flt-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Invoice Status</label>
              <select id="neg-flt-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Statuses</option>
                <option value="Clean Docs Accepted">Clean Docs Accepted</option>
                <option value="Discounted & Credited">Discounted &amp; Credited</option>
                <option value="Discrepant Under Waiver">Discrepant Under Waiver</option>
                <option value="Pending Lodgement">Pending Lodgement</option>
              </select>
            </div>

            <!-- Mandatory Search Button -->
            <div class="flex items-end">
              <button type="button" id="neg-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="neg-table-container"></div>
      </div>
    `;

    // Toggle filter body
    const toggleBtn = container.querySelector('#neg-flt-toggle-btn');
    const filterBody = container.querySelector('#neg-flt-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render Table function
    const renderTable = (currentData) => {
      new DataTable({
        containerId: 'neg-table-container',
        data: currentData,
        keyField: 'id',
        tableTitle: 'Negotiations List',
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.openNegotiationPaymentModal(row, () => renderTable(this.state.negotiations)),
        columns: [
          {
            field: 'sNo',
            header: 'S.No',
            render: (v, r, idx) => `<span class="font-bold text-[#172B4D]">${v || (idx + 1)}</span>`
          },
          {
            field: 'id',
            header: 'ID',
            render: (v, r) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v || r.negotiationNo || '-'}</span>`
          },
          {
            field: 'invNo',
            header: 'InvNo',
            render: (v, r) => `<span class="font-mono font-semibold text-xs text-[#172B4D]">${v || r.invoiceNo || '-'}</span>`
          },
          {
            field: 'poNo',
            header: 'Po No.',
            render: (v, r) => `<span class="font-mono text-xs text-[#5E6C84]">${v || r.contractNo || '-'}</span>`
          },
          {
            field: 'consigneeName',
            header: 'Consignee Name',
            render: (v, r) => `<span class="font-bold text-xs text-[#172B4D]">${v || r.buyerName || '-'}</span>`
          },
          {
            field: 'bankRefNo',
            header: 'Bank Ref No',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'invoiceStatus',
            header: 'Invoice Status',
            render: (v, r) => {
              const s = String(v || r.status || '').toUpperCase();
              let cls = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
              let label = v || r.status || 'Active';
              if (s.includes('CLEAN') || s.includes('ACCEPTED') || s.includes('DISCOUNTED') || s.includes('CREDITED')) {
                cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              } else if (s.includes('DISCREPANT') || s.includes('WAIVER') || s.includes('PARTIAL')) {
                cls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
              } else if (s.includes('PENDING') || s.includes('LODGED') || s.includes('SCRUTINY')) {
                cls = 'bg-[#E0F2FE] text-[#00A4B7] border-[#BAE6FD]';
              }
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase whitespace-nowrap">${label}</span>`;
            }
          },
          {
            field: 'actions',
            header: 'Actions',
            render: (v, row) => `
              <div class="flex items-center justify-center">
                <button type="button" class="btn-edit-neg-trans dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] rounded-full text-[#00A4B7] transition-colors cursor-pointer" data-id="${row.id || row.negotiationNo}" title="Edit Negotiation & Payments">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                </button>
              </div>
            `
          }
        ]
      });

      // Attach Edit Icon Event Listener
      const tableWrapper = document.getElementById('neg-table-container');
      if (tableWrapper) {
        tableWrapper.querySelectorAll('.btn-edit-neg-trans').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.getAttribute('data-id');
            const targetRow = this.state.negotiations.find(item => (item.id === id || item.negotiationNo === id));
            if (targetRow) {
              this.openNegotiationPaymentModal(targetRow, () => renderTable(this.state.negotiations));
            }
          });
        });
      }
    };

    renderTable(this.state.negotiations);

    // Search and Reset filters handlers
    const searchBtn = container.querySelector('#neg-flt-search-btn');
    const resetBtn = container.querySelector('#neg-flt-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const yearVal = container.querySelector('#neg-flt-year')?.value || 'All';
      const expVal = container.querySelector('#neg-flt-exporter')?.value || 'All';
      const consVal = container.querySelector('#neg-flt-consignee')?.value || 'All';
      const countryVal = container.querySelector('#neg-flt-country')?.value || 'All';
      const statusVal = container.querySelector('#neg-flt-status')?.value || 'All';

      let filtered = [...this.state.negotiations];

      if (yearVal !== 'All') {
        filtered = filtered.filter(item => item.year === yearVal);
      }
      if (expVal !== 'All') {
        filtered = filtered.filter(item => (item.exporter || '').toLowerCase().includes(expVal.toLowerCase()));
      }
      if (consVal !== 'All') {
        filtered = filtered.filter(item => (item.consigneeName || item.buyerName || '').toLowerCase().includes(consVal.toLowerCase()));
      }
      if (countryVal !== 'All') {
        filtered = filtered.filter(item => (item.country || '').toLowerCase() === countryVal.toLowerCase());
      }
      if (statusVal !== 'All') {
        filtered = filtered.filter(item => (item.invoiceStatus === statusVal || item.status === statusVal));
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} negotiations`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      const yearEl = container.querySelector('#neg-flt-year');
      const expEl = container.querySelector('#neg-flt-exporter');
      const consEl = container.querySelector('#neg-flt-consignee');
      const countryEl = container.querySelector('#neg-flt-country');
      const statusEl = container.querySelector('#neg-flt-status');

      if (yearEl) yearEl.value = 'All';
      if (expEl) expEl.value = 'All';
      if (consEl) consEl.value = 'All';
      if (countryEl) countryEl.value = 'All';
      if (statusEl) statusEl.value = 'All';

      renderTable(this.state.negotiations);
      Toast.show('Filters reset', 'info');
    });
  },

  // Modal: Edit Negotiation & Payment Tranches
  openNegotiationPaymentModal(row, onSaved = null) {
    if (!row) return;

    if (!Array.isArray(row.transactions)) {
      row.transactions = (row.billAmount || row.billValueUsd) ? [
        {
          type: 'Forward Contract',
          refNo: row.contractNo || 'FWD-2026-081',
          bankRefNo: row.bankRefNo || 'BRN-CITI-99201',
          utilizedValue: Number(row.billAmount || row.billValueUsd || 159300),
          utilizedDate: row.remittanceDate || row.submissionDate || '2026-10-22',
          rate: Number(row.collectionRate || 84.65),
          utilizedInr: Math.round(Number(row.billAmount || row.billValueUsd || 159300) * Number(row.collectionRate || 84.65))
        }
      ] : [];
    }

    let transactions = [...row.transactions];

    const toDateInputVal = (dStr) => {
      if (!dStr) return '';
      if (dStr.includes('/')) {
        const parts = dStr.split('/');
        if (parts.length === 3) return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
      }
      return dStr;
    };

    const initialBlDate = toDateInputVal(row.blDate) || '2026-10-10';
    const initialEtaPod = toDateInputVal(row.etaPod) || '2026-11-18';
    const initialInvoiceVal = Number(row.billAmount || row.billValueUsd || 159300);
    const initialShortFall = Number(row.shortFall || 0);
    const initialCollRate = Number(row.collectionRate || 84.65);
    const initialDueDate = toDateInputVal(row.dueDate) || '2026-11-25';
    const initialCharges = Number(row.bankCharges ?? 150);
    const initialOtherDeductions = Number(row.otherDeductions || 0);
    const initialExtra = Number(row.extraAmount || 0);
    const initialComments = row.remarks || row.comments || 'LC discounted & credited by negotiating bank';

    const forwardContractOptions = (this.state.forwardContracts || []).map(f => f.contractNo);
    if (!forwardContractOptions.includes('FWD-2026-081')) forwardContractOptions.unshift('FWD-2026-081');

    const paymentModes = [
      'Forward Contract',
      'Spot Rate TT',
      'LC Negotiation Proceeds',
      'CAD Advance Wire',
      'Direct Bank Remittance'
    ];

    const calcTotalUtilized = () => transactions.reduce((acc, t) => acc + (Number(t.utilizedValue) || 0), 0);
    const calcRemainingBalance = () => {
      const invVal = Number(document.getElementById('neg-top-invvalue')?.value) || initialInvoiceVal;
      return Math.max(0, invVal - calcTotalUtilized());
    };

    const renderTransRows = () => {
      if (transactions.length === 0) {
        return `<tr><td colspan="8" class="text-center py-4 text-xs text-[#5E6C84]">No transactions recorded yet. Fill the Payment Section above and click "Update".</td></tr>`;
      }
      return transactions.map((t, idx) => `
        <tr class="border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2 px-3">
            <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${t.type || 'Forward Contract'}</span>
          </td>
          <td class="py-2 px-3 font-mono font-bold text-xs text-[#00A4B7]">${t.refNo || '-'}</td>
          <td class="py-2 px-3 font-mono text-xs text-[#172B4D]">${t.bankRefNo || '-'}</td>
          <td class="py-2 px-3 font-mono font-bold text-xs text-[#172B4D] text-right">$${Number(t.utilizedValue || 0).toLocaleString('en-US')}</td>
          <td class="py-2 px-3 text-xs text-[#5E6C84] whitespace-nowrap">${t.utilizedDate || '-'}</td>
          <td class="py-2 px-3 font-mono text-xs font-semibold text-[#5E6C84] text-right">₹${Number(t.rate || 0).toFixed(2)}</td>
          <td class="py-2 px-3 font-mono font-extrabold text-xs text-[#006644] text-right">₹${Number(t.utilizedInr || 0).toLocaleString('en-IN')}</td>
          <td class="py-2 px-3 text-center">
            <button type="button" class="btn-del-neg-trans dt-action-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#FFEBE6] border border-[#CBD5E1] hover:border-[#DE350B] rounded-full text-[#DE350B] transition-colors cursor-pointer" data-index="${idx}" title="Delete Transaction">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');
    };

    Modal.open({
      title: `Negotiations — ${row.invNo || row.invoiceNo || row.id} (${row.consigneeName || row.buyerName || 'Devi Fisheries'})`,
      size: 'xl',
      content: `
        <form id="form-negotiation-payment" class="space-y-4 text-xs animate-fade-in">
          <!-- Section 1: NEGOTIATIONS — Form Input Fields (Top Section) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Invoice &amp; Logistics Details</h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <!-- 1. BL DATE -->
              <div>
                <label for="neg-top-bldate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  BL DATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="date" id="neg-top-bldate" required value="${initialBlDate}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- 2. ETA POD -->
              <div>
                <label for="neg-top-etapod" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  ETA POD <span class="text-[#DE350B]">*</span>
                </label>
                <input type="date" id="neg-top-etapod" required value="${initialEtaPod}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- 3. INVOICE VALUE -->
              <div>
                <label for="neg-top-invvalue" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  INVOICE VALUE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="number" id="neg-top-invvalue" required value="${initialInvoiceVal}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 4. SHORT FALL -->
              <div>
                <label for="neg-top-shortfall" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  SHORT FALL
                </label>
                <input type="number" id="neg-top-shortfall" value="${initialShortFall}" placeholder="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 5. COLLECTION RATE -->
              <div>
                <label for="neg-top-rate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  COLLECTION RATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="number" step="0.0001" id="neg-top-rate" required value="${initialCollRate}" placeholder="84.65" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 6. DUE DATE -->
              <div>
                <label for="neg-top-duedate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  DUE DATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="date" id="neg-top-duedate" required value="${initialDueDate}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- 7. BANK CHARGES -->
              <div>
                <label for="neg-top-charges" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  BANK CHARGES ($)
                </label>
                <input type="number" id="neg-top-charges" value="${initialCharges}" placeholder="150" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 8. OTHER AMOUNT(DEDUCTIONS) -->
              <div>
                <label for="neg-top-deductions" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  OTHER AMOUNT(DEDUCTIONS)
                </label>
                <input type="number" id="neg-top-deductions" value="${initialOtherDeductions}" placeholder="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 9. EXTRA AMOUNT -->
              <div>
                <label for="neg-top-extra" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  EXTRA AMOUNT
                </label>
                <input type="number" id="neg-top-extra" value="${initialExtra}" placeholder="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 10. COMMENTS -->
              <div class="col-span-1 sm:col-span-2 md:col-span-3">
                <label for="neg-top-comments" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  COMMENTS
                </label>
                <input type="text" id="neg-top-comments" value="${initialComments}" placeholder="e.g. LC discounted & credited by SBI" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 2: NEGOTIATIONS — Form Input Fields (Payment Section) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Payment &amp; Settlement Details</h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <!-- 1. PAYMENT MODE -->
              <div>
                <label for="neg-pay-mode" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  PAYMENT MODE <span class="text-[#DE350B]">*</span>
                </label>
                <select id="neg-pay-mode" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  ${paymentModes.map(m => `<option value="${m}">${m}</option>`).join('')}
                </select>
              </div>

              <!-- 2. FORWARD CONTRACT NUMBER -->
              <div>
                <label for="neg-pay-fwdno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  FORWARD CONTRACT NUMBER
                </label>
                <select id="neg-pay-fwdno" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
                  <option value="N/A (Spot / Wire)">N/A (Spot / Wire)</option>
                  ${forwardContractOptions.map(f => `<option value="${f}" ${f === (row.contractNo || 'FWD-2026-081') ? 'selected' : ''}>${f}</option>`).join('')}
                </select>
              </div>

              <!-- 3. BANK REF NO -->
              <div>
                <label for="neg-pay-bankref" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  BANK REF NO <span class="text-[#DE350B]">*</span>
                </label>
                <input type="text" id="neg-pay-bankref" value="${row.bankRefNo || 'BRN-CITI-99201'}" placeholder="e.g. BRN-CITI-99201" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 4. COLLECTION/NEGOTIATION DATE -->
              <div>
                <label for="neg-pay-negdate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  COLLECTION/NEGOTIATION DATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="date" id="neg-pay-negdate" value="${toDateInputVal(row.remittanceDate || row.submissionDate) || '2026-10-22'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- 5. UTILIZED VALUE $ -->
              <div>
                <label for="neg-pay-utilized" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  UTILIZED VALUE $ <span class="text-[#DE350B]">*</span>
                </label>
                <input type="number" id="neg-pay-utilized" value="${calcRemainingBalance() > 0 ? calcRemainingBalance() : initialInvoiceVal}" placeholder="e.g. 50000" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 6. UTILIZED DATE -->
              <div>
                <label for="neg-pay-utilized-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  UTILIZED DATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="date" id="neg-pay-utilized-date" value="${toDateInputVal(row.remittanceDate || row.submissionDate) || '2026-10-22'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- 7. SPOT RATE -->
              <div>
                <label for="neg-pay-spotrate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  SPOT RATE <span class="text-[#DE350B]">*</span>
                </label>
                <input type="number" step="0.0001" id="neg-pay-spotrate" value="84.65" placeholder="84.65" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
              </div>

              <!-- 8. BALANCE -->
              <div>
                <label for="neg-pay-balance" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  BALANCE ($)
                </label>
                <input type="number" readonly id="neg-pay-balance" value="${calcRemainingBalance()}" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded font-mono font-extrabold text-[#00A4B7] focus:outline-none shadow-2xs">
              </div>

              <!-- 9. VALUE INR -->
              <div class="col-span-1 sm:col-span-2 md:col-span-2">
                <label for="neg-pay-valueinr" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  VALUE INR (₹)
                </label>
                <input type="number" readonly id="neg-pay-valueinr" value="${Math.round((calcRemainingBalance() > 0 ? calcRemainingBalance() : initialInvoiceVal) * 84.65)}" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded font-mono font-extrabold text-[#006644] focus:outline-none shadow-2xs">
              </div>
            </div>

            <!-- Add Transaction Button below VALUE INR, aligned to right side -->
            <div class="pt-3 flex justify-end">
              <button type="button" id="btn-add-neg-trans-row" class="btn-primary px-5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                <span>Update</span>
              </button>
            </div>
          </div>

          <!-- Section 3: NEGOTIATIONS — Transaction Table Columns -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-2 mb-3">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">3</span>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Transaction Records</h4>
              </div>
              <span id="neg-trans-count-badge" class="text-[11px] text-[#5E6C84] font-semibold">${transactions.length} record(s)</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-[#F8FAFC] text-[#5E6C84] font-bold uppercase tracking-wider text-[10px] border-b border-[#DFE1E6]">
                    <th class="py-2 px-3">Transaction Type</th>
                    <th class="py-2 px-3">Transaction Ref.No</th>
                    <th class="py-2 px-3">Bank Ref.No</th>
                    <th class="py-2 px-3 text-right">Utilised Value</th>
                    <th class="py-2 px-3">Utilized Date</th>
                    <th class="py-2 px-3 text-right">Rate</th>
                    <th class="py-2 px-3 text-right">Utilized in INR</th>
                    <th class="py-2 px-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody id="neg-trans-tbody">
                  ${renderTransRows()}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Modal Action Buttons Footer -->
          <div class="flex items-center justify-end gap-2 pt-3 border-t border-[#F1F5F9]">
            <button type="button" id="btn-cancel-neg-modal" class="btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer">
              Cancel
            </button>
            <button type="submit" class="btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
              Save Negotiation
            </button>
          </div>
        </form>
      `
    });

    // Real-time calculation of VALUE INR = UTILIZED VALUE $ * SPOT RATE
    const utilInput = document.getElementById('neg-pay-utilized');
    const spotInput = document.getElementById('neg-pay-spotrate');
    const inrInput = document.getElementById('neg-pay-valueinr');
    const balInput = document.getElementById('neg-pay-balance');
    const invInput = document.getElementById('neg-top-invvalue');

    const updateInrVal = () => {
      const u = parseFloat(utilInput?.value) || 0;
      const s = parseFloat(spotInput?.value) || 0;
      if (inrInput) inrInput.value = Math.round(u * s);
    };

    utilInput?.addEventListener('input', updateInrVal);
    spotInput?.addEventListener('input', updateInrVal);

    const refreshBalance = () => {
      const totUtil = calcTotalUtilized();
      const currentInv = parseFloat(invInput?.value) || initialInvoiceVal;
      const rem = Math.max(0, currentInv - totUtil);

      if (balInput) balInput.value = rem;

      const tbody = document.getElementById('neg-trans-tbody');
      if (tbody) tbody.innerHTML = renderTransRows();

      const countBadge = document.getElementById('neg-trans-count-badge');
      if (countBadge) countBadge.textContent = `${transactions.length} record(s)`;

      bindDeleteButtons();
    };

    const bindDeleteButtons = () => {
      const tbody = document.getElementById('neg-trans-tbody');
      tbody?.querySelectorAll('.btn-del-neg-trans').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          if (!isNaN(idx)) {
            transactions.splice(idx, 1);
            refreshBalance();
            Toast.show('Transaction deleted', 'info');
          }
        });
      });
    };

    bindDeleteButtons();

    // Add Transaction button
    document.getElementById('btn-add-neg-trans-row')?.addEventListener('click', () => {
      const mode = document.getElementById('neg-pay-mode')?.value || 'Forward Contract';
      const fwdNo = document.getElementById('neg-pay-fwdno')?.value || 'N/A';
      const bankRef = document.getElementById('neg-pay-bankref')?.value?.trim() || row.bankRefNo || '-';
      const uVal = parseFloat(utilInput?.value) || 0;
      const uDate = document.getElementById('neg-pay-utilized-date')?.value || new Date().toISOString().split('T')[0];
      const rate = parseFloat(spotInput?.value) || 84.65;
      const uInr = Math.round(uVal * rate);

      if (uVal <= 0) {
        Toast.show('Please enter a valid Utilized Value ($)', 'error');
        return;
      }

      transactions.push({
        type: mode,
        refNo: (mode === 'Forward Contract' && fwdNo !== 'N/A (Spot / Wire)') ? fwdNo : (fwdNo !== 'N/A (Spot / Wire)' ? fwdNo : (bankRef || 'TRX-' + Date.now())),
        bankRefNo: bankRef,
        utilizedValue: uVal,
        utilizedDate: uDate,
        rate,
        utilizedInr: uInr
      });

      refreshBalance();
      Toast.show(`Added transaction of $${uVal.toLocaleString('en-US')}`, 'success');

      const rem = calcRemainingBalance();
      if (utilInput) utilInput.value = rem > 0 ? rem : 0;
      updateInrVal();
    });

    // Cancel Button
    document.getElementById('btn-cancel-neg-modal')?.addEventListener('click', () => {
      Modal.close();
    });

    // Form Submit
    document.getElementById('form-negotiation-payment')?.addEventListener('submit', (e) => {
      e.preventDefault();

      const blDate = document.getElementById('neg-top-bldate')?.value || '';
      const etaPod = document.getElementById('neg-top-etapod')?.value || '';
      const invoiceVal = parseFloat(document.getElementById('neg-top-invvalue')?.value) || row.billAmount || 0;
      const shortFall = parseFloat(document.getElementById('neg-top-shortfall')?.value) || 0;
      const collRate = parseFloat(document.getElementById('neg-top-rate')?.value) || 84.65;
      const dueDate = document.getElementById('neg-top-duedate')?.value || '';
      const bankCharges = parseFloat(document.getElementById('neg-top-charges')?.value) || 0;
      const otherDeductions = parseFloat(document.getElementById('neg-top-deductions')?.value) || 0;
      const extraAmount = parseFloat(document.getElementById('neg-top-extra')?.value) || 0;
      const comments = document.getElementById('neg-top-comments')?.value?.trim() || '';

      const totalUtil = calcTotalUtilized();
      const remBal = Math.max(0, invoiceVal - totalUtil);
      const newStatus = totalUtil >= invoiceVal ? 'Discounted & Credited' : (totalUtil > 0 ? 'Discrepant Under Waiver' : 'Pending Lodgement');

      const targetIdx = this.state.negotiations.findIndex(item => (item.id === row.id || item.negotiationNo === row.negotiationNo));
      if (targetIdx !== -1) {
        this.state.negotiations[targetIdx] = {
          ...this.state.negotiations[targetIdx],
          blDate,
          etaPod,
          billAmount: invoiceVal,
          billValueUsd: invoiceVal,
          shortFall,
          collectionRate: collRate,
          dueDate,
          bankCharges,
          otherDeductions,
          extraAmount,
          remarks: comments,
          comments,
          amountCollected: totalUtil,
          netReceived: Math.max(0, totalUtil - bankCharges),
          balanceUsd: remBal,
          invoiceStatus: newStatus,
          status: newStatus,
          transactions: [...transactions]
        };
      }

      Modal.close();
      Toast.show(`Negotiation ${row.invNo || row.invoiceNo || row.id} saved successfully`, 'success');

      if (typeof onSaved === 'function') {
        onSaved();
      }
    });
  },

  // Payments Tab 4: Realization
  renderRealization(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title (Strictly clean H1 per AGENTS.md Rule 2) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Export Realization</h1>
          </div>
        </div>

        <!-- Search & Filters Card (Strictly 4-column per design system) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="real-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="real-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="real-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- 1. Select Year -->
            <div>
              <label for="real-flt-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Year</label>
              <select id="real-flt-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Years</option>
                <option value="2026-2027" selected>2026-2027</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>

            <!-- 2. Select Exporter -->
            <div>
              <label for="real-flt-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Exporter</label>
              <select id="real-flt-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Aqua Feeds">Devi Aqua Feeds</option>
              </select>
            </div>

            <!-- 3. Select Consignee -->
            <div>
              <label for="real-flt-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Consignee</label>
              <select id="real-flt-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Consignees</option>
                <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC</option>
                <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation</option>
                <option value="Royal Greenland Seafood A/S">Royal Greenland Seafood A/S</option>
                <option value="Ocean Prime Foods Canada">Ocean Prime Foods Canada</option>
                <option value="Sysco Corporation International">Sysco Corporation International</option>
              </select>
            </div>

            <!-- 4. Select Country -->
            <div>
              <label for="real-flt-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Country</label>
              <select id="real-flt-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Countries</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
                <option value="Denmark">Denmark</option>
                <option value="Canada">Canada</option>
                <option value="Netherlands">Netherlands</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <!-- 5. Invoice Status -->
            <div>
              <label for="real-flt-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Invoice Status</label>
              <select id="real-flt-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Statuses</option>
                <option value="Full Realized">Full Realized</option>
                <option value="Partially Realized">Partially Realized</option>
                <option value="Pending Realization">Pending Realization</option>
              </select>
            </div>

            <!-- Mandatory Search Button -->
            <div class="flex items-end">
              <button type="button" id="real-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="real-table-container"></div>
      </div>
    `;

    // Toggle filter body
    const toggleBtn = container.querySelector('#real-flt-toggle-btn');
    const filterBody = container.querySelector('#real-flt-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render Table function
    const renderTable = (currentData) => {
      new DataTable({
        containerId: 'real-table-container',
        data: currentData,
        keyField: 'id',
        tableTitle: 'REALIZATION',
        title: 'REALIZATION',
        selectable: true,
        showSelectedCount: false,
        columns: [
          {
            field: 'sNo',
            header: 'S.No',
            sortable: false,
            render: (v, r, idx) => `<span class="text-xs font-semibold text-[#5E6C84]">${idx + 1}</span>`
          },
          {
            field: 'invoiceNo',
            header: 'Invoice No.',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v || '—'}</span>`
          },
          {
            field: 'invoiceDate',
            header: 'Invoice Date',
            sortable: true,
            render: (v) => `<span class="text-xs font-medium text-[#172B4D]">${v || '—'}</span>`
          },
          {
            field: 'transactionType',
            header: 'Transaction Type',
            sortable: true,
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${v || 'Collection'}</span>`
          },
          {
            field: 'consigneeName',
            header: 'Consignee Name',
            sortable: true,
            render: (v, r) => `<div><span class="font-bold text-[#172B4D] text-xs">${v || r.buyerName || '—'}</span>${r.country ? `<span class="text-[10px] text-[#5E6C84] block">${r.country}</span>` : ''}</div>`
          },
          {
            field: 'bankRef',
            header: 'Bank Ref',
            sortable: true,
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v || '—'}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            sortable: true,
            render: (v) => {
              const val = v || 'Pending Realization';
              let badgeCls = 'bg-[#FFEBE6] text-[#DE350B] border-[#FFBDAD]';
              if (val.includes('Full') || val.includes('FULL')) {
                badgeCls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              } else if (val.includes('Partial') || val.includes('PARTIAL')) {
                badgeCls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
              }
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${badgeCls} uppercase">${val}</span>`;
            }
          },
          {
            field: 'actions',
            header: 'Action',
            sortable: false,
            render: (v, r) => `
              <div class="flex items-center gap-1.5 justify-center">
                <button type="button" class="btn-add-real dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] rounded-full text-[#00A4B7] transition-colors cursor-pointer" data-id="${r.id || r.invoiceNo}" title="Add Realization">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                </button>
              </div>
            `
          }
        ],
        onRowClick: (row) => {
          this.openRealizationModal(row, () => {
            renderTable(this.state.realizations);
          });
        }
      });

      // Bind Add buttons in Action column
      container.querySelectorAll('.btn-add-real').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rId = btn.getAttribute('data-id');
          const rowData = this.state.realizations.find(r => r.id === rId || r.invoiceNo === rId);
          if (rowData) {
            this.openRealizationModal(rowData, () => {
              renderTable(this.state.realizations);
            });
          }
        });
      });
    };

    // Filter Logic
    const applyFilters = () => {
      const year = container.querySelector('#real-flt-year')?.value;
      const exporter = container.querySelector('#real-flt-exporter')?.value;
      const consignee = container.querySelector('#real-flt-consignee')?.value;
      const country = container.querySelector('#real-flt-country')?.value;
      const status = container.querySelector('#real-flt-status')?.value;

      let filtered = [...this.state.realizations];

      if (year && year !== 'All') {
        filtered = filtered.filter(r => r.year === year || !r.year);
      }
      if (exporter && exporter !== 'All') {
        filtered = filtered.filter(r => r.exporter === exporter || !r.exporter);
      }
      if (consignee && consignee !== 'All') {
        filtered = filtered.filter(r => (r.consigneeName || r.buyerName) === consignee);
      }
      if (country && country !== 'All') {
        filtered = filtered.filter(r => (r.country || r.destinationCountry) === country);
      }
      if (status && status !== 'All') {
        filtered = filtered.filter(r => (r.status || '') === status);
      }

      renderTable(filtered);
    };

    // Attach filter event listeners
    container.querySelector('#real-flt-search-btn')?.addEventListener('click', applyFilters);
    ['real-flt-year', 'real-flt-exporter', 'real-flt-consignee', 'real-flt-country', 'real-flt-status'].forEach(id => {
      container.querySelector('#' + id)?.addEventListener('change', applyFilters);
    });

    // Reset button
    container.querySelector('#real-flt-reset-btn')?.addEventListener('click', () => {
      const y = container.querySelector('#real-flt-year'); if (y) y.value = '2026-2027';
      const exp = container.querySelector('#real-flt-exporter'); if (exp) exp.value = 'All';
      const c = container.querySelector('#real-flt-consignee'); if (c) c.value = 'All';
      const co = container.querySelector('#real-flt-country'); if (co) co.value = 'All';
      const s = container.querySelector('#real-flt-status'); if (s) s.value = 'All';
      applyFilters();
      Toast.show('Filters reset', 'info');
    });

    // Initial render
    renderTable(this.state.realizations);
  },

  // Modal: REALIZATIONFORM - COLL REALISATION
  openRealizationModal(row, onSaved) {
    const transactions = Array.isArray(row.transactions) ? [...row.transactions] : [];

    const renderTransRows = () => {
      if (transactions.length === 0) {
        return `<tr><td colspan="8" class="text-center py-4 text-xs text-[#5E6C84]">No transactions recorded yet. Fill the sections above and click "Update".</td></tr>`;
      }
      return transactions.map((t, idx) => `
        <tr class="border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2.5 px-3 font-semibold text-[#5E6C84]">${t.sNo || (idx + 1)}</td>
          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${t.type || 'Forward Contract'}</td>
          <td class="py-2.5 px-3 font-mono font-bold text-[#00A4B7]">${t.refNo || '—'}</td>
          <td class="py-2.5 px-3 text-[#5E6C84] font-medium">${t.utilizedDate || '—'}</td>
          <td class="py-2.5 px-3 font-mono font-bold text-[#172B4D] text-right">${Number(t.utilizedValUsd || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 font-mono font-semibold text-[#5E6C84] text-right">₹${Number(t.rate || 0).toFixed(2)}</td>
          <td class="py-2.5 px-3 font-mono font-extrabold text-[#006644] text-right">₹${Number(t.utilizedValInr || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-center">
            <button type="button" class="btn-del-real-trans w-7 h-7 inline-flex items-center justify-center text-[#DE350B] hover:bg-[#FFEBE6] rounded-full transition-colors cursor-pointer" data-idx="${idx}" title="Delete Transaction">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');
    };

    Modal.open({
      title: `Realization — ${row.invoiceNo} (${row.consigneeName || row.buyerName || 'Devi Fisheries'})`,
      size: 'xl',
      content: `
        <form id="form-coll-realisation" class="space-y-4 text-xs animate-fade-in">
          <!-- Section 1: REALIZATIONFORM - COLL REALISATION — Form Input Fields (Top Section) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">COLL REALISATION — Top Section</h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <!-- INVOICE NO * -->
              <div>
                <label for="real-in-inv-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  INVOICE NO <span class="text-[#DE350B]">*</span>
                </label>
                <input type="text" id="real-in-inv-no" required value="${row.invoiceNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- INVOICE DATE -->
              <div>
                <label for="real-in-inv-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  INVOICE DATE
                </label>
                <input type="date" id="real-in-inv-date" value="${row.invoiceDate || '2026-02-18'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- BUYER -->
              <div>
                <label for="real-in-buyer" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  BUYER
                </label>
                <input type="text" id="real-in-buyer" value="${row.consigneeName || row.buyerName || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- INVOICE VALUE -->
              <div>
                <label for="real-in-inv-val" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  INVOICE VALUE ($)
                </label>
                <input type="number" step="0.01" id="real-in-inv-val" value="${row.invoiceValue ?? 159300.00}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- REALISED BALANCE -->
              <div>
                <label for="real-in-balance" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  REALISED BALANCE ($)
                </label>
                <input type="number" step="0.01" id="real-in-balance" readonly value="${row.realisedBalance ?? 0}" class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded font-mono font-bold text-[#006644] focus:outline-none shadow-2xs">
              </div>

              <!-- BANK CHARGES -->
              <div>
                <label for="real-in-bank-charges" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  BANK CHARGES ($)
                </label>
                <input type="number" step="0.01" id="real-in-bank-charges" value="${row.bankCharges ?? 120.00}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- DUE DATE -->
              <div>
                <label for="real-in-due-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  DUE DATE
                </label>
                <input type="date" id="real-in-due-date" value="${row.dueDate || '2026-05-18'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 2: REALIZATIONFORM - COLL REALISATION — Form Input Fields (Bank Ref Section) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">COLL REALISATION — Bank Ref Section</h4>
            </div>

            <div class="space-y-3">
              <!-- Row 1: Bank Ref 1 -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                <div>
                  <label for="real-bank-ref-1" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BANK REF NO 1.</label>
                  <input type="text" id="real-bank-ref-1" value="${row.bankRef1 || row.bankRef || ''}" placeholder="e.g. SBI-COLL-2026-901" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>
                <div>
                  <label for="real-val-1" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REALISED VALUE 1 ($)</label>
                  <input type="number" step="0.01" id="real-val-1" value="${row.realisedVal1 ?? ''}" placeholder="0.00" class="real-calc-val w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>
                <div>
                  <label for="real-date-1" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REALISED DATE 1</label>
                  <input type="date" id="real-date-1" value="${row.realisedDate1 || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>
              </div>

              <!-- Row 2: Bank Ref 2 -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                <div>
                  <label for="real-bank-ref-2" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BANK REF NO 2.</label>
                  <input type="text" id="real-bank-ref-2" value="${row.bankRef2 || ''}" placeholder="e.g. SBI-COLL-2026-902" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>
                <div>
                  <label for="real-val-2" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REALISED VALUE 2 ($)</label>
                  <input type="number" step="0.01" id="real-val-2" value="${row.realisedVal2 ?? ''}" placeholder="0.00" class="real-calc-val w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>
                <div>
                  <label for="real-date-2" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REALISED DATE 2</label>
                  <input type="date" id="real-date-2" value="${row.realisedDate2 || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>
              </div>

              <!-- Row 3: Bank Ref 3 -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                <div>
                  <label for="real-bank-ref-3" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BANK REF NO 3.</label>
                  <input type="text" id="real-bank-ref-3" value="${row.bankRef3 || ''}" placeholder="e.g. SBI-COLL-2026-903" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>
                <div>
                  <label for="real-val-3" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REALISED VALUE 3 ($)</label>
                  <input type="number" step="0.01" id="real-val-3" value="${row.realisedVal3 ?? ''}" placeholder="0.00" class="real-calc-val w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>
                <div>
                  <label for="real-date-3" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REALISED DATE 3</label>
                  <input type="date" id="real-date-3" value="${row.realisedDate3 || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: REALIZATIONFORM - COLL REALISATION — Form Input Fields (Charges Section) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">3</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">COLL REALISATION — Charges Section</h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <!-- FBK CHARGES -->
              <div>
                <label for="real-fbk-charges" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  FBK CHARGES ($)
                </label>
                <input type="number" step="0.01" id="real-fbk-charges" value="${row.fbkCharges ?? 85.00}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <!-- OTHER CHARGES -->
              <div>
                <label for="real-other-charges" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                  OTHER CHARGES ($)
                </label>
                <input type="number" step="0.01" id="real-other-charges" value="${row.otherCharges ?? 25.00}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-3 pt-3 mt-3 border-t border-[#F1F5F9]">
              <p class="text-[11px] text-[#5E6C84] italic font-medium">
                (Note: The asterisk <span class="text-[#DE350B] font-bold">*</span> indicates a required field)
              </p>
              <!-- Update Button per user's requirement -->
              <button type="button" id="btn-update-real-trans" class="btn-primary px-5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                <span>Update</span>
              </button>
            </div>
          </div>

          <!-- Section 4: REALIZATIONFORM - COLL REALISATION — Transaction Table Columns -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-2 mb-3">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">4</span>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">COLL REALISATION — Transaction Records</h4>
              </div>
              <span id="real-trans-count-badge" class="text-[11px] text-[#5E6C84] font-semibold">${transactions.length} record(s)</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-[#F8FAFC] text-[#5E6C84] font-bold uppercase tracking-wider text-[10px] border-b border-[#DFE1E6]">
                    <th class="py-2 px-3">S.No</th>
                    <th class="py-2 px-3">Type</th>
                    <th class="py-2 px-3">Ref.No.</th>
                    <th class="py-2 px-3">Utilised Date</th>
                    <th class="py-2 px-3 text-right">Utilised Value $</th>
                    <th class="py-2 px-3 text-right">Rate</th>
                    <th class="py-2 px-3 text-right">Utilised Value INR</th>
                    <th class="py-2 px-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody id="real-trans-tbody">
                  ${renderTransRows()}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="flex items-center justify-end gap-2 pt-3 border-t border-[#F1F5F9]">
            <button type="button" id="btn-cancel-real-modal" class="btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer">
              Cancel
            </button>
            <button type="submit" class="btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
              Save Realisation
            </button>
          </div>
        </form>
      `
    });

    // Auto-calculate Realised Balance
    const calcRealisedBalance = () => {
      const invVal = parseFloat(document.getElementById('real-in-inv-val')?.value) || 0;
      const v1 = parseFloat(document.getElementById('real-val-1')?.value) || 0;
      const v2 = parseFloat(document.getElementById('real-val-2')?.value) || 0;
      const v3 = parseFloat(document.getElementById('real-val-3')?.value) || 0;
      const totalRealised = v1 + v2 + v3;
      const bal = Math.max(0, invVal - totalRealised);
      const balInput = document.getElementById('real-in-balance');
      if (balInput) balInput.value = bal.toFixed(2);
      return bal;
    };

    // Attach listeners to recalculate balance
    ['real-in-inv-val', 'real-val-1', 'real-val-2', 'real-val-3'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', calcRealisedBalance);
    });

    // Refresh transaction table helper
    const refreshTransTable = () => {
      const tbody = document.getElementById('real-trans-tbody');
      const countBadge = document.getElementById('real-trans-count-badge');
      if (tbody) tbody.innerHTML = renderTransRows();
      if (countBadge) countBadge.textContent = `${transactions.length} record(s)`;
      bindDeleteButtons();
    };

    // Bind Delete buttons
    const bindDeleteButtons = () => {
      document.querySelectorAll('.btn-del-real-trans').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          if (!isNaN(idx)) {
            transactions.splice(idx, 1);
            // Re-index sNo
            transactions.forEach((t, i) => { t.sNo = i + 1; });
            refreshTransTable();
            Toast.show('Transaction removed', 'info');
          }
        });
      });
    };

    bindDeleteButtons();

    // Update button handler
    document.getElementById('btn-update-real-trans')?.addEventListener('click', () => {
      calcRealisedBalance();

      // Find any filled bank ref or prompt
      const r1 = document.getElementById('real-bank-ref-1')?.value?.trim();
      const v1 = parseFloat(document.getElementById('real-val-1')?.value) || 0;
      const d1 = document.getElementById('real-date-1')?.value || new Date().toISOString().split('T')[0];

      const r2 = document.getElementById('real-bank-ref-2')?.value?.trim();
      const v2 = parseFloat(document.getElementById('real-val-2')?.value) || 0;
      const d2 = document.getElementById('real-date-2')?.value || new Date().toISOString().split('T')[0];

      const r3 = document.getElementById('real-bank-ref-3')?.value?.trim();
      const v3 = parseFloat(document.getElementById('real-val-3')?.value) || 0;
      const d3 = document.getElementById('real-date-3')?.value || new Date().toISOString().split('T')[0];

      let addedCount = 0;
      const candidates = [
        { ref: r1, val: v1, date: d1 },
        { ref: r2, val: v2, date: d2 },
        { ref: r3, val: v3, date: d3 }
      ].filter(c => c.ref && c.val > 0);

      if (candidates.length > 0) {
        candidates.forEach(cand => {
          const already = transactions.some(t => t.refNo === cand.ref);
          if (!already) {
            const spotRate = 84.10;
            transactions.push({
              sNo: transactions.length + 1,
              type: 'Collection Advice',
              refNo: cand.ref,
              utilizedDate: cand.date,
              utilizedValUsd: cand.val,
              rate: spotRate,
              utilizedValInr: Math.round(cand.val * spotRate * 100) / 100
            });
            addedCount++;
          }
        });
      }

      if (addedCount === 0 && candidates.length === 0) {
        // Fallback: create entry from remaining balance or general prompt
        const invVal = parseFloat(document.getElementById('real-in-inv-val')?.value) || 10000;
        const spotRate = 84.10;
        transactions.push({
          sNo: transactions.length + 1,
          type: 'Collection Advice',
          refNo: 'BRN-' + Math.floor(10000 + Math.random() * 90000),
          utilizedDate: new Date().toISOString().split('T')[0],
          utilizedValUsd: invVal,
          rate: spotRate,
          utilizedValInr: Math.round(invVal * spotRate * 100) / 100
        });
      }

      refreshTransTable();
      Toast.show('Transaction updated successfully', 'success');
    });

    // Cancel button
    document.getElementById('btn-cancel-real-modal')?.addEventListener('click', () => {
      Modal.close();
    });

    // Form submit
    document.getElementById('form-coll-realisation')?.addEventListener('submit', (e) => {
      e.preventDefault();

      const invNo = document.getElementById('real-in-inv-no')?.value?.trim();
      const invDate = document.getElementById('real-in-inv-date')?.value;
      const buyer = document.getElementById('real-in-buyer')?.value?.trim();
      const invVal = parseFloat(document.getElementById('real-in-inv-val')?.value) || 0;
      const bal = calcRealisedBalance();
      const bankCharges = parseFloat(document.getElementById('real-in-bank-charges')?.value) || 0;
      const dueDate = document.getElementById('real-in-due-date')?.value;

      const bankRef1 = document.getElementById('real-bank-ref-1')?.value?.trim() || '';
      const realisedVal1 = parseFloat(document.getElementById('real-val-1')?.value) || 0;
      const realisedDate1 = document.getElementById('real-date-1')?.value || '';

      const bankRef2 = document.getElementById('real-bank-ref-2')?.value?.trim() || '';
      const realisedVal2 = parseFloat(document.getElementById('real-val-2')?.value) || 0;
      const realisedDate2 = document.getElementById('real-date-2')?.value || '';

      const bankRef3 = document.getElementById('real-bank-ref-3')?.value?.trim() || '';
      const realisedVal3 = parseFloat(document.getElementById('real-val-3')?.value) || 0;
      const realisedDate3 = document.getElementById('real-date-3')?.value || '';

      const fbkCharges = parseFloat(document.getElementById('real-fbk-charges')?.value) || 0;
      const otherCharges = parseFloat(document.getElementById('real-other-charges')?.value) || 0;

      // Update row
      row.invoiceNo = invNo || row.invoiceNo;
      row.invoiceDate = invDate || row.invoiceDate;
      row.consigneeName = buyer || row.consigneeName;
      row.buyerName = buyer || row.buyerName;
      row.invoiceValue = invVal;
      row.realisedBalance = bal;
      row.bankCharges = bankCharges;
      row.dueDate = dueDate;

      row.bankRef = bankRef1 || row.bankRef;
      row.bankRef1 = bankRef1;
      row.realisedVal1 = realisedVal1;
      row.realisedDate1 = realisedDate1;

      row.bankRef2 = bankRef2;
      row.realisedVal2 = realisedVal2;
      row.realisedDate2 = realisedDate2;

      row.bankRef3 = bankRef3;
      row.realisedVal3 = realisedVal3;
      row.realisedDate3 = realisedDate3;

      row.fbkCharges = fbkCharges;
      row.otherCharges = otherCharges;
      row.transactions = transactions;

      if (bal <= 0) {
        row.status = 'Full Realized';
      } else if (bal < invVal) {
        row.status = 'Partially Realized';
      } else {
        row.status = 'Pending Realization';
      }

      Modal.close();
      Toast.show('Realisation saved successfully', 'success');
      if (typeof onSaved === 'function') onSaved();
    });
  },

  // Payments Tab 5: Realization Done
  renderRealizationDone(container) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title (Strictly clean H1 per AGENTS.md Rule 2) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Realization Done</h1>
          </div>
        </div>

        <!-- REALIZATION DONE — Filter Fields (Strictly 4-column per design system) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="realdone-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="realdone-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="realdone-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- 1. SELECT YEAR -->
            <div>
              <label for="realdone-flt-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT YEAR</label>
              <select id="realdone-flt-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Years</option>
                <option value="2026-2027" selected>2026-2027</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>

            <!-- 2. SELECT EXPORTER -->
            <div>
              <label for="realdone-flt-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT EXPORTER</label>
              <select id="realdone-flt-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Exporters</option>
                <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Aqua Feeds">Devi Aqua Feeds</option>
              </select>
            </div>

            <!-- 3. SELECT COUNTRY -->
            <div>
              <label for="realdone-flt-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT COUNTRY</label>
              <select id="realdone-flt-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Countries</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
                <option value="Canada">Canada</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Spain">Spain</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <!-- 4. BILLS TYPE -->
            <div>
              <label for="realdone-flt-billtype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BILLS TYPE</label>
              <select id="realdone-flt-billtype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All">All Types</option>
                <option value="Collection">Collection</option>
                <option value="Direct Negotiation">Direct Negotiation</option>
                <option value="LC Settlement">LC Settlement</option>
              </select>
            </div>

            <!-- Mandatory Search Button -->
            <div class="flex items-end">
              <button type="button" id="realdone-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="realdone-table-container"></div>
      </div>
    `;

    // Toggle filter body
    const toggleBtn = container.querySelector('#realdone-flt-toggle-btn');
    const filterBody = container.querySelector('#realdone-flt-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render Table function
    const renderTable = (currentData) => {
      new DataTable({
        containerId: 'realdone-table-container',
        data: currentData,
        keyField: 'id',
        tableTitle: 'REALIZATION DONE',
        title: 'REALIZATION DONE',
        selectable: true,
        showSelectedCount: false,
        columns: [
          {
            field: 'slNo',
            header: 'Sl.No.',
            sortable: false,
            render: (v, r, idx) => `<span class="text-xs font-semibold text-[#5E6C84]">${idx + 1}</span>`
          },
          {
            field: 'invoiceNo',
            header: 'Invoice NO',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'consignee',
            header: 'Consignee',
            sortable: true,
            render: (v, r) => `<div><span class="font-bold text-[#172B4D] text-xs whitespace-nowrap">${v || r.buyerName || '—'}</span>${r.country ? `<span class="text-[10px] text-[#5E6C84] block">${r.country}</span>` : ''}</div>`
          },
          {
            field: 'salesInvoiceDate',
            header: 'Sales Invoice Date',
            sortable: true,
            render: (v) => `<span class="text-xs font-medium text-[#172B4D] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'transactionType',
            header: 'Transaction Type',
            sortable: true,
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF] whitespace-nowrap">${v || 'Collection'}</span>`
          },
          {
            field: 'totalInvoiceValue',
            header: 'Total Invoice Value$',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] text-right block whitespace-nowrap">$${Number(v || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`
          },
          {
            field: 'realisedValue',
            header: 'Realised Value$',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#006644] text-right block whitespace-nowrap">$${Number(v || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`
          },
          {
            field: 'dateOfDiscounting',
            header: 'Date Of Discounting With Bank',
            sortable: true,
            render: (v) => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'bankRefNo1',
            header: 'Bank Ref No',
            sortable: true,
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'dateOfReceipt1',
            header: 'Date Of Receipt Of Payment-1',
            sortable: true,
            render: (v) => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'amountOfReceipt1',
            header: 'Amount Of Receipt Of Payment-1',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] text-right block whitespace-nowrap">${v ? '$' + Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—'}</span>`
          },
          {
            field: 'bankRefNo2',
            header: 'Bank Ref No',
            sortable: true,
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'dateOfReceipt2',
            header: 'Date Of Receipt Of Payment-2',
            sortable: true,
            render: (v) => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'amountOfReceipt2',
            header: 'Amount Of Receipt Of Payment-2',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] text-right block whitespace-nowrap">${v ? '$' + Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—'}</span>`
          },
          {
            field: 'bankRefNo3',
            header: 'Bank Ref No',
            sortable: true,
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'dateOfReceipt3',
            header: 'Date Of Receipt Of Payment-3',
            sortable: true,
            render: (v) => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'amountOfReceipt3',
            header: 'Amount Of Receipt Of Payment-3',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] text-right block whitespace-nowrap">${v ? '$' + Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—'}</span>`
          },
          {
            field: 'totalUtilizedValueUsd',
            header: 'Total Utilized Value$',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] text-right block whitespace-nowrap">$${Number(v || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`
          },
          {
            field: 'totalUtilizedValueInr',
            header: 'Total Utilized Value INR',
            sortable: true,
            render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644] text-right block whitespace-nowrap">₹${Number(v || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`
          },
          {
            field: 'shortExcess',
            header: 'Short/ Excess',
            sortable: true,
            render: (v) => {
              const num = Number(v || 0);
              if (num === 0) return `<span class="font-mono font-semibold text-xs text-[#5E6C84] text-right block whitespace-nowrap">$0.00</span>`;
              const cls = num < 0 ? 'text-[#DE350B]' : 'text-[#006644]';
              return `<span class="font-mono font-bold text-xs ${cls} text-right block whitespace-nowrap">${num < 0 ? '-' : '+'}$${Math.abs(num).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`;
            }
          },
          {
            field: 'bankCharges',
            header: 'Bank charges',
            sortable: true,
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84] text-right block whitespace-nowrap">$${Number(v || 0).toFixed(2)}</span>`
          },
          {
            field: 'fbkCharges',
            header: 'FBK Charges',
            sortable: true,
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84] text-right block whitespace-nowrap">$${Number(v || 0).toFixed(2)}</span>`
          },
          {
            field: 'otherCharges',
            header: 'Other Charges',
            sortable: true,
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84] text-right block whitespace-nowrap">$${Number(v || 0).toFixed(2)}</span>`
          },
          {
            field: 'remarks',
            header: 'Remarks',
            sortable: false,
            render: (v) => `<span class="text-xs text-[#5E6C84] max-w-[200px] truncate block" title="${v || ''}">${v || '—'}</span>`
          }
        ],
        onRowClick: (row) => {
          this.openRealizationDoneModal(row);
        }
      });
    };

    // Filter Logic
    const applyFilters = () => {
      const year = container.querySelector('#realdone-flt-year')?.value;
      const exporter = container.querySelector('#realdone-flt-exporter')?.value;
      const country = container.querySelector('#realdone-flt-country')?.value;
      const billType = container.querySelector('#realdone-flt-billtype')?.value;

      let filtered = [...this.state.realizationDone];

      if (year && year !== 'All') {
        filtered = filtered.filter(r => r.year === year || !r.year);
      }
      if (exporter && exporter !== 'All') {
        filtered = filtered.filter(r => r.exporter === exporter || !r.exporter);
      }
      if (country && country !== 'All') {
        filtered = filtered.filter(r => (r.country || r.destinationCountry) === country);
      }
      if (billType && billType !== 'All') {
        filtered = filtered.filter(r => (r.billsType || r.transactionType || '').toLowerCase().includes(billType.toLowerCase()));
      }

      renderTable(filtered);
    };

    // Attach filter listeners
    container.querySelector('#realdone-flt-search-btn')?.addEventListener('click', applyFilters);
    ['realdone-flt-year', 'realdone-flt-exporter', 'realdone-flt-country', 'realdone-flt-billtype'].forEach(id => {
      container.querySelector('#' + id)?.addEventListener('change', applyFilters);
    });

    // Reset button
    container.querySelector('#realdone-flt-reset-btn')?.addEventListener('click', () => {
      const y = container.querySelector('#realdone-flt-year'); if (y) y.value = '2026-2027';
      const exp = container.querySelector('#realdone-flt-exporter'); if (exp) exp.value = 'All';
      const co = container.querySelector('#realdone-flt-country'); if (co) co.value = 'All';
      const bt = container.querySelector('#realdone-flt-billtype'); if (bt) bt.value = 'All';
      applyFilters();
      Toast.show('Filters reset', 'info');
    });

    // Initial render
    renderTable(this.state.realizationDone);
  },

  // Details Modal for Realization Done
  openRealizationDoneModal(row) {
    Modal.open({
      title: `Realization Done — ${row.invoiceNo} (${row.consignee || row.buyerName})`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${row.invoiceNo}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">CLOSED / RECONCILED</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${row.transactionType || 'Collection'}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Buyer: <strong class="text-[#334155]">${row.consignee || row.buyerName}</strong></span>
                  <span>•</span>
                  <span>Country: <strong class="text-[#334155]">${row.country || 'USA'}</strong></span>
                  <span>•</span>
                  <span>Exporter: <strong class="text-[#334155]">${row.exporter || 'Devi Fisheries Limited'}</strong></span>
                  <span>•</span>
                  <span>Date: <strong class="text-[#334155]">${row.salesInvoiceDate || '—'}</strong></span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 flex-wrap">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[90px]">
                <span class="text-[10px] uppercase font-bold text-[#64748B] block">Total Invoice</span>
                <span class="font-mono font-extrabold text-xs text-[#172B4D]">$${Number(row.totalInvoiceValue || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[90px]">
                <span class="text-[10px] uppercase font-bold text-[#64748B] block">Realised Value</span>
                <span class="font-mono font-extrabold text-xs text-[#006644]">$${Number(row.realisedValue || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[100px]">
                <span class="text-[10px] uppercase font-bold text-[#64748B] block">Realised INR</span>
                <span class="font-mono font-extrabold text-xs text-[#006644]">₹${Number(row.totalUtilizedValueInr || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Invoice & Realization Summary -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Invoice &amp; Realization Details</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">INVOICE NO</span>
                <span class="font-mono font-bold text-xs text-[#00A4B7] block mt-0.5">${row.invoiceNo}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SALES INVOICE DATE</span>
                <span class="font-semibold text-xs text-[#172B4D] block mt-0.5">${row.salesInvoiceDate || '—'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">DISCOUNTING DATE</span>
                <span class="font-semibold text-xs text-[#172B4D] block mt-0.5">${row.dateOfDiscounting || '—'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SHORT / EXCESS</span>
                <span class="font-mono font-bold text-xs ${row.shortExcess < 0 ? 'text-[#DE350B]' : 'text-[#006644]'} block mt-0.5">${row.shortExcess < 0 ? '-' : ''}$${Math.abs(row.shortExcess || 0).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Bank Receipt Tranches -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Bank Receipt Payments</h4>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-[#F8FAFC] text-[#5E6C84] font-bold uppercase tracking-wider text-[10px] border-b border-[#DFE1E6]">
                    <th class="py-2 px-3">Receipt Tranche</th>
                    <th class="py-2 px-3">Bank Ref No</th>
                    <th class="py-2 px-3">Receipt Date</th>
                    <th class="py-2 px-3 text-right">Receipt Amount ($)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#F1F5F9]">
                  <tr>
                    <td class="py-2 px-3 font-semibold text-[#172B4D]">Payment-1</td>
                    <td class="py-2 px-3 font-mono text-[#00A4B7] font-bold">${row.bankRefNo1 || '—'}</td>
                    <td class="py-2 px-3 text-[#5E6C84]">${row.dateOfReceipt1 || '—'}</td>
                    <td class="py-2 px-3 font-mono font-bold text-[#172B4D] text-right">${row.amountOfReceipt1 ? '$' + Number(row.amountOfReceipt1).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—'}</td>
                  </tr>
                  ${row.amountOfReceipt2 > 0 || row.bankRefNo2 ? `
                  <tr>
                    <td class="py-2 px-3 font-semibold text-[#172B4D]">Payment-2</td>
                    <td class="py-2 px-3 font-mono text-[#00A4B7] font-bold">${row.bankRefNo2 || '—'}</td>
                    <td class="py-2 px-3 text-[#5E6C84]">${row.dateOfReceipt2 || '—'}</td>
                    <td class="py-2 px-3 font-mono font-bold text-[#172B4D] text-right">${row.amountOfReceipt2 ? '$' + Number(row.amountOfReceipt2).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—'}</td>
                  </tr>
                  ` : ''}
                  ${row.amountOfReceipt3 > 0 || row.bankRefNo3 ? `
                  <tr>
                    <td class="py-2 px-3 font-semibold text-[#172B4D]">Payment-3</td>
                    <td class="py-2 px-3 font-mono text-[#00A4B7] font-bold">${row.bankRefNo3 || '—'}</td>
                    <td class="py-2 px-3 text-[#5E6C84]">${row.dateOfReceipt3 || '—'}</td>
                    <td class="py-2 px-3 font-mono font-bold text-[#172B4D] text-right">${row.amountOfReceipt3 ? '$' + Number(row.amountOfReceipt3).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—'}</td>
                  </tr>
                  ` : ''}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Section 3: Charges & Deductions -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">3</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Charges &amp; Deductions</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">BANK CHARGES</span>
                <span class="font-mono font-semibold text-xs text-[#172B4D] block mt-0.5">$${Number(row.bankCharges || 0).toFixed(2)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FBK CHARGES</span>
                <span class="font-mono font-semibold text-xs text-[#172B4D] block mt-0.5">$${Number(row.fbkCharges || 0).toFixed(2)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">OTHER CHARGES</span>
                <span class="font-mono font-semibold text-xs text-[#172B4D] block mt-0.5">$${Number(row.otherCharges || 0).toFixed(2)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">TOTAL DEDUCTIONS</span>
                <span class="font-mono font-bold text-xs text-[#DE350B] block mt-0.5">$${(Number(row.bankCharges || 0) + Number(row.fbkCharges || 0) + Number(row.otherCharges || 0)).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <!-- Section 4: Compliance & Remarks -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">4</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">DGFT e-BRC &amp; Remarks</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">e-BRC NUMBER</span>
                <span class="font-mono font-extrabold text-xs text-[#00A4B7] block mt-0.5">${row.eBrcNumber || 'Pending e-BRC'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">REMARKS</span>
                <span class="font-semibold text-xs text-[#172B4D] block mt-0.5">${row.remarks || 'No remarks recorded.'}</span>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="flex items-center justify-end pt-3 border-t border-[#F1F5F9]">
            <button type="button" onclick="Modal.close()" class="btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer">
              Close
            </button>
          </div>
        </div>
      `
    });
  },

  // ----------------------------------------------------
  // 4. INSURANCE SUBMENU TABS
  // ----------------------------------------------------
  renderInsurance(container, currentTab = 'pending-insurance') {
    switch (currentTab) {
      case 'pending-insurance':
        this.renderPendingInsurance(container);
        break;
      case 'insurance-templates':
        this.renderInsuranceTemplates(container);
        break;
      case 'insurance-payments':
        this.renderInsurancePayments(container);
        break;
      default:
        this.renderPendingInsurance(container);
        break;
    }
  },

    // Insurance Tab 1: Pending Insurance
  renderPendingInsurance(container) {
    const rawData = this.state.pendingInsurance || [];

    // Distinct filter dropdown options derived from live data
    const years = ['All Years', ...new Set(rawData.map(r => r.year).filter(Boolean))];
    const exporters = ['All Exporters', ...new Set(rawData.map(r => r.exporter).filter(Boolean))];
    const consignees = ['All Consignees', ...new Set(rawData.map(r => r.consignee).filter(Boolean))];
    const countries = ['All Countries', ...new Set(rawData.map(r => r.destinationCountry).filter(Boolean))];

    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title & Header Actions (Clean H1, strictly no subheading per AGENTS.md Rule 2) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Pending Insurance</h1>
          </div>
        </div>

        <!-- Search & Filter Card (Strictly adhering to AGENTS.md Design System Rule 3) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <!-- Circular 32x32 Reset Button -->
              <button type="button" id="flt-ins-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <!-- Circular 32x32 Collapse/Expand Toggle Button -->
              <button type="button" id="flt-ins-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <!-- Body: Margin-top 0, border-top none -->
          <div id="flt-ins-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- 1. Select Year -->
            <div>
              <label for="flt-ins-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Year</label>
              <select id="flt-ins-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                ${years.map(y => `<option value="${y}">${y}</option>`).join('')}
              </select>
            </div>

            <!-- 2. Select Exporter -->
            <div>
              <label for="flt-ins-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Exporter</label>
              <select id="flt-ins-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                ${exporters.map(e => `<option value="${e}">${e}</option>`).join('')}
              </select>
            </div>

            <!-- 3. Select Consignee -->
            <div>
              <label for="flt-ins-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Consignee</label>
              <select id="flt-ins-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                ${consignees.map(c => `<option value="${c}">${c}</option>`).join('')}
              </select>
            </div>

            <!-- 4. Select Country -->
            <div>
              <label for="flt-ins-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Country</label>
              <select id="flt-ins-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                ${countries.map(c => `<option value="${c}">${c}</option>`).join('')}
              </select>
            </div>

            <!-- MANDATORY Search button always placed after the last input field -->
            <div class="flex items-end">
              <button type="button" id="flt-ins-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="pending-insurance-table-container"></div>
      </div>
    `;

    // Toggle filter body
    const toggleBtn = container.querySelector('#flt-ins-toggle-btn');
    const filterBody = container.querySelector('#flt-ins-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Exactly the 11 user-specified columns: S.No, ID, Inv No, Vessel Name, Shipping Onboard Dt, Container No, Port of Loading, Port Of Discharge, Destination Country, Total Invoice Value, Action
    const columns = [
      {
        field: '__sno__',
        header: 'S.No',
        render: (v, r, idx) => `<span class="font-mono text-xs text-[#5E6C84]">${idx + 1}</span>`
      },
      {
        field: 'id',
        header: 'ID',
        render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v || '-'}</span>`
      },
      {
        field: 'invNo',
        header: 'Inv No',
        render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] hover:underline cursor-pointer">${v || '-'}</span>`
      },
      {
        field: 'vesselName',
        header: 'Vessel Name',
        render: (v) => `<span class="font-semibold text-xs text-[#172B4D]">${v || '-'}</span>`
      },
      {
        field: 'shippingOnboardDt',
        header: 'Shipping Onboard Dt',
        render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v || '-'}</span>`
      },
      {
        field: 'containerNo',
        header: 'Container No',
        render: (v) => `<span class="font-mono font-semibold text-xs text-[#403294]">${v || '-'}</span>`
      },
      {
        field: 'portOfLoading',
        header: 'Port of Loading',
        render: (v) => `<span class="text-xs text-[#172B4D]">${v || '-'}</span>`
      },
      {
        field: 'portOfDischarge',
        header: 'Port Of Discharge',
        render: (v) => `<span class="text-xs text-[#172B4D]">${v || '-'}</span>`
      },
      {
        field: 'destinationCountry',
        header: 'Destination Country',
        render: (v) => `<span class="text-xs font-semibold text-[#172B4D]">${v || '-'}</span>`
      },
      {
        field: 'totalInvoiceValue',
        header: 'Total Invoice Value',
        render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644]">${Number(v || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`
      }
    ];

    // Render DataTable instance
    let dtInstance = null;
    const renderTable = (dataToDisplay) => {
      dtInstance = new DataTable({
        containerId: 'pending-insurance-table-container',
        data: dataToDisplay,
        keyField: 'id',
        tableTitle: 'Pending Insurance',
        searchable: true,
        exportable: true,
        selectable: true,
        showSelectedCount: false,
        pageSize: 10,
        actionsTitle: 'Action',
        toolbarButtons: [
          {
            id: 'btn-create-table-insurance',
            label: 'Create Table',
            title: 'Create Insurance Declaration Table for selected records',
            requiresSelection: true,
            variant: 'primary',
            className: 'btn-primary px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white flex items-center gap-1.5 transition-all cursor-pointer',
            icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 4h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
            onClick: (keys, rows) => {
              const selectedRecords = rows && rows.length > 0 ? rows : (this.state.pendingInsurance || []).filter(r => (keys || []).includes(r.id));
              this.showCreateInsuranceTemplateModal(selectedRecords);
            }
          }
        ],
        onRowClick: (row) => this.showPendingInsuranceDetailsModal(row),
        columns,
        actions: [
          {
            label: 'Create Template',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2zM15 2v5a2 2 0 002 2h5"/></svg>`,
            onClick: (row) => this.showCreateInsuranceTemplateModal([row])
          }
        ]
      });
    };

    renderTable(rawData);

    // Search and Reset button handlers
    const searchBtn = container.querySelector('#flt-ins-search-btn');
    const resetBtn = container.querySelector('#flt-ins-reset-btn');

    searchBtn?.addEventListener('click', () => {
      const yearVal = container.querySelector('#flt-ins-year')?.value || 'ALL';
      const exporterVal = container.querySelector('#flt-ins-exporter')?.value || 'ALL';
      const consigneeVal = container.querySelector('#flt-ins-consignee')?.value || 'ALL';
      const countryVal = container.querySelector('#flt-ins-country')?.value || 'ALL';

      let filtered = [...(this.state.pendingInsurance || [])];

      if (yearVal !== 'ALL' && yearVal !== 'All Years') {
        filtered = filtered.filter(r => r.year === yearVal);
      }
      if (exporterVal !== 'ALL' && exporterVal !== 'All Exporters') {
        filtered = filtered.filter(r => r.exporter === exporterVal);
      }
      if (consigneeVal !== 'ALL' && consigneeVal !== 'All Consignees') {
        filtered = filtered.filter(r => r.consignee === consigneeVal);
      }
      if (countryVal !== 'ALL' && countryVal !== 'All Countries') {
        filtered = filtered.filter(r => r.destinationCountry === countryVal);
      }

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} insurance record(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      const yearSelect = container.querySelector('#flt-ins-year');
      const expSelect = container.querySelector('#flt-ins-exporter');
      const conSelect = container.querySelector('#flt-ins-consignee');
      const ctrySelect = container.querySelector('#flt-ins-country');

      if (yearSelect) yearSelect.selectedIndex = 0;
      if (expSelect) expSelect.selectedIndex = 0;
      if (conSelect) conSelect.selectedIndex = 0;
      if (ctrySelect) ctrySelect.selectedIndex = 0;

      renderTable(this.state.pendingInsurance || []);
      Toast.show('Filters reset', 'info');
    });
  },

  // Marine Insurance Declaration Details Modal (Strictly AGENTS.md Section 5)
  showPendingInsuranceDetailsModal(row) {
    if (!row) return;

    Modal.show({
      title: 'Marine Insurance Declaration & Coverage Details',
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${row.id}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${(row.status || 'PENDING').replace(/_/g, ' ')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">Marine Transit Insurance</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>🏢 ${row.exporter || 'Devi Fisheries Limited'}</span>
                  <span>•</span>
                  <span>Buyer: ${row.consignee || '-'}</span>
                  <span>•</span>
                  <span>Inv: <strong class="font-mono text-[#172B4D]">${row.invNo || '-'}</strong></span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 flex-wrap">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[100px]">
                <div class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Total Value</div>
                <div class="text-sm font-extrabold text-[#006644] font-mono mt-0.5">${Number(row.totalInvoiceValue || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[90px]">
                <div class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Container</div>
                <div class="text-xs font-bold text-[#403294] font-mono mt-0.5">${row.containerNo || '-'}</div>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[90px]">
                <div class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Destination</div>
                <div class="text-xs font-bold text-[#00A4B7] mt-0.5">${row.destinationCountry || '-'}</div>
              </div>
            </div>
          </div>

          <!-- Section 1: Voyage & Shipping Onboard Specifications -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-3">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Voyage &amp; Shipping Onboard Specifications</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Vessel Name</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.vesselName || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Shipping Onboard Dt</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${row.shippingOnboardDt || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Container No</span>
                <span class="font-mono font-bold text-[#403294] text-xs block mt-0.5">${row.containerNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Port of Loading</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.portOfLoading || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Port of Discharge</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.portOfDischarge || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Destination Country</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.destinationCountry || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Commercial Export & Invoice Information -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-3">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">2</span>
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial Export &amp; Invoice Information</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Invoice Number</span>
                <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${row.invNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Exporter Name</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.exporter || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Consignee / Importer</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.consignee || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Financial Year</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${row.year || '2026-2027'}</span>
              </div>
              <div class="col-span-2 sm:col-span-4">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Cargo Specifications</span>
                <span class="font-medium text-[#172B4D] text-xs block mt-0.5">${row.cargoDescription || 'Frozen Seafood Consignment'}</span>
              </div>
            </div>
          </div>

          <!-- Section 3: Marine Insurance Underwriting & Risk Scope -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-3">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">3</span>
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Marine Insurance Underwriting &amp; Risk Scope</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Assigned Underwriter</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${row.assignedUnderwriter || 'The New India Assurance Co. Ltd.'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Sum Insured (CIF + 10%)</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs block mt-0.5">${(Number(row.totalInvoiceValue || 0) * 1.1).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Declaration Status</span>
                <span class="font-semibold text-[#00A4B7] text-xs block mt-0.5">${(row.status || 'PENDING').replace(/_/g, ' ')}</span>
              </div>
              <div class="col-span-2 sm:col-span-3">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Applicable Risk Clauses</span>
                <span class="text-xs text-[#5E6C84] block mt-0.5 bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0] font-mono">${row.requiredClauses || 'ICC (A) All Risks + Institute Frozen Food Clauses + 24hr Machinery Derangement + War & Strikes Clauses'}</span>
              </div>
            </div>
          </div>
        </div>
      `,
      actions: [
        {
          label: 'Print Declaration',
          className: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: () => Toast.show(`Printing declaration document for ${row.id}...`, 'info')
        },
        {
          label: 'Download Certificate',
          className: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: () => {
            Modal.close();
            Toast.show(`Downloading official Marine Certificate for ${row.id}...`, 'success');
          }
        }
      ]
    });
  },

  // Add Marine Insurance Declaration Modal
  showAddPendingInsuranceModal(onCreated) {
    const nextSeq = ((this.state.pendingInsurance || []).length + 1).toString().padStart(3, '0');
    const newId = `INS-2026-${nextSeq}`;

    Modal.show({
      title: 'New Marine Insurance Declaration',
      size: 'xl',
      content: `
        <form id="form-add-pending-insurance" class="space-y-4 text-xs">
          <div class="bg-[#F0F9FF] p-3 rounded-lg border border-[#BAE6FD] flex items-center justify-between text-xs">
            <div>
              <span class="font-bold text-[#00A4B7]">System Generated ID:</span>
              <span class="font-mono font-extrabold text-[#0284C7] ml-1">${newId}</span>
            </div>
            <div class="text-[11px] text-[#5E6C84]">All fields marked with <span class="text-rose-500">*</span> are mandatory</div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Invoice Number <span class="text-rose-500">*</span></label>
              <input type="text" id="add-ins-inv" required placeholder="e.g. INV-EXP-2026-098" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Financial Year <span class="text-rose-500">*</span></label>
              <select id="add-ins-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                <option value="2026-2027" selected>2026-2027</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Exporter <span class="text-rose-500">*</span></label>
              <select id="add-ins-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                <option value="Devi Fisheries Limited" selected>Devi Fisheries Limited</option>
                <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                <option value="Devi Aqua Feeds Pvt Ltd">Devi Aqua Feeds Pvt Ltd</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Consignee / Importer <span class="text-rose-500">*</span></label>
              <input type="text" id="add-ins-consignee" required placeholder="e.g. Sysco Corporation International" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Vessel Name <span class="text-rose-500">*</span></label>
              <input type="text" id="add-ins-vessel" required placeholder="e.g. MSC MAYA / V.2601W" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Shipping Onboard Dt <span class="text-rose-500">*</span></label>
              <input type="date" id="add-ins-date" required value="2026-11-06" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Container No <span class="text-rose-500">*</span></label>
              <input type="text" id="add-ins-container" required placeholder="e.g. MSCU7823901" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Port of Loading <span class="text-rose-500">*</span></label>
              <input type="text" id="add-ins-pol" required value="Visakhapatnam (INVTZ)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Port of Discharge <span class="text-rose-500">*</span></label>
              <input type="text" id="add-ins-pod" required placeholder="e.g. New York (USNYC)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Destination Country <span class="text-rose-500">*</span></label>
              <select id="add-ins-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                <option value="United States" selected>United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Japan">Japan</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Germany">Germany</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Total Invoice Value (USD) <span class="text-rose-500">*</span></label>
              <input type="number" id="add-ins-val" required min="1" step="0.01" placeholder="e.g. 215000" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Assigned Underwriter</label>
              <select id="add-ins-underwriter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                <option value="The New India Assurance Co. Ltd." selected>The New India Assurance Co. Ltd.</option>
                <option value="United India Insurance Co. Ltd.">United India Insurance Co. Ltd.</option>
                <option value="ICICI Lombard General Insurance">ICICI Lombard General Insurance</option>
                <option value="National Insurance Co. Ltd.">National Insurance Co. Ltd.</option>
              </select>
            </div>
          </div>
        </form>
      `,
      actions: [
        {
          label: 'Cancel',
          className: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Declaration',
          className: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: () => {
            const form = document.getElementById('form-add-pending-insurance');
            if (form && !form.checkValidity()) {
              form.reportValidity();
              return;
            }

            const invNo = document.getElementById('add-ins-inv')?.value.trim();
            const year = document.getElementById('add-ins-year')?.value;
            const exporter = document.getElementById('add-ins-exporter')?.value;
            const consignee = document.getElementById('add-ins-consignee')?.value.trim();
            const vesselName = document.getElementById('add-ins-vessel')?.value.trim();
            const rawDate = document.getElementById('add-ins-date')?.value;
            const containerNo = document.getElementById('add-ins-container')?.value.trim();
            const portOfLoading = document.getElementById('add-ins-pol')?.value.trim();
            const portOfDischarge = document.getElementById('add-ins-pod')?.value.trim();
            const destinationCountry = document.getElementById('add-ins-country')?.value;
            const totalInvoiceValue = parseFloat(document.getElementById('add-ins-val')?.value || '0');
            const assignedUnderwriter = document.getElementById('add-ins-underwriter')?.value;

            // Format date e.g. 06-Nov-2026
            let formattedDate = rawDate;
            try {
              if (rawDate) {
                const [y, m, d] = rawDate.split('-');
                const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                formattedDate = `${d}-${monthNames[parseInt(m, 10) - 1]}-${y}`;
              }
            } catch (e) {}

            const newRecord = {
              id: newId,
              invNo,
              year,
              exporter,
              consignee,
              vesselName,
              shippingOnboardDt: formattedDate,
              containerNo,
              portOfLoading,
              portOfDischarge,
              destinationCountry,
              totalInvoiceValue,
              cargoValueUsd: totalInvoiceValue,
              lotRef: `LOT-${newId}`,
              contractNo: `SC-NEW-${nextSeq}`,
              cargoDescription: 'Frozen Seafood Consignment IQF',
              requiredClauses: 'ICC (A) All Risks + Reefer Temp Deviation + War & Strikes',
              assignedUnderwriter,
              status: 'DECLARATION_PENDING'
            };

            this.state.pendingInsurance = [newRecord, ...(this.state.pendingInsurance || [])];
            Modal.close();
            Toast.show(`Insurance Declaration ${newId} added successfully`, 'success');
            if (typeof onCreated === 'function') onCreated();
          }
        }
      ]
    });
  },

  // Edit Marine Insurance Declaration Modal
  showEditPendingInsuranceModal(row, onUpdated) {
    if (!row) return;

    Modal.show({
      title: `Edit Insurance Declaration — ${row.id}`,
      size: 'xl',
      content: `
        <form id="form-edit-pending-insurance" class="space-y-4 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Invoice Number</label>
              <input type="text" id="edit-ins-inv" required value="${row.invNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Financial Year</label>
              <select id="edit-ins-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                <option value="2026-2027" ${row.year === '2026-2027' ? 'selected' : ''}>2026-2027</option>
                <option value="2025-2026" ${row.year === '2025-2026' ? 'selected' : ''}>2025-2026</option>
                <option value="2024-2025" ${row.year === '2024-2025' ? 'selected' : ''}>2024-2025</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Exporter</label>
              <input type="text" id="edit-ins-exporter" value="${row.exporter || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Consignee</label>
              <input type="text" id="edit-ins-consignee" required value="${row.consignee || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Vessel Name</label>
              <input type="text" id="edit-ins-vessel" required value="${row.vesselName || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Shipping Onboard Dt</label>
              <input type="text" id="edit-ins-date" required value="${row.shippingOnboardDt || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Container No</label>
              <input type="text" id="edit-ins-container" required value="${row.containerNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Port of Loading</label>
              <input type="text" id="edit-ins-pol" required value="${row.portOfLoading || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Port of Discharge</label>
              <input type="text" id="edit-ins-pod" required value="${row.portOfDischarge || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Destination Country</label>
              <input type="text" id="edit-ins-country" required value="${row.destinationCountry || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Total Invoice Value (USD)</label>
              <input type="number" id="edit-ins-val" required min="1" step="0.01" value="${row.totalInvoiceValue || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
              <select id="edit-ins-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                <option value="DECLARATION_PENDING" ${row.status === 'DECLARATION_PENDING' ? 'selected' : ''}>DECLARATION PENDING</option>
                <option value="QUOTATION_UNDER_REVIEW" ${row.status === 'QUOTATION_UNDER_REVIEW' ? 'selected' : ''}>QUOTATION UNDER REVIEW</option>
                <option value="DRAFT_CERT_PREPARED" ${row.status === 'DRAFT_CERT_PREPARED' ? 'selected' : ''}>DRAFT CERT PREPARED</option>
                <option value="COVER_NOTE_ISSUED" ${row.status === 'COVER_NOTE_ISSUED' ? 'selected' : ''}>COVER NOTE ISSUED</option>
              </select>
            </div>
          </div>
        </form>
      `,
      actions: [
        {
          label: 'Cancel',
          className: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Changes',
          className: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: () => {
            const form = document.getElementById('form-edit-pending-insurance');
            if (form && !form.checkValidity()) {
              form.reportValidity();
              return;
            }

            row.invNo = document.getElementById('edit-ins-inv')?.value.trim() || row.invNo;
            row.year = document.getElementById('edit-ins-year')?.value || row.year;
            row.exporter = document.getElementById('edit-ins-exporter')?.value.trim() || row.exporter;
            row.consignee = document.getElementById('edit-ins-consignee')?.value.trim() || row.consignee;
            row.vesselName = document.getElementById('edit-ins-vessel')?.value.trim() || row.vesselName;
            row.shippingOnboardDt = document.getElementById('edit-ins-date')?.value.trim() || row.shippingOnboardDt;
            row.containerNo = document.getElementById('edit-ins-container')?.value.trim() || row.containerNo;
            row.portOfLoading = document.getElementById('edit-ins-pol')?.value.trim() || row.portOfLoading;
            row.portOfDischarge = document.getElementById('edit-ins-pod')?.value.trim() || row.portOfDischarge;
            row.destinationCountry = document.getElementById('edit-ins-country')?.value.trim() || row.destinationCountry;
            row.totalInvoiceValue = parseFloat(document.getElementById('edit-ins-val')?.value || '0') || row.totalInvoiceValue;
            row.cargoValueUsd = row.totalInvoiceValue;
            row.status = document.getElementById('edit-ins-status')?.value || row.status;

            Modal.close();
            Toast.show(`Insurance Declaration ${row.id} updated successfully`, 'success');
            if (typeof onUpdated === 'function') onUpdated();
          }
        }
      ]
    });
  },


  showCreateInsuranceTemplateModal(records = []) {
    if (!records || records.length === 0) {
      Toast.show('Please select at least one record to configure insurance.', 'warning');
      return;
    }

    const currentInsType = records[0]?.insuranceType || 'Marine Cargo Open Cover';
    const insuranceTypeOptions = [
      'Marine Cargo Open Cover',
      'All Risks - Institute Cargo Clauses (A)',
      'Institute Frozen Food Clauses (A)',
      'USA Sea Container - Comprehensive All Risks',
      'EU Frozen Seafood Standard Policy Template',
      'Marine Cargo Specific Voyage Policy',
      'Reefer Breakdown & Temperature Deviation Cover',
      'War, Strikes, Riots & Civil Commotions (SRCC)'
    ];

    if (!insuranceTypeOptions.includes(currentInsType) && currentInsType) {
      insuranceTypeOptions.unshift(currentInsType);
    }

    Modal.open({
      title: 'Create Insurance Template',
      size: 'md',
      content: `
        <div class="space-y-4 text-xs py-2">
          <div>
            <label for="ins-tbl-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1.5">
              Insurance Type <span class="text-[#DE350B]">*</span>
            </label>
            <select 
              id="ins-tbl-type" 
              class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs cursor-pointer" 
              required 
            >
              ${insuranceTypeOptions.map(opt => `<option value="${opt}" ${opt === currentInsType ? 'selected' : ''}>${opt}</option>`).join('')}
            </select>
          </div>
        </div>
      `,
      footer: `
        <div class="flex items-center justify-end gap-2.5">
          <button type="button" class="btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer" onclick="Modal.close()">Cancel</button>
          <button type="button" id="btn-save-insurance-changes" class="btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>Save</span>
          </button>
        </div>
      `
    });

    document.getElementById('btn-save-insurance-changes')?.addEventListener('click', () => {
      const insTypeValue = document.getElementById('ins-tbl-type')?.value?.trim() || 'Marine Cargo Open Cover';
      records.forEach(r => {
        r.insuranceType = insTypeValue;
      });
      Modal.close();
      Toast.show(`Insurance Type updated to "${insTypeValue}" successfully for ${records.length} shipment(s)!`, 'success');
    });
  },

    // Insurance Tab 2: Insurance Templates
  renderInsuranceTemplates(container) {
    const rawData = this.state.insuranceTemplates || [];
    const years = ['All Years', ...new Set(rawData.map(r => r.year).filter(Boolean))];

    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title strictly clean, no subheading per AGENTS.md Rule 2 and no action button per user request -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Insurance Templates</h1>
          </div>
        </div>

        <!-- Search & Filter Card (Customized according to new Data Table columns) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <!-- Circular 32x32 Reset Button -->
              <button type="button" id="flt-tpl-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <!-- Circular 32x32 Collapse/Expand Toggle Button -->
              <button type="button" id="flt-tpl-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <!-- Body: Margin-top 0, border-top none -->
          <div id="flt-tpl-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- 1. Select Year (INSURANCE TEMPLATE — Filter Fields per user specification) -->
            <div>
              <label for="flt-tpl-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Year</label>
              <select id="flt-tpl-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                ${years.map(y => `<option value="${y}">${y}</option>`).join('')}
              </select>
            </div>

            <!-- MANDATORY Search button always placed after the last input field -->
            <div class="flex items-end">
              <button type="button" id="flt-tpl-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="insurance-templates-table-container"></div>
      </div>
    `;

    // Render DataTable instance
    let dtInstance = null;
    const renderTable = (dataToDisplay) => {
      dtInstance = new DataTable({
        containerId: 'insurance-templates-table-container',
        data: dataToDisplay,
        keyField: 'invoiceTemplateNo',
        tableTitle: 'Insurance Templates',
        searchable: true,
        exportable: true,
        pageSize: 10,
        actionsTitle: 'Actions',
        columns: [
          {
            field: 'sNo',
            header: 'S.No',
            width: '80px',
            render: (v, r, idx) => `<span class="font-mono text-xs font-semibold text-[#5E6C84]">${v || (idx + 1)}</span>`
          },
          {
            field: 'invoiceTemplateNo',
            header: 'Invoice Template No',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v || '-'}</span>`
          },
          {
            field: 'generatedOn',
            header: 'Generated On',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] font-medium">${v || '-'}</span>`
          }
        ],
        actions: [
          {
            label: 'Download',
            icon: `<svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>`,
            tooltip: 'Download Invoice Template',
            onClick: (row) => {
              const contentText = `========================================\nDEVIFISHERIES ERP - INSURANCE TEMPLATE\n========================================\nTemplate No: ${row.invoiceTemplateNo}\nGenerated On: ${row.generatedOn}\nInsurance Type: ${row.insuranceType || 'Marine Cargo Open Cover'}\nExporter: ${row.exporter || 'Devi Fisheries Limited'}\nStatus: Active & Verified\n========================================`;
              const blob = new Blob([contentText], { type: 'text/plain;charset=utf-8' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${row.invoiceTemplateNo}.txt`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
              Toast.show(`Template ${row.invoiceTemplateNo} downloaded successfully!`, 'success');
            }
          },
          {
            label: 'Delete',
            icon: `<svg class="w-3.5 h-3.5 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            tooltip: 'Delete Invoice Template',
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Insurance Template',
                message: `Are you sure you want to delete template <strong>${row.invoiceTemplateNo}</strong>? This action cannot be undone.`,
                confirmText: 'Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  this.state.insuranceTemplates = (this.state.insuranceTemplates || []).filter(t => t.invoiceTemplateNo !== row.invoiceTemplateNo);
                  this.state.insuranceTemplates.forEach((t, i) => { t.sNo = i + 1; });
                  this.renderInsuranceTemplates(container);
                  Toast.show(`Template ${row.invoiceTemplateNo} deleted successfully!`, 'success');
                }
              });
            }
          }
        ]
      });
    };

    renderTable(rawData);

    // Filter search logic
    const applyFilters = () => {
      const yearVal = document.getElementById('flt-tpl-year')?.value || 'All Years';
      const filtered = (this.state.insuranceTemplates || []).filter(item => {
        if (yearVal !== 'All Years' && item.year !== yearVal) return false;
        return true;
      });
      renderTable(filtered);
    };

    document.getElementById('flt-tpl-search-btn')?.addEventListener('click', applyFilters);
    document.getElementById('flt-tpl-no')?.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') applyFilters();
    });
    document.getElementById('flt-tpl-date')?.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') applyFilters();
    });
    document.getElementById('flt-tpl-year')?.addEventListener('change', applyFilters);

    // Reset button
    document.getElementById('flt-tpl-reset-btn')?.addEventListener('click', () => {
      const y = document.getElementById('flt-tpl-year');
      const n = document.getElementById('flt-tpl-no');
      const d = document.getElementById('flt-tpl-date');
      if (y) y.value = 'All Years';
      if (n) n.value = '';
      if (d) d.value = '';
      renderTable(this.state.insuranceTemplates || []);
      Toast.show('Filters reset', 'info');
    });

    // Toggle button
    const toggleBtn = document.getElementById('flt-tpl-toggle-btn');
    const filterBody = document.getElementById('flt-tpl-body');
    if (toggleBtn && filterBody) {
      let isCollapsed = false;
      toggleBtn.addEventListener('click', () => {
        isCollapsed = !isCollapsed;
        filterBody.classList.toggle('hidden', isCollapsed);
        const svg = toggleBtn.querySelector('svg');
        if (svg) svg.style.transform = isCollapsed ? 'rotate(180deg)' : '';
        toggleBtn.title = isCollapsed ? 'Show Filter' : 'Hide Filter';
      });
    }
  },

    // Insurance Tab 3: Insurance Payments
  renderInsurancePayments(container) {
    const rawData = this.state.insurancePayments || [];
    const years = ['All Years', ...new Set(rawData.map(r => r.year).filter(Boolean))];

    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title strictly clean, no subheading per AGENTS.md Rule 2 and removed Record Premium Payment button per user request -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Insurance Payments</h1>
          </div>
        </div>

        <!-- Search & Filter Card (Filter Field: Select Year) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <!-- Circular 32x32 Reset Button -->
              <button type="button" id="flt-pay-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <!-- Circular 32x32 Collapse/Expand Toggle Button -->
              <button type="button" id="flt-pay-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <!-- Body: Margin-top 0, border-top none -->
          <div id="flt-pay-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- 1. Select Year -->
            <div>
              <label for="flt-pay-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Year</label>
              <select id="flt-pay-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                ${years.map(y => `<option value="${y}">${y}</option>`).join('')}
              </select>
            </div>

            <!-- MANDATORY Search button always placed after the last input field -->
            <div class="flex items-end">
              <button type="button" id="flt-pay-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="insurance-payments-table-container"></div>
      </div>
    `;

    // Render DataTable instance
    let dtInstance = null;
    const renderTable = (dataToDisplay) => {
      dtInstance = new DataTable({
        containerId: 'insurance-payments-table-container',
        data: dataToDisplay,
        keyField: 'insNo',
        tableTitle: 'Marine Premium Payments Register',
        searchable: true,
        exportable: true,
        selectable: true,
        showSelectedCount: false,
        pageSize: 10,
        toolbarButtons: [
          {
            id: 'btn-save-payments',
            label: 'Save',
            title: 'Save Payment Records',
            requiresSelection: true,
            variant: 'primary',
            className: 'btn-primary px-4 py-1.5 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white flex items-center gap-1.5 transition-all cursor-pointer',
            icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
            onClick: (keys, rows) => {
              const count = (keys && keys.length) || 1;
              Toast.show(`Saved ${count} marine premium payment record(s) successfully!`, 'success');
            }
          }
        ],
        columns: [
          {
            field: 'sNo',
            header: 'S.No.',
            width: '80px',
            render: (v, r, idx) => `<span class="font-mono text-xs font-semibold text-[#5E6C84]">${v || (idx + 1)}</span>`
          },
          {
            field: 'insNo',
            header: 'INS No',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v || '-'}</span>`
          },
          {
            field: 'invoices',
            header: 'Invoices',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] font-medium">${v || '-'}</span>`
          }
        ]
      });
    };

    renderTable(rawData);

    // Filter search logic
    const applyFilters = () => {
      const yearVal = document.getElementById('flt-pay-year')?.value || 'All Years';
      const filtered = (this.state.insurancePayments || []).filter(item => {
        if (yearVal !== 'All Years' && item.year !== yearVal) return false;
        return true;
      });
      renderTable(filtered);
    };

    document.getElementById('flt-pay-search-btn')?.addEventListener('click', applyFilters);
    document.getElementById('flt-pay-year')?.addEventListener('change', applyFilters);

    // Reset button
    document.getElementById('flt-pay-reset-btn')?.addEventListener('click', () => {
      const y = document.getElementById('flt-pay-year');
      if (y) y.value = 'All Years';
      renderTable(this.state.insurancePayments || []);
      Toast.show('Filters reset', 'info');
    });

    // Toggle button
    const toggleBtn = document.getElementById('flt-pay-toggle-btn');
    const filterBody = document.getElementById('flt-pay-body');
    if (toggleBtn && filterBody) {
      let isCollapsed = false;
      toggleBtn.addEventListener('click', () => {
        isCollapsed = !isCollapsed;
        filterBody.classList.toggle('hidden', isCollapsed);
        const svg = toggleBtn.querySelector('svg');
        if (svg) svg.style.transform = isCollapsed ? 'rotate(180deg)' : '';
        toggleBtn.title = isCollapsed ? 'Show Filter' : 'Hide Filter';
      });
    }
  },
  // ----------------------------------------------------
  // REUSABLE ENTERPRISE TABLE VIEW GENERATOR
  // ----------------------------------------------------
  renderGenericTablePage({ container, pageTitle, primaryBtnText, onPrimaryClick, filterFields, data, keyField, tableTitle, columns }) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title & Header Actions -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">${pageTitle}</h1>
          </div>
          ${primaryBtnText ? `
            <div class="inline-flex items-center gap-2">
              <button type="button" id="btn-sales-primary-action" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>${primaryBtnText}</span>
              </button>
            </div>
          ` : ''}
        </div>

        <!-- Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            ${(filterFields || []).map(f => `
              <div>
                <label for="${f.id}" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">${f.label}</label>
                ${f.type === 'select' ? `
                  <select id="${f.id}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    ${(f.options || []).map(o => `<option value="${o}">${o}</option>`).join('')}
                  </select>
                ` : `
                  <input type="text" id="${f.id}" placeholder="${f.placeholder || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                `}
              </div>
            `).join('')}
            <div class="flex items-end">
              <button type="button" id="flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="sales-generic-table-container"></div>
      </div>
    `;

    // Hook primary action
    if (primaryBtnText && typeof onPrimaryClick === 'function') {
      container.querySelector('#btn-sales-primary-action')?.addEventListener('click', onPrimaryClick);
    }

    // Toggle filter
    const toggleBtn = container.querySelector('#flt-toggle-btn');
    const filterBody = container.querySelector('#flt-body');
    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    // Render table
    const renderTable = (currentData) => {
      new DataTable({
        containerId: 'sales-generic-table-container',
        data: currentData,
        keyField: keyField || 'id',
        tableTitle: `${tableTitle} (${currentData.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns,
        actions: [
          {
            label: 'Download Document',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>`,
            onClick: (row) => Toast.show(`Downloading document for ${row[keyField]}...`, 'success')
          }
        ]
      });
    };

    renderTable(data);

    // Search and Reset handlers
    const searchBtn = container.querySelector('#flt-search-btn');
    const resetBtn = container.querySelector('#flt-reset-btn');

    searchBtn?.addEventListener('click', () => {
      let filtered = [...data];
      (filterFields || []).forEach(f => {
        const el = container.querySelector('#' + f.id);
        if (!el) return;
        const val = el.value.trim().toLowerCase();
        if (!val || val.startsWith('all')) return;
        filtered = filtered.filter(row => Object.values(row).some(v => String(v).toLowerCase().includes(val)));
      });
      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} record(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      (filterFields || []).forEach(f => {
        const el = container.querySelector('#' + f.id);
        if (!el) return;
        if (el.tagName === 'SELECT') el.selectedIndex = 0;
        else el.value = '';
      });
      renderTable(data);
      Toast.show('Filters reset', 'info');
    });
  },

};
