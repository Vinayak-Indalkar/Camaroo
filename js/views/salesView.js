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
        piNumber: "PI-2026-901",
        piDate: "2026-10-05",
        customerName: "Red Lobster Supply Chain LLC",
        destinationPort: "Long Beach Port, USA",
        productDescription: "Vannamei Shrimp HLSO 26/30 IQF",
        cartons: 1200,
        quantityKg: 18000,
        unitPriceUsd: 8.85,
        totalAmountUsd: 159300,
        paymentTerms: "100% Irrevocable LC at Sight",
        validityDate: "2026-11-05",
        status: "CONFIRMED_ACCEPTED"
      },
      {
        piNumber: "PI-2026-902",
        piDate: "2026-10-08",
        customerName: "Maruha Nichiro Corporation",
        destinationPort: "Tokyo Port, Japan",
        productDescription: "Black Tiger Shrimp HOSO 16/20 Semi-IQF",
        cartons: 950,
        quantityKg: 14000,
        unitPriceUsd: 14.50,
        totalAmountUsd: 203000,
        paymentTerms: "30% Advance + 70% Against CAD",
        validityDate: "2026-11-08",
        status: "CONFIRMED_ACCEPTED"
      },
      {
        piNumber: "PI-2026-903",
        piDate: "2026-10-12",
        customerName: "Royal Greenland Seafood A/S",
        destinationPort: "Rotterdam Port, Netherlands",
        productDescription: "Asian Seabass Fillet 500-800g IQF",
        cartons: 800,
        quantityKg: 12000,
        unitPriceUsd: 11.20,
        totalAmountUsd: 134400,
        paymentTerms: "LC 60 Days from B/L Date",
        validityDate: "2026-11-12",
        status: "ISSUED_PENDING"
      },
      {
        piNumber: "PI-2026-904",
        piDate: "2026-10-15",
        customerName: "Sysco Corporation International",
        destinationPort: "New York Terminal, USA",
        productDescription: "Vannamei Cooked Tail-On 31/40 IQF",
        cartons: 1450,
        quantityKg: 22000,
        unitPriceUsd: 9.60,
        totalAmountUsd: 211200,
        paymentTerms: "100% LC at Sight",
        validityDate: "2026-11-15",
        status: "CONFIRMED_ACCEPTED"
      },
      {
        piNumber: "PI-2026-905",
        piDate: "2026-10-18",
        customerName: "US Foods Trading Co",
        destinationPort: "Houston Sea Port, USA",
        productDescription: "Vannamei Easy Peel 16/20 IQF",
        cartons: 1100,
        quantityKg: 16500,
        unitPriceUsd: 9.90,
        totalAmountUsd: 163350,
        paymentTerms: "100% LC at Sight",
        validityDate: "2026-11-18",
        status: "DRAFT_REVISED"
      }
    ],

    customInvoices: [
      {
        customInvoiceNo: "CI-EXP-2026-441",
        invoiceDate: "2026-10-14",
        shippingBillRef: "SB-2026-88401",
        customerName: "Red Lobster Supply Chain LLC",
        iecCode: "0391004812",
        loadingPort: "Visakhapatnam Sea (INVTZ)",
        dischargePort: "Long Beach, USA (USLGB)",
        netWeightKg: 18000,
        grossWeightKg: 19440,
        fobValueUsd: 153000,
        cifValueUsd: 159300,
        customsStatus: "LEO_GRANTED"
      },
      {
        customInvoiceNo: "CI-EXP-2026-112",
        invoiceDate: "2026-10-10",
        shippingBillRef: "SB-2026-88390",
        customerName: "Maruha Nichiro Corporation",
        iecCode: "0391004812",
        loadingPort: "Visakhapatnam Sea (INVTZ)",
        dischargePort: "Tokyo Port, Japan (JPTYO)",
        netWeightKg: 14000,
        grossWeightKg: 15120,
        fobValueUsd: 203000,
        cifValueUsd: 203000,
        customsStatus: "ASSESSED_CLEARED"
      },
      {
        customInvoiceNo: "CI-EXP-2026-079",
        invoiceDate: "2026-10-22",
        shippingBillRef: "SB-2026-88455",
        customerName: "Royal Greenland Seafood A/S",
        iecCode: "0391004812",
        loadingPort: "Visakhapatnam Sea (INVTZ)",
        dischargePort: "Rotterdam, Netherlands (NLRTM)",
        netWeightKg: 12000,
        grossWeightKg: 12960,
        fobValueUsd: 128000,
        cifValueUsd: 134400,
        customsStatus: "UNDER_EXAMINATION"
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
    payments: [
      {
        invoiceNo: "INV-EXP-2026-301",
        contractNo: "SC-USA-2026-441",
        buyerName: "Red Lobster Supply Chain LLC",
        currency: "USD",
        invoiceValue: 159300,
        realizedAmount: 159300,
        balanceReceivable: 0,
        dueDate: "2026-11-15",
        bankName: "State Bank of India (Forex Cell)",
        lcReference: "LC-CITI-US-991204",
        status: "FULL_REALIZED"
      },
      {
        invoiceNo: "INV-EXP-2026-302",
        contractNo: "SC-JPN-2026-112",
        buyerName: "Maruha Nichiro Corporation",
        currency: "USD",
        invoiceValue: 203000,
        realizedAmount: 60900,
        balanceReceivable: 142100,
        dueDate: "2026-11-10",
        bankName: "Canara Bank Overseas Branch",
        lcReference: "CAD-BOT-JPN-4410",
        status: "PARTIAL_ADVANCE_RECEIVED"
      },
      {
        invoiceNo: "INV-EXP-2026-303",
        contractNo: "SC-EU-2026-079",
        buyerName: "Royal Greenland Seafood A/S",
        currency: "USD",
        invoiceValue: 134400,
        realizedAmount: 0,
        balanceReceivable: 134400,
        dueDate: "2026-12-15",
        bankName: "HDFC Bank Trade Finance",
        lcReference: "LC-DAN-DK-331092",
        status: "PENDING_MATURITY"
      },
      {
        invoiceNo: "INV-EXP-2026-304",
        contractNo: "SC-USA-2026-448",
        buyerName: "Sysco Corporation International",
        currency: "USD",
        invoiceValue: 211200,
        realizedAmount: 211200,
        balanceReceivable: 0,
        dueDate: "2026-11-02",
        bankName: "State Bank of India (Forex Cell)",
        lcReference: "LC-CHASE-US-11029",
        status: "FULL_REALIZED"
      }
    ],

    // 4. Insurance Submenu datasets
    insurancePolicies: [
      {
        policyNo: "POL-MAR-2026-7701",
        cargoLot: "LOT-2026-00125",
        contractNo: "SC-USA-2026-441",
        insuredParty: "Red Lobster Supply Chain LLC",
        underwriter: "The New India Assurance Co. Ltd.",
        sumInsuredUsd: 175230,
        premiumAmountInr: 72800,
        vesselName: "M/V ONE HARMONY V.082E",
        dischargePort: "Port of Long Beach, USA",
        coverageType: "Institute Cargo Clauses (A) All Risks + Reefer Breakdown",
        status: "ACTIVE_IN_TRANSIT"
      },
      {
        policyNo: "POL-MAR-2026-7702",
        cargoLot: "LOT-2026-00126",
        contractNo: "SC-JPN-2026-112",
        insuredParty: "Maruha Nichiro Corporation",
        underwriter: "United India Insurance Co. Ltd.",
        sumInsuredUsd: 223300,
        premiumAmountInr: 91400,
        vesselName: "M/V MAERSK MC-KINNEY MOLLER",
        dischargePort: "Tokyo Port, Japan",
        coverageType: "All Risks Marine Cargo + Coldstore Extension",
        status: "DISCHARGED_SAFE"
      },
      {
        policyNo: "POL-MAR-2026-7703",
        cargoLot: "LOT-2026-00128",
        contractNo: "SC-EU-2026-079",
        insuredParty: "Royal Greenland Seafood A/S",
        underwriter: "ICICI Lombard General Insurance",
        sumInsuredUsd: 147840,
        premiumAmountInr: 61500,
        vesselName: "M/V CMA CGM JACQUES SAADE",
        dischargePort: "Rotterdam Port, Netherlands",
        coverageType: "ICC (A) All Risks + Transshipment Cover",
        status: "ACTIVE_IN_TRANSIT"
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
            <p class="text-xs text-[#5E6C84] mt-0.5 font-medium">Export contracts, running shipments, global freight dispatch &amp; revenue realization</p>
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

  // Tab 1: Proforma List
  renderProformaList(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Proforma Invoices (PI Register)',
      subtitle: 'Issued commercial proforma invoices, price terms, packaging breakups & customer confirmations',
      primaryBtnText: 'Generate Proforma Invoice',
      onPrimaryClick: () => this.showAddProformaModal(),
      filterFields: [
        { id: 'pi-no', label: 'PI Number', placeholder: 'e.g. PI-2026' },
        { id: 'buyer', label: 'Buyer / Importer', placeholder: 'e.g. Red Lobster' },
        { id: 'dest', label: 'Destination Port', type: 'select', options: ['All Ports', 'Long Beach Port, USA', 'Tokyo Port, Japan', 'Rotterdam Port, Netherlands'] }
      ],
      data: this.state.proformaList,
      keyField: 'piNumber',
      tableTitle: 'Proforma List',
      columns: [
        { field: 'piNumber', header: 'PI Number', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline">${v}</span>` },
        { field: 'piDate', header: 'PI Date', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'customerName', header: 'Buyer / Importer', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'productDescription', header: 'Product Variety', render: (v) => `<span class="font-semibold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'quantityKg', header: 'Quantity (Kg)', render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString('en-IN')} Kg</span>` },
        { field: 'unitPriceUsd', header: 'Rate / Kg', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">$${Number(v).toFixed(2)}</span>` },
        { field: 'totalAmountUsd', header: 'Total Value', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644]">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'paymentTerms', header: 'Payment Terms', render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[150px] block" title="${v}">${v}</span>` },
        {
          field: 'status',
          header: 'Status',
          render: (v) => {
            const cls = v.includes('CONFIRMED') ? 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]' : 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
            return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
          }
        }
      ]
    });
  },

  // Tab 2: Custom Invoices
  renderCustomInvoices(container) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Custom Invoices (Customs Clearance)',
      subtitle: 'Customs billing documentation, export assessment values & EDI port submission declarations',
      primaryBtnText: 'Create Custom Invoice',
      onPrimaryClick: () => Toast.show('Custom Invoice creation form opened', 'info'),
      filterFields: [
        { id: 'ci-no', label: 'Custom Invoice No', placeholder: 'e.g. CI-EXP' },
        { id: 'sb-ref', label: 'Shipping Bill Ref', placeholder: 'e.g. SB-2026' },
        { id: 'port', label: 'Loading Port', type: 'select', options: ['All Ports', 'Visakhapatnam Sea (INVTZ)', 'Kakinada Sea Port', 'Chennai Sea Port'] }
      ],
      data: this.state.customInvoices,
      keyField: 'customInvoiceNo',
      tableTitle: 'Custom Invoices',
      columns: [
        { field: 'customInvoiceNo', header: 'Custom Invoice No', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'invoiceDate', header: 'Invoice Date', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'shippingBillRef', header: 'Shipping Bill Ref', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'customerName', header: 'Consignee / Buyer', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'loadingPort', header: 'Port of Loading', render: (v) => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'dischargePort', header: 'Port of Discharge', render: (v) => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'fobValueUsd', header: 'FOB Value (USD)', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644]">$${Number(v).toLocaleString('en-IN')}</span>` },
        {
          field: 'customsStatus',
          header: 'Customs Status',
          render: (v) => {
            const cls = v.includes('LEO') || v.includes('CLEARED') ? 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]' : 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
            return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
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
      subtitle: 'Mandatory US Customs and Border Protection (CBP) maritime security filing records for ocean cargo',
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
      subtitle: 'Electronic Shipping Bills, duty drawback benefits, RoDTEP incentives & Let Export Order (LEO) clearance',
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
      subtitle: 'Final negotiable commercial invoices, Bill of Lading pairings, banking documents & foreign trade settlements',
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
      subtitle: 'Real-time ocean carrier vessel telemetry, final booking dates, transit coordinates & discharge berthing timelines',
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
      subtitle: 'Prior Notice Confirmation (PNC), US Bioterrorism Act Compliance & Food Safety Modernization Act (FSMA) Verification',
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
      subtitle: 'Licensed Customs House Agents (CHA), port terminal handling contracts, cargo carting & gate pass authorizations',
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
  // 3. PAYMENTS SUBMENU VIEW
  // ----------------------------------------------------
  renderPayments(container, currentTab) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Export Payments & Foreign Exchange Realization',
      subtitle: 'Letter of Credit (LC) negotiations, bank wire settlements, realization status & balance receivables in foreign currency',
      primaryBtnText: 'Record Export Payment',
      onPrimaryClick: () => Toast.show('Payment Entry modal opened', 'info'),
      filterFields: [
        { id: 'inv-no', label: 'Invoice No', placeholder: 'e.g. INV-EXP' },
        { id: 'buyer', label: 'Buyer Name', placeholder: 'e.g. Red Lobster' },
        { id: 'currency', label: 'Currency', type: 'select', options: ['All Currencies', 'USD ($)', 'EUR (€)', 'JPY (¥)'] }
      ],
      data: this.state.payments,
      keyField: 'invoiceNo',
      tableTitle: 'Export Payments & Realization',
      columns: [
        { field: 'invoiceNo', header: 'Invoice No', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'contractNo', header: 'Contract No', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'buyerName', header: 'Buyer / Importer', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'lcReference', header: 'LC / CAD Reference', render: (v) => `<span class="font-mono text-xs text-[#403294] font-semibold">${v}</span>` },
        { field: 'invoiceValue', header: 'Invoice Amount', render: (v, r) => `<span class="font-mono font-bold text-xs text-[#172B4D]">${r.currency} $${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'realizedAmount', header: 'Realized Amount', render: (v, r) => `<span class="font-mono font-bold text-xs text-[#006644]">${r.currency} $${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'balanceReceivable', header: 'Balance Receivable', render: (v, r) => `<span class="font-mono font-bold text-xs ${v > 0 ? 'text-[#DE350B]' : 'text-[#5E6C84]'}">${r.currency} $${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'dueDate', header: 'Maturity Date', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        {
          field: 'status',
          header: 'Settlement Status',
          render: (v) => {
            const cls = v.includes('FULL') ? 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]' : (v.includes('PARTIAL') ? 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]' : 'bg-[#E0F2FE] text-[#00A4B7] border-[#BAE6FD]');
            return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
          }
        }
      ]
    });
  },

  // ----------------------------------------------------
  // 4. INSURANCE SUBMENU VIEW
  // ----------------------------------------------------
  renderInsurance(container, currentTab) {
    this.renderGenericTablePage({
      container,
      pageTitle: 'Cargo Insurance (Marine Transit Risk Coverage)',
      subtitle: 'Marine Open Cover policies, Voyage Insurance Certificates, refrigerated container breakdown cover & claims registers',
      primaryBtnText: 'Add Insurance Policy',
      onPrimaryClick: () => Toast.show('New Marine Insurance policy creation modal opened', 'info'),
      filterFields: [
        { id: 'pol-no', label: 'Policy No', placeholder: 'e.g. POL-MAR' },
        { id: 'cargo', label: 'Cargo Lot', placeholder: 'e.g. LOT-2026' },
        { id: 'underwriter', label: 'Insurance Company', type: 'select', options: ['All Companies', 'The New India Assurance Co. Ltd.', 'United India Insurance Co. Ltd.', 'ICICI Lombard General Insurance'] }
      ],
      data: this.state.insurancePolicies,
      keyField: 'policyNo',
      tableTitle: 'Marine & Cargo Insurance Policies',
      columns: [
        { field: 'policyNo', header: 'Policy No', render: (v) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'cargoLot', header: 'Cargo Lot', render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'insuredParty', header: 'Insured Consignee', render: (v) => `<span class="font-bold text-[#172B4D] text-xs">${v}</span>` },
        { field: 'underwriter', header: 'Underwriter / Insurer', render: (v) => `<span class="text-xs font-semibold text-[#172B4D]">${v}</span>` },
        { field: 'sumInsuredUsd', header: 'Sum Insured (USD)', render: (v) => `<span class="font-mono font-extrabold text-xs text-[#006644]">$${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'premiumAmountInr', header: 'Premium (INR)', render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">₹${Number(v).toLocaleString('en-IN')}</span>` },
        { field: 'vesselName', header: 'Vessel / Voyage', render: (v) => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'coverageType', header: 'Coverage Scope', render: (v) => `<span class="text-[11px] text-[#5E6C84] truncate max-w-[200px] block" title="${v}">${v}</span>` },
        {
          field: 'status',
          header: 'Policy Status',
          render: (v) => {
            const cls = v.includes('ACTIVE') ? 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]' : 'bg-[#F0F9FF] text-[#00A4B7] border-[#BAE6FD]';
            return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls} uppercase">${v.replace(/_/g, ' ')}</span>`;
          }
        }
      ]
    });
  },

  // ----------------------------------------------------
  // REUSABLE ENTERPRISE TABLE VIEW GENERATOR
  // ----------------------------------------------------
  renderGenericTablePage({ container, pageTitle, subtitle, primaryBtnText, onPrimaryClick, filterFields, data, keyField, tableTitle, columns }) {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <!-- Page Title & Header Actions -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">${pageTitle}</h1>
            <p class="text-xs text-[#5E6C84] mt-0.5 font-medium">${subtitle}</p>
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

  // Modal Dialog: Add Proforma Invoice
  showAddProformaModal() {
    Modal.open({
      title: 'Generate New Proforma Invoice (PI)',
      size: 'xl',
      content: `
        <form id="form-add-pi" class="space-y-4 text-xs">
          <!-- Section 1: Customer & Buyer -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Buyer &amp; Delivery Destination</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Customer / Importer <span class="text-[#DE350B]">*</span></label>
                <select id="new-pi-customer" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
                  <option value="Red Lobster Supply Chain LLC">Red Lobster Supply Chain LLC (USA)</option>
                  <option value="Maruha Nichiro Corporation">Maruha Nichiro Corporation (Japan)</option>
                  <option value="Royal Greenland Seafood A/S">Royal Greenland Seafood A/S (EU)</option>
                  <option value="Sysco Corporation International">Sysco Corporation International (USA)</option>
                  <option value="High Liner Foods Canada">High Liner Foods Canada</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Port of Discharge <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="new-pi-port" value="Long Beach Port, USA" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Incoterms <span class="text-[#DE350B]">*</span></label>
                <select id="new-pi-inco" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                  <option value="CIF Port of Destination">CIF Port of Destination</option>
                  <option value="CFR Port of Destination">CFR Port of Destination</option>
                  <option value="FOB Visakhapatnam Port">FOB Visakhapatnam Port (INVTZ)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section 2: Products & Quantities -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Product Specifications &amp; Pricing</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Species / Variety <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="new-pi-prod" value="Vannamei Shrimp HLSO 26/30 IQF" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Quantity (Kg) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="new-pi-qty" value="18000" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Unit Price (USD / Kg) <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="0.01" id="new-pi-rate" value="8.95" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" required>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Packing Cartons</label>
                <input type="number" id="new-pi-cartons" value="1200" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
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
          label: 'Create Proforma Invoice',
          type: 'primary',
          onClick: (modal) => {
            const nextNo = `PI-2026-${910 + this.state.proformaList.length}`;
            const customer = document.getElementById('new-pi-customer')?.value || 'Red Lobster Supply Chain LLC';
            const prod = document.getElementById('new-pi-prod')?.value || 'Vannamei Shrimp';
            const qty = Number(document.getElementById('new-pi-qty')?.value) || 15000;
            const rate = Number(document.getElementById('new-pi-rate')?.value) || 9.0;
            const port = document.getElementById('new-pi-port')?.value || 'Long Beach Port, USA';

            const newRecord = {
              piNumber: nextNo,
              piDate: new Date().toISOString().slice(0, 10),
              customerName: customer,
              destinationPort: port,
              productDescription: prod,
              cartons: Math.round(qty / 15),
              quantityKg: qty,
              unitPriceUsd: rate,
              totalAmountUsd: Math.round(qty * rate),
              paymentTerms: '100% Irrevocable LC at Sight',
              validityDate: '2026-11-30',
              status: 'CONFIRMED_ACCEPTED'
            };

            this.state.proformaList.unshift(newRecord);
            modal.close();
            Toast.show(`Proforma Invoice ${nextNo} generated successfully!`, 'success');
            const mainEl = document.getElementById('sales-view-main');
            if (mainEl) this.renderProformaList(mainEl);
          }
        }
      ]
    });
  }
};
