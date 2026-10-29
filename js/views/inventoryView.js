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

    // 1c. General Store Goods Receipt Notes (GRN)
    grnList: [
      {
        id: 1,
        docNo: 'GRN-GS-2026-0041',
        code: 'COD-GRN-7721',
        date: '2026-10-28',
        supplier: 'Devi Safety Aids & Industrial Supplies',
        invoiceNumber: 'INV-DSA-2026-881',
        invoiceDate: '2026-10-27',
        poNo: 'PO-GS-2026-0101',
        freightType: 'Paid by Supplier',
        narration: 'Inward verification of Nitrile food-grade gloves for processing lines',
        status: 'Inward Received',
        items: [
          {
            item: 'Nitrile Food-Grade Gloves (Blue, L)',
            uom: 'Box',
            availableQty: 15,
            poQty: 150,
            receivedQty: 150,
            deviationQty: 0,
            location: 'Main Store Rack A-2',
            batch: 'BAT-DSA-992',
            itemPrice: 280.00,
            baseValue: 42000.00,
            deviationAmount: 0.00,
            gstPercent: 18,
            gstTaxAmount: 7560.00
          }
        ]
      },
      {
        id: 2,
        docNo: 'GRN-GS-2026-0042',
        code: 'COD-GRN-7722',
        date: '2026-10-27',
        supplier: 'Apex Engineering & Spare Parts Ltd',
        invoiceNumber: 'INV-APX-4412',
        invoiceDate: '2026-10-26',
        poNo: 'PO-GS-2026-0102',
        freightType: 'To Pay (Consignee)',
        narration: 'Plate freezer silicone gaskets received at Engineering maintenance bay',
        status: 'QC Verified',
        items: [
          {
            item: 'Plate Freezer Silicone Gaskets (Model PF-40)',
            uom: 'Sets',
            availableQty: 2,
            poQty: 12,
            receivedQty: 10,
            deviationQty: -2,
            location: 'Engineering Bay C',
            batch: 'BAT-ENG-441',
            itemPrice: 3200.00,
            baseValue: 32000.00,
            deviationAmount: -6400.00,
            gstPercent: 18,
            gstTaxAmount: 5760.00
          }
        ]
      },
      {
        id: 3,
        docNo: 'GRN-GS-2026-0043',
        code: 'COD-GRN-7723',
        date: '2026-10-26',
        supplier: 'Sri Venkateswara Packaging Ltd',
        invoiceNumber: 'INV-SVP-1029',
        invoiceDate: '2026-10-25',
        poNo: 'PO-GS-2026-0104',
        freightType: 'Paid by Supplier',
        narration: 'Thermal barcode ribbons for coldstore warehouse batch printing',
        status: 'Stored',
        items: [
          {
            item: 'Thermal Transfer Barcode Ribbon (110mm x 300m)',
            uom: 'Rolls',
            availableQty: 4,
            poQty: 40,
            receivedQty: 40,
            deviationQty: 0,
            location: 'Coldstore Hub B',
            batch: 'BAT-RIB-802',
            itemPrice: 420.00,
            baseValue: 16800.00,
            deviationAmount: 0.00,
            gstPercent: 18,
            gstTaxAmount: 3024.00
          }
        ]
      },
      {
        id: 4,
        docNo: 'GRN-GS-2026-0044',
        code: 'COD-GRN-7724',
        date: '2026-10-25',
        supplier: 'Bio-Chem Scientific Instruments India',
        invoiceNumber: 'INV-BCS-0941',
        invoiceDate: '2026-10-24',
        poNo: 'PO-GS-2026-0103',
        freightType: 'Paid by Supplier',
        narration: 'QC lab chlorine test strips and analytical buffer kits',
        status: 'Inward Received',
        items: [
          {
            item: 'Chlorine Residual Test Strips (0-500 PPM)',
            uom: 'Kits',
            availableQty: 10,
            poQty: 25,
            receivedQty: 25,
            deviationQty: 0,
            location: 'QC Lab Storage',
            batch: 'BAT-QC-112',
            itemPrice: 750.00,
            baseValue: 18750.00,
            deviationAmount: 0.00,
            gstPercent: 12,
            gstTaxAmount: 2250.00
          }
        ]
      }
    ],

    // 1d. General Store Material Issues
    materialIssueList: [
      {
        id: 1,
        docNo: 'ISS-GS-2026-0031',
        date: '2026-10-28',
        location: 'Main Store Rack A-2',
        department: 'Processing Unit-5',
        narration: 'Store issue for Shift A processing line consumables and daily PPE',
        items: [
          {
            item: 'Nitrile Food-Grade Gloves (Blue, L)',
            uom: 'Box',
            availableQty: 15,
            itemPrice: 280.00,
            batch: 'BAT-2026-09A',
            quantity: 50,
            baseValue: 14000.00,
            gstPercent: 18,
            invoiceAmount: 16520.00,
            purpose: 'Shrimp peeling table crew hygiene',
            attachment: '',
            remarks: 'Shift Incharge indent'
          }
        ]
      },
      {
        id: 2,
        docNo: 'ISS-GS-2026-0032',
        date: '2026-10-27',
        location: 'Coldstore Hub B',
        department: 'Coldstore Hub',
        narration: 'Thermal printer barcode ribbons issued for plate freezer lot tagging',
        items: [
          {
            item: 'Thermal Transfer Barcode Ribbon (110mm x 300m)',
            uom: 'Rolls',
            availableQty: 4,
            itemPrice: 420.00,
            batch: 'BAT-RIB-802',
            quantity: 10,
            baseValue: 4200.00,
            gstPercent: 18,
            invoiceAmount: 4956.00,
            purpose: 'Freezer export pallet labeling',
            attachment: '',
            remarks: 'Approved by CS Manager'
          }
        ]
      },
      {
        id: 3,
        docNo: 'ISS-GS-2026-0033',
        date: '2026-10-26',
        location: 'Engineering Bay C',
        department: 'Engineering & Maintenance',
        narration: 'Replacement valve packing kits for ammonia refrigeration maintenance',
        items: [
          {
            item: 'Danfoss Ammonia Valve Packing Kits',
            uom: 'Sets',
            availableQty: 2,
            itemPrice: 1850.00,
            batch: 'BAT-ENG-441',
            quantity: 2,
            baseValue: 3700.00,
            gstPercent: 18,
            invoiceAmount: 4366.00,
            purpose: 'Refrigeration unit overhaul',
            attachment: '',
            remarks: 'Routine preventive schedule'
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
    if (cleanHash.includes('proforma-order')) {
      this.renderGeneralStoreProformaOrder(subContainer);
    } else if (cleanHash.includes('goods-receipt-note')) {
      this.renderGeneralStoreGRN(subContainer);
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
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="gs-btn-toggle-form" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span id="gs-form-toggle-text">Indent Page</span>
          </button>
        </div>
      </div>

      <!-- Search & Filter Card (calibrated as per the form data) -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="gs-search-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="gs-filter-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="gs-filter-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="gs-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- Filter: DOC NO -->
          <div>
            <label for="gs-filter-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
            <input type="text" id="gs-filter-docno" placeholder="Search by Doc No..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: DATE -->
          <div>
            <label for="gs-filter-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
            <input type="date" id="gs-filter-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: DEPARTMENT -->
          <div>
            <label for="gs-filter-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT</label>
            <select id="gs-filter-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
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
            <button type="button" id="gs-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Data Table Card (S No, Doc No, Date, Actions with only edit, delete icon) -->
      <div id="gs-indents-table-container"></div>
    `;

    // 1. Direct Click Handler for "Indent Page" Button -> Opens Add Indent Modal Popup
    const toggleBtn = container.querySelector('#gs-btn-toggle-form');
    toggleBtn?.addEventListener('click', () => {
      this.showAddIndentModal(() => {
        renderTable(this.state.indentPageRecords);
      });
    });

    // 2. Data Table Rendering: S No, Doc No, Date, Actions (only Edit & Delete with Modal.confirm)
    let currentData = [...this.state.indentPageRecords];

    const renderTable = (data) => {
      currentData = data;
      new DataTable({
        containerId: 'gs-indents-table-container',
        tableTitle: `Indent Records (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showIndentDetailsModal(row);
        },
        columns: [
          // 1. S No (Clickable to show whole details in popup)
          {
            field: 'sNo',
            header: 'S No',
            sortable: true,
            render: (v, r, idx) => `
              <span class="text-[#00A4B7] font-semibold hover:underline cursor-pointer select-none" title="Click to view full indent details">${idx + 1}</span>
            `
          },
          // 2. Doc No (Clickable to show whole details in popup)
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col cursor-pointer" title="Click to view full indent details">
                <span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline whitespace-nowrap">${v}</span>
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
  // 1b. ADD INDENT MODAL POPUP
  showAddIndentModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextDocNum = (this.state.indentPageRecords?.length || 0) + 1;
    const defaultDocNo = `DOC-GS-2026-${String(nextDocNum).padStart(4, '0')}`;

    let modalStagedItems = [
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

    Modal.open({
      title: 'Add General Store Indent',
      size: '3xl',
      confirmActions: false,
      content: `
        <form id="modal-add-indent-form" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: Header Information -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Indent Header Information</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              <!-- 1. DOC NO -->
              <div>
                <label for="modal-indent-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="modal-indent-docno" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 2. DATE -->
              <div>
                <label for="modal-indent-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="modal-indent-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 3. DEPARTMENT -->
              <div>
                <label for="modal-indent-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-[#DE350B]">*</span></label>
                <select id="modal-indent-dept" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
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
                <label for="modal-indent-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="modal-indent-narration" placeholder="Enter indent purpose / narration..." value="Monthly store requisition for seafood processing shift consumables" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Item Details Section -->
          <div class="pt-2 border-t border-[#DFE1E6]">
            <div class="flex items-center justify-between pb-2 mb-3">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Item Details</h4>
              </div>
              <span id="modal-staged-count" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">${modalStagedItems.length} Item(s) Added</span>
            </div>

            <!-- Item Input Grid Card -->
            <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 space-y-3 shadow-2xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- 1. Item -->
                <div>
                  <label for="modal-item-name" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="modal-item-name" placeholder="Item name, specification..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 2. UoM -->
                <div>
                  <label for="modal-item-uom" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UoM <span class="text-[#DE350B]">*</span></label>
                  <select id="modal-item-uom" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
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
                  <label for="modal-item-avail" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAILABLE QTY</label>
                  <input type="number" id="modal-item-avail" value="10" min="0" step="1" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" readonly />
                </div>

                <!-- 4. Requested Qty -->
                <div>
                  <label for="modal-item-req" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REQUESTED QTY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="modal-item-req" value="50" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- 5. Purpose -->
                <div>
                  <label for="modal-item-purpose" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PURPOSE</label>
                  <input type="text" id="modal-item-purpose" placeholder="Operational purpose..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 6. Attachment -->
                <div>
                  <label for="modal-item-attach" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ATTACHMENT</label>
                  <input type="file" id="modal-item-attach" class="w-full text-[11px] px-2 py-1 bg-white border border-[#DFE1E6] rounded text-[#5E6C84] focus:outline-none focus:border-[#00A4B7] file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-[#E0F2FE] file:text-[#0284C7] cursor-pointer" />
                </div>

                <!-- 7. Remarks -->
                <div>
                  <label for="modal-item-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
                  <input type="text" id="modal-item-remarks" placeholder="Optional notes / remarks..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 8. Action (Add Item Button - placed right after Remarks with max width) -->
                <div>
                  <label class="block text-[11px] font-bold text-transparent uppercase tracking-wider mb-1 select-none">&nbsp;</label>
                  <button type="button" id="modal-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged Items Preview Table -->
            <div class="mt-3 overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3 text-right">Available Qty</th>
                    <th class="py-2.5 px-3 text-right">Requested Qty</th>
                    <th class="py-2.5 px-3">Purpose</th>
                    <th class="py-2.5 px-3">Attachment</th>
                    <th class="py-2.5 px-3">Remarks</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="modal-staged-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Indent',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const docNo = modalRoot.querySelector('#modal-indent-docno')?.value?.trim();
            const date = modalRoot.querySelector('#modal-indent-date')?.value;
            const department = modalRoot.querySelector('#modal-indent-dept')?.value;
            const narration = modalRoot.querySelector('#modal-indent-narration')?.value?.trim();

            if (!docNo) {
              Toast.show('Please enter a valid DOC NO.', 'warning');
              return;
            }
            if (modalStagedItems.length === 0) {
              Toast.show('Please add at least one item before saving.', 'warning');
              return;
            }

            Modal.confirm({
              title: 'Confirm Save Indent',
              message: `Are you sure you want to save General Store Indent <strong>${docNo}</strong> for <strong>${department}</strong> with <strong>${modalStagedItems.length} item(s)</strong>?`,
              confirmText: 'Save Indent',
              onConfirm: () => {
                const newRecord = {
                  id: Date.now(),
                  docNo,
                  date,
                  department,
                  status: 'Approved',
                  narration,
                  items: [...modalStagedItems]
                };

                this.state.indentPageRecords.unshift(newRecord);
                Modal.close();
                Toast.show(`Indent ${docNo} successfully saved!`, 'success');

                if (typeof onSuccess === 'function') {
                  onSuccess();
                }
              }
            });
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    const renderModalStagedItems = () => {
      const tbody = modalRoot.querySelector('#modal-staged-tbody');
      const countEl = modalRoot.querySelector('#modal-staged-count');
      if (!tbody) return;

      if (countEl) countEl.textContent = `${modalStagedItems.length} Item(s) Added`;

      if (modalStagedItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="8" class="text-center py-4 text-xs text-[#94A3B8] italic">No items staged yet. Fill fields above and click "+ Add Item".</td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = modalStagedItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2 px-3 font-semibold text-[#172B4D]">${it.item}</td>
          <td class="py-2 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
          <td class="py-2 px-3 text-right font-mono font-bold text-[#00875A]">${it.availableQty}</td>
          <td class="py-2 px-3 text-right font-mono font-bold text-[#172B4D]">${it.requestedQty}</td>
          <td class="py-2 px-3 text-[#5E6C84]">${it.purpose || '-'}</td>
          <td class="py-2 px-3">
            ${it.attachment ? `
              <span class="inline-flex items-center gap-1 text-[11px] font-mono text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
                ${it.attachment}
              </span>
            ` : '<span class="text-[#94A3B8] italic">None</span>'}
          </td>
          <td class="py-2 px-3 text-[#5E6C84]">${it.remarks || '-'}</td>
          <td class="py-2 px-3 text-center">
            <button type="button" data-remove-idx="${idx}" class="modal-remove-item-btn w-6 h-6 rounded-full hover:bg-[#FFEBE6] text-[#DE350B] inline-flex items-center justify-center transition-colors cursor-pointer" title="Remove Item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.modal-remove-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rIdx = parseInt(btn.dataset.removeIdx, 10);
          modalStagedItems.splice(rIdx, 1);
          renderModalStagedItems();
        });
      });
    };

    renderModalStagedItems();

    modalRoot.querySelector('#modal-btn-add-item')?.addEventListener('click', () => {
      const itemNameInput = modalRoot.querySelector('#modal-item-name');
      const uomInput = modalRoot.querySelector('#modal-item-uom');
      const availInput = modalRoot.querySelector('#modal-item-avail');
      const reqInput = modalRoot.querySelector('#modal-item-req');
      const purposeInput = modalRoot.querySelector('#modal-item-purpose');
      const attachInput = modalRoot.querySelector('#modal-item-attach');
      const remarksInput = modalRoot.querySelector('#modal-item-remarks');

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

      modalStagedItems.push({
        item: itemName,
        uom: uomInput?.value || 'Nos',
        availableQty: parseInt(availInput?.value, 10) || 0,
        requestedQty: reqQty,
        purpose: purposeInput?.value?.trim() || '',
        attachment: fileAttached,
        remarks: remarksInput?.value?.trim() || ''
      });

      itemNameInput.value = '';
      reqInput.value = '50';
      if (purposeInput) purposeInput.value = '';
      if (remarksInput) remarksInput.value = '';
      if (attachInput) attachInput.value = '';

      renderModalStagedItems();
      Toast.show(`Item "${itemName}" added to indent.`, 'info');
    });
  },

  // 1c. INDENT WHOLE DETAILS MODAL POPUP (Triggered on click S No / row)
  showIndentDetailsModal(record) {
    if (!record) return;

    const items = record.items || [];
    const statusCls = record.status === 'Approved'
      ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]'
      : record.status === 'In Procurement'
      ? 'bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]'
      : record.status === 'Pending'
      ? 'bg-[#FFF0B3] text-[#172B4D] border border-[#FFE380]'
      : 'bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6]';

    const itemsRows = items.length > 0 ? items.map((it, idx) => `
      <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#DFE1E6]">
        <td class="py-2.5 px-3 text-[#5E6C84] font-semibold text-center">${idx + 1}</td>
        <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
        <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.uom || 'Nos'}</td>
        <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">${it.availableQty ?? 0}</td>
        <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.requestedQty ?? 0}</td>
        <td class="py-2.5 px-3 text-[#5E6C84]">${it.purpose || '-'}</td>
        <td class="py-2.5 px-3">
          ${it.attachment ? `
            <span class="inline-flex items-center gap-1 text-[11px] font-mono text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
              ${it.attachment}
            </span>
          ` : '<span class="text-[#94A3B8] italic">None</span>'}
        </td>
        <td class="py-2.5 px-3 text-[#5E6C84]">${it.remarks || '-'}</td>
      </tr>
    `).join('') : `
      <tr>
        <td colspan="8" class="text-center py-4 text-xs text-[#94A3B8] italic">No items listed in this indent requisition.</td>
      </tr>
    `;

    Modal.open({
      title: `Indent Requisition Details - ${record.docNo}`,
      size: '2xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Overview Header Card -->
          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-4">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DOC NO</span>
                <span class="font-mono font-bold text-sm text-[#00A4B7]">${record.docNo}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DATE</span>
                <span class="font-semibold text-xs text-[#172B4D] flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  ${record.date}
                </span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DEPARTMENT</span>
                <span class="font-semibold text-xs text-[#172B4D] flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  ${record.department}
                </span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">STATUS</span>
                <span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusCls}">
                  ${record.status || 'Approved'}
                </span>
              </div>
            </div>

            ${record.narration ? `
              <div class="mt-3 pt-3 border-t border-[#E2E8F0]">
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">NARRATION / PURPOSE</span>
                <p class="text-xs text-[#172B4D] font-medium leading-relaxed">${record.narration}</p>
              </div>
            ` : ''}
          </div>

          <!-- Requisitioned Items Table Card -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl overflow-hidden shadow-2xs">
            <div class="px-4 py-2.5 bg-[#FAFBFC] border-b border-[#DFE1E6] flex items-center justify-between">
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Requisitioned Items (${items.length})
              </h3>
              <span class="text-[11px] font-semibold text-[#5E6C84]">Total Requested: <strong>${items.reduce((acc, it) => acc + (it.requestedQty || 0), 0)} units</strong></span>
            </div>

            <div class="overflow-x-auto w-full">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3 text-center w-12">S.No</th>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3 text-right">Available Qty</th>
                    <th class="py-2.5 px-3 text-right">Requested Qty</th>
                    <th class="py-2.5 px-3">Purpose</th>
                    <th class="py-2.5 px-3">Attachment</th>
                    <th class="py-2.5 px-3">Remarks</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                  ${itemsRows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: () => Modal.close()
        },
        {
          label: 'Edit Indent',
          type: 'primary',
          class: 'btn-primary border-0 px-5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            Modal.close();
            this.showEditIndentModal(record, () => {
              const currentTableContainer = document.getElementById('gs-indent-table-container');
              if (currentTableContainer) {
                this.renderGeneralStoreIndentPage(currentTableContainer.parentElement);
              }
            });
          }
        }
      ]
    });
  },

  showEditIndentModal(row, onSuccess) {
    Modal.open({
      title: `Edit Indent: ${row.docNo}`,
      size: 'lg',
      confirmActions: false,
      content: `
        <form id="form-edit-indent" class="space-y-4 text-xs text-[#172B4D]">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
              <input type="text" name="docNo" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] cursor-not-allowed">
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
  // Additional General Store Tabs (Proforma Order, Proforma List, GRN, GRN List, Material Issue)
  // =========================================================================
  renderGeneralStoreProformaOrder(container) {
    const todayStr = new Date().toISOString().slice(0, 10);

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Proforma Order (GS)</h1>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="gs-po-toggle-form-btn" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span id="gs-po-toggle-text">Add Proforma Order</span>
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
            <button type="button" id="gs-po-filter-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="gs-po-filter-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="gs-po-filter-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="gs-po-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- Filter: DOC NO / CODE -->
          <div>
            <label for="po-flt-doc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO / CODE</label>
            <input type="text" id="po-flt-doc" placeholder="Search Doc No or Code..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: FROM DATE -->
          <div>
            <label for="po-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <input type="date" id="po-flt-from" value="2026-10-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: TO DATE -->
          <div>
            <label for="po-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <input type="date" id="po-flt-to" value="${todayStr}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: SUPPLIER -->
          <div>
            <label for="po-flt-sup" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER</label>
            <select id="po-flt-sup" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
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
            <button type="button" id="po-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Existing POs Table Card: S No, Doc No, Code, Date, Supplier, Actions -->
      <div id="gs-po-table-container"></div>
    `;

    // Direct Click Handler for "Add Proforma Order" Button -> Opens Add PO Modal Popup
    container.querySelector('#gs-po-toggle-form-btn')?.addEventListener('click', () => {
      this.showAddProformaOrderModal(() => {
        renderTable(this.state.proformaOrderList);
      });
    });

    // Render Existing POs Table: S No, Doc No, Code, Date, Supplier, Actions
    const renderTable = (data) => {
      new DataTable({
        containerId: 'gs-po-table-container',
        tableTitle: `Existing General Store Proforma Orders (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showProformaOrderDetailModal(row);
        },
        columns: [
          // 1. S No (Clickable to show whole details in popup)
          {
            field: 'sNo',
            header: 'S No',
            sortable: true,
            render: (v, r, idx) => `
              <span class="text-[#00A4B7] font-semibold hover:underline cursor-pointer select-none" title="Click to view full PO details">${idx + 1}</span>
            `
          },
          // 2. Doc No (Clickable to show whole details in popup)
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: (v, r) => `
              <span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap" title="Click to view full PO details">${v}</span>
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

    // Search & Filter Handlers
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

  // 3b. ADD PROFORMA ORDER MODAL POPUP
  showAddProformaOrderModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextPoNum = (this.state.proformaOrderList?.length || 0) + 1;
    const defaultDocNo = `PO-GS-2026-${String(100 + nextPoNum).padStart(4, '0')}`;
    const defaultCode = `COD-GS-${8810 + nextPoNum}`;

    let modalStagedPoItems = [
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

    Modal.open({
      title: 'Add General Store Proforma Order',
      size: 'full',
      confirmActions: false,
      content: `
        <form id="modal-add-po-form" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: Header Information -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Order Header Information</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              <!-- 1. DOC NO -->
              <div>
                <label for="modal-po-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="modal-po-docno" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 2. CODE -->
              <div>
                <label for="modal-po-code" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="modal-po-code" value="${defaultCode}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 3. DATE -->
              <div>
                <label for="modal-po-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="modal-po-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 4. SUPPLIER FIRM NAME -->
              <div>
                <label for="modal-po-supplier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER FIRM NAME <span class="text-[#DE350B]">*</span></label>
                <select id="modal-po-supplier" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Devi Safety Aids & Industrial Supplies" selected>Devi Safety Aids &amp; Industrial Supplies</option>
                  <option value="Sri Venkateswara Packaging Ltd">Sri Venkateswara Packaging Ltd</option>
                  <option value="Apex Engineering & Spare Parts Ltd">Apex Engineering &amp; Spare Parts Ltd</option>
                  <option value="Bio-Chem Scientific Instruments India">Bio-Chem Scientific Instruments India</option>
                  <option value="Delta Seals & Tapes Corp">Delta Seals &amp; Tapes Corp</option>
                </select>
              </div>

              <!-- 5. PAYMENT & TERMS -->
              <div>
                <label for="modal-po-terms" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAYMENT &amp; TERMS <span class="text-[#DE350B]">*</span></label>
                <select id="modal-po-terms" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="30 Days from Inward" selected>30 Days from Inward</option>
                  <option value="Immediate against Inward">Immediate against Inward</option>
                  <option value="50% Advance / 50% Delivery">50% Advance / 50% Delivery</option>
                  <option value="Net 15 Days">Net 15 Days</option>
                </select>
              </div>

              <!-- 6. FREIGHT TYPE -->
              <div>
                <label for="modal-po-freight" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT TYPE <span class="text-[#DE350B]">*</span></label>
                <select id="modal-po-freight" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Paid by Supplier" selected>Paid by Supplier</option>
                  <option value="To Pay (Consignee)">To Pay (Consignee)</option>
                  <option value="FOB Ex-Factory">FOB Ex-Factory</option>
                  <option value="CIF Visakhapatnam">CIF Visakhapatnam</option>
                </select>
              </div>

              <!-- 7. SUB DELIVERY DATE -->
              <div>
                <label for="modal-po-del-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUB DELIVERY DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="modal-po-del-date" value="2026-11-04" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 8. STATUS -->
              <div>
                <label for="modal-po-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS <span class="text-[#DE350B]">*</span></label>
                <select id="modal-po-status" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Approved" selected>Approved</option>
                  <option value="Issued to Vendor">Issued to Vendor</option>
                  <option value="Pending Delivery">Pending Delivery</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>

              <!-- 9. NARRATION (Full width) -->
              <div class="sm:col-span-2 md:col-span-3 lg:col-span-4">
                <label for="modal-po-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="modal-po-narration" placeholder="Proforma order purpose / notes..." value="General Store approved indent procurement order" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Work Flow Item Details -->
          <div class="pt-2 border-t border-[#DFE1E6]">
            <div class="flex items-center justify-between pb-2 mb-3">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Work Flow (From Indent) - Item Details</h4>
              </div>
              <span id="modal-po-items-count" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                ${modalStagedPoItems.length} Item(s) in Order
              </span>
            </div>

            <!-- Item Input Grid Card -->
            <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 space-y-3 shadow-2xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- 1. Item -->
                <div class="md:col-span-2">
                  <label for="mpoi-item" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="mpoi-item" placeholder="Item name or code..." value="Nitrile Food-Grade Gloves (Blue, L)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 2. Unit -->
                <div>
                  <label for="mpoi-unit" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UNIT</label>
                  <select id="mpoi-unit" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
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

                <!-- 3. Available Qty -->
                <div>
                  <label for="mpoi-avail-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAIL QTY</label>
                  <input type="number" id="mpoi-avail-qty" value="15" min="0" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" readonly />
                </div>

                <!-- Row 2 -->
                <!-- 4. Unit Price -->
                <div>
                  <label for="mpoi-unit-price" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UNIT PRICE (₹)</label>
                  <input type="number" id="mpoi-unit-price" value="280.00" min="0.01" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 5. Quantity -->
                <div>
                  <label for="mpoi-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">QUANTITY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="mpoi-qty" value="100" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 6. Supplier Rate -->
                <div>
                  <label for="mpoi-supplier-rate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER RATE (₹)</label>
                  <input type="number" id="mpoi-supplier-rate" value="280.00" min="0.01" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 7. Total Value -->
                <div>
                  <label for="mpoi-total-value" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TOTAL VALUE (₹)</label>
                  <input type="number" id="mpoi-total-value" value="28000.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- Row 3 -->
                <!-- 8. Discount% -->
                <div>
                  <label for="mpoi-disc-pct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DISCOUNT%</label>
                  <input type="number" id="mpoi-disc-pct" value="5" min="0" max="100" step="0.5" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 9. Discount Amount -->
                <div>
                  <label for="mpoi-disc-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DISCOUNT (₹)</label>
                  <input type="number" id="mpoi-disc-amt" value="1400.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-semibold text-[#D97706] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 10. GST% -->
                <div>
                  <label for="mpoi-gst-pct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST%</label>
                  <select id="mpoi-gst-pct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="18" selected>18% GST</option>
                    <option value="12">12% GST</option>
                    <option value="5">5% GST</option>
                    <option value="0">0% GST</option>
                  </select>
                </div>

                <!-- 11. Dispatched Date -->
                <div>
                  <label for="mpoi-dispatch-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DISPATCHED DATE</label>
                  <div class="erp-date-wrapper">
                    <input type="date" id="mpoi-dispatch-date" value="${todayStr}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                  </div>
                </div>

                <!-- Row 4 -->
                <!-- 12. SGST Amt -->
                <div>
                  <label for="mpoi-sgst" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SGST AMT (₹)</label>
                  <input type="number" id="mpoi-sgst" value="2394.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono text-xs text-[#5E6C84] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 13. CGST Amt -->
                <div>
                  <label for="mpoi-cgst" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CGST AMT (₹)</label>
                  <input type="number" id="mpoi-cgst" value="2394.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono text-xs text-[#5E6C84] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 14. IGST Amt -->
                <div>
                  <label for="mpoi-igst" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">IGST AMT (₹)</label>
                  <input type="number" id="mpoi-igst" value="0.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono text-xs text-[#5E6C84] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 15. Tax Amount -->
                <div>
                  <label for="mpoi-tax-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TAX AMOUNT (₹)</label>
                  <input type="number" id="mpoi-tax-amt" value="4788.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#0284C7] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- Row 5 -->
                <!-- 16. Invoice Amount (Col 1) -->
                <div>
                  <label for="mpoi-inv-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE AMT (₹)</label>
                  <input type="number" id="mpoi-inv-amt" value="31388.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 17. Action Button (Col 2 - directly after Invoice Amt) -->
                <div>
                  <label class="block text-[11px] font-bold text-transparent uppercase tracking-wider mb-1 select-none">&nbsp;</label>
                  <button type="button" id="modal-po-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged Order Items Table -->
            <div class="mt-3 overflow-x-auto border border-[#DFE1E6] rounded-xl bg-white shadow-2xs">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">Unit</th>
                    <th class="py-2.5 px-3 text-right">Qty</th>
                    <th class="py-2.5 px-3 text-right">Unit Price</th>
                    <th class="py-2.5 px-3 text-right">Total Val</th>
                    <th class="py-2.5 px-3 text-right">Disc%</th>
                    <th class="py-2.5 px-3 text-right">GST%</th>
                    <th class="py-2.5 px-3 text-right">Tax Amt</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amt</th>
                    <th class="py-2.5 px-3">Dispatch Date</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="modal-po-staged-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] text-[#475569] hover:bg-[#F8FAFC] cursor-pointer transition-colors',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Proforma Order',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const docNo = modalRoot.querySelector('#modal-po-docno')?.value?.trim();
            const code = modalRoot.querySelector('#modal-po-code')?.value?.trim();
            const date = modalRoot.querySelector('#modal-po-date')?.value;
            const supplier = modalRoot.querySelector('#modal-po-supplier')?.value;
            const paymentTerms = modalRoot.querySelector('#modal-po-terms')?.value;
            const freightType = modalRoot.querySelector('#modal-po-freight')?.value;
            const subDeliveryDate = modalRoot.querySelector('#modal-po-del-date')?.value;
            const narration = modalRoot.querySelector('#modal-po-narration')?.value?.trim();
            const status = modalRoot.querySelector('#modal-po-status')?.value;

            if (!docNo || !code) {
              Toast.show('DOC NO and CODE are required.', 'warning');
              return;
            }
            if (modalStagedPoItems.length === 0) {
              Toast.show('Please add at least one item to this Proforma Order.', 'warning');
              return;
            }

            const totalOrderVal = modalStagedPoItems.reduce((acc, it) => acc + (it.invoiceAmt || 0), 0);

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
                  items: [...modalStagedPoItems]
                };

                this.state.proformaOrderList.unshift(newPo);
                Modal.close();
                Toast.show(`Proforma Order ${docNo} created successfully!`, 'success');

                if (typeof onSuccess === 'function') {
                  onSuccess();
                }
              }
            });
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    // Calculation logic in modal
    const recalcModalItemInputs = () => {
      const price = parseFloat(modalRoot.querySelector('#mpoi-unit-price')?.value) || 0;
      const qty = parseInt(modalRoot.querySelector('#mpoi-qty')?.value, 10) || 0;
      const rateInput = modalRoot.querySelector('#mpoi-supplier-rate');
      if (rateInput && !rateInput.matches(':focus')) {
        rateInput.value = price.toFixed(2);
      }
      const actualRate = parseFloat(rateInput?.value) || price;
      const totalVal = qty * actualRate;

      const discPct = parseFloat(modalRoot.querySelector('#mpoi-disc-pct')?.value) || 0;
      const discAmt = totalVal * (discPct / 100);
      const taxable = Math.max(0, totalVal - discAmt);

      const gstPct = parseFloat(modalRoot.querySelector('#mpoi-gst-pct')?.value) || 18;
      const taxAmt = taxable * (gstPct / 100);
      const sgst = taxAmt / 2;
      const cgst = taxAmt / 2;
      const igst = 0;
      const invAmt = taxable + taxAmt;

      const totalValEl = modalRoot.querySelector('#mpoi-total-value');
      const discAmtEl = modalRoot.querySelector('#mpoi-disc-amt');
      const sgstEl = modalRoot.querySelector('#mpoi-sgst');
      const cgstEl = modalRoot.querySelector('#mpoi-cgst');
      const igstEl = modalRoot.querySelector('#mpoi-igst');
      const taxAmtEl = modalRoot.querySelector('#mpoi-tax-amt');
      const invAmtEl = modalRoot.querySelector('#mpoi-inv-amt');

      if (totalValEl) totalValEl.value = totalVal.toFixed(2);
      if (discAmtEl) discAmtEl.value = discAmt.toFixed(2);
      if (sgstEl) sgstEl.value = sgst.toFixed(2);
      if (cgstEl) cgstEl.value = cgst.toFixed(2);
      if (igstEl) igstEl.value = igst.toFixed(2);
      if (taxAmtEl) taxAmtEl.value = taxAmt.toFixed(2);
      if (invAmtEl) invAmtEl.value = invAmt.toFixed(2);
    };

    ['#mpoi-unit-price', '#mpoi-qty', '#mpoi-supplier-rate', '#mpoi-disc-pct', '#mpoi-gst-pct'].forEach(sel => {
      modalRoot.querySelector(sel)?.addEventListener('input', recalcModalItemInputs);
    });

    const renderModalStagedPoItems = () => {
      const tbody = modalRoot.querySelector('#modal-po-staged-tbody');
      const countBadge = modalRoot.querySelector('#modal-po-items-count');
      if (!tbody) return;

      if (countBadge) countBadge.textContent = `${modalStagedPoItems.length} Item(s) in Order`;

      if (modalStagedPoItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="11" class="text-center py-4 text-xs text-[#94A3B8] italic">No items added to this proforma order yet. Fill fields above and click "+ Add Item".</td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = modalStagedPoItems.map((it, idx) => `
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
            <button type="button" data-remove-idx="${idx}" class="modal-po-remove-btn w-6 h-6 rounded-full hover:bg-[#FFEBE6] text-[#DE350B] inline-flex items-center justify-center transition-colors cursor-pointer" title="Remove Item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.modal-po-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rIdx = parseInt(btn.dataset.removeIdx, 10);
          modalStagedPoItems.splice(rIdx, 1);
          renderModalStagedPoItems();
        });
      });
    };

    renderModalStagedPoItems();

    modalRoot.querySelector('#modal-po-btn-add-item')?.addEventListener('click', () => {
      const item = modalRoot.querySelector('#mpoi-item')?.value?.trim();
      const unit = modalRoot.querySelector('#mpoi-unit')?.value;
      const availQty = parseInt(modalRoot.querySelector('#mpoi-avail-qty')?.value, 10) || 0;
      const unitPrice = parseFloat(modalRoot.querySelector('#mpoi-unit-price')?.value) || 0;
      const quantity = parseInt(modalRoot.querySelector('#mpoi-qty')?.value, 10) || 0;
      const supplierRate = parseFloat(modalRoot.querySelector('#mpoi-supplier-rate')?.value) || unitPrice;
      const totalValue = parseFloat(modalRoot.querySelector('#mpoi-total-value')?.value) || 0;
      const discountPercent = parseFloat(modalRoot.querySelector('#mpoi-disc-pct')?.value) || 0;
      const discountAmt = parseFloat(modalRoot.querySelector('#mpoi-disc-amt')?.value) || 0;
      const gstPercent = parseFloat(modalRoot.querySelector('#mpoi-gst-pct')?.value) || 0;
      const sgstAmt = parseFloat(modalRoot.querySelector('#mpoi-sgst')?.value) || 0;
      const cgstAmt = parseFloat(modalRoot.querySelector('#mpoi-cgst')?.value) || 0;
      const igstAmt = parseFloat(modalRoot.querySelector('#mpoi-igst')?.value) || 0;
      const taxAmount = parseFloat(modalRoot.querySelector('#mpoi-tax-amt')?.value) || 0;
      const invoiceAmt = parseFloat(modalRoot.querySelector('#mpoi-inv-amt')?.value) || 0;
      const dispatchedDate = modalRoot.querySelector('#mpoi-dispatch-date')?.value;

      if (!item) {
        Toast.show('Please provide Item name before adding.', 'warning');
        modalRoot.querySelector('#mpoi-item')?.focus();
        return;
      }
      if (quantity <= 0) {
        Toast.show('Quantity must be greater than zero.', 'warning');
        modalRoot.querySelector('#mpoi-qty')?.focus();
        return;
      }

      modalStagedPoItems.push({
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

      renderModalStagedPoItems();
      Toast.show(`Item "${item}" added to Proforma Order.`, 'info');
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
      confirmActions: false,
      content: `
        <form id="form-edit-po" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Order Header Information</h4>
            </div>
            <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
              <input type="text" name="docNo" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="code" value="${row.code}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" name="date" value="${row.date}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()">
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER FIRM NAME <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="supplier" value="${row.supplier}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
              <select name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Approved" ${row.status === 'Approved' ? 'selected' : ''}>Approved</option>
                <option value="Issued to Vendor" ${row.status === 'Issued to Vendor' ? 'selected' : ''}>Issued to Vendor</option>
                <option value="Pending Delivery" ${row.status === 'Pending Delivery' ? 'selected' : ''}>Pending Delivery</option>
                <option value="Completed" ${row.status === 'Completed' ? 'selected' : ''}>Completed</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
            <textarea name="narration" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${row.narration || ''}</textarea>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Update Order',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
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

  // =========================================================================
  // 1c. GENERAL STORE &rarr; GOODS RECEIPT NOTE (GS)
  // Form Input Fields: DOC NO, CODE, DATE, SUPPLIER FIRM NAME, INVOICE NUMBER, INVOICE DATE, PO NO., FREIGHT TYPE, NARRATION, STATUS
  // Work Flow - Item Details Fields: Item, UoM, Available Qty, PO Qty, Received Qty, Deviation Qty, Location, Batch, Item Price, Base Value, Deviation Amount, GST%, GST Tax Amount
  // Table Columns: S No, Vendor, Date, Po No, Invoice No, Code, Actions
  // Search & Filter, Confirmation Modal Popup, View & Edit Modals
  // =========================================================================
  renderGeneralStoreGRN(container) {
    const todayStr = new Date().toISOString().slice(0, 10);

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Goods Receipt Note (GS)</h1>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="gs-grn-add-btn" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Add Goods Receipts Note</span>
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
            <button type="button" id="grn-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="grn-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="grn-flt-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="grn-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- 1. DOC NO / CODE / PO NO / INV NO -->
          <div>
            <label for="grn-flt-doc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
            <input type="text" id="grn-flt-doc" placeholder="Doc / PO / Invoice / Code..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 2. VENDOR -->
          <div>
            <label for="grn-flt-vendor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VENDOR</label>
            <select id="grn-flt-vendor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Vendors</option>
              <option value="Devi Safety Aids & Industrial Supplies">Devi Safety Aids</option>
              <option value="Apex Engineering & Spare Parts Ltd">Apex Engineering</option>
              <option value="Sri Venkateswara Packaging Ltd">Sri Venkateswara</option>
              <option value="Delta Seals & Tapes Corp">Delta Seals &amp; Tapes</option>
              <option value="Bio-Chem Scientific Instruments India">Bio-Chem Scientific</option>
            </select>
          </div>

          <!-- 3. FROM DATE -->
          <div>
            <label for="grn-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <div class="erp-date-wrapper">
              <input type="date" id="grn-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <!-- 4. TO DATE -->
          <div>
            <label for="grn-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <div class="erp-date-wrapper">
              <input type="date" id="grn-flt-to" value="${todayStr}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button type="button" id="grn-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Existing Goods Receipt Notes Table Container: S No, Vendor, Date, Po No, Invoice No, Code, Actions -->
      <div id="gs-grn-table-container"></div>
    `;

    // Direct Click Handler for "Add Goods Receipts Note" Button
    container.querySelector('#gs-grn-add-btn')?.addEventListener('click', () => {
      this.showAddGrnModal(() => {
        renderTable(this.state.grnList);
      });
    });

    // Render GRN DataTable
    const renderTable = (data) => {
      new DataTable({
        containerId: 'gs-grn-table-container',
        tableTitle: `Goods Receipt Notes (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showGrnDetailModal(row);
        },
        columns: [
          // 1. S No (Clickable)
          {
            field: 'sNo',
            header: 'S No',
            sortable: true,
            render: (v, r, idx) => `
              <span class="text-[#00A4B7] font-semibold hover:underline cursor-pointer select-none" title="Click to view full GRN details">${idx + 1}</span>
            `
          },
          // 2. Vendor (Supplier Firm Name)
          {
            field: 'supplier',
            header: 'Vendor',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>
                <span class="text-[10px] text-[#5E6C84]">${r.freightType || 'Standard'} • ${r.status || 'Received'}</span>
              </div>
            `
          },
          // 3. Date
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>`
          },
          // 4. Po No
          {
            field: 'poNo',
            header: 'Po No',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] whitespace-nowrap">${v || '-'}</span>`
          },
          // 5. Invoice No
          {
            field: 'invoiceNumber',
            header: 'Invoice No',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-mono font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v || '-'}</span>
                <span class="text-[10px] text-[#5E6C84] font-mono">Inv Dt: ${r.invoiceDate || '-'}</span>
              </div>
            `
          },
          // 6. Code
          {
            field: 'code',
            header: 'Code',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap" title="Click to view GRN details">${v || '-'}</span>`
          }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'View',
            title: 'View GRN Details',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => {
              this.showGrnDetailModal(row);
            }
          },
          {
            label: 'Edit',
            title: 'Edit Goods Receipt Note',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditGrnModal(row, () => {
                renderTable(this.state.grnList);
              });
            }
          },
          {
            label: 'Delete',
            title: 'Delete Goods Receipt Note',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Goods Receipt Note',
                message: `Are you sure you want to delete Goods Receipt Note <strong>${row.docNo}</strong> (${row.supplier})? This action cannot be undone.`,
                confirmText: 'Delete GRN',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.grnList.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.grnList.splice(idx, 1);
                    renderTable(this.state.grnList);
                    Toast.show(`Goods Receipt Note ${row.docNo} deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.grnList);

    // Search & Filter Handlers
    container.querySelector('#grn-flt-search-btn')?.addEventListener('click', () => {
      const searchVal = container.querySelector('#grn-flt-doc')?.value?.trim().toLowerCase();
      const vendorVal = container.querySelector('#grn-flt-vendor')?.value;
      const fromVal = container.querySelector('#grn-flt-from')?.value;
      const toVal = container.querySelector('#grn-flt-to')?.value;

      const filtered = this.state.grnList.filter(it => {
        if (searchVal) {
          const matchDoc = it.docNo?.toLowerCase().includes(searchVal);
          const matchCode = it.code?.toLowerCase().includes(searchVal);
          const matchPo = it.poNo?.toLowerCase().includes(searchVal);
          const matchInv = it.invoiceNumber?.toLowerCase().includes(searchVal);
          if (!matchDoc && !matchCode && !matchPo && !matchInv) return false;
        }
        if (vendorVal && vendorVal !== 'ALL' && it.supplier !== vendorVal) return false;
        if (fromVal && it.date < fromVal) return false;
        if (toVal && it.date > toVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching Goods Receipt Note(s)`, 'info');
    });

    // Reset Handler
    container.querySelector('#grn-flt-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#grn-flt-doc').value = '';
      container.querySelector('#grn-flt-vendor').value = 'ALL';
      container.querySelector('#grn-flt-from').value = '2026-10-01';
      container.querySelector('#grn-flt-to').value = todayStr;
      renderTable(this.state.grnList);
      Toast.show('GRN filters reset to default', 'info');
    });

    // Toggle Filters Accordion
    const filterBody = container.querySelector('#grn-flt-body');
    const toggleIcon = container.querySelector('#grn-flt-toggle-icon');
    container.querySelector('#grn-flt-toggle-btn')?.addEventListener('click', () => {
      if (filterBody) {
        filterBody.classList.toggle('hidden');
        if (toggleIcon) {
          toggleIcon.classList.toggle('rotate-180');
        }
      }
    });
  },

  // 1d. ADD GOODS RECEIPT NOTE (GS) MODAL POPUP
  showAddGrnModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextGrnNum = (this.state.grnList?.length || 0) + 1;
    const defaultDocNo = `GRN-GS-2026-${String(40 + nextGrnNum).padStart(4, '0')}`;
    const defaultCode = `COD-GRN-${7720 + nextGrnNum}`;

    let modalStagedGrnItems = [
      {
        item: 'Nitrile Food-Grade Gloves (Blue, L)',
        uom: 'Box',
        availableQty: 15,
        poQty: 100,
        receivedQty: 100,
        deviationQty: 0,
        location: 'Main Store Rack A-2',
        batch: `BAT-${new Date().getFullYear()}-09A`,
        itemPrice: 280.00,
        baseValue: 28000.00,
        deviationAmount: 0.00,
        gstPercent: 18,
        gstTaxAmount: 5040.00
      }
    ];

    Modal.open({
      title: 'Add Goods Receipt Note (GS)',
      size: 'full',
      confirmActions: false,
      content: `
        <form id="modal-add-grn-form" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: Header Information -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">GRN Header Information</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <!-- Form Header Input Fields: DOC NO, CODE, DATE, SUPPLIER FIRM NAME, INVOICE NUMBER, INVOICE DATE, PO NO., FREIGHT TYPE, NARRATION, STATUS -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              <!-- 1. DOC NO -->
              <div>
                <label for="mgrn-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="mgrn-docno" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 2. CODE -->
              <div>
                <label for="mgrn-code" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="mgrn-code" value="${defaultCode}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 3. DATE -->
              <div>
                <label for="mgrn-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="mgrn-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 4. SUPPLIER FIRM NAME -->
              <div>
                <label for="mgrn-supplier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER FIRM NAME <span class="text-[#DE350B]">*</span></label>
                <select id="mgrn-supplier" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Devi Safety Aids & Industrial Supplies" selected>Devi Safety Aids &amp; Industrial Supplies</option>
                  <option value="Apex Engineering & Spare Parts Ltd">Apex Engineering &amp; Spare Parts Ltd</option>
                  <option value="Sri Venkateswara Packaging Ltd">Sri Venkateswara Packaging Ltd</option>
                  <option value="Delta Seals & Tapes Corp">Delta Seals &amp; Tapes Corp</option>
                  <option value="Bio-Chem Scientific Instruments India">Bio-Chem Scientific Instruments India</option>
                </select>
              </div>

              <!-- 5. INVOICE NUMBER -->
              <div>
                <label for="mgrn-inv-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE NUMBER <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="mgrn-inv-no" value="INV-${Math.floor(10000 + Math.random() * 90000)}" placeholder="Vendor invoice number..." required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 6. INVOICE DATE -->
              <div>
                <label for="mgrn-inv-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="mgrn-inv-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 7. PO NO. -->
              <div>
                <label for="mgrn-po-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PO NO. <span class="text-[#DE350B]">*</span></label>
                <select id="mgrn-po-no" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="PO-GS-2026-0101" selected>PO-GS-2026-0101 (Nitrile Gloves)</option>
                  <option value="PO-GS-2026-0102">PO-GS-2026-0102 (Plate Freezer Gaskets)</option>
                  <option value="PO-GS-2026-0103">PO-GS-2026-0103 (QC Residual Strips)</option>
                  <option value="PO-GS-2026-0104">PO-GS-2026-0104 (Thermal Barcode Ribbons)</option>
                  <option value="PO-GS-2026-0105">PO-GS-2026-0105 (PP Strapping Rolls)</option>
                </select>
              </div>

              <!-- 8. FREIGHT TYPE -->
              <div>
                <label for="mgrn-freight" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT TYPE <span class="text-[#DE350B]">*</span></label>
                <select id="mgrn-freight" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Paid by Supplier" selected>Paid by Supplier</option>
                  <option value="To Pay (Consignee)">To Pay (Consignee)</option>
                  <option value="FOB Ex-Factory">FOB Ex-Factory</option>
                  <option value="CIF Visakhapatnam">CIF Visakhapatnam</option>
                </select>
              </div>

              <!-- 9. STATUS -->
              <div>
                <label for="mgrn-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS <span class="text-[#DE350B]">*</span></label>
                <select id="mgrn-status" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Inward Received" selected>Inward Received</option>
                  <option value="QC Verified">QC Verified</option>
                  <option value="Stored">Stored</option>
                  <option value="Pending Inspection">Pending Inspection</option>
                </select>
              </div>

              <!-- 10. NARRATION (Takes remaining space) -->
              <div class="sm:col-span-2 md:col-span-2 lg:col-span-3">
                <label for="mgrn-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="mgrn-narration" placeholder="Enter delivery remarks, gate pass no, challan info..." value="Inward goods intake verified against vendor invoice and delivery challan" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Work Flow - Item Details -->
          <div class="pt-2 border-t border-[#DFE1E6]">
            <div class="flex items-center justify-between pb-2 mb-3">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Work Flow - Item Details</h4>
              </div>
              <span id="modal-grn-items-count" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                ${modalStagedGrnItems.length} Item(s) in GRN
              </span>
            </div>

            <!-- Item Input Grid Card (4-Column Layout) -->
            <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- Row 1 -->
                <!-- 1. Item (Span 2) -->
                <div class="sm:col-span-2 md:col-span-2">
                  <label for="mgrn-item-name" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="mgrn-item-name" placeholder="Item name or code..." value="Nitrile Food-Grade Gloves (Blue, L)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 2. UoM (Col 3) -->
                <div>
                  <label for="mgrn-item-uom" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UoM</label>
                  <select id="mgrn-item-uom" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
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

                <!-- 3. Available Qty (Col 4) -->
                <div>
                  <label for="mgrn-avail-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAILABLE QTY</label>
                  <input type="number" id="mgrn-avail-qty" value="15" min="0" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" readonly />
                </div>

                <!-- Row 2 -->
                <!-- 4. PO Qty (Col 1) -->
                <div>
                  <label for="mgrn-po-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PO QTY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="mgrn-po-qty" value="100" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 5. Received Qty (Col 2) -->
                <div>
                  <label for="mgrn-rcv-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RECEIVED QTY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="mgrn-rcv-qty" value="100" min="0" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 6. Deviation Qty (Col 3, Auto calculated) -->
                <div>
                  <label for="mgrn-dev-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEVIATION QTY</label>
                  <input type="number" id="mgrn-dev-qty" value="0" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" readonly />
                </div>

                <!-- 7. Location (Col 4) -->
                <div>
                  <label for="mgrn-location" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">LOCATION <span class="text-[#DE350B]">*</span></label>
                  <select id="mgrn-location" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Main Store Rack A-2" selected>Main Store Rack A-2</option>
                    <option value="Main Store Rack B-1">Main Store Rack B-1</option>
                    <option value="Coldstore Hub B">Coldstore Hub B</option>
                    <option value="Engineering Bay C">Engineering Bay C</option>
                    <option value="QC Lab Storage">QC Lab Storage</option>
                    <option value="Packaging Store Bay 1">Packaging Store Bay 1</option>
                  </select>
                </div>

                <!-- Row 3 -->
                <!-- 8. Batch (Col 1) -->
                <div>
                  <label for="mgrn-batch" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BATCH <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="mgrn-batch" placeholder="Batch / Lot #" value="BAT-${new Date().getFullYear()}-09A" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 9. Item Price (Col 2) -->
                <div>
                  <label for="mgrn-price" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM PRICE (₹)</label>
                  <input type="number" id="mgrn-price" value="280.00" min="0" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 10. Base Value (Col 3) -->
                <div>
                  <label for="mgrn-base-val" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BASE VALUE (₹)</label>
                  <input type="text" id="mgrn-base-val" value="28000.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 11. Deviation Amount (Col 4) -->
                <div>
                  <label for="mgrn-dev-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEV AMOUNT (₹)</label>
                  <input type="text" id="mgrn-dev-amt" value="0.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#D97706] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- Row 4 -->
                <!-- 12. GST% (Col 1) -->
                <div>
                  <label for="mgrn-gst-pct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST %</label>
                  <select id="mgrn-gst-pct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="0">0%</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18" selected>18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                <!-- 13. GST Tax Amount (Col 2) -->
                <div>
                  <label for="mgrn-gst-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST TAX AMOUNT (₹)</label>
                  <input type="text" id="mgrn-gst-amt" value="5040.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 14. Action Button (Col 3 - directly after GST Tax Amount) -->
                <div>
                  <label class="block text-[11px] font-bold text-transparent uppercase tracking-wider mb-1 select-none">&nbsp;</label>
                  <button type="button" id="modal-grn-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged GRN Items Table -->
            <div class="mt-3 overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3 text-right">PO Qty</th>
                    <th class="py-2.5 px-3 text-right">Received Qty</th>
                    <th class="py-2.5 px-3 text-right">Dev Qty</th>
                    <th class="py-2.5 px-3">Location</th>
                    <th class="py-2.5 px-3">Batch</th>
                    <th class="py-2.5 px-3 text-right">Item Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">Dev Amt</th>
                    <th class="py-2.5 px-3 text-right">GST%</th>
                    <th class="py-2.5 px-3 text-right">GST Tax</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="modal-grn-staged-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Goods Receipt Note',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const docNo = modalRoot.querySelector('#mgrn-docno')?.value?.trim();
            const code = modalRoot.querySelector('#mgrn-code')?.value?.trim();
            const date = modalRoot.querySelector('#mgrn-date')?.value;
            const supplier = modalRoot.querySelector('#mgrn-supplier')?.value;
            const invoiceNumber = modalRoot.querySelector('#mgrn-inv-no')?.value?.trim();
            const invoiceDate = modalRoot.querySelector('#mgrn-inv-date')?.value;
            const poNo = modalRoot.querySelector('#mgrn-po-no')?.value;
            const freightType = modalRoot.querySelector('#mgrn-freight')?.value;
            const narration = modalRoot.querySelector('#mgrn-narration')?.value?.trim();
            const status = modalRoot.querySelector('#mgrn-status')?.value;

            if (!docNo) {
              Toast.show('Please enter a valid DOC NO.', 'warning');
              modalRoot.querySelector('#mgrn-docno')?.focus();
              return;
            }
            if (!invoiceNumber) {
              Toast.show('Please provide Invoice Number.', 'warning');
              modalRoot.querySelector('#mgrn-inv-no')?.focus();
              return;
            }
            if (modalStagedGrnItems.length === 0) {
              Toast.show('Please add at least one item to the Goods Receipt Note.', 'warning');
              return;
            }

            // Confirmation Popup Modal
            Modal.confirm({
              title: 'Confirm Save Goods Receipt Note',
              message: `Are you sure you want to save Goods Receipt Note <strong>${docNo}</strong> from <strong>${supplier}</strong> (PO: ${poNo}, Invoice: ${invoiceNumber}) with <strong>${modalStagedGrnItems.length} item(s)</strong>?`,
              confirmText: 'Save GRN',
              onConfirm: () => {
                const newGrn = {
                  id: (this.state.grnList?.length || 0) + 1,
                  docNo,
                  code,
                  date,
                  supplier,
                  invoiceNumber,
                  invoiceDate,
                  poNo,
                  freightType,
                  narration,
                  status,
                  items: [...modalStagedGrnItems]
                };

                this.state.grnList.unshift(newGrn);
                Modal.close();
                Toast.show(`Goods Receipt Note ${docNo} saved successfully!`, 'success');

                if (typeof onSuccess === 'function') {
                  onSuccess();
                }
              }
            });
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    // Live Calculation Logic for Item Details
    const recalcGrnItemFields = () => {
      const poQty = parseInt(modalRoot.querySelector('#mgrn-po-qty')?.value, 10) || 0;
      const rcvQty = parseInt(modalRoot.querySelector('#mgrn-rcv-qty')?.value, 10) || 0;
      const price = parseFloat(modalRoot.querySelector('#mgrn-price')?.value) || 0;
      const gstPct = parseFloat(modalRoot.querySelector('#mgrn-gst-pct')?.value) || 0;

      const devQty = rcvQty - poQty;
      const baseValue = rcvQty * price;
      const devAmt = devQty * price;
      const gstTax = baseValue * (gstPct / 100);

      const devQtyEl = modalRoot.querySelector('#mgrn-dev-qty');
      const baseValEl = modalRoot.querySelector('#mgrn-base-val');
      const devAmtEl = modalRoot.querySelector('#mgrn-dev-amt');
      const gstAmtEl = modalRoot.querySelector('#mgrn-gst-amt');

      if (devQtyEl) {
        devQtyEl.value = devQty;
        if (devQty < 0) {
          devQtyEl.className = 'w-full text-xs px-2.5 py-1.5 bg-[#FFEBE6] border border-[#FFBDAD] rounded font-mono font-bold text-[#DE350B] shadow-2xs cursor-not-allowed';
        } else {
          devQtyEl.className = 'w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed';
        }
      }
      if (baseValEl) baseValEl.value = baseValue.toFixed(2);
      if (devAmtEl) {
        devAmtEl.value = devAmt.toFixed(2);
        devAmtEl.className = devAmt < 0
          ? 'w-full text-xs px-2.5 py-1.5 bg-[#FFEBE6] border border-[#FFBDAD] rounded font-mono font-bold text-[#DE350B] shadow-2xs cursor-not-allowed'
          : 'w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed';
      }
      if (gstAmtEl) gstAmtEl.value = gstTax.toFixed(2);
    };

    ['#mgrn-po-qty', '#mgrn-rcv-qty', '#mgrn-price', '#mgrn-gst-pct'].forEach(sel => {
      modalRoot.querySelector(sel)?.addEventListener('input', recalcGrnItemFields);
      modalRoot.querySelector(sel)?.addEventListener('change', recalcGrnItemFields);
    });

    // Render Staged Items in Modal
    const renderModalStagedGrnItems = () => {
      const tbody = modalRoot.querySelector('#modal-grn-staged-tbody');
      const countBadge = modalRoot.querySelector('#modal-grn-items-count');
      if (!tbody) return;

      if (countBadge) countBadge.textContent = `${modalStagedGrnItems.length} Item(s) in GRN`;

      if (modalStagedGrnItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="13" class="text-center py-4 text-xs text-[#94A3B8] italic">No items staged in this Goods Receipt Note yet. Fill fields above and click "+ Add Item to GRN".</td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = modalStagedGrnItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
          <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.poQty}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">${it.receivedQty}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold ${it.deviationQty < 0 ? 'text-[#DE350B]' : 'text-[#00875A]'}">${it.deviationQty}</td>
          <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.location}</td>
          <td class="py-2.5 px-3 font-mono text-xs font-semibold text-[#172B4D]">${it.batch}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.itemPrice).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">₹${Number(it.baseValue).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-semibold ${it.deviationAmount < 0 ? 'text-[#DE350B]' : 'text-[#00875A]'}">₹${Number(it.deviationAmount).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#0284C7]">₹${Number(it.gstTaxAmount).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-center">
            <button type="button" data-remove-idx="${idx}" class="modal-grn-remove-btn w-6 h-6 rounded-full hover:bg-[#FFEBE6] text-[#DE350B] inline-flex items-center justify-center transition-colors cursor-pointer" title="Remove Item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.modal-grn-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rIdx = parseInt(btn.dataset.removeIdx, 10);
          modalStagedGrnItems.splice(rIdx, 1);
          renderModalStagedGrnItems();
        });
      });
    };

    renderModalStagedGrnItems();

    // Add Item click handler
    modalRoot.querySelector('#modal-grn-btn-add-item')?.addEventListener('click', () => {
      const item = modalRoot.querySelector('#mgrn-item-name')?.value?.trim();
      const uom = modalRoot.querySelector('#mgrn-item-uom')?.value || 'Nos';
      const availableQty = parseInt(modalRoot.querySelector('#mgrn-avail-qty')?.value, 10) || 0;
      const poQty = parseInt(modalRoot.querySelector('#mgrn-po-qty')?.value, 10) || 0;
      const receivedQty = parseInt(modalRoot.querySelector('#mgrn-rcv-qty')?.value, 10) || 0;
      const deviationQty = receivedQty - poQty;
      const location = modalRoot.querySelector('#mgrn-location')?.value || 'Main Store Rack A-2';
      const batch = modalRoot.querySelector('#mgrn-batch')?.value?.trim() || `BAT-${new Date().getFullYear()}-01`;
      const itemPrice = parseFloat(modalRoot.querySelector('#mgrn-price')?.value) || 0;
      const baseValue = receivedQty * itemPrice;
      const deviationAmount = deviationQty * itemPrice;
      const gstPercent = parseFloat(modalRoot.querySelector('#mgrn-gst-pct')?.value) || 0;
      const gstTaxAmount = baseValue * (gstPercent / 100);

      if (!item) {
        Toast.show('Please provide Item name before adding.', 'warning');
        modalRoot.querySelector('#mgrn-item-name')?.focus();
        return;
      }
      if (poQty <= 0) {
        Toast.show('PO Quantity must be greater than zero.', 'warning');
        modalRoot.querySelector('#mgrn-po-qty')?.focus();
        return;
      }

      modalStagedGrnItems.push({
        item,
        uom,
        availableQty,
        poQty,
        receivedQty,
        deviationQty,
        location,
        batch,
        itemPrice,
        baseValue,
        deviationAmount,
        gstPercent,
        gstTaxAmount
      });

      renderModalStagedGrnItems();
      Toast.show(`Item "${item}" added to GRN.`, 'info');
    });
  },

  // 1e. GOODS RECEIPT NOTE (GS) DETAILS MODAL POPUP
  showGrnDetailModal(row) {
    if (!row) return;

    const totalBase = (row.items || []).reduce((acc, it) => acc + (it.baseValue || 0), 0);
    const totalTax = (row.items || []).reduce((acc, it) => acc + (it.gstTaxAmount || 0), 0);
    const totalDev = (row.items || []).reduce((acc, it) => acc + (it.deviationAmount || 0), 0);
    const totalQty = (row.items || []).reduce((acc, it) => acc + (it.receivedQty || 0), 0);

    Modal.open({
      title: `Goods Receipt Note Details: ${row.docNo} (${row.code})`,
      size: 'full',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Information Overview -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAFC] border border-[#DFE1E6] p-3.5 rounded-xl shadow-2xs">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DOC NO</span>
              <span class="font-mono font-bold text-sm text-[#00A4B7]">${row.docNo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">CODE</span>
              <span class="font-mono font-semibold text-xs text-[#172B4D]">${row.code}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DATE</span>
              <span class="font-mono text-xs text-[#172B4D]">${row.date}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">STATUS</span>
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${row.status || 'Received'}
              </span>
            </div>
          </div>

          <!-- Vendor & Invoice Overview -->
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-white border border-[#DFE1E6] p-3.5 rounded-xl shadow-2xs">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">VENDOR</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.supplier}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">INVOICE NO / DATE</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.invoiceNumber || '-'}</span>
              <span class="block text-[10px] text-[#5E6C84] font-mono">${row.invoiceDate || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">PO NO.</span>
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${row.poNo || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">FREIGHT TYPE</span>
              <span class="text-xs text-[#5E6C84]">${row.freightType || '-'}</span>
            </div>
          </div>

          ${row.narration ? `
            <div class="p-3 bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl shadow-2xs">
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DELIVERY NARRATION</span>
              <p class="text-xs text-[#172B4D]">${row.narration}</p>
            </div>
          ` : ''}

          <!-- Work Flow Item Details Table -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-2">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Item Details (${row.items?.length || 0})
              </h4>
              <div class="flex items-center gap-3">
                <span class="font-mono text-xs font-semibold text-[#172B4D]">Total Rcv Qty: <strong class="text-[#00875A]">${totalQty}</strong></span>
                <span class="font-mono text-xs font-bold text-[#00A4B7]">Total Value: ₹${Number(totalBase + totalTax).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <div class="overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3 text-right">PO Qty</th>
                    <th class="py-2.5 px-3 text-right">Received Qty</th>
                    <th class="py-2.5 px-3 text-right">Dev Qty</th>
                    <th class="py-2.5 px-3">Location</th>
                    <th class="py-2.5 px-3">Batch</th>
                    <th class="py-2.5 px-3 text-right">Item Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">Dev Amt</th>
                    <th class="py-2.5 px-3 text-right">GST%</th>
                    <th class="py-2.5 px-3 text-right">GST Tax</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                  ${(row.items || []).map(it => `
                    <tr class="hover:bg-[#F8FAFC] transition-colors">
                      <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
                      <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.poQty}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">${it.receivedQty}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold ${it.deviationQty < 0 ? 'text-[#DE350B]' : 'text-[#00875A]'}">${it.deviationQty}</td>
                      <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.location}</td>
                      <td class="py-2.5 px-3 font-mono text-xs font-semibold text-[#172B4D]">${it.batch}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.itemPrice).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">₹${Number(it.baseValue).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-semibold ${it.deviationAmount < 0 ? 'text-[#DE350B]' : 'text-[#00875A]'}">₹${Number(it.deviationAmount).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#0284C7]">₹${Number(it.gstTaxAmount).toFixed(2)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Close',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Print GRN',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            Toast.show(`Printing Goods Receipt Note ${row.docNo}...`, 'success');
          }
        }
      ]
    });
  },

  // 1f. EDIT GOODS RECEIPT NOTE (GS) MODAL POPUP
  showEditGrnModal(row, onSuccess) {
    Modal.open({
      title: `Edit Goods Receipt Note: ${row.docNo}`,
      size: 'lg',
      confirmActions: false,
      content: `
        <form id="form-edit-grn" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">GRN Header Information</h4>
            </div>
            <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
              <input type="text" name="docNo" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="code" value="${row.code}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" name="date" value="${row.date}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()">
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER FIRM NAME <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="supplier" value="${row.supplier}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PO NO. <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="poNo" value="${row.poNo || ''}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE NUMBER <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="invoiceNumber" value="${row.invoiceNumber || ''}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" name="invoiceDate" value="${row.invoiceDate || row.date}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()">
              </div>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
              <select name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Inward Received" ${row.status === 'Inward Received' ? 'selected' : ''}>Inward Received</option>
                <option value="QC Verified" ${row.status === 'QC Verified' ? 'selected' : ''}>QC Verified</option>
                <option value="Stored" ${row.status === 'Stored' ? 'selected' : ''}>Stored</option>
                <option value="Pending Inspection" ${row.status === 'Pending Inspection' ? 'selected' : ''}>Pending Inspection</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
            <textarea name="narration" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${row.narration || ''}</textarea>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Update GRN',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: (modal) => {
            const form = document.getElementById('form-edit-grn');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);

            Modal.confirm({
              title: 'Confirm Update Goods Receipt Note',
              message: `Are you sure you want to update Goods Receipt Note <strong>${row.docNo}</strong>?`,
              confirmText: 'Update GRN',
              onConfirm: () => {
                row.code = fd.get('code');
                row.date = fd.get('date');
                row.supplier = fd.get('supplier');
                row.poNo = fd.get('poNo');
                row.invoiceNumber = fd.get('invoiceNumber');
                row.invoiceDate = fd.get('invoiceDate');
                row.status = fd.get('status');
                row.narration = fd.get('narration');

                modal.close();
                Toast.show(`Goods Receipt Note ${row.docNo} updated successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
  },

  // =========================================================================
  // 1d. GENERAL STORE &rarr; MATERIAL ISSUE (GS)
  // Form Input Fields: DOC NO, DATE, LOCATION, DEPARTMENT, NARRATION
  // Item Details Fields: Item, UoM, Available Qty, Item Price, Batch, Quantity, Base Value, GST%, Invoice Amount, Purpose, Attachment, Remarks, Action
  // Search & Filter, Data Table (S No, Date, Actions), Modal Popups & Confirmations
  // =========================================================================
  renderGeneralStoreMaterialIssue(container) {
    const todayStr = new Date().toISOString().slice(0, 10);

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Material Issue (GS)</h1>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="gs-issue-add-btn" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Add Material Issue</span>
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
            <button type="button" id="issue-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="issue-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="issue-flt-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="issue-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- 1. Search Query -->
          <div>
            <label for="issue-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
            <input type="text" id="issue-flt-search" placeholder="Doc No / Item / Narration..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 2. Department -->
          <div>
            <label for="issue-flt-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT</label>
            <select id="issue-flt-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Departments</option>
              <option value="Processing Unit-5">Processing Unit-5</option>
              <option value="Coldstore Hub">Coldstore Hub</option>
              <option value="Engineering & Maintenance">Engineering &amp; Maintenance</option>
              <option value="Quality Control Lab">Quality Control Lab</option>
              <option value="Pre-Processing Unit">Pre-Processing Unit</option>
              <option value="Administration & Safety">Administration &amp; Safety</option>
            </select>
          </div>

          <!-- 3. From Date -->
          <div>
            <label for="issue-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <div class="erp-date-wrapper">
              <input type="date" id="issue-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <!-- 4. To Date -->
          <div>
            <label for="issue-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <div class="erp-date-wrapper">
              <input type="date" id="issue-flt-to" value="${todayStr}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button type="button" id="issue-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Material Issue Records Table: S No, Date, Actions (plus Doc No, Dept, Location, Amount) -->
      <div id="gs-material-issue-table-container"></div>
    `;

    // Click handler for Add Button
    container.querySelector('#gs-issue-add-btn')?.addEventListener('click', () => {
      this.showAddMaterialIssueModal(() => {
        renderTable(this.state.materialIssueList);
      });
    });

    // Render Material Issue DataTable
    const renderTable = (data) => {
      new DataTable({
        containerId: 'gs-material-issue-table-container',
        tableTitle: `Material Issue Records (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showMaterialIssueDetailModal(row);
        },
        columns: [
          // 1. S No (Clickable)
          {
            field: 'sNo',
            header: 'S No',
            sortable: true,
            render: (v, r, idx) => `
              <span class="text-[#00A4B7] font-semibold hover:underline cursor-pointer select-none" title="Click to view Material Issue details">${idx + 1}</span>
            `
          },
          // 2. Doc No
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap" title="Click to view details">${v}</span>`
          },
          // 3. Date
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>`
          },
          // 4. Department
          {
            field: 'department',
            header: 'Department',
            sortable: true,
            render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 5. Location
          {
            field: 'location',
            header: 'Location',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>`
          },
          // 6. Items Issued
          {
            field: 'items',
            header: 'Items',
            sortable: false,
            render: (v, r) => {
              const count = r.items?.length || 0;
              return `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD] whitespace-nowrap">${count} Item(s)</span>`;
            }
          },
          // 7. Total Value
          {
            field: 'totalValue',
            header: 'Total Value',
            sortable: true,
            render: (v, r) => {
              const total = (r.items || []).reduce((acc, it) => acc + (it.invoiceAmount || it.baseValue || 0), 0);
              return `<span class="font-mono font-bold text-xs text-[#00875A] whitespace-nowrap">₹${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>`;
            }
          }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'View',
            title: 'View Issue Details',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => {
              this.showMaterialIssueDetailModal(row);
            }
          },
          {
            label: 'Edit',
            title: 'Edit Material Issue',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditMaterialIssueModal(row, () => {
                renderTable(this.state.materialIssueList);
              });
            }
          },
          {
            label: 'Delete',
            title: 'Delete Material Issue',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Material Issue',
                message: `Are you sure you want to delete Material Issue <strong>${row.docNo}</strong> for <strong>${row.department}</strong>? This action cannot be undone.`,
                confirmText: 'Delete Issue',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.materialIssueList.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.materialIssueList.splice(idx, 1);
                    renderTable(this.state.materialIssueList);
                    Toast.show(`Material Issue ${row.docNo} deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.materialIssueList);

    // Search & Filter Handlers
    container.querySelector('#issue-flt-search-btn')?.addEventListener('click', () => {
      const q = container.querySelector('#issue-flt-search')?.value?.trim().toLowerCase();
      const dept = container.querySelector('#issue-flt-dept')?.value;
      const fromVal = container.querySelector('#issue-flt-from')?.value;
      const toVal = container.querySelector('#issue-flt-to')?.value;

      const filtered = this.state.materialIssueList.filter(it => {
        if (q) {
          const matchDoc = it.docNo?.toLowerCase().includes(q);
          const matchNarr = it.narration?.toLowerCase().includes(q);
          const matchItem = (it.items || []).some(x => x.item?.toLowerCase().includes(q));
          if (!matchDoc && !matchNarr && !matchItem) return false;
        }
        if (dept && dept !== 'ALL' && it.department !== dept) return false;
        if (fromVal && it.date < fromVal) return false;
        if (toVal && it.date > toVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching Material Issue(s)`, 'info');
    });

    // Reset Handler
    container.querySelector('#issue-flt-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#issue-flt-search').value = '';
      container.querySelector('#issue-flt-dept').value = 'ALL';
      container.querySelector('#issue-flt-from').value = '2026-10-01';
      container.querySelector('#issue-flt-to').value = todayStr;
      renderTable(this.state.materialIssueList);
      Toast.show('Material Issue filters reset to default', 'info');
    });

    // Toggle Filters Accordion
    const filterBody = container.querySelector('#issue-flt-body');
    const toggleIcon = container.querySelector('#issue-flt-toggle-icon');
    container.querySelector('#issue-flt-toggle-btn')?.addEventListener('click', () => {
      if (filterBody) {
        filterBody.classList.toggle('hidden');
        if (toggleIcon) {
          toggleIcon.classList.toggle('rotate-180');
        }
      }
    });
  },

  // 1e. ADD MATERIAL ISSUE (GS) MODAL POPUP
  showAddMaterialIssueModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextNum = (this.state.materialIssueList?.length || 0) + 1;
    const defaultDocNo = `ISS-GS-2026-${String(30 + nextNum).padStart(4, '0')}`;

    let modalStagedIssueItems = [
      {
        item: 'Nitrile Food-Grade Gloves (Blue, L)',
        uom: 'Box',
        availableQty: 15,
        itemPrice: 280.00,
        batch: `BAT-${new Date().getFullYear()}-09A`,
        quantity: 50,
        baseValue: 14000.00,
        gstPercent: 18,
        invoiceAmount: 16520.00,
        purpose: 'Shrimp peeling table crew hygiene',
        attachment: '',
        remarks: 'Shift Incharge indent'
      }
    ];

    Modal.open({
      title: 'Add Material Issue (GS)',
      size: 'full',
      confirmActions: false,
      content: `
        <form id="modal-add-issue-form" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: Header Information -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Issue Header Information</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <!-- Form Input Fields: DOC NO, DATE, LOCATION, DEPARTMENT, NARRATION -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              <!-- 1. DOC NO -->
              <div>
                <label for="missue-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="missue-docno" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 2. DATE -->
              <div>
                <label for="missue-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="missue-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 3. LOCATION -->
              <div>
                <label for="missue-loc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">LOCATION <span class="text-[#DE350B]">*</span></label>
                <select id="missue-loc" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Main Store Rack A-2" selected>Main Store Rack A-2</option>
                  <option value="Main Store Rack B-1">Main Store Rack B-1</option>
                  <option value="Coldstore Hub B">Coldstore Hub B</option>
                  <option value="Engineering Bay C">Engineering Bay C</option>
                  <option value="QC Lab Storage">QC Lab Storage</option>
                  <option value="Packaging Store Bay 1">Packaging Store Bay 1</option>
                </select>
              </div>

              <!-- 4. DEPARTMENT -->
              <div>
                <label for="missue-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-[#DE350B]">*</span></label>
                <select id="missue-dept" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Processing Unit-5" selected>Processing Unit-5</option>
                  <option value="Coldstore Hub">Coldstore Hub</option>
                  <option value="Engineering & Maintenance">Engineering &amp; Maintenance</option>
                  <option value="Quality Control Lab">Quality Control Lab</option>
                  <option value="Pre-Processing Unit">Pre-Processing Unit</option>
                  <option value="Administration & Safety">Administration &amp; Safety</option>
                </select>
              </div>

              <!-- 5. NARRATION (Takes full 4 columns) -->
              <div class="sm:col-span-2 md:col-span-4">
                <label for="missue-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="missue-narration" placeholder="Enter material issue purpose / requisition notes..." value="Store material consumption issue against approved departmental indent" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Work Flow - Item Details -->
          <div class="pt-2 border-t border-[#DFE1E6]">
            <div class="flex items-center justify-between pb-2 mb-3">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Work Flow - Item Details</h4>
              </div>
              <span id="modal-issue-items-count" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                ${modalStagedIssueItems.length} Item(s) in Issue
              </span>
            </div>

            <!-- Item Input Grid Card (4-Column Layout) -->
            <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- Row 1 -->
                <!-- 1. Item (Span 2) -->
                <div class="sm:col-span-2 md:col-span-2">
                  <label for="missue-item-name" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="missue-item-name" placeholder="Item name or specification..." value="Nitrile Food-Grade Gloves (Blue, L)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 2. UoM (Col 3) -->
                <div>
                  <label for="missue-item-uom" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UoM <span class="text-[#DE350B]">*</span></label>
                  <select id="missue-item-uom" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
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

                <!-- 3. Available Qty (Col 4) -->
                <div>
                  <label for="missue-avail-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAILABLE QTY</label>
                  <input type="number" id="missue-avail-qty" value="15" min="0" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" readonly />
                </div>

                <!-- Row 2 -->
                <!-- 4. Batch (Col 1) -->
                <div>
                  <label for="missue-batch" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BATCH <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="missue-batch" placeholder="Batch / Lot #" value="BAT-${new Date().getFullYear()}-09A" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 5. Quantity (Col 2) -->
                <div>
                  <label for="missue-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">QUANTITY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="missue-qty" value="50" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 6. Item Price (Col 3) -->
                <div>
                  <label for="missue-price" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM PRICE (₹)</label>
                  <input type="number" id="missue-price" value="280.00" min="0" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 7. Base Value (Col 4, Auto calculated: Quantity * Price) -->
                <div>
                  <label for="missue-base-val" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BASE VALUE (₹)</label>
                  <input type="text" id="missue-base-val" value="14000.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- Row 3 -->
                <!-- 8. GST% (Col 1) -->
                <div>
                  <label for="missue-gst-pct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST %</label>
                  <select id="missue-gst-pct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="0">0%</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18" selected>18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                <!-- 9. Invoice Amount (Col 2, Auto calculated: Base Value + Tax) -->
                <div>
                  <label for="missue-inv-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE AMOUNT (₹)</label>
                  <input type="text" id="missue-inv-amt" value="16520.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 10. Purpose (Span 2) -->
                <div class="sm:col-span-2 md:col-span-2">
                  <label for="missue-purpose" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PURPOSE</label>
                  <input type="text" id="missue-purpose" placeholder="Operational purpose..." value="Shrimp peeling table crew hygiene" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- Row 4 -->
                <!-- 11. Attachment (Col 1) -->
                <div>
                  <label for="missue-attach" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ATTACHMENT</label>
                  <input type="file" id="missue-attach" class="w-full text-[11px] px-2 py-1 bg-white border border-[#DFE1E6] rounded text-[#5E6C84] focus:outline-none focus:border-[#00A4B7] file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-[#E0F2FE] file:text-[#0284C7] cursor-pointer" />
                </div>

                <!-- 12. Remarks (Span 2) -->
                <div class="sm:col-span-2 md:col-span-2">
                  <label for="missue-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
                  <input type="text" id="missue-remarks" placeholder="Optional notes / issue remarks..." value="Shift Incharge indent" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 13. Action: Add Item Button (Col 4) -->
                <div>
                  <label class="block text-[11px] font-bold text-transparent uppercase tracking-wider mb-1 select-none">&nbsp;</label>
                  <button type="button" id="modal-issue-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged Material Issue Items Table -->
            <div class="mt-3 overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3">Batch</th>
                    <th class="py-2.5 px-3 text-right">Quantity</th>
                    <th class="py-2.5 px-3 text-right">Item Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">GST%</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amount</th>
                    <th class="py-2.5 px-3">Purpose</th>
                    <th class="py-2.5 px-3">Attachment</th>
                    <th class="py-2.5 px-3">Remarks</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="modal-issue-staged-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Material Issue',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const docNo = modalRoot.querySelector('#missue-docno')?.value?.trim();
            const date = modalRoot.querySelector('#missue-date')?.value;
            const location = modalRoot.querySelector('#missue-loc')?.value;
            const department = modalRoot.querySelector('#missue-dept')?.value;
            const narration = modalRoot.querySelector('#missue-narration')?.value?.trim();

            if (!docNo) {
              Toast.show('Please enter a valid DOC NO.', 'warning');
              modalRoot.querySelector('#missue-docno')?.focus();
              return;
            }
            if (modalStagedIssueItems.length === 0) {
              Toast.show('Please add at least one item to the Material Issue.', 'warning');
              return;
            }

            // Confirmation Modal Popup
            Modal.confirm({
              title: 'Confirm Save Material Issue',
              message: `Are you sure you want to save Material Issue <strong>${docNo}</strong> for <strong>${department}</strong> (${location}) with <strong>${modalStagedIssueItems.length} item(s)</strong>?`,
              confirmText: 'Save Material Issue',
              onConfirm: () => {
                const newIssue = {
                  id: (this.state.materialIssueList?.length || 0) + 1,
                  docNo,
                  date,
                  location,
                  department,
                  narration,
                  items: [...modalStagedIssueItems]
                };

                this.state.materialIssueList.unshift(newIssue);
                Modal.close();
                Toast.show(`Material Issue ${docNo} saved successfully!`, 'success');

                if (typeof onSuccess === 'function') {
                  onSuccess();
                }
              }
            });
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    // Calculation logic
    const recalcIssueItemInputs = () => {
      const qty = parseInt(modalRoot.querySelector('#missue-qty')?.value, 10) || 0;
      const price = parseFloat(modalRoot.querySelector('#missue-price')?.value) || 0;
      const gstPct = parseFloat(modalRoot.querySelector('#missue-gst-pct')?.value) || 0;

      const baseVal = qty * price;
      const invAmt = baseVal + (baseVal * (gstPct / 100));

      const baseValEl = modalRoot.querySelector('#missue-base-val');
      const invAmtEl = modalRoot.querySelector('#missue-inv-amt');

      if (baseValEl) baseValEl.value = baseVal.toFixed(2);
      if (invAmtEl) invAmtEl.value = invAmt.toFixed(2);
    };

    ['#missue-qty', '#missue-price', '#missue-gst-pct'].forEach(sel => {
      modalRoot.querySelector(sel)?.addEventListener('input', recalcIssueItemInputs);
      modalRoot.querySelector(sel)?.addEventListener('change', recalcIssueItemInputs);
    });

    // Render Staged Items in Modal
    const renderModalStagedIssueItems = () => {
      const tbody = modalRoot.querySelector('#modal-issue-staged-tbody');
      const countBadge = modalRoot.querySelector('#modal-issue-items-count');
      if (!tbody) return;

      if (countBadge) countBadge.textContent = `${modalStagedIssueItems.length} Item(s) in Issue`;

      if (modalStagedIssueItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="12" class="text-center py-4 text-xs text-[#94A3B8] italic">No items staged yet. Fill fields above and click "Add Item".</td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = modalStagedIssueItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
          <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
          <td class="py-2.5 px-3 font-mono text-xs font-semibold text-[#172B4D]">${it.batch}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.quantity}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.itemPrice).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">₹${Number(it.baseValue).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">₹${Number(it.invoiceAmount).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.purpose || '-'}</td>
          <td class="py-2.5 px-3">
            ${it.attachment ? `
              <span class="inline-flex items-center gap-1 text-[11px] font-mono text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
                ${it.attachment}
              </span>
            ` : '<span class="text-[#94A3B8] italic">None</span>'}
          </td>
          <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.remarks || '-'}</td>
          <td class="py-2.5 px-3 text-center">
            <button type="button" data-remove-idx="${idx}" class="modal-issue-remove-btn w-6 h-6 rounded-full hover:bg-[#FFEBE6] text-[#DE350B] inline-flex items-center justify-center transition-colors cursor-pointer" title="Remove Item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.modal-issue-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rIdx = parseInt(btn.dataset.removeIdx, 10);
          modalStagedIssueItems.splice(rIdx, 1);
          renderModalStagedIssueItems();
        });
      });
    };

    renderModalStagedIssueItems();

    // Add item click handler
    modalRoot.querySelector('#modal-issue-btn-add-item')?.addEventListener('click', () => {
      const item = modalRoot.querySelector('#missue-item-name')?.value?.trim();
      const uom = modalRoot.querySelector('#missue-item-uom')?.value || 'Nos';
      const availableQty = parseInt(modalRoot.querySelector('#missue-avail-qty')?.value, 10) || 0;
      const batch = modalRoot.querySelector('#missue-batch')?.value?.trim() || `BAT-${new Date().getFullYear()}-01`;
      const quantity = parseInt(modalRoot.querySelector('#missue-qty')?.value, 10) || 0;
      const itemPrice = parseFloat(modalRoot.querySelector('#missue-price')?.value) || 0;
      const baseValue = quantity * itemPrice;
      const gstPercent = parseFloat(modalRoot.querySelector('#missue-gst-pct')?.value) || 0;
      const invoiceAmount = baseValue + (baseValue * (gstPercent / 100));
      const purpose = modalRoot.querySelector('#missue-purpose')?.value?.trim() || '';
      const attachInput = modalRoot.querySelector('#missue-attach');
      const attachment = attachInput?.files && attachInput.files.length > 0 ? attachInput.files[0].name : '';
      const remarks = modalRoot.querySelector('#missue-remarks')?.value?.trim() || '';

      if (!item) {
        Toast.show('Please provide Item name before adding.', 'warning');
        modalRoot.querySelector('#missue-item-name')?.focus();
        return;
      }
      if (quantity <= 0) {
        Toast.show('Issue Quantity must be greater than zero.', 'warning');
        modalRoot.querySelector('#missue-qty')?.focus();
        return;
      }

      modalStagedIssueItems.push({
        item,
        uom,
        availableQty,
        itemPrice,
        batch,
        quantity,
        baseValue,
        gstPercent,
        invoiceAmount,
        purpose,
        attachment,
        remarks
      });

      renderModalStagedIssueItems();
      Toast.show(`Item "${item}" added to Material Issue.`, 'info');
    });
  },

  // 1f. MATERIAL ISSUE (GS) DETAILS MODAL POPUP
  showMaterialIssueDetailModal(row) {
    if (!row) return;

    const totalBase = (row.items || []).reduce((acc, it) => acc + (it.baseValue || 0), 0);
    const totalInv = (row.items || []).reduce((acc, it) => acc + (it.invoiceAmount || it.baseValue || 0), 0);
    const totalQty = (row.items || []).reduce((acc, it) => acc + (it.quantity || 0), 0);

    Modal.open({
      title: `Material Issue Details: ${row.docNo}`,
      size: 'full',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Overview Cards -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 bg-[#F8FAFC] border border-[#DFE1E6] p-3.5 rounded-xl shadow-2xs">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DOC NO</span>
              <span class="font-mono font-bold text-sm text-[#00A4B7]">${row.docNo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DATE</span>
              <span class="font-mono text-xs text-[#172B4D]">${row.date}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">LOCATION</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.location}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DEPARTMENT</span>
              <span class="font-semibold text-xs text-[#00A4B7]">${row.department}</span>
            </div>
          </div>

          ${row.narration ? `
            <div class="p-3 bg-white border border-[#DFE1E6] rounded-xl shadow-2xs">
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">NARRATION</span>
              <p class="text-xs text-[#172B4D]">${row.narration}</p>
            </div>
          ` : ''}

          <!-- Items Table -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-2">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Issued Items (${row.items?.length || 0})
              </h4>
              <div class="flex items-center gap-3">
                <span class="font-mono text-xs font-semibold text-[#172B4D]">Total Issued Qty: <strong class="text-[#00875A]">${totalQty}</strong></span>
                <span class="font-mono text-xs font-bold text-[#00A4B7]">Total Value: ₹${Number(totalInv).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <div class="overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3">Batch</th>
                    <th class="py-2.5 px-3 text-right">Quantity</th>
                    <th class="py-2.5 px-3 text-right">Item Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">GST%</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amount</th>
                    <th class="py-2.5 px-3">Purpose</th>
                    <th class="py-2.5 px-3">Attachment</th>
                    <th class="py-2.5 px-3">Remarks</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                  ${(row.items || []).map(it => `
                    <tr class="hover:bg-[#F8FAFC] transition-colors">
                      <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
                      <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
                      <td class="py-2.5 px-3 font-mono text-xs font-semibold text-[#172B4D]">${it.batch}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.quantity}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.itemPrice).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">₹${Number(it.baseValue).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">₹${Number(it.invoiceAmount).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.purpose || '-'}</td>
                      <td class="py-2.5 px-3">
                        ${it.attachment ? `
                          <span class="inline-flex items-center gap-1 text-[11px] font-mono text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
                            ${it.attachment}
                          </span>
                        ` : '<span class="text-[#94A3B8] italic">None</span>'}
                      </td>
                      <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.remarks || '-'}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Close',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Print Issue Slip',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            Toast.show(`Printing Material Issue Slip ${row.docNo}...`, 'success');
          }
        }
      ]
    });
  },

  // 1g. EDIT MATERIAL ISSUE (GS) MODAL POPUP
  showEditMaterialIssueModal(row, onSuccess) {
    Modal.open({
      title: `Edit Material Issue: ${row.docNo}`,
      size: 'lg',
      confirmActions: false,
      content: `
        <form id="form-edit-issue" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Issue Header Information</h4>
            </div>
            <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
              <input type="text" name="docNo" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" name="date" value="${row.date}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()">
              </div>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">LOCATION <span class="text-[#DE350B]">*</span></label>
              <select name="location" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Main Store Rack A-2" ${row.location === 'Main Store Rack A-2' ? 'selected' : ''}>Main Store Rack A-2</option>
                <option value="Main Store Rack B-1" ${row.location === 'Main Store Rack B-1' ? 'selected' : ''}>Main Store Rack B-1</option>
                <option value="Coldstore Hub B" ${row.location === 'Coldstore Hub B' ? 'selected' : ''}>Coldstore Hub B</option>
                <option value="Engineering Bay C" ${row.location === 'Engineering Bay C' ? 'selected' : ''}>Engineering Bay C</option>
                <option value="QC Lab Storage" ${row.location === 'QC Lab Storage' ? 'selected' : ''}>QC Lab Storage</option>
                <option value="Packaging Store Bay 1" ${row.location === 'Packaging Store Bay 1' ? 'selected' : ''}>Packaging Store Bay 1</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-[#DE350B]">*</span></label>
              <select name="department" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Processing Unit-5" ${row.department === 'Processing Unit-5' ? 'selected' : ''}>Processing Unit-5</option>
                <option value="Coldstore Hub" ${row.department === 'Coldstore Hub' ? 'selected' : ''}>Coldstore Hub</option>
                <option value="Engineering & Maintenance" ${row.department === 'Engineering & Maintenance' ? 'selected' : ''}>Engineering &amp; Maintenance</option>
                <option value="Quality Control Lab" ${row.department === 'Quality Control Lab' ? 'selected' : ''}>Quality Control Lab</option>
                <option value="Pre-Processing Unit" ${row.department === 'Pre-Processing Unit' ? 'selected' : ''}>Pre-Processing Unit</option>
                <option value="Administration & Safety" ${row.department === 'Administration & Safety' ? 'selected' : ''}>Administration &amp; Safety</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
              <textarea name="narration" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${row.narration || ''}</textarea>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Update Material Issue',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: (modal) => {
            const form = document.getElementById('form-edit-issue');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);

            Modal.confirm({
              title: 'Confirm Update Material Issue',
              message: `Are you sure you want to update Material Issue <strong>${row.docNo}</strong>?`,
              confirmText: 'Update Issue',
              onConfirm: () => {
                row.date = fd.get('date');
                row.location = fd.get('location');
                row.department = fd.get('department');
                row.narration = fd.get('narration');

                modal.close();
                Toast.show(`Material Issue ${row.docNo} updated successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
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
