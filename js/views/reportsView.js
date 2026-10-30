// Global Reports Module Views (Configured with On-Screen Tabs, 4-Column Filters & Interactive Data Tables)

import { TabBar } from '../components/tabBar.js';
import { DataTable } from '../components/table.js';
import { Toast } from '../components/toast.js';

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

    const submenuTitle = tabContext?.submenu?.title || 'Analytical Reports';
    const tabLabel = tabContext?.submenu?.tabs?.find(t => t.id === subPage)?.label || subPage.replace(/-/g, ' ');

    // Generate specific contextual dataset and columns based on active tab
    const reportData = this.getReportData(subPage, tabLabel);

    subContainer.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">${tabLabel}</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">${submenuTitle} — Comprehensive audit and analytical extract ledger</p>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="rep-export-excel-btn" class="btn-primary px-3.5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span>Export Report</span>
          </button>
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
        pageSize: 10,
        columns: reportData.columns,
        data: rows
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

    subContainer.querySelector('#rep-export-excel-btn')?.addEventListener('click', () => {
      Toast.show(`Generating export extract for ${tabLabel}...`, 'info');
      setTimeout(() => {
        Toast.show(`${tabLabel} report downloaded successfully!`, 'success');
      }, 700);
    });
  },

  // Generate tab-specific columns and realistic analytical rows
  getReportData(tabId, label) {
    // Default columns structure
    let columns = [
      { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
      { field: 'refNo', header: 'Reference', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${v}</span>` },
      { field: 'date', header: 'Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
      { field: 'entity', header: 'Entity / Description', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
      { field: 'category', header: 'Category', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6]">${v}</span>` },
      { field: 'quantity', header: 'Quantity', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
      { field: 'value', header: 'Total Value', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}</span>` },
      { field: 'status', header: 'Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
    ];

    let rows = [];

    if (tabId.includes('inward') || tabId.includes('procurement') || tabId.includes('purchase')) {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'docNo', header: 'GRN / Arrival No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'date', header: 'Arrival Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'supplier', header: 'Supplier / Farmer', sortable: true, render: (v, r) => `<div class="flex flex-col"><span class="font-semibold text-xs text-[#172B4D]">${v}</span><span class="text-[10px] text-[#5E6C84]">${r.location}</span></div>` },
        { field: 'lotNo', header: 'Lot No', sortable: true, render: v => `<span class="font-mono text-xs text-[#00A4B7] font-semibold">${v}</span>` },
        { field: 'variety', header: 'Variety', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
        { field: 'count', header: 'Count / Size', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] font-bold">${v}</span>` },
        { field: 'netWeight', header: 'Net Wt (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
        { field: 'grossVal', header: 'Gross Value', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
        { field: 'qcStatus', header: 'QC Status', sortable: true, render: v => `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644]">${v}</span>` }
      ];
      rows = [
        { id: 1, docNo: 'ARR-2026-1044', date: '2026-10-28', supplier: 'Sri Sai Ram Aqua Farm', location: 'Bhimavaram Cluster', lotNo: 'LOT-2026-0912', variety: 'Vannamei Fresh', count: '30/40', netWeight: 8450, grossVal: 2704000, qcStatus: 'Passed Grade A' },
        { id: 2, docNo: 'ARR-2026-1045', date: '2026-10-28', supplier: 'Krishna Delta Aqua Producers', location: 'Machilipatnam Hub', lotNo: 'LOT-2026-0913', variety: 'Black Tiger', count: '20/25', netWeight: 6200, grossVal: 3410000, qcStatus: 'Passed Grade A' },
        { id: 3, docNo: 'ARR-2026-1046', date: '2026-10-27', supplier: 'Godavari Coastal Farms Ltd', location: 'Narsapur Zone', lotNo: 'LOT-2026-0914', variety: 'Vannamei Fresh', count: '40/50', netWeight: 9800, grossVal: 2842000, qcStatus: 'Passed Grade A' },
        { id: 4, docNo: 'ARR-2026-1047', date: '2026-10-26', supplier: 'Suryalanka Marine Culture', location: 'Bapatla Belt', lotNo: 'LOT-2026-0915', variety: 'Vannamei Fresh', count: '25/30', netWeight: 11200, grossVal: 3920000, qcStatus: 'Passed Grade A' }
      ];
    } else if (tabId.includes('yield') || tabId.includes('deheading') || tabId.includes('peeling')) {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'batchNo', header: 'Process Batch', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${v}</span>` },
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
    } else if (tabId.includes('qc') || tabId.includes('lab') || tabId.includes('microbiology')) {
      columns = [
        { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'testNo', header: 'Test Sample ID', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'date', header: 'Sampling Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'sampleType', header: 'Sample Description', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'testType', header: 'Test Protocol', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
        { field: 'result', header: 'Test Findings', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}</span>` },
        { field: 'analyst', header: 'Tested By', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
        { field: 'status', header: 'Clearance Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644]">${v}</span>` }
      ];
      rows = [
        { id: 1, testNo: 'LAB-EL-2026-0412', date: '2026-10-28', sampleType: 'Raw Head-On Vannamei (Lot 912)', testType: 'ELISA (AOZ / AMOZ / CAP / Nitrofuran)', result: 'Not Detected (< 0.1 ppb)', analyst: 'K. S. Narayana (Sr. Microbiologist)', status: 'Cleared for Export' },
        { id: 2, testNo: 'LAB-MB-2026-0389', date: '2026-10-27', sampleType: 'Finished IQF Cooked Tail-On (16/20)', testType: 'TPC / E.coli / Salmonella / Vibrio', result: 'Compliant with USFDA Limits', analyst: 'Dr. P. Swathi (QC Head)', status: 'Cleared for Export' },
        { id: 3, testNo: 'LAB-EL-2026-0413', date: '2026-10-27', sampleType: 'Harvest Pre-Screen Pool 4', testType: 'ELISA Antibiotic Screen', result: 'Negative across all 5 markers', analyst: 'K. S. Narayana', status: 'Pre-Harvest Approved' }
      ];
    } else {
      // General ledger dataset
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
