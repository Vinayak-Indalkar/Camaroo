// Miledeep Enterprise ERP — Inventory & Stores Module Views
// General Store (Indent Page, Indent List, Proforma Order, Proforma List, GRN, GRN List, Material Issue)
// Packing Material (PM Proforma Invoice)
// Inventory (Proforma Register)

import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';
import { TabBar } from '../components/tabBar.js';

export const InventoryView = {
  // Local state for interactive operations
  state: {
    // 1. General Store Indent Page Records
    indentPageRecords: [
      {
        id: 1,
        docNo: 'IND-GS-2026-0041',
        date: '2026-10-28',
        department: 'Processing Unit-5',
        status: 'Approved',
        narration: 'Monthly store requisition for seafood processing line consumables and safety PPE.',
        items: [
          {
            item: 'Nitrile Food-Grade Gloves (Blue, L)',
            uom: 'Box',
            availableQty: 15,
            requestedQty: 150,
            purpose: 'Line peeling and grading hygiene requirement',
            attachment: 'gloves_spec_sheet.pdf',
            remarks: 'High priority daily requirement'
          },
          {
            item: 'Thermal Transfer Barcode Ribbon (110mm x 300m)',
            uom: 'Rolls',
            availableQty: 4,
            requestedQty: 20,
            purpose: 'Freezer lot pallet tagging',
            attachment: '',
            remarks: 'For Zebra industrial printer'
          }
        ]
      },
      {
        id: 2,
        docNo: 'IND-GS-2026-0042',
        date: '2026-10-27',
        department: 'Coldstore Hub',
        status: 'In Procurement',
        narration: 'Coldstore equipment maintenance and sub-zero protective gear requisition.',
        items: [
          {
            item: 'Sub-Zero Thermal Parka Jackets & Boots',
            uom: 'Pairs',
            availableQty: 5,
            requestedQty: 30,
            purpose: 'Night-shift coldstore warehouse crew',
            attachment: 'parka_safety_cert.pdf',
            remarks: 'Sizes 9, 10, 11'
          }
        ]
      },
      {
        id: 3,
        docNo: 'IND-GS-2026-0043',
        date: '2026-10-26',
        department: 'Quality Control Lab',
        status: 'Approved',
        narration: 'Chemical reagents and HACCP water residual chlorine screen testing kits.',
        items: [
          {
            item: 'Chlorine Residual & Ozone Test Kits',
            uom: 'Kits',
            availableQty: 2,
            requestedQty: 25,
            purpose: 'Daily HACCP water screening',
            attachment: 'lab_haccp_protocol.pdf',
            remarks: 'Urgent stock needed for audit'
          }
        ]
      },
      {
        id: 4,
        docNo: 'IND-GS-2026-0044',
        date: '2026-10-25',
        department: 'Engineering & Maintenance',
        status: 'Pending',
        narration: 'Contact Plate Freezer door replacement seals and overhaul gaskets.',
        items: [
          {
            item: 'Neoprene Plate Freezer Door Gaskets (8m)',
            uom: 'Sets',
            availableQty: 1,
            requestedQty: 12,
            purpose: 'Prevent thermal leakage on Plate Freezer #3',
            attachment: '',
            remarks: 'Scheduled weekend overhaul'
          }
        ]
      },
      {
        id: 5,
        docNo: 'IND-GS-2026-0045',
        date: '2026-10-24',
        department: 'Pre-Processing Unit',
        status: 'Approved',
        narration: 'Perforated shrimp washing and sorting crates replacement.',
        items: [
          {
            item: 'Stainless Steel SS316 Shovels & Baskets',
            uom: 'Nos',
            availableQty: 10,
            requestedQty: 50,
            purpose: 'Deheading shed intake sorting',
            attachment: '',
            remarks: 'Heavy duty SS316 grade'
          }
        ]
      },
      {
        id: 6,
        docNo: 'IND-GS-2026-0046',
        date: '2026-10-20',
        department: 'Administration & Safety',
        status: 'Pending',
        narration: 'Fire extinguishers refill and safety signage replacement.',
        items: [
          {
            item: 'CO2 Fire Extinguisher Refill (4.5kg)',
            uom: 'Nos',
            availableQty: 2,
            requestedQty: 10,
            purpose: 'Annual plant safety audit compliance',
            attachment: '',
            remarks: 'Scheduled inspection'
          }
        ]
      },
      {
        id: 7,
        docNo: 'IND-GS-2026-0047',
        date: '2026-10-18',
        department: 'Processing Unit-5',
        status: 'Rejected',
        narration: 'Additional sorting crates beyond monthly allocation quota.',
        items: [
          {
            item: 'Plastic Sorting Crates (Red, 50L)',
            uom: 'Nos',
            availableQty: 40,
            requestedQty: 120,
            purpose: 'Extra buffer storage',
            attachment: '',
            remarks: 'Quota exceeded for October'
          }
        ]
      },
      {
        id: 8,
        docNo: 'IND-GS-2026-0048',
        date: '2026-10-15',
        department: 'Coldstore Hub',
        status: 'Approved',
        narration: 'Heavy duty pallet shrink wrap film rolls for blast freezer staging.',
        items: [
          {
            item: 'Stretch Wrap Film Rolls (500mm x 300m, 23mic)',
            uom: 'Rolls',
            availableQty: 6,
            requestedQty: 50,
            purpose: 'Export pallet wrapping',
            attachment: '',
            remarks: 'Approved by store manager'
          }
        ]
      },
      {
        id: 9,
        docNo: 'IND-GS-2026-0049',
        date: '2026-10-12',
        department: 'Quality Control Lab',
        status: 'In Procurement',
        narration: 'Microbiology culture media and sterile petri dishes refill.',
        items: [
          {
            item: 'Plate Count Agar (PCA) Powder 500g',
            uom: 'Bottles',
            availableQty: 1,
            requestedQty: 8,
            purpose: 'Daily pathogen screening',
            attachment: '',
            remarks: 'Standard lab consumable'
          }
        ]
      },
      {
        id: 10,
        docNo: 'IND-GS-2026-0050',
        date: '2026-10-05',
        department: 'Engineering & Maintenance',
        status: 'Approved',
        narration: 'Ammonia refrigeration valve seals and pressure gauge replacement.',
        items: [
          {
            item: 'Danfoss Ammonia Valve Packing Kits',
            uom: 'Sets',
            availableQty: 0,
            requestedQty: 6,
            purpose: 'Refrigeration unit routine maintenance',
            attachment: 'valve_specs.pdf',
            remarks: 'Critical spare'
          }
        ]
      }
    ],

    // 1b. General Store Proforma Orders
    proformaOrderList: [
      {
        id: 1,
        docNo: 'PO-GS-2026-0101',
        code: 'COD-GS-8812',
        date: '2026-10-28',
        supplier: 'Devi Safety Aids & Industrial Supplies',
        paymentTerms: '30 Days from Inward',
        freightType: 'Paid by Supplier',
        subDeliveryDate: '2026-11-04',
        narration: 'Procurement of nitrile gloves and hygiene protective gear for Unit-5 processing shifts',
        status: 'Approved',
        items: [
          {
            item: 'Nitrile Food-Grade Gloves (Blue, L)',
            unit: 'Box',
            availQty: 15,
            unitPrice: 280.00,
            quantity: 150,
            supplierRate: 280.00,
            totalValue: 42000.00,
            discountPercent: 5,
            discountAmt: 2100.00,
            gstPercent: 18,
            sgstAmt: 3591.00,
            cgstAmt: 3591.00,
            igstAmt: 0.00,
            taxAmount: 7182.00,
            invoiceAmt: 47082.00,
            dispatchedDate: '2026-10-29'
          }
        ]
      },
      {
        id: 2,
        docNo: 'PO-GS-2026-0102',
        code: 'COD-GS-8813',
        date: '2026-10-27',
        supplier: 'Apex Engineering & Spare Parts Ltd',
        paymentTerms: '50% Advance / 50% Delivery',
        freightType: 'To Pay (Consignee)',
        subDeliveryDate: '2026-11-06',
        narration: 'Plate freezer overhaul replacement gaskets and neoprene refrigeration seals',
        status: 'Issued to Vendor',
        items: [
          {
            item: 'Neoprene Plate Freezer Door Gaskets (8m)',
            unit: 'Sets',
            availQty: 1,
            unitPrice: 3200.00,
            quantity: 12,
            supplierRate: 3200.00,
            totalValue: 38400.00,
            discountPercent: 0,
            discountAmt: 0.00,
            gstPercent: 18,
            sgstAmt: 3456.00,
            cgstAmt: 3456.00,
            igstAmt: 0.00,
            taxAmount: 6912.00,
            invoiceAmt: 45312.00,
            dispatchedDate: '2026-10-30'
          }
        ]
      },
      {
        id: 3,
        docNo: 'PO-GS-2026-0103',
        code: 'COD-GS-8814',
        date: '2026-10-26',
        supplier: 'Bio-Chem Scientific Instruments India',
        paymentTerms: 'Immediate against Inward',
        freightType: 'CIF Visakhapatnam',
        subDeliveryDate: '2026-11-02',
        narration: 'HACCP water chlorine residual screening test kits and laboratory consumables',
        status: 'Pending Delivery',
        items: [
          {
            item: 'Chlorine Residual & Ozone Test Kits',
            unit: 'Kits',
            availQty: 2,
            unitPrice: 1450.00,
            quantity: 25,
            supplierRate: 1450.00,
            totalValue: 36250.00,
            discountPercent: 2,
            discountAmt: 725.00,
            gstPercent: 12,
            sgstAmt: 0.00,
            cgstAmt: 0.00,
            igstAmt: 4263.00,
            taxAmount: 4263.00,
            invoiceAmt: 39788.00,
            dispatchedDate: '2026-10-28'
          }
        ]
      },
      {
        id: 4,
        docNo: 'PO-GS-2026-0104',
        code: 'COD-GS-8815',
        date: '2026-10-24',
        supplier: 'Sri Venkateswara Packaging Ltd',
        paymentTerms: '30 Days from Inward',
        freightType: 'Paid by Supplier',
        subDeliveryDate: '2026-10-31',
        narration: 'Thermal barcode printer ribbons for coldstore pallet tracking and tagging',
        status: 'Completed',
        items: [
          {
            item: 'Thermal Transfer Barcode Ribbon (110mm x 300m)',
            unit: 'Rolls',
            availQty: 4,
            unitPrice: 420.00,
            quantity: 40,
            supplierRate: 420.00,
            totalValue: 16800.00,
            discountPercent: 0,
            discountAmt: 0.00,
            gstPercent: 18,
            sgstAmt: 1512.00,
            cgstAmt: 1512.00,
            igstAmt: 0.00,
            taxAmount: 3024.00,
            invoiceAmt: 19824.00,
            dispatchedDate: '2026-10-26'
          }
        ]
      },
      {
        id: 5,
        docNo: 'PO-GS-2026-0105',
        code: 'COD-GS-8816',
        date: '2026-10-22',
        supplier: 'Delta Seals & Tapes Corp',
        paymentTerms: 'Net 15 Days',
        freightType: 'FOB Ex-Factory',
        subDeliveryDate: '2026-11-01',
        narration: 'High-tensile PP strapping rolls and carton sealing tape for packaging department',
        status: 'Approved',
        items: [
          {
            item: 'Heat-Sealing PP Strapping Rolls (12mm x 3000m)',
            unit: 'Rolls',
            availQty: 8,
            unitPrice: 1650.00,
            quantity: 30,
            supplierRate: 1650.00,
            totalValue: 49500.00,
            discountPercent: 4,
            discountAmt: 1980.00,
            gstPercent: 18,
            sgstAmt: 4276.80,
            cgstAmt: 4276.80,
            igstAmt: 0.00,
            taxAmount: 8553.60,
            invoiceAmt: 56073.60,
            dispatchedDate: '2026-10-25'
          }
        ]
      }
    ],

    // 2. Packing Material Proforma Invoices
    pmProformaList: [
      {
        id: 1,
        piNumber: 'PI-PM-2026-0891',
        piDate: '2026-10-28',
        supplierName: 'Sri Venkateswara Packaging Ltd',
        materialCategory: 'Master Cartons',
        itemDescription: '7-Ply Corrugated Master Cartons (1 X 10 KGS IQF Print)',
        quantity: 35000,
        unit: 'MCs',
        rate: 58.50,
        grossAmount: 2047500,
        taxAmount: 245700,
        totalAmount: 2293200,
        deliveryPlant: 'DFL Unit-5 (JPT)',
        paymentTerms: '30 Days from Inward',
        status: 'Approved',
        deliveryStatus: 'In Transit'
      },
      {
        id: 2,
        piNumber: 'PI-PM-2026-0892',
        piDate: '2026-10-27',
        supplierName: 'Apex Polymers & Films India Ltd',
        materialCategory: 'Poly Bags',
        itemDescription: 'Printed LDPE 2-Lb Gusseted Shrimp Bags with Zipper (50 Micron)',
        quantity: 120000,
        unit: 'Bags',
        rate: 3.40,
        grossAmount: 408000,
        taxAmount: 73440,
        totalAmount: 481440,
        deliveryPlant: 'DFL Unit-5 (JPT)',
        paymentTerms: '50% Advance / 50% Inward',
        status: 'Approved',
        deliveryStatus: 'Partially Received'
      },
      {
        id: 3,
        piNumber: 'PI-PM-2026-0893',
        piDate: '2026-10-26',
        supplierName: 'Modern Corrugators Visakhapatnam',
        materialCategory: 'Inner Cartons',
        itemDescription: 'Duplex Printed 2-KG Inner Cartons (Vannamei Tail-Off Graphic)',
        quantity: 80000,
        unit: 'Boxes',
        rate: 9.80,
        grossAmount: 784000,
        taxAmount: 94080,
        totalAmount: 878080,
        deliveryPlant: 'DFL Unit-7 (GNT)',
        paymentTerms: 'Immediate upon QC Approval',
        status: 'In Transit',
        deliveryStatus: 'Under Loading'
      }
    ],

    // 3. Proforma Register Entries
    proformaRegisterList: [
      {
        id: 1,
        regCode: 'REG-INV-2026-1041',
        refDoc: 'PI-PM-2026-0891',
        regDate: '2026-10-28',
        supplier: 'Sri Venkateswara Packaging Ltd',
        category: 'Packing Material',
        itemDescription: '7-Ply Corrugated Master Cartons (1 X 10 KGS IQF Print)',
        storeLocation: 'Coldstore Packaging Vault #1',
        quantity: 35000,
        unit: 'MCs',
        rate: 58.50,
        taxAmount: 245700,
        totalInvoiced: 2293200,
        stockStatus: 'In Stock',
        auditStatus: 'Verified'
      },
      {
        id: 2,
        regCode: 'REG-INV-2026-1042',
        refDoc: 'PI-PM-2026-0892',
        regDate: '2026-10-27',
        supplier: 'Apex Polymers & Films India Ltd',
        category: 'Packing Material',
        itemDescription: 'Printed LDPE 2-Lb Gusseted Shrimp Bags with Zipper',
        storeLocation: 'Central Store Bay C-4',
        quantity: 60000,
        unit: 'Bags',
        rate: 3.40,
        taxAmount: 36720,
        totalInvoiced: 240720,
        stockStatus: 'In Stock',
        auditStatus: 'Verified'
      }
    ]
  },

  // Main Route Handler
  render(containerId, subPage = 'indent-page', activeHash = '#/inventory/general-store/indent-page') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div id="inventory-tab-bar-container"></div>
      <div id="inventory-subpage-content" class="space-y-4"></div>
    `;

    TabBar.render('inventory-tab-bar-container', activeHash);
    const subContainer = document.getElementById('inventory-subpage-content');
    if (!subContainer) return;

    const cleanHash = (activeHash || '').toLowerCase();

    // General Store sub-tabs routing
    if (cleanHash.includes('indent-list')) {
      this.renderGeneralStoreIndentList(subContainer);
    } else if (cleanHash.includes('proforma-order')) {
      this.renderGeneralStoreProformaOrder(subContainer);
    } else if (cleanHash.includes('proforma-list')) {
      this.renderGeneralStoreProformaList(subContainer);
    } else if (cleanHash.includes('goods-receipt-note')) {
      this.renderGeneralStoreGRN(subContainer);
    } else if (cleanHash.includes('grn-list')) {
      this.renderGeneralStoreGRNList(subContainer);
    } else if (cleanHash.includes('material-issue')) {
      this.renderGeneralStoreMaterialIssue(subContainer);
    } else if (cleanHash.includes('pm-proforma-invoice') || cleanHash.includes('packing-material')) {
      this.renderPackingMaterialProforma(subContainer);
    } else if (cleanHash.includes('proforma-register') || cleanHash.includes('inventory/inventory')) {
      this.renderInventoryProformaRegister(subContainer);
    } else {
      // Default: Indent Page (GS)
      this.renderGeneralStoreIndentPage(subContainer);
    }
  },

  // =========================================================================
  // 1. GENERAL STORE &rarr; INDENT PAGE (GS)
  // Form Input Fields: DOC NO, DATE, DEPARTMENT, NARRATION
  // Item Details Fields: Item, UoM, Available Qty, Requested Qty, Purpose, Attachment, Remarks, Action
  // Search & Filter
  // Table Columns: S No, Doc No, Date, Actions (only Edit & Delete with Modal.confirm)
  // =========================================================================
  renderGeneralStoreIndentPage(container) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextDocNum = (this.state.indentPageRecords?.length || 0) + 1;
    const defaultDocNo = `DOC-GS-2026-${String(nextDocNum).padStart(4, '0')}`;

    // Local array for currently staged items in the form
    let stagedItems = [
      {
        item: 'Nitrile Food-Grade Gloves (Blue, L)',
        uom: 'Box',
        availableQty: 25,
        requestedQty: 100,
        purpose: 'Daily processing line hygiene requirement',
        attachment: 'gloves_cert.pdf',
        remarks: 'Urgent for Shift A'
      }
    ];

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Indent Page (GS)</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Create and manage General Store material requisitions and departmental indent documentation</p>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="gs-btn-toggle-form" class="btn-secondary border border-[#CBD5E1] px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-white text-[#475569] hover:bg-[#F8FAFC] transition-all">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            <span id="gs-form-toggle-text">Collapse Form</span>
          </button>
        </div>
      </div>

      <!-- Add Indent Form Card -->
      <div id="gs-indent-form-card" class="bg-white rounded-xl border border-[#DFE1E6] p-4 sm:p-5 shadow-xs transition-all">
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-[#F1F5F9]">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <h2 class="text-sm font-bold text-[#172B4D]">Indent Header Information</h2>
          </div>
          <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-red-500 font-bold">*</span> are required</span>
        </div>

        <form id="gs-add-indent-form" class="space-y-4 text-xs text-[#172B4D]">
          <!-- Form Header Input Fields: DOC NO, DATE, DEPARTMENT, NARRATION -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <!-- 1. DOC NO -->
            <div>
              <label for="gs-form-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-red-500">*</span></label>
              <input type="text" id="gs-form-docno" name="docNo" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>

            <!-- 2. DATE -->
            <div>
              <label for="gs-form-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-red-500">*</span></label>
              <input type="date" id="gs-form-date" name="date" value="${todayStr}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>

            <!-- 3. DEPARTMENT -->
            <div>
              <label for="gs-form-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-red-500">*</span></label>
              <select id="gs-form-dept" name="department" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Processing Unit-5" selected>Processing Unit-5</option>
                <option value="Coldstore Hub">Coldstore Hub</option>
                <option value="Quality Control Lab">Quality Control Lab</option>
                <option value="Engineering & Maintenance">Engineering & Maintenance</option>
                <option value="Pre-Processing Unit">Pre-Processing Unit</option>
                <option value="Administration & Safety">Administration & Safety</option>
              </select>
            </div>

            <!-- 4. NARRATION -->
            <div>
              <label for="gs-form-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
              <input type="text" id="gs-form-narration" name="narration" placeholder="Enter indent purpose / narration..." value="Monthly store requisition for seafood processing shift consumables" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
          </div>

          <!-- Item Details Fields Section -->
          <div class="mt-4 pt-4 border-t border-[#F1F5F9]">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Item Details
              </h3>
              <span id="gs-staged-items-count" class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7]">${stagedItems.length} Item(s) Added</span>
            </div>

            <!-- Item Input Grid: Item, UoM, Available Qty, Requested Qty, Purpose, Attachment, Remarks, Action -->
            <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 space-y-3">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- 1. Item -->
                <div class="md:col-span-2">
                  <label for="gs-item-name" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM <span class="text-red-500">*</span></label>
                  <input type="text" id="gs-item-name" placeholder="Item name, specification, make or code..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 2. UoM -->
                <div>
                  <label for="gs-item-uom" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UoM <span class="text-red-500">*</span></label>
                  <select id="gs-item-uom" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Box" selected>Box</option>
                    <option value="Nos">Nos</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Sets">Sets</option>
                    <option value="Kits">Kits</option>
                    <option value="Pairs">Pairs</option>
                    <option value="Kg">Kg</option>
                    <option value="Ltr">Ltr</option>
                    <option value="Bags">Bags</option>
                  </select>
                </div>

                <!-- 3. Available Qty -->
                <div>
                  <label for="gs-item-avail-qty" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAILABLE QTY</label>
                  <input type="number" id="gs-item-avail-qty" value="10" min="0" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#00875A] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- 4. Requested Qty -->
                <div>
                  <label for="gs-item-req-qty" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REQUESTED QTY <span class="text-red-500">*</span></label>
                  <input type="number" id="gs-item-req-qty" value="50" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 5. Purpose -->
                <div>
                  <label for="gs-item-purpose" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PURPOSE</label>
                  <input type="text" id="gs-item-purpose" placeholder="Operational purpose..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 6. Attachment -->
                <div>
                  <label for="gs-item-attachment" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ATTACHMENT</label>
                  <input type="file" id="gs-item-attachment" class="w-full text-[11px] px-2 py-1 bg-white border border-[#CBD5E1] rounded-lg text-[#5E6C84] focus:outline-none focus:border-[#00A4B7] file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-[#E0F2FE] file:text-[#0284C7] cursor-pointer" />
                </div>

                <!-- 7. Remarks -->
                <div>
                  <label for="gs-item-remarks" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
                  <input type="text" id="gs-item-remarks" placeholder="Optional notes / remarks..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>
              </div>

              <!-- 8. Action (Add Item Button) -->
              <div class="flex items-center justify-end pt-1">
                <button type="button" id="gs-btn-add-item" class="btn-secondary border border-[#00A4B7] px-4 py-1.5 rounded-full text-xs font-bold text-[#00A4B7] hover:bg-[#E0F2FE] transition-colors cursor-pointer inline-flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                  <span>Add Item</span>
                </button>
              </div>
            </div>

            <!-- Staged Items Preview Table -->
            <div class="mt-3 overflow-x-auto border border-[#E2E8F0] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2 px-3">Item</th>
                    <th class="py-2 px-3">UoM</th>
                    <th class="py-2 px-3 text-right">Available Qty</th>
                    <th class="py-2 px-3 text-right">Requested Qty</th>
                    <th class="py-2 px-3">Purpose</th>
                    <th class="py-2 px-3">Attachment</th>
                    <th class="py-2 px-3">Remarks</th>
                    <th class="py-2 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="gs-staged-items-tbody" class="divide-y divide-[#E2E8F0] text-[#1E293B]">
                  <!-- Rendered dynamically -->
                </tbody>
              </table>
            </div>
          </div>

          <!-- Bottom Form Actions: Save Indent & Clear Form -->
          <div class="flex items-center justify-end gap-3 pt-3 border-t border-[#F1F5F9]">
            <button type="button" id="gs-btn-reset-form" class="btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer">
              <span>Reset</span>
            </button>
            <button type="submit" id="gs-btn-save-indent" class="btn-primary border-0 px-6 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Save Indent</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Search & Filter Card (calibrated as per the form data) -->
      <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
        <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#F1F5F9]">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filter Indent Records</h3>
          </div>
          <button type="button" id="gs-search-reset-btn" class="w-7 h-7 rounded-full border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#475569] flex items-center justify-center transition-colors cursor-pointer" title="Reset Filters">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <!-- Filter: DOC NO -->
          <div>
            <label for="gs-filter-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
            <input type="text" id="gs-filter-docno" placeholder="Search by Doc No..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: DATE -->
          <div>
            <label for="gs-filter-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
            <input type="date" id="gs-filter-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: DEPARTMENT -->
          <div>
            <label for="gs-filter-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT</label>
            <select id="gs-filter-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Departments</option>
              <option value="Processing Unit-5">Processing Unit-5</option>
              <option value="Coldstore Hub">Coldstore Hub</option>
              <option value="Quality Control Lab">Quality Control Lab</option>
              <option value="Engineering & Maintenance">Engineering & Maintenance</option>
              <option value="Pre-Processing Unit">Pre-Processing Unit</option>
              <option value="Administration & Safety">Administration & Safety</option>
            </select>
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button type="button" id="gs-search-btn" class="w-full btn-primary px-4 py-1.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search Indents</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Data Table Card (S No, Doc No, Date, Actions with only edit, delete icon) -->
      <div id="gs-indents-table-container"></div>
    `;

    // 1. Render Staged Items in the Form
    const renderStagedItems = () => {
      const tbody = container.querySelector('#gs-staged-items-tbody');
      const countBadge = container.querySelector('#gs-staged-items-count');
      if (!tbody) return;

      if (countBadge) countBadge.textContent = `${stagedItems.length} Item(s) Added`;

      if (stagedItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="8" class="text-center py-4 text-xs text-[#94A3B8] italic">No items added to this indent yet. Fill item fields above and click "+ Add Item".</td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = stagedItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
          <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">${it.availableQty}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.requestedQty}</td>
          <td class="py-2.5 px-3 text-[#5E6C84]">${it.purpose || '-'}</td>
          <td class="py-2.5 px-3">
            ${it.attachment ? `<span class="inline-flex items-center gap-1 text-[11px] font-mono text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>${it.attachment}</span>` : '<span class="text-[#94A3B8]">-</span>'}
          </td>
          <td class="py-2.5 px-3 text-[#5E6C84]">${it.remarks || '-'}</td>
          <td class="py-2.5 px-3 text-center">
            <button type="button" data-remove-idx="${idx}" class="gs-btn-remove-item w-6 h-6 rounded-full hover:bg-[#FFEBE6] text-[#DE350B] inline-flex items-center justify-center transition-colors cursor-pointer" title="Remove Item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      // Bind remove buttons
      tbody.querySelectorAll('.gs-btn-remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rIdx = parseInt(btn.dataset.removeIdx, 10);
          stagedItems.splice(rIdx, 1);
          renderStagedItems();
        });
      });
    };

    renderStagedItems();

    // 2. Add Item Handler
    container.querySelector('#gs-btn-add-item')?.addEventListener('click', () => {
      const itemNameInput = container.querySelector('#gs-item-name');
      const uomInput = container.querySelector('#gs-item-uom');
      const availInput = container.querySelector('#gs-item-avail-qty');
      const reqInput = container.querySelector('#gs-item-req-qty');
      const purposeInput = container.querySelector('#gs-item-purpose');
      const attachInput = container.querySelector('#gs-item-attachment');
      const remarksInput = container.querySelector('#gs-item-remarks');

      const itemName = itemNameInput?.value?.trim();
      const reqQty = parseInt(reqInput?.value, 10);

      if (!itemName) {
        Toast.show('Please enter Item description before adding.', 'warning');
        itemNameInput?.focus();
        return;
      }
      if (!reqQty || reqQty <= 0) {
        Toast.show('Please enter a valid Requested Quantity (> 0).', 'warning');
        reqInput?.focus();
        return;
      }

      const fileAttached = attachInput?.files && attachInput.files.length > 0 ? attachInput.files[0].name : '';

      stagedItems.push({
        item: itemName,
        uom: uomInput?.value || 'Nos',
        availableQty: parseInt(availInput?.value, 10) || 0,
        requestedQty: reqQty,
        purpose: purposeInput?.value?.trim() || '',
        attachment: fileAttached,
        remarks: remarksInput?.value?.trim() || ''
      });

      // Clear item inputs
      itemNameInput.value = '';
      reqInput.value = '50';
      if (purposeInput) purposeInput.value = '';
      if (remarksInput) remarksInput.value = '';
      if (attachInput) attachInput.value = '';

      renderStagedItems();
      Toast.show(`Item "${itemName}" added to indent.`, 'info');
    });

    // 3. Form Toggle Collapse/Expand
    const toggleBtn = container.querySelector('#gs-btn-toggle-form');
    const formCard = container.querySelector('#gs-indent-form-card');
    const toggleText = container.querySelector('#gs-form-toggle-text');
    let isFormVisible = true;

    toggleBtn?.addEventListener('click', () => {
      isFormVisible = !isFormVisible;
      if (formCard) formCard.style.display = isFormVisible ? 'block' : 'none';
      if (toggleText) toggleText.textContent = isFormVisible ? 'Collapse Form' : 'Show Add Indent Form';
    });

    // 4. Reset Form Button
    container.querySelector('#gs-btn-reset-form')?.addEventListener('click', () => {
      const form = container.querySelector('#gs-add-indent-form');
      if (form) form.reset();
      stagedItems = [];
      renderStagedItems();
      Toast.show('Indent entry form cleared', 'info');
    });

    // 5. Submit & Save Indent Handler (with Modal.confirm!)
    container.querySelector('#gs-add-indent-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const docNo = container.querySelector('#gs-form-docno')?.value?.trim();
      const date = container.querySelector('#gs-form-date')?.value;
      const department = container.querySelector('#gs-form-dept')?.value;
      const narration = container.querySelector('#gs-form-narration')?.value?.trim();

      if (!docNo) {
        Toast.show('Please provide a valid DOC NO.', 'warning');
        return;
      }
      if (stagedItems.length === 0) {
        Toast.show('Please add at least one item to the indent details.', 'warning');
        return;
      }

      Modal.confirm({
        title: 'Confirm Save Indent',
        message: `Are you sure you want to save General Store Indent <strong>${docNo}</strong> for <strong>${department}</strong> with <strong>${stagedItems.length} item(s)</strong>?`,
        confirmText: 'Save Indent',
        onConfirm: () => {
          const newRecord = {
            id: (this.state.indentPageRecords?.length || 0) + 1,
            docNo,
            date,
            department,
            narration,
            items: [...stagedItems]
          };

          this.state.indentPageRecords.unshift(newRecord);
          renderTable(this.state.indentPageRecords);

          // Reset form with new sequence docNo
          const nextSeq = this.state.indentPageRecords.length + 1;
          container.querySelector('#gs-form-docno').value = `DOC-GS-2026-${String(nextSeq).padStart(4, '0')}`;
          stagedItems = [];
          renderStagedItems();

          Toast.show(`General Store Indent ${docNo} created successfully!`, 'success');
        }
      });
    });

    // 6. Data Table Rendering: S No, Doc No, Date, Actions (only Edit & Delete with Modal.confirm)
    let currentData = [...this.state.indentPageRecords];

    const renderTable = (data) => {
      currentData = data;
      new DataTable({
        containerId: 'gs-indents-table-container',
        tableTitle: `Indent Records (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S No
          {
            field: 'sNo',
            header: 'S No',
            sortable: true,
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>`
          },
          // 2. Doc No
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>
                <span class="text-[10px] text-[#5E6C84]">${r.department} (${r.items?.length || 0} items)</span>
              </div>
            `
          },
          // 3. Date
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>`
          }
        ],
        // Actions column: ONLY Edit and Delete icon with confirmation popup
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'Edit',
            title: 'Edit Indent',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditIndentModal(row, () => {
                renderTable(this.state.indentPageRecords);
              });
            }
          },
          {
            label: 'Delete',
            title: 'Delete Indent',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Indent Record',
                message: `Are you sure you want to permanently delete Indent <strong>${row.docNo}</strong> (${row.department}, Date: ${row.date})? This action cannot be undone.`,
                confirmText: 'Delete Indent',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.indentPageRecords.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.indentPageRecords.splice(idx, 1);
                    renderTable(this.state.indentPageRecords);
                    Toast.show(`Indent ${row.docNo} permanently deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.indentPageRecords);

    // 7. Search & Filter Handlers
    container.querySelector('#gs-search-btn')?.addEventListener('click', () => {
      const docVal = container.querySelector('#gs-filter-docno')?.value?.trim().toLowerCase();
      const dateVal = container.querySelector('#gs-filter-date')?.value;
      const deptVal = container.querySelector('#gs-filter-dept')?.value;

      const filtered = this.state.indentPageRecords.filter(it => {
        if (docVal && !it.docNo.toLowerCase().includes(docVal)) return false;
        if (dateVal && it.date !== dateVal) return false;
        if (deptVal && deptVal !== 'ALL' && it.department !== deptVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching indent record(s)`, 'info');
    });

    container.querySelector('#gs-search-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#gs-filter-docno').value = '';
      container.querySelector('#gs-filter-date').value = '';
      container.querySelector('#gs-filter-dept').value = 'ALL';
      renderTable(this.state.indentPageRecords);
      Toast.show('Indent filters reset', 'info');
    });
  },

  // Edit Indent Modal (with Modal.confirm on save)
  showEditIndentModal(row, onSuccess) {
    Modal.open({
      title: `Edit Indent: ${row.docNo}`,
      size: 'lg',
      content: `
        <form id="form-edit-indent" class="space-y-4 text-xs text-[#172B4D]">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
              <input type="text" name="docNo" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-red-500">*</span></label>
              <input type="date" name="date" value="${row.date}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-red-500">*</span></label>
              <select name="department" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="Processing Unit-5" ${row.department === 'Processing Unit-5' ? 'selected' : ''}>Processing Unit-5</option>
                <option value="Coldstore Hub" ${row.department === 'Coldstore Hub' ? 'selected' : ''}>Coldstore Hub</option>
                <option value="Quality Control Lab" ${row.department === 'Quality Control Lab' ? 'selected' : ''}>Quality Control Lab</option>
                <option value="Engineering & Maintenance" ${row.department === 'Engineering & Maintenance' ? 'selected' : ''}>Engineering & Maintenance</option>
                <option value="Pre-Processing Unit" ${row.department === 'Pre-Processing Unit' ? 'selected' : ''}>Pre-Processing Unit</option>
                <option value="Administration & Safety" ${row.department === 'Administration & Safety' ? 'selected' : ''}>Administration & Safety</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
            <textarea name="narration" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7]">${row.narration || ''}</textarea>
          </div>

          <!-- Existing Items List Preview -->
          <div class="border border-[#E2E8F0] rounded-lg p-3 bg-[#F8FAFC]">
            <h4 class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-2">Indent Item Details (${row.items?.length || 0})</h4>
            <div class="space-y-1.5">
              ${(row.items || []).map(it => `
                <div class="flex items-center justify-between text-xs py-1 px-2 bg-white rounded border border-[#E2E8F0]">
                  <span class="font-semibold text-[#172B4D]">${it.item}</span>
                  <span class="font-mono font-bold text-[#00A4B7]">${it.requestedQty} ${it.uom}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Update Indent',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-edit-indent');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);

            Modal.confirm({
              title: 'Confirm Update Indent',
              message: `Are you sure you want to update General Store Indent <strong>${row.docNo}</strong>?`,
              confirmText: 'Update Indent',
              onConfirm: () => {
                row.date = fd.get('date');
                row.department = fd.get('department');
                row.narration = fd.get('narration');

                modal.close();
                Toast.show(`Indent ${row.docNo} updated successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
  },

  // =========================================================================
  // Additional General Store Tabs (Indent List, Proforma Order, Proforma List, GRN, GRN List, Material Issue)
  // =========================================================================
  renderGeneralStoreIndentList(container) {
    const fullList = [...this.state.indentPageRecords];

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Indent List (GS)</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Comprehensive departmental indent register and approval status tracking</p>
        </div>
      </div>

      <!-- Search & Filter Card -->
      <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
        <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#F1F5F9]">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filter</h3>
          </div>
          <button type="button" id="gs-list-filter-reset-btn" class="w-7 h-7 rounded-full border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#475569] flex items-center justify-center transition-colors cursor-pointer" title="Reset Filters">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <!-- 1. FROM DATE -->
          <div>
            <label for="gs-list-filter-from-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <input type="date" id="gs-list-filter-from-date" value="2026-10-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 2. TO DATE -->
          <div>
            <label for="gs-list-filter-to-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <input type="date" id="gs-list-filter-to-date" value="2026-10-29" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 3. STATUS -->
          <div>
            <label for="gs-list-filter-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
            <select id="gs-list-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Statuses</option>
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="In Procurement">In Procurement</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button type="button" id="gs-list-filter-search-btn" class="w-full btn-primary px-4 py-1.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Data Table: S.No, Doc No, Date, Status -->
      <div id="gs-indent-list-table-container"></div>
    `;

    const renderTable = (data) => {
      new DataTable({
        containerId: 'gs-indent-list-table-container',
        tableTitle: `Indent Records (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showIndentDetailModal(row);
        },
        columns: [
          // 1. S.No
          {
            field: 'sNo',
            header: 'S.No',
            sortable: true,
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>`
          },
          // 2. Doc No
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>`
          },
          // 3. Date
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>`
          },
          // 4. Status
          {
            field: 'status',
            header: 'Status',
            sortable: true,
            render: v => {
              const st = v || 'Pending';
              if (st === 'Approved') {
                return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>Approved</span>`;
              }
              if (st === 'In Procurement') {
                return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]"><span class="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>In Procurement</span>`;
              }
              if (st === 'Rejected') {
                return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFEBE6] text-[#BF2600] border border-[#FFBDAD]"><span class="w-1.5 h-1.5 rounded-full bg-[#DE350B]"></span>Rejected</span>`;
              }
              return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFF0B3] text-[#172B4D] border border-[#FFE380]"><span class="w-1.5 h-1.5 rounded-full bg-[#FFAB00]"></span>Pending</span>`;
            }
          }
        ],
        data: data
      });
    };

    renderTable(fullList);

    // Search Filter Handler (FROM DATE, TO DATE, STATUS)
    container.querySelector('#gs-list-filter-search-btn')?.addEventListener('click', () => {
      const fromDate = container.querySelector('#gs-list-filter-from-date')?.value;
      const toDate = container.querySelector('#gs-list-filter-to-date')?.value;
      const statusVal = container.querySelector('#gs-list-filter-status')?.value;

      const filtered = fullList.filter(it => {
        if (fromDate && it.date < fromDate) return false;
        if (toDate && it.date > toDate) return false;
        if (statusVal && statusVal !== 'ALL') {
          const itemSt = (it.status || 'Pending').toLowerCase();
          const targetSt = statusVal.toLowerCase();
          if (!itemSt.includes(targetSt)) return false;
        }
        return true;
      });

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} indent record(s)`, 'info');
    });

    // Reset Handler
    container.querySelector('#gs-list-filter-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#gs-list-filter-from-date').value = '2026-10-01';
      container.querySelector('#gs-list-filter-to-date').value = '2026-10-29';
      container.querySelector('#gs-list-filter-status').value = 'ALL';
      renderTable(fullList);
      Toast.show('Indent filters reset to default', 'info');
    });
  },

  // Detail Modal on clicking row
  showIndentDetailModal(row) {
    Modal.open({
      title: `Indent Details: ${row.docNo}`,
      size: 'lg',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAFC] border border-[#E2E8F0] p-3 rounded-xl">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">DOC NO</span>
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${row.docNo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">DATE</span>
              <span class="font-mono font-semibold text-xs text-[#172B4D]">${row.date}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">DEPARTMENT</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.department}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STATUS</span>
              <span class="font-bold text-xs ${row.status === 'Approved' ? 'text-[#00875A]' : (row.status === 'Rejected' ? 'text-[#DE350B]' : 'text-[#D97706]')}">${row.status || 'Pending'}</span>
            </div>
          </div>

          ${row.narration ? `
            <div class="p-2.5 bg-white border border-[#E2E8F0] rounded-lg">
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-0.5">NARRATION</span>
              <p class="text-xs text-[#172B4D]">${row.narration}</p>
            </div>
          ` : ''}

          <div>
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-2">Item Details (${row.items?.length || 0})</h4>
            <div class="overflow-x-auto border border-[#E2E8F0] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-bold text-[11px] uppercase">
                  <tr>
                    <th class="py-2 px-3">Item Description</th>
                    <th class="py-2 px-3">UoM</th>
                    <th class="py-2 px-3 text-right">Available Qty</th>
                    <th class="py-2 px-3 text-right">Requested Qty</th>
                    <th class="py-2 px-3">Purpose</th>
                    <th class="py-2 px-3">Remarks</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#E2E8F0] text-[#1E293B]">
                  ${(row.items || []).map(it => `
                    <tr class="hover:bg-[#F8FAFC]">
                      <td class="py-2 px-3 font-semibold text-[#172B4D]">${it.item}</td>
                      <td class="py-2 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
                      <td class="py-2 px-3 text-right font-mono font-bold text-[#00875A]">${it.availableQty}</td>
                      <td class="py-2 px-3 text-right font-mono font-bold text-[#172B4D]">${it.requestedQty}</td>
                      <td class="py-2 px-3 text-[#5E6C84]">${it.purpose || '-'}</td>
                      <td class="py-2 px-3 text-[#5E6C84]">${it.remarks || '-'}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() }
      ]
    });
  },

  renderGeneralStoreProformaOrder(container) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextPoNum = (this.state.proformaOrderList?.length || 0) + 1;
    const defaultDocNo = `PO-GS-2026-${String(100 + nextPoNum).padStart(4, '0')}`;
    const defaultCode = `COD-GS-${8810 + nextPoNum}`;

    // Staged items list for the PO form
    let stagedPoItems = [
      {
        item: 'Nitrile Food-Grade Gloves (Blue, L)',
        unit: 'Box',
        availQty: 15,
        unitPrice: 280.00,
        quantity: 100,
        supplierRate: 280.00,
        totalValue: 28000.00,
        discountPercent: 5,
        discountAmt: 1400.00,
        gstPercent: 18,
        sgstAmt: 2394.00,
        cgstAmt: 2394.00,
        igstAmt: 0.00,
        taxAmount: 4788.00,
        invoiceAmt: 31388.00,
        dispatchedDate: todayStr
      }
    ];

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Proforma Order (GS)</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Generate, issue, and manage General Store purchase proforma orders from approved indents</p>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="gs-po-toggle-form-btn" class="btn-secondary border border-[#CBD5E1] px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-white text-[#475569] hover:bg-[#F8FAFC] transition-all">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            <span id="gs-po-toggle-text">Collapse Form</span>
          </button>
        </div>
      </div>

      <!-- Add Proforma Order (GS) Form Card -->
      <div id="gs-po-form-card" class="bg-white rounded-xl border border-[#DFE1E6] p-4 sm:p-5 shadow-xs transition-all">
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-[#F1F5F9]">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <h2 class="text-sm font-bold text-[#172B4D]">Add Proforma Order (GS)</h2>
          </div>
          <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-red-500 font-bold">*</span> are required</span>
        </div>

        <form id="gs-add-po-form" class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Form Input Fields: DOC NO, CODE, DATE, SUPPLIER FIRM NAME, PAYMENT & TERMS, FREIGHT TYPE, SUB DELIVERY DATE, NARRATION, STATUS -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <!-- 1. DOC NO -->
            <div>
              <label for="po-form-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-red-500">*</span></label>
              <input type="text" id="po-form-docno" name="docNo" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>

            <!-- 2. CODE -->
            <div>
              <label for="po-form-code" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE <span class="text-red-500">*</span></label>
              <input type="text" id="po-form-code" name="code" value="${defaultCode}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>

            <!-- 3. DATE -->
            <div>
              <label for="po-form-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-red-500">*</span></label>
              <input type="date" id="po-form-date" name="date" value="${todayStr}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>

            <!-- 4. SUPPLIER FIRM NAME -->
            <div>
              <label for="po-form-supplier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER FIRM NAME <span class="text-red-500">*</span></label>
              <select id="po-form-supplier" name="supplier" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Devi Safety Aids & Industrial Supplies" selected>Devi Safety Aids &amp; Industrial Supplies</option>
                <option value="Sri Venkateswara Packaging Ltd">Sri Venkateswara Packaging Ltd</option>
                <option value="Apex Engineering & Spare Parts Ltd">Apex Engineering &amp; Spare Parts Ltd</option>
                <option value="Bio-Chem Scientific Instruments India">Bio-Chem Scientific Instruments India</option>
                <option value="Delta Seals & Tapes Corp">Delta Seals &amp; Tapes Corp</option>
              </select>
            </div>

            <!-- 5. PAYMENT & TERMS -->
            <div>
              <label for="po-form-terms" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAYMENT &amp; TERMS <span class="text-red-500">*</span></label>
              <select id="po-form-terms" name="paymentTerms" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="30 Days from Inward" selected>30 Days from Inward</option>
                <option value="Immediate against Inward">Immediate against Inward</option>
                <option value="50% Advance / 50% Delivery">50% Advance / 50% Delivery</option>
                <option value="Net 15 Days">Net 15 Days</option>
              </select>
            </div>

            <!-- 6. FREIGHT TYPE -->
            <div>
              <label for="po-form-freight" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT TYPE <span class="text-red-500">*</span></label>
              <select id="po-form-freight" name="freightType" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Paid by Supplier" selected>Paid by Supplier</option>
                <option value="To Pay (Consignee)">To Pay (Consignee)</option>
                <option value="FOB Ex-Factory">FOB Ex-Factory</option>
                <option value="CIF Visakhapatnam">CIF Visakhapatnam</option>
              </select>
            </div>

            <!-- 7. SUB DELIVERY DATE -->
            <div>
              <label for="po-form-del-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUB DELIVERY DATE <span class="text-red-500">*</span></label>
              <input type="date" id="po-form-del-date" name="subDeliveryDate" value="2026-11-04" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>

            <!-- 8. NARRATION -->
            <div>
              <label for="po-form-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
              <input type="text" id="po-form-narration" name="narration" placeholder="Proforma order purpose / notes..." value="General Store approved indent procurement order" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>

            <!-- 9. STATUS -->
            <div>
              <label for="po-form-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS <span class="text-red-500">*</span></label>
              <select id="po-form-status" name="status" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Approved" selected>Approved</option>
                <option value="Issued to Vendor">Issued to Vendor</option>
                <option value="Pending Delivery">Pending Delivery</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>

          <!-- Work Flow (From Indent) - Item Details Fields Section -->
          <div class="mt-4 pt-4 border-t border-[#F1F5F9]">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Work Flow (From Indent) - Item Details
              </h3>
              <span id="gs-po-items-count" class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7]">${stagedPoItems.length} Item(s) in Order</span>
            </div>

            <!-- Item Input Grid: Item, Unit, Available Qty, Unit Price, Quantity, Supplier Rate, Total Value, Discount%, Discount, GST%, SGST Amt, CGST Amt, IGST Amt, Tax Amount, Invoice Amt, Dispatched Date -->
            <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 space-y-3">
              <!-- Row 1: Item, Unit, Available Qty, Unit Price, Quantity, Supplier Rate -->
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2.5">
                <div class="md:col-span-2">
                  <label for="poi-item" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM <span class="text-red-500">*</span></label>
                  <input type="text" id="poi-item" placeholder="Item name or code..." value="Nitrile Food-Grade Gloves (Blue, L)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>
                <div>
                  <label for="poi-unit" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UNIT</label>
                  <select id="poi-unit" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Box" selected>Box</option>
                    <option value="Nos">Nos</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Sets">Sets</option>
                    <option value="Kits">Kits</option>
                    <option value="Pairs">Pairs</option>
                    <option value="Kg">Kg</option>
                    <option value="Ltr">Ltr</option>
                  </select>
                </div>
                <div>
                  <label for="poi-avail-qty" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAIL QTY</label>
                  <input type="number" id="poi-avail-qty" value="15" min="0" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#00875A] shadow-2xs" readonly />
                </div>
                <div>
                  <label for="poi-unit-price" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UNIT PRICE (₹)</label>
                  <input type="number" id="poi-unit-price" value="280.00" min="0.01" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>
                <div>
                  <label for="poi-qty" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">QUANTITY <span class="text-red-500">*</span></label>
                  <input type="number" id="poi-qty" value="100" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>
              </div>

              <!-- Row 2: Supplier Rate, Total Value, Discount%, Discount, GST%, Dispatched Date -->
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2.5">
                <div>
                  <label for="poi-supplier-rate" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER RATE (₹)</label>
                  <input type="number" id="poi-supplier-rate" value="280.00" min="0.01" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>
                <div>
                  <label for="poi-total-value" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TOTAL VALUE (₹)</label>
                  <input type="number" id="poi-total-value" value="28000.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#172B4D] shadow-2xs" />
                </div>
                <div>
                  <label for="poi-disc-pct" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DISCOUNT%</label>
                  <input type="number" id="poi-disc-pct" value="5" min="0" max="100" step="0.5" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>
                <div>
                  <label for="poi-disc-amt" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DISCOUNT (₹)</label>
                  <input type="number" id="poi-disc-amt" value="1400.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono font-semibold text-[#D97706] shadow-2xs" />
                </div>
                <div>
                  <label for="poi-gst-pct" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST%</label>
                  <select id="poi-gst-pct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="18" selected>18%</option>
                    <option value="12">12%</option>
                    <option value="5">5%</option>
                    <option value="0">0%</option>
                  </select>
                </div>
                <div>
                  <label for="poi-dispatch-date" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DISPATCHED DATE</label>
                  <input type="date" id="poi-dispatch-date" value="${todayStr}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>
              </div>

              <!-- Row 3: Tax Breakups (SGST Amt, CGST Amt, IGST Amt, Tax Amount, Invoice Amt) & Action Button -->
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 items-end">
                <div>
                  <label for="poi-sgst" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SGST AMT (₹)</label>
                  <input type="number" id="poi-sgst" value="2394.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono text-xs text-[#5E6C84] shadow-2xs" />
                </div>
                <div>
                  <label for="poi-cgst" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CGST AMT (₹)</label>
                  <input type="number" id="poi-cgst" value="2394.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono text-xs text-[#5E6C84] shadow-2xs" />
                </div>
                <div>
                  <label for="poi-igst" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">IGST AMT (₹)</label>
                  <input type="number" id="poi-igst" value="0.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono text-xs text-[#5E6C84] shadow-2xs" />
                </div>
                <div>
                  <label for="poi-tax-amt" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TAX AMOUNT (₹)</label>
                  <input type="number" id="poi-tax-amt" value="4788.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#0284C7] shadow-2xs" />
                </div>
                <div>
                  <label for="poi-inv-amt" class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE AMT (₹)</label>
                  <input type="number" id="poi-inv-amt" value="31388.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg font-mono font-bold text-[#00875A] shadow-2xs" />
                </div>
                <div>
                  <button type="button" id="gs-po-btn-add-item" class="w-full btn-secondary border border-[#00A4B7] px-4 py-1.5 rounded-full text-xs font-bold text-[#00A4B7] hover:bg-[#E0F2FE] transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5 h-[32px]">
                    <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged Order Items Table -->
            <div class="mt-3 overflow-x-auto border border-[#E2E8F0] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2 px-3">Item</th>
                    <th class="py-2 px-3">Unit</th>
                    <th class="py-2 px-3 text-right">Qty</th>
                    <th class="py-2 px-3 text-right">Unit Price</th>
                    <th class="py-2 px-3 text-right">Total Val</th>
                    <th class="py-2 px-3 text-right">Disc%</th>
                    <th class="py-2 px-3 text-right">GST%</th>
                    <th class="py-2 px-3 text-right">Tax Amt</th>
                    <th class="py-2 px-3 text-right">Invoice Amt</th>
                    <th class="py-2 px-3">Dispatch Date</th>
                    <th class="py-2 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="gs-po-staged-tbody" class="divide-y divide-[#E2E8F0] text-[#1E293B]">
                  <!-- Rendered dynamically -->
                </tbody>
              </table>
            </div>
          </div>

          <!-- Bottom Form Actions: Save Proforma Order & Reset -->
          <div class="flex items-center justify-end gap-3 pt-3 border-t border-[#F1F5F9]">
            <button type="button" id="gs-po-btn-reset-form" class="btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer">
              <span>Reset</span>
            </button>
            <button type="submit" id="gs-po-btn-save" class="btn-primary border-0 px-6 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Save Proforma Order</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Search & Filter Card (according to this create search & filter also) -->
      <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
        <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#F1F5F9]">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filter Existing POs</h3>
          </div>
          <button type="button" id="gs-po-filter-reset-btn" class="w-7 h-7 rounded-full border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#475569] flex items-center justify-center transition-colors cursor-pointer" title="Reset Filters">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          <!-- Filter: DOC NO / CODE -->
          <div>
            <label for="po-flt-doc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO / CODE</label>
            <input type="text" id="po-flt-doc" placeholder="Search Doc No or Code..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: FROM DATE -->
          <div>
            <label for="po-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <input type="date" id="po-flt-from" value="2026-10-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: TO DATE -->
          <div>
            <label for="po-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <input type="date" id="po-flt-to" value="${todayStr}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: SUPPLIER -->
          <div>
            <label for="po-flt-sup" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER</label>
            <select id="po-flt-sup" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Suppliers</option>
              <option value="Devi Safety Aids & Industrial Supplies">Devi Safety Aids</option>
              <option value="Sri Venkateswara Packaging Ltd">Sri Venkateswara</option>
              <option value="Apex Engineering & Spare Parts Ltd">Apex Engineering</option>
              <option value="Bio-Chem Scientific Instruments India">Bio-Chem Scientific</option>
              <option value="Delta Seals & Tapes Corp">Delta Seals &amp; Tapes</option>
            </select>
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button type="button" id="po-flt-search-btn" class="w-full btn-primary px-4 py-1.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search POs</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Existing POs Table Card: S No, Doc No, Code, Date, Supplier, Actions -->
      <div id="gs-po-table-container"></div>
    `;

    // 1. Live Calculation Function for Item Input
    const recalcItemInputs = () => {
      const price = parseFloat(container.querySelector('#poi-unit-price')?.value) || 0;
      const qty = parseInt(container.querySelector('#poi-qty')?.value, 10) || 0;
      const rateInput = container.querySelector('#poi-supplier-rate');
      if (rateInput && !rateInput.matches(':focus')) {
        rateInput.value = price.toFixed(2);
      }
      const actualRate = parseFloat(rateInput?.value) || price;
      const totalVal = qty * actualRate;

      const discPct = parseFloat(container.querySelector('#poi-disc-pct')?.value) || 0;
      const discAmt = totalVal * (discPct / 100);
      const taxable = Math.max(0, totalVal - discAmt);

      const gstPct = parseFloat(container.querySelector('#poi-gst-pct')?.value) || 18;
      const taxAmt = taxable * (gstPct / 100);
      const sgst = taxAmt / 2;
      const cgst = taxAmt / 2;
      const igst = 0;
      const invAmt = taxable + taxAmt;

      const totalValEl = container.querySelector('#poi-total-value');
      const discAmtEl = container.querySelector('#poi-disc-amt');
      const sgstEl = container.querySelector('#poi-sgst');
      const cgstEl = container.querySelector('#poi-cgst');
      const igstEl = container.querySelector('#poi-igst');
      const taxAmtEl = container.querySelector('#poi-tax-amt');
      const invAmtEl = container.querySelector('#poi-inv-amt');

      if (totalValEl) totalValEl.value = totalVal.toFixed(2);
      if (discAmtEl) discAmtEl.value = discAmt.toFixed(2);
      if (sgstEl) sgstEl.value = sgst.toFixed(2);
      if (cgstEl) cgstEl.value = cgst.toFixed(2);
      if (igstEl) igstEl.value = igst.toFixed(2);
      if (taxAmtEl) taxAmtEl.value = taxAmt.toFixed(2);
      if (invAmtEl) invAmtEl.value = invAmt.toFixed(2);
    };

    ['#poi-unit-price', '#poi-qty', '#poi-supplier-rate', '#poi-disc-pct', '#poi-gst-pct'].forEach(sel => {
      container.querySelector(sel)?.addEventListener('input', recalcItemInputs);
    });

    // 2. Render Staged PO Items Table
    const renderStagedPoItems = () => {
      const tbody = container.querySelector('#gs-po-staged-tbody');
      const countBadge = container.querySelector('#gs-po-items-count');
      if (!tbody) return;

      if (countBadge) countBadge.textContent = `${stagedPoItems.length} Item(s) in Order`;

      if (stagedPoItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="11" class="text-center py-4 text-xs text-[#94A3B8] italic">No items added to this proforma order yet. Fill fields above and click "+ Add Item".</td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = stagedPoItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
          <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.unit}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.quantity}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.unitPrice).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-semibold text-[#172B4D]">₹${Number(it.totalValue).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#D97706]">${it.discountPercent}%</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#0284C7]">₹${Number(it.taxAmount).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">₹${Number(it.invoiceAmt).toFixed(2)}</td>
          <td class="py-2.5 px-3 font-mono text-xs text-[#5E6C84]">${it.dispatchedDate || '-'}</td>
          <td class="py-2.5 px-3 text-center">
            <button type="button" data-remove-idx="${idx}" class="gs-po-btn-remove-item w-6 h-6 rounded-full hover:bg-[#FFEBE6] text-[#DE350B] inline-flex items-center justify-center transition-colors cursor-pointer" title="Remove Item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.gs-po-btn-remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rIdx = parseInt(btn.dataset.removeIdx, 10);
          stagedPoItems.splice(rIdx, 1);
          renderStagedPoItems();
        });
      });
    };

    renderStagedPoItems();

    // 3. Add Item to Staged List
    container.querySelector('#gs-po-btn-add-item')?.addEventListener('click', () => {
      const item = container.querySelector('#poi-item')?.value?.trim();
      const unit = container.querySelector('#poi-unit')?.value || 'Nos';
      const availQty = parseInt(container.querySelector('#poi-avail-qty')?.value, 10) || 0;
      const unitPrice = parseFloat(container.querySelector('#poi-unit-price')?.value) || 0;
      const quantity = parseInt(container.querySelector('#poi-qty')?.value, 10) || 0;
      const supplierRate = parseFloat(container.querySelector('#poi-supplier-rate')?.value) || unitPrice;
      const totalValue = parseFloat(container.querySelector('#poi-total-value')?.value) || (quantity * supplierRate);
      const discountPercent = parseFloat(container.querySelector('#poi-disc-pct')?.value) || 0;
      const discountAmt = parseFloat(container.querySelector('#poi-disc-amt')?.value) || 0;
      const gstPercent = parseFloat(container.querySelector('#poi-gst-pct')?.value) || 18;
      const sgstAmt = parseFloat(container.querySelector('#poi-sgst')?.value) || 0;
      const cgstAmt = parseFloat(container.querySelector('#poi-cgst')?.value) || 0;
      const igstAmt = parseFloat(container.querySelector('#poi-igst')?.value) || 0;
      const taxAmount = parseFloat(container.querySelector('#poi-tax-amt')?.value) || 0;
      const invoiceAmt = parseFloat(container.querySelector('#poi-inv-amt')?.value) || 0;
      const dispatchedDate = container.querySelector('#poi-dispatch-date')?.value || todayStr;

      if (!item) {
        Toast.show('Please provide Item name before adding.', 'warning');
        container.querySelector('#poi-item')?.focus();
        return;
      }
      if (quantity <= 0) {
        Toast.show('Quantity must be greater than zero.', 'warning');
        container.querySelector('#poi-qty')?.focus();
        return;
      }

      stagedPoItems.push({
        item,
        unit,
        availQty,
        unitPrice,
        quantity,
        supplierRate,
        totalValue,
        discountPercent,
        discountAmt,
        gstPercent,
        sgstAmt,
        cgstAmt,
        igstAmt,
        taxAmount,
        invoiceAmt,
        dispatchedDate
      });

      renderStagedPoItems();
      Toast.show(`Item "${item}" added to Proforma Order.`, 'info');
    });

    // 4. Toggle Form Collapse
    const toggleBtn = container.querySelector('#gs-po-toggle-form-btn');
    const formCard = container.querySelector('#gs-po-form-card');
    const toggleText = container.querySelector('#gs-po-toggle-text');
    let isFormOpen = true;

    toggleBtn?.addEventListener('click', () => {
      isFormOpen = !isFormOpen;
      if (formCard) formCard.style.display = isFormOpen ? 'block' : 'none';
      if (toggleText) toggleText.textContent = isFormOpen ? 'Collapse Form' : 'Show Add Proforma Order Form';
    });

    // 5. Reset Form Handler
    container.querySelector('#gs-po-btn-reset-form')?.addEventListener('click', () => {
      container.querySelector('#gs-add-po-form').reset();
      stagedPoItems = [];
      renderStagedPoItems();
      Toast.show('Proforma Order form reset', 'info');
    });

    // 6. Submit PO Handler (with Modal.confirm!)
    container.querySelector('#gs-add-po-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const docNo = container.querySelector('#po-form-docno')?.value?.trim();
      const code = container.querySelector('#po-form-code')?.value?.trim();
      const date = container.querySelector('#po-form-date')?.value;
      const supplier = container.querySelector('#po-form-supplier')?.value;
      const paymentTerms = container.querySelector('#po-form-terms')?.value;
      const freightType = container.querySelector('#po-form-freight')?.value;
      const subDeliveryDate = container.querySelector('#po-form-del-date')?.value;
      const narration = container.querySelector('#po-form-narration')?.value?.trim();
      const status = container.querySelector('#po-form-status')?.value;

      if (!docNo || !code) {
        Toast.show('DOC NO and CODE are required.', 'warning');
        return;
      }
      if (stagedPoItems.length === 0) {
        Toast.show('Please add at least one item to this Proforma Order.', 'warning');
        return;
      }

      const totalOrderVal = stagedPoItems.reduce((acc, it) => acc + (it.invoiceAmt || 0), 0);

      Modal.confirm({
        title: 'Confirm Save Proforma Order',
        message: `Are you sure you want to save General Store Proforma Order <strong>${docNo}</strong> (Code: ${code}) for <strong>${supplier}</strong> totalling <strong>₹${totalOrderVal.toLocaleString()}</strong>?`,
        confirmText: 'Save Proforma Order',
        onConfirm: () => {
          const newPo = {
            id: (this.state.proformaOrderList?.length || 0) + 1,
            docNo,
            code,
            date,
            supplier,
            paymentTerms,
            freightType,
            subDeliveryDate,
            narration,
            status,
            items: [...stagedPoItems]
          };

          this.state.proformaOrderList.unshift(newPo);
          renderTable(this.state.proformaOrderList);

          // Reset docNo and items
          const nextSeq = this.state.proformaOrderList.length + 1;
          container.querySelector('#po-form-docno').value = `PO-GS-2026-${String(100 + nextSeq).padStart(4, '0')}`;
          container.querySelector('#po-form-code').value = `COD-GS-${8810 + nextSeq}`;
          stagedPoItems = [];
          renderStagedPoItems();

          Toast.show(`Proforma Order ${docNo} created successfully!`, 'success');
        }
      });
    });

    // 7. Render Existing POs Table: S No, Doc No, Code, Date, Supplier, Actions
    const renderTable = (data) => {
      new DataTable({
        containerId: 'gs-po-table-container',
        tableTitle: `Existing General Store Proforma Orders (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S No
          {
            field: 'sNo',
            header: 'S No',
            sortable: true,
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>`
          },
          // 2. Doc No
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: (v, r) => `
              <span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>
            `
          },
          // 3. Code
          {
            field: 'code',
            header: 'Code',
            sortable: true,
            render: v => `<span class="font-mono font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 4. Date
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>`
          },
          // 5. Supplier
          {
            field: 'supplier',
            header: 'Supplier',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>
                <span class="text-[10px] text-[#5E6C84]">${r.paymentTerms} • ${r.freightType}</span>
              </div>
            `
          }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'View',
            title: 'View PO Details',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => {
              this.showProformaOrderDetailModal(row);
            }
          },
          {
            label: 'Edit',
            title: 'Edit Proforma Order',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditProformaOrderModal(row, () => {
                renderTable(this.state.proformaOrderList);
              });
            }
          },
          {
            label: 'Delete',
            title: 'Delete Proforma Order',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Proforma Order',
                message: `Are you sure you want to delete Proforma Order <strong>${row.docNo}</strong> (${row.supplier})? This action cannot be undone.`,
                confirmText: 'Delete Order',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.proformaOrderList.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.proformaOrderList.splice(idx, 1);
                    renderTable(this.state.proformaOrderList);
                    Toast.show(`Proforma Order ${row.docNo} deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.proformaOrderList);

    // 8. Search & Filter Handlers
    container.querySelector('#po-flt-search-btn')?.addEventListener('click', () => {
      const docVal = container.querySelector('#po-flt-doc')?.value?.trim().toLowerCase();
      const fromVal = container.querySelector('#po-flt-from')?.value;
      const toVal = container.querySelector('#po-flt-to')?.value;
      const supVal = container.querySelector('#po-flt-sup')?.value;

      const filtered = this.state.proformaOrderList.filter(it => {
        if (docVal) {
          const matchDoc = it.docNo.toLowerCase().includes(docVal);
          const matchCode = it.code?.toLowerCase().includes(docVal);
          if (!matchDoc && !matchCode) return false;
        }
        if (fromVal && it.date < fromVal) return false;
        if (toVal && it.date > toVal) return false;
        if (supVal && supVal !== 'ALL' && it.supplier !== supVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching proforma order(s)`, 'info');
    });

    container.querySelector('#gs-po-filter-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#po-flt-doc').value = '';
      container.querySelector('#po-flt-from').value = '2026-10-01';
      container.querySelector('#po-flt-to').value = todayStr;
      container.querySelector('#po-flt-sup').value = 'ALL';
      renderTable(this.state.proformaOrderList);
      Toast.show('PO filters reset to default', 'info');
    });
  },

  // View PO Detail Modal
  showProformaOrderDetailModal(row) {
    const totalVal = (row.items || []).reduce((acc, it) => acc + (it.invoiceAmt || 0), 0);

    Modal.open({
      title: `Proforma Order Details: ${row.docNo} (${row.code})`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAFC] border border-[#E2E8F0] p-3 rounded-xl">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">DOC NO</span>
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${row.docNo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">CODE</span>
              <span class="font-mono font-semibold text-xs text-[#172B4D]">${row.code}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">DATE</span>
              <span class="font-mono text-xs text-[#172B4D]">${row.date}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STATUS</span>
              <span class="font-bold text-xs text-[#00875A]">${row.status}</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white border border-[#E2E8F0] p-3 rounded-xl">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SUPPLIER</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.supplier}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PAYMENT TERMS</span>
              <span class="text-xs text-[#5E6C84]">${row.paymentTerms}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">FREIGHT TYPE</span>
              <span class="text-xs text-[#5E6C84]">${row.freightType}</span>
            </div>
          </div>

          ${row.narration ? `
            <div class="p-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-0.5">NARRATION</span>
              <p class="text-xs text-[#172B4D]">${row.narration}</p>
            </div>
          ` : ''}

          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Item Details (${row.items?.length || 0})</h4>
              <span class="font-mono font-bold text-xs text-[#00875A]">Total PO Value: ₹${Number(totalVal).toLocaleString()}</span>
            </div>
            <div class="overflow-x-auto border border-[#E2E8F0] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-bold text-[11px] uppercase">
                  <tr>
                    <th class="py-2 px-3">Item</th>
                    <th class="py-2 px-3">Unit</th>
                    <th class="py-2 px-3 text-right">Qty</th>
                    <th class="py-2 px-3 text-right">Unit Price</th>
                    <th class="py-2 px-3 text-right">Disc%</th>
                    <th class="py-2 px-3 text-right">GST%</th>
                    <th class="py-2 px-3 text-right">Tax Amt</th>
                    <th class="py-2 px-3 text-right">Invoice Amt</th>
                    <th class="py-2 px-3">Dispatched</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#E2E8F0] text-[#1E293B]">
                  ${(row.items || []).map(it => `
                    <tr class="hover:bg-[#F8FAFC]">
                      <td class="py-2 px-3 font-semibold text-[#172B4D]">${it.item}</td>
                      <td class="py-2 px-3 font-mono text-[#5E6C84]">${it.unit}</td>
                      <td class="py-2 px-3 text-right font-mono font-bold text-[#172B4D]">${it.quantity}</td>
                      <td class="py-2 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.unitPrice).toFixed(2)}</td>
                      <td class="py-2 px-3 text-right font-mono text-[#D97706]">${it.discountPercent}%</td>
                      <td class="py-2 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
                      <td class="py-2 px-3 text-right font-mono text-[#0284C7]">₹${Number(it.taxAmount).toFixed(2)}</td>
                      <td class="py-2 px-3 text-right font-mono font-bold text-[#00875A]">₹${Number(it.invoiceAmt).toFixed(2)}</td>
                      <td class="py-2 px-3 font-mono text-xs text-[#5E6C84]">${it.dispatchedDate || '-'}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Print Order',
          type: 'primary',
          onClick: () => {
            Toast.show(`Printing Proforma Order ${row.docNo}...`, 'success');
          }
        }
      ]
    });
  },

  // Edit PO Modal
  showEditProformaOrderModal(row, onSuccess) {
    Modal.open({
      title: `Edit Proforma Order: ${row.docNo}`,
      size: 'lg',
      content: `
        <form id="form-edit-po" class="space-y-4 text-xs text-[#172B4D]">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
              <input type="text" name="docNo" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE</label>
              <input type="text" name="code" value="${row.code}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-semibold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-red-500">*</span></label>
              <input type="date" name="date" value="${row.date}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER FIRM NAME <span class="text-red-500">*</span></label>
              <input type="text" name="supplier" value="${row.supplier}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
              <select name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="Approved" ${row.status === 'Approved' ? 'selected' : ''}>Approved</option>
                <option value="Issued to Vendor" ${row.status === 'Issued to Vendor' ? 'selected' : ''}>Issued to Vendor</option>
                <option value="Pending Delivery" ${row.status === 'Pending Delivery' ? 'selected' : ''}>Pending Delivery</option>
                <option value="Completed" ${row.status === 'Completed' ? 'selected' : ''}>Completed</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
            <textarea name="narration" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7]">${row.narration || ''}</textarea>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Update Order',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-edit-po');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);

            Modal.confirm({
              title: 'Confirm Update Proforma Order',
              message: `Are you sure you want to update Proforma Order <strong>${row.docNo}</strong>?`,
              confirmText: 'Update Order',
              onConfirm: () => {
                row.code = fd.get('code');
                row.date = fd.get('date');
                row.supplier = fd.get('supplier');
                row.status = fd.get('status');
                row.narration = fd.get('narration');

                modal.close();
                Toast.show(`Proforma Order ${row.docNo} updated successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
  },

  renderGeneralStoreProformaList(container) {
    container.innerHTML = `
      <div class="flex items-center justify-between pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Proforma List (GS)</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Supplier proforma order reports, commitment valuations and order deliveries</p>
        </div>
      </div>
      <div class="bg-white border border-[#DFE1E6] rounded-xl p-6 shadow-xs text-center text-xs text-[#5E6C84]">
        <svg class="w-10 h-10 text-[#00A4B7] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        <p class="font-bold text-[#172B4D] text-sm">General Store Proforma Ledger</p>
        <p class="mt-1 text-[#64748B]">Live reports of all issued proforma orders and vendor confirmations.</p>
      </div>
    `;
  },

  renderGeneralStoreGRN(container) {
    container.innerHTML = `
      <div class="flex items-center justify-between pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Goods Receipt Note (GS)</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Inward Goods Receipt Note (GRN) verification, store binning, and delivery intake</p>
        </div>
      </div>
      <div class="bg-white border border-[#DFE1E6] rounded-xl p-6 shadow-xs text-center text-xs text-[#5E6C84]">
        <svg class="w-10 h-10 text-[#00A4B7] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
        <p class="font-bold text-[#172B4D] text-sm">Inward GRN Ingestion Form</p>
        <p class="mt-1 text-[#64748B]">Inward receipts update available stock quantities in the General Store.</p>
      </div>
    `;
  },

  renderGeneralStoreGRNList(container) {
    container.innerHTML = `
      <div class="flex items-center justify-between pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Goods Receipt Note List (GS)</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Historical goods receipt notes, physical gate entries and challan reconciliation</p>
        </div>
      </div>
      <div class="bg-white border border-[#DFE1E6] rounded-xl p-6 shadow-xs text-center text-xs text-[#5E6C84]">
        <svg class="w-10 h-10 text-[#00A4B7] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        <p class="font-bold text-[#172B4D] text-sm">GRN Archive &amp; Audit Logs</p>
      </div>
    `;
  },

  renderGeneralStoreMaterialIssue(container) {
    container.innerHTML = `
      <div class="flex items-center justify-between pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Material Issue (GS)</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Issue store materials against approved indents and departmental consumption slips</p>
        </div>
      </div>
      <div class="bg-white border border-[#DFE1E6] rounded-xl p-6 shadow-xs text-center text-xs text-[#5E6C84]">
        <svg class="w-10 h-10 text-[#00A4B7] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
        <p class="font-bold text-[#172B4D] text-sm">Store Material Issue Ledger</p>
        <p class="mt-1 text-[#64748B]">Issue store items directly to processing units with real-time balance deductions.</p>
      </div>
    `;
  },

  // =========================================================================
  // 2. PACKING MATERIAL: PM PROFORMA INVOICE
  // =========================================================================
  renderPackingMaterialProforma(container) {
    const fullList = [...this.state.pmProformaList];
    const totalValue = fullList.reduce((acc, it) => acc + (it.totalAmount || 0), 0);
    const activeCount = fullList.filter(it => it.status === 'Approved' || it.status === 'In Transit').length;

    container.innerHTML = `
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Packing Material — Proforma Invoices</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Manage master cartons, poly liners, inner cartons &amp; packaging vendor proformas</p>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="btn-create-pm-pi" class="btn-primary border-0 px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>New PM Proforma</span>
          </button>
        </div>
      </div>

      <!-- KPI Summary Cards -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total PM PIs</span>
          <div class="text-xl font-extrabold text-[#172B4D] mt-1 font-mono">${fullList.length}</div>
          <span class="text-[10px] text-[#0284C7] font-semibold">Packaging Vendor Orders</span>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Active Proformas</span>
          <div class="text-xl font-extrabold text-[#00A4B7] mt-1 font-mono">${activeCount}</div>
          <span class="text-[10px] text-[#00A4B7] font-semibold">In Transit / Processing</span>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total Valuation</span>
          <div class="text-xl font-extrabold text-[#00875A] mt-1 font-mono">₹${(totalValue / 100000).toFixed(2)} L</div>
          <span class="text-[10px] text-[#00875A] font-semibold">Committed Proforma Value</span>
        </div>
      </div>

      <div id="pm-proforma-table-container"></div>
    `;

    const renderTable = (data) => {
      new DataTable({
        containerId: 'pm-proforma-table-container',
        tableTitle: `PM Proforma Invoices (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          { field: 'sNo', header: 'S.No', render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>` },
          { field: 'piNumber', header: 'PI Number', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] whitespace-nowrap">${v}</span>` },
          { field: 'piDate', header: 'PI Date', sortable: true, render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>` },
          { field: 'supplierName', header: 'Supplier Name', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'materialCategory', header: 'Category', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E0F2FE] text-[#0284C7] whitespace-nowrap">${v}</span>` },
          { field: 'itemDescription', header: 'Description', render: v => `<span class="font-medium text-xs text-[#172B4D]">${v}</span>` },
          { field: 'quantity', header: 'Order Qty', sortable: true, render: (v, r) => `<span class="font-mono font-bold text-xs text-[#172B4D] whitespace-nowrap">${Number(v).toLocaleString()} ${r.unit}</span>` },
          { field: 'totalAmount', header: 'Total Value (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A] whitespace-nowrap">₹${Number(v).toLocaleString()}</span>` }
        ],
        actions: [
          {
            label: 'Receive Inward (GRN)',
            icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Confirm Packaging Material Inward',
                message: `Record inward delivery receipt for PI <strong>${row.piNumber}</strong> (${row.quantity.toLocaleString()} ${row.unit} from ${row.supplierName})?`,
                confirmText: 'Confirm Inward',
                onConfirm: () => {
                  row.deliveryStatus = 'Delivered & Verified';
                  row.status = 'Completed';
                  renderTable(fullList);
                  Toast.show(`Inward GRN completed for ${row.piNumber}!`, 'success');
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(fullList);
  },

  // =========================================================================
  // 3. INVENTORY: PROFORMA REGISTER
  // =========================================================================
  renderInventoryProformaRegister(container) {
    const fullList = [...this.state.proformaRegisterList];
    const totalValuation = fullList.reduce((acc, it) => acc + (it.totalInvoiced || 0), 0);

    container.innerHTML = `
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Inventory — Proforma Register</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Central register of proforma records, stock allocations, and valuation ledger</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total Register Entries</span>
          <div class="text-xl font-extrabold text-[#172B4D] mt-1 font-mono">${fullList.length}</div>
          <span class="text-[10px] text-[#0284C7] font-semibold">Ledger Records</span>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total Proforma Value</span>
          <div class="text-xl font-extrabold text-[#00875A] mt-1 font-mono">₹${(totalValuation / 100000).toFixed(2)} L</div>
          <span class="text-[10px] text-[#00875A] font-semibold">Audited Book Stock</span>
        </div>
      </div>

      <div id="proforma-register-table-container"></div>
    `;

    new DataTable({
      containerId: 'proforma-register-table-container',
      tableTitle: `Proforma Register Ledger (${fullList.length})`,
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { field: 'sNo', header: 'S.No', render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>` },
        { field: 'regCode', header: 'Register Code', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] whitespace-nowrap">${v}</span>` },
        { field: 'refDoc', header: 'Ref Doc / PI', sortable: true, render: v => `<span class="font-mono font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>` },
        { field: 'regDate', header: 'Date', sortable: true, render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>` },
        { field: 'category', header: 'Category', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6] whitespace-nowrap">${v}</span>` },
        { field: 'itemDescription', header: 'Description', render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'storeLocation', header: 'Store Location', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>` },
        { field: 'quantity', header: 'Quantity', sortable: true, render: (v, r) => `<span class="font-mono font-bold text-xs text-[#172B4D] whitespace-nowrap">${Number(v).toLocaleString()} ${r.unit}</span>` },
        { field: 'totalInvoiced', header: 'Invoiced (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A] whitespace-nowrap">₹${Number(v).toLocaleString()}</span>` }
      ],
      data: fullList
    });
  }
};
