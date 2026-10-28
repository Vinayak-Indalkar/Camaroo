// Production Module Views (Interactive Floor Operations, Track IDs & Tracking)

import { TabBar } from '../components/tabBar.js';
import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';
import { renderEmptyState } from '../components/emptyState.js';
import { Skeleton } from '../components/skeleton.js';

export const ProductionView = {
  escape(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  },

  badge(status) {
    const s = String(status || '').toUpperCase();
    if (['COMPLETED', 'PASSED', 'ACTIVE'].includes(s)) {
      return `<span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644]">${status}</span>`;
    }
    if (['IN_PROGRESS', 'IN PROGRESS', 'IN REVIEW', 'PENDING'].includes(s)) {
      return `<span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF0B3] text-[#172B4D]">${status}</span>`;
    }
    if (['REJECTED', 'FAILED', 'HOLD'].includes(s)) {
      return `<span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFEBE6] text-[#DE350B]">${status}</span>`;
    }
    return `<span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EBECF0] text-[#42526E]">${status}</span>`;
  },

  state: {
    soakingTrackIds: [
      {
        sNo: 1,
        id: 'TRK-SK-2026-601',
        trackId: 'TRK-SK-2026-601',
        productionPlant: 'DFL UNIT-5 (JPT)',
        arrivalDate: '2026-10-06',
        soakingDate: '2026-10-06',
        shift: 'Shift A (Day)',
        supervisor: 'Laxmi Narayana',
        line: 'Soaking Bay #1 (Tub 1-4)',
        treatment: 'Non-Phosphate (STPP Free)',
        soakGainPct: 4.5,
        remarks: 'Pre-chill water maintained at 1.8°C, optimal absorption',
        status: 'COMPLETED'
      },
      {
        sNo: 2,
        id: 'TRK-SK-2026-602',
        trackId: 'TRK-SK-2026-602',
        productionPlant: 'DFL UNIT-3 (PSP)',
        arrivalDate: '2026-10-06',
        soakingDate: '2026-10-06',
        shift: 'Shift A (Day)',
        supervisor: 'K. Subba Rao',
        line: 'Soaking Bay #2 (Tub 5-8)',
        treatment: 'Food Grade STPP (3%)',
        soakGainPct: 5.2,
        remarks: 'Premium export batch for US Market, density verified',
        status: 'ACTIVE'
      },
      {
        sNo: 3,
        id: 'TRK-SK-2026-603',
        trackId: 'TRK-SK-2026-603',
        productionPlant: 'DFL UNIT-4 (PND)',
        arrivalDate: '2026-10-06',
        soakingDate: '2026-10-07',
        shift: 'Shift B (Evening)',
        supervisor: 'Ch. Prasad',
        line: 'Soaking Bay #3 (Tub 9-12)',
        treatment: 'Fresh Raw (Untreated)',
        soakGainPct: 0.0,
        remarks: 'Organic HLSO shrimp, zero additive soak run',
        status: 'ACTIVE'
      },
      {
        sNo: 4,
        id: 'TRK-SK-2026-604',
        trackId: 'TRK-SK-2026-604',
        productionPlant: 'DFL UNIT-1 (VSP)',
        arrivalDate: '2026-10-07',
        soakingDate: '2026-10-07',
        shift: 'Shift A (Day)',
        supervisor: 'Mallesh',
        line: 'Soaking Bay #1 (Tub 1-4)',
        treatment: 'Citric Acid & Salt Blend',
        soakGainPct: 3.8,
        remarks: 'EU standard formulation cleared by in-house QC',
        status: 'COMPLETED'
      },
      {
        sNo: 5,
        id: 'TRK-SK-2026-605',
        trackId: 'TRK-SK-2026-605',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        arrivalDate: '2026-10-07',
        soakingDate: '2026-10-07',
        shift: 'Shift C (Night)',
        supervisor: 'D. Rambabu',
        line: 'Soaking Bay #4 (Tub 13-16)',
        treatment: 'STPP Controlled Soak',
        soakGainPct: 4.1,
        remarks: 'PD tail-on lots, soak duration 45 mins monitored',
        status: 'ACTIVE'
      },
      {
        sNo: 6,
        id: 'TRK-SK-2026-606',
        trackId: 'TRK-SK-2026-606',
        productionPlant: 'DFL UNIT-2 (KKD)',
        arrivalDate: '2026-10-08',
        soakingDate: '2026-10-08',
        shift: 'Shift A (Day)',
        supervisor: 'G. Suribabu',
        line: 'Soaking Bay #2 (Tub 5-8)',
        treatment: 'Non-Phosphate Moisture Retainer',
        soakGainPct: 4.8,
        remarks: 'Ready for tunnel freezing batch allocation',
        status: 'PENDING'
      }
    ],

    freezingTrackIds: [
      {
        sNo: 1,
        id: 'TRK-FZ-2026-501',
        trackId: 'TRK-FZ-2026-501',
        productionPlant: 'DFL UNIT-5 (JPT)',
        arrivalDate: '2026-10-06',
        freezingDate: '2026-10-06',
        shift: 'Shift A (Day)',
        supervisor: 'Laxmi Narayana',
        line: 'Tunnel Freezer #1 (IQF)',
        freezingMethod: 'IQF Tunnel',
        coreTemp: -22.4,
        remarks: 'Continuous belt speed calibrated, exit core temp -22.4°C',
        status: 'COMPLETED'
      },
      {
        sNo: 2,
        id: 'TRK-FZ-2026-502',
        trackId: 'TRK-FZ-2026-502',
        productionPlant: 'DFL UNIT-3 (PSP)',
        arrivalDate: '2026-10-06',
        freezingDate: '2026-10-06',
        shift: 'Shift A (Day)',
        supervisor: 'K. Subba Rao',
        line: 'Contact Plate Freezer #2',
        freezingMethod: 'Plate Freezer (Block Frozen)',
        coreTemp: -24.1,
        remarks: 'Block frozen 2 KG slabs, glazing 6% applied',
        status: 'ACTIVE'
      },
      {
        sNo: 3,
        id: 'TRK-FZ-2026-503',
        trackId: 'TRK-FZ-2026-503',
        productionPlant: 'DFL UNIT-4 (PND)',
        arrivalDate: '2026-10-06',
        freezingDate: '2026-10-07',
        shift: 'Shift B (Evening)',
        supervisor: 'Ch. Prasad',
        line: 'Spiral Freezer #1',
        freezingMethod: 'Spiral Freezer (IQF)',
        coreTemp: -21.8,
        remarks: 'Cooked peeled prawns, rapid chill blast compliant',
        status: 'ACTIVE'
      },
      {
        sNo: 4,
        id: 'TRK-FZ-2026-504',
        trackId: 'TRK-FZ-2026-504',
        productionPlant: 'DFL UNIT-1 (VSP)',
        arrivalDate: '2026-10-07',
        freezingDate: '2026-10-07',
        shift: 'Shift A (Day)',
        supervisor: 'Mallesh',
        line: 'Tunnel Freezer #2 (IQF)',
        freezingMethod: 'IQF Tunnel',
        coreTemp: -23.0,
        remarks: 'Export grade Seabass fillets packed into master cartons',
        status: 'COMPLETED'
      },
      {
        sNo: 5,
        id: 'TRK-FZ-2026-505',
        trackId: 'TRK-FZ-2026-505',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        arrivalDate: '2026-10-07',
        freezingDate: '2026-10-07',
        shift: 'Shift C (Night)',
        supervisor: 'D. Rambabu',
        line: 'Contact Plate Freezer #1',
        freezingMethod: 'Plate Freezer (Block Frozen)',
        coreTemp: -25.2,
        remarks: 'Night run block batches transferred to Coldstore Chamber #1',
        status: 'ACTIVE'
      },
      {
        sNo: 6,
        id: 'TRK-FZ-2026-506',
        trackId: 'TRK-FZ-2026-506',
        productionPlant: 'DFL UNIT-2 (KKD)',
        arrivalDate: '2026-10-08',
        freezingDate: '2026-10-08',
        shift: 'Shift A (Day)',
        supervisor: 'G. Suribabu',
        line: 'Tunnel Freezer #1 (IQF)',
        freezingMethod: 'IQF Tunnel',
        coreTemp: -21.5,
        remarks: 'Staging in ante-room, waiting for blast tunnel start',
        status: 'PENDING'
      }
    ]
  },

  render(containerId, subPage = 'soaking-trackid', activeHash = '#/production/pre-processing/soaking-trackid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div id="production-tab-bar-container"></div>
      <div id="production-subpage-content"></div>
    `;

    TabBar.render('production-tab-bar-container', activeHash);
    const subContainer = document.getElementById('production-subpage-content');
    if (!subContainer) return;

    if (subPage === 'soaking-trackid') {
      this.renderSoakingTrackIdScreen(subContainer);
      return;
    }

    if (subPage === 'freezing-trackid') {
      this.renderFreezingTrackIdScreen(subContainer);
      return;
    }

    // Default Fallback
    const sk = typeof Skeleton !== 'undefined' ? Skeleton : (typeof window !== 'undefined' ? window.Skeleton : null);
    if (sk && typeof sk.renderTable === 'function') {
      subContainer.innerHTML = sk.renderTable(6, 6);
    }
    setTimeout(() => {
      const tabLabel = subPage.replace(/-/g, ' ');
      subContainer.innerHTML = renderEmptyState({
        title: `No Production Batches for ${tabLabel}`,
        description: `The Production floor line and freezing tracking currently has no active runs. Full interactive CRUD operations are active under Pre-Processing track IDs.`,
        moduleName: "Production",
        tabName: tabLabel
      });
    }, 120);
  },

  // =========================================================================
  // TAB 1: SOAKING TRACK ID SCREEN
  // =========================================================================
  renderSoakingTrackIdScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Soaking Track ID Registry</h1>
          </div>
          <div>
            <button type="button" id="btn-gen-soak-trackid" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Generate Soaking Track ID</span>
            </button>
          </div>
        </div>

        <!-- Filter Card: Exact Standard Responsive Filter UI -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls -->
            <div class="inline-flex items-center gap-2">
              <button type="button" id="soaktrack-top-reset-btn" class="dt-top-filter-reset-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="soaktrack-top-toggle-btn" class="dt-top-filter-toggle-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 transform transition-transform duration-200" id="soaktrack-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Filter Form: 4-Column Responsive Grid -->
          <div id="soaktrack-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <div>
              <label for="sk-filter-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="sk-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Production Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <div>
              <label for="sk-filter-arrival-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
              <input type="date" id="sk-filter-arrival-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>

            <div>
              <label for="sk-filter-soak-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKING DATE</label>
              <input type="date" id="sk-filter-soak-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>

            <div>
              <label for="sk-filter-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT</label>
              <select id="sk-filter-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Shifts</option>
                <option value="Shift A (Day)">Shift A (Day)</option>
                <option value="Shift B (Evening)">Shift B (Evening)</option>
                <option value="Shift C (Night)">Shift C (Night)</option>
              </select>
            </div>

            <div>
              <label for="sk-filter-supervisor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR</label>
              <select id="sk-filter-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Supervisors</option>
                <option value="Laxmi Narayana">Laxmi Narayana</option>
                <option value="K. Subba Rao">K. Subba Rao</option>
                <option value="Ch. Prasad">Ch. Prasad</option>
                <option value="Mallesh">Mallesh</option>
                <option value="D. Rambabu">D. Rambabu</option>
                <option value="G. Suribabu">G. Suribabu</option>
              </select>
            </div>

            <div>
              <label for="sk-filter-trackid" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID</label>
              <input type="text" id="sk-filter-trackid" placeholder="e.g. TRK-SK-2026" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <div>
              <label for="sk-filter-treatment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TREATMENT</label>
              <select id="sk-filter-treatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Treatments</option>
                <option value="Non-Phosphate">Non-Phosphate (STPP Free)</option>
                <option value="STPP">Food Grade STPP (3%)</option>
                <option value="Fresh Raw">Fresh Raw (Untreated)</option>
                <option value="Citric Acid">Citric Acid & Salt Blend</option>
              </select>
            </div>

            <div>
              <label for="sk-filter-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS</label>
              <select id="sk-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Statuses</option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="PENDING">PENDING</option>
              </select>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="soak-trackid-table-container"></div>
      </div>
    `;

    // Button Add / Generate Handler
    document.getElementById('btn-gen-soak-trackid')?.addEventListener('click', () => {
      this.showGenerateSoakingModal(container);
    });

    // Toggle Handler
    const toggleBtn = document.getElementById('soaktrack-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('soaktrack-top-filter-body');
      const icon = document.getElementById('soaktrack-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        const isHidden = body.classList.contains('hidden');
        toggleBtn.title = isHidden ? 'Show Filter' : 'Hide Filter';
        icon?.classList.toggle('-rotate-90', isHidden);
      }
    });

    // Table Filtering
    const applyFilters = () => {
      const plant = document.getElementById('sk-filter-plant')?.value || 'ALL';
      const arrDate = document.getElementById('sk-filter-arrival-date')?.value || '';
      const soakDate = document.getElementById('sk-filter-soak-date')?.value || '';
      const shift = document.getElementById('sk-filter-shift')?.value || 'ALL';
      const sup = document.getElementById('sk-filter-supervisor')?.value || 'ALL';
      const trk = (document.getElementById('sk-filter-trackid')?.value || '').trim().toLowerCase();
      const trt = document.getElementById('sk-filter-treatment')?.value || 'ALL';
      const st = document.getElementById('sk-filter-status')?.value || 'ALL';

      const filtered = this.state.soakingTrackIds.filter(row => {
        if (plant !== 'ALL' && row.productionPlant !== plant) return false;
        if (arrDate && row.arrivalDate !== arrDate) return false;
        if (soakDate && row.soakingDate !== soakDate) return false;
        if (shift !== 'ALL' && row.shift !== shift) return false;
        if (sup !== 'ALL' && row.supervisor !== sup) return false;
        if (trk && !String(row.trackId || '').toLowerCase().includes(trk)) return false;
        if (trt !== 'ALL' && !String(row.treatment || '').includes(trt)) return false;
        if (st !== 'ALL' && String(row.status || '').toUpperCase() !== st) return false;
        return true;
      });

      renderTable(filtered);
    };

    // Filter Change Event Listeners
    ['sk-filter-plant', 'sk-filter-shift', 'sk-filter-supervisor', 'sk-filter-treatment', 'sk-filter-status'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', applyFilters);
    });
    ['sk-filter-arrival-date', 'sk-filter-soak-date', 'sk-filter-trackid'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', applyFilters);
    });

    // Reset Handler
    document.getElementById('soaktrack-top-reset-btn')?.addEventListener('click', () => {
      if (document.getElementById('sk-filter-plant')) document.getElementById('sk-filter-plant').value = 'ALL';
      if (document.getElementById('sk-filter-arrival-date')) document.getElementById('sk-filter-arrival-date').value = '';
      if (document.getElementById('sk-filter-soak-date')) document.getElementById('sk-filter-soak-date').value = '';
      if (document.getElementById('sk-filter-shift')) document.getElementById('sk-filter-shift').value = 'ALL';
      if (document.getElementById('sk-filter-supervisor')) document.getElementById('sk-filter-supervisor').value = 'ALL';
      if (document.getElementById('sk-filter-trackid')) document.getElementById('sk-filter-trackid').value = '';
      if (document.getElementById('sk-filter-treatment')) document.getElementById('sk-filter-treatment').value = 'ALL';
      if (document.getElementById('sk-filter-status')) document.getElementById('sk-filter-status').value = 'ALL';
      renderTable(this.state.soakingTrackIds);
      Toast.show('Filters reset', 'info');
    });

    // DataTable Rendering
    const renderTable = (data) => {
      new DataTable({
        containerId: 'soak-trackid-table-container',
        data: data,
        keyField: 'trackId',
        tableTitle: 'Soaking Crate Tracking Log',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          {
            field: 'sNo',
            header: 'S.No',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          {
            field: 'trackId',
            header: 'Track ID',
            render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${this.escape(v)}</span>`
          },
          {
            field: 'productionPlant',
            header: 'Production Plant',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v)}</span>`
          },
          {
            field: 'arrivalDate',
            header: 'Arrival Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v ? String(v).split('-').reverse().join('-') : '-'}</span>`
          },
          {
            field: 'soakingDate',
            header: 'Soaking Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v ? String(v).split('-').reverse().join('-') : '-'}</span>`
          },
          {
            field: 'shift',
            header: 'Shift',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${this.escape(v)}</span>`
          },
          {
            field: 'supervisor',
            header: 'Supervisor',
            render: (v) => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${this.escape(v)}</span>`
          },
          {
            field: 'line',
            header: 'Soaking Bay / Line',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap font-medium">${this.escape(v || '-')}</span>`
          },
          {
            field: 'treatment',
            header: 'Treatment Formulation',
            render: (v) => `<span class="text-xs text-[#0284C7] font-semibold whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'soakGainPct',
            header: 'Soak Gain (%)',
            render: (v) => `<span class="font-mono font-bold text-[#00875A]">${Number(v || 0).toFixed(1)}%</span>`
          },
          {
            field: 'remarks',
            header: 'Remarks',
            render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[200px] block" title="${this.escape(v)}">${this.escape(v || '-')}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            render: (v) => this.badge(v)
          }
        ],
        actions: [
          {
            label: 'View',
            icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: row => this.showSoakingDetails(row)
          },
          {
            label: 'Edit',
            icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: row => this.showEditSoakingModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-3.5 h-3.5 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: row => this.deleteSoakingRow(row, container)
          }
        ]
      });
    };

    renderTable(this.state.soakingTrackIds);
  },

  showGenerateSoakingModal(container) {
    const nextSeq = this.state.soakingTrackIds.length + 1;
    const defaultTrackId = `TRK-SK-2026-${600 + nextSeq}`;
    const today = new Date().toISOString().slice(0, 10);

    Modal.open({
      title: 'Generate Soaking Track ID',
      size: 'full',
      content: `
        <form id="form-gen-soaking-track" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="gst-trackid" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Track ID <span class="text-[#DE350B]">*</span></label>
            <input id="gst-trackid" name="trackId" type="text" value="${defaultTrackId}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none" required />
          </div>

          <div>
            <label for="gst-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Production Plant <span class="text-[#DE350B]">*</span></label>
            <select id="gst-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
              <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
              <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
              <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
              <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
            </select>
          </div>

          <div>
            <label for="gst-arrival-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Arrival Date <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="gst-arrival-date" name="arrivalDate" type="date" value="${today}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <div>
            <label for="gst-soak-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Soaking Date <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="gst-soak-date" name="soakingDate" type="date" value="${today}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <div>
            <label for="gst-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Shift <span class="text-[#DE350B]">*</span></label>
            <select id="gst-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Shift A (Day)" selected>Shift A (Day)</option>
              <option value="Shift B (Evening)">Shift B (Evening)</option>
              <option value="Shift C (Night)">Shift C (Night)</option>
            </select>
          </div>

          <div>
            <label for="gst-supervisor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Supervisor <span class="text-[#DE350B]">*</span></label>
            <select id="gst-supervisor" name="supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Laxmi Narayana" selected>Laxmi Narayana</option>
              <option value="K. Subba Rao">K. Subba Rao</option>
              <option value="Ch. Prasad">Ch. Prasad</option>
              <option value="Mallesh">Mallesh</option>
              <option value="D. Rambabu">D. Rambabu</option>
              <option value="G. Suribabu">G. Suribabu</option>
            </select>
          </div>

          <div>
            <label for="gst-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Soaking Bay / Line <span class="text-[#DE350B]">*</span></label>
            <select id="gst-line" name="line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Soaking Bay #1 (Tub 1-4)" selected>Soaking Bay #1 (Tub 1-4)</option>
              <option value="Soaking Bay #2 (Tub 5-8)">Soaking Bay #2 (Tub 5-8)</option>
              <option value="Soaking Bay #3 (Tub 9-12)">Soaking Bay #3 (Tub 9-12)</option>
              <option value="Soaking Bay #4 (Tub 13-16)">Soaking Bay #4 (Tub 13-16)</option>
            </select>
          </div>

          <div>
            <label for="gst-treatment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Treatment Formulation <span class="text-[#DE350B]">*</span></label>
            <select id="gst-treatment" name="treatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Non-Phosphate (STPP Free)" selected>Non-Phosphate (STPP Free)</option>
              <option value="Food Grade STPP (3%)">Food Grade STPP (3%)</option>
              <option value="Fresh Raw (Untreated)">Fresh Raw (Untreated)</option>
              <option value="Citric Acid & Salt Blend">Citric Acid & Salt Blend</option>
              <option value="Non-Phosphate Moisture Retainer">Non-Phosphate Moisture Retainer</option>
            </select>
          </div>

          <div>
            <label for="gst-soakgain" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Soak Gain (%) <span class="text-[#DE350B]">*</span></label>
            <input id="gst-soakgain" name="soakGainPct" type="number" step="0.1" min="0" max="25" value="4.5" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="gst-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Status <span class="text-[#DE350B]">*</span></label>
            <select id="gst-status" name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="ACTIVE" selected>ACTIVE</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="PENDING">PENDING</option>
            </select>
          </div>

          <div class="sm:col-span-2">
            <label for="gst-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Remarks</label>
            <input id="gst-remarks" name="remarks" type="text" placeholder="Formulation and temperature observations" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Generate & Save',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-gen-soaking-track');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));
            const newRow = {
              sNo: this.state.soakingTrackIds.length + 1,
              id: values.trackId,
              trackId: values.trackId,
              productionPlant: values.productionPlant,
              arrivalDate: values.arrivalDate,
              soakingDate: values.soakingDate,
              shift: values.shift,
              supervisor: values.supervisor,
              line: values.line,
              treatment: values.treatment,
              soakGainPct: Number(values.soakGainPct || 0),
              remarks: values.remarks || 'Standard soak cycle registered',
              status: values.status
            };

            this.state.soakingTrackIds.unshift(newRow);
            Modal.close();
            this.renderSoakingTrackIdScreen(container);
            Toast.show(`Soaking Track ID ${newRow.trackId} generated successfully`, 'success');
          }
        }
      ]
    });
  },

  showEditSoakingModal(row, container) {
    Modal.open({
      title: `Edit Soaking Track ID: ${row.trackId}`,
      size: 'full',
      content: `
        <form id="form-edit-soaking-track" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="est-trackid" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Track ID <span class="text-[#DE350B]">*</span></label>
            <input id="est-trackid" name="trackId" type="text" value="${row.trackId}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none" required />
          </div>

          <div>
            <label for="est-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Production Plant <span class="text-[#DE350B]">*</span></label>
            <select id="est-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['DFL UNIT-5 (JPT)', 'DFL UNIT-3 (PSP)', 'DFL UNIT-4 (PND)', 'DFL UNIT-1 (VSP)', 'DFL UNIT-6 (JPT-II)', 'DFL UNIT-2 (KKD)'].map(p => `<option value="${p}" ${p === row.productionPlant ? 'selected' : ''}>${p}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-arrival-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Arrival Date <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="est-arrival-date" name="arrivalDate" type="date" value="${row.arrivalDate || ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <div>
            <label for="est-soak-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Soaking Date <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="est-soak-date" name="soakingDate" type="date" value="${row.soakingDate || ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <div>
            <label for="est-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Shift <span class="text-[#DE350B]">*</span></label>
            <select id="est-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Shift A (Day)', 'Shift B (Evening)', 'Shift C (Night)'].map(s => `<option value="${s}" ${s === row.shift ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-supervisor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Supervisor <span class="text-[#DE350B]">*</span></label>
            <select id="est-supervisor" name="supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Laxmi Narayana', 'K. Subba Rao', 'Ch. Prasad', 'Mallesh', 'D. Rambabu', 'G. Suribabu'].map(s => `<option value="${s}" ${s === row.supervisor ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Soaking Bay / Line <span class="text-[#DE350B]">*</span></label>
            <select id="est-line" name="line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Soaking Bay #1 (Tub 1-4)', 'Soaking Bay #2 (Tub 5-8)', 'Soaking Bay #3 (Tub 9-12)', 'Soaking Bay #4 (Tub 13-16)'].map(l => `<option value="${l}" ${l === row.line ? 'selected' : ''}>${l}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-treatment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Treatment Formulation <span class="text-[#DE350B]">*</span></label>
            <select id="est-treatment" name="treatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Non-Phosphate (STPP Free)', 'Food Grade STPP (3%)', 'Fresh Raw (Untreated)', 'Citric Acid & Salt Blend', 'Non-Phosphate Moisture Retainer'].map(t => `<option value="${t}" ${t === row.treatment ? 'selected' : ''}>${t}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-soakgain" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Soak Gain (%) <span class="text-[#DE350B]">*</span></label>
            <input id="est-soakgain" name="soakGainPct" type="number" step="0.1" min="0" max="25" value="${row.soakGainPct || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="est-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Status <span class="text-[#DE350B]">*</span></label>
            <select id="est-status" name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['ACTIVE', 'COMPLETED', 'PENDING'].map(st => `<option value="${st}" ${st === row.status ? 'selected' : ''}>${st}</option>`).join('')}
            </select>
          </div>

          <div class="sm:col-span-2">
            <label for="est-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Remarks</label>
            <input id="est-remarks" name="remarks" type="text" value="${this.escape(row.remarks || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-edit-soaking-track');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));
            Object.assign(row, values, {
              soakGainPct: Number(values.soakGainPct || 0)
            });
            Modal.close();
            this.renderSoakingTrackIdScreen(container);
            Toast.show(`Track ID ${row.trackId} updated successfully`, 'success');
          }
        }
      ]
    });
  },

  showSoakingDetails(row) {
    Modal.open({
      title: `Soaking Track ID: ${row.trackId}`,
      size: 'large',
      content: `
        <div class="space-y-4 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-[#F8FAFC] p-4 rounded-xl border border-[#DFE1E6]">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Track ID</span>
              <span class="font-mono font-bold text-[#00A4B7] text-sm block mt-0.5">${row.trackId}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Production Plant</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.productionPlant}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Status</span>
              <div class="mt-0.5">${this.badge(row.status)}</div>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Arrival Date</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.arrivalDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Soaking Date</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.soakingDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Shift & Supervisor</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.shift} (${row.supervisor})</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Soaking Bay / Line</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.line}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Treatment Formulation</span>
              <span class="font-semibold text-[#0284C7] block mt-0.5">${row.treatment}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Soak Gain (%)</span>
              <span class="font-mono font-bold text-[#00875A] text-sm block mt-0.5">${row.soakGainPct}%</span>
            </div>
            <div class="sm:col-span-2 md:col-span-3">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Remarks</span>
              <span class="text-[#172B4D] block mt-0.5">${this.escape(row.remarks || 'None')}</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: modal => modal.close() }
      ]
    });
  },

  deleteSoakingRow(row, container) {
    Modal.confirm({
      title: 'Delete Soaking Track ID',
      message: `Are you sure you want to delete soaking record ${row.trackId}? This action cannot be undone.`,
      confirmLabel: 'Delete',
      type: 'danger',
      onConfirm: () => {
        const idx = this.state.soakingTrackIds.findIndex(item => item.trackId === row.trackId);
        if (idx !== -1) {
          this.state.soakingTrackIds.splice(idx, 1);
          this.renderSoakingTrackIdScreen(container);
          Toast.show(`Track ID ${row.trackId} deleted successfully`, 'success');
        }
      }
    });
  },

  // =========================================================================
  // TAB 2: FREEZING TRACK ID SCREEN
  // =========================================================================
  renderFreezingTrackIdScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Freezing Track ID Registry</h1>
          </div>
          <div>
            <button type="button" id="btn-gen-freeze-trackid" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Generate Freezing Track ID</span>
            </button>
          </div>
        </div>

        <!-- Filter Card: Exact Standard Responsive Filter UI -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls -->
            <div class="inline-flex items-center gap-2">
              <button type="button" id="freezetrack-top-reset-btn" class="dt-top-filter-reset-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="freezetrack-top-toggle-btn" class="dt-top-filter-toggle-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 transform transition-transform duration-200" id="freezetrack-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Filter Form: 4-Column Responsive Grid -->
          <div id="freezetrack-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <div>
              <label for="fz-filter-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="fz-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Production Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <div>
              <label for="fz-filter-arrival-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
              <input type="date" id="fz-filter-arrival-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>

            <div>
              <label for="fz-filter-freeze-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING DATE</label>
              <input type="date" id="fz-filter-freeze-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>

            <div>
              <label for="fz-filter-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT</label>
              <select id="fz-filter-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Shifts</option>
                <option value="Shift A (Day)">Shift A (Day)</option>
                <option value="Shift B (Evening)">Shift B (Evening)</option>
                <option value="Shift C (Night)">Shift C (Night)</option>
              </select>
            </div>

            <div>
              <label for="fz-filter-supervisor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR</label>
              <select id="fz-filter-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Supervisors</option>
                <option value="Laxmi Narayana">Laxmi Narayana</option>
                <option value="K. Subba Rao">K. Subba Rao</option>
                <option value="Ch. Prasad">Ch. Prasad</option>
                <option value="Mallesh">Mallesh</option>
                <option value="D. Rambabu">D. Rambabu</option>
                <option value="G. Suribabu">G. Suribabu</option>
              </select>
            </div>

            <div>
              <label for="fz-filter-method" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING METHOD</label>
              <select id="fz-filter-method" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Methods</option>
                <option value="IQF Tunnel">IQF Tunnel</option>
                <option value="Plate Freezer">Plate Freezer (Block Frozen)</option>
                <option value="Spiral Freezer">Spiral Freezer (IQF)</option>
              </select>
            </div>

            <div>
              <label for="fz-filter-trackid" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID</label>
              <input type="text" id="fz-filter-trackid" placeholder="e.g. TRK-FZ-2026" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <div>
              <label for="fz-filter-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS</label>
              <select id="fz-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Statuses</option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="PENDING">PENDING</option>
              </select>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="freeze-trackid-table-container"></div>
      </div>
    `;

    // Button Add / Generate Handler
    document.getElementById('btn-gen-freeze-trackid')?.addEventListener('click', () => {
      this.showGenerateFreezingModal(container);
    });

    // Toggle Handler
    const toggleBtn = document.getElementById('freezetrack-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('freezetrack-top-filter-body');
      const icon = document.getElementById('freezetrack-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        const isHidden = body.classList.contains('hidden');
        toggleBtn.title = isHidden ? 'Show Filter' : 'Hide Filter';
        icon?.classList.toggle('-rotate-90', isHidden);
      }
    });

    // Table Filtering
    const applyFilters = () => {
      const plant = document.getElementById('fz-filter-plant')?.value || 'ALL';
      const arrDate = document.getElementById('fz-filter-arrival-date')?.value || '';
      const fzDate = document.getElementById('fz-filter-freeze-date')?.value || '';
      const shift = document.getElementById('fz-filter-shift')?.value || 'ALL';
      const sup = document.getElementById('fz-filter-supervisor')?.value || 'ALL';
      const method = document.getElementById('fz-filter-method')?.value || 'ALL';
      const trk = (document.getElementById('fz-filter-trackid')?.value || '').trim().toLowerCase();
      const st = document.getElementById('fz-filter-status')?.value || 'ALL';

      const filtered = this.state.freezingTrackIds.filter(row => {
        if (plant !== 'ALL' && row.productionPlant !== plant) return false;
        if (arrDate && row.arrivalDate !== arrDate) return false;
        if (fzDate && row.freezingDate !== fzDate) return false;
        if (shift !== 'ALL' && row.shift !== shift) return false;
        if (sup !== 'ALL' && row.supervisor !== sup) return false;
        if (method !== 'ALL' && !String(row.freezingMethod || '').includes(method)) return false;
        if (trk && !String(row.trackId || '').toLowerCase().includes(trk)) return false;
        if (st !== 'ALL' && String(row.status || '').toUpperCase() !== st) return false;
        return true;
      });

      renderTable(filtered);
    };

    // Filter Change Event Listeners
    ['fz-filter-plant', 'fz-filter-shift', 'fz-filter-supervisor', 'fz-filter-method', 'fz-filter-status'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', applyFilters);
    });
    ['fz-filter-arrival-date', 'fz-filter-freeze-date', 'fz-filter-trackid'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', applyFilters);
    });

    // Reset Handler
    document.getElementById('freezetrack-top-reset-btn')?.addEventListener('click', () => {
      if (document.getElementById('fz-filter-plant')) document.getElementById('fz-filter-plant').value = 'ALL';
      if (document.getElementById('fz-filter-arrival-date')) document.getElementById('fz-filter-arrival-date').value = '';
      if (document.getElementById('fz-filter-freeze-date')) document.getElementById('fz-filter-freeze-date').value = '';
      if (document.getElementById('fz-filter-shift')) document.getElementById('fz-filter-shift').value = 'ALL';
      if (document.getElementById('fz-filter-supervisor')) document.getElementById('fz-filter-supervisor').value = 'ALL';
      if (document.getElementById('fz-filter-method')) document.getElementById('fz-filter-method').value = 'ALL';
      if (document.getElementById('fz-filter-trackid')) document.getElementById('fz-filter-trackid').value = '';
      if (document.getElementById('fz-filter-status')) document.getElementById('fz-filter-status').value = 'ALL';
      renderTable(this.state.freezingTrackIds);
      Toast.show('Filters reset', 'info');
    });

    // DataTable Rendering
    const renderTable = (data) => {
      new DataTable({
        containerId: 'freeze-trackid-table-container',
        data: data,
        keyField: 'trackId',
        tableTitle: 'Freezing Line Tracking Log',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          {
            field: 'sNo',
            header: 'S.No',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          {
            field: 'trackId',
            header: 'Track ID',
            render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${this.escape(v)}</span>`
          },
          {
            field: 'productionPlant',
            header: 'Production Plant',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v)}</span>`
          },
          {
            field: 'arrivalDate',
            header: 'Arrival Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v ? String(v).split('-').reverse().join('-') : '-'}</span>`
          },
          {
            field: 'freezingDate',
            header: 'Freezing Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v ? String(v).split('-').reverse().join('-') : '-'}</span>`
          },
          {
            field: 'shift',
            header: 'Shift',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${this.escape(v)}</span>`
          },
          {
            field: 'supervisor',
            header: 'Supervisor',
            render: (v) => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${this.escape(v)}</span>`
          },
          {
            field: 'line',
            header: 'Freezer Line / Unit',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap font-medium">${this.escape(v || '-')}</span>`
          },
          {
            field: 'freezingMethod',
            header: 'Freezing Method',
            render: (v) => `<span class="text-xs text-[#0284C7] font-semibold whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'coreTemp',
            header: 'Core Temp (°C)',
            render: (v) => `<span class="font-mono font-bold text-[#0284C7]">${Number(v || 0).toFixed(1)}°C</span>`
          },
          {
            field: 'remarks',
            header: 'Remarks',
            render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[200px] block" title="${this.escape(v)}">${this.escape(v || '-')}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            render: (v) => this.badge(v)
          }
        ],
        actions: [
          {
            label: 'View',
            icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: row => this.showFreezingDetails(row)
          },
          {
            label: 'Edit',
            icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: row => this.showEditFreezingModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-3.5 h-3.5 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: row => this.deleteFreezingRow(row, container)
          }
        ]
      });
    };

    renderTable(this.state.freezingTrackIds);
  },

  showGenerateFreezingModal(container) {
    const nextSeq = this.state.freezingTrackIds.length + 1;
    const defaultTrackId = `TRK-FZ-2026-${500 + nextSeq}`;
    const today = new Date().toISOString().slice(0, 10);

    Modal.open({
      title: 'Generate Freezing Track ID',
      size: 'full',
      content: `
        <form id="form-gen-freezing-track" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="gft-trackid" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Track ID <span class="text-[#DE350B]">*</span></label>
            <input id="gft-trackid" name="trackId" type="text" value="${defaultTrackId}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none" required />
          </div>

          <div>
            <label for="gft-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Production Plant <span class="text-[#DE350B]">*</span></label>
            <select id="gft-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
              <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
              <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
              <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
              <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
            </select>
          </div>

          <div>
            <label for="gft-arrival-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Arrival Date <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="gft-arrival-date" name="arrivalDate" type="date" value="${today}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <div>
            <label for="gft-freeze-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Freezing Date <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="gft-freeze-date" name="freezingDate" type="date" value="${today}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <div>
            <label for="gft-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Shift <span class="text-[#DE350B]">*</span></label>
            <select id="gft-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Shift A (Day)" selected>Shift A (Day)</option>
              <option value="Shift B (Evening)">Shift B (Evening)</option>
              <option value="Shift C (Night)">Shift C (Night)</option>
            </select>
          </div>

          <div>
            <label for="gft-supervisor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Supervisor <span class="text-[#DE350B]">*</span></label>
            <select id="gft-supervisor" name="supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Laxmi Narayana" selected>Laxmi Narayana</option>
              <option value="K. Subba Rao">K. Subba Rao</option>
              <option value="Ch. Prasad">Ch. Prasad</option>
              <option value="Mallesh">Mallesh</option>
              <option value="D. Rambabu">D. Rambabu</option>
              <option value="G. Suribabu">G. Suribabu</option>
            </select>
          </div>

          <div>
            <label for="gft-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Freezer Line / Unit <span class="text-[#DE350B]">*</span></label>
            <select id="gft-line" name="line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Tunnel Freezer #1 (IQF)" selected>Tunnel Freezer #1 (IQF)</option>
              <option value="Contact Plate Freezer #2">Contact Plate Freezer #2</option>
              <option value="Spiral Freezer #1">Spiral Freezer #1</option>
              <option value="Tunnel Freezer #2 (IQF)">Tunnel Freezer #2 (IQF)</option>
              <option value="Contact Plate Freezer #1">Contact Plate Freezer #1</option>
            </select>
          </div>

          <div>
            <label for="gft-method" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Freezing Method <span class="text-[#DE350B]">*</span></label>
            <select id="gft-method" name="freezingMethod" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="IQF Tunnel" selected>IQF Tunnel</option>
              <option value="Plate Freezer (Block Frozen)">Plate Freezer (Block Frozen)</option>
              <option value="Spiral Freezer (IQF)">Spiral Freezer (IQF)</option>
              <option value="Blast Freezer">Blast Freezer</option>
            </select>
          </div>

          <div>
            <label for="gft-coretemp" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Core Temp (°C) <span class="text-[#DE350B]">*</span></label>
            <input id="gft-coretemp" name="coreTemp" type="number" step="0.1" max="0" min="-50" value="-22.5" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="gft-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Status <span class="text-[#DE350B]">*</span></label>
            <select id="gft-status" name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="ACTIVE" selected>ACTIVE</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="PENDING">PENDING</option>
            </select>
          </div>

          <div class="sm:col-span-2">
            <label for="gft-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Remarks</label>
            <input id="gft-remarks" name="remarks" type="text" placeholder="Freezer pressure, belt speed, and glazing notes" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Generate & Save',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-gen-freezing-track');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));
            const newRow = {
              sNo: this.state.freezingTrackIds.length + 1,
              id: values.trackId,
              trackId: values.trackId,
              productionPlant: values.productionPlant,
              arrivalDate: values.arrivalDate,
              freezingDate: values.freezingDate,
              shift: values.shift,
              supervisor: values.supervisor,
              line: values.line,
              freezingMethod: values.freezingMethod,
              coreTemp: Number(values.coreTemp || -22.0),
              remarks: values.remarks || 'Continuous freezing cycle recorded',
              status: values.status
            };

            this.state.freezingTrackIds.unshift(newRow);
            Modal.close();
            this.renderFreezingTrackIdScreen(container);
            Toast.show(`Freezing Track ID ${newRow.trackId} generated successfully`, 'success');
          }
        }
      ]
    });
  },

  showEditFreezingModal(row, container) {
    Modal.open({
      title: `Edit Freezing Track ID: ${row.trackId}`,
      size: 'full',
      content: `
        <form id="form-edit-freezing-track" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="eft-trackid" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Track ID <span class="text-[#DE350B]">*</span></label>
            <input id="eft-trackid" name="trackId" type="text" value="${row.trackId}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none" required />
          </div>

          <div>
            <label for="eft-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Production Plant <span class="text-[#DE350B]">*</span></label>
            <select id="eft-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['DFL UNIT-5 (JPT)', 'DFL UNIT-3 (PSP)', 'DFL UNIT-4 (PND)', 'DFL UNIT-1 (VSP)', 'DFL UNIT-6 (JPT-II)', 'DFL UNIT-2 (KKD)'].map(p => `<option value="${p}" ${p === row.productionPlant ? 'selected' : ''}>${p}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eft-arrival-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Arrival Date <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="eft-arrival-date" name="arrivalDate" type="date" value="${row.arrivalDate || ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <div>
            <label for="eft-freeze-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Freezing Date <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="eft-freeze-date" name="freezingDate" type="date" value="${row.freezingDate || ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <div>
            <label for="eft-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Shift <span class="text-[#DE350B]">*</span></label>
            <select id="eft-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Shift A (Day)', 'Shift B (Evening)', 'Shift C (Night)'].map(s => `<option value="${s}" ${s === row.shift ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eft-supervisor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Supervisor <span class="text-[#DE350B]">*</span></label>
            <select id="eft-supervisor" name="supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Laxmi Narayana', 'K. Subba Rao', 'Ch. Prasad', 'Mallesh', 'D. Rambabu', 'G. Suribabu'].map(s => `<option value="${s}" ${s === row.supervisor ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eft-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Freezer Line / Unit <span class="text-[#DE350B]">*</span></label>
            <select id="eft-line" name="line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Tunnel Freezer #1 (IQF)', 'Contact Plate Freezer #2', 'Spiral Freezer #1', 'Tunnel Freezer #2 (IQF)', 'Contact Plate Freezer #1'].map(l => `<option value="${l}" ${l === row.line ? 'selected' : ''}>${l}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eft-method" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Freezing Method <span class="text-[#DE350B]">*</span></label>
            <select id="eft-method" name="freezingMethod" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['IQF Tunnel', 'Plate Freezer (Block Frozen)', 'Spiral Freezer (IQF)', 'Blast Freezer'].map(m => `<option value="${m}" ${m === row.freezingMethod ? 'selected' : ''}>${m}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eft-coretemp" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Core Temp (°C) <span class="text-[#DE350B]">*</span></label>
            <input id="eft-coretemp" name="coreTemp" type="number" step="0.1" max="0" min="-50" value="${row.coreTemp || -22.0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="eft-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Status <span class="text-[#DE350B]">*</span></label>
            <select id="eft-status" name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['ACTIVE', 'COMPLETED', 'PENDING'].map(st => `<option value="${st}" ${st === row.status ? 'selected' : ''}>${st}</option>`).join('')}
            </select>
          </div>

          <div class="sm:col-span-2">
            <label for="eft-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Remarks</label>
            <input id="eft-remarks" name="remarks" type="text" value="${this.escape(row.remarks || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-edit-freezing-track');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));
            Object.assign(row, values, {
              coreTemp: Number(values.coreTemp || -22.0)
            });
            Modal.close();
            this.renderFreezingTrackIdScreen(container);
            Toast.show(`Track ID ${row.trackId} updated successfully`, 'success');
          }
        }
      ]
    });
  },

  showFreezingDetails(row) {
    Modal.open({
      title: `Freezing Track ID: ${row.trackId}`,
      size: 'large',
      content: `
        <div class="space-y-4 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-[#F8FAFC] p-4 rounded-xl border border-[#DFE1E6]">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Track ID</span>
              <span class="font-mono font-bold text-[#00A4B7] text-sm block mt-0.5">${row.trackId}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Production Plant</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.productionPlant}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Status</span>
              <div class="mt-0.5">${this.badge(row.status)}</div>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Arrival Date</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.arrivalDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Freezing Date</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.freezingDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Shift & Supervisor</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.shift} (${row.supervisor})</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Freezer Line / Unit</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.line}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Freezing Method</span>
              <span class="font-semibold text-[#0284C7] block mt-0.5">${row.freezingMethod}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Core Temp (°C)</span>
              <span class="font-mono font-bold text-[#0284C7] text-sm block mt-0.5">${row.coreTemp}°C</span>
            </div>
            <div class="sm:col-span-2 md:col-span-3">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Remarks</span>
              <span class="text-[#172B4D] block mt-0.5">${this.escape(row.remarks || 'None')}</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: modal => modal.close() }
      ]
    });
  },

  deleteFreezingRow(row, container) {
    Modal.confirm({
      title: 'Delete Freezing Track ID',
      message: `Are you sure you want to delete freezing record ${row.trackId}? This action cannot be undone.`,
      confirmLabel: 'Delete',
      type: 'danger',
      onConfirm: () => {
        const idx = this.state.freezingTrackIds.findIndex(item => item.trackId === row.trackId);
        if (idx !== -1) {
          this.state.freezingTrackIds.splice(idx, 1);
          this.renderFreezingTrackIdScreen(container);
          Toast.show(`Track ID ${row.trackId} deleted successfully`, 'success');
        }
      }
    });
  }
};
