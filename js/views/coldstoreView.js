// Coldstore Module Views (Devi Fisheries Enterprise ERP)
// Submenus: Dashboard, Stock, Orders, Store, Stock Approvals, IBT, Shipment

import { TabBar } from '../components/tabBar.js';
import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';
import { NAV_HIERARCHY } from '../components/sidebar.js';

export const ColdstoreView = {
  state: {
    // 1. Dashboard & Store Chambers
    chambers: [
      { id: 'CS-01', name: 'Coldstore Chamber #1 (IQF)', temp: -22.4, targetTemp: -22.0, totalCapacityMt: 450, currentStockMt: 312.4, utilizationPct: 69.4, humidityPct: 88, status: 'OPTIMAL' },
      { id: 'CS-02', name: 'Coldstore Chamber #2 (Block/Plate)', temp: -24.8, targetTemp: -25.0, totalCapacityMt: 600, currentStockMt: 498.2, utilizationPct: 83.0, humidityPct: 86, status: 'OPTIMAL' },
      { id: 'CS-03', name: 'Deep Freeze Vault #3 (Export Staging)', temp: -28.2, targetTemp: -28.0, totalCapacityMt: 200, currentStockMt: 84.5, utilizationPct: 42.2, humidityPct: 90, status: 'OPTIMAL' }
    ],

    // 2. Stock Inventory
    stockList: [
      { id: 1, palletId: 'PAL-2026-0441', chamber: 'Chamber #1 (IQF)', rack: 'RACK-A1-T1', product: 'Vannamei PD IQF', grade: '31/40', cartons: 48, netWeightKg: 480.0, dateInward: '2026-10-28', status: 'Stored' },
      { id: 2, palletId: 'PAL-2026-0442', chamber: 'Chamber #1 (IQF)', rack: 'RACK-A1-T2', product: 'Vannamei HOSO IQF', grade: '16/20', cartons: 56, netWeightKg: 560.0, dateInward: '2026-10-27', status: 'Stored' },
      { id: 3, palletId: 'PAL-2026-0443', chamber: 'Chamber #2 (Block)', rack: 'RACK-B1-T1', product: 'Black Tiger Block Frozen', grade: '21/25', cartons: 60, netWeightKg: 600.0, dateInward: '2026-10-26', status: 'Allocated' },
      { id: 4, palletId: 'PAL-2026-0444', chamber: 'Chamber #2 (Block)', rack: 'RACK-B2-T3', product: 'Vannamei HLSO Block', grade: '26/30', cartons: 72, netWeightKg: 720.0, dateInward: '2026-10-26', status: 'Stored' },
      { id: 5, palletId: 'PAL-2026-0445', chamber: 'Chamber #3 (Staging)', rack: 'RACK-D1-T1', product: 'Sea Pearl Cooked PDTO', grade: '41/50', cartons: 40, netWeightKg: 400.0, dateInward: '2026-10-25', status: 'Staged for Export' },
      { id: 6, palletId: 'PAL-2026-0446', chamber: 'Chamber #1 (IQF)', rack: 'RACK-C1-T2', product: 'Vannamei Butterfly IQF', grade: '31/40', cartons: 50, netWeightKg: 500.0, dateInward: '2026-10-25', status: 'Stored' },
      { id: 7, palletId: 'PAL-2026-0447', chamber: 'Chamber #2 (Block)', rack: 'RACK-B3-T2', product: 'Scampi Headless Block', grade: '11/15', cartons: 36, netWeightKg: 360.0, dateInward: '2026-10-24', status: 'Under QC Hold' }
    ],

    // 3. Orders & Outward Allocations
    orders: [
      { id: 1, orderNo: 'ORD-US-2026-891', buyer: 'Pacific Seafood Group Inc.', country: 'USA', product: 'Vannamei PD IQF 31/40', orderedMt: 24.0, allocatedMt: 24.0, chamber: 'Vault #3 Staging', shipDate: '2026-11-04', status: 'Ready for Stuffing' },
      { id: 2, orderNo: 'ORD-JPN-2026-442', buyer: 'Tokyo Global Fishery Co.', country: 'Japan', product: 'Black Tiger Block 16/20', orderedMt: 18.5, allocatedMt: 15.0, chamber: 'Chamber #2', shipDate: '2026-11-08', status: 'Partial Allocated' },
      { id: 3, orderNo: 'ORD-EU-2026-219', buyer: 'Nordic Crustacean B.V.', country: 'Netherlands', product: 'Vannamei HOSO IQF 26/30', orderedMt: 22.0, allocatedMt: 22.0, chamber: 'Vault #3 Staging', shipDate: '2026-11-12', status: 'Ready for Stuffing' },
      { id: 4, orderNo: 'ORD-UK-2026-105', buyer: 'British Ocean Foods Ltd.', country: 'UK', product: 'Vannamei Cooked PDTO', orderedMt: 12.0, allocatedMt: 8.0, chamber: 'Chamber #1', shipDate: '2026-11-15', status: 'In Allocation' }
    ],

    // 4. Stock Approvals
    stockApprovals: [
      { id: 1, approvalId: 'APPR-CS-2026-101', intakeDate: '2026-10-28', plant: 'DFL UNIT-5 (JPT)', lotNo: 'LOT-FZ-2026-301', product: 'Vannamei IQF 31/40', cartons: 48, netWeightKg: 480.0, shift: 'Shift A (Day)', supervisor: 'K. Rama Rao', status: 'Approved' },
      { id: 2, approvalId: 'APPR-CS-2026-102', intakeDate: '2026-10-28', plant: 'DFL UNIT-5 (JPT)', lotNo: 'LOT-FZ-2026-302', product: 'Black Tiger Block 21/25', cartons: 60, netWeightKg: 600.0, shift: 'Shift B (Evening)', supervisor: 'P. Satyanarayana', status: 'Pending Review' },
      { id: 3, approvalId: 'APPR-CS-2026-103', intakeDate: '2026-10-27', plant: 'DFL UNIT-4 (PND)', lotNo: 'LOT-FZ-2026-299', product: 'Vannamei HOSO IQF 16/20', cartons: 56, netWeightKg: 560.0, shift: 'Shift A (Day)', supervisor: 'Anita P. Rao', status: 'Approved' },
      { id: 4, approvalId: 'APPR-CS-2026-104', intakeDate: '2026-10-27', plant: 'DFL UNIT-3 (PSP)', lotNo: 'LOT-FZ-2026-298', product: 'Vannamei HLSO Block 26/30', cartons: 72, netWeightKg: 720.0, shift: 'Shift C (Night)', supervisor: 'M. Krishna', status: 'Pending Review' }
    ],

    // 5. IBT (Inter-Branch Transfers)
    ibtTransfers: [
      { id: 1, ibtCode: 'IBT-2026-088', transferDate: '2026-10-28', sourcePlant: 'DFL UNIT-5 (JPT)', destPlant: 'DFL UNIT-4 (PND)', product: 'Vannamei PD IQF 31/40', pallets: 12, weightMt: 5.76, vehicleNo: 'AP 39 TB 4412', status: 'In Transit' },
      { id: 2, ibtCode: 'IBT-2026-087', transferDate: '2026-10-27', sourcePlant: 'DFL UNIT-3 (PSP)', destPlant: 'DFL UNIT-5 (JPT)', product: 'Black Tiger Block 16/20', pallets: 16, weightMt: 8.96, vehicleNo: 'AP 16 TX 9921', status: 'Received & Stored' },
      { id: 3, ibtCode: 'IBT-2026-086', transferDate: '2026-10-25', sourcePlant: 'DFL UNIT-1 (VSP)', destPlant: 'DFL UNIT-5 (JPT)', product: 'Sea Pearl Cooked PDTO', pallets: 8, weightMt: 3.20, vehicleNo: 'AP 31 TC 1104', status: 'Received & Stored' },
      { id: 4, ibtCode: 'IBT-2026-085', transferDate: '2026-10-24', sourcePlant: 'DFL UNIT-5 (JPT)', destPlant: 'DFL UNIT-6 (JPT-II)', product: 'Vannamei HLSO Block', pallets: 20, weightMt: 12.00, vehicleNo: 'AP 39 TB 5590', status: 'Gate Pass Dispatched' }
    ],

    // 6. Shipment
    shipments: [
      { id: 1, shipmentNo: 'SHP-2026-401', containerNo: 'MSKU-982104-2', sealNo: 'ML-IN-90812', bookingRef: 'BK-MAERSK-8819', port: 'Rotterdam (NLRTM)', line: 'Maersk Line', setTemp: -24.0, cartons: 1800, netWeightMt: 21.6, status: 'Loaded & Sealed' },
      { id: 2, shipmentNo: 'SHP-2026-402', containerNo: 'ONEU-771239-0', sealNo: 'ON-IN-44219', bookingRef: 'BK-ONE-5520', port: 'Tokyo (JPTYO)', line: 'Ocean Network Express', setTemp: -25.0, cartons: 1550, netWeightMt: 18.6, status: 'Staging in Vault #3' },
      { id: 3, shipmentNo: 'SHP-2026-403', containerNo: 'CMAU-441209-8', sealNo: 'CM-IN-77102', bookingRef: 'BK-CMA-3310', port: 'Los Angeles (USLAX)', line: 'CMA CGM', setTemp: -22.0, cartons: 2100, netWeightMt: 24.2, status: 'Gate Pass Generated' },
      { id: 4, shipmentNo: 'SHP-2026-404', containerNo: 'MSKU-330192-5', sealNo: 'ML-IN-11928', bookingRef: 'BK-MAERSK-8902', port: 'Felixstowe (GBFXT)', line: 'Maersk Line', setTemp: -24.0, cartons: 1200, netWeightMt: 14.4, status: 'Booking Confirmed' }
    ]
  },

  render(containerId, subPage = 'overview', activeHash = '#/coldstore/dashboard/overview') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const clean = (activeHash || '').replace(/^#\/?/, '').replace(/^\/+/, '');
    const parts = clean.split('/');
    const modId = parts[0] || 'coldstore';
    const subId = parts[1] || 'dashboard';

    container.innerHTML = `
      <div id="coldstore-tab-bar-container"></div>
      <div id="coldstore-subpage-content" class="space-y-4"></div>
    `;

    TabBar.render('coldstore-tab-bar-container', activeHash);
    const contentEl = document.getElementById('coldstore-subpage-content');
    if (!contentEl) return;

    switch (subId) {
      case 'dashboard':
        this.renderDashboard(contentEl);
        break;
      case 'stock':
        this.renderStock(contentEl);
        break;
      case 'orders':
        this.renderOrders(contentEl);
        break;
      case 'store':
        this.renderStore(contentEl);
        break;
      case 'stock-approvals':
        this.renderStockApprovals(contentEl);
        break;
      case 'ibt':
        this.renderIbt(contentEl);
        break;
      case 'shipment':
        this.renderShipment(contentEl);
        break;
      default:
        this.renderDashboard(contentEl);
        break;
    }
  },

  // 1. DASHBOARD
  renderDashboard(container) {
    const totalStored = this.state.chambers.reduce((acc, c) => acc + c.currentStockMt, 0).toFixed(1);
    const totalCapacity = this.state.chambers.reduce((acc, c) => acc + c.totalCapacityMt, 0);
    const overallUtil = ((totalStored / totalCapacity) * 100).toFixed(1);

    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D]">Coldstore & Warehouse Dashboard</h1>
          <p class="text-xs text-[#6B778C] mt-0.5">Real-time cold chain telemetry, multi-chamber capacities & stock overview</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E3FCEF] text-[#006644] text-xs font-bold border border-[#ABF5D1]">
            <span class="w-2 h-2 rounded-full bg-[#00875A] animate-pulse"></span>
            Cold Chain Online (Optimal)
          </span>
        </div>
      </div>

      <!-- Key KPI Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-4">
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
          <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Total Stock Stored</div>
          <div class="text-2xl font-black text-[#172B4D] mt-1.5">${totalStored} <span class="text-xs font-bold text-[#6B778C]">MT</span></div>
          <div class="text-[11px] font-semibold text-[#00875A] mt-1">Across 3 Deep Freeze Vaults</div>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
          <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Total Chamber Capacity</div>
          <div class="text-2xl font-black text-[#0284C7] mt-1.5">${totalCapacity} <span class="text-xs font-bold text-[#6B778C]">MT</span></div>
          <div class="text-[11px] font-semibold text-[#5E6C84] mt-1">${overallUtil}% Capacity Occupancy</div>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
          <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Average Vault Temp</div>
          <div class="text-2xl font-black text-[#00875A] mt-1.5">-25.1 <span class="text-xs font-bold text-[#6B778C]">°C</span></div>
          <div class="text-[11px] font-semibold text-[#00875A] mt-1">Complies with EIC & USFDA Standards</div>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
          <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Active Pallets Stored</div>
          <div class="text-2xl font-black text-[#6554C0] mt-1.5">${this.state.stockList.length * 48} <span class="text-xs font-bold text-[#6B778C]">Cartons</span></div>
          <div class="text-[11px] font-semibold text-[#6554C0] mt-1">${this.state.stockList.length} Racked Pallets</div>
        </div>
      </div>

      <!-- Chamber Telemetry Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-5">
        ${this.state.chambers.map(ch => `
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 pb-2 border-b border-[#F4F5F7]">
                <h4 class="text-xs font-bold text-[#172B4D] truncate">${ch.name}</h4>
                <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">${ch.status}</span>
              </div>
              <div class="grid grid-cols-2 gap-2 mt-3 text-xs">
                <div>
                  <span class="text-[10px] font-bold text-[#5E6C84] uppercase">Live Temp</span>
                  <div class="text-base font-extrabold text-[#0284C7]">${ch.temp} °C</div>
                  <span class="text-[10px] text-[#6B778C]">Target: ${ch.targetTemp} °C</span>
                </div>
                <div>
                  <span class="text-[10px] font-bold text-[#5E6C84] uppercase">Humidity</span>
                  <div class="text-base font-extrabold text-[#172B4D]">${ch.humidityPct} %</div>
                  <span class="text-[10px] text-[#6B778C]">Sensors: Active</span>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-[#F4F5F7]">
              <div class="flex items-center justify-between text-[11px] font-semibold text-[#5E6C84] mb-1">
                <span>Stock Utilization</span>
                <span class="font-bold text-[#172B4D]">${ch.currentStockMt} / ${ch.totalCapacityMt} MT (${ch.utilizationPct}%)</span>
              </div>
              <div class="w-full h-2 bg-[#EBECF0] rounded-full overflow-hidden">
                <div class="h-full bg-[#0284C7] rounded-full" style="width: ${ch.utilizationPct}%"></div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Quick Recent Stock Table -->
      <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
        <div class="flex items-center justify-between pb-3 border-b border-[#F4F5F7] mb-3">
          <h3 class="text-sm font-bold text-[#172B4D]">Active Stored Pallets Registry</h3>
          <a href="#/coldstore/stock/stock-list" class="text-xs font-bold text-[#0284C7] hover:underline">View All Stock &rarr;</a>
        </div>
        <div id="cs-dashboard-table"></div>
      </div>
    `;

    new DataTable({
      containerId: 'cs-dashboard-table',
      searchable: true,
      exportable: true,
      pageSize: 5,
      columns: [
        { key: 'palletId', label: 'Pallet ID', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { key: 'chamber', label: 'Chamber' },
        { key: 'rack', label: 'Rack Location', render: v => `<span class="font-mono font-semibold">${v}</span>` },
        { key: 'product', label: 'Product Description' },
        { key: 'grade', label: 'Grade' },
        { key: 'cartons', label: 'Cartons', render: v => `<span class="font-mono font-bold text-[#00875A]">${v}</span>` },
        { key: 'netWeightKg', label: 'Net Wt (Kg)', render: v => `<span class="font-mono font-bold">${v}</span>` },
        { key: 'status', label: 'Status', render: v => `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${v === 'Stored' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#DEEBFF] text-[#0747A6]'}">${v}</span>` }
      ],
      data: this.state.stockList
    });
  },

  // 2. STOCK
  renderStock(container) {
    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D]">Coldstore Master Stock</h1>
          <p class="text-xs text-[#6B778C] mt-0.5">Comprehensive palletized stock inventory, storage racks, and carton lots</p>
        </div>
      </div>
      <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
        <div id="cs-stock-table"></div>
      </div>
    `;

    new DataTable({
      containerId: 'cs-stock-table',
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { key: 'id', label: 'S.No', render: (v, r, idx) => idx + 1 },
        { key: 'palletId', label: 'Pallet ID', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { key: 'chamber', label: 'Storage Chamber' },
        { key: 'rack', label: 'Rack Slot', render: v => `<span class="font-mono font-semibold">${v}</span>` },
        { key: 'product', label: 'Product Variety' },
        { key: 'grade', label: 'Grade' },
        { key: 'cartons', label: 'Cartons Stored', render: v => `<span class="font-mono font-bold text-[#00875A]">${v}</span>` },
        { key: 'netWeightKg', label: 'Net Weight (Kg)', render: v => `<span class="font-mono font-bold">${v.toFixed(1)}</span>` },
        { key: 'dateInward', label: 'Inward Date' },
        { key: 'status', label: 'Stock Status', render: v => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${v === 'Stored' ? 'bg-[#E3FCEF] text-[#006644]' : v === 'Allocated' ? 'bg-[#DEEBFF] text-[#0747A6]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${v}</span>` }
      ],
      data: this.state.stockList
    });
  },

  // 3. ORDERS
  renderOrders(container) {
    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D]">Outward Orders & Allocations</h1>
          <p class="text-xs text-[#6B778C] mt-0.5">Allocation of coldstore finished stock against export orders and customer PI</p>
        </div>
      </div>
      <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
        <div id="cs-orders-table"></div>
      </div>
    `;

    new DataTable({
      containerId: 'cs-orders-table',
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { key: 'id', label: 'S.No', render: (v, r, idx) => idx + 1 },
        { key: 'orderNo', label: 'Order No', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { key: 'buyer', label: 'Buyer / Customer' },
        { key: 'country', label: 'Destination' },
        { key: 'product', label: 'Product' },
        { key: 'orderedMt', label: 'Ordered MT', render: v => `<span class="font-mono font-bold">${v}</span>` },
        { key: 'allocatedMt', label: 'Allocated MT', render: v => `<span class="font-mono font-bold text-[#00875A]">${v}</span>` },
        { key: 'chamber', label: 'Staging Vault' },
        { key: 'shipDate', label: 'Target Ship Date' },
        { key: 'status', label: 'Status', render: v => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${v === 'Ready for Stuffing' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${v}</span>` }
      ],
      data: this.state.orders
    });
  },

  // 4. STORE
  renderStore(container) {
    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D]">Coldstore Chambers & Storage Layout</h1>
          <p class="text-xs text-[#6B778C] mt-0.5">Warehouse vault environmental status, temperature setpoints, and capacities</p>
        </div>
      </div>
      <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
        <div id="cs-store-table"></div>
      </div>
    `;

    new DataTable({
      containerId: 'cs-store-table',
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { key: 'id', label: 'Chamber ID', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { key: 'name', label: 'Chamber Name' },
        { key: 'targetTemp', label: 'Target Temp (°C)', render: v => `<span class="font-mono">${v}</span>` },
        { key: 'temp', label: 'Live Temp (°C)', render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { key: 'totalCapacityMt', label: 'Capacity (MT)', render: v => `<span class="font-mono font-bold">${v}</span>` },
        { key: 'currentStockMt', label: 'Stored (MT)', render: v => `<span class="font-mono font-bold text-[#00875A]">${v}</span>` },
        { key: 'utilizationPct', label: 'Occupancy', render: v => `<div class="flex items-center gap-2 font-mono font-bold"><div class="w-16 h-2 bg-[#EBECF0] rounded-full overflow-hidden"><div class="h-full bg-[#0284C7]" style="width:${v}%"></div></div><span>${v}%</span></div>` },
        { key: 'humidityPct', label: 'Humidity', render: v => `<span class="font-mono">${v}%</span>` },
        { key: 'status', label: 'Status', render: v => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644]">${v}</span>` }
      ],
      data: this.state.chambers
    });
  },

  // 5. STOCK APPROVALS
  renderStockApprovals(container) {
    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D]">Stock Inward Intake Approvals</h1>
          <p class="text-xs text-[#6B778C] mt-0.5">Authorization and sign-off for finished production intake lots entering coldstore</p>
        </div>
      </div>
      <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
        <div id="cs-approvals-table"></div>
      </div>
    `;

    new DataTable({
      containerId: 'cs-approvals-table',
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { key: 'id', label: 'S.No', render: (v, r, idx) => idx + 1 },
        { key: 'approvalId', label: 'Approval Code', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { key: 'intakeDate', label: 'Date' },
        { key: 'plant', label: 'Source Plant' },
        { key: 'lotNo', label: 'Lot No', render: v => `<span class="font-mono font-bold">${v}</span>` },
        { key: 'product', label: 'Product Category' },
        { key: 'cartons', label: 'Cartons', render: v => `<span class="font-mono font-bold text-[#00875A]">${v}</span>` },
        { key: 'netWeightKg', label: 'Net Wt (Kg)', render: v => `<span class="font-mono font-bold">${v.toFixed(1)}</span>` },
        { key: 'supervisor', label: 'Supervisor' },
        { key: 'status', label: 'Status', render: v => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${v === 'Approved' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${v}</span>` }
      ],
      data: this.state.stockApprovals
    });
  },

  // 6. IBT
  renderIbt(container) {
    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D]">Inter-Branch Transfers (IBT)</h1>
          <p class="text-xs text-[#6B778C] mt-0.5">Inter-plant cold storage product transfers, reefer truck tracking, and receipts</p>
        </div>
      </div>
      <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
        <div id="cs-ibt-table"></div>
      </div>
    `;

    new DataTable({
      containerId: 'cs-ibt-table',
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { key: 'id', label: 'S.No', render: (v, r, idx) => idx + 1 },
        { key: 'ibtCode', label: 'IBT Code', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { key: 'transferDate', label: 'Date' },
        { key: 'sourcePlant', label: 'Source Plant' },
        { key: 'destPlant', label: 'Destination Plant' },
        { key: 'product', label: 'Product Grade' },
        { key: 'pallets', label: 'Pallets', render: v => `<span class="font-mono font-bold">${v}</span>` },
        { key: 'weightMt', label: 'Transfer (MT)', render: v => `<span class="font-mono font-bold text-[#00875A]">${v.toFixed(2)}</span>` },
        { key: 'vehicleNo', label: 'Reefer Truck', render: v => `<span class="font-mono font-semibold">${v}</span>` },
        { key: 'status', label: 'Status', render: v => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${v === 'Received & Stored' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#DEEBFF] text-[#0747A6]'}">${v}</span>` }
      ],
      data: this.state.ibtTransfers
    });
  },

  // 7. SHIPMENT
  renderShipment(container) {
    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D]">Coldstore Shipments & Reefer Dispatch</h1>
          <p class="text-xs text-[#6B778C] mt-0.5">Export container stuffing, reefer temperature monitoring, and dispatch seals</p>
        </div>
      </div>
      <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
        <div id="cs-shipments-table"></div>
      </div>
    `;

    new DataTable({
      containerId: 'cs-shipments-table',
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { key: 'id', label: 'S.No', render: (v, r, idx) => idx + 1 },
        { key: 'shipmentNo', label: 'Shipment No', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { key: 'containerNo', label: 'Container No', render: v => `<span class="font-mono font-bold">${v}</span>` },
        { key: 'sealNo', label: 'Seal No', render: v => `<span class="font-mono font-semibold text-[#5E6C84]">${v}</span>` },
        { key: 'bookingRef', label: 'Booking Ref' },
        { key: 'port', label: 'Destination Port' },
        { key: 'line', label: 'Shipping Line' },
        { key: 'setTemp', label: 'Temp Set (°C)', render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { key: 'cartons', label: 'Cartons', render: v => `<span class="font-mono font-bold">${v}</span>` },
        { key: 'netWeightMt', label: 'Net (MT)', render: v => `<span class="font-mono font-bold text-[#00875A]">${v.toFixed(1)}</span>` },
        { key: 'status', label: 'Status', render: v => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${v === 'Loaded & Sealed' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${v}</span>` }
      ],
      data: this.state.shipments
    });
  }
};
