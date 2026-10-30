import { TableComponent } from '../components/table.js';
import { ModalComponent } from '../components/modal.js';
import { Toast } from '../components/toast.js';

export const ReportsView = {
  render(container, submenuId = 'sales-export-analytics', pageTitle = 'Reports') {
    const isSales = submenuId === 'sales-export-analytics' || submenuId.includes('sales');
    let currentReportType = isSales ? 'pending-contracts' : 'ALL';

    const reportTypeOptionsHtml = isSales ? this.getReportTypeOptions(submenuId) : '';
    let reportData = this.getReportData(submenuId, currentReportType, pageTitle);
    const activeTitle = isSales ? this.getReportTypeLabel(submenuId, currentReportType, pageTitle) : pageTitle;

    container.innerHTML = `
      <div class="space-y-4">
        <!-- Header with Breadcrumb & Controls -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#DFE1E6]">
          <div>
            <div class="flex items-center gap-2 text-xs text-[#5E6C84] mb-1">
              <span>Reports</span>
              <span>/</span>
              <span class="font-medium text-[#172B4D]">${pageTitle}</span>
            </div>
            <h1 class="text-xl font-bold text-[#172B4D]" id="rep-page-title">${activeTitle}</h1>
          </div>
          
          <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            ${isSales ? `
              <!-- REPORT TYPE SELECTOR (Sales & Export Analytics Only) -->
              <div class="flex items-center gap-2">
                <label for="rep-flt-type" class="text-xs font-bold text-[#5E6C84] whitespace-nowrap uppercase tracking-wider">Report Type:</label>
                <select id="rep-flt-type" class="text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs min-w-[220px]">
                  ${reportTypeOptionsHtml}
                </select>
              </div>
            ` : ''}
            
            <button id="rep-btn-export" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#DFE1E6] hover:bg-[#F4F5F7] rounded text-xs font-semibold text-[#172B4D] transition-colors shadow-2xs">
              <svg class="w-3.5 h-3.5 text-[#5E6C84]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>Export</span>
            </button>
            <button id="rep-btn-print" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00A4B7] hover:bg-[#008A9A] text-white rounded text-xs font-semibold transition-colors shadow-2xs">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print</span>
            </button>
          </div>
        </div>

        <!-- Filter Card -->
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
          <form id="rep-filter-form" class="space-y-3">
            <div id="rep-dynamic-filter-fields" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              ${this.getFilterFieldsHtml(submenuId, currentReportType)}
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-[#EBECF0]">
              <span class="text-xs text-[#5E6C84]">Showing results for <span id="rep-type-display-badge" class="font-bold text-[#00A4B7]">${activeTitle}</span></span>
              <div class="flex items-center gap-2">
                <button type="button" id="rep-btn-reset" class="px-3 py-1.5 text-xs font-semibold text-[#5E6C84] hover:text-[#172B4D] hover:bg-[#F4F5F7] rounded transition-colors">
                  Reset
                </button>
                <button type="submit" id="rep-btn-search" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00A4B7] hover:bg-[#008A9A] text-white rounded text-xs font-semibold transition-colors shadow-2xs">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- Metrics Overview Bar -->
        <div id="rep-metrics-bar" class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3 shadow-2xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Total Records</div>
            <div class="text-lg font-bold text-[#172B4D] mt-0.5" id="rep-metric-records">${reportData.rows.length}</div>
            <div class="text-[11px] text-[#00875A] font-medium mt-0.5 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span> Active Verified Data
            </div>
          </div>
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3 shadow-2xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Primary Unit / Status</div>
            <div class="text-lg font-bold text-[#00A4B7] mt-0.5" id="rep-metric-weight">Active Batch</div>
            <div class="text-[11px] text-[#5E6C84] font-medium mt-0.5">Real-time ERP Metrics</div>
          </div>
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3 shadow-2xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Plant / Facility</div>
            <div class="text-lg font-bold text-[#172B4D] mt-0.5">Unit 1 & 2</div>
            <div class="text-[11px] text-[#5E6C84] font-medium mt-0.5">Devi Fisheries Hubs</div>
          </div>
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3 shadow-2xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Compliance State</div>
            <div class="text-lg font-bold text-[#00875A] mt-0.5">100% Certified</div>
            <div class="text-[11px] text-[#5E6C84] font-medium mt-0.5">BAP / USFDA Standards</div>
          </div>
        </div>

        <!-- Table Container -->
        <div class="bg-white border border-[#DFE1E6] rounded-xl shadow-xs overflow-hidden">
          <div id="reports-table-container"></div>
        </div>
      </div>
    `;

    // Render Table Component with Fixed Actions Column
    let typeLabel = isSales ? this.getReportTypeLabel(submenuId, currentReportType, pageTitle) : pageTitle;
    const table = new TableComponent({
      columns: reportData.columns,
      data: reportData.rows,
      searchable: true,
      pagination: true,
      pageSize: 10,
      selectable: false,
      stickyActionColumn: true,
      onRowClick: (row) => this.showReportDetails(row, typeLabel)
    });
    table.render(container.querySelector('#reports-table-container'));

    // Attach Event Listeners
    const typeSelect = container.querySelector('#rep-flt-type');
    const pageTitleEl = container.querySelector('#rep-page-title');
    const badgeEl = container.querySelector('#rep-type-display-badge');
    const dynamicFieldsContainer = container.querySelector('#rep-dynamic-filter-fields');
    const recordsMetric = container.querySelector('#rep-metric-records');

    const updateViewForType = (type) => {
      currentReportType = type;
      typeLabel = this.getReportTypeLabel(submenuId, currentReportType, pageTitle);
      if (pageTitleEl) pageTitleEl.textContent = typeLabel;
      if (badgeEl) badgeEl.textContent = typeLabel;

      if (dynamicFieldsContainer) {
        dynamicFieldsContainer.innerHTML = this.getFilterFieldsHtml(submenuId, type);
      }

      reportData = this.getReportData(submenuId, currentReportType, pageTitle);
      table.columns = reportData.columns;
      table.data = [...reportData.rows];
      table.originalData = [...reportData.rows];
      table.currentPage = 1;
      table.render(container.querySelector('#reports-table-container'));

      if (recordsMetric) recordsMetric.textContent = reportData.rows.length;
    };

    if (typeSelect) {
      typeSelect.value = currentReportType;
      typeSelect.addEventListener('change', (e) => {
        updateViewForType(e.target.value);
      });
    }

    const filterForm = container.querySelector('#rep-filter-form');
    if (filterForm) {
      filterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchInput = filterForm.querySelector('#rep-flt-search');
        const term = searchInput ? searchInput.value.trim().toLowerCase() : '';
        
        let filtered = [...reportData.rows];
        if (term) {
          filtered = filtered.filter(row => {
            return Object.values(row).some(v => 
              String(v).toLowerCase().includes(term)
            );
          });
        }
        table.setData(filtered);
        if (recordsMetric) recordsMetric.textContent = filtered.length;
        Toast.show(`Applied filters: ${filtered.length} matching record(s)`, 'info');
      });
    }

    const resetBtn = container.querySelector('#rep-btn-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (filterForm) filterForm.reset();
        table.setData(reportData.rows);
        if (recordsMetric) recordsMetric.textContent = reportData.rows.length;
        Toast.show('Filters reset', 'info');
      });
    }

    const exportBtn = container.querySelector('#rep-btn-export');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        Toast.show(`Exporting ${typeLabel} (CSV / Excel)...`, 'success');
      });
    }

    const printBtn = container.querySelector('#rep-btn-print');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
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
        if (r) this.showReportDetails(r, isSales ? this.getReportTypeLabel(submenuId, currentReportType, pageTitle) : pageTitle);
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

  // Full Human-Readable Label Mapping for Sales & Export Analytics
  getReportTypeLabel(submenuId, reportType, pageTitle) {
    const labels = {
      // Sales & Export Analytics (20 Types)
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
      'freight-rates': 'Freight Rates Report'
    };
    return labels[reportType] || pageTitle || 'Analytical Report';
  },

  // Generates Exact Select Options HTML for Sales & Export Analytics
  getReportTypeOptions(submenuId) {
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
  },

  // Dynamic Contextual Filter Fields Generator per Submenu
  getFilterFieldsHtml(submenuId, type) {
    // ----------------------------------------------------
    // 1. Sales & Export Analytics (Dynamic per Type)
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
        <div>
          <label for="flt-supplier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Farmer / Supplier</label>
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
          <label for="flt-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RM Species / Grade</label>
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
        <div>
          <label for="rep-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">To Date</label>
          <input type="date" id="rep-flt-to" value="2026-10-30" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
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

    ModalComponent.open({
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

  // Generate Tab-Specific Columns & Realistic Datasets
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
    // 1. Sales & Export Analytics (20 Dynamic Types)
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
    // 2. Purchase Reports
    // ==========================================
    else if (submenuId === 'purchase-reports' || submenuId.includes('purchase')) {
      columns = [
        { field: 'sNo', header: 'S No.', render: (v, r, idx) => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${String(idx + 1).padStart(2, '0')}</span>` },
        { field: 'poNo', header: 'Purchase Ref / Lot', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer" title="Click to view details">${v}</span>` },
        { field: 'date', header: 'Arrival Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">${v}</span>` },
        { field: 'supplier', header: 'Farmer / Supplier', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'center', header: 'Purchase Center', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F1F5F9] text-[#172B4D]">${v}</span>` },
        { field: 'variety', header: 'RM Variety', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] font-medium">${v}</span>` },
        { field: 'count', header: 'Count / Grade', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7]">${v}</span>` },
        { field: 'grossWt', header: 'Arrival Wt (Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D] font-bold">${Number(v).toLocaleString()}</span>` },
        { field: 'rate', header: 'Purchase Rate (₹/Kg)', sortable: true, render: v => `<span class="font-mono text-xs text-[#172B4D]">₹${Number(v).toFixed(2)}</span>` },
        { field: 'grossVal', header: 'Total Value (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>` },
        { field: 'status', header: 'Lot Status', sortable: true, render: v => `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]"><span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${v}</span>` },
        actionCol
      ];
      rows = [
        { id: 1, poNo: 'PUR-DFL-2026-1041', date: '2026-10-28', supplier: 'Sri Venkata Krishna Aquatics', center: 'Bhimavaram Center', variety: 'Vannamei Fresh', count: '30 Count', grossWt: 8450, rate: 385.00, grossVal: 3253250, status: 'Weighed & Certified' },
        { id: 2, poNo: 'PUR-DFL-2026-1042', date: '2026-10-28', supplier: 'Godavari Aqua Harvests', center: 'Machilipatnam Center', variety: 'Vannamei Fresh', count: '40 Count', grossWt: 6200, rate: 340.00, grossVal: 2108000, status: 'Weighed & Certified' },
        { id: 3, poNo: 'PUR-DFL-2026-1043', date: '2026-10-27', supplier: 'Kishna Coastal Prawns', center: 'Narsapur Center', variety: 'Black Tiger', count: '16/20 Count', grossWt: 4100, rate: 580.00, grossVal: 2378000, status: 'Weighed & Certified' },
        { id: 4, poNo: 'PUR-DFL-2026-1044', date: '2026-10-27', supplier: 'Delta Prime Hatcheries & Farms', center: 'Bapatla Center', variety: 'Vannamei Fresh', count: '25 Count', grossWt: 9800, rate: 415.00, grossVal: 4067000, status: 'Weighed & Certified' }
      ];
    }

    // ==========================================
    // 3. Pre-Processing Reports
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
    // 4. Quality Control Reports
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
    // 5. Production Analytics
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
    // 6. Coldstore Analytics
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
