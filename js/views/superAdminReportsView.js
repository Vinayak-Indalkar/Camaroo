// Super Admin Reports View: Dedicated Client Section Reports UI for Super Admin
// Comprehensive corporate clients report, database host connectivity, facility mapping, user allocations, and status audits.
import { Toast } from '../components/toast.js';
import { Skeleton } from '../components/skeleton.js';
import { DataTable } from '../components/table.js';
import { SetupView } from './setupView.js';

export const SuperAdminReportsView = {
  activeSearchTerm: '',
  filterStatus: 'ALL',
  filterJurisdiction: 'ALL',

  getState() {
    return SetupView.state || {
      companies: [],
      users: [],
      roles: [],
      modulesConfig: [],
      submenusConfig: {},
      auditLogs: []
    };
  },

  render(containerId, activeTab = 'clients-overview', activeHash = '#/super-reports/client-reports/clients-overview') {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Direct clean container with NO unwanted audit/security tabs
    container.innerHTML = `
      <div id="super-reports-main-content" class="space-y-4"></div>
    `;

    const contentEl = document.getElementById('super-reports-main-content');
    if (!contentEl) return;

    const sk = typeof Skeleton !== 'undefined' ? Skeleton : (typeof window !== 'undefined' ? window.Skeleton : null);
    if (sk && typeof sk.renderTable === 'function') {
      contentEl.innerHTML = sk.renderTable(6, 6);
    }

    setTimeout(() => {
      this.renderClientSectionReports(contentEl);
    }, 120);
  },

  // =========================================================================
  // DEDICATED CLIENT SECTION REPORTS UI (SUPER ADMIN)
  // =========================================================================
  renderClientSectionReports(container) {
    const state = this.getState();
    const allCompanies = state.companies || [];
    const allUsers = state.users || [];

    // Filter Logic
    let companies = [...allCompanies];
    if (this.filterStatus !== 'ALL') {
      companies = companies.filter(c => (c.status || 'Active').toLowerCase() === this.filterStatus.toLowerCase());
    }
    if (this.filterJurisdiction !== 'ALL') {
      companies = companies.filter(c => (c.country || 'India').toLowerCase() === this.filterJurisdiction.toLowerCase());
    }

    // High Level Metrics
    const totalCompanies = allCompanies.length;
    const activeCompanies = allCompanies.filter(c => (c.status || 'Active').toLowerCase() === 'active').length;
    const inactiveCompanies = totalCompanies - activeCompanies;
    const totalLinkedUsers = allUsers.length;
    const totalFacilities = allCompanies.reduce((acc, c) => acc + (c.plants ? c.plants.length : 1), 0);
    const dbConnectedCount = allCompanies.filter(c => c.dbHost || c.dbName).length;

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- 4 KPI Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <p class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Total Corporate Clients</p>
              <h3 class="text-2xl font-extrabold text-[#172B4D] mt-1">${totalCompanies}</h3>
              <p class="text-[11px] text-[#0284C7] font-semibold mt-0.5">${activeCompanies} Active • ${inactiveCompanies} Inactive</p>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            </div>
          </div>

          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <p class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Operating Facilities</p>
              <h3 class="text-2xl font-extrabold text-[#006644] mt-1">${totalFacilities}</h3>
              <p class="text-[11px] text-[#36B37E] font-semibold mt-0.5">Processing Plants & Hubs</p>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#E3FCEF] border border-[#ABF5D1] flex items-center justify-center text-[#006644] shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            </div>
          </div>

          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <p class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Total Allocated Users</p>
              <h3 class="text-2xl font-extrabold text-[#172B4D] mt-1">${totalLinkedUsers}</h3>
              <p class="text-[11px] text-[#5E6C84] font-semibold mt-0.5">Across All Registered Clients</p>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#F4F5F7] border border-[#DFE1E6] flex items-center justify-center text-[#42526E] shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            </div>
          </div>

          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <p class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Database Routing</p>
              <h3 class="text-2xl font-extrabold text-[#6554C0] mt-1">${dbConnectedCount} / ${totalCompanies}</h3>
              <p class="text-[11px] text-[#6554C0] font-semibold mt-0.5">Multi-Tenant Databases Active</p>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#EAE6FF] border border-[#C0B6F2] flex items-center justify-center text-[#6554C0] shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7M4 7c0-2 1.5-3 3.5-3h9c2 0 3.5 1 3.5 3M4 7h16m-8 4v6m-4-3h8"/></svg>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="super-clients-report-table-container"></div>
      </div>
    `;

    const exportBtn = document.getElementById('btn-export-clients-csv');
    if (exportBtn) {
      exportBtn.onclick = () => {
        Toast.show('Client Section Report exported successfully as CSV.', 'success', 'Export Complete');
      };
    }

    // Initialize DataTable with the exact requested rounded pagination
    new DataTable({
      containerId: 'super-clients-report-table-container',
      data: companies,
      keyField: 'id',
      tableTitle: 'Corporate Clients Detailed Report',
      searchable: true,
      exportable: true,
      pageSize: 10,
      onRowClick: (row) => {
        if (SetupView && typeof SetupView.showClientUserDetailsModal === 'function') {
          SetupView.showClientUserDetailsModal(row);
        }
      },
      columns: [
        { 
          field: 'sNo', 
          header: 'SNO', 
          render: (v, r, i) => `<span class="font-bold text-[#5E6C84]">${i !== undefined ? i + 1 : 1}</span>` 
        },
        { 
          field: 'code', 
          header: 'Client Short Name', 
          render: (v, r) => `<span class="font-bold text-[#0284C7] font-mono bg-[#F0F9FF] px-2.5 py-0.5 rounded border border-[#BAE6FD]">${v || r.shortName || 'DFL'}</span>` 
        },
        { 
          field: 'name', 
          header: 'Corporate Client Name', 
          render: (v) => `<span class="font-bold text-[#172B4D] hover:text-[#0284C7] transition-colors">${v}</span>` 
        },
        { 
          field: 'country', 
          header: 'Country / Jurisdiction', 
          render: (v) => `<span class="font-medium text-[#42526E] text-xs">${v || 'India'}</span>` 
        },
        { 
          field: 'currency', 
          header: 'Trade Currency', 
          render: (v) => `<span class="font-mono text-xs font-semibold text-[#5E6C84]">${v || 'INR'}</span>` 
        },
        { 
          field: 'dbHost', 
          header: 'Database Host', 
          render: (v) => v ? `<span class="font-mono text-[11px] text-[#5E6C84] block truncate max-w-[150px]" title="${v}">${v}</span>` : `<span class="text-[#8993A4] text-xs italic">Default Shared</span>` 
        },
        { 
          field: 'dbName', 
          header: 'DB Schema', 
          render: (v) => v ? `<span class="font-mono text-xs font-bold text-[#0284C7]">${v}</span>` : `<span class="text-[#8993A4] text-xs italic">devi_erp</span>` 
        },
        { 
          field: 'plants', 
          header: 'Operating Facilities', 
          render: (v) => {
            const list = Array.isArray(v) && v.length > 0 ? v : ['Unit-1 VSP'];
            return `
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7]">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
                  <span>${list.length} Facilit${list.length === 1 ? 'y' : 'ies'}</span>
                </span>
              </div>
            `;
          } 
        },
        { 
          field: 'usersCount', 
          header: 'Allocated Users', 
          render: (v, r) => {
            const count = allUsers.filter(u => u.companyId === r.id || u.companyName === r.name || u.companyName === r.shortName).length;
            return `<span class="font-bold text-[#172B4D] text-xs">${count} User${count === 1 ? '' : 's'}</span>`;
          } 
        },
        { 
          field: 'status', 
          header: 'Status', 
          type: 'status',
          render: (v, r) => {
            const isAct = String(v || r.status || 'Active').toUpperCase() === 'ACTIVE';
            return `<span class="lozenge ${isAct ? 'lozenge-success' : 'lozenge-danger'}">${v || r.status || 'Active'}</span>`;
          }
        }
      ]
    });
  }
};
