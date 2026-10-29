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

    // 2. Production - Daily Production Intake
    dailyProductionList: [
      { id: 1, sNo: 1, productionDate: '2026-10-29', trackCode: 'TRK-PRD-2026-501', group: 'Group A', poNumber: 'PO-2026-4407', supc: 'SUPC-VM-3140-IQF', product: 'Vannamei PD IQF', grade: '31/40', packingType: 'Master Cartons', packingStyle: '10x1kg Net', mcs: 48, balanceMcs: 48, bags: 480, balanceBags: 480, kgs: 480.0, balanceKgs: 480.0, status: 'Stored in Coldstore', stockBelongsTo: 'Devi Fisheries Ltd (DFL)', intakeCode: 'IN-PRD-2026-501', intakeDate: '2026-10-29', plant: 'DFL UNIT-5 (JPT)', lotNo: 'LOT-FZ-2026-301', freezingType: 'IQF', cartons: 48, netWeightKg: 480.0, chamber: 'Chamber #1 (IQF)', rack: 'RACK-A1-T1', temp: -21.8, shift: 'Shift A (Day)' },
      { id: 2, sNo: 2, productionDate: '2026-10-29', trackCode: 'TRK-PRD-2026-502', group: 'Group B', poNumber: 'PO-2026-4408', supc: 'SUPC-BT-2125-BLK', product: 'Black Tiger Block', grade: '21/25', packingType: 'Master Cartons', packingStyle: '6x2kg Block', mcs: 60, balanceMcs: 40, bags: 360, balanceBags: 240, kgs: 600.0, balanceKgs: 400.0, status: 'Stored in Coldstore', stockBelongsTo: 'DFL Unit-5 (JPT)', intakeCode: 'IN-PRD-2026-502', intakeDate: '2026-10-29', plant: 'DFL UNIT-5 (JPT)', lotNo: 'LOT-FZ-2026-302', freezingType: 'Block Frozen', cartons: 60, netWeightKg: 600.0, chamber: 'Chamber #2 (Block)', rack: 'RACK-B1-T1', temp: -24.2, shift: 'Shift B (Evening)' },
      { id: 3, sNo: 3, productionDate: '2026-10-28', trackCode: 'TRK-PRD-2026-503', group: 'Group A', poNumber: 'PO-2026-4412', supc: 'SUPC-VM-1620-IQF', product: 'Vannamei HOSO IQF', grade: '16/20', packingType: 'Master Cartons', packingStyle: '10x1kg Net', mcs: 56, balanceMcs: 56, bags: 560, balanceBags: 560, kgs: 560.0, balanceKgs: 560.0, status: 'Stored in Coldstore', stockBelongsTo: 'DFL Unit-4 (PND)', intakeCode: 'IN-PRD-2026-503', intakeDate: '2026-10-28', plant: 'DFL UNIT-4 (PND)', lotNo: 'LOT-FZ-2026-299', freezingType: 'IQF', cartons: 56, netWeightKg: 560.0, chamber: 'Chamber #1 (IQF)', rack: 'RACK-A1-T2', temp: -22.4, shift: 'Shift A (Day)' },
      { id: 4, sNo: 4, productionDate: '2026-10-28', trackCode: 'TRK-PRD-2026-504', group: 'Group C', poNumber: 'PO-2026-4415', supc: 'SUPC-VM-2630-BLK', product: 'Vannamei HLSO Block', grade: '26/30', packingType: 'Master Cartons', packingStyle: '6x2kg Block', mcs: 72, balanceMcs: 0, bags: 432, balanceBags: 0, kgs: 720.0, balanceKgs: 0.0, status: 'Allocated', stockBelongsTo: 'DFL Unit-3 (PSP)', intakeCode: 'IN-PRD-2026-504', intakeDate: '2026-10-28', plant: 'DFL UNIT-3 (PSP)', lotNo: 'LOT-FZ-2026-298', freezingType: 'Block Frozen', cartons: 72, netWeightKg: 720.0, chamber: 'Chamber #2 (Block)', rack: 'RACK-B2-T3', temp: -25.0, shift: 'Shift C (Night)' },
      { id: 5, sNo: 5, productionDate: '2026-10-27', trackCode: 'TRK-PRD-2026-505', group: 'Group D', poNumber: 'PO-2026-4419', supc: 'SUPC-CK-4150-BLS', product: 'Sea Pearl Cooked PDTO', grade: '41/50', packingType: 'Master Cartons', packingStyle: '5x2kg IQF Poly', mcs: 40, balanceMcs: 40, bags: 200, balanceBags: 200, kgs: 400.0, balanceKgs: 400.0, status: 'Staged for Export', stockBelongsTo: 'Devi Fisheries Ltd (DFL)', intakeCode: 'IN-PRD-2026-505', intakeDate: '2026-10-27', plant: 'DFL UNIT-5 (JPT)', lotNo: 'LOT-FZ-2026-295', freezingType: 'Blast Frozen', cartons: 40, netWeightKg: 400.0, chamber: 'Vault #3 Staging', rack: 'RACK-D1-T1', temp: -26.5, shift: 'Shift A (Day)' },
      { id: 6, sNo: 6, productionDate: '2026-10-27', trackCode: 'TRK-PRD-2026-506', group: 'Group B', poNumber: 'PO-2026-4422', supc: 'SUPC-SC-1115-BLK', product: 'Scampi Headless Block', grade: '11/15', packingType: 'Dummy Cartons', packingStyle: '6x2kg Block', mcs: 36, balanceMcs: 36, bags: 216, balanceBags: 216, kgs: 360.0, balanceKgs: 360.0, status: 'Under QC Hold', stockBelongsTo: 'DFL Unit-1 (VSP)', intakeCode: 'IN-PRD-2026-506', intakeDate: '2026-10-27', plant: 'DFL UNIT-1 (VSP)', lotNo: 'LOT-FZ-2026-291', freezingType: 'Block Frozen', cartons: 36, netWeightKg: 360.0, chamber: 'Chamber #2 (Block)', rack: 'RACK-B3-T2', temp: -24.8, shift: 'Shift B (Evening)' },
      { id: 7, sNo: 7, productionDate: '2026-10-26', trackCode: 'TRK-PRD-2026-507', group: 'Group A', poNumber: 'PO-2026-4428', supc: 'SUPC-VM-2630-EZP', product: 'Vannamei Easy Peel IQF', grade: '26/30', packingType: 'Master Cartons', packingStyle: '10x2lb Pouch', mcs: 50, balanceMcs: 25, bags: 500, balanceBags: 250, kgs: 500.0, balanceKgs: 250.0, status: 'Partially Dispatched', stockBelongsTo: 'Devi Fisheries Ltd (DFL)', intakeCode: 'IN-PRD-2026-507', intakeDate: '2026-10-26', plant: 'DFL UNIT-5 (JPT)', lotNo: 'LOT-FZ-2026-288', freezingType: 'IQF', cartons: 50, netWeightKg: 500.0, chamber: 'Chamber #1 (IQF)', rack: 'RACK-A2-T1', temp: -22.0, shift: 'Shift A (Day)' },
      { id: 8, sNo: 8, productionDate: '2026-10-26', trackCode: 'TRK-PRD-2026-508', group: 'Group C', poNumber: 'PO-2026-4431', supc: 'SUPC-BT-1620-IQF', product: 'Black Tiger HOSO IQF', grade: '16/20', packingType: 'Master Cartons', packingStyle: '10x1kg Net', mcs: 45, balanceMcs: 45, bags: 450, balanceBags: 450, kgs: 450.0, balanceKgs: 450.0, status: 'Stored in Coldstore', stockBelongsTo: 'Third-Party Co-Packing', intakeCode: 'IN-PRD-2026-508', intakeDate: '2026-10-26', plant: 'DFL UNIT-4 (PND)', lotNo: 'LOT-FZ-2026-285', freezingType: 'IQF', cartons: 45, netWeightKg: 450.0, chamber: 'Chamber #1 (IQF)', rack: 'RACK-C1-T1', temp: -23.0, shift: 'Shift B (Evening)' }
    ],

    // 2b. Production - Daily StockOut
    dailyStockOutList: [
      { id: 1, stockOutCode: 'SO-CS-2026-101', date: '2026-10-29', orderNo: 'ORD-US-2026-891', reason: 'Export Shipment (Rotterdam)', product: 'Vannamei PD IQF 31/40', cartons: 900, netWeightKg: 9000.0, chamber: 'Vault #3 Staging', vehicleNo: 'MSKU-982104-2', issuedBy: 'Anita P. Rao', status: 'Dispatched' },
      { id: 2, stockOutCode: 'SO-CS-2026-102', date: '2026-10-29', orderNo: 'ORD-JPN-2026-442', reason: 'Export Shipment (Tokyo)', product: 'Black Tiger Block 16/20', cartons: 750, netWeightKg: 7500.0, chamber: 'Chamber #2 (Block)', vehicleNo: 'ONEU-771239-0', issuedBy: 'Anita P. Rao', status: 'Gate Pass Issued' },
      { id: 3, stockOutCode: 'SO-CS-2026-103', date: '2026-10-28', orderNo: 'IBT-2026-088', reason: 'Inter-Branch Transfer (Unit-4)', product: 'Vannamei PD IQF 31/40', cartons: 576, netWeightKg: 5760.0, chamber: 'Chamber #1 (IQF)', vehicleNo: 'AP 39 TB 4412', issuedBy: 'M. Krishna', status: 'In Transit' },
      { id: 4, stockOutCode: 'SO-CS-2026-104', date: '2026-10-27', orderNo: 'REP-2026-042', reason: 'Thawing & Value Repacking', product: 'Vannamei HLSO Block 26/30', cartons: 200, netWeightKg: 2000.0, chamber: 'Chamber #2 (Block)', vehicleNo: 'Internal Floor', issuedBy: 'P. Satyanarayana', status: 'Completed' }
    ],

    // 2c. Production - Freezing Runs
    freezingRunsList: [
      { id: 1, runCode: 'FZ-CS-2026-081', date: '2026-10-29', freezerLine: 'Line #1 — IQF Tunnel 1', trackCode: 'TRK-FZ-2026-701', product: 'Vannamei PD IQF', grade: '31/40', glazePct: '10%', exitTemp: -22.5, cartons: 400, netWeightKg: 4000.0, stagedChamber: 'Chamber #1 (IQF)', qcStatus: 'PASSED', status: 'Stored in Coldstore' },
      { id: 2, runCode: 'FZ-CS-2026-082', date: '2026-10-29', freezerLine: 'Line #2 — IQF Tunnel 2', trackCode: 'TRK-FZ-2026-702', product: 'Black Tiger HOSO IQF', grade: '16/20', glazePct: '12%', exitTemp: -23.1, cartons: 350, netWeightKg: 3500.0, stagedChamber: 'Chamber #1 (IQF)', qcStatus: 'PASSED', status: 'Stored in Coldstore' },
      { id: 3, runCode: 'FZ-CS-2026-083', date: '2026-10-28', freezerLine: 'Line #3 — Plate Freezer', trackCode: 'TRK-FZ-2026-699', product: 'Vannamei HLSO Block', grade: '26/30', glazePct: 'None', exitTemp: -26.0, cartons: 410, netWeightKg: 8200.0, stagedChamber: 'Chamber #2 (Block)', qcStatus: 'PASSED', status: 'Stored in Coldstore' },
      { id: 4, runCode: 'FZ-CS-2026-084', date: '2026-10-27', freezerLine: 'Line #4 — Blast Freezer', trackCode: 'TRK-FZ-2026-695', product: 'Sea Pearl Cooked PDTO', grade: '41/50', glazePct: '5%', exitTemp: -24.8, cartons: 120, netWeightKg: 1200.0, stagedChamber: 'Vault #3 Staging', qcStatus: 'PASSED', status: 'Staged for Export' }
    ],

    // 3. Stock Inventory
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
    const tabId = parts[2] || '';

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
      case 'production':
        if (tabId.includes('stockout')) {
          this.renderDailyStockOut(contentEl);
        } else if (tabId.includes('freezing')) {
          this.renderFreezing(contentEl);
        } else {
          this.renderDailyProduction(contentEl);
        }
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

  // 2. PRODUCTION - DAILY PRODUCTION
  renderDailyProduction(container) {
    const fullList = this.state.dailyProductionList || this.state.productionIntakeList || [];

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Page Title Header (Clean application standard: no extra stats or subheadings) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Daily Production</h1>
          </div>
        </div>

      <!-- Search & Filters Card (Exact Devi Fisheries ERP Standard) -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>

          <!-- Filter Controls: Reset & Toggle Open/Close -->
          <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
            <button type="button" id="dp-filter-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset all filters" aria-label="Reset all filters">
              <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </button>

            <button type="button" id="dp-filter-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
              <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" id="dp-filter-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>
        </div>

        <!-- Filter Inputs Grid: 6 Requested Fields + Action Slot -->
        <div id="dp-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
          
          <!-- 1. START DATE * -->
          <div>
            <label for="dp-filter-start-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">START DATE <span class="text-[#DE350B]">*</span></label>
            <div class="erp-date-wrapper">
              <input type="date" id="dp-filter-start-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" value="2026-10-26" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <!-- 2. STOCK BELONGS TO -->
          <div>
            <label for="dp-filter-stock-belongs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK BELONGS TO</label>
            <select id="dp-filter-stock-belongs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="ALL">All Stock Belongs To</option>
              <option value="Devi Fisheries Ltd (DFL)">Devi Fisheries Ltd (DFL)</option>
              <option value="DFL Unit-5 (JPT)">DFL Unit-5 (JPT)</option>
              <option value="DFL Unit-4 (PND)">DFL Unit-4 (PND)</option>
              <option value="DFL Unit-3 (PSP)">DFL Unit-3 (PSP)</option>
              <option value="DFL Unit-1 (VSP)">DFL Unit-1 (VSP)</option>
              <option value="Third-Party Co-Packing">Third-Party Co-Packing</option>
            </select>
          </div>

          <!-- 3. PACKING TYPE -->
          <div>
            <label for="dp-filter-packing-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING TYPE</label>
            <select id="dp-filter-packing-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="ALL">All Packing Types</option>
              <option value="Master Cartons">Master Cartons</option>
              <option value="Dummy Cartons">Dummy Cartons</option>
              <option value="10x1kg Net">10x1kg Net</option>
              <option value="6x2kg Block">6x2kg Block</option>
              <option value="5x2kg IQF Poly">5x2kg IQF Poly</option>
              <option value="10x2lb Pouch">10x2lb Pouch</option>
            </select>
          </div>

          <!-- 4. GROUP -->
          <div>
            <label for="dp-filter-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP</label>
            <select id="dp-filter-group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="ALL">All Groups</option>
              <option value="Group A">Group A</option>
              <option value="Group B">Group B</option>
              <option value="Group C">Group C</option>
              <option value="Group D">Group D</option>
            </select>
          </div>

          <!-- 5. STATUS -->
          <div>
            <label for="dp-filter-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS</label>
            <select id="dp-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="ALL">All Statuses</option>
              <option value="Stored in Coldstore">Stored in Coldstore</option>
              <option value="Under QC Hold">Under QC Hold</option>
              <option value="Staged for Export">Staged for Export</option>
              <option value="Allocated">Allocated</option>
            </select>
          </div>

          <!-- 6. DATE TYPE -->
          <div>
            <label for="dp-filter-date-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DATE TYPE</label>
            <select id="dp-filter-date-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="Production Date" selected>Production Date</option>
              <option value="Coldstore Inward Date">Coldstore Inward Date</option>
              <option value="Freezing Date">Freezing Date</option>
              <option value="QC Approval Date">QC Approval Date</option>
            </select>
          </div>

          <!-- Search Button Slot -->
          <div class="flex items-end gap-2">
            <button type="button" id="dp-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

        <!-- Data Table Container -->
        <div id="cs-daily-production-table"></div>
      </div>
    `;

    // Render Table Function with Exact 18 User-Requested Columns
    const renderTable = (data) => {
      new DataTable({
        containerId: 'cs-daily-production-table',
        keyField: 'trackCode',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.NO
          {
            field: 'sNo',
            header: 'S.NO',
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Production Date
          {
            field: 'productionDate',
            header: 'Production Date',
            sortable: true,
            render: (v, r) => `<span class="whitespace-nowrap font-medium text-[#172B4D]">${v || r.intakeDate}</span>`
          },
          // 3. Track Code
          {
            field: 'trackCode',
            header: 'Track Code',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-[#0284C7] whitespace-nowrap">${v}</span>`
          },
          // 4. Group
          {
            field: 'group',
            header: 'Group',
            render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294] whitespace-nowrap">${v || 'Group A'}</span>`
          },
          // 5. PO Number
          {
            field: 'poNumber',
            header: 'PO Number',
            sortable: true,
            render: v => `<span class="font-mono font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 6. SUPC
          {
            field: 'supc',
            header: 'SUPC',
            render: v => `<span class="font-mono text-xs font-semibold text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>`
          },
          // 7. Product
          {
            field: 'product',
            header: 'Product',
            render: v => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 8. Grade
          {
            field: 'grade',
            header: 'Grade',
            render: v => `<span class="font-mono font-bold text-[#0284C7] whitespace-nowrap">${v}</span>`
          },
          // 9. Packing Type
          {
            field: 'packingType',
            header: 'Packing Type',
            render: v => `<span class="whitespace-nowrap text-[#172B4D]">${v}</span>`
          },
          // 10. Packing Style
          {
            field: 'packingStyle',
            header: 'Packing Style',
            render: v => `<span class="whitespace-nowrap font-medium text-[#172B4D]">${v}</span>`
          },
          // 11. Mcs
          {
            field: 'mcs',
            header: 'Mcs',
            render: v => `<span class="font-mono font-bold text-[#00875A]">${v}</span>`
          },
          // 12. Balance Mcs
          {
            field: 'balanceMcs',
            header: 'Balance Mcs',
            render: v => `<span class="font-mono font-bold ${v > 0 ? 'text-[#172B4D]' : 'text-[#A5ADBA]'}">${v}</span>`
          },
          // 13. Bags
          {
            field: 'bags',
            header: 'Bags',
            render: v => `<span class="font-mono font-semibold text-[#172B4D]">${v}</span>`
          },
          // 14. Balance Bags
          {
            field: 'balanceBags',
            header: 'Balance Bags',
            render: v => `<span class="font-mono font-semibold ${v > 0 ? 'text-[#172B4D]' : 'text-[#A5ADBA]'}">${v}</span>`
          },
          // 15. Kgs
          {
            field: 'kgs',
            header: 'Kgs',
            render: v => `<span class="font-mono font-bold text-[#172B4D] whitespace-nowrap">${Number(v).toFixed(1)}</span>`
          },
          // 16. Balance Kgs
          {
            field: 'balanceKgs',
            header: 'Balance Kgs',
            render: v => `<span class="font-mono font-bold ${v > 0 ? 'text-[#00875A]' : 'text-[#A5ADBA]'} whitespace-nowrap">${Number(v).toFixed(1)}</span>`
          },
          // 17. Status
          {
            field: 'status',
            header: 'Status',
            render: v => {
              let badgeClass = 'bg-[#E3FCEF] text-[#006644]';
              if (v === 'Under QC Hold') badgeClass = 'bg-[#FFEBE6] text-[#BF2600]';
              else if (v === 'Staged for Export') badgeClass = 'bg-[#DEEBFF] text-[#0747A6]';
              else if (v === 'Allocated') badgeClass = 'bg-[#FFF0B3] text-[#172B4D]';
              else if (v === 'Partially Dispatched') badgeClass = 'bg-[#EAE6FF] text-[#403294]';
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ${badgeClass}">${v}</span>`;
            }
          }
        ],
        // 18. Actions Column
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'View Batch Details',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => this.showDailyProductionDetailModal(row)
          },
          {
            label: 'Print Barcode Label',
            icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
            onClick: (row) => {
              Toast.show(`Printing Barcode Tag for ${row.trackCode}...`, 'success');
            }
          }
        ],
        data: data
      });
    };

    // Initial table render
    renderTable(fullList);

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('dp-filter-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('dp-filter-body');
      const icon = document.getElementById('dp-filter-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('dp-filter-reset-btn');
    resetBtn?.addEventListener('click', () => {
      const startDateInput = document.getElementById('dp-filter-start-date');
      const stockBelongsSelect = document.getElementById('dp-filter-stock-belongs');
      const packingTypeSelect = document.getElementById('dp-filter-packing-type');
      const groupSelect = document.getElementById('dp-filter-group');
      const statusSelect = document.getElementById('dp-filter-status');
      const dateTypeSelect = document.getElementById('dp-filter-date-type');

      if (startDateInput) startDateInput.value = '2026-10-26';
      if (stockBelongsSelect) stockBelongsSelect.value = 'ALL';
      if (packingTypeSelect) packingTypeSelect.value = 'ALL';
      if (groupSelect) groupSelect.value = 'ALL';
      if (statusSelect) statusSelect.value = 'ALL';
      if (dateTypeSelect) dateTypeSelect.value = 'Production Date';

      renderTable(fullList);
      Toast.show('Filters reset to default', 'info');
    });

    // Execute Search Filter
    const searchBtn = document.getElementById('dp-filter-search-btn');
    const executeFilter = () => {
      const startDateVal = document.getElementById('dp-filter-start-date')?.value || '';
      const stockBelongsVal = document.getElementById('dp-filter-stock-belongs')?.value || 'ALL';
      const packingTypeVal = document.getElementById('dp-filter-packing-type')?.value || 'ALL';
      const groupVal = document.getElementById('dp-filter-group')?.value || 'ALL';
      const statusVal = document.getElementById('dp-filter-status')?.value || 'ALL';
      const dateTypeVal = document.getElementById('dp-filter-date-type')?.value || 'Production Date';

      const filtered = fullList.filter(row => {
        // 1. START DATE *
        if (startDateVal) {
          const rowDate = (dateTypeVal === 'Coldstore Inward Date' ? row.intakeDate : row.productionDate) || row.intakeDate;
          if (rowDate && rowDate < startDateVal) return false;
        }

        // 2. STOCK BELONGS TO
        if (stockBelongsVal !== 'ALL') {
          if (!row.stockBelongsTo || !row.stockBelongsTo.toLowerCase().includes(stockBelongsVal.toLowerCase())) {
            return false;
          }
        }

        // 3. PACKING TYPE
        if (packingTypeVal !== 'ALL') {
          if (!row.packingType || !row.packingType.toLowerCase().includes(packingTypeVal.toLowerCase())) {
            return false;
          }
        }

        // 4. GROUP
        if (groupVal !== 'ALL' && row.group !== groupVal) {
          return false;
        }

        // 5. STATUS
        if (statusVal !== 'ALL' && row.status !== statusVal) {
          return false;
        }

        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching daily production batch(es)`, 'info');
    };

    searchBtn?.addEventListener('click', executeFilter);

    // Enter key submits filter on inputs
    ['dp-filter-start-date', 'dp-filter-stock-belongs', 'dp-filter-packing-type', 'dp-filter-group', 'dp-filter-status', 'dp-filter-date-type'].forEach(id => {
      const el = document.getElementById(id);
      el?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeFilter();
        }
      });
      if (el?.tagName === 'SELECT') {
        el.addEventListener('change', executeFilter);
      }
    });
  },

  // 2b. PRODUCTION - DAILY STOCKOUT
  renderDailyStockOut(container) {
    const list = this.state.dailyStockOutList || [];

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Daily StockOut</h1>
          </div>
        </div>

        <div id="cs-daily-stockout-table"></div>
      </div>
    `;

    new DataTable({
      containerId: 'cs-daily-stockout-table',
      keyField: 'stockOutCode',
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { field: 'id', header: 'S.No', render: (v, r, idx) => idx + 1 },
        { field: 'stockOutCode', header: 'StockOut Code', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { field: 'date', header: 'Date' },
        { field: 'orderNo', header: 'Order / Ref No', render: v => `<span class="font-mono font-bold">${v}</span>` },
        { field: 'reason', header: 'Movement Type', render: v => `<span class="font-medium text-[#172B4D]">${v}</span>` },
        { field: 'product', header: 'Product Description' },
        { field: 'cartons', header: 'Cartons Dispatched', render: v => `<span class="font-mono font-bold text-[#00875A]">${v}</span>` },
        { field: 'netWeightKg', header: 'Net Wt (Kg)', render: v => `<span class="font-mono font-bold">${Number(v).toFixed(1)}</span>` },
        { field: 'chamber', header: 'Staged Vault' },
        { field: 'vehicleNo', header: 'Vehicle / Container', render: v => `<span class="font-mono font-semibold">${v}</span>` },
        { field: 'issuedBy', header: 'Issued By' },
        { field: 'status', header: 'Status', render: v => {
          let badgeClass = 'bg-[#E3FCEF] text-[#006644]';
          if (v === 'Gate Pass Issued') badgeClass = 'bg-[#DEEBFF] text-[#0747A6]';
          else if (v === 'In Transit') badgeClass = 'bg-[#FFF0B3] text-[#172B4D]';
          return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${badgeClass}">${v}</span>`;
        }}
      ],
      data: list
    });
  },

  // 2c. PRODUCTION - FREEZING
  renderFreezing(container) {
    const list = this.state.freezingRunsList || [];

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Freezing</h1>
          </div>
        </div>

        <div id="cs-freezing-runs-table"></div>
      </div>
    `;

    new DataTable({
      containerId: 'cs-freezing-runs-table',
      keyField: 'runCode',
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { field: 'id', header: 'S.No', render: (v, r, idx) => idx + 1 },
        { field: 'runCode', header: 'Run Code', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { field: 'date', header: 'Date' },
        { field: 'freezerLine', header: 'Freezer Line', render: v => `<span class="font-medium text-[#172B4D]">${v}</span>` },
        { field: 'trackCode', header: 'Track Code', render: v => `<span class="font-mono font-bold">${v}</span>` },
        { field: 'product', header: 'Product Variety' },
        { field: 'grade', header: 'Grade' },
        { field: 'glazePct', header: 'Glaze %', render: v => `<span class="font-bold text-[#0284C7]">${v}</span>` },
        { field: 'exitTemp', header: 'Exit Temp (°C)', render: v => `<span class="font-mono font-bold text-[#00875A]">${v} °C</span>` },
        { field: 'cartons', header: 'Cartons / Slabs', render: v => `<span class="font-mono font-bold">${v}</span>` },
        { field: 'netWeightKg', header: 'Net Wt (Kg)', render: v => `<span class="font-mono font-bold">${Number(v).toFixed(1)}</span>` },
        { field: 'stagedChamber', header: 'Staged Vault' },
        { field: 'qcStatus', header: 'QC Status', render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#E3FCEF] text-[#006644]">${v}</span>` },
        { field: 'status', header: 'Status', render: v => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644]">${v}</span>` }
      ],
      data: list
    });
  },

  // Backward compatibility alias
  renderProductionIntake(container) {
    this.renderDailyProduction(container);
  },

  // 3. STOCK
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
  },

  // 7. DAILY PRODUCTION DETAIL MODAL
  showDailyProductionDetailModal(row) {
    Modal.open({
      title: `Daily Production Batch Details: ${row.trackCode || row.intakeCode}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">TRACK CODE</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.trackCode}</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">INVENTORY STATUS</span>
              <div>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644]">${row.status}</span>
              </div>
            </div>
          </div>

          <!-- Production & PO Information Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCTION DATE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.productionDate || row.intakeDate}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO NUMBER</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.poNumber || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SUPC CODE</span>
              <span class="font-mono font-semibold text-xs text-[#5E6C84]">${row.supc || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GROUP</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294]">${row.group || 'Group A'}</span>
            </div>
          </div>

          <!-- Product & Packing Specifications -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCT</span>
              <span class="font-bold text-xs text-[#172B4D]">${row.product}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GRADE</span>
              <span class="font-mono font-bold text-xs text-[#0284C7]">${row.grade}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING TYPE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.packingType}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING STYLE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.packingStyle}</span>
            </div>
          </div>

          <!-- Quantity, Slabs & Balances Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#FAFBFC] p-3 border border-[#DFE1E6] rounded-lg">
            <div class="bg-white p-2.5 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">MASTER CARTONS (MCS)</div>
              <div class="text-lg font-black text-[#00875A] font-mono mt-0.5">${row.mcs}</div>
              <div class="text-[11px] font-semibold text-[#5E6C84] mt-0.5">Balance: <span class="font-bold text-[#172B4D]">${row.balanceMcs} Mcs</span></div>
            </div>
            <div class="bg-white p-2.5 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL BAGS / UNITS</div>
              <div class="text-lg font-black text-[#0284C7] font-mono mt-0.5">${row.bags}</div>
              <div class="text-[11px] font-semibold text-[#5E6C84] mt-0.5">Balance: <span class="font-bold text-[#172B4D]">${row.balanceBags} Bags</span></div>
            </div>
            <div class="bg-white p-2.5 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL NET WEIGHT</div>
              <div class="text-lg font-black text-[#172B4D] font-mono mt-0.5">${Number(row.kgs).toFixed(1)} <span class="text-xs font-semibold text-[#6B778C]">Kgs</span></div>
              <div class="text-[11px] font-semibold text-[#00875A] mt-0.5">Balance: <span class="font-bold">${Number(row.balanceKgs).toFixed(1)} Kgs</span></div>
            </div>
          </div>

          <!-- Storage Vault Location -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PLANT FACILITY</span>
              <span class="font-semibold text-xs">${row.plant || 'DFL UNIT-5 (JPT)'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STORAGE CHAMBER</span>
              <span class="font-semibold text-xs text-[#0284C7]">${row.chamber || 'Chamber #1 (IQF)'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">RACK LOCATION</span>
              <span class="font-mono font-bold text-xs">${row.rack || 'RACK-A1-T1'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">CORE TEMP</span>
              <span class="font-mono font-bold text-xs text-[#00875A]">${row.temp || '-22.0'} °C</span>
            </div>
          </div>
        </div>
      `
    });
  }
};
