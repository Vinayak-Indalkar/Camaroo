// Reports View Module for Enterprise Fisheries & Cold Storage Management
// Implements dynamic Search & Filters and contextual Data Tables per Report Type across all submenus

import { DataTable } from '../components/table.js';
import { Toast } from '../components/toast.js';
import { Modal } from '../components/modal.js';

export const ReportsView = {
  render(containerTarget, activeSubmenu, activeHash) {
    const container = typeof containerTarget === 'string' ? document.getElementById(containerTarget) : containerTarget;
    if (!container) return;

    let submenuId = activeSubmenu || 'purchase-reports';
    if (activeHash) {
      const parts = activeHash.replace(/^#\/?/, '').split('/');
      if (parts[1]) submenuId = parts[1];
    }
    let pageTitle = '';

    const titlesMap = {
      'purchase-reports': 'Purchase Reports',
      'preprocessing-reports': 'Pre-Processing Reports',
      'quality-reports': 'Quality Control Reports',
      'production-analytics': 'Production Analytics',
      'coldstore-analytics': 'Coldstore Analytics',
      'sales-export-analytics': 'Sales & Export Analytics'
    };

    pageTitle = titlesMap[submenuId] || (submenuId ? submenuId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Reports');

    let currentReportType = submenuId === 'sales-export-analytics' || submenuId.includes('sales')
      ? 'pending-contracts'
      : (submenuId === 'purchase-reports' || submenuId.includes('purchase')
        ? 'purchase-report'
        : (submenuId === 'preprocessing-reports' || submenuId.includes('preproc')
          ? 'rm-received-daywise'
          : (submenuId === 'quality-reports' || submenuId.includes('quality') || submenuId.includes('qc')
            ? 'buyer-request-list'
            : (submenuId === 'production-analytics' || submenuId.includes('production')
              ? 'soaking-floor-balance'
              : (submenuId === 'coldstore-analytics' || submenuId.includes('coldstore')
                ? 'rm-req'
                : 'ALL')))));

    const reportTypeOptionsHtml = this.getReportTypeOptions(submenuId);
    let reportData = this.getReportData(submenuId, currentReportType, pageTitle);
    let typeLabel = this.getReportTypeLabel(submenuId, currentReportType, pageTitle);

    container.innerHTML = `
      <div id="reports-subpage-content" class="space-y-4">
        <!-- Page Header -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
          <div class="flex items-center gap-4 flex-wrap">
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight" id="rep-page-title">${pageTitle}</h1>
            <div class="flex items-center gap-2">
              <label for="rep-flt-type" class="text-xs font-bold text-[#5E6C84] whitespace-nowrap uppercase tracking-wider">Report Type:</label>
              <select id="rep-flt-type" class="text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] min-w-[240px]">
                ${reportTypeOptionsHtml}
              </select>
            </div>
          </div>
        </div>

        <!-- Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="rep-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="rep-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg id="rep-flt-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <div id="rep-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            ${this.getFilterFieldsHtml(submenuId, currentReportType)}
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="reports-table-container"></div>
      </div>
    `;

    // Render Table Component with Fixed Actions Column and Checkbox Selection
    const tableContainer = container.querySelector('#reports-table-container');
    let table = null;

    const renderReportsTable = (data) => {
      table = new DataTable({
        containerId: 'reports-table-container',
        container: tableContainer,
        tableTitle: `${typeLabel} (${data.length})`,
        columns: (reportData.columns || []).filter(c => c.field !== 'actions'),
        data: data,
        searchable: true,
        pageSize: 10,
        selectable: true,
        showSelectedCount: false,
        exportable: true,
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'Download',
            title: 'Download Report',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>`,
            onClick: (row) => {
              Toast.show(`Downloading report for ${row.billNo || row.docNo || row.lotNo || row.orderNo || row.rackNo || row.qcNo || row.trackId || row.reqNo || 'record'}...`, 'success');
            }
          }
        ],
        onRowClick: (row) => this.showReportDetails(row, typeLabel)
      });
    };

    renderReportsTable(reportData.rows);

    // Attach Event Listeners for Dynamic Filters
    const attachFilterEvents = () => {
      const searchBtn = container.querySelector('#rep-search-btn');
      const resetBtn = container.querySelector('#rep-flt-reset-btn');
      const filterBody = container.querySelector('#rep-flt-body');

      const handleFilter = () => {
        let filtered = [...reportData.rows];
        const inputs = filterBody ? filterBody.querySelectorAll('input, select') : [];
        let hasActiveFilters = false;

        inputs.forEach(input => {
          const val = input.value.trim().toLowerCase();
          if (!val || val === 'all') return;
          hasActiveFilters = true;

          if (input.type === 'date') {
            filtered = filtered.filter(row => {
              const rowDates = [row.date, row.billDate, row.arrivalDate, row.harvestDate, row.shiftDate, row.etdDate, row.dueDate].filter(Boolean);
              return rowDates.some(d => String(d).includes(val));
            });
          } else {
            filtered = filtered.filter(row => {
              return Object.values(row).some(v => String(v).toLowerCase().includes(val));
            });
          }
        });

        renderReportsTable(filtered);
        if (hasActiveFilters) {
          Toast.show(`Filtered ${filtered.length} matching record(s)`, 'info');
        }
      };

      searchBtn?.addEventListener('click', handleFilter);

      filterBody?.querySelectorAll('input').forEach(inp => {
        inp.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleFilter();
          }
        });
      });

      resetBtn?.addEventListener('click', () => {
        const inputs = filterBody ? filterBody.querySelectorAll('input, select') : [];
        inputs.forEach(input => {
          if (input.tagName === 'SELECT') {
            input.selectedIndex = 0;
          } else {
            input.value = '';
          }
        });
        renderReportsTable(reportData.rows);
        Toast.show('Filters reset', 'info');
      });
    };

    attachFilterEvents();

    // Type Select change: Dynamically changes Search & Filter card AND Data Table
    const typeSelect = container.querySelector('#rep-flt-type');
    const updateViewForType = (type) => {
      currentReportType = type;
      typeLabel = this.getReportTypeLabel(submenuId, currentReportType, pageTitle);

      const filterBody = container.querySelector('#rep-flt-body');
      if (filterBody) {
        filterBody.innerHTML = this.getFilterFieldsHtml(submenuId, currentReportType);
        attachFilterEvents();
      }

      reportData = this.getReportData(submenuId, currentReportType, pageTitle);
      renderReportsTable(reportData.rows);
    };

    if (typeSelect) {
      typeSelect.value = currentReportType;
      typeSelect.addEventListener('change', (e) => {
        updateViewForType(e.target.value);
      });
    }

    // Filter Collapse / Expand Toggle
    const toggleBtn = container.querySelector('#rep-flt-toggle-btn');
    const filterBody = container.querySelector('#rep-flt-body');
    const toggleIcon = container.querySelector('#rep-flt-toggle-icon');
    let isFilterCollapsed = false;

    if (toggleBtn && filterBody) {
      toggleBtn.addEventListener('click', () => {
        isFilterCollapsed = !isFilterCollapsed;
        if (isFilterCollapsed) {
          filterBody.classList.add('hidden');
          toggleBtn.title = 'Show Filter';
          toggleBtn.setAttribute('aria-label', 'Show Filter');
          if (toggleIcon) toggleIcon.classList.add('-rotate-90');
        } else {
          filterBody.classList.remove('hidden');
          toggleBtn.title = 'Hide Filter';
          toggleBtn.setAttribute('aria-label', 'Hide Filter');
          if (toggleIcon) toggleIcon.classList.remove('-rotate-90');
        }
      });
    }
  },

  // Full Human-Readable Label Mapping
  getReportTypeLabel(submenuId, reportType, pageTitle) {
    const labels = {
      // 1. Sales & Export Analytics
      'pending-contracts': 'Pending Contracts',
      'price-book': 'Price Book',
      'approved-contracts': 'Approved Contracts',
      'eta-status': 'OUT of ETD/ETA Report',
      'fda-examination': 'FDA Examination Report',
      'mpeda-report': 'MPEDA Report',
      'shipment-report': 'Shipment Report',
      'lab-report': 'Lab Report',
      'q-certificate': 'Q Certificate Report',
      'pending-payments': 'Pending Payments',
      'pending-negotiation': 'Pending Negotiation Report',
      'bills-realization': 'Bills Realization',
      'fc-utilized': 'FC Utilized Report',
      'gst-sales': 'GST Sales report',
      'clearing-agent': 'Clearing Agent Report',
      'transit-insurance': 'M Transit Ins & Payments',
      'packing-report': 'Packing Report',
      'lineitemwise-report': 'Shipment LineItemwise Report',
      'return-container': 'Return Container Report',
      'freight-rates': 'Freight Rates Report',

      // 2. Purchase Reports
      'purchase-report': 'Purchase Report',
      'purchase-count-wise': 'Purchase Count Wise',
      'center-wise-report': 'Center Wise Report',
      'supplier-bill-summary': 'Supplier Bill Summary',
      'center-wise-abstract': 'Center Wise Abstract Report',
      'date-wise-abstract': 'Date Wise Abstract Report',
      'supplier-wise-outstanding': 'Supplier Wise Outstanding Report',
      'monthly-abstract': 'Monthly Abstract Report',
      'bill-date-payment-summary': 'Bill & Date Wise Payment Summary',
      'supplier-wise-abstract': 'Supplier Wise Abstract Report',
      'supplier-bill-outstanding-amt': 'Supplier & Bill Wise Outstanding Amount',
      'supplier-wise-ledger': 'Supplier Wise Ledger',
      'company-wise-tds': 'Company Wise TDS Report',
      'arrival-report': 'Arrival Report',
      'agent-commission': 'Agent Commission Report',

      // 3. Pre-Processing Reports
      'rm-received-daywise': 'Rm Received Day wise Report',
      'deheading-daywise': 'Deheading Day wise Report',
      'assumed-reports-arrival': 'Assumed Reports by Rm & Arrival',
      'grading-day-machine': 'Grading Day & Machine Wise Report',
      'value-addition': 'Value Addition Report',
      'value-addition-new': 'Value addition report new',
      'va-floor-balance': 'VA Floor Balance Report',
      'va-transfer': 'VA Transfer Report',
      'consolidation-daily-monthly': 'Consolidation Report Daily & Monthly',
      'track-code-report': 'Track Code Report',

      // 4. Quality Control Reports
      'buyer-request-list': 'Buyer Request List',
      'sysco-status-list': 'Sysco Status List',
      'food-audit-report': 'Food Audit Report',
      'social-audit-report': 'Social Audit Report',
      'farm-audit-report': 'Farm Audit Report',
      'hatchery-audit-report': 'Hatchery Audit Report',
      'feed-mill-audit-report': 'Feed Mill Audit Report',
      'bap-report': 'Bap Report',
      'traceability-utilized': 'Traceability Utilized Report',
      'payment-statement': 'Payment Statement',
      'traceability-report': 'Traceability Report',

      // 5. Production Analytics
      'soaking-floor-balance': 'Soaking Floor Balance Report',
      'untreated-report': 'Untreated Report',
      'soaking-floor-balance-variety': 'Soaking Floor Balance Variety Report New',
      'soaking-report': 'Soaking Report',
      'freezing-report': 'Freezing Report',
      'freezing-production-report': 'Freezing Production Report',
      'reconciliation-report': 'Reconciliation Report',
      'headon-to-finished': 'Headon To Finished Report',

      // 6. Coldstore Analytics
      'rm-req': 'Rm Requirement',
      'inward-report': 'Inward Report',
      'outward-report': 'Outward Report',
      'thawing-report': 'Thawing Report',
      'repacking-report': 'Repacking Report (Rep+ And Rep -)',
      'order-timeline': 'Order Timeline Report',
      'shipment-status': 'Shipment Status Report',
      'shipment-daily-monthly': 'Shipment Report Daily & Monthly',
      'daily-production': 'Daily Production Report',
      'daily-monthly-production': 'Daily & Monthly Production',
      'daily-stock-plantwise': 'Daily Stock Report (Plant wise)',
      'opening-closing-stock': 'Opening & Closing Report',
      'rackwise-stock': 'Rack Wise Stock Report',
      'stock-report': 'Stock Report',
      'stock-production': 'Stock Production Report',
      'excess-order': 'Excess Order Report',
      'excess-stock': 'Excess Stock report',
      'ibt-report': 'IBT- IBT+ Report',
      'stock-overall': 'Stock Overall Report',
      'stock-summary': 'Stock Summary',
      'physical-report': 'Physical Report(Phy+ and Phy-)'
    };
    return labels[reportType] || (pageTitle ? `${pageTitle} - ${reportType.replace(/-/g, ' ').toUpperCase()}` : 'Report');
  },

  // Dropdown Options per Submenu
  getReportTypeOptions(submenuId) {
    if (submenuId === 'sales-export-analytics' || submenuId.includes('sales')) {
      return `
        <option value="pending-contracts" selected>Pending Contracts</option>
        <option value="price-book">Price Book</option>
        <option value="approved-contracts">Approved Contracts</option>
        <option value="eta-status">OUT of ETD/ETA Report</option>
        <option value="fda-examination">FDA Examination Report</option>
        <option value="mpeda-report">MPEDA Report</option>
        <option value="shipment-report">Shipment Report</option>
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
        <option value="purchase-report" selected>Purchase Report</option>
        <option value="purchase-count-wise">Purchase Count Wise</option>
        <option value="center-wise-report">Center Wise Report</option>
        <option value="supplier-bill-summary">Supplier Bill Summary</option>
        <option value="center-wise-abstract">Center Wise Abstract Report</option>
        <option value="date-wise-abstract">Date Wise Abstract Report</option>
        <option value="supplier-wise-outstanding">Supplier Wise Outstanding Report</option>
        <option value="monthly-abstract">Monthly Abstract Report</option>
        <option value="bill-date-payment-summary">Bill & Date Wise Payment Summary</option>
        <option value="supplier-wise-abstract">Supplier Wise Abstract Report</option>
        <option value="supplier-bill-outstanding-amt">Supplier & Bill Wise Outstanding Amount</option>
        <option value="supplier-wise-ledger">Supplier Wise Ledger</option>
        <option value="company-wise-tds">Company Wise TDS Report</option>
        <option value="arrival-report">Arrival Report</option>
        <option value="agent-commission">Agent Commission Report</option>
      `;
    }
    if (submenuId === 'preprocessing-reports' || submenuId.includes('preproc')) {
      return `
        <option value="rm-received-daywise" selected>Rm Received Day wise Report</option>
        <option value="deheading-daywise">Deheading Day wise Report</option>
        <option value="assumed-reports-arrival">Assumed Reports by Rm & Arrival</option>
        <option value="grading-day-machine">Grading Day & Machine Wise Report</option>
        <option value="value-addition">Value Addition Report</option>
        <option value="value-addition-new">Value addition report new</option>
        <option value="va-floor-balance">VA Floor Balance Report</option>
        <option value="va-transfer">VA Transfer Report</option>
        <option value="consolidation-daily-monthly">Consolidation Report Daily & Monthly</option>
        <option value="track-code-report">Track Code Report</option>
      `;
    }
    if (submenuId === 'quality-reports' || submenuId.includes('quality') || submenuId.includes('qc')) {
      return `
        <option value="buyer-request-list" selected>Buyer Request List</option>
        <option value="sysco-status-list">Sysco Status List</option>
        <option value="food-audit-report">Food Audit Report</option>
        <option value="social-audit-report">Social Audit Report</option>
        <option value="farm-audit-report">Farm Audit Report</option>
        <option value="hatchery-audit-report">Hatchery Audit Report</option>
        <option value="feed-mill-audit-report">Feed Mill Audit Report</option>
        <option value="bap-report">Bap Report</option>
        <option value="traceability-utilized">Traceability Utilized Report</option>
        <option value="payment-statement">Payment Statement</option>
        <option value="traceability-report">Traceability Report</option>
      `;
    }
    if (submenuId === 'production-analytics' || submenuId.includes('production')) {
      return `
        <option value="soaking-floor-balance" selected>Soaking Floor Balance Report</option>
        <option value="untreated-report">Untreated Report</option>
        <option value="soaking-floor-balance-variety">Soaking Floor Balance Variety Report New</option>
        <option value="soaking-report">Soaking Report</option>
        <option value="freezing-report">Freezing Report</option>
        <option value="freezing-production-report">Freezing Production Report</option>
        <option value="reconciliation-report">Reconciliation Report</option>
        <option value="headon-to-finished">Headon To Finished Report</option>
      `;
    }
    if (submenuId === 'coldstore-analytics' || submenuId.includes('coldstore')) {
      return `
        <option value="rm-req" selected>Rm Requirement</option>
        <option value="inward-report">Inward Report</option>
        <option value="outward-report">Outward Report</option>
        <option value="thawing-report">Thawing Report</option>
        <option value="repacking-report">Repacking Report (Rep+ And Rep -)</option>
        <option value="order-timeline">Order Timeline Report</option>
        <option value="shipment-status">Shipment Status Report</option>
        <option value="shipment-daily-monthly">Shipment Report Daily & Monthly</option>
        <option value="daily-production">Daily Production Report</option>
        <option value="daily-monthly-production">Daily & Monthly Production</option>
        <option value="daily-stock-plantwise">Daily Stock Report (Plant wise)</option>
        <option value="opening-closing-stock">Opening & Closing Report</option>
        <option value="rackwise-stock">Rack Wise Stock Report</option>
        <option value="stock-report">Stock Report</option>
        <option value="stock-production">Stock Production Report</option>
        <option value="excess-order">Excess Order Report</option>
        <option value="excess-stock">Excess Stock report</option>
        <option value="ibt-report">IBT- IBT+ Report</option>
        <option value="stock-overall">Stock Overall Report</option>
        <option value="stock-summary">Stock Summary</option>
        <option value="physical-report">Physical Report(Phy+ and Phy-)</option>
      `;
    }
    return `
      <option value="ALL" selected>All Reports</option>
    `;
  },

  // Dynamic Contextual Filter Fields Generator per Submenu & Report Type
  // Always puts a styled search button after the last input field
  getFilterFieldsHtml(submenuId, type) {
    const searchBtnHtml = `
      <div class="flex items-end">
        <button type="button" id="rep-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <span>Search</span>
        </button>
      </div>
    `;

    // ----------------------------------------------------
    // 1. Purchase Reports Submenu Filters
    // ----------------------------------------------------
    if (submenuId === 'purchase-reports' || submenuId.includes('purchase')) {
      if (type === 'purchase-count-wise') {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">COUNT / GRADE</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Counts</option>
              <option value="20 Count">20 Count</option>
              <option value="25 Count">25 Count</option>
              <option value="30 Count">30 Count</option>
              <option value="40 Count">40 Count</option>
              <option value="50 Count">50 Count</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SPECIES / VARIETY</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Species</option>
              <option value="Vannamei">Vannamei Fresh</option>
              <option value="Black Tiger">Black Tiger</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CENTER</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Centers</option>
              <option value="Bhimavaram">Bhimavaram Center</option>
              <option value="Machilipatnam">Machilipatnam Center</option>
              <option value="Narsapur">Narsapur Center</option>
              <option value="Ongole">Ongole Center</option>
            </select>
          </div>
          ${searchBtnHtml}
        `;
      }

      if (type === 'center-wise-report' || type === 'center-wise-abstract') {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROCUREMENT CENTER</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Procurement Centers</option>
              <option value="Bhimavaram">Bhimavaram Center</option>
              <option value="Machilipatnam">Machilipatnam Center</option>
              <option value="Narsapur">Narsapur Center</option>
              <option value="Bapatla">Bapatla Center</option>
              <option value="Ongole">Ongole Center</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE FROM</label>
            <input type="date" value="2026-10-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE TO</label>
            <input type="date" value="2026-10-30" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          ${searchBtnHtml}
        `;
      }

      if (type.includes('supplier') || type === 'company-wise-tds') {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER / FARMER</label>
            <input type="text" placeholder="Search supplier or farm name..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAYMENT STATUS</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Payment States</option>
              <option value="Paid">Paid In Full</option>
              <option value="Pending">Payment Pending</option>
              <option value="Overdue">Overdue (>30 Days)</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FINANCIAL YEAR</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="2026-2027">FY 2026 - 2027</option>
              <option value="2025-2026">FY 2025 - 2026</option>
            </select>
          </div>
          ${searchBtnHtml}
        `;
      }

      if (type === 'arrival-report') {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VEHICLE NUMBER</label>
            <input type="text" placeholder="Vehicle No (e.g. AP 39 TE)..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ARRIVAL DATE</label>
            <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RECEIVING PLANT</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Plants</option>
              <option value="Unit 1">Unit 1 - Processing Facility (Vizag)</option>
              <option value="Unit 2">Unit 2 - Pre-Processing Facility</option>
              <option value="Unit 5">Unit 5 - Bulk Value Addition</option>
            </select>
          </div>
          ${searchBtnHtml}
        `;
      }

      if (type === 'agent-commission') {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">COMMISSION AGENT</label>
            <input type="text" placeholder="Agent Name or Code..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROCUREMENT CENTER</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Centers</option>
              <option value="Bhimavaram">Bhimavaram Center</option>
              <option value="Machilipatnam">Machilipatnam Center</option>
              <option value="Ongole">Ongole Center</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">HARVEST SEASON</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="Kharif 2026">Kharif 2026</option>
              <option value="Rabi 2026">Rabi 2026</option>
            </select>
          </div>
          ${searchBtnHtml}
        `;
      }

      // Default Purchase Report Filters
      return `
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BILL NO</label>
          <input type="text" placeholder="Search by Bill No..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BILL / ARRIVAL DATE</label>
          <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CENTER / PLANT</label>
          <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL">All Centers & Plants</option>
            <option value="Bhimavaram">Bhimavaram Center</option>
            <option value="Machilipatnam">Machilipatnam Center</option>
            <option value="Narsapur">Narsapur Center</option>
            <option value="Unit 1">Unit 1 - Processing (Vizag)</option>
            <option value="Unit 2">Unit 2 - Pre-Processing</option>
          </select>
        </div>
        ${searchBtnHtml}
      `;
    }

    // ----------------------------------------------------
    // 2. Pre-Processing Reports Submenu Filters
    // ----------------------------------------------------
    if (submenuId === 'preprocessing-reports' || submenuId.includes('preproc')) {
      if (type === 'deheading-daywise') {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEHEADING LINE</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Deheading Lines</option>
              <option value="Line 1">Deheading Line 1</option>
              <option value="Line 2">Deheading Line 2</option>
              <option value="Line 3">Deheading Line 3 (Manual Bay)</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIFT</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Shifts</option>
              <option value="Morning">Morning Shift (06:00 - 14:00)</option>
              <option value="Evening">Evening Shift (14:00 - 22:00)</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIFT DATE</label>
            <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          ${searchBtnHtml}
        `;
      }

      if (type.includes('value-addition') || type.includes('va-')) {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRODUCT STYLE</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Styles</option>
              <option value="PDTO">PDTO (Peeled Deveined Tail On)</option>
              <option value="EZ Peel">Easy Peel (Raw / Blanched)</option>
              <option value="Nobashi">Nobashi Stretched Shrimp</option>
              <option value="Butterfly">Butterfly Cut Spec</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VA WORK TABLE</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Tables</option>
              <option value="Table 1">VA Table 1 (Export Grade)</option>
              <option value="Table 2">VA Table 2 (Quick Prep)</option>
              <option value="Table 3">VA Table 3 (Specialty)</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
            <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          ${searchBtnHtml}
        `;
      }

      // Default Pre-Processing Filters
      return `
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TRACK ID / LOT CODE</label>
          <input type="text" placeholder="Track ID (e.g. TRK-PP-2026)..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BAY / MACHINE LINE</label>
          <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL">All Lines & Bays</option>
            <option value="Receiving Bay 1">Receiving Bay 1</option>
            <option value="Deheading Line 1">Deheading Line 1</option>
            <option value="Grading Machine A">Grading Machine A</option>
            <option value="VA Table 1">Value Addition Table 1</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
          <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        ${searchBtnHtml}
      `;
    }

    // ----------------------------------------------------
    // 3. Quality Control Reports Submenu Filters
    // ----------------------------------------------------
    if (submenuId === 'quality-reports' || submenuId.includes('quality') || submenuId.includes('qc')) {
      if (type === 'sysco-status-list') {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SYSCO PO NUMBER</label>
            <input type="text" placeholder="Sysco PO (e.g. SYS-PO-2026)..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SYSCO QA SIGN-OFF</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Clearance States</option>
              <option value="Approved">Approved & Cleared</option>
              <option value="Pending">Audit In Progress</option>
              <option value="Hold">Hold / Re-Test</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AUDIT DATE</label>
            <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          ${searchBtnHtml}
        `;
      }

      if (type === 'bap-report') {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BAP CERTIFICATION TIER</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All BAP Tiers</option>
              <option value="4-Star">BAP 4-Star (Full Chain)</option>
              <option value="3-Star">BAP 3-Star (Plant + Farm + Hatchery)</option>
              <option value="2-Star">BAP 2-Star (Plant + Farm)</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CHAIN OF CUSTODY REF</label>
            <input type="text" placeholder="BAP ID / COC..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Status</option>
              <option value="Certified">Certified & Active</option>
              <option value="Renewing">Renewal Due</option>
            </select>
          </div>
          ${searchBtnHtml}
        `;
      }

      // Default Quality Control Filters
      return `
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AUDIT / DOSSIER ID</label>
          <input type="text" placeholder="Dossier ID (e.g. QC-AUD-2026)..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BUYER / STANDARD</label>
          <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL">All Buyers & Standards</option>
            <option value="Sysco">Sysco Corporation</option>
            <option value="USFDA">USFDA Micro Protocol</option>
            <option value="BAP">BAP 4-Star Traceability</option>
            <option value="BRCGS">BRCGS Food Safety</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AUDIT DATE</label>
          <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        ${searchBtnHtml}
      `;
    }

    // ----------------------------------------------------
    // 4. Production Analytics Submenu Filters
    // ----------------------------------------------------
    if (submenuId === 'production-analytics' || submenuId.includes('production')) {
      if (type.includes('soaking')) {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SOAKING TANK / BAY</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Soaking Tanks</option>
              <option value="Tank A1">Tank A1 (Non-Phosphate)</option>
              <option value="Tank A2">Tank A2 (Salt Glaze)</option>
              <option value="Tank B1">Tank B1 (Chilled Aqua)</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RECIPE FORMULATION</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Formulations</option>
              <option value="Natural">Natural Pure Clean (Zero Additive)</option>
              <option value="Recipe NP-4">Recipe NP-4 (EU Export)</option>
              <option value="Recipe US-2">Recipe US-2 (US Spec)</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRODUCTION DATE</label>
            <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          ${searchBtnHtml}
        `;
      }

      if (type.includes('freezing')) {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREEZING EQUIPMENT</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Freezers</option>
              <option value="IQF Tunnel 1">IQF Tunnel 1 (OctoFrost)</option>
              <option value="IQF Tunnel 2">IQF Tunnel 2 (Spiral)</option>
              <option value="Plate Freezer A">Contact Plate Freezer A</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRODUCT SPEC</label>
            <input type="text" placeholder="Product Spec (e.g. Cooked Tail-On)..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
            <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          ${searchBtnHtml}
        `;
      }

      // Default Production Filters
      return `
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RUN / JOB ORDER</label>
          <input type="text" placeholder="Job Order No..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROCESS UNIT</label>
          <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL">All Process Units</option>
            <option value="Unit 1">Unit 1 - Processing (Vizag)</option>
            <option value="Unit 2">Unit 2 - Pre-Processing</option>
            <option value="Unit 3">Unit 3 - IQF & Coldstore</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
          <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        ${searchBtnHtml}
      `;
    }

    // ----------------------------------------------------
    // 5. Coldstore Analytics Submenu Filters
    // ----------------------------------------------------
    if (submenuId === 'coldstore-analytics' || submenuId.includes('coldstore')) {
      if (type.includes('rack') || type.includes('stock')) {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">COLDSTORE CHAMBER</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Chambers</option>
              <option value="Chamber 1">Chamber 1 (-22°C Finished)</option>
              <option value="Chamber 2">Chamber 2 (-20°C Export Buffer)</option>
              <option value="Chamber 3">Chamber 3 (-25°C Deep Freeze)</option>
              <option value="Chamber 4">Chamber 4 (-20°C Raw Block)</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RACK / PALLET ID</label>
            <input type="text" placeholder="Rack (e.g. RCK-CS-A12)..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STOCK STATUS</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All States</option>
              <option value="In Stock">In Coldstore Stock</option>
              <option value="Allocated">Allocated for Shipment</option>
              <option value="Quarantine">QA Hold</option>
            </select>
          </div>
          ${searchBtnHtml}
        `;
      }

      if (type.includes('inward') || type.includes('outward') || type === 'ibt-report') {
        return `
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GATE PASS / TRANSFER REF</label>
            <input type="text" placeholder="Ref No (e.g. IBT-2026)..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TRANSFER DIRECTION</label>
            <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Directions</option>
              <option value="Inward">Inward Receiving</option>
              <option value="Outward">Outward Dispatch</option>
              <option value="IBT">Inter-Branch Transfer</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
            <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          ${searchBtnHtml}
        `;
      }

      // Default Coldstore Filters
      return `
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REQ / SHIPMENT NO</label>
          <input type="text" placeholder="Ref No..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STORAGE CHAMBER</label>
          <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL">All Chambers</option>
            <option value="Chamber 1">Chamber 1 (-22°C)</option>
            <option value="Chamber 2">Chamber 2 (-20°C)</option>
            <option value="Chamber 3">Chamber 3 (-25°C)</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
          <input type="date" value="2026-10-28" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        ${searchBtnHtml}
      `;
    }

    // ----------------------------------------------------
    // 6. Sales & Export Analytics Submenu Filters
    // ----------------------------------------------------
    return `
      <div>
        <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ORDER / CONTRACT REF</label>
        <input type="text" placeholder="Order No / Container..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
      </div>
      <div>
        <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BUYER / IMPORTER</label>
        <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
          <option value="ALL">All Buyers</option>
          <option value="Sysco">Sysco Corporation USA</option>
          <option value="Nippon">Nippon Suisan Kaisha Japan</option>
          <option value="Maruha">Maruha Nichiro Corp</option>
          <option value="Euro-Baltic">Euro-Baltic Marine Traders</option>
        </select>
      </div>
      <div>
        <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DESTINATION PORT</label>
        <select class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
          <option value="ALL">All Destination Ports</option>
          <option value="Los Angeles">Port of Los Angeles, USA</option>
          <option value="Tokyo">Tokyo Port, Japan</option>
          <option value="Yokohama">Yokohama Port, Japan</option>
          <option value="Rotterdam">Rotterdam, Netherlands</option>
        </select>
      </div>
      ${searchBtnHtml}
    `;
  },

  // Generate Tab-Specific Columns & Realistic Datasets dynamically per Report Type
  getReportData(submenuId, reportType = 'ALL', pageTitle = 'Reports') {
    let columns = [];
    let rows = [];

    // Helper formatter for serial number
    const sNoCol = {
      field: 'sNo',
      header: 'S.No',
      sortable: true,
      render: (v, r, idx) => `<span class="text-[#00A4B7] font-semibold hover:underline cursor-pointer select-none" title="Click to view details">${idx + 1}</span>`
    };

    // ==========================================
    // 1. PURCHASE REPORTS (15 Types)
    // ==========================================
    if (submenuId === 'purchase-reports' || submenuId.includes('purchase')) {
      if (reportType === 'purchase-count-wise') {
        columns = [
          sNoCol,
          { field: 'variety', header: 'Variety / Species', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'countGrade', header: 'Count / Grade', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
          { field: 'totalQty', header: 'Total Quantity (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()} Kg</span>` },
          { field: 'avgRate', header: 'Avg Rate (₹/Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">₹${Number(v).toFixed(2)}</span>` },
          { field: 'totalAmount', header: 'Total Amount (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'centerName', header: 'Center Name', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'sampleChecked', header: 'Sample Count Test', sortable: true, render: v => `<span class="font-mono text-xs text-[#475569]">${v}</span>` },
          { field: 'status', header: 'Count Quality', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E3FCEF] text-[#006644]">${v}</span>` }
        ];
        rows = [
          { id: 1, variety: 'Vannamei Fresh', countGrade: '20 Count', totalQty: 18500, avgRate: 460.00, totalAmount: 8510000.00, centerName: 'Bhimavaram Center', sampleChecked: '19.8 / Kg', status: 'Optimal Grade' },
          { id: 2, variety: 'Vannamei Fresh', countGrade: '30 Count', totalQty: 32400, avgRate: 385.00, totalAmount: 12474000.00, centerName: 'Machilipatnam Center', sampleChecked: '29.5 / Kg', status: 'Optimal Grade' },
          { id: 3, variety: 'Vannamei Fresh', countGrade: '40 Count', totalQty: 41200, avgRate: 330.00, totalAmount: 13596000.00, centerName: 'Narsapur Center', sampleChecked: '40.2 / Kg', status: 'Passed Spec' },
          { id: 4, variety: 'Black Tiger', countGrade: '16/20 Count', totalQty: 9500, avgRate: 640.00, totalAmount: 6080000.00, centerName: 'Ongole Center', sampleChecked: '16.5 / Kg', status: 'Premium Grade' },
          { id: 5, variety: 'Vannamei Fresh', countGrade: '50 Count', totalQty: 24800, avgRate: 290.00, totalAmount: 7192000.00, centerName: 'Bapatla Center', sampleChecked: '49.8 / Kg', status: 'Passed Spec' }
        ];
      }
      else if (reportType === 'center-wise-report' || reportType === 'center-wise-abstract') {
        columns = [
          sNoCol,
          { field: 'centerName', header: 'Center Name', sortable: true, render: v => `<span class="font-bold text-xs text-[#00A4B7]">${v}</span>` },
          { field: 'centerCode', header: 'Center Code', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'totalBills', header: 'Total Bills', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'totalFarmers', header: 'Farmers / Suppliers', sortable: true, render: v => `<span class="text-xs text-[#172B4D]">${v}</span>` },
          { field: 'totalQty', header: 'Total Quantity (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()} Kg</span>` },
          { field: 'purchaseAmount', header: 'Purchase Value (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'avgRate', header: 'Avg Rate (₹/Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">₹${Number(v).toFixed(2)}</span>` },
          { field: 'dispatchStatus', header: 'Dispatch State', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">${v}</span>` }
        ];
        rows = [
          { id: 1, centerName: 'Bhimavaram Center', centerCode: 'CTR-BV-01', totalBills: 42, totalFarmers: 28, totalQty: 68450, purchaseAmount: 26353250.00, avgRate: 385.00, dispatchStatus: 'Dispatched to Unit 1' },
          { id: 2, centerName: 'Machilipatnam Center', centerCode: 'CTR-MT-02', totalBills: 35, totalFarmers: 22, totalQty: 54100, purchaseAmount: 20287500.00, avgRate: 375.00, dispatchStatus: 'Dispatched to Unit 2' },
          { id: 3, centerName: 'Narsapur Center', centerCode: 'CTR-NS-03', totalBills: 29, totalFarmers: 19, totalQty: 41800, purchaseAmount: 16302000.00, avgRate: 390.00, dispatchStatus: 'Dispatched to Unit 1' },
          { id: 4, centerName: 'Ongole Center', centerCode: 'CTR-OG-04', totalBills: 18, totalFarmers: 14, totalQty: 29500, purchaseAmount: 12390000.00, avgRate: 420.00, dispatchStatus: 'Dispatched to Unit 5' },
          { id: 5, centerName: 'Bapatla Center', centerCode: 'CTR-BP-05', totalBills: 24, totalFarmers: 16, totalQty: 33200, purchaseAmount: 12284000.00, avgRate: 370.00, dispatchStatus: 'Dispatched to Unit 2' }
        ];
      }
      else if (reportType.includes('supplier') || reportType.includes('outstanding') || reportType === 'company-wise-tds') {
        columns = [
          sNoCol,
          { field: 'supplier', header: 'Supplier / Farmer Name', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'panGst', header: 'PAN / GSTIN', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'billRef', header: 'Bill Reference', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
          { field: 'totalQty', header: 'Supplied Wt (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${Number(v).toLocaleString()} Kg</span>` },
          { field: 'grossAmount', header: 'Gross Value (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'tdsAmount', header: 'TDS (₹)', sortable: true, render: v => `<span class="font-mono text-xs text-[#DE350B]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'netPayable', header: 'Net Amount (₹)', sortable: true, render: v => `<span class="font-mono font-extrabold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'paymentStatus', header: 'Payment State', sortable: true, render: v => {
            const clr = v === 'Paid' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFFAE6] text-[#FF8B00]';
            return `<span class="px-2 py-0.5 rounded text-[11px] font-bold ${clr}">${v}</span>`;
          }}
        ];
        rows = [
          { id: 1, supplier: 'Sri Venkata Krishna Aquatics', panGst: 'AABCV1234F', billRef: 'BIL-PUR-2026-1041', totalQty: 8450, grossAmount: 3253250.00, tdsAmount: 3253.25, netPayable: 3249996.75, paymentStatus: 'Paid' },
          { id: 2, supplier: 'Coastal Marine Aqua Farms', panGst: 'BCDFK5678G', billRef: 'BIL-PUR-2026-1042', totalQty: 9200, grossAmount: 3496000.00, tdsAmount: 3496.00, netPayable: 3492504.00, paymentStatus: 'Paid' },
          { id: 3, supplier: 'Bhimavaram Shrimp Breeders Ltd', panGst: 'CDEFR9012H', billRef: 'BIL-PUR-2026-1043', totalQty: 6800, grossAmount: 2754000.00, tdsAmount: 2754.00, netPayable: 2751246.00, paymentStatus: 'Pending' },
          { id: 4, supplier: 'Godavari Bio-Harvest Aquatics', panGst: 'DEFTR3456J', billRef: 'BIL-PUR-2026-1044', totalQty: 10500, grossAmount: 4147500.00, tdsAmount: 4147.50, netPayable: 4143352.50, paymentStatus: 'Pending' }
        ];
      }
      else if (reportType === 'arrival-report') {
        columns = [
          sNoCol,
          { field: 'arrivalNo', header: 'Arrival Gate Entry', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'arrivalDate', header: 'Arrival Date & Time', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'vehicleNumber', header: 'Vehicle Number', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#475569]">${v}</span>` },
          { field: 'sourceCenter', header: 'Source Center', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'arrivalPlant', header: 'Arrival Plant', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'grossWt', header: 'Gross Weight (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'tareWt', header: 'Tare Weight (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${Number(v).toLocaleString()}</span>` },
          { field: 'netWeight', header: 'Net Raw Material (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()} Kg</span>` },
          { field: 'gateStatus', header: 'Gate Status', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E3FCEF] text-[#006644]">${v}</span>` }
        ];
        rows = [
          { id: 1, arrivalNo: 'ARR-PUR-2026-081', arrivalDate: '2026-10-28 07:45 AM', vehicleNumber: 'AP 39 TE 2450', sourceCenter: 'Bhimavaram Center', arrivalPlant: 'Unit 1 - Processing (Vizag)', grossWt: 16200, tareWt: 7750, netWeight: 8450, gateStatus: 'Weighed & Unloaded' },
          { id: 2, arrivalNo: 'ARR-PUR-2026-082', arrivalDate: '2026-10-28 08:30 AM', vehicleNumber: 'AP 39 TK 8812', sourceCenter: 'Machilipatnam Center', arrivalPlant: 'Unit 1 - Processing (Vizag)', grossWt: 17400, tareWt: 8200, netWeight: 9200, gateStatus: 'Weighed & Unloaded' },
          { id: 3, arrivalNo: 'ARR-PUR-2026-083', arrivalDate: '2026-10-27 06:15 PM', vehicleNumber: 'AP 39 TX 4419', sourceCenter: 'Narsapur Center', arrivalPlant: 'Unit 2 - Pre-Processing', grossWt: 14800, tareWt: 8000, netWeight: 6800, gateStatus: 'Weighed & Unloaded' }
        ];
      }
      else if (reportType === 'agent-commission') {
        columns = [
          sNoCol,
          { field: 'agentName', header: 'Commission Agent', sortable: true, render: v => `<span class="font-bold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'agentCode', header: 'Agent Code', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'center', header: 'Associated Center', sortable: true, render: v => `<span class="text-xs text-[#172B4D]">${v}</span>` },
          { field: 'procuredQty', header: 'Procured Qty (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()} Kg</span>` },
          { field: 'commRate', header: 'Commission (₹/Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">₹${Number(v).toFixed(2)}</span>` },
          { field: 'totalCommission', header: 'Total Commission (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'paidAmount', header: 'Paid (₹)', sortable: true, render: v => `<span class="font-mono text-xs text-[#475569]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'balanceDue', header: 'Balance Due (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#DE350B]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` }
        ];
        rows = [
          { id: 1, agentName: 'Rao Aqua Logistics & Commission', agentCode: 'AGT-BV-101', center: 'Bhimavaram Center', procuredQty: 68450, commRate: 2.50, totalCommission: 171125.00, paidAmount: 150000.00, balanceDue: 21125.00 },
          { id: 2, agentName: 'Krishna Delta Procurement Agency', agentCode: 'AGT-MT-102', center: 'Machilipatnam Center', procuredQty: 54100, commRate: 2.25, totalCommission: 121725.00, paidAmount: 121725.00, balanceDue: 0.00 },
          { id: 3, agentName: 'Coastal Seafarm Facilitators', agentCode: 'AGT-OG-103', center: 'Ongole Center', procuredQty: 29500, commRate: 3.00, totalCommission: 88500.00, paidAmount: 60000.00, balanceDue: 28500.00 }
        ];
      }
      else {
        // Standard 18 Columns for Purchase Report
        columns = [
          sNoCol,
          { field: 'billNo', header: 'Bill No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>` },
          { field: 'arrivalPlant', header: 'Arrival Plant', sortable: true, render: v => `<span class="text-xs font-medium text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'billDate', header: 'Bill Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'arrivalDate', header: 'Arrival Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>` },
          { field: 'supplier', header: 'Supplier', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'centerName', header: 'Center Name', sortable: true, render: v => `<span class="text-xs font-medium text-[#5E6C84] whitespace-nowrap">${v}</span>` },
          { field: 'productionPlant', header: 'Production Plant', sortable: true, render: v => `<span class="text-xs text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'variety', header: 'Variety', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F1F5F9] text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'count', header: 'Count', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] whitespace-nowrap">${v}</span>` },
          { field: 'vehicleNumber', header: 'Vehicle Number', sortable: true, render: v => `<span class="font-mono text-xs font-semibold text-[#475569] whitespace-nowrap">${v}</span>` },
          { field: 'rmProductionPlant', header: 'RM Production Plant', sortable: true, render: v => `<span class="text-xs text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'finalQuantity', header: 'Final Quantity', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D] whitespace-nowrap">${Number(v).toLocaleString()} Kg</span>` },
          { field: 'rate', header: 'Rate', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">₹${Number(v).toFixed(2)}</span>` },
          { field: 'amount', header: 'Amount', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D] whitespace-nowrap">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'harvest', header: 'Harvest', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FEF3C7] text-[#92400E] whitespace-nowrap">${v}</span>` },
          { field: 'harvestAmount', header: 'Harvest Amount', sortable: true, render: v => `<span class="font-mono text-xs text-[#64748B] whitespace-nowrap">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'finalAmount', header: 'Final Amount', sortable: true, render: v => `<span class="font-mono font-extrabold text-xs text-[#00875A] whitespace-nowrap">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` }
        ];
        rows = [
          { id: 1, billNo: 'BIL-PUR-2026-1041', arrivalPlant: 'Unit 1 - Processing (Vizag)', billDate: '2026-10-28', arrivalDate: '2026-10-28', supplier: 'Sri Venkata Krishna Aquatics', centerName: 'Bhimavaram Center', productionPlant: 'Unit 1 - Processing Facility', variety: 'Vannamei Fresh', count: '30 Count', vehicleNumber: 'AP 39 TE 2450', rmProductionPlant: 'Unit 1 - Processing Facility', finalQuantity: 8450, rate: 385.00, amount: 3253250.00, harvest: 'Day Harvest', harvestAmount: 42250.00, finalAmount: 3295500.00 },
          { id: 2, billNo: 'BIL-PUR-2026-1042', arrivalPlant: 'Unit 1 - Processing (Vizag)', billDate: '2026-10-28', arrivalDate: '2026-10-28', supplier: 'Coastal Marine Aqua Farms', centerName: 'Machilipatnam Center', productionPlant: 'Unit 1 - Processing Facility', variety: 'Vannamei Fresh', count: '25 Count', vehicleNumber: 'AP 39 TK 8812', rmProductionPlant: 'Unit 1 - Processing Facility', finalQuantity: 9200, rate: 380.00, amount: 3496000.00, harvest: 'Night Harvest', harvestAmount: 46000.00, finalAmount: 3542000.00 },
          { id: 3, billNo: 'BIL-PUR-2026-1043', arrivalPlant: 'Unit 2 - Pre-Processing', billDate: '2026-10-27', arrivalDate: '2026-10-27', supplier: 'Bhimavaram Shrimp Breeders Ltd', centerName: 'Bhimavaram Center', productionPlant: 'Unit 2 - Pre-Processing', variety: 'Black Tiger', count: '20 Count', vehicleNumber: 'AP 39 TX 4419', rmProductionPlant: 'Unit 2 - Pre-Processing', finalQuantity: 6800, rate: 405.00, amount: 2754000.00, harvest: 'Day Harvest', harvestAmount: 34000.00, finalAmount: 2788000.00 },
          { id: 4, billNo: 'BIL-PUR-2026-1044', arrivalPlant: 'Unit 5 - Bulk Value Addition', billDate: '2026-10-26', arrivalDate: '2026-10-26', supplier: 'Delta Fresh Exports Ltd', centerName: 'Narsapur Center', productionPlant: 'Unit 5 - Bulk Facility', variety: 'Vannamei Fresh', count: '40 Count', vehicleNumber: 'AP 39 TP 1120', rmProductionPlant: 'Unit 5 - Bulk Facility', finalQuantity: 11200, rate: 360.00, amount: 4032000.00, harvest: 'Day Harvest', harvestAmount: 56000.00, finalAmount: 4088000.00 }
        ];
      }
    }

    // ==========================================
    // 2. PRE-PROCESSING REPORTS (10 Types)
    // ==========================================
    else if (submenuId === 'preprocessing-reports' || submenuId.includes('preproc')) {
      if (reportType === 'deheading-daywise') {
        columns = [
          sNoCol,
          { field: 'batchNo', header: 'Deheading Batch Ref', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'date', header: 'Shift Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'line', header: 'Line No', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'headonInput', header: 'Headon Input (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'headlessOutput', header: 'Headless Output (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
          { field: 'yieldPct', header: 'Deheading Yield %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}%</span>` },
          { field: 'wastage', header: 'Head Waste (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#DE350B]">${Number(v).toLocaleString()}</span>` },
          { field: 'supervisor', header: 'Line Supervisor', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` }
        ];
        rows = [
          { id: 1, batchNo: 'DH-2026-101', date: '2026-10-28', line: 'Deheading Line 1', headonInput: 12000, headlessOutput: 7920, yieldPct: 66.0, wastage: 4080, supervisor: 'R. K. Varman' },
          { id: 2, batchNo: 'DH-2026-102', date: '2026-10-28', line: 'Deheading Line 2', headonInput: 14500, headlessOutput: 9642, yieldPct: 66.5, wastage: 4858, supervisor: 'M. S. Prasad' },
          { id: 3, batchNo: 'DH-2026-103', date: '2026-10-27', line: 'Deheading Line 1', headonInput: 10500, headlessOutput: 6982, yieldPct: 66.5, wastage: 3518, supervisor: 'R. K. Varman' }
        ];
      }
      else if (reportType.includes('value-addition') || reportType.includes('va-')) {
        columns = [
          sNoCol,
          { field: 'jobOrder', header: 'VA Order Ref', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'style', header: 'Product Style', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'tableNo', header: 'VA Table', sortable: true, render: v => `<span class="text-xs text-[#172B4D] font-medium">${v}</span>` },
          { field: 'rawInput', header: 'Raw Material (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'finishedOutput', header: 'Finished VA (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
          { field: 'recovery', header: 'VA Recovery %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}%</span>` },
          { field: 'workers', header: 'Workers Count', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'status', header: 'Floor State', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E3FCEF] text-[#006644]">${v}</span>` }
        ];
        rows = [
          { id: 1, jobOrder: 'VA-ORD-2026-081', style: 'PDTO (Peeled Deveined Tail On)', tableNo: 'VA Table 1', rawInput: 5400, finishedOutput: 4428, recovery: 82.0, workers: 36, status: 'Completed & Chilled' },
          { id: 2, jobOrder: 'VA-ORD-2026-082', style: 'Easy Peel Raw 31/40', tableNo: 'VA Table 2', rawInput: 6200, finishedOutput: 5580, recovery: 90.0, workers: 24, status: 'Completed & Chilled' },
          { id: 3, jobOrder: 'VA-ORD-2026-083', style: 'Nobashi Stretched Shrimp', tableNo: 'VA Table 3', rawInput: 3200, finishedOutput: 2816, recovery: 88.0, workers: 40, status: 'In Progress' }
        ];
      }
      else {
        // Standard Pre-Processing Table
        columns = [
          sNoCol,
          { field: 'trackId', header: 'TRACK ID / LOT NO', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'date', header: 'Shift Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'facility', header: 'Line / Machine Bay', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'variety', header: 'Raw Material Species', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'inflowQty', header: 'Inflow Wt (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${Number(v).toLocaleString()}</span>` },
          { field: 'outflowQty', header: 'Yielded Wt (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
          { field: 'recovery', header: 'Yield Recovery %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}%</span>` },
          { field: 'status', header: 'Floor State', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">${v}</span>` }
        ];
        rows = [
          { id: 1, trackId: 'TRK-PP-2026-081', date: '2026-10-28', facility: 'Deheading Line 1', variety: 'Vannamei Fresh (Headon)', inflowQty: 12000, outflowQty: 7920, recovery: 66.0, status: 'Transferred to Grading' },
          { id: 2, trackId: 'TRK-PP-2026-082', date: '2026-10-28', facility: 'Grading Machine A', variety: 'Vannamei Headless 31/40', inflowQty: 7920, outflowQty: 7840, recovery: 99.0, status: 'Passed to Soaking Bay' },
          { id: 3, trackId: 'TRK-PP-2026-083', date: '2026-10-27', facility: 'VA Table 1 (PDTO)', variety: 'Tail-On Vannamei 26/30', inflowQty: 5400, outflowQty: 4428, recovery: 82.0, status: 'VA Floor Completed' },
          { id: 4, trackId: 'TRK-PP-2026-084', date: '2026-10-27', facility: 'Receiving Bay 2', variety: 'Black Tiger Headon', inflowQty: 8500, outflowQty: 5695, recovery: 67.0, status: 'Pre-Processing Verified' }
        ];
      }
    }

    // ==========================================
    // 3. QUALITY CONTROL REPORTS (11 Types)
    // ==========================================
    else if (submenuId === 'quality-reports' || submenuId.includes('quality') || submenuId.includes('qc')) {
      if (reportType === 'sysco-status-list') {
        columns = [
          sNoCol,
          { field: 'syscoPo', header: 'Sysco PO No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'product', header: 'Product Description', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'cartons', header: 'Master Cartons', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${Number(v).toLocaleString()} MCs</span>` },
          { field: 'microTest', header: 'Microbiological Test', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E3FCEF] text-[#006644]">${v}</span>` },
          { field: 'residue', header: 'Antibiotic Residue Check', sortable: true, render: v => `<span class="font-mono text-[11px] text-[#00875A] font-bold">${v}</span>` },
          { field: 'netWtCheck', header: 'Net Weight Verification', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] font-medium">${v}</span>` },
          { field: 'syscoSignoff', header: 'Sysco QA Approval', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">${v}</span>` }
        ];
        rows = [
          { id: 1, syscoPo: 'SYS-PO-2026-081', product: 'Vannamei PDTO 31/40 (10x1 kg)', cartons: 1400, microTest: 'Passed (Zero Salmonella/E.Coli)', residue: 'ND (LC-MS Certified)', netWtCheck: '100% Target Met', syscoSignoff: 'Sysco Lead Approved' },
          { id: 2, syscoPo: 'SYS-PO-2026-082', product: 'Cooked Tail-On 26/30 (5x2 lb)', cartons: 2100, microTest: 'Passed (Zero Listeria)', residue: 'ND (LC-MS Certified)', netWtCheck: '100.2% Compliant', syscoSignoff: 'Sysco Lead Approved' },
          { id: 3, syscoPo: 'SYS-PO-2026-083', product: 'Easy Peel Raw 41/50 (10x1 kg)', cartons: 1250, microTest: 'Testing in Progress', residue: 'ND Verified', netWtCheck: '99.9% Compliant', syscoSignoff: 'Audit Pending' }
        ];
      }
      else {
        // Standard Quality Control Table
        columns = [
          sNoCol,
          { field: 'qcNo', header: 'QC Dossier / Audit ID', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'target', header: 'Buyer / Standard Scope', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'batchCode', header: 'Inspected Lot / Trace Code', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'antibioticCheck', header: 'Antibiotic / Residue', sortable: true, render: v => `<span class="font-semibold text-[11px] text-[#00875A]">${v}</span>` },
          { field: 'sensoryGrade', header: 'Sensory / Organoleptic', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E3FCEF] text-[#006644]">${v}</span>` },
          { field: 'inspector', header: 'QC Auditor', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] font-medium">${v}</span>` },
          { field: 'status', header: 'Certification Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">${v}</span>` }
        ];
        rows = [
          { id: 1, qcNo: 'QC-AUD-2026-091', target: 'Sysco Corporation (BRCGS Audit)', batchCode: 'LOT-EXP-2026-081', antibioticCheck: 'ND (Chloramphenicol / Nitrofurans)', sensoryGrade: 'Grade A Export Spec', inspector: 'Dr. K. Srinivas Rao (Lead Auditor)', status: 'Approved & Certified' },
          { id: 2, qcNo: 'QC-AUD-2026-092', target: 'USFDA Microbiological Protocol', batchCode: 'LOT-EXP-2026-082', antibioticCheck: 'Zero Tolerance Passed', sensoryGrade: 'Premium IQF Firm', inspector: 'P. Ananya (Microbiologist)', status: 'Approved & Certified' },
          { id: 3, qcNo: 'QC-AUD-2026-093', target: 'BAP 4-Star Traceability Audit', batchCode: 'TRC-BAP-2026-9014', antibioticCheck: 'Certified Clean Feed/Hatchery', sensoryGrade: 'Grade A Export Spec', inspector: 'Devi Fisheries QA Cell', status: 'Approved & Certified' }
        ];
      }
    }

    // ==========================================
    // 4. PRODUCTION ANALYTICS (8 Types)
    // ==========================================
    else if (submenuId === 'production-analytics' || submenuId.includes('production')) {
      if (reportType.includes('soaking')) {
        columns = [
          sNoCol,
          { field: 'tankNo', header: 'Tank / Bay', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
          { field: 'batchRef', header: 'Batch Run Ref', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] hover:underline cursor-pointer">${v}</span>` },
          { field: 'grade', header: 'Species / Grade', sortable: true, render: v => `<span class="text-xs text-[#172B4D] font-medium">${v}</span>` },
          { field: 'preSoak', header: 'Pre-Soak Wt (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${Number(v).toLocaleString()}</span>` },
          { field: 'postSoak', header: 'Post-Soak Wt (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
          { field: 'gainPct', header: 'Moisture Gain %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">+${v}%</span>` },
          { field: 'hours', header: 'Soak Duration', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'state', header: 'Floor Status', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E3FCEF] text-[#006644]">${v}</span>` }
        ];
        rows = [
          { id: 1, tankNo: 'Tank A1', batchRef: 'RUN-SOAK-2026-104', grade: 'Vannamei PDTO 31/40', preSoak: 6000, postSoak: 6240, gainPct: 4.0, hours: '1 hr 45 min', state: 'Passed to Freezing' },
          { id: 2, tankNo: 'Tank A2', batchRef: 'RUN-SOAK-2026-105', grade: 'Tail-On Cooked 26/30', preSoak: 4500, postSoak: 4680, gainPct: 4.0, hours: '2 hrs 00 min', state: 'Passed to Freezing' },
          { id: 3, tankNo: 'Tank B1', batchRef: 'RUN-SOAK-2026-106', grade: 'Black Tiger 16/20', preSoak: 3500, postSoak: 3605, gainPct: 3.0, hours: '1 hr 30 min', state: 'Soaking Complete' }
        ];
      }
      else {
        // Standard Production Table
        columns = [
          sNoCol,
          { field: 'batchNo', header: 'Production Run / Ref', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'date', header: 'Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'unit', header: 'Process Unit / Bay', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'variety', header: 'Product Spec', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'inQty', header: 'Input (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${Number(v).toLocaleString()}</span>` },
          { field: 'outQty', header: 'Finished (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
          { field: 'yieldPct', header: 'Yield %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}%</span>` },
          { field: 'status', header: 'Log Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">${v}</span>` }
        ];
        rows = [
          { id: 1, batchNo: 'RUN-SOAK-2026-104', date: '2026-10-28', unit: 'Soaking Bay A', variety: 'Vannamei PDTO 31/40', inQty: 6000, outQty: 6240, yieldPct: 104.0, status: 'Passed to Freezing' },
          { id: 2, batchNo: 'RUN-FREEZ-2026-088', date: '2026-10-28', unit: 'IQF Tunnel 1 (OctoFrost)', variety: 'Tail-On Cooked IQF 26/30', inQty: 4500, outQty: 4485, yieldPct: 99.7, status: 'Finished & Cartoned' },
          { id: 3, batchNo: 'RECON-PR-2026-019', date: '2026-10-27', unit: 'Headon To Finished Line', variety: 'Black Tiger Easy Peel', inQty: 8500, outQty: 5695, yieldPct: 67.0, status: 'Reconciled 100%' }
        ];
      }
    }

    // ==========================================
    // 5. COLDSTORE ANALYTICS (21 Types)
    // ==========================================
    else if (submenuId === 'coldstore-analytics' || submenuId.includes('coldstore')) {
      if (reportType === 'rm-req') {
        columns = [
          sNoCol,
          { field: 'reqNo', header: 'Requisition No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'unit', header: 'Requesting Unit', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'product', header: 'Required Product Spec', sortable: true, render: v => `<span class="text-xs text-[#172B4D]">${v}</span>` },
          { field: 'reqQty', header: 'Required Qty (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'availQty', header: 'Coldstore Stock (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${Number(v).toLocaleString()}</span>` },
          { field: 'shortfall', header: 'Shortfall (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${Number(v).toLocaleString()}</span>` },
          { field: 'status', header: 'Fulfillment Status', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E3FCEF] text-[#006644]">${v}</span>` }
        ];
        rows = [
          { id: 1, reqNo: 'REQ-RM-2026-051', unit: 'Processing Line 1', product: 'Raw Headless Vannamei 31/40 Buffer', reqQty: 10450, availQty: 12500, shortfall: 0, status: 'Fully Allocated' },
          { id: 2, reqNo: 'REQ-RM-2026-052', unit: 'Value Addition Bay', product: 'Black Tiger 16/20 Peeled Blocks', reqQty: 6200, availQty: 6200, shortfall: 0, status: 'Fully Allocated' },
          { id: 3, reqNo: 'REQ-RM-2026-053', unit: 'Pre-Processing Export', product: 'Cooked Tail-On 26/30 Export', reqQty: 8000, availQty: 8500, shortfall: 0, status: 'Ready for Staging' }
        ];
      }
      else {
        // Standard Coldstore Table
        columns = [
          sNoCol,
          { field: 'rackNo', header: 'RACK / PALLET / INWARD REF', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'chamber', header: 'Chamber / Facility', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'product', header: 'Finished Product Style', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'cartons', header: 'Master Cartons', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()} MCs</span>` },
          { field: 'netWt', header: 'Net Weight (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'temp', header: 'Chamber Temp', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}°C</span>` },
          { field: 'status', header: 'Storage State', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">${v}</span>` }
        ];
        rows = [
          { id: 1, rackNo: 'RCK-CS-A12 / PLT-1081', chamber: 'Chamber 1 (-22°C Bulk Finished)', product: 'IQF Cooked Tail-On Vannamei 26/30 (6x2kg)', cartons: 640, netWt: 7680, temp: -21.8, status: 'In Coldstore Stock' },
          { id: 2, rackNo: 'RCK-CS-B04 / PLT-1082', chamber: 'Chamber 2 (-20°C Export Buffer)', product: 'Block Frozen HLSO Black Tiger 16/20 (6x1.8kg)', cartons: 580, netWt: 6264, temp: -20.5, status: 'Allocated for Shipment' },
          { id: 3, rackNo: 'RCK-CS-C19 / PLT-1083', chamber: 'Chamber 3 (-25°C Ultra Deep)', product: 'Easy Peel Raw Vannamei 31/40 (10x1kg)', cartons: 820, netWt: 8200, temp: -25.2, status: 'In Coldstore Stock' },
          { id: 4, rackNo: 'RCK-CS-D08 / PLT-1084', chamber: 'Chamber 4 (-20°C Raw Block Store)', product: 'Raw PDTO Vannamei 41/50 (5x2lb)', cartons: 740, netWt: 6713, temp: -21.4, status: 'In Coldstore Stock' }
        ];
      }
    }

    // ==========================================
    // 6. SALES & EXPORT ANALYTICS (20 Types)
    // ==========================================
    else {
      if (reportType === 'pending-contracts' || reportType === 'approved-contracts') {
        columns = [
          sNoCol,
          { field: 'orderNo', header: 'ORDER NO', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'buyer', header: 'BUYER', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'brand', header: 'BRAND', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'variety', header: 'VARIETY', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'mcs', header: 'MCS', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'pack', header: 'PACK', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] font-medium">${v}</span>` },
          { field: 'grade', header: 'GRADE', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'shipmentDatePo', header: 'SHIPMENT DATE AS PER PO', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'destination', header: 'DESTINATION', sortable: true, render: v => `<span class="text-xs text-[#172B4D] font-medium">${v}</span>` },
          { field: 'priority', header: 'Priority', sortable: true, render: v => {
            const colors = {
              'High': 'bg-[#FFEBE6] text-[#DE350B] border-[#FFBDAD]',
              'Medium': 'bg-[#FFFAE6] text-[#FF8B00] border-[#FFE380]',
              'Low': 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]'
            };
            return `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${colors[v] || 'bg-gray-100 text-gray-700'}"><span class="w-1.5 h-1.5 rounded-full bg-current"></span>${v}</span>`;
          }}
        ];
        rows = [
          { id: 1, orderNo: 'ORD-DFL-2026-081', buyer: 'Sysco Corporation', brand: 'Devi Classic', variety: 'Vannamei PDTO', mcs: 1400, pack: '10x1 kg', grade: '31/40', shipmentDatePo: '2026-11-15', destination: 'Port of Los Angeles, USA', priority: 'High' },
          { id: 2, orderNo: 'ORD-DFL-2026-082', buyer: 'Nippon Suisan Kaisha', brand: 'AquaStar Premium', variety: 'Black Tiger HLSO', mcs: 850, pack: '6x1.8 kg', grade: '16/20', shipmentDatePo: '2026-11-20', destination: 'Tokyo Port, Japan', priority: 'High' },
          { id: 3, orderNo: 'ORD-DFL-2026-083', buyer: 'Maruha Nichiro Corp', brand: 'Devi Supreme', variety: 'Cooked Tail-On', mcs: 2100, pack: '5x2 lb', grade: '26/30', shipmentDatePo: '2026-11-28', destination: 'Yokohama Port, Japan', priority: 'Medium' }
        ];
      }
      else {
        // Standard Export Analytics Table
        columns = [
          sNoCol,
          { field: 'refNo', header: 'REFERENCE / LOT NO', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'buyer', header: 'BUYER / IMPORTER', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'product', header: 'PRODUCT & SPEC', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'volume', header: 'VOLUME (KGS / MCS)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'port', header: 'PORT / LOGISTICS', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] font-medium">${v}</span>` },
          { field: 'status', header: 'AUDIT / COMPLIANCE STATUS', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, refNo: 'EXP-DFL-2026-041', buyer: 'Sysco Corporation USA', product: 'Vannamei PDTO 31/40 (10x1kg)', volume: 14000, port: 'Port of Los Angeles / Maersk', status: 'Export Verified & Clean' },
          { id: 2, refNo: 'EXP-DFL-2026-042', buyer: 'Nippon Suisan Kaisha Japan', product: 'Black Tiger HLSO 16/20 (6x1.8kg)', volume: 9180, port: 'Tokyo Port / ONE Line', status: 'Health Certificate Approved' },
          { id: 3, refNo: 'EXP-DFL-2026-043', buyer: 'Maruha Nichiro Corp', product: 'Cooked Tail-On 26/30 (5x2lb)', volume: 19050, port: 'Yokohama / CMA CGM', status: 'Customs Cleared' }
        ];
      }
    }

    return { columns, rows };
  },

  // Record Details Modal (Enterprise Structured Categorized Details View)
  showReportDetails(row, typeLabel) {
    if (!row) return;

    // Helper: Format field labels
    const formatLabel = (key) => {
      return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .replace(/\bRm\b/g, 'RM')
        .replace(/\bPo\b/g, 'PO')
        .replace(/\bPi\b/g, 'PI')
        .replace(/\bGrn\b/g, 'GRN')
        .replace(/\bQc\b/g, 'QC')
        .replace(/\bId\b/g, 'ID')
        .trim();
    };

    // Helper: Format field values
    const formatValue = (key, val) => {
      if (val === null || val === undefined || val === '') return '-';
      const lk = key.toLowerCase();
      if (typeof val === 'number' || (!isNaN(Number(val)) && String(val).trim() !== '')) {
        const num = Number(val);
        if (lk.includes('amount') || lk.includes('price') || lk.includes('rate') || lk.includes('cost') || lk.includes('fee')) {
          return '₹' + num.toLocaleString('en-IN');
        }
        if (lk.includes('qty') || lk.includes('weight') || lk.includes('stock') || lk.includes('balance') || lk.includes('kgs')) {
          return num.toLocaleString('en-IN') + ' Kg';
        }
        if (lk.includes('temp')) return num + '°C';
        if (lk.includes('pickup') || lk.includes('yield')) return num + '%';
      }
      return String(val);
    };

    // Extract Identifier
    const recordId = row.billNo || row.orderNo || row.docNo || row.lotNo || row.refNo || row.batchNo || row.trackId || row.trackCode || row.qcNo || row.rackNo || row.reqNo || row.code || 'Record Details';
    
    // Extract Facility, Date & Partner
    const plant = row.arrivalPlant || row.productionPlant || row.plant || row.facility || row.coldStore || row.store || row.location || 'Central Facility';
    const date = row.billDate || row.arrivalDate || row.date || row.harvestDate || row.shiftDate || row.soakingDate || row.freezingDate || '2026-10-28';
    const partner = row.supplier || row.supplierName || row.buyer || row.customer || row.centerName || row.center || '';

    // Status & Tags
    const status = String(row.status || 'Verified Record').toUpperCase();
    const categoryTag = row.variety || row.species || row.type || row.productType || row.category || typeLabel || '';

    // Extract Quick Metrics (Priority keys for top card)
    const priorityMetricKeys = ['finalamount', 'amount', 'finalquantity', 'weight', 'balanceweight', 'rate', 'pickup', 'stock', 'balance', 'inqty', 'outtemp'];
    const metricCandidates = [];

    Object.entries(row).forEach(([k, v]) => {
      if (k === 'id' || k.startsWith('__')) return;
      const lk = k.toLowerCase();
      if (typeof v === 'number' || (!isNaN(Number(v)) && String(v).trim() !== '')) {
        const pIdx = priorityMetricKeys.findIndex(pk => lk.includes(pk));
        if (pIdx !== -1) {
          metricCandidates.push({
            pIdx,
            label: formatLabel(k).toUpperCase(),
            val: formatValue(k, v)
          });
        }
      }
    });

    metricCandidates.sort((a, b) => a.pIdx - b.pIdx);
    const topMetrics = metricCandidates.slice(0, 3);

    // Group fields into 4 categorized sections
    const sec1 = []; // Identification & Facility Logistics
    const sec2 = []; // Product Specifications & Quality
    const sec3 = []; // Quantities & Measurements
    const sec4 = []; // Commercial & Financials
    const secOther = [];

    Object.entries(row).forEach(([k, v]) => {
      if (k === 'id' || k.startsWith('__')) return;
      const lk = k.toLowerCase();
      const item = { key: k, label: formatLabel(k), val: formatValue(k, v) };

      if (lk.includes('amount') || lk.includes('price') || lk.includes('cost') || lk.includes('fee') || lk.includes('tax') || lk.includes('tds') || lk.includes('due') || lk.includes('payment') || (lk.includes('rate') && !lk.includes('arrival') && !lk.includes('corporate') && !lk.includes('generate'))) {
        sec4.push(item);
      } else if (lk.includes('qty') || lk.includes('quantity') || lk.includes('weight') || lk.includes('stock') || lk.includes('balance') || lk.includes('yield') || lk.includes('inward') || lk.includes('outward') || lk.includes('excess') || lk.includes('shortage') || lk.includes('carton') || lk.includes('crates')) {
        sec3.push(item);
      } else if (lk.includes('variety') || lk.includes('species') || lk.includes('grade') || lk.includes('count') || lk.includes('item') || lk.includes('product') || lk.includes('temp') || lk.includes('pickup') || lk.includes('chemical') || lk.includes('audit') || lk.includes('qc') || lk.includes('standard') || lk.includes('defect') || (lk.includes('harvest') && !lk.includes('amount'))) {
        sec2.push(item);
      } else if (lk.includes('bill') || lk.includes('plant') || lk.includes('date') || lk.includes('supplier') || lk.includes('center') || lk.includes('vehicle') || lk.includes('order') || lk.includes('code') || lk.includes('doc') || lk.includes('lot') || lk.includes('ref') || lk.includes('rack') || lk.includes('store') || lk.includes('buyer') || lk.includes('shift') || lk.includes('time') || lk.includes('line')) {
        sec1.push(item);
      } else {
        secOther.push(item);
      }
    });

    secOther.forEach(item => sec1.push(item));

    const sections = [];
    if (sec1.length > 0) sections.push({ title: 'Identification, Logistics & Facility', items: sec1 });
    if (sec2.length > 0) sections.push({ title: 'Product Specifications & Quality Parameters', items: sec2 });
    if (sec3.length > 0) sections.push({ title: 'Quantities, Inventory & Movement Logistics', items: sec3 });
    if (sec4.length > 0) sections.push({ title: 'Commercial Valuation & Payment Settlement', items: sec4 });

    if (sections.length === 0) {
      const all = Object.entries(row).filter(([k]) => k !== 'id' && !k.startsWith('__')).map(([k, v]) => ({ label: formatLabel(k), val: formatValue(k, v) }));
      sections.push({ title: 'Record Details & Parameters', items: all });
    }

    Modal.open({
      title: `${typeLabel} Details: ${recordId}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top Hero / Batch Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00A4B7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${recordId}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">${status}</span>
                  ${categoryTag ? `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${categoryTag}</span>` : ''}
                </div>
                <p class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Facility: <strong class="text-[#334155]">${plant}</strong></span>
                  <span>•</span>
                  <span>Date: <strong class="text-[#334155]">${date}</strong></span>
                  ${partner ? `<span>•</span><span>Partner: <strong class="text-[#334155]">${partner}</strong></span>` : ''}
                </p>
              </div>
            </div>

            ${topMetrics.length > 0 ? `
              <!-- Quick Metrics Badges -->
              <div class="flex items-center gap-2 flex-wrap">
                ${topMetrics.map(m => `
                  <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center min-w-[80px]">
                    <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">${m.label}</span>
                    <span class="font-mono font-extrabold text-xs text-[#006644]">${m.val}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <!-- Categorized Sections -->
          ${sections.map((sec, idx) => `
            <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
              <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
                <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">${idx + 1}</span>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">${sec.title}</h4>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                ${sec.items.map(item => `
                  <div>
                    <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">${item.label}</span>
                    <span class="font-semibold text-[#172B4D] text-xs block mt-0.5 break-words">${item.val}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `,
      buttons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Download Report',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            Toast.show(`Downloading report document for ${recordId}...`, 'success');
          }
        }
      ]
    });
  }
};