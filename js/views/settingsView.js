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
    this.lastContainerId = containerId;
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
      <div>
        <div role="tablist" aria-label="Customizer views" id="settings-tab-bar-container-tablist" style="overflow-x: auto !important; -webkit-overflow-scrolling: touch; scrollbar-width: thin;" class="flex items-center gap-1 overflow-x-auto bg-transparent p-0 border-b border-[#DFE1E6] scrollbar-thin">
          <a id="tab-forms" role="tab" href="#/settings/custom/forms" aria-selected="${isFormsActive ? 'true' : 'false'}" tabindex="${isFormsActive ? '0' : '-1'}" aria-controls="panel-forms" class="select-none px-4 pt-2.5 pb-1.5 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent -mb-[1px] border-b-2 ${isFormsActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent hover:border-[#DFE1E6]'}">
            <span class="select-none">Forms</span>
          </a>
          <a id="tab-fields-customizer" role="tab" href="#/settings/custom/fields-customizer" aria-selected="${isFieldsActive ? 'true' : 'false'}" tabindex="${isFieldsActive ? '0' : '-1'}" aria-controls="panel-fields-customizer" class="select-none px-4 pt-2.5 pb-1.5 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent -mb-[1px] border-b-2 ${isFieldsActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent hover:border-[#DFE1E6]'}">
            <span class="select-none">Fields Customizer</span>
          </a>
          <a id="tab-query-editor" role="tab" href="#/settings/custom/query-editor" aria-selected="${isQueryActive ? 'true' : 'false'}" tabindex="${isQueryActive ? '0' : '-1'}" aria-controls="panel-query-editor" class="select-none px-4 pt-2.5 pb-1.5 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent -mb-[1px] border-b-2 ${isQueryActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent hover:border-[#DFE1E6]'}">
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

        <div class="flex items-center justify-between">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Forms</h1>
          <button type="button" id="btn-add-form" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Add Form</span>
          </button>
        </div>

        <!-- Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between">
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
      tableTitle: 'Forms Directory',
      selectable: false,
      searchable: true,
      exportable: true,
      data: data,
      onRowClick: (row) => {
        this.openFormPreviewModal(row.id);
      },
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
        }
      ],
      actions: [
        {
          label: 'Customize Fields',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
          onClick: (row) => {
            this.selectedFormCode = row.id;
            window.location.hash = '#/settings/custom/fields-customizer';
          }
        },
        {
          label: 'Assign Database Model',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`,
          onClick: (row) => {
            this.openAssignModelModal(row.id);
          }
        },
        {
          label: 'Delete Form',
          variant: 'danger',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
          onClick: (row) => {
            this.forms = this.forms.filter(f => f.id !== row.id);
            delete this.formFields[row.id];
            this.initFormsDataTable();
            Toast.show('Form deleted successfully', 'success');
          }
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

        const btnAssignModel = e.target.closest('[data-action="assign-model"]');
        if (btnAssignModel) {
          e.stopPropagation();
          const formId = btnAssignModel.dataset.id;
          this.openAssignModelModal(formId);
          return;
        }

        const btnView = e.target.closest('[data-action="view-details"]');
        if (btnView) {
          const formId = btnView.dataset.id;
          this.openFormPreviewModal(formId);
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

        <div class="flex items-center justify-between">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Fields Customizer</h1>
          <button type="button" id="btn-add-field" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Add Custom Field</span>
          </button>
        </div>

        <!-- Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between">
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
      tableTitle: 'Form Fields Configuration',
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
            const vLower = (val || '').toLowerCase();
            let style = 'bg-[#F1F5F9] text-[#172B4D] border-[#DFE1E6]';
            if (vLower.includes('text') || vLower.includes('email') || vLower.includes('phone') || vLower.includes('url')) {
              style = 'bg-[#E0F2FE] text-[#00A4B7] border-[#BAE6FD]';
            } else if (vLower.includes('number') || vLower.includes('counter')) {
              style = 'bg-[#EAE6FF] text-[#403294] border-[#D3C7FF]';
            } else if (vLower.includes('currency') || vLower.includes('monetary')) {
              style = 'bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]';
            } else if (vLower.includes('dropdown') || vLower.includes('select') || vLower.includes('choice') || vLower.includes('radio') || vLower.includes('toggle')) {
              style = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
            } else if (vLower.includes('date') || vLower.includes('time') || vLower.includes('calendar') || vLower.includes('clock')) {
              style = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
            } else if (vLower.includes('upload') || vLower.includes('file') || vLower.includes('rating') || vLower.includes('color')) {
              style = 'bg-[#FDF4FF] text-[#A21CAF] border-[#F5D0FE]';
            }
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
        }
      ],
      actions: [
        {
          label: 'Edit Field',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
          onClick: (row) => {
            this.openEditFieldModal(row.id, row.formId);
          }
        },
        {
          label: 'Delete Field',
          variant: 'danger',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
          onClick: (row) => {
            Modal.confirm({
              title: 'Delete Custom Field',
              message: `Are you sure you want to remove field "${row.label}"? Any existing data in this column will be preserved in cold storage.`,
              confirmText: 'Delete Field',
              isDestructive: true,
              onConfirm: () => {
                const fields = this.formFields[row.formId] || [];
                this.formFields[row.formId] = fields.filter(f => f.id !== row.id);
                const targetForm = this.forms.find(f => f.id === row.formId);
                if (targetForm) targetForm.fieldsCount = this.formFields[row.formId].length;
                this.filterAndRenderFields();
                Toast.show('Field removed successfully', 'success');
              }
            });
          }
        }
      ],
      onRowClick: (row) => {
        this.openEditFieldModal(row.id, row.formId);
      }
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
  // TAB 3: Query Editor (Enterprise Dynamic Query & Field Engine)
  // -------------------------------------------------------------
  queryEditorState: {
    enabled: true,
    activeMode: 'jql', // 'formula' | 'sql' | 'jql'
    activeTemplateId: 'tmpl-jql-reefer',
    activeTokenCategory: 'All',
    selectedRecordId: 'PI-2026-891',
    editorContent: "shipmentType = 'Reefer Container' AND icegateStatus ~ 'LEO Issued' AND status = 'IN_TRANSIT'",
    outputResult: '[9 Records Matched]',
    executionDuration: '0.4 ms',
    matchedCount: 9,
    jsonOpen: false
  },

  queryModes: [
    {
      id: 'formula',
      title: 'Calculated Formula',
      subtitle: 'IF / CONCAT / DATEDIF',
      filename: 'CALCULATED_FORMULA.expr',
      icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
      defaultQuery: 'CONCAT(buyerName, " — ", species, " (", quantityLbs, " LBS) [USD $", ROUND(fobValueUsd, 2), "]")',
      engineLabel: 'Computed (Formula)'
    },
    {
      id: 'sql',
      title: 'SQL Data Query',
      subtitle: 'SELECT ... FROM ...',
      filename: 'SQL_QUERY_EDITOR.sql',
      icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>',
      defaultQuery: "SELECT pi_number, buyer_name, species, container_no, destination_port, fob_value_usd, icegate_status \nFROM dfl_proforma_invoices \nWHERE status = 'ACTIVE' AND fob_value_usd > 200000 \nORDER BY fob_value_usd DESC LIMIT 25;",
      engineLabel: 'Computed (SQL)'
    },
    {
      id: 'jql',
      title: 'JQL Filter Rule',
      subtitle: "status = 'ACTIVE' ...",
      filename: 'JQL_EDITOR.jql',
      icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>',
      defaultQuery: "shipmentType = 'Reefer Container' AND icegateStatus ~ 'LEO Issued' AND status = 'IN_TRANSIT'",
      engineLabel: 'Computed (JQL)'
    }
  ],

  queryTemplates: [
    {
      id: 'tmpl-jql-reefer',
      mode: 'jql',
      badge: 'JQL',
      title: 'High Priority Reefer Shipments',
      desc: 'Enterprise filter query matching reefer containers in-transit with issued ICEGATE customs LEO.',
      query: "shipmentType = 'Reefer Container' AND icegateStatus ~ 'LEO Issued' AND status = 'IN_TRANSIT'"
    },
    {
      id: 'tmpl-sql-banking',
      mode: 'sql',
      badge: 'SQL',
      title: 'Export LC Banking Realization (>30 Days)',
      desc: 'Aggregate unrealized commercial export invoices exceeding standard 30-day banking LC realization cycle.',
      query: "SELECT pi_number, buyer_name, fob_value_usd, species, payment_status, lc_reference \nFROM dfl_proforma_invoices \nWHERE payment_status = 'Pending Wire' AND lc_days > 30 \nORDER BY fob_value_usd DESC;"
    },
    {
      id: 'tmpl-formula-netfob',
      mode: 'formula',
      badge: 'Formula',
      title: 'Net FOB Realization per Metric Ton',
      desc: 'Auto-computes realized USD rate per Metric Ton after freight, cess and cold packing deductions.',
      query: "ROUND((fobValueUsd - coldFreightCost - packingCess) / (quantityLbs / 2204.62), 2)"
    },
    {
      id: 'tmpl-jql-fda',
      mode: 'jql',
      badge: 'JQL',
      title: 'US-FDA Prior Notice Compliance',
      desc: 'Consignments flagged for mandatory US-FDA food safety prior notice and Bioterrorism Act clearance.',
      query: "destinationCountry = 'United States' AND fdaPriorNoticeStatus = 'VERIFIED' AND status = 'ACTIVE'"
    }
  ],

  queryTokens: [
    { key: '{order.piNumber}', label: '{order.piNumber}', category: 'Orders' },
    { key: '{order.buyerName}', label: '{order.buyerName}', category: 'Orders' },
    { key: '{order.species}', label: '{order.species}', category: 'Orders' },
    { key: '{order.fobValueUsd}', label: '{order.fobValueUsd}', category: 'Orders' },
    { key: '{order.quantityLbs}', label: '{order.quantityLbs}', category: 'Orders' },
    { key: '{shipment.containerNo}', label: '{shipment.containerNo}', category: 'Shipping' },
    { key: '{shipment.sealNo}', label: '{shipment.sealNo}', category: 'Shipping' },
    { key: '{shipment.vesselName}', label: '{shipment.vesselName}', category: 'Shipping' },
    { key: '{shipment.destinationPort}', label: '{shipment.destinationPort}', category: 'Shipping' },
    { key: '{customs.icegateStatus}', label: '{customs.icegateStatus}', category: 'Customs' },
    { key: '{customs.shippingBillNo}', label: '{customs.shippingBillNo}', category: 'Customs' },
    { key: '{customs.leoDate}', label: '{customs.leoDate}', category: 'Customs' },
    { key: '{banking.lcReference}', label: '{banking.lcReference}', category: 'Finance' },
    { key: '{banking.paymentStatus}', label: '{banking.paymentStatus}', category: 'Finance' },
    { key: '{forex.bookedRate}', label: '{forex.bookedRate}', category: 'Finance' },
    { key: 'IF(condition, true_val, false_val)', label: 'IF(condition, true_val, false_val)', category: 'Function' },
    { key: 'CONCAT(str1, str2, ...)', label: 'CONCAT(str1, str2, ...)', category: 'Function' },
    { key: 'LOWER(text)', label: 'LOWER(text)', category: 'Function' },
    { key: 'UPPER(text)', label: 'UPPER(text)', category: 'Function' },
    { key: 'ROUND(number, decimals)', label: 'ROUND(number, decimals)', category: 'Function' },
    { key: 'DATEDIF(start, end, "days")', label: 'DATEDIF(start, end, "days")', category: 'Function' },
    { key: 'NOW()', label: 'NOW()', category: 'Function' },
    { key: 'COALESCE(val1, val2, ...)', label: 'COALESCE(val1, val2, ...)', category: 'Function' }
  ],

  sampleRecords: [
    {
      id: 'PI-2026-891',
      buyer: 'Ocean Harvest Global LLC',
      label: 'Ocean Harvest Global LLC (PI-2026-891 — Vannamei White)',
      species: 'Vannamei White 16/20 IQF',
      port: 'Port of Los Angeles, USA',
      container: 'MEDU-9928174 / Seal #9921',
      qty: '44,000 LBS',
      amount: '$246,400',
      icegate: 'LEO Issued',
      payment: 'LC Realized'
    },
    {
      id: 'PI-2026-892',
      buyer: 'Pacific Catch Seafoods Inc',
      label: 'Pacific Catch Seafoods Inc (PI-2026-892 — Black Tiger)',
      species: 'Black Tiger 21/25 Block',
      port: 'Port of Tokyo, Japan',
      container: 'MSCU-4410293 / Seal #8812',
      qty: '38,500 LBS',
      amount: '$288,750',
      icegate: 'Inspection Cleared',
      payment: 'Pending Wire'
    },
    {
      id: 'PI-2026-893',
      buyer: 'Apex Mariculture Int',
      label: 'Apex Mariculture Int (PI-2026-893 — Vannamei White)',
      species: 'Vannamei White 26/30 HLSO',
      port: 'Port of Rotterdam, Netherlands',
      container: 'CMAU-7718290 / Seal #5541',
      qty: '42,000 LBS',
      amount: '$231,000',
      icegate: 'LEO Issued',
      payment: 'Realized'
    },
    {
      id: 'PI-2026-894',
      buyer: 'Red Lobster Supply Corp',
      label: 'Red Lobster Supply Corp (PI-2026-894 — Easy Peel)',
      species: 'Vannamei Easy Peel 31/40',
      port: 'Port of Houston, USA',
      container: 'ONEU-5529182 / Seal #1209',
      qty: '40,000 LBS',
      amount: '$260,000',
      icegate: 'LEO Issued',
      payment: 'LC Confirmed'
    },
    {
      id: 'PI-2026-895',
      buyer: 'Sysco Global Exports',
      label: 'Sysco Global Exports (PI-2026-895 — Peeled Tail-On)',
      species: 'Vannamei Peeled Tail-On',
      port: 'Port of Savannah, USA',
      container: 'HLCU-1192837 / Seal #7712',
      qty: '44,000 LBS',
      amount: '$272,800',
      icegate: 'Under Scrutiny',
      payment: 'Pending Wire'
    },
    {
      id: 'PI-2026-896',
      buyer: 'Maruha Nichiro Corporation',
      label: 'Maruha Nichiro Corp (PI-2026-896 — Black Tiger)',
      species: 'Black Tiger Head-On 13/15',
      port: 'Port of Yokohama, Japan',
      container: 'NYKU-3301928 / Seal #4410',
      qty: '36,000 LBS',
      amount: '$312,000',
      icegate: 'LEO Issued',
      payment: 'LC Realized'
    },
    {
      id: 'PI-2026-897',
      buyer: 'Nippon Suisan Kaisha Ltd',
      label: 'Nissui Seafoods (PI-2026-897 — Nobashi Ebi)',
      species: 'Vannamei Nobashi 21/25',
      port: 'Port of Kobe, Japan',
      container: 'MOLU-8820192 / Seal #3301',
      qty: '41,500 LBS',
      amount: '$298,800',
      icegate: 'LEO Issued',
      payment: 'Advance Received'
    },
    {
      id: 'PI-2026-898',
      buyer: 'Aqua Star Global Procurement',
      label: 'Aqua Star Global (PI-2026-898 — Cooked Tail-On)',
      species: 'Vannamei Cooked Tail-On 41/50',
      port: 'Port of Seattle, USA',
      container: 'EGLU-6610291 / Seal #9901',
      qty: '45,000 LBS',
      amount: '$324,000',
      icegate: 'LEO Issued',
      payment: 'LC Confirmed'
    },
    {
      id: 'PI-2026-899',
      buyer: 'Direct Ocean France SAS',
      label: 'Direct Ocean France (PI-2026-899 — Organic White)',
      species: 'Organic Vannamei White 30/40',
      port: 'Port of Le Havre, France',
      container: 'MSCU-9018274 / Seal #6610',
      qty: '39,000 LBS',
      amount: '$273,000',
      icegate: 'LEO Issued',
      payment: 'Realized'
    }
  ],

  renderQueryEditorTab(container, tabsBarHtml) {
    const currentMode = this.queryModes.find(m => m.id === this.queryEditorState.activeMode) || this.queryModes[2];
    const initialContent = this.queryEditorState.editorContent || currentMode.defaultQuery;
    const linesCount = (initialContent.match(/\n/g) || []).length + 1;
    const charsCount = initialContent.length;

    container.innerHTML = `
      <div class="space-y-4">
        ${tabsBarHtml}

        <!-- Page Header -->
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Query Editor</h1>
          <div class="flex items-center gap-2">
            <button type="button" id="btn-export-query-csv" class="btn-secondary px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer">
              <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>Export CSV</span>
            </button>
            <button type="button" id="btn-reset-query-defaults" class="btn-secondary px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer">
              <svg class="w-3.5 h-3.5 text-[#5E6C84]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              <span>Reset</span>
            </button>
          </div>
        </div>

        <!-- TOP 2-COLUMN SECTION -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <!-- LEFT COLUMN: Mode, Templates, Schema Tokens (col-span-7) -->
          <div class="lg:col-span-7 space-y-3.5">
            <!-- 1. DYNAMIC QUERY & CALCULATED FIELD MODE -->
            <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-mono text-xs font-bold text-[#00A4B7]">&gt;_</span>
                    <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">1. Dynamic Query &amp; Calculated Field Mode</h3>
                  </div>
                  <p class="text-[11px] text-[#5E6C84] mt-0.5">When enabled, this field is computed automatically via SQL or logical formula expressions.</p>
                </div>
                <label class="flex items-center gap-2 cursor-pointer select-none shrink-0 mt-0.5">
                  <span id="query-mode-enabled-label" class="text-xs font-bold text-[#172B4D]">Enabled</span>
                  <input type="checkbox" id="toggle-query-mode" ${this.queryEditorState.enabled ? 'checked' : ''} class="sr-only peer">
                  <div class="w-9 h-5 bg-[#CBD5E1] peer-checked:bg-[#00A4B7] rounded-full peer-focus:outline-none relative transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4"></div>
                </label>
              </div>

              <!-- 3 Mode Cards Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-3.5" id="query-modes-container">
                ${this.queryModes.map(m => {
                  const isActive = m.id === this.queryEditorState.activeMode;
                  return `
                    <div class="query-mode-card cursor-pointer p-3 rounded-xl border transition-all text-center select-none flex flex-col items-center justify-center gap-1.5 ${isActive ? 'border-2 border-[#00A4B7] bg-[#F0F9FF] shadow-xs' : 'border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F8FAFC]'}" data-mode-id="${m.id}">
                      <div class="w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-[#00A4B7] text-white shadow-xs' : 'bg-[#F1F5F9] text-[#5E6C84]'}">
                        ${m.icon}
                      </div>
                      <div class="text-xs font-bold text-[#172B4D]">${m.title}</div>
                      <div class="text-[10px] font-mono text-[#5E6C84] truncate w-full">${m.subtitle}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- 2. READY-TO-USE ENTERPRISE QUERY TEMPLATES -->
            <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
              <div class="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">2. Ready-to-Use Enterprise Query Templates</h3>
                </div>
                <span class="text-[11px] font-semibold text-[#5E6C84]">Click to load instantly</span>
              </div>

              <!-- Template Cards Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3" id="query-templates-container">
                ${this.queryTemplates.map(t => {
                  const isSelected = t.id === this.queryEditorState.activeTemplateId;
                  return `
                    <div class="query-template-card cursor-pointer p-3 rounded-xl border transition-all select-none ${isSelected ? 'border-2 border-[#00A4B7] bg-[#F0F9FF] shadow-xs' : 'border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F8FAFC]'}" data-template-id="${t.id}">
                      <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-1.5 min-w-0">
                          <span class="text-xs font-bold text-[#172B4D] truncate">${t.title}</span>
                        </div>
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase ${t.badge === 'JQL' ? 'bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]' : t.badge === 'SQL' ? 'bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]' : 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]'}">${t.badge}</span>
                      </div>
                      <p class="text-[11px] text-[#5E6C84] mt-1 line-clamp-2 leading-relaxed">${t.desc}</p>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- 3. SCHEMA TOKENS & FUNCTIONS PALETTE -->
            <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
              <div class="flex items-center justify-between pb-2 border-b border-[#F1F5F9] gap-2 flex-wrap">
                <div class="flex items-center gap-2">
                  <span class="font-mono text-xs font-bold text-[#00A4B7]">{ }</span>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">3. Schema Tokens &amp; Functions Palette</h3>
                </div>
                <!-- Filter Pills -->
                <div class="flex items-center gap-1 overflow-x-auto select-none" id="token-category-pills">
                  ${['All', 'Orders', 'Shipping', 'Customs', 'Finance', 'Function'].map(cat => {
                    const isCatActive = cat === this.queryEditorState.activeTokenCategory;
                    return `
                      <button type="button" class="token-filter-pill px-2.5 py-1 rounded-full text-[11px] transition-colors cursor-pointer ${isCatActive ? 'bg-[#00A4B7] text-white font-bold' : 'text-[#5E6C84] font-semibold hover:bg-[#EBECF0]'}" data-category="${cat}">
                        ${cat}
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Tokens Chips -->
              <div class="flex flex-wrap gap-1.5 mt-3 max-h-36 overflow-y-auto pr-1" id="tokens-chips-container">
                ${this.renderTokenChips()}
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN: LIVE INTERACTIVE COMPONENT PREVIEW (col-span-5) -->
          <div class="lg:col-span-5">
            <div class="bg-white rounded-xl border border-[#DFE1E6] shadow-xs overflow-hidden sticky top-4">
              <!-- Gradient Header -->
              <div class="bg-gradient-to-r from-[#00A4B7] to-[#0284C7] px-4 py-3 text-white flex items-center justify-between shadow-xs">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
                  <span class="text-xs font-extrabold tracking-wide uppercase">Live Interactive Component Preview</span>
                </div>
                <span class="bg-white/20 text-white text-[10px] font-mono px-2 py-0.5 rounded font-extrabold tracking-wider uppercase backdrop-blur-xs flex items-center gap-1">
                  <span>⚡</span>
                  <span>QUERY_ENGINE</span>
                </span>
              </div>

              <!-- Preview Body -->
              <div class="p-4 space-y-3.5">
                <!-- Test Record Dropdown -->
                <div>
                  <label for="preview-sample-record-select" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    <span>Test Against Sample Record:</span>
                  </label>
                  <select id="preview-sample-record-select" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-xl font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs cursor-pointer">
                    ${this.sampleRecords.map(r => `
                      <option value="${r.id}" ${r.id === this.queryEditorState.selectedRecordId ? 'selected' : ''}>${r.label}</option>
                    `).join('')}
                  </select>
                </div>

                <!-- Preview Output Container Card -->
                <div class="bg-[#F8FAFC] p-4 rounded-xl border border-[#DFE1E6] space-y-2.5">
                  <div class="flex items-center justify-between text-[11px]">
                    <span class="font-bold text-[#00A4B7] uppercase tracking-wider">Export Documentation &amp; Sales</span>
                    <span class="text-[#5E6C84] font-medium">Real-time Computed</span>
                  </div>

                  <div>
                    <div class="flex items-center gap-2 mb-1.5">
                      <span class="text-xs font-bold text-[#172B4D]">Dynamic Enterprise Status Generator</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] flex items-center gap-1">
                        <svg class="w-3 h-3 text-[#D97706]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
                        <span>Computed Query</span>
                      </span>
                    </div>
                    <div id="preview-active-display-box" class="w-full text-xs px-3 py-2.5 bg-white border border-[#DFE1E6] rounded-lg font-mono font-bold text-[#172B4D] shadow-2xs">
                      ${this.queryEditorState.outputResult}
                    </div>
                  </div>

                  <div class="flex items-center justify-between text-xs pt-1.5 border-t border-[#EBECF0]">
                    <div class="text-[11px] text-[#5E6C84]">
                      <span>Active Output: </span>
                      <code id="preview-active-output-text" class="font-mono font-bold text-[#00A4B7]">"${this.queryEditorState.outputResult}"</code>
                    </div>
                    <button type="button" id="btn-preview-clear-output" class="text-[11px] font-bold text-[#5E6C84] hover:text-[#DE350B] cursor-pointer">Clear</button>
                  </div>
                </div>

                <!-- Database Key & Field Engine Badges -->
                <div class="grid grid-cols-2 gap-3">
                  <div class="p-2.5 rounded-lg border border-[#DFE1E6] bg-white">
                    <div class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">Database Key:</div>
                    <div class="font-mono text-xs font-bold text-[#00A4B7] mt-0.5 truncate">dynamicEnterpriseStatus</div>
                  </div>
                  <div class="p-2.5 rounded-lg border border-[#DFE1E6] bg-white">
                    <div class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">Field Engine:</div>
                    <div id="preview-field-engine-label" class="text-xs font-bold text-[#172B4D] mt-0.5">${currentMode.engineLabel}</div>
                  </div>
                </div>

                <!-- Collapsible JSON Spec -->
                <div class="border border-[#DFE1E6] rounded-xl overflow-hidden bg-white">
                  <button type="button" id="btn-toggle-json-spec" class="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-bold text-[#172B4D] hover:bg-[#F8FAFC] transition-colors cursor-pointer select-none">
                    <span class="flex items-center gap-2">
                      <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                      <span>Data Model &amp; JSON Specification</span>
                    </span>
                    <svg id="icon-json-arrow" class="w-4 h-4 text-[#5E6C84] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div id="json-spec-body" class="p-3 bg-[#0B132B] text-[#38BDF8] font-mono text-[11px] leading-relaxed border-t border-[#1E293B] hidden overflow-x-auto max-h-48">
                    <pre id="json-spec-pre">${this.generateJsonSpec()}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- BOTTOM CODE EDITOR WINDOW (Mac IDE Style) -->
        <div class="bg-[#0F172A] rounded-2xl border border-[#1E293B] shadow-md overflow-hidden">
          <!-- Window Header Bar -->
          <div class="px-4 py-3 bg-[#1E293B]/70 border-b border-[#334155] flex items-center justify-between">
            <div class="flex items-center gap-3">
              <!-- 3 Mac Window Dots -->
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded-full bg-[#EF4444] inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-[#F59E0B] inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-[#10B981] inline-block"></span>
              </div>
              <span id="editor-filename" class="font-mono text-xs font-bold text-[#E2E8F0] tracking-wide">${currentMode.filename}</span>
            </div>
            <!-- Actions: Copy & Clear -->
            <div class="flex items-center gap-2">
              <button type="button" id="btn-copy-query" class="px-3 py-1.5 rounded-lg bg-[#334155] hover:bg-[#475569] text-xs font-semibold text-[#E2E8F0] inline-flex items-center gap-1.5 transition-colors cursor-pointer select-none">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                <span>Copy</span>
              </button>
              <button type="button" id="btn-clear-query" class="px-3 py-1.5 rounded-lg bg-[#334155] hover:bg-[#475569] text-xs font-semibold text-[#E2E8F0] inline-flex items-center gap-1.5 transition-colors cursor-pointer select-none">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                <span>Clear</span>
              </button>
            </div>
          </div>

          <!-- Code Textarea -->
          <div class="p-3 bg-black">
            <textarea 
              id="query-code-editor" 
              rows="5" 
              class="w-full bg-black text-white font-mono text-xs sm:text-sm p-2 focus:outline-none resize-y leading-relaxed border-0 outline-none selection:bg-[#00A4B7]/30" 
              style="color: #FFFFFF !important; background-color: #000000 !important; caret-color: #FFFFFF !important; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;"
              spellcheck="false"
            >${initialContent}</textarea>
          </div>

          <!-- Window Status & Run Footer -->
          <div class="px-4 py-2.5 bg-[#1E293B]/90 border-t border-[#334155] flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-3 text-[11px] font-mono text-[#94A3B8] flex-wrap">
              <span id="editor-lines-count">Lines: ${linesCount}</span>
              <span class="text-[#475569]">|</span>
              <span id="editor-chars-count">Length: ${charsCount} chars</span>
              <span class="text-[#475569]">|</span>
              <span id="editor-syntax-status" class="inline-flex items-center gap-1 text-[#10B981] font-semibold">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Valid Syntax (${this.queryEditorState.executionDuration})</span>
              </span>
            </div>

            <button type="button" id="btn-run-query" class="px-5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-2 shadow-md bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              <span>Run Query / Test Expression</span>
            </button>
          </div>
        </div>

        <!-- QUERY EXECUTION CONSOLE OUTPUT -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
          <div class="flex items-center justify-between pb-3 border-b border-[#F1F5F9] mb-3">
            <div class="flex items-center gap-2">
              <span class="font-mono text-sm font-extrabold text-[#00A4B7]">&gt;_</span>
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Query Execution Console Output</h3>
            </div>
            <span id="console-execution-duration" class="text-xs font-mono font-semibold text-[#5E6C84]">Duration: ${this.queryEditorState.executionDuration}</span>
          </div>

          <div class="text-xs font-bold text-[#172B4D] mb-3 flex items-center gap-1.5">
            <span>Matched Records:</span>
            <span id="console-matched-records-count" class="font-mono font-extrabold text-[#00A4B7] text-sm">${this.queryEditorState.matchedCount}</span>
          </div>

          <!-- Console Output Table Container -->
          <div id="query-execution-results-container"></div>
        </div>
      </div>
    `;

    this.initQueryResultsDataTable();
    this.bindQueryEditorEvents();
  },

  renderTokenChips() {
    const activeCategory = this.queryEditorState.activeTokenCategory;
    const filteredTokens = activeCategory === 'All' 
      ? this.queryTokens 
      : this.queryTokens.filter(t => t.category === activeCategory);

    return filteredTokens.map(tok => `
      <button type="button" class="schema-token-chip px-2.5 py-1 rounded-lg text-xs font-mono font-semibold border border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F0F9FF] text-[#172B4D] hover:text-[#00A4B7] transition-all cursor-pointer inline-flex items-center gap-1 select-none shadow-2xs" data-token="${tok.key}">
        <span class="text-[#00A4B7] font-bold">+</span>
        <span>${tok.label}</span>
      </button>
    `).join('');
  },

  generateJsonSpec() {
    const selectedRecord = this.sampleRecords.find(r => r.id === this.queryEditorState.selectedRecordId) || this.sampleRecords[0];
    const spec = {
      fieldId: "dynamicEnterpriseStatus",
      engine: "v2_query_runtime",
      mode: this.queryEditorState.activeMode.toUpperCase(),
      enabled: this.queryEditorState.enabled,
      expression: this.queryEditorState.editorContent || "",
      testRecord: {
        id: selectedRecord.id,
        buyer: selectedRecord.buyer,
        species: selectedRecord.species,
        amount: selectedRecord.amount,
        icegateStatus: selectedRecord.icegate
      },
      cached: true,
      refreshInterval: "5m",
      lastEvaluated: "Just now"
    };
    return JSON.stringify(spec, null, 2);
  },

  initQueryResultsDataTable(data = null) {
    const tableContainer = document.getElementById('query-execution-results-container');
    if (!tableContainer) return;

    tableContainer.innerHTML = '';

    const records = data || this.sampleRecords;
    this.currentQueryRecords = records;

    new DataTable({
      containerId: 'query-execution-results-container',
      keyField: 'id',
      tableTitle: `Matched Records (${records.length})`,
      selectable: false,
      searchable: true,
      exportable: true,
      data: records,
      onRowClick: (row) => {
        this.openRecordDetailModal(row);
      },
      columns: [
        {
          field: 'id',
          header: 'ID',
          sortable: true,
          render: (val) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] text-[11px]">${val}</span>`
        },
        {
          field: 'buyer',
          header: 'Buyer / Client',
          sortable: true,
          render: (val) => `<div class="font-bold text-[#172B4D]">${val}</div>`
        },
        {
          field: 'species',
          header: 'Species / Grade',
          sortable: true,
          render: (val) => `<span class="font-medium text-[#334155]">${val}</span>`
        },
        {
          field: 'container',
          header: 'Container / Reefer',
          sortable: true,
          render: (val) => `<span class="font-mono text-[11px] text-[#5E6C84]">${val}</span>`
        },
        {
          field: 'port',
          header: 'Destination Port',
          sortable: true,
          render: (val) => `<span class="text-xs text-[#334155]">${val}</span>`
        },
        {
          field: 'qty',
          header: 'Quantity',
          sortable: true,
          render: (val) => `<span class="font-mono font-semibold text-[#172B4D]">${val}</span>`
        },
        {
          field: 'amount',
          header: 'FOB Value (USD)',
          sortable: true,
          render: (val) => `<span class="font-mono font-bold text-[#006644]">${val}</span>`
        },
        {
          field: 'icegate',
          header: 'ICEGATE Status',
          sortable: true,
          render: (val) => {
            const isCleared = val.includes('LEO') || val.includes('Cleared');
            return `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${isCleared ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]' : 'bg-[#FFFAE6] text-[#FF8B00] border border-[#FFE380]'}">${val}</span>`;
          }
        },
        {
          field: 'payment',
          header: 'Payment Status',
          sortable: true,
          render: (val) => {
            const isRealized = val.includes('Realized') || val.includes('Received') || val.includes('Confirmed');
            return `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${isRealized ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]' : 'bg-[#FFFAE6] text-[#FF8B00] border border-[#FFE380]'}">${val}</span>`;
          }
        }
      ]
    });
  },

  bindQueryEditorEvents() {
    const editor = document.getElementById('query-code-editor');
    const filenameEl = document.getElementById('editor-filename');
    const linesEl = document.getElementById('editor-lines-count');
    const charsEl = document.getElementById('editor-chars-count');
    const durationEl = document.getElementById('editor-duration-text');
    const consoleDurationEl = document.getElementById('console-execution-duration');
    const consoleMatchedCount = document.getElementById('console-matched-records-count');
    const displayBox = document.getElementById('preview-active-display-box');
    const activeOutputText = document.getElementById('preview-active-output-text');
    const fieldEngineLabel = document.getElementById('preview-field-engine-label');
    const jsonPre = document.getElementById('json-spec-pre');

    const updateStats = () => {
      if (!editor) return;
      const text = editor.value;
      this.queryEditorState.editorContent = text;
      const lines = (text.match(/\n/g) || []).length + (text.length > 0 ? 1 : 0);
      if (linesEl) linesEl.textContent = `Lines: ${lines}`;
      if (charsEl) charsEl.textContent = `Length: ${text.length} chars`;
    };

    if (editor) {
      editor.addEventListener('input', updateStats);
    }

    // Toggle query mode enabled switch
    const toggleMode = document.getElementById('toggle-query-mode');
    const enabledLabel = document.getElementById('query-mode-enabled-label');
    if (toggleMode) {
      toggleMode.addEventListener('change', () => {
        this.queryEditorState.enabled = toggleMode.checked;
        if (enabledLabel) enabledLabel.textContent = toggleMode.checked ? 'Enabled' : 'Disabled';
        Toast.show(toggleMode.checked ? 'Dynamic Query Mode Enabled' : 'Dynamic Query Mode Disabled', toggleMode.checked ? 'success' : 'info');
      });
    }

    // Mode cards selection
    const modeCards = document.querySelectorAll('.query-mode-card');
    modeCards.forEach(card => {
      card.addEventListener('click', () => {
        const modeId = card.dataset.modeId;
        const targetMode = this.queryModes.find(m => m.id === modeId);
        if (!targetMode) return;

        this.queryEditorState.activeMode = modeId;
        this.queryEditorState.editorContent = targetMode.defaultQuery;

        modeCards.forEach(c => {
          const isThis = c.dataset.modeId === modeId;
          c.className = `query-mode-card cursor-pointer p-3 rounded-xl border transition-all text-center select-none flex flex-col items-center justify-center gap-1.5 ${isThis ? 'border-2 border-[#00A4B7] bg-[#F0F9FF] shadow-xs' : 'border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F8FAFC]'}`;
          const iconBox = c.querySelector('div');
          if (iconBox) {
            iconBox.className = `w-8 h-8 rounded-lg flex items-center justify-center ${isThis ? 'bg-[#00A4B7] text-white shadow-xs' : 'bg-[#F1F5F9] text-[#5E6C84]'}`;
          }
        });

        if (filenameEl) filenameEl.textContent = targetMode.filename;
        if (editor) editor.value = targetMode.defaultQuery;
        if (fieldEngineLabel) fieldEngineLabel.textContent = targetMode.engineLabel;

        const outputVal = modeId === 'formula' 
          ? '"Ocean Harvest Global LLC — Vannamei White 16/20 (44,000 LBS) [USD $246,400.00]"'
          : '[9 Records Matched]';
        this.queryEditorState.outputResult = outputVal;
        if (displayBox) displayBox.textContent = outputVal;
        if (activeOutputText) activeOutputText.textContent = `"${outputVal}"`;
        if (jsonPre) jsonPre.textContent = this.generateJsonSpec();

        updateStats();
        Toast.show(`Switched to ${targetMode.title}`, 'info');
      });
    });

    // Template cards selection
    const templateCards = document.querySelectorAll('.query-template-card');
    templateCards.forEach(card => {
      card.addEventListener('click', () => {
        const tmplId = card.dataset.templateId;
        const tmpl = this.queryTemplates.find(t => t.id === tmplId);
        if (!tmpl) return;

        this.queryEditorState.activeTemplateId = tmplId;
        this.queryEditorState.activeMode = tmpl.mode;
        this.queryEditorState.editorContent = tmpl.query;

        templateCards.forEach(c => {
          const isThis = c.dataset.templateId === tmplId;
          c.className = `query-template-card cursor-pointer p-3 rounded-xl border transition-all select-none ${isThis ? 'border-2 border-[#00A4B7] bg-[#F0F9FF] shadow-xs' : 'border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F8FAFC]'}`;
        });

        // Also sync mode cards
        modeCards.forEach(c => {
          const isThis = c.dataset.modeId === tmpl.mode;
          c.className = `query-mode-card cursor-pointer p-3 rounded-xl border transition-all text-center select-none flex flex-col items-center justify-center gap-1.5 ${isThis ? 'border-2 border-[#00A4B7] bg-[#F0F9FF] shadow-xs' : 'border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F8FAFC]'}`;
          const iconBox = c.querySelector('div');
          if (iconBox) {
            iconBox.className = `w-8 h-8 rounded-lg flex items-center justify-center ${isThis ? 'bg-[#00A4B7] text-white shadow-xs' : 'bg-[#F1F5F9] text-[#5E6C84]'}`;
          }
        });

        const targetMode = this.queryModes.find(m => m.id === tmpl.mode);
        if (filenameEl && targetMode) filenameEl.textContent = targetMode.filename;
        if (editor) editor.value = tmpl.query;
        if (fieldEngineLabel && targetMode) fieldEngineLabel.textContent = targetMode.engineLabel;

        const outputVal = tmpl.mode === 'formula' 
          ? 'USD $5.28 / KG (Realized Rate)'
          : '[9 Records Matched]';
        this.queryEditorState.outputResult = outputVal;
        if (displayBox) displayBox.textContent = outputVal;
        if (activeOutputText) activeOutputText.textContent = `"${outputVal}"`;
        if (jsonPre) jsonPre.textContent = this.generateJsonSpec();

        updateStats();
        Toast.show(`Loaded Template: ${tmpl.title}`, 'success');
      });
    });

    // Token category filter pills
    const catPills = document.querySelectorAll('.token-filter-pill');
    const chipsContainer = document.getElementById('tokens-chips-container');
    catPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const cat = pill.dataset.category;
        this.queryEditorState.activeTokenCategory = cat;

        catPills.forEach(p => {
          const isThis = p.dataset.category === cat;
          p.className = `token-filter-pill px-2.5 py-1 rounded-full text-[11px] transition-colors cursor-pointer ${isThis ? 'bg-[#00A4B7] text-white font-bold' : 'text-[#5E6C84] font-semibold hover:bg-[#EBECF0]'}`;
        });

        if (chipsContainer) {
          chipsContainer.innerHTML = this.renderTokenChips();
          bindTokenChips();
        }
      });
    });

    // Token chips insertion into editor
    const bindTokenChips = () => {
      const chips = document.querySelectorAll('.schema-token-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          const token = chip.dataset.token;
          if (!editor || !token) return;

          const start = editor.selectionStart || 0;
          const end = editor.selectionEnd || 0;
          const curVal = editor.value;

          editor.value = curVal.substring(0, start) + token + curVal.substring(end);
          editor.focus();
          editor.selectionStart = editor.selectionEnd = start + token.length;

          updateStats();
          Toast.show(`Inserted ${token}`, 'info');
        });
      });
    };
    bindTokenChips();

    // Sample record selection
    const sampleRecordSel = document.getElementById('preview-sample-record-select');
    if (sampleRecordSel) {
      sampleRecordSel.addEventListener('change', () => {
        const recId = sampleRecordSel.value;
        this.queryEditorState.selectedRecordId = recId;
        const rec = this.sampleRecords.find(r => r.id === recId) || this.sampleRecords[0];

        if (this.queryEditorState.activeMode === 'formula') {
          const val = `"${rec.buyer} — ${rec.species} (${rec.qty}) [USD ${rec.amount}]"`;
          this.queryEditorState.outputResult = val;
          if (displayBox) displayBox.textContent = val;
          if (activeOutputText) activeOutputText.textContent = val;
        }

        if (jsonPre) jsonPre.textContent = this.generateJsonSpec();
        Toast.show(`Evaluating against record ${recId}`, 'info');
      });
    }

    // Clear preview output
    const btnClearPreview = document.getElementById('btn-preview-clear-output');
    if (btnClearPreview) {
      btnClearPreview.addEventListener('click', () => {
        this.queryEditorState.outputResult = '—';
        if (displayBox) displayBox.textContent = '—';
        if (activeOutputText) activeOutputText.textContent = '"—"';
        Toast.show('Preview output cleared', 'info');
      });
    }

    // JSON Spec Toggle
    const btnToggleJson = document.getElementById('btn-toggle-json-spec');
    const jsonBody = document.getElementById('json-spec-body');
    const jsonArrow = document.getElementById('icon-json-arrow');
    if (btnToggleJson && jsonBody) {
      btnToggleJson.addEventListener('click', () => {
        const isHidden = jsonBody.classList.toggle('hidden');
        if (jsonArrow) jsonArrow.classList.toggle('rotate-180', !isHidden);
      });
    }

    // Copy query button
    const btnCopy = document.getElementById('btn-copy-query');
    if (btnCopy && editor) {
      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(editor.value).then(() => {
          Toast.show('Query copied to clipboard!', 'success');
        }).catch(() => {
          Toast.show('Copied query to clipboard', 'success');
        });
      });
    }

    // Clear query button
    const btnClearQuery = document.getElementById('btn-clear-query');
    if (btnClearQuery && editor) {
      btnClearQuery.addEventListener('click', () => {
        editor.value = '';
        editor.focus();
        updateStats();
        Toast.show('Editor cleared', 'info');
      });
    }

    // Reset defaults button
    const btnReset = document.getElementById('btn-reset-query-defaults');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        const defaultMode = this.queryModes[2];
        this.queryEditorState.activeMode = 'jql';
        this.queryEditorState.activeTemplateId = 'tmpl-jql-reefer';
        this.queryEditorState.editorContent = defaultMode.defaultQuery;
        this.queryEditorState.outputResult = '[9 Records Matched]';
        this.queryEditorState.executionDuration = '0.4 ms';
        this.queryEditorState.matchedCount = 9;
        this.render(this.lastContainerId || 'app-content', 'query-editor');
        Toast.show('Reset query editor to enterprise defaults', 'success');
      });
    }

    // Run Query / Test Expression button
    const btnRun = document.getElementById('btn-run-query');
    if (btnRun) {
      btnRun.addEventListener('click', () => {
        const originalHtml = btnRun.innerHTML;
        btnRun.innerHTML = `
          <svg class="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
          <span>Executing...</span>
        `;
        btnRun.disabled = true;

        setTimeout(() => {
          btnRun.innerHTML = originalHtml;
          btnRun.disabled = false;

          const queryText = (editor ? editor.value : '').trim();
          let matched = [...this.sampleRecords];

          if (!queryText) {
            matched = [];
          } else {
            const lower = queryText.toLowerCase();
            if (lower.includes('black tiger')) {
              matched = matched.filter(r => r.species.toLowerCase().includes('black tiger'));
            } else if (lower.includes('vannamei')) {
              matched = matched.filter(r => r.species.toLowerCase().includes('vannamei'));
            } else if (lower.includes('wire') || lower.includes('pending wire')) {
              matched = matched.filter(r => r.payment.toLowerCase().includes('wire'));
            } else if (lower.includes('japan') || lower.includes('tokyo') || lower.includes('kobe') || lower.includes('yokohama')) {
              matched = matched.filter(r => r.port.toLowerCase().includes('japan'));
            } else if (lower.includes('usa') || lower.includes('united states') || lower.includes('los angeles') || lower.includes('houston') || lower.includes('savannah') || lower.includes('seattle')) {
              matched = matched.filter(r => r.port.toLowerCase().includes('usa'));
            } else if (lower.includes('europe') || lower.includes('france') || lower.includes('netherlands')) {
              matched = matched.filter(r => r.port.toLowerCase().includes('netherlands') || r.port.toLowerCase().includes('france'));
            } else if (lower.includes('ocean harvest')) {
              matched = matched.filter(r => r.buyer.toLowerCase().includes('ocean harvest'));
            } else if (lower.includes('sysco')) {
              matched = matched.filter(r => r.buyer.toLowerCase().includes('sysco'));
            } else if (lower.includes('red lobster')) {
              matched = matched.filter(r => r.buyer.toLowerCase().includes('red lobster'));
            } else if (lower.includes('reefer container') || lower.includes('leo issued')) {
              matched = matched.filter(r => r.icegate.includes('LEO'));
            }
          }

          this.currentQueryRecords = matched;
          const duration = '0.3 ms';
          this.queryEditorState.executionDuration = duration;
          if (durationEl) durationEl.textContent = duration;
          if (consoleDurationEl) consoleDurationEl.textContent = `Duration: ${duration}`;

          const count = matched.length;
          this.queryEditorState.matchedCount = count;
          if (consoleMatchedCount) consoleMatchedCount.textContent = count;

          let outputVal = `[${count} Records Matched]`;
          if (this.queryEditorState.activeMode === 'formula') {
            const currentRec = this.sampleRecords.find(r => r.id === this.queryEditorState.selectedRecordId) || this.sampleRecords[0];
            outputVal = `"${currentRec.buyer} — ${currentRec.species} (${currentRec.qty}) [USD ${currentRec.amount}]"`;
          }

          this.queryEditorState.outputResult = outputVal;
          if (displayBox) displayBox.textContent = outputVal;
          if (activeOutputText) activeOutputText.textContent = `"${outputVal}"`;
          if (jsonPre) jsonPre.textContent = this.generateJsonSpec();

          this.initQueryResultsDataTable(matched);
          Toast.show(`Query executed successfully: ${count} records matched in ${duration}`, 'success');
        }, 250);
      });
    }

    // Export CSV
    const btnExportCsv = document.getElementById('btn-export-query-csv');
    if (btnExportCsv) {
      btnExportCsv.addEventListener('click', () => {
        const records = this.currentQueryRecords || this.sampleRecords;
        const headers = ['ID', 'Buyer / Client', 'Species / Grade', 'Container / Reefer', 'Destination Port', 'Quantity', 'FOB Value (USD)', 'ICEGATE Status', 'Payment Status'];
        const rows = records.map(r => [
          r.id,
          `"${r.buyer.replace(/"/g, '""')}"`,
          `"${r.species.replace(/"/g, '""')}"`,
          `"${r.container.replace(/"/g, '""')}"`,
          `"${r.port.replace(/"/g, '""')}"`,
          `"${r.qty}"`,
          `"${r.amount}"`,
          `"${r.icegate}"`,
          `"${r.payment}"`
        ]);
        const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `Devi_Fisheries_Query_Export_${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        Toast.show(`Successfully exported ${records.length} records to CSV!`, 'success');
      });
    }
  },
  openRecordDetailModal(record) {
    if (!record) return;

    Modal.open({
      title: `Export Record Details: ${record.id}`,
      size: 'xl',
      content: `
        <div class="space-y-4">
          <!-- Top Hero Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${record.id}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${record.icegate}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${record.payment}</span>
                </div>
                <div class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>${record.buyer}</span>
                  <span>•</span>
                  <span>${record.port}</span>
                </div>
              </div>
            </div>
            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[90px]">
                <div class="text-[9px] font-bold text-[#64748B] uppercase tracking-wider">FOB USD</div>
                <div class="text-xs font-extrabold text-[#006644] font-mono">${record.amount}</div>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[90px]">
                <div class="text-[9px] font-bold text-[#64748B] uppercase tracking-wider">Net Weight</div>
                <div class="text-xs font-extrabold text-[#172B4D] font-mono">${record.qty}</div>
              </div>
            </div>
          </div>

          <!-- Section 1: Commercial & Buyer Details -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Commercial &amp; Buyer Information</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Buyer / Client</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${record.buyer}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Proforma Invoice</span>
                <span class="font-mono font-semibold text-[#00A4B7] text-xs block mt-0.5">${record.id}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Exporter Entity</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">Devi Fisheries Limited — Unit I</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Realization Term</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${record.payment}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Cargo & Specifications -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Product &amp; Cargo Specifications</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Species / Grade</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${record.species}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Total Net Quantity</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${record.qty}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Total FOB Amount</span>
                <span class="font-mono font-bold text-[#006644] text-xs block mt-0.5">${record.amount}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Packing Type</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">Master Carton (6x2 KG)</span>
              </div>
            </div>
          </div>

          <!-- Section 3: Logistics & Customs -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">3</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Logistics &amp; Port Clearance</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Container / Seal</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${record.container}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Destination Port</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${record.port}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Customs ICEGATE Status</span>
                <span class="font-semibold text-[#00A4B7] text-xs block mt-0.5">${record.icegate}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">CHA Clearing Agent</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">Vanguard Customs Logistics Vizag</span>
              </div>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Close',
          text: 'Close',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: () => Modal.close()
        }
      ]
    });
  },

  // -------------------------------------------------------------
  // Modals (Design System compliant: Modal.open & Modal.confirm)
  // -------------------------------------------------------------
  openAddFormModal() {
    Modal.open({
      title: 'Add New Form Definition',
      size: 'lg',
      content: `
        <form id="modal-form-add-form" class="space-y-4">
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

  openAssignModelModal(formId) {
    const form = this.forms.find(f => f.id === formId);
    if (!form) return;

    const AVAILABLE_MODELS = [
      { id: 'dfl_proforma_invoices', name: 'Proforma Invoices Table', category: 'Orders & Sales', recordsCount: 142, desc: 'Stores export buyer POs, contract lines, commercial realization & pricing terms' },
      { id: 'dfl_custom_invoices', name: 'Customs & Commercial Invoices', category: 'Customs & Port', recordsCount: 89, desc: 'Master clearance invoices, net/gross weights, reefer container seals & cargo manifest' },
      { id: 'dfl_isf_filings', name: 'US Customs ISF 10+2 Filings', category: 'Compliance', recordsCount: 45, desc: 'Mandatory CBP security filings, importer of record EINs, stuffing locations & AMS BLs' },
      { id: 'dfl_shipping_bills', name: 'Export Shipping Bills (ICEGATE)', category: 'Customs & Port', recordsCount: 96, desc: 'Indian Customs ICEGATE filings, port clearing agent entries, FOB valuations & LEO orders' },
      { id: 'dfl_commercial_invoices', name: 'Commercial Realizations (Banking)', category: 'Finance', recordsCount: 78, desc: 'Foreign bank remittance tracking, export LC realizations, BRC advice & inward wires' },
      { id: 'dfl_fda_prior_notice', name: 'US-FDA Prior Notices', category: 'Compliance', recordsCount: 38, desc: 'FDA food safety prior notice verifications, Bioterrorism Act registrations & port inspections' },
      { id: 'dfl_clearing_entries', name: 'Customs House Clearing Entries', category: 'Logistics', recordsCount: 62, desc: 'Authorized CHA clearing entries, port handling charges, wharfage & cess duty vouchers' },
      { id: 'dfl_forex_contracts', name: 'Forex Forward Hedging Contracts', category: 'Finance', recordsCount: 54, desc: 'Bank forward exchange rate bookings, maturity dates & USD/INR currency hedging' },
      { id: 'dfl_inventory_batches', name: 'Processing Plant Cold Batches', category: 'Operations', recordsCount: 210, desc: 'Raw shrimp batch lot numbers, processing line QC inspections & blast-freezer records' },
      { id: 'dfl_lab_inspections', name: 'EIC / Quality Lab Test Reports', category: 'Quality', recordsCount: 124, desc: 'Microbiological culture tests, antibiotic residue screenings & export health certs' }
    ];

    let selectedModel = form.model || AVAILABLE_MODELS[0].id;

    Modal.open({
      title: `Assign Database Model: ${form.name}`,
      size: 'lg',
      content: `
        <div class="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
          <!-- Form Header Context -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-mono font-extrabold text-[#0F172A] text-sm">${form.code}</span>
                  <span class="font-bold text-[#172B4D] text-sm">${form.name}</span>
                </div>
                <div class="text-[11px] text-[#5E6C84] mt-0.5 flex items-center gap-2">
                  <span>Current Model:</span>
                  <code id="current-assigned-model-badge" class="font-mono font-bold text-[#00A4B7] bg-white px-2 py-0.5 rounded border border-[#BAE6FD]">${form.model || 'None'}</code>
                </div>
              </div>
            </div>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${form.category}</span>
          </div>

          <!-- Search Model Filter -->
          <div class="relative">
            <svg class="w-4 h-4 text-[#5E6C84] absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" id="filter-model-input" placeholder="Search database models by table name or category..." class="w-full text-xs pl-9 pr-3 py-2 bg-white border border-[#DFE1E6] rounded-xl font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Model List Options -->
          <div class="space-y-2" id="available-models-container">
            ${AVAILABLE_MODELS.map(m => {
              const isSelected = m.id === selectedModel;
              return `
                <div class="model-selection-card cursor-pointer p-3 rounded-xl border transition-all flex items-start justify-between gap-3 select-none ${isSelected ? 'border-2 border-[#00A4B7] bg-[#F0F9FF] shadow-xs' : 'border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F8FAFC]'}" data-model-id="${m.id}">
                  <div class="flex items-start gap-3 min-w-0">
                    <div class="model-radio-circle w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'border-[#00A4B7] bg-[#00A4B7]' : 'border-[#CBD5E1] bg-white'}">
                      <div class="w-2 h-2 rounded-full bg-white ${isSelected ? '' : 'hidden'}"></div>
                    </div>
                    <div class="min-w-0">
                      <div class="flex items-center gap-2 flex-wrap">
                        <span class="font-mono font-bold text-xs text-[#0F172A]">${m.id}</span>
                        <span class="text-xs font-semibold text-[#172B4D]">— ${m.name}</span>
                        <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F1F5F9] text-[#5E6C84] border border-[#DFE1E6]">${m.category}</span>
                      </div>
                      <p class="text-[11px] text-[#5E6C84] mt-1 leading-snug">${m.desc}</p>
                    </div>
                  </div>
                  <span class="text-[10px] font-mono font-bold text-[#00A4B7] bg-white px-2 py-0.5 rounded-full border border-[#DFE1E6] shrink-0 whitespace-nowrap">${m.recordsCount} rows</span>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Custom Model Table Input Accordion -->
          <div class="p-3 bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl space-y-1.5">
            <div class="flex items-center justify-between">
              <label for="custom-model-input" class="text-[11px] font-bold text-[#172B4D]">Or Specify Custom / New Table Key:</label>
              <span class="text-[10px] text-[#5E6C84] font-mono">e.g. dfl_export_manifests</span>
            </div>
            <input type="text" id="custom-model-input" placeholder="Enter custom table key..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          text: 'Cancel',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Assign Model',
          text: 'Assign Model',
          class: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer inline-flex items-center gap-1.5',
          onClick: () => {
            const customInput = document.getElementById('custom-model-input')?.value?.trim();
            const finalModel = customInput || selectedModel;

            if (!finalModel) {
              Toast.show('Please select or enter a database model', 'warning');
              return false;
            }

            form.model = finalModel;
            this.initFormsDataTable();
            Modal.close();
            Toast.show(`Model "${finalModel}" assigned to "${form.name}"!`, 'success');
          }
        }
      ]
    });

    setTimeout(() => {
      const container = document.getElementById('available-models-container');
      const searchInput = document.getElementById('filter-model-input');
      const customInput = document.getElementById('custom-model-input');

      if (container) {
        container.addEventListener('click', (e) => {
          const card = e.target.closest('.model-selection-card');
          if (!card) return;

          selectedModel = card.dataset.modelId;
          if (customInput) customInput.value = '';

          container.querySelectorAll('.model-selection-card').forEach(c => {
            const isThis = c.dataset.modelId === selectedModel;
            if (isThis) {
              c.className = 'model-selection-card cursor-pointer p-3 rounded-xl border transition-all flex items-start justify-between gap-3 select-none border-2 border-[#00A4B7] bg-[#F0F9FF] shadow-xs';
              const circle = c.querySelector('.model-radio-circle');
              if (circle) circle.className = 'model-radio-circle w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 transition-colors border-[#00A4B7] bg-[#00A4B7]';
              const dot = c.querySelector('.model-radio-circle div');
              if (dot) dot.classList.remove('hidden');
            } else {
              c.className = 'model-selection-card cursor-pointer p-3 rounded-xl border transition-all flex items-start justify-between gap-3 select-none border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F8FAFC]';
              const circle = c.querySelector('.model-radio-circle');
              if (circle) circle.className = 'model-radio-circle w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 transition-colors border-[#CBD5E1] bg-white';
              const dot = c.querySelector('.model-radio-circle div');
              if (dot) dot.classList.add('hidden');
            }
          });
        });
      }

      if (searchInput && container) {
        searchInput.addEventListener('input', () => {
          const query = searchInput.value.toLowerCase().trim();
          container.querySelectorAll('.model-selection-card').forEach(c => {
            const text = c.textContent.toLowerCase();
            c.style.display = text.includes(query) ? '' : 'none';
          });
        });
      }

      if (customInput) {
        customInput.addEventListener('input', () => {
          if (customInput.value.trim()) {
            container?.querySelectorAll('.model-selection-card').forEach(c => {
              c.className = 'model-selection-card cursor-pointer p-3 rounded-xl border transition-all flex items-start justify-between gap-3 select-none border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F8FAFC]';
              const circle = c.querySelector('.model-radio-circle');
              if (circle) circle.className = 'model-radio-circle w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 transition-colors border-[#CBD5E1] bg-white';
              const dot = c.querySelector('.model-radio-circle div');
              if (dot) dot.classList.add('hidden');
            });
          }
        });
      }
    }, 20);
  },

  openFormPreviewModal(formId) {
    const form = this.forms.find(f => f.id === formId);
    if (!form) return;
    const fields = this.formFields[form.id] || [];

    // Group fields by section
    const sectionsMap = {};
    fields.forEach(f => {
      const sec = f.section || 'General Information';
      if (!sectionsMap[sec]) sectionsMap[sec] = [];
      sectionsMap[sec].push(f);
    });
    const sectionNames = Object.keys(sectionsMap);

    // Realistic sample values for export shipment testing
    const sampleRecordValues = {
      buyer_name: 'Apex Frozen Foods Inc (USA)',
      pi_number: 'PI-2024-8841',
      pi_date: '2026-10-25',
      exporter_entity: 'Devi Fisheries Limited — Unit I',
      processing_plant: 'Unit-1 VSP (Harbour)',
      species: 'Vannamei White Shrimp (Penaeus vannamei)',
      grade_variety: 'Raw IQF Easy Peel 16/20 count',
      quantity_net: '38,500',
      unit_price_usd: '5.85',
      total_value_usd: '225,225.00',
      port_of_loading: 'Visakhapatnam Port (INVTZ1)',
      port_of_discharge: 'Los Angeles / Long Beach (USLAX)',
      payment_terms: 'LC at Sight 100% Irrevocable',
      incoterms: 'CIF — Cost, Insurance & Freight',
      ci_number: 'CI-2024-5102',
      ci_date: '2026-10-28',
      ref_pi_number: 'PI-2024-8841',
      consignee_name: 'Sysco Global Distribution Hub — CA',
      total_net_weight: '38500',
      total_gross_weight: '41200',
      container_number: 'MSKU-982144-7',
      seal_number: 'USC-881920',
      isf_number: 'ISF-2024-0981',
      importer_ein: '11-3489120',
      stuffer_name: 'Devi Cold Storage CFS Vizag',
      bl_number: 'MAEU-99210081',
      sb_number: 'SB-2024-4410',
      sb_date: '2026-10-29',
      fob_value_inr: '18,850,000',
      leo_date: '2026-10-30',
      final_inv_no: 'COMM-2024-882',
      realization_date: '2026-11-15',
      realized_usd: '225,225',
      fda_pn_number: 'FDA-PN-2024-771',
      production_country: 'India (Andhra Pradesh)',
      fda_facility_reg: '19827364100',
      entry_ref: 'CC-2024-118',
      agent_name: 'Vanguard Customs Logistics Vizag',
      duty_inr: '0.00',
      fc_ref: 'FC-2024-301',
      bank_name: 'State Bank of India — Overseas Branch',
      booked_rate: '84.15'
    };

    const renderFieldInput = (f) => {
      const typeLower = (f.type || '').toLowerCase();
      const ph = f.placeholder || `e.g. ${f.label}`;
      const val = sampleRecordValues[f.key] || '';

      if (typeLower.includes('date')) {
        return `<input type="date" value="${val}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg text-[#172B4D] focus:outline-none focus:border-[#00A4B7] font-medium shadow-2xs" />`;
      } else if (typeLower.includes('currency')) {
        return `
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#00A4B7]">$</span>
            <input type="text" value="${val}" placeholder="0.00" style="padding-left: 26px;" class="w-full text-xs pr-3 py-2 bg-white border border-[#DFE1E6] rounded-lg text-[#172B4D] focus:outline-none focus:border-[#00A4B7] font-medium shadow-2xs" />
          </div>
        `;
      } else if (typeLower.includes('number')) {
        return `<input type="number" value="${val}" placeholder="0" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg text-[#172B4D] focus:outline-none focus:border-[#00A4B7] font-medium shadow-2xs" />`;
      } else if (typeLower.includes('dropdown') || typeLower.includes('choice')) {
        const defaultOptions = f.options && f.options.length ? f.options : (val ? [val, 'Alternate Option A', 'Alternate Option B'] : ['Select option', 'Option 1', 'Option 2', 'Option 3']);
        return `
          <select class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] font-medium text-[#172B4D] shadow-2xs cursor-pointer">
            ${defaultOptions.map(opt => `<option value="${opt}" ${opt === val ? 'selected' : ''}>${opt}</option>`).join('')}
          </select>
        `;
      } else if (typeLower.includes('textarea') || typeLower.includes('multi-line')) {
        return `<textarea rows="2" placeholder="${ph}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${val}</textarea>`;
      } else if (typeLower.includes('toggle') || typeLower.includes('checkbox')) {
        return `
          <div class="py-1 flex items-center gap-2.5">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked class="sr-only peer">
              <div class="w-9 h-5 bg-[#CBD5E1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#DFE1E6] after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
            </label>
            <span class="text-xs font-semibold text-[#172B4D]">Active</span>
          </div>
        `;
      } else if (typeLower.includes('formula')) {
        return `
          <div class="w-full text-xs px-3 py-2 bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg font-mono text-[#00A4B7] font-bold flex items-center justify-between shadow-2xs">
            <span>$${val || '225,225.00'}</span>
            <span class="text-[9px] font-bold text-[#00A4B7] uppercase tracking-wider bg-white px-1.5 py-0.5 rounded border border-[#BAE6FD]">Auto-Calculated</span>
          </div>
        `;
      } else {
        return `<input type="text" value="${val}" placeholder="${ph}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg text-[#172B4D] focus:outline-none focus:border-[#00A4B7] font-medium shadow-2xs" />`;
      }
    };

    Modal.open({
      title: `Add Record: ${form.name}`,
      size: 'xl',
      content: `
        <div class="bg-transparent p-0 border-0 space-y-6 max-h-[80vh] overflow-y-auto pr-1">
          ${sectionNames.map((secName) => {
            const secFields = sectionsMap[secName] || [];
            return `
              <div class="space-y-3.5">
                <div class="flex items-center justify-between border-b border-[#EBECF0]">
                  <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">${secName}</span>
                </div>

                <!-- 4 Columns Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  ${secFields.map(f => `
                    <div class="${(f.type || '').toLowerCase().includes('textarea') || (f.type || '').toLowerCase().includes('multi-line') ? 'col-span-1 sm:col-span-2 lg:col-span-4' : ''}">
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-0">
                        ${f.label} ${f.required ? '<span class="text-rose-500">*</span>' : ''}
                      </label>
                      ${renderFieldInput(f)}
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `
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
          <!-- Form Metadata Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pb-3 border-b border-[#F1F5F9]">
            <div>
              <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Form Code</span>
              <span class="font-mono font-bold text-[#00A4B7] text-xs block mt-0.5">${form.code}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Form Name</span>
              <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${form.name}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Category</span>
              <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF] inline-block mt-0.5">${form.category}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Database Model</span>
              <span class="font-mono text-xs text-[#172B4D] block mt-0.5">${form.model}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Status</span>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] inline-block mt-0.5">${form.status}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Total Fields</span>
              <span class="font-bold text-[#006644] text-xs block mt-0.5">${fields.length} Configured</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Last Modified</span>
              <span class="font-mono text-xs text-[#5E6C84] block mt-0.5">${form.updatedAt || 'Recently'}</span>
            </div>
          </div>

          <!-- Fields Breakdown Section -->
          <div>
            <div class="flex items-center justify-between pb-2 border-b border-[#F1F5F9] mb-3">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Configured Form Fields (${fields.length})</h4>
              </div>
              <span class="text-[11px] text-[#5E6C84]">Active data points</span>
            </div>

            ${fields.length > 0 ? `
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                ${fields.map(f => `
                  <div class="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">${f.type}</span>
                      ${f.required ? '<span class="text-[9px] font-bold text-[#DE350B] uppercase">Req</span>' : ''}
                    </div>
                    <span class="font-semibold text-[#172B4D] text-xs block mt-0.5 break-words">${f.label}</span>
                    <span class="text-[10px] font-mono text-[#00A4B7] block mt-0.5">${f.key}</span>
                    <span class="text-[10px] text-[#5E6C84] block mt-0.5 truncate">${f.section || 'General'}</span>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div class="text-center py-6 text-xs text-[#5E6C84]">No fields configured yet for this form.</div>
            `}
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

  openAddFieldModal(targetForm = null) {
    const defaultFormCode = targetForm?.id || this.selectedFormCode || 'FORM-PI';
    const DATA_TYPES = [
      { id: 'single-line-text', title: 'Single Line Text', category: 'Text', icon: 'text', badge: 'T' },
      { id: 'multi-line-text', title: 'Multi-Line Text Area', category: 'Text', icon: 'textarea' },
      { id: 'email', title: 'Email Address', category: 'Text', icon: 'email' },
      { id: 'phone', title: 'Phone Number', category: 'Text', icon: 'phone' },
      { id: 'website', title: 'Website Link (URL)', category: 'Text', icon: 'website' },
      { id: 'number', title: 'Numeric Counter', category: 'Number', icon: 'number', badge: '#' },
      { id: 'currency', title: 'Monetary Currency', category: 'Number', icon: 'currency', badge: '$' },
      { id: 'dropdown', title: 'Dropdown Menu', category: 'Choice', icon: 'dropdown' },
      { id: 'multi-select', title: 'Multi-Select Tags', category: 'Choice', icon: 'multi-select' },
      { id: 'radio', title: 'Radio Choice Buttons', category: 'Choice', icon: 'radio' },
      { id: 'toggle', title: 'Toggle Switch / Checkbox', category: 'Choice', icon: 'toggle' },
      { id: 'date', title: 'Calendar Date', category: 'Date & Time', icon: 'date' },
      { id: 'time', title: 'Clock Time', category: 'Date & Time', icon: 'time' },
      { id: 'datetime', title: 'Date & Time Combo', category: 'Date & Time', icon: 'datetime' },
      { id: 'file', title: 'File & Document Upload', category: 'Media', icon: 'file' },
      { id: 'rating', title: 'Star Rating', category: 'Advanced', icon: 'rating' },
      { id: 'color', title: 'Color Picker', category: 'Advanced', icon: 'color' }
    ];

    const renderTypeIcon = (type) => {
      if (type.badge) {
        return `<span class="font-bold text-xs">${type.badge}</span>`;
      }
      switch (type.icon) {
        case 'textarea':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h9"/></svg>`;
        case 'email':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`;
        case 'phone':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`;
        case 'website':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>`;
        case 'dropdown':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 11h16M4 16h10"/></svg>`;
        case 'multi-select':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>`;
        case 'radio':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.828a5 5 0 010-7.072m7.072 0a5 5 0 010 7.072M13 12a1 1 0 11-2 0 1 1 0 012 0z"/></svg>`;
        case 'toggle':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`;
        case 'date':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`;
        case 'time':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
        case 'datetime':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM12 14v3l2 1"/></svg>`;
        case 'file':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>`;
        case 'rating':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>`;
        case 'color':
          return `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4 7 7 0 017-7h.09A5.986 5.986 0 0116 8c3.314 0 6 2.686 6 6 0 2.21-1.79 4-4 4h-1a2 2 0 00-2 2c0 1.1-.9 2-2 2z"/></svg>`;
        default:
          return `<span class="font-bold text-xs">T</span>`;
      }
    };

    let selectedType = DATA_TYPES[0];

    Modal.open({
      title: 'Add Custom Field',
      size: 'full',
      content: `
        <form id="modal-form-add-field" class="flex flex-col lg:flex-row gap-5 items-start">
          <!-- LEFT: Sticky / Fixed-Height Live Interactive Component Preview -->
          <div class="w-full lg:w-[370px] xl:w-[390px] shrink-0 lg:sticky lg:top-0 self-start">
            <div class="rounded-2xl border border-[#DFE1E6] bg-white shadow-xs overflow-hidden">
              <!-- Preview Header Bar (Teal brand gradient) -->
              <div class="preview-header-gradient bg-gradient-to-r from-[#00A4B7] to-[#007A87] text-white px-4 py-3 flex items-center shadow-xs shrink-0" style="background: linear-gradient(135deg, #00A4B7 0%, #007A87 100%) !important; color: #FFFFFF !important; min-height: 44px !important; display: flex !important; align-items: center !important; padding: 12px 16px !important; border-top-left-radius: 14px !important; border-top-right-radius: 14px !important;">
                <div class="flex items-center gap-2.5" style="display: flex !important; align-items: center !important; gap: 10px !important;">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse" style="background-color: #10B981 !important; width: 10px !important; height: 10px !important; min-width: 10px !important; min-height: 10px !important; border-radius: 9999px !important; display: inline-block !important; box-shadow: 0 0 8px rgba(16, 185, 129, 0.9) !important; flex-shrink: 0 !important;"></span>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-white" style="color: #FFFFFF !important; font-size: 12px !important; font-weight: 800 !important; letter-spacing: 0.05em !important; text-transform: uppercase !important; margin: 0 !important; padding: 0 !important; display: block !important; visibility: visible !important; opacity: 1 !important; line-height: 1.25 !important;">LIVE INTERACTIVE COMPONENT PREVIEW</h4>
                </div>
              </div>

              <div class="p-3.5 space-y-3 bg-[#172B4D]">
                <!-- Test Against Sample Record -->
                <div class="p-3.5 bg-white rounded-xl border border-[#DFE1E6] shadow-2xs space-y-2">
                  <div class="flex items-center gap-2 text-xs font-semibold text-[#475569]">
                    <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    <span>Test Against Sample Shipment / PI:</span>
                  </div>
                  <select id="preview-sample-record" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#0F172A] focus:outline-none focus:border-[#00A4B7] cursor-pointer">
                    <option value="pi1">PI-2024-8841 — Apex Frozen Foods (USA - 40ft FCL Vannamei)</option>
                    <option value="pi2">PI-2024-8902 — Marunaka Co Ltd (Japan - Black Tiger HOSO)</option>
                    <option value="pi3">PI-2024-8935 — Ocean Harvest Corp (EU - Raw IQF PDTO)</option>
                    <option value="pi4">PI-2024-8970 — Sysco International (USA - Block Frozen HLSO)</option>
                  </select>
                </div>

                <!-- Main Live Interactive Component Card -->
                <div class="p-3.5 bg-white rounded-xl border border-[#DFE1E6] shadow-2xs space-y-3">
                  <div>
                    <div class="flex items-center justify-between text-xs pb-2 border-b border-[#F1F5F9] gap-2">
                      <div class="flex items-center gap-2 min-w-0">
                        <span id="preview-section-title" class="font-bold text-[#00A4B7] uppercase tracking-wider truncate">HEADER INFORMATION</span>
                        <span id="preview-type-badge" class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] shrink-0">Single Line Text</span>
                      </div>
                    </div>

                    <div class="space-y-1.5 pt-3">
                      <label class="block text-sm font-bold text-[#0F172A]">
                        <span id="preview-field-label">Untitled Field</span>
                        <span id="preview-mandatory-star" class="text-[#DE350B] hidden">*</span>
                      </label>
                      <div id="preview-input-container">
                        <!-- Rendered dynamically -->
                      </div>
                      <p id="preview-helper-text" class="text-xs text-[#64748B] hidden"></p>
                    </div>
                  </div>

                  <div class="pt-2 text-xs text-[#64748B] flex items-center justify-between border-t border-[#F1F5F9]">
                    <span>Active Output:</span>
                    <code id="preview-active-output" class="font-mono text-xs text-[#475569] font-medium">""</code>
                  </div>
                </div>

                <!-- Bottom Metadata Dual Cards -->
                <div class="grid grid-cols-2 gap-3 shrink-0">
                  <div class="p-3 bg-white rounded-xl border border-[#DFE1E6] shadow-2xs">
                    <span class="text-xs text-[#64748B] block font-medium">Database Key:</span>
                    <span id="preview-db-key" class="font-mono font-bold text-xs text-[#00A4B7] block mt-1 truncate">untitledKey</span>
                  </div>
                  <div class="p-3 bg-white rounded-xl border border-[#DFE1E6] shadow-2xs">
                    <span class="text-xs text-[#64748B] block font-medium">Field Engine:</span>
                    <span id="preview-field-engine" class="font-bold text-xs text-[#0F172A] block mt-1">Single Line Text (Standard Text Engine)</span>
                  </div>
                </div>
              </div>

              <!-- Collapsible Assign to Tab Accordion -->
              <div class="border-t border-[#DFE1E6] bg-white overflow-hidden">
                <button type="button" id="preview-toggle-json" class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#F8FAFC] transition-colors cursor-pointer select-none">
                  <div class="flex items-center gap-2 text-xs font-semibold text-[#475569]">
                    <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
                    <span>Assign to Tab</span>
                  </div>
                  <svg id="preview-json-chevron" class="w-3.5 h-3.5 text-[#64748B] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div id="preview-json-content" class="hidden px-4 pb-4 pt-2 border-t border-[#F1F5F9] bg-[#FAFBFC] space-y-2">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-[#5E6C84] font-medium">Assigned Tab / Section:</span>
                    <span id="preview-assigned-tab-val" class="font-bold text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded text-[11px] border border-[#BAE6FD]">Header Information</span>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-[#5E6C84] font-medium">Target Form:</span>
                    <span id="preview-assigned-form-val" class="font-semibold text-[#172B4D]">FORM-PI</span>
                  </div>
                  <div class="pt-1">
                    <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-1">Active Placements:</span>
                    <div id="preview-assigned-placements" class="flex flex-wrap gap-1.5">
                      <span class="px-2 py-0.5 bg-white border border-[#DFE1E6] rounded text-[10px] font-medium text-[#172B4D]">PI / Order Entry</span>
                      <span class="px-2 py-0.5 bg-white border border-[#DFE1E6] rounded text-[10px] font-medium text-[#172B4D]">Documentation Hub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT: Form Configuration Fields (Scrollable area) -->
          <div class="flex-1 min-w-0 space-y-4 max-h-[82vh] overflow-y-auto pr-2">
            <!-- Target Form Selector -->
            <div class="flex items-center justify-start gap-2">
              <label for="add-fld-target-form" class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider whitespace-nowrap">Target Form:</label>
              <select id="add-fld-target-form" class="text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs min-w-[220px]">
                ${this.forms.map(f => `
                  <option value="${f.id}" ${f.id === (targetForm?.id || defaultFormCode) ? 'selected' : ''}>${f.code} — ${f.name}</option>
                `).join('')}
              </select>
            </div>

            <!-- SELECT INPUT DATA TYPE (3-Column Layout) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between pb-2 border-b border-[#F1F5F9] mb-3">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">SELECT INPUT DATA TYPE</h3>
                </div>
              </div>

              <!-- 17 Data Type Cards Grid (3-Column Layout) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" id="data-type-grid">
                ${DATA_TYPES.map((t, idx) => {
                  const isSelected = idx === 0;
                  return `
                    <div class="data-type-card cursor-pointer p-3 rounded-xl border transition-all relative flex items-center gap-2.5 select-none ${isSelected ? 'border-2 border-[#00A4B7] bg-[#F0F9FF] shadow-xs' : 'border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F8FAFC]'}"
                         data-type-id="${t.id}"
                         data-type-title="${t.title}"
                         data-category="${t.category}"
                         onclick="window.__selectCustomFieldType && window.__selectCustomFieldType('${t.id}')">
                      <div class="icon-box w-8 h-8 min-w-[32px] rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors pointer-events-none ${isSelected ? 'bg-[#00A4B7] text-white shadow-xs' : 'bg-[#F1F5F9] text-[#5E6C84]'}">
                        ${renderTypeIcon(t)}
                      </div>
                      <div class="min-w-0 flex-1 pointer-events-none">
                        <div class="text-xs font-bold text-[#172B4D] leading-snug truncate" title="${t.title}">${t.title}</div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- CORE IDENTITY & PLACEMENT (3-Column Layout) -->
            <div class="space-y-3.5">
              <div class="flex items-center justify-between border-b border-[#F1F5F9]">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">CORE IDENTITY &amp; PLACEMENT</h3>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                <div>
                  <div class="flex items-center justify-between">
                    <label class="block text-[11px] font-bold text-[#172B4D]">Field Label <span class="text-[#DE350B]">*</span></label>
                    <span class="text-[10px] text-[#5E6C84]">User title</span>
                  </div>
                  <input type="text" id="add-fld-label" required placeholder="e.g. Container Temperature (°C)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs mt-1" />
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label class="block text-[11px] font-bold text-[#172B4D]">Database Key</label>
                    <button type="button" id="btn-copy-fld-key" class="text-[11px] font-bold text-[#00A4B7] hover:underline cursor-pointer inline-flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  <input type="text" id="add-fld-key" placeholder="e.g. containerTemperature" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs font-mono mt-1" />
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label class="block text-[11px] font-bold text-[#172B4D]">Form Section</label>
                    <button type="button" id="btn-new-section" class="text-[11px] font-bold text-[#00A4B7] hover:underline cursor-pointer">+ New</button>
                  </div>
                  <select id="add-fld-section" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs mt-1">
                    <option value="Header Information" selected>Header Information</option>
                    <option value="Product & Pricing">Product &amp; Pricing</option>
                    <option value="Commercial Terms">Commercial Terms</option>
                    <option value="Shipping & Logistics">Shipping &amp; Logistics</option>
                    <option value="Customs & Clearance">Customs &amp; Clearance</option>
                    <option value="Banking & Finance">Banking &amp; Finance</option>
                    <option value="Quality Compliance">Quality Compliance</option>
                  </select>
                  <!-- Inline quick add new section container -->
                  <div id="new-section-inline-box" class="hidden mt-1.5 flex items-center gap-1.5">
                    <input type="text" id="new-section-inline-input" placeholder="New section name..." class="flex-1 text-xs px-2.5 py-1 bg-white border border-[#00A4B7] rounded-lg font-semibold text-[#172B4D] focus:outline-none shadow-2xs" />
                    <button type="button" id="btn-save-inline-sec" class="px-2.5 py-1 bg-[#00A4B7] hover:bg-[#008F9F] text-white text-[11px] font-bold rounded-lg cursor-pointer transition-colors shadow-2xs">Add</button>
                    <button type="button" id="btn-cancel-inline-sec" class="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-[#5E6C84] text-[11px] font-bold rounded-lg cursor-pointer transition-colors">✕</button>
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="block text-[11px] font-bold text-[#172B4D]">Placeholder Text</label>
                    <span class="text-[10px] text-[#5E6C84]">Input hint</span>
                  </div>
                  <input type="text" id="add-fld-placeholder" placeholder="e.g. -18°C or below" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <div class="col-span-1 sm:col-span-2 lg:col-span-2">
                  <label class="block text-[11px] font-bold text-[#172B4D] mb-1">Helper / Description Text</label>
                  <input type="text" id="add-fld-helper" placeholder="e.g. Required for reefer cold-chain compliance reporting..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>
              </div>
            </div>

            <!-- CHOICE OPTIONS (Conditioned on Choice Types) -->
            <div id="section-choice-options" class="space-y-2 hidden p-3.5 bg-[#F8FAFC] rounded-xl border border-[#DFE1E6]">
              <div class="flex items-center justify-between">
                <label class="block text-[11px] font-bold text-[#172B4D]">Choice Options (Comma separated)</label>
                <span class="text-[10px] text-[#5E6C84]">For Dropdown / Radios</span>
              </div>
              <input type="text" id="add-fld-options" placeholder="e.g. Option A, Option B, Option C" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>

            <!-- VALIDATION & ACCESS RULES (4-Column Layout) -->
            <div class="space-y-3.5">
              <div class="flex items-center justify-between border-b border-[#F1F5F9]">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">VALIDATION &amp; ACCESS RULES</h3>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-end">
                <div class="p-3 bg-white border border-[#DFE1E6] rounded-xl flex items-center justify-between shadow-2xs">
                  <div>
                    <span class="text-xs font-bold text-[#172B4D] block">Mandatory Field</span>
                    <span class="text-[10px] text-[#5E6C84] block">Required on submit</span>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="add-fld-mandatory" class="sr-only peer">
                    <div class="w-9 h-5 bg-[#CBD5E1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#DFE1E6] after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>

                <div class="p-3 bg-white border border-[#DFE1E6] rounded-xl flex items-center justify-between shadow-2xs">
                  <div>
                    <span class="text-xs font-bold text-[#172B4D] block">Active Status</span>
                    <span class="text-[10px] text-[#5E6C84] block">Visible across forms</span>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="add-fld-status" checked class="sr-only peer">
                    <div class="w-9 h-5 bg-[#CBD5E1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#DFE1E6] after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>

                <div class="col-span-1 sm:col-span-2">
                  <label class="block text-[11px] font-bold text-[#172B4D] mb-1">Field Level Role Access</label>
                  <select id="add-fld-permission" class="w-full text-xs px-2.5 py-2.5 bg-white border border-[#DFE1E6] rounded-xl font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs h-[42px]">
                    <option value="Export Documentation & Sales (Standard)" selected>Export Documentation &amp; Sales (Standard)</option>
                    <option value="Finance & Accounts Only">Finance &amp; Accounts Only</option>
                    <option value="Quality Control & Labs">Quality Control &amp; Labs</option>
                    <option value="Logistics & Port Clearing">Logistics &amp; Port Clearing</option>
                    <option value="System Administrators Only">System Administrators Only</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- MODULE VISIBILITY MATRIX -->
            <div class="space-y-3.5">
              <div class="flex items-center justify-between border-b border-[#F1F5F9]">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">MODULE VISIBILITY MATRIX</h3>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label class="p-3 bg-white border border-[#DFE1E6] rounded-xl flex items-center justify-between cursor-pointer hover:bg-[#F8FAFC] shadow-2xs">
                  <div>
                    <span class="text-xs font-bold text-[#172B4D] block">PI / Order Entry</span>
                    <span class="text-[10px] text-[#5E6C84] block">Show on initial entry</span>
                  </div>
                  <input type="checkbox" id="matrix-add-form" checked class="rounded border-[#CBD5E1] text-[#00A4B7] focus:ring-[#00A4B7] w-4 h-4 cursor-pointer" />
                </label>

                <label class="p-3 bg-white border border-[#DFE1E6] rounded-xl flex items-center justify-between cursor-pointer hover:bg-[#F8FAFC] shadow-2xs">
                  <div>
                    <span class="text-xs font-bold text-[#172B4D] block">Documentation Hub</span>
                    <span class="text-[10px] text-[#5E6C84] block">Include on export docs</span>
                  </div>
                  <input type="checkbox" id="matrix-onboarding" checked class="rounded border-[#CBD5E1] text-[#00A4B7] focus:ring-[#00A4B7] w-4 h-4 cursor-pointer" />
                </label>

                <label class="p-3 bg-white border border-[#DFE1E6] rounded-xl flex items-center justify-between cursor-pointer hover:bg-[#F8FAFC] shadow-2xs">
                  <div>
                    <span class="text-xs font-bold text-[#172B4D] block">Buyer Realization</span>
                    <span class="text-[10px] text-[#5E6C84] block">Display in summary cards</span>
                  </div>
                  <input type="checkbox" id="matrix-profile" class="rounded border-[#CBD5E1] text-[#00A4B7] focus:ring-[#00A4B7] w-4 h-4 cursor-pointer" />
                </label>
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
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
            const formCode = document.getElementById('add-fld-target-form')?.value || defaultFormCode;
            const label = document.getElementById('add-fld-label')?.value?.trim();
            let key = document.getElementById('add-fld-key')?.value?.trim();
            const section = document.getElementById('add-fld-section')?.value?.trim() || 'Header Information';
            const placeholder = document.getElementById('add-fld-placeholder')?.value?.trim() || '';
            const helper = document.getElementById('add-fld-helper')?.value?.trim() || '';
            const mandatory = document.getElementById('add-fld-mandatory')?.checked || false;
            const status = document.getElementById('add-fld-status')?.checked ? 'Active' : 'Inactive';
            const permission = document.getElementById('add-fld-permission')?.value || 'Export Documentation & Sales (Standard)';
            const options = document.getElementById('add-fld-options')?.value?.trim() || '';

            if (!label) {
              Toast.show('Please enter a Field Label', 'warning');
              document.getElementById('add-fld-label')?.focus();
              return false;
            }

            if (!key) {
              key = label.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '');
            }

            if (!this.formFields[formCode]) {
              this.formFields[formCode] = [];
            }

            const newField = {
              id: `fld_${Date.now().toString().slice(-5)}`,
              label,
              key,
              type: selectedType.title,
              category: selectedType.category,
              section,
              placeholder,
              helper,
              required: mandatory,
              status,
              permission,
              options: options ? options.split(',').map(s => s.trim()).filter(Boolean) : [],
              isFilter: true
            };

            this.formFields[formCode].push(newField);
            const targetFormObj = this.forms.find(f => f.id === formCode);
            if (targetFormObj) {
              targetFormObj.fieldsCount = this.formFields[formCode].length;
            }

            Modal.close();
            this.selectedFormCode = formCode;
            this.filterAndRenderFields();
            Toast.show(`Field "${label}" (${selectedType.title}) added successfully!`, 'success');
          }
        }
      ]
    });

    // Wire up interactive events
    setTimeout(() => {
      const typeGrid = document.getElementById('data-type-grid');
      const choiceSection = document.getElementById('section-choice-options');
      const labelInput = document.getElementById('add-fld-label');
      const keyInput = document.getElementById('add-fld-key');
      let keyManuallyChanged = false;

      if (keyInput) {
        keyInput.addEventListener('input', () => {
          keyManuallyChanged = true;
        });
      }

      if (labelInput && keyInput) {
        labelInput.addEventListener('input', () => {
          if (!keyManuallyChanged) {
            const raw = labelInput.value.trim();
            // Convert to camelCase
            const camel = raw.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '');
            keyInput.value = camel;
          }
        });
      }

      // Copy Key button
      const btnCopyKey = document.getElementById('btn-copy-fld-key');
      if (btnCopyKey && keyInput) {
        btnCopyKey.addEventListener('click', () => {
          if (keyInput.value) {
            navigator.clipboard?.writeText(keyInput.value);
            Toast.show(`Key "${keyInput.value}" copied to clipboard!`, 'info');
          } else {
            Toast.show('No database key to copy yet', 'warning');
          }
        });
      }

      // New Section button with inline quick-add
      const btnNewSection = document.getElementById('btn-new-section');
      const sectionSelect = document.getElementById('add-fld-section');
      const inlineSecBox = document.getElementById('new-section-inline-box');
      const inlineSecInput = document.getElementById('new-section-inline-input');
      const btnSaveInlineSec = document.getElementById('btn-save-inline-sec');
      const btnCancelInlineSec = document.getElementById('btn-cancel-inline-sec');

      const applyNewSection = (rawName) => {
        const secName = (rawName || '').trim();
        if (!secName) return;
        let existing = Array.from(sectionSelect.options).find(o => o.value.toLowerCase() === secName.toLowerCase());
        if (existing) {
          sectionSelect.value = existing.value;
        } else {
          const opt = document.createElement('option');
          opt.value = secName;
          opt.textContent = secName;
          sectionSelect.appendChild(opt);
          sectionSelect.value = secName;
        }
        sectionSelect.dispatchEvent(new Event('change'));
        updateLivePreview();
        Toast.show(`Section "${secName}" added!`, 'success');
        if (inlineSecBox) inlineSecBox.classList.add('hidden');
        if (inlineSecInput) inlineSecInput.value = '';
      };

      if (btnNewSection && inlineSecBox && inlineSecInput) {
        btnNewSection.addEventListener('click', () => {
          inlineSecBox.classList.toggle('hidden');
          if (!inlineSecBox.classList.contains('hidden')) {
            inlineSecInput.focus();
          }
        });

        if (btnSaveInlineSec) {
          btnSaveInlineSec.addEventListener('click', () => {
            applyNewSection(inlineSecInput.value);
          });
        }

        if (btnCancelInlineSec) {
          btnCancelInlineSec.addEventListener('click', () => {
            inlineSecBox.classList.add('hidden');
            inlineSecInput.value = '';
          });
        }

        inlineSecInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            applyNewSection(inlineSecInput.value);
          } else if (e.key === 'Escape') {
            inlineSecBox.classList.add('hidden');
            inlineSecInput.value = '';
          }
        });
      }

      // Sample shipment mock mapping per target form
      const formSampleRecords = {
        'FORM-PI': [
          'PI-2024-8841 — Apex Frozen Foods (USA - 40ft FCL Vannamei)',
          'PI-2024-8902 — Marunaka Co Ltd (Japan - Black Tiger HOSO)',
          'PI-2024-8935 — Ocean Harvest Corp (EU - Raw IQF PDTO)',
          'PI-2024-8970 — Sysco International (USA - Block Frozen HLSO)'
        ],
        'FORM-CI': [
          'CI-2024-5102 — Marunaka Co Ltd (Invoice USD 184,200)',
          'CI-2024-5103 — Apex Frozen Foods (Invoice USD 242,500)',
          'CI-2024-5104 — Ocean Harvest Corp (Invoice EUR 145,000)'
        ],
        'FORM-ISF': [
          'ISF-2024-0981 — US Customs 10+2 Filing (Vessel MSC EVA)',
          'ISF-2024-0982 — US Customs 10+2 Filing (Maersk Seletar)'
        ],
        'FORM-SB': [
          'SB-2024-4410 — Shipping Bill Clear (Port: INVTZ1)',
          'SB-2024-4411 — Customs LEO Granted (Port: INMAA1)'
        ],
        'FORM-COMM': [
          'COMM-2024-882 — Realization Pending (HSBC Bank USD)',
          'COMM-2024-883 — Full Realized (Citibank NA USD)'
        ],
        'FORM-FDA': [
          'FDA-PN-2024-771 — Prior Notice Confirmation (USA Bound)',
          'FDA-PN-2024-772 — Prior Notice Verified (US-FDA)'
        ],
        'FORM-CC': [
          'CC-2024-118 — Clearing Agent Vizag Sea Entry Ref',
          'CC-2024-119 — Clearing Agent Chennai Port Entry'
        ],
        'FORM-FC': [
          'FC-2024-301 — Forward Contract USD/INR Booked @ 84.15',
          'FC-2024-302 — Forward Contract USD/INR Booked @ 84.30'
        ]
      };

      // Live Component Preview Synchronization
      const updateLivePreview = () => {
        const targetFormSelect = document.getElementById('add-fld-target-form');
        const targetFormVal = targetFormSelect?.value || 'FORM-PI';
        const labelVal = labelInput?.value?.trim() || '';
        const keyVal = keyInput?.value?.trim() || (labelVal ? labelVal.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '') : 'untitledKey');
        const sectionVal = sectionSelect?.value || 'Header Information';
        const placeholderInput = document.getElementById('add-fld-placeholder');
        const helperInput = document.getElementById('add-fld-helper');
        const permissionSelect = document.getElementById('add-fld-permission');
        const mandatoryCheckbox = document.getElementById('add-fld-mandatory');
        const statusCheckbox = document.getElementById('add-fld-status');
        const optionsInput = document.getElementById('add-fld-options');

        const placeholderVal = placeholderInput?.value?.trim() || '';
        const helperVal = helperInput?.value?.trim() || '';
        const permissionVal = permissionSelect?.value || 'Export Documentation & Sales (Standard)';
        const isMandatory = mandatoryCheckbox?.checked || false;
        const isActive = statusCheckbox ? statusCheckbox.checked : true;
        const optionsVal = optionsInput?.value?.trim() || '';
        const parsedOptions = optionsVal ? optionsVal.split(',').map(s => s.trim()).filter(Boolean) : ['Option 1', 'Option 2', 'Option 3'];

        // 1. Data Type badge in live preview
        const typeBadge = document.getElementById('preview-type-badge');
        if (typeBadge) typeBadge.textContent = selectedType.title;

        // 2. Section & Permission tags
        const cleanSection = sectionVal.includes('(') ? sectionVal.split('(')[0].trim() : sectionVal;
        const secEl = document.getElementById('preview-section-title');
        if (secEl) secEl.textContent = cleanSection.toUpperCase();

        const permEl = document.getElementById('preview-permission-tag');
        if (permEl) {
          const permText = permissionVal.includes('(') ? permissionVal.split('(')[0].trim() : permissionVal;
          permEl.textContent = isActive ? permText : `${permText} (Inactive)`;
          permEl.className = isActive ? 'text-xs text-[#64748B] font-medium shrink-0' : 'text-xs text-[#DE350B] font-bold shrink-0';
        }

        // 3. Label & Mandatory star
        const lblEl = document.getElementById('preview-field-label');
        if (lblEl) lblEl.textContent = labelVal || 'Untitled Field';

        const starEl = document.getElementById('preview-mandatory-star');
        if (starEl) {
          if (isMandatory) starEl.classList.remove('hidden');
          else starEl.classList.add('hidden');
        }

        // 4. Helper text
        const hlpEl = document.getElementById('preview-helper-text');
        if (hlpEl) {
          if (helperVal) {
            hlpEl.textContent = helperVal;
            hlpEl.classList.remove('hidden');
          } else {
            hlpEl.classList.add('hidden');
          }
        }

        // 5. Database Key
        const dbKeyEl = document.getElementById('preview-db-key');
        if (dbKeyEl) dbKeyEl.textContent = keyVal;

        // 6. Field Engine
        const engineEl = document.getElementById('preview-field-engine');
        let engineName = 'Standard Text Engine';
        if (['dropdown', 'multi-select', 'radio'].includes(selectedType.id)) {
          engineName = 'Choice Engine';
        } else if (selectedType.id === 'currency' || selectedType.id === 'number') {
          engineName = 'Numeric Engine';
        } else if (['date', 'time', 'datetime'].includes(selectedType.id)) {
          engineName = 'Date & Time Engine';
        } else if (selectedType.id === 'file') {
          engineName = 'Binary File Engine';
        } else if (['rating', 'color'].includes(selectedType.id)) {
          engineName = 'Interactive Engine';
        }
        if (engineEl) engineEl.textContent = `${selectedType.title} (${engineName})`;

        // 7. Interactive Input Element
        const inputContainer = document.getElementById('preview-input-container');
        if (inputContainer) {
          const phText = placeholderVal || `Enter ${(labelVal || 'untitled field').toLowerCase()}...`;
          let html = '';
          const currentOutput = document.getElementById('preview-active-output');

          switch (selectedType.id) {
            case 'multi-line-text':
            case 'textarea':
              html = `<textarea id="live-user-input" rows="3" placeholder="${phText}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#0F172A] focus:outline-none focus:border-[#00A4B7] transition-all"></textarea>`;
              break;
            case 'email':
              html = `
                <div class="relative flex items-center">
                  <span class="absolute left-3 text-xs text-[#00A4B7] font-bold">@</span>
                  <input type="email" id="live-user-input" placeholder="${phText}" style="padding-left: 28px;" class="w-full text-xs py-2 pr-3 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#0F172A] focus:outline-none focus:border-[#00A4B7] transition-all" />
                </div>
              `;
              break;
            case 'phone':
              html = `
                <div class="relative flex items-center">
                  <span class="absolute left-3 text-xs text-[#00A4B7]">📞</span>
                  <input type="tel" id="live-user-input" placeholder="${phText}" style="padding-left: 30px;" class="w-full text-xs py-2 pr-3 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#0F172A] focus:outline-none focus:border-[#00A4B7] transition-all" />
                </div>
              `;
              break;
            case 'website':
              html = `
                <div class="relative flex items-center">
                  <span class="absolute left-3 text-[11px] font-mono text-[#00A4B7]">https://</span>
                  <input type="url" id="live-user-input" placeholder="${phText}" style="padding-left: 60px;" class="w-full text-xs py-2 pr-3 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#0F172A] focus:outline-none focus:border-[#00A4B7] transition-all" />
                </div>
              `;
              break;
            case 'number':
              html = `<input type="number" id="live-user-input" placeholder="${placeholderVal || '0'}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#0F172A] focus:outline-none focus:border-[#00A4B7] transition-all" />`;
              break;
            case 'currency':
              html = `
                <div class="relative flex items-center">
                  <span class="absolute left-3 text-xs font-bold text-[#00A4B7]">$</span>
                  <input type="number" id="live-user-input" placeholder="${placeholderVal || '0.00'}" style="padding-left: 26px;" class="w-full text-xs py-2 pr-3 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#0F172A] focus:outline-none focus:border-[#00A4B7] transition-all" />
                </div>
              `;
              break;
            case 'dropdown':
              html = `
                <select id="live-user-input" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#0F172A] focus:outline-none focus:border-[#00A4B7] transition-all cursor-pointer">
                  ${parsedOptions.map(o => `<option value="${o}">${o}</option>`).join('')}
                </select>
              `;
              break;
            case 'radio':
              html = `
                <div class="space-y-1.5 pt-1">
                  ${parsedOptions.map((o, i) => `
                    <label class="flex items-center gap-2 text-xs text-[#0F172A] font-medium cursor-pointer">
                      <input type="radio" name="live-radio-preview" value="${o}" ${i === 0 ? 'checked' : ''} class="text-[#00A4B7] focus:ring-[#00A4B7] cursor-pointer">
                      <span>${o}</span>
                    </label>
                  `).join('')}
                </div>
              `;
              break;
            case 'multi-select':
              html = `
                <div class="flex flex-wrap gap-1.5 p-2 bg-[#F8FAFC] border border-[#DFE1E6] rounded-lg min-h-[38px]">
                  ${parsedOptions.map(o => `
                    <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">
                      ${o}
                    </span>
                  `).join('')}
                </div>
              `;
              break;
            case 'toggle':
              html = `
                <label class="relative inline-flex items-center cursor-pointer gap-2.5 pt-1">
                  <input type="checkbox" id="live-user-input" class="sr-only peer">
                  <div class="w-11 h-6 bg-[#CBD5E1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#DFE1E6] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  <span class="text-xs font-medium text-[#0F172A]">Toggle active / inactive</span>
                </label>
              `;
              break;
            case 'date':
              html = `<input type="date" id="live-user-input" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#0F172A] focus:outline-none focus:border-[#00A4B7] transition-all cursor-pointer" />`;
              break;
            case 'time':
              html = `<input type="time" id="live-user-input" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#0F172A] focus:outline-none focus:border-[#00A4B7] transition-all cursor-pointer" />`;
              break;
            case 'datetime':
              html = `<input type="datetime-local" id="live-user-input" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#0F172A] focus:outline-none focus:border-[#00A4B7] transition-all cursor-pointer" />`;
              break;
            case 'rating':
              html = `
                <div class="flex items-center gap-1.5 py-1" id="live-star-rating">
                  ${[1, 2, 3, 4, 5].map(v => `
                    <button type="button" data-val="${v}" class="star-item text-lg text-[#CBD5E1] hover:text-[#FFAB00] transition-colors cursor-pointer">★</button>
                  `).join('')}
                </div>
              `;
              break;
            case 'color':
              html = `
                <div class="flex items-center gap-2.5">
                  <input type="color" id="live-user-input" value="#00A4B7" class="w-9 h-8 rounded-lg border border-[#DFE1E6] cursor-pointer bg-white" />
                  <span id="live-color-val" class="text-xs font-mono font-bold text-[#0F172A]">#00A4B7</span>
                </div>
              `;
              break;
            case 'file':
              html = `
                <div class="border-2 border-dashed border-[#CBD5E1] hover:border-[#00A4B7] rounded-lg p-3 text-center bg-[#F8FAFC] transition-colors cursor-pointer">
                  <svg class="w-5 h-5 text-[#00A4B7] mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                  <span class="text-xs font-semibold text-[#00A4B7]">Browse or drag & drop files</span>
                </div>
              `;
              break;
            default:
              html = `<input type="text" id="live-user-input" placeholder="${phText}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-medium text-[#0F172A] focus:outline-none focus:border-[#00A4B7] transition-all" />`;
              break;
          }

          inputContainer.innerHTML = html;

          // Wire live typing in preview
          const liveInput = document.getElementById('live-user-input');
          if (liveInput) {
            const syncOutput = () => {
              if (currentOutput) {
                if (liveInput.type === 'checkbox') {
                  currentOutput.textContent = liveInput.checked ? 'true' : 'false';
                } else {
                  currentOutput.textContent = JSON.stringify(liveInput.value || '');
                }
              }
              updateAssignTabDetails();
            };
            liveInput.addEventListener('input', syncOutput);
            liveInput.addEventListener('change', syncOutput);
            syncOutput();
          }

          // Stars rating click
          const starContainer = document.getElementById('live-star-rating');
          if (starContainer) {
            starContainer.querySelectorAll('.star-item').forEach(btn => {
              btn.addEventListener('click', () => {
                const val = parseInt(btn.dataset.val);
                starContainer.querySelectorAll('.star-item').forEach(s => {
                  const sVal = parseInt(s.dataset.val);
                  s.style.color = sVal <= val ? '#FFAB00' : '#CBD5E1';
                });
                if (currentOutput) currentOutput.textContent = `${val} / 5 stars`;
                updateAssignTabDetails();
              });
            });
          }

          // Color picker live sync
          const colorInput = inputContainer.querySelector('input[type="color"]');
          const colorValSpan = document.getElementById('live-color-val');
          if (colorInput && colorValSpan) {
            colorInput.addEventListener('input', () => {
              colorValSpan.textContent = colorInput.value;
              if (currentOutput) currentOutput.textContent = JSON.stringify(colorInput.value);
              updateAssignTabDetails();
            });
          }

          // Radio preview click
          document.querySelectorAll('input[name="live-radio-preview"]').forEach(r => {
            r.addEventListener('change', () => {
              if (currentOutput) currentOutput.textContent = JSON.stringify(r.value);
              updateAssignTabDetails();
            });
          });
        }

        // 8. Update Assign to Tab Details
        const updateAssignTabDetails = () => {
          const tabValEl = document.getElementById('preview-assigned-tab-val');
          if (tabValEl) tabValEl.textContent = cleanSection;

          const formValEl = document.getElementById('preview-assigned-form-val');
          if (formValEl) formValEl.textContent = targetFormVal;

          const placementsContainer = document.getElementById('preview-assigned-placements');
          if (placementsContainer) {
            const activePlacements = [];
            if (document.getElementById('matrix-add-form')?.checked) activePlacements.push('PI / Order Entry');
            if (document.getElementById('matrix-onboarding')?.checked) activePlacements.push('Documentation Hub');
            if (document.getElementById('matrix-profile')?.checked) activePlacements.push('Buyer Realization');

            placementsContainer.innerHTML = activePlacements.length
              ? activePlacements.map(p => `<span class="px-2 py-0.5 bg-white border border-[#DFE1E6] rounded text-[10px] font-medium text-[#172B4D] shadow-2xs">${p}</span>`).join('')
              : '<span class="text-[10px] text-[#5E6C84]">None selected</span>';
          }
        };

        updateAssignTabDetails();
      };

      // Connect event listeners on form inputs to update live preview
      const formEl = document.getElementById('modal-form-add-field');
      if (formEl) {
        formEl.addEventListener('input', updateLivePreview);
        formEl.addEventListener('change', updateLivePreview);
        formEl.addEventListener('keyup', updateLivePreview);
        formEl.addEventListener('paste', () => setTimeout(updateLivePreview, 10));
      }

      // Target Form selector change updates sample records and preview
      const targetFormSelect = document.getElementById('add-fld-target-form');
      const sampleSelect = document.getElementById('preview-sample-record');
      if (targetFormSelect && sampleSelect) {
        targetFormSelect.addEventListener('change', () => {
          const formVal = targetFormSelect.value;
          const records = formSampleRecords[formVal] || formSampleRecords['FORM-PI'];
          sampleSelect.innerHTML = records.map((r, i) => `<option value="${formVal}_${i + 1}">${r}</option>`).join('');
          updateLivePreview();
        });
      }

      // Assign to Tab toggle accordion
      const toggleJsonBtn = document.getElementById('preview-toggle-json');
      const jsonContent = document.getElementById('preview-json-content');
      const jsonChevron = document.getElementById('preview-json-chevron');
      if (toggleJsonBtn && jsonContent) {
        toggleJsonBtn.addEventListener('click', () => {
          const isHidden = jsonContent.classList.contains('hidden');
          if (isHidden) {
            jsonContent.classList.remove('hidden');
            jsonChevron?.classList.add('rotate-180');
          } else {
            jsonContent.classList.add('hidden');
            jsonChevron?.classList.remove('rotate-180');
          }
        });
      }

      // Data Type Selection - robust multi-layer selection handler
      const selectDataType = (typeId) => {
        const found = DATA_TYPES.find(d => d.id === typeId);
        if (!found) return;

        selectedType = found;

        const allCards = typeGrid ? typeGrid.querySelectorAll('.data-type-card') : document.querySelectorAll('.data-type-card');
        allCards.forEach(c => {
          const isThis = c.dataset.typeId === typeId;
          if (isThis) {
            c.className = 'data-type-card cursor-pointer p-3 rounded-xl border transition-all relative flex items-center gap-2.5 select-none border-2 border-[#00A4B7] bg-[#F0F9FF] shadow-xs';
            c.style.borderColor = '#00A4B7';
            c.style.backgroundColor = '#F0F9FF';
            c.style.borderWidth = '2px';
            const iconBox = c.querySelector('.icon-box');
            if (iconBox) {
              iconBox.className = 'icon-box w-8 h-8 min-w-[32px] rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors bg-[#00A4B7] text-white shadow-xs';
              iconBox.style.backgroundColor = '#00A4B7';
              iconBox.style.color = '#FFFFFF';
            }
          } else {
            c.className = 'data-type-card cursor-pointer p-3 rounded-xl border transition-all relative flex items-center gap-2.5 select-none border-[#DFE1E6] bg-white hover:border-[#00A4B7] hover:bg-[#F8FAFC]';
            c.style.borderColor = '#DFE1E6';
            c.style.backgroundColor = '#FFFFFF';
            c.style.borderWidth = '1px';
            const iconBox = c.querySelector('.icon-box');
            if (iconBox) {
              iconBox.className = 'icon-box w-8 h-8 min-w-[32px] rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors bg-[#F1F5F9] text-[#5E6C84]';
              iconBox.style.backgroundColor = '#F1F5F9';
              iconBox.style.color = '#5E6C84';
            }
          }
        });

        // Toggle choice options
        if (choiceSection) {
          if (['dropdown', 'multi-select', 'radio'].includes(selectedType.id)) {
            choiceSection.classList.remove('hidden');
          } else {
            choiceSection.classList.add('hidden');
          }
        }

        // Update live preview with new type
        updateLivePreview();
      };

      // Expose globally so onclick handler always works
      window.__selectCustomFieldType = selectDataType;

      // Also attach event listeners directly
      if (typeGrid) {
        typeGrid.querySelectorAll('.data-type-card').forEach(card => {
          card.addEventListener('click', (e) => {
            e.stopPropagation();
            if (card.dataset.typeId) {
              selectDataType(card.dataset.typeId);
            }
          });
        });

        typeGrid.addEventListener('click', (e) => {
          const card = e.target.closest('.data-type-card');
          if (card && card.dataset.typeId) {
            selectDataType(card.dataset.typeId);
          }
        });
      }

      // Initial live preview render
      updateLivePreview();
    }, 20);
  },
  openEditFieldModal(fieldId, formId = null) {
    const targetFormId = formId || this.selectedFormCode || 'FORM-PI';
    this.selectedFormCode = targetFormId;
    const fields = this.formFields[targetFormId] || [];
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

