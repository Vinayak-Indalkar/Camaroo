// Global Reports Module Views (Configured with Direct Submenu Views, Dynamic Per-Report Filters & Contextual Data Tables)

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
    let currentReportType = submenuId === 'sales-export-analytics' ? 'pending-contracts' : (submenuId === 'purchase-reports' || submenuId.includes('purchase') ? 'purchase-report' : 'ALL');

    // Generate specific contextual dataset and columns based on active submenu & report type
    let reportData = this.getReportData(submenuId, currentReportType, pageTitle);

    subContainer.innerHTML = `
      <!-- Page Header with Inline Report Type Dropdown -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div class="flex items-center gap-3 flex-wrap">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">${pageTitle}</h1>
          <div class="w-64 sm:w-72">
            <select id="rep-header-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" title="Select Report Type">
              ${reportTypeOptionsHtml}
            </select>
          </div>
        </div>
      </div>

      <!-- Search & Filter Card (Tailored for each report type) -->
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
      const typeLabel = this.getReportTypeLabel(submenuId, currentReportType, pageTitle);
      new DataTable({
        containerId: 'reports-table-container',
        tableTitle: `${typeLabel} Records (${rows.length})`,
        searchable: true,
        exportable: true,
        selectable: true,
        pageSize: 10,
        columns: reportData.columns,
        data: rows,
        onRowClick: (row) => this.showReportDetails(row, typeLabel)
      });
    };

    // Render Filter Body based on Submenu and Report Type
    const renderFilterBody = (type) => {
      const fltBody = subContainer.querySelector('#rep-flt-body');
      if (!fltBody) return;

      const fieldsHtml = this.getFilterFieldsHtml(submenuId, type);
      fltBody.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          ${fieldsHtml}
          <!-- Search Button (Row 2 left or inline) -->
          <div class="flex items-end">
            <button type="button" id="rep-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      `;

      // Re-attach Search listener
      fltBody.querySelector('#rep-flt-search-btn')?.addEventListener('click', handleSearch);
    };

    // Dynamic Search Filter Execution across all input fields
    const handleSearch = () => {
      let filtered = [...reportData.rows];
      const inputs = subContainer.querySelectorAll('#rep-flt-body input, #rep-flt-body select');

      inputs.forEach(input => {
        const val = input.value?.trim();
        if (!val || val === 'ALL') return;
        const id = input.id;

        if (id === 'flt-year') filtered = filtered.filter(r => !r.year || r.year === val);
        else if (id === 'flt-exporter') filtered = filtered.filter(r => !r.exporter || r.exporter === val);
        else if (id === 'flt-consignee') filtered = filtered.filter(r => (r.consigneeKey && r.consigneeKey === val) || (r.buyer && r.buyer.toLowerCase().includes(val.replace(/-/g, ' '))));
        else if (id === 'flt-country') filtered = filtered.filter(r => (r.country && r.country.toLowerCase() === val.toLowerCase()) || (r.destination && r.destination.toLowerCase().includes(val.toLowerCase())));
        else if (id === 'flt-priority') filtered = filtered.filter(r => r.priority && r.priority.toLowerCase() === val.toLowerCase());
        else if (id === 'flt-plant') filtered = filtered.filter(r => r.plant && r.plant === val);
        else if (id === 'flt-supplier') filtered = filtered.filter(r => r.supplier && r.supplier.toLowerCase().includes(val.toLowerCase()));
        else if (id === 'flt-variety') filtered = filtered.filter(r => r.variety && r.variety.toLowerCase().includes(val.toLowerCase()));
        else if (id === 'flt-chamber') filtered = filtered.filter(r => r.chamber && r.chamber.toLowerCase().includes(val.toLowerCase()));
        else if (id === 'flt-line' || id === 'flt-facility') filtered = filtered.filter(r => (r.line && r.line.toLowerCase().includes(val.toLowerCase())) || (r.shippingLine && r.shippingLine.toLowerCase().includes(val.toLowerCase())));
        else if (id === 'flt-carrier') filtered = filtered.filter(r => r.carrier && r.carrier.toLowerCase().includes(val.toLowerCase()));
        else if (id === 'flt-grade') filtered = filtered.filter(r => (r.grade && r.grade.toLowerCase().includes(val.toLowerCase())) || (r.count && r.count.toLowerCase().includes(val.toLowerCase())));
        else if (id === 'flt-protocol') filtered = filtered.filter(r => (r.testType && r.testType.toLowerCase().includes(val.toLowerCase())) || (r.testProtocol && r.testProtocol.toLowerCase().includes(val.toLowerCase())));
        else if (id === 'flt-clearance' || id === 'flt-status' || id === 'flt-pay-status') filtered = filtered.filter(r => (r.status && r.status.toLowerCase().includes(val.toLowerCase())) || (r.qcStatus && r.qcStatus.toLowerCase().includes(val.toLowerCase())));
        else if (input.type === 'text' || id === 'rep-flt-search') {
          const lower = val.toLowerCase();
          filtered = filtered.filter(r => Object.values(r).some(v => String(v).toLowerCase().includes(lower)));
        }
      });

      renderTable(filtered);
    };

    // Initial Render of Filter Body & Data Table
    renderFilterBody(currentReportType);
    renderTable(reportData.rows);

    // Report Type change listener
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
      renderFilterBody(currentReportType);
      renderTable(reportData.rows);
      Toast.show('Filters reset', 'info');
    });

    // Action button listeners for Contracts & Downloads
    subContainer.addEventListener('click', (e) => {
      const viewBtn = e.target.closest('.btn-pc-view');
      if (viewBtn) {
        e.stopPropagation();
        const id = Number(viewBtn.dataset.id);
        const r = reportData.rows.find(item => item.id === id);
        if (r) this.showReportDetails(r, this.getReportTypeLabel(submenuId, currentReportType, pageTitle));
        return;
      }
      const dlBtn = e.target.closest('.btn-pc-download');
      if (dlBtn) {
        e.stopPropagation();
        const id = Number(dlBtn.dataset.id);
        const r = reportData.rows.find(item => item.id === id);
        if (r) Toast.show(`Record ${r.orderNo || r.contractNo || r.docNo || r.invoiceNo || id} downloaded successfully!`, 'success');
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

  // Helper: Friendly Label for each report type
  getReportTypeLabel(submenuId, reportType, pageTitle) {
    const labels = {
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
      'gst-sales': 'GST Sales Report',
      'clearing-agent': 'Clearing Agent Report',
      'transit-insurance': 'M Transit Ins & Payments',
      'packing-report': 'Packing Report',
      'lineitemwise-report': 'Shipment LineItemwise Report',
      'return-container': 'Return Container Report',
      'freight-rates': 'Freight Rates Report',
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
      'supplier-bill-outstanding': 'Supplier & Bill Wise Outstanding Amount',
      'supplier-wise-ledger': 'Supplier Wise Ledger',
      'company-wise-tds': 'Company Wise TDS Report',
      'arrival-report': 'Arrival Report',
      'agent-commission': 'Agent Commission Report',
      'deheading': 'Deheading & Grading',
      'peeling': 'Peeling & Recovery Report',
      'chemicals': 'Chemicals & Consumption',
      'inspections': 'RM QC Inspections',
      'lab': 'Lab & Antibiotic Clearance',
      'microbiology': 'Microbiology Testing',
      'audits': 'QC Audits & Compliance',
      'yield': 'Yield Reports',
      'floor': 'Floor Summaries',
      'ad': 'Anti-Dumping Export Logs',
      'stock': 'Stock Summaries',
      'movement': 'Movement Logs',
      'exceptions': 'Operational Exceptions'
    };
    return labels[reportType] || pageTitle;
  },

  // Report Type Options by Submenu
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
        <option value="supplier-bill-outstanding">Supplier & Bill Wise Outstanding Amount</option>
        <option value="supplier-wise-ledger">Supplier Wise Ledger</option>
        <option value="company-wise-tds">Company Wise TDS Report</option>
        <option value="arrival-report">Arrival Report</option>
        <option value="agent-commission">Agent Commission Report</option>
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

  // Dynamic Contextual Filter Fields Generator per Submenu & Report Type
  getFilterFieldsHtml(submenuId, type) {
    // ----------------------------------------------------
    // 1. Sales & Export Analytics
    // ----------------------------------------------------
    if (submenuId === 'sales-export-analytics' || submenuId.includes('sales')) {
      if (type === 'pending-contracts') {
        return `
          <div>
            <label for="flt-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Year</label>
            <select id="flt-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="2026-2027" selected>2026 - 2027</option>
              <option value="2025-2026">2025 - 2026</option>
              <option value="2024-2025">2024 - 2025</option>
            </select>
          </div>
          <div>
            <label for="flt-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Exporter</label>
            <select id="flt-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Exporters</option>
              <option value="devi-fisheries" selected>Devi Fisheries Limited</option>
              <option value="devi-sea-foods">Devi Sea Foods Ltd</option>
              <option value="devi-marine">Devi Marine Food Exports</option>
            </select>
          </div>
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
          <div>
            <label for="flt-priority" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Priority</label>
            <select id="flt-priority" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
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
        `;
      }
      if (type === 'price-book') {
        return `
          <div>
            <label for="flt-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Product Variety</label>
            <select id="flt-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Varieties</option>
              <option value="Vannamei EZ-Peel">Vannamei EZ-Peel</option>
              <option value="Vannamei Nobashi">Vannamei Nobashi</option>
              <option value="Black Tiger HLSO">Black Tiger HLSO</option>
              <option value="Cooked Tail-On">Cooked Tail-On</option>
            </select>
          </div>
          <div>
            <label for="flt-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Grade / Count</label>
            <select id="flt-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Grades</option>
              <option value="16/20">16/20</option>
              <option value="21/25">21/25</option>
              <option value="26/30">26/30</option>
              <option value="31/40">31/40</option>
              <option value="41/50">41/50</option>
            </select>
          </div>
          <div>
            <label for="flt-currency" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Currency</label>
            <select id="flt-currency" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Currencies</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="JPY">JPY (¥)</option>
            </select>
          </div>
        `;
      }
      if (type === 'approved-contracts') {
        return `
          <div>
            <label for="flt-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Contract Year</label>
            <select id="flt-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Years</option>
              <option value="2026-2027">2026 - 2027</option>
              <option value="2025-2026">2025 - 2026</option>
            </select>
          </div>
          <div>
            <label for="flt-buyer" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Buyer / Consignee</label>
            <input type="text" id="flt-buyer" placeholder="Search approved buyer..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label for="flt-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Destination Country</label>
            <select id="flt-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Countries</option>
              <option value="USA">USA</option>
              <option value="Japan">Japan</option>
              <option value="Netherlands">Netherlands</option>
            </select>
          </div>
        `;
      }
      if (type === 'eta-status') {
        return `
          <div>
            <label for="flt-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Shipping Line</label>
            <select id="flt-line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Shipping Lines</option>
              <option value="Maersk Line">Maersk Line</option>
              <option value="CMA CGM">CMA CGM</option>
              <option value="Hapag-Lloyd">Hapag-Lloyd</option>
            </select>
          </div>
          <div>
            <label for="flt-port" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Discharge Port</label>
            <input type="text" id="flt-port" placeholder="Filter by port..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label for="flt-delay" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ETA Delay Status</label>
            <select id="flt-delay" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Shipments</option>
              <option value="Delayed">Delayed Only</option>
              <option value="Normal">On Schedule</option>
            </select>
          </div>
        `;
      }
      if (type === 'freight-rates') {
        return `
          <div>
            <label for="flt-carrier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Ocean Carrier</label>
            <select id="flt-carrier" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Carriers</option>
              <option value="Maersk">Maersk Line India</option>
              <option value="MSC">MSC Mediterranean</option>
              <option value="Hapag">Hapag-Lloyd</option>
              <option value="ONE">ONE Ocean Network</option>
            </select>
          </div>
          <div>
            <label for="flt-pod" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Discharge Port (POD)</label>
            <input type="text" id="flt-pod" placeholder="POD (e.g. Long Beach)..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label for="flt-cntr-size" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Container Type</label>
            <select id="flt-cntr-size" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Reefer Types</option>
              <option value="40ft Reefer High Cube">40ft Reefer High Cube</option>
              <option value="20ft Reefer">20ft Reefer Standard</option>
            </select>
          </div>
        `;
      }
      if (type === 'fda-examination') {
        return `
          <div>
            <label for="flt-fda-entry" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FDA Entry / Ref No</label>
            <input type="text" id="flt-fda-entry" placeholder="Entry Ref..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label for="flt-fda-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">USFDA Status</label>
            <select id="flt-fda-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Statuses</option>
              <option value="Green Ticket">Green Ticket Cleared</option>
              <option value="Under Examination">Under Examination</option>
              <option value="Sampled">Sampled for Lab Test</option>
            </select>
          </div>
          <div>
            <label for="flt-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Port of Arrival</label>
            <select id="flt-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Ports</option>
              <option value="Long Beach">Port of Long Beach</option>
              <option value="New York">Port of New York</option>
              <option value="Savannah">Port of Savannah</option>
            </select>
          </div>
        `;
      }
      if (type === 'pending-payments' || type === 'bills-realization') {
        return `
          <div>
            <label for="flt-buyer" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Buyer / Consignee</label>
            <input type="text" id="flt-buyer" placeholder="Buyer Name..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label for="flt-pay-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Payment / Realization Status</label>
            <select id="flt-pay-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Statuses</option>
              <option value="Overdue">Overdue Aging (30+ Days)</option>
              <option value="Pending">Pending Clearance</option>
              <option value="Realized">Realized in Bank</option>
            </select>
          </div>
          <div>
            <label for="flt-currency" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Currency</label>
            <select id="flt-currency" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Currencies</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="JPY">JPY (¥)</option>
            </select>
          </div>
        `;
      }
      // General Sales Filter
      return `
        <div>
          <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
          <input type="text" id="rep-flt-search" placeholder="Search reference, container, buyer..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
          <input type="date" id="rep-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
        </div>
        <div>
          <label for="rep-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
          <input type="date" id="rep-flt-to" value="2026-10-30" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
        </div>
      `;
    }

        // ----------------------------------------------------
    // 2. Purchase Reports (15 Tailored Types)
    // ----------------------------------------------------
    if (submenuId === 'purchase-reports' || submenuId.includes('purchase')) {
      if (type === 'purchase-report' || type === 'arrival-report') {
        return `
          <div>
            <label for="flt-supplier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Select Supplier / Farmer</label>
            <input type="text" id="flt-supplier" placeholder="Search farmer name..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label for="flt-chamber" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Purchase Center</label>
            <select id="flt-chamber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Centers</option>
              <option value="Bhimavaram">Bhimavaram Center</option>
              <option value="Machilipatnam">Machilipatnam Center</option>
              <option value="Narsapur">Narsapur Center</option>
              <option value="Bapatla">Bapatla Center</option>
              <option value="Ongole">Ongole Center</option>
            </select>
          </div>
          <div>
            <label for="flt-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Variety</label>
            <select id="flt-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Varieties</option>
              <option value="Vannamei Fresh">Vannamei Fresh</option>
              <option value="Black Tiger">Black Tiger</option>
              <option value="Sea White">Sea White</option>
            </select>
          </div>
          <div>
            <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">From Date</label>
            <input type="date" id="rep-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>
        `;
      }
      if (type === 'purchase-count-wise') {
        return `
          <div>
            <label for="flt-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Count / Grade Range</label>
            <select id="flt-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Counts</option>
              <option value="16/20">16/20 (Extra Large)</option>
              <option value="20/25">20/25 (Large)</option>
              <option value="25/30">25/30 (Medium Large)</option>
              <option value="30/40">30/40 (Medium)</option>
              <option value="40/50">40/50 (Regular)</option>
              <option value="50/60">50/60 (Small)</option>
            </select>
          </div>
          <div>
            <label for="flt-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RM Species</label>
            <select id="flt-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Species</option>
              <option value="Vannamei Fresh">Vannamei Fresh</option>
              <option value="Black Tiger">Black Tiger</option>
            </select>
          </div>
          <div>
            <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">From Date</label>
            <input type="date" id="rep-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>
        `;
      }
      if (type === 'center-wise-report' || type === 'center-wise-abstract') {
        return `
          <div>
            <label for="flt-chamber" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Purchase Center</label>
            <select id="flt-chamber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Centers</option>
              <option value="Bhimavaram">Bhimavaram Procurement Hub</option>
              <option value="Machilipatnam">Machilipatnam Delta Center</option>
              <option value="Narsapur">Narsapur Coastal Station</option>
              <option value="Bapatla">Bapatla Buying Station</option>
              <option value="Ongole">Ongole Depot</option>
            </select>
          </div>
          <div>
            <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">From Date</label>
            <input type="date" id="rep-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>
          <div>
            <label for="rep-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">To Date</label>
            <input type="date" id="rep-flt-to" value="2026-10-30" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>
        `;
      }
      if (type === 'supplier-bill-summary' || type === 'supplier-wise-outstanding' || type === 'supplier-bill-outstanding' || type === 'supplier-wise-ledger') {
        return `
          <div>
            <label for="flt-supplier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Supplier / Farmer</label>
            <input type="text" id="flt-supplier" placeholder="Farmer or Ledger Ref..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label for="flt-pay-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Bill / Settlement Status</label>
            <select id="flt-pay-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Bills</option>
              <option value="Outstanding">Outstanding Amount</option>
              <option value="Cleared">Direct NEFT Cleared</option>
              <option value="Pending">Pending Audit Clearance</option>
            </select>
          </div>
          <div>
            <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">From Date</label>
            <input type="date" id="rep-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>
        `;
      }
      if (type === 'company-wise-tds') {
        return `
          <div>
            <label for="flt-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Assessment Year</label>
            <select id="flt-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="2026-2027" selected>AY 2026 - 2027</option>
              <option value="2025-2026">AY 2025 - 2026</option>
            </select>
          </div>
          <div>
            <label for="flt-pay-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TDS Section</label>
            <select id="flt-pay-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All TDS Sections</option>
              <option value="194Q">Section 194Q (Purchase of Goods)</option>
              <option value="194C">Section 194C (Contractor Transport)</option>
            </select>
          </div>
        `;
      }
      if (type === 'agent-commission') {
        return `
          <div>
            <label for="flt-supplier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Procurement Agent</label>
            <input type="text" id="flt-supplier" placeholder="Agent name or code..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label for="flt-chamber" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Agent Cluster</label>
            <select id="flt-chamber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Agent Clusters</option>
              <option value="Bhimavaram">Bhimavaram</option>
              <option value="Machilipatnam">Machilipatnam</option>
              <option value="Bapatla">Bapatla</option>
            </select>
          </div>
        `;
      }
      // General Purchase Filter
      return `
        <div>
          <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
          <input type="text" id="rep-flt-search" placeholder="Search reference, lot, supplier..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
          <input type="date" id="rep-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
        </div>
        <div>
          <label for="rep-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
          <input type="date" id="rep-flt-to" value="2026-10-30" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
        </div>
      `;
    }
      if (type === 'procurement') {
        return `
          <div>
            <label for="flt-supplier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Procurement Cluster</label>
            <select id="flt-supplier" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Clusters</option>
              <option value="Bhimavaram">Bhimavaram Cluster</option>
              <option value="Machilipatnam">Machilipatnam Hub</option>
              <option value="Narsapur">Narsapur Coastal Zone</option>
              <option value="Bapatla">Bapatla Belt</option>
            </select>
          </div>
          <div>
            <label for="flt-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Pond Count Size</label>
            <select id="flt-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Counts</option>
              <option value="20/25">20/25</option>
              <option value="30/40">30/40</option>
              <option value="40/50">40/50</option>
            </select>
          </div>
        `;
      }
      if (type === 'bills') {
        return `
          <div>
            <label for="flt-supplier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Farmer / Supplier</label>
            <input type="text" id="flt-supplier" placeholder="Farmer or Bill Ref..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>
          <div>
            <label for="flt-pay-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Payment Status</label>
            <select id="flt-pay-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Payment Statuses</option>
              <option value="Paid">Direct NEFT Paid</option>
              <option value="Approved">Approved for Payout</option>
              <option value="Pending">Pending Audit Clearance</option>
            </select>
          </div>
        `;
      }
      return `
        <div>
          <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
          <input type="text" id="rep-flt-search" placeholder="Search reference, lot, supplier..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
          <input type="date" id="rep-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
        </div>
        <div>
          <label for="rep-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
          <input type="date" id="rep-flt-to" value="2026-10-30" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
        </div>
      `;
    }

    // ----------------------------------------------------
    // 3. Pre-Processing Reports
    // ----------------------------------------------------
    if (submenuId === 'preprocessing-reports' || submenuId.includes('preproc')) {
      if (type === 'deheading') {
        return `
          <div>
            <label for="flt-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Deheading Line</label>
            <select id="flt-line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Deheading Lines</option>
              <option value="Deheading Line 1">Deheading Line 1</option>
              <option value="Deheading Line 2">Deheading Line 2</option>
            </select>
          </div>
          <div>
            <label for="flt-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RM Species</label>
            <select id="flt-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Species</option>
              <option value="Vannamei">Vannamei</option>
              <option value="Black Tiger">Black Tiger</option>
            </select>
          </div>
        `;
      }
      if (type === 'peeling') {
        return `
          <div>
            <label for="flt-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Peeling Section / Bay</label>
            <select id="flt-line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Peeling Sections</option>
              <option value="Peeling Table A">Peeling Table A</option>
              <option value="Peeling Table B">Peeling Table B</option>
              <option value="Hand Peeling Bay 3">Hand Peeling Bay 3</option>
            </select>
          </div>
        `;
      }
      if (type === 'chemicals') {
        return `
          <div>
            <label for="flt-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Chemical Treatment Type</label>
            <select id="flt-line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Treatments</option>
              <option value="STPP (Food Grade)">STPP (Food Grade Moisture Dip)</option>
              <option value="Non-Phosphate">Non-Phosphate Organic Blend</option>
              <option value="Metabisulphite">Sodium Metabisulphite Anti-Blackening</option>
            </select>
          </div>
        `;
      }
      return `
        <div>
          <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
          <input type="text" id="rep-flt-search" placeholder="Search batch, process line..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Production Date</label>
          <input type="date" id="rep-flt-from" value="2026-10-28" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
        </div>
      `;
    }

    // ----------------------------------------------------
    // 4. Quality Control Reports
    // ----------------------------------------------------
    if (submenuId === 'quality-reports' || submenuId.includes('quality') || submenuId.includes('qc')) {
      if (type === 'lab') {
        return `
          <div>
            <label for="flt-protocol" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Test Protocol</label>
            <select id="flt-protocol" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Protocols</option>
              <option value="ELISA">ELISA Antibiotic Screen</option>
              <option value="LC-MS-MS">LC-MS-MS Nitrofuran Confirmatory</option>
              <option value="Chloramphenicol">Chloramphenicol HPLC Screen</option>
            </select>
          </div>
          <div>
            <label for="flt-clearance" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Clearance Status</label>
            <select id="flt-clearance" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Statuses</option>
              <option value="Cleared">Cleared for Export</option>
              <option value="Pre-Harvest Approved">Pre-Harvest Approved</option>
            </select>
          </div>
        `;
      }
      if (type === 'microbiology') {
        return `
          <div>
            <label for="flt-protocol" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Pathogen Marker</label>
            <select id="flt-protocol" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Micro Parameters</option>
              <option value="Salmonella">Salmonella (Absence in 25g)</option>
              <option value="Vibrio">Vibrio cholerae / parahaemolyticus</option>
              <option value="TPC">TPC (Aerobic Plate Count)</option>
              <option value="E.coli">E. Coli</option>
            </select>
          </div>
        `;
      }
      if (type === 'audits') {
        return `
          <div>
            <label for="flt-protocol" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Audit Standard</label>
            <select id="flt-protocol" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Standards</option>
              <option value="BAP">BAP 4-Star Compliance</option>
              <option value="USFDA">USFDA Seafood HACCP</option>
              <option value="BRCGS">BRCGS Global Food Standard</option>
            </select>
          </div>
        `;
      }
      return `
        <div>
          <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
          <input type="text" id="rep-flt-search" placeholder="Search sample ID, test parameter..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Testing Date</label>
          <input type="date" id="rep-flt-from" value="2026-10-28" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
        </div>
      `;
    }

    // ----------------------------------------------------
    // 5. Production Analytics
    // ----------------------------------------------------
    if (submenuId === 'production-analytics' || submenuId.includes('production')) {
      if (type === 'yield') {
        return `
          <div>
            <label for="flt-facility" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Freezing Line</label>
            <select id="flt-facility" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Freezing Lines</option>
              <option value="IQF Tunnel 1">IQF Tunnel 1</option>
              <option value="Plate Freezer Bay 3">Plate Freezer Bay 3</option>
              <option value="Cooked Line A">Cooked Line A</option>
            </select>
          </div>
          <div>
            <label for="flt-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Product Style</label>
            <select id="flt-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Product Styles</option>
              <option value="Easy-Peel">Easy-Peel Raw</option>
              <option value="Cooked Tail-On">Cooked Tail-On IQF</option>
              <option value="Block Frozen">Block Frozen Headless</option>
            </select>
          </div>
        `;
      }
      if (type === 'ad') {
        return `
          <div>
            <label for="flt-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Anti-Dumping Market</label>
            <select id="flt-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Regimes</option>
              <option value="USA">US Department of Commerce (DOC)</option>
              <option value="EU">EU Countervailing Tariff</option>
            </select>
          </div>
        `;
      }
      return `
        <div>
          <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
          <input type="text" id="rep-flt-search" placeholder="Search shift run, line, in-charge..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Shift Date</label>
          <input type="date" id="rep-flt-from" value="2026-10-28" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
        </div>
      `;
    }

    // ----------------------------------------------------
    // 6. Coldstore Analytics
    // ----------------------------------------------------
    if (submenuId === 'coldstore-analytics' || submenuId.includes('coldstore')) {
      if (type === 'stock') {
        return `
          <div>
            <label for="flt-chamber" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Coldstore Room</label>
            <select id="flt-chamber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Chambers</option>
              <option value="Room 1">Coldstore Room 1</option>
              <option value="Room 2">Coldstore Room 2</option>
              <option value="Room 3">Coldstore Room 3</option>
              <option value="Room 4">Coldstore Room 4</option>
            </select>
          </div>
          <div>
            <label for="flt-clearance" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Stock Allocation</label>
            <select id="flt-clearance" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Statuses</option>
              <option value="In Coldstore Stock">In Stock (Unallocated)</option>
              <option value="Allocated for Shipment">Allocated for Export</option>
            </select>
          </div>
        `;
      }
      if (type === 'exceptions') {
        return `
          <div>
            <label for="flt-chamber" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Coldstore Chamber</label>
            <select id="flt-chamber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Chambers</option>
              <option value="Room 2">Coldstore Room 2</option>
              <option value="Room 3">Coldstore Room 3</option>
              <option value="Room 4">Coldstore Room 4</option>
            </select>
          </div>
          <div>
            <label for="flt-priority" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Severity Level</label>
            <select id="flt-priority" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL" selected>All Severity</option>
              <option value="High">Critical / High Alert</option>
              <option value="Medium">Medium Advisory</option>
            </select>
          </div>
        `;
      }
      return `
        <div>
          <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
          <input type="text" id="rep-flt-search" placeholder="Search pallet, chamber, product..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label for="rep-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Placement Date</label>
          <input type="date" id="rep-flt-from" value="2026-10-28" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
        </div>
      `;
    }

    // Default Fallback Filter
    return `
      <div>
        <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
        <input type="text" id="rep-flt-search" placeholder="Search reference, entity..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
      </div>
    `;
  },

  // Modal: Show Details Page matching our Atlassian UI style
  showReportDetails(row, pageTitle) {
    if (!row) return;

    const ref = row.docNo || row.refNo || row.batchNo || row.testNo || row.palletRef || row.runId || row.billNo || row.invoiceNo || row.contractNo || row.orderNo || ('REC-' + row.id);
    const date = row.date || row.productionDate || row.shipDate || row.shipmentDate || row.auditDate || row.etd || '2026-10-28';
    const status = row.status || row.priority || row.qcStatus || row.paymentStatus || row.freightStatus || row.realizationStatus || row.etaStatus || 'Audited & Verified';

    const excludedKeys = new Set(['id', 'actions', 'sNo', 'consigneeKey', 'year', 'exporter']);
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
              <span class="font-semibold text-xs text-[#172B4D]">${date}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">STATUS</span>
              <span class="inline-flex items-center gap-1 font-bold text-[11px] text-[#00875A]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${status}
              </span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">CATEGORY</span>
              <span class="font-semibold text-xs text-[#172B4D]">${pageTitle}</span>
            </div>
          </div>

          <!-- Primary Specifications Card -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider border-b border-[#EBECF0] pb-2 mb-3">Primary Specifications &amp; Ledger Data</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              ${topGrid.map(([k, v]) => `
                <div>
                  <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block mb-0.5">${formatKey(k)}</span>
                  <span class="font-semibold text-xs text-[#172B4D]">${formatVal(k, v)}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Additional Metadata & Extended Parameters -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider border-b border-[#EBECF0] pb-2 mb-3">Extended Quality &amp; Compliance Details</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
    // 1. Sales & Export Analytics
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
            if (p === 'high') { bg = 'bg-[#FFEBE6] text-[#DE350B] border-[#FFBDAD]'; dot = 'bg-[#DE350B]'; }
            else if (p === 'low') { bg = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]'; dot = 'bg-[#00875A]'; }
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
      } else if (reportType === 'price-book') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'variety', header: 'Product Item', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'grade', header: 'Grade / Count', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}</span>` },
          { field: 'pack', header: 'Packing Style', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'fobPrice', header: 'Base FOB Rate ($)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">$${v.toFixed(2)} / Kg</span>` },
          { field: 'moq', header: 'MOQ (MCs)', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'effectiveDate', header: 'Effective From', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'validUntil', header: 'Valid Until', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'status', header: 'Price Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, variety: 'Vannamei EZ-Peel IQF', grade: '16/20', pack: '10 x 2 Lbs', fobPrice: 9.80, moq: 1000, effectiveDate: '2026-10-01', validUntil: '2026-11-15', status: 'Active Official Rate' },
          { id: 2, variety: 'Vannamei EZ-Peel IQF', grade: '21/25', pack: '10 x 2 Lbs', fobPrice: 8.90, moq: 1000, effectiveDate: '2026-10-01', validUntil: '2026-11-15', status: 'Active Official Rate' },
          { id: 3, variety: 'Vannamei EZ-Peel IQF', grade: '26/30', pack: '10 x 2 Lbs', fobPrice: 7.80, moq: 1000, effectiveDate: '2026-10-01', validUntil: '2026-11-15', status: 'Active Official Rate' },
          { id: 4, variety: 'Vannamei Nobashi Tray', grade: '21/25', pack: '20 x 300g', fobPrice: 9.10, moq: 800, effectiveDate: '2026-10-15', validUntil: '2026-11-30', status: 'Active Official Rate' },
          { id: 5, variety: 'Black Tiger HLSO', grade: '13/15', pack: '6 x 1.8 Kg', fobPrice: 12.40, moq: 500, effectiveDate: '2026-10-01', validUntil: '2026-11-15', status: 'Active Official Rate' }
        ];
      } else if (reportType === 'approved-contracts') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'contractNo', header: 'Contract No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
          { field: 'date', header: 'Contract Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'buyer', header: 'Buyer / Consignee', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'destination', header: 'Destination', sortable: true, render: v => `<span class="text-xs text-[#172B4D]">${v}</span>` },
          { field: 'variety', header: 'Product Item', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'quantity', header: 'Contract Qty (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'fobRate', header: 'FOB Rate/Kg', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">$${v}</span>` },
          { field: 'contractValue', header: 'Total Value ($)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">$${Number(v).toLocaleString()}</span>` },
          { field: 'status', header: 'Approval Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, contractNo: 'CTR-EXP-2026-088', date: '2026-10-24', buyer: 'Pacific Coast Seafood LLC', destination: 'USA', variety: 'Vannamei Easy-Peel 31/40', quantity: 24000, fobRate: 7.20, contractValue: 172800, status: 'Approved by Director', year: '2026-2027', country: 'USA' },
          { id: 2, contractNo: 'CTR-EXP-2026-089', date: '2026-10-23', buyer: 'Nippon Suisan Kaisha Ltd', destination: 'Japan', variety: 'Black Tiger HLSO 16/20', quantity: 18000, fobRate: 11.50, contractValue: 207000, status: 'Approved by Director', year: '2026-2027', country: 'Japan' },
          { id: 3, contractNo: 'CTR-EXP-2026-090', date: '2026-10-22', buyer: 'Euro-Baltic Marine Traders', destination: 'Netherlands', variety: 'Cooked Tail-On IQF 26/30', quantity: 22000, fobRate: 8.40, contractValue: 184800, status: 'Approved by Director', year: '2026-2027', country: 'Netherlands' }
        ];
      } else if (reportType === 'eta-status') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
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
      } else if (reportType === 'fda-examination') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'entryNo', header: 'FDA Entry No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'containerNo', header: 'Container Ref', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'port', header: 'US Port of Entry', sortable: true, render: v => `<span class="text-xs text-[#172B4D]">${v}</span>` },
          { field: 'examType', header: 'Examination Type', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6]">${v}</span>` },
          { field: 'findings', header: 'Lab / Inspection Findings', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}</span>` },
          { field: 'fdaAction', header: 'USFDA Action', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, entryNo: 'FDA-ENT-2026-9014', containerNo: 'MSKU-820491-2', port: 'Port of Long Beach', examType: 'Physical Organoleptic & Seal Check', findings: 'Compliant with USFDA Limits', fdaAction: 'May Proceed (Green Ticket)' },
          { id: 2, entryNo: 'FDA-ENT-2026-9015', containerNo: 'MEDU-992140-5', port: 'Port of New York / Newark', examType: 'FDA Antibiotic Screen (AOZ / CAP)', findings: 'Zero Residues Detected (<0.1 ppb)', fdaAction: 'May Proceed (Green Ticket)' }
        ];
      } else if (reportType === 'freight-rates') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'carrier', header: 'Ocean Carrier', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'pol', header: 'Port of Loading', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'pod', header: 'Port of Discharge', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'containerSize', header: 'Container Type', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] font-bold">${v}</span>` },
          { field: 'freightUsd', header: 'Base Freight ($)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">$${v}</span>` },
          { field: 'baf', header: 'BAF / Bunker ($)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">$${v}</span>` },
          { field: 'totalFreight', header: 'Total Freight ($)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">$${Number(v).toLocaleString()}</span>` },
          { field: 'validity', header: 'Validity', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'status', header: 'Rate Agreement', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, carrier: 'Maersk Line India', pol: 'Visakhapatnam (INVTZ)', pod: 'Long Beach, USA (USLGB)', containerSize: '40ft Reefer High Cube', freightUsd: 4850, baf: 420, totalFreight: 5270, validity: '2026-11-30', status: 'Contracted Rate' },
          { id: 2, carrier: 'MSC Mediterranean', pol: 'Visakhapatnam (INVTZ)', pod: 'New York, USA (USNYC)', containerSize: '40ft Reefer High Cube', freightUsd: 5400, baf: 480, totalFreight: 5880, validity: '2026-11-30', status: 'Contracted Rate' },
          { id: 3, carrier: 'ONE Ocean Network', pol: 'Visakhapatnam (INVTZ)', pod: 'Yokohama, Japan (JPYOK)', containerSize: '40ft Reefer High Cube', freightUsd: 2950, baf: 310, totalFreight: 3260, validity: '2026-12-15', status: 'Contracted Rate' }
        ];
      } else {
        // Standard Shipment Report & other sales reports
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'invoiceNo', header: 'Invoice / Container', sortable: true, render: (v, r) => `<div class="flex flex-col"><span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span><span class="text-[10px] font-mono text-[#5E6C84]">${r.containerNo}</span></div>` },
          { field: 'shipDate', header: 'Ship Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'buyer', header: 'Buyer / Consignee', sortable: true, render: (v, r) => `<div class="flex flex-col"><span class="font-semibold text-xs text-[#172B4D]">${v}</span><span class="text-[10px] text-[#5E6C84]">${r.destination}</span></div>` },
          { field: 'port', header: 'Discharge Port', sortable: true, render: v => `<span class="text-xs text-[#172B4D]">${v}</span>` },
          { field: 'cartons', header: 'Total MCs', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'fobVal', header: 'FOB Value ($)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">$${Number(v).toLocaleString()}</span>` },
          { field: 'freightStatus', header: 'Logistics Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]"><span class="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>${v}</span>` },
          { field: 'realizationStatus', header: 'Realization', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, invoiceNo: 'EXP-INV-2026-081', containerNo: 'MSKU-820491-2', shipDate: '2026-10-28', buyer: 'Pacific Coast Seafood LLC', destination: 'Los Angeles, USA', port: 'Port of Long Beach', cartons: 2150, fobVal: 142500, freightStatus: 'Vessel In Transit', realizationStatus: 'LC Realized 100%' },
          { id: 2, invoiceNo: 'EXP-INV-2026-082', containerNo: 'CMAU-491028-6', shipDate: '2026-10-27', buyer: 'Nippon Suisan Kaisha Ltd', destination: 'Tokyo, Japan', port: 'Port of Yokohama', cartons: 1980, fobVal: 168400, freightStatus: 'Vessel In Transit', realizationStatus: 'LC Realized 100%' },
          { id: 3, invoiceNo: 'EXP-INV-2026-083', containerNo: 'HLCU-319402-1', shipDate: '2026-10-26', buyer: 'Euro-Baltic Marine Traders', destination: 'Rotterdam, Netherlands', port: 'Port of Rotterdam', cartons: 2200, fobVal: 139200, freightStatus: 'Customs Cleared', realizationStatus: 'Payment Received' }
        ];
      }
    }

        // ==========================================
    // 2. Purchase Reports (15 Distinct Types with Actions Column)
    // ==========================================
    else if (submenuId === 'purchase-reports' || submenuId.includes('purchase')) {
      const actionCol = {
        field: 'actions',
        header: 'Actions',
        sortable: false,
        render: (v, r) => `
          <div class="flex items-center gap-1.5 justify-center">
            <button type="button" class="btn-pc-view p-1.5 rounded hover:bg-[#EBECF0] text-[#00A4B7] transition-colors cursor-pointer" data-id="${r.id}" title="View Details">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </button>
            <button type="button" class="btn-pc-download p-1.5 rounded hover:bg-[#EBECF0] text-[#107C41] transition-colors cursor-pointer" data-id="${r.id}" title="Download Report">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </button>
          </div>
        `
      };

      if (reportType === 'purchase-count-wise') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'count', header: 'Count / Size', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}</span>` },
          { field: 'variety', header: 'RM Variety', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'totalLots', header: 'Total Lots', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'netWeight', header: 'Total Qty (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'avgRate', header: 'Avg Rate / Kg', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'totalAmount', header: 'Total Purchase Value', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          actionCol
        ];
        rows = [
          { id: 1, count: '16/20', variety: 'Vannamei Fresh', totalLots: 8, netWeight: 14200, avgRate: 460.00, totalAmount: 6532000 },
          { id: 2, count: '20/25', variety: 'Black Tiger', totalLots: 6, netWeight: 9800, avgRate: 550.00, totalAmount: 5390000 },
          { id: 3, count: '30/40', variety: 'Vannamei Fresh', totalLots: 18, netWeight: 32400, avgRate: 320.00, totalAmount: 10368000 },
          { id: 4, count: '40/50', variety: 'Vannamei Fresh', totalLots: 12, netWeight: 24100, avgRate: 290.00, totalAmount: 6989000 }
        ];
      } else if (reportType === 'center-wise-report' || reportType === 'center-wise-abstract') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'chamber', header: 'Procurement Center', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'incharge', header: 'Center In-Charge', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'totalLots', header: 'Received Lots', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
          { field: 'netWeight', header: 'Net Weight (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'grossVal', header: 'Gross Value', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'status', header: 'Center Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` },
          actionCol
        ];
        rows = [
          { id: 1, chamber: 'Bhimavaram Procurement Hub', incharge: 'K. R. V. Prasad', totalLots: 24, netWeight: 48500, grossVal: 15520000, status: 'Active Hub' },
          { id: 2, chamber: 'Machilipatnam Delta Center', incharge: 'N. Satyanarayana', totalLots: 19, netWeight: 36200, grossVal: 12670000, status: 'Active Hub' },
          { id: 3, chamber: 'Narsapur Coastal Station', incharge: 'P. V. Subbarao', totalLots: 15, netWeight: 28400, grossVal: 9088000, status: 'Active Hub' },
          { id: 4, chamber: 'Bapatla Buying Station', incharge: 'Ch. Venkat', totalLots: 12, netWeight: 22100, grossVal: 7735000, status: 'Active Hub' }
        ];
      } else if (reportType === 'supplier-bill-summary' || reportType === 'supplier-wise-ledger') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'supplier', header: 'Farmer / Supplier', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'chamber', header: 'Center', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'billCount', header: 'Total Bills', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] font-bold">${v}</span>` },
          { field: 'totalBilled', header: 'Billed Amount', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'paidAmount', header: 'Paid via NEFT', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'outstanding', header: 'Balance Outstanding', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#DE350B]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'status', header: 'Settlement Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` },
          actionCol
        ];
        rows = [
          { id: 1, supplier: 'Sri Sai Ram Aqua Farm', chamber: 'Bhimavaram', billCount: 4, totalBilled: 8120000, paidAmount: 8120000, outstanding: 0, status: 'Fully Settled' },
          { id: 2, supplier: 'Krishna Delta Aqua Producers', chamber: 'Machilipatnam', billCount: 3, totalBilled: 6850000, paidAmount: 5000000, outstanding: 1850000, status: 'Partially Outstanding' },
          { id: 3, supplier: 'Godavari Coastal Farms Ltd', chamber: 'Narsapur', billCount: 5, totalBilled: 11400000, paidAmount: 11400000, outstanding: 0, status: 'Fully Settled' }
        ];
      } else if (reportType === 'company-wise-tds') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'pan', header: 'Farmer / Entity PAN', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
          { field: 'supplier', header: 'Deductee Name', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'section', header: 'TDS Section', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6]">${v}</span>` },
          { field: 'grossVal', header: 'Gross Purchase', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'tdsRate', header: 'Rate %', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}%</span>` },
          { field: 'tdsAmount', header: 'TDS Deducted', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#DE350B]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'status', header: 'Challan Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` },
          actionCol
        ];
        rows = [
          { id: 1, pan: 'ABCDE1234F', supplier: 'Sri Sai Ram Aqua Farm', section: '194Q', grossVal: 8120000, tdsRate: 0.1, tdsAmount: 8120, status: 'Challan Deposited' },
          { id: 2, pan: 'XYZPA9876K', supplier: 'Krishna Delta Aqua Producers', section: '194Q', grossVal: 6850000, tdsRate: 0.1, tdsAmount: 6850, status: 'Challan Deposited' }
        ];
      } else if (reportType === 'agent-commission') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'agentCode', header: 'Agent Code', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
          { field: 'supplier', header: 'Agent Name', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'chamber', header: 'Procurement Cluster', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'procuredQty', header: 'Brokered Qty (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'commRate', header: 'Commission / Kg', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">₹${v.toFixed(2)}</span>` },
          { field: 'totalComm', header: 'Commission Amount', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'status', header: 'Payout Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` },
          actionCol
        ];
        rows = [
          { id: 1, agentCode: 'AGT-BM-01', supplier: 'M. S. Raju (Bhimavaram Agro)', chamber: 'Bhimavaram', procuredQty: 64200, commRate: 2.50, totalComm: 160500, status: 'Commission Disbursed' },
          { id: 2, agentCode: 'AGT-MC-04', supplier: 'Ch. Veerabhadra Rao', chamber: 'Machilipatnam', procuredQty: 48900, commRate: 2.50, totalComm: 122250, status: 'Commission Disbursed' }
        ];
      } else {
        // Standard General Purchase Report / Arrival Report
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'docNo', header: 'GRN / Arrival No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
          { field: 'date', header: 'Arrival Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
          { field: 'supplier', header: 'Supplier / Farmer', sortable: true, render: (v, r) => `<div class="flex flex-col"><span class="font-semibold text-xs text-[#172B4D]">${v}</span><span class="text-[10px] text-[#5E6C84]">${r.chamber || r.location || 'Procurement Hub'}</span></div>` },
          { field: 'lotNo', header: 'Lot No', sortable: true, render: v => `<span class="font-mono text-xs text-[#00A4B7] font-semibold">${v}</span>` },
          { field: 'variety', header: 'Variety', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'count', header: 'Count / Size', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] font-bold">${v}</span>` },
          { field: 'netWeight', header: 'Net Wt (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'grossVal', header: 'Gross Value', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
          { field: 'qcStatus', header: 'QC Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` },
          actionCol
        ];
        rows = [
          { id: 1, docNo: 'ARR-2026-1044', date: '2026-10-28', supplier: 'Sri Sai Ram Aqua Farm', chamber: 'Bhimavaram Hub', lotNo: 'LOT-2026-0912', variety: 'Vannamei Fresh', count: '30/40', netWeight: 8450, grossVal: 2704000, qcStatus: 'Passed Grade A' },
          { id: 2, docNo: 'ARR-2026-1045', date: '2026-10-28', supplier: 'Krishna Delta Aqua Producers', chamber: 'Machilipatnam Hub', lotNo: 'LOT-2026-0913', variety: 'Black Tiger', count: '20/25', netWeight: 6200, grossVal: 3410000, qcStatus: 'Passed Grade A' },
          { id: 3, docNo: 'ARR-2026-1046', date: '2026-10-27', supplier: 'Godavari Coastal Farms Ltd', chamber: 'Narsapur Zone', lotNo: 'LOT-2026-0914', variety: 'Vannamei Fresh', count: '40/50', netWeight: 9800, grossVal: 2842000, qcStatus: 'Passed Grade A' },
          { id: 4, docNo: 'ARR-2026-1047', date: '2026-10-26', supplier: 'Suryalanka Marine Culture', chamber: 'Bapatla Belt', lotNo: 'LOT-2026-0915', variety: 'Vannamei Fresh', count: '25/30', netWeight: 11200, grossVal: 3920000, qcStatus: 'Passed Grade A' }
        ];
      }
    }
    }

    // ==========================================
    // 3. Pre-Processing Reports
    // ==========================================
    else if (submenuId === 'preprocessing-reports' || submenuId.includes('preproc')) {
      if (reportType === 'deheading') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'batchNo', header: 'Deheading Batch', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'line', header: 'Processing Line', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'rmInput', header: 'Input Whole (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'recovery', header: 'Deheaded (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
          { field: 'yieldPct', header: 'Actual Recovery %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}%</span>` },
          { field: 'stdYield', header: 'Standard Yield', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}%</span>` },
          { field: 'variance', header: 'Variance', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">+${v}%</span>` }
        ];
        rows = [
          { id: 1, batchNo: 'BCH-DH-2026-081', line: 'Deheading Line 1', rmInput: 12500, recovery: 8125, yieldPct: 65.0, stdYield: 64.0, variance: 1.0 },
          { id: 2, batchNo: 'BCH-DH-2026-082', line: 'Deheading Line 2', rmInput: 11200, recovery: 7300, yieldPct: 65.2, stdYield: 64.0, variance: 1.2 }
        ];
      } else if (reportType === 'peeling') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'tableRef', header: 'Peeling Table ID', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'workerCount', header: 'Peelers Count', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v} Active</span>` },
          { field: 'rmInput', header: 'HLSO Input (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'recovery', header: 'Peeled Meat (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
          { field: 'yieldPct', header: 'Recovery %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}%</span>` },
          { field: 'status', header: 'Inspection Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, tableRef: 'PL-TAB-A-01', workerCount: 42, rmInput: 8125, recovery: 6987, yieldPct: 86.0, status: 'Graded & Cleared' },
          { id: 2, tableRef: 'PL-TAB-B-02', workerCount: 38, rmInput: 7400, recovery: 6364, yieldPct: 86.0, status: 'Graded & Cleared' }
        ];
      } else {
        // Standard General Preprocessing Ledger
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
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
    }

    // ==========================================
    // 4. Quality Control Reports
    // ==========================================
    else if (submenuId === 'quality-reports' || submenuId.includes('quality') || submenuId.includes('qc')) {
      if (reportType === 'lab') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'testNo', header: 'Lab Test No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'testType', header: 'Screening Protocol', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'marker', header: 'Target Marker', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] font-bold">${v}</span>` },
          { field: 'threshold', header: 'MRL Limit', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'result', header: 'Observed Reading', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}</span>` },
          { field: 'status', header: 'Export Clearance', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, testNo: 'LAB-EL-2026-0412', testType: 'ELISA Screen', marker: 'AOZ / Nitrofuran', threshold: '0.5 ppb', result: 'Not Detected (<0.1 ppb)', status: 'Cleared for Export' },
          { id: 2, testNo: 'LAB-EL-2026-0413', testType: 'HPLC Confirmatory', marker: 'Chloramphenicol', threshold: '0.3 ppb', result: 'Negative (0.00 ppb)', status: 'Cleared for Export' },
          { id: 3, testNo: 'LAB-EL-2026-0414', testType: 'ELISA Screen', marker: 'AMOZ', threshold: '0.5 ppb', result: 'Not Detected (<0.1 ppb)', status: 'Cleared for Export' }
        ];
      } else if (reportType === 'audits') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'auditRef', header: 'Audit Ref No', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'standard', header: 'Accreditation Standard', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6]">${v}</span>` },
          { field: 'facility', header: 'Audited Section', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'score', header: 'Audit Compliance Score', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}</span>` },
          { field: 'status', header: 'Certification Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, auditRef: 'AUD-BAP-2026-019', standard: 'BAP 4-Star Plant Sanitation Audit', facility: 'Processing Line 1 & IQF Tunnel', score: '98.6% (A Grade)', status: 'BAP Certified' },
          { id: 2, auditRef: 'AUD-BRC-2026-004', standard: 'BRCGS Global Food Standard (Issue 9)', facility: 'Coldstores & Packaging Halls', score: 'Grade AA Certified', status: 'Compliant' }
        ];
      } else {
        // Standard General QC Ledger
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
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
    }

    // ==========================================
    // 5. Production Analytics
    // ==========================================
    else if (submenuId === 'production-analytics' || submenuId.includes('production')) {
      if (reportType === 'yield') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'runId', header: 'Freezer Run ID', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'product', header: 'Product Item', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'line', header: 'Tunnel Unit', sortable: true, render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>` },
          { field: 'targetQty', header: 'Target (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${Number(v).toLocaleString()}</span>` },
          { field: 'achievedQty', header: 'Actual (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
          { field: 'efficiency', header: 'Freezing Yield %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}%</span>` },
          { field: 'status', header: 'Quality Run', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, runId: 'TUN-IQF-2026-081', product: 'Vannamei Easy-Peel 31/40', line: 'IQF Tunnel 1', targetQty: 6000, achievedQty: 6180, efficiency: 103.0, status: 'Completed Grade A' },
          { id: 2, runId: 'TUN-CKD-2026-042', product: 'Tail-On Cooked IQF 26/30', line: 'Cooked Line A', targetQty: 4500, achievedQty: 4480, efficiency: 99.5, status: 'Completed Grade A' }
        ];
      } else {
        // Standard Production Ledger
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
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
    }

    // ==========================================
    // 6. Coldstore Analytics
    // ==========================================
    else if (submenuId === 'coldstore-analytics' || submenuId.includes('coldstore')) {
      if (reportType === 'exceptions') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'incidentId', header: 'Incident Ref', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer">${v}</span>` },
          { field: 'chamber', header: 'Coldstore Chamber', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'incident', header: 'Event / Anomaly', sortable: true, render: v => `<span class="text-xs text-[#172B4D]">${v}</span>` },
          { field: 'reading', header: 'Sensor Reading', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#DE350B]">${v}</span>` },
          { field: 'severity', header: 'Severity', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFEBE6] text-[#DE350B] border border-[#FFBDAD]"><span class="w-1.5 h-1.5 rounded-full bg-[#DE350B]"></span>${v}</span>` },
          { field: 'status', header: 'Resolution Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` }
        ];
        rows = [
          { id: 1, incidentId: 'EXC-CS-2026-012', chamber: 'Coldstore Room 3 (Door 2)', incident: 'Door Open Duration Exceeded (14 Mins)', reading: '-18.1°C (Temp Rise)', severity: 'High Alert', status: 'Door Closed & Temp Restored' },
          { id: 2, incidentId: 'EXC-CS-2026-013', chamber: 'Coldstore Room 4 (Bay C)', incident: 'Pallet Placement Inverted Barcode', reading: 'PLT-CS-1084', severity: 'Minor Advisory', status: 'Barcode Scanned & Corrected' }
        ];
      } else {
        // Standard Coldstore Pallet Stock Ledger
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
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
    }

    return { columns, rows };
  }
};
