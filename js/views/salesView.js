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
        cifValueUsd: 159300,
        customsStatus: "LEO_GRANTED"
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
        fobValueUsd: 203000,
        cifValueUsd: 203000,
        customsStatus: "ASSESSED_CLEARED"
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
        customsStatus: "UNDER_EXAMINATION"
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
        netWeightKg: 22000,
        grossWeightKg: 23760,
        fobValueUsd: 204000,
        cifValueUsd: 211200,
        customsStatus: "LEO_GRANTED"
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
        fobValueUsd: 156000,
        cifValueUsd: 163350,
        customsStatus: "DRAFT_REGISTERED"
      }
    ],

    isfDetails: [
      {
        isfNumber: "ISF-USA-2026-112",
        contractNo: "SC-USA-2026-441",
        importerOfRecord: "Red Lobster Supply Chain LLC (EIN: 59-2819033)",
        consigneeNo: "US-CON-884021",
        sellerName: "Devi Fisheries Limited, Unit-1 Vizag",
        buyerName: "Red Lobster Supply Chain LLC",
        containerNo: "ONEU-440912-8",
        vesselName: "M/V ONE HARMONY V.082E",
        unladingPort: "Long Beach, CA (Port Code 2704)",
        filingDate: "2026-10-16",
        usCustomsStatus: "ACCEPTED_MATCH_ON_FILE"
      },
      {
        isfNumber: "ISF-USA-2026-118",
        contractNo: "SC-USA-2026-448",
        importerOfRecord: "Sysco Corporation (EIN: 74-1428580)",
        consigneeNo: "US-CON-992104",
        sellerName: "Devi Fisheries Limited, Unit-5 JPT",
        buyerName: "Sysco Corporation International",
        containerNo: "HLCU-883012-9",
        vesselName: "M/V FRANKFURT EXPRESS V.014W",
        unladingPort: "New York / Newark (Port Code 4601)",
        filingDate: "2026-10-29",
        usCustomsStatus: "ACCEPTED_TIMELY"
      }
    ],

    shippingBills: [
      {
        shippingBillNo: "SB-2026-88401",
        sbDate: "2026-10-15",
        chaName: "Seaways Shipping & Logistics Ltd",
        exportPort: "Visakhapatnam Sea (INVTZ)",
        shippingLine: "Ocean Network Express (ONE)",
        containerNo: "ONEU-440912-8",
        fobValueInr: 12750000,
        drawbackInr: 382500,
        rodtepInr: 255000,
        leoStatus: "LEO_GRANTED_OCT16"
      },
      {
        shippingBillNo: "SB-2026-88390",
        sbDate: "2026-10-11",
        chaName: "Evergreen Maritime Cargo Agency",
        exportPort: "Visakhapatnam Sea (INVTZ)",
        shippingLine: "Maersk Line India",
        containerNo: "MSKU-781023-4",
        fobValueInr: 16950500,
        drawbackInr: 508515,
        rodtepInr: 339010,
        leoStatus: "LEO_GRANTED_OCT11"
      },
      {
        shippingBillNo: "SB-2026-88455",
        sbDate: "2026-10-23",
        chaName: "Seaways Shipping & Logistics Ltd",
        exportPort: "Visakhapatnam Sea (INVTZ)",
        shippingLine: "CMA CGM Logistics",
        containerNo: "CMAU-552190-1",
        fobValueInr: 10688000,
        drawbackInr: 320640,
        rodtepInr: 213760,
        leoStatus: "CARTING_ORDER_ISSUED"
      }
    ],

    commercialInvoices: [
      {
        cinvNumber: "CINV-EXP-2026-551",
        invoiceDate: "2026-10-16",
        contractNo: "SC-USA-2026-441",
        customerName: "Red Lobster Supply Chain LLC",
        destinationPort: "Long Beach Port, USA",
        totalCartons: 1200,
        netWeightKg: 18000,
        grossWeightKg: 19440,
        totalValueUsd: 159300,
        blNumber: "ONE-VTZ-889021",
        bankReference: "SBI Overseas Branch Visakhapatnam",
        status: "DISPATCHED_DOCS_IN_BANK"
      },
      {
        cinvNumber: "CINV-EXP-2026-548",
        invoiceDate: "2026-10-12",
        contractNo: "SC-JPN-2026-112",
        customerName: "Maruha Nichiro Corporation",
        destinationPort: "Tokyo Port, Japan",
        totalCartons: 950,
        netWeightKg: 14000,
        grossWeightKg: 15120,
        totalValueUsd: 203000,
        blNumber: "MSK-VTZ-771902",
        bankReference: "Canara Bank Forex Cell Vizag",
        status: "DOCS_SENT_TO_BUYER_BANK"
      }
    ],

    etaStatusList: [
      {
        containerNo: "ONEU-440912-8",
        bookingRef: "ONE-BKG-889021",
        shippingLine: "Ocean Network Express",
        portOfOrigin: "Visakhapatnam Sea (INVTZ)",
        destinationPort: "Port of Long Beach, USA (USLGB)",
        etdDate: "2026-10-18",
        updatedEta: "2026-11-12",
        daysToArrival: "12 Days",
        vesselPosition: "Pacific Crossing (Coordinates: 32.4° N, 168.2° W)",
        berthStatus: "BERTH_24_CONFIRMED"
      },
      {
        containerNo: "MSKU-781023-4",
        bookingRef: "MSK-BKG-771902",
        shippingLine: "Maersk Line",
        portOfOrigin: "Visakhapatnam Sea (INVTZ)",
        destinationPort: "Tokyo Port, Japan (JPTYO)",
        etdDate: "2026-10-12",
        updatedEta: "2026-10-29",
        daysToArrival: "Arrived",
        vesselPosition: "Tokyo Bay Outer Anchorage / Berthing",
        berthStatus: "BERTHED_DISCHARGING"
      },
      {
        containerNo: "CMAU-552190-1",
        bookingRef: "CMA-BKG-332901",
        shippingLine: "CMA CGM Logistics",
        portOfOrigin: "Visakhapatnam Sea (INVTZ)",
        destinationPort: "Rotterdam Port, Netherlands (NLRTM)",
        etdDate: "2026-10-25",
        updatedEta: "2026-11-28",
        daysToArrival: "28 Days",
        vesselPosition: "Suez Canal Transit Corridor",
        berthStatus: "SCHEDULED_ON_TRACK"
      }
    ],

    fdaStatusList: [
      {
        pncNumber: "PNC-FDA-2026-789",
        fdaRegNumber: "18492019948",
        contractNo: "SC-USA-2026-441",
        consigneeName: "Red Lobster Supply Chain LLC",
        productDescription: "Frozen IQF Raw Vannamei Shrimp",
        manufacturer: "Devi Fisheries Limited - Plant Unit 1 (FCI: 3004812)",
        priorNoticeStatus: "PRIOR_NOTICE_CONFIRMED",
        clearanceStatus: "GREEN_LIST_SATISFIED"
      },
      {
        pncNumber: "PNC-FDA-2026-795",
        fdaRegNumber: "18492019948",
        contractNo: "SC-USA-2026-448",
        consigneeName: "Sysco Corporation International",
        productDescription: "Frozen Cooked Tail-On Shrimp",
        manufacturer: "Devi Fisheries Limited - Plant Unit 5 (FCI: 3004815)",
        priorNoticeStatus: "PRIOR_NOTICE_CONFIRMED",
        clearanceStatus: "ADMITTED_NO_HOLD"
      }
    ],

    clearingAgents: [
      {
        agentCode: "CHA-01",
        agentName: "Seaways Shipping & Logistics Ltd",
        licenseNo: "CHA-PAN-VSP-0044",
        contactPerson: "K. V. Subba Rao",
        phone: "+91 891 2568901",
        email: "vizag.cha@seawayshipping.in",
        activeContainers: 8,
        totalCleared: 142,
        rating: "4.9 / 5.0",
        status: "ACTIVE_VERIFIED"
      },
      {
        agentCode: "CHA-02",
        agentName: "Evergreen Maritime Cargo Agency",
        licenseNo: "CHA-PAN-VSP-0089",
        contactPerson: "R. Muralidhar",
        phone: "+91 891 2781190",
        email: "murali@evergreencargo.co.in",
        activeContainers: 4,
        totalCleared: 98,
        rating: "4.8 / 5.0",
        status: "ACTIVE_VERIFIED"
      },
      {
        agentCode: "CHA-03",
        agentName: "Visakha Ocean Transports Pvt Ltd",
        licenseNo: "CHA-PAN-VSP-0112",
        contactPerson: "Ch. Satyanarayana",
        phone: "+91 891 2893450",
        email: "satya.vsp@votlogistics.com",
        activeContainers: 2,
        totalCleared: 64,
        rating: "4.7 / 5.0",
        status: "ACTIVE_VERIFIED"
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
    const totalContracts = this.state.contracts.length;
    const totalValue = this.state.contracts.reduce((sum, c) => sum + (c.totalValueUsd || 0), 0);
    const activeDispatches = this.state.etaStatusList.length;
    const realizedVal = this.state.payments.reduce((sum, p) => sum + (p.realizedAmount || 0), 0);
    const sumInsured = this.state.insurancePolicies.reduce((sum, p) => sum + (p.sumInsuredUsd || 0), 0);

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
          <div id="flt-pi-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
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

  // Edit Proforma Invoice Modal
  showEditProformaModal(row) {
    this.openProformaFormModal({
      title: `Edit Proforma Invoice: ${row.piNumber}`,
      initialData: row,
      submitButtonText: 'Update Proforma Invoice',
      onSubmit: (formData, modal) => {
        Object.assign(row, formData);
        modal.close();
        Toast.show(`Proforma Invoice ${row.piNumber} updated successfully!`, 'success');
        const mainEl = document.getElementById('sales-view-main');
        if (mainEl) this.renderProformaList(mainEl);
      }
    });
  },

  // Generate Proforma Invoice Modal (All 34 User Fields)
  showAddProformaModal() {
    const nextIdx = this.state.proformaList.length + 1;
    const nextId = `PI-${String(nextIdx).padStart(3, '0')}`;
    const nextNo = `PI-2026-${905 + nextIdx}`;
    const today = new Date().toISOString().slice(0, 10);

    const defaultData = {
      id: nextId,
      exporter: 'Devi Fisheries Limited',
      processor: 'Devi Fisheries Limited - Unit 1',
      noOfContainers: 1,
      referenceNumber: `REF-2026-${Math.floor(100 + Math.random() * 900)}`,
      piNumber: nextNo,
      piDate: today,
      poNumber: '',
      poDate: '',
      consignee: 'Red Lobster Supply Chain LLC',
      ultimateConsignee: 'Red Lobster Distribution Center',
      buyerName: 'Red Lobster Supply Chain LLC',
      notifyParty: 'Expeditors International USA Inc.',
      importerOfRecord: 'Red Lobster Supply Chain LLC',
      agent: 'Seaways Global Logistics Ltd',
      certification: 'BAP 4-Star & ASC Certified',
      portOfLoading: 'Visakhapatnam Sea Port (INVTZ)',
      destinationCountry: 'United States',
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

    this.openProformaFormModal({
      title: 'Generate Proforma Invoice',
      initialData: defaultData,
      submitButtonText: 'Create Proforma Invoice',
      onSubmit: (formData, modal) => {
        const newRecord = {
          ...defaultData,
          ...formData
        };
        this.state.proformaList.unshift(newRecord);
        modal.close();
        Toast.show(`Proforma Invoice ${newRecord.piNumber} generated successfully!`, 'success');
        const mainEl = document.getElementById('sales-view-main');
        if (mainEl) this.renderProformaList(mainEl);
      }
    });
  },

  // Shared 34-Field Categorized Form Modal for Add / Edit
  openProformaFormModal({ title, initialData, submitButtonText, onSubmit }) {
    const d = initialData || {};

    Modal.open({
      title,
      size: 'xl',
      content: `
        <form id="form-pi-details" class="space-y-4 text-xs">
          <!-- Section 1: Exporter & Processor Details -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Exporter, Processor &amp; Reference</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT EXPORTER <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="Devi Fisheries Limited" ${d.exporter === 'Devi Fisheries Limited' ? 'selected' : ''}>Devi Fisheries Limited</option>
                  <option value="Devi Sea Foods Ltd" ${d.exporter === 'Devi Sea Foods Ltd' ? 'selected' : ''}>Devi Sea Foods Ltd</option>
                  <option value="Devi Marine Processors" ${d.exporter === 'Devi Marine Processors' ? 'selected' : ''}>Devi Marine Processors</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SELECT PROCESSOR <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-processor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="Devi Fisheries Limited - Unit 1" ${d.processor === 'Devi Fisheries Limited - Unit 1' ? 'selected' : ''}>Devi Fisheries Limited - Unit 1</option>
                  <option value="Devi Sea Foods Ltd (Plant 2)" ${d.processor === 'Devi Sea Foods Ltd (Plant 2)' ? 'selected' : ''}>Devi Sea Foods Ltd (Plant 2)</option>
                  <option value="Devi Marine Processors Unit-3" ${d.processor === 'Devi Marine Processors Unit-3' ? 'selected' : ''}>Devi Marine Processors Unit-3</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRODUCTION PLANT</label>
                <select id="form-pi-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                  <option value="Unit 1 - Processing (Vizag)" ${d.productionPlant === 'Unit 1 - Processing (Vizag)' ? 'selected' : ''}>Unit 1 - Processing (Vizag)</option>
                  <option value="Unit 2 - Value Added (Singarayakonda)" ${d.productionPlant === 'Unit 2 - Value Added (Singarayakonda)' ? 'selected' : ''}>Unit 2 - Value Added (Singarayakonda)</option>
                  <option value="Unit 3 - Pre-processing (Kakinada)" ${d.productionPlant === 'Unit 3 - Pre-processing (Kakinada)' ? 'selected' : ''}>Unit 3 - Pre-processing (Kakinada)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NO OF CONTAINERS</label>
                <input type="number" id="form-pi-containers" value="${d.noOfContainers || 1}" min="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REFERENCE NUMBER</label>
                <input type="text" id="form-pi-ref" value="${d.referenceNumber || ''}" placeholder="e.g. REF-2026-901" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>
            </div>
          </div>

          <!-- Section 2: Proforma Invoice & Purchase Order -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Proforma Invoice &amp; PO Details</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROFORMA INVOICE NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-number" value="${d.piNumber || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROFORMA INVOICE DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="form-pi-date" value="${d.piDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">P.O NO</label>
                <input type="text" id="form-pi-po-no" value="${d.poNumber || ''}" placeholder="e.g. PO-8821" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">P.O DATE</label>
                <input type="date" id="form-pi-po-date" value="${d.poDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>
            </div>
          </div>

          <!-- Section 3: Buyer & Consignee Parties -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">3</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Buyer, Consignee &amp; Stakeholder Parties</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BUYER NAME</label>
                <input type="text" id="form-pi-buyer" value="${d.buyerName || ''}" placeholder="Foreign Buyer / Client" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONSIGNEE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-consignee" value="${d.consignee || ''}" placeholder="Consignee Name" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ULTIMATE CONSIGNEE</label>
                <input type="text" id="form-pi-ult-consignee" value="${d.ultimateConsignee || ''}" placeholder="Destination Facility" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NOTIFY PARTY</label>
                <input type="text" id="form-pi-notify" value="${d.notifyParty || ''}" placeholder="Freight Broker / Clearing Agency" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">IMPORTER OF RECORD <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-importer-record" value="${d.importerOfRecord || ''}" placeholder="IOR Entity" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AGENT</label>
                <input type="text" id="form-pi-agent" value="${d.agent || ''}" placeholder="Shipping / Handling Agent" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CERTIFICATION</label>
                <input type="text" id="form-pi-cert" value="${d.certification || ''}" placeholder="e.g. BAP 4-Star, ASC, MSC, HACCP, ISO 22000" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>
            </div>
          </div>

          <!-- Section 4: Ports & Shipment Routing -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">4</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Port Routing &amp; Shipment Dates</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF LOADING <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-pol" value="${d.portOfLoading || 'Visakhapatnam Sea Port (INVTZ)'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DESTINATION COUNTRY <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-dest-country" value="${d.destinationCountry || 'United States'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF DISCHARGE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-pod" value="${d.portOfDischarge || 'Long Beach Port, USA'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FINAL DESTINATION COUNTRY</label>
                <input type="text" id="form-pi-final-dest-country" value="${d.finalDestinationCountry || 'United States'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FINAL DESTINATION <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="form-pi-final-dest" value="${d.finalDestination || 'Los Angeles Cold Storage, CA'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPBY DATE</label>
                <input type="date" id="form-pi-shipby" value="${d.shipByDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPBY DATE 2 (TEXT)</label>
                <input type="text" id="form-pi-shipby-text" value="${d.shipByDate2 || ''}" placeholder="e.g. Late November 2026 / Week 48" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>
            </div>
          </div>

          <!-- Section 5: Commercial Terms & Banking -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">5</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial Terms, Banking &amp; Currency</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BANK DETAILS <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-bank" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="State Bank of India (Forex Cell, Vizag)" ${d.bankDetails?.includes('State Bank') ? 'selected' : ''}>State Bank of India - Overseas Branch Vizag (A/C: 30198821049, IFSC: SBIN0004128)</option>
                  <option value="Canara Bank Overseas Branch" ${d.bankDetails?.includes('Canara') ? 'selected' : ''}>Canara Bank - Overseas Branch Vizag (A/C: 08452010992, IFSC: CNRB0000845)</option>
                  <option value="HDFC Bank Trade Finance" ${d.bankDetails?.includes('HDFC') ? 'selected' : ''}>HDFC Bank Trade Services Vizag (A/C: 50200088921, IFSC: HDFC0000120)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHOW BANK <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-show-bank" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="Yes" ${d.showBank !== 'No' ? 'selected' : ''}>Yes</option>
                  <option value="No" ${d.showBank === 'No' ? 'selected' : ''}>No</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAYMENT TERMS <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-payment-terms" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="100% Irrevocable LC at Sight" ${d.paymentTerms === '100% Irrevocable LC at Sight' ? 'selected' : ''}>100% Irrevocable LC at Sight</option>
                  <option value="30% Advance + 70% Against CAD" ${d.paymentTerms === '30% Advance + 70% Against CAD' ? 'selected' : ''}>30% Advance + 70% Against CAD</option>
                  <option value="LC 60 Days from B/L Date" ${d.paymentTerms === 'LC 60 Days from B/L Date' ? 'selected' : ''}>LC 60 Days from B/L Date</option>
                  <option value="Open Account 30 Days" ${d.paymentTerms === 'Open Account 30 Days' ? 'selected' : ''}>Open Account 30 Days</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPMENT TERMS <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-shipment-terms" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="Full Container Load (FCL)" ${d.shipmentTerms !== 'Less than Container Load (LCL)' ? 'selected' : ''}>Full Container Load (FCL)</option>
                  <option value="Less than Container Load (LCL)" ${d.shipmentTerms === 'Less than Container Load (LCL)' ? 'selected' : ''}>Less than Container Load (LCL)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DELIVERY TERMS <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-delivery-terms" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="CIF Port of Destination" ${d.deliveryTerms === 'CIF Port of Destination' ? 'selected' : ''}>CIF Port of Destination</option>
                  <option value="CFR Port of Destination" ${d.deliveryTerms === 'CFR Port of Destination' ? 'selected' : ''}>CFR Port of Destination</option>
                  <option value="FOB Visakhapatnam Port" ${d.deliveryTerms === 'FOB Visakhapatnam Port' ? 'selected' : ''}>FOB Visakhapatnam Port (INVTZ)</option>
                  <option value="DDP Destination" ${d.deliveryTerms === 'DDP Destination' ? 'selected' : ''}>DDP Destination</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">QUANTITY UNITS <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-qty-units" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="Kilograms (Kg)" ${d.quantityUnits !== 'Pounds (Lbs)' ? 'selected' : ''}>Kilograms (Kg)</option>
                  <option value="Metric Tons (MT)" ${d.quantityUnits === 'Metric Tons (MT)' ? 'selected' : ''}>Metric Tons (MT)</option>
                  <option value="Cartons / Cases" ${d.quantityUnits === 'Cartons / Cases' ? 'selected' : ''}>Cartons / Cases</option>
                  <option value="Pounds (Lbs)" ${d.quantityUnits === 'Pounds (Lbs)' ? 'selected' : ''}>Pounds (Lbs)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CURRENCY <span class="text-[#DE350B]">*</span></label>
                <select id="form-pi-currency" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
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
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">6</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Freight, Charges &amp; Remarks</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT</label>
                <select id="form-pi-freight" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                  <option value="Freight Prepaid" ${d.freight !== 'Freight Collect' ? 'selected' : ''}>Freight Prepaid</option>
                  <option value="Freight Collect" ${d.freight === 'Freight Collect' ? 'selected' : ''}>Freight Collect</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CHARGE NAME</label>
                <input type="text" id="form-pi-charge-name" value="${d.chargeName || ''}" placeholder="e.g. Ocean Freight & THC Surcharge" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CHARGE AMOUNT</label>
                <input type="number" id="form-pi-charge-amount" value="${d.chargeAmount || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div class="sm:col-span-3">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
                <textarea id="form-pi-remarks" rows="2" placeholder="Special contractual conditions, testing mandates & packing instructions" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">${d.remarks || ''}</textarea>
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
          label: submitButtonText || 'Save Proforma Invoice',
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

            const payload = {
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
            };

            if (typeof onSubmit === 'function') {
              onSubmit(payload, modal);
            }
          }
        }
      ]
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
          <div id="flt-ci-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
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
      stockStatus: 'WAREHOUSE_STAGED'
    };

    this.state.customInvoices.unshift(duplicated);
    const mainEl = document.getElementById('sales-view-main');
    if (mainEl) this.renderCustomInvoices(mainEl);
    Toast.show(`Custom Invoice duplicated as ${nextNo}`, 'success');
  },

  // Edit Custom Invoice Modal
  showEditCustomInvoiceModal(row) {
    this.openCustomInvoiceModal({
      title: `Edit Custom Invoice: ${row.invoiceNo}`,
      initialData: row,
      submitButtonText: 'Update Custom Invoice',
      onSubmit: (formData, modal) => {
        Object.assign(row, formData);
        modal.close();
        Toast.show(`Custom Invoice ${row.invoiceNo} updated successfully!`, 'success');
        const mainEl = document.getElementById('sales-view-main');
        if (mainEl) this.renderCustomInvoices(mainEl);
      }
    });
  },

  // Create Custom Invoice Modal
  showAddCustomInvoiceModal() {
    const nextIdx = this.state.customInvoices.length + 1;
    const nextId = `CI-${String(nextIdx).padStart(3, '0')}`;
    const nextNo = `CI-EXP-2026-${500 + nextIdx}`;
    const today = new Date().toISOString().slice(0, 10);

    const defaultData = {
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
      cifValueUsd: 159300,
      customsStatus: 'LEO_GRANTED'
    };

    this.openCustomInvoiceModal({
      title: 'Create Custom Invoice',
      initialData: defaultData,
      submitButtonText: 'Create Custom Invoice',
      onSubmit: (formData, modal) => {
        const newRecord = {
          ...defaultData,
          ...formData
        };
        this.state.customInvoices.unshift(newRecord);
        modal.close();
        Toast.show(`Custom Invoice ${newRecord.invoiceNo} created successfully!`, 'success');
        const mainEl = document.getElementById('sales-view-main');
        if (mainEl) this.renderCustomInvoices(mainEl);
      }
    });
  },

  // Categorized Custom Invoice Form Modal
  openCustomInvoiceModal({ title, initialData, submitButtonText, onSubmit }) {
    const d = initialData || {};

    Modal.open({
      title,
      size: 'xl',
      content: `
        <form id="form-ci-details" class="space-y-4 text-xs">
          <!-- Section 1: Invoice & PO Identifiers -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Customs Invoice &amp; Reference Numbers</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-modal-inv-no" value="${d.invoiceNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="ci-modal-inv-date" value="${d.invoiceDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">P.O NO</label>
                <input type="text" id="ci-modal-po-no" value="${d.poNo || ''}" placeholder="e.g. PO-8821" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROFORMA INVOICE NO</label>
                <input type="text" id="ci-modal-pi-no" value="${d.pInvoiceNo || ''}" placeholder="e.g. PI-2026-901" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#403294] focus:outline-none focus:border-[#00A4B7]">
              </div>
            </div>
          </div>

          <!-- Section 2: Exporter, Buyer & Consignee -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Parties &amp; Destination</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">EXPORTER <span class="text-[#DE350B]">*</span></label>
                <select id="ci-modal-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="Devi Fisheries Limited" ${d.exporter === 'Devi Fisheries Limited' ? 'selected' : ''}>Devi Fisheries Limited</option>
                  <option value="Devi Sea Foods Ltd" ${d.exporter === 'Devi Sea Foods Ltd' ? 'selected' : ''}>Devi Sea Foods Ltd</option>
                  <option value="Devi Marine Processors" ${d.exporter === 'Devi Marine Processors' ? 'selected' : ''}>Devi Marine Processors</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BUYER / CONSIGNEE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-modal-buyer" value="${d.buyer || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DESTINATION COUNTRY <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="ci-modal-country" value="${d.country || 'United States'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FINANCIAL YEAR</label>
                <select id="ci-modal-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                  <option value="2026-2027" ${d.year === '2026-2027' ? 'selected' : ''}>2026-2027</option>
                  <option value="2025-2026" ${d.year === '2025-2026' ? 'selected' : ''}>2025-2026</option>
                  <option value="2024-2025" ${d.year === '2024-2025' ? 'selected' : ''}>2024-2025</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section 3: Customs & Stock Clearance -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">3</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Customs Bill Type &amp; Stock Status</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BILLS TYPE <span class="text-[#DE350B]">*</span></label>
                <select id="ci-modal-billstype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="Duty Drawback" ${d.billsType === 'Duty Drawback' ? 'selected' : ''}>Duty Drawback</option>
                  <option value="RoDTEP Scheme" ${d.billsType === 'RoDTEP Scheme' ? 'selected' : ''}>RoDTEP Scheme</option>
                  <option value="EPCG Scheme" ${d.billsType === 'EPCG Scheme' ? 'selected' : ''}>EPCG Scheme</option>
                  <option value="Advance Authorization" ${d.billsType === 'Advance Authorization' ? 'selected' : ''}>Advance Authorization</option>
                  <option value="Commercial Export" ${d.billsType === 'Commercial Export' ? 'selected' : ''}>Commercial Export</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STOCK STATUS <span class="text-[#DE350B]">*</span></label>
                <select id="ci-modal-stock-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="ALLOCATED" ${d.stockStatus === 'ALLOCATED' ? 'selected' : ''}>Allocated</option>
                  <option value="DISPATCHED_TO_PORT" ${d.stockStatus === 'DISPATCHED_TO_PORT' ? 'selected' : ''}>Dispatched To Port</option>
                  <option value="IN_TRANSIT" ${d.stockStatus === 'IN_TRANSIT' ? 'selected' : ''}>In Transit</option>
                  <option value="PORT_CLEARED" ${d.stockStatus === 'PORT_CLEARED' ? 'selected' : ''}>Port Cleared</option>
                  <option value="WAREHOUSE_STAGED" ${d.stockStatus === 'WAREHOUSE_STAGED' ? 'selected' : ''}>Warehouse Staged</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPPING BILL REF</label>
                <input type="text" id="ci-modal-sb-ref" value="${d.shippingBillRef || ''}" placeholder="e.g. SB-2026-88401" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
              </div>

              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF LOADING</label>
                <input type="text" id="ci-modal-pol" value="${d.loadingPort || 'Visakhapatnam Sea (INVTZ)'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
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
          label: submitButtonText || 'Save Custom Invoice',
          type: 'primary',
          onClick: (modal) => {
            const getVal = (id) => document.getElementById(id)?.value?.trim() || '';

            const invNo = getVal('ci-modal-inv-no');
            const invDate = getVal('ci-modal-inv-date');
            const buyer = getVal('ci-modal-buyer');
            const exporter = getVal('ci-modal-exporter');
            const country = getVal('ci-modal-country');
            const billsType = getVal('ci-modal-billstype');
            const stockStatus = getVal('ci-modal-stock-status');

            if (!invNo || !invDate || !buyer || !exporter || !country || !billsType || !stockStatus) {
              Toast.show('Please fill in all mandatory fields marked with *', 'warning');
              return;
            }

            const payload = {
              invoiceNo: invNo,
              invoiceDate: invDate,
              poNo: getVal('ci-modal-po-no'),
              pInvoiceNo: getVal('ci-modal-pi-no'),
              buyer,
              consignee: buyer,
              exporter,
              country,
              year: getVal('ci-modal-year') || '2026-2027',
              billsType,
              stockStatus,
              shippingBillRef: getVal('ci-modal-sb-ref'),
              loadingPort: getVal('ci-modal-pol')
            };

            if (typeof onSubmit === 'function') {
              onSubmit(payload, modal);
            }
          }
        }
      ]
    });
  },

  // Tab 3: ISF Details
  renderIsfDetails(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'ISF Details (Importer Security Filing 10+2)',
            primaryBtnText: 'Submit ISF 10+2 Record',
      onPrimaryClick: () => Toast.show('ISF Submission form opened', 'info'),
      filterFields: [
        { id: 'isf-no', label: 'ISF Reference No', placeholder: 'e.g. ISF-USA' },
        { id: 'importer', label: 'Importer of Record', placeholder: 'e.g. Red Lobster' },
        { id: 'container', label: 'Container Number', placeholder: 'e.g. ONEU' }
      ],
      data: this.state.isfDetails,
      keyField: 'isfNumber',
      tableTitle: 'ISF Details',
      columns: [
        { field: 'isfNumber', header: 'ISF Number', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'contractNo', header: 'Contract Ref', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'importerOfRecord', header: 'Importer of Record (IRS / EIN)', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'containerNo', header: 'Container No', render: (v) => `<span class="font-mono text-xs font-semibold text-[#403294]">${v}</span>` },
        { field: 'vesselName', header: 'Vessel / Voyage', render: (v) => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'unladingPort', header: 'Port of Unlading', render: (v) => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'filingDate', header: 'Filing Date', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        {
          field: 'usCustomsStatus',
          header: 'CBP Status',
          render: (v) => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] uppercase">${v.replace(/_/g, ' ')}</span>`
        }
      ]
    });
  },

  // Tab 4: Shipping Bill
  renderShippingBill(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Shipping Bill (Indian Customs Export EDI)',
            primaryBtnText: 'Generate Shipping Bill',
      onPrimaryClick: () => Toast.show('Shipping Bill Generator opened', 'info'),
      filterFields: [
        { id: 'sb-no', label: 'Shipping Bill No', placeholder: 'e.g. SB-2026' },
        { id: 'cha', label: 'Custom House Agent', placeholder: 'e.g. Seaways' },
        { id: 'line', label: 'Shipping Line', type: 'select', options: ['All Lines', 'Ocean Network Express (ONE)', 'Maersk Line India', 'CMA CGM Logistics'] }
      ],
      data: this.state.shippingBills,
      keyField: 'shippingBillNo',
      tableTitle: 'Shipping Bills',
      columns: [
        { field: 'shippingBillNo', header: 'Shipping Bill No', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'sbDate', header: 'SB Date', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'chaName', header: 'Custom House Agent (CHA)', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'shippingLine', header: 'Shipping Line', render: (v) => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'containerNo', header: 'Container No', render: (v) => `<span class="font-mono text-xs font-semibold text-[#403294]">${v}</span>` },
        { field: 'fobValueInr', header: 'FOB Value (INR)', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#172B4D]">₹${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'drawbackInr', header: 'Drawback (INR)', render: (v) => `<span class="font-mono text-xs text-[#006644] font-bold">₹${Number(v).toLocaleString('en-IN')}</span>` },
        {
          field: 'leoStatus',
          header: 'LEO Status',
          render: (v) => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] uppercase">${v.replace(/_/g, ' ')}</span>`
        }
      ]
    });
  },

  // Tab 5: Commercial Invoice
  renderCommercialInvoice(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Commercial Invoices (Final Export Settlement)',
            primaryBtnText: 'Create Commercial Invoice',
      onPrimaryClick: () => Toast.show('Commercial Invoice generator opened', 'info'),
      filterFields: [
        { id: 'cinv-no', label: 'Invoice No', placeholder: 'e.g. CINV-EXP' },
        { id: 'buyer', label: 'Buyer Name', placeholder: 'e.g. Red Lobster' },
        { id: 'bl', label: 'Bill of Lading No', placeholder: 'e.g. ONE-VTZ' }
      ],
      data: this.state.commercialInvoices,
      keyField: 'cinvNumber',
      tableTitle: 'Commercial Invoices',
      columns: [
        { field: 'cinvNumber', header: 'Commercial Invoice No', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'invoiceDate', header: 'Date', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'contractNo', header: 'Contract No', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'customerName', header: 'Consignee / Importer', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'blNumber', header: 'Bill of Lading No', render: (v) => `<span class="font-mono text-xs font-bold text-[#403294]">${v}</span>` },
        { field: 'netWeightKg', header: 'Net Weight (Kg)', render: (v) => `<span class="font-mono text-xs text-[#172B4D] font-bold">${Number(v).toLocaleString('en-IN')} Kg</span>` },
        { field: 'totalValueUsd', header: 'Invoice Amount (USD)', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644]">$${Number(v).toLocaleString('en-IN')}</span>` },
        {
          field: 'status',
          header: 'Bank Dispatch Status',
          render: (v) => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] uppercase">${v.replace(/_/g, ' ')}</span>`
        }
      ]
    });
  },

  // Tab 6: ETA Status
  renderEtaStatus(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'ETA Status (Update FBD & Arrival Schedules)',
            primaryBtnText: 'Update Vessel ETA',
      onPrimaryClick: () => Toast.show('Vessel tracking update modal opened', 'info'),
      filterFields: [
        { id: 'cont-no', label: 'Container Number', placeholder: 'e.g. ONEU' },
        { id: 'bkg-no', label: 'Booking Ref', placeholder: 'e.g. ONE-BKG' },
        { id: 'line', label: 'Shipping Line', type: 'select', options: ['All Lines', 'Ocean Network Express', 'Maersk Line', 'CMA CGM Logistics'] }
      ],
      data: this.state.etaStatusList,
      keyField: 'containerNo',
      tableTitle: 'ETA Status & Shipments Schedule',
      columns: [
        { field: 'containerNo', header: 'Container No', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'bookingRef', header: 'Booking Ref', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'shippingLine', header: 'Shipping Line', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'destinationPort', header: 'Final Destination Port', render: (v) => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'etdDate', header: 'ETD Origin', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'updatedEta', header: 'Updated ETA', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'daysToArrival', header: 'Transit Time', render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F0F9FF] text-[#00A4B7] border border-[#BAE6FD]">${v}</span>` },
        { field: 'vesselPosition', header: 'Vessel Live Telemetry', render: (v) => `<span class="text-[11px] text-[#5E6C84] truncate max-w-[200px] block" title="${v}">${v}</span>` },
        {
          field: 'berthStatus',
          header: 'Berth Status',
          render: (v) => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] uppercase">${v.replace(/_/g, ' ')}</span>`
        }
      ]
    });
  },

  // Tab 7: FDA Status
  renderFdaStatus(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'FDA Status (US FDA Prior Notice & Admissibility)',
            primaryBtnText: 'Submit Prior Notice (FDA)',
      onPrimaryClick: () => Toast.show('FDA Prior Notice submission form opened', 'info'),
      filterFields: [
        { id: 'pnc-no', label: 'PNC Number', placeholder: 'e.g. PNC-FDA' },
        { id: 'contract-no', label: 'Contract Ref', placeholder: 'e.g. SC-USA' },
        { id: 'facility', label: 'Manufacturing Plant', type: 'select', options: ['All Facilities', 'Unit-1 Vizag (FCI: 3004812)', 'Unit-5 JPT (FCI: 3004815)'] }
      ],
      data: this.state.fdaStatusList,
      keyField: 'pncNumber',
      tableTitle: 'FDA Status Register',
      columns: [
        { field: 'pncNumber', header: 'PNC Confirmation No', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'fdaRegNumber', header: 'FDA Facility Reg No', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'contractNo', header: 'Contract No', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'consigneeName', header: 'US Consignee', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'productDescription', header: 'Food Product Description', render: (v) => `<span class="text-xs text-[#172B4D] font-semibold">${v}</span>` },
        { field: 'manufacturer', header: 'Registered Processor', render: (v) => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        {
          field: 'clearanceStatus',
          header: 'FDA Admissibility',
          render: (v) => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] uppercase">${v.replace(/_/g, ' ')}</span>`
        }
      ]
    });
  },

  // Tab 8: Clearing Agent
  renderClearingAgent(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Clearing Agent (Custom House Agents & Port Logistics)',
            primaryBtnText: 'Add Clearing Agent',
      onPrimaryClick: () => Toast.show('New CHA onboarding form opened', 'info'),
      filterFields: [
        { id: 'cha-name', label: 'Agent Name', placeholder: 'e.g. Seaways' },
        { id: 'lic-no', label: 'CHA License No', placeholder: 'e.g. CHA-PAN' },
        { id: 'status', label: 'Agent Status', type: 'select', options: ['All Status', 'Active & Verified', 'Pending Audit'] }
      ],
      data: this.state.clearingAgents,
      keyField: 'agentCode',
      tableTitle: 'Clearing Agents Directory',
      columns: [
        { field: 'agentCode', header: 'Code', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'agentName', header: 'Clearing Agency Name', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'licenseNo', header: 'Customs License No', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'contactPerson', header: 'CHA Incharge', render: (v) => `<span class="text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'phone', header: 'Phone / Helpline', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'activeContainers', header: 'Active Shipments', render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F0F9FF] text-[#00A4B7] border border-[#BAE6FD]">${v} Containers</span>` },
        { field: 'totalCleared', header: 'Lifetime Cleared', render: (v) => `<span class="font-mono text-xs font-bold text-[#172B4D]">${v} TEUs</span>` },
        { field: 'rating', header: 'Audit Score', render: (v) => `<span class="font-mono text-xs text-[#006644] font-bold">★ ${v}</span>` },
        {
          field: 'status',
          header: 'Status',
          render: (v) => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] uppercase">${v.replace(/_/g, ' ')}</span>`
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
