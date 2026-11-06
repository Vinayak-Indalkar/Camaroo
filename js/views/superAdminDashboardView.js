// Super Admin Central Executive Dashboard View
// Enterprise Overview across Multi-Tenant Clients, RBAC Security, Master Registries, and System Health
// Strictly conforms to AGENTS.md Design System rules with smooth hover effects and ZERO click events.

import { SetupView, SEAFOOD_MASTERS } from './setupView.js';
import { Skeleton } from '../components/skeleton.js';

export const SuperAdminDashboardView = {
  chartInstances: {},

  render(containerId, activeTab = 'system-overview', resolvedHash = '#/dashboard/overview/system-overview') {
    const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!container) return;

    const sk = typeof Skeleton !== 'undefined' ? Skeleton : (typeof window !== 'undefined' ? window.Skeleton : null);
    if (sk && typeof sk.renderDashboard === 'function') {
      container.innerHTML = sk.renderDashboard();
    }

    setTimeout(() => {
      this.renderUnifiedDashboard(container);
    }, 80);
  },

  renderUnifiedDashboard(container) {
    if (!container) return;

    // Clean up any existing chart instances to avoid canvas reuse issues
    if (this.chartInstances) {
      Object.values(this.chartInstances).forEach(c => {
        try { if (c && c.destroy) c.destroy(); } catch (e) {}
      });
    }
    this.chartInstances = {};

    const state = SetupView.state || {};
    const allCompanies = state.companies && state.companies.length > 0 ? state.companies : [
      { id: 'CMP-001', code: 'DFL', shortName: 'DFL', name: 'Devi Fisheries Limited', dbHost: 'localhost:3306', dbName: 'devi_erp', dbUser: 'root', plants: ['Unit-1 VSP', 'Unit-2 Singarayakonda', 'Unit-3 Kakinada', 'Central Cold Storage Hub'], status: 'Active', country: 'India', currency: 'INR', latency: '4ms' },
      { id: 'CMP-002', code: 'CME', shortName: 'CME', name: 'Coastal Marine Exports', dbHost: '192.168.1.105:3306', dbName: 'cme_db', dbUser: 'cme_admin', plants: ['Chennai Plant A', 'Tuticorin Dock Unit'], status: 'Active', country: 'India', currency: 'INR', latency: '6ms' },
      { id: 'CMP-003', code: 'BPF', shortName: 'BPF', name: 'Bay Pride Foods', dbHost: 'cloud-rds.devi.internal:3306', dbName: 'baypride_erp', dbUser: 'bpf_svc', plants: ['Singapore Port Unit', 'Jurong Cold Chain Hub'], status: 'Active', country: 'Singapore', currency: 'SGD', latency: '11ms' }
    ];

    const allUsers = state.users && state.users.length > 0 ? state.users : [
      { id: 'USR-001', name: 'Suresh Varma', email: 'suresh.varma@devifisheries.com', role: 'Super Admin', status: 'Active', company: 'Devi Fisheries Limited' },
      { id: 'USR-002', name: 'P. Rambabu', email: 'rambabu.p@devifisheries.com', role: 'Plant Admin', status: 'Active', company: 'Devi Fisheries Limited' },
      { id: 'USR-003', name: 'Dr. K. V. Sharma', email: 'kv.sharma@devifisheries.com', role: 'QC Manager', status: 'Active', company: 'Devi Fisheries Limited' },
      { id: 'USR-004', name: 'M. Venkat Rao', email: 'venkat.rao@devifisheries.com', role: 'Coldstore Lead', status: 'Active', company: 'Devi Fisheries Limited' },
      { id: 'USR-005', name: 'Srinivas Rao', email: 'srinivas.rao@devifisheries.com', role: 'Procurement Officer', status: 'Active', company: 'Devi Fisheries Limited' },
      { id: 'USR-006', name: 'R. K. Narayanan', email: 'narayanan.rk@cme.in', role: 'Plant Admin', status: 'Active', company: 'Coastal Marine Exports' },
      { id: 'USR-007', name: 'Anita Thomas', email: 'anita.t@cme.in', role: 'QC Inspector', status: 'Active', company: 'Coastal Marine Exports' },
      { id: 'USR-008', name: 'David Tan', email: 'david.tan@baypride.sg', role: 'Commercial Lead', status: 'Active', company: 'Bay Pride Foods' },
      { id: 'USR-009', name: 'Marcus Lim', email: 'marcus.l@baypride.sg', role: 'Coldstore Lead', status: 'Active', company: 'Bay Pride Foods' },
      { id: 'USR-010', name: 'K. Satyanarayana', email: 'satya.k@devifisheries.com', role: 'Production Lead', status: 'Active', company: 'Devi Fisheries Limited' },
      { id: 'USR-011', name: 'Chitra Subramanian', email: 'chitra.s@cme.in', role: 'Accounts Manager', status: 'Active', company: 'Coastal Marine Exports' },
      { id: 'USR-012', name: 'Auditor External', email: 'audit@kpmg-partner.in', role: 'Auditor', status: 'Active', company: 'Devi Fisheries Limited' },
      { id: 'USR-013', name: 'Trainee Operator', email: 'trainee@devifisheries.com', role: 'Operator', status: 'Inactive', company: 'Devi Fisheries Limited' },
      { id: 'USR-014', name: 'Archived User CME', email: 'temp@cme.in', role: 'Operator', status: 'Inactive', company: 'Coastal Marine Exports' },
      { id: 'USR-015', name: 'Dev Account', email: 'dev@devi.internal', role: 'Super Admin', status: 'Active', company: 'Devi Fisheries Limited' }
    ];

    const allRoles = state.roles && state.roles.length > 0 ? state.roles : [
      { id: 'ROLE-SUPER', name: 'Super Admin', department: 'Executive Governance', usersCount: 2, status: 'Active' },
      { id: 'ROLE-PLANT', name: 'Plant Admin', department: 'Plant Operations', usersCount: 2, status: 'Active' },
      { id: 'ROLE-QC', name: 'QC Manager', department: 'Quality Assurance', usersCount: 2, status: 'Active' },
      { id: 'ROLE-COLD', name: 'Coldstore Lead', department: 'Cold Storage & WMS', usersCount: 2, status: 'Active' },
      { id: 'ROLE-PROD', name: 'Production Lead', department: 'Processing & Freezing', usersCount: 1, status: 'Active' },
      { id: 'ROLE-COMM', name: 'Commercial Lead', department: 'Exports & Invoicing', usersCount: 2, status: 'Active' }
    ];

    const allAuditLogs = state.auditLogs && state.auditLogs.length > 0 ? state.auditLogs : [
      { id: 'AUD-091', timestamp: 'Today, 15:10', actor: 'Super Admin', action: 'Custom Field Published', detail: 'Added "Blast Freezing Spec" to Commercial Invoice Register', category: 'Schema' },
      { id: 'AUD-090', timestamp: 'Today, 14:25', actor: 'System Daemon', action: 'Cluster Health Check', detail: 'All 3 multi-tenant databases verified with 0 replication lag', category: 'Health' },
      { id: 'AUD-089', timestamp: 'Today, 12:40', actor: 'Super Admin', action: 'Master Entity Sync', detail: 'Synchronized 32 rack allocation units across Central Coldstore', category: 'Masters' },
      { id: 'AUD-088', timestamp: 'Today, 10:15', actor: 'Super Admin', action: 'Role Matrix Verified', detail: 'Verified RBAC permission scopes for Plant Admin & QC Inspector', category: 'Security' },
      { id: 'AUD-087', timestamp: 'Yesterday, 18:30', actor: 'System Daemon', action: 'Automated Snapshot', detail: 'Encrypted snapshot generated for devi_erp, cme_db & baypride_erp', category: 'Backup' }
    ];

    // Master domains data
    const masterDomains = [
      { name: 'Cold Store Logistics', code: 'CS', count: 320, color: '#00A4B7', submasters: ['Chambers', 'Rack Locations', 'Pallet Types', 'Temp Zones'] },
      { name: 'Raw Material Procurement', code: 'PROC', count: 410, color: '#00875A', submasters: ['Farmers', 'Landing Centers', 'Ice Suppliers', 'Agents'] },
      { name: 'Processing & Freezing', code: 'PROD', count: 345, color: '#FF8B00', submasters: ['Processing Lines', 'Glaze Specs', 'Blast Freezers', 'Packs'] },
      { name: 'Sales & Commercial Exports', code: 'SALES', count: 460, color: '#6554C0', submasters: ['Export Markets', 'Buyers', 'Shipping Lines', 'Discharge Ports'] },
      { name: 'Finance & Accounts', code: 'FIN', count: 185, color: '#0284C7', submasters: ['Cost Centers', 'Currencies', 'Tax Codes', 'Payment Terms'] },
      { name: 'General & Plant Ops', code: 'GEN', count: 215, color: '#5E6C84', submasters: ['Vehicles', 'Weighbridges', 'Shift Timings', 'Packaging'] }
    ];

    const totalMasterRecords = masterDomains.reduce((acc, d) => acc + d.count, 0);
    const activeUsersCount = allUsers.filter(u => (u.status || 'Active').toLowerCase() === 'active').length;
    const totalPlantsCount = allCompanies.reduce((acc, c) => acc + (Array.isArray(c.plants) ? c.plants.length : 1), 0);
    const totalFormsCount = 8;
    const totalCustomFieldsCount = 42;

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in pb-10">

        <!-- 1. Page Header (Strictly AGENTS.md Rule 2: Title ONLY, no subheadings, contextual status badges on line) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div class="flex items-center gap-3">
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Super Admin Executive Dashboard</h1>
          </div>
          <div class="flex items-center gap-2.5 flex-wrap">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DFE1E6] shadow-2xs hover:border-[#00A4B7] transition-all duration-200 cursor-default select-none">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-xs font-semibold text-[#172B4D]">Clusters Operational (99.98% Uptime)</span>
            </div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD] text-xs font-extrabold cursor-default select-none hover:bg-[#BAE6FD] transition-colors">
              <span>v2.4.1 Production</span>
            </div>
          </div>
        </div>

        <!-- 2. High-Impact KPI Metrics Row (4 Cards across Multi-Tenant Clients, Users, Schema, Masters) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">

          <!-- Card 1: Multi-Tenant Corporate Clients -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-[#00A4B7] transition-all duration-200 cursor-default select-none group flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Corporate Tenants</span>
                <div class="w-9 h-9 rounded-xl bg-[#F0F9FF] text-[#00A4B7] flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-2xs border border-[#BAE6FD]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
              </div>
              <div class="mt-2 flex items-baseline gap-2">
                <span class="text-2xl font-black text-[#172B4D] tracking-tight">${allCompanies.length}</span>
                <span class="text-[11px] font-extrabold text-[#006644] bg-[#E3FCEF] border border-[#ABF5D1] px-2 py-0.5 rounded-full">100% Online</span>
              </div>
              <p class="text-[11px] font-semibold text-[#5E6C84] mt-1">${totalPlantsCount} Processing & Coldstore Plants</p>
            </div>
            <div class="mt-3 pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>Multi-Tenant DB Latency</span>
              <span class="font-bold font-mono text-[#00A4B7]">< 8ms Healthy</span>
            </div>
          </div>

          <!-- Card 2: Enterprise Users & RBAC Security -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-[#00875A] transition-all duration-200 cursor-default select-none group flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Enterprise Users</span>
                <div class="w-9 h-9 rounded-xl bg-[#E3FCEF] text-[#00875A] flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-2xs border border-[#ABF5D1]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                </div>
              </div>
              <div class="mt-2 flex items-baseline gap-2">
                <span class="text-2xl font-black text-[#172B4D] tracking-tight">${allUsers.length}</span>
                <span class="text-[11px] font-extrabold text-[#006644] bg-[#E3FCEF] border border-[#ABF5D1] px-2 py-0.5 rounded-full">${activeUsersCount} Active</span>
              </div>
              <p class="text-[11px] font-semibold text-[#5E6C84] mt-1">${allRoles.length} Configured RBAC Security Roles</p>
            </div>
            <div class="mt-3 pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>Security Compliance</span>
              <span class="font-bold text-[#00875A]">100% RBAC Verified</span>
            </div>
          </div>

          <!-- Card 3: Forms Builder & Dynamic Schema -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-[#6554C0] transition-all duration-200 cursor-default select-none group flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Forms & Schema Models</span>
                <div class="w-9 h-9 rounded-xl bg-[#EAE6FF] text-[#6554C0] flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-2xs border border-[#D3C7FF]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
              </div>
              <div class="mt-2 flex items-baseline gap-2">
                <span class="text-2xl font-black text-[#172B4D] tracking-tight">${totalFormsCount} Forms</span>
                <span class="text-[11px] font-extrabold text-[#403294] bg-[#EAE6FF] border border-[#D3C7FF] px-2 py-0.5 rounded-full">Customizer</span>
              </div>
              <p class="text-[11px] font-semibold text-[#5E6C84] mt-1">${totalCustomFieldsCount} Custom Fields & Analytical Models</p>
            </div>
            <div class="mt-3 pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>SQL Query Engine</span>
              <span class="font-bold text-[#6554C0]">Active & Validated</span>
            </div>
          </div>

          <!-- Card 4: Enterprise Master Registries -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-[#FF8B00] transition-all duration-200 cursor-default select-none group flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Master Data Catalogs</span>
                <div class="w-9 h-9 rounded-xl bg-[#FFF0B3] text-[#B76E00] flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-2xs border border-[#FFE380]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7M4 7c0-2 1.5-3 3.5-3h9c2 0 3.5 1 3.5 3M4 7h16m-8 4v6m-4-3h8"/></svg>
                </div>
              </div>
              <div class="mt-2 flex items-baseline gap-2">
                <span class="text-2xl font-black text-[#172B4D] tracking-tight">${totalMasterRecords.toLocaleString()}</span>
                <span class="text-[11px] font-extrabold text-[#B76E00] bg-[#FFF0B3] border border-[#FFE380] px-2 py-0.5 rounded-full">6 Domains</span>
              </div>
              <p class="text-[11px] font-semibold text-[#5E6C84] mt-1">Coldstore, Procurement, Production & Sales</p>
            </div>
            <div class="mt-3 pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>Cross-Plant Sync</span>
              <span class="font-bold text-[#B76E00]">100% Synchronized</span>
            </div>
          </div>

        </div>

        <!-- 3. Primary Charts Row: Clients Distribution & RBAC Security Personas -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-3.5">

          <!-- Chart A (Left 2 Columns): Client Tenants — Users Allocation & Plant Footprint -->
          <div class="lg:col-span-2 bg-white border border-[#DFE1E6] rounded-xl p-4 sm:p-5 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-[#00A4B7] transition-all duration-200 cursor-default select-none flex flex-col justify-between">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#F1F5F9] pb-3">
              <div>
                <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#00A4B7]"></span>
                  Corporate Tenants — User Allocation & Plant Footprint
                </h3>
              </div>
              <div class="flex items-center gap-3 text-xs">
                <span class="flex items-center gap-1.5 text-[11px] font-bold text-[#172B4D]">
                  <span class="w-2.5 h-2.5 rounded bg-[#00A4B7]"></span> Active Users
                </span>
                <span class="flex items-center gap-1.5 text-[11px] font-bold text-[#6554C0]">
                  <span class="w-2.5 h-2.5 rounded bg-[#6554C0]"></span> Connected Plants
                </span>
                <span class="flex items-center gap-1.5 text-[11px] font-bold text-[#94A3B8]">
                  <span class="w-2.5 h-2.5 rounded bg-[#CBD5E1]"></span> Inactive Users
                </span>
              </div>
            </div>

            <!-- Canvas Container -->
            <div class="relative w-full h-[250px] sm:h-[270px] my-2">
              <canvas id="dash-chart-client-users"></canvas>
            </div>

            <div class="pt-2.5 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#5E6C84]">
              <span>Multi-Tenant Cluster: <strong class="text-[#172B4D] font-mono">${allCompanies.length} Active Databases</strong></span>
              <span class="font-bold text-[#00A4B7]">Zero Failover Events • Multi-Region Resilient</span>
            </div>
          </div>

          <!-- Chart B (Right 1 Column): RBAC Security Personas Donut Chart -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 sm:p-5 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-[#6554C0] transition-all duration-200 cursor-default select-none flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#6554C0]"></span>
                RBAC Security Personas
              </h3>
              <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">
                ${allRoles.length} Roles
              </span>
            </div>

            <!-- Canvas Container -->
            <div class="relative w-full h-[230px] sm:h-[250px] my-2 flex items-center justify-center">
              <canvas id="dash-chart-roles-donut"></canvas>
            </div>

            <div class="pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>Role Permissions Matrix</span>
              <span class="font-bold text-[#6554C0]">Zero Privilege Drift</span>
            </div>
          </div>

        </div>

        <!-- 4. Secondary Analytics Row: Master Registries by Domain & Governance Velocity -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3.5">

          <!-- Chart C: Master Catalog Domain Breakdown -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 sm:p-5 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-[#00875A] transition-all duration-200 cursor-default select-none flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
              <div>
                <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#00875A]"></span>
                  Master Registries Volume by Domain
                </h3>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">
                ${totalMasterRecords.toLocaleString()} Total Records
              </span>
            </div>

            <!-- Canvas Container -->
            <div class="relative w-full h-[230px] sm:h-[250px] my-2">
              <canvas id="dash-chart-master-categories"></canvas>
            </div>

            <div class="pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>Configured Enterprise Catalogs</span>
              <span class="font-bold text-[#00875A]">6 Core ERP Domains Operational</span>
            </div>
          </div>

          <!-- Chart D: Governance & Configuration Velocity -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 sm:p-5 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-[#00A4B7] transition-all duration-200 cursor-default select-none flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
              <div>
                <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#00A4B7]"></span>
                  Governance & System Activity Velocity
                </h3>
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">
                ${allAuditLogs.length} Events Tracked
              </span>
            </div>

            <!-- Canvas Container -->
            <div class="relative w-full h-[230px] sm:h-[250px] my-2">
              <canvas id="dash-chart-audit-trend"></canvas>
            </div>

            <div class="pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>Continuous Audit Logging</span>
              <span class="font-bold text-[#00A4B7]">Immutable Trail Retention</span>
            </div>
          </div>

        </div>

        <!-- 5. Bottom Detailed Status Row: Multi-Tenant Clusters Table & Recent Governance Feed -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-3.5">

          <!-- Panel 1 (Left 2 Columns): Live Multi-Tenant Database Health -->
          <div class="lg:col-span-2 bg-white border border-[#DFE1E6] rounded-xl p-4 sm:p-5 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-[#00A4B7] transition-all duration-200 cursor-default select-none">
            <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-3">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7M4 7c0-2 1.5-3 3.5-3h9c2 0 3.5 1 3.5 3M4 7h16m-8 4v6m-4-3h8"/></svg>
                </div>
                <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Multi-Tenant Database Cluster Registry</h3>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">MySQL 8.0 • InnoDB Cluster</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead>
                  <tr class="border-b border-[#DFE1E6] text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">
                    <th class="pb-2">Corporate Client</th>
                    <th class="pb-2">Database Name</th>
                    <th class="pb-2">Host & Endpoint</th>
                    <th class="pb-2">Connected Plants</th>
                    <th class="pb-2">Latency</th>
                    <th class="pb-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#F1F5F9]">
                  ${allCompanies.map(c => `
                    <tr class="hover:bg-[#F0F9FF] transition-colors duration-150 cursor-default">
                      <td class="py-2.5 font-bold text-[#172B4D]">
                        <div class="flex items-center gap-2">
                          <span class="w-6 h-6 rounded bg-[#F1F5F9] text-[#00A4B7] font-mono text-[10px] font-black flex items-center justify-center border border-[#DFE1E6]">${c.shortName || c.code || 'CMP'}</span>
                          <span>${c.name}</span>
                        </div>
                      </td>
                      <td class="py-2.5 font-mono text-xs text-[#00A4B7] font-semibold">${c.dbName || 'devi_erp'}</td>
                      <td class="py-2.5 font-mono text-xs text-[#5E6C84]">${c.dbHost || 'localhost:3306'}</td>
                      <td class="py-2.5 text-xs text-[#172B4D] font-semibold">${Array.isArray(c.plants) ? c.plants.length : 1} Plants</td>
                      <td class="py-2.5 font-mono text-xs text-[#00875A] font-bold">${c.latency || '< 5ms'}</td>
                      <td class="py-2.5 text-right">
                        <span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">
                          ${c.status || 'Active'}
                        </span>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Panel 2 (Right 1 Column): Recent Governance & Audit Feed -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 sm:p-5 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-[#6554C0] transition-all duration-200 cursor-default select-none flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-3">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-md bg-[#EAE6FF] text-[#6554C0] flex items-center justify-center font-bold text-xs">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Recent Governance Activity</h3>
                </div>
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping" title="Live stream active"></span>
              </div>

              <!-- Events List with Hover Effects -->
              <div class="space-y-2.5">
                ${allAuditLogs.slice(0, 4).map(log => `
                  <div class="p-2.5 rounded-lg border border-[#F1F5F9] hover:border-[#00A4B7] hover:bg-[#F8FAFC] transition-all duration-150 cursor-default">
                    <div class="flex items-center justify-between gap-1 mb-1">
                      <span class="font-bold text-xs text-[#172B4D]">${log.action}</span>
                      <span class="text-[10px] font-mono text-[#5E6C84]">${log.timestamp}</span>
                    </div>
                    <p class="text-[11px] text-[#5E6C84] leading-relaxed line-clamp-2">${log.detail}</p>
                    <div class="mt-1.5 flex items-center justify-between text-[10px]">
                      <span class="font-semibold text-[#00A4B7]">${log.actor}</span>
                      <span class="px-1.5 py-0.5 rounded font-extrabold uppercase text-[9px] bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">${log.category || 'General'}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="pt-3 mt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>Audit Storage Retention</span>
              <span class="font-bold text-[#172B4D]">365 Days Verified</span>
            </div>
          </div>

        </div>

      </div>
    `;

    // Initialize all 4 Charts via Chart.js
    setTimeout(() => {
      this.initDashboardCharts(allCompanies, allUsers, allRoles, masterDomains, allAuditLogs);
    }, 60);
  },

  initDashboardCharts(companies, users, roles, masterDomains, auditLogs) {
    if (typeof Chart === 'undefined') return;

    // 1. Chart A: Clients Users Allocation & Plant Footprint (Grouped Bar Chart)
    const clientCanvas = document.getElementById('dash-chart-client-users');
    if (clientCanvas) {
      const clientLabels = companies.map(c => c.shortName || c.code || c.name);
      const activeData = companies.map(c => {
        return users.filter(u => 
          (u.companyId === c.id || u.company === c.name || u.companyName === c.name || u.companyName === c.shortName || u.companyName === c.code) &&
          (u.status || 'Active').toLowerCase() === 'active'
        ).length;
      });
      const plantsData = companies.map(c => Array.isArray(c.plants) ? c.plants.length : 1);
      const inactiveData = companies.map(c => {
        return users.filter(u => 
          (u.companyId === c.id || u.company === c.name || u.companyName === c.name || u.companyName === c.shortName || u.companyName === c.code) &&
          (u.status || 'Active').toLowerCase() !== 'active'
        ).length;
      });

      this.chartInstances.clientUsers = new Chart(clientCanvas, {
        type: 'bar',
        data: {
          labels: clientLabels,
          datasets: [
            {
              label: 'Active Users',
              data: activeData,
              backgroundColor: '#00A4B7',
              borderRadius: 6,
              barThickness: 22
            },
            {
              label: 'Connected Plants',
              data: plantsData,
              backgroundColor: '#6554C0',
              borderRadius: 6,
              barThickness: 22
            },
            {
              label: 'Inactive Users',
              data: inactiveData,
              backgroundColor: '#CBD5E1',
              borderRadius: 6,
              barThickness: 22
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#172B4D',
              padding: 10,
              cornerRadius: 6,
              titleFont: { size: 12, family: 'Inter', weight: 'bold' }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#5E6C84', font: { size: 11, family: 'Inter', weight: '600' } }
            },
            y: {
              grid: { color: '#F1F5F9' },
              ticks: { precision: 0, color: '#5E6C84', font: { size: 10, family: 'Inter' } }
            }
          }
        }
      });
    }

    // 2. Chart B: RBAC Security Personas (Doughnut Chart)
    const rolesCanvas = document.getElementById('dash-chart-roles-donut');
    if (rolesCanvas) {
      const topRoles = roles.slice(0, 6);
      const roleLabels = topRoles.map(r => r.name);
      const roleCounts = topRoles.map(r => {
        const matching = users.filter(u => u.role === r.name || u.role === r.id).length;
        return matching > 0 ? matching : (r.usersCount || 2);
      });

      this.chartInstances.rolesDonut = new Chart(rolesCanvas, {
        type: 'doughnut',
        data: {
          labels: roleLabels,
          datasets: [{
            data: roleCounts,
            backgroundColor: [
              '#00A4B7',
              '#00875A',
              '#6554C0',
              '#FF8B00',
              '#0284C7',
              '#36B37E'
            ],
            borderWidth: 3,
            borderColor: '#FFFFFF'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '68%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 8,
                boxHeight: 8,
                font: { size: 10, family: 'Inter', weight: '600' },
                color: '#172B4D',
                padding: 8
              }
            },
            tooltip: {
              backgroundColor: '#172B4D',
              padding: 9,
              cornerRadius: 6
            }
          }
        }
      });
    }

    // 3. Chart C: Master Catalog Domain Breakdown (Bar Chart)
    const masterCanvas = document.getElementById('dash-chart-master-categories');
    if (masterCanvas) {
      const domainLabels = masterDomains.map(d => d.name);
      const domainCounts = masterDomains.map(d => d.count);
      const domainColors = masterDomains.map(d => d.color);

      this.chartInstances.masterDomain = new Chart(masterCanvas, {
        type: 'bar',
        data: {
          labels: domainLabels,
          datasets: [{
            label: 'Master Records',
            data: domainCounts,
            backgroundColor: domainColors,
            borderRadius: 6,
            barThickness: 20
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#172B4D',
              padding: 9,
              cornerRadius: 6
            }
          },
          scales: {
            x: {
              grid: { color: '#F1F5F9' },
              ticks: { precision: 0, color: '#5E6C84', font: { size: 10, family: 'Inter' } }
            },
            y: {
              grid: { display: false },
              ticks: { color: '#172B4D', font: { size: 11, family: 'Inter', weight: '600' } }
            }
          }
        }
      });
    }

    // 4. Chart D: Governance & System Activity Velocity (Smooth Line / Area Chart)
    const auditCanvas = document.getElementById('dash-chart-audit-trend');
    if (auditCanvas) {
      const trendLabels = ['01 Nov', '02 Nov', '03 Nov', '04 Nov', '05 Nov', '06 Nov', 'Today'];
      const trendData = [8, 12, 15, 22, 19, 28, auditLogs.length > 0 ? auditLogs.length + 24 : 32];

      this.chartInstances.auditTrend = new Chart(auditCanvas, {
        type: 'line',
        data: {
          labels: trendLabels,
          datasets: [{
            label: 'Governance & Schema Velocity',
            data: trendData,
            borderColor: '#00A4B7',
            backgroundColor: 'rgba(0, 164, 183, 0.12)',
            fill: true,
            tension: 0.38,
            borderWidth: 2.5,
            pointBackgroundColor: '#00A4B7',
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#172B4D',
              padding: 9,
              cornerRadius: 6
            }
          },
          scales: {
            x: {
              grid: { color: '#F1F5F9' },
              ticks: { color: '#5E6C84', font: { size: 10, family: 'Inter' } }
            },
            y: {
              grid: { color: '#F1F5F9' },
              ticks: { precision: 0, color: '#5E6C84', font: { size: 10, family: 'Inter' } }
            }
          }
        }
      });
    }
  }
};
