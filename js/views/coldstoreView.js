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
      {
        id: 1,
        sNo: 1,
        stockOutDate: '2026-10-29',
        date: '2026-10-29',
        stockOutCode: 'SO-CS-2026-101',
        type: 'Export Dispatch',
        supc: 'SUPC-VN-3140-IQF',
        product: 'Vannamei PD IQF',
        grade: '31/40',
        packingType: 'Master Cartons',
        packingStyle: '10x1kg Net',
        mcs: 900,
        bags: 9000,
        kgs: 9000.0,
        balanceKgs: 1200.0,
        status: 'Dispatched',
        stockBelongsTo: 'Devi Fisheries Ltd (DFL)',
        group: 'Group A',
        orderNo: 'ORD-US-2026-891',
        chamber: 'Vault #3 Staging',
        vehicleNo: 'MSKU-982104-2',
        issuedBy: 'Anita P. Rao'
      },
      {
        id: 2,
        sNo: 2,
        stockOutDate: '2026-10-29',
        date: '2026-10-29',
        stockOutCode: 'SO-CS-2026-102',
        type: 'Export Dispatch',
        supc: 'SUPC-BT-1620-BLK',
        product: 'Black Tiger Block',
        grade: '16/20',
        packingType: '6x2kg Block',
        packingStyle: '6x2kg Block',
        mcs: 750,
        bags: 4500,
        kgs: 7500.0,
        balanceKgs: 850.0,
        status: 'Gate Pass Issued',
        stockBelongsTo: 'DFL Unit-5 (JPT)',
        group: 'Group B',
        orderNo: 'ORD-JPN-2026-442',
        chamber: 'Chamber #2 (Block)',
        vehicleNo: 'ONEU-771239-0',
        issuedBy: 'Anita P. Rao'
      },
      {
        id: 3,
        sNo: 3,
        stockOutDate: '2026-10-29',
        date: '2026-10-29',
        stockOutCode: 'SO-CS-2026-103',
        type: 'IBT Transfer',
        supc: 'SUPC-VN-3140-IQF',
        product: 'Vannamei PD IQF',
        grade: '31/40',
        packingType: 'Master Cartons',
        packingStyle: '10x1kg Net',
        mcs: 576,
        bags: 5760,
        kgs: 5760.0,
        balanceKgs: 0.0,
        status: 'In Transit',
        stockBelongsTo: 'DFL Unit-4 (PND)',
        group: 'Group A',
        orderNo: 'IBT-2026-088',
        chamber: 'Chamber #1 (IQF)',
        vehicleNo: 'AP 39 TB 4412',
        issuedBy: 'M. Krishna'
      },
      {
        id: 4,
        sNo: 4,
        stockOutDate: '2026-10-28',
        date: '2026-10-28',
        stockOutCode: 'SO-CS-2026-104',
        type: 'Repacking / Thawing',
        supc: 'SUPC-VN-2630-BLK',
        product: 'Vannamei HLSO Block',
        grade: '26/30',
        packingType: '6x2kg Block',
        packingStyle: '6x2kg Block',
        mcs: 200,
        bags: 1200,
        kgs: 2000.0,
        balanceKgs: 450.0,
        status: 'Completed',
        stockBelongsTo: 'DFL Unit-3 (PSP)',
        group: 'Group C',
        orderNo: 'REP-2026-042',
        chamber: 'Chamber #2 (Block)',
        vehicleNo: 'Internal Floor',
        issuedBy: 'P. Satyanarayana'
      },
      {
        id: 5,
        sNo: 5,
        stockOutDate: '2026-10-28',
        date: '2026-10-28',
        stockOutCode: 'SO-CS-2026-105',
        type: 'Domestic Dispatch',
        supc: 'SUPC-CP-4150-IQF',
        product: 'Sea Pearl Cooked PDTO',
        grade: '41/50',
        packingType: '5x2kg IQF Poly',
        packingStyle: '5x2kg Poly',
        mcs: 150,
        bags: 750,
        kgs: 1500.0,
        balanceKgs: 300.0,
        status: 'Dispatched',
        stockBelongsTo: 'Devi Fisheries Ltd (DFL)',
        group: 'Group B',
        orderNo: 'DOM-2026-118',
        chamber: 'Vault #3 Staging',
        vehicleNo: 'AP 16 TZ 8819',
        issuedBy: 'Anita P. Rao'
      },
      {
        id: 6,
        sNo: 6,
        stockOutDate: '2026-10-27',
        date: '2026-10-27',
        stockOutCode: 'SO-CS-2026-106',
        type: 'Export Dispatch',
        supc: 'SUPC-VN-2125-EZP',
        product: 'Vannamei Easy Peel IQF',
        grade: '21/25',
        packingType: '10x2lb Pouch',
        packingStyle: '10x2lb Retail Pouch',
        mcs: 420,
        bags: 4200,
        kgs: 3810.0,
        balanceKgs: 640.0,
        status: 'Dispatched',
        stockBelongsTo: 'Third-Party Co-Packing',
        group: 'Group A',
        orderNo: 'ORD-EU-2026-774',
        chamber: 'Chamber #1 (IQF)',
        vehicleNo: 'CMAU-552910-4',
        issuedBy: 'M. Krishna'
      },
      {
        id: 7,
        sNo: 7,
        stockOutDate: '2026-10-27',
        date: '2026-10-27',
        stockOutCode: 'SO-CS-2026-107',
        type: 'Export Dispatch',
        supc: 'SUPC-BT-1620-IQF',
        product: 'Black Tiger HOSO IQF',
        grade: '16/20',
        packingType: 'Master Cartons',
        packingStyle: '10x1kg Net',
        mcs: 320,
        bags: 3200,
        kgs: 3200.0,
        balanceKgs: 500.0,
        status: 'Gate Pass Issued',
        stockBelongsTo: 'DFL Unit-1 (VSP)',
        group: 'Group D',
        orderNo: 'ORD-SG-2026-302',
        chamber: 'Chamber #1 (IQF)',
        vehicleNo: 'AP 31 TC 9021',
        issuedBy: 'Anita P. Rao'
      },
      {
        id: 8,
        sNo: 8,
        stockOutDate: '2026-10-26',
        date: '2026-10-26',
        stockOutCode: 'SO-CS-2026-108',
        type: 'IBT Transfer',
        supc: 'SUPC-VN-2630-BLK',
        product: 'Vannamei HLSO Block',
        grade: '26/30',
        packingType: '6x2kg Block',
        packingStyle: '6x2kg Block',
        mcs: 500,
        bags: 3000,
        kgs: 5000.0,
        balanceKgs: 1100.0,
        status: 'In Transit',
        stockBelongsTo: 'DFL Unit-5 (JPT)',
        group: 'Group C',
        orderNo: 'IBT-2026-092',
        chamber: 'Chamber #2 (Block)',
        vehicleNo: 'AP 39 TB 1184',
        issuedBy: 'M. Krishna'
      }
    ],

    // 2c. Production - Freezing Runs
    freezingRunsList: [
      {
        id: 1,
        sNo: 1,
        productionDate: '2026-10-29',
        transactionDate: '2026-10-29',
        arrivalDate: '2026-10-28',
        arrivalLotCode: 'LOT-ARR-2026-891',
        batchCodes: 'BCH-2026-901, BCH-2026-902',
        productionPlant: 'DFL UNIT-5 (JPT)',
        group: 'Group A',
        stockBelongsTo: 'Devi Fisheries Ltd (DFL)',
        shift: 'Shift A (Day)',
        poNumber: 'PO-2026-8819',
        variety: 'Vannamei (White Shrimp)',
        packingStyle: '10x1kg Net',
        grade: '31/40',
        packingType: 'Master Cartons',
        freezingType: 'IQF Tunnel',
        soaking: 'Yes (Non-Phosphate)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Core temp -22.5°C verified, glaze optimal at 10%',
        totalWeight: 4000.0,
        balanceWeight: 3200.0,
        hlCount: 35.2,
        mcs: 400,
        looseBags: 0,
        tubNo: 'TUB-401'
      },
      {
        id: 2,
        sNo: 2,
        productionDate: '2026-10-29',
        transactionDate: '2026-10-29',
        arrivalDate: '2026-10-28',
        arrivalLotCode: 'LOT-ARR-2026-892',
        batchCodes: 'BCH-2026-903',
        productionPlant: 'DFL UNIT-5 (JPT)',
        group: 'Group B',
        stockBelongsTo: 'DFL Unit-5 (JPT)',
        shift: 'Shift B (Evening)',
        poNumber: 'PO-2026-8822',
        variety: 'Black Tiger (Monodon)',
        packingStyle: '6x2kg Block',
        grade: '16/20',
        packingType: '6x2kg Block',
        freezingType: 'Contact Plate Freezer',
        soaking: 'No (Unsoaked)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Target slab hardness reached at -26°C',
        totalWeight: 3500.0,
        balanceWeight: 3500.0,
        hlCount: 18.5,
        mcs: 290,
        looseBags: 12,
        tubNo: 'TUB-404'
      },
      {
        id: 3,
        sNo: 3,
        productionDate: '2026-10-28',
        transactionDate: '2026-10-28',
        arrivalDate: '2026-10-27',
        arrivalLotCode: 'LOT-ARR-2026-884',
        batchCodes: 'BCH-2026-889, BCH-2026-890',
        productionPlant: 'DFL UNIT-3 (PSP)',
        group: 'Group A',
        stockBelongsTo: 'DFL Unit-3 (PSP)',
        shift: 'Shift A (Day)',
        poNumber: 'PO-2026-8790',
        variety: 'Vannamei (White Shrimp)',
        packingStyle: '5x2kg IQF Poly',
        grade: '26/30',
        packingType: '5x2kg IQF Poly',
        freezingType: 'IQF Tunnel',
        soaking: 'Yes (Phosphate Treated)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Full visual QC passed; net glaze standard 12%',
        totalWeight: 5200.0,
        balanceWeight: 1400.0,
        hlCount: 28.1,
        mcs: 520,
        looseBags: 0,
        tubNo: 'TUB-312'
      },
      {
        id: 4,
        sNo: 4,
        productionDate: '2026-10-28',
        transactionDate: '2026-10-28',
        arrivalDate: '2026-10-27',
        arrivalLotCode: 'LOT-ARR-2026-885',
        batchCodes: 'BCH-2026-894',
        productionPlant: 'DFL UNIT-4 (PND)',
        group: 'Group C',
        stockBelongsTo: 'DFL Unit-4 (PND)',
        shift: 'Shift C (Night)',
        poNumber: 'PO-2026-8798',
        variety: 'Sea Pearl / Pink',
        packingStyle: '10x1kg Net',
        grade: '41/50',
        packingType: 'Master Cartons',
        freezingType: 'Blast Freezer',
        soaking: 'Yes (Non-Phosphate)',
        productCategory: 'Cooked Frozen',
        abStatus: 'UNDER TESTING',
        remarks: 'Sample forwarded to Micro lab; awaiting final clearance',
        totalWeight: 2100.0,
        balanceWeight: 2100.0,
        hlCount: 46.0,
        mcs: 210,
        looseBags: 0,
        tubNo: 'TUB-208'
      },
      {
        id: 5,
        sNo: 5,
        productionDate: '2026-10-27',
        transactionDate: '2026-10-27',
        arrivalDate: '2026-10-26',
        arrivalLotCode: 'LOT-ARR-2026-872',
        batchCodes: 'BCH-2026-865',
        productionPlant: 'DFL UNIT-1 (VSP)',
        group: 'Group B',
        stockBelongsTo: 'Third-Party Co-Packing',
        shift: 'Shift A (Day)',
        poNumber: 'PO-2026-8742',
        variety: 'Vannamei (White Shrimp)',
        packingStyle: '10x2lb Pouch',
        grade: '21/25',
        packingType: '10x2lb Pouch',
        freezingType: 'IQF Tunnel',
        soaking: 'No (Unsoaked)',
        productCategory: 'Value Added',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Easy Peel IQF, bagged and packed for export retail PI',
        totalWeight: 3800.0,
        balanceWeight: 600.0,
        hlCount: 23.4,
        mcs: 380,
        looseBags: 8,
        tubNo: 'TUB-119'
      },
      {
        id: 6,
        sNo: 6,
        productionDate: '2026-10-26',
        transactionDate: '2026-10-26',
        arrivalDate: '2026-10-25',
        arrivalLotCode: 'LOT-ARR-2026-860',
        batchCodes: 'BCH-2026-848',
        productionPlant: 'DFL UNIT-5 (JPT)',
        group: 'Group D',
        stockBelongsTo: 'Devi Fisheries Ltd (DFL)',
        shift: 'Shift B (Evening)',
        poNumber: 'PO-2026-8710',
        variety: 'Black Tiger (Monodon)',
        packingStyle: '6x2kg Block',
        grade: 'U/15',
        packingType: '6x2kg Block',
        freezingType: 'Contact Plate Freezer',
        soaking: 'No (Unsoaked)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Jumbo monodon blocks frozen for Japan consignment',
        totalWeight: 1800.0,
        balanceWeight: 0.0,
        hlCount: 12.0,
        mcs: 150,
        looseBags: 0,
        tubNo: 'TUB-502'
      }
    ],

    // 3. Stock Inventory & Inward Records (Devi Fisheries Standard)
    stockInList: [
      {
        id: 1,
        sNo: 1,
        productionPlant: 'DFL UNIT-5 (JPT)',
        productionDate: '2026-10-29',
        batchCodes: 'BCH-2026-901, BCH-2026-902',
        transactionDate: '2026-10-29',
        group: 'Group A',
        stockBelongsTo: 'Devi Fisheries Ltd (DFL)',
        shift: 'Shift A (Day)',
        poNo: 'PO-2026-4407',
        variety: 'Vannamei (White Shrimp)',
        packingStyle: '10x1kg Net',
        grade: '31/40',
        packingType: 'Master Cartons',
        freezingType: 'IQF Tunnel',
        soaking: 'Yes (Non-Phosphate)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Core temp -22.5°C verified, glaze optimal at 10%',
        totalWeight: 1800.0,
        balanceWeight: 1800.0,
        coldStores: 'Chamber #1 (IQF)',
        mcs: 180,
        balanceMcs: 180,
        looseBags: 18,
        palletId: 'PAL-2026-0441',
        rack: 'RACK-A1-T1',
        palletStatus: 'Placed in Store'
      },
      {
        id: 2,
        sNo: 2,
        productionPlant: 'DFL UNIT-5 (JPT)',
        productionDate: '2026-10-29',
        batchCodes: 'BCH-2026-903',
        transactionDate: '2026-10-29',
        group: 'Group B',
        stockBelongsTo: 'DFL Unit-5 (JPT)',
        shift: 'Shift B (Evening)',
        poNo: 'PO-2026-4408',
        variety: 'Black Tiger (Monodon)',
        packingStyle: '6x2kg Block',
        grade: '21/25',
        packingType: '6x2kg Block',
        freezingType: 'Contact Plate Freezer',
        soaking: 'No (Unsoaked)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Jumbo monodon plate frozen blocks, pristine quality',
        totalWeight: 2400.0,
        balanceWeight: 1600.0,
        coldStores: 'Chamber #2 (Block)',
        mcs: 200,
        balanceMcs: 133,
        looseBags: 12,
        palletId: 'PAL-2026-0442',
        rack: 'RACK-B1-T1',
        palletStatus: 'Placed in Store'
      },
      {
        id: 3,
        sNo: 3,
        productionPlant: 'DFL UNIT-4 (PND)',
        productionDate: '2026-10-28',
        batchCodes: 'BCH-2026-895',
        transactionDate: '2026-10-28',
        group: 'Group A',
        stockBelongsTo: 'DFL Unit-4 (PND)',
        shift: 'Shift A (Day)',
        poNo: 'PO-2026-4412',
        variety: 'Vannamei (White Shrimp)',
        packingStyle: '10x1kg Net',
        grade: '16/20',
        packingType: 'Master Cartons',
        freezingType: 'IQF Tunnel',
        soaking: 'Yes (Non-Phosphate)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Direct farm lot from Kakinada cluster',
        totalWeight: 2240.0,
        balanceWeight: 2240.0,
        coldStores: 'Chamber #1 (IQF)',
        mcs: 224,
        balanceMcs: 224,
        looseBags: 20,
        palletId: 'PAL-2026-0443',
        rack: 'RACK-A1-T2',
        palletStatus: 'Placed in Store'
      },
      {
        id: 4,
        sNo: 4,
        productionPlant: 'DFL UNIT-3 (PSP)',
        productionDate: '2026-10-28',
        batchCodes: 'BCH-2026-892',
        transactionDate: '2026-10-28',
        group: 'Group C',
        stockBelongsTo: 'DFL Unit-3 (PSP)',
        shift: 'Shift C (Night)',
        poNo: 'PO-2026-4415',
        variety: 'Vannamei (White Shrimp)',
        packingStyle: '6x2kg Block',
        grade: '26/30',
        packingType: '6x2kg Block',
        freezingType: 'Contact Plate Freezer',
        soaking: 'No (Unsoaked)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Allocated for domestic contract packaging',
        totalWeight: 1440.0,
        balanceWeight: 720.0,
        coldStores: 'Chamber #2 (Block)',
        mcs: 120,
        balanceMcs: 60,
        looseBags: 8,
        palletId: 'PAL-2026-0444',
        rack: 'RACK-B2-T3',
        palletStatus: 'Placed in Store'
      },
      {
        id: 5,
        sNo: 5,
        productionPlant: 'DFL UNIT-5 (JPT)',
        productionDate: '2026-10-27',
        batchCodes: 'BCH-2026-880',
        transactionDate: '2026-10-27',
        group: 'Group D',
        stockBelongsTo: 'Devi Fisheries Ltd (DFL)',
        shift: 'Shift A (Day)',
        poNo: 'PO-2026-4419',
        variety: 'Sea Pearl Cooked PDTO',
        packingStyle: '5x2kg Poly',
        grade: '41/50',
        packingType: '5x2kg IQF Poly',
        freezingType: 'Blast Freezer',
        soaking: 'Yes (STPP Treated)',
        productCategory: 'Cooked Frozen',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Cooked export staging for USA shipment',
        totalWeight: 1600.0,
        balanceWeight: 1600.0,
        coldStores: 'Vault #3 Staging',
        mcs: 160,
        balanceMcs: 160,
        looseBags: 16,
        palletId: 'PAL-2026-0445',
        rack: 'RACK-D1-T1',
        palletStatus: 'Placed in Store'
      },
      {
        id: 6,
        sNo: 6,
        productionPlant: 'DFL UNIT-1 (VSP)',
        productionDate: '2026-10-27',
        batchCodes: 'BCH-2026-874',
        transactionDate: '2026-10-27',
        group: 'Group B',
        stockBelongsTo: 'DFL Unit-1 (VSP)',
        shift: 'Shift B (Evening)',
        poNo: 'PO-2026-4422',
        variety: 'Scampi Headless Block',
        packingStyle: '6x2kg Block',
        grade: '11/15',
        packingType: 'Dummy Cartons',
        freezingType: 'Contact Plate Freezer',
        soaking: 'No (Unsoaked)',
        productCategory: 'Raw Frozen',
        abStatus: 'UNDER TEST',
        remarks: 'Awaiting final microbiological verification report',
        totalWeight: 1200.0,
        balanceWeight: 1200.0,
        coldStores: 'Chamber #2 (Block)',
        mcs: 100,
        balanceMcs: 100,
        looseBags: 6,
        palletId: 'PAL-2026-0446',
        rack: 'RACK-B3-T2',
        palletStatus: 'Pending Placement'
      },
      {
        id: 7,
        sNo: 7,
        productionPlant: 'DFL UNIT-5 (JPT)',
        productionDate: '2026-10-26',
        batchCodes: 'BCH-2026-869',
        transactionDate: '2026-10-26',
        group: 'Group A',
        stockBelongsTo: 'Devi Fisheries Ltd (DFL)',
        shift: 'Shift A (Day)',
        poNo: 'PO-2026-4428',
        variety: 'Vannamei Easy Peel IQF',
        packingStyle: '10x2lb Retail Pouch',
        grade: '26/30',
        packingType: '10x2lb Pouch',
        freezingType: 'IQF Tunnel',
        soaking: 'Yes (Non-Phosphate)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Retail supermarket barcode labels applied',
        totalWeight: 2000.0,
        balanceWeight: 1000.0,
        coldStores: 'Chamber #1 (IQF)',
        mcs: 200,
        balanceMcs: 100,
        looseBags: 15,
        palletId: 'PAL-2026-0447',
        rack: 'RACK-A2-T1',
        palletStatus: 'Placed in Store'
      },
      {
        id: 8,
        sNo: 8,
        productionPlant: 'DFL UNIT-4 (PND)',
        productionDate: '2026-10-26',
        batchCodes: 'BCH-2026-861',
        transactionDate: '2026-10-26',
        group: 'Group C',
        stockBelongsTo: 'Third-Party Co-Packing',
        shift: 'Shift B (Evening)',
        poNo: 'PO-2026-4431',
        variety: 'Black Tiger HOSO IQF',
        packingStyle: '10x1kg Net',
        grade: '16/20',
        packingType: 'Master Cartons',
        freezingType: 'IQF Tunnel',
        soaking: 'No (Unsoaked)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        remarks: 'Third party inventory held under contract',
        totalWeight: 1500.0,
        balanceWeight: 1500.0,
        coldStores: 'Chamber #1 (IQF)',
        mcs: 150,
        balanceMcs: 150,
        looseBags: 10,
        palletId: 'PAL-2026-0448',
        rack: 'RACK-C1-T1',
        palletStatus: 'Placed in Store'
      }
    ],
    get stockList() {
      return this.stockInList;
    },

    // 3b. Stock Out Inventory Records (Devi Fisheries Standard)
    stockOutList: [
      {
        id: 1,
        sNo: 1,
        location: 'Chamber #1 (IQF) - Bay A1',
        coldStores: 'Chamber #1 (IQF)',
        blocks: 'Block A',
        poNo: 'PO-2026-4401',
        productionDate: '2026-10-29',
        transactionDate: '2026-10-29',
        variety: 'Vannamei (White Shrimp)',
        grade: '31/40',
        species: 'Litopenaeus Vannamei',
        freezingType: 'IQF Tunnel',
        soaking: 'Yes (Non-Phosphate)',
        typeOfProduct: 'Raw Frozen',
        product: 'Vannamei PD IQF',
        mcs: 180,
        looseBags: 18,
        packingStyle: '10x1kg Net',
        packingType: 'Master Cartons',
        abStatus: 'PASSED (AB Negative)',
        productCategory: 'Raw Frozen'
      },
      {
        id: 2,
        sNo: 2,
        location: 'Chamber #2 (Block) - Bay B1',
        coldStores: 'Chamber #2 (Block)',
        blocks: 'Block B',
        poNo: 'PO-2026-4402',
        productionDate: '2026-10-29',
        transactionDate: '2026-10-29',
        variety: 'Black Tiger (Monodon)',
        grade: '16/20',
        species: 'Penaeus Monodon',
        freezingType: 'Contact Plate Freezer',
        soaking: 'No (Unsoaked)',
        typeOfProduct: 'Raw Frozen',
        product: 'Black Tiger Block Frozen',
        mcs: 200,
        looseBags: 12,
        packingStyle: '6x2kg Block',
        packingType: '6x2kg Block',
        abStatus: 'PASSED (AB Negative)',
        productCategory: 'Raw Frozen'
      },
      {
        id: 3,
        sNo: 3,
        location: 'Vault #3 Staging - Bay C2',
        coldStores: 'Vault #3 Staging',
        blocks: 'Block C',
        poNo: 'PO-2026-4403',
        productionDate: '2026-10-28',
        transactionDate: '2026-10-28',
        variety: 'Vannamei (White Shrimp)',
        grade: '26/30',
        species: 'Litopenaeus Vannamei',
        freezingType: 'Blast Freezer',
        soaking: 'Yes (STPP Treated)',
        typeOfProduct: 'Cooked Frozen',
        product: 'Sea Pearl Cooked PDTO',
        mcs: 220,
        looseBags: 20,
        packingStyle: '5x2kg IQF Poly',
        packingType: 'Master Cartons',
        abStatus: 'PASSED (AB Negative)',
        productCategory: 'Cooked Frozen'
      },
      {
        id: 4,
        sNo: 4,
        location: 'Chamber #1 (IQF) - Bay A3',
        coldStores: 'Chamber #1 (IQF)',
        blocks: 'Block A',
        poNo: 'PO-2026-4404',
        productionDate: '2026-10-28',
        transactionDate: '2026-10-28',
        variety: 'Scampi (Macrobrachium)',
        grade: '11/15',
        species: 'Macrobrachium rosenbergii',
        freezingType: 'Contact Plate Freezer',
        soaking: 'No (Unsoaked)',
        typeOfProduct: 'Raw Frozen',
        product: 'Scampi Headless Block',
        mcs: 120,
        looseBags: 8,
        packingStyle: '6x2kg Block',
        packingType: 'Dummy Cartons',
        abStatus: 'PASSED (AB Negative)',
        productCategory: 'Raw Frozen'
      },
      {
        id: 5,
        sNo: 5,
        location: 'Chamber #3 (Blast) - Bay D1',
        coldStores: 'Chamber #3 (Blast)',
        blocks: 'Block D',
        poNo: 'PO-2026-4405',
        productionDate: '2026-10-27',
        transactionDate: '2026-10-27',
        variety: 'Vannamei (White Shrimp)',
        grade: '41/50',
        species: 'Litopenaeus Vannamei',
        freezingType: 'Semi-IQF Spiral',
        soaking: 'Yes (Non-Phosphate)',
        typeOfProduct: 'Blanched Frozen',
        product: 'Vannamei Easy Peel Blanched',
        mcs: 160,
        looseBags: 15,
        packingStyle: '10x2lb Pouch',
        packingType: '10x2lb Pouch',
        abStatus: 'PASSED (AB Negative)',
        productCategory: 'Blanched Frozen'
      },
      {
        id: 6,
        sNo: 6,
        location: 'Chamber #2 (Block) - Bay B3',
        coldStores: 'Chamber #2 (Block)',
        blocks: 'Block B',
        poNo: 'PO-2026-4406',
        productionDate: '2026-10-27',
        transactionDate: '2026-10-27',
        variety: 'Black Tiger (Monodon)',
        grade: '21/25',
        species: 'Penaeus Monodon',
        freezingType: 'IQF Tunnel',
        soaking: 'Yes (Non-Phosphate)',
        typeOfProduct: 'Raw Frozen',
        product: 'Black Tiger HOSO IQF',
        mcs: 140,
        looseBags: 10,
        packingStyle: '10x1kg Net',
        packingType: 'Master Cartons',
        abStatus: 'UNDER TEST',
        productCategory: 'Raw Frozen'
      },
      {
        id: 7,
        sNo: 7,
        location: 'Vault #3 Staging - Bay C1',
        coldStores: 'Vault #3 Staging',
        blocks: 'Block C',
        poNo: 'PO-2026-4407',
        productionDate: '2026-10-26',
        transactionDate: '2026-10-26',
        variety: 'Sea Pearl Cooked PDTO',
        grade: '31/40',
        species: 'Litopenaeus Vannamei',
        freezingType: 'Blast Freezer',
        soaking: 'Yes (STPP Treated)',
        typeOfProduct: 'Value-Added',
        product: 'Cooked Tail-On Butterfly',
        mcs: 190,
        looseBags: 14,
        packingStyle: '5x2kg IQF Poly',
        packingType: '5x2kg IQF Poly',
        abStatus: 'PASSED (AB Negative)',
        productCategory: 'Value-Added'
      },
      {
        id: 8,
        sNo: 8,
        location: 'Chamber #1 (IQF) - Bay A4',
        coldStores: 'Chamber #1 (IQF)',
        blocks: 'Block A',
        poNo: 'PO-2026-4408',
        productionDate: '2026-10-26',
        transactionDate: '2026-10-26',
        variety: 'Vannamei (White Shrimp)',
        grade: '16/20',
        species: 'Litopenaeus Vannamei',
        freezingType: 'IQF Tunnel',
        soaking: 'No (Unsoaked)',
        typeOfProduct: 'Raw Frozen',
        product: 'Vannamei HLSO IQF',
        mcs: 175,
        looseBags: 12,
        packingStyle: '10x1kg Net',
        packingType: 'Master Cartons',
        abStatus: 'AWAITING LAB',
        productCategory: 'Raw Frozen'
      }
    ],

    // 2c. Running Orders List (User-Specified Columns & Filters)
    runningOrdersList: [
      {
        sNo: 1,
        id: 'RO-2026-001',
        pInvNo: 'PI-2026-881',
        pInvDate: '2026-10-15',
        poNo: 'PO-2026-4401',
        poDate: '2026-10-18',
        country: 'U.S.A.',
        buyer: 'Pacific Seafood Group Inc.',
        masterStatus: 'Ready for Stuffing',
        dummyStatus: 'Completed',
        coldStores: 'Chamber #1 (IQF)',
        consignee: 'Pacific Imports LLC',
        exporters: 'Devi Fisheries Ltd',
        processor: 'DFL UNIT-5 (JPT)',
        productCategory: 'Raw Frozen'
      },
      {
        sNo: 2,
        id: 'RO-2026-002',
        pInvNo: 'PI-2026-882',
        pInvDate: '2026-10-16',
        poNo: 'PO-2026-4402',
        poDate: '2026-10-19',
        country: 'Japan',
        buyer: 'Tokyo Global Fishery Co.',
        masterStatus: 'Partially Allocated',
        dummyStatus: 'Active',
        coldStores: 'Chamber #2 (Block)',
        consignee: 'Nippon Coldchain Corp',
        exporters: 'Devi Fisheries Ltd',
        processor: 'DFL UNIT-4 (PND)',
        productCategory: 'Raw Frozen'
      },
      {
        sNo: 3,
        id: 'RO-2026-003',
        pInvNo: 'PI-2026-883',
        pInvDate: '2026-10-18',
        poNo: 'PO-2026-4403',
        poDate: '2026-10-20',
        country: 'Netherlands',
        buyer: 'Nordic Crustacean B.V.',
        masterStatus: 'Ready for Stuffing',
        dummyStatus: 'Completed',
        coldStores: 'Vault #3 Staging',
        consignee: 'EuroSea Rotterdam B.V.',
        exporters: 'DFL Export Division',
        processor: 'DFL UNIT-3 (PSP)',
        productCategory: 'Cooked Frozen'
      },
      {
        sNo: 4,
        id: 'RO-2026-004',
        pInvNo: 'PI-2026-884',
        pInvDate: '2026-10-20',
        poNo: 'PO-2026-4404',
        poDate: '2026-10-22',
        country: 'United Kingdom',
        buyer: 'British Ocean Foods Ltd.',
        masterStatus: 'In Allocation',
        dummyStatus: 'In Progress',
        coldStores: 'Chamber #1 (IQF)',
        consignee: 'UK Oceanic Distrib',
        exporters: 'Devi Fisheries Ltd',
        processor: 'DFL UNIT-1 (VSP)',
        productCategory: 'Value-Added'
      },
      {
        sNo: 5,
        id: 'RO-2026-005',
        pInvNo: 'PI-2026-885',
        pInvDate: '2026-10-21',
        poNo: 'PO-2026-4405',
        poDate: '2026-10-23',
        country: 'Canada',
        buyer: 'Maple Leaf Seafoods Ltd.',
        masterStatus: 'Awaiting Inspection',
        dummyStatus: 'Pending',
        coldStores: 'Chamber #3 (Blast)',
        consignee: 'CanSeafood Toronto',
        exporters: 'Devi Aqua Feeds',
        processor: 'DFL UNIT-5 (JPT)',
        productCategory: 'Blanched Frozen'
      },
      {
        sNo: 6,
        id: 'RO-2026-006',
        pInvNo: 'PI-2026-886',
        pInvDate: '2026-10-22',
        poNo: 'PO-2026-4406',
        poDate: '2026-10-24',
        country: 'U.S.A.',
        buyer: 'Great American Seafood Co.',
        masterStatus: 'Approved',
        dummyStatus: 'Active',
        coldStores: 'Chamber #1 (IQF)',
        consignee: 'Pacific Imports LLC',
        exporters: 'Devi Fisheries Ltd',
        processor: 'DFL UNIT-4 (PND)',
        productCategory: 'Raw Frozen'
      },
      {
        sNo: 7,
        id: 'RO-2026-007',
        pInvNo: 'PI-2026-887',
        pInvDate: '2026-10-24',
        poNo: 'PO-2026-4407',
        poDate: '2026-10-26',
        country: 'Australia',
        buyer: 'Southern Ocean Harvest Pty',
        masterStatus: 'In Allocation',
        dummyStatus: 'In Progress',
        coldStores: 'Chamber #2 (Block)',
        consignee: 'Sydney Cold Storage',
        exporters: 'DFL Export Division',
        processor: 'DFL UNIT-3 (PSP)',
        productCategory: 'Raw Frozen'
      },
      {
        sNo: 8,
        id: 'RO-2026-008',
        pInvNo: 'PI-2026-888',
        pInvDate: '2026-10-25',
        poNo: 'PO-2026-4408',
        poDate: '2026-10-27',
        country: 'Germany',
        buyer: 'Hanseatic Fish Import GmbH',
        masterStatus: 'Ready for Stuffing',
        dummyStatus: 'Completed',
        coldStores: 'Vault #3 Staging',
        consignee: 'Hamburg Port Terminal',
        exporters: 'Devi Fisheries Ltd',
        processor: 'DFL UNIT-5 (JPT)',
        productCategory: 'Cooked Frozen'
      }
    ],

    // 2d. Orders Status List (User-Specified Columns & Filters)
    orderStatusList: [
      {
        sNo: 1,
        buyer: 'Pacific Seafood Group Inc.',
        poNo: 'PO-2026-4401',
        brand: 'Devi Royal',
        shipmentDate: '2026-11-04',
        supc: 'SUPC-88102',
        product: 'Vannamei PD IQF 31/40',
        variety: 'Vannamei (White Shrimp)',
        freezingType: 'IQF Tunnel',
        soakingType: 'Non-Phosphate',
        packing: '10x1kg Net',
        grade: '31/40',
        orderedMcs: 1200,
        finalMcs: 1200,
        balMcs: 0,
        orderedKgs: 12000.0,
        finalKgs: 12000.0,
        balKgs: 0.0,
        avalInStoreKgs: 14500.0,
        avalStoreMcs: 1450,
        headOnCount: '35-40 pcs/kg',
        qtyInKgs: 12000.0,
        qtyInTons: 12.00,
        status: 'Ready for Stuffing',
        coldStores: 'Chamber #1 (IQF)',
        consignee: 'Pacific Imports LLC',
        soaking: 'Yes (Non-Phosphate)',
        packingStyle: '10x1kg Net',
        exporters: 'Devi Fisheries Ltd',
        processor: 'DFL UNIT-5 (JPT)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)'
      },
      {
        sNo: 2,
        buyer: 'Tokyo Global Fishery Co.',
        poNo: 'PO-2026-4402',
        brand: 'Bay Harvest',
        shipmentDate: '2026-11-08',
        supc: 'SUPC-77419',
        product: 'Black Tiger Block 16/20',
        variety: 'Black Tiger (Monodon)',
        freezingType: 'Contact Plate Freezer',
        soakingType: 'Unsoaked',
        packing: '6x2kg Block',
        grade: '16/20',
        orderedMcs: 925,
        finalMcs: 750,
        balMcs: 175,
        orderedKgs: 11100.0,
        finalKgs: 9000.0,
        balKgs: 2100.0,
        avalInStoreKgs: 9000.0,
        avalStoreMcs: 750,
        headOnCount: '18-22 pcs/kg',
        qtyInKgs: 9000.0,
        qtyInTons: 9.00,
        status: 'Partially Allocated',
        coldStores: 'Chamber #2 (Block)',
        consignee: 'Nippon Coldchain Corp',
        soaking: 'No (Unsoaked)',
        packingStyle: '6x2kg Block',
        exporters: 'Devi Fisheries Ltd',
        processor: 'DFL UNIT-4 (PND)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)'
      },
      {
        sNo: 3,
        buyer: 'Nordic Crustacean B.V.',
        poNo: 'PO-2026-4403',
        brand: 'Ocean Jewel',
        shipmentDate: '2026-11-12',
        supc: 'SUPC-90234',
        product: 'Vannamei HOSO IQF 26/30',
        variety: 'Vannamei (White Shrimp)',
        freezingType: 'IQF Tunnel',
        soakingType: 'Non-Phosphate',
        packing: '10x1kg Net',
        grade: '26/30',
        orderedMcs: 1100,
        finalMcs: 1100,
        balMcs: 0,
        orderedKgs: 11000.0,
        finalKgs: 11000.0,
        balKgs: 0.0,
        avalInStoreKgs: 13200.0,
        avalStoreMcs: 1320,
        headOnCount: '28-32 pcs/kg',
        qtyInKgs: 11000.0,
        qtyInTons: 11.00,
        status: 'Ready for Stuffing',
        coldStores: 'Vault #3 Staging',
        consignee: 'EuroSea Rotterdam B.V.',
        soaking: 'Yes (Non-Phosphate)',
        packingStyle: '10x1kg Net',
        exporters: 'DFL Export Division',
        processor: 'DFL UNIT-3 (PSP)',
        productCategory: 'Cooked Frozen',
        abStatus: 'PASSED (AB Negative)'
      },
      {
        sNo: 4,
        buyer: 'British Ocean Foods Ltd.',
        poNo: 'PO-2026-4404',
        brand: 'Sea Pearl',
        shipmentDate: '2026-11-15',
        supc: 'SUPC-66321',
        product: 'Vannamei Cooked PDTO 21/25',
        variety: 'Sea Pearl Cooked PDTO',
        freezingType: 'Semi-IQF Spiral',
        soakingType: 'STPP Treated',
        packing: '5x2kg Net',
        grade: '21/25',
        orderedMcs: 600,
        finalMcs: 400,
        balMcs: 200,
        orderedKgs: 6000.0,
        finalKgs: 4000.0,
        balKgs: 2000.0,
        avalInStoreKgs: 4000.0,
        avalStoreMcs: 400,
        headOnCount: '23-27 pcs/kg',
        qtyInKgs: 4000.0,
        qtyInTons: 4.00,
        status: 'In Allocation',
        coldStores: 'Chamber #1 (IQF)',
        consignee: 'UK Oceanic Distrib',
        soaking: 'Yes (STPP Treated)',
        packingStyle: '5x2kg Net',
        exporters: 'Devi Fisheries Ltd',
        processor: 'DFL UNIT-1 (VSP)',
        productCategory: 'Value-Added',
        abStatus: 'UNDER TEST'
      },
      {
        sNo: 5,
        buyer: 'Maple Leaf Seafoods Ltd.',
        poNo: 'PO-2026-4405',
        brand: 'Arctic Catch',
        shipmentDate: '2026-11-18',
        supc: 'SUPC-55109',
        product: 'Scampi Headless Block 16/20',
        variety: 'Scampi (Macrobrachium)',
        freezingType: 'Blast Freezer',
        soakingType: 'Unsoaked',
        packing: '6x2kg Block',
        grade: '16/20',
        orderedMcs: 500,
        finalMcs: 0,
        balMcs: 500,
        orderedKgs: 6000.0,
        finalKgs: 0.0,
        balKgs: 6000.0,
        avalInStoreKgs: 2400.0,
        avalStoreMcs: 200,
        headOnCount: '17-21 pcs/kg',
        qtyInKgs: 0.0,
        qtyInTons: 0.00,
        status: 'Under Inspection',
        coldStores: 'Chamber #3 (Blast)',
        consignee: 'CanSeafood Toronto',
        soaking: 'No (Unsoaked)',
        packingStyle: '6x2kg Block',
        exporters: 'Devi Aqua Feeds',
        processor: 'DFL UNIT-5 (JPT)',
        productCategory: 'Blanched Frozen',
        abStatus: 'AWAITING LAB'
      },
      {
        sNo: 6,
        buyer: 'Great American Seafood Co.',
        poNo: 'PO-2026-4406',
        brand: 'Devi Royal',
        shipmentDate: '2026-11-02',
        supc: 'SUPC-44281',
        product: 'Vannamei HLSO IQF 41/50',
        variety: 'Vannamei (White Shrimp)',
        freezingType: 'IQF Tunnel',
        soakingType: 'Non-Phosphate',
        packing: '10x1kg Net',
        grade: '41/50',
        orderedMcs: 1500,
        finalMcs: 1500,
        balMcs: 0,
        orderedKgs: 15000.0,
        finalKgs: 15000.0,
        balKgs: 0.0,
        avalInStoreKgs: 15000.0,
        avalStoreMcs: 1500,
        headOnCount: '45-50 pcs/kg',
        qtyInKgs: 15000.0,
        qtyInTons: 15.00,
        status: 'Shipped',
        coldStores: 'Chamber #1 (IQF)',
        consignee: 'Pacific Imports LLC',
        soaking: 'Yes (Non-Phosphate)',
        packingStyle: '10x1kg Net',
        exporters: 'Devi Fisheries Ltd',
        processor: 'DFL UNIT-4 (PND)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)'
      },
      {
        sNo: 7,
        buyer: 'Southern Ocean Harvest Pty',
        poNo: 'PO-2026-4407',
        brand: 'Bay Harvest',
        shipmentDate: '2026-11-20',
        supc: 'SUPC-33190',
        product: 'Vannamei Easy Peel IQF U-15',
        variety: 'Vannamei (White Shrimp)',
        freezingType: 'IQF Tunnel',
        soakingType: 'Non-Phosphate',
        packing: '10x2lb',
        grade: 'U-15',
        orderedMcs: 800,
        finalMcs: 650,
        balMcs: 150,
        orderedKgs: 7257.5,
        finalKgs: 5896.7,
        balKgs: 1360.8,
        avalInStoreKgs: 5896.7,
        avalStoreMcs: 650,
        headOnCount: '12-15 pcs/kg',
        qtyInKgs: 5896.7,
        qtyInTons: 5.90,
        status: 'In Allocation',
        coldStores: 'Chamber #2 (Block)',
        consignee: 'Sydney Cold Storage',
        soaking: 'Yes (Non-Phosphate)',
        packingStyle: '10x2lb',
        exporters: 'DFL Export Division',
        processor: 'DFL UNIT-3 (PSP)',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)'
      },
      {
        sNo: 8,
        buyer: 'Hanseatic Fish Import GmbH',
        poNo: 'PO-2026-4408',
        brand: 'Ocean Jewel',
        shipmentDate: '2026-11-06',
        supc: 'SUPC-22075',
        product: 'Vannamei Cooked IQF 31/40',
        variety: 'Vannamei (White Shrimp)',
        freezingType: 'IQF Tunnel',
        soakingType: 'Non-Phosphate',
        packing: '10x1kg Net',
        grade: '31/40',
        orderedMcs: 1400,
        finalMcs: 1400,
        balMcs: 0,
        orderedKgs: 14000.0,
        finalKgs: 14000.0,
        balKgs: 0.0,
        avalInStoreKgs: 16800.0,
        avalStoreMcs: 1680,
        headOnCount: '35-40 pcs/kg',
        qtyInKgs: 14000.0,
        qtyInTons: 14.00,
        status: 'Ready for Stuffing',
        coldStores: 'Vault #3 Staging',
        consignee: 'Hamburg Port Terminal',
        soaking: 'Yes (Non-Phosphate)',
        packingStyle: '10x1kg Net',
        exporters: 'Devi Fisheries Ltd',
        processor: 'DFL UNIT-5 (JPT)',
        productCategory: 'Cooked Frozen',
        abStatus: 'PASSED (AB Negative)'
      }
    ],

    // 2e. Shipments List (User-Specified Columns & Filters)
    shipmentsList: [
      {
        sNo: 1,
        cInvNo: 'CI-2026-901',
        cInvDate: '2026-10-22',
        poNo: 'PO-2026-4401',
        poDate: '2026-10-18',
        shipmentDate: '2026-10-24',
        eta: '2026-11-14',
        coldStores: 'Chamber #1 (IQF)',
        country: 'U.S.A.',
        exporters: 'Devi Fisheries Ltd',
        productCategory: 'Raw Frozen',
        year: '2026',
        buyer: 'Pacific Seafood Group Inc.',
        vesselName: 'MSC ARIES V.2604',
        portOfLoading: 'Visakhapatnam (INVTZ)',
        portOfDischarge: 'Los Angeles (USLAX)',
        containerNo: 'MSCU-902144-8',
        sealNo: 'SL-DFL-8821',
        totalMcs: 1200,
        totalKgs: 12000.0,
        status: 'In Transit'
      },
      {
        sNo: 2,
        cInvNo: 'CI-2026-902',
        cInvDate: '2026-10-20',
        poNo: 'PO-2026-4402',
        poDate: '2026-10-16',
        shipmentDate: '2026-10-23',
        eta: '2026-11-08',
        coldStores: 'Chamber #2 (Block)',
        country: 'Japan',
        exporters: 'Devi Fisheries Ltd',
        productCategory: 'Raw Frozen',
        year: '2026',
        buyer: 'Tokyo Global Fishery Co.',
        vesselName: 'ONE HARBOR V.108',
        portOfLoading: 'Visakhapatnam (INVTZ)',
        portOfDischarge: 'Yokohama (JPYOK)',
        containerNo: 'ONEY-773412-1',
        sealNo: 'SL-DFL-8822',
        totalMcs: 750,
        totalKgs: 9000.0,
        status: 'In Transit'
      },
      {
        sNo: 3,
        cInvNo: 'CI-2026-903',
        cInvDate: '2026-10-18',
        poNo: 'PO-2026-4403',
        poDate: '2026-10-12',
        shipmentDate: '2026-10-21',
        eta: '2026-11-18',
        coldStores: 'Vault #3 Staging',
        country: 'Netherlands',
        exporters: 'DFL Export Division',
        productCategory: 'Cooked Frozen',
        year: '2026',
        buyer: 'Nordic Crustacean B.V.',
        vesselName: 'MAERSK MC-KINNEY V.412',
        portOfLoading: 'Visakhapatnam (INVTZ)',
        portOfDischarge: 'Rotterdam (NLRTM)',
        containerNo: 'MSKU-440192-3',
        sealNo: 'SL-DFL-8823',
        totalMcs: 1100,
        totalKgs: 11000.0,
        status: 'In Transit'
      },
      {
        sNo: 4,
        cInvNo: 'CI-2026-904',
        cInvDate: '2026-10-15',
        poNo: 'PO-2026-4406',
        poDate: '2026-10-10',
        shipmentDate: '2026-10-19',
        eta: '2026-11-10',
        coldStores: 'Chamber #1 (IQF)',
        country: 'U.S.A.',
        exporters: 'Devi Fisheries Ltd',
        productCategory: 'Raw Frozen',
        year: '2026',
        buyer: 'Great American Seafood Co.',
        vesselName: 'CMA CGM CORTE REAL V.091',
        portOfLoading: 'Visakhapatnam (INVTZ)',
        portOfDischarge: 'Savannah (USSAV)',
        containerNo: 'CMAU-663810-9',
        sealNo: 'SL-DFL-8824',
        totalMcs: 1500,
        totalKgs: 15000.0,
        status: 'In Transit'
      },
      {
        sNo: 5,
        cInvNo: 'CI-2026-905',
        cInvDate: '2026-10-12',
        poNo: 'PO-2026-4408',
        poDate: '2026-10-08',
        shipmentDate: '2026-10-16',
        eta: '2026-11-12',
        coldStores: 'Vault #3 Staging',
        country: 'Germany',
        exporters: 'Devi Fisheries Ltd',
        productCategory: 'Cooked Frozen',
        year: '2026',
        buyer: 'Hanseatic Fish Import GmbH',
        vesselName: 'HAPAG AL JASRAH V.33',
        portOfLoading: 'Visakhapatnam (INVTZ)',
        portOfDischarge: 'Hamburg (DEHAM)',
        containerNo: 'HLXU-882104-5',
        sealNo: 'SL-DFL-8825',
        totalMcs: 1400,
        totalKgs: 14000.0,
        status: 'In Transit'
      },
      {
        sNo: 6,
        cInvNo: 'CI-2025-781',
        cInvDate: '2025-12-10',
        poNo: 'PO-2025-3891',
        poDate: '2025-12-01',
        shipmentDate: '2025-12-14',
        eta: '2026-01-05',
        coldStores: 'Chamber #2 (Block)',
        country: 'Australia',
        exporters: 'DFL Export Division',
        productCategory: 'Raw Frozen',
        year: '2025',
        buyer: 'Southern Ocean Harvest Pty',
        vesselName: 'ANL WANGARATTA V.12',
        portOfLoading: 'Visakhapatnam (INVTZ)',
        portOfDischarge: 'Sydney (AUSYD)',
        containerNo: 'ANLU-551920-2',
        sealNo: 'SL-DFL-7719',
        totalMcs: 800,
        totalKgs: 8000.0,
        status: 'Delivered'
      },
      {
        sNo: 7,
        cInvNo: 'CI-2025-782',
        cInvDate: '2025-11-20',
        poNo: 'PO-2025-3742',
        poDate: '2025-11-14',
        shipmentDate: '2025-11-25',
        eta: '2025-12-20',
        coldStores: 'Chamber #3 (Blast)',
        country: 'Canada',
        exporters: 'Devi Aqua Feeds',
        productCategory: 'Blanched Frozen',
        year: '2025',
        buyer: 'Maple Leaf Seafoods Ltd.',
        vesselName: 'ZIM KINGSTON V.48',
        portOfLoading: 'Visakhapatnam (INVTZ)',
        portOfDischarge: 'Vancouver (CAVAN)',
        containerNo: 'ZIMU-332918-0',
        sealNo: 'SL-DFL-7681',
        totalMcs: 950,
        totalKgs: 9500.0,
        status: 'Delivered'
      },
      {
        sNo: 8,
        cInvNo: 'CI-2024-512',
        cInvDate: '2024-10-14',
        poNo: 'PO-2024-2910',
        poDate: '2024-10-05',
        shipmentDate: '2024-10-18',
        eta: '2024-11-12',
        coldStores: 'Chamber #1 (IQF)',
        country: 'United Kingdom',
        exporters: 'Devi Fisheries Ltd',
        productCategory: 'Value-Added',
        year: '2024',
        buyer: 'British Ocean Foods Ltd.',
        vesselName: 'EVER GIVEN V.881',
        portOfLoading: 'Visakhapatnam (INVTZ)',
        portOfDischarge: 'Felixstowe (GBFXT)',
        containerNo: 'EGLV-991044-6',
        sealNo: 'SL-DFL-6401',
        totalMcs: 600,
        totalKgs: 6000.0,
        status: 'Delivered'
      }
    ],

    // 2f. Floor Stock Inventory (View Stock Tab)
    floorStockList: [
      {
        sNo: 1,
        bid: 'BID-2026-901',
        date: '2026-10-29',
        trackCode: 'TRK-2026-081',
        group: 'Group A',
        variety: 'Vannamei (White Shrimp)',
        grade: '31/40',
        soaking: 'Yes (Non-Phosphate)',
        species: 'Litopenaeus Vannamei',
        packingType: 'Master Cartons',
        brandName: 'Devi Royal',
        brand: 'Devi Royal',
        packingStyle: '10x1kg Net',
        category: 'Raw Frozen',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        poNo: 'PO-2026-4401',
        mcs: 240,
        loose: 12,
        looseBags: 12,
        store: 'Chamber #1 (IQF)',
        coldStores: 'Chamber #1 (IQF)',
        stockBelongsTo: 'Devi Fisheries Ltd (DFL)',
        blocks: 'Block A',
        typeProduct: 'Raw Frozen',
        freezingType: 'IQF Tunnel',
        stockType: 'Floor Stock',
        location: 'CH-1 / BAY-A01',
        totalWeight: 2400.0,
        palletTag: 'PAL-2026-0451',
        status: 'Available on Floor'
      },
      {
        sNo: 2,
        bid: 'BID-2026-902',
        date: '2026-10-29',
        trackCode: 'TRK-2026-082',
        group: 'Group B',
        variety: 'Black Tiger (Monodon)',
        grade: '16/20',
        soaking: 'No (Unsoaked)',
        species: 'Penaeus Monodon',
        packingType: 'Export Corrugated',
        brandName: 'Bay Harvest',
        brand: 'Bay Harvest',
        packingStyle: '6x2kg Block',
        category: 'Raw Frozen',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        poNo: 'PO-2026-4402',
        mcs: 180,
        loose: 8,
        looseBags: 8,
        store: 'Chamber #2 (Block)',
        coldStores: 'Chamber #2 (Block)',
        stockBelongsTo: 'DFL Unit-4 (PND)',
        blocks: 'Block B',
        typeProduct: 'Raw Frozen',
        freezingType: 'Contact Plate Freezer',
        stockType: 'Floor Stock',
        location: 'CH-2 / BAY-B04',
        totalWeight: 2160.0,
        palletTag: 'PAL-2026-0452',
        status: 'Available on Floor'
      },
      {
        sNo: 3,
        bid: 'BID-2026-903',
        date: '2026-10-28',
        trackCode: 'TRK-2026-083',
        group: 'Group C',
        variety: 'Vannamei (White Shrimp)',
        grade: '26/30',
        soaking: 'Yes (Non-Phosphate)',
        species: 'Litopenaeus Vannamei',
        packingType: 'Master Cartons',
        brandName: 'Ocean Jewel',
        brand: 'Ocean Jewel',
        packingStyle: '10x1kg Net',
        category: 'Cooked Frozen',
        productCategory: 'Cooked Frozen',
        abStatus: 'PASSED (AB Negative)',
        poNo: 'PO-2026-4403',
        mcs: 310,
        loose: 0,
        looseBags: 0,
        store: 'Vault #3 Staging',
        coldStores: 'Vault #3 Staging',
        stockBelongsTo: 'DFL Unit-3 (PSP)',
        blocks: 'Block C',
        typeProduct: 'Cooked Frozen',
        freezingType: 'IQF Tunnel',
        stockType: 'Allocated Stock',
        location: 'VAULT-3 / STG-02',
        totalWeight: 3100.0,
        palletTag: 'PAL-2026-0453',
        status: 'Staged for Outward'
      },
      {
        sNo: 4,
        bid: 'BID-2026-904',
        date: '2026-10-28',
        trackCode: 'TRK-2026-084',
        group: 'Group A',
        variety: 'Sea Pearl Cooked PDTO',
        grade: '21/25',
        soaking: 'Yes (STPP Treated)',
        species: 'Litopenaeus Vannamei',
        packingType: 'Inner Polybag',
        brandName: 'Sea Pearl',
        brand: 'Sea Pearl',
        packingStyle: '5x2kg Net',
        category: 'Value-Added',
        productCategory: 'Value-Added',
        abStatus: 'UNDER TEST',
        poNo: 'PO-2026-4404',
        mcs: 150,
        loose: 5,
        looseBags: 5,
        store: 'Chamber #1 (IQF)',
        coldStores: 'Chamber #1 (IQF)',
        stockBelongsTo: 'DFL Unit-1 (VSP)',
        blocks: 'Block A',
        typeProduct: 'Value-Added',
        freezingType: 'Semi-IQF Spiral',
        stockType: 'Floor Stock',
        location: 'CH-1 / BAY-A09',
        totalWeight: 1500.0,
        palletTag: 'PAL-2026-0454',
        status: 'Available on Floor'
      },
      {
        sNo: 5,
        bid: 'BID-2026-905',
        date: '2026-10-27',
        trackCode: 'TRK-2026-085',
        group: 'Group D',
        variety: 'Scampi (Macrobrachium)',
        grade: '16/20',
        soaking: 'No (Unsoaked)',
        species: 'Macrobrachium rosenbergii',
        packingType: 'Export Corrugated',
        brandName: 'Arctic Catch',
        brand: 'Arctic Catch',
        packingStyle: '6x2kg Block',
        category: 'Blanched Frozen',
        productCategory: 'Blanched Frozen',
        abStatus: 'AWAITING LAB',
        poNo: 'PO-2026-4405',
        mcs: 120,
        loose: 0,
        looseBags: 0,
        store: 'Chamber #3 (Blast)',
        coldStores: 'Chamber #3 (Blast)',
        stockBelongsTo: 'DFL Unit-5 (JPT)',
        blocks: 'Block D',
        typeProduct: 'Blanched Frozen',
        freezingType: 'Blast Freezer',
        stockType: 'Quarantine Stock',
        location: 'CH-3 / QRT-01',
        totalWeight: 1440.0,
        palletTag: 'PAL-2026-0455',
        status: 'Under Lab Hold'
      },
      {
        sNo: 6,
        bid: 'BID-2026-906',
        date: '2026-10-27',
        trackCode: 'TRK-2026-086',
        group: 'Group A',
        variety: 'Vannamei (White Shrimp)',
        grade: '41/50',
        soaking: 'Yes (Non-Phosphate)',
        species: 'Litopenaeus Vannamei',
        packingType: 'Master Cartons',
        brandName: 'Devi Royal',
        brand: 'Devi Royal',
        packingStyle: '10x1kg Net',
        category: 'Raw Frozen',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        poNo: 'PO-2026-4406',
        mcs: 450,
        loose: 15,
        looseBags: 15,
        store: 'Chamber #1 (IQF)',
        coldStores: 'Chamber #1 (IQF)',
        stockBelongsTo: 'Devi Fisheries Ltd (DFL)',
        blocks: 'Block A',
        typeProduct: 'Raw Frozen',
        freezingType: 'IQF Tunnel',
        stockType: 'Racked Stock',
        location: 'CH-1 / RACK-03',
        totalWeight: 4500.0,
        palletTag: 'PAL-2026-0456',
        status: 'Racked in Vault'
      },
      {
        sNo: 7,
        bid: 'BID-2026-907',
        date: '2026-10-26',
        trackCode: 'TRK-2026-087',
        group: 'Group B',
        variety: 'Vannamei (White Shrimp)',
        grade: 'U-15',
        soaking: 'Yes (Non-Phosphate)',
        species: 'Litopenaeus Vannamei',
        packingType: 'Outer Shipper',
        brandName: 'Bay Harvest',
        brand: 'Bay Harvest',
        packingStyle: '10x2lb',
        category: 'Raw Frozen',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        poNo: 'PO-2026-4407',
        mcs: 200,
        loose: 4,
        looseBags: 4,
        store: 'Chamber #2 (Block)',
        coldStores: 'Chamber #2 (Block)',
        stockBelongsTo: 'Third-Party Co-Packing',
        blocks: 'Block B',
        typeProduct: 'Raw Frozen',
        freezingType: 'IQF Tunnel',
        stockType: 'Floor Stock',
        location: 'CH-2 / BAY-B11',
        totalWeight: 1814.4,
        palletTag: 'PAL-2026-0457',
        status: 'Available on Floor'
      },
      {
        sNo: 8,
        bid: 'BID-2026-908',
        date: '2026-10-25',
        trackCode: 'TRK-2026-088',
        group: 'Group C',
        variety: 'Vannamei (White Shrimp)',
        grade: '31/40',
        soaking: 'Yes (Non-Phosphate)',
        species: 'Litopenaeus Vannamei',
        packingType: 'Master Cartons',
        brandName: 'Ocean Jewel',
        brand: 'Ocean Jewel',
        packingStyle: '10x1kg Net',
        category: 'Cooked Frozen',
        productCategory: 'Cooked Frozen',
        abStatus: 'PASSED (AB Negative)',
        poNo: 'PO-2026-4408',
        mcs: 380,
        loose: 20,
        looseBags: 20,
        store: 'Vault #3 Staging',
        coldStores: 'Vault #3 Staging',
        stockBelongsTo: 'Devi Fisheries Ltd (DFL)',
        blocks: 'Block C',
        typeProduct: 'Cooked Frozen',
        freezingType: 'IQF Tunnel',
        stockType: 'Floor Stock',
        location: 'VAULT-3 / FLR-05',
        totalWeight: 3800.0,
        palletTag: 'PAL-2026-0458',
        status: 'Available on Floor'
      }
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
      { id: 1, sNo: 1, orderNumber: 'IBT-2026-088', ibtCode: 'IBT-2026-088', orderDate: '2026-10-28', transferDate: '2026-10-28', fromStore: 'Chamber #1 (IQF)', toStore: 'Chamber #3 (Blast)', coldStore: 'Chamber #1 (IQF)', productCategory: 'Raw Frozen', ibtType: 'Inter-Plant Transfer', sourcePlant: 'DFL UNIT-5 (JPT)', destPlant: 'DFL UNIT-4 (PND)', product: 'Vannamei PD IQF 31/40', totalMcs: 480, totalNoOfBags: 4800, pallets: 12, weightMt: 5.76, vehicleNo: 'AP 39 TB 4412', status: 'In Transit' },
      { id: 2, sNo: 2, orderNumber: 'IBT-2026-087', ibtCode: 'IBT-2026-087', orderDate: '2026-10-27', transferDate: '2026-10-27', fromStore: 'Chamber #2 (Plate)', toStore: 'Main Cold Storage Plant 1', coldStore: 'Chamber #2 (Plate)', productCategory: 'Raw Frozen', ibtType: 'Inward Transfer', sourcePlant: 'DFL UNIT-3 (PSP)', destPlant: 'DFL UNIT-5 (JPT)', product: 'Black Tiger Block 16/20', totalMcs: 640, totalNoOfBags: 3840, pallets: 16, weightMt: 8.96, vehicleNo: 'AP 16 TX 9921', status: 'Received & Stored' },
      { id: 3, sNo: 3, orderNumber: 'IBT-2026-086', ibtCode: 'IBT-2026-086', orderDate: '2026-10-25', transferDate: '2026-10-25', fromStore: 'Chamber #1 (IQF)', toStore: 'Chamber #4 (Deep Freeze)', coldStore: 'Chamber #1 (IQF)', productCategory: 'Cooked Frozen', ibtType: 'Outward Transfer', sourcePlant: 'DFL UNIT-1 (VSP)', destPlant: 'DFL UNIT-5 (JPT)', product: 'Sea Pearl Cooked PDTO', totalMcs: 320, totalNoOfBags: 3200, pallets: 8, weightMt: 3.20, vehicleNo: 'AP 31 TC 1104', status: 'Received & Stored' },
      { id: 4, sNo: 4, orderNumber: 'IBT-2026-085', ibtCode: 'IBT-2026-085', orderDate: '2026-10-24', transferDate: '2026-10-24', fromStore: 'Chamber #3 (Blast)', toStore: 'Chamber #2 (Plate)', coldStore: 'Chamber #3 (Blast)', productCategory: 'Blanched Frozen', ibtType: 'Intra-Plant Relocation', sourcePlant: 'DFL UNIT-5 (JPT)', destPlant: 'DFL UNIT-6 (JPT-II)', product: 'Vannamei HLSO Block', totalMcs: 800, totalNoOfBags: 4800, pallets: 20, weightMt: 12.00, vehicleNo: 'AP 39 TB 5590', status: 'Gate Pass Dispatched' },
      { id: 5, sNo: 5, orderNumber: 'IBT-2026-084', ibtCode: 'IBT-2026-084', orderDate: '2026-09-18', transferDate: '2026-09-18', fromStore: 'Chamber #4 (Deep Freeze)', toStore: 'Chamber #1 (IQF)', coldStore: 'Chamber #4 (Deep Freeze)', productCategory: 'Raw Frozen', ibtType: 'Inter-Plant Transfer', sourcePlant: 'DFL UNIT-2 (KKL)', destPlant: 'DFL UNIT-5 (JPT)', product: 'Vannamei Cooked IQF 41/50', totalMcs: 560, totalNoOfBags: 5600, pallets: 14, weightMt: 6.72, vehicleNo: 'AP 39 TB 8820', status: 'Received & Stored' },
      { id: 6, sNo: 6, orderNumber: 'IBT-2026-083', ibtCode: 'IBT-2026-083', orderDate: '2026-08-11', transferDate: '2026-08-11', fromStore: 'Main Cold Storage Plant 1', toStore: 'Chamber #2 (Plate)', coldStore: 'Main Cold Storage Plant 1', productCategory: 'Value Added', ibtType: 'Inward Transfer', sourcePlant: 'DFL UNIT-4 (PND)', destPlant: 'DFL UNIT-1 (VSP)', product: 'Breaded Torpedo Shrimp', totalMcs: 450, totalNoOfBags: 4500, pallets: 10, weightMt: 4.50, vehicleNo: 'AP 16 TX 1102', status: 'Received & Stored' },
      { id: 7, sNo: 7, orderNumber: 'IBT-2025-072', ibtCode: 'IBT-2025-072', orderDate: '2025-11-15', transferDate: '2025-11-15', fromStore: 'Chamber #1 (IQF)', toStore: 'Main Cold Storage Plant 1', coldStore: 'Chamber #1 (IQF)', productCategory: 'Raw Frozen', ibtType: 'Inter-Plant Transfer', sourcePlant: 'DFL UNIT-5 (JPT)', destPlant: 'DFL UNIT-3 (PSP)', product: 'Vannamei Easy Peel IQF 26/30', totalMcs: 600, totalNoOfBags: 6000, pallets: 15, weightMt: 7.20, vehicleNo: 'AP 39 TB 3319', status: 'Received & Stored' },
      { id: 8, sNo: 8, orderNumber: 'IBT-2025-065', ibtCode: 'IBT-2025-065', orderDate: '2025-10-04', transferDate: '2025-10-04', fromStore: 'Chamber #2 (Plate)', toStore: 'Chamber #3 (Blast)', coldStore: 'Chamber #2 (Plate)', productCategory: 'Cooked Frozen', ibtType: 'Intra-Plant Relocation', sourcePlant: 'DFL UNIT-3 (PSP)', destPlant: 'DFL UNIT-1 (VSP)', product: 'Black Tiger HLSO 21/25', totalMcs: 720, totalNoOfBags: 4320, pallets: 18, weightMt: 9.00, vehicleNo: 'AP 16 TX 4402', status: 'Received & Stored' }
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
        if (tabId === 'stock-out' || tabId.includes('stock-out') || tabId.includes('stockout') || tabId.includes('outward')) {
          this.renderStockOut(contentEl);
        } else {
          this.renderStockIn(contentEl);
        }
        break;
      case 'orders':
        if (tabId === 'po-status-reports' || tabId.includes('status')) {
          this.renderOrdersStatus(contentEl);
        } else if (tabId === 'shipped-po-list' || tabId.includes('shipped') || tabId.includes('shipment')) {
          this.renderShipmentsList(contentEl);
        } else {
          this.renderRunningOrders(contentEl);
        }
        break;
      case 'store':
        if (tabId === 'view-store-layout' || tabId.includes('view-store')) {
          this.renderViewStore(contentEl);
        } else if (tabId === 'create-store-layout' || tabId.includes('rack') || tabId.includes('create-store')) {
          this.renderRackNames(contentEl);
        } else {
          this.renderViewStock(contentEl);
        }
        break;
      case 'stock-approvals':
        if (tabId === 'admin-inward-approval' || tabId.includes('inward')) {
          this.renderAdminInwardApproval(contentEl);
        } else {
          this.renderAdminDailyProductionList(contentEl);
        }
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
      tableTitle: 'Chamber Stock Summary',
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
              <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: currentColor; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </button>

            <button type="button" id="dp-filter-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
              <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: currentColor; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" id="dp-filter-toggle-icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
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
        tableTitle: 'Daily Production',
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
            render: (v, r) => `<span class="font-mono font-bold text-[#0284C7] hover:underline cursor-pointer whitespace-nowrap" onclick="event.stopPropagation(); window.__viewDailyProductionDetails && window.__viewDailyProductionDetails('${r.trackCode}')" title="Click to view batch details">${v}</span>`
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
        onRowClick: (row) => this.showDailyProductionDetailModal(row),
        actions: [
          {
            label: 'Add Intake',
            icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`,
            onClick: (row) => {
              this.showAddDailyProductionIntakeModal(row, () => renderTable(this.state.dailyProductionList || this.state.productionIntakeList || []));
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
  renderDailyStockOut(container, pageTitle = 'Daily StockOut') {
    const fullList = this.state.dailyStockOutList || [];

    // Global helper for link clicks
    window.__viewDailyStockOutDetails = (stockOutCode) => {
      const row = fullList.find(x => x.stockOutCode === stockOutCode);
      if (row) this.showDailyStockOutDetailModal(row);
    };

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header (No extra KPI cards, subheadings or pill badges) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">${pageTitle}</h1>
          </div>
        </div>

        <!-- Collapsible Top Filter Header Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="dso-filter-reset-btn"
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="dso-filter-toggle-btn"
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="dso-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (4 Columns) -->
          <div id="dso-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. STOCK OUT DATE * -->
            <div>
              <label for="dso-filter-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK OUT DATE <span class="text-red-500 font-black">*</span></label>
              <input type="date" id="dso-filter-date" value="2026-10-29" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
            </div>

            <!-- 2. STOCK BELONGS TO -->
            <div>
              <label for="dso-filter-stock-belongs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK BELONGS TO</label>
              <select id="dso-filter-stock-belongs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
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
              <label for="dso-filter-packing-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING TYPE</label>
              <select id="dso-filter-packing-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
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
              <label for="dso-filter-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP</label>
              <select id="dso-filter-group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Groups</option>
                <option value="Group A">Group A</option>
                <option value="Group B">Group B</option>
                <option value="Group C">Group C</option>
                <option value="Group D">Group D</option>
              </select>
            </div>

            <!-- Search Action Button Slot (Width Fitted) -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="dso-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                title="Search Filter Records"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="cs-daily-stockout-table"></div>
      </div>
    `;

    // Render Table Function with Exact User-Requested Columns (NO VIEW EYE ICON)
    const renderTable = (data) => {
      new DataTable({
        containerId: 'cs-daily-stockout-table',
        tableTitle: pageTitle,
        keyField: 'stockOutCode',
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showDailyStockOutDetailModal(row),
        columns: [
          // 1. S.NO
          {
            field: 'sNo',
            header: 'S.NO',
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Type
          {
            field: 'type',
            header: 'Type',
            sortable: true,
            render: v => {
              let badge = 'text-[#0284C7] bg-[#E0F2FE]';
              if (v === 'Domestic Dispatch') badge = 'text-[#00875A] bg-[#E3FCEF]';
              else if (v === 'IBT Transfer') badge = 'text-[#403294] bg-[#EAE6FF]';
              else if (v === 'Repacking / Thawing') badge = 'text-[#974F0C] bg-[#FFF0B3]';
              return `<span class="px-2 py-0.5 rounded text-[10px] font-bold ${badge} whitespace-nowrap">${v}</span>`;
            }
          },
          // 3. Supc
          {
            field: 'supc',
            header: 'Supc',
            sortable: true,
            render: (v, r) => `<span class="font-mono text-xs font-semibold text-[#0284C7] hover:underline cursor-pointer whitespace-nowrap" onclick="event.stopPropagation(); window.__viewDailyStockOutDetails && window.__viewDailyStockOutDetails('${r.stockOutCode}')" title="Click to view details">${v || '-'}</span>`
          },
          // 4. Product
          {
            field: 'product',
            header: 'Product',
            sortable: true,
            render: v => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 5. Grade
          {
            field: 'grade',
            header: 'Grade',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 6. Packing Type
          {
            field: 'packingType',
            header: 'Packing Type',
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 7. Packing Style
          {
            field: 'packingStyle',
            header: 'Packing Style',
            render: v => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 8. Mcs
          {
            field: 'mcs',
            header: 'Mcs',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-[#172B4D]">${Number(v || 0).toLocaleString()}</span>`
          },
          // 9. Bags
          {
            field: 'bags',
            header: 'Bags',
            sortable: true,
            render: v => `<span class="font-mono font-semibold text-[#172B4D]">${Number(v || 0).toLocaleString()}</span>`
          },
          // 10. Kgs
          {
            field: 'kgs',
            header: 'Kgs',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-[#00875A]">${Number(v || 0).toFixed(1)}</span>`
          },
          // 11. Balance Kgs
          {
            field: 'balanceKgs',
            header: 'Balance Kgs',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-[#DE350B]">${Number(v || 0).toFixed(1)}</span>`
          },
          // 12. Status
          {
            field: 'status',
            header: 'Status',
            render: v => {
              let badgeClass = 'bg-[#E3FCEF] text-[#006644]';
              if (v === 'Gate Pass Issued') badgeClass = 'bg-[#DEEBFF] text-[#0747A6]';
              else if (v === 'In Transit') badgeClass = 'bg-[#FFF0B3] text-[#172B4D]';
              else if (v === 'Completed') badgeClass = 'bg-[#EAE6FF] text-[#403294]';
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${badgeClass} whitespace-nowrap">${v}</span>`;
            }
          }
        ],
        // Actions column contains NO view eye icon
        actions: [
          {
            label: 'Print Gate Pass',
            icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
            onClick: (row) => {
              Toast.show(`Printing Gate Pass for ${row.stockOutCode || row.id}...`, 'success');
            }
          },
          {
            label: 'Download Dispatch Note',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>`,
            onClick: (row) => {
              Toast.show(`Downloading Dispatch Note for ${row.stockOutCode || row.id}...`, 'info');
            }
          }
        ],
        data: data
      });
    };

    // Initial render
    renderTable(fullList);

    // Filtering handler
    const executeFilter = () => {
      const selectedDate = container.querySelector('#dso-filter-date')?.value;
      const selectedBelongs = container.querySelector('#dso-filter-stock-belongs')?.value;
      const selectedPacking = container.querySelector('#dso-filter-packing-type')?.value;
      const selectedGroup = container.querySelector('#dso-filter-group')?.value;

      let filtered = fullList.filter(item => {
        if (selectedDate && selectedDate.trim() !== '') {
          const itemDate = item.stockOutDate || item.date;
          if (itemDate && itemDate !== selectedDate) return false;
        }
        if (selectedBelongs && selectedBelongs !== 'ALL') {
          if (item.stockBelongsTo !== selectedBelongs) return false;
        }
        if (selectedPacking && selectedPacking !== 'ALL') {
          const needle = selectedPacking.toLowerCase().replace(/poly|pouch|cartons/g, '').trim();
          if (!item.packingType?.toLowerCase().includes(needle) && !item.packingStyle?.toLowerCase().includes(needle)) {
            return false;
          }
        }
        if (selectedGroup && selectedGroup !== 'ALL') {
          if (item.group !== selectedGroup) return false;
        }
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching daily stockout record(s)`, 'info');
    };

    // Attach Event Listeners
    const searchBtn = container.querySelector('#dso-filter-search-btn');
    if (searchBtn) searchBtn.addEventListener('click', executeFilter);

    // Reset button
    const resetBtn = container.querySelector('#dso-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const dateInput = container.querySelector('#dso-filter-date');
        const belongsSelect = container.querySelector('#dso-filter-stock-belongs');
        const packingSelect = container.querySelector('#dso-filter-packing-type');
        const groupSelect = container.querySelector('#dso-filter-group');

        if (dateInput) dateInput.value = '';
        if (belongsSelect) belongsSelect.value = 'ALL';
        if (packingSelect) packingSelect.value = 'ALL';
        if (groupSelect) groupSelect.value = 'ALL';

        renderTable(fullList);
        Toast.show('Stockout filters reset', 'info');
      });
    }

    // Toggle Collapse Button
    const toggleBtn = container.querySelector('#dso-filter-toggle-btn');
    const filterBody = container.querySelector('#dso-filter-body');
    const toggleIcon = container.querySelector('#dso-filter-toggle-icon');
    let isCollapsed = false;

    if (toggleBtn && filterBody) {
      toggleBtn.addEventListener('click', () => {
        isCollapsed = !isCollapsed;
        if (isCollapsed) {
          filterBody.classList.add('hidden');
          toggleBtn.title = 'Show Filter';
          toggleBtn.setAttribute('aria-label', 'Show Filter');
          if (toggleIcon) toggleIcon.classList.add('rotate-180');
        } else {
          filterBody.classList.remove('hidden');
          toggleBtn.title = 'Hide Filter';
          toggleBtn.setAttribute('aria-label', 'Hide Filter');
          if (toggleIcon) toggleIcon.classList.remove('rotate-180');
        }
      });
    }

    // Auto-filter on select dropdown changes & Enter key
    ['#dso-filter-stock-belongs', '#dso-filter-packing-type', '#dso-filter-group'].forEach(sel => {
      const el = container.querySelector(sel);
      if (el) el.addEventListener('change', executeFilter);
    });

    const dateEl = container.querySelector('#dso-filter-date');
    if (dateEl) {
      dateEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeFilter();
        }
      });
    }
  },

  // 2c. PRODUCTION - FREEZING
  renderFreezing(container) {
    const fullList = this.state.freezingRunsList || [];

    // Global helper for link clicks
    window.__viewFreezingDetails = (lotCode) => {
      const row = fullList.find(x => (x.arrivalLotCode === lotCode || x.runCode === lotCode));
      if (row) this.showFreezingDetailModal(row);
    };

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header with Add Freezing Button -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Freezing</h1>
          </div>
          <div>
            <button 
              type="button" 
              id="btn-add-freezing" 
              class="btn-primary px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-xs hover:shadow cursor-pointer transition-colors"
            >
              <svg style="width: 14px; height: 14px; min-width: 14px; stroke: currentColor; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add Freezing</span>
            </button>
          </div>
        </div>

        <!-- Collapsible Top Filter Header Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="fz-filter-reset-btn" 
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="fz-filter-toggle-btn" 
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="fz-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid -->
          <div id="fz-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. PRODUCTION DATE -->
            <div>
              <label for="fz-filter-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE</label>
              <input type="date" id="fz-filter-date" value="2026-10-29" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
            </div>

            <!-- 2. PRODUCTION PLANT -->
            <div>
              <label for="fz-filter-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="fz-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Production Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 3. STOCK BELONGS TO -->
            <div>
              <label for="fz-filter-stock-belongs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK BELONGS TO</label>
              <select id="fz-filter-stock-belongs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Stock Belongs To</option>
                <option value="Devi Fisheries Ltd (DFL)">Devi Fisheries Ltd (DFL)</option>
                <option value="DFL Unit-5 (JPT)">DFL Unit-5 (JPT)</option>
                <option value="DFL Unit-4 (PND)">DFL Unit-4 (PND)</option>
                <option value="DFL Unit-3 (PSP)">DFL Unit-3 (PSP)</option>
                <option value="DFL Unit-1 (VSP)">DFL Unit-1 (VSP)</option>
                <option value="Third-Party Co-Packing">Third-Party Co-Packing</option>
              </select>
            </div>

            <!-- 4. GROUP -->
            <div>
              <label for="fz-filter-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP</label>
              <select id="fz-filter-group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Groups</option>
                <option value="Group A">Group A</option>
                <option value="Group B">Group B</option>
                <option value="Group C">Group C</option>
                <option value="Group D">Group D</option>
              </select>
            </div>

            <!-- 5. FREEZING TYPE -->
            <div>
              <label for="fz-filter-freezing-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE</label>
              <select id="fz-filter-freezing-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Freezing Types</option>
                <option value="IQF Tunnel">IQF Tunnel</option>
                <option value="Contact Plate Freezer">Contact Plate Freezer</option>
                <option value="Blast Freezer">Blast Freezer</option>
                <option value="Semi-IQF">Semi-IQF</option>
              </select>
            </div>

            <!-- 6. PACKING TYPE -->
            <div>
              <label for="fz-filter-packing-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING TYPE</label>
              <select id="fz-filter-packing-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Packing Types</option>
                <option value="Master Cartons">Master Cartons</option>
                <option value="Dummy Cartons">Dummy Cartons</option>
                <option value="10x1kg Net">10x1kg Net</option>
                <option value="6x2kg Block">6x2kg Block</option>
                <option value="5x2kg IQF Poly">5x2kg IQF Poly</option>
                <option value="10x2lb Pouch">10x2lb Pouch</option>
              </select>
            </div>

            <!-- 7. SHIFT -->
            <div>
              <label for="fz-filter-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT</label>
              <select id="fz-filter-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Shifts</option>
                <option value="Shift A (Day)">Shift A (Day)</option>
                <option value="Shift B (Evening)">Shift B (Evening)</option>
                <option value="Shift C (Night)">Shift C (Night)</option>
              </select>
            </div>

            <!-- 8. Search Action Button Slot (Width Fitted) -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="fz-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                title="Search Filter Records"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="cs-freezing-runs-table"></div>
      </div>
    `;

    // Render Table Function matching fields (NO VIEW EYE ICON)
    const renderTable = (data) => {
      new DataTable({
        containerId: 'cs-freezing-runs-table',
        tableTitle: 'Freezing Runs',
        keyField: 'arrivalLotCode',
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showFreezingDetailModal(row),
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
            render: v => `<span class="whitespace-nowrap font-medium text-[#172B4D]">${v || '-'}</span>`
          },
          // 3. Arrival/Lot Code
          {
            field: 'arrivalLotCode',
            header: 'Arrival/Lot Code',
            sortable: true,
            render: (v, r) => `<span class="font-mono font-bold text-[#0284C7] hover:underline cursor-pointer whitespace-nowrap" onclick="event.stopPropagation(); window.__viewFreezingDetails && window.__viewFreezingDetails('${v}')" title="Click to view details">${v || r.runCode || '-'}</span>`
          },
          // 4. Plant
          {
            field: 'productionPlant',
            header: 'Plant',
            sortable: true,
            render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 5. Group
          {
            field: 'group',
            header: 'Group',
            render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294] whitespace-nowrap">${v || 'Group A'}</span>`
          },
          // 6. Variety
          {
            field: 'variety',
            header: 'Variety',
            sortable: true,
            render: v => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 7. Grade
          {
            field: 'grade',
            header: 'Grade',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 8. Freezing Type
          {
            field: 'freezingType',
            header: 'Freezing Type',
            render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7] whitespace-nowrap">${v || 'IQF'}</span>`
          },
          // 9. Packing Style
          {
            field: 'packingStyle',
            header: 'Packing Style',
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>`
          },
          // 10. Mcs
          {
            field: 'mcs',
            header: 'Mcs',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-[#172B4D]">${Number(v || 0).toLocaleString()}</span>`
          },
          // 11. Loose Bags
          {
            field: 'looseBags',
            header: 'Loose Bags',
            sortable: true,
            render: v => `<span class="font-mono font-semibold text-[#5E6C84]">${Number(v || 0).toLocaleString()}</span>`
          },
          // 12. Total Wt (Kg)
          {
            field: 'totalWeight',
            header: 'Total Wt (Kg)',
            sortable: true,
            render: (v, r) => `<span class="font-mono font-bold text-[#00875A]">${Number(v || r.netWeightKg || 0).toFixed(1)}</span>`
          },
          // 13. Balance Wt (Kg)
          {
            field: 'balanceWeight',
            header: 'Balance Wt (Kg)',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-[#DE350B]">${Number(v || 0).toFixed(1)}</span>`
          },
          // 14. AB Status
          {
            field: 'abStatus',
            header: 'AB Status',
            render: (v, r) => {
              const statusVal = v || r.qcStatus || 'PASSED (AB Negative)';
              let cls = 'bg-[#E3FCEF] text-[#006644]';
              if (statusVal.includes('UNDER')) cls = 'bg-[#FFF0B3] text-[#172B4D]';
              else if (statusVal.includes('FAIL')) cls = 'bg-[#FFEBE6] text-[#DE350B]';
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${cls} whitespace-nowrap">${statusVal}</span>`;
            }
          }
        ],
        // Actions column contains NO view eye icon
        actions: [
          {
            label: 'Edit Freezing',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditFreezingModal(row, renderTable)
          },
          {
            label: 'Print Freezing Tag',
            icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
            onClick: (row) => {
              Toast.show(`Printing Freezing Tag for ${row.arrivalLotCode || row.runCode}...`, 'success');
            }
          }
        ],
        data: data
      });
    };

    // Initial table render
    renderTable(fullList);

    // Add Freezing Button Click Handler
    const addBtn = container.querySelector('#btn-add-freezing');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        this.showAddFreezingModal(renderTable);
      });
    }

    // Filter Logic
    const executeFilter = () => {
      const selectedDate = container.querySelector('#fz-filter-date')?.value;
      const selectedBelongs = container.querySelector('#fz-filter-stock-belongs')?.value;
      const selectedPlant = container.querySelector('#fz-filter-plant')?.value;
      const selectedGroup = container.querySelector('#fz-filter-group')?.value;
      const selectedFzType = container.querySelector('#fz-filter-freezing-type')?.value;
      const selectedPkgType = container.querySelector('#fz-filter-packing-type')?.value;
      const selectedShift = container.querySelector('#fz-filter-shift')?.value;

      let filtered = fullList.filter(item => {
        if (selectedDate && selectedDate.trim() !== '') {
          const itemDate = item.productionDate || item.date;
          if (itemDate && itemDate !== selectedDate) return false;
        }
        if (selectedBelongs && selectedBelongs !== 'ALL') {
          if (item.stockBelongsTo !== selectedBelongs) return false;
        }
        if (selectedPlant && selectedPlant !== 'ALL') {
          if (item.productionPlant !== selectedPlant) return false;
        }
        if (selectedGroup && selectedGroup !== 'ALL') {
          if (item.group !== selectedGroup) return false;
        }
        if (selectedFzType && selectedFzType !== 'ALL') {
          if (item.freezingType !== selectedFzType) return false;
        }
        if (selectedPkgType && selectedPkgType !== 'ALL') {
          if (item.packingType !== selectedPkgType) return false;
        }
        if (selectedShift && selectedShift !== 'ALL') {
          if (item.shift !== selectedShift) return false;
        }
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching freezing run(s)`, 'info');
    };

    // Attach Event Listeners
    const searchBtn = container.querySelector('#fz-filter-search-btn');
    if (searchBtn) searchBtn.addEventListener('click', executeFilter);

    // Reset button
    const resetBtn = container.querySelector('#fz-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const dateInput = container.querySelector('#fz-filter-date');
        const belongsSelect = container.querySelector('#fz-filter-stock-belongs');
        const plantSelect = container.querySelector('#fz-filter-plant');
        const groupSelect = container.querySelector('#fz-filter-group');
        const fzTypeSelect = container.querySelector('#fz-filter-freezing-type');
        const pkgTypeSelect = container.querySelector('#fz-filter-packing-type');
        const shiftSelect = container.querySelector('#fz-filter-shift');

        if (dateInput) dateInput.value = '';
        if (belongsSelect) belongsSelect.value = 'ALL';
        if (plantSelect) plantSelect.value = 'ALL';
        if (groupSelect) groupSelect.value = 'ALL';
        if (fzTypeSelect) fzTypeSelect.value = 'ALL';
        if (pkgTypeSelect) pkgTypeSelect.value = 'ALL';
        if (shiftSelect) shiftSelect.value = 'ALL';

        renderTable(fullList);
        Toast.show('Freezing filters reset', 'info');
      });
    }

    // Toggle Collapse Button
    const toggleBtn = container.querySelector('#fz-filter-toggle-btn');
    const filterBody = container.querySelector('#fz-filter-body');
    const toggleIcon = container.querySelector('#fz-filter-toggle-icon');
    let isCollapsed = false;

    if (toggleBtn && filterBody) {
      toggleBtn.addEventListener('click', () => {
        isCollapsed = !isCollapsed;
        if (isCollapsed) {
          filterBody.classList.add('hidden');
          toggleBtn.title = 'Show Filter';
          toggleBtn.setAttribute('aria-label', 'Show Filter');
          if (toggleIcon) toggleIcon.classList.add('rotate-180');
        } else {
          filterBody.classList.remove('hidden');
          toggleBtn.title = 'Hide Filter';
          toggleBtn.setAttribute('aria-label', 'Hide Filter');
          if (toggleIcon) toggleIcon.classList.remove('rotate-180');
        }
      });
    }

    // Auto-filter on select dropdown changes & Enter key
    ['#fz-filter-stock-belongs', '#fz-filter-plant', '#fz-filter-group'].forEach(sel => {
      const el = container.querySelector(sel);
      if (el) el.addEventListener('change', executeFilter);
    });

    const dateEl = container.querySelector('#fz-filter-date');
    if (dateEl) {
      dateEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeFilter();
        }
      });
    }
  },

  // Backward compatibility alias
  renderProductionIntake(container) {
    this.renderDailyProduction(container);
  },

  // 3a. STOCK - STOCK IN (INWARD)
  renderStockIn(container) {
    const fullList = this.state.stockInList || this.state.stockList || [];

    // Global helper for link clicks
    window.__viewStockInDetails = (batchCode) => {
      const row = fullList.find(x => x.batchCodes === batchCode || x.palletId === batchCode || x.poNo === batchCode);
      if (row) this.showStockInDetailModal(row);
    };

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Stock In</h1>
          </div>
          <button 
            type="button" 
            id="cs-add-stock-btn" 
            class="btn-primary px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-2xs hover:shadow cursor-pointer"
            title="Add Stock Record"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Add Stock</span>
          </button>
        </div>

        <!-- Collapsible Top Filter Header Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="cs-inward-filter-reset-btn"
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="cs-inward-filter-toggle-btn"
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="cs-inward-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (4 Columns) -->
          <div id="cs-inward-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. PRODUCTION DATE -->
            <div>
              <label for="cs-inward-filter-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE</label>
              <input type="date" id="cs-inward-filter-date" value="2026-10-29" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
            </div>

            <!-- 2. PRODUCTION PLANT -->
            <div>
              <label for="cs-inward-filter-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="cs-inward-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 3. BATCH CODES / PO NO -->
            <div>
              <label for="cs-inward-filter-batch" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BATCH CODE / PO NO</label>
              <input type="text" id="cs-inward-filter-batch" placeholder="e.g. BCH-2026-901 or PO" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
            </div>

            <!-- 4. COLD STORES -->
            <div>
              <label for="cs-inward-filter-chamber" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COLD STORES</label>
              <select id="cs-inward-filter-chamber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Cold Stores</option>
                <option value="Chamber #1 (IQF)">Chamber #1 (IQF)</option>
                <option value="Chamber #2 (Block)">Chamber #2 (Block)</option>
                <option value="Vault #3 Staging">Vault #3 Staging</option>
              </select>
            </div>

            <!-- 5. GROUP -->
            <div>
              <label for="cs-inward-filter-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP</label>
              <select id="cs-inward-filter-group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Groups</option>
                <option value="Group A">Group A</option>
                <option value="Group B">Group B</option>
                <option value="Group C">Group C</option>
                <option value="Group D">Group D</option>
              </select>
            </div>

            <!-- 6. STOCK BELONGS TO -->
            <div>
              <label for="cs-inward-filter-belongs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK BELONGS TO</label>
              <select id="cs-inward-filter-belongs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Stock Belongs To</option>
                <option value="Devi Fisheries Ltd (DFL)">Devi Fisheries Ltd (DFL)</option>
                <option value="DFL Unit-5 (JPT)">DFL Unit-5 (JPT)</option>
                <option value="DFL Unit-4 (PND)">DFL Unit-4 (PND)</option>
                <option value="DFL Unit-3 (PSP)">DFL Unit-3 (PSP)</option>
                <option value="DFL Unit-1 (VSP)">DFL Unit-1 (VSP)</option>
                <option value="Third-Party Co-Packing">Third-Party Co-Packing</option>
              </select>
            </div>

            <!-- 7. VARIETY -->
            <div>
              <label for="cs-inward-filter-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
              <select id="cs-inward-filter-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Varieties</option>
                <option value="Vannamei (White Shrimp)">Vannamei (White Shrimp)</option>
                <option value="Black Tiger (Monodon)">Black Tiger (Monodon)</option>
                <option value="Sea Pearl Cooked PDTO">Sea Pearl Cooked PDTO</option>
                <option value="Scampi Headless Block">Scampi Headless Block</option>
                <option value="Vannamei Easy Peel IQF">Vannamei Easy Peel IQF</option>
                <option value="Black Tiger HOSO IQF">Black Tiger HOSO IQF</option>
              </select>
            </div>

            <!-- 8. Search Action Button Slot (Width Fitted) -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="cs-inward-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                title="Search Filter Records"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="cs-stock-in-table"></div>
      </div>
    `;

    // Render Table Function with 3 Actions: New Palette, Place Palette, View Store
    const renderTable = (data) => {
      new DataTable({
        containerId: 'cs-stock-in-table',
        tableTitle: 'Stock In',
        keyField: 'batchCodes',
        searchable: true,
        exportable: true,
        pageSize: 10,
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'New Palette',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v6m-3-3h6"/></svg>`,
            onClick: (row) => {
              this.showNewPaletteModal(row, () => renderTable(this.state.stockInList));
            }
          },
          {
            label: 'Place Palette',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v4m0 0l-2-2m2 2l2-2"/></svg>`,
            onClick: (row) => {
              this.showPlacePaletteModal(row, () => renderTable(this.state.stockInList));
            }
          },
          {
            label: 'View Store',
            icon: `<svg class="w-4 h-4 text-[#403294]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 21h18M3 7v14M21 7v14M6 21V11m4 10V11m4 10V11M3 7l9-4 9 4M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4"/></svg>`,
            onClick: (row) => {
              this.showViewStoreModal(row);
            }
          }
        ],
        columns: [
          // 1. S.NO
          {
            field: 'sNo',
            header: 'S.NO',
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Production Plant
          {
            field: 'productionPlant',
            header: 'Production Plant',
            sortable: true,
            render: v => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 3. Production Date
          {
            field: 'productionDate',
            header: 'Production Date',
            sortable: true,
            render: v => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 4. Batch Codes
          {
            field: 'batchCodes',
            header: 'Batch Codes',
            sortable: true,
            render: (v, r) => `<span class="font-mono text-xs font-bold text-[#0284C7] hover:underline cursor-pointer whitespace-nowrap" onclick="event.stopPropagation(); window.__viewStockInDetails && window.__viewStockInDetails('${v}')" title="Click to view full batch details">${v || '-'}</span>`
          },
          // 5. Transaction Date
          {
            field: 'transactionDate',
            header: 'Transaction Date',
            sortable: true,
            render: v => `<span class="text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>`
          },
          // 6. Group
          {
            field: 'group',
            header: 'Group',
            sortable: true,
            render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294] whitespace-nowrap">${v || '-'}</span>`
          },
          // 7. Stock Belongs To
          {
            field: 'stockBelongsTo',
            header: 'Stock Belongs To',
            sortable: true,
            render: v => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 8. Shift
          {
            field: 'shift',
            header: 'Shift',
            render: v => `<span class="text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>`
          },
          // 9. PO No
          {
            field: 'poNo',
            header: 'PO No',
            sortable: true,
            render: v => `<span class="font-mono font-semibold text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 10. Variety
          {
            field: 'variety',
            header: 'Variety',
            sortable: true,
            render: v => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 11. Packing Style
          {
            field: 'packingStyle',
            header: 'Packing Style',
            render: v => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 12. Grade
          {
            field: 'grade',
            header: 'Grade',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 13. Packing Type
          {
            field: 'packingType',
            header: 'Packing Type',
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>`
          },
          // 14. Freezing Type
          {
            field: 'freezingType',
            header: 'Freezing Type',
            render: v => `<span class="text-xs text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 15. Soaking
          {
            field: 'soaking',
            header: 'Soaking',
            render: v => `<span class="text-xs ${v && v.toLowerCase().includes('yes') ? 'text-[#00875A] font-semibold' : 'text-[#6B778C]'} whitespace-nowrap">${v || '-'}</span>`
          },
          // 16. Product Category
          {
            field: 'productCategory',
            header: 'Product Category',
            render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7] whitespace-nowrap">${v || '-'}</span>`
          },
          // 17. AB Status
          {
            field: 'abStatus',
            header: 'AB Status',
            render: v => `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${v && v.includes('PASS') ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'} whitespace-nowrap">${v || '-'}</span>`
          },
          // 18. Remarks
          {
            field: 'remarks',
            header: 'Remarks',
            render: v => `<span class="text-xs text-[#6B778C] truncate max-w-[150px] inline-block" title="${v || ''}">${v || '-'}</span>`
          },
          // 19. Total Weight (MCs :)
          {
            field: 'totalWeight',
            header: 'Total Weight (MCs)',
            sortable: true,
            render: (v, r) => `<span class="font-mono font-bold text-[#172B4D] whitespace-nowrap">${Number(v || 0).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })} <span class="text-[10px] font-normal text-[#6B778C]">(${r.mcs || 0} MCs)</span></span>`
          },
          // 20. Balance Weight (MCs :, LooseBags :)
          {
            field: 'balanceWeight',
            header: 'Balance Weight',
            sortable: true,
            render: (v, r) => `<span class="font-mono font-bold text-[#00875A] whitespace-nowrap">${Number(v || 0).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })} <span class="text-[10px] font-normal text-[#6B778C]">(${r.balanceMcs || r.mcs || 0} MCs, ${r.looseBags || 0} Bags)</span></span>`
          },
          // 21. Cold Stores
          {
            field: 'coldStores',
            header: 'Cold Stores',
            sortable: true,
            render: v => `<span class="font-semibold text-[#0284C7] whitespace-nowrap">${v || '-'}</span>`
          },
          // 22. MCs
          {
            field: 'mcs',
            header: 'MCs',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-[#00875A]">${Number(v || 0).toLocaleString()}</span>`
          },
          // 23. Loose Bags
          {
            field: 'looseBags',
            header: 'Loose Bags',
            sortable: true,
            render: v => `<span class="font-mono font-semibold text-[#172B4D]">${Number(v || 0).toLocaleString()}</span>`
          }
        ],
        data: data
      });
    };

    // Initial render
    renderTable(fullList);

    // Bind Add Stock Button
    const addBtn = container.querySelector('#cs-add-stock-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        this.showAddStockModal(() => renderTable(this.state.stockInList));
      });
    }

    // Bind Collapsible Filter Toggle
    const toggleBtn = container.querySelector('#cs-inward-filter-toggle-btn');
    const filterBody = container.querySelector('#cs-inward-filter-body');
    const toggleIcon = container.querySelector('#cs-inward-filter-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isFilterOpen = true;
      toggleBtn.addEventListener('click', () => {
        isFilterOpen = !isFilterOpen;
        if (isFilterOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Execute Filter Function
    const executeFilter = () => {
      const dateVal = container.querySelector('#cs-inward-filter-date')?.value || '';
      const plantVal = container.querySelector('#cs-inward-filter-plant')?.value || 'ALL';
      const batchVal = (container.querySelector('#cs-inward-filter-batch')?.value || '').trim().toLowerCase();
      const chamberVal = container.querySelector('#cs-inward-filter-chamber')?.value || 'ALL';
      const groupVal = container.querySelector('#cs-inward-filter-group')?.value || 'ALL';
      const belongsVal = container.querySelector('#cs-inward-filter-belongs')?.value || 'ALL';
      const varietyVal = container.querySelector('#cs-inward-filter-variety')?.value || 'ALL';

      const filtered = fullList.filter(item => {
        if (dateVal && item.productionDate && item.productionDate !== dateVal) return false;
        if (plantVal !== 'ALL' && item.productionPlant !== plantVal) return false;
        if (chamberVal !== 'ALL' && item.coldStores !== chamberVal) return false;
        if (groupVal !== 'ALL' && item.group !== groupVal) return false;
        if (belongsVal !== 'ALL' && item.stockBelongsTo !== belongsVal) return false;
        if (varietyVal !== 'ALL' && item.variety !== varietyVal) return false;
        if (batchVal) {
          const matchBatch = String(item.batchCodes || '').toLowerCase().includes(batchVal);
          const matchPo = String(item.poNo || '').toLowerCase().includes(batchVal);
          if (!matchBatch && !matchPo) return false;
        }
        return true;
      });

      renderTable(filtered);
    };

    // Bind Search Button
    const searchBtn = container.querySelector('#cs-inward-filter-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        executeFilter();
      });
    }

    // Bind Reset Button
    const resetBtn = container.querySelector('#cs-inward-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const dateInput = container.querySelector('#cs-inward-filter-date');
        if (dateInput) dateInput.value = '2026-10-29';
        const plantInput = container.querySelector('#cs-inward-filter-plant');
        if (plantInput) plantInput.value = 'ALL';
        const batchInput = container.querySelector('#cs-inward-filter-batch');
        if (batchInput) batchInput.value = '';
        const chamberInput = container.querySelector('#cs-inward-filter-chamber');
        if (chamberInput) chamberInput.value = 'ALL';
        const groupInput = container.querySelector('#cs-inward-filter-group');
        if (groupInput) groupInput.value = 'ALL';
        const belongsInput = container.querySelector('#cs-inward-filter-belongs');
        if (belongsInput) belongsInput.value = 'ALL';
        const varietyInput = container.querySelector('#cs-inward-filter-variety');
        if (varietyInput) varietyInput.value = 'ALL';

        renderTable(fullList);
        Toast.show('Filters reset to default', 'info');
      });
    }
  },

  // 3b. STOCK - STOCK OUT (14 FILTER FIELDS & 16 TABLE COLUMNS WITH OUT STOCK ACTION)
  renderStockOut(container, pageTitle = 'Stock Out') {
    const fullList = this.state.stockOutList || [];
    let table = null;

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">${pageTitle}</h1>
          </div>
        </div>

        <!-- Collapsible Top Filter Header Card (14 User-Specified Search & Filter Fields) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="so-filter-reset-btn" 
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="so-filter-toggle-btn" 
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="so-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (Matching 14 User-Specified Fields) -->
          <div id="so-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. COLD STORES -->
            <div>
              <label for="so-filter-coldstore" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COLD STORES</label>
              <select id="so-filter-coldstore" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Cold Store</option>
                <option value="Chamber #1 (IQF)">Chamber #1 (IQF)</option>
                <option value="Chamber #2 (Block)">Chamber #2 (Block)</option>
                <option value="Vault #3 Staging">Vault #3 Staging</option>
                <option value="Chamber #3 (Blast)">Chamber #3 (Blast)</option>
              </select>
            </div>

            <!-- 2. BLOCKS -->
            <div>
              <label for="so-filter-blocks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BLOCKS</label>
              <select id="so-filter-blocks" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Block</option>
                <option value="Block A">Block A</option>
                <option value="Block B">Block B</option>
                <option value="Block C">Block C</option>
                <option value="Block D">Block D</option>
              </select>
            </div>

            <!-- 3. PO NUMBER -->
            <div>
              <label for="so-filter-pono" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NUMBER</label>
              <input type="text" id="so-filter-pono" placeholder="Search PO Number..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono text-[#172B4D]">
            </div>

            <!-- 4. PRODUCT * -->
            <div>
              <label for="so-filter-product" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT <span class="text-[#DE350B] font-bold">*</span></label>
              <select id="so-filter-product" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Product</option>
                <option value="Vannamei PD IQF">Vannamei PD IQF</option>
                <option value="Black Tiger Block Frozen">Black Tiger Block Frozen</option>
                <option value="Sea Pearl Cooked PDTO">Sea Pearl Cooked PDTO</option>
                <option value="Scampi Headless Block">Scampi Headless Block</option>
                <option value="Vannamei Easy Peel Blanched">Vannamei Easy Peel Blanched</option>
                <option value="Black Tiger HOSO IQF">Black Tiger HOSO IQF</option>
                <option value="Cooked Tail-On Butterfly">Cooked Tail-On Butterfly</option>
                <option value="Vannamei HLSO IQF">Vannamei HLSO IQF</option>
              </select>
            </div>

            <!-- 5. GRADE -->
            <div>
              <label for="so-filter-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
              <select id="so-filter-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Grade</option>
                <option value="16/20">16/20</option>
                <option value="21/25">21/25</option>
                <option value="26/30">26/30</option>
                <option value="31/40">31/40</option>
                <option value="41/50">41/50</option>
                <option value="11/15">11/15</option>
              </select>
            </div>

            <!-- 6. VARIETY -->
            <div>
              <label for="so-filter-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
              <select id="so-filter-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Variety</option>
                <option value="Vannamei (White Shrimp)">Vannamei (White Shrimp)</option>
                <option value="Black Tiger (Monodon)">Black Tiger (Monodon)</option>
                <option value="Scampi (Macrobrachium)">Scampi (Macrobrachium)</option>
                <option value="Sea Pearl Cooked PDTO">Sea Pearl Cooked PDTO</option>
              </select>
            </div>

            <!-- 7. PACKING STYLE -->
            <div>
              <label for="so-filter-packingstyle" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING STYLE</label>
              <select id="so-filter-packingstyle" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Packing Style</option>
                <option value="10x1kg Net">10x1kg Net</option>
                <option value="6x2kg Block">6x2kg Block</option>
                <option value="5x2kg IQF Poly">5x2kg IQF Poly</option>
                <option value="10x2lb Pouch">10x2lb Pouch</option>
              </select>
            </div>

            <!-- 8. PACKING TYPE -->
            <div>
              <label for="so-filter-packingtype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING TYPE</label>
              <select id="so-filter-packingtype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Packing Type</option>
                <option value="Master Cartons">Master Cartons</option>
                <option value="6x2kg Block">6x2kg Block</option>
                <option value="Dummy Cartons">Dummy Cartons</option>
                <option value="10x2lb Pouch">10x2lb Pouch</option>
                <option value="5x2kg IQF Poly">5x2kg IQF Poly</option>
              </select>
            </div>

            <!-- 9. SPECIES -->
            <div>
              <label for="so-filter-species" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SPECIES</label>
              <select id="so-filter-species" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Species</option>
                <option value="Litopenaeus Vannamei">Litopenaeus Vannamei</option>
                <option value="Penaeus Monodon">Penaeus Monodon</option>
                <option value="Macrobrachium rosenbergii">Macrobrachium rosenbergii</option>
              </select>
            </div>

            <!-- 10. SOAKING -->
            <div>
              <label for="so-filter-soaking" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKING</label>
              <select id="so-filter-soaking" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Soaking</option>
                <option value="Yes (Non-Phosphate)">Yes (Non-Phosphate)</option>
                <option value="No (Unsoaked)">No (Unsoaked)</option>
                <option value="Yes (STPP Treated)">Yes (STPP Treated)</option>
              </select>
            </div>

            <!-- 11. FREEZING TYPE -->
            <div>
              <label for="so-filter-freezingtype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE</label>
              <select id="so-filter-freezingtype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Freezing Type</option>
                <option value="IQF Tunnel">IQF Tunnel</option>
                <option value="Contact Plate Freezer">Contact Plate Freezer</option>
                <option value="Blast Freezer">Blast Freezer</option>
                <option value="Semi-IQF Spiral">Semi-IQF Spiral</option>
              </select>
            </div>

            <!-- 12. TYPE OF PRODUCT -->
            <div>
              <label for="so-filter-typeofproduct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TYPE OF PRODUCT</label>
              <select id="so-filter-typeofproduct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Type</option>
                <option value="Raw Frozen">Raw Frozen</option>
                <option value="Cooked Frozen">Cooked Frozen</option>
                <option value="Blanched Frozen">Blanched Frozen</option>
                <option value="Value-Added">Value-Added</option>
              </select>
            </div>

            <!-- 13. ABSTATUS -->
            <div>
              <label for="so-filter-abstatus" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ABSTATUS</label>
              <select id="so-filter-abstatus" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select AB Status</option>
                <option value="PASSED (AB Negative)">PASSED (AB Negative)</option>
                <option value="UNDER TEST">UNDER TEST</option>
                <option value="AWAITING LAB">AWAITING LAB</option>
              </select>
            </div>

            <!-- 14. PRODUCT CATEGORY -->
            <div>
              <label for="so-filter-productcategory" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY</label>
              <select id="so-filter-productcategory" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Category</option>
                <option value="Raw Frozen">Raw Frozen</option>
                <option value="Cooked Frozen">Cooked Frozen</option>
                <option value="Blanched Frozen">Blanched Frozen</option>
                <option value="Value-Added">Value-Added</option>
              </select>
            </div>

            <!-- 15. Action Slot: Search Button -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="so-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                title="Search Filter Records"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Stock Out Data Table Container (16 User-Specified Columns) -->
        <div id="cs-stock-out-table-container"></div>
      </div>
    `;

    // Render Table Function
    const renderTable = (data) => {
      table = new DataTable({
        containerId: 'cs-stock-out-table-container',
        tableTitle: 'Stock Out Inventory',
        searchable: true,
        exportable: true,
        pageSize: 10,
        actionsTitle: 'Actions',
        onRowClick: (row) => this.showStockOutDetailModal(row),
        actions: [
          {
            label: 'Out Stock',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>`,
            onClick: (row) => {
              this.showOutStockModal(row, () => renderTable(this.state.stockOutList));
            }
          }
        ],
        columns: [
          // 1. S.No
          {
            field: 'sNo',
            header: 'S.No',
            sortable: true,
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Location
          {
            field: 'location',
            header: 'Location',
            sortable: true,
            render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>`
          },
          // 3. PO.No
          {
            field: 'poNo',
            header: 'PO.No',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-[#0284C7] hover:underline cursor-pointer">${v}</span>`
          },
          // 4. Production Date
          {
            field: 'productionDate',
            header: 'Production Date',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>`
          },
          // 5. Transaction Date
          {
            field: 'transactionDate',
            header: 'Transaction Date',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>`
          },
          // 6. Variety
          {
            field: 'variety',
            header: 'Variety',
            sortable: true,
            render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>`
          },
          // 7. Grade
          {
            field: 'grade',
            header: 'Grade',
            sortable: true,
            render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F4F5F7] text-[#172B4D]">${v}</span>`
          },
          // 8. Species
          {
            field: 'species',
            header: 'Species',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] italic">${v}</span>`
          },
          // 9. FreezingType
          {
            field: 'freezingType',
            header: 'FreezingType',
            sortable: true,
            render: v => `<span class="text-xs text-[#172B4D] font-medium">${v}</span>`
          },
          // 10. Soaking
          {
            field: 'soaking',
            header: 'Soaking',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>`
          },
          // 11. Type of Product
          {
            field: 'typeOfProduct',
            header: 'Type of Product',
            sortable: true,
            render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">${v}</span>`
          },
          // 12. Mcs
          {
            field: 'mcs',
            header: 'Mcs',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${Number(v).toLocaleString()}</span>`
          },
          // 13. Loose Bags
          {
            field: 'looseBags',
            header: 'Loose Bags',
            sortable: true,
            render: v => `<span class="font-mono font-semibold text-xs text-[#172B4D]">${v}</span>`
          },
          // 14. Packing Style
          {
            field: 'packingStyle',
            header: 'Packing Style',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>`
          },
          // 15. Packing Type
          {
            field: 'packingType',
            header: 'Packing Type',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84]">${v}</span>`
          }
        ],
        data: data
      });
    };

    // Initial table render
    renderTable(fullList);

    // Bind Collapsible Filter Toggle
    const toggleBtn = container.querySelector('#so-filter-toggle-btn');
    const filterBody = container.querySelector('#so-filter-body');
    const toggleIcon = container.querySelector('#so-filter-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isFilterOpen = true;
      toggleBtn.addEventListener('click', () => {
        isFilterOpen = !isFilterOpen;
        if (isFilterOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Execute Filter Function
    const executeFilter = () => {
      const coldStoreVal = container.querySelector('#so-filter-coldstore')?.value || 'ALL';
      const blocksVal = container.querySelector('#so-filter-blocks')?.value || 'ALL';
      const poVal = (container.querySelector('#so-filter-pono')?.value || '').trim().toLowerCase();
      const productVal = container.querySelector('#so-filter-product')?.value || 'ALL';
      const gradeVal = container.querySelector('#so-filter-grade')?.value || 'ALL';
      const varietyVal = container.querySelector('#so-filter-variety')?.value || 'ALL';
      const pstyleVal = container.querySelector('#so-filter-packingstyle')?.value || 'ALL';
      const ptypeVal = container.querySelector('#so-filter-packingtype')?.value || 'ALL';
      const speciesVal = container.querySelector('#so-filter-species')?.value || 'ALL';
      const soakingVal = container.querySelector('#so-filter-soaking')?.value || 'ALL';
      const freezingVal = container.querySelector('#so-filter-freezingtype')?.value || 'ALL';
      const typeProdVal = container.querySelector('#so-filter-typeofproduct')?.value || 'ALL';
      const abstatusVal = container.querySelector('#so-filter-abstatus')?.value || 'ALL';
      const categoryVal = container.querySelector('#so-filter-productcategory')?.value || 'ALL';

      const filtered = fullList.filter(item => {
        if (coldStoreVal !== 'ALL' && item.coldStores !== coldStoreVal) return false;
        if (blocksVal !== 'ALL' && item.blocks !== blocksVal) return false;
        if (poVal && !(item.poNo || '').toLowerCase().includes(poVal)) return false;
        if (productVal !== 'ALL' && item.product !== productVal) return false;
        if (gradeVal !== 'ALL' && item.grade !== gradeVal) return false;
        if (varietyVal !== 'ALL' && item.variety !== varietyVal) return false;
        if (pstyleVal !== 'ALL' && item.packingStyle !== pstyleVal) return false;
        if (ptypeVal !== 'ALL' && item.packingType !== ptypeVal) return false;
        if (speciesVal !== 'ALL' && item.species !== speciesVal) return false;
        if (soakingVal !== 'ALL' && item.soaking !== soakingVal) return false;
        if (freezingVal !== 'ALL' && item.freezingType !== freezingVal) return false;
        if (typeProdVal !== 'ALL' && item.typeOfProduct !== typeProdVal) return false;
        if (abstatusVal !== 'ALL' && item.abStatus !== abstatusVal) return false;
        if (categoryVal !== 'ALL' && item.productCategory !== categoryVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Showing ${filtered.length} matching Stock Out record(s)`, 'info');
    };

    // Bind Search Button
    const searchBtn = container.querySelector('#so-filter-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', executeFilter);
    }

    // Bind PO Number input Enter key
    const poInput = container.querySelector('#so-filter-pono');
    if (poInput) {
      poInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeFilter();
        }
      });
    }

    // Bind Reset Button
    const resetBtn = container.querySelector('#so-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const fields = [
          '#so-filter-coldstore', '#so-filter-blocks', '#so-filter-product',
          '#so-filter-grade', '#so-filter-variety', '#so-filter-packingstyle',
          '#so-filter-packingtype', '#so-filter-species', '#so-filter-soaking',
          '#so-filter-freezingtype', '#so-filter-typeofproduct', '#so-filter-abstatus',
          '#so-filter-productcategory'
        ];
        fields.forEach(sel => {
          const el = container.querySelector(sel);
          if (el) el.value = 'ALL';
        });
        const poEl = container.querySelector('#so-filter-pono');
        if (poEl) poEl.value = '';

        renderTable(fullList);
        Toast.show('Filters reset to default', 'info');
      });
    }
  },

  // 3b-1. ACTION: OUT STOCK MODAL
  showOutStockModal(row, onSuccess) {
    const today = new Date().toISOString().slice(0, 10);
    Modal.open({
      title: `Out Stock Dispatch: ${row.poNo || row.variety}`,
      size: 'xl',
      content: `
        <form id="form-out-stock" class="space-y-4 text-xs text-[#172B4D]">
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">LOCATION &amp; PO</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.location} • ${row.poNo}</div>
              <div class="text-[11px] text-[#6B778C]">${row.variety} • Grade: <span class="font-bold text-[#172B4D]">${row.grade}</span> (${row.species})</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">AVAILABLE IN STOCK</span>
              <div class="text-base font-extrabold text-[#00875A] font-mono">${row.mcs} MCs (${row.looseBags} Bags)</div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">DISPATCH DATE <span class="text-[#DE350B] font-bold">*</span></label>
              <input type="date" name="dispatchDate" value="${today}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required onclick="this.showPicker ? this.showPicker() : this.focus()">
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">OUT STOCK MCS <span class="text-[#DE350B] font-bold">*</span></label>
              <input type="number" name="outMcs" value="${Math.min(50, row.mcs)}" min="1" max="${row.mcs}" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#DE350B]" required>
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">LOOSE BAGS</label>
              <input type="number" name="outLooseBags" value="${Math.min(0, row.looseBags)}" min="0" max="${row.looseBags}" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold text-[#172B4D]">
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">DISPATCH REASON <span class="text-[#DE350B] font-bold">*</span></label>
              <select name="reason" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
                <option value="Export Dispatch" selected>Export Dispatch</option>
                <option value="Factory Processing">Factory Processing</option>
                <option value="Internal Transfer (IBT)">Internal Transfer (IBT)</option>
                <option value="Local Sales Delivery">Local Sales Delivery</option>
                <option value="QC / Lab Sampling">QC / Lab Sampling</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-white p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">VEHICLE / CONTAINER NO</label>
              <input type="text" name="vehicleNo" value="AP-39-TX-8821" placeholder="e.g. AP-39-TX-8821" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold text-[#172B4D]">
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">DESTINATION / CONSIGNEE</label>
              <input type="text" name="destination" value="Visakhapatnam Port Container Terminal" placeholder="Destination point" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] text-[#172B4D]">
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">AUTHORIZED BY</label>
              <input type="text" name="authorizedBy" value="Anita P. Rao" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
            </div>
          </div>

          <div>
            <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">REMARKS</label>
            <input type="text" name="remarks" placeholder="Enter dispatch notes, seal numbers or shipment tracking..." value="Out stock dispatch verified with warehouse supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] text-[#172B4D]">
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Confirm Stock Out',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-out-stock');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);
            const outMcs = Number(fd.get('outMcs') || 0);
            const outLooseBags = Number(fd.get('outLooseBags') || 0);

            row.mcs = Math.max(0, row.mcs - outMcs);
            row.looseBags = Math.max(0, row.looseBags - outLooseBags);

            modal.close();
            Toast.show(`Stock Out dispatch of ${outMcs} MCs processed successfully for ${row.poNo}. Remaining: ${row.mcs} MCs.`, 'success');
            if (typeof onSuccess === 'function') onSuccess();
          }
        }
      ]
    });
  },

  // 3b-2. ACTION: STOCK OUT DETAIL MODAL
  showStockOutDetailModal(row) {
    Modal.open({
      title: `Stock Out Details: ${row.poNo} - ${row.variety}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">PO NUMBER &amp; LOCATION</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.poNo} • ${row.location}</div>
              <div class="text-[11px] text-[#6B778C]">${row.variety} • Grade: <span class="font-bold text-[#172B4D]">${row.grade}</span> (${row.species})</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">AB STATUS</span>
              <div>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.abStatus && row.abStatus.includes('PASS') ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${row.abStatus}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Product Specifications -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCT</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.product || row.variety}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SPECIES</span>
              <span class="text-xs text-[#5E6C84] italic">${row.species}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TYPE OF PRODUCT</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">${row.typeOfProduct}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCT CATEGORY</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.productCategory}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCTION DATE</span>
              <span class="font-mono text-xs text-[#5E6C84]">${row.productionDate}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TRANSACTION DATE</span>
              <span class="font-mono text-xs text-[#5E6C84]">${row.transactionDate}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">FREEZING TYPE</span>
              <span class="text-xs text-[#172B4D] font-medium">${row.freezingType}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SOAKING</span>
              <span class="text-xs text-[#5E6C84]">${row.soaking}</span>
            </div>
          </div>

          <!-- Section 2: Storage & Packaging -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">COLD STORE</span>
              <span class="font-semibold text-xs text-[#0284C7]">${row.coldStores}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">BLOCKS</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294]">${row.blocks}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING STYLE</span>
              <span class="text-xs text-[#172B4D]">${row.packingStyle}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING TYPE</span>
              <span class="text-xs text-[#5E6C84]">${row.packingType}</span>
            </div>
          </div>

          <!-- Section 3: Quantity Highlights -->
          <div class="bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6]">
            <h4 class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-2">Available Storage Balance</h4>
            <div class="grid grid-cols-2 gap-3 text-center">
              <div class="p-2.5 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">MCS QUANTITY</div>
                <div class="text-xl font-black text-[#00875A] font-mono mt-0.5">${Number(row.mcs).toLocaleString()}</div>
              </div>
              <div class="p-2.5 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">LOOSE BAGS</div>
                <div class="text-xl font-black text-[#0284C7] font-mono mt-0.5">${row.looseBags}</div>
              </div>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() }
      ]
    });
  },

  // 3c. STOCK - BACKWARD COMPATIBILITY
  renderStock(container) {
    this.renderStockIn(container);
  },

  // 3d. ACTION: NEW PALETTE MODAL
  showNewPaletteModal(row, onSuccess) {
    const nextPalletNo = 500 + Math.floor(Math.random() * 500);
    const generatedPalletTag = `PAL-2026-${nextPalletNo}`;

    Modal.open({
      title: `New Palette Assignment - ${row.batchCodes || row.poNo}`,
      size: 'xl',
      content: `
        <form id="form-new-palette" class="space-y-4 text-xs text-[#172B4D]">
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">BATCH CODE</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.batchCodes}</div>
              <div class="text-[11px] text-[#6B778C]">${row.variety} • Grade: <span class="font-bold text-[#172B4D]">${row.grade}</span></div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">AVAILABLE MCS</span>
              <div class="text-base font-extrabold text-[#00875A] font-mono">${row.balanceMcs || row.mcs} MCs</div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">PALLET TAG <span class="text-red-500 font-black">*</span></label>
              <input type="text" name="palletTag" value="${generatedPalletTag}" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#0284C7]" readonly>
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">PALLET TYPE <span class="text-red-500 font-black">*</span></label>
              <select name="palletType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold" required>
                <option value="Standard Wooden Euro (1200x800)" selected>Standard Wooden Euro (1200x800)</option>
                <option value="Heavy-Duty Plastic Food Grade">Heavy-Duty Plastic Food Grade</option>
                <option value="Aluminum Blast Vault Skid">Aluminum Blast Vault Skid</option>
              </select>
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">MCS TO LOAD <span class="text-red-500 font-black">*</span></label>
              <input type="number" name="palletMcs" value="${Math.min(48, row.balanceMcs || row.mcs)}" min="1" max="${row.balanceMcs || row.mcs}" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold" required>
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">LOOSE BAGS</label>
              <input type="number" name="palletLooseBags" value="${row.looseBags || 0}" min="0" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">TARGET COLD STORE <span class="text-red-500 font-black">*</span></label>
              <select name="coldStore" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold" required>
                <option value="Chamber #1 (IQF)" ${row.coldStores === 'Chamber #1 (IQF)' ? 'selected' : ''}>Chamber #1 (IQF)</option>
                <option value="Chamber #2 (Block)" ${row.coldStores === 'Chamber #2 (Block)' ? 'selected' : ''}>Chamber #2 (Block)</option>
                <option value="Vault #3 Staging" ${row.coldStores === 'Vault #3 Staging' ? 'selected' : ''}>Vault #3 Staging</option>
              </select>
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">OPERATOR NOTES</label>
              <input type="text" name="notes" placeholder="e.g. Shrink-wrapped, corner protectors added" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Create Palette',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-new-palette');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);
            row.palletId = fd.get('palletTag');
            row.palletStatus = 'Palletized (Pending Slotting)';
            modal.close();
            Toast.show(`New Palette ${row.palletId} generated for batch ${row.batchCodes}.`, 'success');
            if (typeof onSuccess === 'function') onSuccess();
          }
        }
      ]
    });
  },

  // 3e. ACTION: PLACE PALETTE MODAL
  showPlacePaletteModal(row, onSuccess) {
    Modal.open({
      title: `Place Palette into Storage: ${row.palletId || row.batchCodes}`,
      size: 'xl',
      content: `
        <form id="form-place-palette" class="space-y-4 text-xs text-[#172B4D]">
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">PALLET IDENTIFIER</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.palletId || 'PAL-PENDING'}</div>
              <div class="text-[11px] text-[#6B778C]">Batch: <span class="font-bold text-[#172B4D]">${row.batchCodes}</span> • ${row.variety}</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">QUANTITY</span>
              <div class="text-base font-extrabold text-[#00875A] font-mono">${row.mcs} MCs (${row.looseBags} Bags)</div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">COLD STORE CHAMBER <span class="text-[#DE350B] font-bold">*</span></label>
              <select name="chamber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold" required>
                <option value="Chamber #1 (IQF)" ${row.coldStores === 'Chamber #1 (IQF)' ? 'selected' : ''}>Chamber #1 (IQF)</option>
                <option value="Chamber #2 (Block)" ${row.coldStores === 'Chamber #2 (Block)' ? 'selected' : ''}>Chamber #2 (Block)</option>
                <option value="Vault #3 Staging" ${row.coldStores === 'Vault #3 Staging' ? 'selected' : ''}>Vault #3 Staging</option>
              </select>
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">RACK AISLE &amp; BAY <span class="text-[#DE350B] font-bold">*</span></label>
              <input type="text" name="rack" value="${row.rack || 'RACK-A1-T1'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold" required>
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">FORKLIFT OPERATOR</label>
              <input type="text" name="operator" value="V. Satish" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold">
            </div>
            <div>
              <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">PLACEMENT STATUS</label>
              <select name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold">
                <option value="Placed in Store" selected>Placed in Store</option>
                <option value="Staged for Stuffing">Staged for Stuffing</option>
                <option value="Quarantine Hold">Quarantine Hold</option>
              </select>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Confirm Slotting',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-place-palette');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);
            row.coldStores = fd.get('chamber');
            row.rack = fd.get('rack');
            row.palletStatus = fd.get('status');
            modal.close();
            Toast.show(`Palette ${row.palletId || row.batchCodes} placed into ${row.coldStores} at ${row.rack}.`, 'success');
            if (typeof onSuccess === 'function') onSuccess();
          }
        }
      ]
    });
  },

  // 3f. ACTION: VIEW STORE MODAL
  showViewStoreModal(row) {
    Modal.open({
      title: `Store & Chamber Slotting - ${row.coldStores || 'Chamber'}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Storage Facility Header -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">COLD STORE CHAMBER</span>
              <div class="text-base font-extrabold text-[#0284C7]">${row.coldStores || 'Chamber #1 (IQF)'}</div>
              <div class="text-[11px] text-[#6B778C]">Slotting Location: <span class="font-mono font-bold text-[#172B4D]">${row.rack || 'RACK-A1-T1'}</span></div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">CHAMBER TELEMETRY</span>
              <div class="text-base font-extrabold text-[#00875A] font-mono">-22.4°C <span class="text-xs text-[#6B778C] font-normal">(Optimal)</span></div>
              <div class="text-[10px] text-[#5E6C84]">Humidity: 88% RH</div>
            </div>
          </div>

          <!-- Stored Lot Information -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">BATCH CODES</span>
              <span class="font-mono font-bold text-xs text-[#0284C7]">${row.batchCodes}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO NUMBER</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.poNo || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">VARIETY &amp; GRADE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.variety} • ${row.grade}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PALLET TAG</span>
              <span class="font-mono font-bold text-xs text-[#00875A]">${row.palletId || 'Unassigned'}</span>
            </div>
          </div>

          <!-- Visual Slotting Status Card -->
          <div class="bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6]">
            <h4 class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-2">Chamber Stock Allocation Summary</h4>
            <div class="grid grid-cols-3 gap-3 text-center">
              <div class="p-2.5 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">STORED MCS</div>
                <div class="text-lg font-black text-[#00875A] font-mono mt-0.5">${row.mcs}</div>
              </div>
              <div class="p-2.5 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">LOOSE BAGS</div>
                <div class="text-lg font-black text-[#0284C7] font-mono mt-0.5">${row.looseBags}</div>
              </div>
              <div class="p-2.5 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL WEIGHT (KG)</div>
                <div class="text-lg font-black text-[#172B4D] font-mono mt-0.5">${Number(row.totalWeight || 0).toLocaleString(undefined, { minimumFractionDigits: 1 })}</div>
              </div>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() }
      ]
    });
  },

  // 3g. ADD STOCK MODAL (EXACT 22 USER-SPECIFIED FORM FIELDS - FLAT CLEAN STYLE GUIDE)
  showAddStockModal(onSuccess) {
    const today = new Date().toISOString().slice(0, 10);
    const nextId = (this.state.stockInList?.length || 0) + 1;
    const generatedBatchCode = `BCH-2026-${910 + nextId}`;

    Modal.open({
      title: 'Add Stock (Coldstore Inward)',
      size: '2xl',
      content: `
        <form id="form-add-stock" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <!-- 1. PRODUCTION PLANT * -->
          <div>
            <label for="cs-add-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B] font-bold">*</span></label>
            <select id="cs-add-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
              <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
              <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
              <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
            </select>
          </div>

          <!-- 2. PRODUCTION DATE * -->
          <div>
            <label for="cs-add-pdate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE <span class="text-[#DE350B] font-bold">*</span></label>
            <input type="date" id="cs-add-pdate" name="productionDate" value="${today}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required onclick="this.showPicker ? this.showPicker() : this.focus()">
          </div>

          <!-- 3. BATCH CODES * -->
          <div>
            <label for="cs-add-batch" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BATCH CODES <span class="text-[#DE350B] font-bold">*</span></label>
            <input type="text" id="cs-add-batch" name="batchCodes" value="${generatedBatchCode}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#0284C7]" required>
          </div>

          <!-- 4. TRANSACTION DATE * -->
          <div>
            <label for="cs-add-tdate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSACTION DATE <span class="text-[#DE350B] font-bold">*</span></label>
            <input type="date" id="cs-add-tdate" name="transactionDate" value="${today}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required onclick="this.showPicker ? this.showPicker() : this.focus()">
          </div>

          <!-- 5. GROUP * -->
          <div>
            <label for="cs-add-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP <span class="text-[#DE350B] font-bold">*</span></label>
            <select id="cs-add-group" name="group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Group A" selected>Group A</option>
              <option value="Group B">Group B</option>
              <option value="Group C">Group C</option>
              <option value="Group D">Group D</option>
            </select>
          </div>

          <!-- 6. STOCK BELONGS TO * -->
          <div>
            <label for="cs-add-stockbelongs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK BELONGS TO <span class="text-[#DE350B] font-bold">*</span></label>
            <select id="cs-add-stockbelongs" name="stockBelongsTo" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Devi Fisheries Ltd (DFL)" selected>Devi Fisheries Ltd (DFL)</option>
              <option value="DFL Unit-5 (JPT)">DFL Unit-5 (JPT)</option>
              <option value="DFL Unit-4 (PND)">DFL Unit-4 (PND)</option>
              <option value="DFL Unit-3 (PSP)">DFL Unit-3 (PSP)</option>
              <option value="DFL Unit-1 (VSP)">DFL Unit-1 (VSP)</option>
              <option value="Third-Party Co-Packing">Third-Party Co-Packing</option>
            </select>
          </div>

          <!-- 7. SHIFT -->
          <div>
            <label for="cs-add-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT</label>
            <select id="cs-add-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="Shift A (Day)" selected>Shift A (Day)</option>
              <option value="Shift B (Evening)">Shift B (Evening)</option>
              <option value="Shift C (Night)">Shift C (Night)</option>
            </select>
          </div>

          <!-- 8. PO NO -->
          <div>
            <label for="cs-add-pono" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NO</label>
            <input type="text" id="cs-add-pono" name="poNo" value="PO-2026-4445" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold text-[#172B4D]">
          </div>

          <!-- 9. VARIETY * -->
          <div>
            <label for="cs-add-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B] font-bold">*</span></label>
            <select id="cs-add-variety" name="variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Vannamei (White Shrimp)" selected>Vannamei (White Shrimp)</option>
              <option value="Black Tiger (Monodon)">Black Tiger (Monodon)</option>
              <option value="Scampi (Macrobrachium)">Scampi (Macrobrachium)</option>
              <option value="Sea Pearl Cooked PDTO">Sea Pearl Cooked PDTO</option>
            </select>
          </div>

          <!-- 10. PACKING STYLE -->
          <div>
            <label for="cs-add-pstyle" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING STYLE</label>
            <input type="text" id="cs-add-pstyle" name="packingStyle" value="10x1kg Net" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
          </div>

          <!-- 11. GRADE -->
          <div>
            <label for="cs-add-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
            <select id="cs-add-grade" name="grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="16/20">16/20</option>
              <option value="21/25">21/25</option>
              <option value="26/30">26/30</option>
              <option value="31/40" selected>31/40</option>
              <option value="41/50">41/50</option>
              <option value="11/15">11/15</option>
              <option value="U/15">U/15</option>
            </select>
          </div>

          <!-- 12. PACKING TYPE -->
          <div>
            <label for="cs-add-ptype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING TYPE</label>
            <select id="cs-add-ptype" name="packingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="Master Cartons" selected>Master Cartons</option>
              <option value="6x2kg Block">6x2kg Block</option>
              <option value="Dummy Cartons">Dummy Cartons</option>
              <option value="10x2lb Pouch">10x2lb Pouch</option>
              <option value="5x2kg IQF Poly">5x2kg IQF Poly</option>
            </select>
          </div>

          <!-- 13. FREEZING TYPE -->
          <div>
            <label for="cs-add-ftype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE</label>
            <select id="cs-add-ftype" name="freezingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="IQF Tunnel" selected>IQF Tunnel</option>
              <option value="Contact Plate Freezer">Contact Plate Freezer</option>
              <option value="Blast Freezer">Blast Freezer</option>
              <option value="Semi-IQF Spiral">Semi-IQF Spiral</option>
            </select>
          </div>

          <!-- 14. SOAKING -->
          <div>
            <label for="cs-add-soaking" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKING</label>
            <select id="cs-add-soaking" name="soaking" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="Yes (Non-Phosphate)" selected>Yes (Non-Phosphate)</option>
              <option value="No (Unsoaked)">No (Unsoaked)</option>
              <option value="Yes (STPP Treated)">Yes (STPP Treated)</option>
            </select>
          </div>

          <!-- 15. PRODUCT CATEGORY * -->
          <div>
            <label for="cs-add-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY <span class="text-[#DE350B] font-bold">*</span></label>
            <select id="cs-add-category" name="productCategory" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Raw Frozen" selected>Raw Frozen</option>
              <option value="Cooked Frozen">Cooked Frozen</option>
              <option value="Blanched Frozen">Blanched Frozen</option>
              <option value="Value-Added">Value-Added</option>
            </select>
          </div>

          <!-- 16. ABSTATUS -->
          <div>
            <label for="cs-add-abstatus" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ABSTATUS</label>
            <select id="cs-add-abstatus" name="abStatus" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-bold text-[#006644]">
              <option value="PASSED (AB Negative)" selected>PASSED (AB Negative)</option>
              <option value="UNDER TEST">UNDER TEST</option>
              <option value="AWAITING LAB">AWAITING LAB</option>
            </select>
          </div>

          <!-- 17. COLD STORES * -->
          <div>
            <label for="cs-add-coldstores" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COLD STORES <span class="text-[#DE350B] font-bold">*</span></label>
            <select id="cs-add-coldstores" name="coldStores" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Chamber #1 (IQF)" selected>Chamber #1 (IQF)</option>
              <option value="Chamber #2 (Block)">Chamber #2 (Block)</option>
              <option value="Vault #3 Staging">Vault #3 Staging</option>
              <option value="Chamber #3 (Blast)">Chamber #3 (Blast)</option>
            </select>
          </div>

          <!-- 18. MCS * -->
          <div>
            <label for="cs-add-mcs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">MCS <span class="text-[#DE350B] font-bold">*</span></label>
            <input type="number" id="cs-add-mcs" name="mcs" value="150" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#00875A]" required>
          </div>

          <!-- 19. LOOSE BAGS * -->
          <div>
            <label for="cs-add-loosebags" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LOOSE BAGS <span class="text-[#DE350B] font-bold">*</span></label>
            <input type="number" id="cs-add-loosebags" name="looseBags" value="10" min="0" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#172B4D]" required>
          </div>

          <!-- 20. TOTAL WEIGHT (MCS :) -->
          <div>
            <label for="cs-add-totalwt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TOTAL WEIGHT (MCS :)</label>
            <input type="number" step="0.1" id="cs-add-totalwt" name="totalWeight" value="1500.0" min="0.1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#172B4D]">
          </div>

          <!-- 21. BALANCE WEIGHT (MCS :, LOOSEBAGS :) -->
          <div>
            <label for="cs-add-balwt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BALANCE WEIGHT (MCS :, LOOSEBAGS :)</label>
            <input type="number" step="0.1" id="cs-add-balwt" name="balanceWeight" value="1500.0" min="0.1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#0284C7]">
          </div>

          <!-- 22. REMARKS (Spans full width across cols) -->
          <div class="sm:col-span-2 md:col-span-3 lg:col-span-3">
            <label for="cs-add-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
            <input type="text" id="cs-add-remarks" name="remarks" placeholder="Enter remarks or storage notes..." value="Coldstore intake verified, core temperature compliant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] text-[#172B4D]">
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Save Stock',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-add-stock');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);
            const mcsNum = Number(fd.get('mcs') || 0);
            const looseBagsNum = Number(fd.get('looseBags') || 0);
            const totalWeightNum = Number(fd.get('totalWeight') || (mcsNum * 10));
            const balanceWeightNum = Number(fd.get('balanceWeight') || totalWeightNum);

            const newRecord = {
              id: nextId,
              sNo: 1,
              productionPlant: fd.get('productionPlant'),
              productionDate: fd.get('productionDate'),
              batchCodes: fd.get('batchCodes'),
              transactionDate: fd.get('transactionDate'),
              group: fd.get('group'),
              stockBelongsTo: fd.get('stockBelongsTo'),
              shift: fd.get('shift'),
              poNo: fd.get('poNo'),
              variety: fd.get('variety'),
              packingStyle: fd.get('packingStyle'),
              grade: fd.get('grade'),
              packingType: fd.get('packingType'),
              freezingType: fd.get('freezingType'),
              soaking: fd.get('soaking'),
              productCategory: fd.get('productCategory'),
              abStatus: fd.get('abStatus'),
              remarks: fd.get('remarks'),
              totalWeight: totalWeightNum,
              balanceWeight: balanceWeightNum,
              coldStores: fd.get('coldStores'),
              mcs: mcsNum,
              balanceMcs: mcsNum,
              looseBags: looseBagsNum,
              palletId: `PAL-2026-${String(450 + nextId).padStart(4, '0')}`,
              rack: 'RACK-A1-T1',
              palletStatus: 'Placed in Store'
            };

            this.state.stockInList.unshift(newRecord);
            this.state.stockInList.forEach((it, idx) => { it.sNo = idx + 1; });
            modal.close();
            Toast.show(`Stock record for ${newRecord.batchCodes} created successfully!`, 'success');
            if (typeof onSuccess === 'function') onSuccess();
          }
        }
      ]
    });
  },

  // 3h. STOCK IN DETAIL MODAL
  showStockInDetailModal(row) {
    Modal.open({
      title: `Stock Details: ${row.batchCodes || row.poNo}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">BATCH CODE</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.batchCodes}</div>
              <div class="text-[11px] text-[#6B778C]">${row.variety} • Grade: <span class="font-bold text-[#172B4D]">${row.grade}</span></div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">AB STATUS</span>
              <div>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.abStatus && row.abStatus.includes('PASS') ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${row.abStatus}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Production Identifiers -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCTION PLANT</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.productionPlant}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCTION DATE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.productionDate}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TRANSACTION DATE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.transactionDate}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO NUMBER</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.poNo || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GROUP</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294]">${row.group}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STOCK BELONGS TO</span>
              <span class="font-medium text-xs text-[#172B4D]">${row.stockBelongsTo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SHIFT</span>
              <span class="text-xs text-[#172B4D]">${row.shift || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCT CATEGORY</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">${row.productCategory}</span>
            </div>
          </div>

          <!-- Section 2: Processing Specs -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING STYLE</span>
              <span class="font-medium text-xs text-[#172B4D]">${row.packingStyle}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING TYPE</span>
              <span class="text-xs text-[#5E6C84]">${row.packingType}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">FREEZING TYPE</span>
              <span class="text-xs text-[#172B4D]">${row.freezingType}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SOAKING</span>
              <span class="text-xs text-[#172B4D]">${row.soaking}</span>
            </div>
          </div>

          <!-- Section 3: Coldstore & Weight Breakdown -->
          <div class="bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6]">
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Coldstore Chamber &amp; Weights</h4>
              <span class="text-[11px] font-semibold text-[#0284C7]">${row.coldStores} • <span class="font-mono">${row.rack || 'RACK-A1-T1'}</span></span>
            </div>
            <div class="grid grid-cols-4 gap-3 text-center">
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">MCS</div>
                <div class="text-base font-extrabold text-[#00875A] font-mono mt-0.5">${row.mcs}</div>
              </div>
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">LOOSE BAGS</div>
                <div class="text-base font-extrabold text-[#172B4D] font-mono mt-0.5">${row.looseBags}</div>
              </div>
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL WEIGHT</div>
                <div class="text-base font-extrabold text-[#172B4D] font-mono mt-0.5">${Number(row.totalWeight || 0).toLocaleString(undefined, { minimumFractionDigits: 1 })} <span class="text-xs text-[#6B778C]">Kg</span></div>
              </div>
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">BALANCE WEIGHT</div>
                <div class="text-base font-extrabold text-[#00875A] font-mono mt-0.5">${Number(row.balanceWeight || 0).toLocaleString(undefined, { minimumFractionDigits: 1 })} <span class="text-xs text-[#6B778C]">Kg</span></div>
              </div>
            </div>
            <div class="mt-2.5 text-[11px] text-[#6B778C]">
              <span class="font-bold text-[#5E6C84]">Remarks:</span> ${row.remarks || 'N/A'}
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() }
      ]
    });
  },

  // 3a. ORDERS - RUNNING ORDERS (EXACT 5 USER-SPECIFIED FORM FIELDS & 10 DATA TABLE COLUMNS)
  renderRunningOrders(container) {
    const fullList = this.state.runningOrdersList || [];
    let table = null;

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Running Orders</h1>
          </div>
        </div>

        <!-- Collapsible Top Filter Header Card (5 User-Specified Search & Filter Fields) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="ro-filter-reset-btn" 
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="ro-filter-toggle-btn" 
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="ro-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (Matching 5 User-Specified Fields) -->
          <div id="ro-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. COLD STORES -->
            <div>
              <label for="ro-filter-coldstore" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COLD STORES</label>
              <select id="ro-filter-coldstore" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Cold Store</option>
                <option value="Chamber #1 (IQF)">Chamber #1 (IQF)</option>
                <option value="Chamber #2 (Block)">Chamber #2 (Block)</option>
                <option value="Vault #3 Staging">Vault #3 Staging</option>
                <option value="Chamber #3 (Blast)">Chamber #3 (Blast)</option>
              </select>
            </div>

            <!-- 2. CONSIGNEE -->
            <div>
              <label for="ro-filter-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CONSIGNEE</label>
              <select id="ro-filter-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Consignee</option>
                <option value="Pacific Imports LLC">Pacific Imports LLC</option>
                <option value="Nippon Coldchain Corp">Nippon Coldchain Corp</option>
                <option value="EuroSea Rotterdam B.V.">EuroSea Rotterdam B.V.</option>
                <option value="UK Oceanic Distrib">UK Oceanic Distrib</option>
                <option value="CanSeafood Toronto">CanSeafood Toronto</option>
                <option value="Sydney Cold Storage">Sydney Cold Storage</option>
                <option value="Hamburg Port Terminal">Hamburg Port Terminal</option>
              </select>
            </div>

            <!-- 3. EXPORTERS -->
            <div>
              <label for="ro-filter-exporters" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">EXPORTERS</label>
              <select id="ro-filter-exporters" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Exporter</option>
                <option value="Devi Fisheries Ltd">Devi Fisheries Ltd</option>
                <option value="Devi Aqua Feeds">Devi Aqua Feeds</option>
                <option value="DFL Export Division">DFL Export Division</option>
              </select>
            </div>

            <!-- 4. PROCESSOR -->
            <div>
              <label for="ro-filter-processor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PROCESSOR</label>
              <select id="ro-filter-processor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Processor</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 5. PRODUCT CATEGORY -->
            <div>
              <label for="ro-filter-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY</label>
              <select id="ro-filter-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Product Category</option>
                <option value="Raw Frozen">Raw Frozen</option>
                <option value="Cooked Frozen">Cooked Frozen</option>
                <option value="Blanched Frozen">Blanched Frozen</option>
                <option value="Value-Added">Value-Added</option>
              </select>
            </div>

            <!-- 6. Action Slot: Search Button -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="ro-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                title="Search Filter Records"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Running Orders Data Table Container (10 User-Specified Columns) -->
        <div id="cs-running-orders-table-container"></div>
      </div>
    `;

    // Render Table Function
    const renderTable = (data) => {
      table = new DataTable({
        containerId: 'cs-running-orders-table-container',
        tableTitle: 'Running Orders',
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showRunningOrderDetailModal(row),
        columns: [
          // 1. SNO
          {
            field: 'sNo',
            header: 'SNO',
            sortable: true,
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. ID
          {
            field: 'id',
            header: 'ID',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#0284C7] hover:underline cursor-pointer">${v}</span>`
          },
          // 3. P.Inv No
          {
            field: 'pInvNo',
            header: 'P.Inv No',
            sortable: true,
            render: v => `<span class="font-mono font-semibold text-xs text-[#172B4D]">${v}</span>`
          },
          // 4. P.Inv Date
          {
            field: 'pInvDate',
            header: 'P.Inv Date',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>`
          },
          // 5. Po No
          {
            field: 'poNo',
            header: 'Po No',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${v}</span>`
          },
          // 6. Po Date
          {
            field: 'poDate',
            header: 'Po Date',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#5E6C84]">${v}</span>`
          },
          // 7. Country
          {
            field: 'country',
            header: 'Country',
            sortable: true,
            render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>`
          },
          // 8. Buyer
          {
            field: 'buyer',
            header: 'Buyer',
            sortable: true,
            render: v => `<span class="font-medium text-xs text-[#172B4D]">${v}</span>`
          },
          // 9. Master Status
          {
            field: 'masterStatus',
            header: 'Master Status',
            sortable: true,
            render: v => {
              let color = 'bg-[#E3FCEF] text-[#006644]';
              if (v === 'Partially Allocated') color = 'bg-[#FFF0B3] text-[#172B4D]';
              else if (v === 'In Allocation') color = 'bg-[#DEEBFF] text-[#0747A6]';
              else if (v === 'Awaiting Inspection') color = 'bg-[#FFEBE6] text-[#BF2600]';
              else if (v === 'Approved') color = 'bg-[#EAE6FF] text-[#403294]';
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${color}">${v}</span>`;
            }
          },
          // 10. Dummy Status
          {
            field: 'dummyStatus',
            header: 'Dummy Status',
            sortable: true,
            render: v => {
              let color = 'bg-[#EAE6FF] text-[#403294]';
              if (v === 'Completed') color = 'bg-[#E3FCEF] text-[#006644]';
              else if (v === 'Active') color = 'bg-[#E0F2FE] text-[#0284C7]';
              else if (v === 'In Progress') color = 'bg-[#FFF0B3] text-[#172B4D]';
              return `<span class="px-2 py-0.5 rounded text-[10px] font-bold ${color}">${v}</span>`;
            }
          }
        ],
        data: data
      });
    };

    // Initial table render
    renderTable(fullList);

    // Bind Collapsible Filter Toggle
    const toggleBtn = container.querySelector('#ro-filter-toggle-btn');
    const filterBody = container.querySelector('#ro-filter-body');
    const toggleIcon = container.querySelector('#ro-filter-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isFilterOpen = true;
      toggleBtn.addEventListener('click', () => {
        isFilterOpen = !isFilterOpen;
        if (isFilterOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Execute Filter Function (Matches 5 user-specified fields)
    const executeFilter = () => {
      const coldStoreVal = container.querySelector('#ro-filter-coldstore')?.value || 'ALL';
      const consigneeVal = container.querySelector('#ro-filter-consignee')?.value || 'ALL';
      const exportersVal = container.querySelector('#ro-filter-exporters')?.value || 'ALL';
      const processorVal = container.querySelector('#ro-filter-processor')?.value || 'ALL';
      const categoryVal = container.querySelector('#ro-filter-category')?.value || 'ALL';

      const filtered = fullList.filter(item => {
        if (coldStoreVal !== 'ALL' && item.coldStores !== coldStoreVal) return false;
        if (consigneeVal !== 'ALL' && item.consignee !== consigneeVal) return false;
        if (exportersVal !== 'ALL' && item.exporters !== exportersVal) return false;
        if (processorVal !== 'ALL' && item.processor !== processorVal) return false;
        if (categoryVal !== 'ALL' && item.productCategory !== categoryVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Showing ${filtered.length} matching Running Order(s)`, 'info');
    };

    // Bind Search Button
    const searchBtn = container.querySelector('#ro-filter-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', executeFilter);
    }

    // Bind Reset Button
    const resetBtn = container.querySelector('#ro-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const cs = container.querySelector('#ro-filter-coldstore');
        const cg = container.querySelector('#ro-filter-consignee');
        const ex = container.querySelector('#ro-filter-exporters');
        const pr = container.querySelector('#ro-filter-processor');
        const cat = container.querySelector('#ro-filter-category');

        if (cs) cs.value = 'ALL';
        if (cg) cg.value = 'ALL';
        if (ex) ex.value = 'ALL';
        if (pr) pr.value = 'ALL';
        if (cat) cat.value = 'ALL';

        renderTable(fullList);
        Toast.show('Search filters reset to default', 'info');
      });
    }
  },

  // 3a-1. RUNNING ORDER DETAIL MODAL
  showRunningOrderDetailModal(row) {
    Modal.open({
      title: `Order Details: ${row.id} (${row.poNo})`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">ORDER IDENTIFIER</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.id}</div>
              <div class="text-[11px] text-[#6B778C]">Buyer: <span class="font-bold text-[#172B4D]">${row.buyer}</span> • Country: <span class="font-bold text-[#172B4D]">${row.country}</span></div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">MASTER STATUS</span>
              <div class="mt-0.5">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.masterStatus === 'Ready for Stuffing' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#DEEBFF] text-[#0747A6]'}">${row.masterStatus}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Order & Invoice Identifiers (Data Table Columns) -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">P.INV NO</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.pInvNo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">P.INV DATE</span>
              <span class="font-mono text-xs text-[#5E6C84]">${row.pInvDate}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO NO</span>
              <span class="font-mono font-bold text-xs text-[#0284C7]">${row.poNo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO DATE</span>
              <span class="font-mono text-xs text-[#5E6C84]">${row.poDate}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">COUNTRY</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.country}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">BUYER</span>
              <span class="font-medium text-xs text-[#172B4D]">${row.buyer}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">DUMMY STATUS</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294]">${row.dummyStatus}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SNO</span>
              <span class="font-mono text-xs text-[#5E6C84]">#${row.sNo}</span>
            </div>
          </div>

          <!-- Section 2: Coldstore & Export Filters Context -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#F8FAFC] p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">COLD STORES</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.coldStores || 'Chamber #1 (IQF)'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">CONSIGNEE</span>
              <span class="font-medium text-xs text-[#172B4D]">${row.consignee || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">EXPORTERS</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.exporters || 'Devi Fisheries Ltd'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PROCESSOR</span>
              <span class="font-semibold text-xs text-[#0284C7]">${row.processor || 'DFL UNIT-5 (JPT)'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCT CATEGORY</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">${row.productCategory || 'Raw Frozen'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STUFFING INSPECTION</span>
              <span class="text-xs text-[#00875A] font-semibold">Scheduled Pre-Shipment</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() }
      ]
    });
  },

  // 3b. ORDERS - ORDERS STATUS (EXACT 12 USER-SPECIFIED FORM FIELDS & 24 DATA TABLE COLUMNS, NO ACTION COLUMN)
  renderOrdersStatus(container) {
    const fullList = this.state.orderStatusList || [];
    let table = null;

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Orders Status</h1>
          </div>
        </div>

        <!-- Collapsible Top Filter Header Card (12 User-Specified Search & Filter Fields) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="os-filter-reset-btn" 
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="os-filter-toggle-btn" 
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="os-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (Matching 12 User-Specified Fields) -->
          <div id="os-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. COLD STORES -->
            <div>
              <label for="os-filter-coldstore" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COLD STORES</label>
              <select id="os-filter-coldstore" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Cold Store</option>
                <option value="Chamber #1 (IQF)">Chamber #1 (IQF)</option>
                <option value="Chamber #2 (Block)">Chamber #2 (Block)</option>
                <option value="Vault #3 Staging">Vault #3 Staging</option>
                <option value="Chamber #3 (Blast)">Chamber #3 (Blast)</option>
              </select>
            </div>

            <!-- 2. PO NO -->
            <div>
              <label for="os-filter-pono" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NO</label>
              <input type="text" id="os-filter-pono" placeholder="Filter by PO No..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold text-[#172B4D]">
            </div>

            <!-- 3. CONSIGNEE -->
            <div>
              <label for="os-filter-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CONSIGNEE</label>
              <select id="os-filter-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Consignee</option>
                <option value="Pacific Imports LLC">Pacific Imports LLC</option>
                <option value="Nippon Coldchain Corp">Nippon Coldchain Corp</option>
                <option value="EuroSea Rotterdam B.V.">EuroSea Rotterdam B.V.</option>
                <option value="UK Oceanic Distrib">UK Oceanic Distrib</option>
                <option value="CanSeafood Toronto">CanSeafood Toronto</option>
                <option value="Sydney Cold Storage">Sydney Cold Storage</option>
                <option value="Hamburg Port Terminal">Hamburg Port Terminal</option>
              </select>
            </div>

            <!-- 4. FREEZING TYPE -->
            <div>
              <label for="os-filter-freezingtype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE</label>
              <select id="os-filter-freezingtype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Freezing Type</option>
                <option value="IQF Tunnel">IQF Tunnel</option>
                <option value="Contact Plate Freezer">Contact Plate Freezer</option>
                <option value="Blast Freezer">Blast Freezer</option>
                <option value="Semi-IQF Spiral">Semi-IQF Spiral</option>
              </select>
            </div>

            <!-- 5. SOAKING -->
            <div>
              <label for="os-filter-soaking" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKING</label>
              <select id="os-filter-soaking" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Soaking</option>
                <option value="Yes (Non-Phosphate)">Yes (Non-Phosphate)</option>
                <option value="No (Unsoaked)">No (Unsoaked)</option>
                <option value="Yes (STPP Treated)">Yes (STPP Treated)</option>
              </select>
            </div>

            <!-- 6. VARIETY -->
            <div>
              <label for="os-filter-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
              <select id="os-filter-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Variety</option>
                <option value="Vannamei (White Shrimp)">Vannamei (White Shrimp)</option>
                <option value="Black Tiger (Monodon)">Black Tiger (Monodon)</option>
                <option value="Scampi (Macrobrachium)">Scampi (Macrobrachium)</option>
                <option value="Sea Pearl Cooked PDTO">Sea Pearl Cooked PDTO</option>
              </select>
            </div>

            <!-- 7. GRADE -->
            <div>
              <label for="os-filter-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
              <select id="os-filter-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Grade</option>
                <option value="16/20">16/20</option>
                <option value="21/25">21/25</option>
                <option value="26/30">26/30</option>
                <option value="31/40">31/40</option>
                <option value="41/50">41/50</option>
                <option value="U-15">U-15</option>
              </select>
            </div>

            <!-- 8. PACKING STYLE -->
            <div>
              <label for="os-filter-packingstyle" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING STYLE</label>
              <select id="os-filter-packingstyle" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Packing Style</option>
                <option value="10x1kg Net">10x1kg Net</option>
                <option value="6x2kg Block">6x2kg Block</option>
                <option value="5x2kg Net">5x2kg Net</option>
                <option value="10x2lb">10x2lb</option>
              </select>
            </div>

            <!-- 9. EXPORTERS -->
            <div>
              <label for="os-filter-exporters" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">EXPORTERS</label>
              <select id="os-filter-exporters" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Exporter</option>
                <option value="Devi Fisheries Ltd">Devi Fisheries Ltd</option>
                <option value="Devi Aqua Feeds">Devi Aqua Feeds</option>
                <option value="DFL Export Division">DFL Export Division</option>
              </select>
            </div>

            <!-- 10. PROCESSOR -->
            <div>
              <label for="os-filter-processor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PROCESSOR</label>
              <select id="os-filter-processor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Processor</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 11. PRODUCT CATEGORY -->
            <div>
              <label for="os-filter-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY</label>
              <select id="os-filter-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Product Category</option>
                <option value="Raw Frozen">Raw Frozen</option>
                <option value="Cooked Frozen">Cooked Frozen</option>
                <option value="Blanched Frozen">Blanched Frozen</option>
                <option value="Value-Added">Value-Added</option>
              </select>
            </div>

            <!-- 12. AB STATUS(-) -->
            <div>
              <label for="os-filter-abstatus" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">AB STATUS(-)</label>
              <select id="os-filter-abstatus" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select AB Status</option>
                <option value="PASSED (AB Negative)">PASSED (AB Negative)</option>
                <option value="UNDER TEST">UNDER TEST</option>
                <option value="AWAITING LAB">AWAITING LAB</option>
              </select>
            </div>

            <!-- 13. Action Slot: Search Button -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="os-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                title="Search Filter Records"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Orders Status Data Table Container (24 User-Specified Columns, No Action Column) -->
        <div id="cs-order-status-table-container"></div>
      </div>
    `;

    // Render Table Function
    const renderTable = (data) => {
      table = new DataTable({
        containerId: 'cs-order-status-table-container',
        tableTitle: 'Orders Status Reports',
        searchable: true,
        exportable: true,
        pageSize: 10,
        actions: [], // User constraint: There is no action column
        onRowClick: (row) => this.showOrderStatusDetailModal(row),
        columns: [
          // 1. S.No
          {
            field: 'sNo',
            header: 'S.No',
            sortable: true,
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Buyer
          {
            field: 'buyer',
            header: 'Buyer',
            sortable: true,
            render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 3. Po No
          {
            field: 'poNo',
            header: 'Po No',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#0284C7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>`
          },
          // 4. Brand
          {
            field: 'brand',
            header: 'Brand',
            sortable: true,
            render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294] whitespace-nowrap">${v}</span>`
          },
          // 5. Shipment Date
          {
            field: 'shipmentDate',
            header: 'Shipment Date',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 6. SUPC
          {
            field: 'supc',
            header: 'SUPC',
            sortable: true,
            render: v => `<span class="font-mono text-xs font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 7. Product
          {
            field: 'product',
            header: 'Product',
            sortable: true,
            render: v => `<span class="font-medium text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 8. Variety
          {
            field: 'variety',
            header: 'Variety',
            sortable: true,
            render: v => `<span class="text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 9. Freezing Type
          {
            field: 'freezingType',
            header: 'Freezing Type',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 10. Soaking Type
          {
            field: 'soakingType',
            header: 'Soaking Type',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 11. Packing
          {
            field: 'packing',
            header: 'Packing',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 12. Grade
          {
            field: 'grade',
            header: 'Grade',
            sortable: true,
            render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F4F5F7] text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 13. Ordered Mcs
          {
            field: 'orderedMcs',
            header: 'Ordered Mcs',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>`
          },
          // 14. Final Mcs
          {
            field: 'finalMcs',
            header: 'Final Mcs',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${Number(v).toLocaleString()}</span>`
          },
          // 15. Bal Mcs
          {
            field: 'balMcs',
            header: 'Bal Mcs',
            sortable: true,
            render: v => `<span class="font-mono font-semibold text-xs ${Number(v) > 0 ? 'text-[#DE350B]' : 'text-[#5E6C84]'}">${Number(v).toLocaleString()}</span>`
          },
          // 16. Ordered Kgs
          {
            field: 'orderedKgs',
            header: 'Ordered Kgs',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#172B4D]">${Number(v).toLocaleString(undefined, { minimumFractionDigits: 1 })}</span>`
          },
          // 17. Final Kgs
          {
            field: 'finalKgs',
            header: 'Final Kgs',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#00875A] font-semibold">${Number(v).toLocaleString(undefined, { minimumFractionDigits: 1 })}</span>`
          },
          // 18. Bal Kgs
          {
            field: 'balKgs',
            header: 'Bal Kgs',
            sortable: true,
            render: v => `<span class="font-mono text-xs ${Number(v) > 0 ? 'text-[#DE350B] font-semibold' : 'text-[#5E6C84]'}">${Number(v).toLocaleString(undefined, { minimumFractionDigits: 1 })}</span>`
          },
          // 19. Aval In Store Kgs
          {
            field: 'avalInStoreKgs',
            header: 'Aval In Store Kgs',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#0284C7] font-semibold">${Number(v).toLocaleString(undefined, { minimumFractionDigits: 1 })}</span>`
          },
          // 20. Aval Store Mcs
          {
            field: 'avalStoreMcs',
            header: 'Aval Store Mcs',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#0284C7]">${Number(v).toLocaleString()}</span>`
          },
          // 21. Head on Count
          {
            field: 'headOnCount',
            header: 'Head on Count',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 22. Qty in Kgs
          {
            field: 'qtyInKgs',
            header: 'Qty in Kgs',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toLocaleString(undefined, { minimumFractionDigits: 1 })}</span>`
          },
          // 23. Qty in Tons
          {
            field: 'qtyInTons',
            header: 'Qty in Tons',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#006644] whitespace-nowrap">${Number(v).toFixed(2)} MT</span>`
          },
          // 24. Status
          {
            field: 'status',
            header: 'Status',
            sortable: true,
            render: v => {
              let color = 'bg-[#E3FCEF] text-[#006644]';
              if (v === 'Partially Allocated') color = 'bg-[#FFF0B3] text-[#172B4D]';
              else if (v === 'In Allocation') color = 'bg-[#DEEBFF] text-[#0747A6]';
              else if (v === 'Under Inspection') color = 'bg-[#FFEBE6] text-[#BF2600]';
              else if (v === 'Shipped') color = 'bg-[#EAE6FF] text-[#403294]';
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ${color}">${v}</span>`;
            }
          }
        ],
        data: data
      });
    };

    // Initial table render
    renderTable(fullList);

    // Bind Collapsible Filter Toggle
    const toggleBtn = container.querySelector('#os-filter-toggle-btn');
    const filterBody = container.querySelector('#os-filter-body');
    const toggleIcon = container.querySelector('#os-filter-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isFilterOpen = true;
      toggleBtn.addEventListener('click', () => {
        isFilterOpen = !isFilterOpen;
        if (isFilterOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Execute Filter Function (Matches 12 user-specified fields)
    const executeFilter = () => {
      const coldStoreVal = container.querySelector('#os-filter-coldstore')?.value || 'ALL';
      const poVal = (container.querySelector('#os-filter-pono')?.value || '').trim().toLowerCase();
      const consigneeVal = container.querySelector('#os-filter-consignee')?.value || 'ALL';
      const freezingVal = container.querySelector('#os-filter-freezingtype')?.value || 'ALL';
      const soakingVal = container.querySelector('#os-filter-soaking')?.value || 'ALL';
      const varietyVal = container.querySelector('#os-filter-variety')?.value || 'ALL';
      const gradeVal = container.querySelector('#os-filter-grade')?.value || 'ALL';
      const pstyleVal = container.querySelector('#os-filter-packingstyle')?.value || 'ALL';
      const exportersVal = container.querySelector('#os-filter-exporters')?.value || 'ALL';
      const processorVal = container.querySelector('#os-filter-processor')?.value || 'ALL';
      const categoryVal = container.querySelector('#os-filter-category')?.value || 'ALL';
      const abstatusVal = container.querySelector('#os-filter-abstatus')?.value || 'ALL';

      const filtered = fullList.filter(item => {
        if (coldStoreVal !== 'ALL' && item.coldStores !== coldStoreVal) return false;
        if (poVal && !(item.poNo || '').toLowerCase().includes(poVal)) return false;
        if (consigneeVal !== 'ALL' && item.consignee !== consigneeVal) return false;
        if (freezingVal !== 'ALL' && item.freezingType !== freezingVal) return false;
        if (soakingVal !== 'ALL' && item.soaking !== soakingVal) return false;
        if (varietyVal !== 'ALL' && item.variety !== varietyVal) return false;
        if (gradeVal !== 'ALL' && item.grade !== gradeVal) return false;
        if (pstyleVal !== 'ALL' && item.packingStyle !== pstyleVal) return false;
        if (exportersVal !== 'ALL' && item.exporters !== exportersVal) return false;
        if (processorVal !== 'ALL' && item.processor !== processorVal) return false;
        if (categoryVal !== 'ALL' && item.productCategory !== categoryVal) return false;
        if (abstatusVal !== 'ALL' && item.abStatus !== abstatusVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Showing ${filtered.length} matching Orders Status record(s)`, 'info');
    };

    // Bind Search Button
    const searchBtn = container.querySelector('#os-filter-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', executeFilter);
    }

    // Bind PO NO input enter key
    const poInput = container.querySelector('#os-filter-pono');
    if (poInput) {
      poInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeFilter();
        }
      });
    }

    // Bind Reset Button
    const resetBtn = container.querySelector('#os-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const cs = container.querySelector('#os-filter-coldstore');
        const po = container.querySelector('#os-filter-pono');
        const cg = container.querySelector('#os-filter-consignee');
        const fz = container.querySelector('#os-filter-freezingtype');
        const sk = container.querySelector('#os-filter-soaking');
        const vr = container.querySelector('#os-filter-variety');
        const gr = container.querySelector('#os-filter-grade');
        const ps = container.querySelector('#os-filter-packingstyle');
        const ex = container.querySelector('#os-filter-exporters');
        const pr = container.querySelector('#os-filter-processor');
        const cat = container.querySelector('#os-filter-category');
        const ab = container.querySelector('#os-filter-abstatus');

        if (cs) cs.value = 'ALL';
        if (po) po.value = '';
        if (cg) cg.value = 'ALL';
        if (fz) fz.value = 'ALL';
        if (sk) sk.value = 'ALL';
        if (vr) vr.value = 'ALL';
        if (gr) gr.value = 'ALL';
        if (ps) ps.value = 'ALL';
        if (ex) ex.value = 'ALL';
        if (pr) pr.value = 'ALL';
        if (cat) cat.value = 'ALL';
        if (ab) ab.value = 'ALL';

        renderTable(fullList);
        Toast.show('Search filters reset to default', 'info');
      });
    }
  },

  // 3b-1. ORDERS STATUS DETAIL MODAL
  showOrderStatusDetailModal(row) {
    Modal.open({
      title: `Order Status Detail: ${row.poNo} (${row.buyer})`,
      size: '2xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">PURCHASE ORDER</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.poNo}</div>
              <div class="text-[11px] text-[#6B778C]">Buyer: <span class="font-bold text-[#172B4D]">${row.buyer}</span> • Brand: <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294]">${row.brand}</span></div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">ORDER STATUS</span>
              <div class="mt-0.5">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.status === 'Ready for Stuffing' || row.status === 'Shipped' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#DEEBFF] text-[#0747A6]'}">${row.status}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Order Quantities & Balance Summary -->
          <div class="bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6]">
            <h4 class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-2">Cartons &amp; Weight Fulfillment Metrics</h4>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">ORDERED MCS</div>
                <div class="text-base font-black text-[#172B4D] font-mono mt-0.5">${Number(row.orderedMcs).toLocaleString()}</div>
              </div>
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">FINAL MCS</div>
                <div class="text-base font-black text-[#00875A] font-mono mt-0.5">${Number(row.finalMcs).toLocaleString()}</div>
              </div>
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">BALANCE MCS</div>
                <div class="text-base font-black ${Number(row.balMcs) > 0 ? 'text-[#DE350B]' : 'text-[#5E6C84]'} font-mono mt-0.5">${Number(row.balMcs).toLocaleString()}</div>
              </div>
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">QTY IN TONS</div>
                <div class="text-base font-black text-[#006644] font-mono mt-0.5">${Number(row.qtyInTons).toFixed(2)} MT</div>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mt-2.5">
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">ORDERED KGS</div>
                <div class="text-xs font-bold text-[#172B4D] font-mono mt-0.5">${Number(row.orderedKgs).toLocaleString()} kg</div>
              </div>
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">FINAL KGS</div>
                <div class="text-xs font-bold text-[#00875A] font-mono mt-0.5">${Number(row.finalKgs).toLocaleString()} kg</div>
              </div>
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">BALANCE KGS</div>
                <div class="text-xs font-bold ${Number(row.balKgs) > 0 ? 'text-[#DE350B]' : 'text-[#5E6C84]'} font-mono mt-0.5">${Number(row.balKgs).toLocaleString()} kg</div>
              </div>
              <div class="p-2 bg-white rounded border border-[#DFE1E6]">
                <div class="text-[10px] font-bold text-[#5E6C84] uppercase">STORE AVAILABILITY</div>
                <div class="text-xs font-bold text-[#0284C7] font-mono mt-0.5">${Number(row.avalStoreMcs).toLocaleString()} MCs (${Number(row.avalInStoreKgs).toLocaleString()} kg)</div>
              </div>
            </div>
          </div>

          <!-- Section 2: Product & Processing Specifications -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCT</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.product}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">VARIETY</span>
              <span class="font-medium text-xs text-[#172B4D]">${row.variety}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GRADE</span>
              <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F4F5F7] text-[#172B4D]">${row.grade}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">HEAD ON COUNT</span>
              <span class="text-xs text-[#172B4D] font-mono">${row.headOnCount}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">FREEZING TYPE</span>
              <span class="text-xs text-[#172B4D]">${row.freezingType}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SOAKING TYPE</span>
              <span class="text-xs text-[#172B4D]">${row.soakingType}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING / STYLE</span>
              <span class="text-xs text-[#172B4D]">${row.packing}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SUPC</span>
              <span class="font-mono text-xs font-semibold text-[#172B4D]">${row.supc}</span>
            </div>
          </div>

          <!-- Section 3: Coldstore & Export Filters Context -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAFC] p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">COLD STORES</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.coldStores || 'Chamber #1 (IQF)'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">CONSIGNEE</span>
              <span class="font-medium text-xs text-[#172B4D]">${row.consignee || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">EXPORTERS</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.exporters || 'Devi Fisheries Ltd'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PROCESSOR</span>
              <span class="font-semibold text-xs text-[#0284C7]">${row.processor || 'DFL UNIT-5 (JPT)'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCT CATEGORY</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">${row.productCategory || 'Raw Frozen'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">AB STATUS(-)</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${row.abStatus && row.abStatus.includes('PASS') ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${row.abStatus}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SHIPMENT DATE</span>
              <span class="font-mono text-xs font-semibold text-[#172B4D]">${row.shipmentDate}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">S.NO</span>
              <span class="font-mono text-xs text-[#5E6C84]">#${row.sNo}</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() }
      ]
    });
  },

  // 3c. ORDERS - SHIPMENTS LIST (EXACT 5 USER-SPECIFIED FORM FIELDS & 7 DATA TABLE COLUMNS)
  renderShipmentsList(container) {
    const fullList = this.state.shipmentsList || [];
    let table = null;

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Shipments List</h1>
          </div>
        </div>

        <!-- Collapsible Top Filter Header Card (5 User-Specified Search & Filter Fields) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="sl-filter-reset-btn" 
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="sl-filter-toggle-btn" 
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="sl-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (Matching 5 User-Specified Fields) -->
          <div id="sl-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. COLD STORES -->
            <div>
              <label for="sl-filter-coldstore" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COLD STORES</label>
              <select id="sl-filter-coldstore" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Cold Store</option>
                <option value="Chamber #1 (IQF)">Chamber #1 (IQF)</option>
                <option value="Chamber #2 (Block)">Chamber #2 (Block)</option>
                <option value="Vault #3 Staging">Vault #3 Staging</option>
                <option value="Chamber #3 (Blast)">Chamber #3 (Blast)</option>
              </select>
            </div>

            <!-- 2. SELECT COUNTRY -->
            <div>
              <label for="sl-filter-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT COUNTRY</label>
              <select id="sl-filter-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Country</option>
                <option value="U.S.A.">U.S.A.</option>
                <option value="Japan">Japan</option>
                <option value="Netherlands">Netherlands</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
              </select>
            </div>

            <!-- 3. EXPORTERS -->
            <div>
              <label for="sl-filter-exporters" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">EXPORTERS</label>
              <select id="sl-filter-exporters" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Exporter</option>
                <option value="Devi Fisheries Ltd">Devi Fisheries Ltd</option>
                <option value="Devi Aqua Feeds">Devi Aqua Feeds</option>
                <option value="DFL Export Division">DFL Export Division</option>
              </select>
            </div>

            <!-- 4. PRODUCT CATEGORY -->
            <div>
              <label for="sl-filter-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY</label>
              <select id="sl-filter-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Product Category</option>
                <option value="Raw Frozen">Raw Frozen</option>
                <option value="Cooked Frozen">Cooked Frozen</option>
                <option value="Blanched Frozen">Blanched Frozen</option>
                <option value="Value-Added">Value-Added</option>
              </select>
            </div>

            <!-- 5. YEAR -->
            <div>
              <label for="sl-filter-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">YEAR</label>
              <select id="sl-filter-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Year</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>

            <!-- 6. Action Slot: Search Button -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="sl-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                title="Search Filter Records"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Shipments List Data Table Container (7 User-Specified Columns) -->
        <div id="cs-shipments-list-table-container"></div>
      </div>
    `;

    // Render Table Function
    const renderTable = (data) => {
      table = new DataTable({
        containerId: 'cs-shipments-list-table-container',
        tableTitle: 'Shipments List',
        searchable: true,
        exportable: true,
        pageSize: 10,
        actions: [],
        onRowClick: (row) => this.showShipmentDetailModal(row),
        columns: [
          // 1. S.No
          {
            field: 'sNo',
            header: 'S.No',
            sortable: true,
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. C.Inv No
          {
            field: 'cInvNo',
            header: 'C.Inv No',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#0284C7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>`
          },
          // 3. C.Inv Date
          {
            field: 'cInvDate',
            header: 'C.Inv Date',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 4. Po.No
          {
            field: 'poNo',
            header: 'Po.No',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 5. Po.Date
          {
            field: 'poDate',
            header: 'Po.Date',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 6. Shipment Date
          {
            field: 'shipmentDate',
            header: 'Shipment Date',
            sortable: true,
            render: v => `<span class="font-mono text-xs font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 7. ETA
          {
            field: 'eta',
            header: 'ETA',
            sortable: true,
            render: v => `<span class="font-mono text-xs font-bold text-[#006644] whitespace-nowrap">${v}</span>`
          }
        ],
        data: data
      });
    };

    // Initial table render
    renderTable(fullList);

    // Bind Collapsible Filter Toggle
    const toggleBtn = container.querySelector('#sl-filter-toggle-btn');
    const filterBody = container.querySelector('#sl-filter-body');
    const toggleIcon = container.querySelector('#sl-filter-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isFilterOpen = true;
      toggleBtn.addEventListener('click', () => {
        isFilterOpen = !isFilterOpen;
        if (isFilterOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Execute Filter Function (Matches 5 user-specified fields)
    const executeFilter = () => {
      const coldStoreVal = container.querySelector('#sl-filter-coldstore')?.value || 'ALL';
      const countryVal = container.querySelector('#sl-filter-country')?.value || 'ALL';
      const exportersVal = container.querySelector('#sl-filter-exporters')?.value || 'ALL';
      const categoryVal = container.querySelector('#sl-filter-category')?.value || 'ALL';
      const yearVal = container.querySelector('#sl-filter-year')?.value || 'ALL';

      const filtered = fullList.filter(item => {
        if (coldStoreVal !== 'ALL' && item.coldStores !== coldStoreVal) return false;
        if (countryVal !== 'ALL' && item.country !== countryVal) return false;
        if (exportersVal !== 'ALL' && item.exporters !== exportersVal) return false;
        if (categoryVal !== 'ALL' && item.productCategory !== categoryVal) return false;
        if (yearVal !== 'ALL' && String(item.year) !== yearVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Showing ${filtered.length} matching Shipment record(s)`, 'info');
    };

    // Bind Search Button
    const searchBtn = container.querySelector('#sl-filter-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', executeFilter);
    }

    // Bind Reset Button
    const resetBtn = container.querySelector('#sl-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const cs = container.querySelector('#sl-filter-coldstore');
        const cy = container.querySelector('#sl-filter-country');
        const ex = container.querySelector('#sl-filter-exporters');
        const cat = container.querySelector('#sl-filter-category');
        const yr = container.querySelector('#sl-filter-year');

        if (cs) cs.value = 'ALL';
        if (cy) cy.value = 'ALL';
        if (ex) ex.value = 'ALL';
        if (cat) cat.value = 'ALL';
        if (yr) yr.value = 'ALL';

        renderTable(fullList);
        Toast.show('Search filters reset to default', 'info');
      });
    }
  },

  // 3c-1. SHIPMENT DETAIL MODAL
  showShipmentDetailModal(row) {
    Modal.open({
      title: `Shipment Details: ${row.cInvNo} (PO: ${row.poNo})`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">COMMERCIAL INVOICE</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.cInvNo}</div>
              <div class="text-[11px] text-[#6B778C]">Buyer: <span class="font-bold text-[#172B4D]">${row.buyer || 'Export Client'}</span> • Country: <span class="font-bold text-[#172B4D]">${row.country}</span></div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">LOGISTICS STATUS</span>
              <div class="mt-0.5">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.status === 'Delivered' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#DEEBFF] text-[#0747A6]'}">${row.status || 'In Transit'}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Invoicing & Shipping Dates (User Data Table Columns) -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">C.INV NO</span>
              <span class="font-mono font-bold text-xs text-[#0284C7]">${row.cInvNo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">C.INV DATE</span>
              <span class="font-mono text-xs text-[#5E6C84]">${row.cInvDate}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO.NO</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.poNo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO.DATE</span>
              <span class="font-mono text-xs text-[#5E6C84]">${row.poDate}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SHIPMENT DATE</span>
              <span class="font-mono font-semibold text-xs text-[#172B4D]">${row.shipmentDate}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">ESTIMATED ARRIVAL (ETA)</span>
              <span class="font-mono font-bold text-xs text-[#006644]">${row.eta}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SHIPPING YEAR</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.year || '2026'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">S.NO</span>
              <span class="font-mono text-xs text-[#5E6C84]">#${row.sNo}</span>
            </div>
          </div>

          <!-- Section 2: Ocean Freight & Coldstore Origin Context -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#F8FAFC] p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">ORIGIN COLD STORE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.coldStores || 'Chamber #1 (IQF)'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">VESSEL / VOYAGE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.vesselName || 'Ocean Carrier'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">CONTAINER / REEFER NO</span>
              <span class="font-mono font-bold text-xs text-[#0284C7]">${row.containerNo || 'REEF-992144'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PORT OF LOADING</span>
              <span class="text-xs text-[#172B4D]">${row.portOfLoading || 'Visakhapatnam (INVTZ)'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PORT OF DISCHARGE</span>
              <span class="text-xs text-[#172B4D]">${row.portOfDischarge || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">LINE SEAL NO</span>
              <span class="font-mono text-xs text-[#172B4D]">${row.sealNo || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">EXPORTER</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.exporters || 'Devi Fisheries Ltd'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCT CATEGORY</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">${row.productCategory || 'Raw Frozen'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL WEIGHT</span>
              <span class="font-mono font-bold text-xs text-[#00875A]">${Number(row.totalMcs || 0).toLocaleString()} MCs / ${Number(row.totalKgs || 0).toLocaleString()} kg</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() }
      ]
    });
  },

  // 3d. ORDERS - BACKWARD COMPATIBILITY
  renderOrders(container) {
    this.renderRunningOrders(container);
  },

  // 4a. STORE - VIEW STOCK (EXACT 15 USER-SPECIFIED FORM FIELDS IN FILTER BAR)
  renderViewStock(container) {
    const fullList = this.state.floorStockList || [];
    let table = null;

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">View Stock</h1>
          </div>
        </div>

        <!-- Collapsible Top Filter Header Card (15 User-Specified Search & Filter Fields) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="vs-filter-reset-btn" 
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="vs-filter-toggle-btn" 
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="vs-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (Matching 15 User-Specified Fields) -->
          <div id="vs-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. COLD STORES -->
            <div>
              <label for="vs-filter-coldstore" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COLD STORES</label>
              <select id="vs-filter-coldstore" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Cold Store</option>
                <option value="Chamber #1 (IQF)">Chamber #1 (IQF)</option>
                <option value="Chamber #2 (Block)">Chamber #2 (Block)</option>
                <option value="Vault #3 Staging">Vault #3 Staging</option>
                <option value="Chamber #3 (Blast)">Chamber #3 (Blast)</option>
              </select>
            </div>

            <!-- 2. STOCK BELONGS TO -->
            <div>
              <label for="vs-filter-belongsto" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK BELONGS TO</label>
              <select id="vs-filter-belongsto" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Ownership</option>
                <option value="Devi Fisheries Ltd (DFL)">Devi Fisheries Ltd (DFL)</option>
                <option value="DFL Unit-5 (JPT)">DFL Unit-5 (JPT)</option>
                <option value="DFL Unit-4 (PND)">DFL Unit-4 (PND)</option>
                <option value="DFL Unit-3 (PSP)">DFL Unit-3 (PSP)</option>
                <option value="DFL Unit-1 (VSP)">DFL Unit-1 (VSP)</option>
                <option value="Third-Party Co-Packing">Third-Party Co-Packing</option>
              </select>
            </div>

            <!-- 3. PO NO -->
            <div>
              <label for="vs-filter-pono" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NO</label>
              <input type="text" id="vs-filter-pono" placeholder="Filter by PO No..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold text-[#172B4D]">
            </div>

            <!-- 4. BLOCKS -->
            <div>
              <label for="vs-filter-blocks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BLOCKS</label>
              <select id="vs-filter-blocks" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Block</option>
                <option value="Block A">Block A</option>
                <option value="Block B">Block B</option>
                <option value="Block C">Block C</option>
                <option value="Block D">Block D</option>
              </select>
            </div>

            <!-- 5. SPECIES -->
            <div>
              <label for="vs-filter-species" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SPECIES</label>
              <select id="vs-filter-species" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Species</option>
                <option value="Litopenaeus Vannamei">Litopenaeus Vannamei</option>
                <option value="Penaeus Monodon">Penaeus Monodon</option>
                <option value="Macrobrachium rosenbergii">Macrobrachium rosenbergii</option>
              </select>
            </div>

            <!-- 6. TYPE PRODUCT -->
            <div>
              <label for="vs-filter-typeproduct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TYPE PRODUCT</label>
              <select id="vs-filter-typeproduct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Type</option>
                <option value="Raw Frozen">Raw Frozen</option>
                <option value="Cooked Frozen">Cooked Frozen</option>
                <option value="Blanched Frozen">Blanched Frozen</option>
                <option value="Value-Added">Value-Added</option>
              </select>
            </div>

            <!-- 7. FREEZING TYPE -->
            <div>
              <label for="vs-filter-freezingtype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE</label>
              <select id="vs-filter-freezingtype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Freezing Type</option>
                <option value="IQF Tunnel">IQF Tunnel</option>
                <option value="Contact Plate Freezer">Contact Plate Freezer</option>
                <option value="Blast Freezer">Blast Freezer</option>
                <option value="Semi-IQF Spiral">Semi-IQF Spiral</option>
              </select>
            </div>

            <!-- 8. BRAND -->
            <div>
              <label for="vs-filter-brand" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BRAND</label>
              <select id="vs-filter-brand" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Brand</option>
                <option value="Devi Royal">Devi Royal</option>
                <option value="Bay Harvest">Bay Harvest</option>
                <option value="Ocean Jewel">Ocean Jewel</option>
                <option value="Sea Pearl">Sea Pearl</option>
                <option value="Arctic Catch">Arctic Catch</option>
              </select>
            </div>

            <!-- 9. VARIETY -->
            <div>
              <label for="vs-filter-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
              <select id="vs-filter-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Variety</option>
                <option value="Vannamei (White Shrimp)">Vannamei (White Shrimp)</option>
                <option value="Black Tiger (Monodon)">Black Tiger (Monodon)</option>
                <option value="Scampi (Macrobrachium)">Scampi (Macrobrachium)</option>
                <option value="Sea Pearl Cooked PDTO">Sea Pearl Cooked PDTO</option>
              </select>
            </div>

            <!-- 10. GRADE -->
            <div>
              <label for="vs-filter-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
              <select id="vs-filter-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Grade</option>
                <option value="16/20">16/20</option>
                <option value="21/25">21/25</option>
                <option value="26/30">26/30</option>
                <option value="31/40">31/40</option>
                <option value="41/50">41/50</option>
                <option value="U-15">U-15</option>
              </select>
            </div>

            <!-- 11. GROUP -->
            <div>
              <label for="vs-filter-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP</label>
              <select id="vs-filter-group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Group</option>
                <option value="Group A">Group A</option>
                <option value="Group B">Group B</option>
                <option value="Group C">Group C</option>
                <option value="Group D">Group D</option>
              </select>
            </div>

            <!-- 12. PACKING STYLE -->
            <div>
              <label for="vs-filter-packingstyle" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING STYLE</label>
              <select id="vs-filter-packingstyle" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Packing Style</option>
                <option value="10x1kg Net">10x1kg Net</option>
                <option value="6x2kg Block">6x2kg Block</option>
                <option value="5x2kg Net">5x2kg Net</option>
                <option value="10x2lb">10x2lb</option>
              </select>
            </div>

            <!-- 13. PACKING TYPE -->
            <div>
              <label for="vs-filter-packingtype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING TYPE</label>
              <select id="vs-filter-packingtype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Packing Type</option>
                <option value="Master Cartons">Master Cartons</option>
                <option value="Export Corrugated">Export Corrugated</option>
                <option value="Inner Polybag">Inner Polybag</option>
                <option value="Outer Shipper">Outer Shipper</option>
              </select>
            </div>

            <!-- 14. PRODUCT CATEGORY -->
            <div>
              <label for="vs-filter-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY</label>
              <select id="vs-filter-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Category</option>
                <option value="Raw Frozen">Raw Frozen</option>
                <option value="Cooked Frozen">Cooked Frozen</option>
                <option value="Blanched Frozen">Blanched Frozen</option>
                <option value="Value-Added">Value-Added</option>
              </select>
            </div>

            <!-- 15. STOCK TYPE -->
            <div>
              <label for="vs-filter-stocktype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK TYPE</label>
              <select id="vs-filter-stocktype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">Select Stock Type</option>
                <option value="Floor Stock">Floor Stock</option>
                <option value="Racked Stock">Racked Stock</option>
                <option value="Allocated Stock">Allocated Stock</option>
                <option value="Quarantine Stock">Quarantine Stock</option>
              </select>
            </div>

            <!-- 16. Action Slot: Search Button -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="vs-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                title="Search Filter Records"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Attached Stats Summary Above Data Table (White Background Cards) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-3.5">
          <!-- Card 1: TOTAL RECORDS -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs flex items-center justify-between transition-all hover:shadow-xs hover:border-[#0284C7]">
            <div>
              <div class="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider">TOTAL RECORDS</div>
              <div class="text-2xl font-black text-[#172B4D] tracking-tight mt-0.5">15641</div>
              <div class="text-[11px] text-[#0284C7] font-medium mt-0.5">Active stock entries</div>
            </div>
            <div class="w-11 h-11 rounded-full bg-[#D0E2FF] text-[#0F62FE] flex items-center justify-center shadow-xs shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
            </div>
          </div>

          <!-- Card 2: TOTAL -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs flex items-center justify-between transition-all hover:shadow-xs hover:border-[#10B981]">
            <div>
              <div class="text-[10px] font-bold text-[#0E7A46] uppercase tracking-wider">TOTAL</div>
              <div class="text-2xl font-black text-[#0E7A46] tracking-tight mt-0.5">0 kgs</div>
              <div class="text-[11px] text-[#0E7A46] font-medium mt-0.5">stock</div>
            </div>
            <div class="w-11 h-11 rounded-full bg-[#D1FADF] text-[#0E7A46] flex items-center justify-center shadow-xs shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            </div>
          </div>

          <!-- Card 3: TOTAL LOOSE -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs flex items-center justify-between transition-all hover:shadow-xs hover:border-[#F59E0B]">
            <div>
              <div class="text-[10px] font-bold text-[#B45309] uppercase tracking-wider">TOTAL LOOSE</div>
              <div class="text-2xl font-black text-[#B45309] tracking-tight mt-0.5">0 kgs</div>
              <div class="text-[11px] text-[#B45309] font-medium mt-0.5">Loose items</div>
            </div>
            <div class="w-11 h-11 rounded-full bg-[#FEDF89] text-[#B45309] flex items-center justify-center shadow-xs shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
            </div>
          </div>

          <!-- Card 4: STOCK STATUS -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs flex items-center justify-between transition-all hover:shadow-xs hover:border-[#8B5CF6]">
            <div>
              <div class="text-[10px] font-bold text-[#6941C6] uppercase tracking-wider">STOCK STATUS</div>
              <div class="mt-1 space-y-0.5 text-xs font-semibold text-[#172B4D]">
                <div>On Floor: <span class="font-bold text-[#6941C6]">222</span></div>
                <div>On Store: <span class="font-bold text-[#6941C6]">15,419</span></div>
              </div>
            </div>
            <div class="w-11 h-11 rounded-full bg-[#E9D7FE] text-[#6941C6] flex items-center justify-center shadow-xs shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
          </div>
        </div>

        <!-- View Stock Data Table Container (Exact 18 User-Specified Columns + Action with Print Icon) -->
        <div id="cs-view-stock-table-container"></div>
      </div>
    `;

    // Render Table Function
    const renderTable = (data) => {
      table = new DataTable({
        containerId: 'cs-view-stock-table-container',
        tableTitle: 'View Stock Inventory',
        searchable: true,
        exportable: true,
        pageSize: 10,
        actionsTitle: 'ACTIONS',
        onRowClick: (row) => this.showFloorStockDetailModal(row),
        actions: [
          {
            label: 'Print',
            icon: `<svg class="w-4 h-4 text-[#0284C7] hover:text-[#0052CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" title="Print Stock Tag"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
            onClick: (row) => this.showPrintStockTagModal(row)
          }
        ],
        columns: [
          // 1. S.NO
          {
            field: 'sNo',
            header: 'S.NO',
            sortable: true,
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. BID
          {
            field: 'bid',
            header: 'BID',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#0284C7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>`
          },
          // 3. DATE
          {
            field: 'date',
            header: 'DATE',
            sortable: true,
            render: v => `<span class="font-mono text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 4. TRACK CODE
          {
            field: 'trackCode',
            header: 'TRACK CODE',
            sortable: true,
            render: v => `<span class="font-mono text-xs font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 5. GROUP
          {
            field: 'group',
            header: 'GROUP',
            sortable: true,
            render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294] whitespace-nowrap">${v}</span>`
          },
          // 6. VARIETY
          {
            field: 'variety',
            header: 'VARIETY',
            sortable: true,
            render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 7. GRADE
          {
            field: 'grade',
            header: 'GRADE',
            sortable: true,
            render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F4F5F7] text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 8. SOAKING
          {
            field: 'soaking',
            header: 'SOAKING',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 9. SPECIES
          {
            field: 'species',
            header: 'SPECIES',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] italic whitespace-nowrap">${v}</span>`
          },
          // 10. PACKING TYPE
          {
            field: 'packingType',
            header: 'PACKING TYPE',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 11. BRAND NAME
          {
            field: 'brandName',
            header: 'BRAND NAME',
            sortable: true,
            render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 12. PACKING STYLE
          {
            field: 'packingStyle',
            header: 'PACKING STYLE',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 13. CATEGORY
          {
            field: 'category',
            header: 'CATEGORY',
            sortable: true,
            render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7] whitespace-nowrap">${v}</span>`
          },
          // 14. AB STATUS
          {
            field: 'abStatus',
            header: 'AB STATUS',
            sortable: true,
            render: v => {
              let color = 'bg-[#FFF0B3] text-[#172B4D]';
              if (v && v.includes('PASS')) color = 'bg-[#E3FCEF] text-[#006644]';
              else if (v && v.includes('UNDER')) color = 'bg-[#DEEBFF] text-[#0747A6]';
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ${color}">${v}</span>`;
            }
          },
          // 15. PO NUMBER
          {
            field: 'poNo',
            header: 'PO NUMBER',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 16. MCS
          {
            field: 'mcs',
            header: 'MCS',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${Number(v).toLocaleString()}</span>`
          },
          // 17. LOOSE
          {
            field: 'loose',
            header: 'LOOSE',
            sortable: true,
            render: v => `<span class="font-mono font-semibold text-xs text-[#172B4D]">${v || 0}</span>`
          },
          // 18. STORE
          {
            field: 'store',
            header: 'STORE',
            sortable: true,
            render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          }
        ],
        data: data
      });
    };

    // Initial table render
    renderTable(fullList);

    // Bind Collapsible Filter Toggle
    const toggleBtn = container.querySelector('#vs-filter-toggle-btn');
    const filterBody = container.querySelector('#vs-filter-body');
    const toggleIcon = container.querySelector('#vs-filter-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isFilterOpen = true;
      toggleBtn.addEventListener('click', () => {
        isFilterOpen = !isFilterOpen;
        if (isFilterOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Execute Filter Function (Matches 15 user-specified fields)
    const executeFilter = () => {
      const coldStoreVal = container.querySelector('#vs-filter-coldstore')?.value || 'ALL';
      const belongsVal = container.querySelector('#vs-filter-belongsto')?.value || 'ALL';
      const poVal = (container.querySelector('#vs-filter-pono')?.value || '').trim().toLowerCase();
      const blocksVal = container.querySelector('#vs-filter-blocks')?.value || 'ALL';
      const speciesVal = container.querySelector('#vs-filter-species')?.value || 'ALL';
      const typeProductVal = container.querySelector('#vs-filter-typeproduct')?.value || 'ALL';
      const freezingVal = container.querySelector('#vs-filter-freezingtype')?.value || 'ALL';
      const brandVal = container.querySelector('#vs-filter-brand')?.value || 'ALL';
      const varietyVal = container.querySelector('#vs-filter-variety')?.value || 'ALL';
      const gradeVal = container.querySelector('#vs-filter-grade')?.value || 'ALL';
      const groupVal = container.querySelector('#vs-filter-group')?.value || 'ALL';
      const pstyleVal = container.querySelector('#vs-filter-packingstyle')?.value || 'ALL';
      const ptypeVal = container.querySelector('#vs-filter-packingtype')?.value || 'ALL';
      const categoryVal = container.querySelector('#vs-filter-category')?.value || 'ALL';
      const stockTypeVal = container.querySelector('#vs-filter-stocktype')?.value || 'ALL';

      const filtered = fullList.filter(item => {
        if (coldStoreVal !== 'ALL' && item.coldStores !== coldStoreVal) return false;
        if (belongsVal !== 'ALL' && item.stockBelongsTo !== belongsVal) return false;
        if (poVal && !(item.poNo || '').toLowerCase().includes(poVal)) return false;
        if (blocksVal !== 'ALL' && item.blocks !== blocksVal) return false;
        if (speciesVal !== 'ALL' && item.species !== speciesVal) return false;
        if (typeProductVal !== 'ALL' && item.typeProduct !== typeProductVal) return false;
        if (freezingVal !== 'ALL' && item.freezingType !== freezingVal) return false;
        if (brandVal !== 'ALL' && item.brand !== brandVal) return false;
        if (varietyVal !== 'ALL' && item.variety !== varietyVal) return false;
        if (gradeVal !== 'ALL' && item.grade !== gradeVal) return false;
        if (groupVal !== 'ALL' && item.group !== groupVal) return false;
        if (pstyleVal !== 'ALL' && item.packingStyle !== pstyleVal) return false;
        if (ptypeVal !== 'ALL' && item.packingType !== ptypeVal) return false;
        if (categoryVal !== 'ALL' && item.productCategory !== categoryVal) return false;
        if (stockTypeVal !== 'ALL' && item.stockType !== stockTypeVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Showing ${filtered.length} matching Floor Stock record(s)`, 'info');
    };

    // Bind Search Button
    const searchBtn = container.querySelector('#vs-filter-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', executeFilter);
    }

    // Bind PO NO input enter key
    const poInput = container.querySelector('#vs-filter-pono');
    if (poInput) {
      poInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeFilter();
        }
      });
    }

    // Bind Reset Button
    const resetBtn = container.querySelector('#vs-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const cs = container.querySelector('#vs-filter-coldstore');
        const bg = container.querySelector('#vs-filter-belongsto');
        const po = container.querySelector('#vs-filter-pono');
        const bl = container.querySelector('#vs-filter-blocks');
        const sp = container.querySelector('#vs-filter-species');
        const tp = container.querySelector('#vs-filter-typeproduct');
        const fz = container.querySelector('#vs-filter-freezingtype');
        const br = container.querySelector('#vs-filter-brand');
        const vr = container.querySelector('#vs-filter-variety');
        const gr = container.querySelector('#vs-filter-grade');
        const gp = container.querySelector('#vs-filter-group');
        const ps = container.querySelector('#vs-filter-packingstyle');
        const pt = container.querySelector('#vs-filter-packingtype');
        const cat = container.querySelector('#vs-filter-category');
        const st = container.querySelector('#vs-filter-stocktype');

        if (cs) cs.value = 'ALL';
        if (bg) bg.value = 'ALL';
        if (po) po.value = '';
        if (bl) bl.value = 'ALL';
        if (sp) sp.value = 'ALL';
        if (tp) tp.value = 'ALL';
        if (fz) fz.value = 'ALL';
        if (br) br.value = 'ALL';
        if (vr) vr.value = 'ALL';
        if (gr) gr.value = 'ALL';
        if (gp) gp.value = 'ALL';
        if (ps) ps.value = 'ALL';
        if (pt) pt.value = 'ALL';
        if (cat) cat.value = 'ALL';
        if (st) st.value = 'ALL';

        renderTable(fullList);
        Toast.show('Search filters reset to default', 'info');
      });
    }
  },

  // 4a-1. FLOOR STOCK DETAIL MODAL
  showFloorStockDetailModal(row) {
    Modal.open({
      title: `Stock Details: ${row.bid || row.poNo} (${row.trackCode || row.location})`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">BATCH / TRACK IDENTIFIER</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.bid} • ${row.trackCode}</div>
              <div class="text-[11px] text-[#6B778C]">Store: <span class="font-bold text-[#172B4D]">${row.store}</span> • Date: <span class="font-bold text-[#172B4D]">${row.date}</span></div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">AB STATUS</span>
              <div class="mt-0.5">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.abStatus && row.abStatus.includes('PASS') ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${row.abStatus}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Storage Quantities -->
          <div class="grid grid-cols-3 gap-3 bg-[#F8FAFC] p-3 border border-[#DFE1E6] rounded-lg text-center">
            <div class="p-2 bg-white rounded border border-[#DFE1E6]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">MASTER CARTONS (MCS)</div>
              <div class="text-base font-black text-[#00875A] font-mono mt-0.5">${Number(row.mcs).toLocaleString()}</div>
            </div>
            <div class="p-2 bg-white rounded border border-[#DFE1E6]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">LOOSE ITEMS</div>
              <div class="text-base font-black text-[#B45309] font-mono mt-0.5">${row.loose || 0}</div>
            </div>
            <div class="p-2 bg-white rounded border border-[#DFE1E6]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL WEIGHT</div>
              <div class="text-base font-black text-[#0284C7] font-mono mt-0.5">${Number(row.totalWeight || 0).toLocaleString(undefined, { minimumFractionDigits: 1 })} kg</div>
            </div>
          </div>

          <!-- Section 2: Product & Processing Identifiers (User Data Table Columns) -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">BID</span>
              <span class="font-mono font-bold text-xs text-[#0284C7]">${row.bid}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TRACK CODE</span>
              <span class="font-mono font-semibold text-xs text-[#172B4D]">${row.trackCode}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">DATE</span>
              <span class="font-mono text-xs text-[#5E6C84]">${row.date}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO NUMBER</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.poNo || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GROUP</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294]">${row.group}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">BRAND NAME</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.brandName}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">VARIETY</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.variety}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GRADE</span>
              <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F4F5F7] text-[#172B4D]">${row.grade}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SOAKING</span>
              <span class="text-xs text-[#172B4D]">${row.soaking}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SPECIES</span>
              <span class="text-xs text-[#5E6C84] italic">${row.species}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING STYLE</span>
              <span class="text-xs text-[#172B4D]">${row.packingStyle}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING TYPE</span>
              <span class="text-xs text-[#172B4D]">${row.packingType}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">CATEGORY</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">${row.category}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STORE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.store}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STOCK TYPE</span>
              <span class="text-xs text-[#0284C7] font-semibold">${row.stockType}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">S.NO</span>
              <span class="font-mono text-xs text-[#5E6C84]">#${row.sNo}</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Print Tag',
          type: 'primary',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
          onClick: (modal) => {
            modal.close();
            this.showPrintStockTagModal(row);
          }
        }
      ]
    });
  },

  // 4a-2. PRINT STOCK TAG MODAL (ACTION PRINT ICON)
  showPrintStockTagModal(row) {
    Modal.open({
      title: `Print Stock Tag - ${row.bid} (${row.trackCode})`,
      size: 'lg',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <div class="border-2 border-dashed border-[#0284C7] p-5 rounded-xl bg-white space-y-4">
            <!-- Tag Header -->
            <div class="flex items-center justify-between border-b pb-3 border-[#DFE1E6]">
              <div>
                <h3 class="text-base font-black text-[#172B4D] tracking-wide">DEVI FISHERIES LIMITED</h3>
                <span class="text-[11px] font-semibold text-[#5E6C84]">COLDSTORE WAREHOUSE STOCK TAG</span>
              </div>
              <div class="text-right">
                <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">${row.store}</span>
                <div class="text-[10px] text-[#5E6C84] mt-0.5">${row.date}</div>
              </div>
            </div>

            <!-- Barcode Simulation -->
            <div class="text-center py-2.5 bg-[#F8FAFC] rounded-lg border border-[#DFE1E6]">
              <div class="font-mono text-xl tracking-[0.25em] font-black text-[#172B4D] select-all">${row.bid}</div>
              <div class="flex justify-center items-center gap-0.5 my-2 h-10">
                <div class="w-1 h-full bg-[#172B4D]"></div><div class="w-0.5 h-full bg-[#172B4D]"></div><div class="w-1.5 h-full bg-[#172B4D]"></div><div class="w-0.5 h-full bg-white"></div>
                <div class="w-2 h-full bg-[#172B4D]"></div><div class="w-1 h-full bg-white"></div><div class="w-1 h-full bg-[#172B4D]"></div><div class="w-0.5 h-full bg-[#172B4D]"></div>
                <div class="w-2 h-full bg-[#172B4D]"></div><div class="w-1 h-full bg-white"></div><div class="w-1.5 h-full bg-[#172B4D]"></div><div class="w-0.5 h-full bg-[#172B4D]"></div>
                <div class="w-1 h-full bg-[#172B4D]"></div><div class="w-2 h-full bg-[#172B4D]"></div><div class="w-0.5 h-full bg-white"></div><div class="w-1.5 h-full bg-[#172B4D]"></div>
                <div class="w-1 h-full bg-[#172B4D]"></div><div class="w-0.5 h-full bg-[#172B4D]"></div><div class="w-2 h-full bg-[#172B4D]"></div><div class="w-1 h-full bg-[#172B4D]"></div>
              </div>
              <div class="text-[10px] font-mono font-bold text-[#5E6C84]">TRACK CODE: ${row.trackCode}</div>
            </div>

            <!-- Stock Details Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6]">
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">VARIETY</span>
                <span class="font-bold text-[#172B4D]">${row.variety}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GRADE</span>
                <span class="font-bold text-[#0284C7]">${row.grade}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">BRAND</span>
                <span class="font-semibold text-[#172B4D]">${row.brandName}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO NUMBER</span>
                <span class="font-mono font-bold text-[#172B4D]">${row.poNo || '-'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING STYLE</span>
                <span class="font-medium text-[#172B4D]">${row.packingStyle}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING TYPE</span>
                <span class="font-medium text-[#172B4D]">${row.packingType}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">MASTER CARTONS</span>
                <span class="font-black text-base text-[#00875A] font-mono">${row.mcs} MCs</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">LOOSE ITEMS</span>
                <span class="font-bold text-base text-[#B45309] font-mono">${row.loose} Bags</span>
              </div>
            </div>

            <!-- Footer Signoff -->
            <div class="flex justify-between items-end border-t pt-3 border-[#DFE1E6] text-[10px] text-[#5E6C84]">
              <div>AB Status: <span class="font-bold text-[#006644]">${row.abStatus}</span> • Group: <span class="font-bold text-[#172B4D]">${row.group}</span></div>
              <div class="text-right">
                <div class="h-6 border-b border-[#CBD5E1] w-36 mb-0.5"></div>
                <div>Authorized Signatory</div>
              </div>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Print Tag',
          type: 'primary',
          icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
          onClick: (modal) => {
            window.print();
            modal.close();
            Toast.show(`Stock Tag for ${row.bid} sent to printer`, 'success');
          }
        }
      ]
    });
  },

  // 4b. STORE - VIEW STORE (EXACT USER-SPECIFIED FILTERS, ATTACHED DASHLETS & RACK LAYOUT MAP)
  renderViewStore(container) {
    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">View Store Layout</h1>
          </div>
        </div>

        <!-- Collapsible Top Filter Header Card (STORE ID *, BLOCK ID *, FLOORS *, RACK NAME) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Store &amp; Rack Search Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="vsl-filter-reset-btn" 
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="vsl-filter-toggle-btn" 
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="vsl-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (Consistent 4 Columns Grid) -->
          <div id="vsl-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. STORE ID * -->
            <div>
              <label for="vsl-filter-store" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STORE ID <span class="text-[#DE350B] font-bold">*</span></label>
              <select id="vsl-filter-store" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
                <option value="CS-CH-01" selected>CS-CH-01 (Chamber #1 IQF)</option>
                <option value="CS-CH-02">CS-CH-02 (Chamber #2 Block)</option>
                <option value="CS-VLT-03">CS-VLT-03 (Vault #3 Staging)</option>
                <option value="CS-CH-03">CS-CH-03 (Chamber #3 Blast)</option>
              </select>
            </div>

            <!-- 2. BLOCK ID * -->
            <div>
              <label for="vsl-filter-block" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BLOCK ID <span class="text-[#DE350B] font-bold">*</span></label>
              <select id="vsl-filter-block" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
                <option value="BLK-A" selected>BLK-A (Block A - Primary)</option>
                <option value="BLK-B">BLK-B (Block B - Secondary)</option>
                <option value="BLK-C">BLK-C (Block C - Staging)</option>
                <option value="BLK-D">BLK-D (Block D - Blast)</option>
              </select>
            </div>

            <!-- 3. FLOORS * -->
            <div>
              <label for="vsl-filter-floor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FLOORS <span class="text-[#DE350B] font-bold">*</span></label>
              <select id="vsl-filter-floor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
                <option value="FL-1" selected>Floor 1 (Ground Level)</option>
                <option value="FL-2">Floor 2 (Tier 2)</option>
                <option value="FL-3">Floor 3 (High Bay)</option>
              </select>
            </div>

            <!-- 4. RACK NAME -->
            <div>
              <label for="vsl-filter-rack" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">RACK NAME</label>
              <input type="text" id="vsl-filter-rack" placeholder="e.g. RACK-A01, RACK-A02..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold text-[#172B4D]">
            </div>

            <!-- 5. Action Slot: Search Button -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="vsl-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                title="Search Filter Records"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Attached Dashlets Below Filter & Search (White Background Cards) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-3.5">
          <!-- Dashlet 1: TOTAL STORED WEIGHT -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs flex items-center justify-between transition-all hover:shadow-xs hover:border-[#0284C7]">
            <div class="flex-1 pr-2">
              <div class="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider">TOTAL STORED WEIGHT</div>
              <div class="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mt-1">
                <span class="text-xl sm:text-2xl font-black text-[#172B4D] tracking-tight">43,769 kg</span>
                <span class="text-base sm:text-lg font-bold text-[#0284C7] font-mono">73,97,.95 McS</span>
              </div>
              <div class="flex items-center gap-3 text-[10px] text-[#5E6C84] font-semibold mt-1">
                <span>TONNES 43.769</span>
                <span>POUNDS 96,493.14</span>
              </div>
            </div>
            <div class="w-11 h-11 rounded-full bg-[#D0E2FF] text-[#0F62FE] flex items-center justify-center shadow-xs shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
          </div>

          <!-- Dashlet 2: RACKS OVERVIEW -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs flex flex-col justify-between transition-all hover:shadow-xs hover:border-[#10B981]">
            <div>
              <div class="text-[10px] font-bold text-[#0E7A46] uppercase tracking-wider mb-2">RACKS OVERVIEW</div>
              <div class="w-full bg-[#E5E7EB] rounded-full h-2 overflow-hidden flex">
                <div class="bg-[#10B981] h-2 rounded-full transition-all duration-300" style="width: 69%"></div>
              </div>
            </div>
            <div class="flex items-center justify-between text-[10px] font-semibold mt-3 text-[#172B4D]">
              <div class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#10B981] inline-block"></span>
                <span>USED RACKS 69% (105)</span>
              </div>
              <div class="flex items-center gap-1.5 text-[#5E6C84]">
                <span class="w-2 h-2 rounded-full border border-[#9CA3AF] bg-white inline-block"></span>
                <span>FREE RACKS 31% (47)</span>
              </div>
            </div>
          </div>

          <!-- Dashlet 3: TOP VARIETIES -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs flex items-center justify-between transition-all hover:shadow-xs hover:border-[#F59E0B]">
            <div>
              <div class="text-[10px] font-bold text-[#B45309] uppercase tracking-wider">TOP VARIETIES</div>
              <div class="text-lg sm:text-xl font-black text-[#78350F] tracking-tight mt-1">PDTO, PD, PVPD</div>
              <div class="text-[10px] text-[#B45309] font-semibold mt-1">BASED ON TOTAL KGS</div>
            </div>
            <div class="w-11 h-11 rounded-full bg-[#FEDF89] text-[#B45309] flex items-center justify-center shadow-xs shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
          </div>

          <!-- Dashlet 4: PACKING TYPE -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-2xs flex flex-col justify-between transition-all hover:shadow-xs hover:border-[#8B5CF6]">
            <div>
              <div class="text-[10px] font-bold text-[#6941C6] uppercase tracking-wider mb-2">PACKING TYPE</div>
              <div class="w-full bg-[#E5E7EB] rounded-full h-2 overflow-hidden flex">
                <div class="bg-[#8B5CF6] h-2 rounded-full transition-all duration-300" style="width: 56%"></div>
              </div>
            </div>
            <div class="flex items-center justify-between text-[10px] font-semibold mt-3 text-[#172B4D]">
              <div class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#8B5CF6] inline-block"></span>
                <span>DUMMY 56% (24,799)</span>
              </div>
              <div class="flex items-center gap-1.5 text-[#5E6C84]">
                <span class="w-2 h-2 rounded-full border border-[#9CA3AF] bg-white inline-block"></span>
                <span>MASTER 44% (19,565)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- RACK LAYOUT SECTION (EXACT MATCH TO SPEC) -->
        <div class="mt-4">
          <!-- Top Section Header: RACK LAYOUT and Legend -->
          <div class="flex flex-wrap items-center justify-between gap-3 mb-2.5 px-1">
            <h2 class="text-xs font-bold text-[#334155] tracking-wider uppercase">RACK LAYOUT</h2>
            <div class="flex flex-wrap items-center gap-5 sm:gap-7">
              <div class="flex items-center gap-2">
                <span class="w-4 h-4 rounded border border-[#DFE1E6] bg-[#EEF2F6] inline-block shadow-2xs"></span>
                <span class="text-[11px] font-bold text-[#64748B] tracking-wider">EMPTY RACK</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-4 h-4 rounded border border-[#86EFAC] bg-[#D1FADF] inline-block shadow-2xs"></span>
                <span class="text-[11px] font-bold text-[#0E7A46] tracking-wider">FILLED RACK</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-6 h-1 bg-[#FDBA74] rounded inline-block shadow-2xs"></span>
                <span class="text-[11px] font-bold text-[#D97706] tracking-wider">WALK PATH</span>
              </div>
            </div>
          </div>

          <!-- White Canvas Container for Realistic Warehouse Grid -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 sm:p-6 shadow-xs overflow-x-auto">
            <div id="vsl-warehouse-map" class="min-w-[980px] space-y-2">
              <!-- Dynamically populated warehouse rack bays -->
            </div>
          </div>
        </div>
      </div>
    `;

    // Realistic Warehouse Map Data Specification (Matching Uploaded Floor Plan Layout)
    const warehouseLayoutRows = [
      // --- TIER 1 (Row 1 & Row 2 across all 14 bays) ---
      {
        type: 'row',
        id: 'tier-1-r',
        racks: [
          { name: '1-101 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-102 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-103 R', filled: true, variety: 'Vannamei PD IQF', grade: '31/40', mcs: 180, weightKg: 1800, occupancy: 85 },
          { name: '1-104 R', filled: true, variety: 'Vannamei HLSO', grade: '26/30', mcs: 220, weightKg: 2200, occupancy: 95 },
          { name: '1-105 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-106 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-107 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-108 R', filled: true, variety: 'Black Tiger Block', grade: '16/20', mcs: 160, weightKg: 1920, occupancy: 80 },
          { name: '1-109 R', filled: true, variety: 'Sea Pearl Cooked PDTO', grade: '21/25', mcs: 240, weightKg: 2400, occupancy: 100 },
          { name: '1-1010 R', filled: true, variety: 'Vannamei HOSO', grade: '31/40', mcs: 190, weightKg: 1900, occupancy: 90 },
          { name: '1-1011 R', filled: true, variety: 'Scampi Headless', grade: '11/15', mcs: 140, weightKg: 1680, occupancy: 75 },
          { name: '1-1012 R', filled: true, variety: 'Vannamei EZ Peel', grade: '26/30', mcs: 210, weightKg: 2100, occupancy: 92 },
          { name: '1-1013 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-1014 R', filled: true, variety: 'Black Tiger HOSO', grade: '21/25', mcs: 200, weightKg: 2400, occupancy: 90 }
        ]
      },
      {
        type: 'row',
        id: 'tier-1',
        racks: [
          { name: '1-101', filled: true, variety: 'Vannamei PD IQF', grade: '41/50', mcs: 250, weightKg: 2500, occupancy: 100 },
          { name: '1-102', filled: true, variety: 'Black Tiger Block', grade: '16/20', mcs: 210, weightKg: 2520, occupancy: 90 },
          { name: '1-103', filled: true, variety: 'Sea Pearl Cooked', grade: '21/25', mcs: 180, weightKg: 1800, occupancy: 85 },
          { name: '1-104', filled: true, variety: 'Vannamei HLSO IQF', grade: '31/40', mcs: 240, weightKg: 2400, occupancy: 100 },
          { name: '1-105', filled: true, variety: 'Ocean Jewel PD', grade: '26/30', mcs: 195, weightKg: 1950, occupancy: 88 },
          { name: '1-106', filled: true, variety: 'Vannamei Raw PD', grade: '51/60', mcs: 220, weightKg: 2200, occupancy: 95 },
          { name: '1-107', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-108', filled: true, variety: 'Black Tiger EZ Peel', grade: '16/20', mcs: 175, weightKg: 2100, occupancy: 82 },
          { name: '1-109', filled: true, variety: 'Vannamei PDTO IQF', grade: '31/40', mcs: 260, weightKg: 2600, occupancy: 100 },
          { name: '1-1010', filled: true, variety: 'Devi Classic Block', grade: '21/25', mcs: 230, weightKg: 2760, occupancy: 95 },
          { name: '1-1011', filled: true, variety: 'Sea White HOSO', grade: '31/40', mcs: 180, weightKg: 1800, occupancy: 85 },
          { name: '1-1012', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-1013', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-1014', filled: true, variety: 'Vannamei Cooked PD', grade: '41/50', mcs: 210, weightKg: 2100, occupancy: 92 }
        ]
      },
      // Horizontal Walk Path 1
      { type: 'walkpath-h' },
      // --- TIER 2 ---
      {
        type: 'split-row',
        id: 'tier-2',
        left: [
          { name: '1-201', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-202', filled: true, variety: 'Vannamei PD IQF', grade: '31/40', mcs: 200, weightKg: 2000, occupancy: 90 },
          { name: '1-203', filled: true, variety: 'Black Tiger Block', grade: '21/25', mcs: 180, weightKg: 2160, occupancy: 85 },
          { name: '1-204', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-205', filled: true, variety: 'Sea Pearl Cooked', grade: '26/30', mcs: 230, weightKg: 2300, occupancy: 95 },
          { name: '1-206', filled: true, variety: 'Ocean Jewel PD', grade: '16/20', mcs: 190, weightKg: 1900, occupancy: 88 }
        ],
        right: [
          { name: '1-209', filled: true, variety: 'Vannamei HLSO', grade: '31/40', mcs: 220, weightKg: 2200, occupancy: 92 },
          { name: '1-2010', filled: true, variety: 'Black Tiger HOSO', grade: '16/20', mcs: 170, weightKg: 2040, occupancy: 80 },
          { name: '1-2011', filled: true, variety: 'Sea White PD IQF', grade: '41/50', mcs: 240, weightKg: 2400, occupancy: 100 },
          { name: '1-2012', filled: true, variety: 'Devi Royal PDTO', grade: '21/25', mcs: 210, weightKg: 2100, occupancy: 90 },
          { name: '1-2013', filled: true, variety: 'Scampi Tail On', grade: '11/15', mcs: 150, weightKg: 1800, occupancy: 75 },
          { name: '1-2014', filled: true, variety: 'Vannamei Block', grade: '51/60', mcs: 260, weightKg: 2600, occupancy: 100 }
        ]
      },
      {
        type: 'split-row',
        id: 'tier-2-r',
        left: [
          { name: '1-201 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-202 R', filled: true, variety: 'Vannamei PD IQF', grade: '26/30', mcs: 190, weightKg: 1900, occupancy: 85 },
          { name: '1-203 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-204 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-205 R', filled: true, variety: 'Black Tiger Block', grade: '16/20', mcs: 160, weightKg: 1920, occupancy: 80 },
          { name: '1-206 R', filled: true, variety: 'Sea Pearl Cooked', grade: '31/40', mcs: 210, weightKg: 2100, occupancy: 92 }
        ],
        right: [
          { name: '1-209 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-2010 R', filled: true, variety: 'Ocean Jewel PD', grade: '21/25', mcs: 180, weightKg: 1800, occupancy: 85 },
          { name: '1-2011 R', filled: true, variety: 'Vannamei HLSO', grade: '41/50', mcs: 220, weightKg: 2200, occupancy: 95 },
          { name: '1-2012 R', filled: true, variety: 'Black Tiger EZ Peel', grade: '26/30', mcs: 195, weightKg: 2340, occupancy: 88 },
          { name: '1-2013 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-2014 R', filled: true, variety: 'Vannamei PDTO', grade: '31/40', mcs: 230, weightKg: 2300, occupancy: 95 }
        ]
      },
      // --- TIER 3 ---
      {
        type: 'split-row',
        id: 'tier-3-r',
        left: [
          { name: '1-301 R', filled: true, variety: 'Vannamei PD IQF', grade: '31/40', mcs: 200, weightKg: 2000, occupancy: 90 },
          { name: '1-302 R', filled: true, variety: 'Black Tiger Block', grade: '16/20', mcs: 180, weightKg: 2160, occupancy: 85 },
          { name: '1-303 R', filled: true, variety: 'Sea Pearl Cooked', grade: '21/25', mcs: 220, weightKg: 2200, occupancy: 95 },
          { name: '1-304 R', filled: true, variety: 'Ocean Jewel PD', grade: '26/30', mcs: 190, weightKg: 1900, occupancy: 88 },
          { name: '1-305 R', filled: true, variety: 'Vannamei HLSO', grade: '41/50', mcs: 240, weightKg: 2400, occupancy: 100 },
          { name: '1-306 R', filled: true, variety: 'Sea White PD', grade: '31/40', mcs: 210, weightKg: 2100, occupancy: 92 }
        ],
        right: [
          { name: '1-309 R', filled: true, variety: 'Black Tiger HOSO', grade: '21/25', mcs: 175, weightKg: 2100, occupancy: 82 },
          { name: '1-3010 R', filled: true, variety: 'Vannamei PDTO', grade: '31/40', mcs: 230, weightKg: 2300, occupancy: 95 },
          { name: '1-3011 R', filled: true, variety: 'Devi Classic Block', grade: '16/20', mcs: 195, weightKg: 2340, occupancy: 88 },
          { name: '1-3012 R', filled: true, variety: 'Scampi Tail On', grade: '11/15', mcs: 160, weightKg: 1920, occupancy: 80 },
          { name: '1-3013 R', filled: true, variety: 'Vannamei EZ Peel', grade: '26/30', mcs: 215, weightKg: 2150, occupancy: 92 },
          { name: '1-3014 R', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 }
        ]
      },
      {
        type: 'split-row',
        id: 'tier-3',
        left: [
          { name: '1-301', filled: true, variety: 'Vannamei PD IQF', grade: '41/50', mcs: 220, weightKg: 2200, occupancy: 95 },
          { name: '1-302', filled: true, variety: 'Black Tiger Block', grade: '21/25', mcs: 185, weightKg: 2220, occupancy: 85 },
          { name: '1-303', filled: true, variety: 'Sea Pearl Cooked', grade: '26/30', mcs: 240, weightKg: 2400, occupancy: 100 },
          { name: '1-304', filled: true, variety: 'Ocean Jewel PD', grade: '31/40', mcs: 210, weightKg: 2100, occupancy: 92 },
          { name: '1-305', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-306', filled: true, variety: 'Vannamei HLSO', grade: '16/20', mcs: 200, weightKg: 2000, occupancy: 90 }
        ],
        right: [
          { name: '1-309', filled: true, variety: 'Sea White PD', grade: '31/40', mcs: 215, weightKg: 2150, occupancy: 92 },
          { name: '1-3010', filled: true, variety: 'Black Tiger EZ Peel', grade: '16/20', mcs: 190, weightKg: 2280, occupancy: 88 },
          { name: '1-3011', filled: true, variety: 'Vannamei PDTO', grade: '26/30', mcs: 225, weightKg: 2250, occupancy: 95 },
          { name: '1-3012', filled: true, variety: 'Devi Classic Block', grade: '41/50', mcs: 245, weightKg: 2940, occupancy: 100 },
          { name: '1-3013', filled: true, variety: 'Scampi Headless', grade: '11/15', mcs: 155, weightKg: 1860, occupancy: 78 },
          { name: '1-3014', filled: true, variety: 'Vannamei Raw PD', grade: '51/60', mcs: 235, weightKg: 2350, occupancy: 95 }
        ]
      },
      // Horizontal Walk Path 2
      { type: 'walkpath-h' },
      // --- TIER 4 ---
      {
        type: 'split-row',
        id: 'tier-4',
        left: [
          { name: '1-401', filled: true, variety: 'Vannamei PD IQF', grade: '31/40', mcs: 210, weightKg: 2100, occupancy: 90 },
          { name: '1-402', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-403', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-404', filled: true, variety: 'Black Tiger Block', grade: '16/20', mcs: 190, weightKg: 2280, occupancy: 88 },
          { name: '1-405', filled: true, variety: 'Sea Pearl Cooked', grade: '21/25', mcs: 230, weightKg: 2300, occupancy: 95 },
          { name: '1-406', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 }
        ],
        right: [
          { name: '1-409', filled: true, variety: 'Ocean Jewel PD', grade: '26/30', mcs: 200, weightKg: 2000, occupancy: 90 },
          { name: '1-4010', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-4011', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 },
          { name: '1-4012', filled: true, variety: 'Vannamei HLSO', grade: '41/50', mcs: 220, weightKg: 2200, occupancy: 92 },
          { name: '1-4013', filled: true, variety: 'Sea White PD', grade: '31/40', mcs: 210, weightKg: 2100, occupancy: 90 },
          { name: '1-4014', filled: false, variety: 'Empty Bay', grade: '-', mcs: 0, weightKg: 0, occupancy: 0 }
        ]
      }
    ];

    // Collect all racks for lookup
    const allRacks = [];
    warehouseLayoutRows.forEach(row => {
      if (row.racks) allRacks.push(...row.racks);
      if (row.left) allRacks.push(...row.left);
      if (row.right) allRacks.push(...row.right);
    });

    // Realistic Isometric Cardboard Boxes Stack Graphic
    const boxStackSvg = `
      <svg class="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-2xs pointer-events-none" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Bottom Left Box -->
        <path d="M4 17L13 12L22 17L13 22L4 17Z" fill="#E8C391"/>
        <path d="M4 17L13 22V31L4 26V17Z" fill="#CB9759"/>
        <path d="M13 22L22 17V26L13 31V22Z" fill="#AF7E42"/>
        <line x1="8.5" y1="14.5" x2="17.5" y2="19.5" stroke="#BA8549" stroke-width="1"/>
        <!-- Top Right Stacked Box -->
        <path d="M14 9L23 4L32 9L23 14L14 9Z" fill="#F0CD9D"/>
        <path d="M14 9L23 14V23L14 18V9Z" fill="#D7A466"/>
        <path d="M23 14L32 9V18L23 23V14Z" fill="#BD8A4C"/>
        <line x1="18.5" y1="6.5" x2="27.5" y2="11.5" stroke="#C49354" stroke-width="1"/>
      </svg>
    `;

    // Render Individual Rack Cell
    const renderRackCell = (rack, query = '') => {
      const q = query.trim().toLowerCase();
      const isMatch = !q || rack.name.toLowerCase().includes(q);
      const isDimmed = q && !isMatch;
      const isHighlighted = q && isMatch;

      let cellClasses = 'relative h-[58px] sm:h-[64px] rounded-lg flex flex-col items-center justify-between pt-1.5 pb-1 px-1 transition-all duration-150 cursor-pointer select-none group ';
      
      if (rack.filled) {
        cellClasses += 'bg-[#D1FADF] border border-[#86EFAC] hover:border-[#34D399] ';
      } else {
        cellClasses += 'bg-[#EEF2F6] border border-[#DFE1E6] hover:border-[#CBD5E1] ';
      }

      if (isHighlighted) {
        cellClasses += 'ring-2 ring-[#0284C7] ring-offset-2 scale-105 shadow-md z-20 ';
      } else if (isDimmed) {
        cellClasses += 'opacity-25 hover:opacity-100 ';
      } else {
        cellClasses += 'hover:scale-105 hover:shadow-md hover:z-10 ';
      }

      const labelColor = rack.filled ? 'text-[#0F172A]' : 'text-[#64748B]';

      return `
        <div 
          class="${cellClasses}" 
          data-rack-name="${rack.name}"
          title="Rack: ${rack.name} • Status: ${rack.filled ? 'FILLED' : 'EMPTY'} • Variety: ${rack.variety} • Grade: ${rack.grade} • MCs: ${rack.mcs}"
        >
          <div class="text-[10px] sm:text-[11px] font-bold ${labelColor} leading-none tracking-tight">${rack.name}</div>
          <div class="flex-1 flex items-center justify-center">
            ${rack.filled ? boxStackSvg : ''}
          </div>
        </div>
      `;
    };

    // Render Warehouse Map Layout
    const renderWarehouseMap = (query = '') => {
      const mapContainer = container.querySelector('#vsl-warehouse-map');
      if (!mapContainer) return;

      const html = warehouseLayoutRows.map(row => {
        if (row.type === 'walkpath-h') {
          return `<div class="w-full h-1 bg-[#FDBA74] rounded my-2 shadow-2xs"></div>`;
        }
        if (row.type === 'row') {
          return `
            <div style="display: grid; grid-template-columns: repeat(14, minmax(58px, 1fr)); gap: 8px;">
              ${row.racks.map(r => renderRackCell(r, query)).join('')}
            </div>
          `;
        }
        if (row.type === 'split-row') {
          return `
            <div style="display: grid; grid-template-columns: repeat(14, minmax(58px, 1fr)); gap: 8px;">
              ${row.left.map(r => renderRackCell(r, query)).join('')}
              <div class="col-span-2 flex items-center justify-center py-0.5">
                <div class="w-1.5 h-full bg-[#FDBA74] rounded shadow-2xs" style="min-height: 54px;"></div>
              </div>
              ${row.right.map(r => renderRackCell(r, query)).join('')}
            </div>
          `;
        }
        return '';
      }).join('');

      mapContainer.innerHTML = html;

      // Bind Click handler for all rack cards
      mapContainer.querySelectorAll('[data-rack-name]').forEach(card => {
        card.addEventListener('click', () => {
          const rName = card.getAttribute('data-rack-name');
          const found = allRacks.find(r => r.name === rName);
          if (found) {
            const rackModalData = {
              id: found.name,
              name: found.name,
              storeId: 'CS-CH-01',
              blockId: 'BLK-A',
              floor: 'FL-1',
              bay: `Bay ${found.name.split(' ')[0]}`,
              tier: found.name.includes('R') ? 'Tier R (Upper Level)' : 'Tier Base (Lower Level)',
              variety: found.variety || (found.filled ? 'Vannamei PD IQF' : 'Empty Bay'),
              grade: found.grade || (found.filled ? '31/40' : '-'),
              brand: found.filled ? 'Devi Royal' : '-',
              status: found.filled ? 'Occupied' : 'Free',
              occupancy: found.occupancy || (found.filled ? 90 : 0),
              mcs: found.mcs || (found.filled ? 220 : 0),
              weightKg: found.weightKg || (found.filled ? 2200 : 0)
            };
            this.showRackDetailModal(rackModalData);
          }
        });
      });
    };

    // Initial Warehouse Render
    renderWarehouseMap();

    // Bind Collapsible Filter Toggle
    const toggleBtn = container.querySelector('#vsl-filter-toggle-btn');
    const filterBody = container.querySelector('#vsl-filter-body');
    const toggleIcon = container.querySelector('#vsl-filter-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isFilterOpen = true;
      toggleBtn.addEventListener('click', () => {
        isFilterOpen = !isFilterOpen;
        if (isFilterOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Execute Filter Function
    const executeFilter = () => {
      const storeVal = container.querySelector('#vsl-filter-store')?.value;
      const blockVal = container.querySelector('#vsl-filter-block')?.value;
      const floorVal = container.querySelector('#vsl-filter-floor')?.value;
      const rackNameVal = (container.querySelector('#vsl-filter-rack')?.value || '').trim();

      renderWarehouseMap(rackNameVal);

      if (rackNameVal) {
        const matches = allRacks.filter(r => r.name.toLowerCase().includes(rackNameVal.toLowerCase()));
        Toast.show(`Found ${matches.length} rack bay${matches.length === 1 ? '' : 's'} matching "${rackNameVal}" in ${blockVal || 'current layout'}`, 'info');
      } else {
        Toast.show(`Displaying rack layout for ${blockVal || 'current block'} on ${floorVal || 'selected floor'}`, 'info');
      }
    };

    // Bind Search Button
    const searchBtn = container.querySelector('#vsl-filter-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', executeFilter);
    }

    // Bind Rack Input Enter
    const rackInput = container.querySelector('#vsl-filter-rack');
    if (rackInput) {
      rackInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeFilter();
        }
      });
    }

    // Bind Reset Button
    const resetBtn = container.querySelector('#vsl-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const st = container.querySelector('#vsl-filter-store');
        const bk = container.querySelector('#vsl-filter-block');
        const fl = container.querySelector('#vsl-filter-floor');
        const rk = container.querySelector('#vsl-filter-rack');

        if (st) st.value = 'CS-CH-01';
        if (bk) bk.value = 'BLK-A';
        if (fl) fl.value = 'FL-1';
        if (rk) rk.value = '';

        renderWarehouseMap('');
        Toast.show('Store layout filters reset to default', 'info');
      });
    }
  },

  // 4b-1. PALLET DETAILS MODAL (EXACT SPEC MATCH)
  showRackDetailModal(rack) {
    // Realistic Barcode SVG
    const barcodeSvg = `
      <svg class="h-6 sm:h-7 w-16 sm:w-20" viewBox="0 0 100 32" fill="#0F172A">
        <rect x="0" y="0" width="3" height="32"/>
        <rect x="5" y="0" width="1.5" height="32"/>
        <rect x="8" y="0" width="4" height="32"/>
        <rect x="14" y="0" width="2" height="32"/>
        <rect x="18" y="0" width="5" height="32"/>
        <rect x="25" y="0" width="1.5" height="32"/>
        <rect x="28" y="0" width="3" height="32"/>
        <rect x="33" y="0" width="4" height="32"/>
        <rect x="39" y="0" width="2" height="32"/>
        <rect x="43" y="0" width="1.5" height="32"/>
        <rect x="47" y="0" width="5" height="32"/>
        <rect x="54" y="0" width="3" height="32"/>
        <rect x="59" y="0" width="1.5" height="32"/>
        <rect x="63" y="0" width="4" height="32"/>
        <rect x="69" y="0" width="2" height="32"/>
        <rect x="73" y="0" width="4" height="32"/>
        <rect x="79" y="0" width="2" height="32"/>
        <rect x="83" y="0" width="3.5" height="32"/>
        <rect x="89" y="0" width="1.5" height="32"/>
        <rect x="93" y="0" width="4" height="32"/>
      </svg>
    `;

    // 6 Pallet Boxes (Matching Spec: 3 Upper Tier, 3 Lower Tier)
    const palletBoxes = [
      // Upper Tier
      {
        tier: 'upper',
        variety: 'VM RAW',
        type: 'HLSO',
        shift: 'B SHIFT',
        grade: '26/30',
        po: rack.poNumber || '',
        freezing: 'BLOCK',
        mcs: 16,
        loose: 1,
        packing: 'DUMMY',
        style: '6 X 1.8 KGS',
        kgs: 174.6
      },
      {
        tier: 'upper',
        variety: 'VM RAW',
        type: 'HLSO',
        shift: 'B SHIFT',
        grade: '26/30',
        po: rack.poNumber || '',
        freezing: 'BLOCK',
        mcs: 28,
        loose: 2,
        packing: 'DUMMY',
        style: '6 X 1.8 KGS',
        kgs: 306
      },
      {
        tier: 'upper',
        variety: 'VM RAW',
        type: 'HLSO',
        shift: 'B SHIFT',
        grade: '26/30',
        po: rack.poNumber || '',
        freezing: 'BLOCK',
        mcs: 28,
        loose: 2,
        packing: 'DUMMY',
        style: '6 X 1.8 KGS',
        kgs: 306
      },
      // Lower Tier
      {
        tier: 'lower',
        variety: 'VM RAW',
        type: 'HLSO',
        shift: 'B SHIFT',
        grade: '26/30',
        po: rack.poNumber || '',
        freezing: 'BLOCK',
        mcs: 32,
        loose: 1,
        packing: 'DUMMY',
        style: '6 X 1.8 KGS',
        kgs: 350
      },
      {
        tier: 'lower',
        variety: 'VM RAW',
        type: 'HLSO',
        shift: 'B SHIFT',
        grade: (rack.grade && rack.grade !== '-') ? rack.grade : '21/25',
        po: rack.poNumber || '',
        freezing: 'BLOCK',
        mcs: 34,
        loose: 1,
        packing: 'DUMMY',
        style: '6 X 1.8 KGS',
        kgs: 372
      },
      {
        tier: 'lower',
        variety: 'VM RAW',
        type: 'HLSO',
        shift: 'B SHIFT',
        grade: '26/30',
        po: rack.poNumber || '',
        freezing: 'BLOCK',
        mcs: 34,
        loose: 1,
        packing: 'DUMMY',
        style: '6 X 1.8 KGS',
        kgs: 372
      }
    ];

    const renderPalletBox = (box) => `
      <div class="flex-1 min-w-[200px] flex flex-col shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all">
        <!-- Top Folded Flaps -->
        <div class="h-6 bg-[#E0B07D] border-t-2 border-l-2 border-r-2 border-[#BC824D] rounded-t-lg relative flex items-center justify-center overflow-hidden">
          <div class="w-full h-[1px] bg-[#C5925A] absolute top-2.5"></div>
          <div class="w-[1px] h-full bg-[#C5925A] absolute left-1/2"></div>
        </div>

        <!-- Box Body -->
        <div class="p-3 bg-[#D4A373] border-b-2 border-l-2 border-r-2 border-[#BC824D] rounded-b-lg space-y-2.5">
          <!-- Cyan Shipping Label -->
          <div class="bg-[#99D5DC] border border-[#72B9C3] rounded-lg p-2.5 shadow-2xs">
            <!-- Label Header -->
            <div class="flex items-start justify-between">
              <div>
                <div class="text-xs sm:text-sm font-black text-[#0F172A] tracking-tight leading-tight">${box.variety}</div>
                <div class="text-[10px] font-bold text-[#334155] leading-none mt-0.5">${box.type}</div>
              </div>
              <span class="bg-[#2563EB] text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-2xs tracking-wider">${box.shift}</span>
            </div>

            <!-- Grade & Barcode -->
            <div class="mt-2 bg-[#BFE9EF] border border-[#6BBECB] rounded p-1.5 flex items-center justify-between">
              <div class="text-xl sm:text-2xl font-black font-mono text-[#0F172A] tracking-tight pl-1">${box.grade}</div>
              <div class="pr-1 flex items-center">
                ${barcodeSvg}
              </div>
            </div>
          </div>

          <!-- Specs List on Kraft Cardboard -->
          <div class="space-y-1 text-[11px] font-semibold text-[#1F2937] pt-1">
            <div class="flex items-center justify-between border-b border-[#C5925A]/40 pb-0.5">
              <span class="text-[#374151] font-bold">PO</span>
              <span class="font-mono font-bold text-[#111827]">${box.po || '-'}</span>
            </div>
            <div class="flex items-center justify-between border-b border-[#C5925A]/40 pb-0.5">
              <span class="text-[#374151] font-bold">Freezing</span>
              <span class="font-bold text-[#111827]">${box.freezing}</span>
            </div>
            <div class="flex items-center justify-between border-b border-[#C5925A]/40 pb-0.5">
              <span class="text-[#374151] font-bold">MCS</span>
              <span class="font-mono font-black text-[#111827]">${box.mcs}</span>
            </div>
            <div class="flex items-center justify-between border-b border-[#C5925A]/40 pb-0.5">
              <span class="text-[#374151] font-bold">Loose</span>
              <span class="font-mono font-black text-[#111827]">${box.loose}</span>
            </div>
            <div class="flex items-center justify-between border-b border-[#C5925A]/40 pb-0.5">
              <span class="text-[#374151] font-bold">Packing</span>
              <span class="font-bold text-[#111827]">${box.packing}</span>
            </div>
            <div class="flex items-center justify-between border-b border-[#C5925A]/40 pb-0.5">
              <span class="text-[#374151] font-bold">Style</span>
              <span class="font-mono font-bold text-[#111827]">${box.style}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#374151] font-bold">Kgs</span>
              <span class="font-mono font-black text-[#111827]">${box.kgs}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    const upperBoxes = palletBoxes.filter(b => b.tier === 'upper');
    const lowerBoxes = palletBoxes.filter(b => b.tier === 'lower');

    // Upright post hole column generator
    const postHoles = Array.from({ length: 18 }).map(() => `<div class="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] mx-auto my-2"></div>`).join('');

    Modal.open({
      title: 'Pallet Details',
      size: 'xl',
      content: `
        <div class="space-y-4">
          <!-- Top Stat Badges (Exact Match) -->
          <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <!-- Badge 1: TOTAL MCS -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl px-4 py-2 flex items-center gap-2.5 shadow-2xs">
              <svg class="w-4 h-4 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12H8v-2h8v2zm0-4H8v-2h8v2z"/></svg>
              <div class="text-xs">
                <span class="font-bold text-[#64748B]">TOTAL MCS:</span> <span class="font-black text-[#0F172A] font-mono text-sm ml-1">172</span>
              </div>
            </div>

            <!-- Badge 2: TOTAL LOOSE -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl px-4 py-2 flex items-center gap-2.5 shadow-2xs">
              <svg class="w-4 h-4 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24"><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/></svg>
              <div class="text-xs">
                <span class="font-bold text-[#64748B]">TOTAL LOOSE:</span> <span class="font-black text-[#0F172A] font-mono text-sm ml-1">8</span>
              </div>
            </div>

            <!-- Badge 3: TOTAL KGS -->
            <div class="bg-white border border-[#DFE1E6] rounded-xl px-4 py-2 flex items-center gap-2.5 shadow-2xs">
              <svg class="w-4 h-4 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a4 4 0 00-4 4c0 .73.19 1.41.53 2H5a2 2 0 00-2 2v2a2 2 0 001.6 1.96L3 21h18l-1.6-6.04A2 2 0 0021 13v-2a2 2 0 00-2-2h-3.53c.34-.59.53-1.27.53-2a4 4 0 00-4-4zm0 2a2 2 0 012 2c0 .5-.18.95-.5 1.3L12 9.7l-1.5-1.4A1.98 1.98 0 0110 7a2 2 0 012-2z"/></svg>
              <div class="text-xs">
                <span class="font-bold text-[#64748B]">TOTAL KGS:</span> <span class="font-black text-[#0F172A] font-mono text-sm ml-1">1872</span>
              </div>
            </div>
          </div>

          <!-- Realistic Warehouse Pallet Rack Bay Graphic Container -->
          <div class="bg-[#FAF7F2] border border-[#E5E7EB] rounded-2xl p-4 sm:p-6 relative shadow-inner overflow-hidden">
            <!-- Left Perforated Metal Post -->
            <div class="w-5 sm:w-6 bg-[#94A3B8] border-r border-[#64748B] absolute left-3 sm:left-4 top-0 bottom-0 flex flex-col justify-around py-3 z-20 shadow-sm">
              ${postHoles}
            </div>

            <!-- Right Perforated Metal Post -->
            <div class="w-5 sm:w-6 bg-[#94A3B8] border-l border-[#64748B] absolute right-3 sm:right-4 top-0 bottom-0 flex flex-col justify-around py-3 z-20 shadow-sm">
              ${postHoles}
            </div>

            <!-- Pallet Storage Area -->
            <div class="px-6 sm:px-8 py-2 relative z-10">
              <!-- Upper Tier Boxes -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                ${upperBoxes.map(renderPalletBox).join('')}
              </div>

              <!-- Strong Red Metal Cross Beam -->
              <div class="relative w-full h-5 sm:h-6 bg-[#990000] border-t border-b border-[#7F0000] shadow-md flex items-center justify-between my-4 sm:my-5 z-20">
                <div class="w-3.5 h-8 bg-[#800000] rounded-sm -ml-2.5 border border-[#550000] shadow"></div>
                <div class="w-3.5 h-8 bg-[#800000] rounded-sm -mr-2.5 border border-[#550000] shadow"></div>
              </div>

              <!-- Lower Tier Boxes -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                ${lowerBoxes.map(renderPalletBox).join('')}
              </div>
            </div>
          </div>
        </div>
      `,
      footerButtons: []
    });
  },

  // 4c. STORE - RACK NAMES (create-store-layout)
  renderRackNames(container) {
    container.innerHTML = `
      <div class="space-y-4 animate-fade-in relative pb-16">
        <!-- Clean Page Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Rack names</h1>
          </div>
        </div>

        <!-- Collapsible Search & Filter Header Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Store &amp; Rack Configuration Search Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="rn-filter-reset-btn" 
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="rn-filter-toggle-btn" 
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="rn-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (Consistent 4 Columns Grid) -->
          <div id="rn-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. STORE ID * -->
            <div>
              <label for="rn-filter-store" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STORE ID <span class="text-[#DE350B] font-bold">*</span></label>
              <select id="rn-filter-store" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
                <option value="CS-CH-01" selected>CS-CH-01 (Chamber #1 IQF)</option>
                <option value="CS-CH-02">CS-CH-02 (Chamber #2 Block)</option>
                <option value="CS-VLT-03">CS-VLT-03 (Vault #3 Staging)</option>
                <option value="CS-CH-03">CS-CH-03 (Chamber #3 Blast)</option>
              </select>
            </div>

            <!-- 2. BLOCK ID * -->
            <div>
              <label for="rn-filter-block" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BLOCK ID <span class="text-[#DE350B] font-bold">*</span></label>
              <select id="rn-filter-block" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
                <option value="BLK-A" selected>BLK-A (Block A - Primary)</option>
                <option value="BLK-B">BLK-B (Block B - Secondary)</option>
                <option value="BLK-C">BLK-C (Block C - Staging)</option>
                <option value="BLK-D">BLK-D (Block D - Blast)</option>
              </select>
            </div>

            <!-- 3. FLOORS * -->
            <div>
              <label for="rn-filter-floor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FLOORS <span class="text-[#DE350B] font-bold">*</span></label>
              <select id="rn-filter-floor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
                <option value="FL-1">Floor 1 (Ground Level)</option>
                <option value="FL-2" selected>Floor 2 (Tier 2)</option>
                <option value="FL-3">Floor 3 (High Bay)</option>
              </select>
            </div>

            <!-- 4. NO. OF ROWS * -->
            <div>
              <label for="rn-filter-rows" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">NO. OF ROWS <span class="text-[#DE350B] font-bold">*</span></label>
              <input type="number" id="rn-filter-rows" min="1" max="50" value="13" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
            </div>

            <!-- 5. NO. OF COLUMNS * -->
            <div>
              <label for="rn-filter-cols" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">NO. OF COLUMNS <span class="text-[#DE350B] font-bold">*</span></label>
              <input type="number" id="rn-filter-cols" min="1" max="50" value="17" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
            </div>

            <!-- 6. Action Slot: Search Button -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="rn-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                title="Search &amp; Configure Rack Names"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Interactive Store Rack Layout Matrix Canvas (Matching Spec) -->
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 sm:p-5 shadow-xs overflow-x-auto">
          <div id="rn-matrix-wrapper" class="min-w-[1350px]">
            <!-- Matrix table generated dynamically -->
          </div>
        </div>

        <!-- Fixed Save Button in Bottom Right (Matching ERP Design Style) -->
        <div class="fixed bottom-6 right-8 z-30">
          <button 
            type="button" 
            id="rn-save-layout-btn" 
            class="btn-primary rounded-full px-8 py-2.5 text-xs font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center justify-center border-0"
            title="Save Rack Names &amp; Store Layout"
          >Save</button>
        </div>
      </div>
    `;

    // Walking Person Icon SVG
    const walkIconSvg = `
      <svg class="w-3.5 h-3.5 text-[#374151]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="4" r="1.5" fill="currentColor"/>
        <path d="M9 19l2-5 2-2 3 1v4"/>
        <path d="M10 11l-2 3-2-1"/>
        <path d="M13 8l-2 3v3l-2 5"/>
      </svg>
    `;

    // White Checkmark SVG
    const whiteCheckSvg = `
      <svg class="w-3 h-3 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
      </svg>
    `;

    // Render Matrix Layout
    const renderMatrix = (floorId, rows, cols) => {
      const matrixWrapper = container.querySelector('#rn-matrix-wrapper');
      if (!matrixWrapper) return;

      const numRows = parseInt(rows, 10) || 13;
      const numCols = parseInt(cols, 10) || 17;
      const floorPrefix = (floorId || 'FL-2').replace(/[^0-9]/g, '') || '2';

      // Table Header Row: # and Col-1 to Col-N
      let theadHtml = `
        <thead class="bg-[#F8FAFC]">
          <tr>
            <th class="p-2 border border-[#E2E8F0] text-center font-bold text-[#5E6C84] w-24">#</th>
      `;

      for (let c = 1; c <= numCols; c++) {
        theadHtml += `
          <th class="p-1.5 border border-[#E2E8F0] text-center bg-white">
            <div class="inline-flex items-center justify-center gap-1.5">
              <input type="checkbox" checked class="w-3.5 h-3.5 accent-[#0E7A46] rounded cursor-pointer">
              <span class="font-bold text-[11px] text-[#172B4D]">Col-${c}</span>
            </div>
          </th>
        `;
      }
      theadHtml += `</tr></thead>`;

      // Helper to generate code based on row & col
      const getRackCode = (r, c) => {
        let tierPrefix = '1';
        let suffix = '';

        if (r === 1) {
          tierPrefix = '1';
        } else if (r === 3) {
          tierPrefix = '2';
        } else if (r === 4) {
          tierPrefix = '3';
          suffix = 'F';
        } else if (r === 5) {
          tierPrefix = '3';
        } else if (r === 7) {
          tierPrefix = '4';
        } else if (r === 8) {
          tierPrefix = '4';
          suffix = 'F';
        } else if (r === 9) {
          tierPrefix = '5';
          suffix = 'F';
        } else if (r === 10) {
          tierPrefix = '5';
        } else if (r === 12) {
          tierPrefix = '6';
        } else if (r === 13) {
          tierPrefix = '6';
          suffix = 'F';
        } else {
          tierPrefix = `${r}`;
        }

        const colStr = c < 10 ? `0${c}` : `${c}`;
        return `${floorPrefix}-${tierPrefix}${colStr}${suffix}`;
      };

      // Table Body Rows
      let tbodyHtml = `<tbody>`;

      for (let r = 1; r <= numRows; r++) {
        // Determine if entire row is a horizontal walk path
        const isHorizontalWalkRow = (numRows === 13) 
          ? (r === 2 || r === 6 || r === 11)
          : (r % 5 === 0);

        tbodyHtml += `
          <tr>
            <!-- Row Header -->
            <td class="p-1.5 border border-[#E2E8F0] bg-white whitespace-nowrap">
              <div class="flex items-center gap-2 pr-1">
                <input type="checkbox" checked class="w-3.5 h-3.5 accent-[#0E7A46] rounded cursor-pointer">
                <span class="font-bold text-[11px] text-[#172B4D]">Row-${r}</span>
                <div class="w-7 h-7 rounded-lg border-2 border-[#60A5FA] bg-white flex items-center justify-center shadow-2xs"></div>
              </div>
            </td>
        `;

        for (let c = 1; c <= numCols; c++) {
          // Determine if this cell is a walkway
          const isVerticalAisleCol = (numCols === 17) 
            ? (c === 11 || c === 12) 
            : (c === Math.floor(numCols * 0.65) || c === Math.floor(numCols * 0.65) + 1);

          const isWalkwayCell = isHorizontalWalkRow || isVerticalAisleCol;

          if (isWalkwayCell) {
            // Walkway Cell (White with Checkbox and Pedestrian 🚶)
            tbodyHtml += `
              <td class="p-1 border border-[#E2E8F0] bg-white text-center">
                <div class="flex items-center justify-center gap-2 py-0.5">
                  <input type="checkbox" class="w-3.5 h-3.5 rounded border-[#CBD5E1] text-[#64748B] cursor-pointer">
                  ${walkIconSvg}
                </div>
              </td>
            `;
          } else {
            // Rack Bay Cell (Green with Checkmark and Blue-bordered White Input Box)
            const rackCode = getRackCode(r, c);
            tbodyHtml += `
              <td class="p-1 border border-[#0A5C34] bg-[#0E7A46] text-center">
                <div class="flex items-center justify-center gap-1.5 py-0.5">
                  ${whiteCheckSvg}
                  <input 
                    type="text" 
                    value="${rackCode}" 
                    data-row="${r}" 
                    data-col="${c}" 
                    class="rn-rack-code-input w-[56px] sm:w-[62px] text-[10px] sm:text-[11px] font-bold font-mono text-[#172B4D] text-center bg-white border border-[#3B82F6] rounded px-1 py-0.5 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  >
                </div>
              </td>
            `;
          }
        }

        tbodyHtml += `</tr>`;
      }

      tbodyHtml += `</tbody>`;

      matrixWrapper.innerHTML = `
        <table class="w-full border-collapse border border-[#E2E8F0] text-xs">
          ${theadHtml}
          ${tbodyHtml}
        </table>
      `;

      // Bind Save Button Action (With Confirmation Dialog)
      const saveBtn = container.querySelector('#rn-save-layout-btn');
      if (saveBtn) {
        saveBtn.onclick = () => {
          Modal.confirm({
            title: 'Confirm Save Layout',
            message: 'Are you sure you want to save the current rack names and store layout configuration?',
            confirmText: 'Yes, Save',
            cancelText: 'Cancel',
            onConfirm: () => {
              const rackInputs = matrixWrapper.querySelectorAll('.rn-rack-code-input');
              Toast.show(`Rack names and store layout configuration saved successfully! (${rackInputs.length} rack bays configured)`, 'success');
            }
          });
        };
      }
    };

    // Initial Layout Render
    renderMatrix('FL-2', 13, 17);

    // Bind Collapsible Filter Toggle
    const toggleBtn = container.querySelector('#rn-filter-toggle-btn');
    const filterBody = container.querySelector('#rn-filter-body');
    const toggleIcon = container.querySelector('#rn-filter-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isFilterOpen = true;
      toggleBtn.addEventListener('click', () => {
        isFilterOpen = !isFilterOpen;
        if (isFilterOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Execute Filter Function
    const executeFilter = () => {
      const storeVal = container.querySelector('#rn-filter-store')?.value || 'CS-CH-01';
      const blockVal = container.querySelector('#rn-filter-block')?.value || 'BLK-A';
      const floorVal = container.querySelector('#rn-filter-floor')?.value || 'FL-2';
      const rowsVal = container.querySelector('#rn-filter-rows')?.value || '13';
      const colsVal = container.querySelector('#rn-filter-cols')?.value || '17';

      renderMatrix(floorVal, rowsVal, colsVal);
      Toast.show(`Loaded store layout matrix (${rowsVal} rows × ${colsVal} cols) for ${blockVal} on ${floorVal}`, 'success');
    };

    // Bind Search Button
    const searchBtn = container.querySelector('#rn-filter-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', executeFilter);
    }

    // Bind Reset Button
    const resetBtn = container.querySelector('#rn-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const st = container.querySelector('#rn-filter-store');
        const bk = container.querySelector('#rn-filter-block');
        const fl = container.querySelector('#rn-filter-floor');
        const rw = container.querySelector('#rn-filter-rows');
        const cl = container.querySelector('#rn-filter-cols');

        if (st) st.value = 'CS-CH-01';
        if (bk) bk.value = 'BLK-A';
        if (fl) fl.value = 'FL-2';
        if (rw) rw.value = '13';
        if (cl) cl.value = '17';

        renderMatrix('FL-2', 13, 17);
        Toast.show('Rack names search filters reset to default', 'info');
      });
    }
  },

  // 4d. STORE - BACKWARD COMPATIBILITY
  renderStore(container) {
    this.renderViewStock(container);
  },

  // 5a. STOCK APPROVALS - DAILY PRODUCTION LIST (admin-daily-production-list)
  renderAdminDailyProductionList(container) {
    const dailyProductionRecords = [
      {
        id: 1,
        date: '2026-10-29',
        stockBelongsTo: 'Own Stock (Devi Fisheries)',
        group: 'Vannamei PD',
        supc: 'SUPC-VM-1029',
        product: 'Vannamei PD IQF Quick Frozen',
        grade: '31/40',
        packingType: 'DUMMY',
        packingStyle: '6 X 1.8 KGS',
        mcs: 180,
        balanceMcs: 24,
        bags: 1080,
        balanceBags: 144,
        kgs: 1944.0,
        balanceKgs: 259.2,
        status: 'Partially Stored'
      },
      {
        id: 2,
        date: '2026-10-29',
        stockBelongsTo: 'Own Stock (Devi Fisheries)',
        group: 'Black Tiger Block',
        supc: 'SUPC-BT-0842',
        product: 'Black Tiger Block Frozen',
        grade: '16/20',
        packingType: 'MASTER',
        packingStyle: '10 X 1 KG',
        mcs: 240,
        balanceMcs: 0,
        bags: 2400,
        balanceBags: 0,
        kgs: 2400.0,
        balanceKgs: 0.0,
        status: 'Approved'
      },
      {
        id: 3,
        date: '2026-10-29',
        stockBelongsTo: 'Job Work / Processing',
        group: 'Sea Pearl PDTO',
        supc: 'SUPC-SP-3310',
        product: 'Cooked PDTO Tail On IQF',
        grade: '21/25',
        packingType: 'DUMMY',
        packingStyle: '5 X 2 LBS',
        mcs: 320,
        balanceMcs: 45,
        bags: 1600,
        balanceBags: 225,
        kgs: 1451.5,
        balanceKgs: 204.1,
        status: 'Pending Approval'
      },
      {
        id: 4,
        date: '2026-10-29',
        stockBelongsTo: 'Own Stock (Devi Fisheries)',
        group: 'Vannamei HLSO',
        supc: 'SUPC-VM-4412',
        product: 'Vannamei Head Less Shell On',
        grade: '26/30',
        packingType: 'MASTER',
        packingStyle: '6 X 2 KGS',
        mcs: 150,
        balanceMcs: 0,
        bags: 900,
        balanceBags: 0,
        kgs: 1800.0,
        balanceKgs: 0.0,
        status: 'Approved'
      },
      {
        id: 5,
        date: '2026-10-29',
        stockBelongsTo: 'Third Party Trading',
        group: 'Scampi Block',
        supc: 'SUPC-SC-5501',
        product: 'Freshwater Scampi Block',
        grade: 'U/15',
        packingType: 'POUCH / BAG',
        packingStyle: '10 X 1 KG',
        mcs: 120,
        balanceMcs: 18,
        bags: 1200,
        balanceBags: 180,
        kgs: 1200.0,
        balanceKgs: 180.0,
        status: 'Partially Stored'
      },
      {
        id: 6,
        date: '2026-10-29',
        stockBelongsTo: 'Own Stock (Devi Fisheries)',
        group: 'Vannamei PD',
        supc: 'SUPC-VM-1030',
        product: 'Vannamei PD Tail On IQF',
        grade: '41/50',
        packingType: 'DUMMY',
        packingStyle: '6 X 1.8 KGS',
        mcs: 200,
        balanceMcs: 200,
        bags: 1200,
        balanceBags: 1200,
        kgs: 2160.0,
        balanceKgs: 2160.0,
        status: 'Pending Approval'
      }
    ];

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Daily Production List</h1>
          </div>
        </div>

        <!-- Collapsible Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="dpl-filter-reset-btn" 
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="dpl-filter-toggle-btn" 
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="dpl-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Form Input Fields (Standard ERP 4-Column Grid) -->
          <div id="dpl-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. PRODUCTION DATE * -->
            <div>
              <label for="dpl-filter-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE <span class="text-[#DE350B] font-bold">*</span></label>
              <input type="date" id="dpl-filter-date" value="2026-10-29" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
            </div>

            <!-- 2. STOCK BELONGS TO -->
            <div>
              <label for="dpl-filter-stock-belongs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK BELONGS TO</label>
              <select id="dpl-filter-stock-belongs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Stock</option>
                <option value="Own Stock (Devi Fisheries)" selected>Own Stock (Devi Fisheries)</option>
                <option value="Job Work / Processing">Job Work / Processing</option>
                <option value="Third Party Trading">Third Party Trading</option>
              </select>
            </div>

            <!-- 3. PACKING TYPE -->
            <div>
              <label for="dpl-filter-packing-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING TYPE</label>
              <select id="dpl-filter-packing-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Packing Types</option>
                <option value="DUMMY">DUMMY</option>
                <option value="MASTER">MASTER</option>
                <option value="POUCH / BAG">POUCH / BAG</option>
              </select>
            </div>

            <!-- 4. GROUP -->
            <div>
              <label for="dpl-filter-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP</label>
              <select id="dpl-filter-group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Groups</option>
                <option value="Vannamei PD">Vannamei PD</option>
                <option value="Black Tiger Block">Black Tiger Block</option>
                <option value="Sea Pearl PDTO">Sea Pearl PDTO</option>
                <option value="Vannamei HLSO">Vannamei HLSO</option>
                <option value="Scampi Block">Scampi Block</option>
              </select>
            </div>

            <!-- 5. Search Action Slot (Standard ERP Position) -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="dpl-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]" 
                title="Search Filter Records"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="cs-daily-prod-table"></div>
      </div>
    `;

    // Initialize DataTable
    let dataTableInstance = null;

    const initTable = (data) => {
      const tableWrapper = container.querySelector('#cs-daily-prod-table');
      if (!tableWrapper) return;
      tableWrapper.innerHTML = '';

      dataTableInstance = new DataTable({
        containerId: 'cs-daily-prod-table',
        tableTitle: 'Daily Production List',
        keyField: 'id',
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showDailyProductionDetailModal(row),
        columns: [
          // 1. S.NO
          {
            field: 'id',
            header: 'S.NO',
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>`
          },

          // 2. Group
          {
            field: 'group',
            header: 'Group',
            sortable: true,
            render: (v) => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294] whitespace-nowrap">${v}</span>`
          },

          // 3. SUPC
          {
            field: 'supc',
            header: 'SUPC',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BEE3F8] whitespace-nowrap">${v}</span>`
          },

          // 4. Product
          {
            field: 'product',
            header: 'Product',
            sortable: true,
            render: (v) => `<span class="font-medium text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },

          // 5. Grade
          {
            field: 'grade',
            header: 'Grade',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#0284C7] whitespace-nowrap">${v}</span>`
          },

          // 6. Packing Type
          {
            field: 'packingType',
            header: 'Packing Type',
            sortable: true,
            render: (v) => `<span class="whitespace-nowrap text-xs text-[#172B4D]">${v}</span>`
          },

          // 7. Packing Style
          {
            field: 'packingStyle',
            header: 'Packing Style',
            render: (v) => `<span class="whitespace-nowrap font-medium text-xs text-[#172B4D]">${v}</span>`
          },

          // 8. Mcs
          {
            field: 'mcs',
            header: 'Mcs',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00875A]">${Number(v).toLocaleString()}</span>`
          },

          // 9. Balance Mcs
          {
            field: 'balanceMcs',
            header: 'Balance Mcs',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs ${v > 0 ? 'text-[#172B4D]' : 'text-[#A5ADBA]'}">${Number(v).toLocaleString()}</span>`
          },

          // 10. Bags
          {
            field: 'bags',
            header: 'Bags',
            sortable: true,
            render: (v) => `<span class="font-mono font-semibold text-xs text-[#172B4D]">${Number(v).toLocaleString()}</span>`
          },

          // 11. Balance Bags
          {
            field: 'balanceBags',
            header: 'Balance Bags',
            sortable: true,
            render: (v) => `<span class="font-mono font-semibold text-xs ${v > 0 ? 'text-[#172B4D]' : 'text-[#A5ADBA]'}">${Number(v).toLocaleString()}</span>`
          },

          // 12. Kgs
          {
            field: 'kgs',
            header: 'Kgs',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D]">${Number(v).toFixed(1)}</span>`
          },

          // 13. Balance Kgs
          {
            field: 'balanceKgs',
            header: 'Balance Kgs',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs ${v > 0 ? 'text-[#00875A]' : 'text-[#A5ADBA]'}">${Number(v).toFixed(1)}</span>`
          },

          // 14. Status
          {
            field: 'status',
            header: 'Status',
            sortable: true,
            render: (v) => {
              let badgeCls = 'bg-[#FFF0B3] text-[#172B4D] border-[#FFE380]';
              if (v === 'Approved') badgeCls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              if (v === 'Partially Stored') badgeCls = 'bg-[#E0F2FE] text-[#0284C7] border-[#B3D4FF]';
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeCls} whitespace-nowrap">${v}</span>`;
            }
          }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'Inward / Approve',
            icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Approve Inward Production Lot',
                message: `Confirm inward intake approval for production lot <strong>${row.supc}</strong> (${row.product}, Grade: ${row.grade}, Mcs: ${row.mcs})?`,
                confirmText: 'Approve Inward',
                onConfirm: () => {
                  row.status = 'Approved';
                  row.balanceMcs = 0;
                  row.balanceBags = 0;
                  row.balanceKgs = 0.0;
                  initTable(data);
                  Toast.show(`Production lot ${row.supc} successfully approved and slotted!`, 'success');
                }
              });
            }
          },
          {
            label: 'Print Pallet Labels',
            icon: `<svg class="w-4 h-4 text-[#403294]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
            onClick: (row) => {
              Toast.show(`Printing pallet label barcode stickers for ${row.supc}...`, 'info');
            }
          }
        ],
        data
      });
    };

    // Initial render
    initTable(dailyProductionRecords);

    // Collapsible Filter Toggle
    const toggleBtn = container.querySelector('#dpl-filter-toggle-btn');
    const filterBody = container.querySelector('#dpl-filter-body');
    const toggleIcon = container.querySelector('#dpl-filter-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isOpen = true;
      toggleBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Execute Search Filter
    const executeFilter = () => {
      const stockBelongsVal = (container.querySelector('#dpl-filter-stock-belongs')?.value || '').trim();
      const packingTypeVal = (container.querySelector('#dpl-filter-packing-type')?.value || '').trim();
      const groupVal = (container.querySelector('#dpl-filter-group')?.value || '').trim();

      const filtered = dailyProductionRecords.filter(r => {
        if (stockBelongsVal && r.stockBelongsTo !== stockBelongsVal) return false;
        if (packingTypeVal && r.packingType !== packingTypeVal) return false;
        if (groupVal && r.group !== groupVal) return false;
        return true;
      });

      initTable(filtered);
      Toast.show(`Displaying ${filtered.length} production record${filtered.length === 1 ? '' : 's'}`, 'info');
    };

    // Bind Search Button
    const searchBtn = container.querySelector('#dpl-filter-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', executeFilter);
    }

    // Bind Reset Button
    const resetBtn = container.querySelector('#dpl-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const dateInput = container.querySelector('#dpl-filter-date');
        const sb = container.querySelector('#dpl-filter-stock-belongs');
        const pt = container.querySelector('#dpl-filter-packing-type');
        const gr = container.querySelector('#dpl-filter-group');

        if (dateInput) dateInput.value = '2026-10-29';
        if (sb) sb.value = 'Own Stock (Devi Fisheries)';
        if (pt) pt.value = '';
        if (gr) gr.value = '';

        initTable(dailyProductionRecords);
        Toast.show('Daily production search filters reset to default', 'info');
      });
    }
  },

  // 5b. STOCK APPROVALS - INWARD APPROVAL (admin-inward-approval)
  renderAdminInwardApproval(container) {
    const inwardApprovalRecords = [
      {
        id: 1,
        bid: 'BID-2026-8801',
        date: '2026-10-29',
        coldStore: 'Chamber #1 (IQF)',
        stockBelongsTo: 'Own Stock (Devi Fisheries)',
        species: 'Vannamei (Litopenaeus vannamei)',
        typeProduct: 'Peeled & Deveined (PD)',
        freezingType: 'IQF (Individually Quick Frozen)',
        variety: 'Vannamei PD IQF',
        grade: '26/30',
        soaking: 'Yes (Non-Phosphate)',
        packingType: 'DUMMY',
        packingStyle: '6 X 1.8 KGS',
        category: 'Raw Frozen',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        poNumber: 'PO-2026-4412',
        lotNumber: 'LOT-VM-901',
        mcs: 180,
        loose: 12,
        store: 'Chamber #1 (IQF)',
        status: 'Pending Approval'
      },
      {
        id: 2,
        bid: 'BID-2026-8802',
        date: '2026-10-29',
        coldStore: 'Chamber #2 (Plate)',
        stockBelongsTo: 'Own Stock (Devi Fisheries)',
        species: 'Black Tiger (Penaeus monodon)',
        typeProduct: 'Head Less Shell On (HLSO)',
        freezingType: 'Block Frozen',
        variety: 'Black Tiger Block',
        grade: '16/20',
        soaking: 'No (Unsoaked)',
        packingType: 'MASTER',
        packingStyle: '6 X 2 KGS',
        category: 'Raw Frozen',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        poNumber: 'PO-2026-4415',
        lotNumber: 'LOT-BT-412',
        mcs: 240,
        loose: 0,
        store: 'Chamber #2 (Plate)',
        status: 'Approved'
      },
      {
        id: 3,
        bid: 'BID-2026-8803',
        date: '2026-10-28',
        coldStore: 'Chamber #1 (IQF)',
        stockBelongsTo: 'Job Work / Processing',
        species: 'Sea White (Penaeus indicus)',
        typeProduct: 'Easy Peel (EZP)',
        freezingType: 'IQF (Individually Quick Frozen)',
        variety: 'Sea Pearl EZP',
        grade: '31/40',
        soaking: 'Yes (Non-Phosphate)',
        packingType: 'POUCH / BAG',
        packingStyle: '10 X 1 KG',
        category: 'Value Added',
        productCategory: 'Value Added',
        abStatus: 'PASSED (AB Negative)',
        poNumber: 'PO-2026-4390',
        lotNumber: 'LOT-SP-104',
        mcs: 110,
        loose: 5,
        store: 'Chamber #1 (IQF)',
        status: 'Pending Approval'
      },
      {
        id: 4,
        bid: 'BID-2026-8804',
        date: '2026-10-28',
        coldStore: 'Chamber #3 (Blast)',
        stockBelongsTo: 'Third Party Trading',
        species: 'Freshwater Scampi (Macrobrachium rosenbergii)',
        typeProduct: 'Head Less Shell On (HLSO)',
        freezingType: 'Block Frozen',
        variety: 'Scampi Block',
        grade: 'U/15',
        soaking: 'No (Unsoaked)',
        packingType: 'MASTER',
        packingStyle: '6 X 2 KGS',
        category: 'Raw Frozen',
        productCategory: 'Raw Frozen',
        abStatus: 'UNDER TESTING',
        poNumber: 'PO-2026-4401',
        lotNumber: 'LOT-SC-202',
        mcs: 95,
        loose: 8,
        store: 'Chamber #3 (Blast)',
        status: 'Under Inspection'
      },
      {
        id: 5,
        bid: 'BID-2026-8805',
        date: '2026-10-27',
        coldStore: 'Chamber #4 (Deep Freeze)',
        stockBelongsTo: 'Devi Fisheries Ltd (DFL)',
        species: 'Vannamei (Litopenaeus vannamei)',
        typeProduct: 'Peeled & Deveined Tail On (PDTO)',
        freezingType: 'IQF (Individually Quick Frozen)',
        variety: 'Vannamei Cooked PDTO',
        grade: '21/25',
        soaking: 'Yes (STPP Treated)',
        packingType: 'DUMMY',
        packingStyle: '5 X 2 KGS',
        category: 'Cooked Frozen',
        productCategory: 'Cooked Frozen',
        abStatus: 'PASSED (AB Negative)',
        poNumber: 'PO-2026-4388',
        lotNumber: 'LOT-CK-550',
        mcs: 160,
        loose: 0,
        store: 'Chamber #4 (Deep Freeze)',
        status: 'Approved'
      },
      {
        id: 6,
        bid: 'BID-2026-8806',
        date: '2026-10-27',
        coldStore: 'Main Cold Storage Plant 1',
        stockBelongsTo: 'Own Stock (Devi Fisheries)',
        species: 'Vannamei (Litopenaeus vannamei)',
        typeProduct: 'Peeled & Deveined (PD)',
        freezingType: 'IQF (Individually Quick Frozen)',
        variety: 'Vannamei PD IQF',
        grade: '41/50',
        soaking: 'No (Unsoaked)',
        packingType: 'MASTER',
        packingStyle: '6 X 1.8 KGS',
        category: 'Raw Frozen',
        productCategory: 'Raw Frozen',
        abStatus: 'PASSED (AB Negative)',
        poNumber: 'PO-2026-4375',
        lotNumber: 'LOT-VM-980',
        mcs: 220,
        loose: 15,
        store: 'Main Cold Storage Plant 1',
        status: 'Pending Approval'
      }
    ];

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Inward Approval</h1>
          </div>
        </div>

        <!-- Collapsible Search & Filter Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button 
                type="button" 
                id="ia-filter-reset-btn" 
                class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Reset All Filters" 
                aria-label="Reset All Filters"
              >
                <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button 
                type="button" 
                id="ia-filter-toggle-btn" 
                class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" 
                style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
                title="Hide Filter" 
                aria-label="Hide Filter"
              >
                <svg id="ia-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Form Input Fields (Standard ERP 4-Column Grid) -->
          <div id="ia-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. COLD STORES -->
            <div>
              <label for="ia-filter-cold-store" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COLD STORES</label>
              <select id="ia-filter-cold-store" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Cold Stores</option>
                <option value="Chamber #1 (IQF)">Chamber #1 (IQF)</option>
                <option value="Chamber #2 (Plate)">Chamber #2 (Plate)</option>
                <option value="Chamber #3 (Blast)">Chamber #3 (Blast)</option>
                <option value="Chamber #4 (Deep Freeze)">Chamber #4 (Deep Freeze)</option>
                <option value="Main Cold Storage Plant 1">Main Cold Storage Plant 1</option>
              </select>
            </div>

            <!-- 2. STOCK BELONGS TO -->
            <div>
              <label for="ia-filter-stock-belongs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK BELONGS TO</label>
              <select id="ia-filter-stock-belongs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Stock</option>
                <option value="Own Stock (Devi Fisheries)">Own Stock (Devi Fisheries)</option>
                <option value="Devi Fisheries Ltd (DFL)">Devi Fisheries Ltd (DFL)</option>
                <option value="Job Work / Processing">Job Work / Processing</option>
                <option value="Third Party Trading">Third Party Trading</option>
              </select>
            </div>

            <!-- 3. PRODUCTION DATE -->
            <div>
              <label for="ia-filter-prod-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE</label>
              <input type="date" id="ia-filter-prod-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
            </div>

            <!-- 4. PO NO -->
            <div>
              <label for="ia-filter-po-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NO</label>
              <input type="text" id="ia-filter-po-no" placeholder="Search PO Number" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
            </div>

            <!-- 5. SPECIES -->
            <div>
              <label for="ia-filter-species" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SPECIES</label>
              <select id="ia-filter-species" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Species</option>
                <option value="Vannamei (Litopenaeus vannamei)">Vannamei (Litopenaeus vannamei)</option>
                <option value="Black Tiger (Penaeus monodon)">Black Tiger (Penaeus monodon)</option>
                <option value="Sea White (Penaeus indicus)">Sea White (Penaeus indicus)</option>
                <option value="Freshwater Scampi (Macrobrachium rosenbergii)">Freshwater Scampi (Macrobrachium rosenbergii)</option>
              </select>
            </div>

            <!-- 6. TYPE PRODUCT -->
            <div>
              <label for="ia-filter-type-product" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TYPE PRODUCT</label>
              <select id="ia-filter-type-product" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Product Types</option>
                <option value="Head Less Shell On (HLSO)">Head Less Shell On (HLSO)</option>
                <option value="Peeled & Deveined (PD)">Peeled & Deveined (PD)</option>
                <option value="Peeled & Deveined Tail On (PDTO)">Peeled & Deveined Tail On (PDTO)</option>
                <option value="Easy Peel (EZP)">Easy Peel (EZP)</option>
              </select>
            </div>

            <!-- 7. FREEZING TYPE -->
            <div>
              <label for="ia-filter-freezing-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE</label>
              <select id="ia-filter-freezing-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Freezing Types</option>
                <option value="IQF (Individually Quick Frozen)">IQF (Individually Quick Frozen)</option>
                <option value="Block Frozen">Block Frozen</option>
                <option value="Plate Freezing">Plate Freezing</option>
              </select>
            </div>

            <!-- 8. VARIETY -->
            <div>
              <label for="ia-filter-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
              <select id="ia-filter-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Varieties</option>
                <option value="Vannamei PD IQF">Vannamei PD IQF</option>
                <option value="Black Tiger Block">Black Tiger Block</option>
                <option value="Sea Pearl EZP">Sea Pearl EZP</option>
                <option value="Scampi Block">Scampi Block</option>
                <option value="Vannamei Cooked PDTO">Vannamei Cooked PDTO</option>
              </select>
            </div>

            <!-- 9. GRADE -->
            <div>
              <label for="ia-filter-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
              <select id="ia-filter-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Grades</option>
                <option value="16/20">16/20</option>
                <option value="21/25">21/25</option>
                <option value="26/30">26/30</option>
                <option value="31/40">31/40</option>
                <option value="41/50">41/50</option>
                <option value="U/15">U/15</option>
              </select>
            </div>

            <!-- 10. PACKING STYLE -->
            <div>
              <label for="ia-filter-packing-style" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING STYLE</label>
              <select id="ia-filter-packing-style" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Packing Styles</option>
                <option value="6 X 1.8 KGS">6 X 1.8 KGS</option>
                <option value="6 X 2 KGS">6 X 2 KGS</option>
                <option value="10 X 1 KG">10 X 1 KG</option>
                <option value="5 X 2 KGS">5 X 2 KGS</option>
              </select>
            </div>

            <!-- 11. PRODUCT CATEGORY -->
            <div>
              <label for="ia-filter-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY</label>
              <select id="ia-filter-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Categories</option>
                <option value="Raw Frozen">Raw Frozen</option>
                <option value="Cooked Frozen">Cooked Frozen</option>
                <option value="Value Added">Value Added</option>
              </select>
            </div>

            <!-- 12. STOCK STATUS -->
            <div>
              <label for="ia-filter-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK STATUS</label>
              <select id="ia-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="">All Statuses</option>
                <option value="Pending Approval">Pending Approval</option>
                <option value="Approved">Approved</option>
                <option value="Under Inspection">Under Inspection</option>
              </select>
            </div>

            <!-- 13. Search Action Slot (Standard ERP Position) -->
            <div class="flex items-end">
              <button 
                type="button" 
                id="ia-filter-search-btn" 
                class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                title="Search Filter Records"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="cs-inward-approval-table"></div>
      </div>
    `;

    // Initialize DataTable
    let dataTableInstance = null;

    const initTable = (data) => {
      const tableWrapper = container.querySelector('#cs-inward-approval-table');
      if (!tableWrapper) return;
      tableWrapper.innerHTML = '';

      dataTableInstance = new DataTable({
        containerId: 'cs-inward-approval-table',
        tableTitle: 'Inward Stock Approvals',
        keyField: 'bid',
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showInwardApprovalDetailModal(row),
        columns: [
          // 1. S.No
          {
            field: 'id',
            header: 'S.No',
            render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>`
          },

          // 2. BID
          {
            field: 'bid',
            header: 'BID',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#0284C7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>`
          },

          // 3. Date
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: (v) => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium">${v}</span>`
          },

          // 4. Variety
          {
            field: 'variety',
            header: 'Variety',
            sortable: true,
            render: (v) => `<span class="font-medium text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },

          // 5. Grade
          {
            field: 'grade',
            header: 'Grade',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#0284C7] whitespace-nowrap">${v}</span>`
          },

          // 6. Soaking
          {
            field: 'soaking',
            header: 'Soaking',
            sortable: true,
            render: (v) => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },

          // 7. Packing Type
          {
            field: 'packingType',
            header: 'Packing Type',
            sortable: true,
            render: (v) => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294] whitespace-nowrap">${v}</span>`
          },

          // 8. Packing style
          {
            field: 'packingStyle',
            header: 'Packing style',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },

          // 9. Category
          {
            field: 'category',
            header: 'Category',
            sortable: true,
            render: (v) => `<span class="whitespace-nowrap text-xs text-[#172B4D]">${v}</span>`
          },

          // 10. AB Status
          {
            field: 'abStatus',
            header: 'AB Status',
            sortable: true,
            render: (v) => {
              let cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              if (v.includes('TESTING') || v.includes('PENDING')) cls = 'bg-[#FFF0B3] text-[#172B4D] border-[#FFE380]';
              if (v.includes('FAIL') || v.includes('POSITIVE')) cls = 'bg-[#FFEBE6] text-[#DE350B] border-[#FFBDAD]';
              return `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${cls} whitespace-nowrap">${v}</span>`;
            }
          },

          // 11. Po Number
          {
            field: 'poNumber',
            header: 'Po Number',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },

          // 12. Lot Number
          {
            field: 'lotNumber',
            header: 'Lot Number',
            sortable: true,
            render: (v) => `<span class="font-mono text-xs text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BEE3F8] whitespace-nowrap">${v}</span>`
          },

          // 13. MCS
          {
            field: 'mcs',
            header: 'MCS',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs text-[#00875A]">${Number(v).toLocaleString()}</span>`
          },

          // 14. Loose
          {
            field: 'loose',
            header: 'Loose',
            sortable: true,
            render: (v) => `<span class="font-mono font-bold text-xs ${v > 0 ? 'text-[#D97706]' : 'text-[#A5ADBA]'}">${Number(v).toLocaleString()}</span>`
          },

          // 15. Store
          {
            field: 'store',
            header: 'Store',
            sortable: true,
            render: (v) => `<span class="text-xs text-[#172B4D] font-medium whitespace-nowrap">${v}</span>`
          },

          // 16. Status
          {
            field: 'status',
            header: 'Status',
            sortable: true,
            render: (v) => {
              let cls = 'bg-[#FFF0B3] text-[#172B4D] border-[#FFE380]';
              if (v === 'Approved') cls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              if (v === 'Under Inspection') cls = 'bg-[#E0F2FE] text-[#0284C7] border-[#B3D4FF]';
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${cls} whitespace-nowrap">${v}</span>`;
            }
          }
        ],
        actionsTitle: 'Action',
        actions: [
          {
            label: 'Approve Inward',
            icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Approve Inward Stock Intake',
                message: `Confirm inward intake approval for BID <strong>${row.bid}</strong> (${row.variety}, Grade: ${row.grade}, Store: ${row.store}, MCS: ${row.mcs})?`,
                confirmText: 'Approve Inward',
                onConfirm: () => {
                  row.status = 'Approved';
                  initTable(data);
                  Toast.show(`Inward stock ${row.bid} successfully approved!`, 'success');
                }
              });
            }
          }
        ],
        data
      });
    };

    // Initial render
    initTable(inwardApprovalRecords);

    // Collapsible Filter Toggle
    const toggleBtn = container.querySelector('#ia-filter-toggle-btn');
    const filterBody = container.querySelector('#ia-filter-body');
    const toggleIcon = container.querySelector('#ia-filter-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isOpen = true;
      toggleBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Execute Filter Logic
    const executeFilter = () => {
      const coldStoreVal = (container.querySelector('#ia-filter-cold-store')?.value || '').trim();
      const stockBelongsVal = (container.querySelector('#ia-filter-stock-belongs')?.value || '').trim();
      const prodDateVal = (container.querySelector('#ia-filter-prod-date')?.value || '').trim();
      const poNoVal = (container.querySelector('#ia-filter-po-no')?.value || '').trim().toLowerCase();
      const speciesVal = (container.querySelector('#ia-filter-species')?.value || '').trim();
      const typeProdVal = (container.querySelector('#ia-filter-type-product')?.value || '').trim();
      const freezingVal = (container.querySelector('#ia-filter-freezing-type')?.value || '').trim();
      const varietyVal = (container.querySelector('#ia-filter-variety')?.value || '').trim();
      const gradeVal = (container.querySelector('#ia-filter-grade')?.value || '').trim();
      const packingStyleVal = (container.querySelector('#ia-filter-packing-style')?.value || '').trim();
      const categoryVal = (container.querySelector('#ia-filter-category')?.value || '').trim();
      const statusVal = (container.querySelector('#ia-filter-status')?.value || '').trim();

      const filtered = inwardApprovalRecords.filter(r => {
        if (coldStoreVal && r.coldStore !== coldStoreVal) return false;
        if (stockBelongsVal && r.stockBelongsTo !== stockBelongsVal) return false;
        if (prodDateVal && r.date !== prodDateVal) return false;
        if (poNoVal && !r.poNumber.toLowerCase().includes(poNoVal)) return false;
        if (speciesVal && r.species !== speciesVal) return false;
        if (typeProdVal && r.typeProduct !== typeProdVal) return false;
        if (freezingVal && r.freezingType !== freezingVal) return false;
        if (varietyVal && r.variety !== varietyVal) return false;
        if (gradeVal && r.grade !== gradeVal) return false;
        if (packingStyleVal && r.packingStyle !== packingStyleVal) return false;
        if (categoryVal && r.category !== categoryVal) return false;
        if (statusVal && r.status !== statusVal) return false;
        return true;
      });

      initTable(filtered);
      Toast.show(`Displaying ${filtered.length} inward record${filtered.length === 1 ? '' : 's'}`, 'info');
    };

    // Bind Search Button
    const searchBtn = container.querySelector('#ia-filter-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', executeFilter);
    }

    // Bind Reset Button
    const resetBtn = container.querySelector('#ia-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const cs = container.querySelector('#ia-filter-cold-store');
        const sb = container.querySelector('#ia-filter-stock-belongs');
        const pd = container.querySelector('#ia-filter-prod-date');
        const po = container.querySelector('#ia-filter-po-no');
        const sp = container.querySelector('#ia-filter-species');
        const tp = container.querySelector('#ia-filter-type-product');
        const fz = container.querySelector('#ia-filter-freezing-type');
        const vr = container.querySelector('#ia-filter-variety');
        const gr = container.querySelector('#ia-filter-grade');
        const ps = container.querySelector('#ia-filter-packing-style');
        const ct = container.querySelector('#ia-filter-category');
        const st = container.querySelector('#ia-filter-status');

        if (cs) cs.value = '';
        if (sb) sb.value = '';
        if (pd) pd.value = '';
        if (po) po.value = '';
        if (sp) sp.value = '';
        if (tp) tp.value = '';
        if (fz) fz.value = '';
        if (vr) vr.value = '';
        if (gr) gr.value = '';
        if (ps) ps.value = '';
        if (ct) ct.value = '';
        if (st) st.value = '';

        initTable(inwardApprovalRecords);
        Toast.show('Inward approval search filters reset to default', 'info');
      });
    }
  },

  // 5c. INWARD APPROVAL DETAIL MODAL
  showInwardApprovalDetailModal(row) {
    Modal.open({
      title: `Inward Stock Details: ${row.bid}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">BATCH IDENTIFICATION (BID)</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.bid}</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">APPROVAL STATUS</span>
              <div>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.status === 'Approved' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${row.status}</span>
              </div>
            </div>
          </div>

          <!-- Reference & Order Information Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">INTAKE DATE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.date}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO NUMBER</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.poNumber}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">LOT NUMBER</span>
              <span class="font-mono font-semibold text-xs text-[#0284C7]">${row.lotNumber}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STOCK BELONGS TO</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.stockBelongsTo}</span>
            </div>
          </div>

          <!-- Product & Processing Specifications Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">VARIETY</span>
              <span class="font-bold text-xs text-[#172B4D]">${row.variety}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GRADE</span>
              <span class="font-mono font-bold text-xs text-[#0284C7]">${row.grade}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SOAKING</span>
              <span class="font-semibold text-xs text-[#5E6C84]">${row.soaking}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">ANTIBIOTIC (AB) STATUS</span>
              <span class="font-bold text-xs ${row.abStatus.includes('PASS') ? 'text-[#00875A]' : 'text-[#D97706]'}">${row.abStatus}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING TYPE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.packingType}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING STYLE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.packingStyle}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">CATEGORY</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.category}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">COLD STORE</span>
              <span class="font-semibold text-xs text-[#0284C7]">${row.store}</span>
            </div>
          </div>

          <!-- Quantity Breakdown Cards -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#FAFBFC] p-3 border border-[#DFE1E6] rounded-lg text-center">
            <div class="bg-white p-3 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL MCS</div>
              <div class="text-xl font-black text-[#00875A] font-mono mt-0.5">${Number(row.mcs).toLocaleString()}</div>
            </div>
            <div class="bg-white p-3 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">LOOSE PACKETS</div>
              <div class="text-xl font-black text-[#D97706] font-mono mt-0.5">${Number(row.loose).toLocaleString()}</div>
            </div>
            <div class="bg-white p-3 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">STORAGE LOCATION</div>
              <div class="text-sm font-black text-[#172B4D] mt-1">${row.store}</div>
            </div>
          </div>
        </div>
      `,
      footerButtons: [{ label: 'Close', type: 'secondary', onClick: (modal) => modal.close() }]
    });
  },

  // 5d. STOCK APPROVALS - BACKWARD COMPATIBILITY
  renderStockApprovals(container) {
    this.renderAdminDailyProductionList(container);
  },

  // 6. IBT
  renderIbt(container) {
    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D]">Inter-Branch Transfers (IBT)</h1>
        </div>
        <div>
          <button
            type="button"
            id="ibt-btn-create-request"
            class="btn-primary px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs hover:shadow cursor-pointer"
            title="Create IBT Transfer Request"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Create Request</span>
          </button>
        </div>
      </div>

      <!-- Search & Filters Card -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>

          <!-- Filter Controls: Reset & Toggle Open/Close -->
          <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
            <button type="button" id="ibt-filter-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset All Filters" aria-label="Reset All Filters">
              <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </button>

            <button type="button" id="ibt-filter-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
              <svg id="ibt-filter-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>
        </div>

        <!-- Form Input Fields (Standard 4-Column Grid) -->
        <div id="ibt-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
          <!-- 1. COLD STORES -->
          <div>
            <label for="ibt-filter-coldstore" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COLD STORES</label>
            <select id="ibt-filter-coldstore" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="">All Cold Stores</option>
              <option value="Chamber #1 (IQF)">Chamber #1 (IQF)</option>
              <option value="Chamber #2 (Plate)">Chamber #2 (Plate)</option>
              <option value="Chamber #3 (Blast)">Chamber #3 (Blast)</option>
              <option value="Chamber #4 (Deep Freeze)">Chamber #4 (Deep Freeze)</option>
              <option value="Main Cold Storage Plant 1">Main Cold Storage Plant 1</option>
            </select>
          </div>

          <!-- 2. PRODUCT CATEGORY -->
          <div>
            <label for="ibt-filter-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY</label>
            <select id="ibt-filter-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="">All Product Categories</option>
              <option value="Raw Frozen">Raw Frozen</option>
              <option value="Cooked Frozen">Cooked Frozen</option>
              <option value="Blanched Frozen">Blanched Frozen</option>
              <option value="Value Added">Value Added</option>
            </select>
          </div>

          <!-- 3. YEAR -->
          <div>
            <label for="ibt-filter-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">YEAR</label>
            <select id="ibt-filter-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="">All Years</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>

          <!-- 4. MONTH -->
          <div>
            <label for="ibt-filter-month" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">MONTH</label>
            <select id="ibt-filter-month" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="">All Months</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>

          <!-- 5. IBT TYPE -->
          <div>
            <label for="ibt-filter-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">IBT TYPE</label>
            <select id="ibt-filter-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="">All IBT Types</option>
              <option value="Inter-Plant Transfer">Inter-Plant Transfer</option>
              <option value="Intra-Plant Relocation">Intra-Plant Relocation</option>
              <option value="Inward Transfer">Inward Transfer</option>
              <option value="Outward Transfer">Outward Transfer</option>
            </select>
          </div>

          <!-- Search Action Button Slot -->
          <div class="flex items-end">
            <button type="button" id="ibt-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]" title="Search Filter Records">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Data Table Card -->
      <div id="cs-ibt-table"></div>
    `;

    const initTable = (data) => {
      new DataTable({
        containerId: 'cs-ibt-table',
        tableTitle: 'Inter-Branch Stock Transfers',
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => this.showIbtDetailModal(row),
        columns: [
          { field: 'id', header: 'S.No', render: (v, r, idx) => idx + 1 },
          { field: 'orderNumber', header: 'Order Number', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7]">${v || '-'}</span>` },
          { field: 'orderDate', header: 'Order Date', sortable: true, render: v => `<span class="whitespace-nowrap">${v || '-'}</span>` },
          { field: 'fromStore', header: 'From Store', sortable: true, render: v => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
          { field: 'toStore', header: 'To Store', sortable: true, render: v => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
          { field: 'ibtType', header: 'IBT Type', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6] whitespace-nowrap">${v || 'Inter-Plant Transfer'}</span>` },
          { field: 'totalMcs', header: 'Total Mcs', sortable: true, render: v => `<span class="font-mono font-bold text-[#00875A]">${Number(v || 0).toLocaleString()}</span>` },
          { field: 'totalNoOfBags', header: 'Total NoOf Bags', sortable: true, render: v => `<span class="font-mono font-bold text-[#172B4D]">${Number(v || 0).toLocaleString()}</span>` },
          {
            field: 'status',
            header: 'Status',
            sortable: true,
            render: v => {
              let badgeCls = 'bg-[#DEEBFF] text-[#0747A6] border-[#B3D4FF]';
              if (v === 'Received & Stored' || v === 'Approved' || v === 'Completed') badgeCls = 'bg-[#E3FCEF] text-[#006644] border-[#ABF5D1]';
              if (v === 'Gate Pass Dispatched' || v === 'In Transit') badgeCls = 'bg-[#FFF0B3] text-[#172B4D] border-[#FFE380]';
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeCls} whitespace-nowrap">${v || '-'}</span>`;
            }
          }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'View Details',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => this.showIbtDetailModal(row)
          },
          {
            label: 'Print Gate Pass',
            icon: `<svg class="w-4 h-4 text-[#403294]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
            onClick: (row) => {
              Toast.show(`Printing IBT Gate Pass document for ${row.orderNumber || row.ibtCode}...`, 'info');
            }
          }
        ],
        data
      });
    };

    // Initial render
    initTable(this.state.ibtTransfers);

    // Collapsible Filter Toggle
    const toggleBtn = container.querySelector('#ibt-filter-toggle-btn');
    const filterBody = container.querySelector('#ibt-filter-body');
    const toggleIcon = container.querySelector('#ibt-filter-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isOpen = true;
      toggleBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Execute Search Filter
    const executeFilter = () => {
      const coldStoreVal = (container.querySelector('#ibt-filter-coldstore')?.value || '').trim();
      const categoryVal = (container.querySelector('#ibt-filter-category')?.value || '').trim();
      const yearVal = (container.querySelector('#ibt-filter-year')?.value || '').trim();
      const monthVal = (container.querySelector('#ibt-filter-month')?.value || '').trim();
      const typeVal = (container.querySelector('#ibt-filter-type')?.value || '').trim();

      const filtered = this.state.ibtTransfers.filter(r => {
        if (coldStoreVal && (r.fromStore !== coldStoreVal && r.toStore !== coldStoreVal && r.coldStore !== coldStoreVal)) return false;
        if (categoryVal && (r.productCategory || 'Raw Frozen') !== categoryVal) return false;
        const d = r.orderDate || r.transferDate;
        if (yearVal && d && !d.startsWith(yearVal)) return false;
        if (monthVal && d && d.substring(5, 7) !== monthVal) return false;
        if (typeVal && (r.ibtType || 'Inter-Plant Transfer') !== typeVal) return false;
        return true;
      });

      initTable(filtered);
      Toast.show(`Displaying ${filtered.length} IBT record${filtered.length === 1 ? '' : 's'}`, 'info');
    };

    // Bind Search Button
    const searchBtn = container.querySelector('#ibt-filter-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', executeFilter);
    }

    // Bind Reset Button
    const resetBtn = container.querySelector('#ibt-filter-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const cs = container.querySelector('#ibt-filter-coldstore');
        const cat = container.querySelector('#ibt-filter-category');
        const yr = container.querySelector('#ibt-filter-year');
        const mo = container.querySelector('#ibt-filter-month');
        const tp = container.querySelector('#ibt-filter-type');

        if (cs) cs.value = '';
        if (cat) cat.value = '';
        if (yr) yr.value = '';
        if (mo) mo.value = '';
        if (tp) tp.value = '';

        initTable(this.state.ibtTransfers);
        Toast.show('IBT filters reset to default', 'info');
      });
    }

    // Create Request Button Click Handler
    const createReqBtn = container.querySelector('#ibt-btn-create-request');
    if (createReqBtn) {
      createReqBtn.addEventListener('click', () => {
        this.showCreateIbtRequestModal(() => initTable(this.state.ibtTransfers));
      });
    }
  },

  // 6b. IBT DETAIL MODAL WITH ITEM DATA TABLE
  showIbtDetailModal(row) {
    const orderNo = row.orderNumber || row.ibtCode || ('IBT-' + row.id);
    const dateVal = row.orderDate || row.transferDate || '2026-10-28';
    const fromStore = row.fromStore || 'Chamber #1 (IQF)';
    const toStore = row.toStore || 'Chamber #2 (Plate)';
    const category = row.productCategory || 'Raw Frozen';

    const items = row.items || [
      {
        id: 1,
        sNo: 1,
        poNo: 'PO-2026-8819',
        transferDate: dateVal,
        variety: 'Vannamei (White Shrimp)',
        grades: '31/40',
        mcs: Math.round((row.totalMcs || 480) * 0.55),
        looseBags: 0,
        packingStyle: '10x1kg Net',
        packingType: 'Master Cartons',
        category: category,
        storeName: fromStore,
        rackName: 'Rack A-04',
        kgs: ((row.totalMcs || 480) * 0.55 * 10),
        reason: 'Stock Relocation for Order Dispatch'
      },
      {
        id: 2,
        sNo: 2,
        poNo: 'PO-2026-8820',
        transferDate: dateVal,
        variety: 'Black Tiger Block',
        grades: '16/20',
        mcs: Math.round((row.totalMcs || 480) * 0.45),
        looseBags: 14,
        packingStyle: '6x2kg Block',
        packingType: 'Block Cartons',
        category: category,
        storeName: toStore,
        rackName: 'Rack B-12',
        kgs: ((row.totalMcs || 480) * 0.45 * 12),
        reason: 'Chamber Balancing & Pre-cooling'
      },
      {
        id: 3,
        sNo: 3,
        poNo: 'PO-2026-8824',
        transferDate: dateVal,
        variety: 'Sea Pearl Cooked PDTO',
        grades: '26/30',
        mcs: 80,
        looseBags: 6,
        packingStyle: '5x2lb Pouch',
        packingType: 'Retail Bags',
        category: 'Cooked Frozen',
        storeName: fromStore,
        rackName: 'Rack C-02',
        kgs: 800.0,
        reason: 'Export Buffer Staging'
      }
    ];

    Modal.open({
      title: `Inter-Branch Transfer Details: ${orderNo}`,
      size: 'full',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex flex-wrap items-center justify-between gap-3">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">ORDER NUMBER</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${orderNo}</div>
            </div>
            <div class="flex items-center gap-4">
              <div>
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">IBT TYPE</span>
                <div>
                  <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294] border border-[#D3C5FF]">${row.ibtType || 'Inter-Plant Transfer'}</span>
                </div>
              </div>
              <div class="text-right">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">STATUS</span>
                <div>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.status === 'Received & Stored' ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]' : 'bg-[#DEEBFF] text-[#0747A6] border border-[#B3D4FF]'}">${row.status || 'In Transit'}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Order Summary Meta Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">ORDER DATE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${dateVal}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">FROM STORE</span>
              <span class="font-semibold text-xs text-[#0284C7]">${fromStore}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TO STORE</span>
              <span class="font-semibold text-xs text-[#00875A]">${toStore}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL MCS / BAGS</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${Number(row.totalMcs || 0).toLocaleString()} Mcs / ${Number(row.totalNoOfBags || 0).toLocaleString()} Bags</span>
            </div>
          </div>

          <!-- Line Items Section Heading -->
          <div class="flex items-center justify-between pt-1">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              <span>Transferred Stock Items (${items.length})</span>
            </h4>
          </div>

          <!-- Itemized Table Container -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3 shadow-xs">
            <div id="cs-ibt-detail-table"></div>
          </div>
        </div>
      `
    });

    // Mount DataTable for Line Items with the exact 15 columns
    new DataTable({
      containerId: 'cs-ibt-detail-table',
      tableTitle: 'Transferred Stock Items',
      searchable: true,
      exportable: true,
      pageSize: 5,
      columns: [
        // 1. S.NO
        { field: 'sNo', header: 'S.NO', render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>` },
        // 2. PoNo
        { field: 'poNo', header: 'PoNo', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7] whitespace-nowrap">${v || '-'}</span>` },
        // 3. Transfer Date
        { field: 'transferDate', header: 'Transfer Date', sortable: true, render: v => `<span class="whitespace-nowrap">${v || '-'}</span>` },
        // 4. Variety
        { field: 'variety', header: 'Variety', sortable: true, render: v => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
        // 5. Grades
        { field: 'grades', header: 'Grades', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7] whitespace-nowrap">${v || '-'}</span>` },
        // 6. Mcs
        { field: 'mcs', header: 'Mcs', sortable: true, render: v => `<span class="font-mono font-bold text-[#00875A]">${Number(v || 0).toLocaleString()}</span>` },
        // 7. Loose Bags
        { field: 'looseBags', header: 'Loose Bags', sortable: true, render: v => `<span class="font-mono font-bold text-[#D97706]">${Number(v || 0).toLocaleString()}</span>` },
        // 8. Packing Style
        { field: 'packingStyle', header: 'Packing Style', sortable: true, render: v => `<span class="whitespace-nowrap">${v || '-'}</span>` },
        // 9. Packing Type
        { field: 'packingType', header: 'Packing Type', sortable: true, render: v => `<span class="whitespace-nowrap">${v || '-'}</span>` },
        // 10. Category
        { field: 'category', header: 'Category', sortable: true, render: v => `<span class="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#EBF8FF] text-[#0284C7] whitespace-nowrap">${v || '-'}</span>` },
        // 11. Store Name
        { field: 'storeName', header: 'Store Name', sortable: true, render: v => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
        // 12. Rack Name
        { field: 'rackName', header: 'Rack Name', sortable: true, render: v => `<span class="font-mono font-bold text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>` },
        // 13. Kgs
        { field: 'kgs', header: 'Kgs', sortable: true, render: v => `<span class="font-mono font-bold text-[#00875A] whitespace-nowrap">${Number(v || 0).toFixed(2)}</span>` },
        // 14. Reason
        { field: 'reason', header: 'Reason', sortable: true, render: v => `<span class="text-[#5E6C84] text-[11px] whitespace-nowrap">${v || 'Inter-Branch Stock Balancing'}</span>` }
      ],
      actionsTitle: 'Actions',
      actions: [
        {
          label: 'Print Pallet Tag',
          icon: `<svg class="w-4 h-4 text-[#403294]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
          onClick: (item) => {
            Toast.show(`Printing barcode tag for PO ${item.poNo} (${item.grades})...`, 'info');
          }
        },
        {
          label: 'Verify Location',
          icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
          onClick: (item) => {
            Toast.show(`Verified: ${item.storeName} - ${item.rackName}`, 'success');
          }
        }
      ],
      data: items
    });
  },

  // 6c. CREATE IBT REQUEST MODAL WITH FILTER FORM & RESULTS TABLE
  showCreateIbtRequestModal(onSuccessCallback) {
    Modal.open({
      title: 'Create Inter-Branch Transfer Request',
      size: 'full',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Filter Card (13 Input Fields + Search Button) -->
          <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs transition-all duration-200">
            <div class="flex items-center justify-between pb-1">
              <div class="flex items-center gap-2">
                <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                <h3 class="text-xs font-bold text-[#172B4D]">Search Available Stock for Transfer</h3>
              </div>
              <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
                <button type="button" id="ibt-cr-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset All Filters" aria-label="Reset All Filters">
                  <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </button>
                <button type="button" id="ibt-cr-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
                  <svg id="ibt-cr-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
            </div>

            <!-- Form Fields Grid (13 User-Specified Inputs + Search Button) -->
            <div id="ibt-cr-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
              <!-- 1. COLD STORES -->
              <div>
                <label for="ibt-cr-coldstore" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COLD STORES</label>
                <select id="ibt-cr-coldstore" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                  <option value="ALL">All Cold Stores</option>
                  <option value="Chamber #1 (IQF)">Chamber #1 (IQF)</option>
                  <option value="Chamber #2 (Block)">Chamber #2 (Block)</option>
                  <option value="Vault #3 Staging">Vault #3 Staging</option>
                  <option value="Chamber #3 (Blast)">Chamber #3 (Blast)</option>
                  <option value="Main Cold Storage Plant 1">Main Cold Storage Plant 1</option>
                </select>
              </div>

              <!-- 2. BLOCKS -->
              <div>
                <label for="ibt-cr-blocks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BLOCKS</label>
                <select id="ibt-cr-blocks" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                  <option value="ALL">All Blocks</option>
                  <option value="Block A">Block A</option>
                  <option value="Block B">Block B</option>
                  <option value="Block C">Block C</option>
                  <option value="Block D">Block D</option>
                </select>
              </div>

              <!-- 3. PO NUMBER -->
              <div>
                <label for="ibt-cr-pono" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NUMBER</label>
                <input type="text" id="ibt-cr-pono" placeholder="Enter PO Number..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono text-[#172B4D]">
              </div>

              <!-- 4. PRODUCT * -->
              <div>
                <label for="ibt-cr-product" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT <span class="text-[#DE350B] font-bold">*</span></label>
                <select id="ibt-cr-product" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
                  <option value="ALL">All Products</option>
                  <option value="Vannamei PD IQF">Vannamei PD IQF</option>
                  <option value="Black Tiger Block Frozen">Black Tiger Block Frozen</option>
                  <option value="Sea Pearl Cooked PDTO">Sea Pearl Cooked PDTO</option>
                  <option value="Scampi Headless Block">Scampi Headless Block</option>
                  <option value="Vannamei Easy Peel Blanched">Vannamei Easy Peel Blanched</option>
                  <option value="Black Tiger HOSO IQF">Black Tiger HOSO IQF</option>
                  <option value="Cooked Tail-On Butterfly">Cooked Tail-On Butterfly</option>
                  <option value="Vannamei HLSO IQF">Vannamei HLSO IQF</option>
                </select>
              </div>

              <!-- 5. GRADE -->
              <div>
                <label for="ibt-cr-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
                <select id="ibt-cr-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                  <option value="ALL">All Grades</option>
                  <option value="16/20">16/20</option>
                  <option value="21/25">21/25</option>
                  <option value="26/30">26/30</option>
                  <option value="31/40">31/40</option>
                  <option value="41/50">41/50</option>
                  <option value="11/15">11/15</option>
                </select>
              </div>

              <!-- 6. VARIETY -->
              <div>
                <label for="ibt-cr-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
                <select id="ibt-cr-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                  <option value="ALL">All Varieties</option>
                  <option value="Vannamei (White Shrimp)">Vannamei (White Shrimp)</option>
                  <option value="Black Tiger (Monodon)">Black Tiger (Monodon)</option>
                  <option value="Scampi (Macrobrachium)">Scampi (Macrobrachium)</option>
                  <option value="Sea Pearl Cooked PDTO">Sea Pearl Cooked PDTO</option>
                </select>
              </div>

              <!-- 7. PACKING STYLE -->
              <div>
                <label for="ibt-cr-packingstyle" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING STYLE</label>
                <select id="ibt-cr-packingstyle" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                  <option value="ALL">All Packing Styles</option>
                  <option value="10x1kg Net">10x1kg Net</option>
                  <option value="6x2kg Block">6x2kg Block</option>
                  <option value="5x2kg IQF Poly">5x2kg IQF Poly</option>
                  <option value="10x2lb Pouch">10x2lb Pouch</option>
                </select>
              </div>

              <!-- 8. PACKING TYPE -->
              <div>
                <label for="ibt-cr-packingtype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING TYPE</label>
                <select id="ibt-cr-packingtype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                  <option value="ALL">All Packing Types</option>
                  <option value="Master Cartons">Master Cartons</option>
                  <option value="6x2kg Block">6x2kg Block</option>
                  <option value="Dummy Cartons">Dummy Cartons</option>
                  <option value="10x2lb Pouch">10x2lb Pouch</option>
                  <option value="5x2kg IQF Poly">5x2kg IQF Poly</option>
                </select>
              </div>

              <!-- 9. SPECIES -->
              <div>
                <label for="ibt-cr-species" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SPECIES</label>
                <select id="ibt-cr-species" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                  <option value="ALL">All Species</option>
                  <option value="Litopenaeus Vannamei">Litopenaeus Vannamei</option>
                  <option value="Penaeus Monodon">Penaeus Monodon</option>
                  <option value="Macrobrachium rosenbergii">Macrobrachium rosenbergii</option>
                </select>
              </div>

              <!-- 10. FREEZING TYPE -->
              <div>
                <label for="ibt-cr-freezingtype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE</label>
                <select id="ibt-cr-freezingtype" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                  <option value="ALL">All Freezing Types</option>
                  <option value="IQF Tunnel">IQF Tunnel</option>
                  <option value="Contact Plate Freezer">Contact Plate Freezer</option>
                  <option value="Blast Freezer">Blast Freezer</option>
                  <option value="Semi-IQF Spiral">Semi-IQF Spiral</option>
                </select>
              </div>

              <!-- 11. TYPE OF PRODUCT -->
              <div>
                <label for="ibt-cr-typeofproduct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TYPE OF PRODUCT</label>
                <select id="ibt-cr-typeofproduct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                  <option value="ALL">All Types</option>
                  <option value="Raw Frozen">Raw Frozen</option>
                  <option value="Cooked Frozen">Cooked Frozen</option>
                  <option value="Blanched Frozen">Blanched Frozen</option>
                  <option value="Value-Added">Value-Added</option>
                </select>
              </div>

              <!-- 12. ABSTATUS -->
              <div>
                <label for="ibt-cr-abstatus" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ABSTATUS</label>
                <select id="ibt-cr-abstatus" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                  <option value="ALL">All AB Status</option>
                  <option value="PASSED (AB Negative)">PASSED (AB Negative)</option>
                  <option value="UNDER TEST">UNDER TEST</option>
                  <option value="AWAITING LAB">AWAITING LAB</option>
                </select>
              </div>

              <!-- 13. PRODUCT CATEGORY -->
              <div>
                <label for="ibt-cr-productcategory" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY</label>
                <select id="ibt-cr-productcategory" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                  <option value="ALL">All Categories</option>
                  <option value="Raw Frozen">Raw Frozen</option>
                  <option value="Cooked Frozen">Cooked Frozen</option>
                  <option value="Blanched Frozen">Blanched Frozen</option>
                  <option value="Value-Added">Value-Added</option>
                </select>
              </div>

              <!-- 14. Action Slot: Search & IBT OUT Buttons -->
              <div class="flex items-end gap-2 flex-wrap">
                <button 
                  type="button" 
                  id="ibt-cr-search-btn" 
                  class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]"
                  title="Search Filter Records"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span>Search</span>
                </button>
                <button 
                  type="button" 
                  id="ibt-cr-out-btn" 
                  class="btn-primary px-4 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px] bg-[#00875A] hover:bg-[#006644] text-white border-0"
                  title="Initiate IBT OUT Transfer"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                  <span>IBT OUT</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Stock Results Data Table Container -->
          <div id="cs-ibt-create-req-table"></div>
        </div>
      `
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    // Collapsible Filter Toggle inside modal
    const toggleBtn = modalRoot.querySelector('#ibt-cr-toggle-btn');
    const filterBody = modalRoot.querySelector('#ibt-cr-filter-body');
    const toggleIcon = modalRoot.querySelector('#ibt-cr-toggle-icon');

    if (toggleBtn && filterBody && toggleIcon) {
      let isOpen = true;
      toggleBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    let lastSearchResults = [];

    // Table render function with all 21 user-specified columns
    const renderReqTable = (data, hasSearched = false) => {
      lastSearchResults = data;
      new DataTable({
        containerId: 'cs-ibt-create-req-table',
        tableTitle: hasSearched ? `Available Stock Records (${data.length})` : 'Available Stock Records',
        searchable: true,
        exportable: true,
        pageSize: 5,
        columns: [
          // 1. S.No
          { field: 'sNo', header: 'S.No', sortable: true, render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>` },
          // 2. Location
          { field: 'location', header: 'Location', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
          // 3. PO.No
          { field: 'poNo', header: 'PO.No', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7] whitespace-nowrap">${v || '-'}</span>` },
          // 4. Production Date
          { field: 'productionDate', header: 'Production Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>` },
          // 5. Transaction Date
          { field: 'transactionDate', header: 'Transaction Date', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>` },
          // 6. Variety
          { field: 'variety', header: 'Variety', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
          // 7. Grade
          { field: 'grade', header: 'Grade', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F4F5F7] text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
          // 8. Species
          { field: 'species', header: 'Species', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] italic whitespace-nowrap">${v || '-'}</span>` },
          // 9. FreezingType
          { field: 'freezingType', header: 'FreezingType', sortable: true, render: v => `<span class="text-xs text-[#172B4D] font-medium whitespace-nowrap">${v || '-'}</span>` },
          // 10. Soaking
          { field: 'soaking', header: 'Soaking', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>` },
          // 11. TypeofProduct
          { field: 'typeOfProduct', header: 'TypeofProduct', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7] whitespace-nowrap">${v || '-'}</span>` },
          // 12. Total Mcs
          { field: 'totalMcs', header: 'Total Mcs', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${Number(v || 0).toLocaleString()}</span>` },
          // 13. Total Loose Bags
          { field: 'totalLooseBags', header: 'Total Loose Bags', sortable: true, render: v => `<span class="font-mono font-semibold text-xs text-[#D97706]">${Number(v || 0).toLocaleString()}</span>` },
          // 14. Mcs
          { field: 'mcs', header: 'Mcs', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A]">${Number(v || 0).toLocaleString()}</span>` },
          // 15. Loose Bags
          { field: 'looseBags', header: 'Loose Bags', sortable: true, render: v => `<span class="font-mono font-semibold text-xs text-[#172B4D]">${Number(v || 0).toLocaleString()}</span>` },
          // 16. Packing Style
          { field: 'packingStyle', header: 'Packing Style', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>` },
          // 17. Packing Type
          { field: 'packingType', header: 'Packing Type', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>` },
          // 18. Category
          { field: 'productCategory', header: 'Category', sortable: true, render: v => `<span class="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#EBF8FF] text-[#0284C7] whitespace-nowrap">${v || '-'}</span>` },
          // 19. AB Status
          { field: 'abStatus', header: 'AB Status', sortable: true, render: v => `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${v && v.includes('PASS') ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'} whitespace-nowrap">${v || 'PASSED'}</span>` },
          // 20. Store Name
          { field: 'storeName', header: 'Store Name', sortable: true, render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
          // 21. Store Kgs
          { field: 'storeKgs', header: 'Store Kgs', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A] whitespace-nowrap">${Number(v || 0).toFixed(2)}</span>` }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'Request Transfer',
            icon: `<svg class="w-4 h-4 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Initiate Inter-Branch Transfer',
                message: `Create IBT transfer request for PO <strong>${row.poNo}</strong> (${row.variety || row.product}, Grade: ${row.grade}, Quantity: ${row.mcs} Mcs)?`,
                confirmText: 'Generate IBT Request',
                onConfirm: () => {
                  const nextId = (this.state.ibtTransfers?.length || 0) + 1;
                  const todayStr = new Date().toISOString().slice(0, 10);
                  const newTransfer = {
                    id: nextId,
                    sNo: nextId,
                    orderNumber: `IBT-2026-0${88 + nextId}`,
                    ibtCode: `IBT-2026-0${88 + nextId}`,
                    orderDate: todayStr,
                    transferDate: todayStr,
                    fromStore: row.storeName || row.coldStores || 'Chamber #1 (IQF)',
                    toStore: 'Chamber #3 (Blast)',
                    coldStore: row.storeName || row.coldStores || 'Chamber #1 (IQF)',
                    productCategory: row.productCategory || 'Raw Frozen',
                    ibtType: 'Inter-Plant Transfer',
                    sourcePlant: 'DFL UNIT-5 (JPT)',
                    destPlant: 'DFL UNIT-4 (PND)',
                    product: `${row.variety || row.product} ${row.grade}`,
                    totalMcs: row.mcs || 180,
                    totalNoOfBags: (row.mcs || 180) * 10,
                    pallets: Math.ceil((row.mcs || 180) / 40),
                    weightMt: ((row.mcs || 180) * 10) / 1000,
                    vehicleNo: 'AP 39 TB 5590',
                    status: 'In Transit',
                    items: [
                      {
                        id: 1,
                        sNo: 1,
                        poNo: row.poNo,
                        transferDate: todayStr,
                        variety: row.variety || row.product,
                        grades: row.grade,
                        mcs: row.mcs,
                        looseBags: row.looseBags || 0,
                        packingStyle: row.packingStyle,
                        packingType: row.packingType,
                        category: row.productCategory,
                        storeName: row.storeName,
                        rackName: 'Rack A-04',
                        kgs: row.storeKgs,
                        reason: 'Inter-Branch Stock Transfer Request'
                      }
                    ]
                  };
                  this.state.ibtTransfers.unshift(newTransfer);
                  Modal.close();
                  if (onSuccessCallback) onSuccessCallback();
                  Toast.show(`IBT Transfer Request ${newTransfer.orderNumber} created successfully!`, 'success');
                }
              });
            }
          }
        ],
        data
      });
    };

    // Initially render empty table per user request
    renderReqTable([], false);

    // Search button click handler
    const searchBtn = modalRoot.querySelector('#ibt-cr-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        const coldStoreVal = modalRoot.querySelector('#ibt-cr-coldstore')?.value || 'ALL';
        const blocksVal = modalRoot.querySelector('#ibt-cr-blocks')?.value || 'ALL';
        const poVal = (modalRoot.querySelector('#ibt-cr-pono')?.value || '').trim().toLowerCase();
        const productVal = modalRoot.querySelector('#ibt-cr-product')?.value || 'ALL';
        const gradeVal = modalRoot.querySelector('#ibt-cr-grade')?.value || 'ALL';
        const varietyVal = modalRoot.querySelector('#ibt-cr-variety')?.value || 'ALL';
        const packingStyleVal = modalRoot.querySelector('#ibt-cr-packingstyle')?.value || 'ALL';
        const packingTypeVal = modalRoot.querySelector('#ibt-cr-packingtype')?.value || 'ALL';
        const speciesVal = modalRoot.querySelector('#ibt-cr-species')?.value || 'ALL';
        const freezingVal = modalRoot.querySelector('#ibt-cr-freezingtype')?.value || 'ALL';
        const typeProductVal = modalRoot.querySelector('#ibt-cr-typeofproduct')?.value || 'ALL';
        const abStatusVal = modalRoot.querySelector('#ibt-cr-abstatus')?.value || 'ALL';
        const categoryVal = modalRoot.querySelector('#ibt-cr-productcategory')?.value || 'ALL';

        const pool = (this.state.stockOutList || []).map((r, i) => ({
          ...r,
          sNo: i + 1,
          totalMcs: r.totalMcs || r.mcs || 180,
          totalLooseBags: r.totalLooseBags || r.looseBags || 12,
          storeName: r.storeName || r.coldStores || 'Chamber #1 (IQF)',
          storeKgs: r.storeKgs || ((r.mcs || 180) * 10.0)
        }));

        const results = pool.filter(item => {
          if (coldStoreVal !== 'ALL' && item.coldStores !== coldStoreVal) return false;
          if (blocksVal !== 'ALL' && item.blocks !== blocksVal) return false;
          if (poVal && !(item.poNo || '').toLowerCase().includes(poVal)) return false;
          if (productVal !== 'ALL' && item.product !== productVal) return false;
          if (gradeVal !== 'ALL' && item.grade !== gradeVal) return false;
          if (varietyVal !== 'ALL' && item.variety !== varietyVal) return false;
          if (packingStyleVal !== 'ALL' && item.packingStyle !== packingStyleVal) return false;
          if (packingTypeVal !== 'ALL' && item.packingType !== packingTypeVal) return false;
          if (speciesVal !== 'ALL' && item.species !== speciesVal) return false;
          if (freezingVal !== 'ALL' && item.freezingType !== freezingVal) return false;
          if (typeProductVal !== 'ALL' && item.typeOfProduct !== typeProductVal) return false;
          if (abStatusVal !== 'ALL' && item.abStatus !== abStatusVal) return false;
          if (categoryVal !== 'ALL' && item.productCategory !== categoryVal) return false;
          return true;
        });

        renderReqTable(results, true);
        Toast.show(`Found ${results.length} stock lot(s) matching criteria`, 'info');
      });
    }

    // IBT OUT button click handler
    const outBtn = modalRoot.querySelector('#ibt-cr-out-btn');
    if (outBtn) {
      outBtn.addEventListener('click', () => {
        if (!lastSearchResults || lastSearchResults.length === 0) {
          Toast.show('Please search and view available stock lots before initiating IBT OUT.', 'warning');
          return;
        }

        const firstItem = lastSearchResults[0];
        Modal.confirm({
          title: 'Confirm IBT OUT Dispatch',
          message: `Process IBT OUT transfer for <strong>${lastSearchResults.length} available stock lot(s)</strong> (Primary: ${firstItem.poNo}, Total Mcs: ${lastSearchResults.reduce((acc, x) => acc + (x.mcs || 0), 0)})?`,
          confirmText: 'Dispatch IBT OUT',
          onConfirm: () => {
            const nextId = (this.state.ibtTransfers?.length || 0) + 1;
            const todayStr = new Date().toISOString().slice(0, 10);
            const totalMcs = lastSearchResults.reduce((acc, x) => acc + (x.mcs || 0), 0);
            const newTransfer = {
              id: nextId,
              sNo: nextId,
              orderNumber: `IBT-OUT-2026-${100 + nextId}`,
              ibtCode: `IBT-OUT-2026-${100 + nextId}`,
              orderDate: todayStr,
              transferDate: todayStr,
              fromStore: firstItem.storeName || firstItem.coldStores || 'Chamber #1 (IQF)',
              toStore: 'Chamber #3 (Blast)',
              coldStore: firstItem.storeName || firstItem.coldStores || 'Chamber #1 (IQF)',
              productCategory: firstItem.productCategory || 'Raw Frozen',
              ibtType: 'Outward Transfer',
              sourcePlant: 'DFL UNIT-5 (JPT)',
              destPlant: 'DFL UNIT-4 (PND)',
              product: `${firstItem.variety || firstItem.product} ${firstItem.grade}`,
              totalMcs: totalMcs,
              totalNoOfBags: totalMcs * 10,
              pallets: Math.ceil(totalMcs / 40),
              weightMt: (totalMcs * 10) / 1000,
              vehicleNo: 'AP 39 TB 5590',
              status: 'Gate Pass Dispatched',
              items: lastSearchResults.map((item, idx) => ({
                id: idx + 1,
                sNo: idx + 1,
                poNo: item.poNo,
                transferDate: todayStr,
                variety: item.variety || item.product,
                grades: item.grade,
                mcs: item.mcs,
                looseBags: item.looseBags || 0,
                packingStyle: item.packingStyle,
                packingType: item.packingType,
                category: item.productCategory,
                storeName: item.storeName,
                rackName: 'Rack A-04',
                kgs: item.storeKgs,
                reason: 'IBT OUT Stock Transfer'
              }))
            };
            this.state.ibtTransfers.unshift(newTransfer);
            Modal.close();
            if (onSuccessCallback) onSuccessCallback();
            Toast.show(`IBT OUT Order ${newTransfer.orderNumber} dispatched successfully!`, 'success');
          }
        });
      });
    }

    // Reset button click handler
    const resetBtn = modalRoot.querySelector('#ibt-cr-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const selects = modalRoot.querySelectorAll('#ibt-cr-filter-body select');
        selects.forEach(s => s.value = 'ALL');
        const textInputs = modalRoot.querySelectorAll('#ibt-cr-filter-body input');
        textInputs.forEach(i => i.value = '');

        renderReqTable([], false);
        Toast.show('Search filters reset to default', 'info');
      });
    }
  },

  // 7. SHIPMENT
  renderShipment(container) {
    if (!this.state.shipmentStockList) {
      this.state.shipmentStockList = [
        {
          id: 1,
          lotId: 'LOT-SHP-2026-001',
          barCode: 'BC-890123-01',
          poNumber: 'PO-2026-4401',
          productionPlant: 'DFL UNIT-5 (JPT)',
          group: 'Group A',
          variety: 'Vannamei (White Shrimp)',
          grade: '16/20',
          mcs: 240,
          bags: 2400,
          packingStyle: '10x1kg Net',
          packingType: 'Master Cartons',
          store: 'Chamber #1 (IQF)',
          location: 'RACK-A-01-B',
          slabs: 0,
          kgs: 2400.0,
          stockBelongsTo: 'Own Production (Devi Fisheries)',
          orderStatus: 'Ready for Dispatch',
          year: '2026',
          productCategory: 'Raw Frozen'
        },
        {
          id: 2,
          lotId: 'LOT-SHP-2026-002',
          barCode: 'BC-890123-02',
          poNumber: 'PO-2026-4402',
          productionPlant: 'DFL UNIT-5 (JPT)',
          group: 'Group B',
          variety: 'Black Tiger (Monodon)',
          grade: '21/25',
          mcs: 180,
          bags: 1080,
          packingStyle: '6x2kg Block',
          packingType: '6x2kg Block',
          store: 'Chamber #2 (Block)',
          location: 'RACK-B-03-A',
          slabs: 36,
          kgs: 2160.0,
          stockBelongsTo: 'Own Production (Devi Fisheries)',
          orderStatus: 'Allocated for Shipment',
          year: '2026',
          productCategory: 'Block Frozen'
        },
        {
          id: 3,
          lotId: 'LOT-SHP-2026-003',
          barCode: 'BC-890123-03',
          poNumber: 'PO-2026-4403',
          productionPlant: 'DFL UNIT-4 (PND)',
          group: 'Group C',
          variety: 'Sea Pearl Cooked PDTO',
          grade: '31/40',
          mcs: 320,
          bags: 1600,
          packingStyle: '5x2kg IQF Poly',
          packingType: '5x2kg IQF Poly',
          store: 'Vault #3 Staging',
          location: 'STAGE-V3-BAY2',
          slabs: 0,
          kgs: 3200.0,
          stockBelongsTo: 'Contract Processing',
          orderStatus: 'Under Loading',
          year: '2026',
          productCategory: 'Cooked Frozen'
        },
        {
          id: 4,
          lotId: 'LOT-SHP-2026-004',
          barCode: 'BC-890123-04',
          poNumber: 'PO-2026-4404',
          productionPlant: 'DFL UNIT-5 (JPT)',
          group: 'Group A',
          variety: 'Scampi (Macrobrachium)',
          grade: 'U/5',
          mcs: 150,
          bags: 1500,
          packingStyle: '10x1kg Net',
          packingType: 'Master Cartons',
          store: 'Chamber #3 (Blast)',
          location: 'RACK-C-02-C',
          slabs: 15,
          kgs: 1500.0,
          stockBelongsTo: 'Job Work (External)',
          orderStatus: 'Ready for Dispatch',
          year: '2026',
          productCategory: 'Raw Frozen'
        },
        {
          id: 5,
          lotId: 'LOT-SHP-2026-005',
          barCode: 'BC-890123-05',
          poNumber: 'PO-2026-4405',
          productionPlant: 'DFL UNIT-3 (VIZ)',
          group: 'Group A',
          variety: 'Vannamei (White Shrimp)',
          grade: '26/30',
          mcs: 400,
          bags: 4000,
          packingStyle: '10x2lb Pouch',
          packingType: 'Master Cartons',
          store: 'Chamber #4 (Deep Freeze)',
          location: 'RACK-D-01-A',
          slabs: 0,
          kgs: 3628.7,
          stockBelongsTo: 'Trading Division',
          orderStatus: 'Allocated for Shipment',
          year: '2026',
          productCategory: 'Value-Added'
        },
        {
          id: 6,
          lotId: 'LOT-SHP-2026-006',
          barCode: 'BC-890123-06',
          poNumber: 'PO-2026-4406',
          productionPlant: 'DFL UNIT-5 (JPT)',
          group: 'Group B',
          variety: 'Vannamei (White Shrimp)',
          grade: '31/40',
          mcs: 260,
          bags: 2600,
          packingStyle: '10x1kg Net',
          packingType: 'Master Cartons',
          store: 'Chamber #1 (IQF)',
          location: 'RACK-A-04-A',
          slabs: 0,
          kgs: 2600.0,
          stockBelongsTo: 'Farmer Direct Purchase',
          orderStatus: 'Loaded & Sealed',
          year: '2026',
          productCategory: 'Raw Frozen'
        },
        {
          id: 7,
          lotId: 'LOT-SHP-2026-007',
          barCode: 'BC-890123-07',
          poNumber: 'PO-2026-4407',
          productionPlant: 'DFL UNIT-5 (JPT)',
          group: 'Group C',
          variety: 'Black Tiger (Monodon)',
          grade: '13/15',
          mcs: 210,
          bags: 1260,
          packingStyle: '6x2kg Block',
          packingType: '6x2kg Block',
          store: 'Chamber #2 (Block)',
          location: 'RACK-B-01-D',
          slabs: 42,
          kgs: 2520.0,
          stockBelongsTo: 'Own Production (Devi Fisheries)',
          orderStatus: 'Ready for Dispatch',
          year: '2026',
          productCategory: 'Block Frozen'
        },
        {
          id: 8,
          lotId: 'LOT-SHP-2026-008',
          barCode: 'BC-890123-08',
          poNumber: 'PO-2026-4408',
          productionPlant: 'DFL UNIT-4 (PND)',
          group: 'Group A',
          variety: 'Sea Pearl Cooked PDTO',
          grade: '41/50',
          mcs: 350,
          bags: 1750,
          packingStyle: '5x2kg IQF Poly',
          packingType: '5x2kg IQF Poly',
          store: 'Main Cold Storage Plant 1',
          location: 'RACK-M-02-B',
          slabs: 0,
          kgs: 3500.0,
          stockBelongsTo: 'Contract Processing',
          orderStatus: 'Under Loading',
          year: '2025',
          productCategory: 'Cooked Frozen'
        },
        {
          id: 9,
          lotId: 'LOT-SHP-2026-009',
          barCode: 'BC-890123-09',
          poNumber: 'PO-2025-3310',
          productionPlant: 'DFL UNIT-5 (JPT)',
          group: 'Group B',
          variety: 'Vannamei (White Shrimp)',
          grade: '51/60',
          mcs: 300,
          bags: 3000,
          packingStyle: '10x1kg Net',
          packingType: 'Master Cartons',
          store: 'Chamber #1 (IQF)',
          location: 'RACK-A-02-C',
          slabs: 0,
          kgs: 3000.0,
          stockBelongsTo: 'Own Production (Devi Fisheries)',
          orderStatus: 'In Transit',
          year: '2025',
          productCategory: 'Raw Frozen'
        },
        {
          id: 10,
          lotId: 'LOT-SHP-2026-010',
          barCode: 'BC-890123-10',
          poNumber: 'PO-2025-3325',
          productionPlant: 'DFL UNIT-3 (VIZ)',
          group: 'Group A',
          variety: 'Vannamei (White Shrimp)',
          grade: '16/20',
          mcs: 190,
          bags: 1900,
          packingStyle: '10x1kg Net',
          packingType: 'Master Cartons',
          store: 'Vault #3 Staging',
          location: 'STAGE-V3-BAY4',
          slabs: 0,
          kgs: 1900.0,
          stockBelongsTo: 'Trading Division',
          orderStatus: 'Staged in Coldstore',
          year: '2025',
          productCategory: 'Blanched Frozen'
        },
        {
          id: 11,
          lotId: 'LOT-SHP-2026-011',
          barCode: 'BC-890123-11',
          poNumber: 'PO-2026-4411',
          productionPlant: 'DFL UNIT-5 (JPT)',
          group: 'Group B',
          variety: 'Black Tiger (Monodon)',
          grade: '26/30',
          mcs: 275,
          bags: 1650,
          packingStyle: '6x2kg Block',
          packingType: '6x2kg Block',
          store: 'Chamber #2 (Block)',
          location: 'RACK-B-04-C',
          slabs: 30,
          kgs: 3300.0,
          stockBelongsTo: 'Own Production (Devi Fisheries)',
          orderStatus: 'Ready for Dispatch',
          year: '2026',
          productCategory: 'Block Frozen'
        },
        {
          id: 12,
          lotId: 'LOT-SHP-2026-012',
          barCode: 'BC-890123-12',
          poNumber: 'PO-2026-4412',
          productionPlant: 'DFL UNIT-1 (VSP)',
          group: 'Group C',
          variety: 'Vannamei (White Shrimp)',
          grade: '31/40',
          mcs: 220,
          bags: 2200,
          packingStyle: '10x1kg Net',
          packingType: 'Master Cartons',
          store: 'Chamber #1 (IQF)',
          location: 'RACK-A-03-B',
          slabs: 0,
          kgs: 2200.0,
          stockBelongsTo: 'Farmer Direct Purchase',
          orderStatus: 'Allocated for Shipment',
          year: '2026',
          productCategory: 'Raw Frozen'
        }
      ];
    }

    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D]">Shipment</h1>
        </div>
      </div>

      <!-- Search & Filter Card (6 User-Specified Form Fields + Search Button) -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; stroke: #0284C7; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search & Filter</h3>
          </div>
          <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
            <button type="button" id="cs-shp-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset All Filters" aria-label="Reset All Filters">
              <svg style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </button>
            <button type="button" id="cs-shp-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-full transition-colors cursor-pointer select-none" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; border-radius: 9999px; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
              <svg id="cs-shp-toggle-icon" style="width: 15px; height: 15px; min-width: 15px; min-height: 15px; stroke: #334155; fill: none; display: inline-block;" class="dt-top-filter-toggle-icon transform transition-transform duration-200" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>
        </div>

        <!-- 6 User-Specified Form Fields Grid -->
        <div id="cs-shp-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
          <!-- 1. COLD STORES -->
          <div>
            <label for="cs-shp-coldstore" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">COLD STORES</label>
            <select id="cs-shp-coldstore" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="ALL">All Cold Stores</option>
              <option value="Chamber #1 (IQF)">Chamber #1 (IQF)</option>
              <option value="Chamber #2 (Block)">Chamber #2 (Block)</option>
              <option value="Chamber #3 (Blast)">Chamber #3 (Blast)</option>
              <option value="Chamber #4 (Deep Freeze)">Chamber #4 (Deep Freeze)</option>
              <option value="Vault #3 Staging">Vault #3 Staging</option>
              <option value="Main Cold Storage Plant 1">Main Cold Storage Plant 1</option>
            </select>
          </div>

          <!-- 2. STOCK BELONGS TO -->
          <div>
            <label for="cs-shp-stockbelongs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STOCK BELONGS TO</label>
            <select id="cs-shp-stockbelongs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="ALL">All Stock Owners</option>
              <option value="Own Production (Devi Fisheries)">Own Production (Devi Fisheries)</option>
              <option value="Job Work (External)">Job Work (External)</option>
              <option value="Contract Processing">Contract Processing</option>
              <option value="Trading Division">Trading Division</option>
              <option value="Farmer Direct Purchase">Farmer Direct Purchase</option>
            </select>
          </div>

          <!-- 3. ORDER STATUS -->
          <div>
            <label for="cs-shp-orderstatus" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ORDER STATUS</label>
            <select id="cs-shp-orderstatus" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="ALL">All Order Status</option>
              <option value="Ready for Dispatch">Ready for Dispatch</option>
              <option value="Allocated for Shipment">Allocated for Shipment</option>
              <option value="Under Loading">Under Loading</option>
              <option value="Loaded & Sealed">Loaded & Sealed</option>
              <option value="In Transit">In Transit</option>
              <option value="Staged in Coldstore">Staged in Coldstore</option>
            </select>
          </div>

          <!-- 4. YEAR -->
          <div>
            <label for="cs-shp-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">YEAR</label>
            <select id="cs-shp-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="ALL">All Years</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>

          <!-- 5. PO NO -->
          <div>
            <label for="cs-shp-pono" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PO NO</label>
            <input type="text" id="cs-shp-pono" placeholder="Enter PO No..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]" />
          </div>

          <!-- 6. PRODUCT CATEGORY -->
          <div>
            <label for="cs-shp-productcategory" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRODUCT CATEGORY</label>
            <select id="cs-shp-productcategory" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
              <option value="ALL">All Categories</option>
              <option value="Raw Frozen">Raw Frozen</option>
              <option value="Cooked Frozen">Cooked Frozen</option>
              <option value="Blanched Frozen">Blanched Frozen</option>
              <option value="Value-Added">Value-Added</option>
              <option value="Block Frozen">Block Frozen</option>
            </select>
          </div>

          <!-- Search Button Slot in 2nd row -->
          <div class="flex items-end">
            <button type="button" id="cs-shp-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]" title="Search Filter Records">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Data Table Container -->
      <div id="cs-shipments-table"></div>
    `;

    let lastResults = [];
    const renderTable = (data, hasSearched = false) => {
      lastResults = data;
      new DataTable({
        containerId: 'cs-shipments-table',
        tableTitle: hasSearched ? `Shipment Cargo Lots (${data.length})` : 'Shipment Cargo Lots',
        searchable: true,
        exportable: true,
        selectable: true,
        pageSize: 10,
        onRowClick: (row) => this.showShipmentLotDetailModal(row),
        toolbarButtons: [
          {
            id: 'cs-shp-toolbar-load-btn',
            label: 'Load',
            variant: 'primary',
            title: 'Load Selected Consignment(s)',
            requiresSelection: true,
            icon: `<svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>`,
            onClick: (selectedKeys, selectedRows, tableInstance) => {
              if (!selectedRows || selectedRows.length === 0) {
                Toast.show('Please select at least one consignment row to load.', 'warning');
                return;
              }
              const targetRow = selectedRows[0];
              this.showLoadConsignmentModal(targetRow, () => {
                if (tableInstance) {
                  tableInstance.selectedKeys.clear();
                  tableInstance.updateBulkBar();
                }
                renderTable(lastResults, true);
              }, selectedRows);
            }
          }
        ],
        actions: [
          {
            label: 'Load',
            title: 'Load Consignment',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>`,
            onClick: (row) => {
              this.showLoadConsignmentModal(row, () => renderTable(lastResults, true));
            }
          }
        ],
        bulkActions: [
          {
            label: 'Load Selected Lots',
            onClick: (selectedKeys) => {
              Modal.confirm({
                title: 'Load Selected Cargo Lots',
                message: `Load <strong>${selectedKeys.length} selected cargo lot(s)</strong> into export container?`,
                confirmText: 'Load Selected',
                onConfirm: () => {
                  Toast.show(`${selectedKeys.length} cargo lot(s) marked as Loaded & Sealed!`, 'success');
                }
              });
            }
          }
        ],
        columns: [
          { field: 'sNo', header: 'SNO', sortable: true, render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>` },
          { field: 'id', header: 'ID', sortable: true, render: (v, r) => `<span class="font-mono font-bold text-[#0284C7]">${r.lotId || v || '-'}</span>` },
          { field: 'barCode', header: 'Bar Code', sortable: true, render: v => `<span class="font-mono font-semibold text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
          { field: 'poNumber', header: 'Po Number', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7] whitespace-nowrap">${v || '-'}</span>` },
          { field: 'productionPlant', header: 'Production Plant', sortable: true, render: v => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
          { field: 'group', header: 'Group', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6] whitespace-nowrap">${v || '-'}</span>` },
          { field: 'variety', header: 'Variety', sortable: true, render: v => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
          { field: 'grade', header: 'Grade', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E0F2FE] text-[#0284C7] whitespace-nowrap">${v || '-'}</span>` },
          { field: 'mcs', header: 'Mcs', sortable: true, render: v => `<span class="font-mono font-bold text-[#00875A]">${Number(v || 0).toLocaleString()}</span>` },
          { field: 'bags', header: 'Bags', sortable: true, render: v => `<span class="font-mono font-bold text-[#172B4D]">${Number(v || 0).toLocaleString()}</span>` },
          { field: 'packingStyle', header: 'Packing Style', sortable: true, render: v => `<span class="whitespace-nowrap font-medium text-[#172B4D]">${v || '-'}</span>` },
          { field: 'packingType', header: 'Packing Type', sortable: true, render: v => `<span class="whitespace-nowrap text-[#5E6C84]">${v || '-'}</span>` },
          { field: 'store', header: 'Store', sortable: true, render: v => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v || '-'}</span>` },
          { field: 'location', header: 'Location', sortable: true, render: v => `<span class="font-mono text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>` },
          { field: 'slabs', header: 'Slabs', sortable: true, render: v => `<span class="font-mono font-semibold text-[#172B4D]">${v !== undefined ? v : 0}</span>` },
          { field: 'kgs', header: 'KGS', sortable: true, render: v => `<span class="font-mono font-bold text-[#00875A]">${Number(v || 0).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>` }
        ],
        data: data
      });
    };

    // Initially render empty table per user requirement:
    // "dont show dat ain data table when user click on sech button ffrom serch & filter thant time shoe the dat ain that table till sho w no data empty statn"
    renderTable([], false);

    // Filter toggle
    const toggleBtn = container.querySelector('#cs-shp-toggle-btn');
    const filterBody = container.querySelector('#cs-shp-filter-body');
    const toggleIcon = container.querySelector('#cs-shp-toggle-icon');
    if (toggleBtn && filterBody && toggleIcon) {
      let isOpen = true;
      toggleBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
          filterBody.style.display = 'grid';
          toggleIcon.classList.remove('rotate-180');
          toggleBtn.title = 'Hide Filter';
        } else {
          filterBody.style.display = 'none';
          toggleIcon.classList.add('rotate-180');
          toggleBtn.title = 'Show Filter';
        }
      });
    }

    // Search button handler
    const searchBtn = container.querySelector('#cs-shp-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        const coldStoreVal = container.querySelector('#cs-shp-coldstore')?.value || 'ALL';
        const stockBelongsVal = container.querySelector('#cs-shp-stockbelongs')?.value || 'ALL';
        const orderStatusVal = container.querySelector('#cs-shp-orderstatus')?.value || 'ALL';
        const yearVal = container.querySelector('#cs-shp-year')?.value || 'ALL';
        const poVal = (container.querySelector('#cs-shp-pono')?.value || '').trim().toLowerCase();
        const categoryVal = container.querySelector('#cs-shp-productcategory')?.value || 'ALL';

        const pool = this.state.shipmentStockList || [];
        const results = pool.filter(item => {
          if (coldStoreVal !== 'ALL' && item.store !== coldStoreVal) return false;
          if (stockBelongsVal !== 'ALL' && item.stockBelongsTo !== stockBelongsVal) return false;
          if (orderStatusVal !== 'ALL' && item.orderStatus !== orderStatusVal) return false;
          if (yearVal !== 'ALL' && String(item.year) !== yearVal) return false;
          if (poVal && !(item.poNumber || '').toLowerCase().includes(poVal)) return false;
          if (categoryVal !== 'ALL' && item.productCategory !== categoryVal) return false;
          return true;
        });

        renderTable(results, true);
        Toast.show(`Showing ${results.length} matching Shipment lot(s)`, 'info');
      });
    }

    // Reset button handler
    const resetBtn = container.querySelector('#cs-shp-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const selects = container.querySelectorAll('#cs-shp-filter-body select');
        selects.forEach(s => s.value = 'ALL');
        const textInputs = container.querySelectorAll('#cs-shp-filter-body input');
        textInputs.forEach(i => i.value = '');

        renderTable([], false);
        Toast.show('Shipment search & filters reset', 'info');
      });
    }
  },

  // 7c. LOAD CONSIGNMENT MODAL (User-Specified Consignment Table with Style Guide)
  showLoadConsignmentModal(row, onSuccess = null, selectedRows = null) {
    const rowsToRender = (selectedRows && selectedRows.length > 0) ? selectedRows : [row];
    const todayStr = new Date().toISOString().slice(0, 10);

    const rowItems = rowsToRender.map((r, idx) => {
      const totalMcs = r.totalMcs || r.mcs || 2000;
      const avalMcs = r.avalMcs !== undefined ? r.avalMcs : (r.mcs !== undefined ? Math.min(r.mcs, 48) : 48);
      const avalLooseMcs = r.avalLooseMcs !== undefined ? r.avalLooseMcs : 0;
      const grade = r.grade || '90/120';
      const packingStyle = r.packingStyle || '1 X 10 KGS';
      const freezingType = r.freezingType || 'IQF';
      const glaze = r.glaze || '10';
      const varietyDesc = r.varietyFull || (r.variety ? `FROZEN BLANCHED ${r.variety.toUpperCase()} PEELED AND DEVEINED TAIL OFF IQF SHRIMPS,10% GLAZE FROZEN WEIGH FROZEN COUNT (SALT TREATED ASC, )`: 'FROZEN BLANCHED VANNAMEI WHITE PEELED AND DEVEINED TAIL OFF IQF SHRIMPS,10% GLAZE FROZEN WEIGH FROZEN COUNT (SALT TREATED ASC, )');

      const initialSelectLoose = 0;
      const initialTotalAval = avalMcs + initialSelectLoose;
      const initialBalance = totalMcs - initialTotalAval;

      return {
        r,
        idx,
        totalMcs,
        avalMcs,
        avalLooseMcs,
        grade,
        packingStyle,
        freezingType,
        glaze,
        varietyDesc,
        initialSelectLoose,
        initialTotalAval,
        initialBalance
      };
    });

    const sumInitialBalance = rowItems.reduce((acc, it) => acc + it.initialBalance, 0);

    const tbodyHtml = rowItems.map(it => `
      <tr class="hover:bg-[#FAFBFC] transition-colors" data-row-idx="${it.idx}">
        <td class="px-3 py-3.5 text-xs text-[#172B4D] font-medium leading-relaxed">${it.varietyDesc}</td>
        <td class="px-3 py-3.5 whitespace-nowrap font-mono text-xs font-semibold text-[#172B4D]">${it.grade}</td>
        <td class="px-3 py-3.5 whitespace-nowrap font-medium text-xs text-[#172B4D]">${it.packingStyle}</td>
        <td class="px-3 py-3.5 whitespace-nowrap font-medium text-xs text-[#172B4D]">${it.freezingType}</td>
        <td class="px-3 py-3.5 whitespace-nowrap text-center font-mono text-xs text-[#172B4D]">${it.glaze}</td>
        <td class="px-3 py-3.5 whitespace-nowrap">
          <select class="load-modal-reason w-full text-xs px-2.5 py-1.5 bg-white border border-[#0284C7] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0284C7] font-semibold text-[#172B4D] shadow-2xs">
            <option value="Shipment Out" selected>Shipment Out</option>
            <option value="Export Dispatch">Export Dispatch</option>
            <option value="Sample Dispatch">Sample Dispatch</option>
            <option value="Inter-Branch Transfer">Inter-Branch Transfer</option>
            <option value="Reprocessing">Reprocessing</option>
          </select>
        </td>
        <td class="px-3 py-3.5 whitespace-nowrap text-right font-mono font-bold text-xs text-[#172B4D]">${it.totalMcs}</td>
        <td class="px-3 py-3.5 whitespace-nowrap text-right font-mono font-bold text-xs text-[#00875A]">${it.avalMcs}</td>
        <td class="px-3 py-3.5 whitespace-nowrap text-right font-mono font-bold text-xs text-[#172B4D]">${it.avalLooseMcs}</td>
        <td class="px-3 py-3.5 whitespace-nowrap text-center">
          <input type="number" data-row-idx="${it.idx}" value="0" min="0" max="${it.totalMcs}" class="load-modal-select-loose-mcs w-20 text-center font-mono font-bold text-xs px-2.5 py-1.5 bg-white border border-[#0284C7] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0284C7] text-[#172B4D] shadow-2xs" />
        </td>
        <td class="px-3 py-3.5 whitespace-nowrap text-right font-mono font-bold text-xs text-[#0284C7] load-modal-total-aval" data-row-idx="${it.idx}">${it.initialTotalAval}</td>
        <td class="px-3 py-3.5 whitespace-nowrap text-right font-mono text-xs text-[#5E6C84] load-modal-rem-loose" data-row-idx="${it.idx}">0</td>
        <td class="px-3 py-3.5 whitespace-nowrap text-right font-mono font-bold text-xs text-[#172B4D] load-modal-balance" data-row-idx="${it.idx}">${it.initialBalance}</td>
      </tr>
    `).join('');

    Modal.open({
      title: 'Are you sure to Load the consignment?',
      size: 'full',
      content: `
        <div class="space-y-6 text-xs text-[#172B4D] p-1">
          <!-- Consignment Table Card -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl overflow-hidden shadow-xs">
            <div class="overflow-x-auto">
              <table class="erp-table w-full text-left border-collapse">
                <thead>
                  <tr class="bg-[#FAFBFC] border-b border-[#DFE1E6] text-[11px] font-bold text-[#5E6C84]">
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-normal min-w-[280px]">Variety</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap">Grade</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap">PackingStyle Style</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap">FreezingType Type</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap text-center">Glaze</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap min-w-[130px]">Reason</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap text-right">Total Mcs</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap text-right">Aval Mcs</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap text-right">Aval Loose Mcs</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap text-center min-w-[110px]">Select Loose Mcs</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap text-right">Total Aval Mcs</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap text-right">Remaining Loose Bags</th>
                    <th class="px-3 py-3 font-semibold text-[#172B4D] whitespace-nowrap text-right">Balance Mcs</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#EBECF0]">
                  ${tbodyHtml}
                  <!-- Balance Mcs Summary Row -->
                  <tr class="bg-[#FAFBFC] border-t border-[#DFE1E6]">
                    <td class="px-3 py-3 font-bold text-xs text-[#172B4D]">Balance Mcs</td>
                    <td colspan="11"></td>
                    <td class="px-3 py-3 text-right font-mono font-bold text-xs text-[#172B4D]" id="load-modal-summary-balance-mcs">${sumInitialBalance}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Bottom Action Controls: Stock Out Date & Stock Out Button -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div></div>

            <!-- Stock Out Date (Centered) -->
            <div class="flex flex-col items-center">
              <label for="load-modal-stock-out-date" class="block text-xs font-bold text-[#172B4D] mb-1.5">Stock Out Date</label>
              <div class="relative">
                <input type="date" id="load-modal-stock-out-date" value="${todayStr}" class="text-xs px-3.5 py-2 bg-white border border-[#DFE1E6] rounded-xl focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D] shadow-2xs cursor-pointer hover:border-[#CBD5E1] transition-colors" />
              </div>
            </div>

            <!-- Stock Out Button (Right Aligned) -->
            <div class="flex items-center justify-end">
              <button type="button" id="load-modal-submit-stockout-btn" class="btn-primary px-6 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow transition-all cursor-pointer">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
                <span>Stock Out</span>
              </button>
            </div>
          </div>
        </div>
      `
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (modalRoot) {
      const looseInputs = modalRoot.querySelectorAll('.load-modal-select-loose-mcs');
      const summaryBalanceEl = modalRoot.querySelector('#load-modal-summary-balance-mcs');

      const recalculateAll = () => {
        let totalSumBalance = 0;
        rowItems.forEach((it, idx) => {
          const inputEl = modalRoot.querySelector(`.load-modal-select-loose-mcs[data-row-idx="${idx}"]`);
          const totalAvalEl = modalRoot.querySelector(`.load-modal-total-aval[data-row-idx="${idx}"]`);
          const remLooseEl = modalRoot.querySelector(`.load-modal-rem-loose[data-row-idx="${idx}"]`);
          const balanceEl = modalRoot.querySelector(`.load-modal-balance[data-row-idx="${idx}"]`);

          const looseVal = Math.max(0, parseInt(inputEl?.value, 10) || 0);
          const currentTotalAval = it.avalMcs + looseVal;
          const currentBalance = Math.max(0, it.totalMcs - currentTotalAval);
          const remainingLoose = Math.max(0, it.avalLooseMcs - looseVal);

          if (totalAvalEl) totalAvalEl.textContent = currentTotalAval;
          if (balanceEl) balanceEl.textContent = currentBalance;
          if (remLooseEl) remLooseEl.textContent = remainingLoose;

          totalSumBalance += currentBalance;
        });

        if (summaryBalanceEl) {
          summaryBalanceEl.textContent = totalSumBalance;
        }
      };

      looseInputs.forEach(inp => {
        inp.addEventListener('input', recalculateAll);
      });

      const submitBtn = modalRoot.querySelector('#load-modal-submit-stockout-btn');
      if (submitBtn) {
        submitBtn.addEventListener('click', () => {
          const stockOutDate = modalRoot.querySelector('#load-modal-stock-out-date')?.value || todayStr;
          const lotCodes = rowsToRender.map(r => r.poNumber || r.lotId).join(', ');

          // Prompt confirmation before applying stock out action
          Modal.confirm({
            title: 'Confirm Consignment Stock Out',
            message: `Are you sure you want to load and stock out <strong>${rowsToRender.length} consignment lot(s)</strong> (${lotCodes}) on <strong>${stockOutDate}</strong>?`,
            confirmText: 'Confirm Stock Out',
            onConfirm: () => {
              rowsToRender.forEach((r, idx) => {
                const rowEl = modalRoot.querySelector(`tr[data-row-idx="${idx}"]`);
                const reason = rowEl?.querySelector('.load-modal-reason')?.value || 'Shipment Out';
                const inputEl = modalRoot.querySelector(`.load-modal-select-loose-mcs[data-row-idx="${idx}"]`);
                const selectedLoose = parseInt(inputEl?.value, 10) || 0;
                const avalMcs = r.avalMcs !== undefined ? r.avalMcs : (r.mcs !== undefined ? Math.min(r.mcs, 48) : 48);

                r.orderStatus = 'Loaded & Sealed';
                r.loadedDate = stockOutDate;
                r.loadedMcs = avalMcs + selectedLoose;
                r.loadReason = reason;
              });

              Modal.close();
              Toast.show(`Successfully loaded and stocked out ${rowsToRender.length} consignment lot(s)!`, 'success');

              if (typeof onSuccess === 'function') {
                onSuccess();
              }
            }
          });
        });
      }
    }
  },

  // 7b. SHIPMENT LOT DETAIL MODAL
  showShipmentLotDetailModal(row) {
    Modal.open({
      title: `Shipment Lot Details: ${row.poNumber || row.lotId} (${row.barCode || ''})`,
      size: 'lg',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">BAR CODE & PO NUMBER</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.barCode} | ${row.poNumber}</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">STATUS</span>
              <div><span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border bg-[#E0F2FE] text-[#0284C7] border-[#BAE6FD]">${row.orderStatus || 'Ready for Dispatch'}</span></div>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCTION PLANT</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.productionPlant || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GROUP</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.group || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">VARIETY</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.variety || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GRADE</span>
              <span class="font-bold text-xs text-[#0284C7] font-mono">${row.grade || '-'}</span>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">MASTER CARTONS (MCS)</span>
              <span class="font-mono font-bold text-[#00875A] text-sm">${Number(row.mcs || 0).toLocaleString()}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL BAGS</span>
              <span class="font-mono font-bold text-[#172B4D] text-sm">${Number(row.bags || 0).toLocaleString()}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SLABS</span>
              <span class="font-mono font-bold text-[#172B4D] text-sm">${row.slabs || 0}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL WEIGHT (KGS)</span>
              <span class="font-mono font-bold text-[#00875A] text-sm">${Number(row.kgs || 0).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING STYLE</span>
              <span class="font-medium text-xs text-[#172B4D]">${row.packingStyle || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING TYPE</span>
              <span class="font-medium text-xs text-[#172B4D]">${row.packingType || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STORE</span>
              <span class="font-medium text-xs text-[#172B4D]">${row.store || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">RACK LOCATION</span>
              <span class="font-mono font-semibold text-xs text-[#0284C7]">${row.location || '-'}</span>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#FAFBFC] p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STOCK BELONGS TO</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.stockBelongsTo || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCT CATEGORY</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.productCategory || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">YEAR</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.year || '2026'}</span>
            </div>
          </div>
        </div>
      `
    });
  },

  // 7. DAILY PRODUCTION DETAIL MODAL
  showDailyProductionDetailModal(row) {
    const code = row.trackCode || row.intakeCode || row.supc || ('LOT-' + row.id);
    Modal.open({
      title: `Daily Production Batch Details: ${code}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">${row.trackCode ? 'TRACK CODE' : 'LOT / SUPC CODE'}</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${code}</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">INVENTORY STATUS</span>
              <div>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644]">${row.status || 'Active'}</span>
              </div>
            </div>
          </div>

          <!-- Production & PO Information Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCTION DATE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.productionDate || row.date || row.intakeDate || '-'}</span>
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
  },

  // 7b. ADD DAILY PRODUCTION INTAKE MODAL
  showAddDailyProductionIntakeModal(row, onSuccess) {
    const defaultMcs = row.balanceMcs > 0 ? row.balanceMcs : row.mcs;
    const defaultKgs = row.balanceKgs > 0 ? row.balanceKgs : row.kgs;

    Modal.open({
      title: `Add Coldstore Intake: ${row.trackCode || row.poNumber}`,
      size: 'xl',
      content: `
        <form id="form-add-daily-intake" class="space-y-4 text-xs text-[#172B4D]">
          <!-- Top Info Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">PRODUCTION BATCH</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.trackCode}</div>
              <div class="text-[11px] text-[#6B778C]">${row.product} • Grade: <span class="font-bold text-[#172B4D]">${row.grade}</span></div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">AVAILABLE BALANCE</span>
              <div class="text-sm font-black text-[#00875A] font-mono">${row.balanceMcs} MCs / ${Number(row.balanceKgs).toFixed(1)} Kgs</div>
            </div>
          </div>

          <!-- Production Reference Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO NUMBER</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.poNumber || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GROUP</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294]">${row.group || 'Group A'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING TYPE</span>
              <span class="text-xs text-[#5E6C84]">${row.packingType}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PACKING STYLE</span>
              <span class="font-medium text-xs text-[#172B4D]">${row.packingStyle}</span>
            </div>
          </div>

          <!-- Coldstore Storage Inputs -->
          <div class="bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6]">
            <h4 class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-2.5">Coldstore Inward Allocation</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">INTAKE DATE <span class="text-red-500 font-black">*</span></label>
                <input type="date" name="intakeDate" value="2026-10-29" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold" required>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">STORAGE CHAMBER <span class="text-red-500 font-black">*</span></label>
                <select name="chamber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold" required>
                  <option value="Chamber #1 (IQF)" selected>Chamber #1 (IQF)</option>
                  <option value="Chamber #2 (Block)">Chamber #2 (Block)</option>
                  <option value="Vault #3 Staging">Vault #3 Staging</option>
                </select>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">RACK SLOT <span class="text-red-500 font-black">*</span></label>
                <input type="text" name="rack" value="RACK-A1-T1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold" required>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">SHIFT</label>
                <select name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold">
                  <option value="Shift A (Day)" selected>Shift A (Day)</option>
                  <option value="Shift B (Evening)">Shift B (Evening)</option>
                  <option value="Shift C (Night)">Shift C (Night)</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
              <div>
                <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">INTAKE MCS <span class="text-red-500 font-black">*</span></label>
                <input type="number" name="intakeMcs" value="${defaultMcs}" min="1" max="${row.balanceMcs || row.mcs}" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold" required>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">NET WEIGHT (KG) <span class="text-red-500 font-black">*</span></label>
                <input type="number" name="intakeKgs" value="${defaultKgs}" min="0.1" step="0.1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold" required>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">SUPERVISOR</label>
                <input type="text" name="supervisor" value="K. Rama Rao" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold">
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Save Intake',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-add-daily-intake');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);
            const intakeMcs = Number(fd.get('intakeMcs') || 0);
            const intakeKgs = Number(fd.get('intakeKgs') || 0);

            // Update row balances
            row.balanceMcs = Math.max(0, (row.balanceMcs || row.mcs) - intakeMcs);
            row.balanceKgs = Math.max(0, (row.balanceKgs || row.kgs) - intakeKgs);
            row.balanceBags = Math.max(0, (row.balanceBags || row.bags) - (intakeMcs * 10));
            if (row.balanceMcs === 0) {
              row.status = 'Stored in Coldstore';
            }

            // Also add record to Stock In
            const nextInwId = (this.state.stockInList?.length || 0) + 1;
            const newStockIn = {
              id: nextInwId,
              sNo: 1,
              inwardCode: `INW-CS-2026-${450 + nextInwId}`,
              inwardDate: fd.get('intakeDate'),
              palletId: `PAL-2026-${String(450 + nextInwId).padStart(4, '0')}`,
              lotNo: row.trackCode,
              productionPlant: row.plant || 'DFL UNIT-5 (JPT)',
              stockBelongsTo: row.stockBelongsTo || 'Devi Fisheries Ltd (DFL)',
              product: row.product,
              grade: row.grade,
              packingType: row.packingType,
              packingStyle: row.packingStyle,
              chamber: fd.get('chamber'),
              rack: fd.get('rack'),
              cartons: intakeMcs,
              mcs: intakeMcs,
              bags: intakeMcs * 10,
              netWeightKg: intakeKgs,
              temp: -22.0,
              shift: fd.get('shift'),
              supervisor: fd.get('supervisor'),
              status: 'Stored'
            };
            if (this.state.stockInList) {
              this.state.stockInList.unshift(newStockIn);
              this.state.stockInList.forEach((it, idx) => { it.sNo = idx + 1; });
            }

            modal.close();
            Toast.show(`Coldstore intake of ${intakeMcs} MCs recorded for ${row.trackCode}.`, 'success');
            if (typeof onSuccess === 'function') onSuccess();
          }
        }
      ]
    });
  },

  // 8. DAILY STOCKOUT DETAIL MODAL
  showDailyStockOutDetailModal(row) {
    Modal.open({
      title: `Daily StockOut Dispatch: ${row.stockOutCode || row.id}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">STOCKOUT CODE</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.stockOutCode}</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">DISPATCH STATUS</span>
              <div>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644]">${row.status}</span>
              </div>
            </div>
          </div>

          <!-- StockOut Information Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STOCK OUT DATE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.stockOutDate || row.date}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TYPE</span>
              <span class="font-bold text-xs text-[#0284C7]">${row.type}</span>
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

          <!-- Quantity & Balances Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FAFBFC] p-3 border border-[#DFE1E6] rounded-lg">
            <div class="bg-white p-2.5 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">MASTER CARTONS (MCS)</div>
              <div class="text-lg font-black text-[#172B4D] font-mono mt-0.5">${Number(row.mcs || 0).toLocaleString()}</div>
            </div>
            <div class="bg-white p-2.5 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL BAGS / POUCHES</div>
              <div class="text-lg font-black text-[#0284C7] font-mono mt-0.5">${Number(row.bags || 0).toLocaleString()}</div>
            </div>
            <div class="bg-white p-2.5 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">DISPATCHED WEIGHT</div>
              <div class="text-lg font-black text-[#00875A] font-mono mt-0.5">${Number(row.kgs || 0).toFixed(1)} <span class="text-xs font-semibold text-[#6B778C]">Kgs</span></div>
            </div>
            <div class="bg-white p-2.5 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">BALANCE KGS</div>
              <div class="text-lg font-black text-[#DE350B] font-mono mt-0.5">${Number(row.balanceKgs || 0).toFixed(1)} <span class="text-xs font-semibold text-[#6B778C]">Kgs</span></div>
            </div>
          </div>

          <!-- Logistics & Staging Details -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">ORDER / REF NO</span>
              <span class="font-mono font-semibold text-xs text-[#172B4D]">${row.orderNo || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STAGED VAULT</span>
              <span class="font-semibold text-xs text-[#0284C7]">${row.chamber || 'Vault #3 Staging'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">VEHICLE / CONTAINER</span>
              <span class="font-mono font-bold text-xs">${row.vehicleNo || 'Internal Transfer'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">ISSUED BY</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.issuedBy || 'Anita P. Rao'}</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() }
      ]
    });
  },

  // 9. ADD FREEZING MODAL (ALL 25 USER-SPECIFIED FIELDS - FLAT CLEAN STYLE GUIDE)
  showAddFreezingModal(onSuccessCallback) {
    const today = new Date().toISOString().slice(0, 10);
    const nextSeq = (this.state.freezingRunsList?.length || 0) + 1;
    const defaultLotCode = `LOT-ARR-2026-${890 + nextSeq}`;

    Modal.open({
      title: 'Add Freezing Run',
      size: '2xl',
      content: `
        <form id="form-add-freezing" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <!-- 1. PRODUCTION DATE * -->
          <div>
            <label for="fz-add-pdate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE <span class="text-[#DE350B]">*</span></label>
            <input type="date" id="fz-add-pdate" name="productionDate" value="${today}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required onclick="this.showPicker ? this.showPicker() : this.focus()">
          </div>

          <!-- 2. BATCH CODES -->
          <div>
            <label for="fz-add-batch" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BATCH CODES</label>
            <input type="text" id="fz-add-batch" name="batchCodes" placeholder="e.g. BCH-2026-910" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono text-[#172B4D]">
          </div>

          <!-- 3. TRANSACTION DATE * -->
          <div>
            <label for="fz-add-tdate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSACTION DATE <span class="text-[#DE350B]">*</span></label>
            <input type="date" id="fz-add-tdate" name="transactionDate" value="${today}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required onclick="this.showPicker ? this.showPicker() : this.focus()">
          </div>

          <!-- 4. PRODUCTION PLANT * -->
          <div>
            <label for="fz-add-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
              <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
              <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
              <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
            </select>
          </div>

          <!-- 5. GROUP * -->
          <div>
            <label for="fz-add-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-group" name="group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Group A" selected>Group A</option>
              <option value="Group B">Group B</option>
              <option value="Group C">Group C</option>
              <option value="Group D">Group D</option>
            </select>
          </div>

          <!-- 6. STOCK BELONGS TO * -->
          <div>
            <label for="fz-add-belongs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STOCK BELONGS TO <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-belongs" name="stockBelongsTo" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Devi Fisheries Ltd (DFL)" selected>Devi Fisheries Ltd (DFL)</option>
              <option value="DFL Unit-5 (JPT)">DFL Unit-5 (JPT)</option>
              <option value="DFL Unit-4 (PND)">DFL Unit-4 (PND)</option>
              <option value="DFL Unit-3 (PSP)">DFL Unit-3 (PSP)</option>
              <option value="DFL Unit-1 (VSP)">DFL Unit-1 (VSP)</option>
              <option value="Third-Party Co-Packing">Third-Party Co-Packing</option>
            </select>
          </div>

          <!-- 7. SHIFT * -->
          <div>
            <label for="fz-add-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Shift A (Day)" selected>Shift A (Day)</option>
              <option value="Shift B (Evening)">Shift B (Evening)</option>
              <option value="Shift C (Night)">Shift C (Night)</option>
            </select>
          </div>

          <!-- 8. PO NUMBER * -->
          <div>
            <label for="fz-add-po" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NUMBER <span class="text-[#DE350B]">*</span></label>
            <input type="text" id="fz-add-po" name="poNumber" value="PO-2026-8901" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold text-[#172B4D]" required>
          </div>

          <!-- 9. VARIETY * -->
          <div>
            <label for="fz-add-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-variety" name="variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Vannamei (White Shrimp)" selected>Vannamei (White Shrimp)</option>
              <option value="Black Tiger (Monodon)">Black Tiger (Monodon)</option>
              <option value="Sea Pearl / Pink">Sea Pearl / Pink</option>
              <option value="Scampi (Freshwater)">Scampi (Freshwater)</option>
            </select>
          </div>

          <!-- 10. PACKING STYLE * -->
          <div>
            <label for="fz-add-style" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING STYLE <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-style" name="packingStyle" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="10x1kg Net" selected>10x1kg Net</option>
              <option value="6x2kg Block">6x2kg Block</option>
              <option value="5x2kg IQF Poly">5x2kg IQF Poly</option>
              <option value="10x2lb Pouch">10x2lb Pouch</option>
            </select>
          </div>

          <!-- 11. GRADE * -->
          <div>
            <label for="fz-add-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-grade" name="grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="31/40" selected>31/40</option>
              <option value="16/20">16/20</option>
              <option value="21/25">21/25</option>
              <option value="26/30">26/30</option>
              <option value="41/50">41/50</option>
              <option value="51/60">51/60</option>
              <option value="U/15">U/15</option>
            </select>
          </div>

          <!-- 12. PACKING TYPE * -->
          <div>
            <label for="fz-add-ptype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING TYPE <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-ptype" name="packingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Master Cartons" selected>Master Cartons</option>
              <option value="Dummy Cartons">Dummy Cartons</option>
              <option value="10x1kg Net">10x1kg Net</option>
              <option value="6x2kg Block">6x2kg Block</option>
              <option value="5x2kg IQF Poly">5x2kg IQF Poly</option>
              <option value="10x2lb Pouch">10x2lb Pouch</option>
            </select>
          </div>

          <!-- 13. FREEZING TYPE * -->
          <div>
            <label for="fz-add-ftype" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-ftype" name="freezingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="IQF Tunnel" selected>IQF Tunnel</option>
              <option value="Contact Plate Freezer">Contact Plate Freezer</option>
              <option value="Blast Freezer">Blast Freezer</option>
              <option value="Semi-IQF">Semi-IQF</option>
            </select>
          </div>

          <!-- 14. SOAKING * -->
          <div>
            <label for="fz-add-soaking" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOAKING <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-soaking" name="soaking" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Yes (Non-Phosphate)" selected>Yes (Non-Phosphate)</option>
              <option value="Yes (Phosphate Treated)">Yes (Phosphate Treated)</option>
              <option value="No (Unsoaked)">No (Unsoaked)</option>
            </select>
          </div>

          <!-- 15. PRODUCT CATEGORY * -->
          <div>
            <label for="fz-add-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-category" name="productCategory" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
              <option value="Raw Frozen" selected>Raw Frozen</option>
              <option value="Cooked Frozen">Cooked Frozen</option>
              <option value="Value Added">Value Added</option>
              <option value="Blanched">Blanched</option>
            </select>
          </div>

          <!-- 16. ABSTATUS * -->
          <div>
            <label for="fz-add-abstatus" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ABSTATUS <span class="text-[#DE350B]">*</span></label>
            <select id="fz-add-abstatus" name="abStatus" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-bold text-[#006644]" required>
              <option value="PASSED (AB Negative)" selected>PASSED (AB Negative)</option>
              <option value="UNDER TESTING">UNDER TESTING</option>
              <option value="FAILED">FAILED</option>
            </select>
          </div>

          <!-- 17. ARRIVAL DATE * -->
          <div>
            <label for="fz-add-adate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
            <input type="date" id="fz-add-adate" name="arrivalDate" value="${today}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required onclick="this.showPicker ? this.showPicker() : this.focus()">
          </div>

          <!-- 18. ARRIVAL/LOT CODE * -->
          <div>
            <label for="fz-add-lot" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL/LOT CODE <span class="text-[#DE350B]">*</span></label>
            <input type="text" id="fz-add-lot" name="arrivalLotCode" value="${defaultLotCode}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#0284C7]" required>
          </div>

          <!-- 19. HL COUNT * -->
          <div>
            <label for="fz-add-hlcount" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">HL COUNT <span class="text-[#DE350B]">*</span></label>
            <input type="number" step="0.1" id="fz-add-hlcount" name="hlCount" value="35.0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold text-[#172B4D]" required>
          </div>

          <!-- 20. TUB NO -->
          <div>
            <label for="fz-add-tub" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TUB NO</label>
            <input type="text" id="fz-add-tub" name="tubNo" value="TUB-401" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold text-[#172B4D]">
          </div>

          <!-- 21. MCS -->
          <div>
            <label for="fz-add-mcs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">MCS</label>
            <input type="number" id="fz-add-mcs" name="mcs" value="400" min="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#172B4D]">
          </div>

          <!-- 22. LOOSE BAGS -->
          <div>
            <label for="fz-add-bags" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LOOSE BAGS</label>
            <input type="number" id="fz-add-bags" name="looseBags" value="0" min="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-semibold text-[#172B4D]">
          </div>

          <!-- 23. TOTAL WEIGHT -->
          <div>
            <label for="fz-add-totalwt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TOTAL WEIGHT (KG)</label>
            <input type="number" step="0.1" id="fz-add-totalwt" name="totalWeight" value="4000.0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#00875A]">
          </div>

          <!-- 24. BALANCE WEIGHT -->
          <div>
            <label for="fz-add-balwt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BALANCE WEIGHT (KG)</label>
            <input type="number" step="0.1" id="fz-add-balwt" name="balanceWeight" value="4000.0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#DE350B]">
          </div>

          <!-- 25. REMARKS (Full width) -->
          <div class="sm:col-span-2 md:col-span-3 lg:col-span-4">
            <label for="fz-add-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
            <input type="text" id="fz-add-remarks" name="remarks" placeholder="Enter process notes, temperature verification, or pallet layout..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] text-[#172B4D]">
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Save Freezing Run',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-add-freezing');
            if (!form) return;
            if (!form.checkValidity()) {
              form.reportValidity();
              return;
            }
            const fd = new FormData(form);
            const newRecord = {
              id: Date.now(),
              sNo: (this.state.freezingRunsList?.length || 0) + 1,
              productionDate: fd.get('productionDate') || today,
              transactionDate: fd.get('transactionDate') || today,
              arrivalDate: fd.get('arrivalDate') || today,
              arrivalLotCode: fd.get('arrivalLotCode') || defaultLotCode,
              batchCodes: fd.get('batchCodes') || '-',
              productionPlant: fd.get('productionPlant'),
              group: fd.get('group'),
              stockBelongsTo: fd.get('stockBelongsTo'),
              shift: fd.get('shift'),
              poNumber: fd.get('poNumber'),
              variety: fd.get('variety'),
              packingStyle: fd.get('packingStyle'),
              grade: fd.get('grade'),
              packingType: fd.get('packingType'),
              freezingType: fd.get('freezingType'),
              soaking: fd.get('soaking'),
              productCategory: fd.get('productCategory'),
              abStatus: fd.get('abStatus'),
              remarks: fd.get('remarks') || '-',
              totalWeight: Number(fd.get('totalWeight') || 0),
              balanceWeight: Number(fd.get('balanceWeight') || 0),
              hlCount: Number(fd.get('hlCount') || 0),
              mcs: Number(fd.get('mcs') || 0),
              looseBags: Number(fd.get('looseBags') || 0),
              tubNo: fd.get('tubNo') || '-'
            };

            this.state.freezingRunsList.unshift(newRecord);
            modal.close();
            if (typeof onSuccessCallback === 'function') {
              onSuccessCallback(this.state.freezingRunsList);
            }
            Toast.show(`Freezing run ${newRecord.arrivalLotCode} added successfully`, 'success');
          }
        }
      ]
    });
  },

  // 10. EDIT FREEZING MODAL (FLAT CLEAN STYLE GUIDE)
  showEditFreezingModal(row, onSuccessCallback) {
    Modal.open({
      title: `Edit Freezing Run: ${row.arrivalLotCode || row.runCode}`,
      size: '2xl',
      content: `
        <form id="form-edit-freezing" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="fz-edit-pdate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE</label>
            <input type="date" id="fz-edit-pdate" name="productionDate" value="${row.productionDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" required>
          </div>
          <div>
            <label for="fz-edit-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
            <input type="text" id="fz-edit-plant" name="productionPlant" value="${row.productionPlant || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
          </div>
          <div>
            <label for="fz-edit-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
            <input type="text" id="fz-edit-grade" name="grade" value="${row.grade || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
          </div>
          <div>
            <label for="fz-edit-abstatus" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">AB STATUS</label>
            <select id="fz-edit-abstatus" name="abStatus" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-bold text-[#006644]">
              <option value="PASSED (AB Negative)" ${row.abStatus === 'PASSED (AB Negative)' ? 'selected' : ''}>PASSED (AB Negative)</option>
              <option value="UNDER TESTING" ${row.abStatus === 'UNDER TESTING' ? 'selected' : ''}>UNDER TESTING</option>
              <option value="FAILED" ${row.abStatus === 'FAILED' ? 'selected' : ''}>FAILED</option>
            </select>
          </div>
          <div>
            <label for="fz-edit-mcs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">MCS</label>
            <input type="number" id="fz-edit-mcs" name="mcs" value="${row.mcs || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#172B4D]">
          </div>
          <div>
            <label for="fz-edit-loose" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LOOSE BAGS</label>
            <input type="number" id="fz-edit-loose" name="looseBags" value="${row.looseBags || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono text-[#172B4D]">
          </div>
          <div>
            <label for="fz-edit-totalwt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TOTAL WT (KG)</label>
            <input type="number" step="0.1" id="fz-edit-totalwt" name="totalWeight" value="${row.totalWeight || row.netWeightKg || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#00875A]">
          </div>
          <div>
            <label for="fz-edit-balwt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BALANCE WT (KG)</label>
            <input type="number" step="0.1" id="fz-edit-balwt" name="balanceWeight" value="${row.balanceWeight || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono font-bold text-[#DE350B]">
          </div>
          <div class="sm:col-span-2 md:col-span-3 lg:col-span-4">
            <label for="fz-edit-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
            <input type="text" id="fz-edit-remarks" name="remarks" value="${row.remarks || ''}" placeholder="Remarks..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] text-[#172B4D]">
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Update Freezing Run',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-edit-freezing');
            if (!form) return;
            if (!form.checkValidity()) {
              form.reportValidity();
              return;
            }
            const fd = new FormData(form);
            row.productionDate = fd.get('productionDate');
            row.productionPlant = fd.get('productionPlant');
            row.grade = fd.get('grade');
            row.abStatus = fd.get('abStatus');
            row.mcs = Number(fd.get('mcs') || 0);
            row.looseBags = Number(fd.get('looseBags') || 0);
            row.totalWeight = Number(fd.get('totalWeight') || 0);
            row.balanceWeight = Number(fd.get('balanceWeight') || 0);
            row.remarks = fd.get('remarks');

            modal.close();
            if (typeof onSuccessCallback === 'function') {
              onSuccessCallback(this.state.freezingRunsList);
            }
            Toast.show(`Freezing run ${row.arrivalLotCode} updated`, 'success');
          }
        }
      ]
    });
  },

  // 11. FREEZING DETAILS MODAL (EXACT 25 FIELDS DISPLAY)
  showFreezingDetailModal(row) {
    Modal.open({
      title: `Freezing Run Details: ${row.arrivalLotCode || row.runCode}`,
      size: '2xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Hero Header Banner -->
          <div class="p-3 bg-[#F4F5F7] border border-[#DFE1E6] rounded-lg flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">ARRIVAL / LOT CODE</span>
              <div class="text-base font-extrabold text-[#0284C7] font-mono">${row.arrivalLotCode || row.runCode}</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">AB STATUS</span>
              <div>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  (row.abStatus || '').includes('UNDER') ? 'bg-[#FFF0B3] text-[#172B4D]' : 'bg-[#E3FCEF] text-[#006644]'
                }">${row.abStatus || row.qcStatus || 'PASSED (AB Negative)'}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Dates & Organization -->
          <div class="bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <h4 class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-2">PRODUCTION & FACILITY SPECS</h4>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCTION DATE</span>
                <span class="font-semibold text-xs text-[#172B4D]">${row.productionDate || row.date}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TRANSACTION DATE</span>
                <span class="font-semibold text-xs text-[#172B4D]">${row.transactionDate || row.productionDate || '-'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">ARRIVAL DATE</span>
                <span class="font-semibold text-xs text-[#172B4D]">${row.arrivalDate || '-'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCTION PLANT</span>
                <span class="font-bold text-xs text-[#172B4D]">${row.productionPlant || row.plant || '-'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GROUP</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAE6FF] text-[#403294]">${row.group || 'Group A'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STOCK BELONGS TO</span>
                <span class="font-semibold text-xs text-[#172B4D]">${row.stockBelongsTo || 'Devi Fisheries Ltd (DFL)'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SHIFT</span>
                <span class="font-semibold text-xs text-[#172B4D]">${row.shift || 'Shift A (Day)'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PO NUMBER</span>
                <span class="font-mono font-bold text-xs text-[#0284C7]">${row.poNumber || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Raw Material, Soaking & Freezing -->
          <div class="bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <h4 class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-2">RAW MATERIAL & PROCESSING</h4>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">VARIETY</span>
                <span class="font-bold text-xs text-[#172B4D]">${row.variety || row.product || '-'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">GRADE</span>
                <span class="font-mono font-bold text-xs text-[#172B4D]">${row.grade || '-'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">FREEZING TYPE</span>
                <span class="font-semibold text-xs text-[#0284C7]">${row.freezingType || 'IQF'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SOAKING</span>
                <span class="font-semibold text-xs text-[#172B4D]">${row.soaking || 'No (Unsoaked)'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PRODUCT CATEGORY</span>
                <span class="font-semibold text-xs text-[#172B4D]">${row.productCategory || 'Raw Frozen'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">BATCH CODES</span>
                <span class="font-mono text-xs font-semibold text-[#5E6C84]">${row.batchCodes || '-'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">HL COUNT</span>
                <span class="font-mono font-bold text-xs">${row.hlCount || '-'}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">TUB NO</span>
                <span class="font-mono font-bold text-xs text-[#0284C7]">${row.tubNo || '-'}</span>
              </div>
            </div>
          </div>

          <!-- Section 3: Packaging & Weight Balances -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FAFBFC] p-3 border border-[#DFE1E6] rounded-lg">
            <div class="bg-white p-2.5 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">PACKING STYLE</div>
              <div class="text-sm font-bold text-[#172B4D] mt-0.5">${row.packingStyle || '-'}</div>
              <div class="text-[11px] text-[#5E6C84] mt-0.5">Type: ${row.packingType || 'Cartons'}</div>
            </div>
            <div class="bg-white p-2.5 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">MASTER CARTONS (MCS)</div>
              <div class="text-lg font-black text-[#172B4D] font-mono mt-0.5">${Number(row.mcs || row.cartons || 0).toLocaleString()}</div>
              <div class="text-[11px] text-[#5E6C84] mt-0.5">Loose Bags: ${row.looseBags || 0}</div>
            </div>
            <div class="bg-white p-2.5 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">TOTAL WEIGHT</div>
              <div class="text-lg font-black text-[#00875A] font-mono mt-0.5">${Number(row.totalWeight || row.netWeightKg || 0).toFixed(1)} <span class="text-xs font-semibold text-[#6B778C]">Kg</span></div>
            </div>
            <div class="bg-white p-2.5 rounded border border-[#EBECF0]">
              <div class="text-[10px] font-bold text-[#5E6C84] uppercase">BALANCE WEIGHT</div>
              <div class="text-lg font-black text-[#DE350B] font-mono mt-0.5">${Number(row.balanceWeight || 0).toFixed(1)} <span class="text-xs font-semibold text-[#6B778C]">Kg</span></div>
            </div>
          </div>

          <!-- Section 4: Remarks -->
          <div class="bg-white p-3 border border-[#DFE1E6] rounded-lg">
            <span class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-1">REMARKS / PROCESS NOTES</span>
            <p class="text-xs text-[#5E6C84] leading-relaxed">${row.remarks || 'No remarks provided for this freezing run.'}</p>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() }
      ]
    });
  }

};
