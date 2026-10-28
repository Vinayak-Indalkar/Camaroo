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
        trackCode: 'TRK-SK-2026-601',
        plant: 'DFL UNIT-5 (JPT)',
        productionPlant: 'DFL UNIT-5 (JPT)',
        arrivalDate: '2026-10-06',
        soakingDate: '2026-10-06',
        startTime: '08:30',
        timePeriod: '45 Mins',
        chemical: 'Non-Phosphate Blend',
        chemicalQty: 15.0,
        saltQty: 10.0,
        remarks: 'Pre-chill water maintained at 1.8°C, optimal absorption',
        variety: 'Vannamei (VM)',
        typeOfProduct: 'HLSO',
        treatment: 'Non-Phosphate',
        soakingTreatment: 'Non-Phosphate',
        grade: 'Grade 1 (21/25)',
        lineList: 'Line #1',
        tubNumber: 'Tub-01',
        sourceCount: '31/40',
        pickUp: '4.5%',
        inCount: 35,
        inQuantity: '450.0 Kgs',
        outCount: 32,
        iceQtyPct: '15%',
        waterQtyPct: '80%',
        shift: 'Shift A (Day)',
        soakingInTemp: '2.5°C',
        soakingOutTemp: '1.8°C',
        status: 'COMPLETED'
      },
      {
        sNo: 2,
        id: 'TRK-SK-2026-602',
        trackCode: 'TRK-SK-2026-602',
        plant: 'DFL UNIT-3 (PSP)',
        productionPlant: 'DFL UNIT-3 (PSP)',
        arrivalDate: '2026-10-06',
        soakingDate: '2026-10-06',
        startTime: '09:15',
        timePeriod: '60 Mins',
        chemical: 'Food Grade STPP (3%)',
        chemicalQty: 18.5,
        saltQty: 12.0,
        remarks: 'Premium export batch for US Market, density verified',
        variety: 'Black Tiger (BT)',
        typeOfProduct: 'PD',
        treatment: 'Food Grade STPP',
        soakingTreatment: 'Food Grade STPP',
        grade: 'Grade A (16/20)',
        lineList: 'Line #2',
        tubNumber: 'Tub-05',
        sourceCount: '16/20',
        pickUp: '5.2%',
        inCount: 18,
        inQuantity: '520.0 Kgs',
        outCount: 16,
        iceQtyPct: '12%',
        waterQtyPct: '82%',
        shift: 'Shift A (Day)',
        soakingInTemp: '2.8°C',
        soakingOutTemp: '2.0°C',
        status: 'ACTIVE'
      },
      {
        sNo: 3,
        id: 'TRK-SK-2026-603',
        trackCode: 'TRK-SK-2026-603',
        plant: 'DFL UNIT-4 (PND)',
        productionPlant: 'DFL UNIT-4 (PND)',
        arrivalDate: '2026-10-06',
        soakingDate: '2026-10-07',
        startTime: '14:00',
        timePeriod: '30 Mins',
        chemical: 'Fresh Raw (Untreated)',
        chemicalQty: 0.0,
        saltQty: 8.0,
        remarks: 'Organic HLSO shrimp, zero additive soak run',
        variety: 'Vannamei (VM)',
        typeOfProduct: 'HLSO',
        treatment: 'Fresh Raw',
        soakingTreatment: 'Fresh Raw',
        grade: 'Grade 1 (26/30)',
        lineList: 'Line #3',
        tubNumber: 'Tub-09',
        sourceCount: '26/30',
        pickUp: '0.0%',
        inCount: 28,
        inQuantity: '380.0 Kgs',
        outCount: 28,
        iceQtyPct: '20%',
        waterQtyPct: '80%',
        shift: 'Shift B (Evening)',
        soakingInTemp: '1.9°C',
        soakingOutTemp: '1.5°C',
        status: 'ACTIVE'
      },
      {
        sNo: 4,
        id: 'TRK-SK-2026-604',
        trackCode: 'TRK-SK-2026-604',
        plant: 'DFL UNIT-1 (VSP)',
        productionPlant: 'DFL UNIT-1 (VSP)',
        arrivalDate: '2026-10-07',
        soakingDate: '2026-10-07',
        startTime: '10:30',
        timePeriod: '45 Mins',
        chemical: 'Citric Acid & Salt Blend',
        chemicalQty: 12.0,
        saltQty: 15.0,
        remarks: 'EU standard formulation cleared by in-house QC',
        variety: 'Sea White',
        typeOfProduct: 'PTO',
        treatment: 'Citric Acid & Salt',
        soakingTreatment: 'Citric Acid & Salt',
        grade: 'Export Premium',
        lineList: 'Line #1',
        tubNumber: 'Tub-03',
        sourceCount: '31/40',
        pickUp: '3.8%',
        inCount: 36,
        inQuantity: '410.0 Kgs',
        outCount: 33,
        iceQtyPct: '14%',
        waterQtyPct: '84%',
        shift: 'Shift A (Day)',
        soakingInTemp: '2.2°C',
        soakingOutTemp: '1.7°C',
        status: 'COMPLETED'
      },
      {
        sNo: 5,
        id: 'TRK-SK-2026-605',
        trackCode: 'TRK-SK-2026-605',
        plant: 'DFL UNIT-6 (JPT-II)',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        arrivalDate: '2026-10-07',
        soakingDate: '2026-10-07',
        startTime: '22:30',
        timePeriod: '50 Mins',
        chemical: 'STPP Controlled Soak',
        chemicalQty: 16.0,
        saltQty: 11.0,
        remarks: 'PD tail-on lots, soak duration 50 mins monitored',
        variety: 'Vannamei (VM)',
        typeOfProduct: 'PUD',
        treatment: 'STPP Controlled',
        soakingTreatment: 'STPP Controlled',
        grade: 'Grade 2 (31/40)',
        lineList: 'Line #4',
        tubNumber: 'Tub-12',
        sourceCount: '41/50',
        pickUp: '4.1%',
        inCount: 44,
        inQuantity: '600.0 Kgs',
        outCount: 40,
        iceQtyPct: '16%',
        waterQtyPct: '80%',
        shift: 'Shift C (Night)',
        soakingInTemp: '2.4°C',
        soakingOutTemp: '1.9°C',
        status: 'ACTIVE'
      },
      {
        sNo: 6,
        id: 'TRK-SK-2026-606',
        trackCode: 'TRK-SK-2026-606',
        plant: 'DFL UNIT-2 (KKD)',
        productionPlant: 'DFL UNIT-2 (KKD)',
        arrivalDate: '2026-10-08',
        soakingDate: '2026-10-08',
        startTime: '08:00',
        timePeriod: '45 Mins',
        chemical: 'Non-Phosphate Moisture Retainer',
        chemicalQty: 14.0,
        saltQty: 9.5,
        remarks: 'Ready for tunnel freezing batch allocation',
        variety: 'Scampi',
        typeOfProduct: 'EZ Peel',
        treatment: 'Non-Phosphate',
        soakingTreatment: 'Non-Phosphate',
        grade: 'Grade 1 (16/20)',
        lineList: 'Line #2',
        tubNumber: 'Tub-08',
        sourceCount: '21/25',
        pickUp: '4.8%',
        inCount: 23,
        inQuantity: '480.0 Kgs',
        outCount: 21,
        iceQtyPct: '15%',
        waterQtyPct: '81%',
        shift: 'Shift A (Day)',
        soakingInTemp: '2.1°C',
        soakingOutTemp: '1.6°C',
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
  // TAB 1: SOAKING TRACK ID SCREEN (UPDATED PER EXACT USER SPECIFICATION)
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

          <!-- Filter Form: 4-Column Responsive Grid (Updated to match Generate Soaking Track ID fields) -->
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
              <label for="sk-filter-trackcode" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK CODE</label>
              <input type="text" id="sk-filter-trackcode" placeholder="e.g. TRK-SK-2026" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
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
              <label for="sk-filter-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
              <select id="sk-filter-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Varieties</option>
                <option value="Vannamei (VM)">Vannamei (VM)</option>
                <option value="Black Tiger (BT)">Black Tiger (BT)</option>
                <option value="Sea White">Sea White</option>
                <option value="Scampi">Scampi</option>
              </select>
            </div>

            <div>
              <label for="sk-filter-treatment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TREATMENT</label>
              <select id="sk-filter-treatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Treatments</option>
                <option value="Non-Phosphate">Non-Phosphate</option>
                <option value="Food Grade STPP">Food Grade STPP</option>
                <option value="Fresh Raw">Fresh Raw</option>
                <option value="Citric Acid">Citric Acid & Salt</option>
                <option value="STPP Controlled">STPP Controlled</option>
              </select>
            </div>

            <div>
              <label for="sk-filter-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LINE LIST</label>
              <select id="sk-filter-line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Lines</option>
                <option value="Line #1">Line #1</option>
                <option value="Line #2">Line #2</option>
                <option value="Line #3">Line #3</option>
                <option value="Line #4">Line #4</option>
              </select>
            </div>

            <div>
              <label for="sk-filter-tub" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TUB NUMBER</label>
              <input type="text" id="sk-filter-tub" placeholder="e.g. Tub-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- Search Action Button -->
            <div class="flex items-end">
              <button type="button" id="soaktrack-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]" title="Apply Filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
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
      const code = (document.getElementById('sk-filter-trackcode')?.value || '').trim().toLowerCase();
      const soakDate = document.getElementById('sk-filter-soak-date')?.value || '';
      const shift = document.getElementById('sk-filter-shift')?.value || 'ALL';
      const variety = document.getElementById('sk-filter-variety')?.value || 'ALL';
      const trt = document.getElementById('sk-filter-treatment')?.value || 'ALL';
      const line = document.getElementById('sk-filter-line')?.value || 'ALL';
      const tub = (document.getElementById('sk-filter-tub')?.value || '').trim().toLowerCase();

      const filtered = this.state.soakingTrackIds.filter(row => {
        if (plant !== 'ALL' && (row.plant !== plant && row.productionPlant !== plant)) return false;
        if (code && !String(row.trackCode || row.trackId || '').toLowerCase().includes(code)) return false;
        if (soakDate && row.soakingDate !== soakDate) return false;
        if (shift !== 'ALL' && row.shift !== shift) return false;
        if (variety !== 'ALL' && !String(row.variety || '').includes(variety)) return false;
        if (trt !== 'ALL' && !String(row.treatment || row.soakingTreatment || '').includes(trt)) return false;
        if (line !== 'ALL' && !String(row.lineList || '').includes(line)) return false;
        if (tub && !String(row.tubNumber || '').toLowerCase().includes(tub)) return false;
        return true;
      });

      renderTable(filtered);
    };

    // Filter Change Event Listeners
    ['sk-filter-plant', 'sk-filter-shift', 'sk-filter-variety', 'sk-filter-treatment', 'sk-filter-line'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', applyFilters);
    });
    ['sk-filter-trackcode', 'sk-filter-soak-date', 'sk-filter-tub'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', applyFilters);
      document.getElementById(id)?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyFilters();
        }
      });
    });

    // Search Button Click Handler
    document.getElementById('soaktrack-filter-search-btn')?.addEventListener('click', () => {
      applyFilters();
      Toast.show('Filters applied', 'info');
    });

    // Reset Handler
    document.getElementById('soaktrack-top-reset-btn')?.addEventListener('click', () => {
      if (document.getElementById('sk-filter-plant')) document.getElementById('sk-filter-plant').value = 'ALL';
      if (document.getElementById('sk-filter-trackcode')) document.getElementById('sk-filter-trackcode').value = '';
      if (document.getElementById('sk-filter-soak-date')) document.getElementById('sk-filter-soak-date').value = '';
      if (document.getElementById('sk-filter-shift')) document.getElementById('sk-filter-shift').value = 'ALL';
      if (document.getElementById('sk-filter-variety')) document.getElementById('sk-filter-variety').value = 'ALL';
      if (document.getElementById('sk-filter-treatment')) document.getElementById('sk-filter-treatment').value = 'ALL';
      if (document.getElementById('sk-filter-line')) document.getElementById('sk-filter-line').value = 'ALL';
      if (document.getElementById('sk-filter-tub')) document.getElementById('sk-filter-tub').value = '';
      renderTable(this.state.soakingTrackIds);
      Toast.show('Filters reset', 'info');
    });

    // DataTable Rendering (25 Exact Columns Requested)
    const renderTable = (data) => {
      new DataTable({
        containerId: 'soak-trackid-table-container',
        data: data,
        keyField: 'trackCode',
        tableTitle: 'Soaking Track ID Registry',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.No
          {
            field: 'sNo',
            header: 'S.No',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Track Code
          {
            field: 'trackCode',
            header: 'Track Code',
            render: (v, row) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${this.escape(v || row.trackId || '-')}</span>`
          },
          // 3. Plant
          {
            field: 'plant',
            header: 'Plant',
            render: (v, row) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v || row.productionPlant || '-')}</span>`
          },
          // 4. Soaking Date
          {
            field: 'soakingDate',
            header: 'Soaking Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v ? String(v).split('-').reverse().join('-') : '-'}</span>`
          },
          // 5. Start Time
          {
            field: 'startTime',
            header: 'Start Time',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 6. Time Period
          {
            field: 'timePeriod',
            header: 'Time Period',
            render: (v) => `<span class="text-xs font-semibold text-[#5E6C84] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 7. Chemical
          {
            field: 'chemical',
            header: 'Chemical',
            render: (v) => `<span class="text-xs text-[#0284C7] font-semibold whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 8. Chemical Quantity
          {
            field: 'chemicalQty',
            header: 'Chemical Quantity',
            render: (v) => `<span class="font-mono font-semibold text-[#172B4D] whitespace-nowrap">${Number(v || 0).toFixed(1)} Kgs</span>`
          },
          // 9. Salt(KGs)
          {
            field: 'saltQty',
            header: 'Salt(KGs)',
            render: (v) => `<span class="font-mono font-semibold text-[#172B4D] whitespace-nowrap">${Number(v || 0).toFixed(1)} Kgs</span>`
          },
          // 10. Remarks
          {
            field: 'remarks',
            header: 'Remarks',
            render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[150px] block" title="${this.escape(v)}">${this.escape(v || '-')}</span>`
          },
          // 11. Variety
          {
            field: 'variety',
            header: 'Variety',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 12. Type Of Product
          {
            field: 'typeOfProduct',
            header: 'Type Of Product',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 13. Treatment
          {
            field: 'treatment',
            header: 'Treatment',
            render: (v, row) => `<span class="text-xs font-semibold text-[#006644] whitespace-nowrap">${this.escape(v || row.soakingTreatment || '-')}</span>`
          },
          // 14. Grade
          {
            field: 'grade',
            header: 'Grade',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 15. Line List
          {
            field: 'lineList',
            header: 'Line List',
            render: (v) => `<span class="text-xs font-medium text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 16. Tub Number
          {
            field: 'tubNumber',
            header: 'Tub Number',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#00A4B7] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 17. Source Count
          {
            field: 'sourceCount',
            header: 'Source Count',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 18. PickUp
          {
            field: 'pickUp',
            header: 'PickUp',
            render: (v) => `<span class="font-mono font-bold text-[#00875A] whitespace-nowrap">${this.escape(v || '0%')}</span>`
          },
          // 19. In Count
          {
            field: 'inCount',
            header: 'In Count',
            render: (v) => `<span class="font-mono font-medium text-[#172B4D] whitespace-nowrap">${v ?? '-'}</span>`
          },
          // 20. In Quantity
          {
            field: 'inQuantity',
            header: 'In Quantity',
            render: (v) => `<span class="font-mono font-bold text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 21. Ice Qty %
          {
            field: 'iceQtyPct',
            header: 'Ice Qty %',
            render: (v) => `<span class="font-mono text-xs text-[#0284C7] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 22. Water Qty %
          {
            field: 'waterQtyPct',
            header: 'Water Qty %',
            render: (v) => `<span class="font-mono text-xs text-[#0284C7] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 23. Shift
          {
            field: 'shift',
            header: 'Shift',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 24. Soaking In Tempt
          {
            field: 'soakingInTemp',
            header: 'Soaking In Tempt',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#00875A] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 25. Soaking Out Tempt
          {
            field: 'soakingOutTemp',
            header: 'Soaking Out Tempt',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#00875A] whitespace-nowrap">${this.escape(v || '-')}</span>`
          }
        ],
        actions: [
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
        ],
        onRowClick: (row) => this.showSoakingDetails(row)
      });
    };

    renderTable(this.state.soakingTrackIds);
  },

  // Generate Soaking Track ID Modal (With Exact 24 Form Fields)
  showGenerateSoakingModal(container) {
    const nextSeq = this.state.soakingTrackIds.length + 1;
    const defaultTrackCode = `TRK-SK-2026-${600 + nextSeq}`;
    const today = new Date().toISOString().slice(0, 10);

    Modal.open({
      title: 'Generate Soaking Track ID',
      size: 'full',
      content: `
        <form id="form-gen-soaking-track" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <!-- 1. PRODUCTION PLANT * -->
          <div>
            <label for="gst-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
            <select id="gst-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
              <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
              <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
              <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
              <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
            </select>
          </div>

          <!-- 2. ARRIVAL DATE * -->
          <div>
            <label for="gst-arrival-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="gst-arrival-date" name="arrivalDate" type="date" value="${today}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <!-- 3. TRACK CODE * -->
          <div>
            <label for="gst-trackcode" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK CODE <span class="text-[#DE350B]">*</span></label>
            <input id="gst-trackcode" name="trackCode" type="text" value="${defaultTrackCode}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none" required />
          </div>

          <!-- 4. SOAKING DATE * -->
          <div>
            <label for="gst-soak-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKING DATE <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="gst-soak-date" name="soakingDate" type="date" value="${today}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <!-- 5. START TIME * -->
          <div>
            <label for="gst-start-time" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">START TIME <span class="text-[#DE350B]">*</span></label>
            <input id="gst-start-time" name="startTime" type="time" value="08:30" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <!-- 6. TIME PERIOD * -->
          <div>
            <label for="gst-time-period" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TIME PERIOD <span class="text-[#DE350B]">*</span></label>
            <select id="gst-time-period" name="timePeriod" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="30 Mins">30 Mins</option>
              <option value="45 Mins" selected>45 Mins</option>
              <option value="60 Mins">60 Mins</option>
              <option value="75 Mins">75 Mins</option>
              <option value="90 Mins">90 Mins</option>
            </select>
          </div>

          <!-- 7. CHEMICAL * -->
          <div>
            <label for="gst-chemical" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL <span class="text-[#DE350B]">*</span></label>
            <select id="gst-chemical" name="chemical" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Non-Phosphate Blend" selected>Non-Phosphate Blend</option>
              <option value="Food Grade STPP (3%)">Food Grade STPP (3%)</option>
              <option value="Fresh Raw (Untreated)">Fresh Raw (Untreated)</option>
              <option value="Citric Acid & Salt Blend">Citric Acid & Salt Blend</option>
              <option value="STPP Controlled Soak">STPP Controlled Soak</option>
              <option value="Non-Phosphate Moisture Retainer">Non-Phosphate Moisture Retainer</option>
            </select>
          </div>

          <!-- 8. CHEMICAL QUANTITY(KGS) * -->
          <div>
            <label for="gst-chem-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL QUANTITY(KGS) <span class="text-[#DE350B]">*</span></label>
            <input id="gst-chem-qty" name="chemicalQty" type="number" step="0.1" min="0" value="15.0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <!-- 9. SALT(KGS) * -->
          <div>
            <label for="gst-salt-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SALT(KGS) <span class="text-[#DE350B]">*</span></label>
            <input id="gst-salt-qty" name="saltQty" type="number" step="0.1" min="0" value="10.0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <!-- 10. REMARKS -->
          <div>
            <label for="gst-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
            <input id="gst-remarks" name="remarks" type="text" placeholder="Observations, temperature notes" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 11. SOURCE COUNT / IN COUNT -->
          <div>
            <label for="gst-source-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOURCE COUNT / IN COUNT</label>
            <input id="gst-source-count" name="sourceCount" type="text" value="31/40" placeholder="e.g. 31/40" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 12. VARIETY * -->
          <div>
            <label for="gst-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B]">*</span></label>
            <select id="gst-variety" name="variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Vannamei (VM)" selected>Vannamei (VM)</option>
              <option value="Black Tiger (BT)">Black Tiger (BT)</option>
              <option value="Sea White">Sea White</option>
              <option value="Scampi">Scampi</option>
            </select>
          </div>

          <!-- 13. GRADE -->
          <div>
            <label for="gst-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
            <select id="gst-grade" name="grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
              <option value="Grade 1 (21/25)" selected>Grade 1 (21/25)</option>
              <option value="Grade A (16/20)">Grade A (16/20)</option>
              <option value="Grade 1 (26/30)">Grade 1 (26/30)</option>
              <option value="Grade 2 (31/40)">Grade 2 (31/40)</option>
              <option value="Export Premium">Export Premium</option>
            </select>
          </div>

          <!-- 14. SOAKINGTREATMENT * -->
          <div>
            <label for="gst-treatment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKINGTREATMENT <span class="text-[#DE350B]">*</span></label>
            <select id="gst-treatment" name="soakingTreatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Non-Phosphate" selected>Non-Phosphate</option>
              <option value="Food Grade STPP">Food Grade STPP</option>
              <option value="Fresh Raw">Fresh Raw</option>
              <option value="Citric Acid & Salt">Citric Acid & Salt</option>
              <option value="STPP Controlled">STPP Controlled</option>
            </select>
          </div>

          <!-- 15. LINE LIST -->
          <div>
            <label for="gst-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LINE LIST</label>
            <select id="gst-line" name="lineList" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
              <option value="Line #1" selected>Line #1</option>
              <option value="Line #2">Line #2</option>
              <option value="Line #3">Line #3</option>
              <option value="Line #4">Line #4</option>
            </select>
          </div>

          <!-- 16. TUB NUMBER -->
          <div>
            <label for="gst-tub" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TUB NUMBER</label>
            <input id="gst-tub" name="tubNumber" type="text" value="Tub-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 17. IN COUNT -->
          <div>
            <label for="gst-incount" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">IN COUNT</label>
            <input id="gst-incount" name="inCount" type="number" value="35" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 18. IN QUANTITY -->
          <div>
            <label for="gst-inqty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">IN QUANTITY</label>
            <input id="gst-inqty" name="inQuantity" type="text" value="450.0 Kgs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 19. OUT COUNT -->
          <div>
            <label for="gst-outcount" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">OUT COUNT</label>
            <input id="gst-outcount" name="outCount" type="number" value="32" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 20. ICE QTY % -->
          <div>
            <label for="gst-iceqty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ICE QTY %</label>
            <input id="gst-iceqty" name="iceQtyPct" type="text" value="15%" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 21. WATER QTY % -->
          <div>
            <label for="gst-waterqty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">WATER QTY %</label>
            <input id="gst-waterqty" name="waterQtyPct" type="text" value="80%" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 22. SHIFT -->
          <div>
            <label for="gst-form-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT</label>
            <select id="gst-form-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
              <option value="Shift A (Day)" selected>Shift A (Day)</option>
              <option value="Shift B (Evening)">Shift B (Evening)</option>
              <option value="Shift C (Night)">Shift C (Night)</option>
            </select>
          </div>

          <!-- 23. SOAKING IN TEMPERATURE -->
          <div>
            <label for="gst-intemp" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKING IN TEMPERATURE</label>
            <input id="gst-intemp" name="soakingInTemp" type="text" value="2.5°C" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 24. SOAKING OUT TEMPERATURE -->
          <div>
            <label for="gst-outtemp" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKING OUT TEMPERATURE</label>
            <input id="gst-outtemp" name="soakingOutTemp" type="text" value="1.8°C" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
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

            // Confirmation Popup Before Saving
            Modal.confirm({
              title: 'Confirm Soaking Track ID Generation',
              message: `Are you sure you want to generate Soaking Track ID "${values.trackCode}" for ${values.productionPlant}? Please confirm that all chemical and temperature parameters are correct.`,
              confirmLabel: 'Confirm & Generate',
              type: 'primary',
              onConfirm: () => {
                const newRow = {
                  sNo: this.state.soakingTrackIds.length + 1,
                  id: values.trackCode,
                  trackCode: values.trackCode,
                  trackId: values.trackCode,
                  plant: values.productionPlant,
                  productionPlant: values.productionPlant,
                  arrivalDate: values.arrivalDate,
                  soakingDate: values.soakingDate,
                  startTime: values.startTime,
                  timePeriod: values.timePeriod,
                  chemical: values.chemical,
                  chemicalQty: Number(values.chemicalQty || 0),
                  saltQty: Number(values.saltQty || 0),
                  remarks: values.remarks || 'Standard soaking operation recorded',
                  sourceCount: values.sourceCount || '31/40',
                  variety: values.variety,
                  typeOfProduct: 'HLSO',
                  treatment: values.soakingTreatment,
                  soakingTreatment: values.soakingTreatment,
                  grade: values.grade || 'Grade 1 (21/25)',
                  lineList: values.lineList || 'Line #1',
                  tubNumber: values.tubNumber || 'Tub-01',
                  pickUp: '4.5%',
                  inCount: Number(values.inCount || 35),
                  inQuantity: values.inQuantity || '450.0 Kgs',
                  outCount: Number(values.outCount || 32),
                  iceQtyPct: values.iceQtyPct || '15%',
                  waterQtyPct: values.waterQtyPct || '80%',
                  shift: values.shift,
                  soakingInTemp: values.soakingInTemp || '2.5°C',
                  soakingOutTemp: values.soakingOutTemp || '1.8°C',
                  status: 'COMPLETED'
                };

                this.state.soakingTrackIds.unshift(newRow);
                Modal.close(); // Close form modal
                this.renderSoakingTrackIdScreen(container);
                Toast.show(`Soaking Track ID ${newRow.trackCode} generated successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  // Edit Soaking Modal
  showEditSoakingModal(row, container) {
    Modal.open({
      title: `Edit Soaking Track Code: ${row.trackCode || row.trackId}`,
      size: 'full',
      content: `
        <form id="form-edit-soaking-track" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="est-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
            <select id="est-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['DFL UNIT-5 (JPT)', 'DFL UNIT-3 (PSP)', 'DFL UNIT-4 (PND)', 'DFL UNIT-1 (VSP)', 'DFL UNIT-6 (JPT-II)', 'DFL UNIT-2 (KKD)'].map(p => `<option value="${p}" ${p === (row.plant || row.productionPlant) ? 'selected' : ''}>${p}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-arrival-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="est-arrival-date" name="arrivalDate" type="date" value="${row.arrivalDate || ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <div>
            <label for="est-trackcode" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK CODE <span class="text-[#DE350B]">*</span></label>
            <input id="est-trackcode" name="trackCode" type="text" value="${row.trackCode || row.trackId}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none" required />
          </div>

          <div>
            <label for="est-soak-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKING DATE <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input id="est-soak-date" name="soakingDate" type="date" value="${row.soakingDate || ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <div>
            <label for="est-start-time" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">START TIME <span class="text-[#DE350B]">*</span></label>
            <input id="est-start-time" name="startTime" type="time" value="${row.startTime || '08:30'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="est-time-period" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TIME PERIOD <span class="text-[#DE350B]">*</span></label>
            <select id="est-time-period" name="timePeriod" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['30 Mins', '45 Mins', '60 Mins', '75 Mins', '90 Mins'].map(t => `<option value="${t}" ${t === row.timePeriod ? 'selected' : ''}>${t}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-chemical" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL <span class="text-[#DE350B]">*</span></label>
            <select id="est-chemical" name="chemical" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Non-Phosphate Blend', 'Food Grade STPP (3%)', 'Fresh Raw (Untreated)', 'Citric Acid & Salt Blend', 'STPP Controlled Soak', 'Non-Phosphate Moisture Retainer'].map(c => `<option value="${c}" ${c === row.chemical ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-chem-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL QUANTITY(KGS) <span class="text-[#DE350B]">*</span></label>
            <input id="est-chem-qty" name="chemicalQty" type="number" step="0.1" min="0" value="${row.chemicalQty ?? 15}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="est-salt-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SALT(KGS) <span class="text-[#DE350B]">*</span></label>
            <input id="est-salt-qty" name="saltQty" type="number" step="0.1" min="0" value="${row.saltQty ?? 10}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="est-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
            <input id="est-remarks" name="remarks" type="text" value="${this.escape(row.remarks || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="est-source-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOURCE COUNT / IN COUNT</label>
            <input id="est-source-count" name="sourceCount" type="text" value="${this.escape(row.sourceCount || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="est-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B]">*</span></label>
            <select id="est-variety" name="variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Vannamei (VM)', 'Black Tiger (BT)', 'Sea White', 'Scampi'].map(v => `<option value="${v}" ${v === row.variety ? 'selected' : ''}>${v}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
            <input id="est-grade" name="grade" type="text" value="${this.escape(row.grade || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="est-treatment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKINGTREATMENT <span class="text-[#DE350B]">*</span></label>
            <select id="est-treatment" name="soakingTreatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Non-Phosphate', 'Food Grade STPP', 'Fresh Raw', 'Citric Acid & Salt', 'STPP Controlled'].map(t => `<option value="${t}" ${t === (row.treatment || row.soakingTreatment) ? 'selected' : ''}>${t}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LINE LIST</label>
            <select id="est-line" name="lineList" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
              ${['Line #1', 'Line #2', 'Line #3', 'Line #4'].map(l => `<option value="${l}" ${l === row.lineList ? 'selected' : ''}>${l}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-tub" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TUB NUMBER</label>
            <input id="est-tub" name="tubNumber" type="text" value="${this.escape(row.tubNumber || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="est-incount" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">IN COUNT</label>
            <input id="est-incount" name="inCount" type="number" value="${row.inCount ?? ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="est-inqty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">IN QUANTITY</label>
            <input id="est-inqty" name="inQuantity" type="text" value="${this.escape(row.inQuantity || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="est-outcount" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">OUT COUNT</label>
            <input id="est-outcount" name="outCount" type="number" value="${row.outCount ?? ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="est-iceqty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ICE QTY %</label>
            <input id="est-iceqty" name="iceQtyPct" type="text" value="${this.escape(row.iceQtyPct || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="est-waterqty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">WATER QTY %</label>
            <input id="est-waterqty" name="waterQtyPct" type="text" value="${this.escape(row.waterQtyPct || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="est-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT</label>
            <select id="est-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
              ${['Shift A (Day)', 'Shift B (Evening)', 'Shift C (Night)'].map(s => `<option value="${s}" ${s === row.shift ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="est-intemp" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKING IN TEMPERATURE</label>
            <input id="est-intemp" name="soakingInTemp" type="text" value="${this.escape(row.soakingInTemp || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="est-outtemp" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKING OUT TEMPERATURE</label>
            <input id="est-outtemp" name="soakingOutTemp" type="text" value="${this.escape(row.soakingOutTemp || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
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

            Modal.confirm({
              title: 'Confirm Update',
              message: `Save changes for Soaking Track Code ${row.trackCode || row.trackId}?`,
              confirmLabel: 'Save',
              type: 'primary',
              onConfirm: () => {
                Object.assign(row, values, {
                  plant: values.productionPlant,
                  treatment: values.soakingTreatment,
                  chemicalQty: Number(values.chemicalQty || 0),
                  saltQty: Number(values.saltQty || 0),
                  inCount: Number(values.inCount || 0),
                  outCount: Number(values.outCount || 0)
                });
                Modal.close();
                this.renderSoakingTrackIdScreen(container);
                Toast.show(`Track Code ${row.trackCode || row.trackId} updated successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  // View Details Modal (Comprehensive Structured View)
  showSoakingDetails(row) {
    Modal.open({
      title: `Soaking Track ID Details: ${row.trackCode || row.trackId}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top Hero / Batch Summary Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${this.escape(row.trackCode || row.trackId)}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase ${
                    row.status === 'COMPLETED' ? 'bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]' :
                    row.status === 'ACTIVE' ? 'bg-[#E0F2FE] text-[#0369A1] border border-[#7DD3FC]' :
                    'bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]'
                  }">${this.escape(row.status || 'COMPLETED')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${this.escape(row.typeOfProduct || 'HLSO')}</span>
                </div>
                <p class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Plant: <strong class="text-[#334155]">${this.escape(row.plant || row.productionPlant)}</strong></span>
                  <span>&bull;</span>
                  <span>Arrival: <strong class="text-[#334155]">${this.escape(row.arrivalDate || '-')}</strong></span>
                  <span>&bull;</span>
                  <span>Soaked: <strong class="text-[#334155]">${this.escape(row.soakingDate || '-')}</strong> (${this.escape(row.shift || '-')})</span>
                </p>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PickUp</span>
                <span class="font-mono font-extrabold text-xs text-[#00875A]">${this.escape(row.pickUp || '0%')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">In Qty</span>
                <span class="font-mono font-bold text-xs text-[#172B4D]">${this.escape(row.inQuantity || '-')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Out Temp</span>
                <span class="font-mono font-bold text-xs text-[#0284C7]">${this.escape(row.soakingOutTemp || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Batch & Plant Identification -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Batch &amp; Plant Identification</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Track Code</span>
                <span class="font-mono font-bold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.trackCode || row.trackId)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Production Plant</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.plant || row.productionPlant)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Arrival Date</span>
                <span class="font-medium text-[#172B4D] text-xs block mt-0.5">${this.escape(row.arrivalDate || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Soaking Date</span>
                <span class="font-medium text-[#172B4D] text-xs block mt-0.5">${this.escape(row.soakingDate || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Timing, Shifts & Line Allocation -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Timing &amp; Line Allocation</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Start Time</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.startTime || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Time Period / Duration</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.timePeriod || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Shift</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.shift || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Line List / Tub Number</span>
                <span class="font-semibold text-[#00A4B7] text-xs block mt-0.5">${this.escape(row.lineList || '-')} <span class="text-[#64748B]">(${this.escape(row.tubNumber || '-')})</span></span>
              </div>
            </div>
          </div>

          <!-- Section 3: Chemical & Salt Formulations -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-xs">3</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Chemical &amp; Salt Formulation</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Chemical Formulation</span>
                <span class="font-semibold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.chemical || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Chemical Quantity (Kgs)</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${Number(row.chemicalQty || 0).toFixed(1)} Kgs</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Salt Quantity (Kgs)</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${Number(row.saltQty || 0).toFixed(1)} Kgs</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Soaking Treatment</span>
                <span class="font-semibold text-[#00875A] text-xs block mt-0.5">${this.escape(row.treatment || row.soakingTreatment || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 4: Product Specifications & Yield -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-xs">4</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Product Specifications, Yield &amp; Pickup</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Variety / Species</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.variety || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Type Of Product</span>
                <span class="font-semibold text-[#403294] text-xs block mt-0.5">${this.escape(row.typeOfProduct || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Grade</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.grade || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PickUp (%)</span>
                <span class="font-mono font-extrabold text-[#00875A] text-xs block mt-0.5">${this.escape(row.pickUp || '0%')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Source Count</span>
                <span class="font-mono font-medium text-[#172B4D] text-xs block mt-0.5">${this.escape(row.sourceCount || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">In Count / In Quantity</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${row.inCount ?? '-'} <span class="text-[#64748B]">(${this.escape(row.inQuantity || '-')})</span></span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Out Count</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${row.outCount ?? '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Ice / Water Qty %</span>
                <span class="font-mono font-semibold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.iceQtyPct || '-')} / ${this.escape(row.waterQtyPct || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 5: Temperatures & Remarks -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-xs">5</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Temperature Controls &amp; Remarks</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div class="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Soaking In Temperature</span>
                <span class="font-mono font-extrabold text-[#00875A] text-sm block mt-1">${this.escape(row.soakingInTemp || '-')}</span>
              </div>
              <div class="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Soaking Out Temperature</span>
                <span class="font-mono font-extrabold text-[#00875A] text-sm block mt-1">${this.escape(row.soakingOutTemp || '-')}</span>
              </div>
              <div class="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Remarks</span>
                <span class="text-[#334155] text-xs font-medium block mt-1">${this.escape(row.remarks || 'Standard soaking operation completed and verified.')}</span>
              </div>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Print Batch Slip', type: 'secondary', onClick: () => window.print() },
        { label: 'Close', type: 'secondary', onClick: modal => modal.close() }
      ]
    });
  },

  deleteSoakingRow(row, container) {
    Modal.confirm({
      title: 'Confirm Deletion',
      message: `Are you sure you want to permanently delete Soaking Track Code "${row.trackCode || row.trackId}"? This record and associated yield tracking will be removed.`,
      confirmLabel: 'Delete Record',
      type: 'danger',
      onConfirm: () => {
        const idx = this.state.soakingTrackIds.findIndex(item => (item.trackCode === row.trackCode || item.trackId === row.trackId));
        if (idx !== -1) {
          this.state.soakingTrackIds.splice(idx, 1);
          this.renderSoakingTrackIdScreen(container);
          Toast.show(`Track Code ${row.trackCode || row.trackId} deleted successfully`, 'success');
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

        <!-- Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <div class="inline-flex items-center gap-2">
              <button type="button" id="freezetrack-top-reset-btn" class="dt-top-filter-reset-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="freezetrack-top-toggle-btn" class="dt-top-filter-toggle-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 transform transition-transform duration-200" id="freezetrack-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

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

            <!-- Search Action Button -->
            <div class="flex items-end">
              <button type="button" id="freezetrack-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]" title="Apply Filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="freeze-trackid-table-container"></div>
      </div>
    `;

    document.getElementById('btn-gen-freeze-trackid')?.addEventListener('click', () => {
      this.showGenerateFreezingModal(container);
    });

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

    ['fz-filter-plant', 'fz-filter-shift', 'fz-filter-supervisor', 'fz-filter-method', 'fz-filter-status'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', applyFilters);
    });
    ['fz-filter-arrival-date', 'fz-filter-freeze-date', 'fz-filter-trackid'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', applyFilters);
      document.getElementById(id)?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyFilters();
        }
      });
    });

    // Freezing Filter Search Button
    document.getElementById('freezetrack-filter-search-btn')?.addEventListener('click', () => {
      applyFilters();
      Toast.show('Filters applied', 'info');
    });

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
            render: (v) => `<span class="font-mono font-bold text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap cursor-pointer hover:underline">${this.escape(v)}</span>`
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
            label: 'Edit',
            icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: row => this.showEditFreezingModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-3.5 h-3.5 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: row => this.deleteFreezingRow(row, container)
          }
        ],
        onRowClick: (row) => this.showFreezingDetails(row)
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

            Modal.confirm({
              title: 'Confirm Freezing Track ID Generation',
              message: `Are you sure you want to generate Freezing Track ID "${values.trackId}" for ${values.productionPlant}?`,
              confirmLabel: 'Confirm & Save',
              type: 'primary',
              onConfirm: () => {
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
            });
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

            Modal.confirm({
              title: 'Confirm Update',
              message: `Save changes for Freezing Track ID ${row.trackId}?`,
              confirmLabel: 'Save',
              type: 'primary',
              onConfirm: () => {
                Object.assign(row, values, {
                  coreTemp: Number(values.coreTemp || -22.0)
                });
                Modal.close();
                this.renderFreezingTrackIdScreen(container);
                Toast.show(`Track ID ${row.trackId} updated successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  showFreezingDetails(row) {
    Modal.open({
      title: `Freezing Track ID Details: ${row.trackId}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top Hero / Freezing Summary Card -->
          <div class="bg-gradient-to-r from-[#F0FDF4] to-[#F8FAFC] p-4 rounded-xl border border-[#BBF7D0] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00875A] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${this.escape(row.trackId)}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase ${
                    row.status === 'COMPLETED' ? 'bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]' :
                    row.status === 'ACTIVE' ? 'bg-[#E0F2FE] text-[#0369A1] border border-[#7DD3FC]' :
                    'bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]'
                  }">${this.escape(row.status || 'COMPLETED')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]">${this.escape(row.freezingMethod || 'IQF')}</span>
                </div>
                <p class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Plant: <strong class="text-[#334155]">${this.escape(row.productionPlant)}</strong></span>
                  <span>&bull;</span>
                  <span>Arrival: <strong class="text-[#334155]">${this.escape(row.arrivalDate || '-')}</strong></span>
                  <span>&bull;</span>
                  <span>Frozen: <strong class="text-[#334155]">${this.escape(row.freezingDate || '-')}</strong> (${this.escape(row.shift || '-')})</span>
                </p>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Core Temp</span>
                <span class="font-mono font-extrabold text-xs text-[#0284C7]">${Number(row.coreTemp || 0).toFixed(1)}°C</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Line / Unit</span>
                <span class="font-semibold text-xs text-[#172B4D]">${this.escape(row.line || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Facility & Line Assignment -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Facility &amp; Line Allocation</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Track ID</span>
                <span class="font-mono font-bold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.trackId)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Production Plant</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.productionPlant)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Arrival Date</span>
                <span class="font-medium text-[#172B4D] text-xs block mt-0.5">${this.escape(row.arrivalDate || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Freezing Date</span>
                <span class="font-medium text-[#172B4D] text-xs block mt-0.5">${this.escape(row.freezingDate || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Shift, Method & Temperature Monitoring -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Operations &amp; Temperature Control</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Shift</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.shift || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Supervisor</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.supervisor || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Freezer Line / Unit</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.line || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Freezing Method</span>
                <span class="font-semibold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.freezingMethod || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 3: Core Temp & Quality Remarks -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">3</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Quality Audit &amp; Remarks</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div class="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Exit Core Temperature</span>
                <span class="font-mono font-extrabold text-[#0284C7] text-sm block mt-1">${Number(row.coreTemp || 0).toFixed(1)}°C</span>
              </div>
              <div class="sm:col-span-2 p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Operational Remarks</span>
                <span class="text-[#334155] text-xs font-medium block mt-1">${this.escape(row.remarks || 'Standard freezing run compliant with QA parameters.')}</span>
              </div>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Print Freezing Log', type: 'secondary', onClick: () => window.print() },
        { label: 'Close', type: 'secondary', onClick: modal => modal.close() }
      ]
    });
  },

  deleteFreezingRow(row, container) {
    Modal.confirm({
      title: 'Confirm Deletion',
      message: `Are you sure you want to permanently delete Freezing Track ID "${row.trackId}"? This action cannot be undone.`,
      confirmLabel: 'Delete Record',
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
