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
        if (tabId === 'stock-out' || tabId.includes('stock-out') || tabId.includes('stockout') || tabId.includes('outward')) {
          this.renderStockOut(contentEl);
        } else {
          this.renderStockIn(contentEl);
        }
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
  renderStockOut(container) {
    const fullList = this.state.stockOutList || [];
    let table = null;

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <!-- Clean Page Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Stock Out</h1>
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
      tableTitle: 'Outward Orders',
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
      tableTitle: 'Chamber Storage Locations',
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
      tableTitle: 'Pending Approvals',
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
      tableTitle: 'Inter-Branch Stock Transfers',
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
      tableTitle: 'Finished Goods Shipments',
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
