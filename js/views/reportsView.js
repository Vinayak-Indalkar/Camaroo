// Global Reports Module Views (Configured with On-Screen Tabs, 4-Column Filters, Interactive Data Tables & Atlassian Detail Modals)

import { TabBar } from '../components/tabBar.js';
import { DataTable } from '../components/table.js';
import { Toast } from '../components/toast.js';
import { Modal } from '../components/modal.js';

export const ReportsView = {
  render(containerId, subPage = 'rm-inward-reports', activeHash = '#/reports/purchase-reports/rm-inward-reports') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div id="reports-tab-bar-container"></div>
      <div id="reports-subpage-content" class="space-y-3"></div>
    `;

    const tabContext = TabBar.render('reports-tab-bar-container', activeHash);
    const subContainer = document.getElementById('reports-subpage-content');
    if (!subContainer) return;

    const tabLabel = tabContext?.submenu?.tabs?.find(t => t.id === subPage)?.label || subPage.replace(/-/g, ' ');

    // Generate specific contextual dataset and columns based on active tab
    const reportData = this.getReportData(subPage, tabLabel);

    subContainer.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">${tabLabel}</h1>
        </div>
      </div>

      <!-- Search & Filter Card (4-Column Layout) -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="rep-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="rep-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="rep-flt-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="rep-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- 1. SEARCH QUERY -->
          <div>
            <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
            <input type="text" id="rep-flt-search" placeholder="Search reference, lot, entity..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 2. FROM DATE -->
          <div>
            <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <input type="date" id="rep-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <!-- 3. TO DATE -->
          <div>
            <label for="rep-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <input type="date" id="rep-flt-to" value="2026-10-30" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <!-- 4. SEARCH BUTTON -->
          <div class="flex items-end">
            <button type="button" id="rep-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Report Table Card -->
      <div id="reports-table-container"></div>
    `;

    const renderTable = (rows) => {
      new DataTable({
        containerId: 'reports-table-container',
        tableTitle: `${tabLabel} Records (${rows.length})`,
        searchable: true,
        exportable: true,
        selectable: true,
        pageSize: 10,
        columns: reportData.columns,
        data: rows,
        onRowClick: (row) => this.showReportDetails(row, tabLabel)
      });
    };

    renderTable(reportData.rows);

    // Filter listeners
    subContainer.querySelector('#rep-flt-search-btn')?.addEventListener('click', () => {
      const q = subContainer.querySelector('#rep-flt-search')?.value?.trim().toLowerCase();
      let filtered = [...reportData.rows];
      if (q) {
        filtered = filtered.filter(row => Object.values(row).some(v => String(v).toLowerCase().includes(q)));
      }
      renderTable(filtered);
    });

    subContainer.querySelector('#rep-flt-reset-btn')?.addEventListener('click', () => {
      subContainer.querySelector('#rep-flt-search').value = '';
      subContainer.querySelector('#rep-flt-from').value = '2026-10-01';
      subContainer.querySelector('#rep-flt-to').value = '2026-10-30';
      renderTable(reportData.rows);
    });

    const filterBody = subContainer.querySelector('#rep-flt-body');
    const toggleIcon = subContainer.querySelector('#rep-flt-toggle-icon');
    subContainer.querySelector('#rep-flt-toggle-btn')?.addEventListener('click', () => {
      if (filterBody) {
        filterBody.classList.toggle('hidden');
        if (toggleIcon) toggleIcon.classList.toggle('rotate-180');
      }
    });
  },

  // Modal: Show Details Page matching our Atlassian UI style
  showReportDetails(row, tabLabel) {
    if (!row) return;

    const ref = row.docNo || row.refNo || row.batchNo || row.testNo || row.palletRef || row.runId || row.billNo || row.invoiceNo || ('REC-' + row.id);
    const date = row.date || row.productionDate || row.shipDate || row.auditDate || '2026-10-28';
    const status = row.status || row.qcStatus || row.paymentStatus || row.freightStatus || row.realizationStatus || 'Audited & Verified';

    const excludedKeys = new Set(['id', 'actions', 'sNo']);
    const entries = Object.entries(row).filter(([k]) => !excludedKeys.has(k));

    const topGrid = entries.slice(0, 8);
    const detailList = entries.slice(8);

    const formatKey = (k) => {
      return k
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
    };

    const formatVal = (k, v) => {
      if (v === null || v === undefined || v === '') return '-';
      if (typeof v === 'number') {
        if (k.toLowerCase().includes('val') || k.toLowerCase().includes('gross') || k.toLowerCase().includes('amount') || k.toLowerCase().includes('rate') || k.toLowerCase().includes('netpayable')) {
          return '₹' + Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 });
        }
        return Number(v).toLocaleString();
      }
      return String(v);
    };

    Modal.open({
      title: `${tabLabel} Details: ${ref}`,
      size: '2xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Information Grid (Atlassian 4-Column Card) -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAFC] border border-[#DFE1E6] p-3.5 rounded-xl">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">REFERENCE ID</span>
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${ref}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">RECORD DATE</span>
              <span class="font-mono font-semibold text-xs text-[#172B4D]">${date}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">REPORT CATEGORY</span>
              <span class="font-semibold text-xs text-[#172B4D]">${tabLabel}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">STATUS</span>
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>
                ${status}
              </span>
            </div>

            ${topGrid.map(([k, v]) => `
              <div>
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">${formatKey(k)}</span>
                <span class="font-medium text-xs text-[#172B4D] break-words">${formatVal(k, v)}</span>
              </div>
            `).join('')}
          </div>

          <!-- Operational & Ledger Breakdown -->
          <div class="border border-[#DFE1E6] rounded-xl overflow-hidden bg-white shadow-xs">
            <div class="bg-[#FAFBFC] px-4 py-2.5 border-b border-[#DFE1E6] flex items-center justify-between">
              <h4 class="text-xs font-bold text-[#172B4D] flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                <span>Analytical &amp; Quality Specifications</span>
              </h4>
              <span class="text-[11px] font-mono text-[#5E6C84] bg-white border border-[#DFE1E6] px-2 py-0.5 rounded">Plant Unit 5</span>
            </div>
            <div class="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              ${detailList.length > 0 ? detailList.map(([k, v]) => `
                <div class="border-b border-[#F1F5F9] pb-2">
                  <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">${formatKey(k)}</span>
                  <span class="font-semibold text-xs text-[#172B4D]">${formatVal(k, v)}</span>
                </div>
              `).join('') : `
                <div class="border-b border-[#F1F5F9] pb-2">
                  <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">QC Verification</span>
                  <span class="font-semibold text-xs text-[#00875A]">Cleared Grade A Export Standard</span>
                </div>
                <div class="border-b border-[#F1F5F9] pb-2">
                  <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">Process Facility</span>
                  <span class="font-semibold text-xs text-[#172B4D]">Devi Fisheries Processing Plant 5</span>
                </div>
                <div class="border-b border-[#F1F5F9] pb-2">
                  <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">Audit Sign-off</span>
                  <span class="font-semibold text-xs text-[#172B4D]">K. S. Narayana (Senior QA Manager)</span>
                </div>
              `}
            </div>
          </div>

          <!-- Audit & Compliance Summary Banner -->
          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#00875A]"></span>
              <span class="font-semibold text-[#172B4D]">Audit Verification:</span>
              <span class="text-[#00875A] font-medium">Digital Audit Trail Recorded • Complies with USFDA / BAP Standards</span>
            </div>
            <div class="font-mono text-[11px] text-[#5E6C84]">Devi Fisheries ERP Ledger System</div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: modal => modal.close() },
        { label: 'Download Details', type: 'primary', onClick: () => { Toast.show(`Details for ${ref} downloaded successfully!`, 'success'); } }
      ]
    });
  },

  // Generate tab-specific columns and realistic analytical rows for all application reports
  getReportData(tabId, label) {
    let columns = [];
    let rows = [];

    // 1. RM Inward & Arrivals / Supplier Procurement
    if (tabId === 'rm-inward-reports' || tabId === 'supplier-procurement' || tabId.includes('inward') || tabId.includes('procurement')) {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'docNo', header: 'GRN / Arrival No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'date', header: 'Arrival Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'supplier', header: 'Supplier / Farmer', sortable: true, render: (v, r) => `<div class="flex flex-col"><span class="font-semibold text-xs text-[#172B4D]">${v}</span><span class="text-[10px] text-[#5E6C84]">${r.location}</span></div>` },
        { field: 'lotNo', header: 'Lot No', sortable: true, render: v => `<span class="font-mono text-xs text-[#00A4B7] font-semibold">${v}</span>` },
        { field: 'variety', header: 'Variety', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
        { field: 'count', header: 'Count / Size', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] font-bold">${v}</span>` },
        { field: 'netWeight', header: 'Net Wt (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
        { field: 'grossVal', header: 'Gross Value', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
        { field: 'qcStatus', header: 'QC Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
      ];
      rows = [
        { id: 1, docNo: 'ARR-2026-1044', date: '2026-10-28', supplier: 'Sri Sai Ram Aqua Farm', location: 'Bhimavaram Cluster', lotNo: 'LOT-2026-0912', variety: 'Vannamei Fresh', count: '30/40', netWeight: 8450, grossVal: 2704000, qcStatus: 'Passed Grade A' },
        { id: 2, docNo: 'ARR-2026-1045', date: '2026-10-28', supplier: 'Krishna Delta Aqua Producers', location: 'Machilipatnam Hub', lotNo: 'LOT-2026-0913', variety: 'Black Tiger', count: '20/25', netWeight: 6200, grossVal: 3410000, qcStatus: 'Passed Grade A' },
        { id: 3, docNo: 'ARR-2026-1046', date: '2026-10-27', supplier: 'Godavari Coastal Farms Ltd', location: 'Narsapur Zone', lotNo: 'LOT-2026-0914', variety: 'Vannamei Fresh', count: '40/50', netWeight: 9800, grossVal: 2842000, qcStatus: 'Passed Grade A' },
        { id: 4, docNo: 'ARR-2026-1047', date: '2026-10-26', supplier: 'Suryalanka Marine Culture', location: 'Bapatla Belt', lotNo: 'LOT-2026-0915', variety: 'Vannamei Fresh', count: '25/30', netWeight: 11200, grossVal: 3920000, qcStatus: 'Passed Grade A' }
      ];
    }
    // 2. Lot Valuation & Tracking / Purchase Bills
    else if (tabId === 'lot-valuation' || tabId === 'purchase-bills' || tabId.includes('bill') || tabId.includes('valuation')) {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'billNo', header: 'Bill / Voucher No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'date', header: 'Bill Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'supplier', header: 'Vendor / Farmer', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'variety', header: 'Raw Material Lot', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
        { field: 'billedWeight', header: 'Weight (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
        { field: 'ratePerKg', header: 'Rate/Kg', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">₹${v}</span>` },
        { field: 'grossAmount', header: 'Gross (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
        { field: 'paymentStatus', header: 'Payment Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${v.includes('Paid') ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]' : 'bg-[#FFF0B3] text-[#172B4D] border border-[#FFE380]'}"><span class="w-1.5 h-1.5 rounded-full ${v.includes('Paid') ? 'bg-[#00875A]' : 'bg-[#FFAB00]'}"></span>${v}</span>` }
      ];
      rows = [
        { id: 1, billNo: 'VCH-PUR-2026-0881', date: '2026-10-28', supplier: 'Sri Sai Ram Aqua Farm', variety: 'LOT-912 (Vannamei 30/40)', billedWeight: 8450, ratePerKg: 320, grossAmount: 2704000, paymentStatus: 'Fully Paid (RTGS)' },
        { id: 2, billNo: 'VCH-PUR-2026-0882', date: '2026-10-28', supplier: 'Krishna Delta Aqua Producers', variety: 'LOT-913 (Black Tiger 20/25)', billedWeight: 6200, ratePerKg: 550, grossAmount: 3410000, paymentStatus: 'Fully Paid (RTGS)' },
        { id: 3, billNo: 'VCH-PUR-2026-0883', date: '2026-10-27', supplier: 'Godavari Coastal Farms Ltd', variety: 'LOT-914 (Vannamei 40/50)', billedWeight: 9800, ratePerKg: 290, grossAmount: 2842000, paymentStatus: 'Partial (70% Paid)' },
        { id: 4, billNo: 'VCH-PUR-2026-0884', date: '2026-10-26', supplier: 'Suryalanka Marine Culture', variety: 'LOT-915 (Vannamei 25/30)', billedWeight: 11200, ratePerKg: 350, grossAmount: 3920000, paymentStatus: 'Pending Treasury Release' }
      ];
    }
    // 3. Deheading, Peeling & Yield Reports
    else if (tabId === 'deheading-grading' || tabId === 'peeling-yield' || tabId === 'yield-reports' || tabId.includes('dehead') || tabId.includes('peel') || tabId.includes('yield')) {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'batchNo', header: 'Process Batch', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'date', header: 'Production Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'line', header: 'Line / Unit', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'rmInput', header: 'RM Input (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
        { field: 'recovery', header: 'Recovery (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
        { field: 'yieldPct', header: 'Actual Yield %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}%</span>` },
        { field: 'stdYield', header: 'Standard Yield', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}%</span>` },
        { field: 'variance', header: 'Variance', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">+${v}%</span>` }
      ];
      rows = [
        { id: 1, batchNo: 'BCH-PR-2026-081', date: '2026-10-28', line: 'Deheading Line 1', rmInput: 12500, recovery: 8125, yieldPct: 65.0, stdYield: 64.0, variance: 1.0 },
        { id: 2, batchNo: 'BCH-PR-2026-082', date: '2026-10-28', line: 'Peeling Table A', rmInput: 8125, recovery: 6987, yieldPct: 86.0, stdYield: 85.5, variance: 0.5 },
        { id: 3, batchNo: 'BCH-PR-2026-083', date: '2026-10-27', line: 'IQF Freezing Tunnel', rmInput: 6987, recovery: 7406, yieldPct: 106.0, stdYield: 105.0, variance: 1.0 },
        { id: 4, batchNo: 'BCH-PR-2026-084', date: '2026-10-26', line: 'Grading Bay 2', rmInput: 15400, recovery: 15246, yieldPct: 99.0, stdYield: 98.8, variance: 0.2 }
      ];
    }
    // 4. Chemicals & Consumption
    else if (tabId === 'chemical-reports' || tabId.includes('chemical')) {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'batchNo', header: 'Soaking Batch ID', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'date', header: 'Treatment Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'chemical', header: 'Treatment Compound', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'grade', header: 'Grade / Specification', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
        { field: 'dosage', header: 'Dosage Rate', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] font-bold">${v}</span>` },
        { field: 'duration', header: 'Dip Duration', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'uptakePct', header: 'Water Uptake %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}</span>` },
        { field: 'qcStatus', header: 'Clearance Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
      ];
      rows = [
        { id: 1, batchNo: 'CHM-TR-2026-041', date: '2026-10-28', chemical: 'Non-Phosphate Blend (M-9)', grade: 'Food Grade Natural', dosage: '2.5% Solution', duration: '45 mins', uptakePct: '6.2%', qcStatus: 'USFDA Approved' },
        { id: 2, batchNo: 'CHM-TR-2026-042', date: '2026-10-28', chemical: 'Citric Acid / Salt Chill Bath', grade: 'HACCP Standard', dosage: '1.2% Solution', duration: '20 mins', uptakePct: '3.1%', qcStatus: 'USFDA Approved' },
        { id: 3, batchNo: 'CHM-TR-2026-043', date: '2026-10-27', chemical: 'STPP Light Moisture Retainer', grade: 'EU Certified Low P2O5', dosage: '1.8% Solution', duration: '35 mins', uptakePct: '5.0%', qcStatus: 'EU Export Cleared' },
        { id: 4, batchNo: 'CHM-TR-2026-044', date: '2026-10-26', chemical: 'Ozone Sanitized Wash Water', grade: '0.4 ppm O3', dosage: 'Continuous Flow', duration: '15 mins', uptakePct: '0.0%', qcStatus: 'Microbiology Cleared' }
      ];
    }
    // 5. Quality Control, Lab Clearances, Microbiology & Audits
    else if (tabId.includes('qc') || tabId.includes('lab') || tabId.includes('microbiology') || tabId.includes('audit')) {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'testNo', header: 'Test Sample ID', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'date', header: 'Sampling Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'sampleType', header: 'Sample Description', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'testType', header: 'Test Protocol', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
        { field: 'result', header: 'Test Findings', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}</span>` },
        { field: 'analyst', header: 'Tested By', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'status', header: 'Clearance Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
      ];
      rows = [
        { id: 1, testNo: 'LAB-EL-2026-0412', date: '2026-10-28', sampleType: 'Raw Head-On Vannamei (Lot 912)', testType: 'ELISA (AOZ / AMOZ / CAP / Nitrofuran)', result: 'Not Detected (< 0.1 ppb)', analyst: 'K. S. Narayana (Sr. Microbiologist)', status: 'Cleared for Export' },
        { id: 2, testNo: 'LAB-MB-2026-0389', date: '2026-10-27', sampleType: 'Finished IQF Cooked Tail-On (16/20)', testType: 'TPC / E.coli / Salmonella / Vibrio', result: 'Compliant with USFDA Limits', analyst: 'Dr. P. Swathi (QC Head)', status: 'Cleared for Export' },
        { id: 3, testNo: 'LAB-EL-2026-0413', date: '2026-10-27', sampleType: 'Harvest Pre-Screen Pool 4', testType: 'ELISA Antibiotic Screen', result: 'Negative across all 5 markers', analyst: 'K. S. Narayana', status: 'Pre-Harvest Approved' },
        { id: 4, testNo: 'AUD-BAP-2026-019', date: '2026-10-25', sampleType: 'Processing Line 1 & IQF Tunnel', testType: 'BAP 4-Star Plant Sanitation Audit', result: 'Zero Critical Deficiencies (Score: 98.6%)', analyst: 'External Lead Auditor', status: 'BAP Certified' }
      ];
    }
    // 6. Production Floor Summaries & Anti-Dumping Logs
    else if (tabId === 'floor-summaries' || tabId === 'ad-export-logs' || tabId.includes('floor') || tabId.includes('export-log')) {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'runId', header: 'Shift Run ID', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'date', header: 'Shift Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'line', header: 'Line / Facility', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'product', header: 'Finished Product Style', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
        { field: 'targetQty', header: 'Target (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${Number(v).toLocaleString()}</span>` },
        { field: 'achievedQty', header: 'Achieved (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
        { field: 'efficiency', header: 'Efficiency %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}%</span>` },
        { field: 'shiftHead', header: 'Shift In-Charge', sortable: true, render: v => `<span class="text-xs text-[#172B4D] font-medium">${v}</span>` }
      ];
      rows = [
        { id: 1, runId: 'SHF-PR-2026-0941', date: '2026-10-28', line: 'Freezing Line 1 (IQF)', product: 'Vannamei Easy-Peel 31/40', targetQty: 6000, achievedQty: 6180, efficiency: 103.0, shiftHead: 'M. Ramesh Babu' },
        { id: 2, runId: 'SHF-PR-2026-0942', date: '2026-10-28', line: 'Cooked Line A', product: 'Tail-On Cooked IQF 26/30', targetQty: 4500, achievedQty: 4480, efficiency: 99.5, shiftHead: 'S. K. Verma' },
        { id: 3, runId: 'SHF-PR-2026-0943', date: '2026-10-27', line: 'Plate Freezer Bay 3', product: 'Block Frozen Headless 16/20', targetQty: 8000, achievedQty: 8050, efficiency: 100.6, shiftHead: 'M. Ramesh Babu' },
        { id: 4, runId: 'SHF-PR-2026-0944', date: '2026-10-26', line: 'Value Addition Table 2', product: 'Butterfly Tail-On Skewers', targetQty: 2500, achievedQty: 2470, efficiency: 98.8, shiftHead: 'Ch. Prasad' }
      ];
    }
    // 7. Coldstore Analytics (Valuation, Summaries, Movement & Exceptions)
    else if (tabId.includes('coldstore') || tabId.includes('inventory') || tabId.includes('stock') || tabId.includes('movement') || tabId.includes('exception')) {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'palletRef', header: 'Pallet ID / Ref', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'date', header: 'Placement Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'chamber', header: 'Chamber / Bay', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'product', header: 'Product Item Description', sortable: true, render: v => `<span class="text-xs text-[#172B4D] font-medium">${v}</span>` },
        { field: 'cartons', header: 'Master Cartons', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()} MCs</span>` },
        { field: 'netWeight', header: 'Net Wt (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
        { field: 'temp', header: 'Temp (°C)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}°C</span>` },
        { field: 'status', header: 'Storage Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
      ];
      rows = [
        { id: 1, palletRef: 'PLT-CS-2026-1081', date: '2026-10-28', chamber: 'Coldstore Room 4 (Rack B-12)', product: 'IQF Cooked Tail-On Vannamei 26/30 (6x2kg)', cartons: 640, netWeight: 7680, temp: -21.4, status: 'In Coldstore Stock' },
        { id: 2, palletRef: 'PLT-CS-2026-1082', date: '2026-10-28', chamber: 'Coldstore Room 3 (Rack D-04)', product: 'Block Frozen HLSO Black Tiger 16/20 (6x1.8kg)', cartons: 580, netWeight: 6264, temp: -22.0, status: 'In Coldstore Stock' },
        { id: 3, palletRef: 'PLT-CS-2026-1083', date: '2026-10-27', chamber: 'Coldstore Room 2 (Rack A-08)', product: 'Easy Peel Raw Vannamei 31/40 (10x1kg)', cartons: 820, netWeight: 8200, temp: -20.8, status: 'Allocated for Shipment' },
        { id: 4, palletRef: 'PLT-CS-2026-1084', date: '2026-10-26', chamber: 'Coldstore Room 4 (Rack C-19)', product: 'Raw PDTO Vannamei 41/50 (5x2lb)', cartons: 740, netWeight: 6713, temp: -21.8, status: 'In Coldstore Stock' }
      ];
    }
    // 8. Sales, Export Analytics, Logistics & Financials
    else if (tabId.includes('sales') || tabId.includes('logistics') || tabId.includes('freight') || tabId.includes('financial') || tabId.includes('compliance')) {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'invoiceNo', header: 'Invoice / Container', sortable: true, render: (v, r) => `<div class="flex flex-col"><span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span><span class="text-[10px] font-mono text-[#5E6C84]">${r.containerNo}</span></div>` },
        { field: 'shipDate', header: 'Ship Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'buyer', header: 'Buyer / Consignee', sortable: true, render: (v, r) => `<div class="flex flex-col"><span class="font-semibold text-xs text-[#172B4D]">${v}</span><span class="text-[10px] text-[#5E6C84]">${r.destination}</span></div>` },
        { field: 'port', header: 'Port of Discharge', sortable: true, render: v => `<span class="text-xs text-[#172B4D]">${v}</span>` },
        { field: 'cartons', header: 'Total MCs', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
        { field: 'fobVal', header: 'FOB Value ($)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">$${Number(v).toLocaleString()}</span>` },
        { field: 'freightStatus', header: 'Logistics Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]"><span class="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>${v}</span>` },
        { field: 'realizationStatus', header: 'Realization', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
      ];
      rows = [
        { id: 1, invoiceNo: 'EXP-INV-2026-081', containerNo: 'MSKU-820491-2', shipDate: '2026-10-28', buyer: 'Pacific Coast Seafood LLC', destination: 'Los Angeles, USA', port: 'Port of Long Beach', cartons: 2150, fobVal: 142500, freightStatus: 'Vessel In Transit', realizationStatus: 'LC Realized 100%' },
        { id: 2, invoiceNo: 'EXP-INV-2026-082', containerNo: 'CMAU-491028-6', shipDate: '2026-10-27', buyer: 'Nippon Suisan Kaisha Ltd', destination: 'Tokyo, Japan', port: 'Port of Yokohama', cartons: 1980, fobVal: 168400, freightStatus: 'Vessel In Transit', realizationStatus: 'LC Realized 100%' },
        { id: 3, invoiceNo: 'EXP-INV-2026-083', containerNo: 'HLCU-319402-1', shipDate: '2026-10-26', buyer: 'Euro-Baltic Marine Traders', destination: 'Rotterdam, Netherlands', port: 'Port of Rotterdam', cartons: 2200, fobVal: 139200, freightStatus: 'Customs Cleared', realizationStatus: 'Payment Received' },
        { id: 4, invoiceNo: 'EXP-INV-2026-084', containerNo: 'MEDU-992140-5', shipDate: '2026-10-25', buyer: 'Great American Seafood Imports', destination: 'New York, USA', port: 'Port of New York / New Jersey', cartons: 2400, fobVal: 158000, freightStatus: 'Dispatched from Port', realizationStatus: 'LC Verified' }
      ];
    }
    // 9. Standard Fallback Ledger
    else {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'refNo', header: 'Reference', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'date', header: 'Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'entity', header: 'Entity / Description', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'category', header: 'Category', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6]">${v}</span>` },
        { field: 'quantity', header: 'Quantity', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'value', header: 'Total Value', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}</span>` },
        { field: 'status', header: 'Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
      ];
      rows = [
        { id: 1, refNo: 'REP-EXT-2026-01', date: '2026-10-28', entity: 'Master Packaging & Cartons Ledger', category: 'General Store', quantity: '45,000 MCs', value: '₹26,32,500', status: 'Audited & Verified' },
        { id: 2, refNo: 'REP-EXT-2026-02', date: '2026-10-27', entity: 'Cold Storage Room 4 Pallet Stock', category: 'Finished Goods', quantity: '1,240 Pallets', value: '₹4,89,60,000', status: 'In Coldstore Stock' },
        { id: 3, refNo: 'REP-EXT-2026-03', date: '2026-10-26', entity: 'US Export Consignment Realization', category: 'Export Sales', quantity: '4 Containers (40ft)', value: '$580,000', status: 'Realized in Bank' },
        { id: 4, refNo: 'REP-EXT-2026-04', date: '2026-10-25', entity: 'Pre-Processing Daily Peeling Shift Summary', category: 'Operations', quantity: '28,400 KGs', value: '₹92,30,000', status: 'Shift Completed' }
      ];
    }

    return { columns, rows };
  }
};
