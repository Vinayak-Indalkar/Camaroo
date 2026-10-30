import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';

export const ReportsView = {
  render(containerId, activeTab = 'sales-export-analytics', resolvedHash = '#/reports/sales-export-analytics/sales-export-analytics') {
    const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!container) return;

    let submenuId = activeTab || 'sales-export-analytics';
    let pageTitle = '';

    if (typeof resolvedHash === 'string' && (resolvedHash.startsWith('#') || resolvedHash.includes('/'))) {
      const clean = resolvedHash.replace(/^#\/?/, '').replace(/^\/+/, '');
      const parts = clean.split('/');
      if (parts[1]) {
        submenuId = parts[1];
      }
    } else if (typeof resolvedHash === 'string' && resolvedHash.trim().length > 0) {
      pageTitle = resolvedHash.trim();
    }

    const titlesMap = {
      'purchase-reports': 'Purchase Reports',
      'preprocessing-reports': 'Pre-Processing Reports',
      'quality-reports': 'Quality Control Reports',
      'production-analytics': 'Production Analytics',
      'coldstore-analytics': 'Coldstore Analytics',
      'sales-export-analytics': 'Sales & Export Analytics'
    };

    if (!pageTitle) {
      pageTitle = titlesMap[submenuId] || (submenuId ? submenuId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Reports');
    }

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
              <select id="rep-flt-type" class="text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] min-w-[220px]">
                ${reportTypeOptionsHtml}
              </select>
            </div>
          </div>
        </div>

        <!-- Search & Filter Card (calibrated as per the form data) -->
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

          <div id="rep-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
            ${this.getFilterFieldsHtml(submenuId, currentReportType)}
          </div>
        </div>

        <!-- Data Table Card (S No, Doc No, Date, Actions with only edit, delete icon) -->
        <div id="reports-table-container"></div>
      </div>
    `;

    // Render Table Component with Fixed Actions Column
    const tableContainer = container.querySelector('#reports-table-container');
    let table = null;

    const renderReportsTable = (data) => {
      table = new DataTable({
        container: tableContainer,
        tableTitle: `${typeLabel} (${data.length})`,
        columns: reportData.columns,
        data: data,
        searchable: true,
        pageSize: 10,
        selectable: false,
        exportable: true,
        actionsTitle: 'Actions',
        actions: reportData.actions || [
          {
            label: 'Edit',
            title: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`,
            onClick: (row) => {
              this.showReportDetails(row, typeLabel);
            }
          },
          {
            label: 'Delete',
            title: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Record',
                message: `Are you sure you want to permanently delete record <strong>${row.docNo || row.poNo || row.billNo || row.orderNo}</strong>? This action cannot be undone.`,
                confirmText: 'Delete',
                isDestructive: true,
                onConfirm: () => {
                  const idx = reportData.rows.findIndex(r => r.id === row.id || (row.docNo && r.docNo === row.docNo));
                  if (idx !== -1) {
                    reportData.rows.splice(idx, 1);
                    renderReportsTable(reportData.rows);
                    Toast.show(`Record permanently deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => this.showReportDetails(row, typeLabel)
      });
    };

    renderReportsTable(reportData.rows);

    // Attach Event Listeners for Filters
    const attachFilterEvents = () => {
      const searchBtn = container.querySelector('#rep-search-btn');
      const resetBtn = container.querySelector('#rep-flt-reset-btn');
      const docNoInput = container.querySelector('#rep-filter-docno');
      const dateInput = container.querySelector('#rep-filter-date');
      const deptSelect = container.querySelector('#rep-filter-dept');

      const handleFilter = () => {
        const docVal = docNoInput ? docNoInput.value.trim().toLowerCase() : '';
        const dateVal = dateInput ? dateInput.value.trim() : '';
        const deptVal = deptSelect ? deptSelect.value : 'ALL';

        let filtered = [...reportData.rows];
        if (docVal) {
          filtered = filtered.filter(r => 
            String(r.docNo || r.poNo || r.billNo || r.orderNo || r.code || '').toLowerCase().includes(docVal) ||
            String(r.supplier || r.buyer || r.farmer || '').toLowerCase().includes(docVal)
          );
        }
        if (dateVal) {
          filtered = filtered.filter(r => String(r.date || r.arrivalDate || '').includes(dateVal));
        }
        if (deptVal && deptVal !== 'ALL') {
          filtered = filtered.filter(r => 
            String(r.department || r.center || '').toLowerCase().includes(deptVal.toLowerCase())
          );
        }

        renderReportsTable(filtered);
        Toast.show(`Applied filters: ${filtered.length} matching record(s)`, 'info');
      };

      searchBtn?.addEventListener('click', handleFilter);
      docNoInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleFilter();
        }
      });

      resetBtn?.addEventListener('click', () => {
        if (docNoInput) docNoInput.value = '';
        if (dateInput) dateInput.value = '';
        if (deptSelect) deptSelect.value = 'ALL';
        renderReportsTable(reportData.rows);
        Toast.show('Filters reset', 'info');
      });
    };

    attachFilterEvents();

    // Type Select change
    const typeSelect = container.querySelector('#rep-flt-type');
    const updateViewForType = (type) => {
      currentReportType = type;
      typeLabel = this.getReportTypeLabel(submenuId, currentReportType, pageTitle);

      const filterBody = container.querySelector('#rep-flt-body');
      if (filterBody) {
        filterBody.innerHTML = this.getFilterFieldsHtml(submenuId, type);
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

    // Filter Reset Button
    const resetBtn = container.querySelector('#rep-flt-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (filterForm) filterForm.reset();
        table.setData(reportData.rows);
        Toast.show('Filters reset', 'info');
      });
    }

    // Delegate row action clicks
    container.addEventListener('click', (e) => {
      const viewBtn = e.target.closest('.rep-action-view');
      if (viewBtn) {
        e.stopPropagation();
        const ref = viewBtn.getAttribute('data-ref');
        const r = reportData.rows.find(x => 
          (x.orderNo === ref || x.lotNo === ref || x.code === ref || x.poNo === ref || x.billNo === ref || x.batchNo === ref || x.traceCode === ref || x.itemCode === ref || x.trackId === ref || x.qcNo === ref || x.formNo === ref || x.transId === ref || x.inwardNo === ref || x.rackNo === ref || String(x.id) === ref)
        );
        if (r) this.showReportDetails(r, this.getReportTypeLabel(submenuId, currentReportType, pageTitle));
        else Toast.show(`Viewing details for: ${ref}`, 'info');
        return;
      }
      const exportRowBtn = e.target.closest('.rep-action-export');
      if (exportRowBtn) {
        e.stopPropagation();
        const ref = exportRowBtn.getAttribute('data-ref');
        Toast.show(`Exporting dossier for ${ref}...`, 'success');
        return;
      }
    });
  },

  // Full Human-Readable Label Mapping for all 91 Report Types across 6 Submenus
  getReportTypeLabel(submenuId, reportType, pageTitle) {
    const labels = {
      // 1. Sales & Export Analytics (20)
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

      // 2. Purchase Reports (15)
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

      // 3. Pre-Processing Reports (10)
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

      // 4. Quality Control Reports (11)
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

      // 5. Production Analytics (14)
      'soaking-floor-balance': 'Soaking Floor Balance Report',
      'untreated-report': 'Untreated Report',
      'soaking-floor-balance-variety': 'Soaking Floor Balance Variety Report New',
      'soaking-report': 'Soaking Report',
      'freezing-report': 'Freezing Report',
      'freezing-production-report': 'Freezing Production Report',
      'reconciliation-report': 'Reconciliation Report',
      'headon-to-finished': 'Headon To Finished Report',
      'anti-dumping-form': 'Anti Dumping Entry Form',
      'anti-dumping-report': 'Anti Dumping Report',
      'anti-dumping-negative': 'Anti Dumping Negative Report',
      'anti-dumping-shipment': 'Anti Dumping Shipment Report',
      'anti-dumping-opening-closing': 'Anti Dumping Opening & Closing Report',
      'anti-dumping-closing': 'Anti Dumping Closing Report',

      // 6. Coldstore Analytics (21)
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
    return labels[reportType] || pageTitle || 'Analytical Report';
  },



  // Generates Exact Select Options HTML for all 6 Submenus
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
        <option value="anti-dumping-form">Anti Dumping Entry Form</option>
        <option value="anti-dumping-report">Anti Dumping Report</option>
        <option value="anti-dumping-negative">Anti Dumping Negative Report</option>
        <option value="anti-dumping-shipment">Anti Dumping Shipment Report</option>
        <option value="anti-dumping-opening-closing">Anti Dumping Opening & Closing Report</option>
        <option value="anti-dumping-closing">Anti Dumping Closing Report</option>
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
      <option value="detailed">Detailed Audit Ledger</option>
      <option value="summary">Summary Report</option>
    `;
  },



  // Dynamic Contextual Filter Fields Generator per Submenu & Report Type
  getFilterFieldsHtml(submenuId, type) {
    // ----------------------------------------------------
    // 1. Sales & Export Analytics
    // ----------------------------------------------------
    if (submenuId === 'sales-export-analytics' || submenuId.includes('sales')) {
      if (type === 'pending-contracts' || type === 'approved-contracts') {
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
              <option value="sysco">Sysco Corporation USA</option>
              <option value="nippon">Nippon Suisan Kaisha</option>
              <option value="maruha">Maruha Nichiro Corp</option>
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
              <option value="Unit 1">Unit 1 - Processing Facility (Vizag)</option>
              <option value="Unit 2">Unit 2 - Pre-Processing Facility</option>
              <option value="Unit 3">Unit 3 - Cold Storage & IQF</option>
            </select>
          </div>
        `;
      }
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
    // 2. Purchase Reports
    // ----------------------------------------------------
    if (submenuId === 'purchase-reports' || submenuId.includes('purchase')) {
      return `
        <!-- Filter: DOC NO -->
        <div>
          <label for="rep-filter-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
          <input type="text" id="rep-filter-docno" placeholder="Search by Doc No..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>

        <!-- Filter: DATE -->
        <div>
          <label for="rep-filter-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
          <input type="date" id="rep-filter-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>

        <!-- Filter: DEPARTMENT -->
        <div>
          <label for="rep-filter-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT</label>
          <select id="rep-filter-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL">All Departments</option>
            <option value="Processing Unit-5">Processing Unit-5</option>
            <option value="Coldstore Hub">Coldstore Hub</option>
            <option value="Quality Control Lab">Quality Control Lab</option>
            <option value="Engineering & Maintenance">Engineering & Maintenance</option>
            <option value="Pre-Processing Unit">Pre-Processing Unit</option>
            <option value="Administration & Safety">Administration & Safety</option>
          </select>
        </div>

        <!-- Search Button -->
        <div class="flex items-end">
          <button type="button" id="rep-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <span>Search</span>
          </button>
        </div>
      `;
    }

    // ----------------------------------------------------
    // 3. Pre-Processing Reports
    // ----------------------------------------------------
    if (submenuId === 'preprocessing-reports' || submenuId.includes('preproc')) {
      return `
        <div>
          <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Track ID / Lot Code</label>
          <input type="text" id="rep-flt-search" placeholder="Track ID (e.g. TRK-2026)..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label for="flt-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Bay / Machine Line</label>
          <select id="flt-line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL" selected>All Lines</option>
            <option value="Receiving Bay 1">Receiving Bay 1</option>
            <option value="Deheading Line 1">Deheading Line 1</option>
            <option value="Grading Machine A">Grading Machine A</option>
            <option value="VA Table 1">Value Addition Table 1</option>
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

    // ----------------------------------------------------
    // 4. Quality Control Reports
    // ----------------------------------------------------
    if (submenuId === 'quality-reports' || submenuId.includes('quality') || submenuId.includes('qc')) {
      return `
        <div>
          <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Audit Ref / Buyer Code</label>
          <input type="text" id="rep-flt-search" placeholder="Search audit or QC ref..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label for="flt-buyer" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Buyer / Standard</label>
          <select id="flt-buyer" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL" selected>All Buyers & Standards</option>
            <option value="Sysco">Sysco Corporation</option>
            <option value="USFDA">USFDA / EIA Standards</option>
            <option value="BAP">BAP 4-Star Standard</option>
            <option value="BRCGS">BRCGS Food Safety</option>
          </select>
        </div>
        <div>
          <label for="flt-qc-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Compliance Status</label>
          <select id="flt-qc-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL" selected>All Statuses</option>
            <option value="Passed">Compliant / Passed</option>
            <option value="Pending">Pending Analysis</option>
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

    // ----------------------------------------------------
    // 5. Production Analytics
    // ----------------------------------------------------
    if (submenuId === 'production-analytics' || submenuId.includes('production')) {
      return `
        <div>
          <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Batch / Shift / Form Ref</label>
          <input type="text" id="rep-flt-search" placeholder="Ref code (e.g. AD-2026, SHF)..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label for="flt-facility" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Production Unit</label>
          <select id="flt-facility" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL" selected>All Facilities</option>
            <option value="Soaking Bay A">Soaking Bay A (Chemical Free)</option>
            <option value="Soaking Bay B">Soaking Bay B (Standard)</option>
            <option value="IQF Tunnel 1">IQF Tunnel 1 (OctoFrost)</option>
            <option value="Plate Freezer 2">Plate Freezer Bay 2</option>
            <option value="Cooked Line A">Cooked Line A</option>
          </select>
        </div>
        <div>
          <label for="flt-ad-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Destination / Scope</label>
          <select id="flt-ad-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL" selected>All Export Markets</option>
            <option value="USA">USA (Anti-Dumping Scope)</option>
            <option value="EU">European Union</option>
            <option value="Japan">Japan (Cooked / Raw)</option>
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

    // ----------------------------------------------------
    // 6. Coldstore Analytics
    // ----------------------------------------------------
    if (submenuId === 'coldstore-analytics' || submenuId.includes('coldstore')) {
      return `
        <div>
          <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Pallet / Rack / Ref Code</label>
          <input type="text" id="rep-flt-search" placeholder="Rack (e.g. RCK-A), Pallet..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
        </div>
        <div>
          <label for="flt-chamber" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Coldstore Chamber</label>
          <select id="flt-chamber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL" selected>All Cold Chambers</option>
            <option value="Chamber 1">Chamber 1 (-22°C Bulk Finished)</option>
            <option value="Chamber 2">Chamber 2 (-20°C Export Buffer)</option>
            <option value="Chamber 3">Chamber 3 (-25°C Ultra Deep)</option>
            <option value="Chamber 4">Chamber 4 (-20°C Raw Block Store)</option>
          </select>
        </div>
        <div>
          <label for="flt-cs-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Product Variety</label>
          <select id="flt-cs-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            <option value="ALL" selected>All Varieties</option>
            <option value="Vannamei PDTO">Vannamei PDTO</option>
            <option value="Cooked Tail-On">Cooked Tail-On</option>
            <option value="Easy Peel Raw">Easy Peel Raw</option>
            <option value="Block Frozen HLSO">Block Frozen HLSO</option>
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

    return `
      <div>
        <label for="rep-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
        <input type="text" id="rep-flt-search" placeholder="Search..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
      </div>
    `;
  },



  // Detailed Modal for any record
  showReportDetails(row, pageTitle) {
    const ref = row.orderNo || row.lotNo || row.code || row.poNo || row.billNo || row.batchNo || row.traceCode || row.itemCode || row.trackId || row.qcNo || row.formNo || row.transId || row.inwardNo || row.rackNo || row.id || 'Details';
    const fields = Object.entries(row)
      .filter(([k]) => k !== 'id' && k !== '__actions__' && k !== 'actions')
      .map(([key, val]) => {
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        let displayVal = val;
        if (typeof val === 'number') {
          displayVal = val.toLocaleString();
        }
        return `
          <div class="flex flex-col p-2.5 bg-[#FAFBFC] border border-[#EBECF0] rounded-lg">
            <span class="text-[10px] font-bold uppercase tracking-wider text-[#5E6C84]">${formattedKey}</span>
            <span class="text-xs font-semibold text-[#172B4D] mt-0.5 break-words">${displayVal || '—'}</span>
          </div>
        `;
      }).join('');

    Modal.open({
      title: `${pageTitle}: ${ref}`,
      size: 'lg',
      content: `
        <div class="space-y-4">
          <div class="bg-[#DEEBFF] border border-[#B3D4FF] rounded-xl p-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#0052CC]"></span>
              <span class="text-xs font-bold text-[#0747A6]">Official Record Dossier</span>
            </div>
            <span class="font-mono text-xs font-bold text-[#0747A6]">${ref}</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[60vh] overflow-y-auto p-1">
            ${fields}
          </div>

          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#00875A]"></span>
              <span class="font-semibold text-[#172B4D]">Verification Status:</span>
              <span class="text-[#00875A] font-medium">Digital ERP Ledger Verified & Certified</span>
            </div>
            <div class="font-mono text-[11px] text-[#5E6C84]">Devi Fisheries Quality Infrastructure</div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: modal => modal.close() },
        { label: 'Download Dossier', type: 'primary', onClick: () => { Toast.show(`Dossier for ${ref} downloaded successfully!`, 'success'); } }
      ]
    });
  },

  // Generate Tab-Specific Columns & Realistic Datasets for ALL 91 Application Report Types
  getReportData(submenuId, reportType = 'ALL', pageTitle = 'Reports') {
    let columns = [];
    let rows = [];

    // Sticky Action Column applied to all tables
    const actionCol = {
      field: 'actions',
      header: 'Actions',
      sortable: false,
      render: (v, r) => `
        <div class="flex items-center gap-1.5 justify-center">
          <button class="rep-action-view p-1 hover:bg-[#EBECF0] rounded text-[#00A4B7] hover:text-[#00875A] transition-colors" data-ref="${r.orderNo || r.lotNo || r.code || r.poNo || r.billNo || r.batchNo || r.traceCode || r.itemCode || r.trackId || r.qcNo || r.formNo || r.transId || r.inwardNo || r.rackNo || r.id || ''}" title="View Details">
            <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          </button>
          <button class="rep-action-export p-1 hover:bg-[#EBECF0] rounded text-[#5E6C84] hover:text-[#172B4D] transition-colors" data-ref="${r.orderNo || r.lotNo || r.code || r.poNo || r.billNo || r.batchNo || r.traceCode || r.itemCode || r.trackId || r.qcNo || r.formNo || r.transId || r.inwardNo || r.rackNo || r.id || ''}" title="Download / Export">
            <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          </button>
        </div>
      `
    };

    // ==========================================
    // 1. Sales & Export Analytics (20 Types)
    // ==========================================
    if (submenuId === 'sales-export-analytics' || submenuId.includes('sales')) {
      if (reportType === 'pending-contracts') {
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'orderNo', header: 'ORDER NO', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
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
          }},
          actionCol
        ];
        rows = [
          { id: 1, orderNo: 'ORD-DFL-2026-081', buyer: 'Sysco Corporation', brand: 'Devi Classic', variety: 'Vannamei PDTO', mcs: 1400, pack: '10x1 kg', grade: '31/40', shipmentDatePo: '2026-11-15', destination: 'Port of Los Angeles, USA', priority: 'High' },
          { id: 2, orderNo: 'ORD-DFL-2026-082', buyer: 'Nippon Suisan Kaisha', brand: 'AquaStar Premium', variety: 'Black Tiger HLSO', mcs: 850, pack: '6x1.8 kg', grade: '16/20', shipmentDatePo: '2026-11-20', destination: 'Tokyo Port, Japan', priority: 'High' },
          { id: 3, orderNo: 'ORD-DFL-2026-083', buyer: 'Maruha Nichiro Corp', brand: 'Devi Supreme', variety: 'Cooked Tail-On', mcs: 2100, pack: '5x2 lb', grade: '26/30', shipmentDatePo: '2026-11-28', destination: 'Yokohama Port, Japan', priority: 'Medium' },
          { id: 4, orderNo: 'ORD-DFL-2026-084', buyer: 'Euro-Baltic Marine', brand: 'Nordic Gold', variety: 'Easy Peel Raw', mcs: 1250, pack: '10x1 kg', grade: '41/50', shipmentDatePo: '2026-12-05', destination: 'Rotterdam, Netherlands', priority: 'Medium' },
          { id: 5, orderNo: 'ORD-DFL-2026-085', buyer: 'Pacific Coast Seafood', brand: 'Pacific Crest', variety: 'Raw Peeled Deveined', mcs: 950, pack: '5x2 lb', grade: '51/60', shipmentDatePo: '2026-12-10', destination: 'Seattle, USA', priority: 'Low' }
        ];
      } else {
        // Standard Sales Analytics format for other 19 types
        columns = [
          { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
          { field: 'refNo', header: 'REFERENCE / LOT NO', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
          { field: 'buyer', header: 'BUYER / IMPORTER', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
          { field: 'product', header: 'PRODUCT & SPEC', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
          { field: 'volume', header: 'VOLUME (KGS / MCS)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
          { field: 'port', header: 'PORT / LOGISTICS', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] font-medium">${v}</span>` },
          { field: 'status', header: 'AUDIT / COMPLIANCE STATUS', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` },
          actionCol
        ];
        rows = [
          { id: 1, refNo: 'EXP-DFL-2026-041', buyer: 'Sysco Corporation USA', product: 'Vannamei PDTO 31/40 (10x1kg)', volume: 14000, port: 'Port of Los Angeles / Maersk', status: 'Export Verified & Clean' },
          { id: 2, refNo: 'EXP-DFL-2026-042', buyer: 'Nippon Suisan Kaisha Japan', product: 'Black Tiger HLSO 16/20 (6x1.8kg)', volume: 9180, port: 'Tokyo Port / ONE Line', status: 'Health Certificate Approved' },
          { id: 3, refNo: 'EXP-DFL-2026-043', buyer: 'Maruha Nichiro Corp', product: 'Cooked Tail-On 26/30 (5x2lb)', volume: 19050, port: 'Yokohama / CMA CGM', status: 'Customs Cleared' },
          { id: 4, refNo: 'EXP-DFL-2026-044', buyer: 'Euro-Baltic Marine Traders', product: 'Easy Peel Raw 41/50 (10x1kg)', volume: 12500, port: 'Rotterdam / MSC', status: 'EU Veterinary Passed' }
        ];
      }
    }

    // ==========================================
    // 2. Purchase Reports (15 Types)
    // ==========================================
    else if (submenuId === 'purchase-reports' || submenuId.includes('purchase')) {
      columns = [
        // 1. S No (Clickable to show full indent details)
        {
          field: 'sNo',
          header: 'S No',
          sortable: true,
          render: (v, r, idx) => `
            <span class="text-[#00A4B7] font-semibold hover:underline cursor-pointer select-none" title="Click to view full indent details">${idx + 1}</span>
          `
        },
        // 2. Doc No (Clickable to show full indent details)
        {
          field: 'docNo',
          header: 'Doc No',
          sortable: true,
          render: (v, r) => `
            <div class="flex flex-col cursor-pointer" title="Click to view full indent details">
              <span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline whitespace-nowrap">${v || r.poNo || r.billNo || ''}</span>
              <span class="text-[10px] text-[#5E6C84]">${r.department || 'Processing Unit-5'} (${r.items?.length || 1} items)</span>
            </div>
          `
        },
        // 3. Date
        {
          field: 'date',
          header: 'Date',
          sortable: true,
          render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>`
        }
      ];

      rows = [
        { id: 1, docNo: 'IND-GS-2026-0041', poNo: 'PUR-DFL-2026-1041', date: '2026-10-28', department: 'Processing Unit-5', items: [{ name: 'Vannamei Fresh' }, { name: 'Ice' }], supplier: 'Sri Venkata Krishna Aquatics', center: 'Bhimavaram Center', variety: 'Vannamei Fresh', count: '30 Count', grossWt: 8450, rate: 385.00, grossVal: 3253250, status: 'Weighed & Certified' },
        { id: 2, docNo: 'IND-GS-2026-0042', poNo: 'PUR-DFL-2026-1042', date: '2026-10-27', department: 'Coldstore Hub', items: [{ name: 'Packaging Bags' }], supplier: 'Godavari Aqua Harvests', center: 'Machilipatnam Center', variety: 'Vannamei Fresh', count: '40 Count', grossWt: 6200, rate: 340.00, grossVal: 2108000, status: 'Weighed & Certified' },
        { id: 3, docNo: 'IND-GS-2026-0043', poNo: 'PUR-DFL-2026-1043', date: '2026-10-26', department: 'Quality Control Lab', items: [{ name: 'Testing Reagents' }], supplier: 'Kishna Coastal Prawns', center: 'Narsapur Center', variety: 'Black Tiger', count: '16/20 Count', grossWt: 4100, rate: 580.00, grossVal: 2378000, status: 'Weighed & Certified' },
        { id: 4, docNo: 'IND-GS-2026-0044', poNo: 'PUR-DFL-2026-1044', date: '2026-10-25', department: 'Engineering & Maintenance', items: [{ name: 'Spare Parts' }], supplier: 'Delta Prime Hatcheries & Farms', center: 'Bapatla Center', variety: 'Vannamei Fresh', count: '25 Count', grossWt: 9800, rate: 415.00, grossVal: 4067000, status: 'Weighed & Certified' },
        { id: 5, docNo: 'IND-GS-2026-0045', poNo: 'PUR-DFL-2026-1045', date: '2026-10-24', department: 'Pre-Processing Unit', items: [{ name: 'Grading Trays' }], supplier: 'Delta Sea Farms', center: 'Ongole Center', variety: 'Vannamei Fresh', count: '50 Count', grossWt: 7200, rate: 290.00, grossVal: 2088000, status: 'Weighed & Certified' },
        { id: 6, docNo: 'IND-GS-2026-0046', poNo: 'PUR-DFL-2026-1046', date: '2026-10-20', department: 'Administration & Safety', items: [{ name: 'Gloves' }], supplier: 'Coastal Marine Harvesters', center: 'Bhimavaram Center', variety: 'Sea White', count: '20/25 Count', grossWt: 5300, rate: 460.00, grossVal: 2438000, status: 'Weighed & Certified' },
        { id: 7, docNo: 'IND-GS-2026-0047', poNo: 'PUR-DFL-2026-1047', date: '2026-10-18', department: 'Processing Unit-5', items: [{ name: 'Aprons' }], supplier: 'Andhra Prawn Hatcheries', center: 'Machilipatnam Center', variety: 'Vannamei Fresh', count: '35 Count', grossWt: 6900, rate: 360.00, grossVal: 2484000, status: 'Weighed & Certified' },
        { id: 8, docNo: 'IND-GS-2026-0048', poNo: 'PUR-DFL-2026-1048', date: '2026-10-15', department: 'Coldstore Hub', items: [{ name: 'Pallets' }], supplier: 'Sagar Marine Farms', center: 'Narsapur Center', variety: 'Black Tiger', count: '10/15 Count', grossWt: 3800, rate: 690.00, grossVal: 2622000, status: 'Weighed & Certified' },
        { id: 9, docNo: 'IND-GS-2026-0049', poNo: 'PUR-DFL-2026-1049', date: '2026-10-12', department: 'Quality Control Lab', items: [{ name: 'Chlorine Strips' }], supplier: 'Krishna Delta Aqua', center: 'Bapatla Center', variety: 'Vannamei Fresh', count: '45 Count', grossWt: 8100, rate: 310.00, grossVal: 2511000, status: 'Weighed & Certified' },
        { id: 10, docNo: 'IND-GS-2026-0050', poNo: 'PUR-DFL-2026-1050', date: '2026-10-05', department: 'Engineering & Maintenance', items: [{ name: 'Filters' }], supplier: 'Godavari Bio-Harvest', center: 'Bhimavaram Center', variety: 'Vannamei Fresh', count: '28 Count', grossWt: 10500, rate: 395.00, grossVal: 4147500, status: 'Weighed & Certified' }
      ];
    }

    // ==========================================
    // 3. Pre-Processing Reports (10 Types)
    // ==========================================
    else if (submenuId === 'preprocessing-reports' || submenuId.includes('preproc')) {
      columns = [
        { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'trackId', header: 'TRACK ID / LOT NO', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'date', header: 'Shift Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'facility', header: 'Line / Machine Bay', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'variety', header: 'Raw Material Species', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
        { field: 'inflowQty', header: 'Inflow Wt (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${Number(v).toLocaleString()}</span>` },
        { field: 'outflowQty', header: 'Yielded Wt (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
        { field: 'recovery', header: 'Yield Recovery %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}%</span>` },
        { field: 'status', header: 'Floor State', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` },
        actionCol
      ];
      rows = [
        { id: 1, trackId: 'TRK-PP-2026-081', date: '2026-10-28', facility: 'Deheading Line 1', variety: 'Vannamei Fresh (Headon)', inflowQty: 12000, outflowQty: 7920, recovery: 66.0, status: 'Transferred to Grading' },
        { id: 2, trackId: 'TRK-PP-2026-082', date: '2026-10-28', facility: 'Grading Machine A', variety: 'Vannamei Headless 31/40', inflowQty: 7920, outflowQty: 7840, recovery: 99.0, status: 'Passed to Soaking Bay' },
        { id: 3, trackId: 'TRK-PP-2026-083', date: '2026-10-27', facility: 'VA Table 1 (PDTO)', variety: 'Tail-On Vannamei 26/30', inflowQty: 5400, outflowQty: 4428, recovery: 82.0, status: 'VA Floor Completed' },
        { id: 4, trackId: 'TRK-PP-2026-084', date: '2026-10-27', facility: 'Receiving Bay 2', variety: 'Black Tiger Headon', inflowQty: 8500, outflowQty: 5695, recovery: 67.0, status: 'Pre-Processing Verified' }
      ];
    }

    // ==========================================
    // 4. Quality Control Reports (11 Types)
    // ==========================================
    else if (submenuId === 'quality-reports' || submenuId.includes('quality') || submenuId.includes('qc')) {
      columns = [
        { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'qcNo', header: 'QC Dossier / Audit ID', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'target', header: 'Buyer / Standard Scope', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'batchCode', header: 'Inspected Lot / Trace Code', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'antibioticCheck', header: 'Antibiotic / Residue', sortable: true, render: v => `<span class="font-semibold text-[11px] text-[#00875A]">${v}</span>` },
        { field: 'sensoryGrade', header: 'Sensory / Organoleptic', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E3FCEF] text-[#006644]">${v}</span>` },
        { field: 'inspector', header: 'QC Auditor', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] font-medium">${v}</span>` },
        { field: 'status', header: 'Certification Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` },
        actionCol
      ];
      rows = [
        { id: 1, qcNo: 'QC-AUD-2026-091', target: 'Sysco Corporation (BRCGS Audit)', batchCode: 'LOT-EXP-2026-081', antibioticCheck: 'ND (Chloramphenicol / Nitrofurans)', sensoryGrade: 'Grade A Export Spec', inspector: 'Dr. K. Srinivas Rao (Lead Auditor)', status: 'Approved & Certified' },
        { id: 2, qcNo: 'QC-AUD-2026-092', target: 'USFDA Microbiological Protocol', batchCode: 'LOT-EXP-2026-082', antibioticCheck: 'Zero Tolerance Passed', sensoryGrade: 'Premium IQF Firm', inspector: 'P. Ananya (Microbiologist)', status: 'Approved & Certified' },
        { id: 3, qcNo: 'QC-AUD-2026-093', target: 'BAP 4-Star Traceability Audit', batchCode: 'TRC-BAP-2026-9014', antibioticCheck: 'Certified Clean Feed/Hatchery', sensoryGrade: 'Grade A Export Spec', inspector: 'Devi Fisheries QA Cell', status: 'Approved & Certified' },
        { id: 4, qcNo: 'QC-AUD-2026-094', target: 'EIA / MPEDA Export Clearance', batchCode: 'LOT-EXP-2026-084', antibioticCheck: 'Health Certificate Issued', sensoryGrade: 'Compliant EU Standard', inspector: 'Govt. EIA Inspector', status: 'Approved & Certified' }
      ];
    }

    // ==========================================
    // 5. Production Analytics (14 Types)
    // ==========================================
    else if (submenuId === 'production-analytics' || submenuId.includes('production')) {
      columns = [
        { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'batchNo', header: 'Production Run / AD Form Ref', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'date', header: 'Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'unit', header: 'Process Unit / Bay', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'variety', header: 'Product Spec', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
        { field: 'inQty', header: 'Input (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84]">${Number(v).toLocaleString()}</span>` },
        { field: 'outQty', header: 'Finished (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()}</span>` },
        { field: 'yieldPct', header: 'Yield / Efficiency %', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}%</span>` },
        { field: 'status', header: 'Log Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` },
        actionCol
      ];
      rows = [
        { id: 1, batchNo: 'RUN-SOAK-2026-104', date: '2026-10-28', unit: 'Soaking Bay A (Chemical Free)', variety: 'Vannamei PDTO 31/40', inQty: 6000, outQty: 6240, yieldPct: 104.0, status: 'Passed to Freezing' },
        { id: 2, batchNo: 'RUN-FREEZ-2026-088', date: '2026-10-28', unit: 'IQF Tunnel 1 (OctoFrost)', variety: 'Tail-On Cooked IQF 26/30', inQty: 4500, outQty: 4485, yieldPct: 99.7, status: 'Finished & Cartoned' },
        { id: 3, batchNo: 'FORM-AD-2026-042', date: '2026-10-27', unit: 'Anti-Dumping Entry Portal', variety: 'US Export Headless Blocks', inQty: 18000, outQty: 18000, yieldPct: 100.0, status: 'DOC Filed & Verified' },
        { id: 4, batchNo: 'RECON-PR-2026-019', date: '2026-10-27', unit: 'Headon To Finished Line', variety: 'Black Tiger Easy Peel', inQty: 8500, outQty: 5695, yieldPct: 67.0, status: 'Reconciled 100%' }
      ];
    }

    // ==========================================
    // 6. Coldstore Analytics (21 Types)
    // ==========================================
    else if (submenuId === 'coldstore-analytics' || submenuId.includes('coldstore')) {
      columns = [
        { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'rackNo', header: 'RACK / PALLET / INWARD REF', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'chamber', header: 'Chamber / Facility', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'product', header: 'Finished Product Style', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
        { field: 'cartons', header: 'Master Cartons', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${Number(v).toLocaleString()} MCs</span>` },
        { field: 'netWt', header: 'Net Weight (Kg)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>` },
        { field: 'temp', header: 'Chamber Temp', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${v}°C</span>` },
        { field: 'status', header: 'Storage State', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` },
        actionCol
      ];
      rows = [
        { id: 1, rackNo: 'RCK-CS-A12 / PLT-1081', chamber: 'Chamber 1 (-22°C Bulk Finished)', product: 'IQF Cooked Tail-On Vannamei 26/30 (6x2kg)', cartons: 640, netWt: 7680, temp: -21.8, status: 'In Coldstore Stock' },
        { id: 2, rackNo: 'RCK-CS-B04 / PLT-1082', chamber: 'Chamber 2 (-20°C Export Buffer)', product: 'Block Frozen HLSO Black Tiger 16/20 (6x1.8kg)', cartons: 580, netWt: 6264, temp: -20.5, status: 'Allocated for Shipment' },
        { id: 3, rackNo: 'RCK-CS-C19 / PLT-1083', chamber: 'Chamber 3 (-25°C Ultra Deep)', product: 'Easy Peel Raw Vannamei 31/40 (10x1kg)', cartons: 820, netWt: 8200, temp: -25.2, status: 'In Coldstore Stock' },
        { id: 4, rackNo: 'RCK-CS-D08 / PLT-1084', chamber: 'Chamber 4 (-20°C Raw Block Store)', product: 'Raw PDTO Vannamei 41/50 (5x2lb)', cartons: 740, netWt: 6713, temp: -21.4, status: 'In Coldstore Stock' },
        { id: 5, rackNo: 'REQ-RM-2026-051', chamber: 'Chamber 1 (-22°C Processing Feed)', product: 'Raw Material Buffer Stock for Line 1', cartons: 950, netWt: 10450, temp: -22.0, status: 'RM Requirement Ready' }
      ];
    }

    return { columns, rows };
  }
};
