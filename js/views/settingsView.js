// Master Settings & Customizer View (Forms, Filds Customizer, Query Editor)
// Strictly follows AGENTS.md Enterprise UI Design System rules

import { ERP_DATA } from '../data/mockData.js';
import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';

export const SettingsView = {
  activeTab: 'forms', // 'forms' | 'fields-customizer' | 'query-editor'
  selectedFormCode: 'FORM-PI',

  // Mock Forms dataset derived from Sales & Commercial Architecture
  forms: [
    {
      id: 'FORM-PI',
      code: 'PI-FORM',
      name: 'Proforma Invoice (PI Register)',
      category: 'Orders',
      model: 'dfl_proforma_invoices',
      status: 'Active',
      fieldsCount: 14,
      updatedAt: '2026-10-28 14:30'
    },
    {
      id: 'FORM-CI',
      code: 'CI-FORM',
      name: 'Custom Invoice & Packing List',
      category: 'Orders',
      model: 'dfl_custom_invoices',
      status: 'Active',
      fieldsCount: 16,
      updatedAt: '2026-10-29 11:15'
    },
    {
      id: 'FORM-ISF',
      code: 'ISF-FORM',
      name: 'ISF 10+2 Filing Details',
      category: 'Shipping & Logistics',
      model: 'dfl_isf_filings',
      status: 'Active',
      fieldsCount: 11,
      updatedAt: '2026-10-25 09:40'
    },
    {
      id: 'FORM-SB',
      code: 'SB-FORM',
      name: 'Export Shipping Bill & Clearance',
      category: 'Shipping & Logistics',
      model: 'dfl_shipping_bills',
      status: 'Active',
      fieldsCount: 13,
      updatedAt: '2026-10-27 16:20'
    },
    {
      id: 'FORM-COMM',
      code: 'COMM-FORM',
      name: 'Commercial Invoice (Final Realization)',
      category: 'Commercial',
      model: 'dfl_commercial_invoices',
      status: 'Active',
      fieldsCount: 15,
      updatedAt: '2026-10-30 18:05'
    },
    {
      id: 'FORM-FDA',
      code: 'FDA-FORM',
      name: 'FDA Prior Notice & Compliance',
      category: 'Compliance & Customs',
      model: 'dfl_fda_compliance',
      status: 'Active',
      fieldsCount: 9,
      updatedAt: '2026-10-26 12:10'
    },
    {
      id: 'FORM-CC',
      code: 'CC-FORM',
      name: 'Customs Clearing Agent Entry',
      category: 'Compliance & Customs',
      model: 'dfl_clearing_entries',
      status: 'Active',
      fieldsCount: 12,
      updatedAt: '2026-10-31 15:45'
    },
    {
      id: 'FORM-FC',
      code: 'FC-FORM',
      name: 'Forward Forex Hedging Contract',
      category: 'Payments',
      model: 'dfl_forward_contracts',
      status: 'Active',
      fieldsCount: 10,
      updatedAt: '2026-10-24 10:15'
    }
  ],

  // Mock fields database mapped to form codes
  formFields: {
    'FORM-PI': [
      { id: 'f1', label: 'Buyer Name', key: 'buyer_name', type: 'Dropdown', section: 'Header Information', required: true, isFilter: true },
      { id: 'f2', label: 'Proforma Invoice No', key: 'pi_number', type: 'Text', section: 'Header Information', required: true, isFilter: true },
      { id: 'f3', label: 'PI Date', key: 'pi_date', type: 'Date', section: 'Header Information', required: true, isFilter: false },
      { id: 'f4', label: 'Exporter Entity', key: 'exporter_entity', type: 'Dropdown', section: 'Entities & Facility', required: true, isFilter: true },
      { id: 'f5', label: 'Processing Plant', key: 'processing_plant', type: 'Dropdown', section: 'Entities & Facility', required: true, isFilter: true },
      { id: 'f6', label: 'Product Species', key: 'species', type: 'Dropdown', section: 'Product & Pricing', required: true, isFilter: true },
      { id: 'f7', label: 'Variety & Grade', key: 'grade_variety', type: 'Text', section: 'Product & Pricing', required: true, isFilter: false },
      { id: 'f8', label: 'Quantity (LBS / KG)', key: 'quantity_net', type: 'Number', section: 'Product & Pricing', required: true, isFilter: false },
      { id: 'f9', label: 'Unit Price (USD)', key: 'unit_price_usd', type: 'Currency', section: 'Product & Pricing', required: true, isFilter: false },
      { id: 'f10', label: 'Total Contract Value', key: 'total_value_usd', type: 'Formula', section: 'Product & Pricing', required: true, isFilter: false },
      { id: 'f11', label: 'Port of Loading', key: 'port_of_loading', type: 'Text', section: 'Logistics', required: true, isFilter: false },
      { id: 'f12', label: 'Port of Discharge', key: 'port_of_discharge', type: 'Text', section: 'Logistics', required: true, isFilter: false },
      { id: 'f13', label: 'Payment Terms', key: 'payment_terms', type: 'Dropdown', section: 'Commercial Terms', required: true, isFilter: false },
      { id: 'f14', label: 'Incoterms (CIF/FOB)', key: 'incoterms', type: 'Dropdown', section: 'Commercial Terms', required: true, isFilter: true }
    ],
    'FORM-CI': [
      { id: 'fc1', label: 'Commercial Invoice No', key: 'ci_number', type: 'Text', section: 'Header', required: true, isFilter: true },
      { id: 'fc2', label: 'Invoice Date', key: 'ci_date', type: 'Date', section: 'Header', required: true, isFilter: false },
      { id: 'fc3', label: 'Reference PI Number', key: 'ref_pi_number', type: 'Dropdown', section: 'Header', required: true, isFilter: true },
      { id: 'fc4', label: 'Consignee Name', key: 'consignee_name', type: 'Text', section: 'Consignee & Buyer', required: true, isFilter: true },
      { id: 'fc5', label: 'Total Net Weight (KG)', key: 'total_net_weight', type: 'Number', section: 'Cargo Details', required: true, isFilter: false },
      { id: 'fc6', label: 'Total Gross Weight (KG)', key: 'total_gross_weight', type: 'Number', section: 'Cargo Details', required: true, isFilter: false },
      { id: 'fc7', label: 'Container Number', key: 'container_number', type: 'Text', section: 'Logistics', required: true, isFilter: true },
      { id: 'fc8', label: 'Reefer Seal Number', key: 'seal_number', type: 'Text', section: 'Logistics', required: true, isFilter: false }
    ],
    'FORM-ISF': [
      { id: 'is1', label: 'ISF Transaction No', key: 'isf_number', type: 'Text', section: 'ISF Filing', required: true, isFilter: true },
      { id: 'is2', label: 'Importer of Record (EIN)', key: 'importer_ein', type: 'Text', section: 'Entities', required: true, isFilter: false },
      { id: 'is3', label: 'Consolidator Stuffer', key: 'stuffer_name', type: 'Text', section: 'Entities', required: true, isFilter: false },
      { id: 'is4', label: 'Bill of Lading No', key: 'bl_number', type: 'Text', section: 'Shipping Info', required: true, isFilter: true }
    ],
    'FORM-SB': [
      { id: 'sb1', label: 'Shipping Bill Number', key: 'sb_number', type: 'Text', section: 'Customs Info', required: true, isFilter: true },
      { id: 'sb2', label: 'Customs Filing Date', key: 'sb_date', type: 'Date', section: 'Customs Info', required: true, isFilter: false },
      { id: 'sb3', label: 'FOB Value (INR)', key: 'fob_value_inr', type: 'Currency', section: 'Valuation', required: true, isFilter: false },
      { id: 'sb4', label: 'LEO Date (Let Export)', key: 'leo_date', type: 'Date', section: 'Status', required: false, isFilter: false }
    ],
    'FORM-COMM': [
      { id: 'cm1', label: 'Final Invoice No', key: 'final_inv_no', type: 'Text', section: 'Invoice', required: true, isFilter: true },
      { id: 'cm2', label: 'BL Realization Date', key: 'realization_date', type: 'Date', section: 'Banking', required: false, isFilter: false },
      { id: 'cm3', label: 'Realized USD Amount', key: 'realized_usd', type: 'Currency', section: 'Banking', required: true, isFilter: false }
    ],
    'FORM-FDA': [
      { id: 'fd1', label: 'FDA Prior Notice Confirm No', key: 'fda_pn_number', type: 'Text', section: 'FDA Prior Notice', required: true, isFilter: true },
      { id: 'fd2', label: 'Country of Production', key: 'production_country', type: 'Text', section: 'FDA Prior Notice', required: true, isFilter: false },
      { id: 'fd3', label: 'FDA Facility Registration No', key: 'fda_facility_reg', type: 'Text', section: 'Facility', required: true, isFilter: false }
    ],
    'FORM-CC': [
      { id: 'cc1', label: 'Clearing Entry Reference', key: 'entry_ref', type: 'Text', section: 'Agent Filing', required: true, isFilter: true },
      { id: 'cc2', label: 'Customs Clearing Agent', key: 'agent_name', type: 'Dropdown', section: 'Agent Filing', required: true, isFilter: true },
      { id: 'cc3', label: 'Duty / Cess Paid (INR)', key: 'duty_inr', type: 'Currency', section: 'Payment', required: false, isFilter: false }
    ],
    'FORM-FC': [
      { id: 'fc_1', label: 'Forex Booking Ref', key: 'fc_ref', type: 'Text', section: 'Contract', required: true, isFilter: true },
      { id: 'fc_2', label: 'Authorized Bank', key: 'bank_name', type: 'Dropdown', section: 'Contract', required: true, isFilter: true },
      { id: 'fc_3', label: 'Booked Rate (INR/USD)', key: 'booked_rate', type: 'Number', section: 'Forex Rate', required: true, isFilter: false }
    ]
  },

  render(containerId, tabName = 'forms', resolvedHash = '#/settings/custom/forms') {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Normalize active tab
    if (tabName === 'filds-customizer' || tabName === 'fields-customizer' || tabName === 'field-builder' || tabName === 'custom-fields') {
      this.activeTab = 'fields-customizer';
    } else if (tabName === 'query-editor' || tabName === 'query-editer') {
      this.activeTab = 'query-editor';
    } else {
      this.activeTab = 'forms';
    }

    const isFormsActive = this.activeTab === 'forms';
    const isFieldsActive = this.activeTab === 'fields-customizer';
    const isQueryActive = this.activeTab === 'query-editor';

    // Top horizontal tabs bar matching Design System underline tablist
    const tabsBarHtml = `
      <div class="mb-4">
        <div role="tablist" aria-label="Customizer views" id="settings-tab-bar-container-tablist" style="overflow-x: auto !important; -webkit-overflow-scrolling: touch; scrollbar-width: thin;" class="flex items-center gap-1 overflow-x-auto bg-transparent p-0 border-b border-[#DFE1E6] scrollbar-thin">
          <a id="tab-forms" role="tab" href="#/settings/custom/forms" aria-selected="${isFormsActive ? 'true' : 'false'}" tabindex="${isFormsActive ? '0' : '-1'}" aria-controls="panel-forms" class="select-none px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent -mb-[1px] border-b-2 ${isFormsActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent hover:border-[#DFE1E6]'}">
            <span class="select-none">Forms</span>
          </a>
          <a id="tab-fields-customizer" role="tab" href="#/settings/custom/fields-customizer" aria-selected="${isFieldsActive ? 'true' : 'false'}" tabindex="${isFieldsActive ? '0' : '-1'}" aria-controls="panel-fields-customizer" class="select-none px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent -mb-[1px] border-b-2 ${isFieldsActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent hover:border-[#DFE1E6]'}">
            <span class="select-none">Filds Customizer</span>
          </a>
          <a id="tab-query-editor" role="tab" href="#/settings/custom/query-editor" aria-selected="${isQueryActive ? 'true' : 'false'}" tabindex="${isQueryActive ? '0' : '-1'}" aria-controls="panel-query-editor" class="select-none px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent -mb-[1px] border-b-2 ${isQueryActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent hover:border-[#DFE1E6]'}">
            <span class="select-none">Query Editor</span>
          </a>
        </div>
      </div>
    `;

    // Render active tab view
    if (this.activeTab === 'fields-customizer') {
      this.renderFieldsCustomizerTab(container, tabsBarHtml);
    } else if (this.activeTab === 'query-editor') {
      this.renderQueryEditorTab(container, tabsBarHtml);
    } else {
      this.renderFormsTab(container, tabsBarHtml);
    }
  },

  // -------------------------------------------------------------
  // TAB 1: Forms
  // -------------------------------------------------------------
  renderFormsTab(container, tabsBarHtml) {
    container.innerHTML = `
      <div class="space-y-4">
        ${tabsBarHtml}

        <div class="flex items-center justify-end">
          <button type="button" id="btn-add-form" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Add Form</span>
          </button>
        </div>

        <!-- Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="forms-filter-reset" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button type="button" id="forms-filter-toggle" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <div id="forms-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Search Form</label>
              <input type="text" id="flt-forms-search" placeholder="e.g. Proforma, ISF..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Category</label>
              <select id="flt-forms-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="">All Categories</option>
                <option value="Orders">Orders</option>
                <option value="Shipping & Logistics">Shipping & Logistics</option>
                <option value="Commercial">Commercial</option>
                <option value="Compliance & Customs">Compliance & Customs</option>
                <option value="Payments">Payments</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
              <select id="flt-forms-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
            <div class="flex items-end">
              <button type="button" id="btn-forms-search-exec" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="forms-datatable-container"></div>
      </div>
    `;

    this.initFormsDataTable();
    this.bindFormsEvents();
  },

  initFormsDataTable(filteredData = null) {
    const data = filteredData || this.forms;
    const tableContainer = document.getElementById('forms-datatable-container');
    if (!tableContainer) return;

    tableContainer.innerHTML = '';

    new DataTable({
      containerId: 'forms-datatable-container',
      keyField: 'id',
      tableTitle: `Forms Directory (${data.length})`,
      selectable: false,
      searchable: true,
      exportable: true,
      data: data,
      columns: [
        {
          field: 'code',
          header: 'Form Code',
          sortable: true,
          render: (val) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] text-[11px]">${val}</span>`
        },
        {
          field: 'name',
          header: 'Form Name',
          sortable: true,
          render: (val, row) => `
            <div class="cursor-pointer group" data-action="view-details" data-id="${row.id}">
              <div class="font-bold text-[#172B4D] group-hover:text-[#00A4B7] transition-colors">${val}</div>
              <div class="text-[11px] text-[#5E6C84] font-mono">Model: ${row.model}</div>
            </div>
          `
        },
        {
          field: 'category',
          header: 'Category',
          sortable: true,
          render: (val) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${val}</span>`
        },
        {
          field: 'fieldsCount',
          header: 'Configured Fields',
          sortable: true,
          render: (val, row) => `
            <button type="button" class="btn-design-fields px-2.5 py-1 rounded-full text-xs font-bold bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#00A4B7] border border-[#BAE6FD] transition-colors inline-flex items-center gap-1 cursor-pointer" data-id="${row.id}">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              <span>${val} Fields</span>
            </button>
          `
        },
        {
          field: 'status',
          header: 'Status',
          sortable: true,
          render: (val) => `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">${val}</span>`
        },
        {
          field: 'updatedAt',
          header: 'Last Modified',
          sortable: true,
          render: (val) => `<span class="text-xs text-[#5E6C84] font-mono">${val}</span>`
        },
        {
          field: 'actions',
          header: 'Actions',
          sortable: false,
          render: (_, row) => `
            <div class="flex items-center gap-1.5">
              <button type="button" data-action="design-fields" data-id="${row.id}" class="dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] rounded-full text-[#334155] hover:text-[#00A4B7] transition-colors cursor-pointer" title="Customize Fields">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              </button>
              <button type="button" data-action="query-table" data-id="${row.id}" class="dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] rounded-full text-[#334155] hover:text-[#00A4B7] transition-colors cursor-pointer" title="Query in SQL Editor">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              </button>
              <button type="button" data-action="delete-form" data-id="${row.id}" class="dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#FFEBE6] border border-[#CBD5E1] hover:border-[#FFBDAD] rounded-full text-[#334155] hover:text-[#DE350B] transition-colors cursor-pointer" title="Delete Form">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
            </div>
          `
        }
      ]
    });
  },

  bindFormsEvents() {
    const container = document.getElementById('forms-datatable-container');
    if (container) {
      container.addEventListener('click', (e) => {
        const btnDesign = e.target.closest('[data-action="design-fields"]') || e.target.closest('.btn-design-fields');
        if (btnDesign) {
          const formId = btnDesign.dataset.id;
          this.selectedFormCode = formId;
          window.location.hash = '#/settings/custom/fields-customizer';
          return;
        }

        const btnQuery = e.target.closest('[data-action="query-table"]');
        if (btnQuery) {
          const formId = btnQuery.dataset.id;
          const form = this.forms.find(f => f.id === formId);
          if (form) {
            this.selectedFormCode = formId;
            window.location.hash = '#/settings/custom/query-editor';
          }
          return;
        }

        const btnView = e.target.closest('[data-action="view-details"]');
        if (btnView) {
          const formId = btnView.dataset.id;
          this.openFormDetailsModal(formId);
          return;
        }

        const btnDel = e.target.closest('[data-action="delete-form"]');
        if (btnDel) {
          const formId = btnDel.dataset.id;
          const targetForm = this.forms.find(f => f.id === formId);
          Modal.confirm({
            title: 'Delete Form Definition',
            message: `Are you sure you want to delete form "${targetForm?.name}" (${targetForm?.code})? This will unbind all associated custom fields.`,
            confirmText: 'Delete Form',
            isDestructive: true,
            onConfirm: () => {
              this.forms = this.forms.filter(f => f.id !== formId);
              delete this.formFields[formId];
              this.initFormsDataTable();
              Toast.show('Form deleted successfully', 'success');
            }
          });
        }
      });
    }

    // Add Form Modal
    const btnAdd = document.getElementById('btn-add-form');
    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        this.openAddFormModal();
      });
    }

    // Search & Filter execution
    const searchExec = document.getElementById('btn-forms-search-exec');
    if (searchExec) {
      searchExec.addEventListener('click', () => {
        const query = (document.getElementById('flt-forms-search')?.value || '').toLowerCase();
        const cat = document.getElementById('flt-forms-category')?.value || '';
        const status = document.getElementById('flt-forms-status')?.value || '';

        const filtered = this.forms.filter(f => {
          const matchQ = !query || f.name.toLowerCase().includes(query) || f.code.toLowerCase().includes(query) || f.model.toLowerCase().includes(query);
          const matchC = !cat || f.category === cat;
          const matchS = !status || f.status === status;
          return matchQ && matchC && matchS;
        });

        this.initFormsDataTable(filtered);
      });
    }

    // Filter Reset
    const filterReset = document.getElementById('forms-filter-reset');
    if (filterReset) {
      filterReset.addEventListener('click', () => {
        const searchInput = document.getElementById('flt-forms-search');
        const catSelect = document.getElementById('flt-forms-category');
        const statusSelect = document.getElementById('flt-forms-status');
        if (searchInput) searchInput.value = '';
        if (catSelect) catSelect.value = '';
        if (statusSelect) statusSelect.value = '';
        this.initFormsDataTable();
      });
    }

    // Filter collapse toggle
    const filterToggle = document.getElementById('forms-filter-toggle');
    const filterBody = document.getElementById('forms-filter-body');
    if (filterToggle && filterBody) {
      filterToggle.addEventListener('click', () => {
        const isHidden = filterBody.classList.toggle('hidden');
        const svg = filterToggle.querySelector('svg');
        if (svg) svg.classList.toggle('rotate-180', isHidden);
      });
    }
  },

  // -------------------------------------------------------------
  // TAB 2: Filds Customizer
  // -------------------------------------------------------------
  getAllFieldsWithForm(formId = null) {
    let result = [];
    const targetForms = formId ? this.forms.filter(f => f.id === formId) : this.forms;
    targetForms.forEach(f => {
      const flds = this.formFields[f.id] || [];
      flds.forEach(field => {
        result.push({
          ...field,
          formId: f.id,
          formCode: f.code,
          formName: f.name,
          formCategory: f.category
        });
      });
    });
    return result;
  },

  renderFieldsCustomizerTab(container, tabsBarHtml) {
    container.innerHTML = `
      <div class="space-y-4">
        ${tabsBarHtml}

        <div class="flex items-center justify-end">
          <button type="button" id="btn-add-field" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Add Custom Field</span>
          </button>
        </div>

        <!-- Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <!-- Circular 32x32 Reset Button -->
              <button type="button" id="fields-filter-reset" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <!-- Circular 32x32 Collapse/Expand Toggle Button -->
              <button type="button" id="fields-filter-toggle" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <!-- Body: Margin-top 0, border-top none -->
          <div id="fields-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Form</label>
              <select id="flt-fld-form" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="">All Forms</option>
                ${this.forms.map(f => `
                  <option value="${f.id}" ${f.id === this.selectedFormCode ? 'selected' : ''}>${f.code} — ${f.name}</option>
                `).join('')}
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Search Field</label>
              <input type="text" id="flt-fld-search" placeholder="e.g. Buyer, Date, Port..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Field Type</label>
              <select id="flt-fld-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="">All Types</option>
                <option value="Text">Text</option>
                <option value="Number">Number</option>
                <option value="Dropdown">Dropdown</option>
                <option value="Date">Date</option>
                <option value="Currency">Currency</option>
                <option value="Formula">Formula</option>
              </select>
            </div>
            <!-- MANDATORY Search button always placed after the last input field -->
            <div class="flex items-end">
              <button type="button" id="btn-fields-search-exec" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Full Width DataTable Container -->
        <div id="fields-datatable-container"></div>
      </div>
    `;

    const initialFields = this.getAllFieldsWithForm(this.selectedFormCode);
    this.initFieldsDataTable(initialFields);
    this.bindFieldsCustomizerEvents();
  },

  initFieldsDataTable(fields) {
    const tableContainer = document.getElementById('fields-datatable-container');
    if (!tableContainer) return;

    tableContainer.innerHTML = '';

    new DataTable({
      containerId: 'fields-datatable-container',
      keyField: 'id',
      tableTitle: `Form Fields Configuration (${fields.length})`,
      selectable: false,
      searchable: true,
      exportable: true,
      data: fields,
      columns: [
        {
          field: 'formCode',
          header: 'Form',
          sortable: true,
          render: (val, row) => `
            <div>
              <span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] text-[11px]">${val}</span>
              <div class="text-[11px] text-[#5E6C84] truncate max-w-[200px] mt-0.5">${row.formName}</div>
            </div>
          `
        },
        {
          field: 'label',
          header: 'Field Label',
          sortable: true,
          render: (val, row) => `
            <div>
              <div class="font-bold text-[#172B4D] text-xs">${val}</div>
              <div class="font-mono text-[10px] text-[#5E6C84]">${row.key}</div>
            </div>
          `
        },
        {
          field: 'type',
          header: 'Field Type',
          sortable: true,
          render: (val) => {
            const colors = {
              'Text': 'bg-[#E0F2FE] text-[#00A4B7] border-[#BAE6FD]',
              'Number': 'bg-[#EAE6FF] text-[#403294] border-[#D3C7FF]',
              'Dropdown': 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]',
              'Date': 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]',
              'Currency': 'bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]',
              'Formula': 'bg-[#FDF4FF] text-[#A21CAF] border-[#F5D0FE]'
            };
            const style = colors[val] || 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
            return `<span class="px-2 py-0.5 rounded text-[10px] font-bold border ${style}">${val}</span>`;
          }
        },
        {
          field: 'section',
          header: 'Section / Group',
          sortable: true,
          render: (val) => `<span class="text-xs text-[#172B4D] font-semibold">${val}</span>`
        },
        {
          field: 'required',
          header: 'Validation',
          sortable: true,
          render: (val) => val
            ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#FFEBE6] text-[#DE350B] border border-[#FFBDAD]">Required</span>`
            : `<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F1F5F9] text-[#5E6C84] border border-[#DFE1E6]">Optional</span>`
        },
        {
          field: 'isFilter',
          header: 'Search Filter',
          sortable: true,
          render: (val) => val
            ? `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">Enabled</span>`
            : `<span class="px-2 py-0.5 rounded text-[10px] font-medium text-[#5E6C84]">Disabled</span>`
        },
        {
          field: 'actions',
          header: 'Actions',
          sortable: false,
          render: (_, row) => `
            <div class="flex items-center gap-1.5">
              <button type="button" data-action="edit-field" data-id="${row.id}" data-form="${row.formId}" class="dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] rounded-full text-[#334155] hover:text-[#00A4B7] transition-colors cursor-pointer" title="Edit Field">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              </button>
              <button type="button" data-action="delete-field" data-id="${row.id}" data-form="${row.formId}" class="dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#FFEBE6] border border-[#CBD5E1] hover:border-[#FFBDAD] rounded-full text-[#334155] hover:text-[#DE350B] transition-colors cursor-pointer" title="Delete Field">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
            </div>
          `
        }
      ]
    });
  },

  bindFieldsCustomizerEvents() {
    // Form switch in filter
    const selectForm = document.getElementById('flt-fld-form');
    if (selectForm) {
      selectForm.addEventListener('change', (e) => {
        this.selectedFormCode = e.target.value;
        this.filterAndRenderFields();
      });
    }

    // Add Field button
    const btnAddField = document.getElementById('btn-add-field');
    if (btnAddField) {
      btnAddField.addEventListener('click', () => {
        this.openAddFieldModal();
      });
    }

    // Search filter execute
    const btnSearch = document.getElementById('btn-fields-search-exec');
    if (btnSearch) {
      btnSearch.addEventListener('click', () => {
        this.filterAndRenderFields();
      });
    }

    // Reset filters
    const btnReset = document.getElementById('fields-filter-reset');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        const formSel = document.getElementById('flt-fld-form');
        const searchInput = document.getElementById('flt-fld-search');
        const typeSel = document.getElementById('flt-fld-type');
        if (formSel) formSel.value = '';
        if (searchInput) searchInput.value = '';
        if (typeSel) typeSel.value = '';
        this.selectedFormCode = '';
        this.initFieldsDataTable(this.getAllFieldsWithForm(''));
      });
    }

    // Collapse filter toggle
    const filterToggle = document.getElementById('fields-filter-toggle');
    const filterBody = document.getElementById('fields-filter-body');
    if (filterToggle && filterBody) {
      filterToggle.addEventListener('click', () => {
        const isHidden = filterBody.classList.toggle('hidden');
        const svg = filterToggle.querySelector('svg');
        if (svg) svg.classList.toggle('rotate-180', isHidden);
      });
    }

    // Edit/Delete Field actions
    const tableContainer = document.getElementById('fields-datatable-container');
    if (tableContainer) {
      tableContainer.addEventListener('click', (e) => {
        const btnEdit = e.target.closest('[data-action="edit-field"]');
        if (btnEdit) {
          const fieldId = btnEdit.dataset.id;
          const formId = btnEdit.dataset.form;
          this.selectedFormCode = formId;
          this.openEditFieldModal(fieldId, formId);
          return;
        }

        const btnDel = e.target.closest('[data-action="delete-field"]');
        if (btnDel) {
          const fieldId = btnDel.dataset.id;
          const formId = btnDel.dataset.form;
          const fields = this.formFields[formId] || [];
          const targetField = fields.find(f => f.id === fieldId);

          Modal.confirm({
            title: 'Delete Custom Field',
            message: `Are you sure you want to remove field "${targetField?.label}"? Any existing data in this column will be preserved in cold storage.`,
            confirmText: 'Delete Field',
            isDestructive: true,
            onConfirm: () => {
              this.formFields[formId] = fields.filter(f => f.id !== fieldId);
              const targetForm = this.forms.find(f => f.id === formId);
              if (targetForm) targetForm.fieldsCount = this.formFields[formId].length;

              this.filterAndRenderFields();
              Toast.show('Field removed successfully', 'success');
            }
          });
        }
      });
    }
  },

  filterAndRenderFields() {
    const formId = document.getElementById('flt-fld-form')?.value || '';
    const query = (document.getElementById('flt-fld-search')?.value || '').toLowerCase();
    const type = document.getElementById('flt-fld-type')?.value || '';

    const allFields = this.getAllFieldsWithForm(formId);
    const filtered = allFields.filter(f => {
      const matchQ = !query || f.label.toLowerCase().includes(query) || f.key.toLowerCase().includes(query) || (f.section && f.section.toLowerCase().includes(query));
      const matchT = !type || f.type === type;
      return matchQ && matchT;
    });

    this.initFieldsDataTable(filtered);
  },


  // -------------------------------------------------------------
  // TAB 3: Query Editor
  // -------------------------------------------------------------
  renderQueryEditorTab(container, tabsBarHtml) {
    const currentForm = this.forms.find(f => f.id === this.selectedFormCode) || this.forms[0];
    const initialSql = `SELECT \n  f.buyer_name,\n  f.pi_number,\n  f.exporter_entity,\n  f.species,\n  f.quantity_net,\n  f.total_value_usd\nFROM ${currentForm.model} f\nWHERE f.status = 'ACTIVE'\nORDER BY f.created_at DESC\nLIMIT 25;`;

    container.innerHTML = `
      <div class="space-y-4">
        ${tabsBarHtml}

        <div class="flex items-center justify-end">
          <div class="flex items-center gap-2">
            <button type="button" id="btn-export-query-csv" class="btn-secondary px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer">
              <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>Export CSV</span>
            </button>
            <button type="button" id="btn-run-query" class="btn-primary px-5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Execute SQL</span>
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
              <!-- Circular 32x32 Reset Button -->
              <button type="button" id="query-filter-reset" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <!-- Circular 32x32 Collapse/Expand Toggle Button -->
              <button type="button" id="query-filter-toggle" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>
          <!-- Body: Margin-top 0, border-top none -->
          <div id="query-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Target Entity / Table</label>
              <select id="flt-query-table" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono">
                <option value="">All Tables</option>
                ${this.forms.map(f => `
                  <option value="${f.model}" ${f.id === this.selectedFormCode ? 'selected' : ''}>${f.model} (${f.code})</option>
                `).join('')}
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Search Results</label>
              <input type="text" id="flt-query-keyword" placeholder="e.g. Ocean Harvest, PI-2026..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Form Category</label>
              <select id="flt-query-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="">All Categories</option>
                <option value="Orders">Orders</option>
                <option value="Shipping & Logistics">Shipping & Logistics</option>
                <option value="Commercial">Commercial</option>
                <option value="Compliance & Customs">Compliance & Customs</option>
                <option value="Payments">Payments</option>
              </select>
            </div>
            <!-- MANDATORY Search button always placed after the last input field -->
            <div class="flex items-end">
              <button type="button" id="btn-query-search-exec" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- SQL Query Console Card -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
          <div class="flex items-center justify-between pb-2 border-b border-[#F1F5F9] mb-2.5">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#00A4B7]"></span>
              <label for="query-sql-input" class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">SQL Query Console</label>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" id="btn-quick-sample" class="text-[11px] font-bold text-[#00A4B7] hover:underline cursor-pointer">Load Sample</button>
              <span class="text-[#DFE1E6]">|</span>
              <button type="button" id="btn-clear-query" class="text-[11px] font-semibold text-[#5E6C84] hover:text-[#DE350B] cursor-pointer">Clear</button>
            </div>
          </div>

          <textarea 
            id="query-sql-input" 
            rows="4" 
            class="w-full font-mono text-xs px-3 py-2 bg-[#0F172A] text-[#38BDF8] rounded-lg border border-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#00A4B7] shadow-inner resize-y leading-relaxed"
          >${initialSql}</textarea>
        </div>

        <!-- Execution Results Full Width DataTable Container -->
        <div id="query-results-container"></div>
      </div>
    `;

    this.initQueryResultsDataTable();
    this.bindQueryEditorEvents();
  },

  initQueryResultsDataTable(data = null) {
    const tableContainer = document.getElementById('query-results-container');
    if (!tableContainer) return;

    tableContainer.innerHTML = '';

    const queryData = data || [
      { buyer: 'Ocean Harvest Global LLC', pi_no: 'PI-2026-891', exporter: 'Devi Fisheries Limited', species: 'Vannamei White', qty: '44,000 LBS', amount: '$246,400', status: 'Cleared' },
      { buyer: 'Pacific Catch Seafoods Inc', pi_no: 'PI-2026-892', exporter: 'Devi Fisheries Limited', species: 'Black Tiger', qty: '38,500 LBS', amount: '$288,750', status: 'In Transit' },
      { buyer: 'Apex Mariculture Int', pi_no: 'PI-2026-893', exporter: 'Devi Marine Processors', species: 'Vannamei White', qty: '42,000 LBS', amount: '$231,000', status: 'Booked' },
      { buyer: 'Red Lobster Supply Corp', pi_no: 'PI-2026-894', exporter: 'Devi Fisheries Limited', species: 'Vannamei Easy Peel', qty: '40,000 LBS', amount: '$260,000', status: 'Cleared' },
      { buyer: 'Sysco Global Exports', pi_no: 'PI-2026-895', exporter: 'Devi Sea Foods Ltd', species: 'Vannamei Peeled Tail-On', qty: '44,000 LBS', amount: '$272,800', status: 'Delivered' }
    ];

    new DataTable({
      containerId: 'query-results-container',
      keyField: 'pi_no',
      tableTitle: `Query Results (${queryData.length} records, 14ms)`,
      selectable: false,
      searchable: true,
      exportable: true,
      data: queryData,
      columns: [
        { field: 'buyer', header: 'Buyer Name', sortable: true },
        { field: 'pi_no', header: 'PI Number', sortable: true, render: (v) => `<span class="font-mono font-bold text-[#00A4B7]">${v}</span>` },
        { field: 'exporter', header: 'Exporter Entity', sortable: true },
        { field: 'species', header: 'Species / Product', sortable: true },
        { field: 'qty', header: 'Quantity', sortable: true, render: (v) => `<span class="font-mono">${v}</span>` },
        { field: 'amount', header: 'Total USD', sortable: true, render: (v) => `<span class="font-mono font-bold text-[#006644]">${v}</span>` },
        { field: 'status', header: 'Status', sortable: true, render: (v) => `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">${v}</span>` }
      ]
    });
  },

  bindQueryEditorEvents() {
    const btnRun = document.getElementById('btn-run-query');
    if (btnRun) {
      btnRun.addEventListener('click', () => {
        Toast.show('Executing query...', 'info');
        setTimeout(() => {
          this.initQueryResultsDataTable();
          Toast.show('Query executed successfully: 5 rows returned in 12ms', 'success');
        }, 300);
      });
    }

    const btnClear = document.getElementById('btn-clear-query');
    const sqlTextarea = document.getElementById('query-sql-input');
    if (btnClear && sqlTextarea) {
      btnClear.addEventListener('click', () => {
        sqlTextarea.value = '';
        sqlTextarea.focus();
      });
    }

    const btnSample = document.getElementById('btn-quick-sample');
    if (btnSample && sqlTextarea) {
      btnSample.addEventListener('click', () => {
        const currentForm = this.forms.find(f => f.id === this.selectedFormCode) || this.forms[0];
        sqlTextarea.value = `SELECT \n  f.buyer_name,\n  f.pi_number,\n  f.exporter_entity,\n  f.species,\n  f.quantity_net,\n  f.total_value_usd\nFROM ${currentForm.model} f\nWHERE f.status = 'ACTIVE'\nORDER BY f.created_at DESC\nLIMIT 50;`;
      });
    }

    // Table selection in filter
    const selectTbl = document.getElementById('flt-query-table');
    if (selectTbl) {
      selectTbl.addEventListener('change', (e) => {
        const model = e.target.value;
        if (model && sqlTextarea) {
          sqlTextarea.value = `SELECT * FROM ${model} LIMIT 25;`;
          Toast.show(`Loaded table "${model}" into SQL console`, 'info');
        }
      });
    }

    // Search filter execute
    const btnSearch = document.getElementById('btn-query-search-exec');
    if (btnSearch) {
      btnSearch.addEventListener('click', () => {
        const keyword = (document.getElementById('flt-query-keyword')?.value || '').toLowerCase();
        const baseData = [
          { buyer: 'Ocean Harvest Global LLC', pi_no: 'PI-2026-891', exporter: 'Devi Fisheries Limited', species: 'Vannamei White', qty: '44,000 LBS', amount: '$246,400', status: 'Cleared' },
          { buyer: 'Pacific Catch Seafoods Inc', pi_no: 'PI-2026-892', exporter: 'Devi Fisheries Limited', species: 'Black Tiger', qty: '38,500 LBS', amount: '$288,750', status: 'In Transit' },
          { buyer: 'Apex Mariculture Int', pi_no: 'PI-2026-893', exporter: 'Devi Marine Processors', species: 'Vannamei White', qty: '42,000 LBS', amount: '$231,000', status: 'Booked' },
          { buyer: 'Red Lobster Supply Corp', pi_no: 'PI-2026-894', exporter: 'Devi Fisheries Limited', species: 'Vannamei Easy Peel', qty: '40,000 LBS', amount: '$260,000', status: 'Cleared' },
          { buyer: 'Sysco Global Exports', pi_no: 'PI-2026-895', exporter: 'Devi Sea Foods Ltd', species: 'Vannamei Peeled Tail-On', qty: '44,000 LBS', amount: '$272,800', status: 'Delivered' }
        ];

        const filtered = baseData.filter(d => {
          return !keyword || d.buyer.toLowerCase().includes(keyword) || d.pi_no.toLowerCase().includes(keyword) || d.species.toLowerCase().includes(keyword) || d.exporter.toLowerCase().includes(keyword);
        });

        this.initQueryResultsDataTable(filtered);
      });
    }

    // Filter reset
    const btnReset = document.getElementById('query-filter-reset');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        const tblSel = document.getElementById('flt-query-table');
        const kwInput = document.getElementById('flt-query-keyword');
        const catSel = document.getElementById('flt-query-category');
        if (tblSel) tblSel.value = '';
        if (kwInput) kwInput.value = '';
        if (catSel) catSel.value = '';
        this.initQueryResultsDataTable();
      });
    }

    // Collapse toggle
    const filterToggle = document.getElementById('query-filter-toggle');
    const filterBody = document.getElementById('query-filter-body');
    if (filterToggle && filterBody) {
      filterToggle.addEventListener('click', () => {
        const isHidden = filterBody.classList.toggle('hidden');
        const svg = filterToggle.querySelector('svg');
        if (svg) svg.classList.toggle('rotate-180', isHidden);
      });
    }

    const btnCsv = document.getElementById('btn-export-query-csv');
    if (btnCsv) {
      btnCsv.addEventListener('click', () => {
        Toast.show('Exporting query results to CSV...', 'success');
      });
    }
  },


  // -------------------------------------------------------------
  // Modals (Design System compliant: Modal.open & Modal.confirm)
  // -------------------------------------------------------------
  openAddFormModal() {
    Modal.open({
      title: 'Add New Form Definition',
      size: 'xl',
      content: `
        <form id="modal-form-add-form" class="space-y-4">
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex items-center gap-3 shadow-2xs">
            <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <div>
              <div class="font-extrabold text-[#0F172A] text-sm">Enterprise Form Customizer</div>
              <div class="text-[11px] text-[#5E6C84]">Define form metadata and underlying database model</div>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Form Name <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="add-form-name" required placeholder="e.g. Export Inspection Record" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Form Code <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="add-form-code" required placeholder="e.g. EIR-FORM" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono uppercase" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Category <span class="text-[#DE350B]">*</span></label>
                <select id="add-form-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Orders">Orders</option>
                  <option value="Shipping & Logistics">Shipping & Logistics</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Compliance & Customs">Compliance & Customs</option>
                  <option value="Payments">Payments</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Database Model Key <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="add-form-model" required placeholder="e.g. dfl_inspection_records" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono" />
              </div>
            </div>
          </div>
        </form>
      `,
      buttons: [
        {
          label: 'Cancel',
          text: 'Cancel',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Create Form',
          text: 'Create Form',
          class: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: () => {
            const name = document.getElementById('add-form-name')?.value?.trim();
            const code = document.getElementById('add-form-code')?.value?.trim();
            const cat = document.getElementById('add-form-category')?.value;
            const model = document.getElementById('add-form-model')?.value?.trim();

            if (!name || !code || !model) {
              Toast.show('Please fill in all mandatory fields', 'warning');
              return false;
            }

            const newForm = {
              id: `FORM-${Date.now().toString().slice(-4)}`,
              code,
              name,
              category: cat,
              model,
              status: 'Active',
              fieldsCount: 0,
              updatedAt: 'Just now'
            };

            this.forms.unshift(newForm);
            this.formFields[newForm.id] = [];
            Modal.close();
            this.initFormsDataTable();
            Toast.show(`Form "${name}" created successfully!`, 'success');
          }
        }
      ]
    });
  },

  openFormDetailsModal(formId) {
    const form = this.forms.find(f => f.id === formId);
    if (!form) return;
    const fields = this.formFields[form.id] || [];

    Modal.open({
      title: 'Form Details',
      size: 'xl',
      content: `
        <div class="space-y-4">
          <!-- Top Hero / Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${form.code}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${form.status}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${form.category}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>${form.name}</span>
                  <span>•</span>
                  <span class="font-mono text-[#00A4B7]">${form.model}</span>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <div class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Fields</div>
                <div class="font-extrabold text-[#006644] text-xs">${fields.length}</div>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                <div class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Status</div>
                <div class="font-extrabold text-[#00A4B7] text-xs">Active</div>
              </div>
            </div>
          </div>

          <!-- Fields Breakdown Section -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Bound Form Fields</h4>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              ${fields.map(f => `
                <div class="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">${f.type}</span>
                  <span class="font-semibold text-[#172B4D] text-xs block mt-0.5 break-words">${f.label}</span>
                  <span class="text-[10px] font-mono text-[#00A4B7] block mt-0.5">${f.key}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          text: 'Close',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Design in Fields Customizer',
          text: 'Design in Fields Customizer',
          class: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: () => {
            Modal.close();
            this.selectedFormCode = form.id;
            window.location.hash = '#/settings/custom/fields-customizer';
          }
        }
      ]
    });
  },

  openAddFieldModal() {
    Modal.open({
      title: 'Add Custom Field',
      size: 'xl',
      content: `
        <form id="modal-form-add-field" class="space-y-4">
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex items-center gap-3 shadow-2xs">
            <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
            </div>
            <div>
              <div class="font-extrabold text-[#0F172A] text-sm">Add New Field to Form</div>
              <div class="text-[11px] text-[#5E6C84]">Target Form: <span class="font-mono font-bold text-[#00A4B7]">${this.selectedFormCode}</span></div>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Field Label <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="add-fld-label" required placeholder="e.g. Vessel IMO Number" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Field Key (Internal DB) <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="add-fld-key" required placeholder="e.g. vessel_imo_number" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Field Type <span class="text-[#DE350B]">*</span></label>
                <select id="add-fld-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Text">Text</option>
                  <option value="Number">Number</option>
                  <option value="Dropdown">Dropdown / Select</option>
                  <option value="Date">Date</option>
                  <option value="Currency">Currency</option>
                  <option value="Formula">Formula</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Section / Group <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="add-fld-section" required placeholder="e.g. Shipping Details" value="General Information" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>

            <div class="flex items-center gap-6 mt-4 pt-3 border-t border-[#F1F5F9]">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id="add-fld-required" class="rounded text-[#00A4B7] focus:ring-[#00A4B7]" />
                <span class="text-xs font-bold text-[#172B4D]">Mandatory / Required Field</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id="add-fld-filter" checked class="rounded text-[#00A4B7] focus:ring-[#00A4B7]" />
                <span class="text-xs font-bold text-[#172B4D]">Enable in Search &amp; Filter Card</span>
              </label>
            </div>
          </div>
        </form>
      `,
      buttons: [
        {
          label: 'Cancel',
          text: 'Cancel',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Field',
          text: 'Save Field',
          class: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: () => {
            const label = document.getElementById('add-fld-label')?.value?.trim();
            const key = document.getElementById('add-fld-key')?.value?.trim();
            const type = document.getElementById('add-fld-type')?.value;
            const section = document.getElementById('add-fld-section')?.value?.trim();
            const required = document.getElementById('add-fld-required')?.checked || false;
            const isFilter = document.getElementById('add-fld-filter')?.checked || false;

            if (!label || !key) {
              Toast.show('Please fill in label and key', 'warning');
              return false;
            }

            if (!this.formFields[this.selectedFormCode]) {
              this.formFields[this.selectedFormCode] = [];
            }

            const newField = {
              id: `f_${Date.now().toString().slice(-4)}`,
              label,
              key,
              type,
              section: section || 'General Information',
              required,
              isFilter
            };

            this.formFields[this.selectedFormCode].push(newField);
            const targetForm = this.forms.find(f => f.id === this.selectedFormCode);
            if (targetForm) targetForm.fieldsCount = this.formFields[this.selectedFormCode].length;

            Modal.close();
            this.initFieldsDataTable(this.formFields[this.selectedFormCode]);
            Toast.show(`Field "${label}" added successfully!`, 'success');
          }
        }
      ]
    });
  },

  openEditFieldModal(fieldId) {
    const fields = this.formFields[this.selectedFormCode] || [];
    const field = fields.find(f => f.id === fieldId);
    if (!field) return;

    Modal.open({
      title: 'Edit Custom Field',
      size: 'xl',
      content: `
        <form id="modal-form-edit-field" class="space-y-4">
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex items-center gap-3 shadow-2xs">
            <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
            </div>
            <div>
              <div class="font-extrabold text-[#0F172A] text-sm">Update Field Specification</div>
              <div class="text-[11px] text-[#5E6C84]">Form: <span class="font-mono font-bold text-[#00A4B7]">${this.selectedFormCode}</span></div>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Field Label <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="edit-fld-label" value="${field.label}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Field Key (Internal DB)</label>
                <input type="text" id="edit-fld-key" value="${field.key}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F8FAFC] border border-[#DFE1E6] rounded font-semibold text-[#5E6C84] shadow-2xs font-mono cursor-not-allowed" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Field Type <span class="text-[#DE350B]">*</span></label>
                <select id="edit-fld-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Text" ${field.type === 'Text' ? 'selected' : ''}>Text</option>
                  <option value="Number" ${field.type === 'Number' ? 'selected' : ''}>Number</option>
                  <option value="Dropdown" ${field.type === 'Dropdown' ? 'selected' : ''}>Dropdown / Select</option>
                  <option value="Date" ${field.type === 'Date' ? 'selected' : ''}>Date</option>
                  <option value="Currency" ${field.type === 'Currency' ? 'selected' : ''}>Currency</option>
                  <option value="Formula" ${field.type === 'Formula' ? 'selected' : ''}>Formula</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Section / Group</label>
                <input type="text" id="edit-fld-section" value="${field.section}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>

            <div class="flex items-center gap-6 mt-4 pt-3 border-t border-[#F1F5F9]">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id="edit-fld-required" ${field.required ? 'checked' : ''} class="rounded text-[#00A4B7] focus:ring-[#00A4B7]" />
                <span class="text-xs font-bold text-[#172B4D]">Mandatory / Required Field</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id="edit-fld-filter" ${field.isFilter ? 'checked' : ''} class="rounded text-[#00A4B7] focus:ring-[#00A4B7]" />
                <span class="text-xs font-bold text-[#172B4D]">Enable in Search &amp; Filter Card</span>
              </label>
            </div>
          </div>
        </form>
      `,
      buttons: [
        {
          label: 'Cancel',
          text: 'Cancel',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Update Field',
          text: 'Update Field',
          class: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: () => {
            const label = document.getElementById('edit-fld-label')?.value?.trim();
            const type = document.getElementById('edit-fld-type')?.value;
            const section = document.getElementById('edit-fld-section')?.value?.trim();
            const required = document.getElementById('edit-fld-required')?.checked || false;
            const isFilter = document.getElementById('edit-fld-filter')?.checked || false;

            if (!label) {
              Toast.show('Field label cannot be empty', 'warning');
              return false;
            }

            field.label = label;
            field.type = type;
            field.section = section || 'General Information';
            field.required = required;
            field.isFilter = isFilter;

            Modal.close();
            this.initFieldsDataTable(this.formFields[this.selectedFormCode]);
            Toast.show(`Field "${label}" updated successfully!`, 'success');
          }
        }
      ]
    });
  }
};

