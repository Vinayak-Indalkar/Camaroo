import { AppSettings } from '../services/appSettings.js';
// Master Settings & Customizer View (Forms, Filds Customizer, Query Editor)
// Strictly follows AGENTS.md Enterprise UI Design System rules

import { ERP_DATA } from '../data/mockData.js';
import { LOGO_COLOR, LOGO_WHITE } from '../data/logos.js';
import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';
import { SEAFOOD_MASTERS, SetupView } from './setupView.js';

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

  // Users dataset for User & Access Management
  users: [
    { id: 'usr-1', empId: 'EMP-101', name: 'Laxmi Narayana', email: 'laxmi.n@devifisheries.com', phone: '+91 98480 12345', department: 'Executive Management', role: 'Super / System Admin', roleCode: 'ROL-ADM', status: 'Active', lastActive: 'Just now' },
    { id: 'usr-2', empId: 'EMP-102', name: 'Ramesh Varma', email: 'ramesh.v@devifisheries.com', phone: '+91 98480 23456', department: 'Procurement & Farm Sourcing', role: 'Operations / Sales Manager', roleCode: 'ROL-MGR', status: 'Active', lastActive: '15 mins ago' },
    { id: 'usr-3', empId: 'EMP-103', name: 'S. K. Murthy', email: 'sk.murthy@devifisheries.com', phone: '+91 98480 34567', department: 'Plant Operations (Unit 1)', role: 'Operations / Sales Manager', roleCode: 'ROL-MGR', status: 'Active', lastActive: '1 hour ago' },
    { id: 'usr-4', empId: 'EMP-104', name: 'Dr. Ananya Sen', email: 'ananya.s@devifisheries.com', phone: '+91 98480 45678', department: 'Quality Control & Lab', role: 'Quality & Line Supervisor', roleCode: 'ROL-SUP', status: 'Active', lastActive: '30 mins ago' },
    { id: 'usr-5', empId: 'EMP-105', name: 'Venkat Rao', email: 'venkat.r@devifisheries.com', phone: '+91 98480 56789', department: 'Cold Storage & Logistics', role: 'Floor & Logistics Operator', roleCode: 'ROL-OPR', status: 'Active', lastActive: '3 hours ago' },
    { id: 'usr-6', empId: 'EMP-106', name: 'Rajesh Kumar', email: 'rajesh.k@devifisheries.com', phone: '+91 98480 67890', department: 'Commercial & Export Sales', role: 'Operations / Sales Manager', roleCode: 'ROL-MGR', status: 'Active', lastActive: 'Yesterday' },
    { id: 'usr-7', empId: 'EMP-107', name: 'Priya Nair', email: 'priya.n@devifisheries.com', phone: '+91 98480 78901', department: 'Inventory & Materials', role: 'Floor & Logistics Operator', roleCode: 'ROL-OPR', status: 'Active', lastActive: '2 days ago' },
    { id: 'usr-8', empId: 'EMP-108', name: 'Kalyan Chakravarthy', email: 'kalyan.c@devifisheries.com', phone: '+91 98480 89012', department: 'Finance & Realization', role: 'Finance / Audit Viewer', roleCode: 'ROL-VIE', status: 'Active', lastActive: '3 days ago' }
  ],
  userSearchQuery: '',
  userFilterDept: 'All',
  userFilterRole: 'All',

  renderAdminSettingsTabs(activeTab) {
    const tabs = [
      { id: 'general', label: 'General', hash: '#/settings/setup/general' },
      { id: 'organization', label: 'Organization', hash: '#/settings/setup/organization' },
      { id: 'user-roles', label: 'User & Roles', hash: '#/settings/setup/user-roles' },
      { id: 'masters', label: 'Masters', hash: '#/settings/setup/masters' }
    ];

    setTimeout(() => {
      const tablist = document.getElementById('settings-tab-bar-container-tablist');
      if (tablist && !tablist.dataset.tabBound) {
        tablist.dataset.tabBound = 'true';
        tablist.addEventListener('click', (e) => {
          const a = e.target.closest('a');
          if (a && a.getAttribute('href')) {
            const h = a.getAttribute('href');
            if (window.location.hash !== h) {
              window.location.hash = h;
            }
          }
        });
      }
    }, 20);

    return `
      <div class="border-b border-[#DFE1E6] mb-4">
        <div role="tablist" aria-label="Settings navigation" id="settings-tab-bar-container-tablist" class="flex items-center gap-1 overflow-x-auto bg-transparent p-0 scrollbar-thin">
          ${tabs.map(t => {
            const isActive = t.id === activeTab;
            return `
              <a 
                id="tab-${t.id}"
                role="tab" 
                href="${t.hash}" 
                aria-selected="${isActive ? 'true' : 'false'}"
                tabindex="${isActive ? '0' : '-1'}"
                aria-controls="panel-${t.id}"
                class="select-none px-3 pt-2 pb-2 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent border-b-2 ${isActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent'}"
              >
                <span class="select-none">${t.label}</span>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  render(containerId, tabName = '', resolvedHash = '') {
    this.lastContainerId = containerId;
    const container = document.getElementById(containerId);
    if (!container) return;

    const isSuperAdmin = ERP_DATA.currentUser?.role === 'Super Admin';

    // Super Admin: Render Customizer View (Forms, Fields Customizer, Query Editor)
    if (isSuperAdmin) {
      let activeTab = 'forms';
      if (tabName === 'fields-customizer' || tabName === 'filds-customizer' || tabName === 'field-builder' || tabName === 'custom-fields' || resolvedHash.includes('fields-customizer')) {
        activeTab = 'fields-customizer';
      } else if (tabName === 'query-editor' || tabName === 'query-editer' || resolvedHash.includes('query-editor')) {
        activeTab = 'query-editor';
      } else {
        activeTab = 'forms';
      }
      this.activeTab = activeTab;

      const isFormsActive = activeTab === 'forms';
      const isFieldsActive = activeTab === 'fields-customizer';
      const isQueryActive = activeTab === 'query-editor';

      const customizerTabsBarHtml = `
        <div class="border-b border-[#DFE1E6] mb-4">
          <div role="tablist" aria-label="Customizer views" id="settings-tab-bar-container-tablist" class="flex items-center gap-1 overflow-x-auto bg-transparent p-0 scrollbar-thin">
            <a id="tab-forms" role="tab" href="#/settings/custom/forms" aria-selected="${isFormsActive ? 'true' : 'false'}" tabindex="${isFormsActive ? '0' : '-1'}" aria-controls="panel-forms" class="select-none px-3 pt-2 pb-2 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent border-b-2 ${isFormsActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent'}">
              <span class="select-none">Forms</span>
            </a>
            <a id="tab-fields-customizer" role="tab" href="#/settings/custom/fields-customizer" aria-selected="${isFieldsActive ? 'true' : 'false'}" tabindex="${isFieldsActive ? '0' : '-1'}" aria-controls="panel-fields-customizer" class="select-none px-3 pt-2 pb-2 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent border-b-2 ${isFieldsActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent'}">
              <span class="select-none">Fields Customizer</span>
            </a>
            <a id="tab-query-editor" role="tab" href="#/settings/custom/query-editor" aria-selected="${isQueryActive ? 'true' : 'false'}" tabindex="${isQueryActive ? '0' : '-1'}" aria-controls="panel-query-editor" class="select-none px-3 pt-2 pb-2 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent border-b-2 ${isQueryActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent'}">
              <span class="select-none">Query Editor</span>
            </a>
          </div>
        </div>
      `;

      if (activeTab === 'fields-customizer') {
        this.renderFieldsCustomizerTab(container, customizerTabsBarHtml);
      } else if (activeTab === 'query-editor') {
        this.renderQueryEditorTab(container, customizerTabsBarHtml);
      } else {
        this.renderFormsTab(container, customizerTabsBarHtml);
      }
      return;
    }

    // Admin role: Render 4 Settings tabs (General, Organization, User & Roles, Masters)
    let currentTab = tabName || 'general';
    if (currentTab === 'general' || currentTab === 'general-setup' || currentTab === 'setup' || currentTab === 'transaction' || currentTab === 'transaction-setup' || currentTab === 'notifications') {
      currentTab = 'general';
    } else if (currentTab === 'org' || currentTab === 'organization' || currentTab === 'company' || currentTab === 'profile' || currentTab === 'profile-setup') {
      currentTab = 'organization';
    } else if (currentTab === 'user-roles' || currentTab === 'user-role' || currentTab === 'users-roles' || currentTab === 'user-access' || currentTab === 'users-access' || currentTab === 'user' || currentTab === 'users' || currentTab === 'access' || currentTab === 'roles') {
      currentTab = 'user-roles';
    } else if (currentTab === 'masters' || currentTab === 'master' || currentTab === 'master-setup' || resolvedHash.includes('master-setup') || resolvedHash.includes('/masters')) {
      currentTab = 'masters';
    } else {
      currentTab = 'general';
    }

    const tabsBarHtml = this.renderAdminSettingsTabs(currentTab);

    switch (currentTab) {
      case 'organization':
        this.renderOrganizationTab(container, tabsBarHtml);
        break;
      case 'user-roles':
      case 'user-access':
        this.renderUserRolesTab(container, tabsBarHtml);
        break;
      case 'general':
        this.renderGeneralTab(container, tabsBarHtml);
        break;
      case 'masters':
        this.renderMasterSetupTab(container, tabsBarHtml);
        break;
      default:
        this.renderGeneralTab(container, tabsBarHtml);
        break;
    }
  },

  // -------------------------------------------------------------
  // TAB 1: Organization (Layout strictly matches User & Roles tab)
  // Data fully synchronized from Super Admin Client Tab
  // -------------------------------------------------------------
  renderOrganizationTab(container, tabsBarHtml) {
    const STUDIO_KEY = 'dfl_erp_master_studio_state_v3';
    let studioState = null;
    try {
      const raw = localStorage.getItem(STUDIO_KEY);
      if (raw) studioState = JSON.parse(raw);
    } catch (e) {}

    const companies = (studioState && Array.isArray(studioState.companies) && studioState.companies.length > 0)
      ? studioState.companies
      : [];

    const activeCompId = (studioState && studioState.activeCompanyId) || 'CMP-001';
    let comp = companies.find(c => c.id === activeCompId) || companies[0] || {
      id: 'CMP-001',
      name: 'Devi Fisheries Limited',
      shortName: 'DFL',
      code: 'DFL',
      logo: '',
      address: 'Harbour Road, Fishing Harbour, Visakhapatnam, AP 530001',
      contactPerson: 'Suresh Varma',
      phone: '+91 891 256 7890',
      email: 'purchase@devifisheries.com',
      status: 'Active',
      cin: 'L05005AP1997PLC027123',
      taxId: '37AABCD1234E1Z5',
      plants: ['Unit-1 VSP', 'Unit-2 Singarayakonda', 'Unit-3 Kakinada', 'Central Cold Storage Hub'],
      plantList: [
        { name: 'Unit-1 VSP', code: 'PLT-001', status: 'Active', contact: 'Suresh Varma', phone: '+91 891 256 7890', address: 'Harbour Road, Fishing Harbour, Visakhapatnam' },
        { name: 'Unit-2 Singarayakonda', code: 'PLT-002', status: 'Active', contact: 'M. Venkat Rao', phone: '+91 8598 245 112', address: 'NH-16 Coastal Corridor, Singarayakonda, Prakasam Dist' },
        { name: 'Unit-3 Kakinada', code: 'PLT-003', status: 'Active', contact: 'K. Satyanarayana', phone: '+91 884 237 8899', address: 'Port Road, Deep Water Port Area, Kakinada' },
        { name: 'Central Cold Storage Hub', code: 'PLT-004', status: 'Active', contact: 'P. Rambabu', phone: '+91 891 278 9911', address: 'Autonagar Industrial Corridor, Block C-14, Visakhapatnam' }
      ],
      appIcon: '',
      appLogo: '',
      headingImg: '',
      reportHeaderImg: '',
      reportFooterImg: '',
      fontSize: '13.5px',
      font: 'Inter, sans-serif',
      primaryColor: '#00A4B7',
      secondaryColor: '#0284C7',
      bgColor: '#F4F5F7',
      footerText: '© 2026 Devi Fisheries Limited. All rights reserved.'
    };

    if (!comp.plantList || comp.plantList.length === 0) {
      if (Array.isArray(comp.plants) && comp.plants.length > 0) {
        comp.plantList = comp.plants.map((p, i) => ({
          name: typeof p === 'string' ? p : (p.name || 'Unit-' + (i + 1)),
          code: 'PLT-' + String(i + 1).padStart(3, '0'),
          status: 'Active',
          contact: comp.contactPerson || '',
          phone: comp.phone || comp.contactPhone || '',
          address: comp.address || ''
        }));
      } else {
        comp.plantList = [{ name: 'Unit-1 VSP', code: 'PLT-001', status: 'Active', contact: '', phone: '', address: '' }];
      }
    }

        // Default Devi Fisheries official brand logos if not uploaded
    if (!comp.logo && (!comp.name || comp.name.toLowerCase().includes('devi'))) {
      comp.logo = LOGO_COLOR;
    }
    if (!comp.appLogo && (!comp.name || comp.name.toLowerCase().includes('devi'))) {
      comp.appLogo = LOGO_COLOR;
    }
    if (!comp.appIcon && (!comp.name || comp.name.toLowerCase().includes('devi'))) {
      comp.appIcon = LOGO_COLOR;
    }

    this.cachedTabsBarHtml = tabsBarHtml || this.cachedTabsBarHtml || this.renderAdminSettingsTabs('organization');
    const effectiveTabsBar = this.cachedTabsBarHtml;

    // Default expanded section is 'org'
    if (this.activeOrgSection === undefined) {
      this.activeOrgSection = 'org';
    }
    const isOrgExpanded = this.activeOrgSection === 'org';
    const isPlantsExpanded = this.activeOrgSection === 'plants';
    const isAddonsExpanded = this.activeOrgSection === 'addons';

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in pb-10">
        ${effectiveTabsBar}

        <!-- Page Header (Clean H1, strictly no subheading per AGENTS.md Rule 2) -->
        <div class="flex items-center justify-between gap-3 mb-1">
          <div class="flex items-center gap-3">
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Organization</h1>
            ${companies.length > 1 ? `
              <div class="flex items-center gap-2">
                <label for="admin-client-switcher" class="text-xs font-bold text-[#5E6C84] uppercase tracking-wider">Client:</label>
                <select id="admin-client-switcher" class="text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                  ${companies.map(c => `<option value="${c.id}" ${c.id === comp.id ? 'selected' : ''}>${c.name} (${c.code || c.id})</option>`).join('')}
                </select>
              </div>
            ` : ''}
          </div>

        </div>

        <!-- Accordions Group (Layout matches User & Roles tab exactly) -->
        <div class="space-y-3" id="org-accordion-group">

          <!-- ACCORDION 1: Organization Information -->
          <div class="org-accordion-card bg-white rounded-xl border ${isOrgExpanded ? 'border-[#00A4B7] is-expanded shadow-xs' : 'border-[#DFE1E6] shadow-2xs'} overflow-hidden transition-all duration-200">
            <!-- Accordion Header Row (12px padding all sides, p-3) -->
            <div 
              class="org-accordion-header w-full p-3 flex items-center justify-between transition-colors cursor-pointer select-none bg-white hover:bg-[#F8FAFC] ${isOrgExpanded ? 'border-b border-[#DFE1E6]' : ''}"
              data-section="org"
            >
              <!-- Left: Icon + Title -->
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 ${isOrgExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#00A4B7]'}">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="font-extrabold text-[#172B4D] text-sm tracking-tight">Organization Information</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${comp.name}</span>
                </div>
              </div>

              <!-- Right: Chevron on far right -->
              <div class="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${isOrgExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#64748B]'}">
                <svg class="w-4 h-4 transform transition-transform duration-300 ${isOrgExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>

            <!-- Accordion Body -->
            ${isOrgExpanded ? `
              <div class="org-accordion-body m-0 p-4 bg-[#daedef] space-y-3.5 border-t border-[#DFE1E6] animate-accordion-expand" style="margin: 0 !important; background-color: #daedef !important;">
                <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    <div>
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                        Company Legal Name <span class="text-rose-500">*</span>
                      </label>
                      <input type="text" id="admin-org-name" value="${comp.name || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. Devi Fisheries Limited" required />
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                        Company Logo
                      </label>
                      <div class="flex items-center gap-2">
                        <div id="admin-org-logo-preview" class="w-8 h-8 rounded-lg border border-[#DFE1E6] bg-[#F8FAFC] flex items-center justify-center shrink-0 overflow-hidden text-[#94A3B8] cursor-pointer hover:border-[#00A4B7] transition-all" title="Click to view full image" data-img-src="${comp.logo || ''}" data-img-name="${comp.name} Logo">
                          ${comp.logo ? `<img src="${comp.logo}" class="w-full h-full object-contain" />` : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`}
                        </div>
                        <input type="text" id="admin-org-logo" value="${comp.logo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" placeholder="Logo URL or path..." />
                        <label class="btn-secondary px-2 py-1.5 rounded-lg text-xs font-semibold cursor-pointer shrink-0 border border-[#CBD5E1] hover:bg-[#F8FAFC] flex items-center justify-center" title="Upload logo">
                          <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                          <input type="file" id="admin-org-logo-file" accept="image/*" class="hidden" />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                        Status
                      </label>
                      <select id="admin-org-status" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]">
                        <option value="Active" ${comp.status === 'Active' ? 'selected' : ''}>Active</option>
                        <option value="Inactive" ${comp.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                        Contact Person
                      </label>
                      <input type="text" id="admin-org-contact" value="${comp.contactPerson || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. Suresh Varma" />
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                        Mobile Number
                      </label>
                      <input type="tel" id="admin-org-phone" value="${comp.phone || comp.contactPhone || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. +91 98765 43210" />
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input type="email" id="admin-org-email" value="${comp.email || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. info@devifisheries.com" />
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                        CIN Number
                      </label>
                      <input type="text" id="admin-org-cin" value="${comp.cin || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono uppercase focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. L05005AP1997PLC027123" />
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                        GST / Tax ID
                      </label>
                      <input type="text" id="admin-org-tax-id" value="${comp.taxId || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono uppercase focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. 37AABCD1234E1Z5" />
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                        Short Name / Code
                      </label>
                      <input type="text" id="admin-org-shortname" value="${comp.shortName || comp.code || ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono uppercase focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. DFL" />
                    </div>

                    <div class="col-span-1 sm:col-span-2 lg:col-span-3">
                      <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                        Full Address
                      </label>
                      <textarea id="admin-org-address" rows="2" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" placeholder="Enter complete corporate entity address, city, state, pin code...">${comp.address || ''}</textarea>
                    </div>
                  </div>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- ACCORDION 2: Plant Information -->
          <div class="org-accordion-card bg-white rounded-xl border ${isPlantsExpanded ? 'border-[#00A4B7] is-expanded shadow-xs' : 'border-[#DFE1E6] shadow-2xs'} overflow-hidden transition-all duration-200">
            <!-- Accordion Header Row (12px padding all sides, p-3) -->
            <div 
              class="org-accordion-header w-full p-3 flex items-center justify-between transition-colors cursor-pointer select-none bg-white hover:bg-[#F8FAFC] ${isPlantsExpanded ? 'border-b border-[#DFE1E6]' : ''}"
              data-section="plants"
            >
              <!-- Left: Icon + Title -->
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 ${isPlantsExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#00A4B7]'}">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="font-extrabold text-[#172B4D] text-sm tracking-tight">Plant Information</span>
                  <span id="admin-plant-count-badge" class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">
                    ${comp.plantList.length} ${comp.plantList.length === 1 ? 'Plant' : 'Plants'}
                  </span>
                </div>
              </div>

              <!-- Right: Chevron on far right -->
              <div class="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${isPlantsExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#64748B]'}">
                <svg class="w-4 h-4 transform transition-transform duration-300 ${isPlantsExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>

            <!-- Accordion Body -->
            ${isPlantsExpanded ? `
              <div class="org-accordion-body m-0 p-4 bg-[#daedef] space-y-3.5 border-t border-[#DFE1E6] animate-accordion-expand" style="margin: 0 !important; background-color: #daedef !important;">
                <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-3.5">
                  <div class="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span class="text-xs font-bold text-[#172B4D]">Processing Plants &amp; Operational Facilities</span>
                    <button type="button" id="admin-add-plant-btn" class="btn-primary px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-xs cursor-pointer bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                      <span>Add Plant</span>
                    </button>
                  </div>

                  <div id="admin-plants-container" class="space-y-3.5">
                    ${comp.plantList.map((p, idx, arr) => `
                      <div class="admin-plant-card border border-[#E2E8F0] rounded-xl p-3.5 bg-[#F8FAFC]/50 space-y-3" data-idx="${idx}">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-md bg-[#00A4B7] text-white flex items-center justify-center font-bold text-xs shrink-0">${idx + 1}</span>
                            <span class="text-xs font-bold text-[#172B4D]">${p.name || 'Plant ' + (idx + 1)}</span>
                            <span class="text-[10px] font-mono text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">${p.code || 'PLT-' + String(idx + 1).padStart(3, '0')}</span>
                          </div>
                          ${arr.length > 1 ? `
                            <button type="button" class="admin-remove-plant-btn w-7 h-7 rounded-lg text-rose-500 hover:text-white hover:bg-rose-500 transition-colors flex items-center justify-center cursor-pointer" data-idx="${idx}" title="Remove plant">
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                            </button>
                          ` : ''}
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          <div>
                            <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                              Plant Name <span class="text-rose-500">*</span>
                            </label>
                            <input type="text" class="admin-plant-name w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" value="${p.name || ''}" placeholder="e.g. Unit-1 VSP" />
                          </div>

                          <div>
                            <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                              Plant Code
                            </label>
                            <input type="text" class="admin-plant-code w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-mono uppercase focus:outline-none focus:border-[#00A4B7]" value="${p.code || 'PLT-' + String(idx + 1).padStart(3, '0')}" placeholder="e.g. PLT-001" />
                          </div>

                          <div>
                            <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                              Status
                            </label>
                            <select class="admin-plant-status w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]">
                              <option value="Active" ${p.status === 'Active' ? 'selected' : ''}>Active</option>
                              <option value="Inactive" ${p.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
                            </select>
                          </div>

                          <div>
                            <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                              Contact Person
                            </label>
                            <input type="text" class="admin-plant-contact w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" value="${p.contact || ''}" placeholder="e.g. Unit Head Name" />
                          </div>

                          <div>
                            <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                              Mobile Number
                            </label>
                            <input type="tel" class="admin-plant-phone w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" value="${p.phone || ''}" placeholder="e.g. +91 891 256 7890" />
                          </div>

                          <div class="col-span-1 sm:col-span-2 lg:col-span-3">
                            <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                              Plant Address
                            </label>
                            <textarea class="admin-plant-address w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7]" rows="2" placeholder="Enter physical plant address, harbor/coastal road, industrial area...">${p.address || ''}</textarea>
                          </div>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- ACCORDION 3: Application Add-ons -->
          <div class="org-accordion-card bg-white rounded-xl border ${isAddonsExpanded ? 'border-[#00A4B7] is-expanded shadow-xs' : 'border-[#DFE1E6] shadow-2xs'} overflow-hidden transition-all duration-200">
            <!-- Accordion Header Row (12px padding all sides, p-3) -->
            <div 
              class="org-accordion-header w-full p-3 flex items-center justify-between transition-colors cursor-pointer select-none bg-white hover:bg-[#F8FAFC] ${isAddonsExpanded ? 'border-b border-[#DFE1E6]' : ''}"
              data-section="addons"
            >
              <!-- Left: Icon + Title -->
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 ${isAddonsExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#00A4B7]'}">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="font-extrabold text-[#172B4D] text-sm tracking-tight">Application Add-ons</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">Media &amp; Branding</span>
                </div>
              </div>

              <!-- Right: Chevron on far right -->
              <div class="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${isAddonsExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#64748B]'}">
                <svg class="w-4 h-4 transform transition-transform duration-300 ${isAddonsExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>

            <!-- Accordion Body -->
            ${isAddonsExpanded ? `
              <div class="org-accordion-body m-0 p-4 bg-[#daedef] space-y-3.5 border-t border-[#DFE1E6] animate-accordion-expand" style="margin: 0 !important; background-color: #daedef !important;">
                
                <!-- CARD 1: Brand Assets & Media Uploads with Live Preview & Progress Bar -->
                <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-4">
                  <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-2.5">
                    <div class="flex items-center gap-2">
                      <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
                      <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Brand Assets &amp; Media Uploads</span>
                    </div>
                    <span class="text-[11px] text-[#5E6C84]">Click any image preview box to view full size in lightbox</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    <!-- 1. Application Icon Upload Card -->
                    <div class="border border-[#DFE1E6] rounded-xl p-3.5 bg-[#F8FAFC]/50 hover:bg-white transition-all space-y-3 flex flex-col justify-between">
                      <div class="space-y-1">
                        <div class="flex items-center justify-between">
                          <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Application Icon</label>
                          <span id="admin-app-icon-status-badge" class="px-2 py-0.5 rounded-full text-[10px] font-bold ${comp.appIcon ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]' : 'bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1]'}">
                            ${comp.appIcon ? 'Uploaded' : 'No File'}
                          </span>
                        </div>
                        <p class="text-[10px] text-[#64748B]">Browser tab favicon &amp; shortcut launcher</p>
                      </div>

                      <div class="flex items-center gap-3">
                        <!-- Clickable Image Preview Box -->
                        <div id="admin-app-icon-preview" class="w-20 h-16 rounded-xl border-2 border-dashed ${comp.appIcon ? 'border-[#00A4B7]' : 'border-[#CBD5E1]'} hover:border-[#00A4B7] bg-white flex items-center justify-center shrink-0 overflow-hidden text-[#94A3B8] cursor-pointer transition-all shadow-2xs group relative" title="Click to view full image" data-img-src="${comp.appIcon || ''}" data-img-name="Application Icon">
                          ${comp.appIcon ? `
                            <img src="${comp.appIcon}" class="w-full h-full object-contain p-1" />
                            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-[10px] font-bold">
                              View
                            </div>
                          ` : `
                            <div class="flex flex-col items-center justify-center text-[#94A3B8] group-hover:text-[#00A4B7] transition-colors">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                              <span class="text-[9px] mt-0.5 font-bold uppercase tracking-wider">Icon</span>
                            </div>
                          `}
                        </div>

                        <!-- Upload Actions & File Name -->
                        <div class="flex-1 min-w-0 space-y-1.5">
                          <div class="flex items-center gap-1.5">
                            <label class="btn-primary px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all shrink-0">
                              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                              <span>Upload</span>
                              <input type="file" id="admin-app-icon-file" accept="image/*" class="hidden" />
                            </label>
                            <button type="button" id="admin-app-icon-clear-btn" class="w-7 h-7 rounded-lg text-rose-500 hover:text-white hover:bg-rose-500 transition-colors flex items-center justify-center cursor-pointer shrink-0 ${comp.appIcon ? '' : 'hidden'}" title="Remove image">
                              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                            </button>
                          </div>
                          <input type="text" id="admin-app-icon" value="${comp.appIcon || ''}" class="w-full text-[11px] px-2.5 py-1 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] truncate font-medium text-[#172B4D]" placeholder="No file uploaded..." readonly />
                        </div>
                      </div>

                      <!-- Upload Progress Bar for Icon -->
                      <div id="admin-app-icon-file-progress-wrap" class="hidden w-full pt-1">
                        <div class="flex items-center justify-between text-[10px] font-bold text-[#00A4B7] mb-1">
                          <span class="upload-status-text flex items-center gap-1">Uploading...</span>
                          <span class="upload-pct-text font-mono">0%</span>
                        </div>
                        <div class="w-full bg-[#E2E8F0] rounded-full h-1.5 overflow-hidden">
                          <div class="upload-progress-bar bg-[#00A4B7] h-full rounded-full transition-all duration-150" style="width: 0%"></div>
                        </div>
                      </div>
                    </div>

                    <!-- 2. Application Logo Upload Card -->
                    <div class="border border-[#DFE1E6] rounded-xl p-3.5 bg-[#F8FAFC]/50 hover:bg-white transition-all space-y-3 flex flex-col justify-between">
                      <div class="space-y-1">
                        <div class="flex items-center justify-between">
                          <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Application Logo</label>
                          <span id="admin-app-logo-status-badge" class="px-2 py-0.5 rounded-full text-[10px] font-bold ${comp.appLogo ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]' : 'bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1]'}">
                            ${comp.appLogo ? 'Uploaded' : 'No File'}
                          </span>
                        </div>
                        <p class="text-[10px] text-[#64748B]">Navigation bar &amp; application header branding</p>
                      </div>

                      <div class="flex items-center gap-3">
                        <!-- Clickable Image Preview Box -->
                        <div id="admin-app-logo-preview" class="w-20 h-16 rounded-xl border-2 border-dashed ${comp.appLogo ? 'border-[#00A4B7]' : 'border-[#CBD5E1]'} hover:border-[#00A4B7] bg-white flex items-center justify-center shrink-0 overflow-hidden text-[#94A3B8] cursor-pointer transition-all shadow-2xs group relative" title="Click to view full image" data-img-src="${comp.appLogo || ''}" data-img-name="Application Logo">
                          ${comp.appLogo ? `
                            <img src="${comp.appLogo}" class="w-full h-full object-contain p-1" />
                            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-[10px] font-bold">
                              View
                            </div>
                          ` : `
                            <div class="flex flex-col items-center justify-center text-[#94A3B8] group-hover:text-[#00A4B7] transition-colors">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span class="text-[9px] mt-0.5 font-bold uppercase tracking-wider">Logo</span>
                            </div>
                          `}
                        </div>

                        <!-- Upload Actions & File Name -->
                        <div class="flex-1 min-w-0 space-y-1.5">
                          <div class="flex items-center gap-1.5">
                            <label class="btn-primary px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all shrink-0">
                              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                              <span>Upload</span>
                              <input type="file" id="admin-app-logo-file" accept="image/*" class="hidden" />
                            </label>
                            <button type="button" id="admin-app-logo-clear-btn" class="w-7 h-7 rounded-lg text-rose-500 hover:text-white hover:bg-rose-500 transition-colors flex items-center justify-center cursor-pointer shrink-0 ${comp.appLogo ? '' : 'hidden'}" title="Remove logo">
                              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                            </button>
                          </div>
                          <input type="text" id="admin-app-logo" value="${comp.appLogo || ''}" class="w-full text-[11px] px-2.5 py-1 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] truncate font-medium text-[#172B4D]" placeholder="No file uploaded..." readonly />
                        </div>
                      </div>

                      <!-- Upload Progress Bar for Logo -->
                      <div id="admin-app-logo-file-progress-wrap" class="hidden w-full pt-1">
                        <div class="flex items-center justify-between text-[10px] font-bold text-[#00A4B7] mb-1">
                          <span class="upload-status-text flex items-center gap-1">Uploading...</span>
                          <span class="upload-pct-text font-mono">0%</span>
                        </div>
                        <div class="w-full bg-[#E2E8F0] rounded-full h-1.5 overflow-hidden">
                          <div class="upload-progress-bar bg-[#00A4B7] h-full rounded-full transition-all duration-150" style="width: 0%"></div>
                        </div>
                      </div>
                    </div>

                    <!-- 3. Report Header Image Upload Card (Placed before Report Footer Image per request) -->
                    <div class="border border-[#DFE1E6] rounded-xl p-3.5 bg-[#F8FAFC]/50 hover:bg-white transition-all space-y-3 flex flex-col justify-between">
                      <div class="space-y-1">
                        <div class="flex items-center justify-between">
                          <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Report Header Image</label>
                          <span id="admin-app-report-header-status-badge" class="px-2 py-0.5 rounded-full text-[10px] font-bold ${comp.reportHeaderImg ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]' : 'bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1]'}">
                            ${comp.reportHeaderImg ? 'Uploaded' : 'No File'}
                          </span>
                        </div>
                        <p class="text-[10px] text-[#64748B]">Official header logo, banner or letterhead image</p>
                      </div>

                      <div class="flex items-center gap-3">
                        <!-- Clickable Image Preview Box -->
                        <div id="admin-app-report-header-preview" class="w-20 h-16 rounded-xl border-2 border-dashed ${comp.reportHeaderImg ? 'border-[#00A4B7]' : 'border-[#CBD5E1]'} hover:border-[#00A4B7] bg-white flex items-center justify-center shrink-0 overflow-hidden text-[#94A3B8] cursor-pointer transition-all shadow-2xs group relative" title="Click to view full image" data-img-src="${comp.reportHeaderImg || ''}" data-img-name="Report Header Image">
                          ${comp.reportHeaderImg ? `
                            <img src="${comp.reportHeaderImg}" class="w-full h-full object-contain p-1" />
                            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-[10px] font-bold">
                              View
                            </div>
                          ` : `
                            <div class="flex flex-col items-center justify-center text-[#94A3B8] group-hover:text-[#00A4B7] transition-colors">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span class="text-[9px] mt-0.5 font-bold uppercase tracking-wider">Header</span>
                            </div>
                          `}
                        </div>

                        <!-- Upload Actions & File Name -->
                        <div class="flex-1 min-w-0 space-y-1.5">
                          <div class="flex items-center gap-1.5">
                            <label class="btn-primary px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all shrink-0">
                              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                              <span>Upload</span>
                              <input type="file" id="admin-app-report-header-file" accept="image/*" class="hidden" />
                            </label>
                            <button type="button" id="admin-app-report-header-clear-btn" class="w-7 h-7 rounded-lg text-rose-500 hover:text-white hover:bg-rose-500 transition-colors flex items-center justify-center cursor-pointer shrink-0 ${comp.reportHeaderImg ? '' : 'hidden'}" title="Remove header image">
                              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                            </button>
                          </div>
                          <input type="text" id="admin-app-report-header" value="${comp.reportHeaderImg || ''}" class="w-full text-[11px] px-2.5 py-1 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] truncate font-medium text-[#172B4D]" placeholder="No file uploaded..." readonly />
                        </div>
                      </div>

                      <!-- Upload Progress Bar for Header -->
                      <div id="admin-app-report-header-file-progress-wrap" class="hidden w-full pt-1">
                        <div class="flex items-center justify-between text-[10px] font-bold text-[#00A4B7] mb-1">
                          <span class="upload-status-text flex items-center gap-1">Uploading...</span>
                          <span class="upload-pct-text font-mono">0%</span>
                        </div>
                        <div class="w-full bg-[#E2E8F0] rounded-full h-1.5 overflow-hidden">
                          <div class="upload-progress-bar bg-[#00A4B7] h-full rounded-full transition-all duration-150" style="width: 0%"></div>
                        </div>
                      </div>
                    </div>

                    <!-- 4. Report Footer Image Upload Card -->
                    <div class="border border-[#DFE1E6] rounded-xl p-3.5 bg-[#F8FAFC]/50 hover:bg-white transition-all space-y-3 flex flex-col justify-between">
                      <div class="space-y-1">
                        <div class="flex items-center justify-between">
                          <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Report Footer Image</label>
                          <span id="admin-app-report-footer-status-badge" class="px-2 py-0.5 rounded-full text-[10px] font-bold ${comp.reportFooterImg ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]' : 'bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1]'}">
                            ${comp.reportFooterImg ? 'Uploaded' : 'No File'}
                          </span>
                        </div>
                        <p class="text-[10px] text-[#64748B]">Official company stamp, signature or print footer</p>
                      </div>

                      <div class="flex items-center gap-3">
                        <!-- Clickable Image Preview Box -->
                        <div id="admin-app-report-footer-preview" class="w-20 h-16 rounded-xl border-2 border-dashed ${comp.reportFooterImg ? 'border-[#00A4B7]' : 'border-[#CBD5E1]'} hover:border-[#00A4B7] bg-white flex items-center justify-center shrink-0 overflow-hidden text-[#94A3B8] cursor-pointer transition-all shadow-2xs group relative" title="Click to view full image" data-img-src="${comp.reportFooterImg || ''}" data-img-name="Report Footer Image">
                          ${comp.reportFooterImg ? `
                            <img src="${comp.reportFooterImg}" class="w-full h-full object-contain p-1" />
                            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-[10px] font-bold">
                              View
                            </div>
                          ` : `
                            <div class="flex flex-col items-center justify-center text-[#94A3B8] group-hover:text-[#00A4B7] transition-colors">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                              <span class="text-[9px] mt-0.5 font-bold uppercase tracking-wider">Footer</span>
                            </div>
                          `}
                        </div>

                        <!-- Upload Actions & File Name -->
                        <div class="flex-1 min-w-0 space-y-1.5">
                          <div class="flex items-center gap-1.5">
                            <label class="btn-primary px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all shrink-0">
                              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                              <span>Upload</span>
                              <input type="file" id="admin-app-report-footer-file" accept="image/*" class="hidden" />
                            </label>
                            <button type="button" id="admin-app-report-footer-clear-btn" class="w-7 h-7 rounded-lg text-rose-500 hover:text-white hover:bg-rose-500 transition-colors flex items-center justify-center cursor-pointer shrink-0 ${comp.reportFooterImg ? '' : 'hidden'}" title="Remove footer">
                              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                            </button>
                          </div>
                          <input type="text" id="admin-app-report-footer" value="${comp.reportFooterImg || ''}" class="w-full text-[11px] px-2.5 py-1 bg-white border border-[#DFE1E6] rounded-lg focus:outline-none focus:border-[#00A4B7] truncate font-medium text-[#172B4D]" placeholder="No file uploaded..." readonly />
                        </div>
                      </div>

                      <!-- Upload Progress Bar for Footer -->
                      <div id="admin-app-report-footer-file-progress-wrap" class="hidden w-full pt-1">
                        <div class="flex items-center justify-between text-[10px] font-bold text-[#00A4B7] mb-1">
                          <span class="upload-status-text flex items-center gap-1">Uploading...</span>
                          <span class="upload-pct-text font-mono">0%</span>
                        </div>
                        <div class="w-full bg-[#E2E8F0] rounded-full h-1.5 overflow-hidden">
                          <div class="upload-progress-bar bg-[#00A4B7] h-full rounded-full transition-all duration-150" style="width: 0%"></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- CARD 2: Theme, Typography & Display Settings (Same card styling as Brand Assets & Media Uploads) -->
                <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-4">
                  <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-2.5">
                    <div class="flex items-center gap-2">
                      <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">2</span>
                      <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Theme Colors &amp; Typography</span>
                    </div>
                    <span class="text-[11px] text-[#5E6C84]">Customizations apply globally across the entire application</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    
                    <!-- 1. Typography Font Card -->
                    <div class="border border-[#DFE1E6] rounded-xl p-3.5 bg-[#F8FAFC]/50 hover:bg-white transition-all space-y-2.5 flex flex-col justify-between">
                      <div class="space-y-1">
                        <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Typography Font</label>
                        <p class="text-[10px] text-[#64748B]">Primary application typeface across all modules</p>
                      </div>
                      <select id="admin-app-font" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                        <option value="Inter, sans-serif" ${(comp.font === 'Inter, sans-serif' || !comp.font) ? 'selected' : ''}>Inter (Default)</option>
                        <option value="'Plus Jakarta Sans', sans-serif" ${comp.font === "'Plus Jakarta Sans', sans-serif" ? 'selected' : ''}>Plus Jakarta Sans</option>
                        <option value="'Roboto', sans-serif" ${comp.font === "'Roboto', sans-serif" ? 'selected' : ''}>Roboto</option>
                        <option value="'Poppins', sans-serif" ${comp.font === "'Poppins', sans-serif" ? 'selected' : ''}>Poppins</option>
                        <option value="'Outfit', sans-serif" ${comp.font === "'Outfit', sans-serif" ? 'selected' : ''}>Outfit</option>
                        <option value="'Segoe UI', sans-serif" ${comp.font === "'Segoe UI', sans-serif" ? 'selected' : ''}>Segoe UI</option>
                        <option value="'Open Sans', sans-serif" ${comp.font === "'Open Sans', sans-serif" ? 'selected' : ''}>Open Sans</option>
                      </select>
                    </div>

                    <!-- 2. Base Font Size Card -->
                    <div class="border border-[#DFE1E6] rounded-xl p-3.5 bg-[#F8FAFC]/50 hover:bg-white transition-all space-y-2.5 flex flex-col justify-between">
                      <div class="space-y-1">
                        <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Base Font Size</label>
                        <p class="text-[10px] text-[#64748B]">Default text scaling for tables and inputs</p>
                      </div>
                      <select id="admin-app-font-size" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                        <option value="12.5px" ${comp.fontSize === '12.5px' ? 'selected' : ''}>Compact (12.5px)</option>
                        <option value="13.5px" ${(comp.fontSize === '13.5px' || !comp.fontSize) ? 'selected' : ''}>Standard (13.5px - Default)</option>
                        <option value="14.5px" ${comp.fontSize === '14.5px' ? 'selected' : ''}>Comfortable (14.5px)</option>
                        <option value="15.5px" ${comp.fontSize === '15.5px' ? 'selected' : ''}>Large (15.5px)</option>
                      </select>
                    </div>

                    <!-- 3. Footer Text Card -->
                    <div class="border border-[#DFE1E6] rounded-xl p-3.5 bg-[#F8FAFC]/50 hover:bg-white transition-all space-y-2.5 flex flex-col justify-between">
                      <div class="space-y-1">
                        <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Footer Text</label>
                        <p class="text-[10px] text-[#64748B]">Application bottom copyright statement</p>
                      </div>
                      <input type="text" id="admin-app-footer-text" value="${comp.footerText || '© 2026 Devi Fisheries Limited. All rights reserved.'}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. © 2026 Devi Fisheries Limited. All rights reserved." />
                    </div>

                    <!-- 4. Primary Brand Color Card -->
                    <div class="border border-[#DFE1E6] rounded-xl p-3.5 bg-[#F8FAFC]/50 hover:bg-white transition-all space-y-2.5 flex flex-col justify-between">
                      <div class="space-y-1">
                        <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Primary Brand Color</label>
                        <p class="text-[10px] text-[#64748B]">Buttons, active tabs, highlights, links</p>
                      </div>
                      <div class="flex items-center gap-2">
                        <input type="color" id="admin-app-primary-color-picker" value="${comp.primaryColor || '#00A4B7'}" class="w-9 h-9 rounded-lg border border-[#DFE1E6] cursor-pointer p-0.5 shrink-0" title="Choose Primary Color" />
                        <input type="text" id="admin-app-primary-color" value="${comp.primaryColor || '#00A4B7'}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono uppercase font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="#00A4B7" />
                      </div>
                    </div>

                    <!-- 5. Secondary Accent Color Card -->
                    <div class="border border-[#DFE1E6] rounded-xl p-3.5 bg-[#F8FAFC]/50 hover:bg-white transition-all space-y-2.5 flex flex-col justify-between">
                      <div class="space-y-1">
                        <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Secondary Accent Color</label>
                        <p class="text-[10px] text-[#64748B]">Badges, secondary highlights, status pills</p>
                      </div>
                      <div class="flex items-center gap-2">
                        <input type="color" id="admin-app-secondary-color-picker" value="${comp.secondaryColor || '#0284C7'}" class="w-9 h-9 rounded-lg border border-[#DFE1E6] cursor-pointer p-0.5 shrink-0" title="Choose Secondary Color" />
                        <input type="text" id="admin-app-secondary-color" value="${comp.secondaryColor || '#0284C7'}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono uppercase font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="#0284C7" />
                      </div>
                    </div>

                    <!-- 6. Background Neutral Color Card -->
                    <div class="border border-[#DFE1E6] rounded-xl p-3.5 bg-[#F8FAFC]/50 hover:bg-white transition-all space-y-2.5 flex flex-col justify-between">
                      <div class="space-y-1">
                        <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Background Neutral Color</label>
                        <p class="text-[10px] text-[#64748B]">Page canvas, main content backdrop</p>
                      </div>
                      <div class="flex items-center gap-2">
                        <input type="color" id="admin-app-bg-color-picker" value="${comp.bgColor || '#F4F5F7'}" class="w-9 h-9 rounded-lg border border-[#DFE1E6] cursor-pointer p-0.5 shrink-0" title="Choose Background Color" />
                        <input type="text" id="admin-app-bg-color" value="${comp.bgColor || '#F4F5F7'}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-mono uppercase font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="#F4F5F7" />
                      </div>
                    </div>

                  </div>
                </div></div>
            ` : ''}
          </div>
        </div>

        <!-- Bottom Action Bar (Placed at bottom of page with confirmation) -->
        <div class="pt-4 border-t border-[#DFE1E6] flex items-center justify-between gap-3 mt-6">
          <span class="text-xs text-[#5E6C84]">All changes will synchronize with Super Admin client records</span>
          <button type="button" id="btn-save-organization" class="btn-primary px-6 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-2 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    `;

    // State capturing helper to preserve user inputs during accordion switches
    const captureOrgState = () => {
      const name = document.getElementById('admin-org-name')?.value.trim();
      if (name) comp.name = name;
      const logoInput = document.getElementById('admin-org-logo');
      if (logoInput) comp.logo = logoInput.dataset.dataUrl || logoInput.value.trim();
      const status = document.getElementById('admin-org-status')?.value;
      if (status) comp.status = status;
      const contact = document.getElementById('admin-org-contact')?.value.trim();
      if (contact !== undefined) comp.contactPerson = contact;
      const phone = document.getElementById('admin-org-phone')?.value.trim();
      if (phone !== undefined) comp.phone = phone;
      const email = document.getElementById('admin-org-email')?.value.trim();
      if (email !== undefined) comp.email = email;
      const cin = document.getElementById('admin-org-cin')?.value.trim();
      if (cin !== undefined) comp.cin = cin;
      const taxId = document.getElementById('admin-org-tax-id')?.value.trim();
      if (taxId !== undefined) comp.taxId = taxId;
      const shortName = document.getElementById('admin-org-shortname')?.value.trim();
      if (shortName !== undefined) { comp.shortName = shortName; comp.code = shortName; }
      const address = document.getElementById('admin-org-address')?.value.trim();
      if (address !== undefined) comp.address = address;

      // Plants
      const containerPlants = document.getElementById('admin-plants-container');
      if (containerPlants) {
        const cards = containerPlants.querySelectorAll('.admin-plant-card');
        if (cards.length > 0) {
          const currentList = [];
          cards.forEach((card, i) => {
            currentList.push({
              name: card.querySelector('.admin-plant-name')?.value.trim() || ('Unit-' + (i + 1) + ' VSP'),
              code: card.querySelector('.admin-plant-code')?.value.trim().toUpperCase() || ('PLT-' + String(i + 1).padStart(3, '0')),
              status: card.querySelector('.admin-plant-status')?.value || 'Active',
              contact: card.querySelector('.admin-plant-contact')?.value.trim() || '',
              phone: card.querySelector('.admin-plant-phone')?.value.trim() || '',
              address: card.querySelector('.admin-plant-address')?.value.trim() || ''
            });
          });
          comp.plantList = currentList;
          comp.plants = currentList.map(p => p.name);
        }
      }

      // Add-ons
      const appIconInput = document.getElementById('admin-app-icon');
      if (appIconInput) comp.appIcon = appIconInput.dataset.dataUrl || appIconInput.value.trim();
      const appLogoInput = document.getElementById('admin-app-logo');
      if (appLogoInput) comp.appLogo = appLogoInput.dataset.dataUrl || appLogoInput.value.trim();
      const reportHeaderInput = document.getElementById('admin-app-report-header');
      if (reportHeaderInput) comp.reportHeaderImg = reportHeaderInput.dataset.dataUrl || reportHeaderInput.value.trim();
      const reportFooterInput = document.getElementById('admin-app-report-footer');
      if (reportFooterInput) comp.reportFooterImg = reportFooterInput.dataset.dataUrl || reportFooterInput.value.trim();
      const fontSize = document.getElementById('admin-app-font-size')?.value;
      if (fontSize) comp.fontSize = fontSize;
      const font = document.getElementById('admin-app-font')?.value;
      if (font) comp.font = font;
      const primaryColor = document.getElementById('admin-app-primary-color')?.value.trim();
      if (primaryColor) comp.primaryColor = primaryColor;
      const secondaryColor = document.getElementById('admin-app-secondary-color')?.value.trim();
      if (secondaryColor) comp.secondaryColor = secondaryColor;
      const bgColor = document.getElementById('admin-app-bg-color')?.value.trim();
      if (bgColor) comp.bgColor = bgColor;
      const footerText = document.getElementById('admin-app-footer-text')?.value.trim();
      if (footerText !== undefined) comp.footerText = footerText;
    };

    // 1. Accordion Header Toggle logic (Matching User & Roles tab)
    const headerBtns = container.querySelectorAll('.org-accordion-header');
    headerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        captureOrgState();
        const sec = btn.dataset.section;
        this.activeOrgSection = (this.activeOrgSection === sec) ? null : sec;
        this.renderOrganizationTab(container, tabsBarHtml);
      });
    });

    // 2. Client Switcher
    const clientSwitcher = document.getElementById('admin-client-switcher');
    if (clientSwitcher) {
      clientSwitcher.onchange = (e) => {
        if (studioState) {
          studioState.activeCompanyId = e.target.value;
          localStorage.setItem(STUDIO_KEY, JSON.stringify(studioState));
        }
        this.renderOrganizationTab(container, tabsBarHtml);
      };
    }

    // 3. Color pickers sync
    const syncColor = (pickerId, textId) => {
      const p = document.getElementById(pickerId);
      const t = document.getElementById(textId);
      if (p && t) {
        p.oninput = (e) => { t.value = e.target.value.toUpperCase(); };
        t.oninput = (e) => {
          if (/^#[0-9A-F]{6}$/i.test(e.target.value.trim())) p.value = e.target.value.trim();
        };
      }
    };
    syncColor('admin-app-primary-color-picker', 'admin-app-primary-color');
    syncColor('admin-app-secondary-color-picker', 'admin-app-secondary-color');
    syncColor('admin-app-bg-color-picker', 'admin-app-bg-color');

    // 4. Robust Lightbox Modal Helper
    const showImageLightbox = (imgSrc, title = 'Image Preview') => {
      const existing = document.getElementById('global-image-lightbox-modal');
      if (existing) existing.remove();

      const overlay = document.createElement('div');
      overlay.id = 'global-image-lightbox-modal';
      overlay.className = 'fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 animate-fade-in select-none';
      overlay.innerHTML = `
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-[#CBD5E1] animate-scale-up" onclick="event.stopPropagation()">
          <div class="flex items-center justify-between px-5 py-3.5 border-b border-[#F1F5F9] bg-[#F8FAFC]">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-lg bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <span class="text-xs font-bold text-[#172B4D] truncate max-w-md">${title}</span>
            </div>
            <button type="button" class="lightbox-close-btn w-8 h-8 rounded-full flex items-center justify-center text-[#64748B] hover:text-[#172B4D] hover:bg-[#E2E8F0] transition-colors cursor-pointer" title="Close">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <div class="p-6 flex items-center justify-center bg-[#0B0F19] min-h-[300px] max-h-[70vh] overflow-auto">
            <img src="${imgSrc}" alt="${title}" class="max-w-full max-h-[60vh] object-contain rounded-lg shadow-md" />
          </div>
          <div class="flex items-center justify-between px-5 py-3 border-t border-[#F1F5F9] bg-[#F8FAFC]">
            <span class="text-[11px] text-[#64748B] font-medium truncate max-w-sm">${title}</span>
            <div class="flex items-center gap-2">
              <a href="${imgSrc}" download="${title.replace(/[^a-z0-9]/gi, '_')}.png" class="btn-secondary px-3 py-1.5 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer">
                <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                <span>Download</span>
              </a>
              <button type="button" class="lightbox-close-btn btn-primary px-4 py-1.5 rounded-full text-xs font-bold bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                Close
              </button>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);
      const close = () => { overlay.remove(); document.removeEventListener('keydown', onKeyDown); };
      const onKeyDown = (e) => { if (e.key === 'Escape') close(); };
      document.addEventListener('keydown', onKeyDown);
      overlay.querySelectorAll('.lightbox-close-btn').forEach(btn => btn.onclick = close);
      overlay.onclick = close;
    };

    // 5. Robust Image Upload, Live Preview & Progress Bar Helper
    const bindImageUpload = (fileId, textId, previewId, title = 'Attached Image', badgeId = null, clearBtnId = null, compKey = null) => {
      const fileInput = document.getElementById(fileId);
      const textInput = document.getElementById(textId);
      const preview = document.getElementById(previewId);
      if (!preview) return;

      preview.style.cursor = 'pointer';
      preview.title = 'Click to view ' + title;

      // Click on preview box: opens lightbox
      preview.onclick = () => {
        const currentSrc = preview.dataset.imgSrc || (textInput && textInput.dataset.dataUrl) || (textInput && textInput.value.trim());
        const currentName = preview.dataset.imgName || (textInput && textInput.value.trim()) || title;
        if (currentSrc && (currentSrc.startsWith('data:image') || currentSrc.startsWith('http') || currentSrc.startsWith('/') || currentSrc.includes('.'))) {
          showImageLightbox(currentSrc, currentName);
        } else if (fileInput) {
          fileInput.click();
        }
      };

      if (!fileInput || !textInput) return;

      let progressWrap = document.getElementById(fileId + '-progress-wrap');
      if (!progressWrap) {
        const container = fileInput.closest('.flex.items-center.gap-2')?.parentElement || textInput.parentElement;
        progressWrap = document.createElement('div');
        progressWrap.id = fileId + '-progress-wrap';
        progressWrap.className = 'hidden mt-1.5 w-full transition-all';
        progressWrap.innerHTML = `
          <div class="flex items-center justify-between text-[10px] font-semibold text-[#00A4B7] mb-1">
            <span class="upload-status-text">Uploading...</span>
            <span class="upload-pct-text">0%</span>
          </div>
          <div class="w-full bg-[#E2E8F0] rounded-full h-1.5 overflow-hidden">
            <div class="upload-progress-bar bg-[#00A4B7] h-full rounded-full transition-all duration-150" style="width: 0%"></div>
          </div>
        `;
        container.appendChild(progressWrap);
      }

      const progressBar = progressWrap.querySelector('.upload-progress-bar');
      const statusText = progressWrap.querySelector('.upload-status-text');
      const pctText = progressWrap.querySelector('.upload-pct-text');
      const badge = badgeId ? document.getElementById(badgeId) : null;
      const clearBtn = clearBtnId ? document.getElementById(clearBtnId) : null;

      // Clear button binding
      if (clearBtn) {
        clearBtn.onclick = () => {
          fileInput.value = '';
          textInput.value = '';
          textInput.dataset.dataUrl = '';
          textInput.placeholder = 'No file uploaded...';
          preview.dataset.imgSrc = '';
          preview.dataset.imgName = title;
          preview.innerHTML = `
            <div class="flex flex-col items-center justify-center text-[#94A3B8] group-hover:text-[#00A4B7] transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
          `;
          preview.classList.remove('border-[#00A4B7]');
          preview.classList.add('border-[#CBD5E1]');
          if (badge) {
            badge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1]';
            badge.textContent = 'No File';
          }
          if (compKey) comp[compKey] = '';
          clearBtn.classList.add('hidden');
        };
      }

      fileInput.onchange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        // Show progress bar
        progressWrap.classList.remove('hidden');
        progressBar.style.width = '20%';
        pctText.textContent = '20%';
        statusText.innerHTML = `<span class="flex items-center gap-1.5"><svg class="w-3 h-3 animate-spin text-[#00A4B7]" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Uploading ${file.name}...</span>`;
        statusText.classList.remove('text-[#00875A]', 'text-rose-500');
        statusText.classList.add('text-[#00A4B7]');
        textInput.placeholder = file.name;
        textInput.value = file.name;

        let progress = 20;
        const interval = setInterval(() => {
          if (progress < 85) {
            progress += Math.floor(Math.random() * 18) + 10;
            if (progress > 85) progress = 85;
            progressBar.style.width = progress + '%';
            pctText.textContent = progress + '%';
          }
        }, 80);

        const reader = new FileReader();
        reader.onload = (evt) => {
          clearInterval(interval);
          const dataUrl = evt.target.result;

          progressBar.style.width = '100%';
          pctText.textContent = '100%';
          statusText.innerHTML = '✓ Uploaded ' + file.name;
          statusText.classList.remove('text-[#00A4B7]');
          statusText.classList.add('text-[#00875A]');

          textInput.dataset.dataUrl = dataUrl;
          textInput.placeholder = file.name;
          textInput.value = file.name;

          // Render uploaded file in preview box
          preview.dataset.imgSrc = dataUrl;
          preview.dataset.imgName = file.name;
          preview.innerHTML = `
            <img src="${dataUrl}" class="w-full h-full object-contain p-1" />
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-[10px] font-bold">
              View
            </div>
          `;
          preview.title = 'Click to view ' + file.name;
          preview.classList.remove('border-[#CBD5E1]');
          preview.classList.add('border-[#00A4B7]');

          if (badge) {
            badge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]';
            badge.textContent = 'Uploaded';
          }

          if (clearBtn) {
            clearBtn.classList.remove('hidden');
          }

          if (compKey) comp[compKey] = dataUrl;

          setTimeout(() => {
            if (progressWrap) {
              progressWrap.classList.add('hidden');
              progressBar.style.width = '0%';
              statusText.classList.remove('text-[#00875A]');
              statusText.classList.add('text-[#00A4B7]');
              statusText.textContent = 'Uploading...';
              pctText.textContent = '0%';
            }
          }, 3000);
        };

        reader.onerror = () => {
          clearInterval(interval);
          statusText.textContent = 'Failed to load file';
          statusText.classList.remove('text-[#00A4B7]');
          statusText.classList.add('text-rose-500');
        };

        reader.readAsDataURL(file);
      };
    };

    bindImageUpload('admin-org-logo-file', 'admin-org-logo', 'admin-org-logo-preview', comp.name + ' Logo', null, null, 'logo');
    bindImageUpload('admin-app-icon-file', 'admin-app-icon', 'admin-app-icon-preview', 'Application Icon', 'admin-app-icon-status-badge', 'admin-app-icon-clear-btn', 'appIcon');
    bindImageUpload('admin-app-logo-file', 'admin-app-logo', 'admin-app-logo-preview', 'Application Logo', 'admin-app-logo-status-badge', 'admin-app-logo-clear-btn', 'appLogo');
    bindImageUpload('admin-app-report-header-file', 'admin-app-report-header', 'admin-app-report-header-preview', 'Report Header Image', 'admin-app-report-header-status-badge', 'admin-app-report-header-clear-btn', 'reportHeaderImg');
    bindImageUpload('admin-app-report-footer-file', 'admin-app-report-footer', 'admin-app-report-footer-preview', 'Report Footer Image', 'admin-app-report-footer-status-badge', 'admin-app-report-footer-clear-btn', 'reportFooterImg');

    // 6. Multi-Plant Add / Remove Handling
    const rebindPlants = () => {
      const containerPlants = document.getElementById('admin-plants-container');
      const addBtn = document.getElementById('admin-add-plant-btn');
      if (addBtn) {
        addBtn.onclick = () => {
          const cards = containerPlants.querySelectorAll('.admin-plant-card');
          const currentList = [];
          cards.forEach((card, i) => {
            currentList.push({
              name: card.querySelector('.admin-plant-name')?.value.trim() || ('Unit-' + (i + 1) + ' VSP'),
              code: card.querySelector('.admin-plant-code')?.value.trim().toUpperCase() || ('PLT-' + String(i + 1).padStart(3, '0')),
              status: card.querySelector('.admin-plant-status')?.value || 'Active',
              contact: card.querySelector('.admin-plant-contact')?.value.trim() || '',
              phone: card.querySelector('.admin-plant-phone')?.value.trim() || '',
              address: card.querySelector('.admin-plant-address')?.value.trim() || ''
            });
          });
          const nextIdx = currentList.length + 1;
          currentList.push({
            name: 'Unit-' + nextIdx + ' VSP',
            code: 'PLT-' + String(nextIdx).padStart(3, '0'),
            status: 'Active',
            contact: '',
            phone: '',
            address: ''
          });
          comp.plantList = currentList;
          this.renderOrganizationTab(container, tabsBarHtml);
        };
      }

      if (containerPlants) {
        containerPlants.querySelectorAll('.admin-remove-plant-btn').forEach(btn => {
          btn.onclick = () => {
            const removeIdx = parseInt(btn.getAttribute('data-idx') || '0');
            const cards = containerPlants.querySelectorAll('.admin-plant-card');
            const currentList = [];
            cards.forEach((card, i) => {
              currentList.push({
                name: card.querySelector('.admin-plant-name')?.value.trim() || ('Unit-' + (i + 1) + ' VSP'),
                code: card.querySelector('.admin-plant-code')?.value.trim().toUpperCase() || ('PLT-' + String(i + 1).padStart(3, '0')),
                status: card.querySelector('.admin-plant-status')?.value || 'Active',
                contact: card.querySelector('.admin-plant-contact')?.value.trim() || '',
                phone: card.querySelector('.admin-plant-phone')?.value.trim() || '',
                address: card.querySelector('.admin-plant-address')?.value.trim() || ''
              });
            });
            if (currentList.length > 1) {
              currentList.splice(removeIdx, 1);
              comp.plantList = currentList;
              this.renderOrganizationTab(container, tabsBarHtml);
            }
          };
        });
      }
    };
    if (isPlantsExpanded) {
      rebindPlants();
    }

    // 7. Save Changes button handler (Persists directly to Super Admin client state with confirmation)
    const saveBtn = document.getElementById('btn-save-organization');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        captureOrgState();
        Modal.confirm({
          title: 'Save Organization Changes?',
          message: `Are you sure you want to save the settings for "${comp.name}"? Updated plant records, brand assets, and theme customizations will be saved and applied across the entire application.`,
          confirmText: 'Yes, Save Changes',
          cancelText: 'Cancel',
          isDestructive: false,
          onConfirm: () => {
            // Save back to Super Admin Studio state
            if (studioState) {
              if (!Array.isArray(studioState.companies)) studioState.companies = [];
              const existingIdx = studioState.companies.findIndex(c => c.id === comp.id);
              if (existingIdx !== -1) {
                studioState.companies[existingIdx] = comp;
              } else {
                studioState.companies.push(comp);
              }
              localStorage.setItem(STUDIO_KEY, JSON.stringify(studioState));
            }

            // Apply changes globally across the entire application immediately
            if (typeof window.applyGlobalClientTheme === 'function') {
              window.applyGlobalClientTheme(comp);
            } else if (typeof App !== 'undefined' && typeof App.applyClientBrandingTheme === 'function') {
              App.applyClientBrandingTheme(comp);
            }
            Toast.show(`Organization "${comp.name}" settings saved successfully!`, 'success', 'Saved');
            this.renderOrganizationTab(container, tabsBarHtml);
          }
        });
      });
    }
  },
  // -------------------------------------------------------------
  // TAB 2: User & Roles (Triple Accordions: Users, Roles, Departments)
  // -------------------------------------------------------------
  activeUserRolesSection: 'users', // 'users' | 'roles' | 'departments' | null
  departments: [
    { id: 'dept-1', code: 'DEP-01', name: 'Executive Management', head: 'Laxmi Narayana', email: 'laxmi.n@devifisheries.com', phone: '+91 98480 12345', description: 'Corporate executive oversight, business strategy, board reporting and general governance.', status: 'Active' },
    { id: 'dept-2', code: 'DEP-02', name: 'Procurement & Farm Sourcing', head: 'Ramesh Varma', email: 'ramesh.v@devifisheries.com', phone: '+91 98480 23456', description: 'Aqua farm grower tie-ups, raw shrimp harvest scheduling, and farm-gate procurement.', status: 'Active' },
    { id: 'dept-3', code: 'DEP-03', name: 'Plant Operations (Unit 1)', head: 'S. K. Murthy', email: 'sk.murthy@devifisheries.com', phone: '+91 98480 34567', description: 'Factory processing lines, grading, peeling, IQF freezing, and packing execution.', status: 'Active' },
    { id: 'dept-4', code: 'DEP-04', name: 'Quality Control & Lab', head: 'Dr. Ananya Sen', email: 'ananya.s@devifisheries.com', phone: '+91 98480 45678', description: 'Antibiotic chemical screening, microbiological testing, pre-shipment quality inspection.', status: 'Active' },
    { id: 'dept-5', code: 'DEP-05', name: 'Cold Storage & Logistics', head: 'Venkat Rao', email: 'venkat.r@devifisheries.com', phone: '+91 98480 56789', description: '-18°C cold chain storage warehouse, pallet inventory tracking, and reefer container dispatch.', status: 'Active' },
    { id: 'dept-6', code: 'DEP-06', name: 'Commercial & Export Sales', head: 'Rajesh Kumar', email: 'rajesh.k@devifisheries.com', phone: '+91 98480 67890', description: 'Overseas export orders, customer contract pricing, shipping line clearance and customs.', status: 'Active' },
    { id: 'dept-7', code: 'DEP-07', name: 'Inventory & Materials', head: 'Priya Nair', email: 'priya.n@devifisheries.com', phone: '+91 98480 78901', description: 'Packaging materials, master cartons, chemicals, spare parts, and general stores inventory.', status: 'Active' },
    { id: 'dept-8', code: 'DEP-08', name: 'Finance & Realization', head: 'Kalyan Chakravarthy', email: 'kalyan.c@devifisheries.com', phone: '+91 98480 89012', description: 'Invoicing, export bank realizations, payments, grower disbursements and statutory audits.', status: 'Active' }
  ],
  deptSearchQuery: '',
  deptFilterStatus: 'All',
  roles: [
    { id: 'role-1', code: 'ROL-ADM', name: 'Super / System Admin', level: 'Full Access', department: 'All Departments', description: 'Unrestricted CRUD & approvals across all 8 ERP operational modules and settings.', usersCount: 1, permissions: 'All Modules (Full Access)', status: 'Active' },
    { id: 'role-2', code: 'ROL-MGR', name: 'Operations / Sales Manager', level: 'Departmental', department: 'Commercial & Export Sales', description: 'Full PO creation, Lot allocation, Production batch logs, and export dispatch authority.', usersCount: 3, permissions: 'Sales, Purchase, Coldstore, Production', status: 'Active' },
    { id: 'role-3', code: 'ROL-SUP', name: 'Quality & Line Supervisor', level: 'Verification', department: 'Quality Control & Lab', description: 'Lab chemical screening entries, raw material weighment verification, and grading logs.', usersCount: 1, permissions: 'Preprocessing, Quality Control, Weighbridge', status: 'Active' },
    { id: 'role-4', code: 'ROL-OPR', name: 'Floor & Logistics Operator', level: 'Read / Log', department: 'Cold Storage & Logistics', description: 'Coldstore pallet in/out logging, container stuffing checklists, and receiving tally entries.', usersCount: 2, permissions: 'Coldstore, Inventory, Dispatch (Data Entry)', status: 'Active' },
    { id: 'role-5', code: 'ROL-VIE', name: 'Finance / Audit Viewer', level: 'Read Only', department: 'Finance & Realization', description: 'Auditor inspection view, financial reports generation, and read-only invoice analytics.', usersCount: 1, permissions: 'Reports, Finance, Traceability (Read Only)', status: 'Active' }
  ],
  roleSearchQuery: '',
  roleFilterLevel: 'All',
  roleFilterStatus: 'All',

  renderUserAccessTab(container, tabsBarHtml) {
    return this.renderUserRolesTab(container, tabsBarHtml);
  },

  renderUserRolesTab(container, tabsBarHtml) {
    this.cachedTabsBarHtml = tabsBarHtml || this.cachedTabsBarHtml || this.renderAdminSettingsTabs('user-roles');
    const effectiveTabsBar = this.cachedTabsBarHtml;

    const isUsersExpanded = this.activeUserRolesSection === 'users';
    const isRolesExpanded = this.activeUserRolesSection === 'roles';
    const isDeptsExpanded = this.activeUserRolesSection === 'departments';

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in pb-10">
        ${effectiveTabsBar}

        <!-- Page Header (Clean H1, strictly no subheading per AGENTS.md Rule 2) -->
        <div class="flex items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">User &amp; Roles</h1>
        </div>

        <!-- Accordions Group (Layout referenced from Masters) -->
        <div class="space-y-3" id="user-roles-accordion-group">
          
          <!-- ACCORDION 1: Users Directory -->
          <div class="user-roles-accordion-card bg-white rounded-xl border ${isUsersExpanded ? 'border-[#00A4B7] is-expanded shadow-xs' : 'border-[#DFE1E6] shadow-2xs'} overflow-hidden transition-all duration-200">
            <!-- Accordion Header Row (12px padding all sides, p-3) -->
            <div 
              class="user-roles-accordion-header w-full p-3 flex items-center justify-between transition-colors cursor-pointer select-none bg-white hover:bg-[#F8FAFC] ${isUsersExpanded ? 'border-b border-[#DFE1E6]' : ''}"
              data-section="users"
            >
              <!-- Left: Icon + Title -->
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 ${isUsersExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#00A4B7]'}">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="font-extrabold text-[#172B4D] text-sm tracking-tight">Users Directory</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${this.users.length} Users</span>
                </div>
              </div>

              <!-- Right: Chevron on far right -->
              <div class="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${isUsersExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#64748B]'}">
                <svg class="w-4 h-4 transform transition-transform duration-300 ${isUsersExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>

            <!-- Accordion Body -->
            ${isUsersExpanded ? `
              <div class="user-roles-accordion-body m-0 p-4 bg-[#daedef] space-y-3.5 border-t border-[#DFE1E6] animate-accordion-expand" style="margin: 0 !important; background-color: #daedef !important;">
                <!-- Search & Filter Card (AGENTS.md Rule 3) -->
                <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs transition-all duration-200">
                  <div class="flex items-center justify-between pb-1">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
                      <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters — Users</h3>
                    </div>
                    <div class="inline-flex items-center gap-2">
                      <!-- Circular 32x32 Reset Button -->
                      <button type="button" id="users-filter-reset" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                      </button>
                      <!-- Circular 32x32 Collapse/Expand Toggle Button -->
                      <button type="button" id="users-filter-toggle" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Toggle Filter">
                        <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                      </button>
                    </div>
                  </div>

                  <div id="users-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
                    <div>
                      <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Search User / Email</label>
                      <input type="text" id="flt-user-search" value="${this.userSearchQuery || ''}" placeholder="Filter by name, email, ID..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Department</label>
                      <select id="flt-user-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                        <option value="All" ${this.userFilterDept === 'All' ? 'selected' : ''}>All Departments (${this.departments.length})</option>
                        ${this.departments.map(d => `<option value="${this.escape(d.name)}" ${this.userFilterDept === d.name ? 'selected' : ''}>${this.escape(d.name)}</option>`).join('')}
                      </select>
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Role / Access Level</label>
                      <select id="flt-user-role" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                        <option value="All" ${this.userFilterRole === 'All' ? 'selected' : ''}>All Roles (${this.roles.length})</option>
                        ${this.roles.map(r => `<option value="${this.escape(r.name)}" ${this.userFilterRole === r.name ? 'selected' : ''}>${this.escape(r.name)} (${this.escape(r.code)})</option>`).join('')}
                      </select>
                    </div>

                    <div class="flex items-end">
                      <button type="button" id="users-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Header Row with Add User Button -->
                <div class="flex items-center justify-between gap-3 pt-1">
                  <div class="flex items-center gap-2">
                    <span class="font-extrabold text-[#172B4D] text-sm tracking-tight">Users Directory</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${this.users.length} Records</span>
                  </div>
                  <button type="button" id="btn-add-user" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add User</span>
                  </button>
                </div>

                <!-- Users DataTable Container -->
                <div id="users-datatable-container"></div>
              </div>
            ` : ''}
          </div>

          <!-- ACCORDION 2: Roles & Permissions -->
          <div class="user-roles-accordion-card bg-white rounded-xl border ${isRolesExpanded ? 'border-[#00A4B7] is-expanded shadow-xs' : 'border-[#DFE1E6] shadow-2xs'} overflow-hidden transition-all duration-200">
            <!-- Accordion Header Row (12px padding all sides, p-3) -->
            <div 
              class="user-roles-accordion-header w-full p-3 flex items-center justify-between transition-colors cursor-pointer select-none bg-white hover:bg-[#F8FAFC] ${isRolesExpanded ? 'border-b border-[#DFE1E6]' : ''}"
              data-section="roles"
            >
              <!-- Left: Icon + Title -->
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 ${isRolesExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#00A4B7]'}">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="font-extrabold text-[#172B4D] text-sm tracking-tight">Roles &amp; Permissions</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${this.roles.length} Roles</span>
                </div>
              </div>

              <!-- Right: Chevron on far right -->
              <div class="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${isRolesExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#64748B]'}">
                <svg class="w-4 h-4 transform transition-transform duration-300 ${isRolesExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>

            <!-- Accordion Body -->
            ${isRolesExpanded ? `
              <div class="user-roles-accordion-body m-0 p-4 bg-[#daedef] space-y-3.5 border-t border-[#DFE1E6] animate-accordion-expand" style="margin: 0 !important; background-color: #daedef !important;">
                <!-- Search & Filter Card (AGENTS.md Rule 3) -->
                <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs transition-all duration-200">
                  <div class="flex items-center justify-between pb-1">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
                      <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters — Roles</h3>
                    </div>
                    <div class="inline-flex items-center gap-2">
                      <!-- Circular 32x32 Reset Button -->
                      <button type="button" id="roles-filter-reset" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                      </button>
                      <!-- Circular 32x32 Collapse/Expand Toggle Button -->
                      <button type="button" id="roles-filter-toggle" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Toggle Filter">
                        <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                      </button>
                    </div>
                  </div>

                  <div id="roles-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
                    <div>
                      <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Search Role / Code / Permissions</label>
                      <input type="text" id="flt-role-search" value="${this.roleSearchQuery || ''}" placeholder="Filter by role name, code, description..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Access Level</label>
                      <select id="flt-role-level" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                        <option value="All" ${this.roleFilterLevel === 'All' ? 'selected' : ''}>All Levels</option>
                        <option value="Full Access" ${this.roleFilterLevel === 'Full Access' ? 'selected' : ''}>Full Access</option>
                        <option value="Departmental" ${this.roleFilterLevel === 'Departmental' ? 'selected' : ''}>Departmental</option>
                        <option value="Verification" ${this.roleFilterLevel === 'Verification' ? 'selected' : ''}>Verification</option>
                        <option value="Read / Log" ${this.roleFilterLevel === 'Read / Log' ? 'selected' : ''}>Read / Log</option>
                        <option value="Read Only" ${this.roleFilterLevel === 'Read Only' ? 'selected' : ''}>Read Only</option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
                      <select id="flt-role-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                        <option value="All" ${this.roleFilterStatus === 'All' ? 'selected' : ''}>All Statuses</option>
                        <option value="Active" ${this.roleFilterStatus === 'Active' ? 'selected' : ''}>Active</option>
                        <option value="Inactive" ${this.roleFilterStatus === 'Inactive' ? 'selected' : ''}>Inactive</option>
                      </select>
                    </div>

                    <div class="flex items-end">
                      <button type="button" id="roles-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Header Row with Add Role Button -->
                <div class="flex items-center justify-between gap-3 pt-1">
                  <div class="flex items-center gap-2">
                    <span class="font-extrabold text-[#172B4D] text-sm tracking-tight">Roles List</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${this.roles.length} Records</span>
                  </div>
                  <button type="button" id="btn-add-role" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Role</span>
                  </button>
                </div>

                <!-- Roles DataTable Container -->
                <div id="roles-datatable-container"></div>
              </div>
            ` : ''}
          </div>

          <!-- ACCORDION 3: Departments Directory -->
          <div class="user-roles-accordion-card bg-white rounded-xl border ${isDeptsExpanded ? 'border-[#00A4B7] is-expanded shadow-xs' : 'border-[#DFE1E6] shadow-2xs'} overflow-hidden transition-all duration-200">
            <!-- Accordion Header Row (12px padding all sides, p-3) -->
            <div 
              class="user-roles-accordion-header w-full p-3 flex items-center justify-between transition-colors cursor-pointer select-none bg-white hover:bg-[#F8FAFC] ${isDeptsExpanded ? 'border-b border-[#DFE1E6]' : ''}"
              data-section="departments"
            >
              <!-- Left: Icon + Title -->
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 ${isDeptsExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#00A4B7]'}">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="font-extrabold text-[#172B4D] text-sm tracking-tight">Departments Directory</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${this.departments.length} Departments</span>
                </div>
              </div>

              <!-- Right: Chevron on far right -->
              <div class="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${isDeptsExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#64748B]'}">
                <svg class="w-4 h-4 transform transition-transform duration-300 ${isDeptsExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>

            <!-- Accordion Body -->
            ${isDeptsExpanded ? `
              <div class="user-roles-accordion-body m-0 p-4 bg-[#daedef] space-y-3.5 border-t border-[#DFE1E6] animate-accordion-expand" style="margin: 0 !important; background-color: #daedef !important;">
                <!-- Search & Filter Card (AGENTS.md Rule 3) -->
                <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs transition-all duration-200">
                  <div class="flex items-center justify-between pb-1">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
                      <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters — Departments</h3>
                    </div>
                    <div class="inline-flex items-center gap-2">
                      <!-- Circular 32x32 Reset Button -->
                      <button type="button" id="depts-filter-reset" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                      </button>
                      <!-- Circular 32x32 Collapse/Expand Toggle Button -->
                      <button type="button" id="depts-filter-toggle" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Toggle Filter">
                        <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                      </button>
                    </div>
                  </div>

                  <div id="depts-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
                    <div>
                      <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Search Department / Code</label>
                      <input type="text" id="flt-dept-search" value="${this.deptSearchQuery || ''}" placeholder="Filter by department name, code..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
                      <select id="flt-dept-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                        <option value="All" ${this.deptFilterStatus === 'All' ? 'selected' : ''}>All Statuses</option>
                        <option value="Active" ${this.deptFilterStatus === 'Active' ? 'selected' : ''}>Active</option>
                        <option value="Inactive" ${this.deptFilterStatus === 'Inactive' ? 'selected' : ''}>Inactive</option>
                      </select>
                    </div>

                    <div class="flex items-end">
                      <button type="button" id="depts-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Header Row with Add Department Button -->
                <div class="flex items-center justify-between gap-3 pt-1">
                  <div class="flex items-center gap-2">
                    <span class="font-extrabold text-[#172B4D] text-sm tracking-tight">Departments Directory</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${this.departments.length} Records</span>
                  </div>
                  <button type="button" id="btn-add-dept" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Department</span>
                  </button>
                </div>

                <!-- Departments DataTable Container -->
                <div id="departments-datatable-container"></div>
              </div>
            ` : ''}
          </div>

        </div>
      </div>
    `;

    // Bind Accordion Header clicks (strictly one open at a time like Masters)
    const headerBtns = container.querySelectorAll('.user-roles-accordion-header');
    headerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const sec = btn.dataset.section;
        this.activeUserRolesSection = (this.activeUserRolesSection === sec) ? null : sec;
        this.renderUserRolesTab(container, this.cachedTabsBarHtml);
      });
    });

    if (isUsersExpanded) {
      this.renderUsersTable();
      this.bindUsersEvents(container);
    }

    if (isRolesExpanded) {
      this.renderRolesTable();
      this.bindRolesEvents(container);
    }

    if (isDeptsExpanded) {
      this.renderDepartmentsTable();
      this.bindDepartmentsEvents(container);
    }
  },

  renderUsersTable() {
    const tableContainer = document.getElementById('users-datatable-container');
    if (!tableContainer) return;

    let filtered = [...this.users];
    if (this.userSearchQuery) {
      const q = this.userSearchQuery.toLowerCase();
      filtered = filtered.filter(u => 
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.empId.toLowerCase().includes(q) ||
        u.department.toLowerCase().includes(q)
      );
    }
    if (this.userFilterDept && this.userFilterDept !== 'All') {
      filtered = filtered.filter(u => u.department === this.userFilterDept);
    }
    if (this.userFilterRole && this.userFilterRole !== 'All') {
      filtered = filtered.filter(u => u.role === this.userFilterRole);
    }

    tableContainer.innerHTML = '';

    new DataTable({
      containerId: 'users-datatable-container',
      keyField: 'id',
      tableTitle: `Users Directory (${filtered.length})`,
      hideToolbar: true,
      searchable: true,
      exportable: true,
      data: filtered,
      columns: [
        {
          field: 'name',
          header: 'Employee / User',
          sortable: true,
          render: (val, row) => `
            <div class="flex items-center gap-2.5">
              ${row.photo ? `
                <img src="${row.photo}" alt="${this.escape(val)}" class="w-8 h-8 rounded-full object-cover shrink-0 border border-[#BAE6FD]" />
              ` : `
                <div class="w-8 h-8 rounded-full bg-[#00A4B7]/10 text-[#172B4D] font-bold flex items-center justify-center text-xs shrink-0 border border-[#BAE6FD]">
                  ${val.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
              `}
              <div class="min-w-0">
                <span class="font-bold text-[#172B4D] block truncate">${this.escape(val)}</span>
                <span class="font-mono text-[10.5px] text-[#64748B] block">${this.escape(row.empId)}</span>
              </div>
            </div>
          `
        },
        {
          field: 'email',
          header: 'Email & Contact',
          sortable: true,
          render: (val, row) => `
            <div>
              <span class="text-xs text-[#172B4D] font-medium block truncate">${this.escape(val)}</span>
              <span class="text-[10.5px] text-[#64748B] block">${this.escape(row.phone)}</span>
            </div>
          `
        },
        {
          field: 'department',
          header: 'Department',
          sortable: true,
          render: (val) => `<span class="font-medium text-xs text-[#172B4D]">${this.escape(val)}</span>`
        },
        {
          field: 'role',
          header: 'Assigned Role',
          sortable: true,
          render: (val, row) => {
            const roleObj = this.roles.find(r => r.name === val || r.code === val || r.code === row.roleCode || r.name.toLowerCase() === (val || '').toLowerCase());
            const roleName = roleObj ? roleObj.name : val;
            const roleCode = roleObj ? roleObj.code : (row.roleCode || '');

            return `
              <div>
                <span class="font-bold text-xs text-[#172B4D] block truncate">${this.escape(roleName)}</span>
                ${roleCode ? `<span class="font-mono text-[10.5px] font-semibold text-[#00A4B7] block mt-0.5">${this.escape(roleCode)}</span>` : ''}
              </div>
            `;
          }
        },
        {
          field: 'status',
          header: 'Status',
          sortable: true,
          render: (val) => `
            <span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">${this.escape(val)}</span>
          `
        },
        {
          field: 'lastActive',
          header: 'Last Active',
          sortable: true,
          render: (val) => `<span class="text-xs text-[#64748B] font-mono">${this.escape(val)}</span>`
        }
      ],
      actions: [
        {
          label: 'Login as User',
          icon: '<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>',
          onClick: (row) => this.loginAsUser(row)
        },
        {
          label: 'Change Password',
          icon: '<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>',
          onClick: (row) => this.openChangePasswordModal(row)
        },
        {
          label: 'Edit',
          icon: '<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>',
          onClick: (row) => this.openUserModal(row, () => this.renderUsersTable())
        },
        {
          label: 'Delete',
          icon: '<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',
          onClick: (row) => {
            Modal.confirm({
              title: 'Delete User Account',
              message: `Are you sure you want to delete user account for <strong class="text-[#DE350B]">${this.escape(row.name)}</strong> (${this.escape(row.empId)})? This action cannot be undone.`,
              confirmText: 'Delete User',
              cancelText: 'Cancel',
              isDestructive: true,
              onConfirm: () => {
                this.users = this.users.filter(u => u.id !== row.id);
                this.renderUsersTable();
                const container = document.getElementById(this.lastContainerId || 'main-content');
                if (container) this.renderUserRolesTab(container, this.cachedTabsBarHtml);
                Toast.show(`User ${row.name} removed successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  loginAsUser(row) {
    if (!row) return;
    sessionStorage.setItem('dfl_login_user', JSON.stringify({
      id: row.id,
      empId: row.empId,
      name: row.name,
      email: row.email,
      phone: row.phone,
      department: row.department,
      role: row.role,
      roleCode: row.roleCode,
      photo: row.photo || ''
    }));
    Toast.show(`Opening login page for ${row.name} (${row.role})...`, 'info', 'User Login');
    window.location.hash = '#/login';
  },

  bindUsersEvents(container) {
    document.getElementById('users-filter-search-btn')?.addEventListener('click', () => {
      this.userSearchQuery = document.getElementById('flt-user-search')?.value.trim() || '';
      this.userFilterDept = document.getElementById('flt-user-dept')?.value || 'All';
      this.userFilterRole = document.getElementById('flt-user-role')?.value || 'All';
      this.renderUsersTable();
    });

    document.getElementById('flt-user-search')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.userSearchQuery = e.target.value.trim();
        this.userFilterDept = document.getElementById('flt-user-dept')?.value || 'All';
        this.userFilterRole = document.getElementById('flt-user-role')?.value || 'All';
        this.renderUsersTable();
      }
    });

    document.getElementById('users-filter-reset')?.addEventListener('click', () => {
      this.userSearchQuery = '';
      this.userFilterDept = 'All';
      this.userFilterRole = 'All';
      if (document.getElementById('flt-user-search')) document.getElementById('flt-user-search').value = '';
      if (document.getElementById('flt-user-dept')) document.getElementById('flt-user-dept').value = 'All';
      if (document.getElementById('flt-user-role')) document.getElementById('flt-user-role').value = 'All';
      this.renderUsersTable();
      Toast.show('User filters reset', 'info');
    });

    document.getElementById('users-filter-toggle')?.addEventListener('click', () => {
      const body = document.getElementById('users-filter-body');
      if (body) body.classList.toggle('hidden');
    });

    document.getElementById('btn-add-user')?.addEventListener('click', () => {
      this.openUserModal(null, () => this.renderUsersTable());
    });
  },

  renderRolesTable() {
    const tableContainer = document.getElementById('roles-datatable-container');
    if (!tableContainer) return;

    let filtered = [...this.roles];
    if (this.roleSearchQuery) {
      const q = this.roleSearchQuery.toLowerCase();
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(q) ||
        r.code.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.permissions.toLowerCase().includes(q)
      );
    }
    if (this.roleFilterLevel && this.roleFilterLevel !== 'All') {
      filtered = filtered.filter(r => r.level === this.roleFilterLevel);
    }
    if (this.roleFilterStatus && this.roleFilterStatus !== 'All') {
      filtered = filtered.filter(r => r.status === this.roleFilterStatus);
    }

    tableContainer.innerHTML = '';

    new DataTable({
      containerId: 'roles-datatable-container',
      keyField: 'id',
      tableTitle: `Roles Directory (${filtered.length})`,
      hideToolbar: true,
      searchable: true,
      exportable: true,
      data: filtered,
      columns: [
        {
          field: 'code',
          header: 'Role Code',
          sortable: true,
          render: (val) => `<span class="font-bold text-[#00A4B7] font-mono">${this.escape(val)}</span>`
        },
        {
          field: 'name',
          header: 'Role Name',
          sortable: true,
          render: (val) => `<span class="font-bold text-[#172B4D]">${this.escape(val)}</span>`
        },
        {
          field: 'department',
          header: 'Department',
          sortable: true,
          render: (val, row) => {
            const deptName = row.department || (row.level === 'Full Access' ? 'All Departments' : 'Operations');
            return `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F0F9FF] text-[#00A4B7] border border-[#BAE6FD]">${this.escape(deptName)}</span>`;
          }
        },
        {
          field: 'level',
          header: 'Access Level',
          sortable: true,
          render: (val) => {
            let colorCls = 'bg-[#F1F5F9] text-[#5E6C84] border-[#DFE1E6]';
            if (val === 'Full Access') colorCls = 'bg-[#E0F2FE] text-[#00A4B7] border-[#BAE6FD]';
            else if (val === 'Departmental') colorCls = 'bg-[#EAE6FF] text-[#403294] border-[#D3C7FF]';
            else if (val === 'Verification') colorCls = 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]';
            else if (val === 'Read / Log') colorCls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
            return `<span class="px-2 py-0.5 rounded text-[11px] font-bold border ${colorCls}">${this.escape(val)}</span>`;
          }
        },
        {
          field: 'permissions',
          header: 'Module Scope / Permissions',
          sortable: true,
          render: (val) => `<span class="text-xs text-[#5E6C84] font-medium">${this.escape(val)}</span>`
        },
        {
          field: 'usersCount',
          header: 'Assigned Users',
          sortable: true,
          render: (val, row) => {
            const count = this.users.filter(u => u.role === row.name || u.roleCode === row.code || u.role === row.code).length;
            return `<span class="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-[#F1F5F9] text-[#172B4D] border border-[#DFE1E6]">${count} Users</span>`;
          }
        },
        {
          field: 'status',
          header: 'Status',
          sortable: true,
          render: (val) => `<span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold ${val === 'Inactive' ? 'bg-[#FFEBE6] text-[#DE350B] border border-[#FFBDAD]' : 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]'}">${this.escape(val || 'Active')}</span>`
        }
      ],
      actions: [
        {
          label: 'Edit',
          icon: '<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>',
          onClick: (row) => this.openRoleModal(row, () => this.renderRolesTable())
        },
        {
          label: 'Delete',
          icon: '<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',
          onClick: (row) => {
            Modal.confirm({
              title: 'Delete Access Role',
              message: `Are you sure you want to delete role <strong class="text-[#DE350B]">${this.escape(row.name)}</strong> (${this.escape(row.code)})? Users assigned to this role will need re-assignment.`,
              confirmText: 'Delete Role',
              cancelText: 'Cancel',
              isDestructive: true,
              onConfirm: () => {
                this.roles = this.roles.filter(r => r.id !== row.id);
                this.renderRolesTable();
                const container = document.getElementById(this.lastContainerId || 'main-content');
                if (container) this.renderUserRolesTab(container, this.cachedTabsBarHtml);
                Toast.show(`Role ${row.name} deleted successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  bindRolesEvents(container) {
    document.getElementById('roles-filter-search-btn')?.addEventListener('click', () => {
      this.roleSearchQuery = document.getElementById('flt-role-search')?.value.trim() || '';
      this.roleFilterLevel = document.getElementById('flt-role-level')?.value || 'All';
      this.roleFilterStatus = document.getElementById('flt-role-status')?.value || 'All';
      this.renderRolesTable();
    });

    document.getElementById('flt-role-search')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.roleSearchQuery = e.target.value.trim();
        this.roleFilterLevel = document.getElementById('flt-role-level')?.value || 'All';
        this.roleFilterStatus = document.getElementById('flt-role-status')?.value || 'All';
        this.renderRolesTable();
      }
    });

    document.getElementById('roles-filter-reset')?.addEventListener('click', () => {
      this.roleSearchQuery = '';
      this.roleFilterLevel = 'All';
      this.roleFilterStatus = 'All';
      if (document.getElementById('flt-role-search')) document.getElementById('flt-role-search').value = '';
      if (document.getElementById('flt-role-level')) document.getElementById('flt-role-level').value = 'All';
      if (document.getElementById('flt-role-status')) document.getElementById('flt-role-status').value = 'All';
      this.renderRolesTable();
      Toast.show('Role filters reset', 'info');
    });

    document.getElementById('roles-filter-toggle')?.addEventListener('click', () => {
      const body = document.getElementById('roles-filter-body');
      if (body) body.classList.toggle('hidden');
    });

    document.getElementById('btn-add-role')?.addEventListener('click', () => {
      this.openRoleModal(null, () => this.renderRolesTable());
    });
  },

  renderDepartmentsTable() {
    const tableContainer = document.getElementById('departments-datatable-container');
    if (!tableContainer) return;

    let filtered = [...this.departments];
    if (this.deptSearchQuery) {
      const q = this.deptSearchQuery.toLowerCase();
      filtered = filtered.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.code.toLowerCase().includes(q) ||
        (d.description && d.description.toLowerCase().includes(q))
      );
    }
    if (this.deptFilterStatus && this.deptFilterStatus !== 'All') {
      filtered = filtered.filter(d => d.status === this.deptFilterStatus);
    }

    new DataTable({
      container: tableContainer,
      tableTitle: `Departments Directory (${filtered.length})`,
      hideToolbar: true,
      searchable: true,
      exportable: true,
      data: filtered,
      columns: [
        {
          field: 'code',
          header: 'Dept Code',
          sortable: true,
          render: (val) => `<span class="font-bold text-[#00A4B7] font-mono">${this.escape(val)}</span>`
        },
        {
          field: 'name',
          header: 'Department Name',
          sortable: true,
          render: (val) => `<span class="font-bold text-[#172B4D]">${this.escape(val)}</span>`
        },
        {
          field: 'description',
          header: 'Scope & Functions',
          sortable: true,
          render: (val) => `<span class="text-xs text-[#5E6C84] font-medium">${this.escape(val || '—')}</span>`
        },
        {
          field: 'usersCount',
          header: 'Personnel Assigned',
          sortable: true,
          render: (val, row) => {
            const count = this.users.filter(u => u.department === row.name).length;
            return `<span class="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-[#F1F5F9] text-[#172B4D] border border-[#DFE1E6]">${count} Users</span>`;
          }
        },
        {
          field: 'status',
          header: 'Status',
          sortable: true,
          render: (val) => `<span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold ${val === 'Inactive' ? 'bg-[#FFEBE6] text-[#DE350B] border border-[#FFBDAD]' : 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]'}">${this.escape(val || 'Active')}</span>`
        }
      ],
      actions: [
        {
          label: 'Edit',
          icon: '<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>',
          onClick: (row) => this.openDepartmentModal(row, () => this.renderDepartmentsTable())
        },
        {
          label: 'Delete',
          icon: '<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',
          onClick: (row) => {
            Modal.confirm({
              title: 'Delete Department',
              message: `Are you sure you want to delete department <strong class="text-[#DE350B]">${this.escape(row.name)}</strong> (${this.escape(row.code)})? Users assigned to this department will need reassignment.`,
              confirmText: 'Delete Department',
              cancelText: 'Cancel',
              isDestructive: true,
              onConfirm: () => {
                this.departments = this.departments.filter(d => d.id !== row.id);
                this.renderDepartmentsTable();
                const container = document.getElementById(this.lastContainerId || 'main-content');
                if (container) this.renderUserRolesTab(container, this.cachedTabsBarHtml);
                Toast.show(`Department ${row.name} deleted successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  bindDepartmentsEvents(container) {
    document.getElementById('depts-filter-search-btn')?.addEventListener('click', () => {
      this.deptSearchQuery = document.getElementById('flt-dept-search')?.value.trim() || '';
      this.deptFilterStatus = document.getElementById('flt-dept-status')?.value || 'All';
      this.renderDepartmentsTable();
    });

    document.getElementById('flt-dept-search')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.deptSearchQuery = e.target.value.trim();
        this.deptFilterStatus = document.getElementById('flt-dept-status')?.value || 'All';
        this.renderDepartmentsTable();
      }
    });

    document.getElementById('depts-filter-reset')?.addEventListener('click', () => {
      this.deptSearchQuery = '';
      this.deptFilterStatus = 'All';
      if (document.getElementById('flt-dept-search')) document.getElementById('flt-dept-search').value = '';
      if (document.getElementById('flt-dept-status')) document.getElementById('flt-dept-status').value = 'All';
      this.renderDepartmentsTable();
      Toast.show('Department filters reset', 'info');
    });

    document.getElementById('depts-filter-toggle')?.addEventListener('click', () => {
      const body = document.getElementById('depts-filter-body');
      if (body) body.classList.toggle('hidden');
    });

    document.getElementById('btn-add-dept')?.addEventListener('click', () => {
      this.openDepartmentModal(null, () => this.renderDepartmentsTable());
    });

    // Summary table actions
    container.querySelectorAll('.btn-summary-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = btn.dataset.action;
        if (action === 'departments') {
          this.openDepartmentModal(null, () => this.renderDepartmentsTable());
        } else if (action === 'users') {
          this.openUserModal(null, () => this.renderUsersTable());
        } else if (action === 'roles') {
          this.openRoleModal(null, () => this.renderRolesTable());
        } else if (action === 'governance') {
          this.activeUserRolesSection = 'roles';
          const mainC = document.getElementById(this.lastContainerId || 'main-content');
          if (mainC) this.renderUserRolesTab(mainC, this.cachedTabsBarHtml);
        }
      });
    });
  },

  openDepartmentModal(dept = null, onSaved) {
    const isEdit = !!dept;
    const title = isEdit ? 'Edit Department' : 'Add New Department';

    Modal.open({
      title,
      size: 'md',
      content: `
        <form id="form-dept-modal" class="space-y-3.5 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Department Name <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="dept-modal-name" value="${dept ? this.escape(dept.name) : ''}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. Processing Line 2">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Department Code <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="dept-modal-code" value="${dept ? this.escape(dept.code) : `DEP-0${this.departments.length + 1}`}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Operational Scope & Functions</label>
            <textarea id="dept-modal-desc" rows="3" class="w-full text-xs p-2 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="Define department functions, scope, operations...">${dept ? this.escape(dept.description || '') : ''}</textarea>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
            <div class="flex items-center h-[32px]">
              <label class="inline-flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" id="dept-modal-status-cb" class="w-4 h-4 rounded text-[#00A4B7] accent-[#00A4B7] cursor-pointer" ${!dept || dept.status === 'Active' ? 'checked' : ''} />
                <span id="dept-modal-status-label" class="text-xs font-semibold text-[#172B4D]">${!dept || dept.status === 'Active' ? 'Active' : 'Inactive'}</span>
              </label>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: (m) => m.close()
        },
        {
          label: isEdit ? 'Update Department' : 'Save Department',
          type: 'primary',
          class: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: (m) => {
            const name = document.getElementById('dept-modal-name')?.value.trim();
            const code = document.getElementById('dept-modal-code')?.value.trim();
            const desc = document.getElementById('dept-modal-desc')?.value.trim() || '';
            const status = document.getElementById('dept-modal-status-cb')?.checked ? 'Active' : 'Inactive';

            if (!name || !code) {
              Toast.show('Please fill in required department fields', 'warning');
              return;
            }

            if (isEdit) {
              dept.name = name;
              dept.code = code;
              dept.description = desc;
              dept.status = status;
              Toast.show(`Department ${name} updated successfully`, 'success');
            } else {
              this.departments.push({
                id: `dept-${Date.now()}`,
                name,
                code,
                description: desc,
                status
              });
              Toast.show(`Department ${name} created successfully`, 'success');
            }
            m.close();
            if (onSaved) onSaved();
            const container = document.getElementById(this.lastContainerId || 'main-content');
            if (container) this.renderUserRolesTab(container, this.cachedTabsBarHtml);
          }
        }
      ]
    });

    setTimeout(() => {
      const cb = document.getElementById('dept-modal-status-cb');
      const lbl = document.getElementById('dept-modal-status-label');
      cb?.addEventListener('change', () => {
        if (lbl) lbl.textContent = cb.checked ? 'Active' : 'Inactive';
      });
    }, 0);
  },

getRoleNavTree() {
    const tree = [];
    const seen = new Set();

    const addMenuNode = (menuId, menuLabel, submenus) => {
      const k = String(menuId).toLowerCase();
      if (seen.has(k)) return;
      seen.add(k);
      tree.push({
        id: menuId,
        key: k,
        label: menuLabel,
        submenus: submenus || []
      });
    };

    // 1. General Menu (Super Admin General tab)
    addMenuNode('general', 'GENERAL', [
      {
        id: 'configuration',
        title: 'Configuration',
        tabs: [
          { id: 'clients', label: 'Clients', route: '#/general/configuration/clients' },
          { id: 'users', label: 'Users', route: '#/general/configuration/users' },
          { id: 'roles', label: 'Roles', route: '#/general/configuration/roles' },
          { id: 'menus', label: 'Menus', route: '#/general/configuration/menus' }
        ]
      }
    ]);

    // 2. All Modules from Super Admin Menus / Modules Studio
    const sv = (typeof SetupView !== 'undefined') ? SetupView : null;
    let modulesList = [];
    let submenusMap = {};
    let tabsList = [];

    if (sv && sv.state && Array.isArray(sv.state.modulesConfig) && sv.state.modulesConfig.length > 0) {
      modulesList = sv.state.modulesConfig;
      submenusMap = sv.state.submenusConfig || {};
      tabsList = sv.state.tabsConfig || [];
    } else {
      try {
        const saved = localStorage.getItem('dfl_erp_master_studio_state_v3');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed.modulesConfig)) {
            modulesList = parsed.modulesConfig;
            submenusMap = parsed.submenusConfig || {};
            tabsList = parsed.tabsConfig || [];
          }
        }
      } catch (e) {
        console.warn('Could not read studio state for roles nav tree', e);
      }
    }

    if (modulesList.length > 0) {
      modulesList.forEach(mod => {
        const modKey = mod.id || mod.key;
        const k = String(modKey).toLowerCase();
        if (seen.has(k)) return;

        const sms = submenusMap[modKey] || submenusMap[mod.id] || [];
        const submenus = sms.map(sm => {
          const smId = sm.id || sm.key || 'default';
          const smTitle = sm.title || sm.name || smId;
          let tabs = Array.isArray(sm.tabs) && sm.tabs.length > 0 ? sm.tabs : [];
          if (tabs.length === 0 && Array.isArray(tabsList)) {
            tabs = tabsList.filter(t => 
              (String(t.menuKey).toLowerCase() === k || String(t.menuKey).toLowerCase() === String(mod.id).toLowerCase()) &&
              (String(t.submenuId).toLowerCase() === String(smId).toLowerCase() || String(t.submenuId).toLowerCase() === String(sm.id).toLowerCase())
            );
          }
          return {
            id: smId,
            title: smTitle,
            tabs: tabs.map(t => ({
              id: t.id || t.key,
              label: t.label || t.title || t.id,
              route: t.route || t.hash || ''
            }))
          };
        });

        addMenuNode(modKey, mod.label || mod.name || modKey.toUpperCase(), submenus);
      });
    }

    // 3. Settings / Customizer (Super Admin Setting tab)
    if (!seen.has('settings')) {
      addMenuNode('settings', 'SETTINGS', [
        {
          id: 'custom',
          title: 'Customizer',
          tabs: [
            { id: 'forms', label: 'Forms', route: '#/settings/custom/forms' },
            { id: 'fields-customizer', label: 'Fields Customizer', route: '#/settings/custom/fields-customizer' },
            { id: 'query-editor', label: 'Query Editor', route: '#/settings/custom/query-editor' }
          ]
        }
      ]);
    }

    return tree;
  },

openRoleModal(role = null, onSaved) {
    const isEdit = !!role;
    const title = isEdit ? `Edit Role - ${role.code}` : 'Add New Access Role';
    const defaultCode = isEdit ? role.code : `ROL-${Math.floor(100 + Math.random() * 900)}`;

    const navTree = this.getRoleNavTree();

    const getTabPerm = (tabKey, mId, mLabel) => {
      let read = false, add = false, edit = false, del = false;
      if (role) {
        if (role.level === 'Full Access' || role.permissions === 'All Modules (Full Access)') {
          return { read: true, add: true, edit: true, delete: true };
        }
        if (role.level === 'Read Only') {
          return { read: true, add: false, edit: false, delete: false };
        }
        if (role.permissionsMatrix && typeof role.permissionsMatrix === 'object' && role.permissionsMatrix[tabKey]) {
          const p = role.permissionsMatrix[tabKey];
          return { read: !!p.read, add: !!p.add, edit: !!p.edit, delete: !!p.delete };
        }
        if (role.permissions) {
          const permLower = role.permissions.toLowerCase();
          if (permLower.includes(mLabel.toLowerCase()) || permLower.includes(mId.toLowerCase())) {
            read = true;
            if (role.level !== 'Read Only') {
              add = true;
              edit = true;
              if (role.level !== 'Read / Log') del = true;
            }
          }
        }
      } else {
        // Defaults for new role
        return { read: true, add: true, edit: true, delete: false };
      }
      return { read, add, edit, delete: del };
    };

    // Build the Hierarchical Tree Table Rows (Menu -> Submenu -> Tabs with branch connectors)
    let tableRowsHtml = '';
    navTree.forEach(menu => {
      const totalTabsInMenu = menu.submenus.reduce((acc, sm) => acc + (sm.tabs ? sm.tabs.length : 0), 0);

      // Compute tabs permissions for initial menu state
      const menuTabsPerms = [];
      menu.submenus.forEach(sm => {
        (sm.tabs || []).forEach(tab => {
          const tabKey = `${menu.id}:${sm.id}:${tab.id}`;
          menuTabsPerms.push({ tabKey, ...getTabPerm(tabKey, menu.id, menu.label) });
        });
      });

      const menuReadChecked = menuTabsPerms.length > 0 && menuTabsPerms.every(p => p.read);
      const menuAddChecked = menuTabsPerms.length > 0 && menuTabsPerms.every(p => p.add);
      const menuEditChecked = menuTabsPerms.length > 0 && menuTabsPerms.every(p => p.edit);
      const menuDelChecked = menuTabsPerms.length > 0 && menuTabsPerms.every(p => p.delete);

      // 1. Level 1: Main Menu Row
      tableRowsHtml += `
        <tr class="role-tree-row role-menu-row bg-[#F8FAFC] hover:bg-[#F1F5F9] border-y border-[#DFE1E6] transition-colors" data-level="menu" data-menu-id="${menu.id}">
          <td class="py-2 px-3 font-bold text-xs text-[#172B4D] whitespace-nowrap">
            <div class="flex items-center gap-2">
              <button type="button" class="btn-toggle-menu-tree w-5 h-5 rounded flex items-center justify-center text-[#172B4D] bg-white border border-[#CBD5E1] shadow-2xs shrink-0 hover:text-[#00A4B7] hover:border-[#00A4B7] transition-all cursor-pointer" data-menu-id="${menu.id}" title="Expand / Collapse Menu">
                <svg class="chevron-icon" style="display: block; width: 14px; height: 14px; min-width: 14px; min-height: 14px; stroke: #172B4D; stroke-width: 2.5px; fill: none; transition: transform 0.2s; transform: rotate(90deg);" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </button>
              <span class="font-extrabold text-xs text-[#172B4D] tracking-wide">${this.escape(menu.label)}</span>
            </div>
          </td>
          <td class="py-2 px-2 text-center">
            <input type="checkbox" class="perm-tree-cb perm-cell-add w-3.5 h-3.5 rounded text-[#006644] accent-[#00A4B7] cursor-pointer" data-level="menu" data-menu-id="${menu.id}" data-action="add" ${menuAddChecked ? 'checked' : ''} title="Toggle ADD for all ${this.escape(menu.label)} tabs" />
          </td>
          <td class="py-2 px-2 text-center">
            <input type="checkbox" class="perm-tree-cb perm-cell-edit w-3.5 h-3.5 rounded text-[#0284C7] accent-[#00A4B7] cursor-pointer" data-level="menu" data-menu-id="${menu.id}" data-action="edit" ${menuEditChecked ? 'checked' : ''} title="Toggle EDIT for all ${this.escape(menu.label)} tabs" />
          </td>
          <td class="py-2 px-2 text-center">
            <input type="checkbox" class="perm-tree-cb perm-cell-delete w-3.5 h-3.5 rounded text-[#DE350B] accent-[#DE350B] cursor-pointer" data-level="menu" data-menu-id="${menu.id}" data-action="delete" ${menuDelChecked ? 'checked' : ''} title="Toggle DELETE for all ${this.escape(menu.label)} tabs" />
          </td>
          <td class="py-2 px-2 text-center">
            <input type="checkbox" class="perm-tree-cb perm-cell-read w-3.5 h-3.5 rounded text-[#42526E] accent-[#00A4B7] cursor-pointer" data-level="menu" data-menu-id="${menu.id}" data-action="read" ${menuReadChecked ? 'checked' : ''} title="Toggle READ for all ${this.escape(menu.label)} tabs" />
          </td>
        </tr>
      `;

      // 2. Level 2 & 3: Submenus & Tabs
      menu.submenus.forEach((sub, sIdx) => {
        const isLastSub = (sIdx === menu.submenus.length - 1);
        const subTabsPerms = [];
        (sub.tabs || []).forEach(tab => {
          const tabKey = `${menu.id}:${sub.id}:${tab.id}`;
          subTabsPerms.push({ tabKey, ...getTabPerm(tabKey, menu.id, menu.label) });
        });

        const subReadChecked = subTabsPerms.length > 0 && subTabsPerms.every(p => p.read);
        const subAddChecked = subTabsPerms.length > 0 && subTabsPerms.every(p => p.add);
        const subEditChecked = subTabsPerms.length > 0 && subTabsPerms.every(p => p.edit);
        const subDelChecked = subTabsPerms.length > 0 && subTabsPerms.every(p => p.delete);

        tableRowsHtml += `
          <tr class="role-tree-row role-sub-row bg-white hover:bg-[#F8FAFC] border-b border-[#F1F5F9] transition-colors" data-level="submenu" data-menu-id="${menu.id}" data-sub-id="${sub.id}">
            <td class="py-0 px-3 text-xs text-[#172B4D] whitespace-nowrap">
              <div class="flex items-center gap-1.5 h-[34px]">
                <svg class="w-5 h-[34px] shrink-0" viewBox="0 0 20 34" fill="none">
                  <path d="${isLastSub ? 'M8 0 V17 H16 M13 14 L16 17 L13 20' : 'M8 0 V34 M8 17 H16 M13 14 L16 17 L13 20'}" stroke="#00A4B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <button type="button" class="btn-toggle-sub-tree w-4.5 h-4.5 rounded flex items-center justify-center text-[#172B4D] bg-white border border-[#CBD5E1] shadow-2xs shrink-0 hover:text-[#00A4B7] hover:border-[#00A4B7] transition-all cursor-pointer" data-menu-id="${menu.id}" data-sub-id="${sub.id}" title="Expand / Collapse Submenu">
                  <svg class="chevron-icon" style="display: block; width: 13px; height: 13px; min-width: 13px; min-height: 13px; stroke: #172B4D; stroke-width: 2.5px; fill: none; transition: transform 0.2s; transform: rotate(90deg);" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
                <span class="font-bold text-xs text-[#172B4D]">${this.escape(sub.title)}</span>
              </div>
            </td>
            <td class="py-2 px-2 text-center">
              <input type="checkbox" class="perm-tree-cb perm-cell-add w-3.5 h-3.5 rounded text-[#006644] accent-[#00A4B7] cursor-pointer" data-level="submenu" data-menu-id="${menu.id}" data-sub-id="${sub.id}" data-action="add" ${subAddChecked ? 'checked' : ''} title="Toggle ADD for ${this.escape(sub.title)}" />
            </td>
            <td class="py-2 px-2 text-center">
              <input type="checkbox" class="perm-tree-cb perm-cell-edit w-3.5 h-3.5 rounded text-[#0284C7] accent-[#00A4B7] cursor-pointer" data-level="submenu" data-menu-id="${menu.id}" data-sub-id="${sub.id}" data-action="edit" ${subEditChecked ? 'checked' : ''} title="Toggle EDIT for ${this.escape(sub.title)}" />
            </td>
            <td class="py-2 px-2 text-center">
              <input type="checkbox" class="perm-tree-cb perm-cell-delete w-3.5 h-3.5 rounded text-[#DE350B] accent-[#DE350B] cursor-pointer" data-level="submenu" data-menu-id="${menu.id}" data-sub-id="${sub.id}" data-action="delete" ${subDelChecked ? 'checked' : ''} title="Toggle DELETE for ${this.escape(sub.title)}" />
            </td>
            <td class="py-2 px-2 text-center">
              <input type="checkbox" class="perm-tree-cb perm-cell-read w-3.5 h-3.5 rounded text-[#42526E] accent-[#00A4B7] cursor-pointer" data-level="submenu" data-menu-id="${menu.id}" data-sub-id="${sub.id}" data-action="read" ${subReadChecked ? 'checked' : ''} title="Toggle READ for ${this.escape(sub.title)}" />
            </td>
          </tr>
        `;

        // 3. Level 3: Tab Rows
        (sub.tabs || []).forEach((tab, tIdx) => {
          const isLastTab = (tIdx === sub.tabs.length - 1);
          const tabKey = `${menu.id}:${sub.id}:${tab.id}`;
          const tabPerm = getTabPerm(tabKey, menu.id, menu.label);

          tableRowsHtml += `
            <tr class="role-tree-row role-tab-row bg-white hover:bg-[#F0F9FF]/40 border-b border-[#F8FAFC] transition-colors" data-level="tab" data-menu-id="${menu.id}" data-sub-id="${sub.id}" data-tab-id="${tab.id}" data-tab-key="${tabKey}">
              <td class="py-0 px-3 text-xs text-[#334155] whitespace-nowrap">
                <div class="flex items-center gap-1.5 h-[32px]">
                  ${!isLastSub ? `
                    <svg class="w-5 h-[32px] shrink-0" viewBox="0 0 20 32" fill="none">
                      <line x1="8" y1="0" x2="8" y2="32" stroke="#00A4B7" stroke-width="1.5"/>
                    </svg>
                  ` : `
                    <span class="w-5 shrink-0"></span>
                  `}
                  <svg class="w-5 h-[32px] shrink-0" viewBox="0 0 20 32" fill="none">
                    <path d="${isLastTab ? 'M8 0 V16 H16 M13 13 L16 16 L13 19' : 'M8 0 V32 M8 16 H16 M13 13 L16 16 L13 19'}" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="font-medium text-xs text-[#172B4D] pl-0.5">${this.escape(tab.label)}</span>
                </div>
              </td>
              <td class="py-1 px-2 text-center">
                <input type="checkbox" class="perm-tree-cb perm-cell perm-cell-add w-3.5 h-3.5 rounded text-[#006644] accent-[#00A4B7] cursor-pointer" data-level="tab" data-menu-id="${menu.id}" data-sub-id="${sub.id}" data-tab-id="${tab.id}" data-action="add" ${tabPerm.add ? 'checked' : ''} title="Toggle ADD for ${this.escape(tab.label)}" />
              </td>
              <td class="py-1 px-2 text-center">
                <input type="checkbox" class="perm-tree-cb perm-cell perm-cell-edit w-3.5 h-3.5 rounded text-[#0284C7] accent-[#00A4B7] cursor-pointer" data-level="tab" data-menu-id="${menu.id}" data-sub-id="${sub.id}" data-tab-id="${tab.id}" data-action="edit" ${tabPerm.edit ? 'checked' : ''} title="Toggle EDIT for ${this.escape(tab.label)}" />
              </td>
              <td class="py-1 px-2 text-center">
                <input type="checkbox" class="perm-tree-cb perm-cell perm-cell-delete w-3.5 h-3.5 rounded text-[#DE350B] accent-[#DE350B] cursor-pointer" data-level="tab" data-menu-id="${menu.id}" data-sub-id="${sub.id}" data-tab-id="${tab.id}" data-action="delete" ${tabPerm.delete ? 'checked' : ''} title="Toggle DELETE for ${this.escape(tab.label)}" />
              </td>
              <td class="py-1 px-2 text-center">
                <input type="checkbox" class="perm-tree-cb perm-cell perm-cell-read w-3.5 h-3.5 rounded text-[#42526E] accent-[#00A4B7] cursor-pointer" data-level="tab" data-menu-id="${menu.id}" data-sub-id="${sub.id}" data-tab-id="${tab.id}" data-action="read" ${tabPerm.read ? 'checked' : ''} title="Toggle READ for ${this.escape(tab.label)}" />
              </td>
            </tr>
          `;
        });
      });
    });

    Modal.open({
      title,
      size: 'xl',
      content: `
        <form id="form-role-modal" class="space-y-3.5 text-xs">
          <!-- Role Metadata Grid (Single Unified 4-Column Layout) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Role Code <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="role-modal-code" value="${this.escape(defaultCode)}" ${isEdit ? 'disabled' : 'required'} class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs ${isEdit ? 'bg-[#F4F5F7] cursor-not-allowed' : ''}" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Role Name <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="role-modal-name" value="${this.escape(role ? role.name : '')}" required placeholder="e.g. Production Line Supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Associated Department</label>
              <select id="role-modal-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="All Departments" ${!role || role.department === 'All Departments' ? 'selected' : ''}>All Departments (Cross-functional)</option>
                ${this.departments.map(d => `<option value="${this.escape(d.name)}" ${role && role.department === d.name ? 'selected' : ''}>${this.escape(d.name)}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Access Level / Scope <span class="text-[#DE350B]">*</span></label>
              <select id="role-modal-level" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Full Access" ${role && role.level === 'Full Access' ? 'selected' : ''}>Full Access (Super Admin)</option>
                <option value="Departmental" ${!role || role.level === 'Departmental' ? 'selected' : ''}>Departmental (Operations / Sales)</option>
                <option value="Verification" ${role && role.level === 'Verification' ? 'selected' : ''}>Verification (Supervisor / QC)</option>
                <option value="Read / Log" ${role && role.level === 'Read / Log' ? 'selected' : ''}>Read / Log (Floor Operator)</option>
                <option value="Read Only" ${role && role.level === 'Read Only' ? 'selected' : ''}>Read Only (Auditor / Viewer)</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
              <div class="flex items-center h-[32px]">
                <label class="inline-flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" id="role-modal-status-cb" class="w-4 h-4 rounded text-[#00A4B7] accent-[#00A4B7] cursor-pointer" ${!role || role.status === 'Active' ? 'checked' : ''} />
                  <span id="role-modal-status-label" class="text-xs font-semibold text-[#172B4D]">${!role || role.status === 'Active' ? 'Active' : 'Inactive'}</span>
                </label>
              </div>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Module Permissions &amp; Authority</label>
              <input type="text" id="role-modal-permissions" value="${this.escape(role ? role.permissions : 'All Modules (Full Access)')}" placeholder="e.g. Sales, Purchase, Coldstore, Production" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div class="sm:col-span-2 lg:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Role Description &amp; Scope Responsibilities</label>
              <input type="text" id="role-modal-desc" value="${this.escape(role ? role.description : '')}" placeholder="Define operational responsibility boundaries..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
          </div>

          <!-- Menu, Sub Menu & Tabs Access Permissions Section -->
          <div class="pt-1">
            <!-- Header bar with Title -->
            <div class="pb-2.5">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Menu, Sub Menu &amp; Tabs Access Permissions</h4>
            </div>

            <!-- Matrix Table Container -->
            <div class="max-h-[380px] overflow-y-auto overflow-x-auto rounded-xl border border-[#DFE1E6] bg-white shadow-2xs">
              <table class="w-full text-xs text-left border-collapse" id="table-roles-permissions-matrix">
                <thead class="sticky top-0 bg-[#F8FAFC] z-10 border-b border-[#DFE1E6] shadow-2xs">
                  <tr>
                    <th class="py-2.5 px-3 text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider min-w-[280px] bg-[#F8FAFC] sticky top-0 z-10">
                      <div class="flex items-center gap-2">
                        <button type="button" id="btn-tree-master-toggle" class="w-5 h-5 rounded flex items-center justify-center bg-white border border-[#CBD5E1] text-[#172B4D] hover:border-[#00A4B7] hover:text-[#00A4B7] shadow-2xs shrink-0 cursor-pointer transition-all" title="Collapse / Expand All Menus &amp; Tabs">
                          <svg class="chevron-icon" style="display: block; width: 14px; height: 14px; min-width: 14px; min-height: 14px; stroke: #172B4D; stroke-width: 2.5px; fill: none; transition: transform 0.2s; transform: rotate(90deg);" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                          </svg>
                        </button>
                        <span>Menu</span>
                      </div>
                    </th>
                    <th class="py-2.5 px-2 text-center w-24 min-w-[75px] bg-[#F8FAFC] sticky top-0 z-10">
                      <label class="inline-flex items-center gap-1.5 font-bold text-xs text-[#006644] cursor-pointer select-none" title="Toggle ADD for all rows">
                        <input type="checkbox" id="hdr-perm-add" class="w-3.5 h-3.5 rounded text-[#006644] accent-[#00A4B7] cursor-pointer" />
                        <span>ADD</span>
                      </label>
                    </th>
                    <th class="py-2.5 px-2 text-center w-24 min-w-[75px] bg-[#F8FAFC] sticky top-0 z-10">
                      <label class="inline-flex items-center gap-1.5 font-bold text-xs text-[#0284C7] cursor-pointer select-none" title="Toggle EDIT for all rows">
                        <input type="checkbox" id="hdr-perm-edit" class="w-3.5 h-3.5 rounded text-[#0284C7] accent-[#00A4B7] cursor-pointer" />
                        <span>EDIT</span>
                      </label>
                    </th>
                    <th class="py-2.5 px-2 text-center w-24 min-w-[75px] bg-[#F8FAFC] sticky top-0 z-10">
                      <label class="inline-flex items-center gap-1.5 font-bold text-xs text-[#DE350B] cursor-pointer select-none" title="Toggle DELETE for all rows">
                        <input type="checkbox" id="hdr-perm-delete" class="w-3.5 h-3.5 rounded text-[#DE350B] accent-[#DE350B] cursor-pointer" />
                        <span>DELETE</span>
                      </label>
                    </th>
                    <th class="py-2.5 px-2 text-center w-24 min-w-[75px] bg-[#F8FAFC] sticky top-0 z-10">
                      <label class="inline-flex items-center gap-1.5 font-bold text-xs text-[#42526E] cursor-pointer select-none" title="Toggle READ for all rows">
                        <input type="checkbox" id="hdr-perm-read" class="w-3.5 h-3.5 rounded text-[#42526E] accent-[#00A4B7] cursor-pointer" />
                        <span>READ</span>
                      </label>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#F1F5F9] bg-white" id="role-matrix-tbody">
                  ${tableRowsHtml}
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
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: (m) => m.close()
        },
        {
          label: isEdit ? 'Save Changes' : 'Create Role',
          type: 'primary',
          class: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: (m) => {
            const code = document.getElementById('role-modal-code')?.value.trim();
            const name = document.getElementById('role-modal-name')?.value.trim();
            const department = document.getElementById('role-modal-dept')?.value || 'All Departments';
            const level = document.getElementById('role-modal-level')?.value;
            const status = document.getElementById('role-modal-status-cb')?.checked ? 'Active' : 'Inactive';
            let permissions = document.getElementById('role-modal-permissions')?.value.trim();
            const description = document.getElementById('role-modal-desc')?.value.trim();

            if (!name || !code) {
              Toast.show('Please fill in Role Code and Role Name', 'warning');
              return;
            }

            // Collect all permissions matrix entries from tab rows
            const permissionsMatrix = {};
            const checkedTabs = [];
            const checkedSubmenus = new Set();
            const checkedMenus = new Set();

            document.querySelectorAll('.role-tab-row').forEach(row => {
              const menuId = row.dataset.menuId;
              const subId = row.dataset.subId;
              const tabId = row.dataset.tabId;
              const tabKey = row.dataset.tabKey || `${menuId}:${subId}:${tabId}`;

              const read = row.querySelector('.perm-cell-read')?.checked || false;
              const add = row.querySelector('.perm-cell-add')?.checked || false;
              const edit = row.querySelector('.perm-cell-edit')?.checked || false;
              const del = row.querySelector('.perm-cell-delete')?.checked || false;

              permissionsMatrix[tabKey] = { read, add, edit, delete: del };

              if (read || add || edit || del) {
                checkedTabs.push(tabKey);
                checkedSubmenus.add(`${menuId}:${subId}`);
                checkedMenus.add(menuId);
              }
            });

            // Calculate auto summary if needed
            if (!permissions || permissions === 'All Modules (Full Access)' || permissions === 'General Operations') {
              if (checkedMenus.size === navTree.length && navTree.length > 0) {
                permissions = 'All Modules (Full Access)';
              } else if (checkedMenus.size === 0) {
                permissions = 'No Modules Assigned';
              } else {
                const activeMenuLabels = [];
                navTree.forEach(m => {
                  if (checkedMenus.has(m.id)) activeMenuLabels.push(m.label);
                });
                permissions = activeMenuLabels.slice(0, 4).join(', ') + 
                  (activeMenuLabels.length > 4 ? ` (+${activeMenuLabels.length - 4} more)` : '') + 
                  ` (${checkedMenus.size} Menus)`;
              }
            }

            const permissionsHierarchy = {
              menus: Array.from(checkedMenus),
              submenus: Array.from(checkedSubmenus),
              tabs: checkedTabs
            };

            if (isEdit) {
              role.name = name;
              role.department = department;
              role.level = level;
              role.status = status;
              role.permissions = permissions;
              role.description = description;
              role.permissionsMatrix = permissionsMatrix;
              role.permissionsHierarchy = permissionsHierarchy;
              Toast.show(`Role ${name} updated successfully`, 'success');
            } else {
              this.roles.unshift({
                id: `role-${Date.now()}`,
                code,
                name,
                department,
                level,
                description,
                usersCount: 0,
                permissions,
                permissionsMatrix,
                permissionsHierarchy,
                status
              });
              Toast.show(`Role ${name} created successfully`, 'success');
            }

            m.close();
            if (onSaved) onSaved();
            const container = document.getElementById(this.lastContainerId || 'main-content');
            if (container) this.renderUserRolesTab(container, this.cachedTabsBarHtml);
          }
        }
      ]
    });

    // Wire up tree table checkbox events & interactions
    setTimeout(() => {
      const modalRoot = document.getElementById('erp-modal-root');
      if (!modalRoot) return;

      const roleStatusCb = document.getElementById('role-modal-status-cb');
      const roleStatusLbl = document.getElementById('role-modal-status-label');
      roleStatusCb?.addEventListener('change', () => {
        if (roleStatusLbl) roleStatusLbl.textContent = roleStatusCb.checked ? 'Active' : 'Inactive';
      });

      const actions = ['add', 'edit', 'delete', 'read'];

      const updateAllTreeCheckboxStates = () => {
        const tabRows = Array.from(modalRoot.querySelectorAll('.role-tab-row'));
        const subRows = Array.from(modalRoot.querySelectorAll('.role-sub-row'));
        const menuRows = Array.from(modalRoot.querySelectorAll('.role-menu-row'));

        // 1. Update Submenu Rows from their child Tab rows
        subRows.forEach(subRow => {
          const mId = subRow.dataset.menuId;
          const sId = subRow.dataset.subId;
          const childTabs = tabRows.filter(tr => tr.dataset.menuId === mId && tr.dataset.subId === sId);

          actions.forEach(act => {
            const subCb = subRow.querySelector(`.perm-cell-${act}`);
            if (!subCb) return;
            const checkedCount = childTabs.filter(tr => tr.querySelector(`.perm-cell-${act}`)?.checked).length;
            if (childTabs.length > 0 && checkedCount === childTabs.length) {
              subCb.checked = true;
              subCb.indeterminate = false;
            } else if (checkedCount > 0) {
              subCb.checked = false;
              subCb.indeterminate = true;
            } else {
              subCb.checked = false;
              subCb.indeterminate = false;
            }
          });
        });

        // 2. Update Menu Rows from their child Tab rows
        menuRows.forEach(menuRow => {
          const mId = menuRow.dataset.menuId;
          const childTabs = tabRows.filter(tr => tr.dataset.menuId === mId);

          actions.forEach(act => {
            const menuCb = menuRow.querySelector(`.perm-cell-${act}`);
            if (!menuCb) return;
            const checkedCount = childTabs.filter(tr => tr.querySelector(`.perm-cell-${act}`)?.checked).length;
            if (childTabs.length > 0 && checkedCount === childTabs.length) {
              menuCb.checked = true;
              menuCb.indeterminate = false;
            } else if (checkedCount > 0) {
              menuCb.checked = false;
              menuCb.indeterminate = true;
            } else {
              menuCb.checked = false;
              menuCb.indeterminate = false;
            }
          });
        });

        // 3. Header checkboxes
        actions.forEach(act => {
          const hdrCb = document.getElementById(`hdr-perm-${act}`);
          if (hdrCb) {
            const checkedCount = tabRows.filter(tr => tr.querySelector(`.perm-cell-${act}`)?.checked).length;
            if (tabRows.length > 0 && checkedCount === tabRows.length) {
              hdrCb.checked = true;
              hdrCb.indeterminate = false;
            } else if (checkedCount > 0) {
              hdrCb.checked = false;
              hdrCb.indeterminate = true;
            } else {
              hdrCb.checked = false;
              hdrCb.indeterminate = false;
            }
          }
        });
      };

      updateAllTreeCheckboxStates();

      // Tree Checkbox Change Listener (Menu, Submenu, Tab cascading)
      modalRoot.addEventListener('change', (e) => {
        const cb = e.target.closest('.perm-tree-cb');
        if (!cb) return;

        const level = cb.dataset.level;
        const action = cb.dataset.action;
        const isChecked = cb.checked;
        const mId = cb.dataset.menuId;
        const sId = cb.dataset.subId;

        if (level === 'menu') {
          // Cascade down to all child tabs under this menu
          const targetTabs = modalRoot.querySelectorAll(`.role-tab-row[data-menu-id="${mId}"]`);
          targetTabs.forEach(tr => {
            const c = tr.querySelector(`.perm-cell-${action}`);
            if (c) c.checked = isChecked;

            if (isChecked && action !== 'read') {
              const r = tr.querySelector('.perm-cell-read');
              if (r) r.checked = true;
            } else if (!isChecked && action === 'read') {
              ['add', 'edit', 'delete'].forEach(a => {
                const ac = tr.querySelector(`.perm-cell-${a}`);
                if (ac) ac.checked = false;
              });
            }
          });
        } else if (level === 'submenu') {
          // Cascade down to all child tabs under this submenu
          const targetTabs = modalRoot.querySelectorAll(`.role-tab-row[data-menu-id="${mId}"][data-sub-id="${sId}"]`);
          targetTabs.forEach(tr => {
            const c = tr.querySelector(`.perm-cell-${action}`);
            if (c) c.checked = isChecked;

            if (isChecked && action !== 'read') {
              const r = tr.querySelector('.perm-cell-read');
              if (r) r.checked = true;
            } else if (!isChecked && action === 'read') {
              ['add', 'edit', 'delete'].forEach(a => {
                const ac = tr.querySelector(`.perm-cell-${a}`);
                if (ac) ac.checked = false;
              });
            }
          });
        } else if (level === 'tab') {
          const tr = cb.closest('.role-tab-row');
          if (tr) {
            if (isChecked && action !== 'read') {
              const r = tr.querySelector('.perm-cell-read');
              if (r) r.checked = true;
            } else if (!isChecked && action === 'read') {
              ['add', 'edit', 'delete'].forEach(a => {
                const ac = tr.querySelector(`.perm-cell-${a}`);
                if (ac) ac.checked = false;
              });
            }
          }
        }

        updateAllTreeCheckboxStates();
      });

      // Header Bulk Checkboxes (Add, Edit, Delete, Read Only)
      actions.forEach(action => {
        document.getElementById(`hdr-perm-${action}`)?.addEventListener('change', (e) => {
          const isChecked = e.target.checked;
          const tabRows = modalRoot.querySelectorAll('.role-tab-row');
          tabRows.forEach(tr => {
            const c = tr.querySelector(`.perm-cell-${action}`);
            if (c) c.checked = isChecked;

            if (isChecked && action !== 'read') {
              const r = tr.querySelector('.perm-cell-read');
              if (r) r.checked = true;
            } else if (!isChecked && action === 'read') {
              ['add', 'edit', 'delete'].forEach(a => {
                const ac = tr.querySelector(`.perm-cell-${a}`);
                if (ac) ac.checked = false;
              });
            }
          });
          updateAllTreeCheckboxStates();
        });
      });

      // Expand / Collapse Tree Handlers
      modalRoot.addEventListener('click', (e) => {
        // Master Toggle (All Menus, Submenus & Tabs)
        const masterToggleBtn = e.target.closest('#btn-tree-master-toggle');
        if (masterToggleBtn) {
          const masterSvg = masterToggleBtn.querySelector('.chevron-icon');
          const isCurrentlyCollapsed = masterSvg?.style.transform === 'rotate(0deg)';

          if (isCurrentlyCollapsed) {
            // Expand All
            if (masterSvg) masterSvg.style.transform = 'rotate(90deg)';
            masterToggleBtn.title = 'Collapse All Menus & Tabs';
            modalRoot.querySelectorAll('.role-tree-row').forEach(r => r.classList.remove('hidden'));
            modalRoot.querySelectorAll('.chevron-icon').forEach(ci => {
              ci.style.transform = 'rotate(90deg)';
            });
          } else {
            // Collapse All
            if (masterSvg) masterSvg.style.transform = 'rotate(0deg)';
            masterToggleBtn.title = 'Expand All Menus & Tabs';
            modalRoot.querySelectorAll('.role-tree-row:not(.role-menu-row)').forEach(r => r.classList.add('hidden'));
            modalRoot.querySelectorAll('.chevron-icon').forEach(ci => {
              ci.style.transform = 'rotate(0deg)';
            });
          }
          return;
        }

        // Toggle Menu
        const toggleMenuBtn = e.target.closest('.btn-toggle-menu-tree');
        if (toggleMenuBtn) {
          const mId = toggleMenuBtn.dataset.menuId;
          const chevron = toggleMenuBtn.querySelector('.chevron-icon');
          const childRows = modalRoot.querySelectorAll(`.role-tree-row[data-menu-id="${mId}"]:not(.role-menu-row)`);
          const isCurrentlyCollapsed = chevron?.style.transform === 'rotate(0deg)';

          if (isCurrentlyCollapsed) {
            if (chevron) chevron.style.transform = 'rotate(90deg)';
            childRows.forEach(r => r.classList.remove('hidden'));
            modalRoot.querySelectorAll(`.btn-toggle-sub-tree[data-menu-id="${mId}"] .chevron-icon`).forEach(ci => {
              ci.style.transform = 'rotate(90deg)';
            });
          } else {
            if (chevron) chevron.style.transform = 'rotate(0deg)';
            childRows.forEach(r => r.classList.add('hidden'));
            modalRoot.querySelectorAll(`.btn-toggle-sub-tree[data-menu-id="${mId}"] .chevron-icon`).forEach(ci => {
              ci.style.transform = 'rotate(0deg)';
            });
          }
          return;
        }

        // Toggle Submenu
        const toggleSubBtn = e.target.closest('.btn-toggle-sub-tree');
        if (toggleSubBtn) {
          const mId = toggleSubBtn.dataset.menuId;
          const sId = toggleSubBtn.dataset.subId;
          const chevron = toggleSubBtn.querySelector('.chevron-icon');
          const childTabRows = modalRoot.querySelectorAll(`.role-tab-row[data-menu-id="${mId}"][data-sub-id="${sId}"]`);
          const isCurrentlyCollapsed = chevron?.style.transform === 'rotate(0deg)';

          if (isCurrentlyCollapsed) {
            if (chevron) chevron.style.transform = 'rotate(90deg)';
            childTabRows.forEach(r => r.classList.remove('hidden'));
          } else {
            if (chevron) chevron.style.transform = 'rotate(0deg)';
            childTabRows.forEach(r => r.classList.add('hidden'));
          }
          return;
        }
      });

      // Access Level dropdown change
      document.getElementById('role-modal-level')?.addEventListener('change', (e) => {
        const val = e.target.value;
        const tabRows = modalRoot.querySelectorAll('.role-tab-row');
        const permInput = document.getElementById('role-modal-permissions');

        if (val === 'Full Access') {
          tabRows.forEach(tr => {
            actions.forEach(act => {
              const cb = tr.querySelector(`.perm-cell-${act}`);
              if (cb) cb.checked = true;
            });
          });
          if (permInput) permInput.value = 'All Modules (Full Access)';
        } else if (val === 'Read Only') {
          tabRows.forEach(tr => {
            ['add', 'edit', 'delete'].forEach(act => {
              const cb = tr.querySelector(`.perm-cell-${act}`);
              if (cb) cb.checked = false;
            });
            const r = tr.querySelector('.perm-cell-read');
            if (r) r.checked = true;
          });
        } else if (val === 'Verification' || val === 'Read / Log') {
          tabRows.forEach(tr => {
            const del = tr.querySelector('.perm-cell-delete');
            if (del) del.checked = false;
            ['add', 'edit', 'read'].forEach(act => {
              const cb = tr.querySelector(`.perm-cell-${act}`);
              if (cb) cb.checked = true;
            });
          });
        }
        updateAllTreeCheckboxStates();
      });
    }, 50);
  },

  openChangePasswordModal(user) {
    if (!user) return;
    const userInitials = (user.name || 'User')
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'US';

    Modal.open({
      title: `Change Password — ${user.name}`,
      size: 'md',
      content: `
        <form id="form-change-password-modal" class="space-y-4 text-xs" onsubmit="return false;">
          <!-- User Profile Summary Hero Card -->
          <div class="p-3 bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] rounded-xl border border-[#BAE6FD] flex items-center gap-3 shadow-2xs">
            <div class="relative shrink-0">
              ${user.photo ? `
                <img src="${user.photo}" alt="${this.escape(user.name)}" class="w-10 h-10 rounded-full object-cover border border-[#BAE6FD]" />
              ` : `
                <div class="w-10 h-10 rounded-full bg-[#00A4B7] text-white font-extrabold flex items-center justify-center text-xs shadow-xs">
                  ${userInitials}
                </div>
              `}
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2">
                <span class="font-extrabold text-[#172B4D] text-xs truncate">${this.escape(user.name)}</span>
                <span class="font-mono text-[10px] font-bold text-[#00A4B7] bg-white px-1.5 py-0.5 rounded border border-[#BAE6FD]">${this.escape(user.empId)}</span>
              </div>
              <div class="text-[11px] text-[#5E6C84] mt-0.5 flex items-center gap-2 truncate">
                <span>${this.escape(user.email)}</span>
                <span>•</span>
                <span class="font-semibold text-[#172B4D]">${this.escape(user.role || 'User')}</span>
              </div>
            </div>
          </div>

          <!-- Password Inputs -->
          <div class="space-y-3 pt-1">
            <!-- New Password -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                New Password <span class="text-[#DE350B]">*</span>
              </label>
              <div class="relative">
                <input 
                  type="password" 
                  id="usr-pwd-new" 
                  required 
                  autocomplete="new-password"
                  placeholder="Enter new password (min. 8 characters)" 
                  class="w-full text-xs px-2.5 py-2 pr-9 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" 
                />
                <button 
                  type="button" 
                  class="btn-toggle-pwd absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#5E6C84] hover:text-[#00A4B7] cursor-pointer" 
                  data-target="usr-pwd-new"
                  title="Show / Hide Password"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </button>
              </div>
              <p class="text-[10.5px] text-[#5E6C84] mt-1">Must be at least 8 characters long with letters and numbers.</p>
            </div>

            <!-- Confirm Password -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                Confirm Password <span class="text-[#DE350B]">*</span>
              </label>
              <div class="relative">
                <input 
                  type="password" 
                  id="usr-pwd-confirm" 
                  required 
                  autocomplete="new-password"
                  placeholder="Re-enter new password" 
                  class="w-full text-xs px-2.5 py-2 pr-9 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" 
                />
                <button 
                  type="button" 
                  class="btn-toggle-pwd absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#5E6C84] hover:text-[#00A4B7] cursor-pointer" 
                  data-target="usr-pwd-confirm"
                  title="Show / Hide Password"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </button>
              </div>
              <div id="pwd-match-error" class="text-[11px] text-[#DE350B] mt-1 font-semibold hidden flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Passwords do not match. Please verify and re-type.</span>
              </div>
            </div>

            <!-- Password Policy Option -->
            <div class="pt-1.5 flex items-center gap-2">
              <input type="checkbox" id="usr-pwd-require-change" class="w-3.5 h-3.5 rounded text-[#00A4B7] accent-[#00A4B7] cursor-pointer" checked />
              <label for="usr-pwd-require-change" class="text-xs text-[#5E6C84] cursor-pointer font-medium select-none">
                Require user to change password on next sign-in
              </label>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: (m) => m.close()
        },
        {
          label: 'Update Password',
          type: 'primary',
          class: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: (m) => {
            const newPwd = document.getElementById('usr-pwd-new')?.value || '';
            const confirmPwd = document.getElementById('usr-pwd-confirm')?.value || '';
            const errEl = document.getElementById('pwd-match-error');

            if (!newPwd) {
              Toast.show('Please enter a new password', 'warning');
              document.getElementById('usr-pwd-new')?.focus();
              return;
            }

            if (newPwd.length < 8) {
              Toast.show('Password must be at least 8 characters long', 'warning');
              document.getElementById('usr-pwd-new')?.focus();
              return;
            }

            if (!confirmPwd) {
              Toast.show('Please confirm the new password', 'warning');
              document.getElementById('usr-pwd-confirm')?.focus();
              return;
            }

            if (newPwd !== confirmPwd) {
              if (errEl) errEl.classList.remove('hidden');
              Toast.show('Passwords do not match', 'warning');
              document.getElementById('usr-pwd-confirm')?.focus();
              return;
            }

            user.lastPasswordReset = new Date().toISOString();
            user.requirePasswordChange = document.getElementById('usr-pwd-require-change')?.checked || false;
            m.close();
            Toast.show(`Password updated successfully for ${user.name}`, 'success');
          }
        }
      ]
    });

    // Wire up show/hide password buttons and live matching
    setTimeout(() => {
      const modal = document.getElementById('erp-modal-root');
      if (!modal) return;

      modal.querySelectorAll('.btn-toggle-pwd').forEach(btn => {
        btn.addEventListener('click', () => {
          const targetId = btn.dataset.target;
          const input = document.getElementById(targetId);
          if (!input) return;
          const isPwd = input.type === 'password';
          input.type = isPwd ? 'text' : 'password';
          btn.innerHTML = isPwd 
            ? '<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>'
            : '<svg class="w-4 h-4 text-[#5E6C84]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>';
        });
      });

      const confirmInput = document.getElementById('usr-pwd-confirm');
      const errEl = document.getElementById('pwd-match-error');
      confirmInput?.addEventListener('input', () => {
        const newPwd = document.getElementById('usr-pwd-new')?.value || '';
        if (confirmInput.value && newPwd && confirmInput.value !== newPwd) {
          errEl?.classList.remove('hidden');
        } else {
          errEl?.classList.add('hidden');
        }
      });
    }, 50);
  },

  openUserModal(user = null, onSaved) {
    const isEdit = !!user;
    const title = isEdit ? 'Edit User Profile' : 'Add New User';
    let currentPhoto = user?.photo || '';
    const userInitials = (user?.name || 'User')
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'US';

    Modal.open({
      title,
      size: 'xl',
      content: `
        <form id="form-user-modal" class="space-y-4 text-xs">
          <!-- Profile Photo Upload Card -->
          <div class="p-3.5 bg-[#F8FAFC] rounded-xl border border-[#DFE1E6] flex flex-col sm:flex-row items-center gap-4">
            <!-- Avatar Display / Preview -->
            <div class="relative shrink-0">
              <div id="usr-avatar-preview" class="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00A4B7] bg-white flex items-center justify-center shadow-xs">
                ${currentPhoto ? `
                  <img src="${currentPhoto}" alt="User Photo" class="w-full h-full object-cover" />
                ` : `
                  <div class="w-full h-full bg-[#E0F2FE] text-[#00A4B7] font-extrabold flex items-center justify-center text-lg">
                    ${userInitials}
                  </div>
                `}
              </div>
              <label for="usr-modal-photo-input" class="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#00A4B7] text-white flex items-center justify-center shadow-xs cursor-pointer hover:bg-[#008F9F] transition-all" title="Upload Photo">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </label>
            </div>

            <!-- Upload Info & Controls -->
            <div class="flex-1 min-w-0 text-center sm:text-left">
              <div class="flex items-center gap-2 justify-center sm:justify-start">
                <label class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider">Profile Photo</label>
                <span class="text-[10px] text-[#5E6C84] font-medium">(PNG, JPG, WebP up to 5MB)</span>
              </div>
              
              <div class="flex items-center gap-2 mt-2 justify-center sm:justify-start flex-wrap">
                <input type="file" id="usr-modal-photo-input" accept="image/*" class="hidden" />
                <button type="button" id="btn-trigger-photo-upload" class="px-3 py-1 rounded-full text-xs font-bold bg-white hover:bg-[#F0F9FF] text-[#00A4B7] border border-[#00A4B7] shadow-2xs cursor-pointer transition-colors inline-flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                  <span>Upload Photo</span>
                </button>
                <button type="button" id="btn-remove-photo" class="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-[#FFEBE6] text-[#DE350B] border border-[#DFE1E6] hover:border-[#FFBDAD] cursor-pointer transition-colors ${currentPhoto ? '' : 'hidden'}">
                  Remove
                </button>
                <span id="usr-photo-filename" class="text-[11px] text-[#5E6C84] truncate max-w-[180px]"></span>
              </div>
            </div>
          </div>

          <!-- User Details Form Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Full Name <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="usr-modal-name" value="${this.escape(user ? user.name : '')}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. Anand Murugan">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Employee ID <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="usr-modal-empid" value="${this.escape(user ? user.empId : `EMP-${Math.floor(100 + Math.random() * 900)}`)}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Email Address <span class="text-[#DE350B]">*</span></label>
              <input type="email" id="usr-modal-email" value="${this.escape(user ? user.email : '')}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="name@devifisheries.com">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Phone Number</label>
              <input type="text" id="usr-modal-phone" value="${this.escape(user ? user.phone : '+91 98480 11223')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Department <span class="text-[#DE350B]">*</span></label>
              <select id="usr-modal-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                ${this.departments.map(d => `<option value="${this.escape(d.name)}" ${user && user.department === d.name ? 'selected' : ''}>${this.escape(d.name)}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Access Role <span class="text-[#DE350B]">*</span></label>
              <select id="usr-modal-role" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                ${this.roles.map(r => `
                  <option value="${this.escape(r.name)}" ${user && (user.role === r.name || user.roleCode === r.code) ? 'selected' : ''}>
                    ${this.escape(r.name)} (${this.escape(r.code)} — ${this.escape(r.level)})
                  </option>
                `).join('')}
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
              <div class="flex items-center h-[32px]">
                <label class="inline-flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" id="usr-modal-status-cb" class="w-4 h-4 rounded text-[#00A4B7] accent-[#00A4B7] cursor-pointer" ${(!user || user.status === 'Active') ? 'checked' : ''} />
                  <span id="usr-modal-status-label" class="text-xs font-semibold text-[#172B4D]">${(!user || user.status === 'Active') ? 'Active' : 'Inactive'}</span>
                </label>
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: (m) => m.close()
        },
        {
          label: isEdit ? 'Save Changes' : 'Create User',
          type: 'primary',
          class: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: (m) => {
            const name = document.getElementById('usr-modal-name')?.value.trim();
            const empId = document.getElementById('usr-modal-empid')?.value.trim();
            const email = document.getElementById('usr-modal-email')?.value.trim();
            const phone = document.getElementById('usr-modal-phone')?.value.trim();
            const department = document.getElementById('usr-modal-dept')?.value;
            const role = document.getElementById('usr-modal-role')?.value;
            const status = document.getElementById('usr-modal-status-cb')?.checked ? 'Active' : 'Inactive';

            if (!name || !email || !empId) {
              Toast.show('Please fill in all mandatory fields', 'warning');
              return;
            }

            if (isEdit) {
              user.name = name;
              user.empId = empId;
              user.email = email;
              user.phone = phone;
              user.department = department;
              user.role = role;
              user.status = status;
              user.photo = currentPhoto;
              const matchedRole = this.roles.find(r => r.name === role);
              user.roleCode = matchedRole ? matchedRole.code : '';
              Toast.show(`User ${name} updated successfully`, 'success');
            } else {
              this.users.unshift({
                id: `usr-${Date.now()}`,
                empId,
                name,
                email,
                phone,
                department,
                role,
                roleCode: (this.roles.find(r => r.name === role)?.code || ''),
                photo: currentPhoto,
                status,
                lastActive: 'Just now'
              });
              Toast.show(`User ${name} added successfully`, 'success');
            }

            m.close();
            if (onSaved) onSaved();
            const container = document.getElementById(this.lastContainerId || 'main-content');
            if (container) this.renderUserRolesTab(container, this.cachedTabsBarHtml);
          }
        }
      ]
    });

    // Wire up Photo Upload and Status events
    setTimeout(() => {
      const usrStatusCb = document.getElementById('usr-modal-status-cb');
      const usrStatusLbl = document.getElementById('usr-modal-status-label');
      usrStatusCb?.addEventListener('change', () => {
        if (usrStatusLbl) usrStatusLbl.textContent = usrStatusCb.checked ? 'Active' : 'Inactive';
      });
      const fileInput = document.getElementById('usr-modal-photo-input');
      const triggerBtn = document.getElementById('btn-trigger-photo-upload');
      const removeBtn = document.getElementById('btn-remove-photo');
      const previewDiv = document.getElementById('usr-avatar-preview');
      const filenameSpan = document.getElementById('usr-photo-filename');
      const nameInput = document.getElementById('usr-modal-name');

      triggerBtn?.addEventListener('click', () => {
        fileInput?.click();
      });

      fileInput?.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
          Toast.show('Please select a valid image file (PNG, JPG, WebP)', 'warning');
          return;
        }

        if (file.size > 5 * 1024 * 1024) {
          Toast.show('Photo size should be less than 5MB', 'warning');
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          currentPhoto = event.target.result;
          if (previewDiv) {
            previewDiv.innerHTML = `<img src="${currentPhoto}" alt="User Photo" class="w-full h-full object-cover" />`;
          }
          if (removeBtn) removeBtn.classList.remove('hidden');
          if (filenameSpan) filenameSpan.textContent = file.name;
          Toast.show('Photo uploaded successfully', 'success');
        };
        reader.readAsDataURL(file);
      });

      removeBtn?.addEventListener('click', () => {
        currentPhoto = '';
        if (fileInput) fileInput.value = '';
        const currentName = nameInput?.value.trim() || user?.name || 'User';
        const inits = currentName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'US';
        if (previewDiv) {
          previewDiv.innerHTML = `<div class="w-full h-full bg-[#E0F2FE] text-[#00A4B7] font-extrabold flex items-center justify-center text-lg">${inits}</div>`;
        }
        if (removeBtn) removeBtn.classList.add('hidden');
        if (filenameSpan) filenameSpan.textContent = '';
      });

      // Update initials live if name changes and no custom photo uploaded
      nameInput?.addEventListener('input', (e) => {
        if (!currentPhoto && previewDiv) {
          const val = e.target.value.trim() || 'User';
          const inits = val.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'US';
          previewDiv.innerHTML = `<div class="w-full h-full bg-[#E0F2FE] text-[#00A4B7] font-extrabold flex items-center justify-center text-lg">${inits}</div>`;
        }
      });
    }, 50);
  },
// -------------------------------------------------------------
  // TAB 3: General
  // -------------------------------------------------------------
  renderGeneralTab(container, tabsBarHtml) {
    this.cachedTabsBarHtml = this.renderAdminSettingsTabs('general');
    const effectiveTabsBar = this.cachedTabsBarHtml;

    // Load persisted settings from Enterprise AppSettings Engine
    const g = AppSettings.load();

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in pb-10">
        ${effectiveTabsBar}

        <!-- Page Header -->
        <div class="flex items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">General Settings</h1>
          <span class="text-xs font-semibold text-[#5E6C84] bg-[#F1F5F9] px-3 py-1 rounded-full border border-[#DFE1E6] flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Online &amp; Operational
          </span>
        </div>

        <!-- Settings Cards Grid (Interactive 9-Card Enterprise Layout) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

          <!-- CARD 1: Notification Settings -->
          <div class="general-settings-card bg-white rounded-xl border border-[#DFE1E6] hover:border-[#00A4B7] p-5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-0">
                <div class="flex items-center gap-2.5">
                  <div class="card-heading-icon w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 bg-[#00A4B7] text-white shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                  </div>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Notification Settings</h3>
                </div>
                <span id="notif-active-badge" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] transition-all">
                  ${[g.desktopNotif, g.qcAlerts, g.tempAlerts, g.harvestDigest].filter(Boolean).length} Active
                </span>
              </div>

              <div class="divide-y divide-[#F1F5F9] text-xs">
                <!-- Toggle 1: Desktop Push -->
                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">Desktop Push Notifications</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-desktop-notif" ${g.desktopNotif ? 'checked' : ''} class="sr-only peer setting-toggle" data-feature="Desktop Push">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>

                <!-- Toggle 2: QC Alerts -->
                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">Raw Material QC Rejection Alert</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-qc-alerts" ${g.qcAlerts ? 'checked' : ''} class="sr-only peer setting-toggle" data-feature="QC Alerts">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>

                <!-- Toggle 3: Coldstore Temp -->
                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">Coldstore Temp Excursion Alert</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-temp-alerts" ${g.tempAlerts ? 'checked' : ''} class="sr-only peer setting-toggle" data-feature="Coldstore Temp Alerts">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>

                <!-- Toggle 4: Harvest Digest -->
                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">Daily Harvest &amp; Procurement Summary</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-harvest-digest" ${g.harvestDigest ? 'checked' : ''} class="sr-only peer setting-toggle" data-feature="Harvest Digest">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-[#F1F5F9] space-y-2.5">
              <div>
                <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1.5">Notification Frequency</label>
                <select id="g-notif-freq" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="instant" ${g.notifFreq === 'instant' ? 'selected' : ''}>Real-Time (Instant Push Alerts)</option>
                  <option value="hourly" ${g.notifFreq === 'hourly' ? 'selected' : ''}>Hourly Batched Digest</option>
                  <option value="daily" ${g.notifFreq === 'daily' ? 'selected' : ''}>Daily Evening Summary</option>
                </select>
              </div>

              <button 
                type="button" 
                id="btn-test-notification" 
                class="w-full btn-secondary py-2 px-3 rounded-lg text-xs font-semibold border border-[#CBD5E1] hover:border-[#00A4B7] bg-white hover:bg-[#F0F9FF] text-[#172B4D] hover:text-[#00A4B7] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs active:scale-[0.99] select-none group/btn"
                title="Send interactive test notification alert"
              >
                <svg class="w-3.5 h-3.5 text-[#00A4B7] group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                <span id="btn-test-notification-label">Trigger Test Notification</span>
              </button>
            </div>
          </div>


          <!-- CARD 2: Email Settings -->
          <div class="general-settings-card bg-white rounded-xl border border-[#DFE1E6] hover:border-[#00A4B7] p-5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-0">
                <div class="flex items-center gap-2.5">
                  <div class="card-heading-icon w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 bg-[#00A4B7] text-white shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Email Settings</h3>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2.5 text-xs">
                <div class="col-span-2">
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SMTP Host Server</label>
                  <input type="text" id="g-smtp-host" value="${g.smtpHost}" class="w-full text-xs px-3 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="smtp.domain.com" />
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Port</label>
                  <input type="text" id="g-smtp-port" value="${g.smtpPort}" class="w-full text-xs px-3 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="587" />
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Security / SSL</label>
                  <select id="g-smtp-sec" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="TLS" ${g.smtpSecurity === 'TLS' ? 'selected' : ''}>STARTTLS / TLS</option>
                    <option value="SSL" ${g.smtpSecurity === 'SSL' ? 'selected' : ''}>SSL (Port 465)</option>
                    <option value="None" ${g.smtpSecurity === 'None' ? 'selected' : ''}>Unencrypted</option>
                  </select>
                </div>

                <div class="col-span-2">
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Sender Email Address</label>
                  <input type="email" id="g-sender-email" value="${g.senderEmail}" class="w-full text-xs px-3 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="notifications@company.com" />
                </div>

                <div class="col-span-2">
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Sender Display Name</label>
                  <input type="text" id="g-sender-name" value="${g.senderName}" class="w-full text-xs px-3 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="Company ERP System" />
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-[#F1F5F9] flex items-center justify-end">
              <button type="button" id="btn-test-email" class="btn-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer border border-[#CBD5E1] hover:bg-[#F0F9FF] hover:border-[#00A4B7] text-[#00A4B7] transition-all flex items-center gap-1.5 shadow-2xs">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span id="btn-test-email-label">Send Test Email</span>
              </button>
            </div>
          </div>


          <!-- CARD 3: Sound Settings -->
          <div class="general-settings-card bg-white rounded-xl border border-[#DFE1E6] hover:border-[#00A4B7] p-5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-0">
                <div class="flex items-center gap-2.5">
                  <div class="card-heading-icon w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 bg-[#00A4B7] text-white shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                  </div>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Sound Settings</h3>
                </div>
              </div>

              <div class="divide-y divide-[#F1F5F9] text-xs">
                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">System Click Feedback</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-sound-clicks" ${g.uiClicks ? 'checked' : ''} class="sr-only peer setting-toggle" data-feature="Click Audio">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">Success Chime on Save</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-sound-success" ${g.successChime ? 'checked' : ''} class="sr-only peer setting-toggle" data-feature="Success Chime">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">Warning &amp; Error Alarms</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-sound-warning" ${g.warningAlarm ? 'checked' : ''} class="sr-only peer setting-toggle" data-feature="Warning Alarm">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Volume</label>
                  <select id="g-sound-volume" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="100">High (100%)</option>
                    <option value="70" selected="">Medium (70%)</option>
                    <option value="35">Soft (35%)</option>
                    <option value="0">Mute All</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Alert Melody</label>
                  <select id="g-sound-tone" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="modern-chime" selected="">Modern Chime</option>
                    <option value="enterprise-bell">Enterprise Bell</option>
                    <option value="subtle-ping">Subtle Ping</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
              <div id="sound-eq-bars" class="flex items-end gap-1 h-4 opacity-50 transition-opacity">
                <span class="w-1 bg-[#00A4B7] rounded-full h-1.5 transition-all"></span>
                <span class="w-1 bg-[#00A4B7] rounded-full h-3 transition-all"></span>
                <span class="w-1 bg-[#00A4B7] rounded-full h-2 transition-all"></span>
                <span class="w-1 bg-[#00A4B7] rounded-full h-4 transition-all"></span>
              </div>
              <button type="button" id="btn-test-sound" class="btn-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer border border-[#CBD5E1] hover:bg-[#F0F9FF] hover:border-[#00A4B7] text-[#00A4B7] transition-all flex items-center gap-1.5 shadow-2xs">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                <span>Play Sound</span>
              </button>
            </div>
          </div>


          <!-- CARD 4: Appearance Settings -->
          <div class="general-settings-card bg-white rounded-xl border border-[#DFE1E6] hover:border-[#00A4B7] p-5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-0">
                <div class="flex items-center gap-2.5">
                  <div class="card-heading-icon w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 bg-[#00A4B7] text-white shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                  </div>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Appearance Settings</h3>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2.5 text-xs">
                <div class="col-span-2">
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Color Theme Mode</label>
                  <select id="g-theme-mode" class="w-full text-xs px-3 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="light" selected="">Light Theme (Official ERP Standard)</option>
                    <option value="dark">Dark Charcoal Theme</option>
                    <option value="auto">Auto (Follow OS Preference)</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Sidebar Style</label>
                  <select id="g-sidebar-style" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="dark-navy" selected="">Navy Slate (#0F172A)</option>
                    <option value="pure-black">Midnight Black</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Table Row Density</label>
                  <select id="g-table-density" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="compact">Compact (32px)</option>
                    <option value="comfortable" selected="">Comfortable (40px)</option>
                    <option value="spacious">Spacious (48px)</option>
                  </select>
                </div>
              </div>

              <div class="divide-y divide-[#F1F5F9] text-xs pt-1">
                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">High Contrast Borders</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-high-contrast" class="sr-only peer setting-toggle" data-feature="High Contrast">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">Smooth Micro-Animations</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-smooth-animations" checked="" class="sr-only peer setting-toggle" data-feature="Animations">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
              <span class="text-[10px] text-[#5E6C84]">Brand Accent: <strong class="text-[#00A4B7]">#00A4B7</strong></span>
              <span class="text-[10px] font-semibold text-[#006644] bg-[#E3FCEF] px-2 py-0.5 rounded border border-[#ABF5D1]">Optimized</span>
            </div>
          </div>


          <!-- CARD 5: Accessibility Settings -->
          <div class="general-settings-card bg-white rounded-xl border border-[#DFE1E6] hover:border-[#00A4B7] p-5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-0">
                <div class="flex items-center gap-2.5">
                  <div class="card-heading-icon w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 bg-[#00A4B7] text-white shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </div>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Accessibility Settings</h3>
                </div>
              </div>

              <div class="divide-y divide-[#F1F5F9] text-xs">
                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">Screen Reader ARIA Enhancement</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-screen-reader" class="sr-only peer setting-toggle" data-feature="Screen Reader">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">High Legibility Typography</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-high-legibility" class="sr-only peer setting-toggle" data-feature="High Legibility">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">Prominent Focus Outlines</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-large-focus" checked="" class="sr-only peer setting-toggle" data-feature="Focus Outlines">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Color Blind Mode</label>
                  <select id="g-color-blind" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="none" selected="">Standard (None)</option>
                    <option value="deuteranopia">Deuteranopia (Green)</option>
                    <option value="protanopia">Protanopia (Red)</option>
                    <option value="tritanopia">Tritanopia (Blue)</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Reduced Motion</label>
                  <select id="g-reduced-motion" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="no" selected="">Enabled (Default)</option>
                    <option value="yes">Reduce Animations</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
              <span class="text-[10px] text-[#5E6C84]">Shortcuts: <kbd class="px-1.5 py-0.5 bg-[#F1F5F9] border border-[#CBD5E1] rounded text-[9px] font-mono">Alt + /</kbd></span>
              <span class="text-[10px] font-semibold text-[#006644] bg-[#E3FCEF] px-2 py-0.5 rounded border border-[#ABF5D1]">Compliant</span>
            </div>
          </div>


          <!-- CARD 6: Regional & Localization Defaults -->
          <div class="general-settings-card bg-white rounded-xl border border-[#DFE1E6] hover:border-[#00A4B7] p-5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-0">
                <div class="flex items-center gap-2.5">
                  <div class="card-heading-icon w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 bg-[#00A4B7] text-white shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Regional &amp; Localization</h3>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2.5 text-xs">
                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Date Display Format</label>
                  <select id="g-date-format" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="DD-MM-YYYY" selected="">DD-MM-YYYY (05-Nov-2026)</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD (ISO 8601)</option>
                    <option value="MM/DD/YYYY">MM/DD/YYYY (US Format)</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Timezone</label>
                  <select id="g-timezone" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="Asia/Kolkata" selected="">Asia/Kolkata (IST)</option>
                    <option value="UTC">UTC Universal</option>
                    <option value="America/New_York">America/New_York (EST)</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Export Currency</label>
                  <select id="g-currency" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="USD" selected="">USD ($) - Export Billing</option>
                    <option value="INR">INR (₹) - Indian Rupee</option>
                    <option value="EUR">EUR (€) - Euro</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Mass / Weight Unit</label>
                  <select id="g-mass-unit" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="MT_KG" selected="">Metric Tons &amp; Kg</option>
                    <option value="LBS_KG">Pounds (Lbs) &amp; Kg</option>
                  </select>
                </div>

                <div class="col-span-2">
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Number Formatting Style</label>
                  <select id="g-num-format" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="indian" selected="">Indian Numbering (1,00,000 Lakhs &amp; Crores)</option>
                    <option value="international">International (100,000 Millions)</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
              <span class="text-[10px] text-[#5E6C84]">Fiscal Year: <strong>FY 2026-27</strong></span>
              <span class="text-[10px] font-mono text-[#00A4B7]">01-Apr to 31-Mar</span>
            </div>
          </div>


          <!-- CARD 7: Security & Session Policy -->
          <div class="general-settings-card bg-white rounded-xl border border-[#DFE1E6] hover:border-[#00A4B7] p-5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-0">
                <div class="flex items-center gap-2.5">
                  <div class="card-heading-icon w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 bg-[#00A4B7] text-white shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Security &amp; Session Policy</h3>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2.5 text-xs">
                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Inactivity Timeout</label>
                  <select id="g-session-timeout" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="15">15 Minutes</option>
                    <option value="30" selected="">30 Minutes (Recommended)</option>
                    <option value="60">60 Minutes</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Two-Factor Auth (2FA)</label>
                  <select id="g-two-factor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="admin-only" selected="">Admin &amp; Managers</option>
                    <option value="all">All Personnel</option>
                    <option value="disabled">Disabled</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Max Failed Logins</label>
                  <select id="g-max-login-attempts" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="3">3 Attempts</option>
                    <option value="5" selected="">5 Attempts</option>
                    <option value="10">10 Attempts</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Password Expiry</label>
                  <select id="g-pwd-expiry" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="60">Every 60 Days</option>
                    <option value="90" selected="">Every 90 Days</option>
                    <option value="180">Every 180 Days</option>
                  </select>
                </div>

                <div class="col-span-2 py-1 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D] text-xs">Strict Plant IP Whitelisting</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-ip-whitelist" class="sr-only peer setting-toggle" data-feature="IP Whitelist">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
              <span class="text-[10px] text-[#5E6C84]">Encryption: <strong>AES-256 Bit</strong></span>
              <span class="text-[10px] font-semibold text-[#006644] bg-[#E3FCEF] px-2 py-0.5 rounded border border-[#ABF5D1]">Enforced</span>
            </div>
          </div>


          <!-- CARD 8: System Backup & Data Maintenance -->
          <div class="general-settings-card bg-white rounded-xl border border-[#DFE1E6] hover:border-[#00A4B7] p-5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-0">
                <div class="flex items-center gap-2.5">
                  <div class="card-heading-icon w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 bg-[#00A4B7] text-white shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
                  </div>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">System Backup &amp; Maintenance</h3>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2.5 text-xs">
                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Automated Backup</label>
                  <select id="g-auto-backup" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="hourly">Every Hour</option>
                    <option value="daily" selected="">Daily (02:00 AM IST)</option>
                    <option value="weekly">Weekly Sunday</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Snapshot Retention</label>
                  <select id="g-backup-retention" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                    <option value="30">30 Days</option>
                    <option value="90" selected="">90 Days (Statutory)</option>
                    <option value="365">1 Year Vault</option>
                  </select>
                </div>

                <div class="col-span-2 py-1 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D] text-xs">Geo-Redundant Cloud Mirroring</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-cloud-mirror" checked="" class="sr-only peer setting-toggle" data-feature="Cloud Mirroring">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
              <span id="backup-status-text" class="text-[10px] text-[#5E6C84]">Last Snapshot: <strong>Today, 02:00 AM</strong></span>
              <button type="button" id="btn-trigger-backup" class="btn-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer border border-[#CBD5E1] hover:bg-[#F0F9FF] hover:border-[#00A4B7] text-[#00A4B7] transition-all flex items-center gap-1.5 shadow-2xs">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                <span id="btn-trigger-backup-label">Backup Now</span>
              </button>
            </div>
          </div>


          <!-- CARD 9: Audit Trail & Compliance -->
          <div class="general-settings-card bg-white rounded-xl border border-[#DFE1E6] hover:border-[#00A4B7] p-5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-0">
                <div class="flex items-center gap-2.5">
                  <div class="card-heading-icon w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 bg-[#00A4B7] text-white shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                  </div>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Audit Trail &amp; Traceability</h3>
                </div>
              </div>

              <div class="divide-y divide-[#F1F5F9] text-xs">
                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">Immutable Transaction Log</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-audit-log" checked="" class="sr-only peer setting-toggle" data-feature="Transaction Audit">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-bold text-[#172B4D]">Export Auditor PDF Reports</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="g-export-audit" checked="" class="sr-only peer setting-toggle" data-feature="Auditor Reports">
                    <div class="w-9 h-5 bg-[#DFE1E6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00A4B7]"></div>
                  </label>
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
              <span class="text-[10px] text-[#5E6C84]">Standards: <strong>HACCP &amp; BRCGS</strong></span>
              <button type="button" id="btn-export-audit-log" class="btn-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer border border-[#CBD5E1] hover:bg-[#F0F9FF] hover:border-[#00A4B7] text-[#00A4B7] transition-all flex items-center gap-1.5 shadow-2xs">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <span>Export Log</span>
              </button>
            </div>
          </div>

        </div>

        <!-- Bottom Action Bar (Requested: btn-save-general-settings placed at bottom of page with confirmation) -->
        <div class="pt-4 border-t border-[#DFE1E6] flex items-center justify-between gap-3 mt-6">
          <span class="text-xs text-[#5E6C84]">System preferences apply immediately upon confirmation</span>
          <button type="button" id="btn-save-general-settings" class="btn-primary px-6 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-2 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>Save Configuration</span>
          </button>
        </div>
      </div>
    `;

    // 1. Save Settings handler with Modal.confirm
    const saveBtn = document.getElementById('btn-save-general-settings');
    if (saveBtn) {
      saveBtn.onclick = () => {
        Modal.confirm({
          title: 'Save General Settings?',
          message: 'Are you sure you want to save all general configuration changes? Updated notification, audio, email, theme, and security preferences will take effect immediately.',
          confirmText: 'Yes, Save Configuration',
          cancelText: 'Cancel',
          isDestructive: false,
          onConfirm: () => {
            const updated = {
              desktopNotif: document.getElementById('g-desktop-notif')?.checked ?? g.desktopNotif,
              qcAlerts: document.getElementById('g-qc-alerts')?.checked ?? g.qcAlerts,
              tempAlerts: document.getElementById('g-temp-alerts')?.checked ?? g.tempAlerts,
              harvestDigest: document.getElementById('g-harvest-digest')?.checked ?? g.harvestDigest,
              notifFreq: document.getElementById('g-notif-freq')?.value || g.notifFreq,

              smtpHost: document.getElementById('g-smtp-host')?.value.trim() || g.smtpHost,
              smtpPort: document.getElementById('g-smtp-port')?.value.trim() || g.smtpPort,
              smtpSecurity: document.getElementById('g-smtp-sec')?.value || g.smtpSecurity,
              senderEmail: document.getElementById('g-sender-email')?.value.trim() || g.senderEmail,
              senderName: document.getElementById('g-sender-name')?.value.trim() || g.senderName,

              uiClicks: document.getElementById('g-sound-clicks')?.checked ?? g.uiClicks,
              successChime: document.getElementById('g-sound-success')?.checked ?? g.successChime,
              warningAlarm: document.getElementById('g-sound-warning')?.checked ?? g.warningAlarm,
              soundVolume: document.getElementById('g-sound-volume')?.value || g.soundVolume,
              alertTone: document.getElementById('g-sound-tone')?.value || g.alertTone,

              themeMode: document.getElementById('g-theme-mode')?.value || g.themeMode,
              sidebarStyle: document.getElementById('g-sidebar-style')?.value || g.sidebarStyle,
              tableDensity: document.getElementById('g-table-density')?.value || g.tableDensity,
              highContrast: document.getElementById('g-high-contrast')?.checked ?? g.highContrast,
              smoothAnimations: document.getElementById('g-smooth-animations')?.checked ?? g.smoothAnimations,

              screenReader: document.getElementById('g-screen-reader')?.checked ?? g.screenReader,
              highLegibility: document.getElementById('g-high-legibility')?.checked ?? g.highLegibility,
              largeFocusRings: document.getElementById('g-large-focus')?.checked ?? g.largeFocusRings,
              colorBlindMode: document.getElementById('g-color-blind')?.value || g.colorBlindMode,
              reducedMotion: document.getElementById('g-reduced-motion')?.value === 'yes',

              dateFormat: document.getElementById('g-date-format')?.value || g.dateFormat,
              timezone: document.getElementById('g-timezone')?.value || g.timezone,
              currency: document.getElementById('g-currency')?.value || g.currency,
              massUnit: document.getElementById('g-mass-unit')?.value || g.massUnit,
              numberFormat: document.getElementById('g-num-format')?.value || g.numberFormat,

              sessionTimeout: document.getElementById('g-session-timeout')?.value || g.sessionTimeout,
              twoFactor: document.getElementById('g-two-factor')?.value || g.twoFactor,
              maxLoginAttempts: document.getElementById('g-max-login-attempts')?.value || g.maxLoginAttempts,
              passwordExpiryDays: document.getElementById('g-pwd-expiry')?.value || g.passwordExpiryDays,
              ipWhitelist: document.getElementById('g-ip-whitelist')?.checked ?? g.ipWhitelist,

              autoBackupFreq: document.getElementById('g-auto-backup')?.value || g.autoBackupFreq,
              backupRetentionDays: document.getElementById('g-backup-retention')?.value || g.backupRetentionDays,
              cloudMirroring: document.getElementById('g-cloud-mirror')?.checked ?? g.cloudMirroring,

              auditLogging: document.getElementById('g-audit-log')?.checked ?? g.auditLogging,
              exportAuditPdf: document.getElementById('g-export-audit')?.checked ?? g.exportAuditPdf
            };

            // Save and immediately apply across entire application
            AppSettings.save(updated);

            Toast.show('General settings updated and applied across the entire application!', 'success', 'Saved');
          }
        });
      };
    }


    // Interactive Test Notification Handler
    const testNotifBtn = document.getElementById('btn-test-notification');
    if (testNotifBtn) {
      testNotifBtn.onclick = () => {
        const notifLabel = document.getElementById('btn-test-notification-label');
        if (notifLabel) notifLabel.innerHTML = '<span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Dispatching Alert...</span>';
        testNotifBtn.disabled = true;

        // Animate top navbar bell
        const navBell = document.getElementById('header-notifications-btn');
        if (navBell) {
          navBell.classList.add('animate-bounce', 'text-[#00A4B7]');
          setTimeout(() => navBell.classList.remove('animate-bounce', 'text-[#00A4B7]'), 1200);
        }

        setTimeout(() => {
          if (notifLabel) notifLabel.textContent = 'Trigger Test Notification';
          testNotifBtn.disabled = false;

          // Sound effect
          if (typeof window !== 'undefined' && window.AppSettings) {
            window.AppSettings.playSound('success');
            if (window.AppSettings.settings?.desktopNotif) {
              window.AppSettings.notify('Devi Fisheries Alert', 'QC Inspection for Lot #QC-2026-4412 approved at Dock #1', 'success');
            }
          }

          Toast.show(
            'QC Inspection approved for Lot #QC-2026-4412 (Vannamei 2,980 Kg) staged at Dock #1',
            'success',
            'QC Live Alert'
          );
        }, 500);
      };
    }

    // Dynamic active count badge updater for Card 1 toggles
    const updateActiveNotifCount = () => {
      const activeCount = [
        document.getElementById('g-desktop-notif')?.checked,
        document.getElementById('g-qc-alerts')?.checked,
        document.getElementById('g-temp-alerts')?.checked,
        document.getElementById('g-harvest-digest')?.checked
      ].filter(Boolean).length;

      const badge = document.getElementById('notif-active-badge');
      if (badge) {
        badge.textContent = `${activeCount} Active`;
        if (activeCount > 0) {
          badge.className = 'px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1] transition-all';
        } else {
          badge.className = 'px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1] transition-all';
        }
      }
    };

    ['g-desktop-notif', 'g-qc-alerts', 'g-temp-alerts', 'g-harvest-digest'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', updateActiveNotifCount);
    });

    // 2. Interactive Sound Play & Web Audio Synthesizer with animated waveform
    const playChimeSample = (volume = 0.7, tone = 'modern-chime') => {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const baseFreq = (tone === 'enterprise-bell') ? 440 : (tone === 'subtle-ping' ? 784 : 587.33); // A4, G5, or D5
        const highFreq = baseFreq * 1.5; // Harmonic Fifth

        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc1.type = 'sine';
        osc2.type = 'triangle';
        osc1.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);
        osc1.frequency.exponentialRampToValueAtTime(highFreq, audioCtx.currentTime + 0.12);
        osc2.frequency.setValueAtTime(highFreq, audioCtx.currentTime);

        const volFactor = Number(volume) / 100;
        gainNode.gain.setValueAtTime(0.18 * volFactor, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc1.start();
        osc2.start();
        osc1.stop(audioCtx.currentTime + 0.4);
        osc2.stop(audioCtx.currentTime + 0.4);

        // Animate visual equalizer bars
        const eq = document.getElementById('sound-eq-bars');
        if (eq) {
          eq.classList.remove('opacity-50');
          eq.classList.add('opacity-100');
          eq.querySelectorAll('span').forEach((b, i) => {
            b.style.height = (8 + i * 4) + 'px';
          });
          setTimeout(() => {
            eq.classList.remove('opacity-100');
            eq.classList.add('opacity-50');
            eq.querySelectorAll('span').forEach((b, i) => {
              b.style.height = [6, 12, 8, 16][i] + 'px';
            });
          }, 450);
        }
      } catch (e) {
        console.warn('AudioContext not supported or allowed yet', e);
      }
    };

    const testSoundBtn = document.getElementById('btn-test-sound');
    if (testSoundBtn) {
      testSoundBtn.onclick = () => {
        const vol = document.getElementById('g-sound-volume')?.value || g.soundVolume;
        const tone = document.getElementById('g-sound-tone')?.value || g.alertTone;
        playChimeSample(vol, tone);
        Toast.show('Playing acoustic chime sample...', 'info', 'Audio Audition');
      };
    }

    // Live audition when changing volume or alert tone
    document.getElementById('g-sound-volume')?.addEventListener('change', (e) => {
      playChimeSample(e.target.value, document.getElementById('g-sound-tone')?.value || g.alertTone);
    });
    document.getElementById('g-sound-tone')?.addEventListener('change', (e) => {
      playChimeSample(document.getElementById('g-sound-volume')?.value || g.soundVolume, e.target.value);
    });

    // 3. Interactive Test Email with live loading spinner state
    const testEmailBtn = document.getElementById('btn-test-email');
    if (testEmailBtn) {
      testEmailBtn.onclick = () => {
        const sender = document.getElementById('g-sender-email')?.value.trim() || 'notifications@devifisheries.com';
        const label = document.getElementById('btn-test-email-label');
        if (label) label.innerHTML = '<span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Dispatching...</span>';
        testEmailBtn.disabled = true;

        setTimeout(() => {
          if (label) label.textContent = 'Send Test Email';
          testEmailBtn.disabled = false;
          Toast.show(`SMTP Connection Verified: Test email successfully sent to ${sender}!`, 'success', 'Email Verified');
        }, 900);
      };
    }

    // 4. Interactive Backup Now with progress animation
    const backupBtn = document.getElementById('btn-trigger-backup');
    if (backupBtn) {
      backupBtn.onclick = () => {
        const label = document.getElementById('btn-trigger-backup-label');
        const statusText = document.getElementById('backup-status-text');
        backupBtn.disabled = true;
        if (label) label.textContent = 'Generating 45%...';

        setTimeout(() => {
          if (label) label.textContent = 'Packaging 85%...';
        }, 350);

        setTimeout(() => {
          if (label) label.textContent = 'Backup Now';
          backupBtn.disabled = false;
          if (statusText) statusText.innerHTML = 'Last Snapshot: <strong>Just Now</strong>';
          AppSettings.runBackup();
        }, 800);
      };
    }

    // 5. Interactive Export Audit Log (Generates CSV download)
    const exportAuditBtn = document.getElementById('btn-export-audit-log');
    if (exportAuditBtn) {
      exportAuditBtn.onclick = () => {
        const csvContent = 'Timestamp,User,Action,Module,EntityID,Status,Checksum\n' +
          '2026-11-05 17:30:12,P. Rama Krishna (Admin),Settings Updated,General Settings,GEN-001,Success,sha256-a1b2c3d4e5\n' +
          '2026-11-05 16:45:00,Laxmi Narayana (Admin),Plant Details Modified,Organization,PLT-001,Success,sha256-f6g7h8i9j0\n' +
          '2026-11-05 15:20:10,Ramesh Varma,Lot Allocated,Procurement,LOT-2026-088,Verified,sha256-k1l2m3n4o5\n' +
          '2026-11-05 14:10:45,Dr. Ananya Sen,QC Screening Passed,Quality Control,QC-091,Approved,sha256-p6q7r8s9t0';
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `devi-fisheries-audit-trail-${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        Toast.show('Exported 4 audit trail compliance records to CSV!', 'success', 'Export Complete');
      };
    }
    // 6. Live Interactive Settings Listeners (Immediate Real-time Application Preview)
    document.getElementById('g-theme-mode')?.addEventListener('change', (e) => {
      AppSettings.applyAll({ ...AppSettings.getAll(), themeMode: e.target.value });
      Toast.show(`Theme mode switched to ${e.target.value.toUpperCase()}`, 'info', 'Theme Preview');
    });

    document.getElementById('g-high-contrast')?.addEventListener('change', (e) => {
      AppSettings.applyAll({ ...AppSettings.getAll(), highContrast: e.target.checked });
      Toast.show(`High contrast ${e.target.checked ? 'Enabled' : 'Disabled'}`, 'info', 'Display');
    });

    document.getElementById('g-table-density')?.addEventListener('change', (e) => {
      AppSettings.applyAll({ ...AppSettings.getAll(), tableDensity: e.target.value });
      Toast.show(`Table density set to ${e.target.value.toUpperCase()}`, 'info', 'Density');
    });

    document.getElementById('g-sidebar-style')?.addEventListener('change', (e) => {
      AppSettings.applyAll({ ...AppSettings.getAll(), sidebarStyle: e.target.value });
      Toast.show(`Sidebar style updated`, 'info', 'Sidebar');
    });

    document.getElementById('g-color-blind')?.addEventListener('change', (e) => {
      AppSettings.applyAll({ ...AppSettings.getAll(), colorBlindMode: e.target.value });
      Toast.show(`Color filter set to ${e.target.value}`, 'info', 'Accessibility');
    });

    document.getElementById('g-reduced-motion')?.addEventListener('change', (e) => {
      AppSettings.applyAll({ ...AppSettings.getAll(), reducedMotion: e.target.value === 'yes' });
      Toast.show(`Reduced motion ${e.target.value === 'yes' ? 'Enabled' : 'Disabled'}`, 'info', 'Motion');
    });

    document.getElementById('g-smooth-animations')?.addEventListener('change', (e) => {
      AppSettings.applyAll({ ...AppSettings.getAll(), smoothAnimations: e.target.checked });
    });

    document.getElementById('g-large-focus')?.addEventListener('change', (e) => {
      AppSettings.applyAll({ ...AppSettings.getAll(), largeFocusRings: e.target.checked });
      Toast.show(`High-visibility focus rings ${e.target.checked ? 'Enabled' : 'Disabled'}`, 'info', 'Focus');
    });

    document.getElementById('g-high-legibility')?.addEventListener('change', (e) => {
      AppSettings.applyAll({ ...AppSettings.getAll(), highLegibility: e.target.checked });
      Toast.show(`High legibility typography ${e.target.checked ? 'Enabled' : 'Disabled'}`, 'info', 'Legibility');
    });


    // 6. Interactive Live Theme Mode switch
    document.getElementById('g-theme-mode')?.addEventListener('change', (e) => {
      const mode = e.target.value;
      if (mode === 'dark') {
        document.documentElement.classList.add('theme-dark');
        Toast.show('Applied Dark Theme preview', 'info');
      } else {
        document.documentElement.classList.remove('theme-dark');
        Toast.show('Applied Light Theme preview', 'info');
      }
    });

    // 7. Interactive toggles feedback toast
    container.querySelectorAll('.setting-toggle').forEach(t => {
      t.addEventListener('change', (e) => {
        const feat = e.target.dataset.feature || 'Setting';
        const isChecked = e.target.checked;
        Toast.show(`${feat} is now ${isChecked ? 'Enabled' : 'Disabled'}`, isChecked ? 'success' : 'info');
      });
    });
  },

    renderCustomizerTab(container, tabsBarHtml, subTab) {
    if (subTab === 'fields-customizer' || subTab === 'field-builder') {
      this.activeTab = 'fields-customizer';
      this.renderFieldsCustomizerTab(container, tabsBarHtml);
    } else if (subTab === 'query-editor') {
      this.activeTab = 'query-editor';
      this.renderQueryEditorTab(container, tabsBarHtml);
    } else {
      this.activeTab = 'forms';
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
      filename: 'JQL_EDITOR.sql',
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
                          <svg class="w-3.5 h-3.5 text-[#00A4B7] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                          <span class="text-xs font-bold text-[#172B4D] truncate">${t.badge}: ${t.title}</span>
                        </div>
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
              <div class="px-4 py-3 text-white flex items-center justify-between shadow-xs" style="background: linear-gradient(135deg, #00A4B7 0%, #007A87 100%) !important;">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
                  <span class="text-xs font-extrabold tracking-wide uppercase">Live Interactive Component Preview</span>
                </div>
                <span class="bg-white/20 text-white text-[10px] font-mono px-2 py-0.5 rounded font-extrabold tracking-wider uppercase backdrop-blur-xs flex items-center gap-1 border border-white/20">
                  <span>⚡</span>
                  <span>QUERY_ENGINE</span>
                </span>
              </div>

              <!-- Preview Body -->
              <div class="p-4 space-y-3.5 bg-[#172B4D]">
                <!-- Test Record Dropdown Card -->
                <div class="p-3.5 bg-white rounded-xl border border-[#DFE1E6] shadow-2xs space-y-1.5">
                  <label for="preview-sample-record-select" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    <span>Test Against Sample Record:</span>
                  </label>
                  <select id="preview-sample-record-select" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded-lg font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs cursor-pointer">
                    ${this.sampleRecords.map(r => `
                      <option value="${r.id}" ${r.id === this.queryEditorState.selectedRecordId ? 'selected' : ''}>${r.label}</option>
                    `).join('')}
                  </select>
                </div>

                <!-- Preview Output Container Card -->
                <div class="bg-white p-4 rounded-xl border border-[#DFE1E6] shadow-2xs space-y-2.5">
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
                    <div id="preview-active-display-box" class="w-full text-xs px-3 py-2.5 bg-[#F8FAFC] border border-[#DFE1E6] rounded-lg font-mono font-bold text-[#172B4D] shadow-2xs">
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
                <div class="grid grid-cols-2 gap-3 shrink-0">
                  <div class="p-3 rounded-xl border border-[#DFE1E6] bg-white shadow-2xs">
                    <div class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">Database Key:</div>
                    <div class="font-mono text-xs font-bold text-[#00A4B7] mt-1 truncate">dynamicEnterpriseStatus</div>
                  </div>
                  <div class="p-3 rounded-xl border border-[#DFE1E6] bg-white shadow-2xs">
                    <div class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">Field Engine:</div>
                    <div id="preview-field-engine-label" class="text-xs font-bold text-[#172B4D] mt-1">${currentMode.engineLabel}</div>
                  </div>
                </div>

                <!-- Collapsible JSON Spec -->
                <div class="border border-[#DFE1E6] rounded-xl overflow-hidden bg-white shadow-2xs">
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
              class="w-full bg-black text-[#10B981] font-mono text-xs sm:text-sm p-3 focus:outline-none resize-y leading-relaxed border-0 outline-none selection:bg-[#10B981]/30" 
              style="color: #10B981 !important; background-color: #000000 !important; caret-color: #10B981 !important; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;"
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

            <button type="button" id="btn-run-query" class="px-5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-2 shadow-md bg-[#10B981] hover:bg-[#059669] text-white transition-all cursor-pointer">
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
      size: 'xl',
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
      size: 'xl',
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
      size: 'xl',
      content: `
        <form id="modal-form-add-field" class="flex flex-col lg:flex-row gap-5 items-start">
          <!-- LEFT: Form Configuration Fields (Scrollable area) -->
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

          <!-- RIGHT: Sticky / Fixed-Height Live Interactive Component Preview -->
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
              <div class="border-t border-[#1E293B] bg-[#172B4D] overflow-hidden">
                <button type="button" id="preview-toggle-json" class="w-full px-4 py-3 flex items-center justify-between text-left bg-[#172B4D] hover:bg-[#1E3A5F] transition-colors cursor-pointer select-none">
                  <div class="flex items-center gap-2 text-xs font-semibold text-white">
                    <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
                    <span>Assign to Tab</span>
                  </div>
                  <svg id="preview-json-chevron" class="w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div id="preview-json-content" class="hidden px-4 pb-4 pt-2 border-t border-[#1E293B] bg-[#172B4D] space-y-2">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-[#94A3B8] font-medium">Assigned Tab / Section:</span>
                    <span id="preview-assigned-tab-val" class="font-bold text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded text-[11px] border border-[#BAE6FD]">Header Information</span>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-[#94A3B8] font-medium">Target Form:</span>
                    <span id="preview-assigned-form-val" class="font-semibold text-white">FORM-PI</span>
                  </div>
                  <div class="pt-1">
                    <span class="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider block mb-1">Active Placements:</span>
                    <div id="preview-assigned-placements" class="flex flex-wrap gap-1.5">
                      <span class="px-2 py-0.5 bg-[#0F172A] border border-[#334155] rounded text-[10px] font-medium text-white">PI / Order Entry</span>
                      <span class="px-2 py-0.5 bg-[#0F172A] border border-[#334155] rounded text-[10px] font-medium text-white">Documentation Hub</span>
                    </div>
                  </div>
                </div>
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

  ,
  // =========================================================================
  // MASTER SETUP VIEW (FOR ADMIN ROLE)
  // =========================================================================
  selectedMasterCategory: 'All',
  activeMasterModule: 'coldstore',
  selectedSubmasterByModule: {
    coldstore: 'cs-general-categories',
    sales: 'variety-list',
    purchase: 'graders-list',
    preprocessing: 'supervisor',
    qc: 'traceability',
    inventory: 'vendors-master'
  },
  masterSearchQuery: '',
  masterStatusFilter: 'All',
  moduleMastersData: null,

  initMasterData() {
    if (this.moduleMastersData) return;

    // Helper to extract existing records from SEAFOOD_MASTERS or fallback to custom records
    const getRecords = (id, fallback = []) => {
      try {
        if (typeof SEAFOOD_MASTERS !== 'undefined' && Array.isArray(SEAFOOD_MASTERS)) {
          const found = SEAFOOD_MASTERS.find(m => m.id === id);
          if (found && Array.isArray(found.records) && found.records.length > 0) {
            return JSON.parse(JSON.stringify(found.records));
          }
        }
      } catch (e) {
        // fallback
      }
      return fallback;
    };

    this.moduleMastersData = [
      // 1. Coldstore Module
      {
        id: 'coldstore',
        title: 'Coldstore',
        icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v18m9-9H3m15.364-6.364l-12.728 12.728m0-12.728l12.728 12.728"/></svg>',
        submasters: [
          {
            id: 'cs-general-categories',
            label: 'General Categories List',
            records: [
              { code: 'CAT-CS-01', name: 'Raw Material Holding', details: 'Frozen raw shrimp blocks | -18°C to -22°C', status: 'Active' },
              { code: 'CAT-CS-02', name: 'Finished IQF Packaging', details: 'Individually Quick Frozen retail bags | -24°C', status: 'Active' },
              { code: 'CAT-CS-03', name: 'Export Transit Staging', details: 'Palletized reefer container pre-cooling dock', status: 'Active' },
              { code: 'CAT-CS-04', name: 'Value Added Ready-to-Cook', details: 'Marinated & breaded frozen line staging', status: 'Active' }
            ]
          },
          {
            id: 'cs-general-options',
            label: 'General Options List',
            records: [
              { code: 'OPT-DEFROST', name: 'Auto Hot Gas Defrost Cycle', details: 'Every 6 hours | Max temp swing 1.5°C', status: 'Active' },
              { code: 'OPT-TEMP-ALARM', name: 'High Temp Alert Threshold', details: 'Trigger SMS/email if temp > -16°C for 15 mins', status: 'Active' },
              { code: 'OPT-PALLET-TRACK', name: 'RFID Bay Scanning Verification', details: 'Mandatory barcode/RFID scan at bay ingress', status: 'Active' },
              { code: 'OPT-ENERGY-MODE', name: 'Peak-Hour Compressor Throttling', details: '18:00 to 22:00 thermal buffer conservation', status: 'Active' }
            ]
          },
          {
            id: 'cs-tenants',
            label: 'Tenants List',
            records: [
              { code: 'TNT-001', name: 'Devi Fisheries Internal Storage', details: 'Self-operated core plant chambers | 3,200 MT', status: 'Active' },
              { code: 'TNT-002', name: 'Oceanic Blue Cold Chain Logistics', details: 'Dedicated commercial lease | Bays C1-C10', status: 'Active' },
              { code: 'TNT-003', name: 'Apex Marine Cold Storage Partner', details: 'Shared seasonal overflow facility | Zone 4', status: 'Active' }
            ]
          },
          {
            id: 'cs-floor-list',
            label: 'FloorList',
            records: [
              { code: 'FLR-G1', name: 'Ground Floor Ingress & Blast Dock', details: 'Heavy duty reinforced concrete | Height 6.5m', status: 'Active' },
              { code: 'FLR-M1', name: 'Mezzanine Pallet High-Rack Tier 1', details: 'Drive-in automated pallet racks | Height 8.0m', status: 'Active' },
              { code: 'FLR-M2', name: 'Mezzanine Pallet High-Rack Tier 2', details: 'Narrow aisle articulated forklift zone | Height 12.0m', status: 'Active' }
            ]
          },
          {
            id: 'cs-block-list',
            label: 'BlockList',
            records: [
              { code: 'BLK-A', name: 'Block A - Deep Chill Vault', details: 'Capacity 1,200 Pallets | Temp: -25°C | Vannamei HL', status: 'Active' },
              { code: 'BLK-B', name: 'Block B - IQF Retail Finished Goods', details: 'Capacity 950 Pallets | Temp: -22°C | Retail Cartons', status: 'Active' },
              { code: 'BLK-C', name: 'Block C - Export Holding Buffer', details: 'Capacity 650 Pallets | Temp: -20°C | Loading Dock 1-4', status: 'Active' },
              { code: 'BLK-D', name: 'Block D - Blast Frozen Raw Stock', details: 'Capacity 800 Pallets | Temp: -24°C | Bulk Blocks', status: 'Active' }
            ]
          },
          {
            id: 'cs-coldstores-list',
            label: 'ColdStores List',
            records: [
              { code: 'CS-VIZ-01', name: 'Visakhapatnam Central Cold Store', details: 'Capacity 3,500 MT | 6 Chambers | NH3 Refrigeration', status: 'Active' },
              { code: 'CS-NEL-02', name: 'Nellore Deep Freeze Facility', details: 'Capacity 2,800 MT | 4 Chambers | Freon 507', status: 'Active' },
              { code: 'CS-KAP-03', name: 'Kakinada Processing Cold Hub', details: 'Capacity 1,500 MT | 3 Chambers | Ammonia Glycol', status: 'Active' }
            ]
          },
          {
            id: 'cs-hon-packing-count',
            label: 'Hon Packing Count Master',
            records: [
              { code: 'HPC-1620', name: 'Head-On 16/20 Pack Matrix', details: 'Nominal 1.8 kg slab | Master 10.8 kg carton (6x1.8kg)', status: 'Active' },
              { code: 'HPC-2125', name: 'Head-On 21/25 Pack Matrix', details: 'Nominal 2.0 kg block | Master 12.0 kg carton (6x2.0kg)', status: 'Active' },
              { code: 'HPC-2630', name: 'Head-On 26/30 Pack Matrix', details: 'Nominal 1.8 kg slab | Master 10.8 kg carton (6x1.8kg)', status: 'Active' },
              { code: 'HPC-3140', name: 'Head-On 31/40 Pack Matrix', details: 'Nominal 2.0 kg block | Master 12.0 kg carton (6x2.0kg)', status: 'Active' }
            ]
          }
        ]
      },

      // 2. Sales Module
      {
        id: 'sales',
        title: 'Sales',
        icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
        submasters: [
          {
            id: 'variety-list',
            label: 'Variety-list',
            records: [
              { code: 'VAR-VAN', name: 'Litopenaeus Vannamei (White Prawn)', details: 'Cultured Brackish Water | Export Grade A1', status: 'Active' },
              { code: 'VAR-MON', name: 'Penaeus Monodon (Black Tiger)', details: 'Wild & Cultured Premium Jumbo Shrimp', status: 'Active' },
              { code: 'VAR-IND', name: 'Fenneropenaeus Indicus (Indian White)', details: 'Coastal Trawl Harvest | Grade B', status: 'Active' },
              { code: 'VAR-SCAM', name: 'Macrobrachium Rosenbergii (Scampi)', details: 'Freshwater Giant Prawn | Tail & Whole', status: 'Active' }
            ]
          },
          {
            id: 'exporter',
            label: 'Exporter',
            records: getRecords('exporter', [
              { code: 'EXP-101', name: 'Devi Fisheries Limited - VSEZ Unit', details: 'EIA 1018, FDA 19827341234, Visakhapatnam', status: 'Active' },
              { code: 'EXP-102', name: 'Devi Marine Exports Private Ltd', details: 'EIA 1067, Nellore Value Addition Unit', status: 'Active' }
            ])
          },
          {
            id: 'processor',
            label: 'Processor',
            records: getRecords('processor', [
              { code: 'PRC-01', name: 'Devi Plant 1 - Autonagar Block B', details: 'Blast Freezer 40 MT/Day, IQF Line 1', status: 'Active' },
              { code: 'PRC-02', name: 'Devi Plant 2 - Singarayakonda Unit', details: 'Plate Freezer 25 MT/Day, Value Addition Line', status: 'Active' }
            ])
          },
          {
            id: 'payment-terms',
            label: 'Payment Terms',
            records: getRecords('payment-terms', [
              { code: 'PT-01', name: '100% LC at Sight from Prime Bank', details: 'Irrevocable, confirmed letter of credit', status: 'Active' },
              { code: 'PT-02', name: '20% Advance, Balance 80% CAD', details: 'Documents through bank upon BL surrender', status: 'Active' }
            ])
          },
          {
            id: 'liners-list',
            label: 'Liners List',
            records: getRecords('liners-list', [
              { code: 'LIN-MSK', name: 'Maersk Line India Pvt Ltd', details: 'Direct Reefer Service to US East Coast / Rotterdam', status: 'Active' },
              { code: 'LIN-MSC', name: 'Mediterranean Shipping Company (MSC)', details: 'Weekly call at Vizag / Krishnapatnam Port', status: 'Active' }
            ])
          },
          {
            id: 'countrywise-address-list',
            label: 'Countrywise Address List',
            records: getRecords('countrywise-address-list', [
              { code: 'ADR-USA', name: 'US Logistics Clearing Hub - Tampa Port', details: 'Devi Seafoods Inc, 4202 Maritime Blvd, Tampa, FL 33605', status: 'Active' },
              { code: 'ADR-EU', name: 'EU Inspection Distribution Point - Rotterdam', details: 'Devi Marine B.V., Port 2440, Maasvlakte, 3199 LK Rotterdam', status: 'Active' }
            ])
          },
          {
            id: 'cha',
            label: 'CHA',
            records: getRecords('cha', [
              { code: 'CHA-01', name: 'Seaways Shipping & Logistics Ltd', details: 'Custom House Agent Lic: R-04/VIZAG, All Ports', status: 'Active' },
              { code: 'CHA-02', name: 'Transworld Clearing Agency Pvt Ltd', details: 'Lic: CH-8812, Specialization: Reefer Containers', status: 'Active' }
            ])
          },
          {
            id: 'tax-charges',
            label: 'Tax Charges',
            records: getRecords('tax-charges', [
              { code: 'TC-EIA', name: 'EIA Health Certificate Cess', details: 'Rate: 0.15% on FOB Value | Regulatory', status: 'Active' },
              { code: 'TC-MPEDA', name: 'MPEDA Export Promotion Levy', details: 'Rate: 0.5% on Invoice Value', status: 'Active' }
            ])
          },
          {
            id: 'description-list',
            label: 'Description List',
            records: getRecords('description-list', [
              { code: 'DSC-01', name: 'Frozen Headless Shell-On (HLSO) Vannamei', details: 'IQF / Block Frozen in food grade polybags', status: 'Active' },
              { code: 'DSC-02', name: 'Frozen Peeled & Deveined Tail-On (PDTO)', details: 'Individually Quick Frozen with 100% net weight', status: 'Active' }
            ])
          },
          {
            id: 'ports-list',
            label: 'Ports List',
            records: getRecords('ports-list', [
              { code: 'PORT-VTZ', name: 'Visakhapatnam Port (INVTZ1)', details: 'Reefer Plugs: 450 | Terminal: VCTPL | East Coast', status: 'Active' },
              { code: 'PORT-KRP', name: 'Krishnapatnam Port (INKRI1)', details: 'Reefer Plugs: 320 | Terminal: KPCT | South Coast', status: 'Active' }
            ])
          },
          {
            id: 'currency',
            label: 'Currency',
            records: getRecords('currency', [
              { code: 'USD', name: 'United States Dollar ($)', details: 'Standard Export Settlement Currency', status: 'Active' },
              { code: 'EUR', name: 'Euro (€)', details: 'European Union Member States Settlement', status: 'Active' },
              { code: 'JPY', name: 'Japanese Yen (¥)', details: 'Direct JPY L/C Remittance Currency', status: 'Active' }
            ])
          },
          {
            id: 'exchange-rates',
            label: 'Exchange Rates',
            records: getRecords('exchange-rates', [
              { code: 'FX-USDINR', name: 'USD to INR Standard Custom Book Rate', details: '1 USD = ₹86.45 INR | Weekly RBI Gazette', status: 'Active' },
              { code: 'FX-EURINR', name: 'EUR to INR Commercial Export Rate', details: '1 EUR = ₹91.80 INR | Daily Forex Fix', status: 'Active' }
            ])
          },
          {
            id: 'banks-list',
            label: 'Banks List',
            records: getRecords('banks-list', [
              { code: 'BNK-SBI', name: 'State Bank of India - Overseas Branch Vizag', details: 'SWIFT: SBININBB301, Export Credit Facility ₹120 Cr', status: 'Active' },
              { code: 'BNK-HDFC', name: 'HDFC Bank - Trade Services Division', details: 'SWIFT: HDFCINBBXXX, Forex Hedging Desk', status: 'Active' }
            ])
          },
          {
            id: 'store-delivery-details',
            label: 'Store Delivery Details List',
            records: getRecords('store-delivery-details', [
              { code: 'SDD-COS', name: 'Costco Wholesale Central DC - Tracy CA', details: 'Dock 42-48, Appointment delivery, Temp: -22°C', status: 'Active' },
              { code: 'SDD-SYS', name: 'Sysco Food Services National Cold Hub - Dallas', details: 'Gate 3 Reefer Ingress, Automated Pallet offload', status: 'Active' }
            ])
          },
          {
            id: 'freight-rates',
            label: 'Freight Rates',
            records: getRecords('freight-rates', [
              { code: 'OFR-USNYC', name: 'Ocean Reefer Freight: Vizag -> New York', details: 'US$ 4,200 per 40ft High Cube Reefer (Maersk)', status: 'Active' },
              { code: 'OFR-EURTM', name: 'Ocean Reefer Freight: Vizag -> Rotterdam', details: 'US$ 3,450 per 40ft High Cube Reefer (CMA CGM)', status: 'Active' }
            ])
          },
          {
            id: 'liners-contracts',
            label: 'Liners Contracts',
            records: [
              { code: 'LNC-MSK-26', name: 'Maersk Annual Reefer Commitment 2026', details: 'Volume: 450 FEU/yr | Fixed BAF Indexation | Vizag to USWC', status: 'Active' },
              { code: 'LNC-MSC-26', name: 'MSC Service Contract SC-99128', details: 'Volume: 250 FEU/yr | Free time: 14 days demurrage/detention', status: 'Active' },
              { code: 'LNC-ONE-26', name: 'Ocean Network Express (ONE) Reefer Agreement', details: 'Volume: 180 FEU/yr | Dedicated Cold Treatment monitors', status: 'Active' }
            ]
          },
          {
            id: 'reciprocal-tariffs',
            label: 'Reciprocal Tariffs',
            records: [
              { code: 'TRF-US-AD', name: 'US Anti-Dumping Duty (DOC 19th Review)', details: 'Rate: 1.42% Cash Deposit | Applicable to Devi Fisheries Ltd', status: 'Active' },
              { code: 'TRF-US-CVD', name: 'Countervailing Duty Preliminary Margin', details: 'Rate: 2.15% | Customs Bonded Guarantee', status: 'Active' },
              { code: 'TRF-EU-GSP', name: 'EU Generalised Scheme of Preferences Tariff', details: 'Standard Duty: 4.2% on raw frozen shrimp', status: 'Active' }
            ]
          },
          {
            id: 'po-tax-rates',
            label: 'PO Tax Rates',
            records: [
              { code: 'POT-GST-0', name: 'Zero-Rated GST Export Supply (LUT)', details: 'IGST 0% under Letter of Undertaking for Export', status: 'Active' },
              { code: 'POT-GST-5', name: 'Domestic Packaged Seafood GST', details: 'CGST 2.5% + SGST 2.5% = Total 5%', status: 'Active' },
              { code: 'POT-TCS-01', name: 'TCS on Foreign Remittance / Trade', details: 'Section 206C(1H) | 0.1% on turnover > ₹50L', status: 'Active' }
            ]
          }
        ]
      },

      // 3. Purchase Module
      {
        id: 'purchase',
        title: 'Purchase',
        icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
        submasters: [
          {
            id: 'graders-list',
            label: 'Graders List',
            records: getRecords('graders-list', [
              { code: 'GRD-01', name: 'K. Satyanarayana', details: 'Senior Raw Material Quality Grader, 14 yrs exp', status: 'Active' },
              { code: 'GRD-02', name: 'M. Venkat Rao', details: 'Field Procurement & Count Verifier, Bapatla Center', status: 'Active' }
            ])
          },
          {
            id: 'agents-list',
            label: 'Agents List',
            records: getRecords('agents-list', [
              { code: 'AGT-01', name: 'Sri Krishna Aqua Consultants', details: 'Rep: B. Krishna, Bhimavaram Hub, Coverage: 120 Farms', status: 'Active' },
              { code: 'AGT-02', name: 'Godavari Coastal Procurement Agency', details: 'Rep: N. Rambabu, Amalapuram, Coverage: 85 Farms', status: 'Active' }
            ])
          },
          {
            id: 'financiers-list',
            label: 'Financiers List',
            records: getRecords('financiers-list', [
              { code: 'FIN-01', name: 'Andhra Pradesh State Financial Corp (APSFC)', details: 'Working capital seasonal aquaculture facility', status: 'Active' },
              { code: 'FIN-02', name: 'Nabard Aqua Refinance Scheme', details: 'Rural cold chain and farm harvest credit line', status: 'Active' }
            ])
          },
          {
            id: 'drivers-list',
            label: 'Drivers List',
            records: getRecords('drivers-list', [
              { code: 'DRV-01', name: 'P. Appala Naidu', details: 'DL: AP31 20120004523, Heavy Transport Commercial', status: 'Active' },
              { code: 'DRV-02', name: 'S. Koteswara Rao', details: 'DL: AP39 20180009841, Insulated Truck Certified', status: 'Active' }
            ])
          },
          {
            id: 'vehicle-list',
            label: 'Vehicle List',
            records: getRecords('vehicle-list', [
              { code: 'VEH-AP31-TT', name: 'AP 31 TT 4452 (Reefer Truck 10T)', details: 'Carrier Transicold Unit, GPS Tracked, Temp Logger', status: 'Active' },
              { code: 'VEH-AP39-TX', name: 'AP 39 TX 7810 (Insulated Harvest Van 6T)', details: 'Fiberglass insulated tub body, Slurry Ice Equipped', status: 'Active' }
            ])
          },
          {
            id: 'yields',
            label: 'Yields',
            records: getRecords('yields', [
              { code: 'YLD-HLSO', name: 'Head-On to Headless Shell-On Yield Target', details: 'Standard: 65.5% - 67.2% | Tolerance ±0.5%', status: 'Active' },
              { code: 'YLD-PDTO', name: 'Head-On to Peeled & Deveined Tail-On', details: 'Standard: 51.5% - 53.0% | Tolerance ±0.8%', status: 'Active' }
            ])
          },
          {
            id: 'vm-rates-2',
            label: 'VM Rates 2',
            records: getRecords('vm-rates-2', [
              { code: 'VMR-30C', name: 'Vannamei Spot Procurement: 30 Count', details: 'Base: ₹440/kg | Premium for BAP 4-Star Certified', status: 'Active' },
              { code: 'VMR-40C', name: 'Vannamei Spot Procurement: 40 Count', details: 'Base: ₹380/kg | Standard Farm Gate Price', status: 'Active' },
              { code: 'VMR-50C', name: 'Vannamei Spot Procurement: 50 Count', details: 'Base: ₹325/kg | Grade A Clean Harvest', status: 'Active' }
            ])
          },
          {
            id: 'master-counts',
            label: 'Master Counts',
            records: getRecords('master-counts', [
              { code: 'CNT-1620', name: '16/20 Pieces per Pound (Pcs/Lb)', details: 'Piece weight: 22.7g - 28.3g | Jumbo Grade', status: 'Active' },
              { code: 'CNT-2125', name: '21/25 Pieces per Pound (Pcs/Lb)', details: 'Piece weight: 18.1g - 21.6g | Extra Large', status: 'Active' },
              { code: 'CNT-2630', name: '26/30 Pieces per Pound (Pcs/Lb)', details: 'Piece weight: 15.1g - 17.5g | Large', status: 'Active' },
              { code: 'CNT-3140', name: '31/40 Pieces per Pound (Pcs/Lb)', details: 'Piece weight: 11.3g - 14.6g | Medium Large', status: 'Active' }
            ])
          }
        ]
      },

      // 4. Preprocessing Module
      {
        id: 'preprocessing',
        title: 'Preprocessing',
        icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879a3 3 0 11-4.242-4.242L10.5 8.5"/></svg>',
        submasters: [
          {
            id: 'supervisor',
            label: 'Supervisor',
            records: getRecords('supervisor', [
              { code: 'SUP-01', name: 'D. Srinivas Rao', details: 'Receiving, De-heading & Washing Hall Manager', status: 'Active' },
              { code: 'SUP-02', name: 'G. Lakshmi Prasanna', details: 'Peeled & Deveined Line Quality Supervisor', status: 'Active' }
            ])
          },
          {
            id: 'hl-va-variety-list',
            label: 'Hl Va Variety List',
            records: getRecords('hl-va-variety-list', [
              { code: 'HLVA-01', name: 'Vannamei Easy-Peel Butterfly Cut', details: 'Deep slit back, vein removed, tail shell retained', status: 'Active' },
              { code: 'HLVA-02', name: 'Vannamei Skewered Nobashi Tail-On', details: 'Stretched 13-15cm, tendon cut, tempura ready', status: 'Active' },
              { code: 'HLVA-03', name: 'Vannamei Marinated Garlic Herb Skewers', details: '4 pieces on bamboo stick, frozen retail vacuum pack', status: 'Active' }
            ])
          },
          {
            id: 'chemicals-master',
            label: 'Chemicals Master',
            records: getRecords('chemicals-master', [
              { code: 'CHM-STPP', name: 'Sodium Tripolyphosphate (STPP) Food Grade', details: 'FCC / E451 standard, Moisture retention agent', status: 'Active' },
              { code: 'CHM-NONPHOS', name: 'Non-Phosphate Moisture Retaining Blend', details: 'Sodium bicarbonate + Citric acid certified formulation', status: 'Active' },
              { code: 'CHM-CLO2', name: 'Chlorine Dioxide Sanitizing Flakes', details: '50 ppm water disinfection in chill tank wash', status: 'Active' }
            ])
          },
          {
            id: 'chemicals-suppliers-list',
            label: 'Chemicals SuppliersList',
            records: [
              { code: 'SUP-CHM-01', name: 'Prayon Phosphate Solutions India', details: 'ISO 9001 certified supplier of high-purity STPP | Mumbai', status: 'Active' },
              { code: 'SUP-CHM-02', name: 'Aditya Birla Chemicals (Food Additives)', details: 'Non-phosphate seafood texturizer mixtures | Renukoot', status: 'Active' },
              { code: 'SUP-CHM-03', name: 'Chemours Sanitech Systems India', details: 'Chlorine dioxide and ozone sanitation equipment | Chennai', status: 'Active' }
            ]
          },
          {
            id: 'chemicals-buyers-list',
            label: 'Chemicals BuyersList',
            records: [
              { code: 'BYR-CHM-01', name: 'Devi Fisheries Autonagar Unit 1 In-House', details: 'Internal transfer requisition: STPP 4.5 MT/month', status: 'Active' },
              { code: 'BYR-CHM-02', name: 'Devi Singarayakonda Unit 2 Processing Hall', details: 'Internal transfer requisition: Non-Phos 3.0 MT/month', status: 'Active' },
              { code: 'BYR-CHM-03', name: 'Nellore Shrimp Pre-processing Contract Unit', details: 'Authorized partner allocation under strict QC signoff', status: 'Active' }
            ]
          }
        ]
      },

      // 5. Quality Control Module
      {
        id: 'qc',
        title: 'Quality Control',
        icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
        submasters: [
          {
            id: 'traceability',
            label: 'Traceability',
            records: getRecords('traceability', [
              { code: 'TRC-BAP', name: 'BAP 4-Star End-to-End Chain of Custody', details: 'Hatchery -> Farm -> Feed Mill -> Processing Plant -> Cold Store', status: 'Active' },
              { code: 'TRC-ASC', name: 'ASC Chain of Custody (MSC-C-54129)', details: 'Strict segregation, non-GMO verified traceability', status: 'Active' }
            ])
          },
          {
            id: 'lab-users-list',
            label: 'LabUsersList',
            records: getRecords('lab-users-list', [
              { code: 'LAB-USR-01', name: 'Dr. T. Haritha (Microbiologist)', details: 'NABL Certified, LC-MS/MS & ELISA Senior Analyst', status: 'Active' },
              { code: 'LAB-USR-02', name: 'B. Ravindra (Chemist)', details: 'Heavy metals (ICP-MS) & Nitrofurans Screening lead', status: 'Active' }
            ])
          },
          {
            id: 'lab-analysis-list',
            label: 'Lab Analysis List',
            records: getRecords('lab-analysis-list', [
              { code: 'LBA-ELISA', name: 'ELISA Screening: Chloramphenicol & Nitrofurans', details: 'Limit of Detection: 0.1 ppb | Fast turnaround 3 hrs', status: 'Active' },
              { code: 'LBA-LCMS', name: 'LC-MS/MS Confirmatory Antibiotic Screen', details: 'AOZ, AMOZ, AHD, SEM, Tetracyclines, Quinolones', status: 'Active' },
              { code: 'LBA-MICRO', name: 'Standard Microbial Panel (TPC, E.coli, Salmonella)', details: 'ISO 4833 & ISO 6579 compliant bacteriology', status: 'Active' }
            ])
          },
          {
            id: 'external-lab-names',
            label: 'External Lab Names',
            records: getRecords('external-lab-names', [
              { code: 'EXT-EIC', name: 'Export Inspection Agency (EIA) Central Lab', details: 'NABL Accr: TC-5512, Government Regulatory Body, Vizag', status: 'Active' },
              { code: 'EXT-SGS', name: 'SGS India Testing Laboratory - Cochin', details: 'NABL Accr: TC-6029, Third Party International Inspection', status: 'Active' },
              { code: 'EXT-EUR', name: 'Eurofins Analytical Services India - Bangalore', details: 'Global reference lab for PFAS, Microplastics & Antibiotics', status: 'Active' }
            ])
          },
          {
            id: 'audit-categories-list',
            label: 'Audit Categories List',
            records: [
              { code: 'AUD-CAT-BIO', name: 'Biological Hazard & Pathogen Controls', details: 'Listeria, Salmonella, Vibrio cholerae & parahaemolyticus audits', status: 'Active' },
              { code: 'AUD-CAT-SAN', name: 'Sanitation Standard Operating Procedures (SSOP)', details: '8 key sanitation conditions monitored across each 8-hour shift', status: 'Active' },
              { code: 'AUD-CAT-GMP', name: 'Good Manufacturing Practices (GMP)', details: 'Facility infrastructure, personnel hygiene, water & air quality', status: 'Active' },
              { code: 'AUD-CAT-SOC', name: 'Social Accountability & Ethical Sourcing', details: 'SMETA / SEDEX Pillar 4 human rights & workplace safety audit', status: 'Active' }
            ]
          },
          {
            id: 'audit-categories-options-list',
            label: 'Audit Categories Options List',
            records: [
              { code: 'ACO-MANDATORY', name: 'Mandatory Critical Non-Conformance (Stop Line)', details: 'Zero tolerance: immediate batch quarantine & root cause RCA', status: 'Active' },
              { code: 'ACO-MAJOR', name: 'Major Non-Conformance (24h Rectification)', details: 'Corrective action plan required within 24 hours of finding', status: 'Active' },
              { code: 'ACO-MINOR', name: 'Minor Non-Conformance (Continuous Improvement)', details: 'Resolved during routine maintenance or next scheduled review', status: 'Active' }
            ]
          },
          {
            id: 'audit-dropdown-master',
            label: 'Audit Dropdown Master',
            records: [
              { code: 'ADM-RESULT', name: 'Audit Finding Disposition Statuses', details: 'Options: Pass, Conditional Pass, Fail, Re-audit Required', status: 'Active' },
              { code: 'ADM-SCOPE', name: 'Audit Scope Boundary Definitions', details: 'Options: Receiving Dock, Processing Floor, Cold Store, Dispatch', status: 'Active' },
              { code: 'ADM-FREQ', name: 'Audit Frequency Interval Presets', details: 'Options: Daily Pre-op, Weekly SSOP, Monthly Internal, Annual BRCGS', status: 'Active' }
            ]
          },
          {
            id: 'farms-list',
            label: 'Farms List',
            records: getRecords('farms-list', [
              { code: 'FRM-CAA-01', name: 'Bapatla Aqua Farm Cluster #4', details: 'CAA Reg: AP-BPT-2018-882, Area: 45 Ha, BAP 4★ Certified', status: 'Active' },
              { code: 'FRM-CAA-02', name: 'Kavali Coastal Shrimp Ponds Unit 2', details: 'CAA Reg: AP-NLR-2020-1194, Area: 60 Ha, ASC Certified', status: 'Active' }
            ])
          },
          {
            id: 'certification-body-list',
            label: 'Certification Body List',
            records: getRecords('certification-body-list', [
              { code: 'CB-BAP', name: 'Global Seafood Alliance (BAP)', details: 'Category: Aquaculture BAP 4-Star Certified Entity', status: 'Active' },
              { code: 'CB-BRCGS', name: 'BRCGS Global Standard for Food Safety (Issue 9)', details: 'Auditor: DNV GL Business Assurance, Grade: AA+', status: 'Active' }
            ])
          },
          {
            id: 'hatchery-list',
            label: 'Hatchery List',
            records: getRecords('hatchery-list', [
              { code: 'HAT-01', name: 'Devi Aquatech Broodstock Multiplication Center', details: 'CAA Reg: HAT-AP-012, SPF Broodstock imported from Hawaii', status: 'Active' },
              { code: 'HAT-02', name: 'Golden Marine Hatcheries - Marakkanam', details: 'CAA Reg: HAT-TN-045, High-health PL-10 Vannamei Seed', status: 'Active' }
            ])
          }
        ]
      },

      // 6. Inventory Module
      {
        id: 'inventory',
        title: 'Inventory',
        icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
        submasters: [
          {
            id: 'vendors-master',
            label: 'Vendors Master',
            records: [
              { code: 'VND-PKG-01', name: 'Universal Corrugators & Packaging Ltd', details: 'Master export 5-ply cartons & inner wax duplex boxes | Chennai', status: 'Active' },
              { code: 'VND-POLY-02', name: 'Apex Polymers Food Grade Films Pvt Ltd', details: 'Printed laminated LDPE pouch film (FDA compliant) | Hyderabad', status: 'Active' },
              { code: 'VND-SAN-03', name: 'Diversey Hygiene India Private Ltd', details: 'CIP detergents, quaternary ammonium sanitizers | Mumbai', status: 'Active' },
              { code: 'VND-ICE-04', name: 'Coastal Tube Ice & Refrigeration Spares', details: 'Food grade potable tube ice & cold room evaporator parts | Vizag', status: 'Active' }
            ]
          },
          {
            id: 'general-items',
            label: 'General Items',
            records: [
              { code: 'ITM-GLV-01', name: 'Nitrile Food Handling Gloves (Powder-Free)', details: 'Blue color, Size M & L, Thickness 4 mil, Box of 100 pcs', status: 'Active' },
              { code: 'ITM-APR-02', name: 'Waterproof Polyurethane Protective Aprons', details: 'Heavy duty, chemical resistant, White, 120cm length', status: 'Active' },
              { code: 'ITM-BOOT-03', name: 'Steel Toe Gum Boots for Cold Processing', details: 'Anti-skid sole, white PVC, Sizes 7 to 11', status: 'Active' },
              { code: 'ITM-STRAP-04', name: 'Automatic Box Strapping Band Rolls (12mm)', details: 'Virgin PP, Tensile strength 120 kg, 3000m roll', status: 'Active' }
            ]
          },
          {
            id: 'brands-master',
            label: 'Brands Master',
            records: [
              { code: 'BRD-VOL', name: 'Volida (Devi Premium International Brand)', details: 'Flagship IQF & block brand for North America & Japan retail', status: 'Active' },
              { code: 'BRD-DEV', name: 'Devi Royal Seafoods', details: 'Commercial wholesale brand for European foodservice distributors', status: 'Active' },
              { code: 'BRD-SEA', name: 'Sea Fresh Harvest', details: 'Domestic supermarket chain frozen shrimp retail packs', status: 'Active' },
              { code: 'BRD-CUST', name: 'Custom Private Label Packaging', details: 'Buyer proprietary cartons (Kroger, Sysco, Walmart private labels)', status: 'Active' }
            ]
          },
          {
            id: 'departments-master',
            label: 'Departments Master',
            records: getRecords('departments-master', [
              { code: 'DPT-PRC', name: 'Seafood Processing & Production', details: 'Autonagar Main Plant, 4 processing lines', status: 'Active' },
              { code: 'DPT-ENG', name: 'Engineering & Cold Chain Maintenance', details: 'Refrigeration, power sub-station, STP operations', status: 'Active' },
              { code: 'DPT-QAQC', name: 'Quality Assurance & Microbiology Labs', details: 'Testing, antibiotic screening, export certifications', status: 'Active' }
            ])
          },
          {
            id: 'prices-master',
            label: 'Prices Master',
            records: [
              { code: 'PRC-CART-10', name: '10 kg Master Outer Carton Standard Unit Price', details: 'Contract rate: ₹48.50 per carton | Universal Corrugators', status: 'Active' },
              { code: 'PRC-POUCH-2L', name: '2 lb Retail Printed Pouch Unit Price', details: 'Contract rate: ₹6.20 per pouch | Apex Polymers', status: 'Active' },
              { code: 'PRC-ICE-MT', name: 'Food Grade Potable Tube Ice Bulk Rate', details: 'Rate: ₹1,400 per Metric Ton delivered to receiving dock', status: 'Active' }
            ]
          },
          {
            id: 'gst-master',
            label: 'Gst Master',
            records: getRecords('gst-master', [
              { code: 'GST-00', name: '0% Nil Rated - Fresh & Chilled Aquaculture Harvest', details: 'HSN 0306: Unprocessed fresh farm shrimp', status: 'Active' },
              { code: 'GST-05', name: '5% GST - Frozen Shrimp in Unit Containers', details: 'HSN 030617: Frozen shrimp blocks & retail IQF bags', status: 'Active' },
              { code: 'GST-12', name: '12% GST - Prepared / Preserved Seafood Items', details: 'HSN 160521: Marinated, breaded, cooked shrimp preparations', status: 'Active' },
              { code: 'GST-18', name: '18% GST - Packaging Material, STPP & Chemicals', details: 'HSN 4819 / 2835: Corrugated cartons & food-grade additives', status: 'Active' }
            ])
          }
        ]
      }
    ];
  },

  renderSettingsTabs(activeTab = 'masters') {
    return this.renderAdminSettingsTabs(activeTab);
  },

  renderMasterSetupTab(container, tabsBarHtml = null) {
    this.initMasterData();
    this.cachedTabsBarHtml = tabsBarHtml || this.cachedTabsBarHtml || this.renderAdminSettingsTabs('masters');
    const effectiveTabsBar = this.cachedTabsBarHtml;

    // Find active module (default to 'coldstore' if none active)
    const activeModule = this.moduleMastersData.find(m => m.id === this.activeMasterModule) || this.moduleMastersData[0];
    const currentSubmasterId = this.selectedSubmasterByModule[activeModule.id] || activeModule.submasters[0].id;
    const currentSubmaster = activeModule.submasters.find(sm => sm.id === currentSubmasterId) || activeModule.submasters[0];

    // Filter records by search query and status
    const q = (this.masterSearchQuery || '').toLowerCase().trim();
    const statusFilter = this.masterStatusFilter || 'All';
    const filteredRecords = (currentSubmaster.records || []).filter(r => {
      const matchesStatus = (statusFilter === 'All') || (r.status === statusFilter);
      if (!matchesStatus) return false;
      if (!q) return true;
      return (
        (r.code && r.code.toLowerCase().includes(q)) ||
        (r.name && r.name.toLowerCase().includes(q)) ||
        (r.details && r.details.toLowerCase().includes(q))
      );
    });

    container.innerHTML = `
      <div class="space-y-4">
        ${effectiveTabsBar}

        <!-- Page Header (Clean H1, strictly no subheading per AGENTS.md Rule 2) -->
        <div class="flex items-center justify-between gap-3 mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Master Setup</h1>
        </div>

        <!-- Module Accordions Container -->
        <div class="space-y-3" id="masters-accordion-group">
          ${this.moduleMastersData.map(mod => {
            const isExpanded = this.activeMasterModule === mod.id;

            return `
              <div class="master-accordion-card bg-white rounded-xl border border-[#DFE1E6] overflow-hidden shadow-2xs transition-all duration-200">
                <!-- Accordion Header Row -->
                <div 
                  class="master-accordion-header w-full p-3 flex items-center justify-between transition-colors cursor-pointer select-none bg-white hover:bg-[#F8FAFC] ${isExpanded ? 'border-b border-[#DFE1E6]' : ''}"
                  data-module-id="${mod.id}"
                >
                  <!-- Left: Icon + Module Title + Sub Master Dropdown (immediately after Title) -->
                  <div class="flex items-center gap-4 flex-wrap">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors duration-200 ${isExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#00A4B7]'}">
                        ${mod.icon}
                      </div>
                      <span class="font-extrabold text-[#172B4D] text-sm tracking-tight">${mod.title} Masters</span>
                    </div>

                    ${isExpanded ? `
                      <div class="submaster-dropdown-container flex items-center gap-2" onclick="event.stopPropagation()">
                        <label for="submaster-select-${mod.id}" class="text-xs font-bold text-[#5E6C84] whitespace-nowrap uppercase tracking-wider">Sub Master:</label>
                        <select id="submaster-select-${mod.id}" data-module-id="${mod.id}" class="submaster-dropdown-select text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] min-w-[240px] shadow-2xs">
                          ${mod.submasters.map(sm => `<option value="${sm.id}" ${sm.id === currentSubmaster.id ? 'selected' : ''}>${sm.label} (${sm.records.length})</option>`).join('')}
                        </select>
                      </div>
                    ` : ''}
                  </div>

                  <!-- Right: Chevron on far right -->
                  <div class="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${isExpanded ? 'bg-[#00A4B7] text-white' : 'bg-[#F1F5F9] text-[#64748B]'}">
                    <svg class="w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>

                <!-- Accordion Body -->
                ${isExpanded ? `
                  <div class="master-accordion-body m-0 p-4 bg-[#daedef] space-y-3.5 border-t border-[#DFE1E6] animate-accordion-expand" style="margin: 0 !important; background-color: #daedef !important;">
                    <!-- Search & Filter Card (AGENTS.md Rule 3) -->
                    <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs transition-all duration-200">
                      <div class="flex items-center justify-between pb-1">
                        <div class="flex items-center gap-2">
                          <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
                          <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters — ${currentSubmaster.label}</h3>
                        </div>
                        <div class="inline-flex items-center gap-2">
                          <!-- Circular 32x32 Reset Button -->
                          <button type="button" id="master-filter-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                          </button>
                          <!-- Circular 32x32 Collapse/Expand Toggle Button -->
                          <button type="button" id="master-filter-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                            <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                          </button>
                        </div>
                      </div>
                      <div id="master-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
                        <div>
                          <label for="master-search-input" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Search Keywords</label>
                          <input type="text" id="master-search-input" value="${this.escape(this.masterSearchQuery || '')}" placeholder="Search code, name, specifications..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                        </div>
                        <div>
                          <label for="master-status-select" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Record Status</label>
                          <select id="master-status-select" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                            <option value="All" ${this.masterStatusFilter === 'All' ? 'selected' : ''}>All Statuses</option>
                            <option value="Active" ${this.masterStatusFilter === 'Active' ? 'selected' : ''}>Active</option>
                            <option value="Inactive" ${this.masterStatusFilter === 'Inactive' ? 'selected' : ''}>Inactive</option>
                          </select>
                        </div>
                        <div class="flex items-end">
                          <button type="button" id="master-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            <span>Search</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Header Row with Add Record Button -->
                    <div class="flex items-center justify-between gap-3 pt-1">
                      <div class="flex items-center gap-2">
                        <span class="font-extrabold text-[#172B4D] text-sm tracking-tight">${currentSubmaster.label}</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${filteredRecords.length} Records</span>
                      </div>
                      <button type="button" id="btn-add-master-record" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                        <span>Add Record</span>
                      </button>
                    </div>

                    <!-- DataTable Container -->
                    <div id="master-records-table-container"></div>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Bind Accordion Header Clicks: Ensure strictly ONE is open at a time with smooth transition
    const headerBtns = container.querySelectorAll('.master-accordion-header');
    headerBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Prevent toggle if clicking inside the submaster select dropdown or its label
        if (e.target.closest('.submaster-dropdown-container') || e.target.tagName === 'SELECT' || e.target.tagName === 'OPTION') {
          return;
        }
        const modId = btn.dataset.moduleId;
        this.activeMasterModule = (this.activeMasterModule === modId) ? null : modId;
        this.masterSearchQuery = '';
        this.masterStatusFilter = 'All';
        this.renderMasterSetupTab(container, this.cachedTabsBarHtml);
      });
    });

    // If an accordion is expanded, bind its inner controls
    if (this.activeMasterModule && currentSubmaster) {
      // Bind Submaster Dropdown Select
      const submasterSelect = container.querySelector('.submaster-dropdown-select');
      submasterSelect?.addEventListener('change', (e) => {
        e.stopPropagation();
        const modId = submasterSelect.dataset.moduleId;
        const subId = submasterSelect.value;
        this.selectedSubmasterByModule[modId] = subId;
        this.masterSearchQuery = '';
        this.renderMasterSetupTab(container, this.cachedTabsBarHtml);
      });
      submasterSelect?.addEventListener('click', (e) => e.stopPropagation());

      // Filter toggle handler
      const toggleBtn = document.getElementById('master-filter-toggle-btn');
      toggleBtn?.addEventListener('click', () => {
        const body = document.getElementById('master-filter-body');
        const icon = toggleBtn.querySelector('svg');
        if (body) {
          body.classList.toggle('hidden');
          if (body.classList.contains('hidden')) {
            toggleBtn.title = 'Show Filter';
            icon?.classList.add('-rotate-90');
          } else {
            toggleBtn.title = 'Hide Filter';
            icon?.classList.remove('-rotate-90');
          }
        }
      });

      // Filter reset handler
      const resetBtn = document.getElementById('master-filter-reset-btn');
      resetBtn?.addEventListener('click', () => {
        this.masterSearchQuery = '';
        this.masterStatusFilter = 'All';
        this.renderMasterSetupTab(container, this.cachedTabsBarHtml);
        Toast.show('Filters reset', 'info');
      });

      // Search button handler
      const searchBtn = document.getElementById('master-filter-search-btn');
      searchBtn?.addEventListener('click', () => {
        const searchInput = document.getElementById('master-search-input');
        const statusSelect = document.getElementById('master-status-select');
        this.masterSearchQuery = searchInput ? searchInput.value : '';
        this.masterStatusFilter = statusSelect ? statusSelect.value : 'All';
        this.renderMasterSetupTab(container, this.cachedTabsBarHtml);
      });

      // Search input Enter key handler
      const searchInput = document.getElementById('master-search-input');
      searchInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const statusSelect = document.getElementById('master-status-select');
          this.masterSearchQuery = searchInput.value;
          this.masterStatusFilter = statusSelect ? statusSelect.value : 'All';
          this.renderMasterSetupTab(container, this.cachedTabsBarHtml);
        }
      });

      // Add Record button handler
      const addRecordBtn = document.getElementById('btn-add-master-record');
      addRecordBtn?.addEventListener('click', () => {
        this.showAddMasterModal(currentSubmaster, container);
      });

      // Render DataTable strictly following AGENTS.md Rule 4
      new DataTable({
        containerId: 'master-records-table-container',
        data: filteredRecords,
        keyField: 'code',
        tableTitle: `${currentSubmaster.label} (${filteredRecords.length})`,
        hideToolbar: true,
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          {
            field: 'code',
            header: 'Code / ID',
            render: (v) => `<span class="font-bold text-[#00A4B7] font-mono">${this.escape(v)}</span>`
          },
          {
            field: 'name',
            header: 'Name / Entity Description',
            render: (v) => `<span class="font-bold text-[#172B4D]">${this.escape(v)}</span>`
          },
          {
            field: 'details',
            header: 'Details / Specifications',
            render: (v) => `<span class="text-xs text-[#5E6C84]">${this.escape(v || '-')}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            render: (v) => `<span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase ${(v === 'Inactive' || v === 'Disabled') ? 'bg-[#FFEBE6] text-[#DE350B] border border-[#FFBDAD]' : 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]'}">${this.escape(v || 'Active')}</span>`
          }
        ],
        actions: [
          {
            label: 'Edit',
            icon: '<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>',
            onClick: (row) => this.showEditMasterModal(currentSubmaster, row, container)
          },
          {
            label: 'Delete',
            icon: '<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',
            onClick: (row) => {
              Modal.confirm({
                title: `Delete ${currentSubmaster.label} Record`,
                message: `Are you sure you want to delete <strong class="text-[#DE350B]">${this.escape(row.name)}</strong> (${this.escape(row.code)})? This action cannot be undone.`,
                confirmText: 'Delete Record',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = currentSubmaster.records.findIndex(r => r.code === row.code);
                  if (idx !== -1) {
                    currentSubmaster.records.splice(idx, 1);
                    this.renderMasterSetupTab(container, this.cachedTabsBarHtml);
                    Toast.show(`Record ${row.code} deleted successfully`, 'success');
                  }
                }
              });
            }
          }
        ]
      });
    }
  },

  showAddMasterModal(selectedMaster, container) {
    const defaultCode = `${selectedMaster.id.substring(0, 3).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    Modal.open({
      title: `Add ${selectedMaster.label} Record`,
      size: 'xl',
      content: `
        <form id="form-add-master-rec" class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label for="mrec-code" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Code / Identifier <span class="text-[#DE350B]">*</span></label>
            <input type="text" id="mrec-code" name="code" value="${defaultCode}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
            <div class="flex items-center h-[32px]">
              <label class="inline-flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" id="mrec-status-cb" class="w-4 h-4 rounded text-[#00A4B7] accent-[#00A4B7] cursor-pointer" checked />
                <span id="mrec-status-label" class="text-xs font-semibold text-[#172B4D]">Active</span>
              </label>
            </div>
          </div>
          <div>
            <label for="mrec-name" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Name / Entity Description <span class="text-[#DE350B]">*</span></label>
            <input type="text" id="mrec-name" name="name" required placeholder="e.g. Master record name..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label for="mrec-details" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Configuration &amp; Details</label>
            <textarea id="mrec-details" name="details" rows="2" placeholder="Enter configuration metadata, address, or specifications..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs"></textarea>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: (m) => m.close()
        },
        {
          label: 'Save Record',
          type: 'primary',
          class: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: (m) => {
            const form = document.getElementById('form-add-master-rec');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));
            const status = document.getElementById('mrec-status-cb')?.checked ? 'Active' : 'Inactive';

            selectedMaster.records.unshift({
              code: values.code.trim(),
              name: values.name.trim(),
              details: values.details.trim(),
              status
            });
            selectedMaster.count = selectedMaster.records.length;

            m.close();
            this.renderMasterSetupTab(container);
            Toast.show(`Added record ${values.code} to ${selectedMaster.label}`, 'success');
          }
        }
      ]
    });

    setTimeout(() => {
      const cb = document.getElementById('mrec-status-cb');
      const lbl = document.getElementById('mrec-status-label');
      cb?.addEventListener('change', () => {
        if (lbl) lbl.textContent = cb.checked ? 'Active' : 'Inactive';
      });
    }, 0);
  },

  showEditMasterModal(selectedMaster, record, container) {
    Modal.open({
      title: `Edit ${selectedMaster.label} - ${record.code}`,
      size: 'xl',
      content: `
        <form id="form-edit-master-rec" class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Code / Identifier</label>
            <input type="text" value="${this.escape(record.code)}" disabled class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#5E6C84] cursor-not-allowed shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
            <div class="flex items-center h-[32px]">
              <label class="inline-flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" id="emrec-status-cb" class="w-4 h-4 rounded text-[#00A4B7] accent-[#00A4B7] cursor-pointer" ${record.status === 'Active' ? 'checked' : ''} />
                <span id="emrec-status-label" class="text-xs font-semibold text-[#172B4D]">${record.status === 'Active' ? 'Active' : 'Inactive'}</span>
              </label>
            </div>
          </div>
          <div>
            <label for="emrec-name" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Name / Entity Description <span class="text-[#DE350B]">*</span></label>
            <input type="text" id="emrec-name" name="name" value="${this.escape(record.name)}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label for="emrec-details" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Configuration &amp; Details</label>
            <textarea id="emrec-details" name="details" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${this.escape(record.details || '')}</textarea>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer',
          onClick: (m) => m.close()
        },
        {
          label: 'Save Changes',
          type: 'primary',
          class: 'btn-primary px-5 py-2 rounded-full text-xs font-bold shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer',
          onClick: (m) => {
            const form = document.getElementById('form-edit-master-rec');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));
            const status = document.getElementById('emrec-status-cb')?.checked ? 'Active' : 'Inactive';

            Object.assign(record, {
              name: values.name.trim(),
              details: values.details.trim(),
              status
            });

            m.close();
            this.renderMasterSetupTab(container);
            Toast.show(`Updated record ${record.code}`, 'success');
          }
        }
      ]
    });

    setTimeout(() => {
      const cb = document.getElementById('emrec-status-cb');
      const lbl = document.getElementById('emrec-status-label');
      cb?.addEventListener('change', () => {
        if (lbl) lbl.textContent = cb.checked ? 'Active' : 'Inactive';
      });
    }, 0);
  },
  escape(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
};
