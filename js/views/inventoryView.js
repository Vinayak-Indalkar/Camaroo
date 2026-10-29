// Miledeep Enterprise ERP — Inventory & Stores Module Views
// Submenus: General Store (IndentPage), Packing Material (pm-proforma-invoice), Inventory (PorformaRegister)

import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';
import { TabBar } from '../components/tabBar.js';

export const InventoryView = {
  // Local state for interactive operations
  state: {
    // 1. General Store Indents
    indentsList: [
      {
        id: 1,
        indentNo: 'IND-GS-2026-0041',
        indentDate: '2026-10-28',
        department: 'Processing Unit-5',
        requestedBy: 'K. Venkatesh (Line Supervisor)',
        category: 'Consumables & Hygiene',
        itemDescription: 'Nitrile Food-Grade Gloves (Blue, L) - Box of 100',
        qty: 150,
        unit: 'Boxes',
        urgency: 'High',
        requiredBy: '2026-11-02',
        status: 'Approved',
        approver: 'M. Ramesh (Plant Head)',
        justification: 'Daily processing line peeling and grading hygiene requirement.'
      },
      {
        id: 2,
        indentNo: 'IND-GS-2026-0042',
        indentDate: '2026-10-28',
        department: 'Coldstore Hub',
        requestedBy: 'M. Sriman (Coldstore Incharge)',
        category: 'Packaging Aids',
        itemDescription: 'Thermal Transfer Barcode Ribbon (110mm x 300m Resin)',
        qty: 40,
        unit: 'Rolls',
        urgency: 'Normal',
        requiredBy: '2026-11-05',
        status: 'In Procurement',
        approver: 'M. Ramesh (Plant Head)',
        justification: 'Freezer pallet slotting and barcode pallet tagging ribbon stock refill.'
      },
      {
        id: 3,
        indentNo: 'IND-GS-2026-0043',
        indentDate: '2026-10-27',
        department: 'Quality Control Lab',
        requestedBy: 'Dr. Anita Rao (QC Officer)',
        category: 'Lab Reagents',
        itemDescription: 'Chlorine Residual & Ozone Test Kits (0.1 - 5.0 ppm)',
        qty: 25,
        unit: 'Kits',
        urgency: 'Urgent',
        requiredBy: '2026-10-30',
        status: 'Approved',
        approver: 'S. Nageswara Rao (VP Ops)',
        justification: 'Mandatory HACCP water treatment daily screen verification.'
      },
      {
        id: 4,
        indentNo: 'IND-GS-2026-0044',
        indentDate: '2026-10-27',
        department: 'Engineering & Maintenance',
        requestedBy: 'P. Prasad (Chief Engineer)',
        category: 'Spare Parts',
        itemDescription: 'Contact Plate Freezer Door Neoprene Gasket Seals (8m strip)',
        qty: 12,
        unit: 'Sets',
        urgency: 'High',
        requiredBy: '2026-11-04',
        status: 'Pending Approval',
        approver: 'Pending Approval',
        justification: 'Prevent thermal leakage and compressor load optimization on Plate Freezer #3.'
      },
      {
        id: 5,
        indentNo: 'IND-GS-2026-0045',
        indentDate: '2026-10-26',
        department: 'Administration & Safety',
        requestedBy: 'T. Bhavani (Safety Officer)',
        category: 'PPE & Safety',
        itemDescription: 'Sub-Zero Thermal Coldstore Parka Jackets & Safety Boots (Size 9-11)',
        qty: 30,
        unit: 'Pairs',
        urgency: 'Normal',
        requiredBy: '2026-11-10',
        status: 'In Procurement',
        approver: 'M. Ramesh (Plant Head)',
        justification: 'New coldstore night-shift warehouse crew winter protective gear.'
      },
      {
        id: 6,
        indentNo: 'IND-GS-2026-0046',
        indentDate: '2026-10-25',
        department: 'Pre-Processing Unit',
        requestedBy: 'Ch. Appa Rao (PPU Foreman)',
        category: 'Hardware & Tools',
        itemDescription: 'Stainless Steel SS316 Perforated Shrimp Handling Baskets (20kg)',
        qty: 60,
        unit: 'Nos',
        urgency: 'Normal',
        requiredBy: '2026-11-08',
        status: 'Approved',
        approver: 'M. Ramesh (Plant Head)',
        justification: 'Deheading shed intake and washing tank sorting replacement.'
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
      },
      {
        id: 4,
        piNumber: 'PI-PM-2026-0894',
        piDate: '2026-10-25',
        supplierName: 'Delta Seals & Tapes Corp',
        materialCategory: 'Strapping & Tapes',
        itemDescription: 'Heat-Sealing PP Strapping Rolls (12mm x 3000m, Yellow)',
        quantity: 150,
        unit: 'Rolls',
        rate: 1650.00,
        grossAmount: 247500,
        taxAmount: 44550,
        totalAmount: 292050,
        deliveryPlant: 'Coldstore Hub',
        paymentTerms: 'Net 15 Days',
        status: 'Approved',
        deliveryStatus: 'Delivered & Verified'
      },
      {
        id: 5,
        piNumber: 'PI-PM-2026-0895',
        piDate: '2026-10-24',
        supplierName: 'Sri Venkateswara Packaging Ltd',
        materialCategory: 'Master Cartons',
        itemDescription: '5-Ply Plain Brown Outer Shippers (20 LBS Block Frozen)',
        quantity: 20000,
        unit: 'MCs',
        rate: 49.00,
        grossAmount: 980000,
        taxAmount: 117600,
        totalAmount: 1097600,
        deliveryPlant: 'DFL Unit-5 (JPT)',
        paymentTerms: '30 Days from Inward',
        status: 'Completed',
        deliveryStatus: 'Delivered & Verified'
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
        auditStatus: 'Verified',
        auditor: 'K. Rama Rao'
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
        auditStatus: 'Verified',
        auditor: 'K. Rama Rao'
      },
      {
        id: 3,
        regCode: 'REG-INV-2026-1043',
        refDoc: 'IND-GS-2026-0041',
        regDate: '2026-10-27',
        supplier: 'Devi Safety Aids & Industrial Supplies',
        category: 'General Store',
        itemDescription: 'Nitrile Food-Grade Gloves (Blue, L)',
        storeLocation: 'Processing Supply Shed #2',
        quantity: 150,
        unit: 'Boxes',
        rate: 280.00,
        taxAmount: 7560,
        totalInvoiced: 49560,
        stockStatus: 'Issued to Production',
        auditStatus: 'Verified',
        auditor: 'Ch. Subrahmanyam'
      },
      {
        id: 4,
        regCode: 'REG-INV-2026-1044',
        refDoc: 'PI-PM-2026-0894',
        regDate: '2026-10-26',
        supplier: 'Delta Seals & Tapes Corp',
        category: 'Packing Material',
        itemDescription: 'Heat-Sealing PP Strapping Rolls (12mm x 3000m)',
        storeLocation: 'Coldstore Hub Bay D-1',
        quantity: 150,
        unit: 'Rolls',
        rate: 1650.00,
        taxAmount: 44550,
        totalInvoiced: 292050,
        stockStatus: 'In Stock',
        auditStatus: 'Verified',
        auditor: 'K. Rama Rao'
      },
      {
        id: 5,
        regCode: 'REG-INV-2026-1045',
        refDoc: 'IND-GS-2026-0043',
        regDate: '2026-10-26',
        supplier: 'Bio-Chem Scientific Instruments India',
        category: 'Lab Reagents & Chemicals',
        itemDescription: 'Chlorine Residual & Ozone Test Kits',
        storeLocation: 'QC Chemistry Lab Rack L-2',
        quantity: 25,
        unit: 'Kits',
        rate: 1450.00,
        taxAmount: 6525,
        totalInvoiced: 42775,
        stockStatus: 'Reserved',
        auditStatus: 'Pending Audit',
        auditor: 'Under Review'
      }
    ]
  },

  // Main Entry Point
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

    if (cleanHash.includes('pm-proforma-invoice') || cleanHash.includes('packing-material')) {
      this.renderPackingMaterialProforma(subContainer);
    } else if (cleanHash.includes('proforma-register') || cleanHash.includes('inventory/inventory')) {
      this.renderInventoryProformaRegister(subContainer);
    } else {
      // Default to General Store Indent Page
      this.renderGeneralStoreIndentPage(subContainer);
    }
  },

  // 1. GENERAL STORE: INDENT PAGE
  renderGeneralStoreIndentPage(container) {
    const fullList = [...this.state.indentsList];
    const approvedCount = fullList.filter(i => i.status === 'Approved').length;
    const pendingCount = fullList.filter(i => i.status === 'Pending Approval').length;
    const procCount = fullList.filter(i => i.status === 'In Procurement').length;

    container.innerHTML = `
      <!-- Top Action Bar -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">General Store — Indent Page</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Manage departmental stock indents, store requisitions, and purchase authorizations</p>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="btn-create-indent" class="btn-primary border-0 px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Create Indent</span>
          </button>
        </div>
      </div>

      <!-- KPI Summary Cards -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total Indents</span>
          <div class="text-xl font-extrabold text-[#172B4D] mt-1 font-mono">${fullList.length}</div>
          <span class="text-[10px] text-[#0284C7] font-semibold">Active Requisitions</span>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Pending Approval</span>
          <div class="text-xl font-extrabold text-[#D97706] mt-1 font-mono">${pendingCount}</div>
          <span class="text-[10px] text-[#D97706] font-semibold">Awaiting Authorization</span>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Approved Indents</span>
          <div class="text-xl font-extrabold text-[#00875A] mt-1 font-mono">${approvedCount}</div>
          <span class="text-[10px] text-[#00875A] font-semibold">Ready for PO / Issue</span>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">In Procurement</span>
          <div class="text-xl font-extrabold text-[#00A4B7] mt-1 font-mono">${procCount}</div>
          <span class="text-[10px] text-[#00A4B7] font-semibold">Under Purchase Order</span>
        </div>
      </div>

      <!-- Search & Filters Bar -->
      <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
        <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#F1F5F9]">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Filter Indent Requisitions</h3>
          </div>
          <button type="button" id="gs-filter-reset-btn" class="w-7 h-7 rounded-full border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#475569] flex items-center justify-center transition-colors cursor-pointer" title="Reset Filters">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE FROM</label>
            <input type="date" id="gs-filter-date" value="2026-10-25" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT</label>
            <select id="gs-filter-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]">
              <option value="ALL">All Departments</option>
              <option value="Processing Unit-5">Processing Unit-5</option>
              <option value="Coldstore Hub">Coldstore Hub</option>
              <option value="Quality Control Lab">Quality Control Lab</option>
              <option value="Engineering & Maintenance">Engineering & Maintenance</option>
              <option value="Pre-Processing Unit">Pre-Processing Unit</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">URGENCY</label>
            <select id="gs-filter-urgency" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]">
              <option value="ALL">All Urgencies</option>
              <option value="Urgent">Urgent</option>
              <option value="High">High</option>
              <option value="Normal">Normal</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
            <select id="gs-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]">
              <option value="ALL">All Statuses</option>
              <option value="Approved">Approved</option>
              <option value="Pending Approval">Pending Approval</option>
              <option value="In Procurement">In Procurement</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div class="flex items-end">
            <button type="button" id="gs-filter-search-btn" class="w-full btn-primary px-4 py-1.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search Indents</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Data Table Container -->
      <div id="gs-indents-table-container"></div>
    `;

    const renderTable = (data) => {
      new DataTable({
        containerId: 'gs-indents-table-container',
        tableTitle: `General Store Indent Records (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          { field: 'sNo', header: 'S.No', render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>` },
          { field: 'indentNo', header: 'Indent No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>` },
          { field: 'indentDate', header: 'Date', sortable: true, render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium">${v}</span>` },
          { field: 'department', header: 'Department', sortable: true, render: v => `<span class="font-medium text-xs text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'category', header: 'Category', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6] whitespace-nowrap">${v}</span>` },
          { field: 'itemDescription', header: 'Item Description', render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'qty', header: 'Qty', sortable: true, render: (v, r) => `<span class="font-mono font-bold text-xs text-[#172B4D] whitespace-nowrap">${v} ${r.unit}</span>` },
          {
            field: 'urgency',
            header: 'Urgency',
            sortable: true,
            render: v => {
              if (v === 'Urgent') return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFEBE6] text-[#BF2600] border border-[#FFBDAD]"><span class="w-1.5 h-1.5 rounded-full bg-[#DE350B]"></span>Urgent</span>`;
              if (v === 'High') return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF0B3] text-[#172B4D] border border-[#FFE380]"><span class="w-1.5 h-1.5 rounded-full bg-[#FFAB00]"></span>High</span>`;
              return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6]">Normal</span>`;
            }
          },
          {
            field: 'status',
            header: 'Status',
            sortable: true,
            render: v => {
              if (v === 'Approved') return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>Approved</span>`;
              if (v === 'Pending Approval') return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF0B3] text-[#172B4D] border border-[#FFE380]"><span class="w-1.5 h-1.5 rounded-full bg-[#FFAB00]"></span>Pending</span>`;
              if (v === 'In Procurement') return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]"><span class="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>In Procurement</span>`;
              return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFEBE6] text-[#BF2600] border border-[#FFBDAD]">Rejected</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Approve Indent',
            icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Approve Store Indent',
                message: `Approve indent <strong>${row.indentNo}</strong> (${row.itemDescription}, Qty: ${row.qty} ${row.unit}) requested by <strong>${row.requestedBy}</strong>?`,
                confirmText: 'Approve Indent',
                onConfirm: () => {
                  row.status = 'Approved';
                  renderTable(fullList);
                  Toast.show(`Indent ${row.indentNo} successfully approved!`, 'success');
                }
              });
            }
          },
          {
            label: 'Reject Indent',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Reject Store Indent',
                message: `Are you sure you want to reject indent <strong>${row.indentNo}</strong> for ${row.department}?`,
                confirmText: 'Reject Indent',
                isDestructive: true,
                onConfirm: () => {
                  row.status = 'Rejected';
                  renderTable(fullList);
                  Toast.show(`Indent ${row.indentNo} marked as Rejected.`, 'error');
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(fullList);

    // Filter Listeners
    container.querySelector('#gs-filter-search-btn')?.addEventListener('click', () => {
      const deptVal = container.querySelector('#gs-filter-dept')?.value;
      const urgVal = container.querySelector('#gs-filter-urgency')?.value;
      const stVal = container.querySelector('#gs-filter-status')?.value;

      const filtered = fullList.filter(it => {
        if (deptVal && deptVal !== 'ALL' && it.department !== deptVal) return false;
        if (urgVal && urgVal !== 'ALL' && it.urgency !== urgVal) return false;
        if (stVal && stVal !== 'ALL' && it.status !== stVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} indent requisitions`, 'info');
    });

    container.querySelector('#gs-filter-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#gs-filter-dept').value = 'ALL';
      container.querySelector('#gs-filter-urgency').value = 'ALL';
      container.querySelector('#gs-filter-status').value = 'ALL';
      renderTable(fullList);
      Toast.show('Indent filters reset to default', 'info');
    });

    // Create Indent Modal
    container.querySelector('#btn-create-indent')?.addEventListener('click', () => {
      this.showCreateIndentModal(() => {
        renderTable(this.state.indentsList);
      });
    });
  },

  // Create Indent Modal
  showCreateIndentModal(onSuccess) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextId = (this.state.indentsList?.length || 0) + 1;
    const nextCode = `IND-GS-2026-${String(nextId).padStart(4, '0')}`;

    Modal.open({
      title: `Create General Store Indent: ${nextCode}`,
      size: 'lg',
      content: `
        <form id="form-create-indent" class="space-y-4 text-xs text-[#172B4D]">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INDENT NUMBER</label>
              <input type="text" name="indentNo" value="${nextCode}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INDENT DATE <span class="text-red-500">*</span></label>
              <input type="date" name="indentDate" value="${todayStr}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-red-500">*</span></label>
              <select name="department" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="Processing Unit-5" selected>Processing Unit-5</option>
                <option value="Coldstore Hub">Coldstore Hub</option>
                <option value="Quality Control Lab">Quality Control Lab</option>
                <option value="Engineering & Maintenance">Engineering & Maintenance</option>
                <option value="Pre-Processing Unit">Pre-Processing Unit</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REQUESTED BY <span class="text-red-500">*</span></label>
              <input type="text" name="requestedBy" value="K. Venkatesh (Line Supervisor)" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM CATEGORY <span class="text-red-500">*</span></label>
              <select name="category" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="Consumables & Hygiene" selected>Consumables & Hygiene</option>
                <option value="Packaging Aids">Packaging Aids</option>
                <option value="Lab Reagents">Lab Reagents</option>
                <option value="Spare Parts">Spare Parts</option>
                <option value="PPE & Safety">PPE & Safety</option>
                <option value="Hardware & Tools">Hardware & Tools</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM DESCRIPTION <span class="text-red-500">*</span></label>
            <input type="text" name="itemDescription" placeholder="Enter item description, make, model or grade..." required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">QUANTITY <span class="text-red-500">*</span></label>
              <input type="number" name="qty" value="100" min="1" step="1" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UOM (UNIT) <span class="text-red-500">*</span></label>
              <select name="unit" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="Boxes" selected>Boxes</option>
                <option value="Nos">Nos</option>
                <option value="Rolls">Rolls</option>
                <option value="Kits">Kits</option>
                <option value="Sets">Sets</option>
                <option value="Pairs">Pairs</option>
                <option value="Ltr">Ltr</option>
                <option value="Kg">Kg</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">URGENCY PRIORITY <span class="text-red-500">*</span></label>
              <select name="urgency" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="Normal">Normal</option>
                <option value="High" selected>High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">OPERATIONAL JUSTIFICATION</label>
            <textarea name="justification" rows="2" placeholder="State operational reason for this store indent..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7]"></textarea>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Submit Indent',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-create-indent');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);
            const indentNo = fd.get('indentNo');
            const itemDesc = fd.get('itemDescription');
            const qty = Number(fd.get('qty') || 1);
            const unit = fd.get('unit');

            Modal.confirm({
              title: 'Confirm Indent Submission',
              message: `Are you sure you want to create store indent <strong>${indentNo}</strong> for <strong>${qty} ${unit}</strong> of <em>${itemDesc}</em>?`,
              confirmText: 'Create Indent',
              onConfirm: () => {
                const newIndent = {
                  id: (this.state.indentsList?.length || 0) + 1,
                  indentNo,
                  indentDate: fd.get('indentDate'),
                  department: fd.get('department'),
                  requestedBy: fd.get('requestedBy'),
                  category: fd.get('category'),
                  itemDescription: itemDesc,
                  qty,
                  unit,
                  urgency: fd.get('urgency'),
                  requiredBy: fd.get('indentDate'),
                  status: 'Pending Approval',
                  approver: 'Pending Authorization',
                  justification: fd.get('justification') || 'Standard departmental stock replenishment.'
                };

                this.state.indentsList.unshift(newIndent);
                modal.close();
                Toast.show(`Store Indent ${indentNo} submitted successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
  },

  // 2. PACKING MATERIAL: PM PROFORMA INVOICE
  renderPackingMaterialProforma(container) {
    const fullList = [...this.state.pmProformaList];
    const totalValue = fullList.reduce((acc, it) => acc + (it.totalAmount || 0), 0);
    const activeCount = fullList.filter(it => it.status === 'Approved' || it.status === 'In Transit').length;
    const completedCount = fullList.filter(it => it.status === 'Completed').length;

    container.innerHTML = `
      <!-- Top Action Bar -->
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
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total PM PIs</span>
          <div class="text-xl font-extrabold text-[#172B4D] mt-1 font-mono">${fullList.length}</div>
          <span class="text-[10px] text-[#0284C7] font-semibold">Vendor Orders</span>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Active Proformas</span>
          <div class="text-xl font-extrabold text-[#00A4B7] mt-1 font-mono">${activeCount}</div>
          <span class="text-[10px] text-[#00A4B7] font-semibold">In Transit / Processing</span>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Completed Inward</span>
          <div class="text-xl font-extrabold text-[#00875A] mt-1 font-mono">${completedCount}</div>
          <span class="text-[10px] text-[#00875A] font-semibold">Delivered &amp; Verified</span>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total Valuation</span>
          <div class="text-xl font-extrabold text-[#172B4D] mt-1 font-mono">₹${(totalValue / 100000).toFixed(2)} L</div>
          <span class="text-[10px] text-[#0284C7] font-semibold">Gross Committed Value</span>
        </div>
      </div>

      <!-- Filter Controls Bar -->
      <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
        <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#F1F5F9]">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Filter PM Proforma Invoices</h3>
          </div>
          <button type="button" id="pm-filter-reset-btn" class="w-7 h-7 rounded-full border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#475569] flex items-center justify-center transition-colors cursor-pointer" title="Reset Filters">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER</label>
            <select id="pm-filter-supplier" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]">
              <option value="ALL">All Suppliers</option>
              <option value="Sri Venkateswara Packaging Ltd">Sri Venkateswara Packaging Ltd</option>
              <option value="Apex Polymers & Films India Ltd">Apex Polymers & Films India Ltd</option>
              <option value="Modern Corrugators Visakhapatnam">Modern Corrugators Visakhapatnam</option>
              <option value="Delta Seals & Tapes Corp">Delta Seals & Tapes Corp</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CATEGORY</label>
            <select id="pm-filter-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]">
              <option value="ALL">All Packaging Categories</option>
              <option value="Master Cartons">Master Cartons</option>
              <option value="Poly Bags">Poly Bags</option>
              <option value="Inner Cartons">Inner Cartons</option>
              <option value="Strapping & Tapes">Strapping & Tapes</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DELIVERY STATUS</label>
            <select id="pm-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]">
              <option value="ALL">All Delivery Statuses</option>
              <option value="In Transit">In Transit</option>
              <option value="Partially Received">Partially Received</option>
              <option value="Under Loading">Under Loading</option>
              <option value="Delivered & Verified">Delivered & Verified</option>
            </select>
          </div>
          <div class="flex items-end">
            <button type="button" id="pm-filter-search-btn" class="w-full btn-primary px-4 py-1.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search PIs</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Data Table Container -->
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
          { field: 'piNumber', header: 'PI Number', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>` },
          { field: 'piDate', header: 'PI Date', sortable: true, render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium">${v}</span>` },
          { field: 'supplierName', header: 'Supplier Name', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'materialCategory', header: 'Category', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E0F2FE] text-[#0284C7] whitespace-nowrap">${v}</span>` },
          { field: 'itemDescription', header: 'Material Description', render: v => `<span class="font-medium text-xs text-[#172B4D]">${v}</span>` },
          { field: 'quantity', header: 'Order Qty', sortable: true, render: (v, r) => `<span class="font-mono font-bold text-xs text-[#172B4D] whitespace-nowrap">${Number(v).toLocaleString()} ${r.unit}</span>` },
          { field: 'rate', header: 'Rate (₹)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84] whitespace-nowrap">₹${Number(v).toFixed(2)}</span>` },
          { field: 'totalAmount', header: 'Total Value (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A] whitespace-nowrap">₹${Number(v).toLocaleString()}</span>` },
          {
            field: 'deliveryStatus',
            header: 'Delivery Status',
            sortable: true,
            render: v => {
              if (v === 'Delivered & Verified') return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>Delivered</span>`;
              if (v === 'In Transit') return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]"><span class="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>In Transit</span>`;
              return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF0B3] text-[#172B4D] border border-[#FFE380]">${v}</span>`;
            }
          }
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
          },
          {
            label: 'Cancel PI',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Cancel Proforma Invoice',
                message: `Are you sure you want to cancel packaging proforma <strong>${row.piNumber}</strong>?`,
                confirmText: 'Cancel PI',
                isDestructive: true,
                onConfirm: () => {
                  row.status = 'Cancelled';
                  row.deliveryStatus = 'Cancelled';
                  renderTable(fullList);
                  Toast.show(`Proforma ${row.piNumber} has been cancelled.`, 'error');
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(fullList);

    // Filter Listeners
    container.querySelector('#pm-filter-search-btn')?.addEventListener('click', () => {
      const supVal = container.querySelector('#pm-filter-supplier')?.value;
      const catVal = container.querySelector('#pm-filter-category')?.value;
      const stVal = container.querySelector('#pm-filter-status')?.value;

      const filtered = fullList.filter(it => {
        if (supVal && supVal !== 'ALL' && it.supplierName !== supVal) return false;
        if (catVal && catVal !== 'ALL' && it.materialCategory !== catVal) return false;
        if (stVal && stVal !== 'ALL' && it.deliveryStatus !== stVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} PM proformas`, 'info');
    });

    container.querySelector('#pm-filter-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#pm-filter-supplier').value = 'ALL';
      container.querySelector('#pm-filter-category').value = 'ALL';
      container.querySelector('#pm-filter-status').value = 'ALL';
      renderTable(fullList);
      Toast.show('PI filters reset to default', 'info');
    });

    // Create PM PI Modal
    container.querySelector('#btn-create-pm-pi')?.addEventListener('click', () => {
      this.showCreatePmPiModal(() => {
        renderTable(this.state.pmProformaList);
      });
    });
  },

  // Create PM PI Modal
  showCreatePmPiModal(onSuccess) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextId = (this.state.pmProformaList?.length || 0) + 1;
    const nextCode = `PI-PM-2026-${String(890 + nextId).padStart(4, '0')}`;

    Modal.open({
      title: `Generate PM Proforma Invoice: ${nextCode}`,
      size: 'lg',
      content: `
        <form id="form-create-pm-pi" class="space-y-4 text-xs text-[#172B4D]">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PI NUMBER</label>
              <input type="text" name="piNumber" value="${nextCode}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PI DATE <span class="text-red-500">*</span></label>
              <input type="date" name="piDate" value="${todayStr}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DESTINATION PLANT <span class="text-red-500">*</span></label>
              <select name="deliveryPlant" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="DFL Unit-5 (JPT)" selected>DFL Unit-5 (JPT)</option>
                <option value="DFL Unit-7 (GNT)">DFL Unit-7 (GNT)</option>
                <option value="Coldstore Hub">Coldstore Hub</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER NAME <span class="text-red-500">*</span></label>
              <select name="supplierName" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="Sri Venkateswara Packaging Ltd" selected>Sri Venkateswara Packaging Ltd</option>
                <option value="Apex Polymers & Films India Ltd">Apex Polymers & Films India Ltd</option>
                <option value="Modern Corrugators Visakhapatnam">Modern Corrugators Visakhapatnam</option>
                <option value="Delta Seals & Tapes Corp">Delta Seals & Tapes Corp</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">MATERIAL CATEGORY <span class="text-red-500">*</span></label>
              <select name="materialCategory" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="Master Cartons" selected>Master Cartons</option>
                <option value="Poly Bags">Poly Bags</option>
                <option value="Inner Cartons">Inner Cartons</option>
                <option value="Strapping & Tapes">Strapping & Tapes</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">MATERIAL SPECIFICATION &amp; DESCRIPTION <span class="text-red-500">*</span></label>
            <input type="text" name="itemDescription" value="7-Ply Heavy-Duty Master Cartons (1 X 10 KGS Export Shippers)" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ORDER QUANTITY <span class="text-red-500">*</span></label>
              <input type="number" name="quantity" value="10000" min="1" step="1" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UNIT RATE (₹) <span class="text-red-500">*</span></label>
              <input type="number" name="rate" value="55.00" min="0.1" step="0.01" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAYMENT TERMS</label>
              <select name="paymentTerms" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="30 Days from Inward" selected>30 Days from Inward</option>
                <option value="Immediate upon QC Approval">Immediate upon QC Approval</option>
                <option value="50% Advance / 50% Inward">50% Advance / 50% Inward</option>
              </select>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Create Proforma',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-create-pm-pi');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);
            const piNumber = fd.get('piNumber');
            const qty = Number(fd.get('quantity') || 0);
            const rate = Number(fd.get('rate') || 0);
            const gross = qty * rate;
            const tax = gross * 0.12;
            const total = gross + tax;

            Modal.confirm({
              title: 'Confirm PM Proforma Generation',
              message: `Generate packaging material proforma <strong>${piNumber}</strong> for <strong>${qty.toLocaleString()} units</strong> totalling <strong>₹${total.toLocaleString()}</strong>?`,
              confirmText: 'Create Proforma',
              onConfirm: () => {
                const newPI = {
                  id: (this.state.pmProformaList?.length || 0) + 1,
                  piNumber,
                  piDate: fd.get('piDate'),
                  supplierName: fd.get('supplierName'),
                  materialCategory: fd.get('materialCategory'),
                  itemDescription: fd.get('itemDescription'),
                  quantity: qty,
                  unit: fd.get('materialCategory') === 'Master Cartons' ? 'MCs' : (fd.get('materialCategory') === 'Poly Bags' ? 'Bags' : 'Rolls'),
                  rate,
                  grossAmount: gross,
                  taxAmount: tax,
                  totalAmount: total,
                  deliveryPlant: fd.get('deliveryPlant'),
                  paymentTerms: fd.get('paymentTerms'),
                  status: 'Approved',
                  deliveryStatus: 'In Transit'
                };

                this.state.pmProformaList.unshift(newPI);
                modal.close();
                Toast.show(`Proforma Invoice ${piNumber} generated successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
  },

  // 3. INVENTORY: PROFORMA REGISTER
  renderInventoryProformaRegister(container) {
    const fullList = [...this.state.proformaRegisterList];
    const totalValuation = fullList.reduce((acc, it) => acc + (it.totalInvoiced || 0), 0);
    const inStockCount = fullList.filter(it => it.stockStatus === 'In Stock').length;
    const verifiedCount = fullList.filter(it => it.auditStatus === 'Verified').length;

    container.innerHTML = `
      <!-- Top Action Bar -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Inventory — Proforma Register</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Central register of proforma records, stock allocations, and valuation ledger</p>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="btn-create-reg-entry" class="btn-primary border-0 px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>New Register Entry</span>
          </button>
        </div>
      </div>

      <!-- KPI Summary Cards -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">In Stock Lots</span>
          <div class="text-xl font-extrabold text-[#00A4B7] mt-1 font-mono">${inStockCount}</div>
          <span class="text-[10px] text-[#00A4B7] font-semibold">Store Bin Allocated</span>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Audited &amp; Verified</span>
          <div class="text-xl font-extrabold text-[#172B4D] mt-1 font-mono">${verifiedCount} / ${fullList.length}</div>
          <span class="text-[10px] text-[#00875A] font-semibold">100% Internal Audit</span>
        </div>
      </div>

      <!-- Filters Bar -->
      <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
        <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#F1F5F9]">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Filter Proforma Register</h3>
          </div>
          <button type="button" id="reg-filter-reset-btn" class="w-7 h-7 rounded-full border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#475569] flex items-center justify-center transition-colors cursor-pointer" title="Reset Filters">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STORE LOCATION</label>
            <select id="reg-filter-location" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]">
              <option value="ALL">All Store Locations</option>
              <option value="Coldstore Packaging Vault #1">Coldstore Packaging Vault #1</option>
              <option value="Central Store Bay C-4">Central Store Bay C-4</option>
              <option value="Processing Supply Shed #2">Processing Supply Shed #2</option>
              <option value="Coldstore Hub Bay D-1">Coldstore Hub Bay D-1</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CATEGORY</label>
            <select id="reg-filter-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]">
              <option value="ALL">All Categories</option>
              <option value="Packing Material">Packing Material</option>
              <option value="General Store">General Store</option>
              <option value="Lab Reagents & Chemicals">Lab Reagents & Chemicals</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STOCK STATUS</label>
            <select id="reg-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] font-semibold text-[#172B4D]">
              <option value="ALL">All Stock Statuses</option>
              <option value="In Stock">In Stock</option>
              <option value="Issued to Production">Issued to Production</option>
              <option value="Reserved">Reserved</option>
            </select>
          </div>
          <div class="flex items-end">
            <button type="button" id="reg-filter-search-btn" class="w-full btn-primary px-4 py-1.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Filter Ledger</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Data Table Container -->
      <div id="proforma-register-table-container"></div>
    `;

    const renderTable = (data) => {
      new DataTable({
        containerId: 'proforma-register-table-container',
        tableTitle: `Proforma Register Ledger (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          { field: 'sNo', header: 'S.No', render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>` },
          { field: 'regCode', header: 'Register Code', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>` },
          { field: 'refDoc', header: 'Ref Doc / PI', sortable: true, render: v => `<span class="font-mono font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'regDate', header: 'Date', sortable: true, render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium">${v}</span>` },
          { field: 'category', header: 'Category', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6] whitespace-nowrap">${v}</span>` },
          { field: 'itemDescription', header: 'Item / Material Description', render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'storeLocation', header: 'Store Location', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>` },
          { field: 'quantity', header: 'Quantity', sortable: true, render: (v, r) => `<span class="font-mono font-bold text-xs text-[#172B4D] whitespace-nowrap">${Number(v).toLocaleString()} ${r.unit}</span>` },
          { field: 'totalInvoiced', header: 'Invoiced (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A] whitespace-nowrap">₹${Number(v).toLocaleString()}</span>` },
          {
            field: 'stockStatus',
            header: 'Stock Status',
            sortable: true,
            render: v => {
              if (v === 'In Stock') return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>In Stock</span>`;
              if (v === 'Issued to Production') return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">Issued</span>`;
              return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF0B3] text-[#172B4D] border border-[#FFE380]">Reserved</span>`;
            }
          },
          {
            field: 'auditStatus',
            header: 'Audit',
            sortable: true,
            render: v => {
              if (v === 'Verified') return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">Verified</span>`;
              return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF0B3] text-[#172B4D] border border-[#FFE380]">Pending</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Verify Audit Record',
            icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Verify Proforma Register Entry',
                message: `Audit and verify stock ledger entry <strong>${row.regCode}</strong> (${row.itemDescription}, Store: ${row.storeLocation})?`,
                confirmText: 'Verify Entry',
                onConfirm: () => {
                  row.auditStatus = 'Verified';
                  renderTable(fullList);
                  Toast.show(`Proforma entry ${row.regCode} marked as Audited & Verified!`, 'success');
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(fullList);

    // Filter Listeners
    container.querySelector('#reg-filter-search-btn')?.addEventListener('click', () => {
      const locVal = container.querySelector('#reg-filter-location')?.value;
      const catVal = container.querySelector('#reg-filter-category')?.value;
      const stVal = container.querySelector('#reg-filter-status')?.value;

      const filtered = fullList.filter(it => {
        if (locVal && locVal !== 'ALL' && it.storeLocation !== locVal) return false;
        if (catVal && catVal !== 'ALL' && it.category !== catVal) return false;
        if (stVal && stVal !== 'ALL' && it.stockStatus !== stVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Filtered ${filtered.length} ledger entries`, 'info');
    });

    container.querySelector('#reg-filter-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#reg-filter-location').value = 'ALL';
      container.querySelector('#reg-filter-category').value = 'ALL';
      container.querySelector('#reg-filter-status').value = 'ALL';
      renderTable(fullList);
      Toast.show('Register filters reset to default', 'info');
    });

    // Create Register Entry Modal
    container.querySelector('#btn-create-reg-entry')?.addEventListener('click', () => {
      this.showCreateRegisterModal(() => {
        renderTable(this.state.proformaRegisterList);
      });
    });
  },

  // Create Register Modal
  showCreateRegisterModal(onSuccess) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextId = (this.state.proformaRegisterList?.length || 0) + 1;
    const nextCode = `REG-INV-2026-${String(1040 + nextId).padStart(4, '0')}`;

    Modal.open({
      title: `New Proforma Register Entry: ${nextCode}`,
      size: 'lg',
      content: `
        <form id="form-create-reg-entry" class="space-y-4 text-xs text-[#172B4D]">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REGISTER CODE</label>
              <input type="text" name="regCode" value="${nextCode}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REF DOCUMENT / PI <span class="text-red-500">*</span></label>
              <input type="text" name="refDoc" value="PI-PM-2026-0899" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REGISTRATION DATE <span class="text-red-500">*</span></label>
              <input type="date" name="regDate" value="${todayStr}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER / VENDOR <span class="text-red-500">*</span></label>
              <input type="text" name="supplier" value="Sri Venkateswara Packaging Ltd" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CATEGORY <span class="text-red-500">*</span></label>
              <select name="category" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="Packing Material" selected>Packing Material</option>
                <option value="General Store">General Store</option>
                <option value="Lab Reagents & Chemicals">Lab Reagents & Chemicals</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM DESCRIPTION <span class="text-red-500">*</span></label>
            <input type="text" name="itemDescription" value="Export Master Cartons 10kg IQF" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STORE LOCATION <span class="text-red-500">*</span></label>
              <select name="storeLocation" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="Coldstore Packaging Vault #1" selected>Coldstore Packaging Vault #1</option>
                <option value="Central Store Bay C-4">Central Store Bay C-4</option>
                <option value="Processing Supply Shed #2">Processing Supply Shed #2</option>
                <option value="Coldstore Hub Bay D-1">Coldstore Hub Bay D-1</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">QUANTITY <span class="text-red-500">*</span></label>
              <input type="number" name="quantity" value="5000" min="1" step="1" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UNIT RATE (₹) <span class="text-red-500">*</span></label>
              <input type="number" name="rate" value="58.50" min="0.1" step="0.01" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-mono font-bold focus:outline-none focus:border-[#00A4B7]">
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Save Register Entry',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-create-reg-entry');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);
            const regCode = fd.get('regCode');
            const qty = Number(fd.get('quantity') || 0);
            const rate = Number(fd.get('rate') || 0);
            const gross = qty * rate;
            const tax = gross * 0.12;
            const total = gross + tax;

            Modal.confirm({
              title: 'Confirm Proforma Register Entry',
              message: `Add proforma register entry <strong>${regCode}</strong> for <strong>${qty.toLocaleString()} units</strong> into <strong>${fd.get('storeLocation')}</strong>?`,
              confirmText: 'Save Entry',
              onConfirm: () => {
                const newEntry = {
                  id: (this.state.proformaRegisterList?.length || 0) + 1,
                  regCode,
                  refDoc: fd.get('refDoc'),
                  regDate: fd.get('regDate'),
                  supplier: fd.get('supplier'),
                  category: fd.get('category'),
                  itemDescription: fd.get('itemDescription'),
                  storeLocation: fd.get('storeLocation'),
                  quantity: qty,
                  unit: 'Nos',
                  rate,
                  taxAmount: tax,
                  totalInvoiced: total,
                  stockStatus: 'In Stock',
                  auditStatus: 'Pending Audit',
                  auditor: 'Pending Audit'
                };

                this.state.proformaRegisterList.unshift(newEntry);
                modal.close();
                Toast.show(`Proforma Register entry ${regCode} saved successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
  }
};
