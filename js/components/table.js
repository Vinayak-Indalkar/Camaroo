// Reusable Enterprise Data Table Component with Collapsible User-Friendly Top Filter Bar

import { Toast } from './toast.js';
import { Modal } from './modal.js';

export class DataTable {
  constructor({
    containerId,
    container,
    columns,
    data,
    keyField = 'id',
    pageSize = 10,
    searchable = true,
    filterable = true,
    selectable = false,
    showSelectedCount = false,
    actions = [],
    actionsTitle = 'Actions',
    bulkActions = [],
    exportable = true,
    showCopy = false,
    tableTitle = '',
    topFilterTitle = '',
    hideTopFilterBar = true,
    minWidth = null,
    disableRowClick = false,
    onRowClick = null,
    onDataChange = null,
    toolbarButtons = [],
    hideToolbar = false
  }) {
    const target = containerId || container;
    this.container = typeof target === 'string' ? document.getElementById(target) : target;
    this.columns = (columns || []).map(c => ({
      ...c,
      field: c.field || c.key || c.id || '',
      header: c.header || c.label || c.title || c.field || c.key || ''
    }));
    this.originalData = [...data];
    this.filteredData = [...data];
    this.keyField = keyField;
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.searchable = searchable;
    this.filterable = filterable;
    this.selectable = Boolean(selectable);
    this.showSelectedCount = Boolean(showSelectedCount);
    this.disableRowClick = Boolean(disableRowClick);
    // Global safeguard: Never add a view eye icon in actions column anywhere in the application
    this.actions = (actions || []).filter(act => {
      const label = String(act.label || '').toLowerCase().trim();
      const iconStr = typeof act.icon === 'string' ? act.icon : '';
      const isEyeIcon = iconStr.includes('M15 12a3 3 0 11-6 0') || iconStr.includes('M2.458 12C3.732 7.943');
      if (isEyeIcon && (label === 'view' || label === 'view details' || label.startsWith('view '))) {
        return false;
      }
      return true;
    });
    this.actionsTitle = actionsTitle;
    this.bulkActions = bulkActions;
    this.toolbarButtons = toolbarButtons || [];
    this.hideToolbar = hideToolbar;
    this.exportable = exportable;
    this.showCopy = showCopy;
    const derivedTitle = typeof containerId === 'string' ? containerId.replace(/^[a-z0-9]+-/, '').replace(/-table$/, '').split('-').filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') : '';
    const rawTitle = tableTitle || derivedTitle;
    this.tableTitle = rawTitle ? rawTitle.replace(/\s*\(\d+\)\s*$/, '').trim() : '';
    this.topFilterTitle = topFilterTitle || this.tableTitle || 'DATA EXPLORER & RECORDS';
    this.hideTopFilterBar = hideTopFilterBar;
    this.isFilterCollapsed = false;
    this.minWidth = minWidth;
    this.onRowClick = onRowClick;
    
    this.searchTerm = '';
    this.activeFilters = {};
    this.topFilters = {
      center: 'ALL',
      supplier: 'ALL',
      plant: 'ALL',
      date: ''
    };
    this.onDataChange = onDataChange;
    this.sortColumn = null;
    this.sortDirection = 'asc';
    this.selectedKeys = new Set();
    this.hiddenColumns = new Set();
    this.colWidths = {};

    this.render();
  }

  isActionColumn(col) {
    if (!col) return false;
    const f = String(col.field || '').toLowerCase().trim();
    const h = String(col.header || '').toLowerCase().trim();
    return f === 'actions' || f === 'action' || f === '__actions__' || h === 'actions' || h === 'action' || col.sticky === 'right' || Boolean(col.isAction);
  }

  getVisibleColumns() {
    const cols = this.columns.filter(c => !this.hiddenColumns.has(c.field));
    const nonActionCols = cols.filter(c => !this.isActionColumn(c));
    const actionCols = cols.filter(c => this.isActionColumn(c));
    return [...nonActionCols, ...actionCols];
  }

