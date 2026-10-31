// Miledeep Enterprise ERP — Sales & Exports Module Views
// Comprehensive submenus: Dashboard, Orders (8 Workflow Tabs), Payments, Insurance

import { TabBar } from '../components/tabBar.js';
import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';
import { Skeleton } from '../components/skeleton.js';

export const SalesView = {
  state: {
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
        id: "CHA-01",
        agentCode: "CHA-01",
        agentName: "Seaways Shipping & Logistics Ltd",
        licenseNo: "CHA-PAN-VSP-0044",
        contactPerson: "K. V. Subba Rao",
        phone: "+91 891 2568901",
        email: "vizag.cha@seawayshipping.in",
        portLocation: "Visakhapatnam (INVTZ)",
        address: "Seaways House, 5th Floor, Harbour Park Road, Visakhapatnam - 530003",
        activeContainers: 8,
        totalCleared: 142,
        rating: "4.9 / 5.0",
        status: "ACTIVE_VERIFIED",
        panGst: "AAACS8849GST001",
        portRegNo: "VPA-CHA-REG-2021-99",
        authorizedScope: "Frozen Marine Products, Reefer Container Specialized",
        handlingLimit: "25 Containers / Week"
      },
      {
        id: "CHA-02",
        agentCode: "CHA-02",
        agentName: "Evergreen Maritime Cargo Agency",
        licenseNo: "CHA-PAN-VSP-0089",
        contactPerson: "R. Muralidhar",
        phone: "+91 891 2781190",
        email: "murali@evergreencargo.co.in",
        portLocation: "Visakhapatnam (INVTZ)",
        address: "Maritime Towers, Near Port Area, Visakhapatnam - 530001",
        activeContainers: 4,
        totalCleared: 98,
        rating: "4.8 / 5.0",
        status: "ACTIVE_VERIFIED",
        panGst: "AABCE3321GST002",
        portRegNo: "VPA-CHA-REG-2022-44",
        authorizedScope: "General Cargo & Perishable Foods Customs Clearance",
        handlingLimit: "15 Containers / Week"
      },
      {
        id: "CHA-03",
        agentCode: "CHA-03",
        agentName: "Visakha Ocean Transports Pvt Ltd",
        licenseNo: "CHA-PAN-VSP-0112",
        contactPerson: "Ch. Satyanarayana",
        phone: "+91 891 2893450",
        email: "satya.vsp@votlogistics.com",
        portLocation: "Visakhapatnam (INVTZ)",
        address: "Plot 14, Industrial Estate, Autonagar, Visakhapatnam - 530012",
        activeContainers: 2,
        totalCleared: 64,
        rating: "4.7 / 5.0",
        status: "ACTIVE_VERIFIED",
        panGst: "AABCV9912GST003",
        portRegNo: "VPA-CHA-REG-2023-12",
        authorizedScope: "Port Handling, Stuffing Supervision & Customs EDI Clearing",
        handlingLimit: "10 Containers / Week"
      },
      {
        id: "CHA-04",
        agentCode: "CHA-04",
        agentName: "Transworld Clearing & Forwarding Corp",
        licenseNo: "CHA-PAN-MAA-0077",
        contactPerson: "V. Ramakrishnan",
        phone: "+91 44 25223344",
        email: "chennai@transworldcargo.in",
        portLocation: "Chennai Port (INMAA)",
        address: "Rajaji Salai, Chennai Port Commercial Corridor - 600001",
        activeContainers: 3,
        totalCleared: 52,
        rating: "4.8 / 5.0",
        status: "ACTIVE_VERIFIED",
        panGst: "AAACT7721GST004",
        portRegNo: "CHPA-CHA-REG-2022-88",
        authorizedScope: "Southern Corridors & Ennore Port Transshipment Clearance",
        handlingLimit: "12 Containers / Week"
      }
    ],

    // 3. Payments Submenu datasets
    forwardContracts: [
      {
        contractNo: "FWD-2026-081",
        bankName: "State Bank of India (Forex Cell)",
        currencyPair: "USD/INR",
        bookingDate: "2026-10-15",
        maturityDate: "2026-12-31",
        contractRate: 84.65,
        bookedAmount: 250000,
        utilizedAmount: 180000,
        balanceAmount: 70000,
        purpose: "Export Realization Hedge - US Shrimp Shipments",
        status: "ACTIVE_OPEN"
      },
      {
        contractNo: "FWD-2026-082",
        bankName: "Canara Bank Overseas Branch",
        currencyPair: "USD/INR",
        bookingDate: "2026-10-10",
        maturityDate: "2026-11-30",
        contractRate: 84.78,
        bookedAmount: 500000,
        utilizedAmount: 500000,
        balanceAmount: 0,
        purpose: "Forward Sale Hedge - Japan Black Tiger Contract",
        status: "FULLY_UTILIZED"
      },
      {
        contractNo: "FWD-2026-083",
        bankName: "HDFC Bank Trade Finance",
        currencyPair: "EUR/INR",
        bookingDate: "2026-10-20",
        maturityDate: "2027-01-31",
        contractRate: 91.40,
        bookedAmount: 150000,
        utilizedAmount: 35000,
        balanceAmount: 115000,
        purpose: "Seabass Fillets Hedge - EU Buyer Coverage",
        status: "ACTIVE_OPEN"
      },
      {
        contractNo: "FWD-2026-084",
        bankName: "State Bank of India (Forex Cell)",
        currencyPair: "USD/INR",
        bookingDate: "2026-10-25",
        maturityDate: "2027-02-28",
        contractRate: 84.92,
        bookedAmount: 350000,
        utilizedAmount: 0,
        balanceAmount: 350000,
        purpose: "Sysco & Red Lobster Winter Export Hedge",
        status: "ACTIVE_OPEN"
      }
    ],

    collections: [
      {
        collectionRef: "COL-2026-401",
        invoiceNo: "INV-EXP-2026-301",
        contractNo: "SC-USA-2026-441",
        buyerName: "Red Lobster Supply Chain LLC",
        collectionBank: "Citibank N.A. New York (via SBI)",
        remittanceDate: "2026-10-22",
        currency: "USD",
        billAmount: 159300,
        amountCollected: 159300,
        bankCharges: 120,
        netReceived: 159180,
        settlementMode: "SWIFT Wire MT103",
        status: "RECEIVED_CREDITED"
      },
      {
        collectionRef: "COL-2026-402",
        invoiceNo: "INV-EXP-2026-302",
        contractNo: "SC-JPN-2026-112",
        buyerName: "Maruha Nichiro Corporation",
        collectionBank: "Bank of Tokyo-Mitsubishi (via Canara)",
        remittanceDate: "2026-10-18",
        currency: "USD",
        billAmount: 203000,
        amountCollected: 60900,
        bankCharges: 95,
        netReceived: 60805,
        settlementMode: "CAD Advance SWIFT",
        status: "PARTIALLY_COLLECTED"
      },
      {
        collectionRef: "COL-2026-403",
        invoiceNo: "INV-EXP-2026-304",
        contractNo: "SC-USA-2026-448",
        buyerName: "Sysco Corporation International",
        collectionBank: "JPMorgan Chase Bank (via SBI)",
        remittanceDate: "2026-10-28",
        currency: "USD",
        billAmount: 211200,
        amountCollected: 211200,
        bankCharges: 150,
        netReceived: 211050,
        settlementMode: "LC Negotiation Proceeds",
        status: "RECEIVED_CREDITED"
      },
      {
        collectionRef: "COL-2026-404",
        invoiceNo: "INV-EXP-2026-303",
        contractNo: "SC-EU-2026-079",
        buyerName: "Royal Greenland Seafood A/S",
        collectionBank: "Danske Bank Copenhagen (via HDFC)",
        remittanceDate: "2026-11-05",
        currency: "USD",
        billAmount: 134400,
        amountCollected: 0,
        bankCharges: 0,
        netReceived: 0,
        settlementMode: "LC at Sight under Maturity",
        status: "PENDING_COLLECTION"
      }
    ],

    negotiations: [
      {
        negotiationNo: "NEG-2026-192",
        lcNumber: "LC-CITI-US-991204",
        invoiceNo: "CINV-EXP-2026-551",
        negotiatingBank: "State Bank of India (Forex Cell)",
        submissionDate: "2026-10-18",
        billValueUsd: 159300,
        discountRate: "SOFR + 1.25%",
        netFinancedUsd: 156820,
        tenorDays: "30 Days Sight",
        discrepancyStatus: "CLEAN_DOCS_ACCEPTED",
        status: "DISCOUNTED_CREDITED"
      },
      {
        negotiationNo: "NEG-2026-193",
        lcNumber: "LC-CHASE-US-11029",
        invoiceNo: "CINV-EXP-2026-552",
        negotiatingBank: "State Bank of India (Forex Cell)",
        submissionDate: "2026-10-24",
        billValueUsd: 211200,
        discountRate: "SOFR + 1.20%",
        netFinancedUsd: 207915,
        tenorDays: "At Sight",
        discrepancyStatus: "CLEAN_DOCS_ACCEPTED",
        status: "DISCOUNTED_CREDITED"
      },
      {
        negotiationNo: "NEG-2026-194",
        lcNumber: "LC-DAN-DK-331092",
        invoiceNo: "CINV-EXP-2026-549",
        negotiatingBank: "HDFC Bank Trade Finance",
        submissionDate: "2026-10-27",
        billValueUsd: 134400,
        discountRate: "Fixed 6.25%",
        netFinancedUsd: 131880,
        tenorDays: "60 Days Sight",
        discrepancyStatus: "UNDER_SCRUTINY",
        status: "LODGED_IN_BANK"
      }
    ],

    realizations: [
      {
        realizationRef: "REAL-2026-551",
        shippingBillNo: "SB-2026-88401",
        sbDate: "2026-10-15",
        invoiceNo: "INV-EXP-2026-301",
        buyerName: "Red Lobster Supply Chain LLC",
        destinationCountry: "United States",
        invoiceValueUsd: 159300,
        unrealizedUsd: 0,
        dueDaysLeft: "0 Days (Settled)",
        edpmsStatus: "RECONCILED_EDPMS",
        status: "FULL_REALIZED"
      },
      {
        realizationRef: "REAL-2026-552",
        shippingBillNo: "SB-2026-88390",
        sbDate: "2026-10-11",
        invoiceNo: "INV-EXP-2026-302",
        buyerName: "Maruha Nichiro Corporation",
        destinationCountry: "Japan",
        invoiceValueUsd: 203000,
        unrealizedUsd: 142100,
        dueDaysLeft: "10 Days Remaining",
        edpmsStatus: "PARTIAL_OUTSTANDING",
        status: "PARTIALLY_REALIZED"
      },
      {
        realizationRef: "REAL-2026-553",
        shippingBillNo: "SB-2026-88455",
        sbDate: "2026-10-23",
        invoiceNo: "INV-EXP-2026-303",
        buyerName: "Royal Greenland Seafood A/S",
        destinationCountry: "Netherlands",
        invoiceValueUsd: 134400,
        unrealizedUsd: 134400,
        dueDaysLeft: "45 Days Remaining",
        edpmsStatus: "OPEN_EDPMS_BILL",
        status: "PENDING_REALIZATION"
      }
    ],

    realizationDone: [
      {
        doneRef: "BRC-2026-10081",
        eBrcNumber: "eBRC-SBI-2026-99214",
        shippingBillNo: "SB-2026-88401",
        sbDate: "2026-10-15",
        invoiceNo: "INV-EXP-2026-301",
        buyerName: "Red Lobster Supply Chain LLC",
        bankName: "State Bank of India (Forex Cell)",
        realizedDate: "2026-10-24",
        realizedUsd: 159300,
        exchangeRate: 84.62,
        realizedInr: 13479966,
        dgftStatus: "TRANSMITTED_DGFT_VERIFIED",
        status: "CLOSED_RECONCILED"
      },
      {
        doneRef: "BRC-2026-10082",
        eBrcNumber: "eBRC-SBI-2026-99215",
        shippingBillNo: "SB-2026-88365",
        sbDate: "2026-09-28",
        invoiceNo: "INV-EXP-2026-289",
        buyerName: "Sysco Corporation International",
        bankName: "State Bank of India (Forex Cell)",
        realizedDate: "2026-10-14",
        realizedUsd: 211200,
        exchangeRate: 84.45,
        realizedInr: 17835840,
        dgftStatus: "TRANSMITTED_DGFT_VERIFIED",
        status: "CLOSED_RECONCILED"
      },
      {
        doneRef: "BRC-2026-10083",
        eBrcNumber: "eBRC-CNB-2026-38201",
        shippingBillNo: "SB-2026-88310",
        sbDate: "2026-09-15",
        invoiceNo: "INV-EXP-2026-271",
        buyerName: "Maruha Nichiro Corporation",
        bankName: "Canara Bank Overseas Branch",
        realizedDate: "2026-10-02",
        realizedUsd: 185000,
        exchangeRate: 84.30,
        realizedInr: 15595500,
        dgftStatus: "TRANSMITTED_DGFT_VERIFIED",
        status: "CLOSED_RECONCILED"
      }
    ],

    // 4. Insurance Submenu datasets
    pendingInsurance: [
      {
        lotRef: "LOT-EXP-2026-088",
        contractNo: "SC-USA-2026-448",
        consignee: "Sysco Corporation International",
        cargoDescription: "Vannamei Cooked Tail-On 31/40 IQF (22,000 Kg)",
        cargoValueUsd: 211200,
        loadingPort: "Visakhapatnam Sea (INVTZ)",
        dischargePort: "New York Terminal, USA",
        etdDate: "2026-11-02",
        requiredClauses: "ICC (A) + Reefer Temp Deviation + War & Strikes",
        assignedUnderwriter: "The New India Assurance Co. Ltd.",
        status: "DECLARATION_PENDING"
      },
      {
        lotRef: "LOT-EXP-2026-089",
        contractNo: "SC-CAN-2026-033",
        consignee: "High Liner Foods Canada",
        cargoDescription: "Vannamei PDTO 21/25 IQF Bulk (16,500 Kg)",
        cargoValueUsd: 171600,
        loadingPort: "Visakhapatnam Sea (INVTZ)",
        dischargePort: "Vancouver Port, Canada",
        etdDate: "2026-11-08",
        requiredClauses: "ICC (A) Frozen Food Clause + 24hr Machinery",
        assignedUnderwriter: "United India Insurance Co. Ltd.",
        status: "QUOTATION_UNDER_REVIEW"
      },
      {
        lotRef: "LOT-EXP-2026-090",
        contractNo: "SC-EU-2026-082",
        consignee: "Direct Seafoods UK Ltd",
        cargoDescription: "Asian Seabass Whole Gutted 400-600g (10,000 Kg)",
        cargoValueUsd: 98000,
        loadingPort: "Visakhapatnam Sea (INVTZ)",
        dischargePort: "Felixstowe Port, UK",
        etdDate: "2026-11-14",
        requiredClauses: "ICC (A) Institute Frozen Food Clauses",
        assignedUnderwriter: "Pending Underwriter Selection",
        status: "DRAFT_CERT_PREPARED"
      }
    ],

    insuranceTemplates: [
      {
        templateCode: "TPL-MAR-USA-01",
        templateName: "USA Sea Container - Comprehensive All Risks",
        underwriter: "The New India Assurance Co. Ltd.",
        policyScope: "Visakhapatnam (INVTZ) to US East/West Coast Ports",
        clausesSummary: "Institute Cargo Clauses (A) 2009, War & Strikes, Reefer Breakdown 24h",
        premiumRate: "0.045% of CIF + 10%",
        deductibleUsd: 1000,
        currency: "USD",
        status: "ACTIVE_DEFAULT"
      },
      {
        templateCode: "TPL-MAR-EU-02",
        templateName: "EU Frozen Seafood Standard Policy Template",
        underwriter: "United India Insurance Co. Ltd.",
        policyScope: "Visakhapatnam (INVTZ) to Rotterdam / Antwerp / Hamburg",
        clausesSummary: "Institute Frozen Food Clauses (A), Temperature Variation, Port Delays",
        premiumRate: "0.048% of CIF + 10%",
        deductibleUsd: 850,
        currency: "EUR / USD",
        status: "ACTIVE_DEFAULT"
      },
      {
        templateCode: "TPL-MAR-JPN-03",
        templateName: "Japan HOSO / Sashimi Grade Transit Protocol",
        underwriter: "ICICI Lombard General Insurance",
        policyScope: "Visakhapatnam (INVTZ) to Tokyo / Yokohama / Osaka",
        clausesSummary: "All Risks Marine Cargo + Coldstore Pre-Shipment & Post-Discharge 15 Days",
        premiumRate: "0.052% of Invoice Value",
        deductibleUsd: 750,
        currency: "USD",
        status: "ACTIVE_VERIFIED"
      }
    ],

    insurancePayments: [
      {
        premInvoiceNo: "PREM-INV-2026-104",
        policyNo: "POL-MAR-2026-7701",
        underwriter: "The New India Assurance Co. Ltd.",
        cargoLot: "LOT-2026-00125",
        sumInsuredUsd: 175230,
        basicPremiumInr: 72800,
        gstTaxInr: 13104,
        totalPaidInr: 85904,
        paymentDate: "2026-10-17",
        paymentMode: "NEFT / Direct Debit",
        utrNumber: "UBIN26101788210",
        status: "PAID_RECEIPTED"
      },
      {
        premInvoiceNo: "PREM-INV-2026-105",
        policyNo: "POL-MAR-2026-7702",
        underwriter: "United India Insurance Co. Ltd.",
        cargoLot: "LOT-2026-00126",
        sumInsuredUsd: 223300,
        basicPremiumInr: 91400,
        gstTaxInr: 16452,
        totalPaidInr: 107852,
        paymentDate: "2026-10-13",
        paymentMode: "RTGS Bank Transfer",
        utrNumber: "SBIN26101344102",
        status: "PAID_RECEIPTED"
      },
      {
        premInvoiceNo: "PREM-INV-2026-106",
        policyNo: "POL-MAR-2026-7703",
        underwriter: "ICICI Lombard General Insurance",
        cargoLot: "LOT-2026-00128",
        sumInsuredUsd: 147840,
        basicPremiumInr: 61500,
        gstTaxInr: 11070,
        totalPaidInr: 72570,
        paymentDate: "2026-10-26",
        paymentMode: "Online Corporate Banking",
        utrNumber: "ICIC26102609912",
        status: "PAID_RECEIPTED"
      },
      {
        premInvoiceNo: "PREM-INV-2026-107",
        policyNo: "POL-MAR-2026-7704",
        underwriter: "The New India Assurance Co. Ltd.",
        cargoLot: "LOT-2026-00130",
        sumInsuredUsd: 232320,
        basicPremiumInr: 96500,
        gstTaxInr: 17370,
        totalPaidInr: 113870,
        paymentDate: "2026-11-04",
        paymentMode: "Treasury Cheque / Pending",
        utrNumber: "PENDING_CLEARING",
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
  // 1. DASHBOARD SUBMENU VIEW
  // ----------------------------------------------------
  renderDashboard(container) {
    const totalContracts = (this.state.contracts || []).length;
    const totalValue = (this.state.contracts || []).reduce((sum, c) => sum + (c.totalValueUsd || 0), 0);
    const activeDispatches = (this.state.etaStatusList || []).length;
    const realizedVal = (this.state.realizationDone || []).reduce((sum, p) => sum + (p.realizedUsd || 0), 0);
    const sumInsured = (this.state.pendingInsurance || []).reduce((sum, p) => sum + (p.cargoValueUsd || 0), 0);

    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title & Header Actions -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Sales &amp; Exports Commercial Dashboard</h1>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="btn-export-sales-summary" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Export Sales Summary</span>
            </button>
          </div>
        </div>

        <!-- 4 KPI Metrics Badges -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <p class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Total Export Orders</p>
              <h3 class="text-2xl font-extrabold text-[#172B4D] mt-1">$${(totalValue / 1000).toFixed(1)}k</h3>
              <p class="text-[11px] text-[#00A4B7] font-semibold mt-0.5">${totalContracts} Active Contracts</p>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#00A4B7] shrink-0 font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
          </div>

          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <p class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Active Dispatches</p>
              <h3 class="text-2xl font-extrabold text-[#006644] mt-1">${activeDispatches}</h3>
              <p class="text-[11px] text-[#00875A] font-semibold mt-0.5">Vessels In Transit</p>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#E3FCEF] border border-[#ABF5D1] flex items-center justify-center text-[#006644] shrink-0 font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
          </div>

          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <p class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Realized Revenue</p>
              <h3 class="text-2xl font-extrabold text-[#172B4D] mt-1">$${(realizedVal / 1000).toFixed(1)}k</h3>
              <p class="text-[11px] text-[#00A4B7] font-semibold mt-0.5">LC &amp; Bank Collections</p>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#00A4B7] shrink-0 font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>

          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <p class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Insured Cargo Value</p>
              <h3 class="text-2xl font-extrabold text-[#403294] mt-1">$${(sumInsured / 1000).toFixed(1)}k</h3>
              <p class="text-[11px] text-[#6554C0] font-semibold mt-0.5">100% Transit Marine Cover</p>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#EAE6FF] border border-[#D3C7FF] flex items-center justify-center text-[#403294] shrink-0 font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
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
              <button type="button" id="dash-flt-reset" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="dash-flt-toggle" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="dash-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Contract / Order No</label>
              <input type="text" id="dash-flt-no" placeholder="e.g. SC-USA" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Buyer / Importer</label>
              <input type="text" id="dash-flt-buyer" placeholder="e.g. Red Lobster" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Destination Country</label>
              <select id="dash-flt-dest" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Destinations</option>
                <option value="USA">United States (USA)</option>
                <option value="Japan">Japan</option>
                <option value="Netherlands">Netherlands (EU)</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
            <div class="flex items-end">
              <button type="button" id="dash-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="sales-dashboard-table-container"></div>
      </div>
    `;

    // Filter controls
    const toggleBtn = container.querySelector('#dash-flt-toggle');
    const resetBtn = container.querySelector('#dash-flt-reset');
    const searchBtn = container.querySelector('#dash-flt-search-btn');
    const filterBody = container.querySelector('#dash-flt-body');

    toggleBtn?.addEventListener('click', () => {
      filterBody?.classList.toggle('hidden');
      toggleBtn.querySelector('svg')?.classList.toggle('-rotate-90');
    });

    const renderTable = (data) => {
      new DataTable({
        containerId: 'sales-dashboard-table-container',
        data,
        keyField: 'contractNo',
        tableTitle: `Sales Contracts & Active Orders (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showProformaDetailsModal(row),
        columns: [
          {
            field: 'contractNo',
            header: 'Contract No',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer select-none">${v}</span>`
          },
          {
            field: 'customerName',
            header: 'Buyer / Importer',
            sortable: true,
            render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>`
          },
          {
            field: 'destination',
            header: 'Destination Port',
            sortable: true,
            render: (v) => `<span class="font-medium text-[#5E6C84] text-xs">${v}</span>`
          },
          {
            field: 'productDescription',
            header: 'Product Variety',
            sortable: true,
            render: (v) => `<span class="font-semibold text-[#172B4D] text-xs">${v}</span>`
          },
          {
            field: 'orderQuantityKg',
            header: 'Order Qty (Kg)',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-[#172B4D] text-xs">${Number(v).toLocaleString('en-IN')} Kg</span>`
          },
          {
            field: 'totalValueUsd',
            header: 'Contract Value (USD)',
            sortable: true,
            render: (v) => `<span class="font-mono font-extrabold text-[#006644] text-xs">$${Number(v).toLocaleString('en-IN')}</span>`
          },
          {
            field: 'etdDate',
            header: 'Target ETD',
            sortable: true,
            render: (v) => `<span class="font-mono text-[#5E6C84] text-xs">${v}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            sortable: true,
            render: (v) => {
              let cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              if (v.includes('SCHEDULED') || v.includes('STAGED')) cls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
              if (v.includes('CONFIRMED')) cls = 'bg-[#E0F2FE] text-[#00A4B7] border-[#BAE6FD]';
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase tracking-wider whitespace-nowrap">${v.replace(/_/g, ' ')}</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Download Contract',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>`,
            onClick: (row) => Toast.show(`Downloading contract PDF for ${row.contractNo}...`, 'success')
          }
        ]
      });
    };

    renderTable(this.state.contracts);

    searchBtn?.addEventListener('click', () => {
      const noVal = container.querySelector('#dash-flt-no')?.value?.trim().toLowerCase();
      const buyerVal = container.querySelector('#dash-flt-buyer')?.value?.trim().toLowerCase();
      const destVal = container.querySelector('#dash-flt-dest')?.value;

      let filtered = [...this.state.contracts];
      if (noVal) filtered = filtered.filter(c => c.contractNo.toLowerCase().includes(noVal));
      if (buyerVal) filtered = filtered.filter(c => c.customerName.toLowerCase().includes(buyerVal));
      if (destVal && destVal !== 'ALL') filtered = filtered.filter(c => c.destination.toLowerCase().includes(destVal.toLowerCase()));

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching contract(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      container.querySelector('#dash-flt-no').value = '';
      container.querySelector('#dash-flt-buyer').value = '';
      container.querySelector('#dash-flt-dest').selectedIndex = 0;
      renderTable(this.state.contracts);
      Toast.show('Filters reset', 'info');
    });

    container.querySelector('#btn-export-sales-summary')?.addEventListener('click', () => {
      Toast.show('Sales & Exports commercial summary exported to Excel.', 'success');
    });
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
      size: 'full',
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center justify-between pb-2.5 border-b border-[#F1F5F9]">
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
      size: 'full',
      content: `
        <form id="form-pi-details" class="space-y-4 text-xs">
          <!-- Section 1: Exporter & Processor Details -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Exporter, Processor &amp; Reference</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial Terms, Banking &amp; Currency</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Freight, Charges &amp; Remarks</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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

              <div class="sm:col-span-3">
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
      size: 'full',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Step 2 Form Input Fields (No border, No padding) -->
          <div class="bg-white rounded-xl">
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center justify-between pb-2.5 border-b border-[#F1F5F9]">
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
      size: 'full',
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center justify-between pb-2.5 border-b border-[#F1F5F9]">
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
      size: 'full',
      content: `
        <form id="form-ci-step1" class="space-y-4 text-xs">
          <!-- Section 1: Customs Invoice & Reference Numbers -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Port Routing, Weights &amp; Valuation</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
      size: 'full',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Form Input Fields (Variety & Pricing) - No border, No padding -->
          <div class="bg-white rounded-xl">
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center justify-between pb-2.5 border-b border-[#F1F5F9]">
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
          <div class="inline-flex items-center gap-2">
            <button type="button" id="btn-create-isf" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add ISF Filing</span>
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

    // Hook primary action button
    container.querySelector('#btn-create-isf')?.addEventListener('click', () => {
      this.showAddIsfModal(null);
    });

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
      size: 'full',
      content: `
        <form id="form-isf-modal" class="space-y-4 text-xs animate-fade-in">
          <!-- Section 1: Commercial & Invoice Identifiers -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial &amp; Invoice Reference</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
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

              <div class="sm:col-span-2 lg:col-span-1">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">P.INVOICE NO</label>
                <input type="text" id="isf-p-invoice-no" value="${d.pInvoiceNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#403294] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div class="sm:col-span-3 lg:col-span-6">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ADDRESS</label>
                <input type="text" id="isf-address" value="${d.address || ''}" placeholder="Consignee delivery address in USA" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 2: Shipping Line, Bills of Lading & Container -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Shipping Line, Bills of Lading &amp; Container Specifications</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center justify-between pb-2.5 border-b border-[#F1F5F9]">
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
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
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

                <div class="sm:col-span-2 lg:col-span-6 flex justify-end">
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
      size: 'full',
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center justify-between pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">SHIPPING BILLING &mdash; Form Input Fields (Top Section)</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-3">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">SHIPPING BILLING &mdash; Form Input Fields (Bottom Section)</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-3">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center justify-between pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center justify-between pb-2.5 border-b border-[#F1F5F9]">
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

            <div></div>

            <!-- Search Button placed inside 4-col grid -->
            <div class="flex items-end justify-end">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9] mb-4">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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

            <div></div>
            <div></div>

            <!-- Search Button placed inside 4-col grid -->
            <div class="flex items-end justify-end">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Logistics, Container Movement &amp; Release Dates</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-3">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">FDA / Regulatory Examination &amp; Admissibility</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-3">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
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
        <!-- Page Title & Header Actions (NO Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Clearing Agent (Custom House Agents &amp; Port Logistics)</h1>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="btn-create-cha" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add Clearing Agent</span>
            </button>
          </div>
        </div>

        <!-- Search & Filter Card (4-column responsive grid) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="flt-cha-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="flt-cha-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="flt-cha-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <!-- Agent Name -->
            <div>
              <label for="flt-cha-name" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Agent Name</label>
              <select id="flt-cha-name" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Agents</option>
                <option value="Seaways Shipping">Seaways Shipping &amp; Logistics Ltd</option>
                <option value="Evergreen Maritime">Evergreen Maritime Cargo Agency</option>
                <option value="Visakha Ocean">Visakha Ocean Transports Pvt Ltd</option>
                <option value="Transworld">Transworld Clearing &amp; Forwarding Corp</option>
              </select>
            </div>

            <!-- Customs License No -->
            <div>
              <label for="flt-cha-lic" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Customs License No</label>
              <input type="text" id="flt-cha-lic" placeholder="e.g. CHA-PAN" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>

            <!-- Port Location -->
            <div>
              <label for="flt-cha-port" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Port Location</label>
              <select id="flt-cha-port" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Ports</option>
                <option value="Visakhapatnam">Visakhapatnam Port (INVTZ)</option>
                <option value="Chennai">Chennai Port (INMAA)</option>
                <option value="Krishnapatnam">Krishnapatnam Port (INKRI)</option>
              </select>
            </div>

            <!-- Agent Status -->
            <div>
              <label for="flt-cha-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Agent Status</label>
              <select id="flt-cha-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Statuses</option>
                <option value="ACTIVE_VERIFIED">Active &amp; Verified</option>
                <option value="PENDING_AUDIT">Pending Audit</option>
              </select>
            </div>

            <!-- Search Button placed inside 4-col grid -->
            <div class="sm:col-span-2 md:col-span-4 flex items-end justify-end">
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

    // Hook primary action button
    container.querySelector('#btn-create-cha')?.addEventListener('click', () => {
      this.showAddClearingAgentModal(null);
    });

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
        tableTitle: `Clearing Agents Directory (${dataToDisplay.length})`,
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
            field: 'agentCode',
            header: 'Code',
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>`
          },
          {
            field: 'agentName',
            header: 'Clearing Agency Name',
            render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v || '-'}</span>`
          },
          {
            field: 'licenseNo',
            header: 'Customs License No',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v || '-'}</span>`
          },
          {
            field: 'contactPerson',
            header: 'CHA Incharge',
            render: (v) => `<span class="text-xs font-semibold text-[#172B4D]">${v || '-'}</span>`
          },
          {
            field: 'phone',
            header: 'Phone / Helpline',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v || '-'}</span>`
          },
          {
            field: 'activeContainers',
            header: 'Active Shipments',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F0F9FF] text-[#00A4B7] border border-[#BAE6FD]">${v || 0} Containers</span>`
          },
          {
            field: 'totalCleared',
            header: 'Lifetime Cleared',
            render: (v) => `<span class="font-mono text-xs font-bold text-[#172B4D]">${Number(v || 0).toLocaleString('en-IN')} TEUs</span>`
          },
          {
            field: 'rating',
            header: 'Audit Score',
            render: (v) => `<span class="font-mono text-xs text-[#006644] font-bold">${v || '★ 4.8'}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            render: (v) => {
              const val = String(v || '').toUpperCase();
              let cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              if (val.includes('AUDIT') || val.includes('PENDING')) {
                cls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
              }
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${val.replace(/_/g, ' ')}</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Edit Clearing Agent',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
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
      const name = container.querySelector('#flt-cha-name')?.value || 'ALL';
      const lic = container.querySelector('#flt-cha-lic')?.value?.trim().toUpperCase() || '';
      const port = container.querySelector('#flt-cha-port')?.value || 'ALL';
      const st = container.querySelector('#flt-cha-status')?.value || 'ALL';

      let filtered = [...this.state.clearingAgents];

      if (name !== 'ALL') {
        filtered = filtered.filter(r => (r.agentName || '').includes(name));
      }
      if (lic) {
        filtered = filtered.filter(r => (r.licenseNo || '').toUpperCase().includes(lic));
      }
      if (port !== 'ALL') {
        filtered = filtered.filter(r => (r.portLocation || '').includes(port));
      }
      if (st !== 'ALL') {
        filtered = filtered.filter(r => (r.status || '').toUpperCase().includes(st));
      }

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} clearing agency record(s)`, 'info');
    });

    resetBtn?.addEventListener('click', () => {
      if (container.querySelector('#flt-cha-name')) container.querySelector('#flt-cha-name').value = 'ALL';
      if (container.querySelector('#flt-cha-lic')) container.querySelector('#flt-cha-lic').value = '';
      if (container.querySelector('#flt-cha-port')) container.querySelector('#flt-cha-port').value = 'ALL';
      if (container.querySelector('#flt-cha-status')) container.querySelector('#flt-cha-status').value = 'ALL';
      renderTable(this.state.clearingAgents);
      Toast.show('Clearing agent filters reset', 'info');
    });
  },

  // Modal: Add / Onboard Clearing Agent (CHA)
  showAddClearingAgentModal(targetRow) {
    const nextIdx = this.state.clearingAgents.length + 1;
    const isEdit = !!targetRow;
    const d = targetRow || {
      id: `CHA-${String(nextIdx).padStart(2, '0')}`,
      agentCode: `CHA-${String(nextIdx).padStart(2, '0')}`,
      agentName: "",
      licenseNo: `CHA-PAN-VSP-${String(100 + nextIdx)}`,
      contactPerson: "",
      phone: "+91 891 ",
      email: "@logistics.in",
      portLocation: "Visakhapatnam (INVTZ)",
      address: "Port Commercial Corridor, Visakhapatnam",
      activeContainers: 0,
      totalCleared: 0,
      rating: "5.0 / 5.0",
      status: "ACTIVE_VERIFIED",
      panGst: "AABCS9920GST001",
      portRegNo: `VPA-CHA-REG-2026-${10 + nextIdx}`,
      authorizedScope: "Frozen Marine Seafood Cargo, Reefer Containers",
      handlingLimit: "20 Containers / Week"
    };

    Modal.open({
      title: isEdit ? `Edit Clearing Agent - ${d.agentName || d.agentCode}` : 'Onboard Custom House Agent (CHA)',
      size: 'xl',
      content: `
        <form id="form-cha-modal" class="space-y-4 text-xs animate-fade-in">
          <!-- Section 1: Agency Identification & Customs Licensing -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Agency Identification &amp; Customs Licensing</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AGENT CODE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="cha-form-code" value="${d.agentCode || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CLEARING AGENCY NAME <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="cha-form-name" value="${d.agentName || ''}" placeholder="e.g. Seaways Shipping & Logistics Ltd" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CUSTOMS LICENSE NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="cha-form-lic" value="${d.licenseNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT REGISTRATION NO</label>
                <input type="text" id="cha-form-port-reg" value="${d.portRegNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAN / GST NUMBER</label>
                <input type="text" id="cha-form-pan" value="${d.panGst || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 2: Contact Person & Communication -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Contact Person &amp; Communication Channels</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CHA INCHARGE / CONTACT PERSON <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="cha-form-contact" value="${d.contactPerson || ''}" placeholder="e.g. K. V. Subba Rao" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PHONE / DIRECT HELPLINE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="cha-form-phone" value="${d.phone || ''}" placeholder="+91 891 2568901" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">OFFICIAL EMAIL <span class="text-[#DE350B]">*</span></label>
                <input type="email" id="cha-form-email" value="${d.email || ''}" placeholder="ops@agency.com" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
              </div>

              <div class="sm:col-span-3">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">OPERATIONS OFFICE ADDRESS</label>
                <input type="text" id="cha-form-address" value="${d.address || ''}" placeholder="Harbour Park Road, Visakhapatnam" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>
            </div>
          </div>

          <!-- Section 3: Operations & Compliance Scope -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Operations Capacity &amp; Compliance Verification</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRIMARY PORT OF OPERATION</label>
                <select id="cha-form-port" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Visakhapatnam (INVTZ)" ${d.portLocation?.includes('Visakhapatnam') ? 'selected' : ''}>Visakhapatnam Port (INVTZ)</option>
                  <option value="Chennai Port (INMAA)" ${d.portLocation?.includes('Chennai') ? 'selected' : ''}>Chennai Port (INMAA)</option>
                  <option value="Krishnapatnam Port (INKRI)" ${d.portLocation?.includes('Krishnapatnam') ? 'selected' : ''}>Krishnapatnam Port (INKRI)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">HANDLING CAPACITY</label>
                <input type="text" id="cha-form-limit" value="${d.handlingLimit || '25 Containers / Week'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AGENT STATUS <span class="text-[#DE350B]">*</span></label>
                <select id="cha-form-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" required>
                  <option value="ACTIVE_VERIFIED" ${d.status === 'ACTIVE_VERIFIED' ? 'selected' : ''}>Active &amp; Verified</option>
                  <option value="PENDING_AUDIT" ${d.status === 'PENDING_AUDIT' ? 'selected' : ''}>Pending Audit</option>
                </select>
              </div>

              <div class="sm:col-span-3">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AUTHORIZED COMMODITY HANDLING SCOPE</label>
                <input type="text" id="cha-form-scope" value="${d.authorizedScope || 'Frozen Marine Products, Reefer Container Specialized'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
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
          label: isEdit ? 'Update Clearing Agent' : 'Save Clearing Agent',
          type: 'primary',
          onClick: (modal) => {
            const getVal = (id) => document.getElementById(id)?.value?.trim() || '';

            const codeVal = getVal('cha-form-code');
            const nameVal = getVal('cha-form-name');
            const licVal = getVal('cha-form-lic');
            const contactVal = getVal('cha-form-contact');
            const phoneVal = getVal('cha-form-phone');
            const emailVal = getVal('cha-form-email');

            if (!codeVal || !nameVal || !licVal || !contactVal || !phoneVal || !emailVal) {
              Toast.show('Please fill in all mandatory fields marked with *', 'warning');
              return;
            }

            const updatedData = {
              ...d,
              agentCode: codeVal,
              agentName: nameVal,
              licenseNo: licVal,
              portRegNo: getVal('cha-form-port-reg'),
              panGst: getVal('cha-form-pan'),
              contactPerson: contactVal,
              phone: phoneVal,
              email: emailVal,
              address: getVal('cha-form-address'),
              portLocation: getVal('cha-form-port'),
              handlingLimit: getVal('cha-form-limit'),
              status: getVal('cha-form-status'),
              authorizedScope: getVal('cha-form-scope')
            };

            if (isEdit && targetRow) {
              Object.assign(targetRow, updatedData);
              Toast.show(`Clearing Agent ${targetRow.agentName} updated successfully`, 'success');
            } else {
              this.state.clearingAgents.unshift(updatedData);
              Toast.show(`Clearing Agent ${updatedData.agentName} onboarded successfully`, 'success');
            }

            modal.close();
            const mainEl = document.getElementById('sales-view-main');
            if (mainEl) this.renderClearingAgent(mainEl);
          }
        }
      ]
    });
  },

  // Modal: Clearing Agent Details View (On Row Click)
  showClearingAgentDetailsModal(row) {
    const d = row || {};
    const val = String(d.status || '').toUpperCase();
    let statusClass = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
    if (val.includes('AUDIT') || val.includes('PENDING')) {
      statusClass = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
    }

    Modal.open({
      title: `Clearing Agent Profile - ${d.agentName || d.agentCode}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs animate-fade-in">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-bold text-[#0F172A] text-base">${d.agentName || d.agentCode}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase border ${statusClass}">${val.replace(/_/g, ' ')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${d.agentCode}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span><strong>License:</strong> ${d.licenseNo || '-'}</span>
                  <span>•</span>
                  <span><strong>Port:</strong> ${d.portLocation || '-'}</span>
                  <span>•</span>
                  <span><strong>Incharge:</strong> ${d.contactPerson || '-'}</span>
                </div>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2 shrink-0">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Active Shipments</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs mt-0.5 block">${d.activeContainers || 0} Cont.</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[85px]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Lifetime Cleared</span>
                <span class="font-mono font-extrabold text-[#172B4D] text-xs mt-0.5 block">${Number(d.totalCleared || 0).toLocaleString('en-IN')} TEUs</span>
              </div>
              <div class="bg-white px-3.5 py-1.5 rounded-lg border border-[#ABF5D1] bg-[#F0FDF4] shadow-2xs text-center min-w-[95px]">
                <span class="text-[10px] font-bold text-[#006644] uppercase tracking-wider block">Audit Score</span>
                <span class="font-mono font-extrabold text-[#006644] text-xs mt-0.5 block">${d.rating || '★ 4.9'}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Customs License & Government Authorizations -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Customs License &amp; Government Registrations</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">AGENT CODE</span>
                <span class="font-mono font-extrabold text-[#00A4B7] text-xs block mt-0.5">${d.agentCode || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CUSTOMS LICENSE NO</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${d.licenseNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PORT AUTHORITY REG NO</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${d.portRegNo || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PAN / GST NUMBER</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${d.panGst || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PRIMARY PORT LOCATION</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.portLocation || '-'}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">AUTHORIZED COMMODITY SCOPE</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${d.authorizedScope || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Contact Information & Operations Base -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 border-b border-[#F1F5F9]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Contact Information &amp; Operational Base</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CHA INCHARGE</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${d.contactPerson || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PHONE / DIRECT LINE</span>
                <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${d.phone || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">OFFICIAL EMAIL</span>
                <span class="text-[#172B4D] font-semibold text-xs block mt-0.5">${d.email || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">WEEKLY HANDLING CAPACITY</span>
                <span class="font-bold text-[#006644] text-xs block mt-0.5">${d.handlingLimit || '-'}</span>
              </div>
              <div class="sm:col-span-4">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">OPERATIONS OFFICE ADDRESS</span>
                <span class="text-[#5E6C84] text-xs block mt-0.5 bg-[#F8FAFC] p-2.5 rounded border border-[#F1F5F9]">${d.address || '-'}</span>
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
          label: 'Print CHA Profile',
          type: 'secondary',
          onClick: () => Toast.show(`Printing official agency dossier for ${d.agentName}...`, 'info')
        },
        {
          label: 'Edit Agent Profile',
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
    this.renderGenericTablePage({
      container,
      pageTitle: 'Forward Contracts (Foreign Currency Forex Hedging)',
            primaryBtnText: 'Book Forward Contract',
      onPrimaryClick: () => Toast.show('Booking form for Foreign Exchange Forward Contract opened', 'info'),
      filterFields: [
        { id: 'fwd-no', label: 'Contract No', placeholder: 'e.g. FWD-2026' },
        { id: 'fwd-bank', label: 'Bank Name', placeholder: 'e.g. State Bank of India' },
        { id: 'fwd-pair', label: 'Currency Pair', type: 'select', options: ['All Currency Pairs', 'USD/INR', 'EUR/INR', 'GBP/INR'] },
        { id: 'fwd-status', label: 'Contract Status', type: 'select', options: ['All Status', 'Active & Open', 'Fully Utilized'] }
      ],
      data: this.state.forwardContracts,
      keyField: 'contractNo',
      tableTitle: 'Forward Contracts Register',
      columns: [
        { field: 'contractNo', header: 'Contract No', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'bankName', header: 'Treasury / Forex Bank', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'currencyPair', header: 'Pair', render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${v}</span>` },
        { field: 'contractRate', header: 'Booked Rate (INR)', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644]">₹${Number(v).toFixed(2)}</span>` },
        { field: 'bookedAmount', header: 'Booked (FC)', render: (v, r) => `<span class="font-mono font-bold text-xs text-[#172B4D]">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'utilizedAmount', header: 'Utilized (FC)', render: (v) => `<span class="font-mono text-xs font-semibold text-[#5E6C84]">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'balanceAmount', header: 'Available Balance', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'maturityDate', header: 'Maturity Date', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'purpose', header: 'Hedging Purpose', render: (v) => `<span class="text-[11px] text-[#5E6C84] truncate max-w-[200px] block" title="${v}">${v}</span>` },
        {
          field: 'status',
          header: 'Status',
          render: (v) => {
            const cls = v.includes('ACTIVE') ? 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]' : 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
            return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
          }
        }
      ]
    });
  },

  // Payments Tab 2: Collections
  renderCollections(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Export Collections (Buyer Inward Remittances)',
            primaryBtnText: 'Record Collection Advice',
      onPrimaryClick: () => Toast.show('Inward remittance collection recording modal opened', 'info'),
      filterFields: [
        { id: 'col-ref', label: 'Collection Ref', placeholder: 'e.g. COL-2026' },
        { id: 'col-inv', label: 'Invoice No', placeholder: 'e.g. INV-EXP' },
        { id: 'col-buyer', label: 'Buyer Name', placeholder: 'e.g. Red Lobster' },
        { id: 'col-status', label: 'Collection Status', type: 'select', options: ['All Status', 'Received & Credited', 'Partially Collected', 'Pending Collection'] }
      ],
      data: this.state.collections,
      keyField: 'collectionRef',
      tableTitle: 'Export Inward Remittance Collections',
      columns: [
        { field: 'collectionRef', header: 'Collection Ref', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'invoiceNo', header: 'Invoice No', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'buyerName', header: 'Buyer / Consignee', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'collectionBank', header: 'Remitting & Nostro Bank', render: (v) => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'billAmount', header: 'Gross Bill Value', render: (v, r) => `<span class="font-mono font-bold text-xs text-[#172B4D]">${r.currency} $${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'bankCharges', header: 'Bank Charges', render: (v) => `<span class="font-mono text-xs text-[#DE350B] font-semibold">-$${Number(v)}</span>` },
        { field: 'netReceived', header: 'Net Proceeds', render: (v, r) => `<span class="font-mono font-extrabold text-xs text-[#006644]">${r.currency} $${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'settlementMode', header: 'Mode & Channel', render: (v) => `<span class="text-[11px] text-[#5E6C84] font-medium">${v}</span>` },
        { field: 'remittanceDate', header: 'Value Date', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        {
          field: 'status',
          header: 'Status',
          render: (v) => {
            const cls = v.includes('RECEIVED') ? 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]' : (v.includes('PARTIAL') ? 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]' : 'bg-[#E0F2FE] text-[#00A4B7] border-[#BAE6FD]');
            return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
          }
        }
      ]
    });
  },

  // Payments Tab 3: Negotiations
  renderNegotiations(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Export Bill Negotiations (Bank LC Discounting)',
            primaryBtnText: 'Submit Bill for Negotiation',
      onPrimaryClick: () => Toast.show('Export bill lodgement / discounting form opened', 'info'),
      filterFields: [
        { id: 'neg-no', label: 'Negotiation No', placeholder: 'e.g. NEG-2026' },
        { id: 'neg-lc', label: 'LC Reference', placeholder: 'e.g. LC-CITI' },
        { id: 'neg-bank', label: 'Negotiating Bank', placeholder: 'e.g. State Bank of India' },
        { id: 'neg-status', label: 'Negotiation Status', type: 'select', options: ['All Status', 'Discounted & Credited', 'Lodged in Bank', 'Discrepant'] }
      ],
      data: this.state.negotiations,
      keyField: 'negotiationNo',
      tableTitle: 'LC Export Bill Negotiations',
      columns: [
        { field: 'negotiationNo', header: 'Negotiation No', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'lcNumber', header: 'LC Reference', render: (v) => `<span class="font-mono text-xs font-bold text-[#403294]">${v}</span>` },
        { field: 'invoiceNo', header: 'Commercial Invoice', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'negotiatingBank', header: 'Financing Bank', render: (v) => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'billValueUsd', header: 'Document Value', render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D]">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'discountRate', header: 'Discount Rate', render: (v) => `<span class="font-mono text-xs font-semibold text-[#5E6C84]">${v}</span>` },
        { field: 'netFinancedUsd', header: 'Net Financed Amount', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644]">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'tenorDays', header: 'LC Tenor', render: (v) => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        {
          field: 'discrepancyStatus',
          header: 'Discrepancy Audit',
          render: (v) => {
            const cls = v.includes('CLEAN') ? 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]' : 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
            return `<span class="px-2 py-0.5 rounded text-[10px] font-bold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
          }
        },
        {
          field: 'status',
          header: 'Status',
          render: (v) => {
            const cls = v.includes('DISCOUNTED') ? 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]' : 'bg-[#E0F2FE] text-[#00A4B7] border-[#BAE6FD]';
            return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
          }
        }
      ]
    });
  },

  // Payments Tab 4: Realization
  renderRealization(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Export Realization (RBI EDPMS Compliance & Aging)',
            primaryBtnText: 'Update EDPMS Realization',
      onPrimaryClick: () => Toast.show('Realization status update modal opened', 'info'),
      filterFields: [
        { id: 'real-sb', label: 'Shipping Bill No', placeholder: 'e.g. SB-2026' },
        { id: 'real-inv', label: 'Invoice No', placeholder: 'e.g. INV-EXP' },
        { id: 'real-buyer', label: 'Buyer / Country', placeholder: 'e.g. USA' },
        { id: 'real-status', label: 'EDPMS Status', type: 'select', options: ['All Status', 'Full Realized', 'Partially Realized', 'Pending Realization'] }
      ],
      data: this.state.realizations,
      keyField: 'realizationRef',
      tableTitle: 'Export Realization & EDPMS Register',
      columns: [
        { field: 'realizationRef', header: 'Realization Ref', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'shippingBillNo', header: 'Shipping Bill No', render: (v, r) => `<span class="font-mono font-bold text-xs text-[#172B4D]">${v}</span><span class="text-[10px] text-[#5E6C84] block">${r.sbDate}</span>` },
        { field: 'invoiceNo', header: 'Export Invoice', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'buyerName', header: 'Buyer / Destination', render: (v, r) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span><span class="text-[10px] text-[#5E6C84] block">${r.destinationCountry}</span>` },
        { field: 'invoiceValueUsd', header: 'FOB / CIF (USD)', render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D]">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'unrealizedUsd', header: 'Unrealized Balance', render: (v) => `<span class="font-mono font-bold text-xs ${v > 0 ? 'text-[#DE350B]' : 'text-[#006644]'}">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'dueDaysLeft', header: 'RBI Maturity Window', render: (v) => `<span class="text-xs font-semibold text-[#5E6C84]">${v}</span>` },
        {
          field: 'edpmsStatus',
          header: 'EDPMS Bill Status',
          render: (v) => {
            const cls = v.includes('RECONCILED') ? 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]' : 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
            return `<span class="px-2 py-0.5 rounded text-[10px] font-bold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
          }
        },
        {
          field: 'status',
          header: 'Status',
          render: (v) => {
            const cls = v.includes('FULL') ? 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]' : (v.includes('PARTIAL') ? 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]' : 'bg-[#E0F2FE] text-[#00A4B7] border-[#BAE6FD]');
            return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
          }
        }
      ]
    });
  },

  // Payments Tab 5: Realization Done
  renderRealizationDone(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Realization Done (DGFT e-BRC Certificates & Closures)',
            primaryBtnText: 'Download e-BRC Bulk',
      onPrimaryClick: () => Toast.show('Preparing e-BRC certified export package download...', 'success'),
      filterFields: [
        { id: 'brc-no', label: 'e-BRC Number', placeholder: 'e.g. eBRC-SBI' },
        { id: 'brc-sb', label: 'Shipping Bill No', placeholder: 'e.g. SB-2026' },
        { id: 'brc-buyer', label: 'Buyer Name', placeholder: 'e.g. Red Lobster' },
        { id: 'brc-bank', label: 'Authorized Dealer Bank', type: 'select', options: ['All Banks', 'State Bank of India', 'Canara Bank', 'HDFC Bank'] }
      ],
      data: this.state.realizationDone,
      keyField: 'doneRef',
      tableTitle: 'Closed Realizations & DGFT e-BRCs',
      columns: [
        { field: 'eBrcNumber', header: 'e-BRC Number', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'shippingBillNo', header: 'Shipping Bill No', render: (v, r) => `<span class="font-mono font-bold text-xs text-[#172B4D]">${v}</span><span class="text-[10px] text-[#5E6C84] block">${r.sbDate}</span>` },
        { field: 'invoiceNo', header: 'Export Invoice', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'buyerName', header: 'Foreign Buyer', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'bankName', header: 'AD Bank Branch', render: (v) => `<span class="text-xs text-[#5E6C84] font-medium">${v}</span>` },
        { field: 'realizedUsd', header: 'Realized (USD)', render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D]">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'exchangeRate', header: 'Realized Ex. Rate', render: (v) => `<span class="font-mono text-xs font-semibold text-[#5E6C84]">₹${Number(v).toFixed(2)}</span>` },
        { field: 'realizedInr', header: 'Gross INR Realized', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644]">₹${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'realizedDate', header: 'Realized Date', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        {
          field: 'dgftStatus',
          header: 'DGFT Integration',
          render: (v) => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] uppercase">DGFT TRANSMITTED</span>`
        },
        {
          field: 'status',
          header: 'Status',
          render: (v) => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] uppercase">CLOSED</span>`
        }
      ]
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
    this.renderGenericTablePage({
      container,
      pageTitle: 'Pending Insurance (Marine Declarations & Coverage Underwriting)',
            primaryBtnText: 'Generate Marine Declaration',
      onPrimaryClick: () => Toast.show('Marine Declaration generation modal opened', 'info'),
      filterFields: [
        { id: 'pi-lot', label: 'Cargo Lot Ref', placeholder: 'e.g. LOT-EXP' },
        { id: 'pi-contract', label: 'Contract No', placeholder: 'e.g. SC-USA' },
        { id: 'pi-consignee', label: 'Consignee / Importer', placeholder: 'e.g. Sysco' },
        { id: 'pi-status', label: 'Insurance Status', type: 'select', options: ['All Status', 'Declaration Pending', 'Quotation Under Review', 'Draft Cert Prepared'] }
      ],
      data: this.state.pendingInsurance,
      keyField: 'lotRef',
      tableTitle: 'Pending Cargo Insurance Lots',
      columns: [
        { field: 'lotRef', header: 'Lot Ref', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'contractNo', header: 'Contract No', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'consignee', header: 'Buyer / Consignee', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'cargoDescription', header: 'Cargo Specifications', render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[220px] block" title="${v}">${v}</span>` },
        { field: 'cargoValueUsd', header: 'Declared CIF (USD)', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644]">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'dischargePort', header: 'Port of Discharge', render: (v) => `<span class="text-xs text-[#5E6C84] font-medium">${v}</span>` },
        { field: 'etdDate', header: 'Planned ETD', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'assignedUnderwriter', header: 'Assigned Underwriter', render: (v) => `<span class="text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'requiredClauses', header: 'Requested Risk Scope', render: (v) => `<span class="text-[11px] text-[#5E6C84] truncate max-w-[200px] block" title="${v}">${v}</span>` },
        {
          field: 'status',
          header: 'Status',
          render: (v) => {
            const cls = v.includes('PENDING') ? 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]' : 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
            return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
          }
        }
      ]
    });
  },

  // Insurance Tab 2: Insurance Templates
  renderInsuranceTemplates(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Insurance Templates (Marine Policy & Endorsement Presets)',
            primaryBtnText: 'Create Insurance Template',
      onPrimaryClick: () => Toast.show('New Marine Insurance Template creation modal opened', 'info'),
      filterFields: [
        { id: 'tpl-code', label: 'Template Code', placeholder: 'e.g. TPL-MAR' },
        { id: 'tpl-name', label: 'Template Name', placeholder: 'e.g. Comprehensive' },
        { id: 'tpl-underwriter', label: 'Underwriter', type: 'select', options: ['All Underwriters', 'The New India Assurance Co. Ltd.', 'United India Insurance Co. Ltd.', 'ICICI Lombard General Insurance'] },
        { id: 'tpl-status', label: 'Status', type: 'select', options: ['All Status', 'Active & Default', 'Active & Verified'] }
      ],
      data: this.state.insuranceTemplates,
      keyField: 'templateCode',
      tableTitle: 'Marine Policy Templates Library',
      columns: [
        { field: 'templateCode', header: 'Template Code', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'templateName', header: 'Policy Template Name', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'underwriter', header: 'Insurance Partner', render: (v) => `<span class="text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'policyScope', header: 'Voyage Scope', render: (v) => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'premiumRate', header: 'Tariff Premium Rate', render: (v) => `<span class="font-mono font-bold text-xs text-[#006644]">${v}</span>` },
        { field: 'deductibleUsd', header: 'Policy Deductible', render: (v, r) => `<span class="font-mono text-xs text-[#5E6C84] font-semibold">$${v} (${r.currency})</span>` },
        { field: 'clausesSummary', header: 'Standard Risk Endorsements', render: (v) => `<span class="text-[11px] text-[#5E6C84] truncate max-w-[240px] block" title="${v}">${v}</span>` },
        {
          field: 'status',
          header: 'Template Status',
          render: (v) => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] uppercase">${v.replace(/_/g, ' ')}</span>`
        }
      ]
    });
  },

  // Insurance Tab 3: Insurance Payments
  renderInsurancePayments(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Insurance Payments (Marine Premium Disbursements)',
            primaryBtnText: 'Record Premium Payment',
      onPrimaryClick: () => Toast.show('Premium payment disbursement form opened', 'info'),
      filterFields: [
        { id: 'ip-inv', label: 'Premium Invoice', placeholder: 'e.g. PREM-INV' },
        { id: 'ip-pol', label: 'Policy No', placeholder: 'e.g. POL-MAR' },
        { id: 'ip-underwriter', label: 'Underwriter', type: 'select', options: ['All Underwriters', 'The New India Assurance Co. Ltd.', 'United India Insurance Co. Ltd.', 'ICICI Lombard General Insurance'] },
        { id: 'ip-status', label: 'Payment Status', type: 'select', options: ['All Status', 'Paid & Receipted', 'Approval Pending'] }
      ],
      data: this.state.insurancePayments,
      keyField: 'premInvoiceNo',
      tableTitle: 'Marine Premium Payments Register',
      columns: [
        { field: 'premInvoiceNo', header: 'Premium Invoice', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'policyNo', header: 'Policy / Cover Note', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'underwriter', header: 'Underwriter', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'cargoLot', header: 'Cargo Lot', render: (v) => `<span class="font-mono text-xs text-[#5E6C84] font-medium">${v}</span>` },
        { field: 'sumInsuredUsd', header: 'Sum Insured', render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D]">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'basicPremiumInr', header: 'Basic Premium', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">₹${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'gstTaxInr', header: 'GST (18%)', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">₹${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'totalPaidInr', header: 'Total Paid (INR)', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644]">₹${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'utrNumber', header: 'Bank UTR Ref', render: (v) => `<span class="font-mono text-[11px] text-[#403294] font-bold">${v}</span>` },
        { field: 'paymentDate', header: 'Payment Date', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        {
          field: 'status',
          header: 'Payment Status',
          render: (v) => {
            const cls = v.includes('PAID') ? 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]' : 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
            return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
          }
        }
      ]
    });
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
