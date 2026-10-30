// Global Reports Module Views (Configured with Direct Submenu Views, 4-Column Filters, Dynamic Report Types & Atlassian Detail Modals)

import { DataTable } from '../components/table.js';
import { Toast } from '../components/toast.js';
import { Modal } from '../components/modal.js';

export const ReportsView = {
  render(containerId, subPage = 'purchase-reports', activeHash = '#/reports/purchase-reports/purchase-reports') {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Determine current report submenu category from hash or subPage
    const cleanHash = (activeHash || '').replace(/^#\/?/, '').replace(/^\/+/, '');
    const parts = cleanHash.split('/');
    let submenuId = parts[1] || subPage || 'purchase-reports';
    if (submenuId === 'purchase') submenuId = 'purchase-reports';
    if (submenuId === 'preprocessing') submenuId = 'preprocessing-reports';
    if (submenuId === 'quality') submenuId = 'quality-reports';
    if (submenuId === 'production') submenuId = 'production-analytics';
    if (submenuId === 'coldstore') submenuId = 'coldstore-analytics';
    if (submenuId === 'sales') submenuId = 'sales-export-analytics';

    const submenuTitles = {
      'purchase-reports': 'Purchase Reports',
      'preprocessing-reports': 'Pre-Processing Reports',
      'quality-reports': 'Quality Control Reports',
      'production-analytics': 'Production Analytics',
      'coldstore-analytics': 'Coldstore Analytics',
      'sales-export-analytics': 'Sales & Export Analytics'
    };

    const pageTitle = submenuTitles[submenuId] || 'Reports & Analytics';

    container.innerHTML = `
      <div id="reports-subpage-content" class="space-y-3"></div>
    `;

    const subContainer = document.getElementById('reports-subpage-content');
    if (!subContainer) return;

    const reportTypeOptionsHtml = this.getReportTypeOptions(submenuId);
    let currentReportType = submenuId === 'sales-export-analytics' ? 'shipment-report' : 'ALL';

    // Generate specific contextual dataset and columns based on active submenu & report type
    let reportData = this.getReportData(submenuId, currentReportType, pageTitle);

    subContainer.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div class="flex items-center gap-3 flex-wrap">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">${pageTitle}</h1>
          <div class="w-64 sm:w-72">
            <select id="rep-header-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              ${reportTypeOptionsHtml}
            </select>
          </div>
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

        <div id="rep-flt-body" class="dt-top-filter-body"></div>
      </div>

      <!-- Report Table Card -->
      <div id="reports-table-container"></div>
    `;

    const renderTable = (rows) => {
      const title = currentReportType === 'pending-contracts'
        ? `Pending Contracts Records (${rows.length})`
        : `${pageTitle} Records (${rows.length})`;

      new DataTable({
        containerId: 'reports-table-container',
        tableTitle: title,
        searchable: true,
        exportable: true,
        selectable: true,
        pageSize: 10,
        columns: reportData.columns,
        data: rows,
        onRowClick: (row) => this.showReportDetails(row, currentReportType === 'pending-contracts' ? 'Pending Contract' : pageTitle)
      });
    };

    // Render Filter Body based on Report Type
    const renderFilterBody = (type) => {
      const fltBody = subContainer.querySelector('#rep-flt-body');
      if (!fltBody) return;

      if (type === 'pending-contracts') {
        fltBody.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
            <!-- 1. Select Year -->
            <div>
              <label for="flt-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Year</label>
              <select id="flt-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="2026-2027" selected>2026 - 2027</option>
                <option value="2025-2026">2025 - 2026</option>
                <option value="2024-2025">2024 - 2025</option>
              </select>
            </div>

            <!-- 2. Select Exporter -->
            <div>
              <label for="flt-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Exporter</label>
              <select id="flt-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Exporters</option>
                <option value="devi-fisheries" selected>Devi Fisheries Limited</option>
                <option value="devi-sea-foods">Devi Sea Foods Ltd</option>
                <option value="devi-marine">Devi Marine Food Exports</option>
              </select>
            </div>

            <!-- 3. Select Consignee -->
            <div>
              <label for="flt-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Consignee</label>
              <select id="flt-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL" selected>All Consignees</option>
                <option value="red-lobster">Red Lobster Seafood Sourcing</option>
                <option value="kyokuyo">Kyokuyo Global Foods Ltd</option>
                <option value="euro-baltic">Euro-Baltic Marine Traders</option>
                <option value="pacific-coast">Pacific Coast Seafood LLC</option>
                <option value="meridian">Meridian Global Foods LLC</option>
                <option value="aquastar">AquaStar Global Imports</option>
              </select>
            </div>

            <!-- 4. Select Country -->
            <div>
              <label for="flt-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Country</label>
              <select id="flt-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL" selected>All Countries</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
                <option value="Netherlands">Netherlands</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <!-- 5. Priority -->
            <div>
              <label for="flt-priority" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Priority</label>
              <select id="flt-priority" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL" selected>All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <!-- 6. Select Plant -->
            <div>
              <label for="flt-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Plant</label>
              <select id="flt-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL" selected>All Plants</option>
                <option value="Plant 1">Unit 1 - Singarayakonda</option>
                <option value="Plant 2">Unit 2 - Visakhapatnam</option>
                <option value="Plant 3">Unit 3 - Bapatla</option>
                <option value="Plant 5">Unit 5 - Processing Hub</option>
              </select>
            </div>

            <!-- 7. SEARCH BUTTON (Row 2, Column 3 - Left after Plant) -->
            <div class="flex items-end">
              <button type="button" id="rep-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        `;
      } else {
        fltBody.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
            <!-- 1. SEARCH -->
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

            <!-- 4. SEARCH BUTTON (Row 2, Column 1 - Left side after TO DATE) -->
            <div class="flex items-end">
              <button type="button" id="rep-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        `;
      }

      // Re-attach Search listener
      fltBody.querySelector('#rep-flt-search-btn')?.addEventListener('click', handleSearch);
    };

    // Filter Search Execution
    const handleSearch = () => {
      let filtered = [...reportData.rows];
      if (currentReportType === 'pending-contracts') {
        const yr = subContainer.querySelector('#flt-year')?.value;
        const exp = subContainer.querySelector('#flt-exporter')?.value;
        const cons = subContainer.querySelector('#flt-consignee')?.value;
        const ctry = subContainer.querySelector('#flt-country')?.value;
        const prio = subContainer.querySelector('#flt-priority')?.value;
        const plnt = subContainer.querySelector('#flt-plant')?.value;

        if (yr && yr !== 'ALL') filtered = filtered.filter(r => r.year === yr);
        if (exp && exp !== 'ALL') filtered = filtered.filter(r => r.exporter === exp);
        if (cons && cons !== 'ALL') filtered = filtered.filter(r => r.consigneeKey === cons || (r.buyer && r.buyer.toLowerCase().includes(cons.replace('-', ' '))));
        if (ctry && ctry !== 'ALL') filtered = filtered.filter(r => r.country.toLowerCase() === ctry.toLowerCase() || r.destination.toLowerCase().includes(ctry.toLowerCase()));
        if (prio && prio !== 'ALL') filtered = filtered.filter(r => r.priority.toLowerCase() === prio.toLowerCase());
        if (plnt && plnt !== 'ALL') filtered = filtered.filter(r => r.plant === plnt);
      } else {
        const q = subContainer.querySelector('#rep-flt-search')?.value?.trim().toLowerCase();
        if (q) {
          filtered = filtered.filter(row => Object.values(row).some(v => String(v).toLowerCase().includes(q)));
        }
      }
      renderTable(filtered);
    };

    // Initial Filter Body & Table
    renderFilterBody(currentReportType);
    renderTable(reportData.rows);

    // Report Type change listeners (sync header & filter dropdowns)
    const onReportTypeChange = (newType, sourceEl) => {
      currentReportType = newType;
      const headerSelect = subContainer.querySelector('#rep-header-type');
      if (headerSelect && headerSelect !== sourceEl) headerSelect.value = newType;

      reportData = this.getReportData(submenuId, currentReportType, pageTitle);
      renderFilterBody(currentReportType);
      renderTable(reportData.rows);
      const text = sourceEl?.options ? sourceEl.options[sourceEl.selectedIndex]?.text : currentReportType;
      Toast.show(`Loaded ${text || currentReportType}`, 'info');
    };

    subContainer.querySelector('#rep-header-type')?.addEventListener('change', (e) => {
      onReportTypeChange(e.target.value, e.target);
    });

    // Reset button listener
    subContainer.querySelector('#rep-flt-reset-btn')?.addEventListener('click', () => {
      if (currentReportType === 'pending-contracts') {
        const yr = subContainer.querySelector('#flt-year');
        const exp = subContainer.querySelector('#flt-exporter');
        const cons = subContainer.querySelector('#flt-consignee');
        const ctry = subContainer.querySelector('#flt-country');
        const prio = subContainer.querySelector('#flt-priority');
        const plnt = subContainer.querySelector('#flt-plant');
        if (yr) yr.value = '2026-2027';
        if (exp) exp.value = 'devi-fisheries';
        if (cons) cons.value = 'ALL';
        if (ctry) ctry.value = 'ALL';
        if (prio) prio.value = 'ALL';
        if (plnt) plnt.value = 'ALL';
      } else {
        const searchInput = subContainer.querySelector('#rep-flt-search');
        if (searchInput) searchInput.value = '';
        const fromInput = subContainer.querySelector('#rep-flt-from');
        if (fromInput) fromInput.value = '2026-10-01';
        const toInput = subContainer.querySelector('#rep-flt-to');
        if (toInput) toInput.value = '2026-10-30';
      }
      renderTable(reportData.rows);
      Toast.show('Filters reset', 'info');
    });

    // Action button listeners for Pending Contracts
    subContainer.addEventListener('click', (e) => {
      const viewBtn = e.target.closest('.btn-pc-view');
      if (viewBtn) {
        e.stopPropagation();
        const id = Number(viewBtn.dataset.id);
        const r = reportData.rows.find(item => item.id === id);
        if (r) this.showReportDetails(r, 'Pending Contract');
        return;
      }
      const dlBtn = e.target.closest('.btn-pc-download');
      if (dlBtn) {
        e.stopPropagation();
        const id = Number(dlBtn.dataset.id);
        const r = reportData.rows.find(item => item.id === id);
        if (r) Toast.show(`Contract ${r.orderNo} downloaded successfully!`, 'success');
        return;
      }
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

  // Report Type Options by Submenu
  getReportTypeOptions(submenuId) {
    if (submenuId === 'sales-export-analytics' || submenuId.includes('sales')) {
      return `
        <option value="pending-contracts">Pending Contracts</option>
        <option value="price-book">Price Book</option>
        <option value="approved-contracts">Approved Contracts</option>
        <option value="eta-status">OUT of ETD/ETA Report</option>
        <option value="fda-examination">FDA Examination Report</option>
        <option value="mpeda-report">MPEDA Report</option>
        <option value="shipment-report" selected>Shipment Report</option>
        <option value="lab-report">Lab Report</option>
        <option value="q-certificate">Q Certificate Report</option>
        <option value="pending-payments">Pending Payments</option>
        <option value="pending-negotiation">Pending Negotiation Report</option>
        <option value="bills-realization">Bills Realization</option>
        <option value="fc-utilized">FC Utilized Report</option>
        <option value="gst-sales">GST Sales report</option>
        <option value="clearing-agent">Clearing Agent Report</option>
        <option value="transit-insurance">M Transit Ins & Payments</option>
        <option value="packing-report">Packing Report</option>
        <option value="lineitemwise-report">Shipment LineItemwise Report</option>
        <option value="return-container">Return Container Report</option>
        <option value="freight-rates">Freight Rates Report</option>
      `;
    }
    if (submenuId === 'purchase-reports' || submenuId.includes('purchase')) {
      return `
        <option value="ALL" selected>All Purchase Reports</option>
        <option value="inward">RM Inward & Arrivals</option>
        <option value="procurement">Supplier Procurement Report</option>
        <option value="valuation">Lot Valuation & Tracking</option>
        <option value="bills">Bills & Payment Status</option>
      `;
    }
    if (submenuId === 'preprocessing-reports' || submenuId.includes('preproc')) {
      return `
        <option value="ALL" selected>All Pre-Processing Reports</option>
        <option value="deheading">Deheading & Grading</option>
        <option value="peeling">Peeling & Recovery Report</option>
        <option value="chemicals">Chemicals & Consumption</option>
      `;
    }
    if (submenuId === 'quality-reports' || submenuId.includes('quality') || submenuId.includes('qc')) {
      return `
        <option value="ALL" selected>All Quality Control Reports</option>
        <option value="inspections">RM QC Inspections</option>
        <option value="lab">Lab & Antibiotic Clearance</option>
        <option value="microbiology">Microbiology Testing</option>
        <option value="audits">QC Audits & Compliance</option>
      `;
    }
    if (submenuId === 'production-analytics' || submenuId.includes('production')) {
      return `
        <option value="ALL" selected>All Production Analytics</option>
        <option value="yield">Yield Reports</option>
        <option value="floor">Floor Summaries</option>
        <option value="ad">Anti-Dumping Export Logs</option>
      `;
    }
    if (submenuId === 'coldstore-analytics' || submenuId.includes('coldstore')) {
      return `
        <option value="ALL" selected>All Coldstore Analytics</option>
        <option value="valuation">Inventory Valuation</option>
        <option value="stock">Stock Summaries</option>
        <option value="movement">Movement Logs</option>
        <option value="exceptions">Operational Exceptions</option>
      `;
    }
    return `
      <option value="ALL" selected>All Report Types</option>
      <option value="detailed">Detailed Audit Ledger</option>
      <option value="summary">Summary Report</option>
      <option value="valuation">Valuation & Financials</option>
    `;
  },

  // Modal: Show Details Page matching our Atlassian UI style
  showReportDetails(row, pageTitle) {
    if (!row) return;

    const ref = row.docNo || row.refNo || row.batchNo || row.testNo || row.palletRef || row.runId || row.billNo || row.invoiceNo || row.contractNo || row.orderNo || ('REC-' + row.id);
    const date = row.date || row.productionDate || row.shipDate || row.shipmentDate || row.auditDate || row.etd || '2026-10-28';
    const status = row.status || row.priority || row.qcStatus || row.paymentStatus || row.freightStatus || row.realizationStatus || row.etaStatus || 'Audited & Verified';

    const excludedKeys = new Set(['id', 'actions', 'sNo', 'consigneeKey']);
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
        if (k.toLowerCase().includes('val') || k.toLowerCase().includes('gross') || k.toLowerCase().includes('amount') || k.toLowerCase().includes('rate') || k.toLowerCase().includes('netpayable') || k.toLowerCase().includes('freight')) {
          return '₹' + Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 });
        }
        return Number(v).toLocaleString();
      }
      return String(v);
    };

    Modal.open({
      title: `${pageTitle} Details: ${ref}`,
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
              <span class="font-semibold text-xs text-[#172B4D]">${pageTitle}</span>
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
                  <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">Verification Standard</span>
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
  getReportData(submenuId, reportType = 'ALL', pageTitle = 'Reports') {
    let columns = [];
    let rows = [];

    // ==========================================
    // 1. Sales & Export Analytics (with 20 distinct types)
    // ==========================================
    if (submenuId === 'sales-export-analytics' || submenuId.includes('sales')) {
      if (reportType === 'pending-contracts') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'orderNo', header: 'ORDER NO', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
          { field: 'buyer', header: 'BUYER', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'brand', header: 'BRAND', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6]">${v}</span>` },
          { field: 'variety', header: 'VARIETY', sortable: true, render: v => `<span class="text-xs font-medium text-[#172B4D]">${v}</span>` },
          { field: 'mcs', header: 'MCS', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'pack', header: 'PACK', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'grade', header: 'GRADE', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}</span>` },
          { field: 'shipmentDate', header: 'SHIPMENT DATE AS PER PO', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'destination', header: 'DESTINATION', sortable: true, render: v => `<span class="text-xs text-[#172B4D]">${v}</span>` },
          { field: 'priority', header: 'Priority', sortable: true, render: v => {
            const p = String(v || '').toLowerCase();
            let bg = 'bg-[#FFF0B3] text-[#172B4D] border-[#FFE380]';
            let dot = 'bg-[#FFAB00]';
            if (p === 'high') {
              bg = 'bg-[#FFEBE6] text-[#DE350B] border-[#FFBDAD]';
              dot = 'bg-[#DE350B]';
            } else if (p === 'low') {
              bg = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              dot = 'bg-[#00875A]';
            }
            return `<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${bg}"><span class="w-1.5 h-1.5 rounded-full ${dot}"></span>${v}</span>`;
          }},
          { field: 'actions', header: 'Actions', sortable: false, render: (v, r) => `
            <div class="flex items-center gap-1.5 justify-center">
              <button type="button" class="btn-pc-view p-1.5 rounded hover:bg-[#EBECF0] text-[#00A4B7] transition-colors cursor-pointer" data-id="${r.id}" title="View Order Details">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </button>
              <button type="button" class="btn-pc-download p-1.5 rounded hover:bg-[#EBECF0] text-[#107C41] transition-colors cursor-pointer" data-id="${r.id}" title="Download Order">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </button>
            </div>
          `}
        ];
        rows = [
          { id: 1, orderNo: 'PO-USA-2026-8801', buyer: 'Red Lobster Seafood Sourcing', consigneeKey: 'red-lobster', brand: 'Devi Gold', variety: 'Vannamei EZ-Peel IQF', mcs: 2200, pack: '10 x 2 Lbs', grade: '26/30', shipmentDate: '2026-11-15', destination: 'Los Angeles, USA', country: 'USA', priority: 'High', exporter: 'devi-fisheries', plant: 'Plant 1', year: '2026-2027', fobRate: 7.80, contractValue: 343200, status: 'Pending Buyer Sign-off' },
          { id: 2, orderNo: 'PO-JPN-2026-4412', buyer: 'Kyokuyo Global Foods Ltd', consigneeKey: 'kyokuyo', brand: 'Ocean Prime', variety: 'Vannamei Nobashi Tray', mcs: 1600, pack: '20 x 300g', grade: '21/25', shipmentDate: '2026-11-20', destination: 'Yokohama, Japan', country: 'Japan', priority: 'Medium', exporter: 'devi-fisheries', plant: 'Plant 2', year: '2026-2027', fobRate: 9.10, contractValue: 145600, status: 'Price Revision Requested' },
          { id: 3, orderNo: 'PO-EUR-2026-1930', buyer: 'Euro-Baltic Marine Traders', consigneeKey: 'euro-baltic', brand: 'Arctic Feast', variety: 'Cooked Tail-On IQF', mcs: 2050, pack: '10 x 1 Kg', grade: '31/40', shipmentDate: '2026-11-25', destination: 'Rotterdam, Netherlands', country: 'Netherlands', priority: 'High', exporter: 'devi-sea-foods', plant: 'Plant 3', year: '2026-2027', fobRate: 8.20, contractValue: 168100, status: 'LC Drafting in Progress' },
          { id: 4, orderNo: 'PO-USA-2026-8804', buyer: 'Pacific Coast Seafood LLC', consigneeKey: 'pacific-coast', brand: 'Devi Classic', variety: 'Raw Headless Block', mcs: 2500, pack: '6 x 4 Lbs', grade: '16/20', shipmentDate: '2026-12-05', destination: 'New York, USA', country: 'USA', priority: 'Low', exporter: 'devi-fisheries', plant: 'Plant 5', year: '2026-2027', fobRate: 9.80, contractValue: 245000, status: 'Draft Agreement Sent' },
          { id: 5, orderNo: 'PO-UK-2026-0318', buyer: 'Meridian Global Foods LLC', consigneeKey: 'meridian', brand: 'Royal Blue', variety: 'Black Tiger HLSO', mcs: 1400, pack: '10 x 1 Kg', grade: '13/15', shipmentDate: '2026-12-10', destination: 'Felixstowe, UK', country: 'UK', priority: 'Medium', exporter: 'devi-marine', plant: 'Plant 2', year: '2026-2027', fobRate: 12.40, contractValue: 173600, status: 'Pending LC Confirmation' },
          { id: 6, orderNo: 'PO-CAN-2026-0521', buyer: 'AquaStar Global Imports', consigneeKey: 'aquastar', brand: 'Devi Gold', variety: 'Vannamei Peeled Deveined', mcs: 1850, pack: '5 x 2 Lbs', grade: '41/50', shipmentDate: '2026-12-18', destination: 'Vancouver, Canada', country: 'Canada', priority: 'Low', exporter: 'devi-fisheries', plant: 'Plant 1', year: '2026-2027', fobRate: 6.40, contractValue: 118400, status: 'Under Review' }
        ];
      } else if (reportType === 'approved-contracts') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'contractNo', header: 'Contract No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
          { field: 'date', header: 'Contract Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'buyer', header: 'Buyer / Consignee', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'destination', header: 'Destination Country', sortable: true, render: v => `<span class="text-xs text-[#172B4D]">${v}</span>` },
          { field: 'variety', header: 'Product Item', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'quantity', header: 'Contract Qty (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'fobRate', header: 'FOB Rate/Kg', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">$${v}</span>` },
          { field: 'contractValue', header: 'Total Value ($)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">$${Number(v).toLocaleString()}</span>` },
          { field: 'status', header: 'Contract Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, contractNo: 'CTR-EXP-2026-088', date: '2026-10-24', buyer: 'Pacific Coast Seafood LLC', destination: 'USA', variety: 'Vannamei Easy-Peel 31/40', quantity: 24000, fobRate: 7.20, contractValue: 172800, status: 'Approved by Director' },
          { id: 2, contractNo: 'CTR-EXP-2026-089', date: '2026-10-23', buyer: 'Nippon Suisan Kaisha Ltd', destination: 'Japan', variety: 'Black Tiger HLSO 16/20', quantity: 18000, fobRate: 11.50, contractValue: 207000, status: 'Approved by Director' },
          { id: 3, contractNo: 'CTR-EXP-2026-090', date: '2026-10-22', buyer: 'Euro-Baltic Marine Traders', destination: 'Netherlands', variety: 'Cooked Tail-On IQF 26/30', quantity: 22000, fobRate: 8.40, contractValue: 184800, status: 'Approved by Director' }
        ];
      } else if (reportType === 'eta-status') {
        columns = [
          { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'containerNo', header: 'Container No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
          { field: 'shippingLine', header: 'Shipping Line', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'vessel', header: 'Vessel / Voyage', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'destination', header: 'Discharge Port', sortable: true, render: v => `<span class="text-xs text-[#172B4D]">${v}</span>` },
          { field: 'etd', header: 'ETD Actual', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'originalEta', header: 'Original ETA', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'revisedEta', header: 'Revised ETA', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#DE350B]">${v}</span>` },
          { field: 'delayDays', header: 'Delay Days', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#DE350B]">+${v} Days</span>` },
          { field: 'etaStatus', header: 'ETA Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFEBE6] text-[#DE350B] border border-[#FFBDAD]"><span class="w-1.5 h-1.5 rounded-full bg-[#DE350B]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, containerNo: 'MSKU-820491-2', shippingLine: 'Maersk Line', vessel: 'Maersk Mc-Kinney / 2608W', destination: 'Port of Long Beach (USA)', etd: '2026-10-08', originalEta: '2026-11-04', revisedEta: '2026-11-10', delayDays: 6, etaStatus: 'Delayed at Transshipment' },
          { id: 2, containerNo: 'CMAU-491028-6', shippingLine: 'CMA CGM', vessel: 'CMA CGM Palais / 0914S', destination: 'Port of Yokohama (Japan)', etd: '2026-10-12', originalEta: '2026-10-29', revisedEta: '2026-11-02', delayDays: 4, etaStatus: 'Weather Delay' },
          { id: 3, containerNo: 'HLCU-319402-1', shippingLine: 'Hapag-Lloyd', vessel: 'Al Jasrah / 2618E', destination: 'Port of Rotterdam (NL)', etd: '2026-10-14', originalEta: '2026-11-08', revisedEta: '2026-11-13', delayDays: 5, etaStatus: 'Port Congestion' }
        ];
      } else if (reportType === 'freight-rates') {
        columns = [
          { field: 'sNo', header: 'S No', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'carrier', header: 'Ocean Carrier', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'pol', header: 'Port of Loading', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'pod', header: 'Port of Discharge', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'containerSize', header: 'Container Type', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] font-bold">${v}</span>` },
          { field: 'freightUsd', header: 'Base Freight ($)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">$${v}</span>` },
          { field: 'baf', header: 'BAF / Bunker ($)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">$${v}</span>` },
          { field: 'totalFreight', header: 'Total Ocean Freight ($)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">$${Number(v).toLocaleString()}</span>` },
          { field: 'validity', header: 'Rate Validity', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'status', header: 'Rate Agreement', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, carrier: 'Maersk Line India', pol: 'Visakhapatnam (INVTZ)', pod: 'Long Beach, USA (USLGB)', containerSize: '40ft Reefer High Cube', freightUsd: 4850, baf: 420, totalFreight: 5270, validity: '2026-11-30', status: 'Contracted Rate' },
          { id: 2, carrier: 'MSC Mediterranean', pol: 'Visakhapatnam (INVTZ)', pod: 'New York, USA (USNYC)', containerSize: '40ft Reefer High Cube', freightUsd: 5400, baf: 480, totalFreight: 5880, validity: '2026-11-30', status: 'Contracted Rate' },
          { id: 3, carrier: 'ONE Ocean Network', pol: 'Visakhapatnam (INVTZ)', pod: 'Yokohama, Japan (JPYOK)', containerSize: '40ft Reefer High Cube', freightUsd: 2950, baf: 310, totalFreight: 3260, validity: '2026-12-15', status: 'Contracted Rate' },
          { id: 4, carrier: 'Hapag-Lloyd AG', pol: 'Visakhapatnam (INVTZ)', pod: 'Rotterdam, NL (NLRTM)', containerSize: '40ft Reefer High Cube', freightUsd: 3800, baf: 360, totalFreight: 4160, validity: '2026-11-30', status: 'Spot Rate Cleared' }
        ];
      } else {
        // Standard Comprehensive Shipment Report & General Sales
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
    }
    // ==========================================
    // 2. Purchase Reports
    // ==========================================
    else if (submenuId === 'purchase-reports' || submenuId.includes('purchase')) {
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
    // ==========================================
    // 3. Pre-Processing Reports
    // ==========================================
    else if (submenuId === 'preprocessing-reports' || submenuId.includes('preproc')) {
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
    // ==========================================
    // 4. Quality Control Reports
    // ==========================================
    else if (submenuId === 'quality-reports' || submenuId.includes('quality') || submenuId.includes('qc')) {
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
    // ==========================================
    // 5. Production Analytics
    // ==========================================
    else if (submenuId === 'production-analytics' || submenuId.includes('production')) {
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
    // ==========================================
    // 6. Coldstore Analytics
    // ==========================================
    else if (submenuId === 'coldstore-analytics' || submenuId.includes('coldstore')) {
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
    // ==========================================
    // 7. Standard Fallback Ledger
    // ==========================================
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