  showRowDetails(row) {
    if (!row) return;

    // Helper: Format field labels
    const formatLabel = (key) => {
      return String(key || '')
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
      const lk = String(key || '').toLowerCase();
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
    const recordId = row.billNo || row.orderNo || row.docNo || row.lotNo || row.refNo || row.batchNo || row.trackId || row.trackCode || row.qcNo || row.rackNo || row.reqNo || row.code || row.name || 'Record Details';
    
    // Extract Facility, Date & Partner
    const plant = row.arrivalPlant || row.productionPlant || row.plant || row.facility || row.coldStore || row.store || row.location || 'Central Facility';
    const date = row.billDate || row.arrivalDate || row.date || row.harvestDate || row.shiftDate || row.soakingDate || row.freezingDate || row.createdAt || 'Current Period';
    const partner = row.supplier || row.supplierName || row.buyer || row.customer || row.centerName || row.center || '';

    // Status & Tags
    const status = String(row.status || 'Active Record').toUpperCase();
    const categoryTag = row.variety || row.species || row.type || row.productType || row.category || this.tableTitle || '';

    // Extract Quick Metrics (Priority keys for top card)
    const priorityMetricKeys = ['finalamount', 'amount', 'finalquantity', 'weight', 'balanceweight', 'rate', 'pickup', 'stock', 'balance', 'inqty', 'outtemp'];
    const metricCandidates = [];

    // Map visible columns first for proper headers
    const colMap = {};
    (this.columns || []).forEach(col => {
      if (col.field && !col.isAction && col.field !== 'actions') {
        colMap[col.field] = col.header || formatLabel(col.field);
      }
    });

    Object.entries(row).forEach(([k, v]) => {
      if (k === 'id' || k.startsWith('__')) return;
      const lk = k.toLowerCase();
      if (typeof v === 'number' || (!isNaN(Number(v)) && String(v).trim() !== '')) {
        const pIdx = priorityMetricKeys.findIndex(pk => lk.includes(pk));
        if (pIdx !== -1) {
          metricCandidates.push({
            pIdx,
            label: (colMap[k] || formatLabel(k)).toUpperCase(),
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

    const fieldSource = Object.keys(colMap).length > 0 
      ? Object.keys(colMap).map(k => [k, row[k]]) 
      : Object.entries(row);

    fieldSource.forEach(([k, v]) => {
      if (k === 'id' || k.startsWith('__')) return;
      const lk = k.toLowerCase();
      const item = { key: k, label: colMap[k] || formatLabel(k), val: formatValue(k, v) };

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
      title: `${this.tableTitle || 'Record'} Details: ${recordId}`,
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
              <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
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
          label: 'Download Record',
          type: 'primary',
          onClick: (modal) => {
            modal.close();
            Toast.show(`Downloading document for ${recordId}...`, 'success');
          }
        }
      ]
    });
  }

  openRowDetails(row) {
    if (!row) return;
    if (typeof this.onRowClick === 'function') {
      try {
        this.onRowClick(row, this);
        return;
      } catch (error) {
        console.warn('Custom row details failed; showing standard record details.', error);
      }
    }
    if (!document.querySelector('#erp-modal-root, #erp-drawer-root, [id^="modal-"].fixed, [role="dialog"]')) {
      this.showRowDetails(row);
    }
  }

  setData(newData) {
    this.originalData = [...newData];
    this.applyFilters();
  }

  applyFilters() {
    let result = [...this.originalData];

    // Global Search
    if (this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(item => {
        return Object.values(item).some(val => {
          if (val === null || val === undefined) return false;
          return String(val).toLowerCase().includes(term);
        });
      });
    }

    // Top Filter Bar Center / Supplier / Plant / Date
    if (this.topFilters) {
      if (this.topFilters.center && this.topFilters.center !== 'ALL') {
        const ct = this.topFilters.center.toLowerCase();
        result = result.filter(item => {
          const itemCenter = String(item.center || item.centerName || item.station || item.bookingStation || item.pond || '').toLowerCase();
          return itemCenter.includes(ct);
        });
      }
      if (this.topFilters.supplier && this.topFilters.supplier !== 'ALL') {
        const sup = this.topFilters.supplier.toLowerCase();
        result = result.filter(item => {
          const itemSup = String(item.supplier || item.supplierName || item.farmerName || '').toLowerCase();
          return itemSup.includes(sup);
        });
      }
      if (this.topFilters.plant && this.topFilters.plant !== 'ALL') {
        const pl = this.topFilters.plant.toLowerCase();
        result = result.filter(item => {
          const itemPlant = String(item.plant || item.arrivalPlant || item.currentLocation || '').toLowerCase();
          return itemPlant.includes(pl);
        });
      }
      if (this.topFilters.date && this.topFilters.date.trim() !== '') {
        const dt = this.topFilters.date.trim().toLowerCase();
        let dtAlt = '';
        if (/^\d{4}-\d{2}-\d{2}$/.test(dt)) {
          const [y, m, d] = dt.split('-');
          dtAlt = `${d}/${m}/${y}`;
        } else if (/^\d{2}\/\d{2}\/\d{4}$/.test(dt)) {
          const [d, m, y] = dt.split('/');
          dtAlt = `${y}-${m}-${d}`;
        }
        result = result.filter(item => {
          const itemDate = String(item.date || item.arrivalDate || item.bookingDate || '').toLowerCase();
          return itemDate.includes(dt) || (dtAlt && itemDate.includes(dtAlt));
        });
      }
    }

    // Column / Custom Filters
    Object.keys(this.activeFilters).forEach(key => {
      const filterVal = this.activeFilters[key];
      if (filterVal && filterVal !== 'ALL') {
        result = result.filter(item => String(item[key]) === String(filterVal));
      }
    });

    // Sorting
    if (this.sortColumn) {
      const col = this.sortColumn;
      const dir = this.sortDirection === 'asc' ? 1 : -1;
      result.sort((a, b) => {
        let valA = a[col];
        let valB = b[col];
        if (typeof valA === 'number' && typeof valB === 'number') {
          return (valA - valB) * dir;
        }
        return String(valA || '').localeCompare(String(valB || '')) * dir;
      });
    }

    this.filteredData = result;
    this.currentPage = 1;
    this.renderTableBody();
    this.renderPagination();
    if (typeof this.onDataChange === 'function') {
      this.onDataChange(this.filteredData);
    }
  }

  render() {
    if (!this.container) return;

    const dateStr = new Date().toLocaleDateString('en-GB');

    let topFilterHTML = '';
    if (!this.hideTopFilterBar) {
      topFilterHTML = `
        <!-- Collapsible Top Filter Header Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                class="dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset all filters" 
                aria-label="Reset all filters"
              >
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>

              <button 
                type="button" 
                class="dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid -->
          <div class="dt-top-filter-body mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200" style="margin-top: 12px !important;">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT CENTER</label>
              <select class="dt-top-center-select w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Centers (Select)</option>
                <option value="Bhimavaram Center #1">Bhimavaram Center #1</option>
                <option value="Kakinada Sea Intake #2">Kakinada Sea Intake #2</option>
                <option value="Machilipatnam Delta #3">Machilipatnam Delta #3</option>
                <option value="Amalapuram Harvesters #4">Amalapuram Harvesters #4</option>
                <option value="Ongole Coastal Hub #1">Ongole Coastal Hub #1</option>
                <option value="Visakhapatnam Gate Dock">Visakhapatnam Gate Dock</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT SUPPLIER</label>
              <select class="dt-top-supplier-select w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Suppliers (Select)</option>
                <option value="Godavari Coastal Aqua Farms">Godavari Coastal Aqua Farms</option>
                <option value="Sagar Marine Hatcheries">Sagar Marine Hatcheries</option>
                <option value="Krishna Delta Prawn Harvesters">Krishna Delta Prawn Harvesters</option>
                <option value="Konaseema Marine Harvesters Syndicate">Konaseema Marine Harvesters</option>
                <option value="Nellore Brackish Aqua Cultivators">Nellore Brackish Aqua Cultivators</option>
                <option value="Sri Sai Aqua Farms">Sri Sai Aqua Farms</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT ARRIVAL PLANT</label>
              <select class="dt-top-plant-select w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Arrival Plants (Select)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" value="2026-10-06" class="dt-top-date-input erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
              </div>
            </div>

            <div class="flex items-end">
              <button type="button" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    this.container.innerHTML = `
      <div class="flex flex-col">
        ${topFilterHTML}

        <!-- Table Card Container -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] shadow-xs flex flex-col overflow-hidden">
          ${!this.hideToolbar ? `<!-- Table Control Toolbar (Column visibility, Download, Copy, Search) -->
          <div class="px-4 py-2.5 border-b border-[#DFE1E6] bg-[#FAFBFC] flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5 flex-wrap">
              ${this.tableTitle ? `<h2 class="text-sm font-bold text-[#172B4D] uppercase tracking-wide">${(this.tableTitle || '').replace(/\s*\(\d+\)\s*$/, '').trim()} (${this.filteredData.length})</h2>` : ''}
              
              <div id="dt-filter-container" class="flex items-center gap-2"></div>
            </div>

            <div class="flex items-center gap-2 flex-wrap">
              ${this.renderToolbarButtonsHtml()}
              <!-- Unified Download Button with Dropdown (Excel, CSV, PDF) -->
              <div class="relative">
                <button type="button" id="dt-download-btn" class="btn-secondary px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 hover:bg-[#EBECF0] transition-colors cursor-pointer shadow-2xs border border-[#DFE1E6]" title="Download Table Data">
                  <svg class="w-3.5 h-3.5 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  <span>Download</span>
                  <svg id="dt-download-chevron" class="w-3 h-3 text-[#5E6C84] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>

                <div id="dt-download-dropdown" class="hidden absolute right-0 mt-1.5 w-36 bg-white rounded-lg shadow-xl border border-[#DFE1E6] py-1 z-50 text-xs select-none">
                  <button type="button" id="dt-opt-excel" class="w-full text-left px-3 py-2 hover:bg-[#F4F5F7] flex items-center gap-2.5 text-[#172B4D] transition-colors cursor-pointer rounded-none" style="border-radius: 0 !important; justify-content: flex-start !important;">
                    <svg class="w-4 h-4 text-[#107C41] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    <span class="font-semibold text-xs text-[#172B4D]">Excel</span>
                  </button>
                  <button type="button" id="dt-opt-csv" class="w-full text-left px-3 py-2 hover:bg-[#F4F5F7] flex items-center gap-2.5 text-[#172B4D] transition-colors cursor-pointer border-t border-[#EBECF0] rounded-none" style="border-radius: 0 !important; justify-content: flex-start !important;">
                    <svg class="w-4 h-4 text-[#00A4B7] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    <span class="font-semibold text-xs text-[#172B4D]">CSV</span>
                  </button>
                  <button type="button" id="dt-opt-pdf" class="w-full text-left px-3 py-2 hover:bg-[#F4F5F7] flex items-center gap-2.5 text-[#172B4D] transition-colors cursor-pointer border-t border-[#EBECF0] rounded-none" style="border-radius: 0 !important; justify-content: flex-start !important;">
                    <svg class="w-4 h-4 text-[#D32F2F] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    <span class="font-semibold text-xs text-[#172B4D]">PDF</span>
                  </button>
                </div>
              </div>

              <!-- Column Section / Visibility Dropdown -->
              <div class="relative">
                <button type="button" id="dt-columns-btn" class="btn-secondary px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 hover:bg-[#EBECF0] transition-colors cursor-pointer shadow-2xs border border-[#DFE1E6]" title="Customize Visible Columns">
                  <svg class="w-3.5 h-3.5 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <span>Column visibility</span>
                </button>

                <div id="dt-columns-dropdown" class="hidden absolute right-0 mt-1.5 w-60 bg-white rounded-lg shadow-2xl border border-[#DFE1E6] py-2 z-50 text-xs select-none">
                  <div class="px-3 py-1.5 font-bold text-[#172B4D] border-b border-[#EBECF0] flex justify-between items-center">
                    <span>Select Visible Columns</span>
                    
                  </div>
                  <div class="px-2 py-1.5 max-h-64 overflow-y-auto space-y-1">
                    ${this.columns.map(col => `
                      <label class="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#F4F5F7] cursor-pointer text-[#172B4D] transition-colors">
                        <input 
                          type="checkbox" 
                          class="dt-col-toggle-checkbox rounded border-[#DFE1E6] text-[#0284C7] focus:ring-0 cursor-pointer" 
                          data-field="${col.field}" 
                          ${!this.hiddenColumns.has(col.field) ? 'checked' : ''} 
                        />
                        <span class="truncate font-medium">${col.header}</span>
                      </label>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>` : ''}

          <!-- Selected Rows Bulk Bar -->
          <div id="dt-bulk-bar" class="hidden px-4 py-2 bg-[#F0F9FF] border-b border-[#BAE6FD] items-center justify-between text-xs text-[#00A4B7]">
            <span id="dt-selected-count" class="hidden" style="display: none !important;"></span>
            <div id="dt-bulk-actions" class="flex items-center gap-2"></div>
          </div>

          <!-- Table Container -->
          <div class="dt-table-scroll">
            <table class="erp-table" ${this.minWidth ? `style="min-width: ${this.minWidth} !important;"` : ''}>
              <thead>
                <tr id="dt-thead-row"></tr>
              </thead>
              <tbody id="dt-tbody"></tbody>
            </table>
          </div>

          <!-- Pagination Toolbar -->
          <div class="p-3 border-t border-[#DFE1E6] bg-[#FAFBFC] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5E6C84]" id="dt-pagination-container">
          </div>
        </div>
      </div>
    `;

    this.renderHeader();
    this.renderTableBody();
    this.renderPagination();
    this.bindEvents();
  }

  renderToolbarButtonsHtml() {
    if (!this.toolbarButtons || this.toolbarButtons.length === 0) return '';
    return this.toolbarButtons.map((btn, idx) => {
      const btnId = btn.id || `dt-custom-tb-btn-${idx}`;
      const isReqSel = btn.requiresSelection !== false;
      const initialDisabled = isReqSel && (!this.selectedKeys || this.selectedKeys.size === 0);
      const disabledAttrs = initialDisabled ? 'disabled aria-disabled="true"' : '';
      const disabledClasses = initialDisabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : '';
      const styleClass = btn.className || (btn.variant === 'primary' ? 'btn-primary' : 'btn-secondary');

      return `
        <button type="button" id="${btnId}" data-tb-btn-idx="${idx}" class="${styleClass} px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer ${disabledClasses}" title="${btn.title || btn.label || ''}" ${disabledAttrs}>
          ${btn.icon || ''}
          <span>${btn.label || ''}</span>
        </button>
      `;
    }).join('');
  }

  renderHeader() {
    const theadRow = this.container.querySelector('#dt-thead-row');
    if (!theadRow) return;

    if (!this.colWidths) this.colWidths = {};

    const visibleCols = this.getVisibleColumns();
    let html = '';
    if (this.selectable) {
      const selW = this.colWidths['__select__'] ? `style="width: ${this.colWidths['__select__']}px; min-width: ${this.colWidths['__select__']}px;"` : '';
      html += `
        <th class="w-10 text-center select-none sticky top-0 z-20" data-field="__select__" ${selW}>
          <input type="checkbox" id="dt-select-all-checkbox" class="rounded border-[#DFE1E6] text-[#0284C7] focus:ring-0 cursor-pointer" />
          <div class="dt-col-resizer" title="Drag to resize column (Double-click to reset)"></div>
        </th>
      `;
    }

    visibleCols.forEach(col => {
      const isAction = this.isActionColumn(col);
      const isSorted = this.sortColumn === col.field;
      const sortIcon = isSorted 
        ? (this.sortDirection === 'asc' ? '↑' : '↓')
        : '';
      
      const sortClass = col.sortable !== false && !isAction ? 'cursor-pointer hover:bg-[#EBECF0] transition-colors select-none' : '';
      const actionClass = isAction ? 'sticky-action-col text-center' : '';
      const customWidth = this.colWidths[col.field] 
        ? `style="width: ${this.colWidths[col.field]}px; min-width: ${this.colWidths[col.field]}px; max-width: ${this.colWidths[col.field]}px; ${isAction ? 'position: sticky !important; right: 0 !important; z-index: 20 !important;' : ''}"` 
        : (isAction ? 'style="min-width: 120px; position: sticky !important; right: 0 !important; z-index: 20 !important;"' : '');

      html += `
        <th data-field="${col.field}" class="${sortClass} ${actionClass} sticky top-0 z-20" ${customWidth}>
          <div class="flex items-center gap-1.5 pr-2 ${isAction ? 'justify-center w-full' : ''}">
            <span>${col.header}</span>
            ${sortIcon ? `<span class="text-xs text-[#0284C7] font-bold">${sortIcon}</span>` : ''}
          </div>
          <div class="dt-col-resizer" title="Drag to resize column (Double-click to reset)"></div>
        </th>
      `;
    });

    if (this.actions.length > 0) {
      const actionsW = this.colWidths['__actions__'] ? `style="width: ${this.colWidths['__actions__']}px; min-width: ${this.colWidths['__actions__']}px; overflow: visible !important;"` : 'style="min-width: 130px; overflow: visible !important;"';
      html += `
        <th class="text-center sticky-action-col sticky top-0 z-30" data-field="__actions__" ${actionsW}>
          <div class="text-center w-full">${this.actionsTitle || 'Actions'}</div>
          <div class="dt-col-resizer" title="Drag to resize column (Double-click to reset)"></div>
        </th>
      `;
    }

    theadRow.innerHTML = html;
    this.initColumnResizing();
  }

  initColumnResizing() {
    const table = this.container.querySelector('table');
    const theadRow = this.container.querySelector('#dt-thead-row');
    if (!table || !theadRow) return;

    const resizers = theadRow.querySelectorAll('.dt-col-resizer');
    resizers.forEach(resizer => {
      resizer.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const th = resizer.closest('th');
        if (!th) return;

        const field = th.dataset.field;
        const startX = e.pageX;
        const startWidth = th.offsetWidth;

        table.style.tableLayout = 'fixed';
        table.classList.add('is-resizing');

        const allThs = theadRow.querySelectorAll('th');
        allThs.forEach(otherTh => {
          if (!otherTh.style.width) {
            const w = otherTh.offsetWidth;
            otherTh.style.width = w + 'px';
            otherTh.style.minWidth = w + 'px';
          }
        });

        resizer.classList.add('is-resizing');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';

        const onMouseMove = (moveEvent) => {
          moveEvent.preventDefault();
          const diff = moveEvent.pageX - startX;
          const newWidth = Math.max(45, Math.round(startWidth + diff));
          th.style.width = newWidth + 'px';
          th.style.minWidth = newWidth + 'px';
          th.style.maxWidth = newWidth + 'px';
          if (field) {
            if (!this.colWidths) this.colWidths = {};
            this.colWidths[field] = newWidth;
          }
        };

        const onMouseUp = () => {
          resizer.classList.remove('is-resizing');
          table.classList.remove('is-resizing');
          document.body.style.cursor = '';
          document.body.style.userSelect = '';
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });

      resizer.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
      });

      resizer.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const th = resizer.closest('th');
        if (!th) return;
        const field = th.dataset.field;
        th.style.width = '';
        th.style.minWidth = '';
        th.style.maxWidth = '';
        if (field && this.colWidths) delete this.colWidths[field];
      });
    });
  }

  renderTableBody() {
    const tbody = this.container.querySelector('#dt-tbody');
    if (!tbody) return;

    const visibleCols = this.getVisibleColumns();

    if (this.filteredData.length === 0) {
      const colSpan = visibleCols.length + (this.selectable ? 1 : 0) + (this.actions.length > 0 ? 1 : 0);
      const isCompletelyEmpty = this.originalData.length === 0;
      tbody.innerHTML = `
        <tr>
          <td colspan="${colSpan}" class="text-center py-16 text-[#6B778C]">
            <div class="flex flex-col items-center justify-center gap-2.5">
              <div class="w-12 h-12 rounded-full bg-[#F4F5F7] border border-[#DFE1E6] flex items-center justify-center">
                <svg class="w-6 h-6 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>
              </div>
              <span class="font-bold text-sm text-[#334155]">${isCompletelyEmpty ? 'No Data Available' : 'No matching records found'}</span>
              <span class="text-xs text-[#64748B]">${isCompletelyEmpty ? 'No records have been registered in this table yet.' : 'Try adjusting your search criteria or active filters'}</span>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    const startIdx = (this.currentPage - 1) * this.pageSize;
    const endIdx = startIdx + this.pageSize;
    const pageItems = this.filteredData.slice(startIdx, endIdx);

    let rowsHtml = '';
    pageItems.forEach((row, idx) => {
      const keyVal = row[this.keyField] || `row-${idx}`;
      const isSelected = this.selectedKeys.has(keyVal);

      const rowCursorClass = this.disableRowClick ? 'cursor-default' : 'cursor-pointer hover:bg-[#FAFBFC]';
      const rowAria = this.disableRowClick ? '' : 'tabindex="0" aria-label="View record details"';
      rowsHtml += `<tr data-key="${keyVal}" data-row-index="${startIdx + idx}" ${rowAria} class="${isSelected ? 'bg-[#F4F5F7]' : ''} ${rowCursorClass}">`;

      if (this.selectable) {
        rowsHtml += `
          <td class="text-center">
            <input type="checkbox" data-key="${keyVal}" class="dt-row-checkbox rounded border-[#DFE1E6] text-[#0284C7] focus:ring-0 cursor-pointer" ${isSelected ? 'checked' : ''} />
          </td>
        `;
      }

      visibleCols.forEach(col => {
        const isAction = this.isActionColumn(col);
        let cellVal = row[col.field];
        let content = cellVal !== undefined && cellVal !== null ? cellVal : '-';

        if (col.render) {
          content = col.render(cellVal, row, startIdx + idx);
        } else if (col.type === 'status' || col.field.toLowerCase().includes('status')) {
          content = this.renderStatusLozenge(cellVal);
        }

        let rawPlainText = '';
        if (content !== undefined && content !== null) {
          rawPlainText = String(content)
            .replace(/<[^>]*>/g, ' ')
            .replace(/&nbsp;/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        }
        if (!rawPlainText && cellVal !== undefined && cellVal !== null) {
          rawPlainText = String(cellVal).trim();
        }

        if (isAction) {
          const actionStyle = 'min-width: 120px; position: sticky !important; right: 0 !important; z-index: 10 !important; text-align: center !important; overflow: visible !important;';
          rowsHtml += `<td class="text-center whitespace-nowrap sticky-action-col" style="${actionStyle}" data-field="${col.field}">${content}</td>`;
        } else {
          rowsHtml += `<td title="${rawPlainText.replace(/"/g, '&quot;')}" class="truncate" data-field="${col.field}">${content}</td>`;
        }
      });

      if (this.actions.length > 0) {
        rowsHtml += `<td class="text-center whitespace-nowrap sticky-action-col" style="min-width: 130px; text-align: center !important; overflow: visible !important;">`;
        rowsHtml += `<div class="inline-flex items-center justify-center w-full" style="gap: 8px; display: inline-flex;">`;
        this.actions.forEach((act, actIdx) => {
          const actLabel = typeof act.label === 'function' ? act.label(row) : (act.label || '');
          let actIcon = typeof act.icon === 'function' ? act.icon(row) : (act.icon || actLabel);
          const isDisabled = typeof act.disabled === 'function' ? act.disabled(row) : Boolean(act.disabled);
          const tooltip = isDisabled
            ? (typeof act.disabledTooltip === 'function' ? act.disabledTooltip(row) : (act.disabledTooltip || (actLabel ? `${actLabel} (Disabled)` : 'Disabled')))
            : actLabel;

          if (typeof actIcon === 'string') {
            actIcon = actIcon
              .replace(/text-\[[^\]]+\]/g, 'text-current')
              .replace(/text-(?:green|blue|red|amber|orange|purple|indigo|slate|gray)-\d+/g, 'text-current');
          }

          if (isDisabled) {
            rowsHtml += `
              <button 
                type="button"
                data-action-idx="${actIdx}" 
                data-key="${keyVal}" 
                disabled="disabled"
                aria-disabled="true"
                class="dt-action-btn dt-action-btn-disabled" 
                title="${tooltip.replace(/"/g, '&quot;')}" 
                aria-label="${tooltip.replace(/"/g, '&quot;')}"
              >
                ${actIcon}
              </button>
            `;
          } else {
            let actionClass = 'dt-action-btn';
            if (actLabel.toLowerCase().includes('edit')) {
              actionClass += ' dt-edit-action';
            } else if (actLabel.toLowerCase().includes('delete') || actLabel.toLowerCase().includes('remove')) {
              actionClass += ' dt-delete-action';
            } else if (actLabel.toLowerCase().includes('download')) {
              actionClass += ' dt-download-action';
            }
            
            rowsHtml += `
              <button 
                type="button"
                data-action-idx="${actIdx}" 
                data-key="${keyVal}" 
                class="${actionClass}"
                title="${tooltip.replace(/"/g, '&quot;')}" 
                aria-label="${tooltip.replace(/"/g, '&quot;')}"
              >
                ${actIcon}
              </button>
            `;
          }
        });
        rowsHtml += `</div></td>`;
      }

      rowsHtml += `</tr>`;
    });

    tbody.innerHTML = rowsHtml;
    this.bindRowEvents();
  }

  renderStatusLozenge(status) {
    if (!status) return '-';
    const s = String(status).toUpperCase();
    let cls = 'lozenge-default';

    if (s.includes('INACTIVE') || s.includes('REJECT') || s.includes('FAIL') || s.includes('CANCEL') || s.includes('BLOCK') || s.includes('SUSPENDED') || s.includes('DEACTIVATED')) {
      cls = 'lozenge-danger';
    } else if (s.includes('PASS') || s.includes('ACTIVE') || s.includes('CLEARED') || s.includes('COMPLETED') || s.includes('OPTIMAL') || s.includes('ISSUED') || s.includes('PAID') || s.includes('FULFILLED') || s.includes('CONFIRMED')) {
      cls = 'lozenge-success';
    } else if (s.includes('PEND') || s.includes('TEST') || s.includes('IN_PROGRESS') || s.includes('STAGE') || s.includes('PARTIAL') || s.includes('PROCESSING') || s.includes('POSTED')) {
      cls = 'lozenge-inprogress';
    } else if (s.includes('HOLD') || s.includes('WARN') || s.includes('PROVISION')) {
      cls = 'lozenge-warning';
    }

    return `<span class="lozenge ${cls}">${status.replace(/_/g, ' ')}</span>`;
  }

  renderPagination() {
    const pagContainer = this.container.querySelector('#dt-pagination-container');
    if (!pagContainer) return;

    const totalPages = Math.max(1, Math.ceil(this.filteredData.length / this.pageSize));
    if (this.currentPage > totalPages) {
      this.currentPage = totalPages;
    }
    const startRecord = this.filteredData.length > 0 ? (this.currentPage - 1) * this.pageSize + 1 : 0;
    const endRecord = Math.min(this.currentPage * this.pageSize, this.filteredData.length);

    // Calculate visible page buttons (window around current page)
    const pageWindow = 5;
    let startPage = Math.max(1, this.currentPage - 2);
    let endPage = Math.min(totalPages, startPage + pageWindow - 1);
    if (endPage - startPage + 1 < pageWindow) {
      startPage = Math.max(1, endPage - pageWindow + 1);
    }

    let pagesHtml = '';
    for (let p = startPage; p <= endPage; p++) {
      const isActive = p === this.currentPage;
      pagesHtml += `
        <button type="button" class="dt-page-btn ${isActive ? 'active' : ''}" data-page="${p}" aria-label="Page ${p}" ${isActive ? 'aria-current="page"' : ''}>
          ${p}
        </button>
      `;
    }

    pagContainer.innerHTML = `
      <div class="flex flex-wrap items-center gap-1.5 text-xs text-[#5E6C84]">
        Showing <span class="font-semibold text-[#172B4D]">${startRecord}</span> to <span class="font-semibold text-[#172B4D]">${endRecord}</span> of <span class="font-semibold text-[#172B4D]">${this.filteredData.length}</span> entries
      </div>
      <div class="flex items-center flex-wrap gap-2.5 min-w-0 max-w-full">
        <!-- Rows per page selector -->
        <div class="flex items-center gap-2 text-xs font-medium text-[#64748B]">
          <span>Rows:</span>
          <select class="dt-rows-per-page text-xs font-medium text-[#1E293B] bg-white border border-[#CBD5E1] rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-[#0284C7] cursor-pointer shadow-2xs hover:border-[#94A3B8]">
            <option value="5" ${this.pageSize === 5 ? 'selected' : ''}>5 per page</option>
            <option value="10" ${this.pageSize === 10 ? 'selected' : ''}>10 per page</option>
            <option value="25" ${this.pageSize === 25 ? 'selected' : ''}>25 per page</option>
            <option value="50" ${this.pageSize === 50 ? 'selected' : ''}>50 per page</option>
            <option value="100" ${this.pageSize === 100 ? 'selected' : ''}>100 per page</option>
          </select>
        </div>

        <!-- Page navigation buttons -->
        <div class="flex flex-wrap items-center gap-1.5 max-w-full">
          <!-- Previous page button -->
          <button type="button" id="dt-page-prev" class="dt-page-btn" title="Previous page" aria-label="Previous page" ${this.currentPage === 1 ? 'disabled' : ''}>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          </button>

          <!-- Numbered page buttons -->
          ${pagesHtml}

          <!-- Next page button -->
          <button type="button" id="dt-page-next" class="dt-page-btn" title="Next page" aria-label="Next page" ${this.currentPage >= totalPages ? 'disabled' : ''}>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    `;

    // Page size dropdown change
    const rowsSelect = pagContainer.querySelector('.dt-rows-per-page');
    if (rowsSelect) {
      rowsSelect.addEventListener('change', (e) => {
        this.pageSize = parseInt(e.target.value, 10) || 10;
        this.currentPage = 1;
        this.renderTableBody();
        this.renderPagination();
      });
    }

    // Previous click
    const prevBtn = pagContainer.querySelector('#dt-page-prev');
    if (prevBtn && this.currentPage > 1) {
      prevBtn.addEventListener('click', () => {
        this.currentPage--;
        this.renderTableBody();
        this.renderPagination();
      });
    }

    // Next click
    const nextBtn = pagContainer.querySelector('#dt-page-next');
    if (nextBtn && this.currentPage < totalPages) {
      nextBtn.addEventListener('click', () => {
        this.currentPage++;
        this.renderTableBody();
        this.renderPagination();
      });
    }

    // Numbered buttons click
    pagContainer.querySelectorAll('.dt-page-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetPage = parseInt(btn.dataset.page, 10);
        if (targetPage && targetPage !== this.currentPage) {
          this.currentPage = targetPage;
          this.renderTableBody();
          this.renderPagination();
        }
      });
    });
  }

  bindEvents() {
    // Top Filter Bar Toggle Open / Close
    const toggleBtn = this.container.querySelector('.dt-top-filter-toggle-btn');
    const filterBody = this.container.querySelector('.dt-top-filter-body');
    const toggleIcon = this.container.querySelector('.dt-top-filter-toggle-icon');
    const toggleText = this.container.querySelector('.dt-top-filter-toggle-text');

    if (toggleBtn && filterBody) {
      toggleBtn.addEventListener('click', () => {
        this.isFilterCollapsed = !this.isFilterCollapsed;
        if (this.isFilterCollapsed) {
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

    // Top Filter Bar Reset Button
    const resetBtn = this.container.querySelector('.dt-top-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const centerSel = this.container.querySelector('.dt-top-center-select');
        const supplierSel = this.container.querySelector('.dt-top-supplier-select');
        const plantSel = this.container.querySelector('.dt-top-plant-select');
        const dateInput = this.container.querySelector('.dt-top-date-input');
        if (centerSel) centerSel.value = 'ALL';
        if (supplierSel) supplierSel.value = 'ALL';
        if (plantSel) plantSel.value = 'ALL';
        if (dateInput) dateInput.value = '';

        this.topFilters.center = 'ALL';
        this.topFilters.supplier = 'ALL';
        this.topFilters.plant = 'ALL';
        this.topFilters.date = '';

        this.applyFilters();
        Toast.show('Filters have been reset.', 'info');
      });
    }

    // Top Filter Bar Search Button
    const topSearchBtn = this.container.querySelector('.dt-top-filter-search-btn');
    if (topSearchBtn) {
      topSearchBtn.addEventListener('click', () => {
        const centerSel = this.container.querySelector('.dt-top-center-select');
        const supplierSel = this.container.querySelector('.dt-top-supplier-select');
        const plantSel = this.container.querySelector('.dt-top-plant-select');
        const dateInput = this.container.querySelector('.dt-top-date-input');

        this.topFilters.center = centerSel ? centerSel.value : 'ALL';
        this.topFilters.supplier = supplierSel ? supplierSel.value : 'ALL';
        this.topFilters.plant = plantSel ? plantSel.value : 'ALL';
        this.topFilters.date = (dateInput && dateInput.value) ? dateInput.value : '';

        this.applyFilters();
        Toast.show(`Filtered records: ${this.filteredData.length} entries matching search criteria.`, 'info');
      });
    }

    // In-Table Live Search
    const searchInput = this.container.querySelector('#dt-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value;
        this.applyFilters();
      });
    }

    // Select All Rows Checkbox
    const selectAllBox = this.container.querySelector('#dt-select-all-checkbox');
    if (selectAllBox) {
      selectAllBox.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        this.selectedKeys.clear();
        if (isChecked) {
          this.filteredData.forEach((row, idx) => {
            const key = row[this.keyField] || `row-${idx}`;
            this.selectedKeys.add(key);
          });
        }
        this.renderTableBody();
        this.updateBulkBar();
      });
    }

    // Columns Dropdown Toggle
    const colsBtn = this.container.querySelector('#dt-columns-btn');
    const colsDropdown = this.container.querySelector('#dt-columns-dropdown');
    if (colsBtn && colsDropdown) {
      colsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        colsDropdown.classList.toggle('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!colsDropdown.contains(e.target) && e.target !== colsBtn && !colsBtn.contains(e.target)) {
          colsDropdown.classList.add('hidden');
        }
      });
    }

    // Column Checkboxes Toggle
    const colBoxes = this.container.querySelectorAll('.dt-col-toggle-checkbox');
    colBoxes.forEach(cb => {
      cb.addEventListener('change', (e) => {
        const field = cb.dataset.field;
        if (e.target.checked) {
          this.hiddenColumns.delete(field);
        } else {
          // Keep at least 1 column visible
          if (this.getVisibleColumns().length <= 1) {
            e.target.checked = true;
            return;
          }
          this.hiddenColumns.add(field);
        }
        this.renderHeader();
        this.renderTableBody();
      });
    });

    const copyBtn = this.container.querySelector('#dt-copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => this.copyToClipboard());
    }

    // Toolbar custom buttons binding
    if (this.toolbarButtons && this.toolbarButtons.length > 0) {
      this.toolbarButtons.forEach((btn, idx) => {
        const btnId = btn.id || `dt-custom-tb-btn-${idx}`;
        const btnEl = this.container.querySelector(`#${btnId}`);
        if (btnEl) {
          btnEl.addEventListener('click', (e) => {
            e.stopPropagation();
            if (btn.requiresSelection !== false && (!this.selectedKeys || this.selectedKeys.size === 0)) {
              return;
            }
            const selectedKeysArr = Array.from(this.selectedKeys);
            const selectedRows = this.filteredData.filter(r => this.selectedKeys.has(r[this.keyField]));
            if (btn.onClick) {
              btn.onClick(selectedKeysArr, selectedRows, this);
            }
          });
        }
      });
    }

    // Download Dropdown Toggle
    const downloadBtn = this.container.querySelector('#dt-download-btn');
    const downloadDropdown = this.container.querySelector('#dt-download-dropdown');
    if (downloadBtn && downloadDropdown) {
      downloadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        downloadDropdown.classList.toggle('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!downloadDropdown.contains(e.target) && e.target !== downloadBtn && !downloadBtn.contains(e.target)) {
          downloadDropdown.classList.add('hidden');
        }
      });
    }

    const optExcel = this.container.querySelector('#dt-opt-excel');
    if (optExcel) {
      optExcel.addEventListener('click', () => {
        if (downloadDropdown) downloadDropdown.classList.add('hidden');
        this.exportToExcel();
      });
    }

    const optCsv = this.container.querySelector('#dt-opt-csv');
    if (optCsv) {
      optCsv.addEventListener('click', () => {
        if (downloadDropdown) downloadDropdown.classList.add('hidden');
        this.exportToCSV();
      });
    }

    const optPdf = this.container.querySelector('#dt-opt-pdf');
    if (optPdf) {
      optPdf.addEventListener('click', () => {
        if (downloadDropdown) downloadDropdown.classList.add('hidden');
        this.exportToPDF();
      });
    }

    // Delegated Sort Click Header
    const theadRow = this.container.querySelector('#dt-thead-row');
    if (theadRow) {
      theadRow.addEventListener('click', (e) => {
        if (e.target.closest('.dt-col-resizer') || e.target.classList.contains('dt-col-resizer')) {
          e.stopPropagation();
          return;
        }
        const th = e.target.closest('th[data-field]');
        if (!th) return;
        const field = th.dataset.field;
        if (field === '__actions__' || field === '__select__') return;
        if (this.sortColumn === field) {
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortColumn = field;
          this.sortDirection = 'asc';
        }
        this.renderHeader();
        this.applyFilters();
      });
    }
  }

  bindRowEvents() {
    const rowBoxes = this.container.querySelectorAll('.dt-row-checkbox');
    rowBoxes.forEach(box => {
      box.addEventListener('change', (e) => {
        const key = box.dataset.key;
        if (e.target.checked) {
          this.selectedKeys.add(key);
        } else {
          this.selectedKeys.delete(key);
        }
        this.updateBulkBar();
      });
    });

    const actionBtns = this.container.querySelectorAll('.dt-action-btn');
    actionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (btn.disabled || btn.getAttribute('aria-disabled') === 'true' || btn.classList.contains('dt-action-btn-disabled')) {
          e.stopPropagation();
          e.preventDefault();
          return;
        }
        const actIdx = parseInt(btn.dataset.actionIdx, 10);
        if (isNaN(actIdx)) return;
        e.stopPropagation();
        const row = this.filteredData[Number(btn.closest('tr').dataset.rowIndex)];
        const action = this.actions[actIdx];
        if (action && action.onClick && row) {
          const execute = () => action.onClick(row, this);
          if (/^(delete|remove|approve|reject|activate|deactivate|enable|disable|publish)\b/i.test(action.label || '')) {
            Modal.confirm({
              title: 'Confirm Action',
              message: 'Are you sure you want to apply this action to the selected record?',
              isDestructive: /^(delete|remove|reject)\b/i.test(action.label),
              onConfirm: execute
            });
          } else {
            execute();
          }
        }
      });
    });

    if (!this.disableRowClick) {
    const rows = this.container.querySelectorAll('#dt-tbody tr[data-key]');
    rows.forEach(tr => {
      tr.addEventListener('click', event => {
        if (event.target.closest('button, a, input, select, textarea, [contenteditable]')) return;
        this.openRowDetails(this.filteredData[Number(tr.dataset.rowIndex)]);
      });
      tr.addEventListener('keydown', event => {
        if (event.target !== tr || !['Enter', ' '].includes(event.key)) return;
        event.preventDefault();
        this.openRowDetails(this.filteredData[Number(tr.dataset.rowIndex)]);
      });
    });
    }
  }

  updateBulkBar() {
    const bulkBar = this.container.querySelector('#dt-bulk-bar');
    const selectedCount = this.container.querySelector('#dt-selected-count');
    if (selectedCount) {
      if (this.showSelectedCount && this.selectedKeys.size > 0) {
        selectedCount.classList.remove('hidden');
        selectedCount.style.display = '';
        selectedCount.innerText = `${this.selectedKeys.size} items selected`;
      } else {
        selectedCount.classList.add('hidden');
        selectedCount.style.display = 'none';
      }
    }
    if (bulkBar) {
      const hasBulkActions = Boolean(this.bulkActions && this.bulkActions.length > 0);
      const shouldShow = this.selectedKeys.size > 0 && (hasBulkActions || this.showSelectedCount);
      if (shouldShow) {
        bulkBar.classList.remove('hidden');
        bulkBar.classList.add('flex');
      } else {
        bulkBar.classList.add('hidden');
        bulkBar.classList.remove('flex');
      }
    }

    // Update toolbar buttons that require row selection
    if (this.toolbarButtons && this.toolbarButtons.length > 0) {
      this.toolbarButtons.forEach((btn, idx) => {
        if (btn.requiresSelection !== false) {
          const btnId = btn.id || `dt-custom-tb-btn-${idx}`;
          const btnEl = this.container.querySelector(`#${btnId}`);
          if (btnEl) {
            const hasSel = this.selectedKeys && this.selectedKeys.size > 0;
            btnEl.disabled = !hasSel;
            if (!hasSel) {
              btnEl.classList.add('opacity-40', 'cursor-not-allowed', 'pointer-events-none');
              btnEl.setAttribute('aria-disabled', 'true');
            } else {
              btnEl.classList.remove('opacity-40', 'cursor-not-allowed', 'pointer-events-none');
              btnEl.removeAttribute('aria-disabled');
            }
          }
        }
      });
    }
  }

  copyToClipboard() {
    if (!this.filteredData || this.filteredData.length === 0) {
      Toast.show('No data available to copy.', 'warning');
      return;
    }

    const visibleCols = this.columns.filter(c => !this.hiddenColumns.has(c.field));
    const headers = visibleCols.map(c => c.header).join('\t');
    const rows = this.filteredData.map(row => {
      return visibleCols.map(c => {
        let val = row[c.field];
        if (val === undefined || val === null) val = '';
        return String(val).replace(/[\t\n\r]/g, ' ');
      }).join('\t');
    });

    const tsvContent = [headers, ...rows].join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(tsvContent).then(() => {
        Toast.show(`Copied ${this.filteredData.length} rows to clipboard.`, 'success', 'Table Data Copied');
      }).catch(() => {
        this.fallbackCopyTextToClipboard(tsvContent);
      });
    } else {
      this.fallbackCopyTextToClipboard(tsvContent);
    }
  }

  fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      Toast.show(`Copied ${this.filteredData.length} rows to clipboard.`, 'success', 'Table Data Copied');
    } catch (err) {
      Toast.show('Failed to copy table data.', 'error');
    }
    document.body.removeChild(textArea);
  }

  exportToCSV() {
    if (this.filteredData.length === 0) {
      Toast.show('No data available to download.', 'warning');
      return;
    }

    const visibleCols = this.columns.filter(c => !this.hiddenColumns.has(c.field));
    const headers = visibleCols.map(c => `"${c.header}"`).join(',');
    const rows = this.filteredData.map(row => {
      return visibleCols.map(c => {
        let val = row[c.field];
        if (val === undefined || val === null) val = '';
        return `"${String(val).replace(/"/g, '""')}"`;
      }).join(',');
    });

    // Use BOM for UTF-8 compatibility
    const csvContent = '\uFEFF' + [headers, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${(this.tableTitle || 'export').toLowerCase().replace(/\s+/g, '_')}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    Toast.show('CSV file downloaded successfully', 'success', 'Export Complete');
  }

  exportToExcel() {
    if (this.filteredData.length === 0) {
      Toast.show('No data available to download.', 'warning');
      return;
    }

    const visibleCols = this.columns.filter(c => !this.hiddenColumns.has(c.field));
    let tableHtml = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">`;
    tableHtml += `<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Sheet1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body>`;
    tableHtml += `<table border="1"><thead><tr style="background:#0284C7;color:#FFFFFF;font-weight:bold;">`;
    visibleCols.forEach(c => {
      tableHtml += `<th>${c.header}</th>`;
    });
    tableHtml += `</tr></thead><tbody>`;
    this.filteredData.forEach(row => {
      tableHtml += `<tr>`;
      visibleCols.forEach(c => {
        let val = row[c.field];
        if (val === undefined || val === null) val = '';
        tableHtml += `<td>${String(val).replace(/</g, '&lt;').replace(/>/g, '&gt;')}</td>`;
      });
      tableHtml += `</tr>`;
    });
    tableHtml += `</tbody></table></body></html>`;

    const blob = new Blob([tableHtml], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${(this.tableTitle || 'export').toLowerCase().replace(/\s+/g, '_')}_${Date.now()}.xls`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    Toast.show('Excel spreadsheet downloaded successfully', 'success', 'Export Complete');
  }

  exportToPDF() {
    if (this.filteredData.length === 0) {
      Toast.show('No data available to print.', 'warning');
      return;
    }

    const visibleCols = this.columns.filter(c => !this.hiddenColumns.has(c.field));
    const title = this.tableTitle || 'Data Export';
    const printWin = window.open('', '_blank', 'width=950,height=700');
    if (!printWin) {
      Toast.show('Preparing printable view...', 'info');
      window.print();
      return;
    }

    const rowsHtml = this.filteredData.map((row, idx) => `
      <tr>
        <td style="text-align:center;color:#666;font-size:11px;">${idx + 1}</td>
        ${visibleCols.map(c => {
          let val = row[c.field];
          if (val === undefined || val === null) val = '—';
          return `<td>${String(val).replace(/</g, '&lt;').replace(/>/g, '&gt;')}</td>`;
        }).join('')}
      </tr>
    `).join('');

    printWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 24px; color: #172B4D; font-size: 12px; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0284C7; padding-bottom: 12px; margin-bottom: 16px; }
          h1 { font-size: 18px; margin: 0; color: #0284C7; font-weight: 800; }
          .meta { font-size: 11px; color: #5E6C84; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th, td { border: 1px solid #DFE1E6; padding: 6px 10px; text-align: left; }
          th { background-color: #F4F5F7; font-weight: 700; font-size: 11px; text-transform: uppercase; color: #42526E; }
          tr:nth-child(even) { background-color: #FAFBFC; }
          @media print {
            body { padding: 0; }
            @page { margin: 1cm; size: landscape; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1>${title}</h1>
            <div class="meta">Devi Fisheries Limited ERP • Exported: ${new Date().toLocaleString()}</div>
          </div>
          <div class="meta" style="text-align:right;">
            <div>Total Records: <strong>${this.filteredData.length}</strong></div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th style="width:36px;text-align:center;">#</th>
              ${visibleCols.map(c => `<th>${c.header}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
        \x3Cscript>
          window.onload = function() { window.print(); }
        \x3C/script>
      </body>
      </html>
    `);
    printWin.document.close();
    Toast.show('Print & PDF dialog opened', 'info', 'Export PDF');
  }
}

export function makeTableResizable(table) {
  if (!table || table.dataset.resizableInit === 'true') return;
  const thead = table.querySelector('thead');
  if (!thead) return;

  const theadRows = thead.querySelectorAll('tr');
  if (theadRows.length === 0) return;
  const lastRow = theadRows[theadRows.length - 1];
  const ths = lastRow.querySelectorAll('th');
  if (ths.length === 0) return;

  table.dataset.resizableInit = 'true';

  ths.forEach(th => {
    if (th.querySelector('.dt-col-resizer')) return;

    if (!th.style.position || th.style.position === 'static' || th.style.position === 'relative') { th.style.position = 'sticky'; th.style.top = '0px'; }
    const resizer = document.createElement('div');
    resizer.className = 'dt-col-resizer';
    resizer.title = 'Drag to resize column (Double-click to reset)';
    th.appendChild(resizer);

    resizer.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const startX = e.pageX;
      const startWidth = th.offsetWidth;

      table.style.tableLayout = 'fixed';
      table.classList.add('is-resizing');

      ths.forEach(otherTh => {
        if (!otherTh.style.width) {
          const w = otherTh.offsetWidth;
          otherTh.style.width = w + 'px';
          otherTh.style.minWidth = w + 'px';
        }
      });

      resizer.classList.add('is-resizing');
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';

      const onMouseMove = (moveEvent) => {
        moveEvent.preventDefault();
        const diff = moveEvent.pageX - startX;
        const newWidth = Math.max(45, Math.round(startWidth + diff));
        th.style.width = newWidth + 'px';
        th.style.minWidth = newWidth + 'px';
        th.style.maxWidth = newWidth + 'px';
      };

      const onMouseUp = () => {
        resizer.classList.remove('is-resizing');
        table.classList.remove('is-resizing');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    });

    resizer.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });

    resizer.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      e.preventDefault();
      th.style.width = '';
      th.style.minWidth = '';
      th.style.maxWidth = '';
    });
  });
}

if (typeof window !== 'undefined') {
  window.makeTableResizable = makeTableResizable;
  const attachAll = () => {
    document.querySelectorAll('table:not([data-resizable-init="true"])').forEach(makeTableResizable);
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachAll);
  } else {
    attachAll();
  }

  const tableObserver = new MutationObserver(() => {
    attachAll();
  });
  if (document.body) {
    tableObserver.observe(document.body, { childList: true, subtree: true });
  }
}

